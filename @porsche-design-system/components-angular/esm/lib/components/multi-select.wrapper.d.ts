import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { MultiSelectDropdownDirection, BreakpointCustomizable, MultiSelectState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PMultiSelect extends BaseComponentWithTheme {
    description?: string;
    disabled?: boolean;
    dropdownDirection?: MultiSelectDropdownDirection;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    message?: string;
    name: string;
    required?: boolean;
    state?: MultiSelectState;
    theme?: Theme;
    value?: string[];
    update: EventEmitter<CustomEvent<import("../types").MultiSelectUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PMultiSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PMultiSelect, "p-multi-select,[p-multi-select]", never, { "description": "description"; "disabled": "disabled"; "dropdownDirection": "dropdownDirection"; "hideLabel": "hideLabel"; "label": "label"; "message": "message"; "name": "name"; "required": "required"; "state": "state"; "theme": "theme"; "value": "value"; }, { "update": "update"; }, never, ["*"], false, never>;
}
