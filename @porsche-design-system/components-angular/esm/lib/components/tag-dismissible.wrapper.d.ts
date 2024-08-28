import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, TagDismissibleAriaAttribute, TagDismissibleColor, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PTagDismissible extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
    color?: TagDismissibleColor;
    label?: string;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTagDismissible, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTagDismissible, "p-tag-dismissible,[p-tag-dismissible]", never, { "aria": "aria"; "color": "color"; "label": "label"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
