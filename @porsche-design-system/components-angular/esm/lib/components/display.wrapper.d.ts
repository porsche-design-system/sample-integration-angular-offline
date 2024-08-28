import { BaseComponentWithTheme } from '../../utils';
import type { DisplayAlign, DisplayColor, BreakpointCustomizable, DisplaySize, DisplayTag, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PDisplay extends BaseComponentWithTheme {
    align?: DisplayAlign;
    color?: DisplayColor;
    ellipsis?: boolean;
    size?: BreakpointCustomizable<DisplaySize>;
    tag?: DisplayTag;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PDisplay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PDisplay, "p-display,[p-display]", never, { "align": "align"; "color": "color"; "ellipsis": "ellipsis"; "size": "size"; "tag": "tag"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
