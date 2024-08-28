import { BaseComponent } from '../../utils';
import type { BreakpointCustomizable, FlexAlignContent, FlexAlignItems, FlexDirection, FlexInline, FlexJustifyContent, FlexWrap } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
export declare class PFlex extends BaseComponent {
    alignContent?: BreakpointCustomizable<FlexAlignContent>;
    alignItems?: BreakpointCustomizable<FlexAlignItems>;
    direction?: BreakpointCustomizable<FlexDirection>;
    inline?: BreakpointCustomizable<FlexInline>;
    justifyContent?: BreakpointCustomizable<FlexJustifyContent>;
    wrap?: BreakpointCustomizable<FlexWrap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFlex, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFlex, "p-flex,[p-flex]", never, { "alignContent": "alignContent"; "alignItems": "alignItems"; "direction": "direction"; "inline": "inline"; "justifyContent": "justifyContent"; "wrap": "wrap"; }, {}, never, ["*"], false, never>;
}
