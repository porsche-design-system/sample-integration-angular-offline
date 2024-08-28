import { BaseComponentWithTheme } from '../../utils';
import type { ScrollerAlignScrollIndicator, SelectedAriaAttributes, ScrollerAriaAttribute, ScrollerGradientColor, ScrollerGradientColorScheme, ScrollerScrollIndicatorPosition, ScrollerScrollToPosition, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PScroller extends BaseComponentWithTheme {
    alignScrollIndicator?: ScrollerAlignScrollIndicator;
    aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
    gradientColor?: ScrollerGradientColor;
    /** @deprecated */
    gradientColorScheme?: ScrollerGradientColorScheme;
    /** @deprecated */
    scrollIndicatorPosition?: ScrollerScrollIndicatorPosition;
    scrollToPosition?: ScrollerScrollToPosition;
    scrollbar?: boolean;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PScroller, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PScroller, "p-scroller,[p-scroller]", never, { "alignScrollIndicator": "alignScrollIndicator"; "aria": "aria"; "gradientColor": "gradientColor"; "gradientColorScheme": "gradientColorScheme"; "scrollIndicatorPosition": "scrollIndicatorPosition"; "scrollToPosition": "scrollToPosition"; "scrollbar": "scrollbar"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
