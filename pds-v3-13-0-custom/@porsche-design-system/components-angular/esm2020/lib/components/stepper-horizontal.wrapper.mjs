import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PStepperHorizontal extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.stepChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PStepperHorizontal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontal, deps: null, target: i0.ɵɵFactoryTarget.Component });
PStepperHorizontal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PStepperHorizontal, selector: "p-stepper-horizontal,[p-stepper-horizontal]", inputs: { size: "size", theme: "theme" }, outputs: { stepChange: "stepChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontal, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper-horizontal,[p-stepper-horizontal]',
                    template: '<ng-content />',
                    inputs: ['size', 'theme'],
                    outputs: ['stepChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1ob3Jpem9udGFsLndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL3N0ZXBwZXItaG9yaXpvbnRhbC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQU45RDs7UUFTRSxrQkFBa0I7UUFDbEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFtRCxDQUFDO1FBQ2pGLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBbUQsQ0FBQztLQUM5RTs7Z0hBTlksa0JBQWtCO29HQUFsQixrQkFBa0IsNk1BSm5CLGdCQUFnQjs0RkFJZixrQkFBa0I7a0JBTjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztvQkFDdkQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztvQkFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgU3RlcHBlckhvcml6b250YWxVcGRhdGVFdmVudERldGFpbCwgQnJlYWtwb2ludEN1c3RvbWl6YWJsZSwgU3RlcHBlckhvcml6b250YWxTaXplLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1zdGVwcGVyLWhvcml6b250YWwsW3Atc3RlcHBlci1ob3Jpem9udGFsXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnc2l6ZScsICd0aGVtZSddLFxuICBvdXRwdXRzOiBbJ3N0ZXBDaGFuZ2UnLCAndXBkYXRlJ11cbn0pXG5leHBvcnQgY2xhc3MgUFN0ZXBwZXJIb3Jpem9udGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIHNpemU/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPFN0ZXBwZXJIb3Jpem9udGFsU2l6ZT47XG4gIGRlY2xhcmUgdGhlbWU/OiBUaGVtZTtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHN0ZXBDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFN0ZXBwZXJIb3Jpem9udGFsVXBkYXRlRXZlbnREZXRhaWw+PigpO1xuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFN0ZXBwZXJIb3Jpem9udGFsVXBkYXRlRXZlbnREZXRhaWw+PigpO1xufSJdfQ==