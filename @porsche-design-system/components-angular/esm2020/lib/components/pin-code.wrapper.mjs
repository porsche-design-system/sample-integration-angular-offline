import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PPinCode extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.update = new EventEmitter();
    }
}
PPinCode.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPinCode, deps: null, target: i0.ɵɵFactoryTarget.Component });
PPinCode.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PPinCode, selector: "p-pin-code,[p-pin-code]", inputs: { description: "description", disabled: "disabled", hideLabel: "hideLabel", label: "label", length: "length", loading: "loading", message: "message", name: "name", required: "required", state: "state", theme: "theme", type: "type", value: "value" }, outputs: { update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPinCode, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-pin-code,[p-pin-code]',
                    template: '<ng-content />',
                    inputs: ['description', 'disabled', 'hideLabel', 'label', 'length', 'loading', 'message', 'name', 'required', 'state', 'theme', 'type', 'value'],
                    outputs: ['update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluLWNvZGUud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvcGluLWNvZGUud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxRQUFTLFNBQVEsc0JBQXNCO0lBTnBEOztRQW9CRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlDLENBQUM7S0FDcEU7O3NHQWZZLFFBQVE7MEZBQVIsUUFBUSx1WEFKVCxnQkFBZ0I7NEZBSWYsUUFBUTtrQkFOcEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7b0JBQ2hKLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgQnJlYWtwb2ludEN1c3RvbWl6YWJsZSwgUGluQ29kZUxlbmd0aCwgUGluQ29kZVVwZGF0ZUV2ZW50RGV0YWlsLCBQaW5Db2RlU3RhdGUsIFRoZW1lLCBQaW5Db2RlVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1waW4tY29kZSxbcC1waW4tY29kZV0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2Rlc2NyaXB0aW9uJywgJ2Rpc2FibGVkJywgJ2hpZGVMYWJlbCcsICdsYWJlbCcsICdsZW5ndGgnLCAnbG9hZGluZycsICdtZXNzYWdlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAnc3RhdGUnLCAndGhlbWUnLCAndHlwZScsICd2YWx1ZSddLFxuICBvdXRwdXRzOiBbJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBQaW5Db2RlIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGhpZGVMYWJlbD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8Ym9vbGVhbj47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsZW5ndGg/OiBQaW5Db2RlTGVuZ3RoO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBzdGF0ZT86IFBpbkNvZGVTdGF0ZTtcbiAgZGVjbGFyZSB0aGVtZT86IFRoZW1lO1xuICB0eXBlPzogUGluQ29kZVR5cGU7XG4gIHZhbHVlPzogc3RyaW5nO1xuICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PFBpbkNvZGVVcGRhdGVFdmVudERldGFpbD4+KCk7XG59Il19