// Dock：鼠标靠近时图标像 macOS 一样放大；点击图标先弹跳两下，再滚到对应作品。
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const dock = document.getElementById('dock');

if (dock) {
  const items = Array.from(dock.querySelectorAll<HTMLAnchorElement>('.dock-item'));

  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    const RANGE = 160;
    const MAX = 0.75;
    dock.addEventListener('mousemove', (e) => {
      for (const it of items) {
        const r = it.getBoundingClientRect();
        const t = Math.max(0, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / RANGE);
        it.style.setProperty('--s', (1 + MAX * Math.sin((t * Math.PI) / 2) ** 2).toFixed(3));
      }
    });
    dock.addEventListener('mouseleave', () => items.forEach((it) => it.style.setProperty('--s', '1')));
  }

  for (const it of items) {
    it.addEventListener('click', (e) => {
      const target = document.querySelector<HTMLElement>(it.getAttribute('href') ?? '');
      if (!target) return;
      e.preventDefault();
      const go = () => {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        target.classList.remove('flash');
        void target.offsetWidth;
        target.classList.add('flash');
      };
      if (reduce) return go();
      it.classList.remove('bounce');
      void it.offsetWidth;
      it.classList.add('bounce');
      setTimeout(go, 620);
    });
  }
}
