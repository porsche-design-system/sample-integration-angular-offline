import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, RadioButtonWrapperState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PRadioButtonWrapper extends BaseComponentWithTheme {
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    loading?: boolean;
    message?: string;
    state?: RadioButtonWrapperState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PRadioButtonWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PRadioButtonWrapper, "p-radio-button-wrapper,[p-radio-button-wrapper]", never, { "hideLabel": "hideLabel"; "label": "label"; "loading": "loading"; "message": "message"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
