import { BaseComponentWithTheme } from '../../utils';
import type { HeadingAlign, HeadingColor, BreakpointCustomizable, HeadingSize, HeadingTag, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PHeading extends BaseComponentWithTheme {
    align?: HeadingAlign;
    color?: HeadingColor;
    ellipsis?: boolean;
    size?: BreakpointCustomizable<HeadingSize>;
    tag?: HeadingTag;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PHeading, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PHeading, "p-heading,[p-heading]", never, { "align": "align"; "color": "color"; "ellipsis": "ellipsis"; "size": "size"; "tag": "tag"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
