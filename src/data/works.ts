// 全部作品。首页的 Dock、卡片和页脚都从这里生成；加新作品只需要在这里加一项。
import type { Lang } from '../i18n/ui';

type L<T = string> = Record<Lang, T>;

export const contact = {
  email: 'hihongist@gmail.com',
};

export interface Tool {
  slug: string;
  name: L;
  altName?: L; // 另一种语言的名字，显示在名字后面
  icon: string;
  url: string;
  host: string;
  meta: L;
  tagline: L;
  desc: L;
  chips: L<string[]>;
  // 卡片顶部的迷你 Mac 桌面：DropEdge 用 CSS 画；其余放真实截图
  desk:
    | { kind: 'dropedge' }
    | { kind: 'shot'; src: string; w: number; h: number; align: 'center' | 'right'; app?: string; tray?: 'calendar' }
    | { kind: 'phone'; src: L; w: number; h: number };
}

export const tools: Tool[] = [
  {
    slug: 'dropedge',
    name: { zh: 'DropEdge', en: 'DropEdge' },
    icon: '/works/dropedge-icon.png',
    url: 'https://dropedge.chiuist.com/',
    host: 'dropedge.chiuist.com',
    meta: { zh: 'macOS 14+', en: 'macOS 14+' },
    tagline: { zh: '暂存，就放手边。', en: 'Park it. Right at hand.' },
    desc: {
      zh: '拖着文件碰一下屏幕边缘，或者原地晃一晃，暂存架就出现在手边。先放着，需要时再拖进任何 App。',
      en: 'Drag a file to the screen edge, or give it a little shake, and a shelf appears right where you are. Park it there, then drag it into any app when you need it.',
    },
    chips: {
      zh: ['官网版免费', 'App Store 版永久买断', '文件不离开本机'],
      en: ['Free on the website', 'App Store: one-time purchase', 'Files stay on your Mac'],
    },
    desk: { kind: 'dropedge' },
  },
  {
    slug: 'thendo',
    name: { zh: 'ThenDo', en: 'ThenDo' },
    icon: '/works/thendo-icon.png',
    url: 'https://then-do.chiuist.com/',
    host: 'then-do.chiuist.com',
    meta: { zh: 'Mac + iPhone', en: 'Mac + iPhone' },
    tagline: { zh: '待办，就做待办。', en: 'To-do. Then done.' },
    desc: {
      zh: '随手记下单项任务，或把一件事拆成顺序清单：做完这一步，下一步才解锁。Mac 菜单栏随手记，iPhone 接着做。',
      en: 'Jot down single tasks, or break a job into ordered steps: finish one and the next unlocks. Capture from the Mac menu bar, carry on from your iPhone.',
    },
    chips: {
      zh: ['免费下载 · 7 天试用', '永久买断', 'iCloud 同步'],
      en: ['Free download · 7-day trial', 'One-time purchase', 'iCloud sync'],
    },
    desk: { kind: 'shot', src: '/works/thendo-shot.webp', w: 720, h: 960, align: 'center', app: 'ThenDo' },
  },
  {
    slug: 'scalendar',
    name: { zh: '日历即日历', en: 'Simply Calendar' },
    altName: { zh: 'Simply Calendar', en: '日历即日历' },
    icon: '/works/scalendar-icon.png',
    url: 'https://s-calendar.chiuist.com/',
    host: 's-calendar.chiuist.com',
    meta: { zh: 'macOS 14+', en: 'macOS 14+' },
    tagline: { zh: '日历，就看日历。', en: 'Calendar. Simply.' },
    desc: {
      zh: '安静待在菜单栏。农历、节气、假期和调休一眼看清，想到的事随手记成日程，设好重复和提醒。',
      en: 'Sits quietly in your menu bar. Lunar dates, solar terms, public holidays and make-up workdays at a glance, plus events with repeats and reminders.',
    },
    chips: {
      zh: ['DMG · App Store', 'PRO 解锁大小周', '日程留在本机'],
      en: ['DMG · App Store', 'PRO: alternating workweeks', 'Events stay on your Mac'],
    },
    desk: { kind: 'shot', src: '/works/scalendar-shot.webp', w: 676, h: 1096, align: 'right', tray: 'calendar' },
  },
  {
    slug: 'safeshot',
    name: { zh: 'SafeShot Go', en: 'SafeShot Go' },
    icon: '/works/safeshot-icon.png',
    url: 'https://apps.apple.com/app/safeshot-go/id6780211041',
    host: 'apps.apple.com/app/safeshot-go',
    meta: { zh: 'iPhone + iPad · iOS 16+', en: 'iPhone + iPad · iOS 16+' },
    tagline: { zh: '分享前，先打码。', en: 'Redact first. Then share.' },
    desc: {
      zh: '用本机 OCR 找出截图里的邮箱、电话、密码、验证码和卡号，一次全部遮住；漏掉的，点一下文字就能补上。图片不上传，也不用注册。',
      en: 'On-device OCR finds the emails, phone numbers, passwords, codes and card numbers in a screenshot and covers them in one go; tap any text to catch what it missed. Nothing is uploaded, and no account is needed.',
    },
    chips: {
      zh: ['免费下载', 'Pro 一次买断', '图片不离开设备'],
      en: ['Free download', 'Pro: one-time purchase', 'Images stay on your device'],
    },
    desk: { kind: 'phone', src: { zh: '/works/safeshot-shot-zh.webp', en: '/works/safeshot-shot-en.webp' }, w: 600, h: 1263 },
  },
];

export const games = {
  saolei: {
    slug: 'saolei',
    name: { zh: '猫咪扫雷', en: 'Cat Stars' } as L,
    tags: { zh: '推理 · 益智', en: 'Logic puzzle · iOS 15+' } as L,
    wxName: '猫咪扫雷', // 微信里搜索用的名字
    // 海外 App Store 版（中国大陆以外上架）
    appStore: { name: 'Cat Stars', url: 'https://apps.apple.com/app/cat-stars/id6775446731' },
    icon: '/works/saolei-icon.png',
    miniCode: '', // 小程序码图片路径，例如 /works/saolei-code.png；留空时只显示“在微信里搜索”
  },
  zaza: {
    slug: 'zaza',
    name: { zh: '猫咪砸砸乐', en: 'Cat Smash' } as L, // App Store 上的全名是 Cat Smash: Knock It Off!
    tags: { zh: '物理弹射 · 解压 · 闯关', en: 'Physics · Stress relief · Levels' } as L,
    icon: '/works/zaza-icon.png',
    // 游戏主页（隐私政策、支持页也在它下面），文案在 src/data/catsmash.ts
    path: { zh: '/catsmash/', en: '/en/catsmash/' } as L,
  },
};

// Dock 的顺序：工具 | 游戏 | 下一款
export function dockItems(lang: Lang, kinds: { tool: string; game: string; dev: string; next: string }) {
  return [
    tools.map((t) => ({ href: `#tool-${t.slug}`, icon: t.icon, label: `${t.name[lang]} · ${kinds.tool}`, running: true })),
    [
      { href: '#app-saolei', icon: games.saolei.icon, label: `${games.saolei.name[lang]} · ${kinds.game}`, running: true },
      { href: '#app-zaza', icon: games.zaza.icon, label: `${games.zaza.name[lang]} · ${kinds.dev}`, running: false },
    ],
    [{ href: '#next-game', icon: '', label: kinds.next, running: false }],
  ];
}
