import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, FlyoutAriaAttribute, FlyoutPosition, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PFlyout extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;
    open: boolean;
    position?: FlyoutPosition;
    theme?: Theme;
    dismiss: EventEmitter<CustomEvent<void>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFlyout, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFlyout, "p-flyout,[p-flyout]", never, { "aria": "aria"; "open": "open"; "position": "position"; "theme": "theme"; }, { "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
