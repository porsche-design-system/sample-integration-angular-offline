import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, PopoverAriaAttribute, PopoverDirection, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PPopover extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<PopoverAriaAttribute>;
    description?: string;
    direction?: PopoverDirection;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PPopover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PPopover, "p-popover,[p-popover]", never, { "aria": "aria"; "description": "description"; "direction": "direction"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
