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
├── data/catsmash.ts    猫咪砸砸乐的游戏主页、隐私政策、支持页的全部文案（中英文）
├── i18n/ui.ts          页面上的固定文案（中英文）
├── components/         菜单栏、首屏和 Dock、小工具、小游戏、关于、页脚
├── components/catsmash/ 猫咪砸砸乐的三个页面：Landing（主页）、Privacy（隐私政策）、Support（支持）
├── scripts/            Dock 放大、猫咪扫雷试玩、主题切换等交互
├── styles/             global.css（配色、字体、通用组件）、home.css（首页各区块）、catsmash.css（游戏页面）
├── layouts/Base.astro  <head>：标题、描述、语言互链（hreflang）
└── pages/              index.astro（中文）、en/index.astro（英文）、catsmash/ 和 en/catsmash/（游戏页面）
public/works/           作品图标和截图（猫咪砸砸乐的游戏截图在 works/catsmash/）
public/app-ads.txt      广告联盟（AdMob）用来确认“这些 App 是这个网站的开发者的”，不要删
docs/                   设计规划、图标提示词
```

## 常见改动

- **加一款作品 / 改介绍**：改 `src/data/works.ts`。Dock、卡片、页脚会一起更新。
- **改页面文案**：改 `src/i18n/ui.ts`，中英文各一份。
- **换图标**：把 256×256 的 PNG 放进 `public/works/`，和其他图标一样做好圆角和边缘质感。
- **加猫咪扫雷的小程序码**：把图片放进 `public/works/`，在 `works.ts` 里填上 `miniCode` 的路径，卡片会自动显示「微信扫码即玩」。

## 猫咪砸砸乐的页面

| 页面 | 中文 | 英文 |
|------|------|------|
| 游戏主页 | `/catsmash/` | `/en/catsmash/` |
| 隐私政策 | `/catsmash/privacy/` | `/en/catsmash/privacy/` |
| 支持与常见问题 | `/catsmash/support/` | `/en/catsmash/support/` |
| 挑战链接落地页 | `/catsmash/c/` | `/en/catsmash/c/` |

- 这三页的地址填在了 App Store Connect（营销网址、隐私政策网址、技术支持网址）和 AdMob 的同意弹窗里，**不要改地址**。
- 全部文案在 `src/data/catsmash.ts`。隐私政策和游戏里“设置 → 隐私政策”的内容要保持一致，改一处要同时改另一处。
- **游戏上架后**：把 `src/data/catsmash.ts` 里 `csStore.live` 改成 `true`，主页上的“即将上线”就会换成 App Store 下载按钮；再把 `src/i18n/ui.ts` 里游戏的状态文案从“开发中”改成已上线。
- **挑战链接**（1.1 起）：游戏里“晒账单”分享的是 `https://hongist.com/catsmash/c/?from=bill&lv=12&s=2&b=1288` 这样的链接。装了游戏的 iPhone 点它会直接打开游戏进入这一关，靠的是 `public/.well-known/apple-app-site-association`（苹果的通用链接验证文件，里面写着 App 的团队 ID 和包名，**不要删、不要改路径**）；没装游戏的打开 `/catsmash/c/` 这一页，看到好友的成绩和下载按钮。`public/_headers` 里给这个文件指定了 JSON 类型。
- 以后再做新游戏，照着 `catsmash` 这一套加一组页面就行；`public/app-ads.txt` 全站共用一份，不用每个游戏单独放。

## 部署

Cloudflare Workers（Worker 名 `website`）连接本仓库，推送后自动部署。部署命令是 `npx wrangler deploy`，
它按 `wrangler.jsonc` 先运行 `npm run build`，再把 `dist` 作为纯静态文件上传；`public/_headers` 给
`/_astro/*` 加长期缓存。Node 版本 22（见 `.nvmrc`）。换别的静态托管也可以：构建命令 `npm run build`，输出目录 `dist`。

- 字体（标题用 Geist，另有 JetBrains Mono、站酷快乐体）打包在站内，不依赖 Google Fonts，国内访问不受影响。
- 站点地址写在 `astro.config.mjs` 的 `site`，用于生成 sitemap 和语言互链。
