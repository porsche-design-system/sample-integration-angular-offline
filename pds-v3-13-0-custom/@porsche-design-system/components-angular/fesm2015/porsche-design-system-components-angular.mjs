import { load } from '@porsche-design-system/components-js';
export { componentsReady } from '@porsche-design-system/components-js';
import * as i0 from '@angular/core';
import { InjectionToken, Component, ChangeDetectionStrategy, inject, EventEmitter, NgModule, Optional, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const THEME_TOKEN = new InjectionToken('pdsTheme');
class BaseComponent {
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
class BaseComponentWithTheme extends BaseComponent {
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

class PAccordion extends BaseComponentWithTheme {
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

class PBanner extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.dismiss = new EventEmitter();
    }
}
PBanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PBanner, deps: null, target: i0.ɵɵFactoryTarget.Component });
PBanner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PBanner, selector: "p-banner,[p-banner]", inputs: { description: "description", dismissButton: "dismissButton", heading: "heading", open: "open", persistent: "persistent", state: "state", theme: "theme", width: "width" }, outputs: { dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PBanner, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-banner,[p-banner]',
                    template: '<ng-content />',
                    inputs: ['description', 'dismissButton', 'heading', 'open', 'persistent', 'state', 'theme', 'width'],
                    outputs: ['dismiss']
                }]
        }] });

class PButton extends BaseComponentWithTheme {
}
PButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButton, deps: null, target: i0.ɵɵFactoryTarget.Component });
PButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PButton, selector: "p-button,[p-button]", inputs: { aria: "aria", disabled: "disabled", hideLabel: "hideLabel", icon: "icon", iconSource: "iconSource", loading: "loading", name: "name", theme: "theme", type: "type", value: "value", variant: "variant" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-button,[p-button]',
                    template: '<ng-content />',
                    inputs: ['aria', 'disabled', 'hideLabel', 'icon', 'iconSource', 'loading', 'name', 'theme', 'type', 'value', 'variant']
                }]
        }] });

class PButtonGroup extends BaseComponent {
}
PButtonGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonGroup, deps: null, target: i0.ɵɵFactoryTarget.Component });
PButtonGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PButtonGroup, selector: "p-button-group,[p-button-group]", inputs: { direction: "direction" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-button-group,[p-button-group]',
                    template: '<ng-content />',
                    inputs: ['direction']
                }]
        }] });

class PButtonPure extends BaseComponentWithTheme {
}
PButtonPure.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonPure, deps: null, target: i0.ɵɵFactoryTarget.Component });
PButtonPure.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PButtonPure, selector: "p-button-pure,[p-button-pure]", inputs: { active: "active", alignLabel: "alignLabel", aria: "aria", disabled: "disabled", hideLabel: "hideLabel", icon: "icon", iconSource: "iconSource", loading: "loading", name: "name", size: "size", stretch: "stretch", theme: "theme", type: "type", value: "value", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonPure, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-button-pure,[p-button-pure]',
                    template: '<ng-content />',
                    inputs: ['active', 'alignLabel', 'aria', 'disabled', 'hideLabel', 'icon', 'iconSource', 'loading', 'name', 'size', 'stretch', 'theme', 'type', 'value', 'weight']
                }]
        }] });

class PButtonTile extends BaseComponent {
}
PButtonTile.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonTile, deps: null, target: i0.ɵɵFactoryTarget.Component });
PButtonTile.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PButtonTile, selector: "p-button-tile,[p-button-tile]", inputs: { align: "align", aria: "aria", aspectRatio: "aspectRatio", background: "background", compact: "compact", description: "description", disabled: "disabled", gradient: "gradient", icon: "icon", iconSource: "iconSource", label: "label", loading: "loading", size: "size", type: "type", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PButtonTile, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-button-tile,[p-button-tile]',
                    template: '<ng-content />',
                    inputs: ['align', 'aria', 'aspectRatio', 'background', 'compact', 'description', 'disabled', 'gradient', 'icon', 'iconSource', 'label', 'loading', 'size', 'type', 'weight']
                }]
        }] });

class PCarousel extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.carouselChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PCarousel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCarousel, deps: null, target: i0.ɵɵFactoryTarget.Component });
PCarousel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PCarousel, selector: "p-carousel,[p-carousel]", inputs: { activeSlideIndex: "activeSlideIndex", alignHeader: "alignHeader", aria: "aria", description: "description", disablePagination: "disablePagination", heading: "heading", headingSize: "headingSize", intl: "intl", pagination: "pagination", rewind: "rewind", skipLinkTarget: "skipLinkTarget", slidesPerPage: "slidesPerPage", theme: "theme", width: "width", wrapContent: "wrapContent" }, outputs: { carouselChange: "carouselChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCarousel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-carousel,[p-carousel]',
                    template: '<ng-content />',
                    inputs: ['activeSlideIndex', 'alignHeader', 'aria', 'description', 'disablePagination', 'heading', 'headingSize', 'intl', 'pagination', 'rewind', 'skipLinkTarget', 'slidesPerPage', 'theme', 'width', 'wrapContent'],
                    outputs: ['carouselChange', 'update']
                }]
        }] });

