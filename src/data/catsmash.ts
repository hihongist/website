// 猫咪砸砸乐（Cat Smash: Knock It Off!）的游戏主页、隐私政策、支持页的全部文案，中英文各一份。
// 页面地址：/catsmash/、/catsmash/privacy/、/catsmash/support/，英文版在 /en/ 下面。
// App Store Connect 里填的“隐私政策网址”“技术支持网址”“营销网址”就是这三页，改地址前先想清楚。
import type { Lang } from '../i18n/ui';

type L<T = string> = Record<Lang, T>;

export const csPaths = {
  home: { zh: '/catsmash/', en: '/en/catsmash/' } as L,
  privacy: { zh: '/catsmash/privacy/', en: '/en/catsmash/privacy/' } as L,
  support: { zh: '/catsmash/support/', en: '/en/catsmash/support/' } as L,
  // 挑战链接的落地页：游戏里“晒账单”分享出去的链接。装了游戏的 iPhone 点链接直接打开游戏（通用链接，
  // 靠 public/.well-known/apple-app-site-association），没装的打开这一页。地址写死在 App 里，不能改
  challenge: { zh: '/catsmash/c/', en: '/en/catsmash/c/' } as L,
};

// 上架后把 live 改成 true，主页上的“即将上线”就会换成 App Store 下载按钮
export const csStore = {
  live: false,
  url: 'https://apps.apple.com/app/id6821556219',
};

export const csEmail = 'hihongist@gmail.com';
export const csIcon = '/works/zaza-icon.png';

const shot = (name: string) => ({ zh: `/works/catsmash/${name}-zh.webp`, en: `/works/catsmash/${name}-en.webp` }) as L;

