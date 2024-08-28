import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { BreakpointCustomizable, AccordionSize, AccordionTag, Theme } from '../types';
import * as i0 from "@angular/core";
export declare class PAccordion extends BaseComponentWithTheme {
    compact?: boolean;
    heading?: string;
    open?: boolean;
    size?: BreakpointCustomizable<AccordionSize>;
    tag?: AccordionTag;
    theme?: Theme;
    /** @deprecated */
    accordionChange: EventEmitter<CustomEvent<import("../types").AccordionUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").AccordionUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PAccordion, "p-accordion,[p-accordion]", never, { "compact": "compact"; "heading": "heading"; "open": "open"; "size": "size"; "tag": "tag"; "theme": "theme"; }, { "accordionChange": "accordionChange"; "update": "update"; }, never, ["*"], false, never>;
}
