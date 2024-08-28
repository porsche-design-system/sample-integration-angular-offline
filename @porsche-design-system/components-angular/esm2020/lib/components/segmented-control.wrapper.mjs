import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PSegmentedControl extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.segmentedControlChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PSegmentedControl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControl, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSegmentedControl.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSegmentedControl, selector: "p-segmented-control,[p-segmented-control]", inputs: { backgroundColor: "backgroundColor", columns: "columns", theme: "theme", value: "value" }, outputs: { segmentedControlChange: "segmentedControlChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControl, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-segmented-control,[p-segmented-control]',
                    template: '<ng-content />',
                    inputs: ['backgroundColor', 'columns', 'theme', 'value'],
                    outputs: ['segmentedControlChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvc2VnbWVudGVkLWNvbnRyb2wud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFON0Q7O1FBWUUsa0JBQWtCO1FBQ2xCLDJCQUFzQixHQUFHLElBQUksWUFBWSxFQUFrRCxDQUFDO1FBQzVGLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBa0QsQ0FBQztLQUM3RTs7K0dBVFksaUJBQWlCO21HQUFqQixpQkFBaUIsNlJBSmxCLGdCQUFnQjs0RkFJZixpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQztpQkFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgU2VnbWVudGVkQ29udHJvbEJhY2tncm91bmRDb2xvciwgQnJlYWtwb2ludEN1c3RvbWl6YWJsZSwgU2VnbWVudGVkQ29udHJvbENvbHVtbnMsIFNlZ21lbnRlZENvbnRyb2xVcGRhdGVFdmVudERldGFpbCwgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Atc2VnbWVudGVkLWNvbnRyb2wsW3Atc2VnbWVudGVkLWNvbnRyb2xdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG4gIGlucHV0czogWydiYWNrZ3JvdW5kQ29sb3InLCAnY29sdW1ucycsICd0aGVtZScsICd2YWx1ZSddLFxuICBvdXRwdXRzOiBbJ3NlZ21lbnRlZENvbnRyb2xDaGFuZ2UnLCAndXBkYXRlJ11cbn0pXG5leHBvcnQgY2xhc3MgUFNlZ21lbnRlZENvbnRyb2wgZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIGJhY2tncm91bmRDb2xvcj86IFNlZ21lbnRlZENvbnRyb2xCYWNrZ3JvdW5kQ29sb3I7XG4gIGNvbHVtbnM/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPFNlZ21lbnRlZENvbnRyb2xDb2x1bW5zPjtcbiAgZGVjbGFyZSB0aGVtZT86IFRoZW1lO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHNlZ21lbnRlZENvbnRyb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFNlZ21lbnRlZENvbnRyb2xVcGRhdGVFdmVudERldGFpbD4+KCk7XG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8U2VnbWVudGVkQ29udHJvbFVwZGF0ZUV2ZW50RGV0YWlsPj4oKTtcbn0iXX0=