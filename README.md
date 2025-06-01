# Nuxt 3 + Capacitor Template

A modern template for building cross-platform mobile applications using Nuxt 3 and Capacitor.

## Features

- 🚀 **Nuxt 3** - The modern Vue.js framework
- 📱 **Capacitor** - Build native iOS and Android apps
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **Hot Module Replacement** - Fast development experience
- 📲 **Native APIs** - Access device features through Capacitor plugins

## Prerequisites

- Node.js 18+ 
- npm or yarn
- For iOS development: macOS with Xcode installed
- For Android development: Android Studio

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Initialize Capacitor platforms**
   ```bash
   npx cap add ios
   npx cap add android
   ```

3. **Build the web app**
   ```bash
   npm run generate
   ```

4. **Sync with native platforms**
   ```bash
   npx cap sync
   ```

5. **Open in native IDE**
   ```bash
   # For iOS
   npx cap open ios
   
   # For Android
   npx cap open android
   ```

## Development

### Web Development
```bash
npm run dev
```

### Mobile Development with Live Reload

1. Update `capacitor.config.json` to point to your local dev server:
   ```json
   {
     "server": {
       "url": "http://YOUR_LOCAL_IP:3000",
       "cleartext": true
     }
   }
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Copy changes to native platforms:
   ```bash
   npx cap copy
   ```

4. Run on device/simulator from Xcode or Android Studio

## Building for Production

1. **Build the Nuxt app**
   ```bash
   npm run generate
   ```

2. **Sync with native platforms**
   ```bash
   npx cap sync
   ```

3. **Build native apps**
   - iOS: Open in Xcode and build/archive
   - Android: Open in Android Studio and build APK/AAB

## Project Structure

```
├── assets/          # Static assets and CSS
├── components/      # Vue components
├── pages/           # Application pages
├── public/          # Public static files
├── android/         # Android native project (generated)
├── ios/             # iOS native project (generated)
├── capacitor.config.json  # Capacitor configuration
├── nuxt.config.ts   # Nuxt configuration
└── package.json     # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run ionic:build` - Alias for generate (Capacitor integration)
- `npm run ionic:serve` - Alias for dev (Capacitor integration)

## Adding Capacitor Plugins

Example of adding and using a Capacitor plugin:

```bash
npm install @capacitor/camera
npx cap sync
```

Then use in your Vue components:

```javascript
import { Camera } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
};
```

## Troubleshooting

- **White screen on mobile**: Ensure SSR is disabled in `nuxt.config.ts`
- **Build errors**: Run `npx cap sync` after installing new plugins
- **iOS simulator issues**: Clean build folder in Xcode
- **Android build issues**: Sync project with Gradle files in Android Studio

## Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)