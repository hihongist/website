// 全站共用的小交互：主题切换、菜单栏时钟、移动端菜单、卡片光斑、复制邮箱、导航高亮。
const root = document.documentElement;

// ---- 主题：默认跟随系统，手动切换后记住 ----
const effectiveTheme = () =>
  root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  });
});

// ---- 菜单栏时钟，格式跟随 macOS 菜单栏 ----
const clock = document.querySelector<HTMLElement>('[data-clock]');
const isZh = root.lang.startsWith('zh');
const pad = (n: number) => String(n).padStart(2, '0');
const tick = () => {
  if (!clock) return;
  const d = new Date();
  if (isZh) {
    clock.innerHTML = `<span class="clock-date">${d.getMonth() + 1}月${d.getDate()}日 周${'日一二三四五六'[d.getDay()]} </span>${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } else {
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
    const h = d.getHours() % 12 || 12;
    clock.innerHTML = `<span class="clock-date">${day} ${mon} ${d.getDate()} </span>${h}:${pad(d.getMinutes())} ${d.getHours() < 12 ? 'AM' : 'PM'}`;
  }
};
tick();
setInterval(tick, 15000);

// ---- 移动端菜单 ----
const bar = document.querySelector<HTMLElement>('.menubar');
const menuBtn = document.querySelector<HTMLElement>('[data-menu-btn]');
if (bar && menuBtn) {
  const setOpen = (open: boolean) => {
    bar.dataset.open = String(open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setOpen(bar.dataset.open !== 'true'));
  bar.querySelectorAll('.menus a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

// ---- 卡片跟随鼠标的光斑 ----
document.addEventListener('pointermove', (e) => {
  const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spot');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
});

// ---- 复制按钮 ----
document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = document.querySelector(btn.dataset.copy ?? '');
    if (!src) return;
    const done = () => {
      const old = btn.textContent;
      btn.textContent = btn.dataset.copied ?? old;
      setTimeout(() => (btn.textContent = old), 1600);
    };
    const selectText = () => {
      const range = document.createRange();
      range.selectNodeContents(src);
      const sel = getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(src.textContent?.trim() ?? '').then(done, selectText);
    else selectText();
  });
});

// ---- 菜单栏高亮当前所在区块 ----
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.menus a'));
if ('IntersectionObserver' in window && links.length) {
  const byId = new Map(links.map((a) => [a.getAttribute('href')!.slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        links.forEach((a) => a.removeAttribute('aria-current'));
        byId.get(en.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  byId.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}
