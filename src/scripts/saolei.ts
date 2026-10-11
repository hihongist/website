// 猫咪扫雷试玩：5×5 棋盘，只有唯一解。
// 每行、每列、每个色块各一只猫，猫和猫不能挨着（斜对角也不行）。
// 文案从 data-msgs 读取，中英文共用这一份代码。

const N = 5;
const REGIONS = ['BBAAA', 'BCDDA', 'CCCDD', 'CCEDD', 'EEEDD'];
const COLOR: Record<string, string> = { A: '#ACF59C', B: '#AFE3FB', C: '#FAA3C0', D: '#F8DB82', E: '#D8A9FA' };
const X_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>';
const CAT_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F29A4A" stroke="#6B4A3A" stroke-width="1.3" stroke-linejoin="round" d="M4.5 11V4.2l4.6 3.4h5.8l4.6-3.4V11a7.5 7.5 0 0 1-15 0Z"/><path fill="#F7A1B5" d="M6 7.4V6l2 1.5ZM18 7.4V6l-2 1.5Z"/><circle cx="9.2" cy="11.6" r="1.3" fill="#3B2A22"/><circle cx="14.8" cy="11.6" r="1.3" fill="#3B2A22"/><path d="M10.8 14.3q1.2 1 2.4 0" stroke="#3B2A22" stroke-width="1.1" fill="none" stroke-linecap="round"/></svg>';

interface Msgs {
  placed: string;
  hint: string;
  row: string;
  col: string;
  region: string;
  touch: string;
  left: string;
  win: string;
  cell: string;
  colors: Record<string, string>;
  states: { cat: string; x: string; empty: string };
}

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));

for (const panel of document.querySelectorAll<HTMLElement>('[data-saolei]')) {
  const msgs = JSON.parse(panel.dataset.msgs ?? '{}') as Msgs;
  const board = panel.querySelector<HTMLElement>('[data-sl-board]')!;
  const msgEl = panel.querySelector<HTMLElement>('[data-sl-msg]')!;
  const countEl = panel.querySelector<HTMLElement>('[data-sl-count]')!;
  let cells: HTMLButtonElement[] = [];
  let state: number[] = [];
  let won = false;

  const edge = (r: number, c: number, dr: number, dc: number) => {
    const rr = r + dr;
    const cc = c + dc;
    if (rr < 0 || cc < 0 || rr >= N || cc >= N) return '0';
    return REGIONS[rr][cc] !== REGIONS[r][c] ? '2.5px' : '0.5px';
  };

  const conflicts = () => {
    const cats = state.flatMap((s, i) => (s === 2 ? [i] : []));
    const bad = new Set<number>();
    let why = '';
    for (let a = 0; a < cats.length; a++) {
      for (let b = a + 1; b < cats.length; b++) {
        const r1 = Math.floor(cats[a] / N), c1 = cats[a] % N;
        const r2 = Math.floor(cats[b] / N), c2 = cats[b] % N;
        let reason = '';
        if (r1 === r2) reason = msgs.row;
        else if (c1 === c2) reason = msgs.col;
        else if (REGIONS[r1][c1] === REGIONS[r2][c2]) reason = fill(msgs.region, { c: msgs.colors[REGIONS[r1][c1]] });
        else if (Math.abs(r1 - r2) <= 1 && Math.abs(c1 - c2) <= 1) reason = msgs.touch;
        if (reason) {
          bad.add(cats[a]);
          bad.add(cats[b]);
          why ||= reason;
        }
      }
    }
    return { cats, bad, why };
  };

  const render = () => {
    const { cats, bad, why } = conflicts();
    cells.forEach((el, i) => {
      const s = state[i];
      const r = Math.floor(i / N);
      const c = i % N;
      el.classList.toggle('x', s === 1);
      el.classList.toggle('cat', s === 2);
      el.classList.toggle('bad', bad.has(i));
      el.setAttribute('aria-label', fill(msgs.cell, {
        r: r + 1,
        c: c + 1,
        color: msgs.colors[REGIONS[r][c]],
        state: s === 2 ? msgs.states.cat : s === 1 ? msgs.states.x : msgs.states.empty,
      }));
      if (el.dataset.s !== String(s)) {
        el.innerHTML = s === 2 ? CAT_SVG : s === 1 ? X_SVG : '';
        el.dataset.s = String(s);
      }
    });
    countEl.textContent = fill(msgs.placed, { n: cats.length });
    msgEl.className = 'sl-msg';
    if (bad.size) {
      msgEl.textContent = why;
      msgEl.classList.add('warn');
    } else if (cats.length === N) {
      won = true;
      board.classList.add('won');
      cats.forEach((i, k) => cells[i].style.setProperty('--d', `${k * 0.08}s`));
      msgEl.textContent = msgs.win;
      msgEl.classList.add('win');
    } else {
      msgEl.textContent = cats.length ? fill(msgs.left, { n: N - cats.length }) : msgs.hint;
    }
  };

  const build = () => {
    board.innerHTML = '';
    cells = [];
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'sl-cell';
        b.setAttribute('role', 'gridcell');
        b.style.setProperty('--cell', COLOR[REGIONS[r][c]]);
        b.style.borderWidth = `${edge(r, c, -1, 0)} ${edge(r, c, 0, 1)} ${edge(r, c, 1, 0)} ${edge(r, c, 0, -1)}`;
        const i = r * N + c;
        b.addEventListener('click', () => {
          if (won) return;
          state[i] = (state[i] + 1) % 3;
          render();
        });
        board.append(b);
        cells.push(b);
      }
    }
    state = Array(N * N).fill(0);
    won = false;
    board.classList.remove('won');
    render();
  };

  panel.querySelector('[data-sl-reset]')?.addEventListener('click', build);
  build();
}
