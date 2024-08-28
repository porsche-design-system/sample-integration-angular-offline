import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, SwitchAlignLabel, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PSwitch extends BaseComponentWithTheme {
    alignLabel?: BreakpointCustomizable<SwitchAlignLabel>;
    checked?: boolean;
    disabled?: boolean;
    hideLabel?: BreakpointCustomizable<boolean>;
    loading?: boolean;
    stretch?: BreakpointCustomizable<boolean>;
    theme?: Theme;
    /** @deprecated */
    switchChange: EventEmitter<CustomEvent<import("../types").SwitchUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").SwitchUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSwitch, "p-switch,[p-switch]", never, { "alignLabel": "alignLabel"; "checked": "checked"; "disabled": "disabled"; "hideLabel": "hideLabel"; "loading": "loading"; "stretch": "stretch"; "theme": "theme"; }, { "switchChange": "switchChange"; "update": "update"; }, never, ["*"], false, never>;
}
