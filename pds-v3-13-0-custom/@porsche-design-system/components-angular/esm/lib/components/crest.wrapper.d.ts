import { BaseComponent } from '../../utils';
import type { SelectedAriaAttributes, CrestAriaAttribute, CrestTarget } from '../types';
import * as i0 from "@angular/core";
export declare class PCrest extends BaseComponent {
    aria?: SelectedAriaAttributes<CrestAriaAttribute>;
    href?: string;
    target?: CrestTarget;
    static ɵfac: i0.ɵɵFactoryDeclaration<PCrest, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PCrest, "p-crest,[p-crest]", never, { "aria": "aria"; "href": "href"; "target": "target"; }, {}, never, ["*"], false, never>;
}
