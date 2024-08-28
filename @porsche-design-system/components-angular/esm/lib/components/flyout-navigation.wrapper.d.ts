import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, FlyoutNavigationAriaAttribute, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PFlyoutNavigation extends BaseComponentWithTheme {
    activeIdentifier?: string | undefined;
    aria?: SelectedAriaAttributes<FlyoutNavigationAriaAttribute>;
    open?: boolean;
    theme?: Theme;
    dismiss: EventEmitter<CustomEvent<void>>;
    update: EventEmitter<CustomEvent<import("../types").FlyoutNavigationUpdate>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PFlyoutNavigation, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PFlyoutNavigation, "p-flyout-navigation,[p-flyout-navigation]", never, { "activeIdentifier": "activeIdentifier"; "aria": "aria"; "open": "open"; "theme": "theme"; }, { "dismiss": "dismiss"; "update": "update"; }, never, ["*"], false, never>;
}
