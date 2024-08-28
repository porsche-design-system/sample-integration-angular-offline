import { BaseComponentWithTheme } from '../../utils';
import type { DividerColor, BreakpointCustomizable, DividerDirection, DividerOrientation, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PDivider extends BaseComponentWithTheme {
    color?: DividerColor;
    direction?: BreakpointCustomizable<DividerDirection>;
    /** @deprecated */
    orientation?: BreakpointCustomizable<DividerOrientation>;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PDivider, "p-divider,[p-divider]", never, { "color": "color"; "direction": "direction"; "orientation": "orientation"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
