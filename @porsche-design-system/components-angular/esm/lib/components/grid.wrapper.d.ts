import { BaseComponent } from '../../utils';
import type { BreakpointCustomizable, GridDirection, GridGutter, GridWrap } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare class PGrid extends BaseComponent {
    direction?: BreakpointCustomizable<GridDirection>;
    /** @deprecated */
    gutter?: BreakpointCustomizable<GridGutter>;
    wrap?: BreakpointCustomizable<GridWrap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PGrid, "p-grid,[p-grid]", never, { "direction": "direction"; "gutter": "gutter"; "wrap": "wrap"; }, {}, never, ["*"], false, never>;
}
