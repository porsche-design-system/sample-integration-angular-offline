import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastManager {
    addMessage(message) {
        const toast = document.body.querySelector('p-toast,[p-toast]');
        customElements.whenDefined(toast.tagName.toLowerCase()).then(() => toast.addMessage(message));
    }
}
ToastManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToastManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ToastManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToastManager, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToastManager, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvdG9hc3QtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sWUFBWTtJQUNoQixVQUFVLENBQUMsT0FBcUI7UUFDckMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBRTVELENBQUM7UUFDRixjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7OzBHQU5VLFlBQVk7OEdBQVosWUFBWSxjQUZYLE1BQU07NEZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRvYXN0TWVzc2FnZSB9IGZyb20gJy4vcHVibGljLWFwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1hbmFnZXIge1xuICBwdWJsaWMgYWRkTWVzc2FnZShtZXNzYWdlOiBUb2FzdE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcigncC10b2FzdCxbcC10b2FzdF0nKSBhcyBIVE1MRWxlbWVudCAmIHtcbiAgICAgIGFkZE1lc3NhZ2UobWVzc2FnZTogVG9hc3RNZXNzYWdlKTogdm9pZDtcbiAgICB9O1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRvYXN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkudGhlbigoKSA9PiB0b2FzdC5hZGRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuIl19