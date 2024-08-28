import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PAccordion extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.accordionChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PAccordion.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PAccordion, deps: null, target: i0.ɵɵFactoryTarget.Component });
PAccordion.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PAccordion, selector: "p-accordion,[p-accordion]", inputs: { compact: "compact", heading: "heading", open: "open", size: "size", tag: "tag", theme: "theme" }, outputs: { accordionChange: "accordionChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-accordion,[p-accordion]',
                    template: '<ng-content />',
                    inputs: ['compact', 'heading', 'open', 'size', 'tag', 'theme'],
                    outputs: ['accordionChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLFVBQVcsU0FBUSxzQkFBc0I7SUFOdEQ7O1FBYUUsa0JBQWtCO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTJDLENBQUM7UUFDOUUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUEyQyxDQUFDO0tBQ3RFOzt3R0FWWSxVQUFVOzRGQUFWLFVBQVUsdVFBSlgsZ0JBQWdCOzRGQUlmLFVBQVU7a0JBTnRCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztpQkFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgQWNjb3JkaW9uVXBkYXRlRXZlbnREZXRhaWwsIEJyZWFrcG9pbnRDdXN0b21pemFibGUsIEFjY29yZGlvblNpemUsIEFjY29yZGlvblRhZywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYWNjb3JkaW9uLFtwLWFjY29yZGlvbl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2NvbXBhY3QnLCAnaGVhZGluZycsICdvcGVuJywgJ3NpemUnLCAndGFnJywgJ3RoZW1lJ10sXG4gIG91dHB1dHM6IFsnYWNjb3JkaW9uQ2hhbmdlJywgJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBBY2NvcmRpb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgY29tcGFjdD86IGJvb2xlYW47XG4gIGhlYWRpbmc/OiBzdHJpbmc7XG4gIG9wZW4/OiBib29sZWFuO1xuICBzaXplPzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxBY2NvcmRpb25TaXplPjtcbiAgdGFnPzogQWNjb3JkaW9uVGFnO1xuICBkZWNsYXJlIHRoZW1lPzogVGhlbWU7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBhY2NvcmRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEFjY29yZGlvblVwZGF0ZUV2ZW50RGV0YWlsPj4oKTtcbiAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxBY2NvcmRpb25VcGRhdGVFdmVudERldGFpbD4+KCk7XG59Il19