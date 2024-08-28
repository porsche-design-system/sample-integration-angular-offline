import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { SelectDropdownDirection, BreakpointCustomizable, SelectUpdateEventDetail, SelectState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PSelect extends BaseComponentWithTheme {
    description?: string;
    disabled?: boolean;
    dropdownDirection?: SelectDropdownDirection;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    message?: string;
    name: string;
    required?: boolean;
    state?: SelectState;
    theme?: Theme;
    value?: string;
    update: EventEmitter<CustomEvent<SelectUpdateEventDetail>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSelect, "p-select,[p-select]", never, { "description": "description"; "disabled": "disabled"; "dropdownDirection": "dropdownDirection"; "hideLabel": "hideLabel"; "label": "label"; "message": "message"; "name": "name"; "required": "required"; "state": "state"; "theme": "theme"; "value": "value"; }, { "update": "update"; }, never, ["*"], false, never>;
}
