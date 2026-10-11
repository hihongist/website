// 首页与详情页共用的小交互：主题切换、菜单栏时钟、移动端菜单、卡片光斑、复制邮箱。
(function () {
  const root = document.documentElement;

  // ---- 主题：跟随系统，手动切换后记住选择 ----
  const THEME_KEY = "proto-theme";
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (e) {}
  const effectiveTheme = () =>
    root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = effectiveTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      document.dispatchEvent(new CustomEvent("themechange"));
    });
  });

  // ---- 菜单栏时钟，格式同 macOS 中文菜单栏：10月11日 周日 14:32 ----
  const clock = document.querySelector("[data-clock]");
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    if (!clock) return;
    const d = new Date();
    clock.innerHTML =
      `<span class="clock-date">${d.getMonth() + 1}月${d.getDate()}日 周${"日一二三四五六"[d.getDay()]} </span>` +
      `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  tick();
  setInterval(tick, 15000);

  // ---- 移动端菜单 ----
  const bar = document.querySelector(".menubar");
  const menuBtn = document.querySelector("[data-menu-btn]");
  if (bar && menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = bar.dataset.open !== "true";
      bar.dataset.open = String(open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    bar.querySelectorAll(".menus a").forEach((a) =>
      a.addEventListener("click", () => {
        bar.dataset.open = "false";
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---- 卡片跟随鼠标的光斑 ----
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest && e.target.closest(".spot");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  // ---- 复制按钮 ----
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = document.querySelector(btn.dataset.copy);
      if (!src) return;
      const text = src.textContent.trim();
      const done = () => {
        const old = btn.textContent;
        btn.textContent = "已复制";
        setTimeout(() => (btn.textContent = old), 1600);
      };
      const fallback = () => {
        const range = document.createRange();
        range.selectNodeContents(src);
        const sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
    });
  });
})();
