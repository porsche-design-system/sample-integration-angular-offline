import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { InlineNotificationActionIcon, InlineNotificationState, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PInlineNotification extends BaseComponentWithTheme {
    actionIcon?: InlineNotificationActionIcon;
    actionLabel?: string;
    actionLoading?: boolean;
    description?: string;
    dismissButton?: boolean;
    heading?: string;
    /** @deprecated */
    persistent?: boolean;
    state?: InlineNotificationState;
    theme?: Theme;
    action: EventEmitter<CustomEvent<void>>;
    dismiss: EventEmitter<CustomEvent<void>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PInlineNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PInlineNotification, "p-inline-notification,[p-inline-notification]", never, { "actionIcon": "actionIcon"; "actionLabel": "actionLabel"; "actionLoading": "actionLoading"; "description": "description"; "dismissButton": "dismissButton"; "heading": "heading"; "persistent": "persistent"; "state": "state"; "theme": "theme"; }, { "action": "action"; "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
