import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BannerState, Theme, BannerWidth } from '../types';
import * as i0 from "@angular/core";
export declare class PBanner extends BaseComponentWithTheme {
    description?: string;
    dismissButton?: boolean;
    heading?: string;
    open: boolean;
    /** @deprecated */
    persistent?: boolean;
    state?: BannerState;
    theme?: Theme;
    /** @deprecated */
    width?: BannerWidth;
    dismiss: EventEmitter<CustomEvent<void>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PBanner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PBanner, "p-banner,[p-banner]", never, { "description": "description"; "dismissButton": "dismissButton"; "heading": "heading"; "open": "open"; "persistent": "persistent"; "state": "state"; "theme": "theme"; "width": "width"; }, { "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
