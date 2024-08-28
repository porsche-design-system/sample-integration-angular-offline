import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PFlyoutNavigation extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.dismiss = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PFlyoutNavigation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigation, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlyoutNavigation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlyoutNavigation, selector: "p-flyout-navigation,[p-flyout-navigation]", inputs: { activeIdentifier: "activeIdentifier", aria: "aria", open: "open", theme: "theme" }, outputs: { dismiss: "dismiss", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigation, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flyout-navigation,[p-flyout-navigation]',
                    template: '<ng-content />',
                    inputs: ['activeIdentifier', 'aria', 'open', 'theme'],
                    outputs: ['dismiss', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LW5hdmlnYXRpb24ud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvZmx5b3V0LW5hdmlnYXRpb24ud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFON0Q7O1FBV0UsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ2hELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBa0QsQ0FBQztLQUM3RTs7K0dBUFksaUJBQWlCO21HQUFqQixpQkFBaUIseVBBSmxCLGdCQUFnQjs0RkFJZixpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7b0JBQ3JELE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnRXaXRoVGhlbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdGVkQXJpYUF0dHJpYnV0ZXMsIEZseW91dE5hdmlnYXRpb25BcmlhQXR0cmlidXRlLCBGbHlvdXROYXZpZ2F0aW9uVXBkYXRlRXZlbnREZXRhaWwsIFRoZW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWZseW91dC1uYXZpZ2F0aW9uLFtwLWZseW91dC1uYXZpZ2F0aW9uXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnYWN0aXZlSWRlbnRpZmllcicsICdhcmlhJywgJ29wZW4nLCAndGhlbWUnXSxcbiAgb3V0cHV0czogWydkaXNtaXNzJywgJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBGbHlvdXROYXZpZ2F0aW9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGFjdGl2ZUlkZW50aWZpZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGFyaWE/OiBTZWxlY3RlZEFyaWFBdHRyaWJ1dGVzPEZseW91dE5hdmlnYXRpb25BcmlhQXR0cmlidXRlPjtcbiAgb3Blbj86IGJvb2xlYW47XG4gIGRlY2xhcmUgdGhlbWU/OiBUaGVtZTtcbiAgZGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+KCk7XG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8Rmx5b3V0TmF2aWdhdGlvblVwZGF0ZUV2ZW50RGV0YWlsPj4oKTtcbn0iXX0=