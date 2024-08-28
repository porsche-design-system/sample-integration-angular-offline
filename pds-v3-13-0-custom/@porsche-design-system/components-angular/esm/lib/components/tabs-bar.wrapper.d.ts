import { EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import type { TabsBarGradientColor, TabsBarGradientColorScheme, BreakpointCustomizable, TabsBarSize, Theme, TabsBarWeight } from '../types';
import * as i0 from "@angular/core";
export declare class PTabsBar extends BaseComponentWithTheme {
    activeTabIndex?: number | undefined;
    gradientColor?: TabsBarGradientColor;
    /** @deprecated */
    gradientColorScheme?: TabsBarGradientColorScheme;
    size?: BreakpointCustomizable<TabsBarSize>;
    theme?: Theme;
    weight?: TabsBarWeight;
    /** @deprecated */
    tabChange: EventEmitter<CustomEvent<import("../types").TabsBarUpdateEvent>>;
    update: EventEmitter<CustomEvent<import("../types").TabsBarUpdateEvent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PTabsBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PTabsBar, "p-tabs-bar,[p-tabs-bar]", never, { "activeTabIndex": "activeTabIndex"; "gradientColor": "gradientColor"; "gradientColorScheme": "gradientColorScheme"; "size": "size"; "theme": "theme"; "weight": "weight"; }, { "tabChange": "tabChange"; "update": "update"; }, never, ["*"], false, never>;
}
