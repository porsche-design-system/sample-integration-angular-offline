import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PModal extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.close = new EventEmitter();
        this.dismiss = new EventEmitter();
    }
}
PModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PModal, deps: null, target: i0.ɵɵFactoryTarget.Component });
PModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PModal, selector: "p-modal,[p-modal]", inputs: { aria: "aria", backdrop: "backdrop", disableBackdropClick: "disableBackdropClick", disableCloseButton: "disableCloseButton", dismissButton: "dismissButton", fullscreen: "fullscreen", heading: "heading", open: "open", theme: "theme" }, outputs: { close: "close", dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PModal, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-modal,[p-modal]',
                    template: '<ng-content />',
                    inputs: ['aria', 'backdrop', 'disableBackdropClick', 'disableCloseButton', 'dismissButton', 'fullscreen', 'heading', 'open', 'theme'],
                    outputs: ['close', 'dismiss']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxNQUFPLFNBQVEsc0JBQXNCO0lBTmxEOztRQWlCRSxrQkFBa0I7UUFDbEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQzlDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztLQUNqRDs7b0dBZFksTUFBTTt3RkFBTixNQUFNLHFYQUpQLGdCQUFnQjs0RkFJZixNQUFNO2tCQU5sQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztvQkFDckksT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgU2VsZWN0ZWRBcmlhQXR0cmlidXRlcywgTW9kYWxBcmlhQXR0cmlidXRlLCBNb2RhbEJhY2tkcm9wLCBCcmVha3BvaW50Q3VzdG9taXphYmxlLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1tb2RhbCxbcC1tb2RhbF0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2FyaWEnLCAnYmFja2Ryb3AnLCAnZGlzYWJsZUJhY2tkcm9wQ2xpY2snLCAnZGlzYWJsZUNsb3NlQnV0dG9uJywgJ2Rpc21pc3NCdXR0b24nLCAnZnVsbHNjcmVlbicsICdoZWFkaW5nJywgJ29wZW4nLCAndGhlbWUnXSxcbiAgb3V0cHV0czogWydjbG9zZScsICdkaXNtaXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGFyaWE/OiBTZWxlY3RlZEFyaWFBdHRyaWJ1dGVzPE1vZGFsQXJpYUF0dHJpYnV0ZT47XG4gIGJhY2tkcm9wPzogTW9kYWxCYWNrZHJvcDtcbiAgZGlzYWJsZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgZGlzYWJsZUNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgZGlzbWlzc0J1dHRvbj86IGJvb2xlYW47XG4gIGZ1bGxzY3JlZW4/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPGJvb2xlYW4+O1xuICBoZWFkaW5nPzogc3RyaW5nO1xuICBvcGVuOiBib29sZWFuO1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+KCk7XG4gIGRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PigpO1xufSJdfQ==