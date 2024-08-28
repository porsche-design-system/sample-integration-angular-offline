import { BaseComponent } from '../../utils';
import type { BreakpointCustomizable, FlexItemAlignSelf, FlexItemFlex, FlexItemGrow, FlexItemOffset, FlexItemShrink, FlexItemWidth } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
export declare class PFlexItem extends BaseComponent {
    alignSelf?: BreakpointCustomizable<FlexItemAlignSelf>;
    flex?: BreakpointCustomizable<FlexItemFlex>;
    grow?: BreakpointCustomizable<FlexItemGrow>;
    offset?: BreakpointCustomizable<FlexItemOffset>;
    shrink?: BreakpointCustomizable<FlexItemShrink>;
    width?: BreakpointCustomizable<FlexItemWidth>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFlexItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFlexItem, "p-flex-item,[p-flex-item]", never, { "alignSelf": "alignSelf"; "flex": "flex"; "grow": "grow"; "offset": "offset"; "shrink": "shrink"; "width": "width"; }, {}, never, ["*"], false, never>;
}
