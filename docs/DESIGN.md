# hongist.com 设计规划 v1.0

> 原型阶段（v0.1–v0.5）已结束，正式网站代码在 `src/`，见 README。
> v0.2 按真实作品重排：只保留「小工具」和「小游戏」两个板块，去掉了 v0.1 里的主推、Mac / iPhone 分区、更新日志和产品详情页。
> v0.3 换上三款小工具的真实图标、截图和文案（取自各自官网）。

---

## 1. 现有作品

| 类型 | 名称 | 一句话 | 平台 | 状态 | 地址 | 旧地址 |
|------|------|--------|------|------|-----------|--------|
| 小工具 | DropEdge | 暂存，就放手边。 | macOS 14+ | 已上线 | dropedge.hongist.com | dropedge.chiuist.com（网页 301，App 用的更新源和数据照常） |
| 小工具 | ThenDo | 待办，就做待办。 | Mac + iPhone | 已上线 | then-do.hongist.com | then-do.chiuist.com（网页 301，App 用的更新源和数据照常） |
| 小工具 | 日历即日历 Simply Calendar | 日历，就看日历。 | iPhone（iOS 17+）+ Mac（macOS 14+） | 已上线 | s-calendar.hongist.com | s-calendar.chiuist.com（网页 301，App 用的更新源和数据照常） |
| 小工具 | SafeShot Go | 分享前，先打码。 | iPhone + iPad，iOS 16+ | 已上线 | safeshot.hongist.com（App Store id6780211041） | — |
| 游戏 | 猫咪扫雷（英文名 Cat Stars） | 每一行、每一列、每个色块里，都藏着一只猫。 | 微信小游戏；iOS App Store（中国大陆以外，id6775446731） | 已上线 | 微信内 / App Store | — |
| 游戏 | 猫咪砸砸乐（英文名 Cat Smash，App Store 全名 Cat Smash: Knock It Off!） | 猫咪用耳朵当弹弓，拆家拆出一张账单。 | iOS App Store（审核前）；微信小游戏（备案中） | 开发中 | 游戏主页 hongist.com/catsmash/ | — |

以后新增作品，只要往上表加一行。

---

## 2. 网站结构

一个首页就够了。小工具都有自己的官网，下载、说明、隐私政策都放在各自的子域名上，主站只负责展示和导流。

游戏不一样：游戏没有安装包和更新源要托管，只需要“主页 + 隐私政策 + 支持”三页，所以直接放在主站的路径下（猫咪砸砸乐是 `/catsmash/`），不单独开子域名。这样新游戏不用每次配域名，广告联盟要的 `app-ads.txt` 也只需要主域名根目录放一份。想要好记的短网址，可以在 Cloudflare 上把 `catsmash.hongist.com` 301 跳转到 `hongist.com/catsmash/`。

```
hongist.com/
├── 菜单栏导航         小工具 · 小游戏 · 关于
├── 首屏              一句话介绍 + Dock（全部作品图标）
├── 小工具            3 张卡片，点击跳到各自官网
├── 小游戏            猫咪扫雷（可试玩）· 猫咪砸砸乐（开发中）· 下一款（占位）
├── 关于 + 联系        简介、邮箱、订阅新作通知
└── 页脚

dropedge.hongist.com   ┐
then-do.hongist.com    ├ 各工具自己的官网（仓库 hihongist/tool-sites）
s-calendar.hongist.com ┘
```

### 首页各部分

| 部分 | 内容 | 说明 |
|------|------|------|
| 首屏 | 左边大标题，右边作品界面拼成的画面（四周渐隐融进背景），Dock 紧跟在下面收尾；高度随内容 | 顶部胶囊显示「正在开发：猫咪砸砸乐」，点击跳到对应卡片 |
| **Dock** | 3 个工具图标 \| 2 个游戏图标 \| 虚线「+」 | 鼠标靠近放大，点击弹跳后滚到对应作品；已上线的图标下有小圆点，开发中的没有 |
| 小工具 | 一排四张卡片（平板两列、手机单列），每张顶部是一块迷你 Mac 桌面或手机展示区：ThenDo、日历即日历放真实截图，DropEdge 画出两种打开方式：拖到屏幕边缘的暂存架、晃一晃文件弹出的暂存框；下面是图标、一句话、介绍、价格方式、官网地址栏 | 地址栏做成 Safari 地址栏的样子，整张卡片可点 |
| 猫咪扫雷 | 左边是能直接玩的 5×5 棋盘，右边是规则、亮点、小程序码 | 试玩只有唯一解；放错会说明原因，通关后引导去微信搜索 |
| 猫咪砸砸乐 | 游戏场景插画 + 拆家账单 + 「上线时通知我」 | 画面配色取自游戏原型 |
| 下一款 | 虚线卡片 | 作品多了以后，这里自动被新卡片顶掉 |