class PCheckboxWrapper extends BaseComponentWithTheme {
}
PCheckboxWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCheckboxWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PCheckboxWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PCheckboxWrapper, selector: "p-checkbox-wrapper,[p-checkbox-wrapper]", inputs: { hideLabel: "hideLabel", label: "label", loading: "loading", message: "message", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCheckboxWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-checkbox-wrapper,[p-checkbox-wrapper]',
                    template: '<ng-content />',
                    inputs: ['hideLabel', 'label', 'loading', 'message', 'state', 'theme']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
class PContentWrapper extends BaseComponentWithTheme {
}
PContentWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PContentWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PContentWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PContentWrapper, selector: "p-content-wrapper,[p-content-wrapper]", inputs: { backgroundColor: "backgroundColor", theme: "theme", width: "width" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PContentWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-content-wrapper,[p-content-wrapper]',
                    template: '<ng-content />',
                    inputs: ['backgroundColor', 'theme', 'width']
                }]
        }] });

class PCrest extends BaseComponent {
}
PCrest.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCrest, deps: null, target: i0.ɵɵFactoryTarget.Component });
PCrest.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PCrest, selector: "p-crest,[p-crest]", inputs: { aria: "aria", href: "href", target: "target" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PCrest, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-crest,[p-crest]',
                    template: '<ng-content />',
                    inputs: ['aria', 'href', 'target']
                }]
        }] });

class PDisplay extends BaseComponentWithTheme {
}
PDisplay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PDisplay, deps: null, target: i0.ɵɵFactoryTarget.Component });
PDisplay.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PDisplay, selector: "p-display,[p-display]", inputs: { align: "align", color: "color", ellipsis: "ellipsis", size: "size", tag: "tag", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PDisplay, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-display,[p-display]',
                    template: '<ng-content />',
                    inputs: ['align', 'color', 'ellipsis', 'size', 'tag', 'theme']
                }]
        }] });

class PDivider extends BaseComponentWithTheme {
}
PDivider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PDivider, deps: null, target: i0.ɵɵFactoryTarget.Component });
PDivider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PDivider, selector: "p-divider,[p-divider]", inputs: { color: "color", direction: "direction", orientation: "orientation", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PDivider, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-divider,[p-divider]',
                    template: '<ng-content />',
                    inputs: ['color', 'direction', 'orientation', 'theme']
                }]
        }] });

class PFieldset extends BaseComponentWithTheme {
}
PFieldset.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFieldset, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFieldset.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFieldset, selector: "p-fieldset,[p-fieldset]", inputs: { label: "label", labelSize: "labelSize", message: "message", required: "required", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFieldset, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-fieldset,[p-fieldset]',
                    template: '<ng-content />',
                    inputs: ['label', 'labelSize', 'message', 'required', 'state', 'theme']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-fieldset" instead. */
class PFieldsetWrapper extends BaseComponentWithTheme {
}
PFieldsetWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFieldsetWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFieldsetWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFieldsetWrapper, selector: "p-fieldset-wrapper,[p-fieldset-wrapper]", inputs: { label: "label", labelSize: "labelSize", message: "message", required: "required", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFieldsetWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-fieldset-wrapper,[p-fieldset-wrapper]',
                    template: '<ng-content />',
                    inputs: ['label', 'labelSize', 'message', 'required', 'state', 'theme']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
class PFlex extends BaseComponent {
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

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
class PFlexItem extends BaseComponent {
}
PFlexItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlexItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlexItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlexItem, selector: "p-flex-item,[p-flex-item]", inputs: { alignSelf: "alignSelf", flex: "flex", grow: "grow", offset: "offset", shrink: "shrink", width: "width" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlexItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flex-item,[p-flex-item]',
                    template: '<ng-content />',
                    inputs: ['alignSelf', 'flex', 'grow', 'offset', 'shrink', 'width']
                }]
        }] });

class PFlyout extends BaseComponentWithTheme {
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

class PFlyoutNavigation extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.dismiss = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PFlyoutNavigation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigation, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlyoutNavigation.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlyoutNavigation, selector: "p-flyout-navigation,[p-flyout-navigation]", inputs: { activeIdentifier: "activeIdentifier", aria: "aria", open: "open", theme: "theme" }, outputs: { dismiss: "dismiss", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigation, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flyout-navigation,[p-flyout-navigation]',
                    template: '<ng-content />',
                    inputs: ['activeIdentifier', 'aria', 'open', 'theme'],
                    outputs: ['dismiss', 'update']
                }]
        }] });

