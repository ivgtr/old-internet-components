# 𝓞𝓛𝓓 𝓘𝓝𝓣𝓔𝓡𝓝𝓔𝓣 𝓒𝓞𝓜𝓟𝓞𝓝𝓔𝓝𝓣𝓢

A collection of nostalgic web components that recreate the classic 1990s Japanese personal website aesthetic. Built with Svelte and distributed as Web Components for universal compatibility.

## 🌐 Demo

[https://ivgtr.github.io/old-internet-components/](https://ivgtr.github.io/old-internet-components/)

## 📦 Installation

### CDN (Recommended)

```html
<script src="https://unpkg.com/old-internet-components@latest/dist/old-internet-components.umd.js"></script>
```

### NPM

```bash
npm install old-internet-components
```

```javascript
import 'old-internet-components';
```

## 🎨 Components

### `<old-title>`
Nostalgic title text with blinking and shadow effects
```html
<old-title color="#ff0080" blink="true" shadow="true">サンプルタイトル</old-title>
```

### `<old-marquee>`
Classic scrolling text
```html
<old-marquee scrollamount="200">流れるテキストのサンプルです</old-marquee>
```

### `<old-blink>`
Blinking text effect
```html
<old-blink color="#ff0000" size="1.2rem" speed="1000">点滅するテキスト</old-blink>
```

### `<old-access-counter>`
Retro access counter with multiple styles
```html
<old-access-counter count="7776" variant="retro"></old-access-counter>
```

**Variants:** `retro`, `digital`, `classic`

### `<old-link>`
Hidden link game - find the real link among decoys
```html
<old-link href="https://example.com/secret" n="100">■</old-link>
```

### `<old-under-construction>`
Classic "under construction" display
```html
<old-under-construction variant="classic" message="工事中です"></old-under-construction>
```

**Variants:** `classic`, `animated`, `neon`

### `<old-sorry-japanese-only>`
"Japanese only" message
```html
<old-sorry-japanese-only></old-sorry-japanese-only>
```

### `<old-right-click-disable>`
Right-click prevention with retro alert
```html
<old-right-click-disable text="右クリックは禁止されています！"></old-right-click-disable>
```

## 🚀 Usage

All components work as standard Web Components and can be used in any HTML page or framework:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/old-internet-components@latest/dist/old-internet-components.umd.js"></script>
</head>
<body>
    <old-title color="#ff0080" blink="true">Welcome to my homepage!</old-title>
    <old-marquee>This is a scrolling message</old-marquee>
    <old-access-counter count="1234" variant="retro"></old-access-counter>
</body>
</html>
```

### Framework Integration

**React/Next.js:**
```jsx
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'old-title': any;
      'old-marquee': any;
      // ... other components
    }
  }
}
```

**Vue.js:**
```javascript
// In main.js or component
import 'old-internet-components';
```

**Angular:**
Add `CUSTOM_ELEMENTS_SCHEMA` to your module.

## 🎭 Design Philosophy

These components recreate the authentic feel of 1990s Japanese personal websites:

- **MS Gothic font family** for that classic monospace look
- **Retro color schemes** with Web 1.0 aesthetics  
- **Authentic animations** like blinking text and scrolling marquees
- **Classic UI elements** with outset/inset borders and gradients
- **Nostalgic functionality** like access counters and "under construction" signs

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run check
```

## 📄 License

MIT License - feel free to use in your nostalgic web projects!

## 🌸 Contributing

Contributions are welcome! Please feel free to submit pull requests for additional retro components or improvements to existing ones.

---

*Relive the golden age of the web with authentic 90s Japanese internet aesthetics* ✨