---

## 3. 视觉方向（沿用 v0.1）

- 网站本身是一台 Mac 桌面：菜单栏导航、Dock 作品目录、毛玻璃面板。
- 深色优先，浅色同样完整，跟随系统也能手动切换。
- 两种识别色：**小工具用橙色**，**小游戏用微信绿**，标题里「小工具」「小游戏」的渐变也是这两种颜色。
- 游戏卡片里使用游戏自己的配色和字体（站酷快乐体、马卡龙色块、猫爬架场景），让每款游戏保留自己的个性。

---

## 4. 内容模型

作品数据集中放在一个文件里，首页的 Dock、卡片、页脚都从这里生成：

```yaml
# src/data/works.yaml
- slug: dropedge
  type: tool
  name: DropEdge
  tagline: 暂存，就放手边。
  platform: macOS 14+
  pricing: [官网版免费, App Store 版永久买断]
  url: https://dropedge.hongist.com
  icon: ./icons/dropedge.png
  status: live

- slug: saolei
  type: game
  name: 猫咪扫雷
  tagline: 每一行、每一列、每个色块里，都藏着一只猫。
  wxSearch: 猫咪扫雷
  miniCode: ./codes/saolei.png  # 微信公众平台生成的小程序码
  facts: [300 关 · 15 章, 每日挑战, 微信好友排行, 深色模式 · 色弱辅助, 没有插屏广告]
  status: live

- slug: zaza
  type: game
  name: 猫咪砸砸乐
  status: dev
```

---

## 5. 技术方案

| 项目 | 建议 |
|------|------|
| 框架 | **已定**：Astro 7，纯静态输出。作品数据在 `src/data/works.ts`，加作品不用改模板 |
| 语言 | **已定**：中文 `/`、英文 `/en/`，菜单栏可切换，页面互相声明 hreflang，sitemap 同时收录两种语言 |
| 字体 | **已定**：全部打包在站内（不依赖 Google Fonts），中文正文用系统字体；站酷快乐体按字符分片，只下载页面用到的部分 |
| 部署 | 待定：Cloudflare Pages / Vercel / 腾讯云 EdgeOne Pages 都可以，构建命令 `npm run build`，输出 `dist` |
| 子域名 | **已定**：各工具官网在 `*.hongist.com`（仓库 hihongist/tool-sites，Worker `tool-sites`，SafeShot Go 也在这里）；旧的 `*.chiuist.com` 网页 301 跳转，已发布 App 用到的更新源、下载和数据照常返回 |
| 国内访问 | 如果主要用户在国内，主站可放腾讯云 EdgeOne / COS，需要 ICP 备案 |
| 统计 | Umami 或 Plausible |
| 订阅 | 目前是「发邮件订阅」按钮（打开邮件客户端写信给 hihongist@gmail.com）；以后量大了再换 Buttondown 等邮件服务 |

### 微信小游戏相关

- 网页不能直接拉起小游戏，主要靠**小程序码**（微信公众平台后台生成）和「微信搜一搜」。
- 在微信内置浏览器里打开网站时，小程序码一般可以长按识别，这是从网站进入游戏最顺的路径（上线前在真机上确认一次）。
- 猫咪扫雷的试玩棋盘只是网页上的一个小演示，和正式游戏的代码无关。

---

## 6. 需要你提供

- [x] 三个小工具的介绍、平台、图标、截图（已从各自官网获取）
- [x] DropEdge 文案按新版两种打开方式重写，和 ThenDo、日历即日历对齐成「X，就……」句式
- [x] 猫咪扫雷的新图标（扁平描边版，和猫咪砸砸乐成套；提示词见 `docs/saolei-icon-prompt.md`）
- [ ] 猫咪扫雷的小程序码图片（没有时卡片只显示「在微信里搜索」）
- [x] 两款游戏的英文名：Cat Stars（已上架 App Store）、Cat Smash（原定 Off the Table，2026-10-11 建 App Store 条目时改为 Cat Smash: Knock It Off!）
- [x] SafeShot Go 已加入小工具；怪谈修复铺不放（小游戏以猫咪为主题）
- [x] 联系邮箱：hihongist@gmail.com
- [ ] 公众号名称
- [ ] 主要用户在国内还是海外（决定是否备案、放哪里）
- [x] 中英双语：需要，已实现
- [x] 页脚去掉备案号和原型版本说明
