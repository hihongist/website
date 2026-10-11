// 全部作品。首页的 Dock、卡片和页脚都从这里生成；加新作品只需要在这里加一项。
import type { Lang } from '../i18n/ui';

type L<T = string> = Record<Lang, T>;

export const contact = {
  email: 'hihongist@gmail.com',
  github: 'hihongist',
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
    | { kind: 'shot'; src: string; w: number; h: number; align: 'center' | 'right'; app?: string; tray?: 'calendar' };
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
];

export const games = {
  saolei: {
    slug: 'saolei',
    name: { zh: '猫咪扫雷', en: 'Cat Minesweeper' } as L,
    altName: { zh: '', en: '猫咪扫雷' } as L,
    wxName: '猫咪扫雷', // 微信里搜索用的名字
    icon: '/works/saolei-icon.png',
    miniCode: '', // 小程序码图片路径，例如 /works/saolei-code.png；留空时只显示“在微信里搜索”
  },
  zaza: {
    slug: 'zaza',
    name: { zh: '猫咪砸砸乐', en: 'Cat Smash' } as L,
    altName: { zh: '', en: '猫咪砸砸乐' } as L,
    tags: { zh: '物理弹射 · 解压 · 闯关', en: 'Physics · Stress relief · Levels' } as L,
    icon: '/works/zaza-icon.png',
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
