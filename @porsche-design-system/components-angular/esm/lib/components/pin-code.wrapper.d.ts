import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, PinCodeLength, PinCodeState, Theme, PinCodeType } from '../types';
import * as i0 from "@angular/core";
export declare class PPinCode extends BaseComponentWithTheme {
    description?: string;
    disabled?: boolean;
    hideLabel?: BreakpointCustomizable<boolean>;
    label?: string;
    length?: PinCodeLength;
    loading?: boolean;
    message?: string;
    name?: string;
    required?: boolean;
    state?: PinCodeState;
    theme?: Theme;
    type?: PinCodeType;
    value?: string;
    update: EventEmitter<CustomEvent<import("../types").PinCodeUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PPinCode, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PPinCode, "p-pin-code,[p-pin-code]", never, { "description": "description"; "disabled": "disabled"; "hideLabel": "hideLabel"; "label": "label"; "length": "length"; "loading": "loading"; "message": "message"; "name": "name"; "required": "required"; "state": "state"; "theme": "theme"; "type": "type"; "value": "value"; }, { "update": "update"; }, never, ["*"], false, never>;
}
