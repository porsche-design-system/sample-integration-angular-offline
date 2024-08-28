import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, WordmarkAriaAttribute, WordmarkSize, WordmarkTarget, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PWordmark extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
    href?: string;
    size?: WordmarkSize;
    target?: WordmarkTarget;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PWordmark, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PWordmark, "p-wordmark,[p-wordmark]", never, { "aria": "aria"; "href": "href"; "size": "size"; "target": "target"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
