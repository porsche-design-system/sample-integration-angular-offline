import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PTable extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.sortingChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTable, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTable, selector: "p-table,[p-table]", inputs: { caption: "caption", theme: "theme" }, outputs: { sortingChange: "sortingChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table,[p-table]',
                    template: '<ng-content />',
                    inputs: ['caption', 'theme'],
                    outputs: ['sortingChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxNQUFPLFNBQVEsc0JBQXNCO0lBTmxEOztRQVNFLGtCQUFrQjtRQUNsQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3hFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztLQUNsRTs7b0dBTlksTUFBTTt3RkFBTixNQUFNLCtMQUpQLGdCQUFnQjs0RkFJZixNQUFNO2tCQU5sQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnRXaXRoVGhlbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgdHlwZSB7IFRhYmxlVXBkYXRlRXZlbnREZXRhaWwsIFRoZW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLXRhYmxlLFtwLXRhYmxlXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnY2FwdGlvbicsICd0aGVtZSddLFxuICBvdXRwdXRzOiBbJ3NvcnRpbmdDaGFuZ2UnLCAndXBkYXRlJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRhYmxlIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGNhcHRpb24/OiBzdHJpbmc7XG4gIGRlY2xhcmUgdGhlbWU/OiBUaGVtZTtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHNvcnRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFRhYmxlVXBkYXRlRXZlbnREZXRhaWw+PigpO1xuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFRhYmxlVXBkYXRlRXZlbnREZXRhaWw+PigpO1xufSJdfQ==