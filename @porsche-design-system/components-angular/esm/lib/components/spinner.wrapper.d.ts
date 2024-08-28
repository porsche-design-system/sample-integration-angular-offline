import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, SpinnerAriaAttribute, BreakpointCustomizable, SpinnerSize, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PSpinner extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
    size?: BreakpointCustomizable<SpinnerSize>;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSpinner, "p-spinner,[p-spinner]", never, { "aria": "aria"; "size": "size"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
