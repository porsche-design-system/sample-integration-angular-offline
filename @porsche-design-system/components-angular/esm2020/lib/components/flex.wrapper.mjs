import { Component } from '@angular/core';
import { BaseComponent } from '../../utils';
import * as i0 from "@angular/core";
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
export class PFlex extends BaseComponent {
}
PFlex.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlex, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlex.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlex, selector: "p-flex,[p-flex]", inputs: { alignContent: "alignContent", alignItems: "alignItems", direction: "direction", inline: "inline", justifyContent: "justifyContent", wrap: "wrap" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlex, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flex,[p-flex]',
                    template: '<ng-content />',
                    inputs: ['alignContent', 'alignItems', 'direction', 'inline', 'justifyContent', 'wrap']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13cmFwcGVyL3NyYy9saWIvY29tcG9uZW50cy9mbGV4LndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUc1QyxzR0FBc0c7QUFNdEcsTUFBTSxPQUFPLEtBQU0sU0FBUSxhQUFhOzttR0FBM0IsS0FBSzt1RkFBTCxLQUFLLDRPQUhOLGdCQUFnQjs0RkFHZixLQUFLO2tCQUxqQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7aUJBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBCcmVha3BvaW50Q3VzdG9taXphYmxlLCBGbGV4QWxpZ25Db250ZW50LCBGbGV4QWxpZ25JdGVtcywgRmxleERpcmVjdGlvbiwgRmxleElubGluZSwgRmxleEp1c3RpZnlDb250ZW50LCBGbGV4V3JhcCB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqIEBkZXByZWNhdGVkIHNpbmNlIHYzLjAuMCwgd2lsbCBiZSByZW1vdmVkIHdpdGggbmV4dCBtYWpvciByZWxlYXNlLiBVc2UgbmF0aXZlIENTUyBGbGV4IGluc3RlYWQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWZsZXgsW3AtZmxleF0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50IC8+JyxcbiAgaW5wdXRzOiBbJ2FsaWduQ29udGVudCcsICdhbGlnbkl0ZW1zJywgJ2RpcmVjdGlvbicsICdpbmxpbmUnLCAnanVzdGlmeUNvbnRlbnQnLCAnd3JhcCddXG59KVxuZXhwb3J0IGNsYXNzIFBGbGV4IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGFsaWduQ29udGVudD86IEJyZWFrcG9pbnRDdXN0b21pemFibGU8RmxleEFsaWduQ29udGVudD47XG4gIGFsaWduSXRlbXM/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPEZsZXhBbGlnbkl0ZW1zPjtcbiAgZGlyZWN0aW9uPzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxGbGV4RGlyZWN0aW9uPjtcbiAgaW5saW5lPzogQnJlYWtwb2ludEN1c3RvbWl6YWJsZTxGbGV4SW5saW5lPjtcbiAganVzdGlmeUNvbnRlbnQ/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPEZsZXhKdXN0aWZ5Q29udGVudD47XG4gIHdyYXA/OiBCcmVha3BvaW50Q3VzdG9taXphYmxlPEZsZXhXcmFwPjtcbn0iXX0=