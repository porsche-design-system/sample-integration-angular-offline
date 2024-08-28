import { Component, EventEmitter } from '@angular/core';
import { BaseComponentWithTheme } from '../../utils';
import * as i0 from "@angular/core";
export class PLinkTileProduct extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.like = new EventEmitter();
    }
}
PLinkTileProduct.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTileProduct, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLinkTileProduct.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLinkTileProduct, selector: "p-link-tile-product,[p-link-tile-product]", inputs: { aspectRatio: "aspectRatio", description: "description", heading: "heading", href: "href", likeButton: "likeButton", liked: "liked", price: "price", priceOriginal: "priceOriginal", rel: "rel", target: "target", theme: "theme" }, outputs: { like: "like" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTileProduct, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link-tile-product,[p-link-tile-product]',
                    template: '<ng-content />',
                    inputs: ['aspectRatio', 'description', 'heading', 'href', 'likeButton', 'liked', 'price', 'priceOriginal', 'rel', 'target', 'theme'],
                    outputs: ['like']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay10aWxlLXByb2R1Y3Qud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvbGliL2NvbXBvbmVudHMvbGluay10aWxlLXByb2R1Y3Qud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBU3JELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxzQkFBc0I7SUFONUQ7O1FBa0JFLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBK0MsQ0FBQztLQUN4RTs7OEdBYlksZ0JBQWdCO2tHQUFoQixnQkFBZ0IsaVhBSmpCLGdCQUFnQjs0RkFJZixnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztvQkFDcEksT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBCcmVha3BvaW50Q3VzdG9taXphYmxlLCBMaW5rVGlsZVByb2R1Y3RBc3BlY3RSYXRpbywgTGlua1RpbGVQcm9kdWN0TGlrZUV2ZW50RGV0YWlsLCBMaW5rVGlsZVByb2R1Y3RUYXJnZXQsIFRoZW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWxpbmstdGlsZS1wcm9kdWN0LFtwLWxpbmstdGlsZS1wcm9kdWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgLz4nLFxuICBpbnB1dHM6IFsnYXNwZWN0UmF0aW8nLCAnZGVzY3JpcHRpb24nLCAnaGVhZGluZycsICdocmVmJywgJ2xpa2VCdXR0b24nLCAnbGlrZWQnLCAncHJpY2UnLCAncHJpY2VPcmlnaW5hbCcsICdyZWwnLCAndGFyZ2V0JywgJ3RoZW1lJ10sXG4gIG91dHB1dHM6IFsnbGlrZSddXG59KVxuZXhwb3J0IGNsYXNzIFBMaW5rVGlsZVByb2R1Y3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50V2l0aFRoZW1lIHtcbiAgYXNwZWN0UmF0aW8/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPExpbmtUaWxlUHJvZHVjdEFzcGVjdFJhdGlvPjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbiAgbGlrZUJ1dHRvbj86IGJvb2xlYW47XG4gIGxpa2VkPzogYm9vbGVhbjtcbiAgcHJpY2U6IHN0cmluZztcbiAgcHJpY2VPcmlnaW5hbD86IHN0cmluZztcbiAgcmVsPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBMaW5rVGlsZVByb2R1Y3RUYXJnZXQ7XG4gIGRlY2xhcmUgdGhlbWU/OiBUaGVtZTtcbiAgbGlrZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8TGlua1RpbGVQcm9kdWN0TGlrZUV2ZW50RGV0YWlsPj4oKTtcbn0iXX0=