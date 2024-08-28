import { ChangeDetectionStrategy, Component, inject, InjectionToken, } from '@angular/core';
import * as i0 from "@angular/core";
export const THEME_TOKEN = new InjectionToken('pdsTheme');
export class BaseComponent {
    constructor(cdr, elementRef) {
        cdr.detach();
        this.el = elementRef.nativeElement;
    }
    ngOnChanges(props) {
        for (const prop in props) {
            this.el[prop] = props[prop].currentValue;
        }
    }
}
BaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BaseComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BaseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: BaseComponent, selector: "ng-component", usesOnChanges: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; } });
export class BaseComponentWithTheme extends BaseComponent {
    constructor() {
        super(...arguments);
        this.themeSubscription = inject(THEME_TOKEN).subscribe((theme) => {
            this.el.theme = this.theme || theme;
        });
    }
    ngOnDestroy() {
        // need to manually unsubscribe or otherwise subscription is still active even after unmount
        // https://rafaelneto.dev/en/blog/unsubscribing-behaviorsubject-observable-angular/
        this.themeSubscription.unsubscribe();
    }
}
BaseComponentWithTheme.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BaseComponentWithTheme, deps: null, target: i0.ɵɵFactoryTarget.Component });
BaseComponentWithTheme.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: BaseComponentWithTheme, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: BaseComponentWithTheme, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdyYXBwZXIvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULE1BQU0sRUFDTixjQUFjLEdBR2YsTUFBTSxlQUFlLENBQUM7O0FBSXZCLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBeUIsVUFBVSxDQUFDLENBQUM7QUFNbEYsTUFBTSxPQUFnQixhQUFhO0lBR2pDLFlBQVksR0FBc0IsRUFBRSxVQUFzQjtRQUN4RCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFzRjtRQUNoRyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDMUM7SUFDSCxDQUFDOzsyR0FabUIsYUFBYTsrRkFBYixhQUFhLHlFQUh2QixFQUFFOzRGQUdRLGFBQWE7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOztBQW1CRCxNQUFNLE9BQWdCLHNCQUF1QixTQUFRLGFBQWE7SUFIbEU7O1FBS1Usc0JBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0tBUUo7SUFMQyxXQUFXO1FBQ1QsNEZBQTRGO1FBQzVGLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7b0hBWG1CLHNCQUFzQjt3R0FBdEIsc0JBQXNCLDJFQUZoQyxFQUFFOzRGQUVRLHNCQUFzQjtrQkFIM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBpbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICB0eXBlIE9uQ2hhbmdlcyxcbiAgdHlwZSBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnLi9saWIvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QmVoYXZpb3JTdWJqZWN0PFRoZW1lPj4oJ3Bkc1RoZW1lJyk7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgY2RyLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhwcm9wczogUmVjb3JkPHN0cmluZywgeyBwcmV2aW91c1ZhbHVlOiBhbnk7IGN1cnJlbnRWYWx1ZTogYW55OyBmaXJzdENoYW5nZTogYm9vbGVhbiB9Pik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgdGhpcy5lbFtwcm9wXSA9IHByb3BzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbXBvbmVudFdpdGhUaGVtZSBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgZGVjbGFyZSBlbDogSFRNTEVsZW1lbnQgJiB7IHRoZW1lOiBUaGVtZSB9O1xuICBwcml2YXRlIHRoZW1lU3Vic2NyaXB0aW9uID0gaW5qZWN0KFRIRU1FX1RPS0VOKS5zdWJzY3JpYmUoKHRoZW1lKSA9PiB7XG4gICAgdGhpcy5lbC50aGVtZSA9IHRoaXMudGhlbWUgfHwgdGhlbWU7XG4gIH0pO1xuICB0aGVtZT86IFRoZW1lO1xuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIG5lZWQgdG8gbWFudWFsbHkgdW5zdWJzY3JpYmUgb3Igb3RoZXJ3aXNlIHN1YnNjcmlwdGlvbiBpcyBzdGlsbCBhY3RpdmUgZXZlbiBhZnRlciB1bm1vdW50XG4gICAgLy8gaHR0cHM6Ly9yYWZhZWxuZXRvLmRldi9lbi9ibG9nL3Vuc3Vic2NyaWJpbmctYmVoYXZpb3JzdWJqZWN0LW9ic2VydmFibGUtYW5ndWxhci9cbiAgICB0aGlzLnRoZW1lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==