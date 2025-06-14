<div align="center">

# 𝓞𝓛𝓓 𝓘𝓝𝓣𝓔𝓡𝓝𝓔𝓣 𝓒𝓞𝓜𝓟𝓞𝓝𝓔𝓝𝓣𝓢

🌐 **[Live Demo](https://ivgtr.github.io/old-internet-components/)** | 📦 **[NPM Package](https://npmjs.com/package/old-internet-components)**

*Nostalgic Web Components for 90s Japanese Website Aesthetics*

[![npm version](https://img.shields.io/npm/v/old-internet-components.svg)](https://npmjs.com/package/old-internet-components)
[![GitHub stars](https://img.shields.io/github/stars/ivgtr/old-internet-components.svg)](https://github.com/ivgtr/old-internet-components)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

---

## 🚀 Quick Start

### CDN
```html
<script src="https://unpkg.com/old-internet-components@latest/dist/old-internet-components.umd.js"></script>
```

### NPM
```bash
npm install old-internet-components
```

---

## 🎨 Components Gallery

<table>
  <tr>
    <td width="33%">

### 🏷️ `<old-title>`
```html
<old-title color="#ff0080" blink="true" shadow="true">
  サンプルタイトル
</old-title>
```

    </td>
    <td width="33%">

### 📜 `<old-marquee>`
```html
<old-marquee scrollamount="200">
  流れるテキスト
</old-marquee>
```

    </td>
    <td width="33%">

### ✨ `<old-blink>`
```html
<old-blink color="#ff0000" speed="1000">
  点滅テキスト
</old-blink>
```

    </td>
  </tr>
  <tr>
    <td>

### 🔢 `<old-access-counter>`
```html
<old-access-counter 
  count="7776" 
  variant="retro">
</old-access-counter>
```
> Variants: `retro` | `digital` | `classic`

    </td>
    <td>

### 🔗 `<old-link>`
```html
<old-link 
  href="https://example.com" 
  n="100">
  ■
</old-link>
```
> Hidden link game

    </td>
    <td>

### 🚧 `<old-under-construction>`
```html
<old-under-construction 
  variant="classic" 
  message="工事中です">
</old-under-construction>
```
> Variants: `classic` | `animated` | `neon`

    </td>
  </tr>
  <tr>
    <td>

### 🇯🇵 `<old-sorry-japanese-only>`
```html
<old-sorry-japanese-only>
</old-sorry-japanese-only>
```

    </td>
    <td>

### 🚫 `<old-right-click-disable>`
```html
<old-right-click-disable 
  text="右クリック禁止！">
</old-right-click-disable>
```

    </td>
    <td></td>
  </tr>
</table>

---

## 💻 Framework Support

<table>
  <tr>
    <th>Framework</th>
    <th>Setup</th>
  </tr>
  <tr>
    <td><strong>Vanilla HTML</strong></td>
    <td>

```html
<script src="https://unpkg.com/old-internet-components@latest/dist/old-internet-components.umd.js"></script>
<old-title>Hello World</old-title>
```

    </td>
  </tr>
  <tr>
    <td><strong>React / Next.js</strong></td>
    <td>

```tsx
// types.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'old-title': any;
  }
}
```

    </td>
  </tr>
  <tr>
    <td><strong>Vue.js</strong></td>
    <td>

```js
import 'old-internet-components';
```

    </td>
  </tr>
  <tr>
    <td><strong>Angular</strong></td>
    <td>

```ts
// app.module.ts
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

    </td>
  </tr>
</table>

---

## 🎭 Design Philosophy

<div align="center">

| Feature | Description |
|---------|-------------|
| 🖼️ **MS Gothic Font** | Authentic Japanese monospace |
| 🌈 **Web 1.0 Colors** | Classic 90s color schemes |
| ✨ **Retro Animations** | Blinking, scrolling, glowing |
| 🔲 **Classic UI** | Outset borders & gradients |
| 📟 **Nostalgic Elements** | Access counters, construction signs |

</div>

---

## 🛠️ Development

```bash
npm install    # Install dependencies
npm run dev    # Start dev server  
npm run build  # Build for production
npm run check  # Type checking
```

---

<div align="center">

## 📄 License

**MIT** - *Build nostalgic websites freely* ✨

**[⭐ Star this repo](https://github.com/ivgtr/old-internet-components)** • **[🐛 Report issues](https://github.com/ivgtr/old-internet-components/issues)** • **[🤝 Contribute](https://github.com/ivgtr/old-internet-components/pulls)**

*Relive the golden age of the Japanese web* 🌸

</div>