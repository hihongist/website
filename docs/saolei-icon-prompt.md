# 猫咪扫雷 · 新图标生图提示词 v2

## 为什么换

现在的图标是「橘猫 + 一堆彩色方块 + 发光的猫爪格」，看起来更像三消、消除类游戏。
猫咪扫雷的核心是**推理**：在分好色块的棋盘里，每行、每列、每个色块各藏一只猫，猫和猫不能挨着；玩家单击打叉排除，双击放猫。
新图标要让人一眼看出「**在格子里把猫找出来**」。

## 第一版试出来的问题

按 v1 提示词（4×4 棋盘）生成的图，概念是对的：有色块区域、有「×」、有刚被找到的猫。
但猫只占画面宽度的四分之一左右，缩到 60px、40px 时基本只剩彩色方块，认不出猫。
所以 v2 改了构图：

- 棋盘从 4×4 改成放大的 **3×3**，格子更大、更少；
- **猫头约占画面宽度的一半**，从正中间的格子探出来，耳朵和爪子压到旁边格子上；
- 「×」只留 **2 个**，放在裁成圆形也看得到的位置。

另外，v1 里「换成扁平风格只改一句」的说法不对：提示词其余部分还在写果冻、光泽、半透明，生成出来依然是立体的。v2 给出两套完整的提示词，选哪套就整段复制哪套。

## 画面要点（两个版本共用）

| 元素 | 内容 | 依据 |
|------|------|------|
| 主角 | 橘色虎斑小猫，从正中间的格子探出头和两只前爪，猫头约占画面一半宽，像刚被找到，眼睛亮、有点得意 | 「猫咪探头」，也是找到猫的那一刻 |
| 棋盘 | 放大的 3×3，四周格子被画面边缘裁掉一部分 | 游戏棋盘的局部特写 |
| 色块 | 3–4 个马卡龙色区域：草莓粉 `#FAA3C0`、天空蓝 `#AFE3FB`、薄荷绿 `#ACF59C`、奶油黄 `#F8DB82`，格子之间是奶油色 `#FFF5DF` 细缝 | 游戏区域色和棋盘底色 |
| 推理痕迹 | 左边中间、右上方两个格子上有「×」 | 单击打叉排除 |
| 不要 | 炸弹、地雷、旗子、数字、第二只猫 | 名字带「扫雷」，模型容易画出炸弹 |

**构图注意**：微信在不少地方会把小游戏图标显示成圆形（比如下拉的「最近使用」），猫要完整地落在画面中心的圆形范围内。

---

## 版本 A：果冻立体（推荐）

和游戏里的软糖格子棋盘一致，也和 DropEdge、ThenDo、日历即日历 的光泽质感更接近。

### 中文

```
微信小游戏「猫咪扫雷」的应用图标，正方形满版构图，1024×1024。
主体是一只可爱的橘色虎斑小猫，从画面正中央的一个格子里探出脑袋和两只前爪。猫头很大，约占画面宽度的一半，耳朵和前爪越过格子边缘，压在旁边的格子上。大眼睛亮晶晶，粉色小鼻子，嘴角微微上扬，有点得意，像刚刚被玩家找到，猫头旁边有两三颗小星星。
背景是一块放大的 3×3 果冻软糖质感棋盘，只看得到九个大格子，四周的格子被画面边缘裁掉一部分。格子分成三到四个马卡龙色区域：草莓粉、天空蓝、薄荷绿、奶油黄，不同色区之间用细细的暖棕色描边分隔，格子之间有奶油色细缝。
左边中间的格子和右上方的格子上各画着一个圆润的浅棕色「×」记号，表示已经排除。
格子圆润饱满、有光泽、略带半透明，左上方柔和高光，阴影轻柔。日系软萌 2.5D 休闲游戏图标风格，明亮干净，配色柔和。缩小到 40 像素时仍能一眼认出“格子里有只猫”。
小猫完整地放在画面中心的圆形范围内。
不要文字、不要数字、不要边框、不要圆角、不要按钮、不要水印，不要炸弹、地雷和旗子，只有一只猫。
```

### English

