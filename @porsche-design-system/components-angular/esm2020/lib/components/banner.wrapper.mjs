import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PBanner extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.dismiss = new EventEmitter();
    }
}
PBanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PBanner, deps: null, target: i0.ɵɵFactoryTarget.Component });
PBanner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PBanner, selector: "p-banner,[p-banner]", inputs: { description: "description", dismissButton: "dismissButton", heading: "heading", open: "open", persistent: "persistent", state: "state", theme: "theme", width: "width" }, outputs: { dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PBanner, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-banner,[p-banner]',
                    template: '<ng-content />',
                    inputs: ['description', 'dismissButton', 'heading', 'open', 'persistent', 'state', 'theme', 'width'],
                    outputs: ['dismiss']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL2Jhbm5lci53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLE9BQVEsU0FBUSxzQkFBc0I7SUFObkQ7O1FBaUJFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztLQUNqRDs7cUdBWlksT0FBTzt5RkFBUCxPQUFPLHVTQUpSLGdCQUFnQjs0RkFJZixPQUFPO2tCQU5uQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBQ3BHLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgQmFubmVyU3RhdGUsIFRoZW1lLCBCYW5uZXJXaWR0aCB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1iYW5uZXIsW3AtYmFubmVyXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnZGVzY3JpcHRpb24nLCAnZGlzbWlzc0J1dHRvbicsICdoZWFkaW5nJywgJ29wZW4nLCAncGVyc2lzdGVudCcsICdzdGF0ZScsICd0aGVtZScsICd3aWR0aCddLFxuICBvdXRwdXRzOiBbJ2Rpc21pc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQQmFubmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXNtaXNzQnV0dG9uPzogYm9vbGVhbjtcbiAgaGVhZGluZz86IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHBlcnNpc3RlbnQ/OiBib29sZWFuO1xuICBzdGF0ZT86IEJhbm5lclN0YXRlO1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICB3aWR0aD86IEJhbm5lcldpZHRoO1xuICBkaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj4oKTtcbn0iXX0=