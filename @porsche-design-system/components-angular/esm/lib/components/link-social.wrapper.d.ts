import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, LinkSocialIcon, LinkSocialTarget, Theme } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use `p-link` with corresponding social icon instead. */
export declare class PLinkSocial extends BaseComponentWithTheme {
    hideLabel?: BreakpointCustomizable<boolean>;
    href?: string;
    icon?: LinkSocialIcon;
    iconSource?: string;
    rel?: string;
    target?: LinkSocialTarget;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLinkSocial, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLinkSocial, "p-link-social,[p-link-social]", never, { "hideLabel": "hideLabel"; "href": "href"; "icon": "icon"; "iconSource": "iconSource"; "rel": "rel"; "target": "target"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
