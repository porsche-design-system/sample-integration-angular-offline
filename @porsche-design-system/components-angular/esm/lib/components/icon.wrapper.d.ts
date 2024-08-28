import { BaseComponentWithTheme } from '../../utils';
import type { SelectedAriaAttributes, IconAriaAttribute, IconColor, IconName, IconSize, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PIcon extends BaseComponentWithTheme {
    aria?: SelectedAriaAttributes<IconAriaAttribute>;
    color?: IconColor;
    /** @deprecated */
    lazy?: boolean;
    name?: IconName;
    size?: IconSize;
    source?: string;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PIcon, "p-icon,[p-icon]", never, { "aria": "aria"; "color": "color"; "lazy": "lazy"; "name": "name"; "size": "size"; "source": "source"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
