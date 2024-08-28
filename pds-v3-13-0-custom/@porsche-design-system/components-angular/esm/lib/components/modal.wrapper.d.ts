import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, ModalAriaAttribute, ModalBackdrop, BreakpointCustomizable, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PModal extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<ModalAriaAttribute>;
    backdrop?: ModalBackdrop;
    disableBackdropClick?: boolean;
    /** @deprecated */
    disableCloseButton?: boolean;
    dismissButton?: boolean;
    fullscreen?: BreakpointCustomizable<boolean>;
    heading?: string;
    open: boolean;
    theme?: Theme;
    /** @deprecated */
    close: EventEmitter<CustomEvent<void>>;
    dismiss: EventEmitter<CustomEvent<void>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PModal, "p-modal,[p-modal]", never, { "aria": "aria"; "backdrop": "backdrop"; "disableBackdropClick": "disableBackdropClick"; "disableCloseButton": "disableCloseButton"; "dismissButton": "dismissButton"; "fullscreen": "fullscreen"; "heading": "heading"; "open": "open"; "theme": "theme"; }, { "close": "close"; "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
