import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, LinkPureAlignLabel, SelectedAriaAttributes, LinkPureAriaAttribute, LinkPureIcon, LinkPureSize, LinkPureTarget, Theme, LinkPureWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PLinkPure extends BaseComponentWithTheme {
    active?: boolean;
    alignLabel?: BreakpointCustomizable<LinkPureAlignLabel>;
    aria?: SelectedAriaAttributes<LinkPureAriaAttribute>;
    download?: string;
    hideLabel?: BreakpointCustomizable<boolean>;
    href?: string;
    icon?: LinkPureIcon;
    iconSource?: string;
    rel?: string;
    size?: BreakpointCustomizable<LinkPureSize>;
    stretch?: BreakpointCustomizable<boolean>;
    target?: LinkPureTarget;
    theme?: Theme;
    underline?: boolean;
    /** @deprecated */
    weight?: LinkPureWeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLinkPure, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLinkPure, "p-link-pure,[p-link-pure]", never, { "active": "active"; "alignLabel": "alignLabel"; "aria": "aria"; "download": "download"; "hideLabel": "hideLabel"; "href": "href"; "icon": "icon"; "iconSource": "iconSource"; "rel": "rel"; "size": "size"; "stretch": "stretch"; "target": "target"; "theme": "theme"; "underline": "underline"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
