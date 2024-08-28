import { BaseComponent } from '../../utils';
import type { SelectedAriaAttributes, MarqueAriaAttribute, MarqueSize, MarqueTarget, MarqueVariant } from '../types';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
export declare class PMarque extends BaseComponent {
    aria?: SelectedAriaAttributes<MarqueAriaAttribute>;
    href?: string;
    size?: MarqueSize;
    target?: MarqueTarget;
    trademark?: boolean;
    variant?: MarqueVariant;
    static ɵfac: i0.ɵɵFactoryDeclaration<PMarque, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PMarque, "p-marque,[p-marque]", never, { "aria": "aria"; "href": "href"; "size": "size"; "target": "target"; "trademark": "trademark"; "variant": "variant"; }, {}, never, ["*"], false, never>;
}
