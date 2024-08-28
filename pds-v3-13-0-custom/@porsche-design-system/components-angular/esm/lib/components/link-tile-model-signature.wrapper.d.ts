import { BaseComponent } from '../../utils';
import type { BreakpointCustomizable, LinkTileModelSignatureAspectRatio, LinkTileModelSignatureHeadingTag, LinkTileModelSignatureLinkDirection, LinkTileModelSignatureModel, LinkTileModelSignatureWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PLinkTileModelSignature extends BaseComponent {
    aspectRatio?: BreakpointCustomizable<LinkTileModelSignatureAspectRatio>;
    description?: string;
    heading: string;
    headingTag?: LinkTileModelSignatureHeadingTag;
    linkDirection?: BreakpointCustomizable<LinkTileModelSignatureLinkDirection>;
    model?: LinkTileModelSignatureModel;
    weight?: BreakpointCustomizable<LinkTileModelSignatureWeight>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLinkTileModelSignature, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLinkTileModelSignature, "p-link-tile-model-signature,[p-link-tile-model-signature]", never, { "aspectRatio": "aspectRatio"; "description": "description"; "heading": "heading"; "headingTag": "headingTag"; "linkDirection": "linkDirection"; "model": "model"; "weight": "weight"; }, {}, never, ["*"], false, never>;
}