// ---------------------------------------------------------------------------
// 游戏主页
// ---------------------------------------------------------------------------
export const csHome = {
  zh: {
    title: '猫咪砸砸乐 — 主人出门了，开始拆家！',
    description: '猫咪用耳朵当弹弓，把毛线球射向桌上的玻璃杯、花瓶和快递盒。200 关物理益智闯关，6 只猫，每日挑战。iPhone 版即将上线 App Store。',
    name: '猫咪砸砸乐',
    altName: 'Cat Smash: Knock It Off!',
    eyebrow: 'iPhone 游戏 · 物理弹射 · 益智闯关',
    tagline: '主人出门了，开始拆家！',
    lead: '猫咪蹲在猫爬架上，用耳朵当弹弓，把毛线球射向桌上的玻璃杯、花瓶和快递盒。全部拆完，喵星拆迁办会给你开一张拆家账单。用的毛线球越少，星星越多。',
    storeBtn: '在 App Store 下载',
    soon: '即将上线 App Store',
    notify: '上线时通知我',
    notifySubject: '猫咪砸砸乐上线时通知我',
    chips: ['免费', '200 关 · 6 章', '6 只猫', '每日挑战', '不用注册'],
    shotsTitle: ['拉弓，松手，', '哗啦一片。'],
    shots: [
      { src: shot('home'), cap: '主人一出门，猫就上桌了' },
      { src: shot('aim'), cap: '按住往后拉，瞄准线告诉你毛线球飞到哪' },
      { src: shot('smash'), cap: '一个毛线球，砸出一串连锁' },
      { src: shot('bill'), cap: '拆完结账：喵星拆迁办的拆家账单' },
      { src: shot('cats'), cap: '用小鱼干领养 6 只猫' },
    ],
    featTitle: ['好上手，', '想三星得动脑。'],
    feats: [
      { h: '一根手指就能玩', p: '按住屏幕往后拉，松手发射。瞄准线会画出毛线球的落点，拉得越远飞得越远。' },
      { h: '每样东西手感不同', p: '玻璃杯一碰就碎，花瓶要用力砸，纸箱很轻会弹开，猫罐头会滚，书一推倒一排。' },
      { h: '找到那块关键的木板', p: '打掉撑着的木板，上面的东西全掉下来。用的毛线球越少，星星越多。' },
      { h: '卡关有办法', p: '大毛线球一次推一排，炸炸毛球碰到就炸。实在过不去，让小猫把每一发的路线画给你。' },
      { h: '每天一关新挑战', p: '每日挑战天天换规则：毛线球更少的一天、全是大毛线球的一天、全是炸炸毛球的一天。' },
      { h: '拆出来的都是你的', p: '25 个成就、每章 3 个星星宝箱，攒小鱼干领养新猫、换毛线球颜色。' },
    ],
    links: { privacy: '隐私政策', support: '支持与常见问题', back: '回到 hongist' },
    nav: { home: '游戏主页', privacy: '隐私政策', support: '支持' },
  },
  en: {
    title: 'Cat Smash: Knock It Off! — the human’s out, smash time',
    description: 'A cat uses its ears as a slingshot and fires yarn balls at the glasses, vases and boxes on the table. A 200-level physics puzzle with six cats and a daily challenge. Coming soon to the App Store for iPhone.',
    name: 'Cat Smash',
    altName: 'Knock It Off!',
    eyebrow: 'iPhone game · Physics puzzle',
    tagline: 'The human’s out. Smash time!',
    lead: 'A cat perches on its cat tree and uses its ears as a slingshot, firing yarn balls at the glasses, vases and boxes on the table. Knock everything off and Meow Demolition Co. hands you the damage bill. The fewer yarn balls you use, the more stars you earn.',
    storeBtn: 'Download on the App Store',
    soon: 'Coming soon to the App Store',
    notify: 'Tell me when it launches',
    notifySubject: 'Tell me when Cat Smash launches',
    chips: ['Free', '200 levels · 6 chapters', '6 cats', 'Daily challenge', 'No sign-up'],
    shotsTitle: ['Pull back, let go,', 'watch it all come down.'],
    shots: [
      { src: shot('home'), cap: 'The moment the human leaves, the cat is on the table' },
      { src: shot('aim'), cap: 'Pull back and the aim line shows where the yarn will land' },
      { src: shot('smash'), cap: 'One yarn ball, one long chain reaction' },
      { src: shot('bill'), cap: 'Every level ends with a damage bill' },
      { src: shot('cats'), cap: 'Adopt six cats with the fish you earn' },
    ],
    featTitle: ['Easy to pick up,', 'tricky to three-star.'],
    feats: [
      { h: 'One finger is all you need', p: 'Press, pull back and let go. The aim line traces where the yarn ball will land; pull farther to throw farther.' },
      { h: 'Everything breaks differently', p: 'Glasses shatter at a touch, vases need a hard hit, boxes are light and bouncy, cans roll, and books topple in a row.' },
      { h: 'Find the plank that matters', p: 'Knock out the plank holding things up and everything on it comes down. Fewer yarn balls means more stars.' },
      { h: 'Never stuck for long', p: 'Big Yarn bowls over a whole row and Boom Yarn explodes on impact. Still stuck? Let the cat draw the path for every shot.' },
      { h: 'A new challenge every day', p: 'The daily challenge changes the rules: a tight-budget day, a Big Yarn day, a Boom Yarn party.' },
      { h: 'Plenty to collect', p: '25 achievements, three star chests per chapter, and fish to spend on new cats and yarn colors.' },
    ],
    links: { privacy: 'Privacy Policy', support: 'Support & FAQ', back: 'Back to hongist' },
    nav: { home: 'Game', privacy: 'Privacy', support: 'Support' },
  },
} as const;

// ---------------------------------------------------------------------------
// 隐私政策。和游戏里“设置 → 隐私政策”的内容一致（cat-smash-ios/web/game.js 的 PRIVACY_IOS、js/i18n.js 的 L.PRIVACY），
// 改一处要同时改另一处。
// ---------------------------------------------------------------------------
type Block = { p: string } | { ul: string[] } | { link: [string, string] };
export interface LegalDoc {
  title: string;
  description: string;
  heading: string;
  updated: string;
  intro: string[];
  sections: { h: string; body: Block[] }[];
}

