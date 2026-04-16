

# 统一增强所有屏幕的背景光效（纯 CSS 方案）

## 方案
不添加任何动画组件，所有非首屏的 Section 统一使用**多层彩色径向渐变**作为背景光效，模拟棱镜散射出的光感，让白透明玻璃卡片更明显。

## 具体处理

每个 SnapSection 的包裹 div 内添加一个 `absolute inset-0` 的光效层，包含 2-3 个不同颜色、不同位置的 `radial-gradient`，颜色使用紫色、蓝色、粉色系：

| 屏幕 | 现有光效 | 调整 |
|------|---------|------|
| Section1（品牌介绍） | 有微弱红/蓝渐变 | 增强亮度到 0.15-0.2，增加第二层紫色光晕 |
| Section2（核心业务） | 无 | 添加中心紫色 + 右下蓝色双层光晕 |
| Section4Screen（Dashboard左） | 单层紫色 0.15 | 增强到 0.2，添加右侧蓝色光晕 |
| Section5Screen（Dashboard右） | 单层紫色 0.15 | 增强到 0.2，添加左侧粉色光晕 |
| Section6LogoWall（合作伙伴） | 单层蓝色 0.08 | 增强到 0.15，添加顶部紫色 + 底部粉色 |
| Section7Values（多元化流量） | 无 | 添加左侧紫色 + 右侧蓝色光晕 |
| Section8TrafficMap（流量分布） | 单层紫色 0.08 | 增强到 0.18，添加左下蓝色 + 右上粉色 |
| Section9Solution（解决方案） | 无 | 添加中心紫色 + 左下蓝色光晕 |
| Section10Contact（联系表单） | 无 | 添加右侧紫色 + 左侧蓝色光晕 |

## 光效模板

每个屏幕的光效层大致结构：
```
<div className="absolute inset-0 pointer-events-none" style={{
  background: `
    radial-gradient(ellipse 50% 40% at 30% 40%, rgba(139,92,246,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 70% 60%, rgba(59,130,246,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 35% 30% at 50% 80%, rgba(236,72,153,0.08) 0%, transparent 70%)
  `
}} />
```

各屏幕的光晕位置、大小、颜色会有差异，避免视觉重复。

## 同时添加 CSS 呼吸动画（可选增强）

在 `src/index.css` 添加一个 `glowDrift` 动画，让光晕微弱漂移呼吸，增加活力感。

## 修改文件
- **`src/components/ReflectApp.tsx`** — 9 个 Section 函数内添加/增强背景光效层
- **`src/index.css`** — 添加 `@keyframes glowDrift` 动画

