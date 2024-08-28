import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PTabs extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.tabChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTabs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabs, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTabs.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTabs, selector: "p-tabs,[p-tabs]", inputs: { activeTabIndex: "activeTabIndex", gradientColor: "gradientColor", gradientColorScheme: "gradientColorScheme", size: "size", theme: "theme", weight: "weight" }, outputs: { tabChange: "tabChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tabs,[p-tabs]',
                    template: '<ng-content />',
                    inputs: ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'],
                    outputs: ['tabChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13cmFwcGVyL3NyYy9saWIvY29tcG9uZW50cy90YWJzLndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVNyRCxNQUFNLE9BQU8sS0FBTSxTQUFRLHNCQUFzQjtJQU5qRDs7UUFjRSxrQkFBa0I7UUFDbEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFzQyxDQUFDO1FBQ25FLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBc0MsQ0FBQztLQUNqRTs7bUdBWFksS0FBSzt1RkFBTCxLQUFLLCtTQUpOLGdCQUFnQjs0RkFJZixLQUFLO2tCQU5qQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztvQkFDN0YsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgVGFic0dyYWRpZW50Q29sb3IsIFRhYnNHcmFkaWVudENvbG9yU2NoZW1lLCBUYWJzVXBkYXRlRXZlbnREZXRhaWwsIEJyZWFrcG9pbnRDdXN0b21pemFibGUsIFRhYnNTaXplLCBUaGVtZSwgVGFic1dlaWdodCB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC10YWJzLFtwLXRhYnNdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGlucHV0czogWydhY3RpdmVUYWJJbmRleCcsICdncmFkaWVudENvbG9yJywgJ2dyYWRpZW50Q29sb3JTY2hlbWUnLCAnc2l6ZScsICd0aGVtZScsICd3ZWlnaHQnXSxcbiAgb3V0cHV0czogWyd0YWJDaGFuZ2UnLCAndXBkYXRlJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRhYnMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgYWN0aXZlVGFiSW5kZXg/OiBudW1iZXI7XG4gIGdyYWRpZW50Q29sb3I/OiBUYWJzR3JhZGllbnRDb2xvcjtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIGdyYWRpZW50Q29sb3JTY2hlbWU/OiBUYWJzR3JhZGllbnRDb2xvclNjaGVtZTtcbiAgc2l6ZT86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8VGFic1NpemU+O1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIHdlaWdodD86IFRhYnNXZWlnaHQ7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICB0YWJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFRhYnNVcGRhdGVFdmVudERldGFpbD4+KCk7XG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8VGFic1VwZGF0ZUV2ZW50RGV0YWlsPj4oKTtcbn0iXX0=