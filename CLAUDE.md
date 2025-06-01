# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pure Nuxt 3 + Capacitor template for building cross-platform mobile applications (iOS/Android) from a single Vue.js codebase. The project uses Tailwind CSS for styling and is configured with TypeScript support.

**Note**: This is a pure Capacitor implementation without any Ionic Framework dependencies. The project uses Capacitor's native bridge directly without Ionic UI components or CLI tools.

## Essential Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build Nuxt for production
npm run generate     # Generate static site for Capacitor (required for mobile)
npm run preview      # Preview production build
```

### Mobile Development
```bash
# Initial setup
npx cap add ios      # Add iOS platform
npx cap add android  # Add Android platform

# Development workflow
npm run generate     # Build web assets
npx cap sync         # Sync to all platforms (updates native dependencies)
npx cap copy         # Copy web assets only (faster for UI changes)
npx cap open ios     # Open in Xcode
npx cap open android # Open in Android Studio
npx cap run ios      # Run on iOS simulator
npx cap run android  # Run on Android emulator
```

### Live Reload Setup
For development with live reload on mobile devices:
1. Add to `capacitor.config.json`:
   ```json
   "server": {
     "url": "http://YOUR_LOCAL_IP:3000",
     "cleartext": true
   }
   ```
2. Run `npm run dev` and `npx cap copy`
3. Run from Xcode/Android Studio

## Architecture

### Key Directories
- `pages/` - Vue components for routes (file-based routing)
- `components/` - Reusable Vue components
- `assets/css/` - Global styles (Tailwind CSS)
- `.output/public/` - Generated static files for Capacitor
- `android/` - Android native project
- `ios/` - iOS native project

### Critical Configuration
- **SSR is disabled** in `nuxt.config.ts` - Required for mobile apps
- **Output directory** is `.output/public` - Must match `capacitor.config.json`
- **App ID**: `com.example.nuxtcapacitor` - Change for production
- **Web Dir**: `.output/public` in `capacitor.config.json` - Correct for Nuxt 3 static generation
- **No Ionic Config**: This template uses pure Capacitor without Ionic Framework

### Native Plugin Integration
Example using Capacitor plugins:
```javascript
import { Share } from '@capacitor/share';

// In component methods
await Share.share({
  title: 'Title',
  text: 'Text to share',
  url: 'https://example.com'
});
```

Always run `npx cap sync` after installing new Capacitor plugins.

## Development Workflow

1. **Web changes only**: Edit Vue files → Changes hot-reload in browser
2. **Testing on device**: `npm run generate` → `npx cap copy` → Run from IDE
3. **Adding plugins**: `npm install @capacitor/[plugin]` → `npx cap sync`
4. **Platform-specific code**: Use `Capacitor.getPlatform()` to detect platform

## Important Notes

- Always use `npm run generate` (not `build`) for mobile deployment
- The app runs as a static site inside the native WebView
- Check Android Gradle version (8.11.1) compatibility when updating
- iOS requires Xcode for building and deployment
- Use platform-specific folders in native projects for custom native code
- This is a pure Capacitor setup - no Ionic Framework dependencies
- Styling is done with Tailwind CSS, not Ionic components

## Template vs Blog Post Differences

This template implementation differs from the capgo.app blog post in several ways:

1. **Correct output directory**: Uses `.output/public` instead of `dist`
2. **No Ionic dependencies**: Pure Capacitor without Ionic CLI or Framework
3. **SSR explicitly disabled**: Required for mobile apps
4. **Updated dependencies**: Latest versions of Nuxt 3, Capacitor 6, etc.
5. **TypeScript ready**: Includes proper TypeScript configuration

The blog suggests using Konsta UI for mobile styling, but this template uses plain Tailwind CSS, giving you more flexibility to choose your own UI framework or build custom components.