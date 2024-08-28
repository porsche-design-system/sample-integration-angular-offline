import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, LinkTileProductAspectRatio, LinkTileProductTarget, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PLinkTileProduct extends BaseComponentWithTheme {
    aspectRatio?: BreakpointCustomizable<LinkTileProductAspectRatio>;
    description?: string;
    heading: string;
    href?: string;
    likeButton?: boolean;
    liked?: boolean;
    price: string;
    priceOriginal?: string;
    rel?: string;
    target?: LinkTileProductTarget;
    theme?: Theme;
    like: EventEmitter<CustomEvent<import("../types").LinkTileProductLikeEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLinkTileProduct, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLinkTileProduct, "p-link-tile-product,[p-link-tile-product]", never, { "aspectRatio": "aspectRatio"; "description": "description"; "heading": "heading"; "href": "href"; "likeButton": "likeButton"; "liked": "liked"; "price": "price"; "priceOriginal": "priceOriginal"; "rel": "rel"; "target": "target"; "theme": "theme"; }, { "like": "like"; }, never, ["*"], false, never>;
}
