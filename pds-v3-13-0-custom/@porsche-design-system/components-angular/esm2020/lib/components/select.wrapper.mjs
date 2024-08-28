import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PSelect extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.update = new EventEmitter();
    }
}
PSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSelect, selector: "p-select,[p-select]", inputs: { description: "description", disabled: "disabled", dropdownDirection: "dropdownDirection", hideLabel: "hideLabel", label: "label", message: "message", name: "name", required: "required", state: "state", theme: "theme", value: "value" }, outputs: { update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-select,[p-select]',
                    template: '<ng-content />',
                    inputs: ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'],
                    outputs: ['update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLE9BQVEsU0FBUSxzQkFBc0I7SUFObkQ7O1FBa0JFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBd0MsQ0FBQztLQUNuRTs7cUdBYlksT0FBTzt5RkFBUCxPQUFPLHVXQUpSLGdCQUFnQjs0RkFJZixPQUFPO2tCQU5uQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDeEksT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBTZWxlY3REcm9wZG93bkRpcmVjdGlvbiwgQnJlYWtwb2ludEN1c3RvbWl6YWJsZSwgU2VsZWN0VXBkYXRlRXZlbnREZXRhaWwsIFNlbGVjdFN0YXRlLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1zZWxlY3QsW3Atc2VsZWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZHJvcGRvd25EaXJlY3Rpb24nLCAnaGlkZUxhYmVsJywgJ2xhYmVsJywgJ21lc3NhZ2UnLCAnbmFtZScsICdyZXF1aXJlZCcsICdzdGF0ZScsICd0aGVtZScsICd2YWx1ZSddLFxuICBvdXRwdXRzOiBbJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBTZWxlY3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZHJvcGRvd25EaXJlY3Rpb24/OiBTZWxlY3REcm9wZG93bkRpcmVjdGlvbjtcbiAgaGlkZUxhYmVsPzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxib29sZWFuPjtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBzdGF0ZT86IFNlbGVjdFN0YXRlO1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIHZhbHVlPzogc3RyaW5nO1xuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFNlbGVjdFVwZGF0ZUV2ZW50RGV0YWlsPj4oKTtcbn0iXX0=