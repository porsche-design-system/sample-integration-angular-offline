import { BaseComponentWithTheme } from '../../utils';
import type { FieldsetWrapperLabelSize, FieldsetWrapperState, Theme } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-fieldset" instead. */
export declare class PFieldsetWrapper extends BaseComponentWithTheme {
    label?: string;
    labelSize?: FieldsetWrapperLabelSize;
    message?: string;
    required?: boolean;
    state?: FieldsetWrapperState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFieldsetWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFieldsetWrapper, "p-fieldset-wrapper,[p-fieldset-wrapper]", never, { "label": "label"; "labelSize": "labelSize"; "message": "message"; "required": "required"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
