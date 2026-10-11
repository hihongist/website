// 首屏右侧画面：鼠标移动时各层按远近轻微错位（视差）。触屏和“减少动态效果”下不启用。
const visual = document.querySelector<HTMLElement>('.hero-visual');
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (visual && fine && !reduce) {
  let raf = 0;
  window.addEventListener('pointermove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      visual.style.setProperty('--px', ((e.clientX / innerWidth - 0.5) * 2).toFixed(3));
      visual.style.setProperty('--py', ((e.clientY / innerHeight - 0.5) * 2).toFixed(3));
    });
  });
}
