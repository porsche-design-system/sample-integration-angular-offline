import { BaseComponent } from '../../utils';
import type { ButtonTileAlign, SelectedAriaAttributes, ButtonTileAriaAttribute, BreakpointCustomizable, ButtonTileAspectRatio, ButtonTileBackground, ButtonTileIcon, ButtonTileSize, ButtonTileType, ButtonTileWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PButtonTile extends BaseComponent {
    align?: ButtonTileAlign;
    aria?: SelectedAriaAttributes<ButtonTileAriaAttribute>;
    aspectRatio?: BreakpointCustomizable<ButtonTileAspectRatio>;
    background?: ButtonTileBackground;
    compact?: BreakpointCustomizable<boolean>;
    description: string;
    disabled?: boolean;
    gradient?: boolean;
    icon?: ButtonTileIcon;
    iconSource?: string;
    label: string;
    loading?: boolean;
    size?: BreakpointCustomizable<ButtonTileSize>;
    type?: ButtonTileType;
    weight?: BreakpointCustomizable<ButtonTileWeight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PButtonTile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PButtonTile, "p-button-tile,[p-button-tile]", never, { "align": "align"; "aria": "aria"; "aspectRatio": "aspectRatio"; "background": "background"; "compact": "compact"; "description": "description"; "disabled": "disabled"; "gradient": "gradient"; "icon": "icon"; "iconSource": "iconSource"; "label": "label"; "loading": "loading"; "size": "size"; "type": "type"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
