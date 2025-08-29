# Porsche Design System for Angular (Offline Build v3.29.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Angular** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v3.29.0` npm package is located in `./@porsche-design-system/components-{js|angular}`.
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as fonts, icons, and web components — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`.

With the upcoming version 4 of the Porsche Design System, a new solution will be available that works out of the box in offline contexts, making this workflow obsolete.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of **your** [Angular](https://angular.dev/installation) project.

### Step 2

Move the assets from `./@porsche-design-system/assets` to `./public/assets/porsche-design-system`, ensuring they are served at `${YOUR_BASE_URL}/assets/porsche-design-system/` when your application is running.

```
mkdir -p ./public/assets/porsche-design-system
mv ./@porsche-design-system/assets/* ./public/assets/porsche-design-system
```

### Step 3

Extend the **scripts** section of your `package.json` file.

```
"scripts": {
  "postinstall": "npm run copy:@porsche-design-system/components-angular && npm run copy:@porsche-design-system/components-js",
  "copy:@porsche-design-system/components-angular": "rm -rf ./node_modules/@porsche-design-system/components-angular && cp -r ./@porsche-design-system/components-angular/. ./node_modules/@porsche-design-system/components-angular",
  "copy:@porsche-design-system/components-js": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  …
}
```

### Step 3

Add the `@porsche-design-system/components-angular` npm package with version `3.29.0`.

```
npm install @porsche-design-system/components-angular@3.29.0
```

### Step 4

Add the `PorscheDesignSystemModule` to the imports array of your `@Component` or `@NgModule` declaration, then integrate the Porsche Design System components you need.

For additional information on how to integrate Partials and Tailwind CSS, you can also refer to the [Getting Started](https://designsystem.porsche.com/v3/developing/angular/getting-started) section of the official documentation.

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

### Step 5

Once the web application is built and served, open your browser's developer console.
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
