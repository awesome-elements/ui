/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertButtonDefinition } from "./components/awesome-alert/awesome-alert";
import { ButtonVariant } from "./components/awesome-button/awesome-button";
import { InputType } from "./components/awesome-input/awesome-input";
export namespace Components {
    interface AwesomeAlert {
        /**
          * If `true`, the alert is displayed. Default to `false`;
         */
        "active": boolean;
        "attachingElement": string | globalThis.Element;
        /**
          * Button definitions of the alert.
         */
        "buttons": AlertButtonDefinition[];
        /**
          * Content of the alert. It can be HTML string.
         */
        "content": string;
        /**
          * Header of the alert.
         */
        "header": string;
        /**
          * Present an aleret.
          * @param header Header of the alert.
          * @param content Content of the alert. It can be HTML string.
          * @param buttons Button definitions of the alert.
          * @param zIndex `z-index` of the alert.
          * @param attachingElement The element for alert to attach to.
          * @returns A funtion to dismiss the alert.
         */
        "present": (header: string, content: string, buttons?: AlertButtonDefinition[], zIndex?: number, attachingElement?: string | globalThis.Element) => Promise<() => void>;
        /**
          * `z-index` of the alert.
         */
        "zIndex": number;
    }
    interface AwesomeBadge {
    }
    interface AwesomeButton {
        /**
          * The flag of disabling the button. Default to `false`.
         */
        "disabled": boolean;
        /**
          * If presents, the button would act like an `a` tag using the given `href`.
         */
        "href"?: string;
        /**
          * Variant of the button. Default to `solid`.
         */
        "variant": ButtonVariant;
    }
    interface AwesomeCard {
        /**
          * If `true`, the card would also act as a button. Default to `false`.
         */
        "button": boolean;
        /**
          * If this presents and button is `true`, the card would act like an `a` tag using the given `href`.
         */
        "href"?: string;
    }
    interface AwesomeDivider {
    }
    interface AwesomeInput {
        /**
          * The flag of disabling the input. Default to `false`.
         */
        "disabled": boolean;
        /**
          * Placeholder of the input.
         */
        "placeholder"?: string;
        /**
          * Type of the input. Default to `text`.
         */
        "type": InputType;
        /**
          * Value of the input.
         */
        "value"?: string;
    }
    interface AwesomeItem {
        /**
          * If `true`, the item would also act as a button. Default to `false`.
         */
        "button": boolean;
        /**
          * If this presents and button is `true`, the item would act like an `a` tag using the given `href`.
         */
        "href"?: string;
    }
    interface AwesomeProgressBar {
        /**
          * Progress of the bar. From `0` to `1`. Default to `0`;
         */
        "progress": number;
    }
    interface AwesomeRange {
        /**
          * Maximum number of the range. Default to `100`.
         */
        "max": number;
        /**
          * Minimum number of the range. Default to `0`.
         */
        "min": number;
        /**
          * Step of the range. Default to `""`.
         */
        "step": number | '' | 'any';
        /**
          * Value of the range. Default to `0`.
         */
        "value": number;
    }
    interface AwesomeSelect {
        /**
          * Placehold when no value is selected.
         */
        "placeholder": string;
        /**
          * Value of the select.
         */
        "value"?: string;
    }
    interface AwesomeSelectOption {
        "obtainActualValue": () => Promise<string>;
        "selected": boolean;
        /**
          * Value of the select option.
         */
        "value": string;
    }
    interface AwesomeSkeleton {
    }
}
export interface AwesomeInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAwesomeInputElement;
}
export interface AwesomeRangeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAwesomeRangeElement;
}
export interface AwesomeSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAwesomeSelectElement;
}
declare global {
    interface HTMLAwesomeAlertElement extends Components.AwesomeAlert, HTMLStencilElement {
    }
    var HTMLAwesomeAlertElement: {
        prototype: HTMLAwesomeAlertElement;
        new (): HTMLAwesomeAlertElement;
    };
    interface HTMLAwesomeBadgeElement extends Components.AwesomeBadge, HTMLStencilElement {
    }
    var HTMLAwesomeBadgeElement: {
        prototype: HTMLAwesomeBadgeElement;
        new (): HTMLAwesomeBadgeElement;
    };
    interface HTMLAwesomeButtonElement extends Components.AwesomeButton, HTMLStencilElement {
    }
    var HTMLAwesomeButtonElement: {
        prototype: HTMLAwesomeButtonElement;
        new (): HTMLAwesomeButtonElement;
    };
    interface HTMLAwesomeCardElement extends Components.AwesomeCard, HTMLStencilElement {
    }
    var HTMLAwesomeCardElement: {
        prototype: HTMLAwesomeCardElement;
        new (): HTMLAwesomeCardElement;
    };
    interface HTMLAwesomeDividerElement extends Components.AwesomeDivider, HTMLStencilElement {
    }
    var HTMLAwesomeDividerElement: {
        prototype: HTMLAwesomeDividerElement;
        new (): HTMLAwesomeDividerElement;
    };
    interface HTMLAwesomeInputElement extends Components.AwesomeInput, HTMLStencilElement {
    }
    var HTMLAwesomeInputElement: {
        prototype: HTMLAwesomeInputElement;
        new (): HTMLAwesomeInputElement;
    };
    interface HTMLAwesomeItemElement extends Components.AwesomeItem, HTMLStencilElement {
    }
    var HTMLAwesomeItemElement: {
        prototype: HTMLAwesomeItemElement;
        new (): HTMLAwesomeItemElement;
    };
    interface HTMLAwesomeProgressBarElement extends Components.AwesomeProgressBar, HTMLStencilElement {
    }
    var HTMLAwesomeProgressBarElement: {
        prototype: HTMLAwesomeProgressBarElement;
        new (): HTMLAwesomeProgressBarElement;
    };
    interface HTMLAwesomeRangeElement extends Components.AwesomeRange, HTMLStencilElement {
    }
    var HTMLAwesomeRangeElement: {
        prototype: HTMLAwesomeRangeElement;
        new (): HTMLAwesomeRangeElement;
    };
    interface HTMLAwesomeSelectElement extends Components.AwesomeSelect, HTMLStencilElement {
    }
    var HTMLAwesomeSelectElement: {
        prototype: HTMLAwesomeSelectElement;
        new (): HTMLAwesomeSelectElement;
    };
    interface HTMLAwesomeSelectOptionElement extends Components.AwesomeSelectOption, HTMLStencilElement {
    }
    var HTMLAwesomeSelectOptionElement: {
        prototype: HTMLAwesomeSelectOptionElement;
        new (): HTMLAwesomeSelectOptionElement;
    };
    interface HTMLAwesomeSkeletonElement extends Components.AwesomeSkeleton, HTMLStencilElement {
    }
    var HTMLAwesomeSkeletonElement: {
        prototype: HTMLAwesomeSkeletonElement;
        new (): HTMLAwesomeSkeletonElement;
    };
    interface HTMLElementTagNameMap {
        "awesome-alert": HTMLAwesomeAlertElement;
        "awesome-badge": HTMLAwesomeBadgeElement;
        "awesome-button": HTMLAwesomeButtonElement;
        "awesome-card": HTMLAwesomeCardElement;
        "awesome-divider": HTMLAwesomeDividerElement;
        "awesome-input": HTMLAwesomeInputElement;
        "awesome-item": HTMLAwesomeItemElement;
        "awesome-progress-bar": HTMLAwesomeProgressBarElement;
        "awesome-range": HTMLAwesomeRangeElement;
        "awesome-select": HTMLAwesomeSelectElement;
        "awesome-select-option": HTMLAwesomeSelectOptionElement;
        "awesome-skeleton": HTMLAwesomeSkeletonElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeAlert {
        /**
          * If `true`, the alert is displayed. Default to `false`;
         */
        "active"?: boolean;
        "attachingElement"?: string | globalThis.Element;
        /**
          * Button definitions of the alert.
         */
        "buttons"?: AlertButtonDefinition[];
        /**
          * Content of the alert. It can be HTML string.
         */
        "content"?: string;
        /**
          * Header of the alert.
         */
        "header"?: string;
        /**
          * `z-index` of the alert.
         */
        "zIndex"?: number;
    }
    interface AwesomeBadge {
    }
    interface AwesomeButton {
        /**
          * The flag of disabling the button. Default to `false`.
         */
        "disabled"?: boolean;
        /**
          * If presents, the button would act like an `a` tag using the given `href`.
         */
        "href"?: string;
        /**
          * Variant of the button. Default to `solid`.
         */
        "variant"?: ButtonVariant;
    }
    interface AwesomeCard {
        /**
          * If `true`, the card would also act as a button. Default to `false`.
         */
        "button"?: boolean;
        /**
          * If this presents and button is `true`, the card would act like an `a` tag using the given `href`.
         */
        "href"?: string;
    }
    interface AwesomeDivider {
    }
    interface AwesomeInput {
        /**
          * The flag of disabling the input. Default to `false`.
         */
        "disabled"?: boolean;
        /**
          * Event of content being changed.
         */
        "onAwesomeChange"?: (event: AwesomeInputCustomEvent<[{ value: string }, globalThis.Event]>) => void;
        /**
          * Event of something being input.
         */
        "onAwesomeInput"?: (event: AwesomeInputCustomEvent<InputEvent>) => void;
        /**
          * Placeholder of the input.
         */
        "placeholder"?: string;
        /**
          * Type of the input. Default to `text`.
         */
        "type"?: InputType;
        /**
          * Value of the input.
         */
        "value"?: string;
    }
    interface AwesomeItem {
        /**
          * If `true`, the item would also act as a button. Default to `false`.
         */
        "button"?: boolean;
        /**
          * If this presents and button is `true`, the item would act like an `a` tag using the given `href`.
         */
        "href"?: string;
    }
    interface AwesomeProgressBar {
        /**
          * Progress of the bar. From `0` to `1`. Default to `0`;
         */
        "progress"?: number;
    }
    interface AwesomeRange {
        /**
          * Maximum number of the range. Default to `100`.
         */
        "max"?: number;
        /**
          * Minimum number of the range. Default to `0`.
         */
        "min"?: number;
        /**
          * Event of value being changed.
         */
        "onAwesomeChange"?: (event: AwesomeRangeCustomEvent<[number, globalThis.Event]>) => void;
        /**
          * Event of value being input.
         */
        "onAwesomeInput"?: (event: AwesomeRangeCustomEvent<InputEvent>) => void;
        /**
          * Step of the range. Default to `""`.
         */
        "step"?: number | '' | 'any';
        /**
          * Value of the range. Default to `0`.
         */
        "value"?: number;
    }
    interface AwesomeSelect {
        /**
          * Event of value being changed.
         */
        "onAwesomeChange"?: (event: AwesomeSelectCustomEvent<string>) => void;
        /**
          * Placehold when no value is selected.
         */
        "placeholder"?: string;
        /**
          * Value of the select.
         */
        "value"?: string;
    }
    interface AwesomeSelectOption {
        "selected"?: boolean;
        /**
          * Value of the select option.
         */
        "value"?: string;
    }
    interface AwesomeSkeleton {
    }
    interface IntrinsicElements {
        "awesome-alert": AwesomeAlert;
        "awesome-badge": AwesomeBadge;
        "awesome-button": AwesomeButton;
        "awesome-card": AwesomeCard;
        "awesome-divider": AwesomeDivider;
        "awesome-input": AwesomeInput;
        "awesome-item": AwesomeItem;
        "awesome-progress-bar": AwesomeProgressBar;
        "awesome-range": AwesomeRange;
        "awesome-select": AwesomeSelect;
        "awesome-select-option": AwesomeSelectOption;
        "awesome-skeleton": AwesomeSkeleton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "awesome-alert": LocalJSX.AwesomeAlert & JSXBase.HTMLAttributes<HTMLAwesomeAlertElement>;
            "awesome-badge": LocalJSX.AwesomeBadge & JSXBase.HTMLAttributes<HTMLAwesomeBadgeElement>;
            "awesome-button": LocalJSX.AwesomeButton & JSXBase.HTMLAttributes<HTMLAwesomeButtonElement>;
            "awesome-card": LocalJSX.AwesomeCard & JSXBase.HTMLAttributes<HTMLAwesomeCardElement>;
            "awesome-divider": LocalJSX.AwesomeDivider & JSXBase.HTMLAttributes<HTMLAwesomeDividerElement>;
            "awesome-input": LocalJSX.AwesomeInput & JSXBase.HTMLAttributes<HTMLAwesomeInputElement>;
            "awesome-item": LocalJSX.AwesomeItem & JSXBase.HTMLAttributes<HTMLAwesomeItemElement>;
            "awesome-progress-bar": LocalJSX.AwesomeProgressBar & JSXBase.HTMLAttributes<HTMLAwesomeProgressBarElement>;
            "awesome-range": LocalJSX.AwesomeRange & JSXBase.HTMLAttributes<HTMLAwesomeRangeElement>;
            "awesome-select": LocalJSX.AwesomeSelect & JSXBase.HTMLAttributes<HTMLAwesomeSelectElement>;
            "awesome-select-option": LocalJSX.AwesomeSelectOption & JSXBase.HTMLAttributes<HTMLAwesomeSelectOptionElement>;
            "awesome-skeleton": LocalJSX.AwesomeSkeleton & JSXBase.HTMLAttributes<HTMLAwesomeSkeletonElement>;
        }
    }
}
