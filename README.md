# hongist.com

Hong 的个人作品网站：Mac 小工具和微信小游戏。中文版在 `/`，英文版在 `/en/`。

用 [Astro](https://astro.build) 生成纯静态页面，没有服务器端代码。

## 本地开发

需要 Node 22.12 或更高版本。

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:4321
npm run build    # 生成静态文件到 dist/
npm run preview  # 预览 dist/
```

## 目录

```
src/
├── data/works.ts       全部作品：名称、图标、介绍、链接（中英文都在这里）
├── i18n/ui.ts          页面上的固定文案（中英文）
├── components/         菜单栏、首屏和 Dock、小工具、小游戏、关于、页脚
├── scripts/            Dock 放大、猫咪扫雷试玩、主题切换等交互
├── styles/             global.css（配色、字体、通用组件）、home.css（首页各区块）
├── layouts/Base.astro  <head>：标题、描述、语言互链（hreflang）
└── pages/              index.astro（中文）、en/index.astro（英文）
public/works/           作品图标和截图
docs/                   设计规划、图标提示词
```

## 常见改动

- **加一款作品 / 改介绍**：改 `src/data/works.ts`。Dock、卡片、页脚会一起更新。
- **改页面文案**：改 `src/i18n/ui.ts`，中英文各一份。
- **换图标**：把 256×256 的 PNG 放进 `public/works/`，和其他图标一样做好圆角和边缘质感。
- **加猫咪扫雷的小程序码**：把图片放进 `public/works/`，在 `works.ts` 里填上 `miniCode` 的路径，卡片会自动显示「微信扫码即玩」。

## 部署

任何静态托管都可以：构建命令 `npm run build`，输出目录 `dist`，Node 版本 22（见 `.nvmrc`）。

- 字体（Bricolage Grotesque、JetBrains Mono、站酷快乐体）打包在站内，不依赖 Google Fonts，国内访问不受影响。
- 站点地址写在 `astro.config.mjs` 的 `site`，用于生成 sitemap 和语言互链。
