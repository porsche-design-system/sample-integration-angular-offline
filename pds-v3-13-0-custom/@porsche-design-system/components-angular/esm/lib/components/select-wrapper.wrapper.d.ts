import { BaseComponentWithTheme } from '../../utils';
import type { SelectWrapperDropdownDirection, BreakpointCustomizable, SelectWrapperState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PSelectWrapper extends BaseComponentWithTheme {
    description?: string;
    dropdownDirection?: SelectWrapperDropdownDirection;
    filter?: boolean;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    message?: string;
    native?: boolean;
    state?: SelectWrapperState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSelectWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSelectWrapper, "p-select-wrapper,[p-select-wrapper]", never, { "description": "description"; "dropdownDirection": "dropdownDirection"; "filter": "filter"; "hideLabel": "hideLabel"; "label": "label"; "message": "message"; "native": "native"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