class PFlyoutNavigationItem extends BaseComponent {
}
PFlyoutNavigationItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigationItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PFlyoutNavigationItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PFlyoutNavigationItem, selector: "p-flyout-navigation-item,[p-flyout-navigation-item]", inputs: { identifier: "identifier", label: "label" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PFlyoutNavigationItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-flyout-navigation-item,[p-flyout-navigation-item]',
                    template: '<ng-content />',
                    inputs: ['identifier', 'label']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
class PGrid extends BaseComponent {
}
PGrid.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PGrid, deps: null, target: i0.ɵɵFactoryTarget.Component });
PGrid.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PGrid, selector: "p-grid,[p-grid]", inputs: { direction: "direction", gutter: "gutter", wrap: "wrap" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PGrid, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-grid,[p-grid]',
                    template: '<ng-content />',
                    inputs: ['direction', 'gutter', 'wrap']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
class PGridItem extends BaseComponent {
}
PGridItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PGridItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PGridItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PGridItem, selector: "p-grid-item,[p-grid-item]", inputs: { offset: "offset", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PGridItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-grid-item,[p-grid-item]',
                    template: '<ng-content />',
                    inputs: ['offset', 'size']
                }]
        }] });

class PHeading extends BaseComponentWithTheme {
}
PHeading.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PHeading, deps: null, target: i0.ɵɵFactoryTarget.Component });
PHeading.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PHeading, selector: "p-heading,[p-heading]", inputs: { align: "align", color: "color", ellipsis: "ellipsis", size: "size", tag: "tag", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PHeading, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-heading,[p-heading]',
                    template: '<ng-content />',
                    inputs: ['align', 'color', 'ellipsis', 'size', 'tag', 'theme']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
class PHeadline extends BaseComponentWithTheme {
}
PHeadline.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PHeadline, deps: null, target: i0.ɵɵFactoryTarget.Component });
PHeadline.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PHeadline, selector: "p-headline,[p-headline]", inputs: { align: "align", color: "color", ellipsis: "ellipsis", tag: "tag", theme: "theme", variant: "variant" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PHeadline, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-headline,[p-headline]',
                    template: '<ng-content />',
                    inputs: ['align', 'color', 'ellipsis', 'tag', 'theme', 'variant']
                }]
        }] });

class PIcon extends BaseComponentWithTheme {
}
PIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PIcon, deps: null, target: i0.ɵɵFactoryTarget.Component });
PIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PIcon, selector: "p-icon,[p-icon]", inputs: { aria: "aria", color: "color", lazy: "lazy", name: "name", size: "size", source: "source", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-icon,[p-icon]',
                    template: '<ng-content />',
                    inputs: ['aria', 'color', 'lazy', 'name', 'size', 'source', 'theme']
                }]
        }] });

class PInlineNotification extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.action = new EventEmitter();
        this.dismiss = new EventEmitter();
    }
}
PInlineNotification.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PInlineNotification, deps: null, target: i0.ɵɵFactoryTarget.Component });
PInlineNotification.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PInlineNotification, selector: "p-inline-notification,[p-inline-notification]", inputs: { actionIcon: "actionIcon", actionLabel: "actionLabel", actionLoading: "actionLoading", description: "description", dismissButton: "dismissButton", heading: "heading", persistent: "persistent", state: "state", theme: "theme" }, outputs: { action: "action", dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PInlineNotification, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-inline-notification,[p-inline-notification]',
                    template: '<ng-content />',
                    inputs: ['actionIcon', 'actionLabel', 'actionLoading', 'description', 'dismissButton', 'heading', 'persistent', 'state', 'theme'],
                    outputs: ['action', 'dismiss']
                }]
        }] });

class PLink extends BaseComponentWithTheme {
}
PLink.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLink, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLink.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLink, selector: "p-link,[p-link]", inputs: { aria: "aria", download: "download", hideLabel: "hideLabel", href: "href", icon: "icon", iconSource: "iconSource", rel: "rel", target: "target", theme: "theme", variant: "variant" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link,[p-link]',
                    template: '<ng-content />',
                    inputs: ['aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'target', 'theme', 'variant']
                }]
        }] });

class PLinkPure extends BaseComponentWithTheme {
}
PLinkPure.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkPure, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLinkPure.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLinkPure, selector: "p-link-pure,[p-link-pure]", inputs: { active: "active", alignLabel: "alignLabel", aria: "aria", download: "download", hideLabel: "hideLabel", href: "href", icon: "icon", iconSource: "iconSource", rel: "rel", size: "size", stretch: "stretch", target: "target", theme: "theme", underline: "underline", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkPure, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link-pure,[p-link-pure]',
                    template: '<ng-content />',
                    inputs: ['active', 'alignLabel', 'aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'size', 'stretch', 'target', 'theme', 'underline', 'weight']
                }]
        }] });

/** @deprecated since v3.0.0, will be removed with next major release. Use `p-link` with corresponding social icon instead. */
class PLinkSocial extends BaseComponentWithTheme {
}
PLinkSocial.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkSocial, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLinkSocial.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLinkSocial, selector: "p-link-social,[p-link-social]", inputs: { hideLabel: "hideLabel", href: "href", icon: "icon", iconSource: "iconSource", rel: "rel", target: "target", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkSocial, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link-social,[p-link-social]',
                    template: '<ng-content />',
                    inputs: ['hideLabel', 'href', 'icon', 'iconSource', 'rel', 'target', 'theme']
                }]
        }] });

