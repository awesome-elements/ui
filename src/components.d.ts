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
        "attachingElement": string | globalThis.Element;
        /**
          * Button definitions of the alert.
         */
        "buttons": AlertButtonDefinition[];
        /**
          * Header of the alert.
         */
        "header": string;
        /**
          * A flag to hide the alert. Default to `true`;
         */
        "hidden": boolean;
        /**
          * Message of the alert.
         */
        "message": string;
        /**
          * Present an aleret.
          * @param header Header of the alert.
          * @param message Message of the alert.
          * @param buttons Button definitions of the alert.
          * @param zIndex `z-index` of the alert.
          * @param attachingElement The element for alert to attach to.
          * @returns A funtion to dismiss the alert.
         */
        "present": (header: string, message: string, buttons?: AlertButtonDefinition[], zIndex?: number, attachingElement?: string | globalThis.Element) => Promise<() => void>;
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
    }
    interface AwesomeItem {
        /**
          * If `true`, the item would also act as a button. Default to `false`.
         */
        "button": boolean;
    }
    interface AwesomeSkeleton {
    }
}
export interface AwesomeInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAwesomeInputElement;
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
        "awesome-skeleton": HTMLAwesomeSkeletonElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeAlert {
        "attachingElement"?: string | globalThis.Element;
        /**
          * Button definitions of the alert.
         */
        "buttons"?: AlertButtonDefinition[];
        /**
          * Header of the alert.
         */
        "header"?: string;
        /**
          * A flag to hide the alert. Default to `true`;
         */
        "hidden"?: boolean;
        /**
          * Message of the alert.
         */
        "message"?: string;
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
          * Event of something is input.
         */
        "onAwesomeInput"?: (event: AwesomeInputCustomEvent<globalThis.Event>) => void;
        /**
          * Placeholder of the input.
         */
        "placeholder"?: string;
        /**
          * Type of the input. Default to `text`.
         */
        "type"?: InputType;
    }
    interface AwesomeItem {
        /**
          * If `true`, the item would also act as a button. Default to `false`.
         */
        "button"?: boolean;
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
            "awesome-skeleton": LocalJSX.AwesomeSkeleton & JSXBase.HTMLAttributes<HTMLAwesomeSkeletonElement>;
        }
    }
}