const GOOGLE_PRIVACY = 'https://policies.google.com/privacy';
const GOOGLE_PARTNERS = 'https://policies.google.com/technologies/partner-sites';

export const csPrivacy: L<LegalDoc> = {
  zh: {
    title: '隐私政策 — 猫咪砸砸乐',
    description: '猫咪砸砸乐（Cat Smash: Knock It Off!）的隐私政策：游戏不收集个人信息，进度只存在设备里；广告由 Google AdMob 提供。',
    heading: '猫咪砸砸乐隐私政策',
    updated: '最近更新：2026-10-14',
    intro: [
      '本隐私政策适用于 iOS 游戏 Cat Smash: Knock It Off!（中文名：猫咪砸砸乐，以下简称“本游戏”）。我们重视你的隐私，尽量不处理个人信息。',
      '微信小游戏版的隐私保护指引，请在游戏内“设置 → 隐私保护指引”查看。',
    ],
    sections: [
      {
        h: '1. 我们收集的信息',
        body: [
          { p: '本游戏是一款单机物理益智游戏，没有自己的服务器，不需要注册或登录。开发者不收集姓名、邮箱、电话、通讯录、照片、精确位置等个人身份信息。' },
          { p: '游戏进度（关卡、星星、小鱼干、道具、猫咪和毛线球、签到、成就、每日挑战记录）和设置（音效、音乐、振动）只保存在你的设备本地，用于下次继续游戏，不会上传到任何服务器（登录 Game Center 时上传的成绩和成就见第 6 节）。' },
        ],
      },
      {
        h: '2. 广告与第三方服务',
        body: [
          { p: '本游戏免费，通过 Google AdMob 展示广告。激励视频只在你主动点击“看视频”时播放，用来多拿毛线球、开启提示或让奖励翻倍；不看广告也可以玩完全部关卡。关卡之间偶尔会出现插屏广告。' },
          { p: '为了投放广告、控制频次、防止作弊、统计和归因，Google AdMob 可能按照它自己的政策处理以下信息：' },
          { ul: ['设备标识符（其中广告标识符 IDFA 只有在你允许跟踪时才能读取）', 'IP 地址，以及由它推断出的大致地区', '设备型号、系统版本等设备信息', '广告的展示和点击情况', '崩溃和性能诊断数据'] },
          { p: '这些信息由 Google 处理，开发者拿不到能识别你身份的信息。详见：' },
          { link: ['Google 隐私政策', GOOGLE_PRIVACY] },
          { link: ['Google 如何使用合作伙伴网站或应用的信息', GOOGLE_PARTNERS] },
        ],
      },
      {
        h: '3. 跟踪与广告标识符',
        body: [
          { p: '第一次打开游戏时，iOS 会询问是否“允许跟踪”（App Tracking Transparency）。选择“要求 App 不跟踪”完全不影响游戏，只是看到的广告不再按兴趣推荐。之后可以在 iPhone 的“设置 → 隐私与安全性 → 跟踪”里随时更改。' },
          { p: '如果你在欧洲经济区、英国或瑞士，第一次打开时还会看到广告同意弹窗；之后可以在游戏的“设置 → 广告隐私选项”里随时修改或撤回同意。' },
        ],
      },
      {
        h: '4. 权限使用',
        body: [{ p: '本游戏不申请相机、麦克风、相册、通讯录、精确定位等敏感权限。游戏会使用系统的触感反馈（振动），可以在游戏的“设置”里关闭。' }],
      },
      {
        h: '5. 分享、挑战链接与评分',
        body: [
          { p: '你点击“晒账单”时会打开系统的分享面板，把分享的文字、拆家账单图片和一个挑战链接交给你选择的 App 发送。挑战链接里只有关卡号、用了几发毛线球和账单金额，好友点开就能挑战同一关；链接里没有任何能识别你的信息。分享给谁由你决定，本游戏不会知道。' },
          { p: '你点击“给个好评”会打开 App Store 的评价页面；通关时偶尔出现的评分弹窗由系统提供。评分和评论由 Apple 处理。' },
        ],
      },
      {
        h: '6. Game Center 排行榜和成就',
        body: [
          { p: '如果你在 iPhone 上登录了 Apple 的 Game Center，本游戏会把你的通关关卡数、累计拆家账单、最高连锁和成就进度上传到 Game Center，用来显示排行榜、成就和好友挑战。排行榜上会显示你的 Game Center 昵称和成绩，谁能看到由你在 Game Center 里的设置决定。' },
          { p: '这些数据由 Apple 处理，适用 Apple 的隐私政策。不登录 Game Center 也能正常玩，可以随时在 iPhone 的“设置 → Game Center”里退出。' },
          { link: ['Apple 隐私政策', 'https://www.apple.com/legal/privacy/'] },
        ],
      },
      {
        h: '7. 数据存储与删除',
        body: [{ p: '本地游戏数据随 App 保存在你的设备上，删除 App 即可全部清除；换设备后不会同步。广告相关的数据由 Google 按其政策保存，你可以按第 3 节的方法限制个性化广告。' }],
      },
      {
        h: '8. 儿童隐私',
        body: [{ p: '本游戏内容健康，没有充值和聊天功能（排行榜和好友挑战由 Apple 的 Game Center 提供）。它面向一般休闲游戏用户，不是专门为儿童设计的，我们不会故意收集儿童的个人信息。如果你认为我们意外处理了儿童的个人信息，请通过下面的邮箱联系我们。' }],
      },
      {
        h: '9. 政策更新',
        body: [{ p: '本政策如有更新，我们会在此页面和游戏内的“设置 → 隐私政策”发布新版本，并更新“最近更新”日期。' }],
      },
      {
        h: '10. 联系我们',
        body: [{ p: '如果你对本隐私政策或数据处理有任何问题，请发邮件给我们：' }, { link: [csEmail, `mailto:${csEmail}`] }],
      },
    ],
  },
  en: {
    title: 'Privacy Policy — Cat Smash: Knock It Off!',
    description: 'Privacy policy for Cat Smash: Knock It Off! The game collects no personal information and keeps progress on your device; ads are served by Google AdMob.',
    heading: 'Cat Smash Privacy Policy',
    updated: 'Last updated: October 14, 2026',
    intro: [
      'This Privacy Policy applies to the iOS game Cat Smash: Knock It Off! (“the game”). We respect your privacy and aim to process as little personal information as possible.',
    ],
    sections: [
      {
        h: '1. Information We Collect',
        body: [
          { p: 'Cat Smash is a single-player physics puzzle game. It has no server of its own and needs no account or sign-in. The developer does not collect personal identity information such as your name, email address, phone number, contacts, photos or precise location.' },
          { p: 'Game progress (levels, stars, fish, boosters, cats and yarn, daily check-ins, achievements, daily challenge records) and settings (sound, music, haptics) are stored only on your device so you can continue next time. Nothing is uploaded to any server, except the scores and achievements sent to Game Center if you are signed in (see section 6).' },
        ],
      },
      {
        h: '2. Advertising and Third-Party Services',
        body: [
          { p: 'The game is free and shows ads through Google AdMob. Rewarded videos play only when you tap a “Watch” button, to get extra yarn balls, a hint or a doubled reward; every level can be finished without watching ads. A full-screen ad may occasionally appear between levels.' },
          { p: 'For ad delivery, frequency capping, fraud prevention, measurement and attribution, Google AdMob may process the following according to its own policies:' },
          { ul: ['Device identifiers (the advertising identifier, IDFA, only if you allow tracking)', 'IP address, and the approximate region inferred from it', 'Device information such as model and OS version', 'Ad impressions and clicks', 'Crash and performance diagnostics'] },
          { p: 'This information is handled by Google; the developer does not receive information that identifies you. For details, see:' },
          { link: ['Google Privacy Policy', GOOGLE_PRIVACY] },
          { link: ['How Google uses information from sites or apps that use its services', GOOGLE_PARTNERS] },
        ],
      },
      {
        h: '3. Tracking and Advertising Identifier',
        body: [
          { p: 'The first time you open the game, iOS asks whether to allow tracking (App Tracking Transparency). Choosing “Ask App Not to Track” does not affect gameplay at all; your ads will just not be based on your interests. You can change this at any time in iPhone Settings > Privacy & Security > Tracking.' },
          { p: 'If you are in the European Economic Area, the United Kingdom or Switzerland, you will also see an ad consent message on first launch. You can change or withdraw your consent at any time in the game under Settings > Ad Privacy Options.' },
        ],
      },
      {
        h: '4. Permissions',
        body: [{ p: 'The game does not request access to your camera, microphone, photo library, contacts or precise location. It uses system haptic feedback, which you can turn off in the game’s Settings.' }],
      },
      {
        h: '5. Sharing, Challenge Links and Ratings',
        body: [
          { p: 'When you tap “Share”, the system share sheet opens and passes the share text, your Damage Bill image and a challenge link to the app you choose. The link contains only the level number, how many yarn balls you used and the bill amount, so friends can try the same level; it contains nothing that identifies you. Who you share with is up to you; the game never knows.' },
          { p: 'Tapping “Rate Us” opens the review page on the App Store; the rating prompt that occasionally appears after clearing a level is provided by iOS. Ratings and reviews are handled by Apple.' },
        ],
      },
      {
        h: '6. Game Center Leaderboards and Achievements',
        body: [
          { p: 'If you are signed in to Apple Game Center on your iPhone, the game sends your levels cleared, total damage bill, best combo and achievement progress to Game Center to show leaderboards, achievements and friend challenges. Leaderboards show your Game Center nickname and scores; who can see them depends on your Game Center settings.' },
          { p: 'This data is handled by Apple under Apple’s privacy policy. You can play without Game Center and sign out at any time in iPhone Settings > Game Center.' },
          { link: ['Apple Privacy Policy', 'https://www.apple.com/legal/privacy/'] },
        ],
      },
      {
        h: '7. Data Storage and Deletion',
        body: [{ p: 'Local game data is stored on your device with the app. Deleting the app erases all of it, and it does not sync to a new device. Advertising data is retained by Google under its own policies; you can limit personalized ads as described in section 3.' }],
      },
      {
        h: '8. Children’s Privacy',
        body: [{ p: 'The game has family-friendly content, no purchases and no chat (leaderboards and friend challenges are provided by Apple Game Center). It is intended for a general casual-game audience and is not directed at children, and we do not knowingly collect personal information from children. If you believe we have unintentionally processed a child’s personal information, please contact us at the email below.' }],
      },
      {
        h: '9. Changes to This Policy',
        body: [{ p: 'If this policy changes, the new version will be posted on this page and in the game under Settings > Privacy, with an updated date.' }],
      },
      {
        h: '10. Contact Us',
        body: [{ p: 'If you have any questions about this Privacy Policy or about data processing, please email us:' }, { link: [csEmail, `mailto:${csEmail}`] }],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// 挑战页（/catsmash/c/?from=bill&lv=12&s=2&b=1288，或者 from=help&lv=14&left=2）。参数在浏览器里读，{n} 这类占位符由页面脚本替换
// ---------------------------------------------------------------------------
export const csChallenge = {
  zh: {
    title: '好友发来挑战 — 猫咪砸砸乐',
    description: '好友在猫咪砸砸乐里拆了一桌子东西，发来一张拆家账单。你家猫能做到吗？',
    heading: '好友发来挑战',
    helpHeading: '好友求助',
    generic: '好友邀请你来拆家',
    genericLine: '主人出门了，猫上桌了。拉弓，松手，把杯子、花瓶和快递盒全推下桌。',
    level: '第 {n} 关 · {ch}',
    shots: '{s} 发拆完',
    bill: '拆家账单 ¥{b}',
    ask: '你家猫能做到吗？',
    left: '还差 {left} 件',
    stuck: '拆不完了',
    helpLine: '好友的猫卡在这一关了',
    helpAsk: '你来试试？',
    chapters: ['客厅', '厨房', '书房', '全屋', '卧室', '阳台'],
    store: '在 App Store 下载，接受挑战',
    soon: '即将上线 App Store',
    notify: '上线时通知我',
    notifySubject: '猫咪砸砸乐上线时通知我',
    installed: '已经装了猫咪砸砸乐？在 iPhone 上直接点好友发来的链接，会自动打开游戏进入这一关。',
    more: '了解这个游戏',
  },
  en: {
    title: 'A friend challenged you — Cat Smash',
    description: 'A friend smashed a whole table of stuff in Cat Smash and sent you the damage bill. Can your cat do better?',
    heading: 'A friend challenged you',
    helpHeading: 'A friend needs help',
    generic: 'A friend invited you to smash',
    genericLine: 'The human’s out and the cat is on the table. Pull back, let go, and knock the glasses, vases and boxes off.',
    level: 'Level {n} · {ch}',
    shots: 'Done in {s} {shotWord}',
    bill: 'Damage Bill ${b}',
    ask: 'Can your cat do it?',
    left: '{left} left',
    stuck: 'Stuck!',
    helpLine: 'Your friend’s cat is stuck on this level',
    helpAsk: 'Give it a try?',
    chapters: ['Lounge', 'Kitchen', 'Study', 'House', 'Bedroom', 'Balcony'],
    store: 'Get it on the App Store',
    soon: 'Coming soon to the App Store',
    notify: 'Tell me when it launches',
    notifySubject: 'Tell me when Cat Smash launches',
    installed: 'Already have Cat Smash? On your iPhone, tap your friend’s link and it opens the level right in the game.',
    more: 'About the game',
  },
} as const;

// ---------------------------------------------------------------------------
// 支持页
// ---------------------------------------------------------------------------
export interface SupportDoc {
  title: string;
  description: string;
  heading: string;
  lead: string;
  contactH: string;
  contact: string[];
  mailBtn: string;
  mailSubject: string;
  faqH: string;
  faq: { q: string; a: string[] }[];
}

export const csSupport: L<SupportDoc> = {
  zh: {
    title: '支持与常见问题 — 猫咪砸砸乐',
    description: '猫咪砸砸乐（Cat Smash: Knock It Off!）的玩法说明、常见问题和联系方式。',
    heading: '支持与常见问题',
    lead: '遇到问题、发现 bug，或者有想要的新功能，都可以写信告诉我。',
    contactH: '联系我们',
    contact: [
      '发邮件到下面的地址，一般会在 3 个工作日内回复。',
      '反馈问题时，请尽量写上：问题是怎么出现的、设备型号、iOS 版本、游戏版本（在游戏“设置”的最下面），有截图或录屏更好。',
    ],
    mailBtn: '发邮件',
    mailSubject: '猫咪砸砸乐 反馈',
    faqH: '常见问题',
    faq: [
      { q: '怎么玩？', a: ['按住屏幕往后拉（猫在左边，往左拉），松手就把毛线球射出去。瞄准线会画出毛线球的路线，拉得越远飞得越远。', '把桌上的东西推下桌、掉到地上或者打碎，都算拆掉。全部拆完就过关，用的毛线球越少，星星越多。'] },
      { q: '卡在一关过不去怎么办？', a: ['点右下角的“提示”，小猫会把每一发的路线画出来，跟着金色路线打就行。第一次免费，之后看一段视频开启。', '道具也很管用：大毛线球一次能推倒一排，炸炸毛球碰到东西就炸。道具在“猫窝”里用小鱼干买，每天还能看一段视频免费领一个大毛线球。', '毛线球用完时，可以看一段视频再拿 2 到 3 个接着打。'] },
      { q: '游戏免费吗？有没有内购？', a: ['免费，没有任何内购。游戏靠广告维持：激励视频都是你主动点了才播；从第 21 关起，关卡之间偶尔会有一个插屏广告。'] },
      { q: '需要联网吗？', a: ['App Store 版不需要，断网也能玩。只是断网时放不了视频，“看视频”换来的毛线球、提示这些暂时用不了。', '微信小游戏版需要联网才能玩。'] },
      { q: '删掉游戏或者换手机，进度还在吗？', a: ['不在了。游戏没有账号，进度只存在这台手机里，删除 App 会一起清除，也不会同步到新手机。'] },
      { q: '怎么关掉声音或振动？', a: ['点首页的“设置”，或者游戏中点左上角的暂停，可以分别关掉音效、音乐和振动。'] },
      { q: '怎么切换中文和英文？', a: ['游戏跟随系统语言：系统是中文就显示中文，其它语言显示英文。也可以在 iPhone 的“设置 → App → Cat Smash → 语言”里单独给这个游戏选语言。'] },
      { q: '在哪里管理广告隐私？', a: ['个性化广告：iPhone 的“设置 → 隐私与安全性 → 跟踪”。', '欧洲经济区、英国和瑞士的玩家：游戏的“设置 → 广告隐私选项”可以随时修改广告同意选项。', '更多说明见隐私政策。'] },
    ],
  },
  en: {
    title: 'Support & FAQ — Cat Smash: Knock It Off!',
    description: 'How to play Cat Smash: Knock It Off!, answers to common questions, and how to get in touch.',
    heading: 'Support & FAQ',
    lead: 'Hit a problem, found a bug, or have an idea? Write to me.',
    contactH: 'Contact',
    contact: [
      'Email the address below. I usually reply within 3 business days.',
      'When reporting a problem, please include what happened, your device model, iOS version and the game version (at the bottom of the in-game Settings), plus a screenshot or screen recording if you can.',
    ],
    mailBtn: 'Send an email',
    mailSubject: 'Cat Smash feedback',
    faqH: 'Frequently asked questions',
    faq: [
      { q: 'How do I play?', a: ['Press the screen, pull back (the cat is on the left, so pull left) and let go to fire a yarn ball. The aim line shows its path; pull farther to throw farther.', 'Anything you push off the table, drop on the floor or break counts as smashed. Clear everything to finish the level. The fewer yarn balls you use, the more stars you earn.'] },
      { q: 'I’m stuck on a level. What can I do?', a: ['Tap Hint at the bottom right and the cat draws the path for every shot; just follow the golden line. The first hint is free, after that you watch a video to turn it on.', 'Boosters help too: Big Yarn bowls over a whole row, and Boom Yarn explodes on impact. Buy them with fish in the Cat Den, or watch a video for one free Big Yarn a day.', 'If you run out of yarn balls, you can watch a video to get 2 or 3 more and keep going.'] },
      { q: 'Is the game free? Are there in-app purchases?', a: ['It is free and has no in-app purchases. The game is supported by ads: rewarded videos only play when you choose to watch one, and from level 21 a full-screen ad may occasionally appear between levels.'] },
      { q: 'Do I need an internet connection?', a: ['Not for the App Store version: you can play offline. Videos can’t play without a connection, so the extra yarn balls and hints you get from watching them are unavailable until you are back online.', 'The WeChat mini game version needs an internet connection.'] },
      { q: 'Will I keep my progress if I delete the game or change phones?', a: ['No. There is no account; progress is saved only on this phone. Deleting the app erases it, and it does not sync to a new phone.'] },
      { q: 'How do I turn off sound or haptics?', a: ['Tap Settings on the home screen, or Pause at the top left during a level, and switch off sound, music or haptics individually.'] },
      { q: 'How do I switch between English and Chinese?', a: ['The game follows your system language: Chinese if your system is in Chinese, English otherwise. You can also pick a language just for this game in iPhone Settings > Apps > Cat Smash > Language.'] },
      { q: 'Where do I manage ad privacy?', a: ['Personalized ads: iPhone Settings > Privacy & Security > Tracking.', 'Players in the European Economic Area, the UK and Switzerland: change your ad consent choices any time in the game under Settings > Ad Privacy Options.', 'See the Privacy Policy for more.'] },
    ],
  },
};
