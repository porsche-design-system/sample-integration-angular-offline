import { ChangeDetectorRef, ElementRef, InjectionToken, type OnChanges, type OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Theme } from './lib/types';
import * as i0 from "@angular/core";
export declare const THEME_TOKEN: InjectionToken<BehaviorSubject<"light" | "dark" | "auto">>;
export declare abstract class BaseComponent implements OnChanges {
    protected el: HTMLElement;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef);
    ngOnChanges(props: Record<string, {
        previousValue: any;
        currentValue: any;
        firstChange: boolean;
    }>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare abstract class BaseComponentWithTheme extends BaseComponent implements OnDestroy {
    protected el: HTMLElement & {
        theme: Theme;
    };
    private themeSubscription;
    theme?: Theme;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponentWithTheme, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponentWithTheme, "ng-component", never, {}, {}, never, never, false, never>;
}
