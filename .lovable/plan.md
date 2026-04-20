

## 混合方案实现：深蓝紫英雄区 + 放大主标题

### 视觉方向确认
- 首屏蒙层：**深蓝紫**（科技冷感 + 一丝极光紫）
- Hero 主标题：放大 1.2x，白字加微光阴影
- 第二屏起：保持现有浅色弥散底 + 深字玻璃卡片

### 改动清单

1. **`src/pages/Index.tsx`** — 双段背景蒙层
   - 移除单层柔白蒙层，改为两层 fixed 蒙层叠加：
     - 顶层（0 → 100vh）：深蓝紫渐变 `linear-gradient(135deg, hsla(235, 55%, 10%, 0.82) 0%, hsla(258, 50%, 14%, 0.75) 60%, hsla(265, 45%, 18%, 0.4) 90%, transparent 100%)`
     - 底层：现有浅紫白蒙层（保持不变，但只在 100vh 以下生效，靠顶层 alpha=0 透出）
   - 背景图 Ken Burns 动画保留，深蒙层下色球辉光更梦幻

2. **`src/components/ReflectApp.tsx`** — Hero 区文字与字号
   - 给 Hero section 包一层 `.hero-dark` 容器类
   - 主标题字号：`text-5xl md:text-7xl` → `text-6xl md:text-8xl`（放大 ~1.2x）
   - 主标题颜色：深字 → 白色 `hsl(0,0%,98%)` + `text-shadow: 0 2px 12px hsla(258,80%,40%,0.4)`
   - 副标题/描述：切换为 `hsla(0,0%,100%,0.78)`
   - 字间距 `tracking-tight` 保持，行高微调以适配大字
   - 第二屏起所有内容、卡片、表单完全不动

3. **`src/components/OptimizedHeader.tsx`** — 滚动自适应导航
   - 用 `useState` + `scroll` 监听 `window.scrollY`
   - 阈值：`window.innerHeight * 0.85`（接近首屏底部时切换）
   - 首屏状态：玻璃底改深色 `hsla(255, 40%, 12%, 0.35)` + 边框 `hsla(0,0%,100%,0.18)` + 文字白色
   - 滚动后：恢复现有浅色玻璃 + 深色文字
   - 语言切换器同步两套配色
   - 切换用 `transition-all duration-500` 平滑过渡

4. **`src/index.css`** — 新增工具样式
   - `.hero-title-glow` — 白色 + 深紫光晕 text-shadow
   - `.hero-overlay-deep` — 顶层深蓝紫渐变蒙层

5. **`src/components/StarBorder.tsx`** — Hero 内 CTA 按钮微调
   - 默认状态边框透明度 `0.18` → `0.32`（深底上更凸）
   - 文字保持白色（已是白色，无需改）
   - hover 蓝紫渐变保持，在深底上同样协调

### 不动的部分
- 弥散色球背景图 + Ken Burns 动画
- 第二屏起所有业务卡片、超薄玻璃质感、深色文字
- TikTok / Google / Meta logo 卡片
- 联系表单（仍在浅色区）

### 可读性保障
- 白字在深蓝紫蒙层（L≈12-15）上对比度 ≈ 14:1，超 WCAG AAA
- 100vh → 110vh 段 alpha 平滑过渡到 0，避免硬切
- 导航栏跟随滚动切换，任意位置都满足 4.5:1
- 主标题加 text-shadow 进一步提升弥散背景上的清晰度