class PLinkTile extends BaseComponent {
}
PLinkTile.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTile, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLinkTile.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLinkTile, selector: "p-link-tile,[p-link-tile]", inputs: { align: "align", aria: "aria", aspectRatio: "aspectRatio", background: "background", compact: "compact", description: "description", download: "download", gradient: "gradient", href: "href", label: "label", rel: "rel", size: "size", target: "target", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTile, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link-tile,[p-link-tile]',
                    template: '<ng-content />',
                    inputs: ['align', 'aria', 'aspectRatio', 'background', 'compact', 'description', 'download', 'gradient', 'href', 'label', 'rel', 'size', 'target', 'weight']
                }]
        }] });

class PLinkTileModelSignature extends BaseComponent {
}
PLinkTileModelSignature.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTileModelSignature, deps: null, target: i0.ɵɵFactoryTarget.Component });
PLinkTileModelSignature.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PLinkTileModelSignature, selector: "p-link-tile-model-signature,[p-link-tile-model-signature]", inputs: { aspectRatio: "aspectRatio", description: "description", heading: "heading", headingTag: "headingTag", linkDirection: "linkDirection", model: "model", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PLinkTileModelSignature, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-link-tile-model-signature,[p-link-tile-model-signature]',
                    template: '<ng-content />',
                    inputs: ['aspectRatio', 'description', 'heading', 'headingTag', 'linkDirection', 'model', 'weight']
                }]
        }] });

class PLinkTileProduct extends BaseComponentWithTheme {
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

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
class PMarque extends BaseComponent {
}
PMarque.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMarque, deps: null, target: i0.ɵɵFactoryTarget.Component });
PMarque.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PMarque, selector: "p-marque,[p-marque]", inputs: { aria: "aria", href: "href", size: "size", target: "target", trademark: "trademark", variant: "variant" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMarque, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-marque,[p-marque]',
                    template: '<ng-content />',
                    inputs: ['aria', 'href', 'size', 'target', 'trademark', 'variant']
                }]
        }] });

class PModal extends BaseComponentWithTheme {
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

class PModelSignature extends BaseComponentWithTheme {
}
PModelSignature.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PModelSignature, deps: null, target: i0.ɵɵFactoryTarget.Component });
PModelSignature.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PModelSignature, selector: "p-model-signature,[p-model-signature]", inputs: { color: "color", model: "model", size: "size", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PModelSignature, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-model-signature,[p-model-signature]',
                    template: '<ng-content />',
                    inputs: ['color', 'model', 'size', 'theme']
                }]
        }] });

class PMultiSelect extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.update = new EventEmitter();
    }
}
PMultiSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
PMultiSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PMultiSelect, selector: "p-multi-select,[p-multi-select]", inputs: { description: "description", disabled: "disabled", dropdownDirection: "dropdownDirection", hideLabel: "hideLabel", label: "label", message: "message", name: "name", required: "required", state: "state", theme: "theme", value: "value" }, outputs: { update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-multi-select,[p-multi-select]',
                    template: '<ng-content />',
                    inputs: ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'],
                    outputs: ['update']
                }]
        }] });

class PMultiSelectOption extends BaseComponent {
}
PMultiSelectOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelectOption, deps: null, target: i0.ɵɵFactoryTarget.Component });
PMultiSelectOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PMultiSelectOption, selector: "p-multi-select-option,[p-multi-select-option]", inputs: { disabled: "disabled", value: "value" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PMultiSelectOption, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-multi-select-option,[p-multi-select-option]',
                    template: '<ng-content />',
                    inputs: ['disabled', 'value']
                }]
        }] });

class PPagination extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.pageChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PPagination.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPagination, deps: null, target: i0.ɵɵFactoryTarget.Component });
PPagination.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PPagination, selector: "p-pagination,[p-pagination]", inputs: { activePage: "activePage", allyLabel: "allyLabel", allyLabelNext: "allyLabelNext", allyLabelPage: "allyLabelPage", allyLabelPrev: "allyLabelPrev", intl: "intl", itemsPerPage: "itemsPerPage", maxNumberOfPageLinks: "maxNumberOfPageLinks", showLastPage: "showLastPage", theme: "theme", totalItemsCount: "totalItemsCount" }, outputs: { pageChange: "pageChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPagination, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-pagination,[p-pagination]',
                    template: '<ng-content />',
                    inputs: ['activePage', 'allyLabel', 'allyLabelNext', 'allyLabelPage', 'allyLabelPrev', 'intl', 'itemsPerPage', 'maxNumberOfPageLinks', 'showLastPage', 'theme', 'totalItemsCount'],
                    outputs: ['pageChange', 'update']
                }]
        }] });

class PPinCode extends BaseComponentWithTheme {
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

class PPopover extends BaseComponentWithTheme {
}
PPopover.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPopover, deps: null, target: i0.ɵɵFactoryTarget.Component });
PPopover.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PPopover, selector: "p-popover,[p-popover]", inputs: { aria: "aria", description: "description", direction: "direction", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PPopover, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-popover,[p-popover]',
                    template: '<ng-content />',
                    inputs: ['aria', 'description', 'direction', 'theme']
                }]
        }] });

