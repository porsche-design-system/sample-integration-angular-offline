import { inject, NgModule, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { load } from '@porsche-design-system/components-js';
import { DECLARATIONS } from './lib/components/barrel';
import { THEME_TOKEN } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./lib/components/accordion.wrapper";
import * as i2 from "./lib/components/banner.wrapper";
import * as i3 from "./lib/components/button.wrapper";
import * as i4 from "./lib/components/button-group.wrapper";
import * as i5 from "./lib/components/button-pure.wrapper";
import * as i6 from "./lib/components/button-tile.wrapper";
import * as i7 from "./lib/components/carousel.wrapper";
import * as i8 from "./lib/components/checkbox-wrapper.wrapper";
import * as i9 from "./lib/components/content-wrapper.wrapper";
import * as i10 from "./lib/components/crest.wrapper";
import * as i11 from "./lib/components/display.wrapper";
import * as i12 from "./lib/components/divider.wrapper";
import * as i13 from "./lib/components/fieldset.wrapper";
import * as i14 from "./lib/components/fieldset-wrapper.wrapper";
import * as i15 from "./lib/components/flex.wrapper";
import * as i16 from "./lib/components/flex-item.wrapper";
import * as i17 from "./lib/components/flyout.wrapper";
import * as i18 from "./lib/components/flyout-navigation.wrapper";
import * as i19 from "./lib/components/flyout-navigation-item.wrapper";
import * as i20 from "./lib/components/grid.wrapper";
import * as i21 from "./lib/components/grid-item.wrapper";
import * as i22 from "./lib/components/heading.wrapper";
import * as i23 from "./lib/components/headline.wrapper";
import * as i24 from "./lib/components/icon.wrapper";
import * as i25 from "./lib/components/inline-notification.wrapper";
import * as i26 from "./lib/components/link.wrapper";
import * as i27 from "./lib/components/link-pure.wrapper";
import * as i28 from "./lib/components/link-social.wrapper";
import * as i29 from "./lib/components/link-tile.wrapper";
import * as i30 from "./lib/components/link-tile-model-signature.wrapper";
import * as i31 from "./lib/components/link-tile-product.wrapper";
import * as i32 from "./lib/components/marque.wrapper";
import * as i33 from "./lib/components/modal.wrapper";
import * as i34 from "./lib/components/model-signature.wrapper";
import * as i35 from "./lib/components/multi-select.wrapper";
import * as i36 from "./lib/components/multi-select-option.wrapper";
import * as i37 from "./lib/components/pagination.wrapper";
import * as i38 from "./lib/components/pin-code.wrapper";
import * as i39 from "./lib/components/popover.wrapper";
import * as i40 from "./lib/components/radio-button-wrapper.wrapper";
import * as i41 from "./lib/components/scroller.wrapper";
import * as i42 from "./lib/components/segmented-control.wrapper";
import * as i43 from "./lib/components/segmented-control-item.wrapper";
import * as i44 from "./lib/components/select.wrapper";
import * as i45 from "./lib/components/select-option.wrapper";
import * as i46 from "./lib/components/select-wrapper.wrapper";
import * as i47 from "./lib/components/spinner.wrapper";
import * as i48 from "./lib/components/stepper-horizontal.wrapper";
import * as i49 from "./lib/components/stepper-horizontal-item.wrapper";
import * as i50 from "./lib/components/switch.wrapper";
import * as i51 from "./lib/components/table.wrapper";
import * as i52 from "./lib/components/table-body.wrapper";
import * as i53 from "./lib/components/table-cell.wrapper";
import * as i54 from "./lib/components/table-head.wrapper";
import * as i55 from "./lib/components/table-head-cell.wrapper";
import * as i56 from "./lib/components/table-head-row.wrapper";
import * as i57 from "./lib/components/table-row.wrapper";
import * as i58 from "./lib/components/tabs.wrapper";
import * as i59 from "./lib/components/tabs-bar.wrapper";
import * as i60 from "./lib/components/tabs-item.wrapper";
import * as i61 from "./lib/components/tag.wrapper";
import * as i62 from "./lib/components/tag-dismissible.wrapper";
import * as i63 from "./lib/components/text.wrapper";
import * as i64 from "./lib/components/text-field-wrapper.wrapper";
import * as i65 from "./lib/components/text-list.wrapper";
import * as i66 from "./lib/components/text-list-item.wrapper";
import * as i67 from "./lib/components/textarea-wrapper.wrapper";
import * as i68 from "./lib/components/toast.wrapper";
import * as i69 from "./lib/components/wordmark.wrapper";
export class DefaultConfig {
    constructor() {
        this.prefix = '';
        // other component configurations should probably go into a separate `components`, `componentProps` or `componentDefaults`
        // property similar to https://mui.com/material-ui/customization/theme-components/
    }
}
// TODO: unit tests are missing
export class PorscheDesignSystemModule {
    constructor(configParam) {
        this.theme$ = inject(THEME_TOKEN);
        const configs = configParam || [new DefaultConfig()];
        this.theme$.next(configs[0].theme || 'light'); // first config sets the theme
        configs.forEach(load);
    }
    static load(config) {
        return {
            ngModule: PorscheDesignSystemModule,
            providers: [
                {
                    provide: DefaultConfig,
                    multi: true,
                    useValue: config,
                },
            ],
        };
    }
}
PorscheDesignSystemModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PorscheDesignSystemModule, deps: [{ token: DefaultConfig, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
PorscheDesignSystemModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: PorscheDesignSystemModule, declarations: [i1.PAccordion, i2.PBanner, i3.PButton, i4.PButtonGroup, i5.PButtonPure, i6.PButtonTile, i7.PCarousel, i8.PCheckboxWrapper, i9.PContentWrapper, i10.PCrest, i11.PDisplay, i12.PDivider, i13.PFieldset, i14.PFieldsetWrapper, i15.PFlex, i16.PFlexItem, i17.PFlyout, i18.PFlyoutNavigation, i19.PFlyoutNavigationItem, i20.PGrid, i21.PGridItem, i22.PHeading, i23.PHeadline, i24.PIcon, i25.PInlineNotification, i26.PLink, i27.PLinkPure, i28.PLinkSocial, i29.PLinkTile, i30.PLinkTileModelSignature, i31.PLinkTileProduct, i32.PMarque, i33.PModal, i34.PModelSignature, i35.PMultiSelect, i36.PMultiSelectOption, i37.PPagination, i38.PPinCode, i39.PPopover, i40.PRadioButtonWrapper, i41.PScroller, i42.PSegmentedControl, i43.PSegmentedControlItem, i44.PSelect, i45.PSelectOption, i46.PSelectWrapper, i47.PSpinner, i48.PStepperHorizontal, i49.PStepperHorizontalItem, i50.PSwitch, i51.PTable, i52.PTableBody, i53.PTableCell, i54.PTableHead, i55.PTableHeadCell, i56.PTableHeadRow, i57.PTableRow, i58.PTabs, i59.PTabsBar, i60.PTabsItem, i61.PTag, i62.PTagDismissible, i63.PText, i64.PTextFieldWrapper, i65.PTextList, i66.PTextListItem, i67.PTextareaWrapper, i68.PToast, i69.PWordmark], exports: [i1.PAccordion, i2.PBanner, i3.PButton, i4.PButtonGroup, i5.PButtonPure, i6.PButtonTile, i7.PCarousel, i8.PCheckboxWrapper, i9.PContentWrapper, i10.PCrest, i11.PDisplay, i12.PDivider, i13.PFieldset, i14.PFieldsetWrapper, i15.PFlex, i16.PFlexItem, i17.PFlyout, i18.PFlyoutNavigation, i19.PFlyoutNavigationItem, i20.PGrid, i21.PGridItem, i22.PHeading, i23.PHeadline, i24.PIcon, i25.PInlineNotification, i26.PLink, i27.PLinkPure, i28.PLinkSocial, i29.PLinkTile, i30.PLinkTileModelSignature, i31.PLinkTileProduct, i32.PMarque, i33.PModal, i34.PModelSignature, i35.PMultiSelect, i36.PMultiSelectOption, i37.PPagination, i38.PPinCode, i39.PPopover, i40.PRadioButtonWrapper, i41.PScroller, i42.PSegmentedControl, i43.PSegmentedControlItem, i44.PSelect, i45.PSelectOption, i46.PSelectWrapper, i47.PSpinner, i48.PStepperHorizontal, i49.PStepperHorizontalItem, i50.PSwitch, i51.PTable, i52.PTableBody, i53.PTableCell, i54.PTableHead, i55.PTableHeadCell, i56.PTableHeadRow, i57.PTableRow, i58.PTabs, i59.PTabsBar, i60.PTabsItem, i61.PTag, i62.PTagDismissible, i63.PText, i64.PTextFieldWrapper, i65.PTextList, i66.PTextListItem, i67.PTextareaWrapper, i68.PToast, i69.PWordmark] });
PorscheDesignSystemModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PorscheDesignSystemModule, providers: [
        {
            provide: THEME_TOKEN,
            useValue: new BehaviorSubject('light'),
        },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PorscheDesignSystemModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    providers: [
                        {
                            provide: THEME_TOKEN,
                            useValue: new BehaviorSubject('light'),
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: DefaultConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9yc2NoZS1kZXNpZ24tc3lzdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItd3JhcHBlci9zcmMvcG9yc2NoZS1kZXNpZ24tc3lzdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUE0QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0QyxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUNFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWiwwSEFBMEg7UUFDMUgsa0ZBQWtGO0lBQ3BGLENBQUM7Q0FBQTtBQUVELCtCQUErQjtBQVcvQixNQUFNLE9BQU8seUJBQXlCO0lBR3BDLFlBQXdCLFdBQTBCO1FBRjFDLFdBQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHbkMsTUFBTSxPQUFPLEdBQUksV0FBMEMsSUFBSSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBQzdFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBdUM7UUFDakQsT0FBTztZQUNMLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzt1SEFwQlUseUJBQXlCO3dIQUF6Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixhQVB6QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQztTQUN2QztLQUNGOzRGQUVVLHlCQUF5QjtrQkFWckMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQzt5QkFDdkM7cUJBQ0Y7aUJBQ0Y7OzBCQUljLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIHR5cGUgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGxvYWQgfSBmcm9tICdAcG9yc2NoZS1kZXNpZ24tc3lzdGVtL2NvbXBvbmVudHMtanMnO1xuaW1wb3J0IHsgREVDTEFSQVRJT05TIH0gZnJvbSAnLi9saWIvY29tcG9uZW50cy9iYXJyZWwnO1xuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJy4vbGliL3R5cGVzJztcbmltcG9ydCB7IFRIRU1FX1RPS0VOIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFBvcnNjaGVEZXNpZ25TeXN0ZW1Nb2R1bGVDb25maWcgPSB7XG4gIHByZWZpeD86IHN0cmluZztcbiAgY2RuPzogJ2F1dG8nIHwgJ2NuJztcbiAgdGhlbWU/OiBUaGVtZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29uZmlnIGltcGxlbWVudHMgUG9yc2NoZURlc2lnblN5c3RlbU1vZHVsZUNvbmZpZyB7XG4gIHByZWZpeCA9ICcnO1xuICB0aGVtZTogJ2xpZ2h0JzsgLy8gc2luY2UgdGhlbWUgZXhpc3RzIG9uIGFsbW9zdCBldmVyeSBjb21wb25lbnQsIGl0IGlzIGRlZmluZWQgaGVyZSBraW5kIG9mIGxpa2UgYSBnbG9iYWwgcHJvcFxuICAvLyBvdGhlciBjb21wb25lbnQgY29uZmlndXJhdGlvbnMgc2hvdWxkIHByb2JhYmx5IGdvIGludG8gYSBzZXBhcmF0ZSBgY29tcG9uZW50c2AsIGBjb21wb25lbnRQcm9wc2Agb3IgYGNvbXBvbmVudERlZmF1bHRzYFxuICAvLyBwcm9wZXJ0eSBzaW1pbGFyIHRvIGh0dHBzOi8vbXVpLmNvbS9tYXRlcmlhbC11aS9jdXN0b21pemF0aW9uL3RoZW1lLWNvbXBvbmVudHMvXG59XG5cbi8vIFRPRE86IHVuaXQgdGVzdHMgYXJlIG1pc3NpbmdcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogREVDTEFSQVRJT05TLFxuICBleHBvcnRzOiBERUNMQVJBVElPTlMsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRIRU1FX1RPS0VOLFxuICAgICAgdXNlVmFsdWU6IG5ldyBCZWhhdmlvclN1YmplY3QoJ2xpZ2h0JyksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUG9yc2NoZURlc2lnblN5c3RlbU1vZHVsZSB7XG4gIHByaXZhdGUgdGhlbWUkID0gaW5qZWN0KFRIRU1FX1RPS0VOKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb25maWdQYXJhbTogRGVmYXVsdENvbmZpZykge1xuICAgIGNvbnN0IGNvbmZpZ3MgPSAoY29uZmlnUGFyYW0gYXMgdW5rbm93biBhcyBEZWZhdWx0Q29uZmlnW10pIHx8IFtuZXcgRGVmYXVsdENvbmZpZygpXTtcbiAgICB0aGlzLnRoZW1lJC5uZXh0KGNvbmZpZ3NbMF0udGhlbWUgfHwgJ2xpZ2h0Jyk7IC8vIGZpcnN0IGNvbmZpZyBzZXRzIHRoZSB0aGVtZVxuICAgIGNvbmZpZ3MuZm9yRWFjaChsb2FkKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkKGNvbmZpZzogUG9yc2NoZURlc2lnblN5c3RlbU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UG9yc2NoZURlc2lnblN5c3RlbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUG9yc2NoZURlc2lnblN5c3RlbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGVmYXVsdENvbmZpZyxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSwgLy8gdG8gc3VwcG9ydCBtdWx0aXBsZSBwcmVmaXhlcyBpbiBzYW1lIG1vZHVsZVxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==