import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, LinkAriaAttribute, BreakpointCustomizable, LinkIcon, LinkTarget, Theme, LinkVariant } from '../types';
import * as i0 from "@angular/core";
export declare class PLink extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<LinkAriaAttribute>;
    download?: string;
    hideLabel?: BreakpointCustomizable<boolean>;
    href?: string;
    icon?: LinkIcon;
    iconSource?: string;
    rel?: string;
    target?: LinkTarget;
    theme?: Theme;
    variant?: LinkVariant;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLink, "p-link,[p-link]", never, { "aria": "aria"; "download": "download"; "hideLabel": "hideLabel"; "href": "href"; "icon": "icon"; "iconSource": "iconSource"; "rel": "rel"; "target": "target"; "theme": "theme"; "variant": "variant"; }, {}, never, ["*"], false, never>;
}
