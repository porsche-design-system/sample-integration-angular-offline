import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { TextFieldWrapperActionIcon, BreakpointCustomizable, TextFieldWrapperState, Theme, TextFieldWrapperUnitPosition } from '../types';
import * as i0 from "@angular/core";
export declare class PTextFieldWrapper extends BaseComponentWithTheme {
    actionIcon?: TextFieldWrapperActionIcon;
    actionLoading?: boolean;
    description?: string;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    message?: string;
    /** @deprecated */
    showCharacterCount?: boolean;
    showCounter?: boolean;
    showPasswordToggle?: boolean;
    state?: TextFieldWrapperState;
    submitButton?: boolean;
    theme?: Theme;
    unit?: string;
    unitPosition?: TextFieldWrapperUnitPosition;
    action: EventEmitter<CustomEvent<void>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTextFieldWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTextFieldWrapper, "p-text-field-wrapper,[p-text-field-wrapper]", never, { "actionIcon": "actionIcon"; "actionLoading": "actionLoading"; "description": "description"; "hideLabel": "hideLabel"; "label": "label"; "message": "message"; "showCharacterCount": "showCharacterCount"; "showCounter": "showCounter"; "showPasswordToggle": "showPasswordToggle"; "state": "state"; "submitButton": "submitButton"; "theme": "theme"; "unit": "unit"; "unitPosition": "unitPosition"; }, { "action": "action"; }, never, ["*"], false, never>;
}
