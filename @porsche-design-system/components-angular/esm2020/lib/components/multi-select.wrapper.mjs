import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PMultiSelect extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.update = new EventEmitter();
    }
}
PMultiSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
PMultiSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PMultiSelect, selector: "p-multi-select,[p-multi-select]", inputs: { description: "description", disabled: "disabled", dropdownDirection: "dropdownDirection", hideLabel: "hideLabel", label: "label", message: "message", name: "name", required: "required", state: "state", theme: "theme", value: "value" }, outputs: { update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-multi-select,[p-multi-select]',
                    template: '<ng-content />',
                    inputs: ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'],
                    outputs: ['update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL211bHRpLXNlbGVjdC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLFlBQWEsU0FBUSxzQkFBc0I7SUFOeEQ7O1FBa0JFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBNkMsQ0FBQztLQUN4RTs7MEdBYlksWUFBWTs4RkFBWixZQUFZLG1YQUpiLGdCQUFnQjs0RkFJZixZQUFZO2tCQU54QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDeEksT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBNdWx0aVNlbGVjdERyb3Bkb3duRGlyZWN0aW9uLCBCcmVha3BvaW50Q3VzdG9taXphYmxlLCBNdWx0aVNlbGVjdFVwZGF0ZUV2ZW50RGV0YWlsLCBNdWx0aVNlbGVjdFN0YXRlLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1tdWx0aS1zZWxlY3QsW3AtbXVsdGktc2VsZWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZHJvcGRvd25EaXJlY3Rpb24nLCAnaGlkZUxhYmVsJywgJ2xhYmVsJywgJ21lc3NhZ2UnLCAnbmFtZScsICdyZXF1aXJlZCcsICdzdGF0ZScsICd0aGVtZScsICd2YWx1ZSddLFxuICBvdXRwdXRzOiBbJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBNdWx0aVNlbGVjdCBleHRlbmRzIEJhc2VDb21wb25lbnRXaXRoVGhlbWUge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBkcm9wZG93bkRpcmVjdGlvbj86IE11bHRpU2VsZWN0RHJvcGRvd25EaXJlY3Rpb247XG4gIGhpZGVMYWJlbD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8Ym9vbGVhbj47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc3RhdGU/OiBNdWx0aVNlbGVjdFN0YXRlO1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIHZhbHVlPzogc3RyaW5nW107XG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8TXVsdGlTZWxlY3RVcGRhdGVFdmVudERldGFpbD4+KCk7XG59Il19