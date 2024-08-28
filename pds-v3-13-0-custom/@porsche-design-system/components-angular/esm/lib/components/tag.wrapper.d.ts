import { BaseComponentWithTheme } from '../../utils';
import type { TagColor, TagIcon, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PTag extends BaseComponentWithTheme {
    color?: TagColor;
    icon?: TagIcon;
    iconSource?: string;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTag, "p-tag,[p-tag]", never, { "color": "color"; "icon": "icon"; "iconSource": "iconSource"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