class PRadioButtonWrapper extends BaseComponentWithTheme {
}
PRadioButtonWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PRadioButtonWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PRadioButtonWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PRadioButtonWrapper, selector: "p-radio-button-wrapper,[p-radio-button-wrapper]", inputs: { hideLabel: "hideLabel", label: "label", loading: "loading", message: "message", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PRadioButtonWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-radio-button-wrapper,[p-radio-button-wrapper]',
                    template: '<ng-content />',
                    inputs: ['hideLabel', 'label', 'loading', 'message', 'state', 'theme']
                }]
        }] });

class PScroller extends BaseComponentWithTheme {
}
PScroller.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PScroller, deps: null, target: i0.ɵɵFactoryTarget.Component });
PScroller.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PScroller, selector: "p-scroller,[p-scroller]", inputs: { alignScrollIndicator: "alignScrollIndicator", aria: "aria", gradientColor: "gradientColor", gradientColorScheme: "gradientColorScheme", scrollIndicatorPosition: "scrollIndicatorPosition", scrollToPosition: "scrollToPosition", scrollbar: "scrollbar", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PScroller, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-scroller,[p-scroller]',
                    template: '<ng-content />',
                    inputs: ['alignScrollIndicator', 'aria', 'gradientColor', 'gradientColorScheme', 'scrollIndicatorPosition', 'scrollToPosition', 'scrollbar', 'theme']
                }]
        }] });

class PSegmentedControl extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.segmentedControlChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PSegmentedControl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControl, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSegmentedControl.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSegmentedControl, selector: "p-segmented-control,[p-segmented-control]", inputs: { backgroundColor: "backgroundColor", columns: "columns", theme: "theme", value: "value" }, outputs: { segmentedControlChange: "segmentedControlChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControl, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-segmented-control,[p-segmented-control]',
                    template: '<ng-content />',
                    inputs: ['backgroundColor', 'columns', 'theme', 'value'],
                    outputs: ['segmentedControlChange', 'update']
                }]
        }] });

class PSegmentedControlItem extends BaseComponent {
}
PSegmentedControlItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControlItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSegmentedControlItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSegmentedControlItem, selector: "p-segmented-control-item,[p-segmented-control-item]", inputs: { disabled: "disabled", icon: "icon", iconSource: "iconSource", label: "label", value: "value" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSegmentedControlItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-segmented-control-item,[p-segmented-control-item]',
                    template: '<ng-content />',
                    inputs: ['disabled', 'icon', 'iconSource', 'label', 'value']
                }]
        }] });

class PSelect extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.update = new EventEmitter();
    }
}
PSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSelect, selector: "p-select,[p-select]", inputs: { description: "description", disabled: "disabled", dropdownDirection: "dropdownDirection", hideLabel: "hideLabel", label: "label", message: "message", name: "name", required: "required", state: "state", theme: "theme", value: "value" }, outputs: { update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-select,[p-select]',
                    template: '<ng-content />',
                    inputs: ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'],
                    outputs: ['update']
                }]
        }] });

class PSelectOption extends BaseComponent {
}
PSelectOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelectOption, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSelectOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSelectOption, selector: "p-select-option,[p-select-option]", inputs: { disabled: "disabled", value: "value" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelectOption, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-select-option,[p-select-option]',
                    template: '<ng-content />',
                    inputs: ['disabled', 'value']
                }]
        }] });

class PSelectWrapper extends BaseComponentWithTheme {
}
PSelectWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelectWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSelectWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSelectWrapper, selector: "p-select-wrapper,[p-select-wrapper]", inputs: { description: "description", dropdownDirection: "dropdownDirection", filter: "filter", hideLabel: "hideLabel", label: "label", message: "message", native: "native", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSelectWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-select-wrapper,[p-select-wrapper]',
                    template: '<ng-content />',
                    inputs: ['description', 'dropdownDirection', 'filter', 'hideLabel', 'label', 'message', 'native', 'state', 'theme']
                }]
        }] });

class PSpinner extends BaseComponentWithTheme {
}
PSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSpinner, deps: null, target: i0.ɵɵFactoryTarget.Component });
PSpinner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PSpinner, selector: "p-spinner,[p-spinner]", inputs: { aria: "aria", size: "size", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PSpinner, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-spinner,[p-spinner]',
                    template: '<ng-content />',
                    inputs: ['aria', 'size', 'theme']
                }]
        }] });

class PStepperHorizontal extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.stepChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PStepperHorizontal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontal, deps: null, target: i0.ɵɵFactoryTarget.Component });
PStepperHorizontal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PStepperHorizontal, selector: "p-stepper-horizontal,[p-stepper-horizontal]", inputs: { size: "size", theme: "theme" }, outputs: { stepChange: "stepChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontal, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper-horizontal,[p-stepper-horizontal]',
                    template: '<ng-content />',
                    inputs: ['size', 'theme'],
                    outputs: ['stepChange', 'update']
                }]
        }] });

