# 猫咪扫雷 · 新图标生图提示词

## 为什么换

现在的图标是「橘猫 + 一堆彩色方块 + 发光的猫爪格」，看起来更像三消、消除类游戏。
猫咪扫雷的核心是**推理**：在分好色块的棋盘里，每行、每列、每个色块各藏一只猫，猫和猫不能挨着；玩家单击打叉排除，双击放猫。
新图标要让人一眼看出「**在格子里把猫找出来**」，而不是「消方块」。

## 画面要点

| 元素 | 内容 | 依据 |
|------|------|------|
| 棋盘 | 4×4 的果冻软糖格子，俯视略带一点角度，占满画面 | 游戏里的「软糖格子」 |
| 色块 | 4 个马卡龙色区域：草莓粉 `#FAA3C0`、天空蓝 `#AFE3FB`、薄荷绿 `#ACF59C`、奶油黄 `#F8DB82` | 游戏区域色（region_tiles_10） |
| 区域边界 | 不同色块之间用细暖棕色描边 `#5A4033` 分开 | 让色块区域一眼可读，和游戏改进方向一致 |
| 棋盘底 | 奶油色 `#FFF5DF`，格子之间留奶油色细缝 | 游戏棋盘底色 |
| 主角 | 一只橘色虎斑小猫，从中间偏下的一个格子里探出头和两只前爪，像刚被找到，眼睛亮、有点得意 | 「猫咪探头」，也是被找到的那一刻 |
| 推理痕迹 | 另外 2–3 个格子上有圆润的浅棕色「×」 | 单击打叉排除 |
| 点缀 | 猫所在格子周围几颗小星星闪光 | 找到猫的反馈 |
| 不要 | 炸弹、地雷、旗子、数字 | 名字带「扫雷」，模型很容易画出炸弹，要明确排除 |

**构图注意**：微信在不少地方会把小游戏图标显示成圆形（比如下拉的「最近使用」），所以猫和关键格子要放在画面中心的圆形范围内，四个角只放棋盘格子。

---

## 中文提示词（即梦 / 通义万相 / 文心一格 等）

```
微信小游戏「猫咪扫雷」的应用图标，正方形满版构图，1024×1024。
画面是一块俯视略带角度的 4×4 果冻软糖质感棋盘，几乎占满整个画面。格子分成四个马卡龙色区域：草莓粉、天空蓝、薄荷绿、奶油黄，不同色区之间用细细的暖棕色描边分隔，格子之间有奶油色细缝，棋盘底色是奶油色。
画面中间偏下的一个格子里，一只可爱的橘色虎斑小猫从格子下面探出脑袋和两只前爪，大眼睛亮晶晶，粉色小鼻子，嘴角微微上扬，有点得意，像刚刚被玩家找到，猫的周围有几颗小星星闪光。
另外两三个格子上画着圆润的浅棕色「×」记号，表示已经排除。
格子圆润饱满、有光泽、略带半透明，左上方柔和高光，阴影轻柔。日系软萌 2.5D 休闲游戏图标风格，明亮干净，配色柔和，小尺寸下也清楚可辨。
小猫和关键格子集中在画面中心的圆形范围内，裁成圆形也完整。
不要文字、不要数字、不要边框、不要圆角、不要按钮、不要水印，不要炸弹、地雷和旗子，只有一只猫。
```

## English prompt（Midjourney / GPT 图像 / Flux 等）

```
App icon for a cozy logic-puzzle mobile game, "Cat Minesweeper". Full-bleed square, 1024x1024.
A chunky 4x4 board of soft jelly-candy tiles fills the frame, seen slightly from above. The tiles are grouped into four pastel regions: strawberry pink (#FAA3C0), sky blue (#AFE3FB), mint green (#ACF59C) and butter yellow (#F8DB82). Thin warm-brown outlines (#5A4033) separate the regions, with narrow cream gaps between tiles on a cream board (#FFF5DF).
In one tile just below the center, a cute orange tabby kitten pops its head and two front paws out from under the tile, as if it was hiding there and just got found: big shiny eyes, tiny pink nose, a small proud smile, a few little sparkles around it.
Two or three other tiles show a soft, rounded light-brown "X" mark, meaning the player ruled them out.
Glossy, rounded, slightly translucent candy tiles, soft top-left highlights, gentle shadows. Kawaii 2.5D casual game icon style, bright and clean, soft pastel palette, readable at small sizes.
Keep the kitten and the key tiles inside the central circle so the icon still works when cropped to a circle.
No text, no letters, no numbers, no frame, no rounded corners, no UI buttons, no watermark, no bombs, no mines, no flags, only one cat.
```

**负面提示词**（支持的模型单独填）：

```
text, letters, numbers, watermark, logo, frame, border, rounded corners, bomb, mine, flag, explosion, multiple cats, realistic fur, photo, dark, gloomy, low contrast, cluttered background, match-3 gems
```

---

## 可选：和猫咪砸砸乐做成一个系列

如果希望两款游戏图标一看就是同一个作者的，把风格那一句换成：

```
扁平卡通插画风格，粗的深棕色描边（#5A3A28），平涂上色，少量高光，薄荷绿背景上点缀浅色猫爪印。
```

英文版换成：

```
Flat cartoon illustration, thick dark-brown outlines (#5A3A28), flat fills with minimal highlights, mint background with faint paw prints.
```

棋盘、色块、小猫和「×」这些内容保持不变。

## 挑图标准

1. 缩到 60px 看：还能认出「格子里有只猫」吗？
2. 裁成圆形看：猫和「×」是否完整？
3. 和 DropEdge、ThenDo、日历即日历、猫咪砸砸乐 放在一排看：亮度和饱和度是否协调？

选好后把 1024×1024 的原图发给我，我会按另外几个图标的边缘质感处理好，换进网站。
