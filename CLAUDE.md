# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Svelte component library called "old-internet-components" that provides nostalgic web components styled after classic internet aesthetics. The library exports components as Web Components with custom elements using Svelte's `customElement` option.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the library for distribution
- `npm run build:gh` - Build for GitHub Pages deployment (creates `out/` directory with modified index.html)
- `npm run preview` - Preview the built application
- `npm run check` - Type check with svelte-check and TypeScript

## Architecture

### Component Structure
- All components are in `src/lib/` as `.svelte` files
- Each component uses `<svelte:options customElement="element-name" />` to define Web Components
- Components are exported from `src/main.ts` as the library entry point

### Build Configuration
- **Library Build**: Vite builds as UMD/ES modules from `src/main.ts`
- **Custom Plugin**: `vite-plugins/reloadSettings.ts` forces full page reloads during development
- **GitHub Pages Build**: `scripts/build.cjs` creates a deployable version by replacing local script references with unpkg CDN links

### Component Naming
- Web Components use `old-` prefix (e.g., `<old-marquee>`, `<old-link>`)
- Svelte component files use PascalCase (e.g., `Marquee.svelte`, `AccessCounter.svelte`)

### Code Quality
- Uses Biome for linting with custom Svelte overrides
- TypeScript enabled throughout
- Special Biome rule: `useConst` is disabled for `.svelte` files