# hihongist 个人作品网站

展示独立开发的 Mac / iPhone 小工具和微信小游戏。

- 设计规划：[`docs/DESIGN.md`](docs/DESIGN.md)
- 高保真原型：[`prototype/`](prototype/)
  - `index.html`：首页（菜单栏导航、可交互 Dock、主推作品、Mac / iPhone / 小游戏三个板块、更新日志、关于）
  - `app.html`：产品详情页模板（含 App Store 要求的技术支持和隐私政策）

## 本地预览

```bash
python3 -m http.server 8000 --directory prototype
# 打开 http://localhost:8000
```

原型是纯 HTML / CSS / JS，不需要构建。字体从 Google Fonts 加载。
