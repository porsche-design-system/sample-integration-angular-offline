import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PTabsBar extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.tabChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTabsBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsBar, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTabsBar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTabsBar, selector: "p-tabs-bar,[p-tabs-bar]", inputs: { activeTabIndex: "activeTabIndex", gradientColor: "gradientColor", gradientColorScheme: "gradientColorScheme", size: "size", theme: "theme", weight: "weight" }, outputs: { tabChange: "tabChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tabs-bar,[p-tabs-bar]',
                    template: '<ng-content />',
                    inputs: ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'],
                    outputs: ['tabChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1iYXIud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvdGFicy1iYXIud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxRQUFTLFNBQVEsc0JBQXNCO0lBTnBEOztRQWNFLGtCQUFrQjtRQUNsQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXlDLENBQUM7UUFDdEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUF5QyxDQUFDO0tBQ3BFOztzR0FYWSxRQUFROzBGQUFSLFFBQVEsdVRBSlQsZ0JBQWdCOzRGQUlmLFFBQVE7a0JBTnBCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO29CQUM3RixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBUYWJzQmFyR3JhZGllbnRDb2xvciwgVGFic0JhckdyYWRpZW50Q29sb3JTY2hlbWUsIFRhYnNCYXJVcGRhdGVFdmVudERldGFpbCwgQnJlYWtwb2ludEN1c3RvbWl6YWJsZSwgVGFic0JhclNpemUsIFRoZW1lLCBUYWJzQmFyV2VpZ2h0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXRhYnMtYmFyLFtwLXRhYnMtYmFyXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnYWN0aXZlVGFiSW5kZXgnLCAnZ3JhZGllbnRDb2xvcicsICdncmFkaWVudENvbG9yU2NoZW1lJywgJ3NpemUnLCAndGhlbWUnLCAnd2VpZ2h0J10sXG4gIG91dHB1dHM6IFsndGFiQ2hhbmdlJywgJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBUYWJzQmFyIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGFjdGl2ZVRhYkluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBncmFkaWVudENvbG9yPzogVGFic0JhckdyYWRpZW50Q29sb3I7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBncmFkaWVudENvbG9yU2NoZW1lPzogVGFic0JhckdyYWRpZW50Q29sb3JTY2hlbWU7XG4gIHNpemU/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPFRhYnNCYXJTaXplPjtcbiAgZGVjbGFyZSB0aGVtZT86IFRoZW1lO1xuICB3ZWlnaHQ/OiBUYWJzQmFyV2VpZ2h0O1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgdGFiQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxUYWJzQmFyVXBkYXRlRXZlbnREZXRhaWw+PigpO1xuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFRhYnNCYXJVcGRhdGVFdmVudERldGFpbD4+KCk7XG59Il19