class PStepperHorizontalItem extends BaseComponent {
}
PStepperHorizontalItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontalItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PStepperHorizontalItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PStepperHorizontalItem, selector: "p-stepper-horizontal-item,[p-stepper-horizontal-item]", inputs: { disabled: "disabled", state: "state" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PStepperHorizontalItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper-horizontal-item,[p-stepper-horizontal-item]',
                    template: '<ng-content />',
                    inputs: ['disabled', 'state']
                }]
        }] });

class PSwitch extends BaseComponentWithTheme {
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

class PTable extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.sortingChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTable, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTable, selector: "p-table,[p-table]", inputs: { caption: "caption", theme: "theme" }, outputs: { sortingChange: "sortingChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table,[p-table]',
                    template: '<ng-content />',
                    inputs: ['caption', 'theme'],
                    outputs: ['sortingChange', 'update']
                }]
        }] });

class PTableBody extends BaseComponent {
}
PTableBody.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableBody, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableBody.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableBody, selector: "p-table-body,[p-table-body]", usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableBody, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-body,[p-table-body]',
                    template: '<ng-content />'
                }]
        }] });

class PTableCell extends BaseComponent {
}
PTableCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableCell, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableCell, selector: "p-table-cell,[p-table-cell]", inputs: { multiline: "multiline" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableCell, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-cell,[p-table-cell]',
                    template: '<ng-content />',
                    inputs: ['multiline']
                }]
        }] });

class PTableHead extends BaseComponent {
}
PTableHead.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHead, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableHead.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableHead, selector: "p-table-head,[p-table-head]", usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHead, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-head,[p-table-head]',
                    template: '<ng-content />'
                }]
        }] });

class PTableHeadCell extends BaseComponent {
}
PTableHeadCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHeadCell, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableHeadCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableHeadCell, selector: "p-table-head-cell,[p-table-head-cell]", inputs: { hideLabel: "hideLabel", multiline: "multiline", sort: "sort" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHeadCell, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-head-cell,[p-table-head-cell]',
                    template: '<ng-content />',
                    inputs: ['hideLabel', 'multiline', 'sort']
                }]
        }] });

class PTableHeadRow extends BaseComponent {
}
PTableHeadRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHeadRow, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableHeadRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableHeadRow, selector: "p-table-head-row,[p-table-head-row]", usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableHeadRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-head-row,[p-table-head-row]',
                    template: '<ng-content />'
                }]
        }] });

class PTableRow extends BaseComponent {
}
PTableRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableRow, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTableRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTableRow, selector: "p-table-row,[p-table-row]", usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTableRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-table-row,[p-table-row]',
                    template: '<ng-content />'
                }]
        }] });

class PTabs extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.tabChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTabs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabs, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTabs.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTabs, selector: "p-tabs,[p-tabs]", inputs: { activeTabIndex: "activeTabIndex", gradientColor: "gradientColor", gradientColorScheme: "gradientColorScheme", size: "size", theme: "theme", weight: "weight" }, outputs: { tabChange: "tabChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tabs,[p-tabs]',
                    template: '<ng-content />',
                    inputs: ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'],
                    outputs: ['tabChange', 'update']
                }]
        }] });

class PTabsBar extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        /** @deprecated */
        this.tabChange = new EventEmitter();
        this.update = new EventEmitter();
    }
}
PTabsBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsBar, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTabsBar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTabsBar, selector: "p-tabs-bar,[p-tabs-bar]", inputs: { activeTabIndex: "activeTabIndex", gradientColor: "gradientColor", gradientColorScheme: "gradientColorScheme", size: "size", theme: "theme", weight: "weight" }, outputs: { tabChange: "tabChange", update: "update" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tabs-bar,[p-tabs-bar]',
                    template: '<ng-content />',
                    inputs: ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'],
                    outputs: ['tabChange', 'update']
                }]
        }] });

class PTabsItem extends BaseComponent {
}
PTabsItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTabsItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTabsItem, selector: "p-tabs-item,[p-tabs-item]", inputs: { label: "label" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTabsItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tabs-item,[p-tabs-item]',
                    template: '<ng-content />',
                    inputs: ['label']
                }]
        }] });

class PTag extends BaseComponentWithTheme {
}
PTag.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTag, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTag.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTag, selector: "p-tag,[p-tag]", inputs: { color: "color", icon: "icon", iconSource: "iconSource", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTag, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tag,[p-tag]',
                    template: '<ng-content />',
                    inputs: ['color', 'icon', 'iconSource', 'theme']
                }]
        }] });

class PTagDismissible extends BaseComponentWithTheme {
}
PTagDismissible.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTagDismissible, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTagDismissible.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTagDismissible, selector: "p-tag-dismissible,[p-tag-dismissible]", inputs: { aria: "aria", color: "color", label: "label", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTagDismissible, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-tag-dismissible,[p-tag-dismissible]',
                    template: '<ng-content />',
                    inputs: ['aria', 'color', 'label', 'theme']
                }]
        }] });

