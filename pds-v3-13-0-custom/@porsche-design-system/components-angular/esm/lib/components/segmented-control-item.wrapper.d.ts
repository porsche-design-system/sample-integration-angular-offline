import { BaseComponent } from '../../utils';
import type { SegmentedControlItemIcon } from '../types';
import * as i0 from "@angular/core";
export declare class PSegmentedControlItem extends BaseComponent {
    disabled?: boolean;
    icon?: SegmentedControlItemIcon;
    iconSource?: string;
    label?: string;
    value: string | number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PSegmentedControlItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PSegmentedControlItem, "p-segmented-control-item,[p-segmented-control-item]", never, { "disabled": "disabled"; "icon": "icon"; "iconSource": "iconSource"; "label": "label"; "value": "value"; }, {}, never, ["*"], false, never>;
}
