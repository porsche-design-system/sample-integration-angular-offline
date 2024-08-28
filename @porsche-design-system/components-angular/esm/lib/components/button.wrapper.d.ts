import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, ButtonAriaAttribute, BreakpointCustomizable, ButtonIcon, Theme, ButtonType, ButtonVariant } from '../types';
import * as i0 from "@angular/core";
export declare class PButton extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<ButtonAriaAttribute>;
    disabled?: boolean;
    hideLabel?: BreakpointCustomizable<boolean>;
    icon?: ButtonIcon;
    iconSource?: string;
    loading?: boolean;
    name?: string;
    theme?: Theme;
    type?: ButtonType;
    value?: string;
    variant?: ButtonVariant;
    static ɵfac: i0.ɵɵFactoryDeclaration<PButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PButton, "p-button,[p-button]", never, { "aria": "aria"; "disabled": "disabled"; "hideLabel": "hideLabel"; "icon": "icon"; "iconSource": "iconSource"; "loading": "loading"; "name": "name"; "theme": "theme"; "type": "type"; "value": "value"; "variant": "variant"; }, {}, never, ["*"], false, never>;
}
