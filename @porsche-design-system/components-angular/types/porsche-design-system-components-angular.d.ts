import { componentsReady } from "@porsche-design-system/components-js";
import * as i0 from "@angular/core";
import { ChangeDetectorRef, ElementRef, EventEmitter, ModuleWithProviders, OnChanges, Renderer2 } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
declare abstract class BaseComponent implements OnChanges {
  protected el: HTMLElement;
  constructor(cdr: ChangeDetectorRef, elementRef: ElementRef);
  ngOnChanges(props: Record<string, {
    previousValue: any;
    currentValue: any;
    firstChange: boolean;
  }>): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "ng-component", never, {}, {}, never, never, true, never>;
}
declare const ACCORDIONS_BACKGROUNDS: readonly ["canvas", "surface", "frosted", "none"];
export type AccordionBackground = (typeof ACCORDIONS_BACKGROUNDS)[number];
declare const ACCORDION_ALIGN_MARKERS: readonly ["start", "end"];
export type AccordionAlignMarker = (typeof ACCORDION_ALIGN_MARKERS)[number];
export type AccordionUpdateEventDetail = {
  open: boolean;
};
declare const ACCORDION_HEADINGS_DEPRECATED: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
/** @deprecated */
export type AccordionHeadingTag = (typeof ACCORDION_HEADINGS_DEPRECATED)[number];
declare const ACCORDION_SIZES: readonly ["small", "medium"];
/** @deprecated */
export type AccordionSize = (typeof ACCORDION_SIZES)[number];
export type Booleanish = boolean | "true" | "false";
export type AriaAttributes = {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string | undefined;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: Booleanish | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  "aria-braillelabel"?: string | undefined;
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  "aria-brailleroledescription"?: string | undefined;
  "aria-busy"?: Booleanish | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | undefined;
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  "aria-colindextext"?: string | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  "aria-description"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: Booleanish | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: Booleanish | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: Booleanish | undefined;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: Booleanish | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | undefined;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: Booleanish | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: Booleanish | undefined;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: Booleanish | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: Booleanish | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: Booleanish | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | undefined;
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  "aria-rowindextext"?: string | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: Booleanish | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | undefined;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
  /** All the WAI-ARIA 1.1 role attribute values from https://w3.org/TR/wai-aria-1.1/#role_definitions */
  role?: AriaRole;
};
export type AriaRole = "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem";
declare const ICON_NAMES: readonly ["360", "4-wheel-drive", "accessibility", "active-cabin-ventilation", "add", "adjust", "aggregation", "ai-3d-object", "ai-chat", "ai-code", "ai-edit", "ai-image", "ai-scale", "ai-sound", "ai-spark", "ai-spark-filled", "ai-text", "ai-video", "arrow-compact-down", "arrow-compact-left", "arrow-compact-right", "arrow-compact-up", "arrow-double-down", "arrow-double-left", "arrow-double-right", "arrow-double-up", "arrow-down", "arrow-down-left", "arrow-down-right", "arrow-first", "arrow-head-down", "arrow-head-left", "arrow-head-right", "arrow-head-up", "arrow-last", "arrow-left", "arrow-right", "arrow-up", "arrow-up-left", "arrow-up-right", "arrows", "attachment", "augmented-reality", "battery-empty", "battery-empty-co2", "battery-empty-fuel", "battery-full", "battery-half", "battery-one-quarter", "battery-three-quarters", "bell", "bookmark", "bookmark-filled", "brain", "broadcast", "cabriolet", "calculator", "calendar", "camera", "car", "car-battery", "card", "charging-active", "charging-network", "charging-state", "charging-station", "chart", "chat", "check", "city", "climate", "climate-control", "clock", "close", "closed-caption", "cloud", "co2-class", "co2-emission", "color-picker", "compare", "compass", "configurate", "connect-services", "copy", "country-road", "coupe", "cubic-capacity", "customer-support", "cut", "delete", "disable", "dislike", "dislike-filled", "document", "door", "download", "drag", "duration", "ear", "edit", "email", "error", "error-filled", "exclamation", "exclamation-filled", "external", "fast-backward", "fast-forward", "file-csv", "file-excel", "filter", "fingerprint", "flag", "flash", "fuel-station", "garage", "genuine-parts", "geo-localization", "gift", "globe", "grid", "grip", "group", "hand", "heart", "heart-filled", "highway", "highway-filled", "history", "home", "horn", "image", "increase", "information", "information-filled", "key", "laptop", "leaf", "leather", "light", "like", "like-filled", "limousine", "linked", "list", "locate", "lock", "lock-open", "logo-apple-carplay", "logo-apple-music", "logo-apple-podcast", "logo-baidu", "logo-delicious", "logo-digg", "logo-facebook", "logo-foursquare", "logo-gmail", "logo-google", "logo-hatena", "logo-instagram", "logo-kaixin", "logo-kakaotalk", "logo-kununu", "logo-linkedin", "logo-naver", "logo-pinterest", "logo-qq", "logo-qq-share", "logo-reddit", "logo-skyrock", "logo-snapchat", "logo-sohu", "logo-spotify", "logo-tecent", "logo-telegram", "logo-tiktok", "logo-tumblr", "logo-twitter", "logo-viber", "logo-vk", "logo-wechat", "logo-weibo", "logo-whatsapp", "logo-x", "logo-xing", "logo-yahoo", "logo-youku", "logo-youtube", "logout", "map", "menu-dots-horizontal", "menu-dots-vertical", "menu-lines", "microphone", "minus", "mobile", "moon", "new-chat", "news", "north-arrow", "oil-can", "online-search", "parking-brake", "parking-light", "paste", "pause", "phone", "pin", "pin-filled", "pivot", "play", "play-filled", "plug", "plus", "preheating", "price-tag", "printer", "purchase", "push-pin", "push-pin-off", "qr", "qr-off", "question", "question-filled", "racing-flag", "radar", "radio", "refresh", "replay", "reset", "return", "road", "roof-closed", "roof-open", "route", "rss", "save", "screen", "search", "seat", "send", "service-technician", "share", "shopping-bag", "shopping-bag-filled", "shopping-cart", "shopping-cart-filled", "shopping-cart-off", "sidebar", "sidelights", "skip-backward", "skip-forward", "snowflake", "sort", "stack", "star", "star-filled", "steering-wheel", "stop", "stopwatch", "subtract", "success", "success-filled", "sun", "suv", "switch", "tablet", "tachometer", "theme", "tire", "trigger-finger", "truck", "turismo", "unlinked", "upload", "user", "user-filled", "user-group", "user-manual", "video", "view", "view-off", "volume-off", "volume-up", "warning", "warning-filled", "weather", "weight", "wifi", "work", "wrench", "wrenches", "zoom-in", "zoom-out"];
export type IconName = typeof ICON_NAMES[number];
declare const FLAG_NAMES: readonly ["ad", "ae", "al", "am", "ar", "at", "au", "az", "ba", "bd", "be", "bg", "bh", "bn", "bo", "br", "by", "ca", "ch", "cl", "cn", "co", "cr", "cw", "cy", "cz", "de", "dk", "do", "dz", "ec", "ee", "eg", "es", "fi", "fr", "gb", "ge", "gh", "gi", "gr", "gt", "hk", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "is", "it", "jm", "jo", "jp", "ke", "kh", "kr", "kw", "kz", "lb", "li", "lk", "lt", "lu", "lv", "ma", "mc", "md", "me", "mk", "mn", "mo", "mq", "mt", "mu", "mx", "my", "ng", "nl", "no", "nz", "om", "pa", "pe", "pf", "ph", "pk", "pl", "pr", "pt", "py", "qa", "re", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "sv", "th", "tn", "tr", "tt", "tw", "ua", "us", "uy", "uz", "ve", "vn", "xx", "za"];
export type FlagName = typeof FLAG_NAMES[number];
declare const FORM_STATES: readonly ["none", "error", "success"];
export type FormState = (typeof FORM_STATES)[number];
declare const BUTTON_ARIA_ATTRIBUTES: readonly ["aria-label", "aria-description", "aria-expanded", "aria-pressed", "aria-haspopup"];
export type ButtonAriaAttribute = (typeof BUTTON_ARIA_ATTRIBUTES)[number];
declare const FORM_FIELD_ARIA_ATTRIBUTES: readonly ["aria-label", "aria-description"];
export type FormFieldAriaAttribute = (typeof FORM_FIELD_ARIA_ATTRIBUTES)[number];
declare const LINK_ARIA_ATTRIBUTES: readonly ["aria-label", "aria-description", "aria-current", "aria-haspopup"];
export type LinkAriaAttribute = (typeof LINK_ARIA_ATTRIBUTES)[number];
declare const breakpoints: readonly ["base", "xs", "s", "m", "l", "xl", "xxl"];
export type Breakpoint = (typeof breakpoints)[number];
export type BreakpointValues<T> = { [key in Breakpoint]?: T; } & {
  base: T;
};
export type BreakpointCustomizable<T> = T | BreakpointValues<T>;
export type DialogDismissReason = "dismiss-button" | "backdrop" | "escape";
export type DialogDismissEventDetail = {
  reason: DialogDismissReason;
};
declare const LINK_TARGETS: readonly ["_self", "_blank", "_parent", "_top"];
export type LinkTarget = (typeof LINK_TARGETS)[number] | string;
declare const TILE_ASPECT_RATIOS: readonly ["1/1", "4/3", "3/4", "16/9", "9/16", "auto"];
export type TileAspectRatio = (typeof TILE_ASPECT_RATIOS)[number];
declare const TILE_SIZES: readonly ["medium", "large", "inherit"];
export type TileSize = (typeof TILE_SIZES)[number];
declare const TILE_WEIGHTS: readonly ["regular", "semi-bold"];
export type TileWeight = (typeof TILE_WEIGHTS)[number];
declare const TILE_ALIGNS: readonly ["top", "bottom"];
export type TileAlign = (typeof TILE_ALIGNS)[number];
export type MultiSelectState = FormState;
export type MultiSelectAriaAttribute = FormFieldAriaAttribute;
export type MultiSelectDropdownDirection = SelectComponentsDropdownDirection;
export type MultiSelectChangeEventDetail = {
  name: string;
  value: string[] | number[];
};
export type MultiSelectToggleEventDetail = {
  open: boolean;
};
export type SelectState = FormState;
export type SelectAriaAttribute = FormFieldAriaAttribute;
export type SelectDropdownDirection = SelectComponentsDropdownDirection;
export type SelectChangeEventDetail = {
  name: string;
  value: string | number | null | undefined;
};
export type SelectToggleEventDetail = {
  open: boolean;
};
declare const SELECT_DROPDOWN_DIRECTIONS: readonly ["down", "up", "auto"];
export type SelectComponentsDropdownDirection = (typeof SELECT_DROPDOWN_DIRECTIONS)[number];
declare const ALIGN_LABELS: readonly ["start", "end"];
export type AlignLabel = (typeof ALIGN_LABELS)[number];
declare const BUTTON_TYPES: readonly ["button", "submit", "reset"];
export type ButtonType = (typeof BUTTON_TYPES)[number];
export type LinkButtonIconName = IconName | "none";
export type PorscheDesignSystem = {
  [key: `${number}.${number}.${number}${`-rc.${number}` | ""}`]: {
    prefixes: string[];
    isReady: () => Promise<void>;
    readyResolve: () => void;
  };
  cdn: {
    url: string;
    prefixes: string[];
  };
};
export type SelectedAriaAttributes<T extends keyof AriaAttributes> = Pick<AriaAttributes, T>;
export type SelectedAriaRole<T> = {
  role: Extract<AriaRole, T>;
};
declare const MARKET_LOCALES: readonly ["ar-BH", "ar-KW", "ar-QA", "ar-SA", "az-AZ", "bg-BG", "bs-BA", "cs-CZ", "cs-SK", "da-DK", "de-AT", "de-CH", "de-DE", "de-LI", "de-LU", "el-GR", "en", "en-AE", "en-AE-x-abu-dhabi", "en-AE-x-abudhabi", "en-AE-x-dubai", "en-AL", "en-AU", "en-BA", "en-BG", "en-BH", "en-BN", "en-CA", "en-CH", "en-CN", "en-CW", "en-CY", "en-CZ", "en-DK", "en-EE", "en-EG", "en-FI", "en-GB", "en-GE", "en-GH", "en-GI", "en-GR", "en-HK", "en-HR", "en-HT", "en-ID", "en-IE", "en-IL", "en-IN", "en-IS", "en-JM", "en-JO", "en-KH", "en-KR", "en-KW", "en-KZ", "en-LB", "en-LK", "en-LT", "en-LV", "en-ME", "en-MK", "en-MN", "en-MT", "en-MU", "en-MY", "en-NC", "en-NL", "en-NO", "en-NZ", "en-OM", "en-PF", "en-PH", "en-PL", "en-PR", "en-QA", "en-RO", "en-RS", "en-SA", "en-SE", "en-SG", "en-SI", "en-SK", "en-TH", "en-TR", "en-TT", "en-TW", "en-UA", "en-US", "en-VE", "en-VN", "en-XA", "en-YE", "en-ZA", "es-AD", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-ES", "es-GT", "es-HN", "es-MX", "es-PA", "es-PE", "es-PR", "es-PY", "es-SV", "es-TT", "es-UY", "es-VE", "et-EE", "fi-FI", "fr-BE", "fr-CA", "fr-CH", "fr-DZ", "fr-FR", "fr-GP", "fr-LI", "fr-LU", "fr-MA", "fr-MC", "fr-MQ", "fr-MU", "fr-NC", "fr-PF", "fr-RE", "fr-TN", "he-IL", "hr-HR", "hu-HU", "hy-AM", "is-IS", "it-CH", "it-IT", "ja-JP", "ka-GE", "ko-KR", "lt-LT", "lv-LV", "me-ME", "mk-MK", "mt-MT", "nb-NO", "nl-BE", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-MD", "ro-RO", "ru-AZ", "ru-BY", "ru-CY", "ru-EE", "ru-KZ", "ru-LT", "ru-LV", "ru-RU", "ru-UK", "ru-UZ", "sk-SK", "sl-SI", "sr-ME", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "zh-CN", "zh-HK", "zh-TW"];
export type MarketLocale = (typeof MARKET_LOCALES)[number];
export type ToPosixLocale<T extends string> = T extends `${infer Head}-${infer Tail}` ? `${Head}_${ToPosixLocale<Tail>}` : T;
export type AiTagLocale = MarketLocale | ToPosixLocale<MarketLocale>;
declare const AI_TAG_VARIANTS: readonly ["abbreviation", "generated", "modified"];
export type AiTagVariant = (typeof AI_TAG_VARIANTS)[number];
declare const BANNER_POSITIONS: readonly ["top", "bottom"];
export type BannerPosition = (typeof BANNER_POSITIONS)[number];
declare const BANNER_STATES: readonly ["info", "success", "warning", "error"];
export type BannerState = (typeof BANNER_STATES)[number];
declare const BANNER_HEADING_TAGS: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export type BannerHeadingTag = (typeof BANNER_HEADING_TAGS)[number];
export type ButtonIcon = LinkButtonIconName;
declare const BUTTON_VARIANTS: readonly ["primary", "secondary", "destructive"];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonPureType = ButtonType;
export type ButtonPureIcon = LinkButtonIconName;
export type ButtonPureAriaAttribute = ButtonAriaAttribute;
export type ButtonPureAlignLabel = AlignLabel;
declare const BUTTON_PURE_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "xx-small", "x-small", "small", "medium", "large", "x-large"];
export type ButtonPureSize = (typeof BUTTON_PURE_SIZES)[number];
declare const BUTTON_PURE_COLORS: readonly ["primary", "contrast-higher", "contrast-high", "contrast-medium", "inherit"];
export type ButtonPureColor = (typeof BUTTON_PURE_COLORS)[number];
export type ButtonTileAriaAttribute = ButtonAriaAttribute;
export type ButtonTileIcon = LinkButtonIconName;
export type ButtonTileType = ButtonType;
export type ButtonTileAspectRatio = TileAspectRatio;
export type ButtonTileSize = TileSize;
export type ButtonTileWeight = TileWeight;
export type ButtonTileAlign = TileAlign;
export type CanvasSidebarStartUpdateEventDetail = {
  open: boolean;
};
declare const CANVAS_BACKGROUNDS: readonly ["canvas", "surface"];
export type CanvasBackground = (typeof CANVAS_BACKGROUNDS)[number];
declare const CAROUSEL_WIDTHS: readonly ["basic", "extended", "wide", "full"];
export type CarouselWidth = (typeof CAROUSEL_WIDTHS)[number];
declare const CAROUSEL_SLIDES_PER_PAGE: (string | number)[];
export type CarouselSlidesPerPage = (typeof CAROUSEL_SLIDES_PER_PAGE)[number];
declare const CAROUSEL_ALIGN_HEADERS: readonly ["start", "center"];
export type CarouselAlignHeader = (typeof CAROUSEL_ALIGN_HEADERS)[number];
declare const CAROUSEL_HEADING_SIZES: readonly ["x-large", "xx-large"];
export type CarouselHeadingSize = (typeof CAROUSEL_HEADING_SIZES)[number];
declare const CAROUSEL_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type CarouselAriaAttribute = (typeof CAROUSEL_ARIA_ATTRIBUTES)[number];
export type CarouselInternationalization = Partial<Record<"prev" | "next" | "first" | "last" | "slideLabel" | "slide", string>>;
export type CarouselUpdateEventDetail = {
  activeIndex: number;
  previousIndex: number;
};
declare const CAROUSEL_ALIGN_CONTROLS: readonly ["start", "center", "auto"];
export type CarouselAlignControls = (typeof CAROUSEL_ALIGN_CONTROLS)[number];
export type CheckboxState = FormState;
export type CheckboxAriaAttribute = FormFieldAriaAttribute;
export type CheckboxBlurEventDetail = Event;
export type CheckboxChangeEventDetail = Event;
export type CrestTarget = LinkTarget;
export type CrestAriaAttribute = LinkAriaAttribute;
declare const DISPLAY_TAGS: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export type DisplayTag = (typeof DISPLAY_TAGS)[number];
declare const DISPLAY_SIZES: readonly ["small", "medium", "large", "inherit"];
export type DisplaySize = (typeof DISPLAY_SIZES)[number];
declare const DISPLAY_COLORS: readonly ["primary", "inherit"];
export type DisplayColor = (typeof DISPLAY_COLORS)[number];
declare const DISPLAY_ALIGNS: readonly ["start", "center", "end", "inherit"];
export type DisplayAlign = (typeof DISPLAY_ALIGNS)[number];
declare const DIVIDER_COLORS: readonly ["contrast-lower", "contrast-low", "contrast-medium", "contrast-high"];
export type DividerColor = (typeof DIVIDER_COLORS)[number];
declare const DIVIDER_DIRECTIONS: readonly ["vertical", "horizontal"];
export type DividerDirection = (typeof DIVIDER_DIRECTIONS)[number];
declare const DRILLDOWN_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type DrilldownAriaAttribute = (typeof DRILLDOWN_ARIA_ATTRIBUTES)[number];
export type DrilldownUpdateEventDetail = {
  activeIdentifier: string | undefined;
};
export type DrilldownDismissEventDetail = DialogDismissEventDetail;
export type DrilldownLinkTarget = LinkTarget;
export type DrilldownLinkAriaAttribute = LinkAriaAttribute;
declare const FIELDSET_LABEL_SIZES: readonly ["small", "medium"];
export type FieldsetLabelSize = (typeof FIELDSET_LABEL_SIZES)[number];
export type FieldsetState = FormState;
declare const FLAG_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type FlagAriaAttribute = (typeof FLAG_ARIA_ATTRIBUTES)[number];
declare const FLAG_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
export type FlagSize = (typeof FLAG_SIZES)[number];
declare const BACKDROPS: readonly ["blur", "shading"];
export type Backdrop = (typeof BACKDROPS)[number];
declare const FLYOUT_BACKGROUNDS: readonly ["canvas", "surface"];
export type FlyoutBackground = (typeof FLYOUT_BACKGROUNDS)[number];
declare const FLYOUT_POSITIONS: readonly ["start", "end"];
export type FlyoutPosition = (typeof FLYOUT_POSITIONS)[number];
declare const FLYOUT_FOOTER_BEHAVIOR: readonly ["sticky", "fixed"];
export type FlyoutFooterBehavior = (typeof FLYOUT_FOOTER_BEHAVIOR)[number];
declare const FLYOUT_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type FlyoutAriaAttribute = (typeof FLYOUT_ARIA_ATTRIBUTES)[number];
export type FlyoutMotionVisibleEndEventDetail = TransitionEvent;
export type FlyoutMotionHiddenEndEventDetail = TransitionEvent;
export type FlyoutDismissEventDetail = DialogDismissEventDetail;
export type FlyoutBackdrop = Backdrop;
declare const HEADING_TAGS: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export type HeadingTag = (typeof HEADING_TAGS)[number];
declare const HEADING_COLORS: readonly ["primary", "contrast-higher", "contrast-high", "contrast-medium", "inherit"];
export type HeadingColor = (typeof HEADING_COLORS)[number];
declare const HEADING_WEIGHTS: readonly ["normal", "semibold", "bold", "regular", "semi-bold"];
export type HeadingWeight = (typeof HEADING_WEIGHTS)[number];
declare const HEADING_ALIGNS: readonly ["start", "center", "end", "inherit"];
export type HeadingAlign = (typeof HEADING_ALIGNS)[number];
declare const HEADING_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "small", "medium", "large", "x-large", "xx-large"];
export type HeadingSize = (typeof HEADING_SIZES)[number];
declare const HEADING_HYPHENS: readonly ["none", "manual", "auto", "inherit"];
export type HeadingHyphens = (typeof HEADING_HYPHENS)[number];
declare const ICON_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type IconAriaAttribute = (typeof ICON_ARIA_ATTRIBUTES)[number];
declare const ICON_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
export type IconSize = (typeof ICON_SIZES)[number];
declare const ICON_COLORS: readonly ["primary", "contrast-higher", "contrast-high", "contrast-medium", "contrast-low", "contrast-lower", "success", "warning", "error", "info", "inherit"];
export type IconColor = (typeof ICON_COLORS)[number];
declare const INLINE_NOTIFICATION_STATES: readonly ["info", "success", "warning", "error"];
export type InlineNotificationState = (typeof INLINE_NOTIFICATION_STATES)[number];
export type InlineNotificationActionIcon = IconName;
declare const INLINE_NOTIFICATION_HEADING_TAGS: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
export type InlineNotificationHeadingTag = (typeof INLINE_NOTIFICATION_HEADING_TAGS)[number];
export type InputDateState = FormState;
export type InputDateAriaAttribute = FormFieldAriaAttribute;
export type InputDateChangeEventDetail = Event;
export type InputDateBlurEventDetail = Event;
export type InputDateInputEventDetail = InputEvent;
export type InputEmailState = FormState;
export type InputEmailAriaAttribute = FormFieldAriaAttribute;
export type InputEmailChangeEventDetail = Event;
export type InputEmailBlurEventDetail = Event;
export type InputEmailInputEventDetail = InputEvent;
export type InputMonthState = FormState;
export type InputMonthAriaAttribute = FormFieldAriaAttribute;
export type InputMonthChangeEventDetail = Event;
export type InputMonthBlurEventDetail = Event;
export type InputMonthInputEventDetail = InputEvent;
export type InputNumberState = FormState;
export type InputNumberAriaAttribute = FormFieldAriaAttribute;
export type InputNumberChangeEventDetail = Event;
export type InputNumberBlurEventDetail = Event;
export type InputNumberInputEventDetail = InputEvent;
export type InputPasswordState = FormState;
export type InputPasswordAriaAttribute = FormFieldAriaAttribute;
export type InputPasswordChangeEventDetail = Event;
export type InputPasswordBlurEventDetail = Event;
export type InputPasswordInputEventDetail = InputEvent;
export type InputSearchState = FormState;
export type InputSearchChangeEventDetail = Event;
export type InputSearchBlurEventDetail = Event;
export type InputSearchInputEventDetail = InputEvent;
declare const INPUT_SEARCH_ARIA_ATTRIBUTES: readonly ["role", "aria-autocomplete", "aria-controls", "aria-expanded", "aria-haspopup", "aria-label", "aria-description"];
export type InputSearchAriaAttribute = (typeof INPUT_SEARCH_ARIA_ATTRIBUTES)[number];
export type InputTelState = FormState;
export type InputTelAriaAttribute = FormFieldAriaAttribute;
export type InputTelChangeEventDetail = Event;
export type InputTelBlurEventDetail = Event;
export type InputTelInputEventDetail = InputEvent;
export type InputTextState = FormState;
export type InputTextAriaAttribute = FormFieldAriaAttribute;
export type InputTextChangeEventDetail = Event;
export type InputTextBlurEventDetail = Event;
export type InputTextInputEventDetail = InputEvent;
export type InputTimeState = FormState;
export type InputTimeAriaAttribute = FormFieldAriaAttribute;
export type InputTimeChangeEventDetail = Event;
export type InputTimeBlurEventDetail = Event;
export type InputTimeInputEventDetail = InputEvent;
export type InputUrlState = FormState;
export type InputUrlAriaAttribute = FormFieldAriaAttribute;
export type InputUrlChangeEventDetail = Event;
export type InputUrlBlurEventDetail = Event;
export type InputUrlInputEventDetail = InputEvent;
export type InputWeekState = FormState;
export type InputWeekAriaAttribute = FormFieldAriaAttribute;
export type InputWeekChangeEventDetail = Event;
export type InputWeekBlurEventDetail = Event;
export type InputWeekInputEventDetail = InputEvent;
export type LinkIcon = LinkButtonIconName;
declare const LINK_VARIANTS: readonly ["primary", "secondary"];
export type LinkVariant = (typeof LINK_VARIANTS)[number];
export type LinkPureIcon = LinkButtonIconName;
export type LinkPureAriaAttribute = LinkAriaAttribute;
export type LinkPureAlignLabel = AlignLabel;
export type LinkPureTarget = LinkTarget;
declare const LINK_PURE_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "xx-small", "x-small", "small", "medium", "large", "x-large"];
export type LinkPureSize = (typeof LINK_PURE_SIZES)[number];
declare const LINK_PURE_COLORS: readonly ["primary", "contrast-higher", "contrast-high", "contrast-medium", "inherit"];
export type LinkPureColor = (typeof LINK_PURE_COLORS)[number];
export type LinkTileTarget = LinkTarget;
export type LinkTileAriaAttribute = LinkAriaAttribute;
export type LinkTileAspectRatio = TileAspectRatio;
export type LinkTileSize = TileSize;
export type LinkTileAlign = TileAlign;
export type LinkTileWeight = (typeof TILE_WEIGHTS)[number];
export type LinkTileProductTarget = LinkTarget;
export type LinkTileProductLikeEventDetail = {
  liked: boolean;
};
declare const TILE_PRODUCT_ASPECT_RATIOS: readonly ["3/4", "9/16"];
export type LinkTileProductAspectRatio = (typeof TILE_PRODUCT_ASPECT_RATIOS)[number];
declare const MODAL_ARIA_ATTRIBUTES: readonly ["aria-label", "role"];
export type ModalAriaAttribute = (typeof MODAL_ARIA_ATTRIBUTES)[number];
declare const MODAL_BACKGROUNDS: readonly ["canvas", "surface"];
export type ModalBackground = (typeof MODAL_BACKGROUNDS)[number];
export type ModalBackdrop = Backdrop;
export type ModalMotionVisibleEndEventDetail = TransitionEvent;
export type ModalMotionHiddenEndEventDetail = TransitionEvent;
export type ModalDismissEventDetail = DialogDismissEventDetail;
declare const MODEL_SIGNATURES_MANIFEST: {
  "718": {
    src: string;
    width: number;
    height: number;
  };
  "911": {
    src: string;
    width: number;
    height: number;
  };
  boxster: {
    src: string;
    width: number;
    height: number;
  };
  cayenne: {
    src: string;
    width: number;
    height: number;
  };
  cayman: {
    src: string;
    width: number;
    height: number;
  };
  "gt3-rs": {
    src: string;
    width: number;
    height: number;
  };
  gt3: {
    src: string;
    width: number;
    height: number;
  };
  gts: {
    src: string;
    width: number;
    height: number;
  };
  macan: {
    src: string;
    width: number;
    height: number;
  };
  panamera: {
    src: string;
    width: number;
    height: number;
  };
  taycan: {
    src: string;
    width: number;
    height: number;
  };
  "turbo-s": {
    src: string;
    width: number;
    height: number;
  };
  turbo: {
    src: string;
    width: number;
    height: number;
  };
};
declare const MODEL_SIGNATURE_FETCH_PRIORITY: readonly ["low", "high", "auto"];
export type ModelSignatureFetchPriority = (typeof MODEL_SIGNATURE_FETCH_PRIORITY)[number];
declare const MODEL_SIGNATURE_SIZES: readonly ["small", "inherit"];
export type ModelSignatureSize = (typeof MODEL_SIGNATURE_SIZES)[number];
export type ModelSignatureModel = keyof typeof MODEL_SIGNATURES_MANIFEST;
declare const MODEL_SIGNATURE_COLORS: readonly ["primary", "contrast-low", "contrast-medium", "contrast-high", "inherit"];
export type ModelSignatureColor = (typeof MODEL_SIGNATURE_COLORS)[number];
export type PaginationUpdateEventDetail = {
  page: number;
  previousPage: number;
};
export type PaginationInternationalization = Partial<Record<"root" | "prev" | "next" | "page", string>>;
declare const PIN_CODE_TYPES: readonly ["number", "password"];
export type PinCodeType = (typeof PIN_CODE_TYPES)[number];
declare const PIN_CODE_LENGTHS: readonly [1, 2, 3, 4, 5, 6];
export type PinCodeLength = (typeof PIN_CODE_LENGTHS)[number];
export type PinCodeChangeEventDetail = {
  value: string;
  isComplete: boolean;
};
export type PinCodeState = FormState;
declare const POPOVER_DIRECTIONS: readonly ["top", "right", "bottom", "left"];
export type PopoverDirection = (typeof POPOVER_DIRECTIONS)[number];
declare const POPOVER_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type PopoverAriaAttribute = (typeof POPOVER_ARIA_ATTRIBUTES)[number];
export type PopoverDismissEventDetail = {
  reason: "outside-click" | "focus-out" | "escape";
};
declare const GROUP_DIRECTIONS: readonly ["row", "column"];
export type GroupDirection = (typeof GROUP_DIRECTIONS)[number];
export type RadioGroupState = FormState;
export type RadioGroupDirection = GroupDirection;
export type RadioGroupChangeEventDetail = Event;
declare const SCROLLER_ALIGN_SCROLL_INDICATORS: readonly ["top", "center"];
/** @deprecated */
export type ScrollerAlignScrollIndicator = (typeof SCROLLER_ALIGN_SCROLL_INDICATORS)[number];
declare const SCROLLER_ARIA_ATTRIBUTES: readonly ["role", "aria-label", "aria-description"];
export type ScrollerAriaAttribute = (typeof SCROLLER_ARIA_ATTRIBUTES)[number];
/** @deprecated */
export type ScrollerScrollToPosition = {
  scrollPosition: number;
  isSmooth?: boolean;
} | string;
export type SegmentedControlChangeEventDetail = {
  value: string | number;
};
declare const SEGMENTED_CONTROL_COLUMNS: (string | number)[];
export type SegmentedControlColumns = (typeof SEGMENTED_CONTROL_COLUMNS)[number];
export type SegmentedControlState = FormState;
export type SegmentedControlItemIcon = LinkButtonIconName;
declare const SEGMENTED_CONTROL_ITEM_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type SegmentedControlItemAriaAttribute = (typeof SEGMENTED_CONTROL_ITEM_ARIA_ATTRIBUTES)[number];
declare const SHEET_ARIA_ATTRIBUTES: readonly ["aria-label", "role"];
export type SheetAriaAttribute = (typeof SHEET_ARIA_ATTRIBUTES)[number];
declare const SHEET_BACKGROUNDS: readonly ["canvas", "surface"];
export type SheetBackground = (typeof SHEET_BACKGROUNDS)[number];
export type SheetMotionVisibleEndEventDetail = TransitionEvent;
export type SheetMotionHiddenEndEventDetail = TransitionEvent;
export type SheetDismissEventDetail = DialogDismissEventDetail;
declare const SPINNER_COLORS: readonly ["primary", "inherit"];
export type SpinnerColor = (typeof SPINNER_COLORS)[number];
declare const SPINNER_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "small", "medium", "large"];
export type SpinnerSize = (typeof SPINNER_SIZES)[number];
declare const SPINNER_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type SpinnerAriaAttribute = (typeof SPINNER_ARIA_ATTRIBUTES)[number];
declare const STEPPER_HORIZONTAL_SIZES: readonly ["small", "medium"];
export type StepperHorizontalSize = (typeof STEPPER_HORIZONTAL_SIZES)[number];
export type StepperHorizontalUpdateEventDetail = {
  activeStepIndex: number;
};
declare const STEPPER_ITEM_STATES: readonly ["current", "complete", "warning"];
export type StepperHorizontalItemState = (typeof STEPPER_ITEM_STATES)[number];
export type SwitchAlignLabel = AlignLabel;
export type SwitchAriaAttribute = FormFieldAriaAttribute;
export type SwitchUpdateEventDetail = {
  checked: boolean;
};
export type Direction = "asc" | "desc";
declare const TABLE_LAYOUTS: readonly ["auto", "fixed"];
export type TableLayout = (typeof TABLE_LAYOUTS)[number];
export type TableHeadCellSort = {
  id: string;
  active?: boolean;
  direction?: Direction;
};
export type TableUpdateEventDetail = TableHeadCellSort;
declare const TABS_ARIA_ATTRIBUTES: readonly ["aria-label", "aria-description"];
export type TabsAriaAttribute = (typeof TABS_ARIA_ATTRIBUTES)[number];
declare const TABS_SIZES: readonly ["small", "medium"];
export type TabsSize = (typeof TABS_SIZES)[number];
declare const TABS_BACKGROUNDS: readonly ["canvas", "surface", "frosted", "none"];
export type TabsBackground = (typeof TABS_BACKGROUNDS)[number];
declare const TABS_WEIGHTS: readonly ["regular", "semi-bold"];
/** @deprecated */
export type TabsWeight = (typeof TABS_WEIGHTS)[number];
export type TabsUpdateEventDetail = {
  activeTabIndex: number;
};
declare const TABS_BAR_ARIA_ATTRIBUTES: readonly ["aria-label", "aria-description"];
export type TabsBarAriaAttribute = (typeof TABS_BAR_ARIA_ATTRIBUTES)[number];
declare const TABS_BAR_BACKGROUNDS: readonly ["canvas", "surface", "frosted", "none"];
export type TabsBarBackground = (typeof TABS_BAR_BACKGROUNDS)[number];
declare const TABS_BAR_SIZES: readonly ["small", "medium"];
export type TabsBarSize = (typeof TABS_BAR_SIZES)[number];
export type TabsBarUpdateEventDetail = {
  activeTabIndex: number;
};
declare const TABS_BAR_WEIGHTS: readonly ["regular", "semi-bold"];
/** @deprecated */
export type TabsBarWeight = (typeof TABS_BAR_WEIGHTS)[number];
export type TagIcon = IconName | "none";
declare const TAG_VARIANTS: readonly ["primary", "secondary", "info", "info-frosted", "warning", "warning-frosted", "success", "success-frosted", "error", "error-frosted"];
export type TagVariant = (typeof TAG_VARIANTS)[number];
declare const TAG_DISMISSIBLE_ARIA_ATTRIBUTES: readonly ["aria-label"];
export type TagDismissibleAriaAttribute = (typeof TAG_DISMISSIBLE_ARIA_ATTRIBUTES)[number];
declare const TEXT_TAGS: readonly ["p", "span", "div", "address", "blockquote", "figcaption", "cite", "time", "legend"];
export type TextTag = (typeof TEXT_TAGS)[number];
declare const TEXT_COLORS: readonly ["primary", "contrast-higher", "contrast-high", "contrast-medium", "success", "warning", "error", "info", "inherit"];
export type TextColor = (typeof TEXT_COLORS)[number];
declare const TEXT_WEIGHTS: readonly ["normal", "semibold", "bold", "regular", "semi-bold"];
export type TextWeight = (typeof TEXT_WEIGHTS)[number];
declare const TEXT_ALIGNS: readonly ["start", "center", "end", "inherit"];
export type TextAlign = (typeof TEXT_ALIGNS)[number];
declare const TEXT_SIZES: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "inherit", "xx-small", "x-small", "small", "medium", "large", "x-large"];
export type TextSize = (typeof TEXT_SIZES)[number];
declare const TEXT_HYPHENS: readonly ["none", "manual", "auto", "inherit"];
export type TextHyphens = (typeof TEXT_HYPHENS)[number];
declare const TEXT_LIST_TYPES: readonly ["unordered", "numbered", "alphabetically"];
export type TextListType = (typeof TEXT_LIST_TYPES)[number];
export type TextareaState = FormState;
export type TextareaAriaAttribute = FormFieldAriaAttribute;
declare const TEXTAREA_WRAPS: readonly ["hard", "soft", "off"];
export type TextareaWrap = (typeof TEXTAREA_WRAPS)[number];
declare const TEXTAREA_RESIZE: readonly ["none", "both", "horizontal", "vertical", "block", "inline"];
export type TextareaResize = (typeof TEXTAREA_RESIZE)[number];
export type TextareaChangeEventDetail = Event;
export type TextareaBlurEventDetail = Event;
export type TextareaInputEventDetail = InputEvent;
declare const TOAST_STATES: readonly ["info", "success", "warning", "error"];
export type ToastState = (typeof TOAST_STATES)[number];
export type ToastMessage = {
  text: string;
  state?: ToastState;
};
declare const WORDMARK_SIZES: readonly ["small", "inherit"];
export type WordmarkSize = (typeof WORDMARK_SIZES)[number];
export type WordmarkTarget = LinkTarget;
export type WordmarkAriaAttribute = LinkAriaAttribute;
declare namespace checkbox_wrapper_d_exports {
  export { PCheckbox, PCheckboxProps };
}
export type PCheckboxProps = {
  /**
   * Sets additional ARIA attributes on the native checkbox to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<CheckboxAriaAttribute>;
  /**
   * Reflects the checkbox's current checked state and allows setting the initial checked value on load.
   * @default false
   */
  checked?: boolean;
  /**
   * Reduces the checkbox size and spacing for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Disables the checkbox, preventing all interaction. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the checkbox with a form element by its ID when not directly nested inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Puts the checkbox into an indeterminate state, indicating that a group of child items is only partially selected.
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Sets the visible label text displayed next to the checkbox.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the checkbox and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the validation feedback message displayed below the checkbox when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the name submitted with the form data to identify this checkbox's value on the server.
   * @default ''
   */
  name?: string;
  /**
   * Marks the checkbox as required — form submission is blocked unless the checkbox is checked.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: CheckboxState;
  /**
   * Sets the value submitted with the form data when the checkbox is checked. Unchecked checkboxes are excluded from form submissions.
   * @default 'on'
   */
  value?: string;
};
export declare class PCheckbox extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<CheckboxAriaAttribute>;
  checked?: boolean;
  compact?: boolean;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  indeterminate?: boolean;
  label?: string;
  loading?: boolean;
  message?: string;
  name?: string;
  required?: boolean;
  state?: CheckboxState;
  value?: string;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PCheckbox, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PCheckbox, "p-checkbox,[p-checkbox]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "checked": {
      "alias": "checked";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "indeterminate": {
      "alias": "indeterminate";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
  }, never, ["*"], false, never>;
}
declare namespace input_date_wrapper_d_exports {
  export { PInputDate, PInputDateProps };
}
export type PInputDateProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputDateAriaAttribute>;
  /**
   * Provides the browser with a date autofill hint (e.g. `autocomplete='bday'` for a birthday field).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing date selection. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the latest selectable date in YYYY-MM-DD format. Dates after this are disabled in the picker.
   */
  max?: string;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the earliest selectable date in YYYY-MM-DD format. Dates before this are disabled in the picker.
   */
  min?: string;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Makes the field read-only — the date is displayed but cannot be changed. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while no date is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputDateState;
  /**
   * Sets the stepping interval in days. The selected date must align with the `min` date by a multiple of this value.
   * @default 1
   */
  step?: number;
  /**
   * Sets the current date value in YYYY-MM-DD format (e.g. `2025-07-02`).
   * @default ''
   */
  value?: string | null;
};
export declare class PInputDate extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputDateAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  max?: string;
  message?: string;
  min?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputDateState;
  step?: number;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputDate, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputDate, "p-input-date,[p-input-date]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_email_wrapper_d_exports {
  export { PInputEmail, PInputEmailProps };
}
export type PInputEmailProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputEmailAriaAttribute>;
  /**
   * Provides the browser with a data type hint to enable relevant autofill suggestions (e.g. `autocomplete='email'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Shows an email icon at the start of the field as a visual indicator.
   * @default false
   */
  indicator?: boolean;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Allows entry of multiple email addresses separated by commas. The browser validates each address individually.
   * @default false
   */
  multiple?: boolean;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets a regular expression the entered value must match to be valid. Overrides the browser's default email validation.
   */
  pattern?: string;
  /**
   * Sets placeholder text shown inside the field when it is empty, to hint at the expected format.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputEmailState;
  /**
   * Sets the current email value. When `multiple` is enabled, accepts a comma-separated list of email addresses.
   * @default ''
   */
  value?: string | null;
};
export declare class PInputEmail extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputEmailAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  indicator?: boolean;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  multiple?: boolean;
  name: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputEmailState;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputEmail, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputEmail, "p-input-email,[p-input-email]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "indicator": {
      "alias": "indicator";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "multiple": {
      "alias": "multiple";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "pattern": {
      "alias": "pattern";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_month_wrapper_d_exports {
  export { PInputMonth, PInputMonthProps };
}
export type PInputMonthProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputMonthAriaAttribute>;
  /**
   * Provides the browser with a month/year autofill hint.
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing month selection. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the latest selectable month in YYYY-MM format. Months after this are disabled in the picker.
   */
  max?: string;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the earliest selectable month in YYYY-MM format. Months before this are disabled in the picker.
   */
  min?: string;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be changed. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while no month is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputMonthState;
  /**
   * Sets the stepping interval in months (e.g. `1` for monthly, `12` for annual).
   * @default 1
   */
  step?: number;
  /**
   * Sets the current month value in YYYY-MM format (e.g. `2025-07`).
   * @default ''
   */
  value?: string | null;
};
export declare class PInputMonth extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputMonthAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  max?: string;
  message?: string;
  min?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputMonthState;
  step?: number;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputMonth, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputMonth, "p-input-month,[p-input-month]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_number_wrapper_d_exports {
  export { PInputNumber, PInputNumberProps };
}
export type PInputNumberProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputNumberAriaAttribute>;
  /**
   * Provides the browser with a data type hint to enable relevant autofill suggestions (e.g. `autocomplete='postal-code'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Shows increment/decrement spin buttons inside the field to adjust the numeric value by clicking.
   * @default false
   */
  controls?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum allowed numeric value. Values above this are invalid.
   */
  max?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum allowed numeric value. Values below this are invalid.
   */
  min?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets placeholder text shown inside the field when it is empty, to hint at the expected format.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputNumberState;
  /**
   * Sets the stepping granularity — the value must be a multiple of this number. Also controls step button increment size.
   * @default 1
   */
  step?: number;
  /**
   * Sets the current numeric value. Strings and numbers are accepted for programmatic assignment, but user input updates the value as a string to mirror native input behavior.
   * @default ''
   */
  value?: string | number | null;
};
export declare class PInputNumber extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputNumberAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  controls?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  max?: number;
  message?: string;
  min?: number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputNumberState;
  step?: number;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputNumber, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputNumber, "p-input-number,[p-input-number]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "controls": {
      "alias": "controls";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_password_wrapper_d_exports {
  export { PInputPassword, PInputPasswordProps };
}
export type PInputPasswordProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputPasswordAriaAttribute>;
  /**
   * Provides the browser with a password autofill hint (e.g. `autocomplete='current-password'` or `autocomplete='new-password'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets placeholder text shown inside the field when it is empty.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputPasswordState;
  /**
   * Shows a toggle button that switches the password between masked and plain text visibility.
   * @default false
   */
  toggle?: boolean;
  /**
   * Sets the current password value of the field.
   * @default ''
   */
  value?: string | null;
};
export declare class PInputPassword extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputPasswordAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputPasswordState;
  toggle?: boolean;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputPassword, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputPassword, "p-input-password,[p-input-password]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "toggle": {
      "alias": "toggle";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_search_wrapper_d_exports {
  export { PInputSearch, PInputSearchProps };
}
export type PInputSearchProps = {
  /**
   * Sets additional ARIA attributes on the search input, useful for combobox patterns (e.g. `role="combobox"`, `aria-expanded`) and extra labelling (`aria-label`, `aria-description`).
   */
  aria?: SelectedAriaAttributes<InputSearchAriaAttribute>;
  /**
   * Provides the browser with a data type hint to enable relevant autofill suggestions.
   */
  autoComplete?: string;
  /**
   * Shows a clear button (×) inside the field that resets the value to empty when clicked.
   * @default false
   */
  clear?: boolean;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Shows a magnifying glass icon inside the field as a visual affordance for search input.
   * @default false
   */
  indicator?: boolean;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets placeholder text shown inside the field when it is empty.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputSearchState;
  /**
   * Sets the current search query value of the field.
   * @default ''
   */
  value?: string | null;
};
export declare class PInputSearch extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputSearchAriaAttribute>;
  autoComplete?: string;
  clear?: boolean;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  indicator?: boolean;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputSearchState;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputSearch, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputSearch, "p-input-search,[p-input-search]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "clear": {
      "alias": "clear";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "indicator": {
      "alias": "indicator";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_tel_wrapper_d_exports {
  export { PInputTel, PInputTelProps };
}
export type PInputTelProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputTelAriaAttribute>;
  /**
   * Provides the browser with a phone number autofill hint (e.g. `autocomplete='tel'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Shows a phone icon at the start of the field as a visual indicator for telephone input.
   * @default false
   */
  indicator?: boolean;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets a regular expression the entered value must match to be valid. Overrides the browser's default telephone validation.
   */
  pattern?: string;
  /**
   * Sets placeholder text shown inside the field when it is empty, such as an example phone number format.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputTelState;
  /**
   * Sets the current telephone number value of the field.
   * @default ''
   */
  value?: string | null;
};
export declare class PInputTel extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputTelAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  indicator?: boolean;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputTelState;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputTel, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputTel, "p-input-tel,[p-input-tel]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "indicator": {
      "alias": "indicator";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "pattern": {
      "alias": "pattern";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_text_wrapper_d_exports {
  export { PInputText, PInputTextProps };
}
export type PInputTextProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputTextAriaAttribute>;
  /**
   * Provides the browser with a data type hint to enable relevant autofill suggestions (e.g. `autocomplete='name'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Shows a live character counter below the field indicating how many characters have been entered relative to `maxLength`.
   * @default false
   */
  counter?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets placeholder text shown inside the field when it is empty, to hint at the expected format.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited by the user. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Controls whether the browser's built-in spell-checking is enabled for this field.
   */
  spellCheck?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputTextState;
  /**
   * Sets the current text value. Numbers are accepted for programmatic assignment, but user input updates the value as a string.
   * @default ''
   */
  value?: string | number | null;
};
export declare class PInputText extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputTextAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  counter?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  spellCheck?: boolean;
  state?: InputTextState;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputText, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputText, "p-input-text,[p-input-text]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "counter": {
      "alias": "counter";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "spellCheck": {
      "alias": "spellCheck";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_time_wrapper_d_exports {
  export { PInputTime, PInputTimeProps };
}
export type PInputTimeProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputTimeAriaAttribute>;
  /**
   * Provides the browser with a time autofill hint.
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing time selection. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the latest selectable time in `hh:mm` or `hh:mm:ss` format. Times after this are disabled in the picker.
   */
  max?: string;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the earliest selectable time in `hh:mm` or `hh:mm:ss` format. Times before this are disabled in the picker.
   */
  min?: string;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be changed. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while no time is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputTimeState;
  /**
   * Sets the stepping interval in seconds. Use `60` for minute-level selection, `1` to also expose seconds.
   * @default 60
   */
  step?: number;
  /**
   * Sets the current time value in `hh:mm` or `hh:mm:ss` format (e.g. `14:00`).
   * @default ''
   */
  value?: string | null;
};
export declare class PInputTime extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputTimeAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  max?: string;
  message?: string;
  min?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputTimeState;
  step?: number;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputTime, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputTime, "p-input-time,[p-input-time]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_url_wrapper_d_exports {
  export { PInputUrl, PInputUrlProps };
}
export type PInputUrlProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputUrlAriaAttribute>;
  /**
   * Provides the browser with a URL autofill hint (e.g. `autocomplete='url'`).
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing all input. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Shows a URL/link icon at the start of the field as a visual indicator.
   * @default false
   */
  indicator?: boolean;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the maximum number of characters the user can enter.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the field to be considered valid.
   */
  minLength?: number;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets a regular expression the entered value must match to be valid. Overrides the browser's default URL validation.
   */
  pattern?: string;
  /**
   * Sets placeholder text shown inside the field when it is empty, such as an example URL.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be edited. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputUrlState;
  /**
   * Sets the current URL value. Must be an absolute URL (e.g. `https://porsche.com`) to pass browser validation.
   * @default ''
   */
  value?: string | null;
};
export declare class PInputUrl extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputUrlAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  indicator?: boolean;
  label?: string;
  loading?: boolean;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputUrlState;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputUrl, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputUrl, "p-input-url,[p-input-url]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "indicator": {
      "alias": "indicator";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "pattern": {
      "alias": "pattern";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace input_week_wrapper_d_exports {
  export { PInputWeek, PInputWeekProps };
}
export type PInputWeekProps = {
  /**
   * Sets additional ARIA attributes on the native input to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<InputWeekAriaAttribute>;
  /**
   * Provides the browser with a week/year autofill hint.
   */
  autoComplete?: string;
  /**
   * Reduces the input height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the field, preventing week selection. The value is not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the field with a form element by its ID when the field is not nested directly inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the input field.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables the field and displays a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the latest selectable week in YYYY-Www format. Weeks after this are disabled in the picker.
   */
  max?: string;
  /**
   * Sets the validation feedback message displayed below the field when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the earliest selectable week in YYYY-Www format. Weeks before this are disabled in the picker.
   */
  min?: string;
  /**
   * Sets the name submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Makes the field read-only — the value is displayed but cannot be changed. The value is still submitted with the form.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required — form submission is blocked while no week is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: InputWeekState;
  /**
   * Sets the stepping interval in weeks.
   * @default 1
   */
  step?: number;
  /**
   * Sets the current ISO week value in YYYY-Www format (e.g. `2025-W27`).
   * @default ''
   */
  value?: string | null;
};
export declare class PInputWeek extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<InputWeekAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  max?: string;
  message?: string;
  min?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  state?: InputWeekState;
  step?: number;
  value?: string | null;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInputWeek, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInputWeek, "p-input-week,[p-input-week]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace multi_select_wrapper_d_exports {
  export { PMultiSelect, PMultiSelectProps };
}
export type PMultiSelectProps = {
  /**
   * Sets additional ARIA attributes on the combobox to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<MultiSelectAriaAttribute>;
  /**
   * Reduces the control height and padding for a more compact layout.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to provide additional context.
   * @default ''
   */
  description?: string;
  /**
   * Disables the multi-select, preventing all interaction. Selected values are not submitted with the form.
   * @default false
   */
  disabled?: boolean;
  /**
   * Controls whether the dropdown opens upward (`up`) or downward (`down`), or decides automatically (`auto`).
   * @default 'auto'
   */
  dropdownDirection?: MultiSelectDropdownDirection;
  /**
   * Associates the multi-select with a form element by its ID when not directly nested inside it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the multi-select control.
   * @default ''
   */
  label?: string;
  /**
   * Sets the validation feedback message displayed below the control when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the name submitted with the form data to identify the selected values on the server.
   */
  name: string;
  /**
   * Marks the multi-select as required — form submission is blocked unless at least one option is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state, controlling the visual appearance and style of the feedback message (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: MultiSelectState;
  /**
   * The selected values. Matches options strictly by type and value, meaning a string value only matches options whose value is the same string, a number value only matches options whose value is the same number. Pass null or [] to clear the selection.  Please note that FormData always serializes values as strings, so when participating in a native (uncontrolled) form a number[] value is restored as string[] via formStateRestoreCallback and will no longer strictly match number-typed options. This limitation only applies to native form state restoration; in controlled forms (where the consumer manages value directly via the change event), number[] types are preserved end-to-end.
   * @default []
   */
  value?: string[] | number[] | null;
};
export declare class PMultiSelect extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<MultiSelectAriaAttribute>;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  dropdownDirection?: MultiSelectDropdownDirection;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  message?: string;
  name: string;
  required?: boolean;
  state?: MultiSelectState;
  value?: string[] | number[] | null;
  blur: EventEmitter<CustomEvent<void>>;
  change: EventEmitter<CustomEvent<MultiSelectChangeEventDetail>>;
  toggle: EventEmitter<CustomEvent<MultiSelectToggleEventDetail>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PMultiSelect, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PMultiSelect, "p-multi-select,[p-multi-select]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "dropdownDirection": {
      "alias": "dropdownDirection";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "toggle": "toggle";
  }, never, ["*"], false, never>;
}
declare namespace pin_code_wrapper_d_exports {
  export { PPinCode, PPinCodeProps };
}
export type PPinCodeProps = {
  /**
   * Reduces the pin code field height and spacing for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to give users additional guidance about the pin code.
   * @default ''
   */
  description?: string;
  /**
   * Prevents user interaction with all pin code fields and blocks events while the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the pin code with a form element by its ID when it is not a direct descendant of that form.
   */
  form?: string;
  /**
   * Hides the visible label and description while keeping them accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the pin code fields to identify their purpose.
   * @default ''
   */
  label?: string;
  /**
   * Sets the number of individual input fields rendered, determining how many characters the pin code consists of.
   * @default 4
   */
  length?: PinCodeLength;
  /**
   * Disables the pin code fields and shows a loading spinner to indicate an ongoing background operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the validation feedback message displayed below the pin code when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the name of the control submitted with the form data to identify the pin code value on the server.
   */
  name?: string;
  /**
   * Marks the pin code as required so the form cannot be submitted until all fields are filled.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state of the pin code, which controls its visual appearance and feedback message style (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: PinCodeState;
  /**
   * Controls whether the individual input fields mask their content as password dots (`password`) or show digits (`number`).
   * @default 'number'
   */
  type?: PinCodeType;
  /**
   * Sets the current concatenated value. Numbers are accepted for programmatic assignment, but user input updates the value as a string.
   * @default ''
   */
  value?: string | number | null;
};
export declare class PPinCode extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  length?: PinCodeLength;
  loading?: boolean;
  message?: string;
  name?: string;
  required?: boolean;
  state?: PinCodeState;
  type?: PinCodeType;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<void>>;
  change: EventEmitter<CustomEvent<PinCodeChangeEventDetail>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PPinCode, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PPinCode, "p-pin-code,[p-pin-code]", never, {
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "length": {
      "alias": "length";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
  }, never, ["*"], false, never>;
}
declare namespace radio_group_wrapper_d_exports {
  export { PRadioGroup, PRadioGroupProps };
}
export type PRadioGroupProps = {
  /**
   * Reduces the spacing between radio options for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to give users additional guidance about the radio group.
   * @default ''
   */
  description?: string;
  /**
   * Sets the layout direction of the radio options. Use `column` to stack them vertically or `row` to arrange them horizontally. Supports responsive breakpoint values.
   * @default 'column'
   */
  direction?: BreakpointCustomizable<RadioGroupDirection>;
  /**
   * Disables all radio options in the group, preventing selection and excluding the value from form submissions.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the radio group with a form element by its ID when the group is not a direct descendant of that form.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the radio group to identify the group's purpose.
   * @default ''
   */
  label?: string;
  /**
   * @experimental Disables all radio options and shows a spinner to indicate a background loading operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the validation feedback message displayed below the radio group when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the shared name attribute for all radio buttons in the group, grouping them for mutually exclusive selection.
   */
  name: string;
  /**
   * Marks the radio group as required so the form cannot be submitted until one option is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state of the radio group, controlling its visual appearance and feedback message style (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: RadioGroupState;
  /**
   * Sets the currently selected value that pre-selects the matching radio option and reflects user changes. Matches an option strictly by type and value, meaning string or number only match an option whose value has the same type and equal value. Use undefined or null for no preselection; these values never match an option because every option requires a string or number value.  Please note that FormData always serializes values as strings, so when participating in a native (uncontrolled) form a number value is restored as string via formStateRestoreCallback and will no longer strictly match a number-typed option. This limitation only applies to native form state restoration; in controlled forms (where the consumer manages value directly via the change event), the number type is preserved end-to-end.
   */
  value?: string | number | null;
};
export declare class PRadioGroup extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  compact?: boolean;
  description?: string;
  direction?: BreakpointCustomizable<RadioGroupDirection>;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  loading?: boolean;
  message?: string;
  name: string;
  required?: boolean;
  state?: RadioGroupState;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<void>>;
  change: EventEmitter<CustomEvent<Event>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PRadioGroup, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PRadioGroup, "p-radio-group,[p-radio-group]", never, {
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
  }, never, ["*"], false, never>;
}
declare namespace segmented_control_wrapper_d_exports {
  export { PSegmentedControl, PSegmentedControlProps };
}
export type PSegmentedControlProps = {
  /**
   * Sets the number of equal-width columns for the item layout. Use `auto` to distribute items based on their content width. Supports responsive breakpoint values.
   * @default 'auto'
   */
  columns?: BreakpointCustomizable<SegmentedControlColumns>;
  /**
   * Reduces the item height and spacing for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to give users additional context about the segmented control.
   * @default ''
   */
  description?: string;
  /**
   * Prevents user interaction with all items in the segmented control and excludes the value from form submissions.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the segmented control with a form element by its ID when it is not a direct descendant of that form.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the segmented control to describe the group of options.
   * @default ''
   */
  label?: string;
  /**
   * Sets the validation feedback message displayed below the segmented control when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the name of the control submitted with the form data to identify the selected value on the server.
   */
  name?: string;
  /**
   * Prevents items from wrapping to new rows and renders them in a single horizontally scrollable row instead.
   * @default false
   */
  noWrap?: boolean;
  /**
   * Marks the segmented control as required so the form cannot be submitted until one option is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state of the segmented control, controlling its visual appearance and feedback message style (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: SegmentedControlState;
  /**
   * Sets the currently selected item's value and pre-selects the matching option when the component renders. Matches an item strictly by type and value, meaning string or number only match an item whose value has the same type and equal value. Use undefined or null for no preselection.  Please note that FormData always serializes values as strings, so when participating in a native (uncontrolled) form a number value is restored as string via formStateRestoreCallback and will no longer strictly match a number-typed item. This limitation only applies to native form state restoration; in controlled forms (where the consumer manages value directly via the change event), the number type is preserved end-to-end.
   */
  value?: string | number | null;
};
export declare class PSegmentedControl extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  columns?: BreakpointCustomizable<SegmentedControlColumns>;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  message?: string;
  name?: string;
  noWrap?: boolean;
  required?: boolean;
  state?: SegmentedControlState;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<void>>;
  change: EventEmitter<CustomEvent<SegmentedControlChangeEventDetail>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSegmentedControl, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSegmentedControl, "p-segmented-control,[p-segmented-control]", never, {
    "columns": {
      "alias": "columns";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "noWrap": {
      "alias": "noWrap";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
  }, never, ["*"], false, never>;
}
declare namespace select_wrapper_d_exports {
  export { PSelect, PSelectProps };
}
export type PSelectProps = {
  /**
   * Sets additional ARIA attributes on the combobox to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<SelectAriaAttribute>;
  /**
   * Reduces the control height and padding for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets a supplementary description displayed below the label to give users additional guidance about the select.
   * @default ''
   */
  description?: string;
  /**
   * Prevents user interaction with the select and excludes its value from form submissions.
   * @default false
   */
  disabled?: boolean;
  /**
   * Controls whether the dropdown list opens upward (`up`) or downward (`down`), or determines the direction automatically (`auto`).
   * @default 'auto'
   */
  dropdownDirection?: SelectDropdownDirection;
  /**
   * Shows a text input inside the dropdown that filters the visible options as the user types. Ignored when the `filter` slot is used.
   * @default false
   */
  filter?: boolean;
  /**
   * Associates the select with a form element by its ID when it is not a direct descendant of that form.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the select control to identify its purpose.
   * @default ''
   */
  label?: string;
  /**
   * Sets the validation feedback message displayed below the select when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the name of the control submitted with the form data, identifying the selected value on the server.
   */
  name: string;
  /**
   * Marks the select as required so the form cannot be submitted unless a non-empty option is selected.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state of the select, which controls its visual appearance and feedback message style (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: SelectState;
  /**
   * The selected value. Matches an option strictly by type and value, meaning null matches only an option with value null, undefined matches only an option with value undefined (no preselection by default), and string or number only match an option whose value has the same type and equal value.  Please note that FormData always serializes values as strings, so when participating in a native (uncontrolled) form a number value is restored as string via formStateRestoreCallback and will no longer strictly match a number-typed option. This limitation only applies to native form state restoration; in controlled forms (where the consumer manages value directly via the change event), the number type is preserved end-to-end.
   */
  value?: string | number | null;
};
export declare class PSelect extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<SelectAriaAttribute>;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  dropdownDirection?: SelectDropdownDirection;
  filter?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  message?: string;
  name: string;
  required?: boolean;
  state?: SelectState;
  value?: string | number | null;
  blur: EventEmitter<CustomEvent<void>>;
  change: EventEmitter<CustomEvent<SelectChangeEventDetail>>;
  toggle: EventEmitter<CustomEvent<SelectToggleEventDetail>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSelect, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSelect, "p-select,[p-select]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "dropdownDirection": {
      "alias": "dropdownDirection";
      "required": false;
    };
    "filter": {
      "alias": "filter";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "toggle": "toggle";
  }, never, ["*"], false, never>;
}
declare namespace table_body_wrapper_d_exports {
  export { PTableBody, PTableBodyProps };
}
export type PTableBodyProps = {};
export declare class PTableBody extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableBody, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableBody, "p-table-body,[p-table-body]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace textarea_wrapper_d_exports {
  export { PTextarea, PTextareaProps };
}
export type PTextareaProps = {
  /**
   * Sets additional ARIA attributes on the native textarea to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<TextareaAriaAttribute>;
  /**
   * Provides the browser with a hint to enable text autofill suggestions for the textarea (e.g. `autocomplete='on'`).
   */
  autoComplete?: string;
  /**
   * Reduces the textarea's initial height and padding for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Shows a live character counter below the textarea indicating how many characters the user has typed relative to `maxLength`.
   * @default false
   */
  counter?: boolean;
  /**
   * Sets a supplementary description displayed below the label to give users additional guidance about the textarea.
   * @default ''
   */
  description?: string;
  /**
   * Prevents user interaction with the textarea and excludes its value from form submissions.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the textarea with a form element by its ID when the textarea is not a direct descendant of that form.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the visible label text displayed above the textarea to identify its purpose.
   * @default ''
   */
  label?: string;
  /**
   * Sets the maximum number of characters the user is allowed to enter into the textarea.
   */
  maxLength?: number;
  /**
   * Sets the validation feedback message displayed below the textarea when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Sets the minimum number of characters required for the textarea's value to pass constraint validation.
   */
  minLength?: number;
  /**
   * Sets the name of the textarea submitted with the form data to identify this field's value on the server.
   */
  name: string;
  /**
   * Sets placeholder text displayed inside the textarea when it is empty to hint at the expected content format.
   * @default ''
   */
  placeholder?: string;
  /**
   * Makes the textarea read-only so users cannot modify the value, while still including it in form submissions.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the textarea as required so the form cannot be submitted while this field is empty.
   * @default false
   */
  required?: boolean;
  /**
   * Controls whether and in which direction the user can resize the textarea (`horizontal`, `vertical`, `both`, or `none`).
   * @default 'vertical'
   */
  resize?: TextareaResize;
  /**
   * Sets the initial visible height of the textarea in lines of text. Has no effect when the `--p-textarea-field-sizing` CSS variable is set to `content`.
   * @default 7
   */
  rows?: number;
  /**
   * Controls whether the browser's built-in spell-checking and grammar checking is enabled for the textarea content.
   */
  spellCheck?: boolean;
  /**
   * Sets the validation state of the textarea, which controls its visual appearance and feedback message style (`none`, `success`, `error`).
   * @default 'none'
   */
  state?: TextareaState;
  /**
   * Sets the current multi-line text value of the textarea and reflects any changes made by the user.
   * @default ''
   */
  value?: string | null;
  /**
   * Controls how the submitted text wraps in the form data: `soft` wraps only visually, `hard` inserts line breaks at the textarea width.
   * @default 'soft'
   */
  wrap?: TextareaWrap;
};
export declare class PTextarea extends BaseComponent implements ControlValueAccessor {
  private _renderer;
  private _elementRef;
  private _cdr;
  aria?: SelectedAriaAttributes<TextareaAriaAttribute>;
  autoComplete?: string;
  compact?: boolean;
  counter?: boolean;
  description?: string;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  label?: string;
  maxLength?: number;
  message?: string;
  minLength?: number;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  resize?: TextareaResize;
  rows?: number;
  spellCheck?: boolean;
  state?: TextareaState;
  value?: string | null;
  wrap?: TextareaWrap;
  blur: EventEmitter<CustomEvent<Event>>;
  change: EventEmitter<CustomEvent<Event>>;
  input: EventEmitter<CustomEvent<InputEvent>>;
  constructor(_renderer: Renderer2, _elementRef: ElementRef, _cdr: ChangeDetectorRef);
  _onChange: (value: any) => void;
  _onTouched: () => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTextarea, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTextarea, "p-textarea,[p-textarea]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "autoComplete": {
      "alias": "autoComplete";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "counter": {
      "alias": "counter";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "readOnly": {
      "alias": "readOnly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "resize": {
      "alias": "resize";
      "required": false;
    };
    "rows": {
      "alias": "rows";
      "required": false;
    };
    "spellCheck": {
      "alias": "spellCheck";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
    "wrap": {
      "alias": "wrap";
      "required": false;
    };
  }, {
    "blur": "blur";
    "change": "change";
    "input": "input";
  }, never, ["*"], false, never>;
}
declare namespace accordion_wrapper_d_exports {
  export { PAccordion, PAccordionProps };
}
export type PAccordionProps = {
  /**
   * Positions the expand/collapse marker icon at the start or end of the summary section.
   * @default 'end'
   */
  alignMarker?: AccordionAlignMarker;
  /**
   * Sets the background color of the accordion panel. Use `frosted` only when placed on images, videos, or gradients.
   * @default 'none'
   */
  background?: AccordionBackground;
  /**
   * Reduces padding and spacing for a more compact layout, useful in space-constrained interfaces.
   */
  compact?: boolean;
  /**
   * @deprecated Will be removed in the next major release. Use the `summary` slot instead. Sets the heading text within the summary section.
   */
  heading?: string;
  /**
   * @deprecated Will be removed in the next major release. Use the `summary` slot instead. Sets the heading tag for proper semantic structure within the page.
   * @default 'h2'
   */
  headingTag?: AccordionHeadingTag;
  /**
   * Indents the slotted content to be vertically aligned with the text of the summary section.
   * @default false
   */
  indent?: BreakpointCustomizable<boolean>;
  /**
   * Controls whether the accordion is open or closed.
   */
  open?: boolean;
  /**
   * @deprecated Will be removed in the next major release. Use the `summary` slot instead. Controls the heading size in the summary section (only applies when using the `heading` prop or `heading` slot).
   * @default 'small'
   */
  size?: BreakpointCustomizable<AccordionSize>;
  /**
   * @experimental Makes the summary section sticky at the top while scrolling. Only works with `background="canvas"` or `background="surface"`. Not compatible with `summary-before` or `summary-after` slots.
   */
  sticky?: boolean;
};
export declare class PAccordion extends BaseComponent {
  alignMarker?: AccordionAlignMarker;
  background?: AccordionBackground;
  compact?: boolean;
  /** @deprecated */
  heading?: string;
  /** @deprecated */
  headingTag?: AccordionHeadingTag;
  indent?: BreakpointCustomizable<boolean>;
  open?: boolean;
  /** @deprecated */
  size?: BreakpointCustomizable<AccordionSize>;
  sticky?: boolean;
  update: EventEmitter<CustomEvent<AccordionUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PAccordion, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PAccordion, "p-accordion,[p-accordion]", never, {
    "alignMarker": {
      "alias": "alignMarker";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "heading": {
      "alias": "heading";
      "required": false;
    };
    "headingTag": {
      "alias": "headingTag";
      "required": false;
    };
    "indent": {
      "alias": "indent";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "sticky": {
      "alias": "sticky";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace ai_tag_wrapper_d_exports {
  export { PAiTag, PAiTagProps };
}
export type PAiTagProps = {
  /**
   * Market locale for the AI text (BCP47, e.g. `en-US`). Language-only `en` is supported for international markets. POSIX forms (e.g. `en_US`) are deprecated but still accepted. Copy is resolved by language; unknown languages fall back to English.
   * @default 'en-US'
   */
  locale?: AiTagLocale;
  /**
   * Variant to display: 'abbreviation' (e.g. "AI"), 'generated' (e.g. "AI-generated"), or 'modified' (e.g. "AI-modified").
   * @default 'generated'
   */
  variant?: AiTagVariant;
};
export declare class PAiTag extends BaseComponent {
  locale?: AiTagLocale;
  variant?: AiTagVariant;
  static ɵfac: i0.ɵɵFactoryDeclaration<PAiTag, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PAiTag, "p-ai-tag,[p-ai-tag]", never, {
    "locale": {
      "alias": "locale";
      "required": false;
    };
    "variant": {
      "alias": "variant";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace banner_wrapper_d_exports {
  export { PBanner, PBannerProps };
}
export type PBannerProps = {
  /**
   * Sets the supporting description text shown below the heading.
   * @default ''
   */
  description?: string;
  /**
   * Shows a dismiss button so the user can manually close the banner.
   * @default true
   */
  dismissButton?: boolean;
  /**
   * Sets the heading text displayed at the top of the banner.
   * @default ''
   */
  heading?: string;
  /**
   * Sets the HTML heading tag (e.g. h2, h3) to maintain correct document structure for the heading.
   * @default 'h5'
   */
  headingTag?: BannerHeadingTag;
  /**
   * Controls whether the banner is visible. Set to `true` to show it and `false` to hide it.
   * @default false
   */
  open: boolean;
  /**
   * Sets the position of the banner on screen — `top` or `bottom`. Supports responsive breakpoint values.
   * @default { base: 'bottom', s: 'top' }
   */
  position?: BreakpointCustomizable<BannerPosition>;
  /**
   * Sets the visual state of the banner — controls the icon and color scheme (`info`, `warning`, `error`, `success`).
   * @default 'info'
   */
  state?: BannerState;
};
export declare class PBanner extends BaseComponent {
  description?: string;
  dismissButton?: boolean;
  heading?: string;
  headingTag?: BannerHeadingTag;
  open: boolean;
  position?: BreakpointCustomizable<BannerPosition>;
  state?: BannerState;
  dismiss: EventEmitter<CustomEvent<void>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PBanner, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PBanner, "p-banner,[p-banner]", never, {
    "description": {
      "alias": "description";
      "required": false;
    };
    "dismissButton": {
      "alias": "dismissButton";
      "required": false;
    };
    "heading": {
      "alias": "heading";
      "required": false;
    };
    "headingTag": {
      "alias": "headingTag";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
  }, never, ["*"], false, never>;
}
declare namespace button_wrapper_d_exports {
  export { PButton, PButtonProps };
}
export type PButtonProps = {
  /**
   * Sets ARIA attributes on the button to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<ButtonAriaAttribute>;
  /**
   * Reduces the button's height and padding for denser layouts. Supports responsive breakpoint values.
   * @default false
   */
  compact?: BreakpointCustomizable<boolean>;
  /**
   * Disables the button, preventing all interaction and blocking events.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the button with a form element by its ID, so it can submit or reset that form even when placed outside of it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the icon displayed inside the button. Use `none` to show no icon.
   * @default 'none'
   */
  icon?: ButtonIcon;
  /**
   * Sets a path to a custom SVG icon, used instead of the built-in icon set.
   */
  iconSource?: string;
  /**
   * Disables the button and replaces its content with a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the name submitted with the form data when this button triggers form submission.
   */
  name?: string;
  /**
   * Sets the button's HTML type — `submit` sends the form, `reset` clears it, `button` performs no default action.
   * @default 'submit'
   */
  type?: ButtonType;
  /**
   * Sets the value submitted with the form data when this button triggers form submission, paired with `name`.
   */
  value?: string;
  /**
   * Sets the visual style variant of the button (`primary`, `secondary` or `destructive`). Use `destructive` for actions with irreversible consequences, e.g. deleting data.
   * @default 'primary'
   */
  variant?: ButtonVariant;
};
export declare class PButton extends BaseComponent {
  aria?: SelectedAriaAttributes<ButtonAriaAttribute>;
  compact?: BreakpointCustomizable<boolean>;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  icon?: ButtonIcon;
  iconSource?: string;
  loading?: boolean;
  name?: string;
  type?: ButtonType;
  value?: string;
  variant?: ButtonVariant;
  static ɵfac: i0.ɵɵFactoryDeclaration<PButton, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PButton, "p-button,[p-button]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
    "variant": {
      "alias": "variant";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace button_pure_wrapper_d_exports {
  export { PButtonPure, PButtonPureProps };
}
export type PButtonPureProps = {
  /**
   * Visually marks the button as the currently active or selected item, useful for navigation and toggle patterns.
   * @default false
   */
  active?: boolean;
  /**
   * Sets the label position relative to the icon — `start` places it before, `end` places it after. Supports responsive breakpoint values.
   * @default 'end'
   */
  alignLabel?: BreakpointCustomizable<ButtonPureAlignLabel>;
  /**
   * Sets ARIA attributes on the button to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<ButtonPureAriaAttribute>;
  /**
   * Sets the foreground color of the button's icon and label text.
   * @default 'primary'
   */
  color?: ButtonPureColor;
  /**
   * Disables the button, preventing all interaction and blocking events.
   * @default false
   */
  disabled?: boolean;
  /**
   * Associates the button with a form element by its ID, so it can submit or reset that form even when placed outside of it.
   */
  form?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Sets the icon displayed next to the label.
   * @default 'arrow-right'
   */
  icon?: ButtonPureIcon;
  /**
   * Sets a path to a custom SVG icon, used instead of the built-in icon set.
   */
  iconSource?: string;
  /**
   * Disables the button and replaces its icon with a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the name submitted with the form data when this button triggers form submission.
   */
  name?: string;
  /**
   * Sets the font size of the button label. Supports responsive breakpoint values.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<ButtonPureSize>;
  /**
   * Expands the space between icon and label to fill the full container width. Supports responsive breakpoint values.
   * @default false
   */
  stretch?: BreakpointCustomizable<boolean>;
  /**
   * Sets the button's HTML type — `submit` sends the form, `reset` clears it, `button` performs no default action.
   * @default 'submit'
   */
  type?: ButtonPureType;
  /**
   * Adds a text underline to the label to reinforce the button's link-like appearance.
   * @default false
   */
  underline?: boolean;
  /**
   * Sets the value submitted with the form data when this button triggers form submission, paired with `name`.
   */
  value?: string;
};
export declare class PButtonPure extends BaseComponent {
  active?: boolean;
  alignLabel?: BreakpointCustomizable<ButtonPureAlignLabel>;
  aria?: SelectedAriaAttributes<ButtonPureAriaAttribute>;
  color?: ButtonPureColor;
  disabled?: boolean;
  form?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  icon?: ButtonPureIcon;
  iconSource?: string;
  loading?: boolean;
  name?: string;
  size?: BreakpointCustomizable<ButtonPureSize>;
  stretch?: BreakpointCustomizable<boolean>;
  type?: ButtonPureType;
  underline?: boolean;
  value?: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PButtonPure, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PButtonPure, "p-button-pure,[p-button-pure]", never, {
    "active": {
      "alias": "active";
      "required": false;
    };
    "alignLabel": {
      "alias": "alignLabel";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "form": {
      "alias": "form";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
    "underline": {
      "alias": "underline";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace button_tile_wrapper_d_exports {
  export { PButtonTile, PButtonTileProps };
}
export type PButtonTileProps = {
  /**
   * Controls the vertical placement of the description and button — `top` or `bottom`.
   * @default 'bottom'
   */
  align?: ButtonTileAlign;
  /**
   * Sets ARIA attributes on the tile's action button to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<ButtonTileAriaAttribute>;
  /**
   * Sets the width-to-height ratio of the tile media area. Supports responsive breakpoint values.
   * @default '4/3'
   */
  aspectRatio?: BreakpointCustomizable<ButtonTileAspectRatio>;
  /**
   * Renders only the icon button without the full label. Supports responsive breakpoint values.
   * @default false
   */
  compact?: BreakpointCustomizable<boolean>;
  /**
   * Sets the description text displayed in the tile's content area.
   */
  description: string;
  /**
   * Disables the tile, preventing button interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * Shows a gradient overlay over the media slot to improve text legibility on bright images or videos.
   * @default false
   */
  gradient?: boolean;
  /**
   * Sets the icon displayed in the tile's action button. Use `none` to show no icon.
   * @default 'none'
   */
  icon?: ButtonTileIcon;
  /**
   * Sets a path to a custom SVG icon for the action button, used instead of the built-in icon set.
   */
  iconSource?: string;
  /**
   * Sets the accessible label text of the action button rendered inside the tile.
   */
  label: string;
  /**
   * Disables the tile and shows a loading spinner to indicate an ongoing operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the font size of the description text in the tile content area. Supports responsive breakpoint values.
   * @default 'medium'
   */
  size?: BreakpointCustomizable<ButtonTileSize>;
  /**
   * Sets the button's HTML type — `submit` sends the form, `reset` clears it, `button` performs no default action.
   * @default 'submit'
   */
  type?: ButtonTileType;
  /**
   * Sets the font weight of the description text in the tile content area. Supports responsive breakpoint values.
   * @default 'semi-bold'
   */
  weight?: BreakpointCustomizable<ButtonTileWeight>;
};
export declare class PButtonTile extends BaseComponent {
  align?: ButtonTileAlign;
  aria?: SelectedAriaAttributes<ButtonTileAriaAttribute>;
  aspectRatio?: BreakpointCustomizable<ButtonTileAspectRatio>;
  compact?: BreakpointCustomizable<boolean>;
  description: string;
  disabled?: boolean;
  gradient?: boolean;
  icon?: ButtonTileIcon;
  iconSource?: string;
  label: string;
  loading?: boolean;
  size?: BreakpointCustomizable<ButtonTileSize>;
  type?: ButtonTileType;
  weight?: BreakpointCustomizable<ButtonTileWeight>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PButtonTile, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PButtonTile, "p-button-tile,[p-button-tile]", never, {
    "align": {
      "alias": "align";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "aspectRatio": {
      "alias": "aspectRatio";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "gradient": {
      "alias": "gradient";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace canvas_wrapper_d_exports {
  export { PCanvas, PCanvasProps };
}
export type PCanvasProps = {
  /**
   * Sets the background color of the main content area and automatically applies a matching color to the sidebar.
   * @default 'canvas'
   */
  background?: CanvasBackground;
  /**
   * Controls whether the utility sidebar on the end side (right in LTR) is open or collapsed.
   * @default false
   */
  sidebarEndOpen?: boolean;
  /**
   * Controls whether the navigation sidebar on the start side (left in LTR) is open or collapsed.
   * @default false
   */
  sidebarStartOpen?: boolean;
};
export declare class PCanvas extends BaseComponent {
  background?: CanvasBackground;
  sidebarEndOpen?: boolean;
  sidebarStartOpen?: boolean;
  sidebarEndDismiss: EventEmitter<CustomEvent<void>>;
  sidebarStartUpdate: EventEmitter<CustomEvent<CanvasSidebarStartUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PCanvas, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PCanvas, "p-canvas,[p-canvas]", never, {
    "background": {
      "alias": "background";
      "required": false;
    };
    "sidebarEndOpen": {
      "alias": "sidebarEndOpen";
      "required": false;
    };
    "sidebarStartOpen": {
      "alias": "sidebarStartOpen";
      "required": false;
    };
  }, {
    "sidebarEndDismiss": "sidebarEndDismiss";
    "sidebarStartUpdate": "sidebarStartUpdate";
  }, never, ["*"], false, never>;
}
declare namespace carousel_wrapper_d_exports {
  export { PCarousel, PCarouselProps };
}
export type PCarouselProps = {
  /**
   * Sets the zero-based index of the currently visible slide. Update this to navigate programmatically.
   * @default 0
   */
  activeSlideIndex?: number;
  /**
   * Controls the alignment of custom slotted controls within the header area.
   * @default 'auto'
   */
  alignControls?: CarouselAlignControls;
  /**
   * Controls the horizontal alignment of the heading and description.
   * @default 'start'
   */
  alignHeader?: CarouselAlignHeader;
  /**
   * Sets ARIA attributes on the carousel region element for improved accessibility.
   */
  aria?: SelectedAriaAttributes<CarouselAriaAttribute>;
  /**
   * Sets the description text displayed below the heading for additional context.
   */
  description?: string;
  /**
   * When enabled, each slide is individually focusable and the carousel navigates one slide at a time instead of one page.
   * @default false
   */
  focusOnCenterSlide?: boolean;
  /**
   * Shows a gradient fade at the start and end edges to visually indicate more slides beyond the viewport.
   * @default false
   */
  gradient?: boolean;
  /**
   * Sets the heading text displayed above the carousel. Also used as the accessible label when no `aria` prop is set.
   */
  heading?: string;
  /**
   * Sets the font size of the carousel heading.
   * @default 'x-large'
   */
  headingSize?: CarouselHeadingSize;
  /**
   * Overrides the default label strings used for the previous, next, and page indicators — useful for localization.
   */
  intl?: CarouselInternationalization;
  /**
   * Shows pagination dot indicators below the carousel. Supports responsive breakpoint values.
   * @default false
   */
  pagination?: BreakpointCustomizable<boolean>;
  /**
   * Enables infinite looping — navigating past the last slide wraps back to the first, and vice versa.
   * @default false
   */
  rewind?: boolean;
  /**
   * Sets the `href` of an in-page skip link that lets keyboard users jump past the carousel slides.
   */
  skipLinkTarget?: string;
  /**
   * Sets how many slides are visible at once. Use `auto` to control each slide's width via CSS. Supports responsive breakpoint values.
   * @default 1
   */
  slidesPerPage?: BreakpointCustomizable<CarouselSlidesPerPage>;
  /**
   * Removes whitespace before the first and after the last slide when `focusOnCenterSlide` is enabled.
   * @default false
   */
  trimSpace?: boolean;
  /**
   * Sets the maximum width and outer spacing of the carousel, aligned to PDS grid widths.
   * @default 'basic'
   */
  width?: CarouselWidth;
};
export declare class PCarousel extends BaseComponent {
  activeSlideIndex?: number;
  alignControls?: CarouselAlignControls;
  alignHeader?: CarouselAlignHeader;
  aria?: SelectedAriaAttributes<CarouselAriaAttribute>;
  description?: string;
  focusOnCenterSlide?: boolean;
  gradient?: boolean;
  heading?: string;
  headingSize?: CarouselHeadingSize;
  intl?: CarouselInternationalization;
  pagination?: BreakpointCustomizable<boolean>;
  rewind?: boolean;
  skipLinkTarget?: string;
  slidesPerPage?: BreakpointCustomizable<CarouselSlidesPerPage>;
  trimSpace?: boolean;
  width?: CarouselWidth;
  update: EventEmitter<CustomEvent<CarouselUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PCarousel, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PCarousel, "p-carousel,[p-carousel]", never, {
    "activeSlideIndex": {
      "alias": "activeSlideIndex";
      "required": false;
    };
    "alignControls": {
      "alias": "alignControls";
      "required": false;
    };
    "alignHeader": {
      "alias": "alignHeader";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "focusOnCenterSlide": {
      "alias": "focusOnCenterSlide";
      "required": false;
    };
    "gradient": {
      "alias": "gradient";
      "required": false;
    };
    "heading": {
      "alias": "heading";
      "required": false;
    };
    "headingSize": {
      "alias": "headingSize";
      "required": false;
    };
    "intl": {
      "alias": "intl";
      "required": false;
    };
    "pagination": {
      "alias": "pagination";
      "required": false;
    };
    "rewind": {
      "alias": "rewind";
      "required": false;
    };
    "skipLinkTarget": {
      "alias": "skipLinkTarget";
      "required": false;
    };
    "slidesPerPage": {
      "alias": "slidesPerPage";
      "required": false;
    };
    "trimSpace": {
      "alias": "trimSpace";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace crest_wrapper_d_exports {
  export { PCrest, PCrestProps };
}
export type PCrestProps = {
  /**
   * Sets ARIA attributes on the anchor element to improve accessibility when the crest is used as a link.
   */
  aria?: SelectedAriaAttributes<CrestAriaAttribute>;
  /**
   * When set, renders the crest as an anchor element navigating to this URL when clicked.
   */
  href?: string;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`). Only applies when `href` is set.
   * @default '_self'
   */
  target?: CrestTarget;
};
export declare class PCrest extends BaseComponent {
  aria?: SelectedAriaAttributes<CrestAriaAttribute>;
  href?: string;
  target?: CrestTarget;
  static ɵfac: i0.ɵɵFactoryDeclaration<PCrest, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PCrest, "p-crest,[p-crest]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace display_wrapper_d_exports {
  export { PDisplay, PDisplayProps };
}
export type PDisplayProps = {
  /**
   * Sets the horizontal text alignment (`start`, `center`, `end`, or `inherit`).
   * @default 'start'
   */
  align?: DisplayAlign;
  /**
   * Sets the text color using PDS color tokens.
   * @default 'primary'
   */
  color?: DisplayColor;
  /**
   * Truncates the text with an ellipsis when it overflows the container on a single line.
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Sets the visual text size. Supports responsive breakpoint values.
   * @default 'large'
   */
  size?: BreakpointCustomizable<DisplaySize>;
  /**
   * Sets the HTML heading tag (h1–h6) for correct document outline placement. When omitted, the tag is inferred from `size`.
   */
  tag?: DisplayTag;
};
/** @deprecated since v4.0.0, will be removed with next major release. Please use `p-heading` instead. */
export declare class PDisplay extends BaseComponent {
  align?: DisplayAlign;
  color?: DisplayColor;
  ellipsis?: boolean;
  size?: BreakpointCustomizable<DisplaySize>;
  tag?: DisplayTag;
  static ɵfac: i0.ɵɵFactoryDeclaration<PDisplay, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PDisplay, "p-display,[p-display]", never, {
    "align": {
      "alias": "align";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "ellipsis": {
      "alias": "ellipsis";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "tag": {
      "alias": "tag";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace divider_wrapper_d_exports {
  export { PDivider, PDividerProps };
}
export type PDividerProps = {
  /**
   * Sets the color of the divider line using PDS contrast tokens.
   * @default 'contrast-lower'
   */
  color?: DividerColor;
  /**
   * Sets the orientation of the divider to `horizontal` or `vertical`. Supports responsive breakpoint values.
   * @default 'horizontal'
   */
  direction?: BreakpointCustomizable<DividerDirection>;
};
export declare class PDivider extends BaseComponent {
  color?: DividerColor;
  direction?: BreakpointCustomizable<DividerDirection>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PDivider, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PDivider, "p-divider,[p-divider]", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace drilldown_wrapper_d_exports {
  export { PDrilldown, PDrilldownProps };
}
export type PDrilldownProps = {
  /**
   * Sets which `p-drilldown-item` (by `identifier`) is currently expanded to show its sub-navigation level.
   */
  activeIdentifier?: string | undefined;
  /**
   * Sets ARIA attributes on the drilldown dialog element for improved screen reader accessibility.
   */
  aria?: SelectedAriaAttributes<DrilldownAriaAttribute>;
  /**
   * Controls whether the drilldown navigation panel is visible.
   * @default false
   */
  open?: boolean;
};
export declare class PDrilldown extends BaseComponent {
  activeIdentifier?: string | undefined;
  aria?: SelectedAriaAttributes<DrilldownAriaAttribute>;
  open?: boolean;
  dismiss: EventEmitter<CustomEvent<import("@porsche-design-system/components-angular").DialogDismissEventDetail>>;
  update: EventEmitter<CustomEvent<DrilldownUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PDrilldown, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PDrilldown, "p-drilldown,[p-drilldown]", never, {
    "activeIdentifier": {
      "alias": "activeIdentifier";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace drilldown_item_wrapper_d_exports {
  export { PDrilldownItem, PDrilldownItemProps };
}
export type PDrilldownItemProps = {
  /**
   * Private property set by the component itself.
   * @default false
   */
  cascade?: boolean;
  /**
   * Sets the unique identifier matched against the drilldown's `activeIdentifier` to determine if this item is shown.
   */
  identifier: string;
  /**
   * Sets the text used for the back button, sticky header, and cascade button that navigates into this navigation level.
   */
  label?: string;
  /**
   * Private property set by the component itself.
   * @default false
   */
  primary?: boolean;
  /**
   * Private property set by the component itself.
   * @default false
   */
  secondary?: boolean;
};
export declare class PDrilldownItem extends BaseComponent {
  cascade?: boolean;
  identifier: string;
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<PDrilldownItem, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PDrilldownItem, "p-drilldown-item,[p-drilldown-item]", never, {
    "cascade": {
      "alias": "cascade";
      "required": false;
    };
    "identifier": {
      "alias": "identifier";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "primary": {
      "alias": "primary";
      "required": false;
    };
    "secondary": {
      "alias": "secondary";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace drilldown_link_wrapper_d_exports {
  export { PDrilldownLink, PDrilldownLinkProps };
}
export type PDrilldownLinkProps = {
  /**
   * Visually marks the link as the currently active navigation item, e.g. the current page.
   * @default false
   */
  active?: boolean;
  /**
   * Sets ARIA attributes on the link for improved accessibility. Only applies when `href` is set.
   */
  aria?: SelectedAriaAttributes<DrilldownLinkAriaAttribute>;
  /**
   * Sets the native `download` attribute to trigger a file download. Only applies when `href` is set.
   */
  download?: string;
  /**
   * When set, the component renders as an anchor navigating to this URL. Otherwise, provide a slotted anchor element.
   */
  href?: string;
  /**
   * Sets the `rel` attribute on the link element (e.g. `noopener`). Only applies when `href` is set.
   */
  rel?: string;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`). Only applies when `href` is set.
   * @default '_self'
   */
  target?: DrilldownLinkTarget;
};
export declare class PDrilldownLink extends BaseComponent {
  active?: boolean;
  aria?: SelectedAriaAttributes<DrilldownLinkAriaAttribute>;
  download?: string;
  href?: string;
  rel?: string;
  target?: DrilldownLinkTarget;
  static ɵfac: i0.ɵɵFactoryDeclaration<PDrilldownLink, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PDrilldownLink, "p-drilldown-link,[p-drilldown-link]", never, {
    "active": {
      "alias": "active";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "download": {
      "alias": "download";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "rel": {
      "alias": "rel";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace fieldset_wrapper_d_exports {
  export { PFieldset, PFieldsetProps };
}
export type PFieldsetProps = {
  /**
   * Overrides the ARIA role on the fieldset — use `radiogroup` when grouping radio buttons.
   */
  aria?: SelectedAriaRole<"radiogroup">;
  /**
   * Sets the visible legend text displayed above the grouped form controls.
   * @default ''
   */
  label?: string;
  /**
   * Sets the font size of the fieldset label (`small`, `medium`, or `large`).
   * @default 'medium'
   */
  labelSize?: FieldsetLabelSize;
  /**
   * Sets the validation feedback message displayed below the fieldset when `state` is `success` or `error`.
   * @default ''
   */
  message?: string;
  /**
   * Marks all controls within the fieldset as required and adds a required indicator to the label.
   * @default false
   */
  required?: boolean;
  /**
   * Sets the validation state of the fieldset, controlling the color and style of the feedback message.
   * @default 'none'
   */
  state?: FieldsetState;
};
export declare class PFieldset extends BaseComponent {
  aria?: SelectedAriaRole<"radiogroup">;
  label?: string;
  labelSize?: FieldsetLabelSize;
  message?: string;
  required?: boolean;
  state?: FieldsetState;
  static ɵfac: i0.ɵɵFactoryDeclaration<PFieldset, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PFieldset, "p-fieldset,[p-fieldset]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "labelSize": {
      "alias": "labelSize";
      "required": false;
    };
    "message": {
      "alias": "message";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace flag_wrapper_d_exports {
  export { PFlag, PFlagProps };
}
export type PFlagProps = {
  /**
   * A map of ARIA attributes to enhance the flag's accessibility. For example, use `{ 'aria-label': 'German flag' }` to provide a descriptive label for screen readers.
   */
  aria?: SelectedAriaAttributes<FlagAriaAttribute>;
  /**
   * Specifies the country flag to display. Use the two-letter ISO 3166-1 alpha-2 country code. For example, use `us` for the United States, `de` for Germany, `gb` for Great Britain.
   * @default 'de'
   */
  name?: FlagName;
  /**
   * Defines the size of the flag, aligned with the typographic scale used by components such as p-icon, p-spinner, p-text, and p-heading. When set to `inherit`, the size is derived from a custom font-size defined on a parent element, calculated against the global line-height (based on `ex`-unit) to remain visually consistent with other typographic-scale-based components.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<FlagSize>;
};
export declare class PFlag extends BaseComponent {
  aria?: SelectedAriaAttributes<FlagAriaAttribute>;
  name?: FlagName;
  size?: BreakpointCustomizable<FlagSize>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PFlag, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PFlag, "p-flag,[p-flag]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace flyout_wrapper_d_exports {
  export { PFlyout, PFlyoutProps };
}
export type PFlyoutProps = {
  /**
   * Sets ARIA attributes on the flyout dialog element for improved screen reader accessibility.
   */
  aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;
  /**
   * Sets the backdrop style. Use `blur` when background content is irrelevant; use `shading` when users still need visual context.
   * @default 'blur'
   */
  backdrop?: FlyoutBackdrop;
  /**
   * Sets the background color of the flyout panel (`canvas` or `surface`).
   * @default 'canvas'
   */
  background?: FlyoutBackground;
  /**
   * When enabled, clicking the backdrop will not close the flyout.
   * @default false
   */
  disableBackdropClick?: boolean;
  /**
   * Controls footer behavior. `fixed` keeps it anchored at the bottom; `sticky` pins it only when content overflows.
   * @default 'sticky'
   */
  footerBehavior?: FlyoutFooterBehavior;
  /**
   * If true the flyout stretches to the full viewport width with squared corners. Useful for smaller viewports where the flyout would otherwise fill the screen but still show rounded corners.
   * @default false
   */
  fullscreen?: BreakpointCustomizable<boolean>;
  /**
   * Controls whether the flyout panel is visible.
   * @default false
   */
  open: boolean;
  /**
   * Sets the side the flyout slides in from — `start` for left or `end` for right in LTR layouts.
   * @default 'end'
   */
  position?: FlyoutPosition;
};
export declare class PFlyout extends BaseComponent {
  aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;
  backdrop?: FlyoutBackdrop;
  background?: FlyoutBackground;
  disableBackdropClick?: boolean;
  footerBehavior?: FlyoutFooterBehavior;
  fullscreen?: BreakpointCustomizable<boolean>;
  open: boolean;
  position?: FlyoutPosition;
  dismiss: EventEmitter<CustomEvent<import("@porsche-design-system/components-angular").DialogDismissEventDetail>>;
  motionHiddenEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  motionVisibleEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PFlyout, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PFlyout, "p-flyout,[p-flyout]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "backdrop": {
      "alias": "backdrop";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "disableBackdropClick": {
      "alias": "disableBackdropClick";
      "required": false;
    };
    "footerBehavior": {
      "alias": "footerBehavior";
      "required": false;
    };
    "fullscreen": {
      "alias": "fullscreen";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
    "motionHiddenEnd": "motionHiddenEnd";
    "motionVisibleEnd": "motionVisibleEnd";
  }, never, ["*"], false, never>;
}
declare namespace heading_wrapper_d_exports {
  export { PHeading, PHeadingProps };
}
export type PHeadingProps = {
  /**
   * Sets the horizontal text alignment (`start`, `center`, `end`, or `inherit`).
   * @default 'start'
   */
  align?: HeadingAlign;
  /**
   * Sets the text color using PDS color tokens.
   * @default 'primary'
   */
  color?: HeadingColor;
  /**
   * Truncates the text with an ellipsis when it overflows the container on a single line. Cannot be combined with multi-line content.
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Controls hyphenation behavior — `auto` lets the browser decide, `manual` only breaks at `&shy;`, `none` disables it entirely.
   * @default 'none'
   */
  hyphens?: HeadingHyphens;
  /**
   * Sets the visual size of the heading. Use `inherit` to derive size from the parent. Supports responsive breakpoint values.
   * @default '2xl'
   */
  size?: BreakpointCustomizable<HeadingSize>;
  /**
   * Sets the HTML heading tag (h1–h6) for correct document outline placement. When omitted, the tag is inferred from `size`.
   */
  tag?: HeadingTag;
  /**
   * Sets the font weight — `normal`, `semibold`, or `bold`.
   * @default 'normal'
   */
  weight?: HeadingWeight;
};
export declare class PHeading extends BaseComponent {
  align?: HeadingAlign;
  color?: HeadingColor;
  ellipsis?: boolean;
  hyphens?: HeadingHyphens;
  size?: BreakpointCustomizable<HeadingSize>;
  tag?: HeadingTag;
  weight?: HeadingWeight;
  static ɵfac: i0.ɵɵFactoryDeclaration<PHeading, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PHeading, "p-heading,[p-heading]", never, {
    "align": {
      "alias": "align";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "ellipsis": {
      "alias": "ellipsis";
      "required": false;
    };
    "hyphens": {
      "alias": "hyphens";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "tag": {
      "alias": "tag";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace icon_wrapper_d_exports {
  export { PIcon, PIconProps };
}
export type PIconProps = {
  /**
   * Sets ARIA attributes on the icon — use `aria-label` to make the icon meaningful to screen readers when it conveys information.
   */
  aria?: SelectedAriaAttributes<IconAriaAttribute>;
  /**
   * Sets the fill color of the icon using PDS color tokens.
   * @default 'primary'
   */
  color?: IconColor;
  /**
   * Selects an icon from the built-in PDS icon library by name (e.g. `arrow-right`, `close`).
   * @default 'arrow-right'
   */
  name?: IconName;
  /**
   * Sets the icon size using the PDS typographic scale. Use `inherit` to derive size from the parent element. Supports responsive breakpoint values.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<IconSize>;
  /**
   * Sets a path to a custom SVG icon, used instead of the built-in icon library.
   */
  source?: string;
};
export declare class PIcon extends BaseComponent {
  aria?: SelectedAriaAttributes<IconAriaAttribute>;
  color?: IconColor;
  name?: IconName;
  size?: BreakpointCustomizable<IconSize>;
  source?: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PIcon, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PIcon, "p-icon,[p-icon]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "source": {
      "alias": "source";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace inline_notification_wrapper_d_exports {
  export { PInlineNotification, PInlineNotificationProps };
}
export type PInlineNotificationProps = {
  /**
   * Sets the icon displayed inside the action button using a PDS icon name.
   * @default 'arrow-right'
   */
  actionIcon?: InlineNotificationActionIcon;
  /**
   * Sets the label text of the optional action button inside the notification.
   */
  actionLabel?: string;
  /**
   * Disables the action button and shows a spinner to indicate an ongoing operation.
   * @default false
   */
  actionLoading?: boolean;
  /**
   * Sets the supporting description text shown below the heading.
   * @default ''
   */
  description?: string;
  /**
   * Shows a dismiss button so the user can manually close the notification.
   * @default true
   */
  dismissButton?: boolean;
  /**
   * Sets the heading text displayed at the top of the inline notification.
   * @default ''
   */
  heading?: string;
  /**
   * Sets the HTML heading tag (e.g. h2, h3) to maintain correct document structure.
   * @default 'h5'
   */
  headingTag?: InlineNotificationHeadingTag;
  /**
   * Sets the visual state — controls the icon and color scheme (`info`, `warning`, `error`, `success`).
   * @default 'info'
   */
  state?: InlineNotificationState;
};
export declare class PInlineNotification extends BaseComponent {
  actionIcon?: InlineNotificationActionIcon;
  actionLabel?: string;
  actionLoading?: boolean;
  description?: string;
  dismissButton?: boolean;
  heading?: string;
  headingTag?: InlineNotificationHeadingTag;
  state?: InlineNotificationState;
  action: EventEmitter<CustomEvent<void>>;
  dismiss: EventEmitter<CustomEvent<void>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PInlineNotification, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PInlineNotification, "p-inline-notification,[p-inline-notification]", never, {
    "actionIcon": {
      "alias": "actionIcon";
      "required": false;
    };
    "actionLabel": {
      "alias": "actionLabel";
      "required": false;
    };
    "actionLoading": {
      "alias": "actionLoading";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "dismissButton": {
      "alias": "dismissButton";
      "required": false;
    };
    "heading": {
      "alias": "heading";
      "required": false;
    };
    "headingTag": {
      "alias": "headingTag";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
  }, {
    "action": "action";
    "dismiss": "dismiss";
  }, never, ["*"], false, never>;
}
declare namespace link_wrapper_d_exports {
  export { PLink, PLinkProps };
}
export type PLinkProps = {
  /**
   * Sets ARIA attributes on the link element to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<LinkAriaAttribute>;
  /**
   * Reduces the link's padding and height for denser layouts. Supports responsive breakpoint values.
   * @default false
   */
  compact?: BreakpointCustomizable<boolean>;
  /**
   * Sets the native `download` attribute to trigger a file download. Only applies when `href` is set.
   */
  download?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * When set, the component renders as an anchor navigating to this URL. Otherwise, provide a slotted anchor element, but not both. Without either, it renders as plain text.
   */
  href?: string;
  /**
   * Sets the icon displayed next to the link label. Use `none` to show no icon.
   * @default 'none'
   */
  icon?: LinkIcon;
  /**
   * Sets a path to a custom SVG icon, used instead of the built-in icon set.
   */
  iconSource?: string;
  /**
   * Sets the `rel` attribute on the link (e.g. `noopener`). Only applies when `href` is set.
   */
  rel?: string;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`). Only applies when `href` is set.
   * @default '_self'
   */
  target?: LinkTarget;
  /**
   * Sets the visual style variant of the link (`primary` or `secondary`).
   * @default 'primary'
   */
  variant?: LinkVariant;
};
export declare class PLink extends BaseComponent {
  aria?: SelectedAriaAttributes<LinkAriaAttribute>;
  compact?: BreakpointCustomizable<boolean>;
  download?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  href?: string;
  icon?: LinkIcon;
  iconSource?: string;
  rel?: string;
  target?: LinkTarget;
  variant?: LinkVariant;
  static ɵfac: i0.ɵɵFactoryDeclaration<PLink, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PLink, "p-link,[p-link]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "download": {
      "alias": "download";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "rel": {
      "alias": "rel";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
    "variant": {
      "alias": "variant";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace link_pure_wrapper_d_exports {
  export { PLinkPure, PLinkPureProps };
}
export type PLinkPureProps = {
  /**
   * Visually marks the link as the currently active navigation item, e.g. the current page.
   * @default false
   */
  active?: boolean;
  /**
   * Sets the label position relative to the icon — `start` places it before, `end` places it after. Supports responsive breakpoint values.
   * @default 'end'
   */
  alignLabel?: BreakpointCustomizable<LinkPureAlignLabel>;
  /**
   * Sets ARIA attributes on the link element to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<LinkPureAriaAttribute>;
  /**
   * Sets the foreground color of the link's icon and label text.
   * @default 'primary'
   */
  color?: LinkPureColor;
  /**
   * Sets the native `download` attribute to trigger a file download. Only applies when `href` is set.
   */
  download?: string;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * When set, the component renders as an anchor navigating to this URL. Otherwise, provide a slotted anchor element, but not both. Without either, it renders as plain text.
   */
  href?: string;
  /**
   * Sets the icon displayed next to the label.
   * @default 'arrow-right'
   */
  icon?: LinkPureIcon;
  /**
   * Sets a path to a custom SVG icon, used instead of the built-in icon set.
   */
  iconSource?: string;
  /**
   * Sets the `rel` attribute on the link (e.g. `noopener`). Only applies when `href` is set.
   */
  rel?: string;
  /**
   * Sets the font size of the link label. Supports responsive breakpoint values.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<LinkPureSize>;
  /**
   * Expands the space between icon and label to fill the full container width. Supports responsive breakpoint values.
   * @default false
   */
  stretch?: BreakpointCustomizable<boolean>;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`). Only applies when `href` is set.
   * @default '_self'
   */
  target?: LinkPureTarget;
  /**
   * Adds a text underline to the label to reinforce its link-like appearance.
   * @default false
   */
  underline?: boolean;
};
export declare class PLinkPure extends BaseComponent {
  active?: boolean;
  alignLabel?: BreakpointCustomizable<LinkPureAlignLabel>;
  aria?: SelectedAriaAttributes<LinkPureAriaAttribute>;
  color?: LinkPureColor;
  download?: string;
  hideLabel?: BreakpointCustomizable<boolean>;
  href?: string;
  icon?: LinkPureIcon;
  iconSource?: string;
  rel?: string;
  size?: BreakpointCustomizable<LinkPureSize>;
  stretch?: BreakpointCustomizable<boolean>;
  target?: LinkPureTarget;
  underline?: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<PLinkPure, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PLinkPure, "p-link-pure,[p-link-pure]", never, {
    "active": {
      "alias": "active";
      "required": false;
    };
    "alignLabel": {
      "alias": "alignLabel";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "download": {
      "alias": "download";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "rel": {
      "alias": "rel";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
    "underline": {
      "alias": "underline";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace link_tile_wrapper_d_exports {
  export { PLinkTile, PLinkTileProps };
}
export type PLinkTileProps = {
  /**
   * Controls the vertical placement of the description and link — `top` or `bottom`.
   * @default 'bottom'
   */
  align?: LinkTileAlign;
  /**
   * Sets ARIA attributes on the tile's anchor element to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<LinkTileAriaAttribute>;
  /**
   * Sets the width-to-height ratio of the tile media area. Supports responsive breakpoint values.
   * @default '4/3'
   */
  aspectRatio?: BreakpointCustomizable<LinkTileAspectRatio>;
  /**
   * Renders only the icon link without the full label. Supports responsive breakpoint values.
   * @default false
   */
  compact?: BreakpointCustomizable<boolean>;
  /**
   * Sets the description text displayed in the tile's content area.
   */
  description: string;
  /**
   * Sets the native `download` attribute to trigger a file download.
   */
  download?: string;
  /**
   * Shows a gradient overlay over the media slot to improve text legibility on bright images or videos.
   * @default false
   */
  gradient?: boolean;
  /**
   * Sets the URL the tile's anchor element navigates to when clicked.
   */
  href: string;
  /**
   * Sets the accessible label text of the link rendered inside the tile.
   */
  label: string;
  /**
   * Sets the `rel` attribute on the link (e.g. `noopener`).
   */
  rel?: string;
  /**
   * Sets the font size of the description text in the tile content area. Supports responsive breakpoint values.
   * @default 'medium'
   */
  size?: BreakpointCustomizable<LinkTileSize>;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`).
   * @default '_self'
   */
  target?: LinkTileTarget;
  /**
   * Sets the font weight of the description text in the tile content area. Supports responsive breakpoint values.
   * @default 'semi-bold'
   */
  weight?: BreakpointCustomizable<LinkTileWeight>;
};
export declare class PLinkTile extends BaseComponent {
  align?: LinkTileAlign;
  aria?: SelectedAriaAttributes<LinkTileAriaAttribute>;
  aspectRatio?: BreakpointCustomizable<LinkTileAspectRatio>;
  compact?: BreakpointCustomizable<boolean>;
  description: string;
  download?: string;
  gradient?: boolean;
  href: string;
  label: string;
  rel?: string;
  size?: BreakpointCustomizable<LinkTileSize>;
  target?: LinkTileTarget;
  weight?: BreakpointCustomizable<LinkTileWeight>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PLinkTile, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PLinkTile, "p-link-tile,[p-link-tile]", never, {
    "align": {
      "alias": "align";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "aspectRatio": {
      "alias": "aspectRatio";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "download": {
      "alias": "download";
      "required": false;
    };
    "gradient": {
      "alias": "gradient";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "rel": {
      "alias": "rel";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace link_tile_product_wrapper_d_exports {
  export { PLinkTileProduct, PLinkTileProductProps };
}
export type PLinkTileProductProps = {
  /**
   * Sets the width-to-height ratio of the tile media area. Supports responsive breakpoint values.
   * @default '3/4'
   */
  aspectRatio?: BreakpointCustomizable<LinkTileProductAspectRatio>;
  /**
   * Sets an optional short description providing additional product details below the price.
   */
  description?: string;
  /**
   * Sets the product name displayed prominently at the top of the tile.
   */
  heading: string;
  /**
   * Sets the URL the tile navigates to when clicked. Alternatively, provide a slotted anchor element, which is not rendered when `href` is set.
   */
  href?: string;
  /**
   * Shows a like/bookmark button so users can save the product.
   * @default true
   */
  likeButton?: boolean;
  /**
   * Reflects whether the product is currently liked — controls the filled state of the like button.
   * @default false
   */
  liked?: boolean;
  /**
   * Sets the current retail price of the product, displayed with or without a discount.
   */
  price: string;
  /**
   * Sets the original recommended retail price shown with a strikethrough to indicate a discount. Requires `price` to be set.
   */
  priceOriginal?: string;
  /**
   * Sets the `rel` attribute on the link (e.g. `noopener`).
   */
  rel?: string;
  /**
   * Specifies where to open the linked URL (e.g. `_self`, `_blank`).
   * @default '_self'
   */
  target?: LinkTileProductTarget;
};
export declare class PLinkTileProduct extends BaseComponent {
  aspectRatio?: BreakpointCustomizable<LinkTileProductAspectRatio>;
  description?: string;
  heading: string;
  href?: string;
  likeButton?: boolean;
  liked?: boolean;
  price: string;
  priceOriginal?: string;
  rel?: string;
  target?: LinkTileProductTarget;
  like: EventEmitter<CustomEvent<LinkTileProductLikeEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PLinkTileProduct, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PLinkTileProduct, "p-link-tile-product,[p-link-tile-product]", never, {
    "aspectRatio": {
      "alias": "aspectRatio";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "heading": {
      "alias": "heading";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "likeButton": {
      "alias": "likeButton";
      "required": false;
    };
    "liked": {
      "alias": "liked";
      "required": false;
    };
    "price": {
      "alias": "price";
      "required": false;
    };
    "priceOriginal": {
      "alias": "priceOriginal";
      "required": false;
    };
    "rel": {
      "alias": "rel";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
  }, {
    "like": "like";
  }, never, ["*"], false, never>;
}
declare namespace modal_wrapper_d_exports {
  export { PModal, PModalProps };
}
export type PModalProps = {
  /**
   * Sets ARIA attributes on the dialog element for improved accessibility when no visible heading is present.
   */
  aria?: SelectedAriaAttributes<ModalAriaAttribute>;
  /**
   * Sets the backdrop style. Use `blur` when the modal is opened by user interaction; use `shading` when opened automatically (e.g. Cookie Consent).
   * @default 'blur'
   */
  backdrop?: ModalBackdrop;
  /**
   * Sets the background color of the modal panel (`canvas` or `surface`).
   * @default 'canvas'
   */
  background?: ModalBackground;
  /**
   * When enabled, clicking the backdrop will not close the modal.
   * @default false
   */
  disableBackdropClick?: boolean;
  /**
   * Shows a dismiss button in the modal header so the user can manually close it.
   * @default true
   */
  dismissButton?: boolean;
  /**
   * Expands the modal to the full viewport size, intended for mobile use cases. Supports responsive breakpoint values.
   * @default false
   */
  fullscreen?: BreakpointCustomizable<boolean>;
  /**
   * Controls whether the modal dialog is visible.
   * @default false
   */
  open: boolean;
};
export declare class PModal extends BaseComponent {
  aria?: SelectedAriaAttributes<ModalAriaAttribute>;
  backdrop?: ModalBackdrop;
  background?: ModalBackground;
  disableBackdropClick?: boolean;
  dismissButton?: boolean;
  fullscreen?: BreakpointCustomizable<boolean>;
  open: boolean;
  dismiss: EventEmitter<CustomEvent<import("@porsche-design-system/components-angular").DialogDismissEventDetail>>;
  motionHiddenEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  motionVisibleEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PModal, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PModal, "p-modal,[p-modal]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "backdrop": {
      "alias": "backdrop";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "disableBackdropClick": {
      "alias": "disableBackdropClick";
      "required": false;
    };
    "dismissButton": {
      "alias": "dismissButton";
      "required": false;
    };
    "fullscreen": {
      "alias": "fullscreen";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
    "motionHiddenEnd": "motionHiddenEnd";
    "motionVisibleEnd": "motionVisibleEnd";
  }, never, ["*"], false, never>;
}
declare namespace model_signature_wrapper_d_exports {
  export { PModelSignature, PModelSignatureProps };
}
export type PModelSignatureProps = {
  /**
   * Sets the fill color of the signature using PDS color tokens.
   * @default 'primary'
   */
  color?: ModelSignatureColor;
  /**
   * Sets the browser's fetch priority hint for the signature asset (`auto`, `high`, `low`).
   * @default 'auto'
   */
  fetchPriority?: ModelSignatureFetchPriority;
  /**
   * Defers loading the signature until it enters the viewport to improve initial page performance.
   * @default false
   */
  lazy?: boolean;
  /**
   * Selects the Porsche model whose typographic signature SVG is displayed.
   * @default '911'
   */
  model?: ModelSignatureModel;
  /**
   * When enabled, adds invisible padding so all model signatures visually align to a consistent baseline.
   * @default true
   */
  safeZone?: boolean;
  /**
   * Sets the display size of the signature using predefined PDS sizes. Use `inherit` with a CSS `width` or `height` on the host for custom sizing.
   * @default 'small'
   */
  size?: ModelSignatureSize;
};
export declare class PModelSignature extends BaseComponent {
  color?: ModelSignatureColor;
  fetchPriority?: ModelSignatureFetchPriority;
  lazy?: boolean;
  model?: ModelSignatureModel;
  safeZone?: boolean;
  size?: ModelSignatureSize;
  static ɵfac: i0.ɵɵFactoryDeclaration<PModelSignature, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PModelSignature, "p-model-signature,[p-model-signature]", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "fetchPriority": {
      "alias": "fetchPriority";
      "required": false;
    };
    "lazy": {
      "alias": "lazy";
      "required": false;
    };
    "model": {
      "alias": "model";
      "required": false;
    };
    "safeZone": {
      "alias": "safeZone";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace multi_select_option_wrapper_d_exports {
  export { PMultiSelectOption, PMultiSelectOptionProps };
}
export type PMultiSelectOptionProps = {
  /**
   * Disables the option, preventing it from being selected.
   * @default false
   */
  disabled?: boolean;
  /**
   * Sets the required option value submitted with the form data when selected. Must be a string or number.
   */
  value: string | number;
};
export declare class PMultiSelectOption extends BaseComponent {
  disabled?: boolean;
  value: string | number;
  static ɵfac: i0.ɵɵFactoryDeclaration<PMultiSelectOption, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PMultiSelectOption, "p-multi-select-option,[p-multi-select-option]", never, {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace optgroup_wrapper_d_exports {
  export { POptgroup, POptgroupProps };
}
export type POptgroupProps = {
  /**
   * Disables all options in the group, preventing any of them from being selected.
   * @default false
   */
  disabled?: boolean;
  /**
   * Sets the visible group heading displayed above the grouped options.
   */
  label?: string;
};
export declare class POptgroup extends BaseComponent {
  disabled?: boolean;
  label?: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<POptgroup, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<POptgroup, "p-optgroup,[p-optgroup]", never, {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace pagination_wrapper_d_exports {
  export { PPagination, PPaginationProps };
}
export type PPaginationProps = {
  /**
   * Sets the one-based index of the currently active page; update this prop to navigate programmatically.
   * @default 1
   */
  activePage: number;
  /**
   * Overrides the default ARIA label strings used for the previous, next, and page number buttons to support localisation.
   * @default {   root: 'Pagination',   prev: 'Previous page',   next: 'Next page',   page: 'Page',   }
   */
  intl?: PaginationInternationalization;
  /**
   * Sets the number of items displayed per page, used together with `totalItemsCount` to compute the page count.
   * @default 1
   */
  itemsPerPage?: number;
  /**
   * Shows or hides the button that jumps directly to the last page of the pagination.
   * @default true
   */
  showLastPage?: boolean;
  /**
   * Sets the total number of items in the dataset, used to calculate the number of pages.
   * @default 1
   */
  totalItemsCount: number;
};
export declare class PPagination extends BaseComponent {
  activePage: number;
  intl?: PaginationInternationalization;
  itemsPerPage?: number;
  showLastPage?: boolean;
  totalItemsCount: number;
  update: EventEmitter<CustomEvent<PaginationUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PPagination, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PPagination, "p-pagination,[p-pagination]", never, {
    "activePage": {
      "alias": "activePage";
      "required": false;
    };
    "intl": {
      "alias": "intl";
      "required": false;
    };
    "itemsPerPage": {
      "alias": "itemsPerPage";
      "required": false;
    };
    "showLastPage": {
      "alias": "showLastPage";
      "required": false;
    };
    "totalItemsCount": {
      "alias": "totalItemsCount";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace popover_wrapper_d_exports {
  export { PPopover, PPopoverProps };
}
export type PPopoverProps = {
  /**
   * Sets ARIA attributes on the popover panel to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<PopoverAriaAttribute>;
  /**
   * Reduces padding and spacing for a more compact layout, useful in space-constrained interfaces.
   */
  compact?: boolean;
  /**
   * Sets the text content displayed inside the popover panel when it is open, providing contextual help or information. Takes precedence over the default slot when both are provided.
   */
  description?: string;
  /**
   * Sets the preferred direction for the popover to open relative to its trigger button. Falls back to the direction with the most available viewport space.
   * @default 'bottom'
   */
  direction?: PopoverDirection;
  /**
   * Controls whether the popover is visible. When set (controlled mode), visibility follows this prop and the consumer owns the open state via a slotted `button`. When omitted (uncontrolled mode), the component manages visibility itself.
   */
  open?: boolean;
};
export declare class PPopover extends BaseComponent {
  aria?: SelectedAriaAttributes<PopoverAriaAttribute>;
  compact?: boolean;
  description?: string;
  direction?: PopoverDirection;
  open?: boolean;
  dismiss: EventEmitter<CustomEvent<PopoverDismissEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PPopover, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PPopover, "p-popover,[p-popover]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
  }, never, ["*"], false, never>;
}
declare namespace radio_group_option_wrapper_d_exports {
  export { PRadioGroupOption, PRadioGroupOptionProps };
}
export type PRadioGroupOptionProps = {
  /**
   * Prevents this option from being selected and excludes its value from form submissions while it is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Sets the visible label text displayed next to the radio button that the user reads to identify the option.
   */
  label?: string;
  /**
   * @experimental Disables this option and shows a spinner to indicate that this particular option is in a loading state.
   * @default false
   */
  loading?: boolean;
  /**
   * Sets the required option value. Must be a string or number and is selected when it strictly matches the parent `p-radio-group` value by type and value.
   */
  value: string | number;
};
export declare class PRadioGroupOption extends BaseComponent {
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  value: string | number;
  static ɵfac: i0.ɵɵFactoryDeclaration<PRadioGroupOption, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PRadioGroupOption, "p-radio-group-option,[p-radio-group-option]", never, {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace scroller_wrapper_d_exports {
  export { PScroller, PScrollerProps };
}
export type PScrollerProps = {
  /**
   * @deprecated since v4.0.0, will be removed with next major release, has no effect anymore.
   * @default 'center'
   */
  alignScrollIndicator?: ScrollerAlignScrollIndicator;
  /**
   * Sets ARIA role and attributes on the scroller's scroll container, useful for tablist navigation patterns and additional accessibility context.
   */
  aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
  /**
   * Reduces the scroller's padding and the gap between slotted items for use in dense layouts.
   */
  compact?: boolean;
  /**
   * @deprecated since v4.0.0, use native `scrollIntoView()` on the slotted element itself.
   */
  scrollToPosition?: ScrollerScrollToPosition;
  /**
   * Shows the browser's native scrollbar inside the scroller, in addition to the scroll indicator arrows.
   * @default false
   */
  scrollbar?: boolean;
  /**
   * @experimental Makes the indicator sticky at the top or bottom while scrolling depending on the scroll direction.
   * @default false
   */
  sticky?: boolean;
};
export declare class PScroller extends BaseComponent {
  /** @deprecated */
  alignScrollIndicator?: ScrollerAlignScrollIndicator;
  aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
  compact?: boolean;
  /** @deprecated */
  scrollToPosition?: ScrollerScrollToPosition;
  scrollbar?: boolean;
  sticky?: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<PScroller, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PScroller, "p-scroller,[p-scroller]", never, {
    "alignScrollIndicator": {
      "alias": "alignScrollIndicator";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "scrollToPosition": {
      "alias": "scrollToPosition";
      "required": false;
    };
    "scrollbar": {
      "alias": "scrollbar";
      "required": false;
    };
    "sticky": {
      "alias": "sticky";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace segmented_control_item_wrapper_d_exports {
  export { PSegmentedControlItem, PSegmentedControlItemProps };
}
export type PSegmentedControlItemProps = {
  /**
   * Sets ARIA attributes on the item's button element to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<SegmentedControlItemAriaAttribute>;
  /**
   * Prevents this item from being selected and visually dims it; the parent's value will not change to this item's value.
   * @default false
   */
  disabled?: boolean;
  /**
   * Sets an icon rendered inside the item button using an icon name from the PDS icon library.
   */
  icon?: SegmentedControlItemIcon;
  /**
   * Sets a URL to a custom SVG icon for the item button, overriding the built-in icon set.
   */
  iconSource?: string;
  /**
   * Sets a visible text label rendered inside the item button, used when no slotted content is provided.
   */
  label?: string;
  /**
   * Sets the value emitted by the parent `p-segmented-control` when this item is selected. This property is **required**.
   */
  value: string | number;
};
export declare class PSegmentedControlItem extends BaseComponent {
  aria?: SelectedAriaAttributes<SegmentedControlItemAriaAttribute>;
  disabled?: boolean;
  icon?: SegmentedControlItemIcon;
  iconSource?: string;
  label?: string;
  value: string | number;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSegmentedControlItem, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSegmentedControlItem, "p-segmented-control-item,[p-segmented-control-item]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace select_option_wrapper_d_exports {
  export { PSelectOption, PSelectOptionProps };
}
export type PSelectOptionProps = {
  /**
   * Prevents the option from being selected and visually dims it to indicate it is unavailable.
   * @default false
   */
  disabled?: boolean;
  /**
   * Sets the value submitted with the form data when this option is selected in the parent select control.
   */
  value?: string | number | null;
};
export declare class PSelectOption extends BaseComponent {
  disabled?: boolean;
  value?: string | number | null;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSelectOption, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSelectOption, "p-select-option,[p-select-option]", never, {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace sheet_wrapper_d_exports {
  export { PSheet, PSheetProps };
}
export type PSheetProps = {
  /**
   * Sets ARIA attributes on the sheet dialog element for improved accessibility when the default `aria-label` is insufficient.
   */
  aria?: SelectedAriaAttributes<SheetAriaAttribute>;
  /**
   * Sets the background color of the sheet panel (`canvas` or `surface`).
   * @default 'canvas'
   */
  background?: SheetBackground;
  /**
   * When enabled, clicking the backdrop will not close the sheet.
   * @default false
   */
  disableBackdropClick?: boolean;
  /**
   * Shows a dismiss button in the sheet header so users can manually close it.
   * @default true
   */
  dismissButton?: boolean;
  /**
   * Controls whether the sheet panel slides in from the bottom and is visible to the user.
   * @default false
   */
  open: boolean;
};
export declare class PSheet extends BaseComponent {
  aria?: SelectedAriaAttributes<SheetAriaAttribute>;
  background?: SheetBackground;
  disableBackdropClick?: boolean;
  dismissButton?: boolean;
  open: boolean;
  dismiss: EventEmitter<CustomEvent<import("@porsche-design-system/components-angular").DialogDismissEventDetail>>;
  motionHiddenEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  motionVisibleEnd: EventEmitter<CustomEvent<TransitionEvent>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSheet, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSheet, "p-sheet,[p-sheet]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "disableBackdropClick": {
      "alias": "disableBackdropClick";
      "required": false;
    };
    "dismissButton": {
      "alias": "dismissButton";
      "required": false;
    };
    "open": {
      "alias": "open";
      "required": false;
    };
  }, {
    "dismiss": "dismiss";
    "motionHiddenEnd": "motionHiddenEnd";
    "motionVisibleEnd": "motionVisibleEnd";
  }, never, ["*"], false, never>;
}
declare namespace spinner_wrapper_d_exports {
  export { PSpinner, PSpinnerProps };
}
export type PSpinnerProps = {
  /**
   * Sets ARIA attributes on the spinner's live region element; use `aria-label` to provide a descriptive loading message for screen readers.
   */
  aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
  /**
   * Sets the color of the spinning indicator using PDS semantic color tokens (e.g. `primary`, `contrast-high`, `inherit`).
   * @default 'primary'
   */
  color?: SpinnerColor;
  /**
   * Sets the size of the spinner using the PDS typographic scale. Use `inherit` to derive the size from the parent element's font-size. Supports responsive breakpoint values.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<SpinnerSize>;
};
export declare class PSpinner extends BaseComponent {
  aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
  color?: SpinnerColor;
  size?: BreakpointCustomizable<SpinnerSize>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSpinner, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSpinner, "p-spinner,[p-spinner]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace stepper_horizontal_wrapper_d_exports {
  export { PStepperHorizontal, PStepperHorizontalProps };
}
export type PStepperHorizontalProps = {
  size?: BreakpointCustomizable<StepperHorizontalSize>;
};
export declare class PStepperHorizontal extends BaseComponent {
  size?: BreakpointCustomizable<StepperHorizontalSize>;
  update: EventEmitter<CustomEvent<StepperHorizontalUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PStepperHorizontal, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PStepperHorizontal, "p-stepper-horizontal,[p-stepper-horizontal]", never, {
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace stepper_horizontal_item_wrapper_d_exports {
  export { PStepperHorizontalItem, PStepperHorizontalItemProps };
}
export type PStepperHorizontalItemProps = {
  /**
   * Disables the stepper-horizontal-item. No events will be triggered while disabled state is active.
   * @default false
   */
  disabled?: boolean;
  /**
   * The current progression state of the step. Use `current` for the active step, `complete` for finished steps, `warning` for steps with issues. Leave unset for future steps.
   */
  state?: StepperHorizontalItemState;
};
export declare class PStepperHorizontalItem extends BaseComponent {
  disabled?: boolean;
  state?: StepperHorizontalItemState;
  static ɵfac: i0.ɵɵFactoryDeclaration<PStepperHorizontalItem, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PStepperHorizontalItem, "p-stepper-horizontal-item,[p-stepper-horizontal-item]", never, {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "state": {
      "alias": "state";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace switch_wrapper_d_exports {
  export { PSwitch, PSwitchProps };
}
export type PSwitchProps = {
  /**
   * Sets the position of the slotted label relative to the switch toggle, either before (`start`) or after (`end`) it. Supports responsive breakpoint values.
   * @default 'end'
   */
  alignLabel?: BreakpointCustomizable<SwitchAlignLabel>;
  /**
   * Sets additional ARIA attributes on the switch to improve accessibility for screen readers.
   */
  aria?: SelectedAriaAttributes<SwitchAriaAttribute>;
  /**
   * Reflects the switch's current on/off state and allows setting the initial checked value when the component first renders.
   * @default false
   */
  checked?: boolean;
  /**
   * Reduces the switch size and spacing for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Prevents user interaction with the switch and blocks all click and keyboard events while it is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Hides the visible label while keeping it accessible to screen readers. Supports responsive breakpoint values.
   * @default false
   */
  hideLabel?: BreakpointCustomizable<boolean>;
  /**
   * Disables the switch and shows a loading spinner to indicate an ongoing asynchronous toggle operation.
   * @default false
   */
  loading?: boolean;
  /**
   * Expands the space between the switch toggle and its label to fill the full available width of the container. Supports responsive breakpoint values.
   * @default false
   */
  stretch?: BreakpointCustomizable<boolean>;
};
export declare class PSwitch extends BaseComponent {
  alignLabel?: BreakpointCustomizable<SwitchAlignLabel>;
  aria?: SelectedAriaAttributes<SwitchAriaAttribute>;
  checked?: boolean;
  compact?: boolean;
  disabled?: boolean;
  hideLabel?: BreakpointCustomizable<boolean>;
  loading?: boolean;
  stretch?: BreakpointCustomizable<boolean>;
  update: EventEmitter<CustomEvent<SwitchUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PSwitch, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PSwitch, "p-switch,[p-switch]", never, {
    "alignLabel": {
      "alias": "alignLabel";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "checked": {
      "alias": "checked";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace table_wrapper_d_exports {
  export { PTable, PTableProps };
}
export type PTableProps = {
  /**
   * Sets a screen-reader-only accessible caption that describes the table's content; it is not visible in the browser. Use an element with `slot="caption"` for a visible caption instead.
   */
  caption?: string;
  /**
   * Reduces the cell padding and spacing for a more condensed table layout in data-dense UIs.
   * @default false
   */
  compact?: boolean;
  /**
   * Controls the CSS `table-layout` algorithm: `auto` sizes columns to fit their content, `fixed` distributes width equally.
   * @default 'auto'
   */
  layout?: TableLayout;
  /**
   * @experimental Makes the scroll position indicator sticky at the viewport edge while scrolling, indicating overflow in the table.
   * @default false
   */
  sticky?: boolean;
};
export declare class PTable extends BaseComponent {
  caption?: string;
  compact?: boolean;
  layout?: TableLayout;
  sticky?: boolean;
  update: EventEmitter<CustomEvent<import("@porsche-design-system/components-angular").TableHeadCellSort>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTable, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTable, "p-table,[p-table]", never, {
    "caption": {
      "alias": "caption";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "layout": {
      "alias": "layout";
      "required": false;
    };
    "sticky": {
      "alias": "sticky";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace table_cell_wrapper_d_exports {
  export { PTableCell, PTableCellProps };
}
export type PTableCellProps = {
  /**
   * Allows slotted text to wrap onto multiple lines instead of being forced onto a single line.
   * @default false
   */
  multiline?: boolean;
};
export declare class PTableCell extends BaseComponent {
  multiline?: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableCell, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableCell, "p-table-cell,[p-table-cell]", never, {
    "multiline": {
      "alias": "multiline";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace table_head_wrapper_d_exports {
  export { PTableHead, PTableHeadProps };
}
export type PTableHeadProps = {};
export declare class PTableHead extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableHead, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableHead, "p-table-head,[p-table-head]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace table_head_cell_wrapper_d_exports {
  export { PTableHeadCell, PTableHeadCellProps };
}
export type PTableHeadCellProps = {
  /**
   * Hides the visible column label while keeping it accessible to screen readers. Only applies when `sort` is not set.
   * @default false
   */
  hideLabel?: boolean;
  /**
   * Allows the column header text to wrap onto multiple lines instead of being truncated to a single line.
   * @default false
   */
  multiline?: boolean;
  /**
   * Configures sorting behavior for this column by providing an `id`, `active` state, and current `direction` (`asc` or `desc`).
   */
  sort?: TableHeadCellSort;
};
export declare class PTableHeadCell extends BaseComponent {
  hideLabel?: boolean;
  multiline?: boolean;
  sort?: TableHeadCellSort;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableHeadCell, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableHeadCell, "p-table-head-cell,[p-table-head-cell]", never, {
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
    };
    "multiline": {
      "alias": "multiline";
      "required": false;
    };
    "sort": {
      "alias": "sort";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace table_head_row_wrapper_d_exports {
  export { PTableHeadRow, PTableHeadRowProps };
}
export type PTableHeadRowProps = {};
export declare class PTableHeadRow extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableHeadRow, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableHeadRow, "p-table-head-row,[p-table-head-row]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace table_row_wrapper_d_exports {
  export { PTableRow, PTableRowProps };
}
export type PTableRowProps = {};
export declare class PTableRow extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PTableRow, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTableRow, "p-table-row,[p-table-row]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace tabs_wrapper_d_exports {
  export { PTabs, PTabsProps };
}
export type PTabsProps = {
  /**
   * Sets the zero-based index of the currently active tab; update this prop to switch tabs programmatically.
   * @default 0
   */
  activeTabIndex?: number;
  /**
   * Sets ARIA attributes on the tablist, such as `aria-label` and `aria-description`.
   */
  aria?: SelectedAriaAttributes<TabsAriaAttribute>;
  /**
   * Sets the background color of the tabs bar. Use `frosted` only when placed on top of images, videos, or gradients.
   * @default 'none'
   */
  background?: TabsBackground;
  /**
   * Reduces the tab height and padding for use in dense layouts where vertical space is limited.
   */
  compact?: boolean;
  /**
   * Sets the font size of the tab labels using the PDS typographic scale. Supports responsive breakpoint values.
   * @default 'small'
   */
  size?: BreakpointCustomizable<TabsSize>;
  /**
   * @deprecated Will be removed in the next major release. Has no effect anymore.
   * @default 'regular'
   */
  weight?: TabsWeight;
};
export declare class PTabs extends BaseComponent {
  activeTabIndex?: number;
  aria?: SelectedAriaAttributes<TabsAriaAttribute>;
  background?: TabsBackground;
  compact?: boolean;
  size?: BreakpointCustomizable<TabsSize>;
  /** @deprecated */
  weight?: TabsWeight;
  update: EventEmitter<CustomEvent<TabsUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTabs, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTabs, "p-tabs,[p-tabs]", never, {
    "activeTabIndex": {
      "alias": "activeTabIndex";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace tabs_bar_wrapper_d_exports {
  export { PTabsBar, PTabsBarProps };
}
export type PTabsBarProps = {
  /**
   * Sets the zero-based index of the currently active tab. Pass `undefined` to render all tabs in an unselected state.
   */
  activeTabIndex?: number | undefined;
  /**
   * Sets ARIA attributes on the tablist, such as `aria-label` and `aria-description`.
   */
  aria?: SelectedAriaAttributes<TabsBarAriaAttribute>;
  /**
   * Sets the background color of the tabs bar. Use `frosted` only when placed on top of images, videos, or gradients.
   * @default 'none'
   */
  background?: TabsBarBackground;
  /**
   * Reduces the tab height and padding for use in dense layouts where vertical space is limited.
   */
  compact?: boolean;
  /**
   * Sets the font size of the tab labels using the PDS typographic scale. Supports responsive breakpoint values.
   * @default 'small'
   */
  size?: BreakpointCustomizable<TabsBarSize>;
  /**
   * @deprecated Will be removed in the next major release. Has no effect anymore.
   * @default 'regular'
   */
  weight?: TabsBarWeight;
};
export declare class PTabsBar extends BaseComponent {
  activeTabIndex?: number | undefined;
  aria?: SelectedAriaAttributes<TabsBarAriaAttribute>;
  background?: TabsBarBackground;
  compact?: boolean;
  size?: BreakpointCustomizable<TabsBarSize>;
  /** @deprecated */
  weight?: TabsBarWeight;
  update: EventEmitter<CustomEvent<TabsBarUpdateEventDetail>>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTabsBar, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTabsBar, "p-tabs-bar,[p-tabs-bar]", never, {
    "activeTabIndex": {
      "alias": "activeTabIndex";
      "required": false;
    };
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {
    "update": "update";
  }, never, ["*"], false, never>;
}
declare namespace tabs_item_wrapper_d_exports {
  export { PTabsItem, PTabsItemProps };
}
export type PTabsItemProps = {
  /**
   * Sets the label text displayed in the tab navigation button that the user clicks to activate this tab's content.
   */
  label: string;
};
export declare class PTabsItem extends BaseComponent {
  label: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTabsItem, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTabsItem, "p-tabs-item,[p-tabs-item]", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace tag_wrapper_d_exports {
  export { PTag, PTagProps };
}
export type PTagProps = {
  /**
   * Reduces the tag's padding and height for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets the icon displayed inside the tag alongside the label. Use `none` to render the tag without an icon.
   * @default 'none'
   */
  icon?: TagIcon;
  /**
   * Sets a URL to a custom SVG icon, overriding the built-in icon set when a brand-specific icon is needed.
   */
  iconSource?: string;
  /**
   * Sets the visual style of the tag, which controls its background and text colors (e.g. `primary`, `secondary`, `notification-info`).
   * @default 'secondary'
   */
  variant?: TagVariant;
};
export declare class PTag extends BaseComponent {
  compact?: boolean;
  icon?: TagIcon;
  iconSource?: string;
  variant?: TagVariant;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTag, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTag, "p-tag,[p-tag]", never, {
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSource": {
      "alias": "iconSource";
      "required": false;
    };
    "variant": {
      "alias": "variant";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace tag_dismissible_wrapper_d_exports {
  export { PTagDismissible, PTagDismissibleProps };
}
export type PTagDismissibleProps = {
  /**
   * Sets ARIA attributes on the dismiss button element, for example use `aria-label` to provide a descriptive close action for screen readers.
   */
  aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
  /**
   * Reduces the tag's padding and height for use in dense layouts where vertical space is limited.
   * @default false
   */
  compact?: boolean;
  /**
   * Sets the visible label text displayed inside the tag alongside the dismiss button.
   */
  label?: string;
};
export declare class PTagDismissible extends BaseComponent {
  aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
  compact?: boolean;
  label?: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTagDismissible, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTagDismissible, "p-tag-dismissible,[p-tag-dismissible]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "compact": {
      "alias": "compact";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace text_wrapper_d_exports {
  export { PText, PTextProps };
}
export type PTextProps = {
  /**
   * Text alignment of the text. Use 'start' for left-aligned text (in LTR), 'center' for centered, 'end' for right-aligned (in LTR), or 'inherit' to adopt the parent's alignment.
   * @default 'start'
   */
  align?: TextAlign;
  /**
   * Text color of the text. Use 'primary' for default, 'contrast-higher' / 'contrast-high' / 'contrast-medium' for alternative emphasis levels, 'success' / 'warning' / 'error' / 'info' for status messages, or 'inherit' to adopt the parent's color.
   * @default 'primary'
   */
  color?: TextColor;
  /**
   * Adds an ellipsis to a single line of text if it overflows the container width. When enabled, the text is truncated to a single line with `text-overflow: ellipsis`. Cannot be combined with multi-line content.
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Controls the hyphenation behavior of the text. Use 'auto' to let the browser automatically hyphenate words at appropriate points, 'manual' to only hyphenate at manually inserted hyphenation points (e.g. `&shy;`), 'none' to disable hyphenation entirely, or 'inherit' to adopt the parent's hyphenation setting.
   * @default 'inherit'
   */
  hyphens?: TextHyphens;
  /**
   * Size of the text. Also defines the size for specific breakpoints, like {base: "sm", l: "md"}. You always need to provide a base value when doing this. Use 'inherit' to adopt the parent's font size.
   * @default 'sm'
   */
  size?: BreakpointCustomizable<TextSize>;
  /**
   * Sets the HTML tag of the rendered element to ensure correct semantic meaning (e.g. 'p' for paragraphs, 'blockquote' for quotes, 'time' for dates).
   * @default 'p'
   */
  tag?: TextTag;
  /**
   * The font weight of the text. Use 'normal' for regular body text, 'semibold' for slightly emphasized text, or 'bold' for strong emphasis.
   * @default 'normal'
   */
  weight?: TextWeight;
};
export declare class PText extends BaseComponent {
  align?: TextAlign;
  color?: TextColor;
  ellipsis?: boolean;
  hyphens?: TextHyphens;
  size?: BreakpointCustomizable<TextSize>;
  tag?: TextTag;
  weight?: TextWeight;
  static ɵfac: i0.ɵɵFactoryDeclaration<PText, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PText, "p-text,[p-text]", never, {
    "align": {
      "alias": "align";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "ellipsis": {
      "alias": "ellipsis";
      "required": false;
    };
    "hyphens": {
      "alias": "hyphens";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "tag": {
      "alias": "tag";
      "required": false;
    };
    "weight": {
      "alias": "weight";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace text_list_wrapper_d_exports {
  export { PTextList, PTextListProps };
}
export type PTextListProps = {
  /**
   * Sets the list type to either `unordered` (bulleted) or `ordered` (numbered), controlling the rendered HTML element (`ul` vs `ol`).
   * @default 'unordered'
   */
  type?: TextListType;
};
export declare class PTextList extends BaseComponent {
  type?: TextListType;
  static ɵfac: i0.ɵɵFactoryDeclaration<PTextList, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTextList, "p-text-list,[p-text-list]", never, {
    "type": {
      "alias": "type";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
declare namespace text_list_item_wrapper_d_exports {
  export { PTextListItem, PTextListItemProps };
}
export type PTextListItemProps = {};
export declare class PTextListItem extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PTextListItem, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PTextListItem, "p-text-list-item,[p-text-list-item]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace toast_wrapper_d_exports {
  export { PToast, PToastProps };
}
export type PToastProps = {};
export declare class PToast extends BaseComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<PToast, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PToast, "p-toast,[p-toast]", never, {}, {}, never, ["*"], false, never>;
}
declare namespace wordmark_wrapper_d_exports {
  export { PWordmark, PWordmarkProps };
}
export type PWordmarkProps = {
  /**
   * Sets ARIA attributes on the anchor element to improve accessibility when the wordmark is used as a link.
   */
  aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
  /**
   * When set, wraps the wordmark in an anchor element that navigates to the given URL on click.
   */
  href?: string;
  /**
   * Sets the display size of the Porsche wordmark SVG using predefined PDS size tokens.
   * @default 'small'
   */
  size?: WordmarkSize;
  /**
   * Specifies where to open the linked URL when `href` is set (e.g. `_self`, `_blank`).
   * @default '_self'
   */
  target?: WordmarkTarget;
};
export declare class PWordmark extends BaseComponent {
  aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
  href?: string;
  size?: WordmarkSize;
  target?: WordmarkTarget;
  static ɵfac: i0.ɵɵFactoryDeclaration<PWordmark, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PWordmark, "p-wordmark,[p-wordmark]", never, {
    "aria": {
      "alias": "aria";
      "required": false;
    };
    "href": {
      "alias": "href";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "target": {
      "alias": "target";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare const DECLARATIONS: (typeof PCheckbox | typeof PInputDate | typeof PInputEmail | typeof PInputMonth | typeof PInputNumber | typeof PInputPassword | typeof PInputSearch | typeof PInputTel | typeof PInputText | typeof PInputTime | typeof PInputUrl | typeof PInputWeek | typeof PMultiSelect | typeof PPinCode | typeof PRadioGroup | typeof PSegmentedControl | typeof PSelect | typeof PTableBody | typeof PTextarea)[];
type PorscheDesignSystemModuleConfig = {
  prefix?: string;
  cdn?: 'auto' | 'cn';
};
declare class DefaultConfig implements PorscheDesignSystemModuleConfig {
  prefix: string;
}
export declare class PorscheDesignSystemModule {
  constructor(configParam: DefaultConfig);
  static load(config: PorscheDesignSystemModuleConfig): ModuleWithProviders<PorscheDesignSystemModule>;
  static ɵfac: i0.ɵɵFactoryDeclaration<PorscheDesignSystemModule, [{
    optional: true;
  }]>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<PorscheDesignSystemModule, [typeof PAccordion, typeof PAiTag, typeof PBanner, typeof PButton, typeof PButtonPure, typeof PButtonTile, typeof PCanvas, typeof PCarousel, typeof PCheckbox, typeof PCrest, typeof PDisplay, typeof PDivider, typeof PDrilldown, typeof PDrilldownItem, typeof PDrilldownLink, typeof PFieldset, typeof PFlag, typeof PFlyout, typeof PHeading, typeof PIcon, typeof PInlineNotification, typeof PInputDate, typeof PInputEmail, typeof PInputMonth, typeof PInputNumber, typeof PInputPassword, typeof PInputSearch, typeof PInputTel, typeof PInputText, typeof PInputTime, typeof PInputUrl, typeof PInputWeek, typeof PLink, typeof PLinkPure, typeof PLinkTile, typeof PLinkTileProduct, typeof PModal, typeof PModelSignature, typeof PMultiSelect, typeof PMultiSelectOption, typeof POptgroup, typeof PPagination, typeof PPinCode, typeof PPopover, typeof PRadioGroup, typeof PRadioGroupOption, typeof PScroller, typeof PSegmentedControl, typeof PSegmentedControlItem, typeof PSelect, typeof PSelectOption, typeof PSheet, typeof PSpinner, typeof PStepperHorizontal, typeof PStepperHorizontalItem, typeof PSwitch, typeof PTable, typeof PTableBody, typeof PTableCell, typeof PTableHead, typeof PTableHeadCell, typeof PTableHeadRow, typeof PTableRow, typeof PTabs, typeof PTabsBar, typeof PTabsItem, typeof PTag, typeof PTagDismissible, typeof PText, typeof PTextList, typeof PTextListItem, typeof PTextarea, typeof PToast, typeof PWordmark], never, [typeof PAccordion, typeof PAiTag, typeof PBanner, typeof PButton, typeof PButtonPure, typeof PButtonTile, typeof PCanvas, typeof PCarousel, typeof PCheckbox, typeof PCrest, typeof PDisplay, typeof PDivider, typeof PDrilldown, typeof PDrilldownItem, typeof PDrilldownLink, typeof PFieldset, typeof PFlag, typeof PFlyout, typeof PHeading, typeof PIcon, typeof PInlineNotification, typeof PInputDate, typeof PInputEmail, typeof PInputMonth, typeof PInputNumber, typeof PInputPassword, typeof PInputSearch, typeof PInputTel, typeof PInputText, typeof PInputTime, typeof PInputUrl, typeof PInputWeek, typeof PLink, typeof PLinkPure, typeof PLinkTile, typeof PLinkTileProduct, typeof PModal, typeof PModelSignature, typeof PMultiSelect, typeof PMultiSelectOption, typeof POptgroup, typeof PPagination, typeof PPinCode, typeof PPopover, typeof PRadioGroup, typeof PRadioGroupOption, typeof PScroller, typeof PSegmentedControl, typeof PSegmentedControlItem, typeof PSelect, typeof PSelectOption, typeof PSheet, typeof PSpinner, typeof PStepperHorizontal, typeof PStepperHorizontalItem, typeof PSwitch, typeof PTable, typeof PTableBody, typeof PTableCell, typeof PTableHead, typeof PTableHeadCell, typeof PTableHeadRow, typeof PTableRow, typeof PTabs, typeof PTabsBar, typeof PTabsItem, typeof PTag, typeof PTagDismissible, typeof PText, typeof PTextList, typeof PTextListItem, typeof PTextarea, typeof PToast, typeof PWordmark]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<PorscheDesignSystemModule>;
}
export declare class ToastManager {
  addMessage(message: ToastMessage): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ToastManager, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export { type PorscheDesignSystemModuleConfig, componentsReady };