# Porsche Design System for Angular (Offline Build v4.8.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Angular** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v4.8.0` npm package is located in `./@porsche-design-system/components-{js|angular}`.
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as icons, web components and meta icons — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`.
The Porsche Next fonts are part of the stylesheet (`index.css`) and are bundled by Angular.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of **your** [Angular](https://angular.dev/installation) project.

Next, copy the `./public/assets/porsche-design-system` directory into the **same location** in **your** project.

### Step 2

Extend the **scripts** section of your `package.json` file.

```
// package.json

"scripts": {
  "postinstall": "npm run copy:@porsche-design-system/components-angular && npm run copy:@porsche-design-system/components-js",
  "copy:@porsche-design-system/components-angular": "rm -rf ./node_modules/@porsche-design-system/components-angular && cp -r ./@porsche-design-system/components-angular/. ./node_modules/@porsche-design-system/components-angular",
  "copy:@porsche-design-system/components-js": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  …
}
```

### Step 3

Exclude Porsche Design System from Angular's cache.
To achieve this, we can't selectively exclude a single package.
Instead, we have to disable the entire Angular cache.

```
// angular.json

{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "cache": {
      "enabled": false
    }
  },
  …
}
```

### Step 4

Add the `@porsche-design-system/components-angular` npm package with version `4.8.0`.

```
npm install @porsche-design-system/components-angular@4.8.0
```

### Step 5

Add the `PorscheDesignSystemModule` to the imports array of your `@Component` or `@NgModule` declaration, then integrate the Porsche Design System components you need.

For additional information on how to integrate Tailwind CSS, you can also refer to the [Getting Started](https://designsystem.porsche.com/v4/developing/angular/getting-started) section of the official documentation.

```
// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PorscheDesignSystemModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');
}
```

```
// src/app/app.html

<p-wordmark></p-wordmark>
<p-button icon="add">Some label</p-button>
<p-flag></p-flag>
<div class="…">…</div>
```

### Step 6

Add the Porsche Design System stylesheet to your main CSS file.
It contains all required global styles, including the Porsche Next `@font-face` definitions, whose font files are bundled by Angular.

To prevent FOUC, hide the components until they are registered.

```
/* src/styles.css */

@import '@porsche-design-system/components-angular/index.css';

:is(p-button, p-flag, p-wordmark):not(:defined) {
  visibility: hidden;
}
```

### Step 7 (recommended)

To improve loading performance, inject the Porsche Design System [Partials](https://designsystem.porsche.com/v4/partials/introduction) into the `<head>` of your `index.html`.
Create a `prebuild.mjs` file in your project root directory.

```
// prebuild.mjs

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import {
  getComponentChunkLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-angular/partials';

const headPartials = [
  // preloads icons
  getIconLinks(),
  // preloads components
  getComponentChunkLinks(),
  // injects favicon, apple touch icons, android touch icons, etc.
  getMetaTagsAndIconLinks({ appTitle: 'Porsche' }),
].join('\n');

const html = readFileSync('src/index.html', 'utf-8');
const transformed = html.replace(/<\/head>/, `${headPartials}\n$&`);

mkdirSync('.generated', { recursive: true });
writeFileSync('.generated/index.html', transformed);
```

> `getFontLinks()` is omitted on purpose: the fonts are bundled through `index.css`, so preloading them from
> `assets/porsche-design-system/fonts/` would download every font twice.

Run the script before `start`, `build` and `watch` (npm runs `pre*` scripts automatically), and add `.generated` to your `.gitignore`.

```
// package.json

"scripts": {
  "prebuild": "node prebuild.mjs",
  "prestart": "node prebuild.mjs",
  "prewatch": "node prebuild.mjs",
  …
}
```

Point the `index` option of the `@angular/build:application` builder to the generated file.

```
// angular.json

"build": {
  "builder": "@angular/build:application",
  "options": {
    "index": ".generated/index.html",
    "browser": "src/main.ts",
    …
  }
}
```

### Step 8

Once the web application is built and served, open your browser's developer console.
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
