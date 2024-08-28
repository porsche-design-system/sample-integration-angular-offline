import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { TabsGradientColor, TabsGradientColorScheme, BreakpointCustomizable, TabsSize, Theme, TabsWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PTabs extends BaseComponentWithTheme {
    activeTabIndex?: number;
    gradientColor?: TabsGradientColor;
    /** @deprecated */
    gradientColorScheme?: TabsGradientColorScheme;
    size?: BreakpointCustomizable<TabsSize>;
    theme?: Theme;
    weight?: TabsWeight;
    /** @deprecated */
    tabChange: EventEmitter<CustomEvent<import("../types").TabsBarUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").TabsBarUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTabs, "p-tabs,[p-tabs]", never, { "activeTabIndex": "activeTabIndex"; "gradientColor": "gradientColor"; "gradientColorScheme": "gradientColorScheme"; "size": "size"; "theme": "theme"; "weight": "weight"; }, { "tabChange": "tabChange"; "update": "update"; }, never, ["*"], false, never>;
}
