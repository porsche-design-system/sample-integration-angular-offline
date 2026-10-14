import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import {
  getComponentChunkLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-angular/partials';

// getFontLinks() is omitted on purpose: the fonts are bundled through `index.css` and emitted by Angular into `media/`,
// so preloading them from `assets/porsche-design-system/fonts/` would download every font twice.
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

console.log('Generated .generated/index.html with PDS partials.');
