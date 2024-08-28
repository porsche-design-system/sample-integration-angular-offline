import { BaseComponentWithTheme } from '../../utils';
import type { ModelSignatureColor, ModelSignatureModel, ModelSignatureSize, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PModelSignature extends BaseComponentWithTheme {
    color?: ModelSignatureColor;
    model?: ModelSignatureModel;
    size?: ModelSignatureSize;
    theme?: Theme;
    static ɵfac: i0.ɵɵFactoryDeclaration<PModelSignature, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PModelSignature, "p-model-signature,[p-model-signature]", never, { "color": "color"; "model": "model"; "size": "size"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