class PText extends BaseComponentWithTheme {
}
PText.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PText, deps: null, target: i0.ɵɵFactoryTarget.Component });
PText.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PText, selector: "p-text,[p-text]", inputs: { align: "align", color: "color", ellipsis: "ellipsis", size: "size", tag: "tag", theme: "theme", weight: "weight" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PText, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-text,[p-text]',
                    template: '<ng-content />',
                    inputs: ['align', 'color', 'ellipsis', 'size', 'tag', 'theme', 'weight']
                }]
        }] });

class PTextFieldWrapper extends BaseComponentWithTheme {
    constructor() {
        super(...arguments);
        this.action = new EventEmitter();
    }
}
PTextFieldWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextFieldWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTextFieldWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTextFieldWrapper, selector: "p-text-field-wrapper,[p-text-field-wrapper]", inputs: { actionIcon: "actionIcon", actionLoading: "actionLoading", description: "description", hideLabel: "hideLabel", label: "label", message: "message", showCharacterCount: "showCharacterCount", showCounter: "showCounter", showPasswordToggle: "showPasswordToggle", state: "state", submitButton: "submitButton", theme: "theme", unit: "unit", unitPosition: "unitPosition" }, outputs: { action: "action" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextFieldWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-text-field-wrapper,[p-text-field-wrapper]',
                    template: '<ng-content />',
                    inputs: ['actionIcon', 'actionLoading', 'description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'showPasswordToggle', 'state', 'submitButton', 'theme', 'unit', 'unitPosition'],
                    outputs: ['action']
                }]
        }] });

class PTextList extends BaseComponentWithTheme {
}
PTextList.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextList, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTextList.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTextList, selector: "p-text-list,[p-text-list]", inputs: { listType: "listType", orderType: "orderType", theme: "theme", type: "type" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextList, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-text-list,[p-text-list]',
                    template: '<ng-content />',
                    inputs: ['listType', 'orderType', 'theme', 'type']
                }]
        }] });

class PTextListItem extends BaseComponent {
}
PTextListItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextListItem, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTextListItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTextListItem, selector: "p-text-list-item,[p-text-list-item]", usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-text-list-item,[p-text-list-item]',
                    template: '<ng-content />'
                }]
        }] });

class PTextareaWrapper extends BaseComponentWithTheme {
}
PTextareaWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextareaWrapper, deps: null, target: i0.ɵɵFactoryTarget.Component });
PTextareaWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PTextareaWrapper, selector: "p-textarea-wrapper,[p-textarea-wrapper]", inputs: { description: "description", hideLabel: "hideLabel", label: "label", message: "message", showCharacterCount: "showCharacterCount", showCounter: "showCounter", state: "state", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PTextareaWrapper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-textarea-wrapper,[p-textarea-wrapper]',
                    template: '<ng-content />',
                    inputs: ['description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'state', 'theme']
                }]
        }] });

class PToast extends BaseComponentWithTheme {
}
PToast.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PToast, deps: null, target: i0.ɵɵFactoryTarget.Component });
PToast.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PToast, selector: "p-toast,[p-toast]", inputs: { theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PToast, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-toast,[p-toast]',
                    template: '<ng-content />',
                    inputs: ['theme']
                }]
        }] });

class PWordmark extends BaseComponentWithTheme {
}
PWordmark.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PWordmark, deps: null, target: i0.ɵɵFactoryTarget.Component });
PWordmark.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PWordmark, selector: "p-wordmark,[p-wordmark]", inputs: { aria: "aria", href: "href", size: "size", target: "target", theme: "theme" }, usesInheritance: true, ngImport: i0, template: '<ng-content />', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PWordmark, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-wordmark,[p-wordmark]',
                    template: '<ng-content />',
                    inputs: ['aria', 'href', 'size', 'target', 'theme']
                }]
        }] });

const DECLARATIONS = [
    PAccordion,
    PBanner,
    PButton,
    PButtonGroup,
    PButtonPure,
    PButtonTile,
    PCarousel,
    PCheckboxWrapper,
    PContentWrapper,
    PCrest,
    PDisplay,
    PDivider,
    PFieldset,
    PFieldsetWrapper,
    PFlex,
    PFlexItem,
    PFlyout,
    PFlyoutNavigation,
    PFlyoutNavigationItem,
    PGrid,
    PGridItem,
    PHeading,
    PHeadline,
    PIcon,
    PInlineNotification,
    PLink,
    PLinkPure,
    PLinkSocial,
    PLinkTile,
    PLinkTileModelSignature,
    PLinkTileProduct,
    PMarque,
    PModal,
    PModelSignature,
    PMultiSelect,
    PMultiSelectOption,
    PPagination,
    PPinCode,
    PPopover,
    PRadioButtonWrapper,
    PScroller,
    PSegmentedControl,
    PSegmentedControlItem,
    PSelect,
    PSelectOption,
    PSelectWrapper,
    PSpinner,
    PStepperHorizontal,
    PStepperHorizontalItem,
    PSwitch,
    PTable,
    PTableBody,
    PTableCell,
    PTableHead,
    PTableHeadCell,
    PTableHeadRow,
    PTableRow,
    PTabs,
    PTabsBar,
    PTabsItem,
    PTag,
    PTagDismissible,
    PText,
    PTextFieldWrapper,
    PTextList,
    PTextListItem,
    PTextareaWrapper,
    PToast,
    PWordmark
];

