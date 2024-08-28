import { BaseComponentWithTheme } from '../../utils';
import type { TextListListType, TextListOrderType, Theme, TextListType } from '../types';
import * as i0 from "@angular/core";
export declare class PTextList extends BaseComponentWithTheme {
    /** @deprecated */
    listType?: TextListListType;
    /** @deprecated */
    orderType?: TextListOrderType;
    theme?: Theme;
    type?: TextListType;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTextList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTextList, "p-text-list,[p-text-list]", never, { "listType": "listType"; "orderType": "orderType"; "theme": "theme"; "type": "type"; }, {}, never, ["*"], false, never>;
}
