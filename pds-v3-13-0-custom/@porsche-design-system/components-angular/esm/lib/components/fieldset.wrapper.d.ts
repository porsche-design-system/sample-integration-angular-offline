import { BaseComponentWithTheme } from '../../utils';
import type { FieldsetLabelSize, FieldsetState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PFieldset extends BaseComponentWithTheme {
    label?: string;
    labelSize?: FieldsetLabelSize;
    message?: string;
    required?: boolean;
    state?: FieldsetState;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFieldset, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFieldset, "p-fieldset,[p-fieldset]", never, { "label": "label"; "labelSize": "labelSize"; "message": "message"; "required": "required"; "state": "state"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