class DefaultConfig {
    constructor() {
        this.prefix = '';
        // other component configurations should probably go into a separate `components`, `componentProps` or `componentDefaults`
        // property similar to https://mui.com/material-ui/customization/theme-components/
    }
}
// TODO: unit tests are missing
class PorscheDesignSystemModule {
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
PorscheDesignSystemModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: PorscheDesignSystemModule, declarations: [PAccordion, PBanner, PButton, PButtonGroup, PButtonPure, PButtonTile, PCarousel, PCheckboxWrapper, PContentWrapper, PCrest, PDisplay, PDivider, PFieldset, PFieldsetWrapper, PFlex, PFlexItem, PFlyout, PFlyoutNavigation, PFlyoutNavigationItem, PGrid, PGridItem, PHeading, PHeadline, PIcon, PInlineNotification, PLink, PLinkPure, PLinkSocial, PLinkTile, PLinkTileModelSignature, PLinkTileProduct, PMarque, PModal, PModelSignature, PMultiSelect, PMultiSelectOption, PPagination, PPinCode, PPopover, PRadioButtonWrapper, PScroller, PSegmentedControl, PSegmentedControlItem, PSelect, PSelectOption, PSelectWrapper, PSpinner, PStepperHorizontal, PStepperHorizontalItem, PSwitch, PTable, PTableBody, PTableCell, PTableHead, PTableHeadCell, PTableHeadRow, PTableRow, PTabs, PTabsBar, PTabsItem, PTag, PTagDismissible, PText, PTextFieldWrapper, PTextList, PTextListItem, PTextareaWrapper, PToast, PWordmark], exports: [PAccordion, PBanner, PButton, PButtonGroup, PButtonPure, PButtonTile, PCarousel, PCheckboxWrapper, PContentWrapper, PCrest, PDisplay, PDivider, PFieldset, PFieldsetWrapper, PFlex, PFlexItem, PFlyout, PFlyoutNavigation, PFlyoutNavigationItem, PGrid, PGridItem, PHeading, PHeadline, PIcon, PInlineNotification, PLink, PLinkPure, PLinkSocial, PLinkTile, PLinkTileModelSignature, PLinkTileProduct, PMarque, PModal, PModelSignature, PMultiSelect, PMultiSelectOption, PPagination, PPinCode, PPopover, PRadioButtonWrapper, PScroller, PSegmentedControl, PSegmentedControlItem, PSelect, PSelectOption, PSelectWrapper, PSpinner, PStepperHorizontal, PStepperHorizontalItem, PSwitch, PTable, PTableBody, PTableCell, PTableHead, PTableHeadCell, PTableHeadRow, PTableRow, PTabs, PTabsBar, PTabsItem, PTag, PTagDismissible, PText, PTextFieldWrapper, PTextList, PTextListItem, PTextareaWrapper, PToast, PWordmark] });
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
        }], ctorParameters: function () {
        return [{ type: DefaultConfig, decorators: [{
                        type: Optional
                    }] }];
    } });

class ToastManager {
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

/**
 * Generated bundle index. Do not edit.
 */

export { DECLARATIONS, PAccordion, PBanner, PButton, PButtonGroup, PButtonPure, PButtonTile, PCarousel, PCheckboxWrapper, PContentWrapper, PCrest, PDisplay, PDivider, PFieldset, PFieldsetWrapper, PFlex, PFlexItem, PFlyout, PFlyoutNavigation, PFlyoutNavigationItem, PGrid, PGridItem, PHeading, PHeadline, PIcon, PInlineNotification, PLink, PLinkPure, PLinkSocial, PLinkTile, PLinkTileModelSignature, PLinkTileProduct, PMarque, PModal, PModelSignature, PMultiSelect, PMultiSelectOption, PPagination, PPinCode, PPopover, PRadioButtonWrapper, PScroller, PSegmentedControl, PSegmentedControlItem, PSelect, PSelectOption, PSelectWrapper, PSpinner, PStepperHorizontal, PStepperHorizontalItem, PSwitch, PTable, PTableBody, PTableCell, PTableHead, PTableHeadCell, PTableHeadRow, PTableRow, PTabs, PTabsBar, PTabsItem, PTag, PTagDismissible, PText, PTextFieldWrapper, PTextList, PTextListItem, PTextareaWrapper, PToast, PWordmark, PorscheDesignSystemModule, THEME_TOKEN, ToastManager };
//# sourceMappingURL=porsche-design-system-components-angular.mjs.map
