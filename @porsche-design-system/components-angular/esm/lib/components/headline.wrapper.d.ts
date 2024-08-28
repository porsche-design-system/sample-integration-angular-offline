import { BaseComponentWithTheme } from '../../utils';
import type { HeadlineAlign, HeadlineColor, HeadlineTag, Theme, HeadlineVariant } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
export declare class PHeadline extends BaseComponentWithTheme {
    align?: HeadlineAlign;
    color?: HeadlineColor;
    ellipsis?: boolean;
    tag?: HeadlineTag;
    theme?: Theme;
    variant?: HeadlineVariant;
    static ɵfac: i0.ɵɵFactoryDeclaration<PHeadline, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PHeadline, "p-headline,[p-headline]", never, { "align": "align"; "color": "color"; "ellipsis": "ellipsis"; "tag": "tag"; "theme": "theme"; "variant": "variant"; }, {}, never, ["*"], false, never>;
}
