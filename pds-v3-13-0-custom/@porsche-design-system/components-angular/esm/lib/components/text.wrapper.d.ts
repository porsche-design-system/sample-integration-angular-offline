import { BaseComponentWithTheme } from '../../utils';
import type { TextAlign, TextColor, BreakpointCustomizable, TextSize, TextTag, Theme, TextWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PText extends BaseComponentWithTheme {
    align?: TextAlign;
    color?: TextColor;
    ellipsis?: boolean;
    size?: BreakpointCustomizable<TextSize>;
    tag?: TextTag;
    theme?: Theme;
    weight?: TextWeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<PText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PText, "p-text,[p-text]", never, { "align": "align"; "color": "color"; "ellipsis": "ellipsis"; "size": "size"; "tag": "tag"; "theme": "theme"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
