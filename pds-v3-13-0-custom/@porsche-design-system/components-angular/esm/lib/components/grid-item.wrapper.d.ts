import { BaseComponent } from '../../utils';
import type { BreakpointCustomizable, GridItemOffset, GridItemSize } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare class PGridItem extends BaseComponent {
    offset?: BreakpointCustomizable<GridItemOffset>;
    size?: BreakpointCustomizable<GridItemSize>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PGridItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PGridItem, "p-grid-item,[p-grid-item]", never, { "offset": "offset"; "size": "size"; }, {}, never, ["*"], false, never>;
}