```
App icon for a cozy logic-puzzle mobile game, "Cat Minesweeper". Full-bleed square, 1024x1024.
The hero is a cute orange tabby kitten popping its head and two front paws out of the tile in the exact center. The head is big, about half the width of the image; its ears and paws spill over the tile edges onto the neighboring tiles. Big shiny eyes, tiny pink nose, a small proud smile, as if it was hiding there and just got found, with two or three little sparkles beside its head.
Behind it, a zoomed-in 3x3 board of soft jelly-candy tiles; only nine large tiles are visible and the outer tiles are cropped by the image edges. The tiles form three or four pastel regions: strawberry pink (#FAA3C0), sky blue (#AFE3FB), mint green (#ACF59C), butter yellow (#F8DB82), separated by thin warm-brown outlines, with narrow cream gaps between tiles.
The middle-left tile and the top-right tile each show a soft, rounded light-brown "X" mark, meaning the player ruled them out.
Glossy, plump, slightly translucent candy tiles, soft top-left highlights, gentle shadows. Kawaii 2.5D casual game icon style, bright and clean, soft pastel palette. Even at 40 px you can tell there is a cat in the grid.
Keep the whole kitten inside the central circle.
No text, no letters, no numbers, no frame, no rounded corners, no UI buttons, no watermark, no bombs, no mines, no flags, only one cat.
```

### 负面提示词

```
text, letters, numbers, watermark, logo, frame, border, rounded corners, bomb, mine, flag, explosion, multiple cats, tiny cat, 4x4 grid, 5x5 grid, realistic fur, photo, dark, gloomy, low contrast, cluttered, match-3 gems
```

---

## 版本 B：扁平描边（和猫咪砸砸乐成套）

两款游戏图标一看就是同一个作者的。代价是和游戏里的果冻棋盘不完全一样。

### 中文

```
微信小游戏「猫咪扫雷」的应用图标，正方形满版构图，1024×1024，扁平卡通插画风格。
主体是一只可爱的橘色虎斑小猫，从画面正中央的一个格子里探出脑袋和两只前爪。猫头很大，约占画面宽度的一半，耳朵和前爪越过格子边缘。大眼睛，粉色小鼻子，嘴角微微上扬，有点得意，像刚刚被玩家找到，猫头旁边有两三颗小星星。
背景是一块放大的 3×3 棋盘，九个圆角方格分成三到四个马卡龙色区域：草莓粉、天空蓝、薄荷绿、奶油黄，格子之间留奶油色细缝，四周的格子被画面边缘裁掉一部分。
左边中间的格子和右上方的格子上各画着一个粗线条的深棕色「×」记号，表示已经排除。
所有物体都用粗的深棕色描边，平涂上色，只加一两块简单的白色高光；没有渐变、没有光泽、没有半透明、没有立体阴影，像贴纸或儿童绘本插画。画风和一张“橘猫趴在桌边把牛奶杯推下去”的扁平卡通图标保持一致。
缩小到 40 像素时仍能一眼认出“格子里有只猫”。小猫完整地放在画面中心的圆形范围内。
不要文字、不要数字、不要边框、不要圆角、不要按钮、不要水印，不要炸弹、地雷和旗子，不要 3D 渲染、不要果冻质感，只有一只猫。
```

### English

```
App icon for a cozy logic-puzzle mobile game, "Cat Minesweeper". Full-bleed square, 1024x1024, flat cartoon illustration.
The hero is a cute orange tabby kitten popping its head and two front paws out of the tile in the exact center. The head is big, about half the width of the image; its ears and paws spill over the tile edges. Big eyes, tiny pink nose, a small proud smile, as if it just got found, with two or three little stars beside its head.
Behind it, a zoomed-in 3x3 board of rounded square tiles in three or four pastel regions: strawberry pink, sky blue, mint green, butter yellow, with narrow cream gaps; the outer tiles are cropped by the image edges.
The middle-left tile and the top-right tile each show a bold dark-brown "X" mark.
Everything has thick dark-brown outlines (#5A3A28), flat color fills and only one or two simple white highlights. No gradients, no gloss, no translucency, no 3D shading; it looks like a sticker or picture-book illustration.
Even at 40 px you can tell there is a cat in the grid. Keep the whole kitten inside the central circle.
No text, no letters, no numbers, no frame, no rounded corners, no UI buttons, no watermark, no bombs, no mines, no flags, only one cat.
```

### 负面提示词

```
3d render, glossy, jelly, translucent, gradient shading, realistic lighting, text, letters, numbers, watermark, frame, border, rounded corners, bomb, mine, flag, multiple cats, tiny cat, 4x4 grid, photo, cluttered
```

如果模型支持参考图（垫图），把猫咪砸砸乐的图标作为风格参考一起上传，效果会更稳定。

---

## 挑图标准

1. 缩到 40px 看：还能认出「格子里有只猫」吗？这一条最重要。
2. 裁成圆形看：猫是否完整，两个「×」是否至少露出一个。
3. 和 DropEdge、ThenDo、日历即日历、猫咪砸砸乐 放在一排看：亮度和饱和度是否协调。

选好后把 1024×1024 的原图发给我，我会按另外几个图标的边缘质感处理好，换进网站。
