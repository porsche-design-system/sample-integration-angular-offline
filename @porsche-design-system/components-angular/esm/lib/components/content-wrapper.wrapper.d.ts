import { BaseComponentWithTheme } from '../../utils';
import type { ContentWrapperBackgroundColor, Theme, ContentWrapperWidth } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
export declare class PContentWrapper extends BaseComponentWithTheme {
    /** @deprecated */
    backgroundColor?: ContentWrapperBackgroundColor;
    /** @deprecated */
    theme?: Theme;
    width?: ContentWrapperWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<PContentWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PContentWrapper, "p-content-wrapper,[p-content-wrapper]", never, { "backgroundColor": "backgroundColor"; "theme": "theme"; "width": "width"; }, {}, never, ["*"], false, never>;
}
