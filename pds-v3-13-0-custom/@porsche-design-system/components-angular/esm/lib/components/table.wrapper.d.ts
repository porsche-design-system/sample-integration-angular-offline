import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PTable extends BaseComponentWithTheme {
    caption?: string;
    theme?: Theme;
    /** @deprecated */
    sortingChange: EventEmitter<CustomEvent<import("../types").TableHeadCellSort>>;
    update: EventEmitter<CustomEvent<import("../types").TableHeadCellSort>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTable, "p-table,[p-table]", never, { "caption": "caption"; "theme": "theme"; }, { "sortingChange": "sortingChange"; "update": "update"; }, never, ["*"], false, never>;
}
