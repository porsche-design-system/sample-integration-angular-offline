import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PInlineNotification extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.action = new EventEmitter();
        this.dismiss = new EventEmitter();
    }
}
PInlineNotification.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PInlineNotification, deps: null, target: i0.ɵɵFactoryTarget.Component });
PInlineNotification.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PInlineNotification, selector: "p-inline-notification,[p-inline-notification]", inputs: { actionIcon: "actionIcon", actionLabel: "actionLabel", actionLoading: "actionLoading", description: "description", dismissButton: "dismissButton", heading: "heading", persistent: "persistent", state: "state", theme: "theme" }, outputs: { action: "action", dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PInlineNotification, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-inline-notification,[p-inline-notification]',
                    template: '<ng-content />',
                    inputs: ['actionIcon', 'actionLabel', 'actionLoading', 'description', 'dismissButton', 'heading', 'persistent', 'state', 'theme'],
                    outputs: ['action', 'dismiss']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLW5vdGlmaWNhdGlvbi53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13cmFwcGVyL3NyYy9saWIvY29tcG9uZW50cy9pbmxpbmUtbm90aWZpY2F0aW9uLndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVNyRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsc0JBQXNCO0lBTi9EOztRQWlCRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDL0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0tBQ2pEOztpSEFiWSxtQkFBbUI7cUdBQW5CLG1CQUFtQiwyWUFKcEIsZ0JBQWdCOzRGQUlmLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsK0NBQStDO29CQUN6RCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztvQkFDakksT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgSW5saW5lTm90aWZpY2F0aW9uQWN0aW9uSWNvbiwgSW5saW5lTm90aWZpY2F0aW9uU3RhdGUsIFRoZW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWlubGluZS1ub3RpZmljYXRpb24sW3AtaW5saW5lLW5vdGlmaWNhdGlvbl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2FjdGlvbkljb24nLCAnYWN0aW9uTGFiZWwnLCAnYWN0aW9uTG9hZGluZycsICdkZXNjcmlwdGlvbicsICdkaXNtaXNzQnV0dG9uJywgJ2hlYWRpbmcnLCAncGVyc2lzdGVudCcsICdzdGF0ZScsICd0aGVtZSddLFxuICBvdXRwdXRzOiBbJ2FjdGlvbicsICdkaXNtaXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUElubGluZU5vdGlmaWNhdGlvbiBleHRlbmRzIEJhc2VDb21wb25lbnRXaXRoVGhlbWUge1xuICBhY3Rpb25JY29uPzogSW5saW5lTm90aWZpY2F0aW9uQWN0aW9uSWNvbjtcbiAgYWN0aW9uTGFiZWw/OiBzdHJpbmc7XG4gIGFjdGlvbkxvYWRpbmc/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGlzbWlzc0J1dHRvbj86IGJvb2xlYW47XG4gIGhlYWRpbmc/OiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBwZXJzaXN0ZW50PzogYm9vbGVhbjtcbiAgc3RhdGU/OiBJbmxpbmVOb3RpZmljYXRpb25TdGF0ZTtcbiAgZGVjbGFyZSB0aGVtZT86IFRoZW1lO1xuICBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PigpO1xuICBkaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj4oKTtcbn0iXX0=