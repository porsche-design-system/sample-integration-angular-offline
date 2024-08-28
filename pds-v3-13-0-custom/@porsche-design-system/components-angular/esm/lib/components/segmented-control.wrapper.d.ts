import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { SegmentedControlBackgroundColor, BreakpointCustomizable, SegmentedControlColumns, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PSegmentedControl extends BaseComponentWithTheme {
    /** @deprecated */
    backgroundColor?: SegmentedControlBackgroundColor;
    columns?: BreakpointCustomizable<SegmentedControlColumns>;
    theme?: Theme;
    value?: string | number;
    /** @deprecated */
    segmentedControlChange: EventEmitter<CustomEvent<import("../types").SegmentedControlUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").SegmentedControlUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSegmentedControl, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSegmentedControl, "p-segmented-control,[p-segmented-control]", never, { "backgroundColor": "backgroundColor"; "columns": "columns"; "theme": "theme"; "value": "value"; }, { "segmentedControlChange": "segmentedControlChange"; "update": "update"; }, never, ["*"], false, never>;
}
