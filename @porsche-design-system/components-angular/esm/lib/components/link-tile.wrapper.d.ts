import { BaseComponent } from '../../utils';
import type { LinkTileAlign, SelectedAriaAttributes, LinkTileAriaAttribute, BreakpointCustomizable, LinkTileAspectRatio, LinkTileBackground, LinkTileSize, LinkTileTarget, LinkTileWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PLinkTile extends BaseComponent {
    align?: LinkTileAlign;
    aria?: SelectedAriaAttributes<LinkTileAriaAttribute>;
    aspectRatio?: BreakpointCustomizable<LinkTileAspectRatio>;
    background?: LinkTileBackground;
    compact?: BreakpointCustomizable<boolean>;
    description: string;
    download?: string;
    gradient?: boolean;
    href: string;
    label: string;
    rel?: string;
    size?: BreakpointCustomizable<LinkTileSize>;
    target?: LinkTileTarget;
    weight?: BreakpointCustomizable<LinkTileWeight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLinkTile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLinkTile, "p-link-tile,[p-link-tile]", never, { "align": "align"; "aria": "aria"; "aspectRatio": "aspectRatio"; "background": "background"; "compact": "compact"; "description": "description"; "download": "download"; "gradient": "gradient"; "href": "href"; "label": "label"; "rel": "rel"; "size": "size"; "target": "target"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
