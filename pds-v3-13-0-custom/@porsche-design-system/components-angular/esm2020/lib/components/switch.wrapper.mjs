import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PSwitch extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.switchChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PSwitch.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSwitch, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSwitch.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSwitch, selector: "p-switch,[p-switch]", inputs: { alignLabel: "alignLabel", checked: "checked", disabled: "disabled", hideLabel: "hideLabel", loading: "loading", stretch: "stretch", theme: "theme" }, outputs: { switchChange: "switchChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-switch,[p-switch]',
                    template: '<ng-content />',
                    inputs: ['alignLabel', 'checked', 'disabled', 'hideLabel', 'loading', 'stretch', 'theme'],
                    outputs: ['switchChange', 'update']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLE9BQVEsU0FBUSxzQkFBc0I7SUFObkQ7O1FBY0Usa0JBQWtCO1FBQ2xCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7UUFDeEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUF3QyxDQUFDO0tBQ25FOztxR0FYWSxPQUFPO3lGQUFQLE9BQU8sK1NBSlIsZ0JBQWdCOzRGQUlmLE9BQU87a0JBTm5CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO29CQUN6RixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBCcmVha3BvaW50Q3VzdG9taXphYmxlLCBTd2l0Y2hBbGlnbkxhYmVsLCBTd2l0Y2hVcGRhdGVFdmVudERldGFpbCwgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Atc3dpdGNoLFtwLXN3aXRjaF0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2FsaWduTGFiZWwnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdoaWRlTGFiZWwnLCAnbG9hZGluZycsICdzdHJldGNoJywgJ3RoZW1lJ10sXG4gIG91dHB1dHM6IFsnc3dpdGNoQ2hhbmdlJywgJ3VwZGF0ZSddXG59KVxuZXhwb3J0IGNsYXNzIFBTd2l0Y2ggZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgYWxpZ25MYWJlbD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8U3dpdGNoQWxpZ25MYWJlbD47XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGhpZGVMYWJlbD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8Ym9vbGVhbj47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBzdHJldGNoPzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxib29sZWFuPjtcbiAgZGVjbGFyZSB0aGVtZT86IFRoZW1lO1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgc3dpdGNoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxTd2l0Y2hVcGRhdGVFdmVudERldGFpbD4+KCk7XG4gIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8U3dpdGNoVXBkYXRlRXZlbnREZXRhaWw+PigpO1xufSJdfQ==