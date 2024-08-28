# Angular - Sample integration with a custom Porsche Design System offline version

## Structure

A custom offline build of the Porsche Design System v3.13.0 npm package is located in `./@porsche-design-system/components-{js|angular}`.
This special build is not retrieving its assets from the global cdn https://cdn.ui.porsche.com or https://cdn.ui.porsche.cn.
Instead, it expects them to be available at `${YOUR_BASE_URL}/assets/porsche-design-system/`.

Additionally, all Porsche Design System assets (fonts, icons, web components, etc.) are located in `./src/assets/porsche-design-system/`.

## Getting the custom PDS offline build up & running

1. After all npm dependencies are installed replace the npm package `@porsche-design-system/components-angular` + `@porsche-design-system/components-js` in the `./node_modules/` folder with the custom PDS offline build located in `./@porsche-design-system/components-{js|angular}`
2. Ensure all files located in `./src/assets/porsche-design-system` are served under `${YOUR_BASE_URL}/assets/porsche-design-system/`.
3. Build & serve the web application, open Chrome Developer Console and all Porsche Design System related assets should be loaded from `${YOUR_BASE_URL}`.
