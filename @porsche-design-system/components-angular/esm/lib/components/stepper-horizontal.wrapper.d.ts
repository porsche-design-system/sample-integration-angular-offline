import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, StepperHorizontalSize, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PStepperHorizontal extends BaseComponentWithTheme {
    size?: BreakpointCustomizable<StepperHorizontalSize>;
    theme?: Theme;
    /** @deprecated */
    stepChange: EventEmitter<CustomEvent<import("../types").StepperHorizontalUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").StepperHorizontalUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PStepperHorizontal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PStepperHorizontal, "p-stepper-horizontal,[p-stepper-horizontal]", never, { "size": "size"; "theme": "theme"; }, { "stepChange": "stepChange"; "update": "update"; }, never, ["*"], false, never>;
}
