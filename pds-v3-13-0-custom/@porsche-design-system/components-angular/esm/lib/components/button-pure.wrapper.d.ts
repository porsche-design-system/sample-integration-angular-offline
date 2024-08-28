import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, ButtonPureAlignLabel, SelectedAriaAttributes, ButtonPureAriaAttribute, ButtonPureIcon, ButtonPureSize, Theme, ButtonPureType, ButtonPureWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PButtonPure extends BaseComponentWithTheme {
    active?: boolean;
    alignLabel?: BreakpointCustomizable<ButtonPureAlignLabel>;
    aria?: SelectedAriaAttributes<ButtonPureAriaAttribute>;
    disabled?: boolean;
    hideLabel?: BreakpointCustomizable<boolean>;
    icon?: ButtonPureIcon;
    iconSource?: string;
    loading?: boolean;
    name?: string;
    size?: BreakpointCustomizable<ButtonPureSize>;
    stretch?: BreakpointCustomizable<boolean>;
    theme?: Theme;
    type?: ButtonPureType;
    value?: string;
    /** @deprecated */
    weight?: ButtonPureWeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<PButtonPure, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PButtonPure, "p-button-pure,[p-button-pure]", never, { "active": "active"; "alignLabel": "alignLabel"; "aria": "aria"; "disabled": "disabled"; "hideLabel": "hideLabel"; "icon": "icon"; "iconSource": "iconSource"; "loading": "loading"; "name": "name"; "size": "size"; "stretch": "stretch"; "theme": "theme"; "type": "type"; "value": "value"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
