import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, CheckboxWrapperState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PCheckboxWrapper extends BaseComponentWithTheme {
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    loading?: boolean;
    message?: string;
    state?: CheckboxWrapperState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PCheckboxWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PCheckboxWrapper, "p-checkbox-wrapper,[p-checkbox-wrapper]", never, { "hideLabel": "hideLabel"; "label": "label"; "loading": "loading"; "message": "message"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
