# 📱 Tailwind Screen Size

A lightweight, framework-agnostic component that helps you visualize your screen size and breakpoints during development. While it's optimized for TailwindCSS, it can be customized to work with any CSS framework or vanilla CSS!

## ✨ Features

- 📏 Show different screen sizes you're on for TailwindCSS
- 📐 Show the exact width and height
- 🎯 Framework agnostic - works with any JavaScript framework
- 📍 Customizable positioning (6 different positions)
- 🎨 Rich theme system with 20+ built-in themes
- 💅 Customizable with TailwindCSS classes, other frameworks, or vanilla CSS
- 🔧 Development-mode aware (configurable)
- 📐 Custom breakpoints support
- 🔍 Automatic TailwindCSS detection

## 📦 Installation

Using npm:

```bash
npm install tailwind-screen-size
```

Using yarn:

```bash
yarn add tailwind-screen-size
```

Using pnpm:

```bash
pnpm add tailwind-screen-size
```

Using bun:

```bash
bun add tailwind-screen-size
```

## 🔧 Tailwind CSS Configuration

### For Tailwind CSS v3 and below

Add the following to your `tailwind.config.js` or `tailwind.config.ts`:

```javascript
content: [
  "./node_modules/tailwind-screen-size/**/*.{js,ts,jsx,tsx,vue,svelte}",
];
```

### For Tailwind CSS v4.0 (Beta)

Add the following to your `styles.css`:

```css
@source "./node_modules/tailwind-screen-size/**/*.{js,ts,jsx,tsx,vue,svelte}";
```

> Note: This package is compatible with Tailwind CSS 4.0.

## 🚀 Usage

### React

```jsx
import { TailwindScreenSize } from "tailwind-screen-size/react";

function App() {
  return (
    <div>
      <TailwindScreenSize />
      {/* Your app content */}
    </div>
  );
}
```

### ⚙️ Props

| Prop                       | Type                                                                                              | Default                                         | Description                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| `position`                 | `'top-left' \| 'top-right' \| 'top-center' \| 'bottom-left' \| 'bottom-right' \| 'bottom-center'` | `'bottom-right'`                                | Position of the screen size indicator                                |
| `theme`                    | See [Available Themes](#available-themes)                                                         | `'dark'`                                        | Visual theme of the indicator                                        |
| `show`                     | `boolean`                                                                                         | `undefined`                                     | Force show/hide the indicator. By default, only shows in development |
| `breakpoints`              | `Array<{ screenTitle: string; minWidth: number }>`                                                | See [Default Breakpoints](#default-breakpoints) | Custom breakpoints configuration                                     |
| `showDefaultBreakpoints`   | `boolean`                                                                                         | `true`                                          | Whether to show the default Tailwind breakpoints                     |
| `hideNoTailwindCSSWarning` | `boolean`                                                                                         | `false`                                         | Hide the "No TailwindCSS" warning                                    |
| `className`                | `string`                                                                                          | `''`                                            | Additional classes for the entire component                          |
| `containerClassName`       | `string`                                                                                          | `''`                                            | Additional classes for the container                                 |
| `textClassName`            | `string`                                                                                          | `''`                                            | Additional classes for the dimension text                            |
| `dividerClassName`         | `string`                                                                                          | `''`                                            | Additional classes for the divider                                   |
| `breakpointClassName`      | `string`                                                                                          | `''`                                            | Additional classes for the breakpoint indicators                     |

### 🎨 Customization

```jsx
<TailwindScreenSize
  // Position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'
  position="bottom-right"
  // Theme: See Available Themes section
  theme="blue"
  // Control visibility (defaults to development only)
  show={true}
  // Custom breakpoints
  breakpoints={[
    { screenTitle: "mobile", minWidth: 320 },
    { screenTitle: "tablet", minWidth: 768 },
    { screenTitle: "desktop", minWidth: 1024 },
  ]}
  // Show/hide default Tailwind breakpoints
  showDefaultBreakpoints={false}
  // Hide "No TailwindCSS" warning
  hideNoTailwindCSSWarning={false}
  // Custom classes (works with any CSS framework or vanilla CSS)
  className="custom-container-class"
  containerClassName="custom-container-class"
  textClassName="custom-text-class"
  dividerClassName="custom-divider-class"
  breakpointClassName="custom-breakpoint-class"
/>
```

### 🎭 Available Themes

#### Base Themes

- 🌑 `dark` - Dark background with light text
- 🌕 `light` - Light background with dark text
- ✨ `glass` - Frosted glass effect with backdrop blur
- 🎯 `minimal` - Transparent background with adaptive colors

#### Color Themes

All Tailwind colors are available as themes:

##### Gray Scales

- `slate` - Sophisticated gray
- `gray` - Pure gray
- `zinc` - Neutral gray
- `neutral` - True neutral
- `stone` - Warm gray

##### Colors

- `red` - Error, danger, passion
- `orange` - Energy, creativity
- `amber` - Warning, warmth
- `yellow` - Attention, optimism
- `lime` - Fresh, natural
- `green` - Success, growth
- `emerald` - Rich, prosperity
- `teal` - Calm, sophistication
- `cyan` - Technology, clarity
- `sky` - Openness, freedom
- `blue` - Trust, depth
- `indigo` - Wisdom, integrity
- `violet` - Luxury, mystery
- `purple` - Royalty, creativity
- `fuchsia` - Energy, excitement
- `pink` - Playful, feminine
- `rose` - Love, beauty

### 📐 Default Breakpoints

```typescript
const defaultBreakpoints = [
  { screenTitle: "XS", minWidth: 0 },
  { screenTitle: "SM", minWidth: 640 },
  { screenTitle: "MD", minWidth: 768 },
  { screenTitle: "LG", minWidth: 1024 },
  { screenTitle: "XL", minWidth: 1280 },
  { screenTitle: "2XL", minWidth: 1536 },
];
```

## 🔧 Development Mode

By default, the component only shows in development mode (`process.env.NODE_ENV === "development"`). You can override this behavior with the `show` prop:

```jsx
// Always show in any environment
<TailwindScreenSize show={true} />

// Never show
<TailwindScreenSize show={false} />
```

## 📄 License

MIT
