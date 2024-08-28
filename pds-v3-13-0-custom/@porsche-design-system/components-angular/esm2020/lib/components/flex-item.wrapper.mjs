import { Component } from '@angular/core';
import { BaseComponent } from '../../utils';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
export class PFlexItem extends BaseComponent {
}
PFlexItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlexItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlexItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlexItem, selector: "p-flex-item,[p-flex-item]", inputs: { alignSelf: "alignSelf", flex: "flex", grow: "grow", offset: "offset", shrink: "shrink", width: "width" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlexItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flex-item,[p-flex-item]',
                    template: '<ng-content />',
                    inputs: ['alignSelf', 'flex', 'grow', 'offset', 'shrink', 'width']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1pdGVtLndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZsZXgtaXRlbS53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFHNUMsc0dBQXNHO0FBTXRHLE1BQU0sT0FBTyxTQUFVLFNBQVEsYUFBYTs7dUdBQS9CLFNBQVM7MkZBQVQsU0FBUyw0TUFIVixnQkFBZ0I7NEZBR2YsU0FBUztrQkFMckIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztpQkFDbkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgdHlwZSB7IEJyZWFrcG9pbnRDdXN0b21pemFibGUsIEZsZXhJdGVtQWxpZ25TZWxmLCBGbGV4SXRlbUZsZXgsIEZsZXhJdGVtR3JvdywgRmxleEl0ZW1PZmZzZXQsIEZsZXhJdGVtU2hyaW5rLCBGbGV4SXRlbVdpZHRoIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKiogQGRlcHJlY2F0ZWQgc2luY2UgdjMuMC4wLCB3aWxsIGJlIHJlbW92ZWQgd2l0aCBuZXh0IG1ham9yIHJlbGVhc2UuIFVzZSBuYXRpdmUgQ1NTIEZsZXggaW5zdGVhZC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtZmxleC1pdGVtLFtwLWZsZXgtaXRlbV0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2FsaWduU2VsZicsICdmbGV4JywgJ2dyb3cnLCAnb2Zmc2V0JywgJ3NocmluaycsICd3aWR0aCddXG59KVxuZXhwb3J0IGNsYXNzIFBGbGV4SXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBhbGlnblNlbGY/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPEZsZXhJdGVtQWxpZ25TZWxmPjtcbiAgZmxleD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8RmxleEl0ZW1GbGV4PjtcbiAgZ3Jvdz86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8RmxleEl0ZW1Hcm93PjtcbiAgb2Zmc2V0PzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxGbGV4SXRlbU9mZnNldD47XG4gIHNocmluaz86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8RmxleEl0ZW1TaHJpbms+O1xuICB3aWR0aD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8RmxleEl0ZW1XaWR0aD47XG59Il19