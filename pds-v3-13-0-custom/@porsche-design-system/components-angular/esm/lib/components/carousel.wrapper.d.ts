import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { CarouselAlignHeader, SelectedAriaAttributes, CarouselAriaAttribute, BreakpointCustomizable, CarouselHeadingSize, CarouselInternationalization, Theme, CarouselWidth } from '../types';
import * as i0 from "@angular/core";
export declare class PCarousel extends BaseComponentWithTheme {
    activeSlideIndex?: number;
    alignHeader?: CarouselAlignHeader;
    aria?: SelectedAriaAttributes<CarouselAriaAttribute>;
    description?: string;
    /** @deprecated */
    disablePagination?: BreakpointCustomizable<boolean>;
    heading?: string;
    headingSize?: CarouselHeadingSize;
    intl?: CarouselInternationalization;
    pagination?: BreakpointCustomizable<boolean>;
    rewind?: boolean;
    skipLinkTarget?: string;
    slidesPerPage?: BreakpointCustomizable<number> | "auto";
    theme?: Theme;
    width?: CarouselWidth;
    /** @deprecated */
    wrapContent?: boolean;
    /** @deprecated */
    carouselChange: EventEmitter<CustomEvent<import("../types").CarouselUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").CarouselUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PCarousel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PCarousel, "p-carousel,[p-carousel]", never, { "activeSlideIndex": "activeSlideIndex"; "alignHeader": "alignHeader"; "aria": "aria"; "description": "description"; "disablePagination": "disablePagination"; "heading": "heading"; "headingSize": "headingSize"; "intl": "intl"; "pagination": "pagination"; "rewind": "rewind"; "skipLinkTarget": "skipLinkTarget"; "slidesPerPage": "slidesPerPage"; "theme": "theme"; "width": "width"; "wrapContent": "wrapContent"; }, { "carouselChange": "carouselChange"; "update": "update"; }, never, ["*"], false, never>;
}
