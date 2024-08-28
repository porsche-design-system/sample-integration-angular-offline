import { BaseComponent } from '../../utils';
import type { TableHeadCellSort } from '../types';
import * as i0 from "@angular/core";
export declare class PTableHeadCell extends BaseComponent {
    hideLabel?: boolean;
    multiline?: boolean;
    sort?: TableHeadCellSort;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTableHeadCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTableHeadCell, "p-table-head-cell,[p-table-head-cell]", never, { "hideLabel": "hideLabel"; "multiline": "multiline"; "sort": "sort"; }, {}, never, ["*"], false, never>;
}
