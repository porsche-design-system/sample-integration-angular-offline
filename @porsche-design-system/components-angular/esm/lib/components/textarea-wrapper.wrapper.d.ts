import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, TextareaWrapperState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PTextareaWrapper extends BaseComponentWithTheme {
    description?: string;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    message?: string;
    /** @deprecated */
    showCharacterCount?: boolean;
    showCounter?: boolean;
    state?: TextareaWrapperState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTextareaWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTextareaWrapper, "p-textarea-wrapper,[p-textarea-wrapper]", never, { "description": "description"; "hideLabel": "hideLabel"; "label": "label"; "message": "message"; "showCharacterCount": "showCharacterCount"; "showCounter": "showCounter"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
