import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { PaginationInternationalization, BreakpointCustomizable, PaginationMaxNumberOfPageLinks, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PPagination extends BaseComponentWithTheme {
    activePage: number;
    /** @deprecated */
    allyLabel?: string;
    /** @deprecated */
    allyLabelNext?: string;
    /** @deprecated */
    allyLabelPage?: string;
    /** @deprecated */
    allyLabelPrev?: string;
    intl?: PaginationInternationalization;
    itemsPerPage?: number;
    /** @deprecated */
    maxNumberOfPageLinks?: BreakpointCustomizable<PaginationMaxNumberOfPageLinks>;
    showLastPage?: boolean;
    theme?: Theme;
    totalItemsCount: number;
    /** @deprecated */
    pageChange: EventEmitter<CustomEvent<import("../types").PaginationUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").PaginationUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PPagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PPagination, "p-pagination,[p-pagination]", never, { "activePage": "activePage"; "allyLabel": "allyLabel"; "allyLabelNext": "allyLabelNext"; "allyLabelPage": "allyLabelPage"; "allyLabelPrev": "allyLabelPrev"; "intl": "intl"; "itemsPerPage": "itemsPerPage"; "maxNumberOfPageLinks": "maxNumberOfPageLinks"; "showLastPage": "showLastPage"; "theme": "theme"; "totalItemsCount": "totalItemsCount"; }, { "pageChange": "pageChange"; "update": "update"; }, never, ["*"], false, never>;
}
