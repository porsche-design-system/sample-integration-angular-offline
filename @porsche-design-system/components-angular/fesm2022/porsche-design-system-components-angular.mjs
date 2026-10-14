import { componentsReady, load } from "@porsche-design-system/components-js";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, EventEmitter, Injectable, NgModule, Optional, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var BaseComponent = class BaseComponent {
	el;
	constructor(cdr, elementRef) {
		cdr.detach();
		this.el = elementRef.nativeElement;
	}
	ngOnChanges(props) {
		for (const prop in props) this.el[prop] = props[prop].currentValue;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: BaseComponent,
		deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: BaseComponent,
		isStandalone: true,
		selector: "ng-component",
		usesOnChanges: true,
		ngImport: i0,
		template: "",
		isInline: true,
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: BaseComponent,
	decorators: [{
		type: Component,
		args: [{
			template: "",
			changeDetection: ChangeDetectionStrategy.OnPush
		}]
	}],
	ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]
});
var PAccordion = class PAccordion extends BaseComponent {
	alignMarker;
	background;
	compact;
	heading;
	headingTag;
	indent;
	open;
	size;
	sticky;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PAccordion,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PAccordion,
		isStandalone: false,
		selector: "p-accordion,[p-accordion]",
		inputs: {
			alignMarker: "alignMarker",
			background: "background",
			compact: "compact",
			heading: "heading",
			headingTag: "headingTag",
			indent: "indent",
			open: "open",
			size: "size",
			sticky: "sticky"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PAccordion,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-accordion,[p-accordion]",
			template: "<ng-content />",
			inputs: [
				"alignMarker",
				"background",
				"compact",
				"heading",
				"headingTag",
				"indent",
				"open",
				"size",
				"sticky"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PAiTag = class PAiTag extends BaseComponent {
	locale;
	variant;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PAiTag,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PAiTag,
		isStandalone: false,
		selector: "p-ai-tag,[p-ai-tag]",
		inputs: {
			locale: "locale",
			variant: "variant"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PAiTag,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-ai-tag,[p-ai-tag]",
			template: "<ng-content />",
			inputs: ["locale", "variant"],
			standalone: false
		}]
	}]
});
var PBanner = class PBanner extends BaseComponent {
	description;
	dismissButton;
	heading;
	headingTag;
	open;
	position;
	state;
	dismiss = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PBanner,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PBanner,
		isStandalone: false,
		selector: "p-banner,[p-banner]",
		inputs: {
			description: "description",
			dismissButton: "dismissButton",
			heading: "heading",
			headingTag: "headingTag",
			open: "open",
			position: "position",
			state: "state"
		},
		outputs: { dismiss: "dismiss" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PBanner,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-banner,[p-banner]",
			template: "<ng-content />",
			inputs: [
				"description",
				"dismissButton",
				"heading",
				"headingTag",
				"open",
				"position",
				"state"
			],
			outputs: ["dismiss"],
			standalone: false
		}]
	}]
});
var PButton = class PButton extends BaseComponent {
	aria;
	compact;
	disabled;
	form;
	hideLabel;
	icon;
	iconSource;
	loading;
	name;
	type;
	value;
	variant;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PButton,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PButton,
		isStandalone: false,
		selector: "p-button,[p-button]",
		inputs: {
			aria: "aria",
			compact: "compact",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			icon: "icon",
			iconSource: "iconSource",
			loading: "loading",
			name: "name",
			type: "type",
			value: "value",
			variant: "variant"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PButton,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-button,[p-button]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"disabled",
				"form",
				"hideLabel",
				"icon",
				"iconSource",
				"loading",
				"name",
				"type",
				"value",
				"variant"
			],
			standalone: false
		}]
	}]
});
var PButtonPure = class PButtonPure extends BaseComponent {
	active;
	alignLabel;
	aria;
	color;
	disabled;
	form;
	hideLabel;
	icon;
	iconSource;
	loading;
	name;
	size;
	stretch;
	type;
	underline;
	value;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PButtonPure,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PButtonPure,
		isStandalone: false,
		selector: "p-button-pure,[p-button-pure]",
		inputs: {
			active: "active",
			alignLabel: "alignLabel",
			aria: "aria",
			color: "color",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			icon: "icon",
			iconSource: "iconSource",
			loading: "loading",
			name: "name",
			size: "size",
			stretch: "stretch",
			type: "type",
			underline: "underline",
			value: "value"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PButtonPure,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-button-pure,[p-button-pure]",
			template: "<ng-content />",
			inputs: [
				"active",
				"alignLabel",
				"aria",
				"color",
				"disabled",
				"form",
				"hideLabel",
				"icon",
				"iconSource",
				"loading",
				"name",
				"size",
				"stretch",
				"type",
				"underline",
				"value"
			],
			standalone: false
		}]
	}]
});
var PButtonTile = class PButtonTile extends BaseComponent {
	align;
	aria;
	aspectRatio;
	compact;
	description;
	disabled;
	gradient;
	icon;
	iconSource;
	label;
	loading;
	size;
	type;
	weight;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PButtonTile,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PButtonTile,
		isStandalone: false,
		selector: "p-button-tile,[p-button-tile]",
		inputs: {
			align: "align",
			aria: "aria",
			aspectRatio: "aspectRatio",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			gradient: "gradient",
			icon: "icon",
			iconSource: "iconSource",
			label: "label",
			loading: "loading",
			size: "size",
			type: "type",
			weight: "weight"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PButtonTile,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-button-tile,[p-button-tile]",
			template: "<ng-content />",
			inputs: [
				"align",
				"aria",
				"aspectRatio",
				"compact",
				"description",
				"disabled",
				"gradient",
				"icon",
				"iconSource",
				"label",
				"loading",
				"size",
				"type",
				"weight"
			],
			standalone: false
		}]
	}]
});
var PCanvas = class PCanvas extends BaseComponent {
	background;
	sidebarEndOpen;
	sidebarStartOpen;
	sidebarEndDismiss = new EventEmitter();
	sidebarStartUpdate = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PCanvas,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PCanvas,
		isStandalone: false,
		selector: "p-canvas,[p-canvas]",
		inputs: {
			background: "background",
			sidebarEndOpen: "sidebarEndOpen",
			sidebarStartOpen: "sidebarStartOpen"
		},
		outputs: {
			sidebarEndDismiss: "sidebarEndDismiss",
			sidebarStartUpdate: "sidebarStartUpdate"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PCanvas,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-canvas,[p-canvas]",
			template: "<ng-content />",
			inputs: [
				"background",
				"sidebarEndOpen",
				"sidebarStartOpen"
			],
			outputs: ["sidebarEndDismiss", "sidebarStartUpdate"],
			standalone: false
		}]
	}]
});
var PCarousel = class PCarousel extends BaseComponent {
	activeSlideIndex;
	alignControls;
	alignHeader;
	aria;
	description;
	focusOnCenterSlide;
	gradient;
	heading;
	headingSize;
	intl;
	pagination;
	rewind;
	skipLinkTarget;
	slidesPerPage;
	trimSpace;
	width;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PCarousel,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PCarousel,
		isStandalone: false,
		selector: "p-carousel,[p-carousel]",
		inputs: {
			activeSlideIndex: "activeSlideIndex",
			alignControls: "alignControls",
			alignHeader: "alignHeader",
			aria: "aria",
			description: "description",
			focusOnCenterSlide: "focusOnCenterSlide",
			gradient: "gradient",
			heading: "heading",
			headingSize: "headingSize",
			intl: "intl",
			pagination: "pagination",
			rewind: "rewind",
			skipLinkTarget: "skipLinkTarget",
			slidesPerPage: "slidesPerPage",
			trimSpace: "trimSpace",
			width: "width"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PCarousel,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-carousel,[p-carousel]",
			template: "<ng-content />",
			inputs: [
				"activeSlideIndex",
				"alignControls",
				"alignHeader",
				"aria",
				"description",
				"focusOnCenterSlide",
				"gradient",
				"heading",
				"headingSize",
				"intl",
				"pagination",
				"rewind",
				"skipLinkTarget",
				"slidesPerPage",
				"trimSpace",
				"width"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PCheckbox = class PCheckbox extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	checked;
	compact;
	disabled;
	form;
	hideLabel;
	indeterminate;
	label;
	loading;
	message;
	name;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "checked", value ?? false);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PCheckbox,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PCheckbox,
		isStandalone: false,
		selector: "p-checkbox,[p-checkbox]",
		inputs: {
			aria: "aria",
			checked: "checked",
			compact: "compact",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			indeterminate: "indeterminate",
			label: "label",
			loading: "loading",
			message: "message",
			name: "name",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change"
		},
		host: { listeners: {
			"change": "_onChange($event.target.checked)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PCheckbox),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PCheckbox,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-checkbox,[p-checkbox]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"checked",
				"compact",
				"disabled",
				"form",
				"hideLabel",
				"indeterminate",
				"label",
				"loading",
				"message",
				"name",
				"required",
				"state",
				"value"
			],
			outputs: ["blur", "change"],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PCheckbox),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.checked)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PCrest = class PCrest extends BaseComponent {
	aria;
	href;
	target;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PCrest,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PCrest,
		isStandalone: false,
		selector: "p-crest,[p-crest]",
		inputs: {
			aria: "aria",
			href: "href",
			target: "target"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PCrest,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-crest,[p-crest]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"href",
				"target"
			],
			standalone: false
		}]
	}]
});
var PDisplay = class PDisplay extends BaseComponent {
	align;
	color;
	ellipsis;
	size;
	tag;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PDisplay,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PDisplay,
		isStandalone: false,
		selector: "p-display,[p-display]",
		inputs: {
			align: "align",
			color: "color",
			ellipsis: "ellipsis",
			size: "size",
			tag: "tag"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PDisplay,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-display,[p-display]",
			template: "<ng-content />",
			inputs: [
				"align",
				"color",
				"ellipsis",
				"size",
				"tag"
			],
			standalone: false
		}]
	}]
});
var PDivider = class PDivider extends BaseComponent {
	color;
	direction;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PDivider,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PDivider,
		isStandalone: false,
		selector: "p-divider,[p-divider]",
		inputs: {
			color: "color",
			direction: "direction"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PDivider,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-divider,[p-divider]",
			template: "<ng-content />",
			inputs: ["color", "direction"],
			standalone: false
		}]
	}]
});
var PDrilldown = class PDrilldown extends BaseComponent {
	activeIdentifier;
	aria;
	open;
	dismiss = new EventEmitter();
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PDrilldown,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PDrilldown,
		isStandalone: false,
		selector: "p-drilldown,[p-drilldown]",
		inputs: {
			activeIdentifier: "activeIdentifier",
			aria: "aria",
			open: "open"
		},
		outputs: {
			dismiss: "dismiss",
			update: "update"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PDrilldown,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-drilldown,[p-drilldown]",
			template: "<ng-content />",
			inputs: [
				"activeIdentifier",
				"aria",
				"open"
			],
			outputs: ["dismiss", "update"],
			standalone: false
		}]
	}]
});
var PDrilldownItem = class PDrilldownItem extends BaseComponent {
	cascade;
	identifier;
	label;
	primary;
	secondary;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PDrilldownItem,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PDrilldownItem,
		isStandalone: false,
		selector: "p-drilldown-item,[p-drilldown-item]",
		inputs: {
			cascade: "cascade",
			identifier: "identifier",
			label: "label",
			primary: "primary",
			secondary: "secondary"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PDrilldownItem,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-drilldown-item,[p-drilldown-item]",
			template: "<ng-content />",
			inputs: [
				"cascade",
				"identifier",
				"label",
				"primary",
				"secondary"
			],
			standalone: false
		}]
	}]
});
var PDrilldownLink = class PDrilldownLink extends BaseComponent {
	active;
	aria;
	download;
	href;
	rel;
	target;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PDrilldownLink,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PDrilldownLink,
		isStandalone: false,
		selector: "p-drilldown-link,[p-drilldown-link]",
		inputs: {
			active: "active",
			aria: "aria",
			download: "download",
			href: "href",
			rel: "rel",
			target: "target"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PDrilldownLink,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-drilldown-link,[p-drilldown-link]",
			template: "<ng-content />",
			inputs: [
				"active",
				"aria",
				"download",
				"href",
				"rel",
				"target"
			],
			standalone: false
		}]
	}]
});
var PFieldset = class PFieldset extends BaseComponent {
	aria;
	label;
	labelSize;
	message;
	required;
	state;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PFieldset,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PFieldset,
		isStandalone: false,
		selector: "p-fieldset,[p-fieldset]",
		inputs: {
			aria: "aria",
			label: "label",
			labelSize: "labelSize",
			message: "message",
			required: "required",
			state: "state"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PFieldset,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-fieldset,[p-fieldset]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"label",
				"labelSize",
				"message",
				"required",
				"state"
			],
			standalone: false
		}]
	}]
});
var PFlag = class PFlag extends BaseComponent {
	aria;
	name;
	size;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PFlag,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PFlag,
		isStandalone: false,
		selector: "p-flag,[p-flag]",
		inputs: {
			aria: "aria",
			name: "name",
			size: "size"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PFlag,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-flag,[p-flag]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"name",
				"size"
			],
			standalone: false
		}]
	}]
});
var PFlyout = class PFlyout extends BaseComponent {
	aria;
	backdrop;
	background;
	disableBackdropClick;
	footerBehavior;
	fullscreen;
	open;
	position;
	dismiss = new EventEmitter();
	motionHiddenEnd = new EventEmitter();
	motionVisibleEnd = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PFlyout,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PFlyout,
		isStandalone: false,
		selector: "p-flyout,[p-flyout]",
		inputs: {
			aria: "aria",
			backdrop: "backdrop",
			background: "background",
			disableBackdropClick: "disableBackdropClick",
			footerBehavior: "footerBehavior",
			fullscreen: "fullscreen",
			open: "open",
			position: "position"
		},
		outputs: {
			dismiss: "dismiss",
			motionHiddenEnd: "motionHiddenEnd",
			motionVisibleEnd: "motionVisibleEnd"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PFlyout,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-flyout,[p-flyout]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"backdrop",
				"background",
				"disableBackdropClick",
				"footerBehavior",
				"fullscreen",
				"open",
				"position"
			],
			outputs: [
				"dismiss",
				"motionHiddenEnd",
				"motionVisibleEnd"
			],
			standalone: false
		}]
	}]
});
var PHeading = class PHeading extends BaseComponent {
	align;
	color;
	ellipsis;
	hyphens;
	size;
	tag;
	weight;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PHeading,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PHeading,
		isStandalone: false,
		selector: "p-heading,[p-heading]",
		inputs: {
			align: "align",
			color: "color",
			ellipsis: "ellipsis",
			hyphens: "hyphens",
			size: "size",
			tag: "tag",
			weight: "weight"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PHeading,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-heading,[p-heading]",
			template: "<ng-content />",
			inputs: [
				"align",
				"color",
				"ellipsis",
				"hyphens",
				"size",
				"tag",
				"weight"
			],
			standalone: false
		}]
	}]
});
var PIcon = class PIcon extends BaseComponent {
	aria;
	color;
	name;
	size;
	source;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PIcon,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PIcon,
		isStandalone: false,
		selector: "p-icon,[p-icon]",
		inputs: {
			aria: "aria",
			color: "color",
			name: "name",
			size: "size",
			source: "source"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PIcon,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-icon,[p-icon]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"color",
				"name",
				"size",
				"source"
			],
			standalone: false
		}]
	}]
});
var PInlineNotification = class PInlineNotification extends BaseComponent {
	actionIcon;
	actionLabel;
	actionLoading;
	description;
	dismissButton;
	heading;
	headingTag;
	state;
	action = new EventEmitter();
	dismiss = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInlineNotification,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInlineNotification,
		isStandalone: false,
		selector: "p-inline-notification,[p-inline-notification]",
		inputs: {
			actionIcon: "actionIcon",
			actionLabel: "actionLabel",
			actionLoading: "actionLoading",
			description: "description",
			dismissButton: "dismissButton",
			heading: "heading",
			headingTag: "headingTag",
			state: "state"
		},
		outputs: {
			action: "action",
			dismiss: "dismiss"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInlineNotification,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-inline-notification,[p-inline-notification]",
			template: "<ng-content />",
			inputs: [
				"actionIcon",
				"actionLabel",
				"actionLoading",
				"description",
				"dismissButton",
				"heading",
				"headingTag",
				"state"
			],
			outputs: ["action", "dismiss"],
			standalone: false
		}]
	}]
});
var PInputDate = class PInputDate extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	max;
	message;
	min;
	name;
	readOnly;
	required;
	state;
	step;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputDate,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputDate,
		isStandalone: false,
		selector: "p-input-date,[p-input-date]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			max: "max",
			message: "message",
			min: "min",
			name: "name",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			step: "step",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputDate),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputDate,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-date,[p-input-date]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"max",
				"message",
				"min",
				"name",
				"readOnly",
				"required",
				"state",
				"step",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputDate),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputEmail = class PInputEmail extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	indicator;
	label;
	loading;
	maxLength;
	message;
	minLength;
	multiple;
	name;
	pattern;
	placeholder;
	readOnly;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputEmail,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputEmail,
		isStandalone: false,
		selector: "p-input-email,[p-input-email]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			indicator: "indicator",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			multiple: "multiple",
			name: "name",
			pattern: "pattern",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputEmail),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputEmail,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-email,[p-input-email]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"indicator",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"multiple",
				"name",
				"pattern",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputEmail),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputMonth = class PInputMonth extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	max;
	message;
	min;
	name;
	readOnly;
	required;
	state;
	step;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputMonth,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputMonth,
		isStandalone: false,
		selector: "p-input-month,[p-input-month]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			max: "max",
			message: "message",
			min: "min",
			name: "name",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			step: "step",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputMonth),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputMonth,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-month,[p-input-month]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"max",
				"message",
				"min",
				"name",
				"readOnly",
				"required",
				"state",
				"step",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputMonth),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputNumber = class PInputNumber extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	controls;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	max;
	message;
	min;
	name;
	placeholder;
	readOnly;
	required;
	state;
	step;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputNumber,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputNumber,
		isStandalone: false,
		selector: "p-input-number,[p-input-number]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			controls: "controls",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			max: "max",
			message: "message",
			min: "min",
			name: "name",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			step: "step",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputNumber),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputNumber,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-number,[p-input-number]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"controls",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"max",
				"message",
				"min",
				"name",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"step",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputNumber),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputPassword = class PInputPassword extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	maxLength;
	message;
	minLength;
	name;
	placeholder;
	readOnly;
	required;
	state;
	toggle;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputPassword,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputPassword,
		isStandalone: false,
		selector: "p-input-password,[p-input-password]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			toggle: "toggle",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputPassword),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputPassword,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-password,[p-input-password]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"name",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"toggle",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputPassword),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputSearch = class PInputSearch extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	clear;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	indicator;
	label;
	loading;
	maxLength;
	message;
	minLength;
	name;
	placeholder;
	readOnly;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputSearch,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputSearch,
		isStandalone: false,
		selector: "p-input-search,[p-input-search]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			clear: "clear",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			indicator: "indicator",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputSearch),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputSearch,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-search,[p-input-search]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"clear",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"indicator",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"name",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputSearch),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputTel = class PInputTel extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	indicator;
	label;
	loading;
	maxLength;
	message;
	minLength;
	name;
	pattern;
	placeholder;
	readOnly;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputTel,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputTel,
		isStandalone: false,
		selector: "p-input-tel,[p-input-tel]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			indicator: "indicator",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			pattern: "pattern",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputTel),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputTel,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-tel,[p-input-tel]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"indicator",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"name",
				"pattern",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputTel),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputText = class PInputText extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	counter;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	maxLength;
	message;
	minLength;
	name;
	placeholder;
	readOnly;
	required;
	spellCheck;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputText,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputText,
		isStandalone: false,
		selector: "p-input-text,[p-input-text]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			counter: "counter",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			spellCheck: "spellCheck",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputText),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputText,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-text,[p-input-text]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"counter",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"name",
				"placeholder",
				"readOnly",
				"required",
				"spellCheck",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputText),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputTime = class PInputTime extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	max;
	message;
	min;
	name;
	readOnly;
	required;
	state;
	step;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputTime,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputTime,
		isStandalone: false,
		selector: "p-input-time,[p-input-time]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			max: "max",
			message: "message",
			min: "min",
			name: "name",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			step: "step",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputTime),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputTime,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-time,[p-input-time]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"max",
				"message",
				"min",
				"name",
				"readOnly",
				"required",
				"state",
				"step",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputTime),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputUrl = class PInputUrl extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	indicator;
	label;
	loading;
	maxLength;
	message;
	minLength;
	name;
	pattern;
	placeholder;
	readOnly;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputUrl,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputUrl,
		isStandalone: false,
		selector: "p-input-url,[p-input-url]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			indicator: "indicator",
			label: "label",
			loading: "loading",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			pattern: "pattern",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputUrl),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputUrl,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-url,[p-input-url]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"indicator",
				"label",
				"loading",
				"maxLength",
				"message",
				"minLength",
				"name",
				"pattern",
				"placeholder",
				"readOnly",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputUrl),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PInputWeek = class PInputWeek extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	max;
	message;
	min;
	name;
	readOnly;
	required;
	state;
	step;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PInputWeek,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PInputWeek,
		isStandalone: false,
		selector: "p-input-week,[p-input-week]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			max: "max",
			message: "message",
			min: "min",
			name: "name",
			readOnly: "readOnly",
			required: "required",
			state: "state",
			step: "step",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PInputWeek),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PInputWeek,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-input-week,[p-input-week]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"max",
				"message",
				"min",
				"name",
				"readOnly",
				"required",
				"state",
				"step",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PInputWeek),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PLink = class PLink extends BaseComponent {
	aria;
	compact;
	download;
	hideLabel;
	href;
	icon;
	iconSource;
	rel;
	target;
	variant;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PLink,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PLink,
		isStandalone: false,
		selector: "p-link,[p-link]",
		inputs: {
			aria: "aria",
			compact: "compact",
			download: "download",
			hideLabel: "hideLabel",
			href: "href",
			icon: "icon",
			iconSource: "iconSource",
			rel: "rel",
			target: "target",
			variant: "variant"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PLink,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-link,[p-link]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"download",
				"hideLabel",
				"href",
				"icon",
				"iconSource",
				"rel",
				"target",
				"variant"
			],
			standalone: false
		}]
	}]
});
var PLinkPure = class PLinkPure extends BaseComponent {
	active;
	alignLabel;
	aria;
	color;
	download;
	hideLabel;
	href;
	icon;
	iconSource;
	rel;
	size;
	stretch;
	target;
	underline;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PLinkPure,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PLinkPure,
		isStandalone: false,
		selector: "p-link-pure,[p-link-pure]",
		inputs: {
			active: "active",
			alignLabel: "alignLabel",
			aria: "aria",
			color: "color",
			download: "download",
			hideLabel: "hideLabel",
			href: "href",
			icon: "icon",
			iconSource: "iconSource",
			rel: "rel",
			size: "size",
			stretch: "stretch",
			target: "target",
			underline: "underline"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PLinkPure,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-link-pure,[p-link-pure]",
			template: "<ng-content />",
			inputs: [
				"active",
				"alignLabel",
				"aria",
				"color",
				"download",
				"hideLabel",
				"href",
				"icon",
				"iconSource",
				"rel",
				"size",
				"stretch",
				"target",
				"underline"
			],
			standalone: false
		}]
	}]
});
var PLinkTile = class PLinkTile extends BaseComponent {
	align;
	aria;
	aspectRatio;
	compact;
	description;
	download;
	gradient;
	href;
	label;
	rel;
	size;
	target;
	weight;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PLinkTile,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PLinkTile,
		isStandalone: false,
		selector: "p-link-tile,[p-link-tile]",
		inputs: {
			align: "align",
			aria: "aria",
			aspectRatio: "aspectRatio",
			compact: "compact",
			description: "description",
			download: "download",
			gradient: "gradient",
			href: "href",
			label: "label",
			rel: "rel",
			size: "size",
			target: "target",
			weight: "weight"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PLinkTile,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-link-tile,[p-link-tile]",
			template: "<ng-content />",
			inputs: [
				"align",
				"aria",
				"aspectRatio",
				"compact",
				"description",
				"download",
				"gradient",
				"href",
				"label",
				"rel",
				"size",
				"target",
				"weight"
			],
			standalone: false
		}]
	}]
});
var PLinkTileProduct = class PLinkTileProduct extends BaseComponent {
	aspectRatio;
	description;
	heading;
	href;
	likeButton;
	liked;
	price;
	priceOriginal;
	rel;
	target;
	like = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PLinkTileProduct,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PLinkTileProduct,
		isStandalone: false,
		selector: "p-link-tile-product,[p-link-tile-product]",
		inputs: {
			aspectRatio: "aspectRatio",
			description: "description",
			heading: "heading",
			href: "href",
			likeButton: "likeButton",
			liked: "liked",
			price: "price",
			priceOriginal: "priceOriginal",
			rel: "rel",
			target: "target"
		},
		outputs: { like: "like" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PLinkTileProduct,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-link-tile-product,[p-link-tile-product]",
			template: "<ng-content />",
			inputs: [
				"aspectRatio",
				"description",
				"heading",
				"href",
				"likeButton",
				"liked",
				"price",
				"priceOriginal",
				"rel",
				"target"
			],
			outputs: ["like"],
			standalone: false
		}]
	}]
});
var PModal = class PModal extends BaseComponent {
	aria;
	backdrop;
	background;
	disableBackdropClick;
	dismissButton;
	fullscreen;
	open;
	dismiss = new EventEmitter();
	motionHiddenEnd = new EventEmitter();
	motionVisibleEnd = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PModal,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PModal,
		isStandalone: false,
		selector: "p-modal,[p-modal]",
		inputs: {
			aria: "aria",
			backdrop: "backdrop",
			background: "background",
			disableBackdropClick: "disableBackdropClick",
			dismissButton: "dismissButton",
			fullscreen: "fullscreen",
			open: "open"
		},
		outputs: {
			dismiss: "dismiss",
			motionHiddenEnd: "motionHiddenEnd",
			motionVisibleEnd: "motionVisibleEnd"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PModal,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-modal,[p-modal]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"backdrop",
				"background",
				"disableBackdropClick",
				"dismissButton",
				"fullscreen",
				"open"
			],
			outputs: [
				"dismiss",
				"motionHiddenEnd",
				"motionVisibleEnd"
			],
			standalone: false
		}]
	}]
});
var PModelSignature = class PModelSignature extends BaseComponent {
	color;
	fetchPriority;
	lazy;
	model;
	safeZone;
	size;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PModelSignature,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PModelSignature,
		isStandalone: false,
		selector: "p-model-signature,[p-model-signature]",
		inputs: {
			color: "color",
			fetchPriority: "fetchPriority",
			lazy: "lazy",
			model: "model",
			safeZone: "safeZone",
			size: "size"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PModelSignature,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-model-signature,[p-model-signature]",
			template: "<ng-content />",
			inputs: [
				"color",
				"fetchPriority",
				"lazy",
				"model",
				"safeZone",
				"size"
			],
			standalone: false
		}]
	}]
});
var PMultiSelect = class PMultiSelect extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	compact;
	description;
	disabled;
	dropdownDirection;
	form;
	hideLabel;
	label;
	message;
	name;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	toggle = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PMultiSelect,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PMultiSelect,
		isStandalone: false,
		selector: "p-multi-select,[p-multi-select]",
		inputs: {
			aria: "aria",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			dropdownDirection: "dropdownDirection",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			message: "message",
			name: "name",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			toggle: "toggle"
		},
		host: { listeners: {
			"change": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PMultiSelect),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PMultiSelect,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-multi-select,[p-multi-select]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"description",
				"disabled",
				"dropdownDirection",
				"form",
				"hideLabel",
				"label",
				"message",
				"name",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"toggle"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PMultiSelect),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PMultiSelectOption = class PMultiSelectOption extends BaseComponent {
	disabled;
	value;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PMultiSelectOption,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PMultiSelectOption,
		isStandalone: false,
		selector: "p-multi-select-option,[p-multi-select-option]",
		inputs: {
			disabled: "disabled",
			value: "value"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PMultiSelectOption,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-multi-select-option,[p-multi-select-option]",
			template: "<ng-content />",
			inputs: ["disabled", "value"],
			standalone: false
		}]
	}]
});
var POptgroup = class POptgroup extends BaseComponent {
	disabled;
	label;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: POptgroup,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: POptgroup,
		isStandalone: false,
		selector: "p-optgroup,[p-optgroup]",
		inputs: {
			disabled: "disabled",
			label: "label"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: POptgroup,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-optgroup,[p-optgroup]",
			template: "<ng-content />",
			inputs: ["disabled", "label"],
			standalone: false
		}]
	}]
});
var PPagination = class PPagination extends BaseComponent {
	activePage;
	intl;
	itemsPerPage;
	showLastPage;
	totalItemsCount;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PPagination,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PPagination,
		isStandalone: false,
		selector: "p-pagination,[p-pagination]",
		inputs: {
			activePage: "activePage",
			intl: "intl",
			itemsPerPage: "itemsPerPage",
			showLastPage: "showLastPage",
			totalItemsCount: "totalItemsCount"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PPagination,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-pagination,[p-pagination]",
			template: "<ng-content />",
			inputs: [
				"activePage",
				"intl",
				"itemsPerPage",
				"showLastPage",
				"totalItemsCount"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PPinCode = class PPinCode extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	length;
	loading;
	message;
	name;
	required;
	state;
	type;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PPinCode,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PPinCode,
		isStandalone: false,
		selector: "p-pin-code,[p-pin-code]",
		inputs: {
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			length: "length",
			loading: "loading",
			message: "message",
			name: "name",
			required: "required",
			state: "state",
			type: "type",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change"
		},
		host: { listeners: {
			"change": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PPinCode),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PPinCode,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-pin-code,[p-pin-code]",
			template: "<ng-content />",
			inputs: [
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"length",
				"loading",
				"message",
				"name",
				"required",
				"state",
				"type",
				"value"
			],
			outputs: ["blur", "change"],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PPinCode),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PPopover = class PPopover extends BaseComponent {
	aria;
	compact;
	description;
	direction;
	open;
	dismiss = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PPopover,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PPopover,
		isStandalone: false,
		selector: "p-popover,[p-popover]",
		inputs: {
			aria: "aria",
			compact: "compact",
			description: "description",
			direction: "direction",
			open: "open"
		},
		outputs: { dismiss: "dismiss" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PPopover,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-popover,[p-popover]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"description",
				"direction",
				"open"
			],
			outputs: ["dismiss"],
			standalone: false
		}]
	}]
});
var PRadioGroup = class PRadioGroup extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	compact;
	description;
	direction;
	disabled;
	form;
	hideLabel;
	label;
	loading;
	message;
	name;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PRadioGroup,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PRadioGroup,
		isStandalone: false,
		selector: "p-radio-group,[p-radio-group]",
		inputs: {
			compact: "compact",
			description: "description",
			direction: "direction",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			loading: "loading",
			message: "message",
			name: "name",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change"
		},
		host: { listeners: {
			"change": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PRadioGroup),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PRadioGroup,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-radio-group,[p-radio-group]",
			template: "<ng-content />",
			inputs: [
				"compact",
				"description",
				"direction",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"loading",
				"message",
				"name",
				"required",
				"state",
				"value"
			],
			outputs: ["blur", "change"],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PRadioGroup),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PRadioGroupOption = class PRadioGroupOption extends BaseComponent {
	disabled;
	label;
	loading;
	value;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PRadioGroupOption,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PRadioGroupOption,
		isStandalone: false,
		selector: "p-radio-group-option,[p-radio-group-option]",
		inputs: {
			disabled: "disabled",
			label: "label",
			loading: "loading",
			value: "value"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PRadioGroupOption,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-radio-group-option,[p-radio-group-option]",
			template: "<ng-content />",
			inputs: [
				"disabled",
				"label",
				"loading",
				"value"
			],
			standalone: false
		}]
	}]
});
var PScroller = class PScroller extends BaseComponent {
	alignScrollIndicator;
	aria;
	compact;
	scrollToPosition;
	scrollbar;
	sticky;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PScroller,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PScroller,
		isStandalone: false,
		selector: "p-scroller,[p-scroller]",
		inputs: {
			alignScrollIndicator: "alignScrollIndicator",
			aria: "aria",
			compact: "compact",
			scrollToPosition: "scrollToPosition",
			scrollbar: "scrollbar",
			sticky: "sticky"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PScroller,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-scroller,[p-scroller]",
			template: "<ng-content />",
			inputs: [
				"alignScrollIndicator",
				"aria",
				"compact",
				"scrollToPosition",
				"scrollbar",
				"sticky"
			],
			standalone: false
		}]
	}]
});
var PSegmentedControl = class PSegmentedControl extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	columns;
	compact;
	description;
	disabled;
	form;
	hideLabel;
	label;
	message;
	name;
	noWrap;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSegmentedControl,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSegmentedControl,
		isStandalone: false,
		selector: "p-segmented-control,[p-segmented-control]",
		inputs: {
			columns: "columns",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			message: "message",
			name: "name",
			noWrap: "noWrap",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change"
		},
		host: { listeners: {
			"change": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PSegmentedControl),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSegmentedControl,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-segmented-control,[p-segmented-control]",
			template: "<ng-content />",
			inputs: [
				"columns",
				"compact",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"message",
				"name",
				"noWrap",
				"required",
				"state",
				"value"
			],
			outputs: ["blur", "change"],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PSegmentedControl),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PSegmentedControlItem = class PSegmentedControlItem extends BaseComponent {
	aria;
	disabled;
	icon;
	iconSource;
	label;
	value;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSegmentedControlItem,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSegmentedControlItem,
		isStandalone: false,
		selector: "p-segmented-control-item,[p-segmented-control-item]",
		inputs: {
			aria: "aria",
			disabled: "disabled",
			icon: "icon",
			iconSource: "iconSource",
			label: "label",
			value: "value"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSegmentedControlItem,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-segmented-control-item,[p-segmented-control-item]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"disabled",
				"icon",
				"iconSource",
				"label",
				"value"
			],
			standalone: false
		}]
	}]
});
var PSelect = class PSelect extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	compact;
	description;
	disabled;
	dropdownDirection;
	filter;
	form;
	hideLabel;
	label;
	message;
	name;
	required;
	state;
	value;
	blur = new EventEmitter();
	change = new EventEmitter();
	toggle = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSelect,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSelect,
		isStandalone: false,
		selector: "p-select,[p-select]",
		inputs: {
			aria: "aria",
			compact: "compact",
			description: "description",
			disabled: "disabled",
			dropdownDirection: "dropdownDirection",
			filter: "filter",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			message: "message",
			name: "name",
			required: "required",
			state: "state",
			value: "value"
		},
		outputs: {
			blur: "blur",
			change: "change",
			toggle: "toggle"
		},
		host: { listeners: {
			"change": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PSelect),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSelect,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-select,[p-select]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"description",
				"disabled",
				"dropdownDirection",
				"filter",
				"form",
				"hideLabel",
				"label",
				"message",
				"name",
				"required",
				"state",
				"value"
			],
			outputs: [
				"blur",
				"change",
				"toggle"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PSelect),
				multi: true
			}],
			host: {
				"(change)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PSelectOption = class PSelectOption extends BaseComponent {
	disabled;
	value;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSelectOption,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSelectOption,
		isStandalone: false,
		selector: "p-select-option,[p-select-option]",
		inputs: {
			disabled: "disabled",
			value: "value"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSelectOption,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-select-option,[p-select-option]",
			template: "<ng-content />",
			inputs: ["disabled", "value"],
			standalone: false
		}]
	}]
});
var PSheet = class PSheet extends BaseComponent {
	aria;
	background;
	disableBackdropClick;
	dismissButton;
	open;
	dismiss = new EventEmitter();
	motionHiddenEnd = new EventEmitter();
	motionVisibleEnd = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSheet,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSheet,
		isStandalone: false,
		selector: "p-sheet,[p-sheet]",
		inputs: {
			aria: "aria",
			background: "background",
			disableBackdropClick: "disableBackdropClick",
			dismissButton: "dismissButton",
			open: "open"
		},
		outputs: {
			dismiss: "dismiss",
			motionHiddenEnd: "motionHiddenEnd",
			motionVisibleEnd: "motionVisibleEnd"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSheet,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-sheet,[p-sheet]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"background",
				"disableBackdropClick",
				"dismissButton",
				"open"
			],
			outputs: [
				"dismiss",
				"motionHiddenEnd",
				"motionVisibleEnd"
			],
			standalone: false
		}]
	}]
});
var PSpinner = class PSpinner extends BaseComponent {
	aria;
	color;
	size;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSpinner,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSpinner,
		isStandalone: false,
		selector: "p-spinner,[p-spinner]",
		inputs: {
			aria: "aria",
			color: "color",
			size: "size"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSpinner,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-spinner,[p-spinner]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"color",
				"size"
			],
			standalone: false
		}]
	}]
});
var PStepperHorizontal = class PStepperHorizontal extends BaseComponent {
	size;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PStepperHorizontal,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PStepperHorizontal,
		isStandalone: false,
		selector: "p-stepper-horizontal,[p-stepper-horizontal]",
		inputs: { size: "size" },
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PStepperHorizontal,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-stepper-horizontal,[p-stepper-horizontal]",
			template: "<ng-content />",
			inputs: ["size"],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PStepperHorizontalItem = class PStepperHorizontalItem extends BaseComponent {
	disabled;
	state;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PStepperHorizontalItem,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PStepperHorizontalItem,
		isStandalone: false,
		selector: "p-stepper-horizontal-item,[p-stepper-horizontal-item]",
		inputs: {
			disabled: "disabled",
			state: "state"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PStepperHorizontalItem,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-stepper-horizontal-item,[p-stepper-horizontal-item]",
			template: "<ng-content />",
			inputs: ["disabled", "state"],
			standalone: false
		}]
	}]
});
var PSwitch = class PSwitch extends BaseComponent {
	alignLabel;
	aria;
	checked;
	compact;
	disabled;
	hideLabel;
	loading;
	stretch;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PSwitch,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PSwitch,
		isStandalone: false,
		selector: "p-switch,[p-switch]",
		inputs: {
			alignLabel: "alignLabel",
			aria: "aria",
			checked: "checked",
			compact: "compact",
			disabled: "disabled",
			hideLabel: "hideLabel",
			loading: "loading",
			stretch: "stretch"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PSwitch,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-switch,[p-switch]",
			template: "<ng-content />",
			inputs: [
				"alignLabel",
				"aria",
				"checked",
				"compact",
				"disabled",
				"hideLabel",
				"loading",
				"stretch"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PTable = class PTable extends BaseComponent {
	caption;
	compact;
	layout;
	sticky;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTable,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTable,
		isStandalone: false,
		selector: "p-table,[p-table]",
		inputs: {
			caption: "caption",
			compact: "compact",
			layout: "layout",
			sticky: "sticky"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTable,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table,[p-table]",
			template: "<ng-content />",
			inputs: [
				"caption",
				"compact",
				"layout",
				"sticky"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PTableBody = class PTableBody extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableBody,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableBody,
		isStandalone: false,
		selector: "p-table-body,[p-table-body]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableBody,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-body,[p-table-body]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PTableCell = class PTableCell extends BaseComponent {
	multiline;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableCell,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableCell,
		isStandalone: false,
		selector: "p-table-cell,[p-table-cell]",
		inputs: { multiline: "multiline" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableCell,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-cell,[p-table-cell]",
			template: "<ng-content />",
			inputs: ["multiline"],
			standalone: false
		}]
	}]
});
var PTableHead = class PTableHead extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableHead,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableHead,
		isStandalone: false,
		selector: "p-table-head,[p-table-head]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableHead,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-head,[p-table-head]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PTableHeadCell = class PTableHeadCell extends BaseComponent {
	hideLabel;
	multiline;
	sort;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableHeadCell,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableHeadCell,
		isStandalone: false,
		selector: "p-table-head-cell,[p-table-head-cell]",
		inputs: {
			hideLabel: "hideLabel",
			multiline: "multiline",
			sort: "sort"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableHeadCell,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-head-cell,[p-table-head-cell]",
			template: "<ng-content />",
			inputs: [
				"hideLabel",
				"multiline",
				"sort"
			],
			standalone: false
		}]
	}]
});
var PTableHeadRow = class PTableHeadRow extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableHeadRow,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableHeadRow,
		isStandalone: false,
		selector: "p-table-head-row,[p-table-head-row]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableHeadRow,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-head-row,[p-table-head-row]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PTableRow = class PTableRow extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTableRow,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTableRow,
		isStandalone: false,
		selector: "p-table-row,[p-table-row]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTableRow,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-table-row,[p-table-row]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PTabs = class PTabs extends BaseComponent {
	activeTabIndex;
	aria;
	background;
	compact;
	size;
	weight;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTabs,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTabs,
		isStandalone: false,
		selector: "p-tabs,[p-tabs]",
		inputs: {
			activeTabIndex: "activeTabIndex",
			aria: "aria",
			background: "background",
			compact: "compact",
			size: "size",
			weight: "weight"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTabs,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-tabs,[p-tabs]",
			template: "<ng-content />",
			inputs: [
				"activeTabIndex",
				"aria",
				"background",
				"compact",
				"size",
				"weight"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PTabsBar = class PTabsBar extends BaseComponent {
	activeTabIndex;
	aria;
	background;
	compact;
	size;
	weight;
	update = new EventEmitter();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTabsBar,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTabsBar,
		isStandalone: false,
		selector: "p-tabs-bar,[p-tabs-bar]",
		inputs: {
			activeTabIndex: "activeTabIndex",
			aria: "aria",
			background: "background",
			compact: "compact",
			size: "size",
			weight: "weight"
		},
		outputs: { update: "update" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTabsBar,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-tabs-bar,[p-tabs-bar]",
			template: "<ng-content />",
			inputs: [
				"activeTabIndex",
				"aria",
				"background",
				"compact",
				"size",
				"weight"
			],
			outputs: ["update"],
			standalone: false
		}]
	}]
});
var PTabsItem = class PTabsItem extends BaseComponent {
	label;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTabsItem,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTabsItem,
		isStandalone: false,
		selector: "p-tabs-item,[p-tabs-item]",
		inputs: { label: "label" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTabsItem,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-tabs-item,[p-tabs-item]",
			template: "<ng-content />",
			inputs: ["label"],
			standalone: false
		}]
	}]
});
var PTag = class PTag extends BaseComponent {
	compact;
	icon;
	iconSource;
	variant;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTag,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTag,
		isStandalone: false,
		selector: "p-tag,[p-tag]",
		inputs: {
			compact: "compact",
			icon: "icon",
			iconSource: "iconSource",
			variant: "variant"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTag,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-tag,[p-tag]",
			template: "<ng-content />",
			inputs: [
				"compact",
				"icon",
				"iconSource",
				"variant"
			],
			standalone: false
		}]
	}]
});
var PTagDismissible = class PTagDismissible extends BaseComponent {
	aria;
	compact;
	label;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTagDismissible,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTagDismissible,
		isStandalone: false,
		selector: "p-tag-dismissible,[p-tag-dismissible]",
		inputs: {
			aria: "aria",
			compact: "compact",
			label: "label"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTagDismissible,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-tag-dismissible,[p-tag-dismissible]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"compact",
				"label"
			],
			standalone: false
		}]
	}]
});
var PText = class PText extends BaseComponent {
	align;
	color;
	ellipsis;
	hyphens;
	size;
	tag;
	weight;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PText,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PText,
		isStandalone: false,
		selector: "p-text,[p-text]",
		inputs: {
			align: "align",
			color: "color",
			ellipsis: "ellipsis",
			hyphens: "hyphens",
			size: "size",
			tag: "tag",
			weight: "weight"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PText,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-text,[p-text]",
			template: "<ng-content />",
			inputs: [
				"align",
				"color",
				"ellipsis",
				"hyphens",
				"size",
				"tag",
				"weight"
			],
			standalone: false
		}]
	}]
});
var PTextList = class PTextList extends BaseComponent {
	type;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTextList,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTextList,
		isStandalone: false,
		selector: "p-text-list,[p-text-list]",
		inputs: { type: "type" },
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTextList,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-text-list,[p-text-list]",
			template: "<ng-content />",
			inputs: ["type"],
			standalone: false
		}]
	}]
});
var PTextListItem = class PTextListItem extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTextListItem,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTextListItem,
		isStandalone: false,
		selector: "p-text-list-item,[p-text-list-item]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTextListItem,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-text-list-item,[p-text-list-item]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PTextarea = class PTextarea extends BaseComponent {
	_renderer;
	_elementRef;
	_cdr;
	aria;
	autoComplete;
	compact;
	counter;
	description;
	disabled;
	form;
	hideLabel;
	label;
	maxLength;
	message;
	minLength;
	name;
	placeholder;
	readOnly;
	required;
	resize;
	rows;
	spellCheck;
	state;
	value;
	wrap;
	blur = new EventEmitter();
	change = new EventEmitter();
	input = new EventEmitter();
	constructor(_renderer, _elementRef, _cdr) {
		super(_cdr, _elementRef);
		this._renderer = _renderer;
		this._elementRef = _elementRef;
		this._cdr = _cdr;
	}
	_onChange = () => {};
	_onTouched = () => {};
	writeValue(value) {
		this._renderer.setProperty(this._elementRef.nativeElement, "value", value);
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._renderer.setProperty(this._elementRef.nativeElement, "disabled", isDisabled);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PTextarea,
		deps: [
			{ token: i0.Renderer2 },
			{ token: i0.ElementRef },
			{ token: i0.ChangeDetectorRef }
		],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PTextarea,
		isStandalone: false,
		selector: "p-textarea,[p-textarea]",
		inputs: {
			aria: "aria",
			autoComplete: "autoComplete",
			compact: "compact",
			counter: "counter",
			description: "description",
			disabled: "disabled",
			form: "form",
			hideLabel: "hideLabel",
			label: "label",
			maxLength: "maxLength",
			message: "message",
			minLength: "minLength",
			name: "name",
			placeholder: "placeholder",
			readOnly: "readOnly",
			required: "required",
			resize: "resize",
			rows: "rows",
			spellCheck: "spellCheck",
			state: "state",
			value: "value",
			wrap: "wrap"
		},
		outputs: {
			blur: "blur",
			change: "change",
			input: "input"
		},
		host: { listeners: {
			"input": "_onChange($event.target.value)",
			"blur": "_onTouched()"
		} },
		providers: [{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PTextarea),
			multi: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PTextarea,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-textarea,[p-textarea]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"autoComplete",
				"compact",
				"counter",
				"description",
				"disabled",
				"form",
				"hideLabel",
				"label",
				"maxLength",
				"message",
				"minLength",
				"name",
				"placeholder",
				"readOnly",
				"required",
				"resize",
				"rows",
				"spellCheck",
				"state",
				"value",
				"wrap"
			],
			outputs: [
				"blur",
				"change",
				"input"
			],
			standalone: false,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => PTextarea),
				multi: true
			}],
			host: {
				"(input)": "_onChange($event.target.value)",
				"(blur)": "_onTouched()"
			}
		}]
	}],
	ctorParameters: () => [
		{ type: i0.Renderer2 },
		{ type: i0.ElementRef },
		{ type: i0.ChangeDetectorRef }
	]
});
var PToast = class PToast extends BaseComponent {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PToast,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PToast,
		isStandalone: false,
		selector: "p-toast,[p-toast]",
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PToast,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-toast,[p-toast]",
			template: "<ng-content />",
			standalone: false
		}]
	}]
});
var PWordmark = class PWordmark extends BaseComponent {
	aria;
	href;
	size;
	target;
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PWordmark,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: PWordmark,
		isStandalone: false,
		selector: "p-wordmark,[p-wordmark]",
		inputs: {
			aria: "aria",
			href: "href",
			size: "size",
			target: "target"
		},
		usesInheritance: true,
		ngImport: i0,
		template: "<ng-content />",
		isInline: true
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PWordmark,
	decorators: [{
		type: Component,
		args: [{
			selector: "p-wordmark,[p-wordmark]",
			template: "<ng-content />",
			inputs: [
				"aria",
				"href",
				"size",
				"target"
			],
			standalone: false
		}]
	}]
});
const DECLARATIONS = [
	PAccordion,
	PAiTag,
	PBanner,
	PButton,
	PButtonPure,
	PButtonTile,
	PCanvas,
	PCarousel,
	PCheckbox,
	PCrest,
	PDisplay,
	PDivider,
	PDrilldown,
	PDrilldownItem,
	PDrilldownLink,
	PFieldset,
	PFlag,
	PFlyout,
	PHeading,
	PIcon,
	PInlineNotification,
	PInputDate,
	PInputEmail,
	PInputMonth,
	PInputNumber,
	PInputPassword,
	PInputSearch,
	PInputTel,
	PInputText,
	PInputTime,
	PInputUrl,
	PInputWeek,
	PLink,
	PLinkPure,
	PLinkTile,
	PLinkTileProduct,
	PModal,
	PModelSignature,
	PMultiSelect,
	PMultiSelectOption,
	POptgroup,
	PPagination,
	PPinCode,
	PPopover,
	PRadioGroup,
	PRadioGroupOption,
	PScroller,
	PSegmentedControl,
	PSegmentedControlItem,
	PSelect,
	PSelectOption,
	PSheet,
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
	PTextList,
	PTextListItem,
	PTextarea,
	PToast,
	PWordmark
];
var DefaultConfig = class {
	prefix = "";
};
var PorscheDesignSystemModule = class PorscheDesignSystemModule {
	constructor(configParam) {
		(configParam || [new DefaultConfig()]).forEach(load);
	}
	static load(config) {
		return {
			ngModule: PorscheDesignSystemModule,
			providers: [{
				provide: DefaultConfig,
				multi: true,
				useValue: config
			}]
		};
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PorscheDesignSystemModule,
		deps: [{
			token: DefaultConfig,
			optional: true
		}],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PorscheDesignSystemModule,
		declarations: [
			PAccordion,
			PAiTag,
			PBanner,
			PButton,
			PButtonPure,
			PButtonTile,
			PCanvas,
			PCarousel,
			PCheckbox,
			PCrest,
			PDisplay,
			PDivider,
			PDrilldown,
			PDrilldownItem,
			PDrilldownLink,
			PFieldset,
			PFlag,
			PFlyout,
			PHeading,
			PIcon,
			PInlineNotification,
			PInputDate,
			PInputEmail,
			PInputMonth,
			PInputNumber,
			PInputPassword,
			PInputSearch,
			PInputTel,
			PInputText,
			PInputTime,
			PInputUrl,
			PInputWeek,
			PLink,
			PLinkPure,
			PLinkTile,
			PLinkTileProduct,
			PModal,
			PModelSignature,
			PMultiSelect,
			PMultiSelectOption,
			POptgroup,
			PPagination,
			PPinCode,
			PPopover,
			PRadioGroup,
			PRadioGroupOption,
			PScroller,
			PSegmentedControl,
			PSegmentedControlItem,
			PSelect,
			PSelectOption,
			PSheet,
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
			PTextList,
			PTextListItem,
			PTextarea,
			PToast,
			PWordmark
		],
		exports: [
			PAccordion,
			PAiTag,
			PBanner,
			PButton,
			PButtonPure,
			PButtonTile,
			PCanvas,
			PCarousel,
			PCheckbox,
			PCrest,
			PDisplay,
			PDivider,
			PDrilldown,
			PDrilldownItem,
			PDrilldownLink,
			PFieldset,
			PFlag,
			PFlyout,
			PHeading,
			PIcon,
			PInlineNotification,
			PInputDate,
			PInputEmail,
			PInputMonth,
			PInputNumber,
			PInputPassword,
			PInputSearch,
			PInputTel,
			PInputText,
			PInputTime,
			PInputUrl,
			PInputWeek,
			PLink,
			PLinkPure,
			PLinkTile,
			PLinkTileProduct,
			PModal,
			PModelSignature,
			PMultiSelect,
			PMultiSelectOption,
			POptgroup,
			PPagination,
			PPinCode,
			PPopover,
			PRadioGroup,
			PRadioGroupOption,
			PScroller,
			PSegmentedControl,
			PSegmentedControlItem,
			PSelect,
			PSelectOption,
			PSheet,
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
			PTextList,
			PTextListItem,
			PTextarea,
			PToast,
			PWordmark
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: PorscheDesignSystemModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: PorscheDesignSystemModule,
	decorators: [{
		type: NgModule,
		args: [{
			declarations: DECLARATIONS,
			exports: DECLARATIONS
		}]
	}],
	ctorParameters: () => [{
		type: DefaultConfig,
		decorators: [{ type: Optional }]
	}]
});
var ToastManager = class ToastManager {
	addMessage(message) {
		const toast = document.body.querySelector("p-toast,[p-toast]");
		customElements.whenDefined(toast.tagName.toLowerCase()).then(() => toast.addMessage(message));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ToastManager,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ToastManager,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ToastManager,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
export { DECLARATIONS, PAccordion, PAiTag, PBanner, PButton, PButtonPure, PButtonTile, PCanvas, PCarousel, PCheckbox, PCrest, PDisplay, PDivider, PDrilldown, PDrilldownItem, PDrilldownLink, PFieldset, PFlag, PFlyout, PHeading, PIcon, PInlineNotification, PInputDate, PInputEmail, PInputMonth, PInputNumber, PInputPassword, PInputSearch, PInputTel, PInputText, PInputTime, PInputUrl, PInputWeek, PLink, PLinkPure, PLinkTile, PLinkTileProduct, PModal, PModelSignature, PMultiSelect, PMultiSelectOption, POptgroup, PPagination, PPinCode, PPopover, PRadioGroup, PRadioGroupOption, PScroller, PSegmentedControl, PSegmentedControlItem, PSelect, PSelectOption, PSheet, PSpinner, PStepperHorizontal, PStepperHorizontalItem, PSwitch, PTable, PTableBody, PTableCell, PTableHead, PTableHeadCell, PTableHeadRow, PTableRow, PTabs, PTabsBar, PTabsItem, PTag, PTagDismissible, PText, PTextList, PTextListItem, PTextarea, PToast, PWordmark, PorscheDesignSystemModule, ToastManager, componentsReady };

//# sourceMappingURL=porsche-design-system-components-angular.mjs.map