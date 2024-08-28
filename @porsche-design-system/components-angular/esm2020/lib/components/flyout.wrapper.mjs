import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PFlyout extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.dismiss = new EventEmitter();
    }
}
PFlyout.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyout, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlyout.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlyout, selector: "p-flyout,[p-flyout]", inputs: { aria: "aria", open: "open", position: "position", theme: "theme" }, outputs: { dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyout, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flyout,[p-flyout]',
                    template: '<ng-content />',
                    inputs: ['aria', 'open', 'position', 'theme'],
                    outputs: ['dismiss']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZseW91dC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLE9BQVEsU0FBUSxzQkFBc0I7SUFObkQ7O1FBV0UsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0tBQ2pEOztxR0FOWSxPQUFPO3lGQUFQLE9BQU8saU1BSlIsZ0JBQWdCOzRGQUlmLE9BQU87a0JBTm5CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO29CQUM3QyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnRXaXRoVGhlbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdGVkQXJpYUF0dHJpYnV0ZXMsIEZseW91dEFyaWFBdHRyaWJ1dGUsIEZseW91dFBvc2l0aW9uLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1mbHlvdXQsW3AtZmx5b3V0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnYXJpYScsICdvcGVuJywgJ3Bvc2l0aW9uJywgJ3RoZW1lJ10sXG4gIG91dHB1dHM6IFsnZGlzbWlzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBGbHlvdXQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgYXJpYT86IFNlbGVjdGVkQXJpYUF0dHJpYnV0ZXM8Rmx5b3V0QXJpYUF0dHJpYnV0ZT47XG4gIG9wZW46IGJvb2xlYW47XG4gIHBvc2l0aW9uPzogRmx5b3V0UG9zaXRpb247XG4gIGRlY2xhcmUgdGhlbWU/OiBUaGVtZTtcbiAgZGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+KCk7XG59Il19