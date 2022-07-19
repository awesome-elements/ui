import { Component, Host, h, ComponentInterface, Prop, Method, Element } from '@stencil/core';
import { ButtonVariant } from '../awesome-button/awesome-button';

export type AlertButtonDefinition = {
  name: string;
  variant?: ButtonVariant;
  handler?: () => void;
};

@Component({
  tag: 'awesome-alert',
  styleUrls: {
    default: 'awesome-alert.default.css',
  },
  shadow: true,
})
export class AwesomeAlert implements ComponentInterface {
  private readonly TAG_NAME = 'awesome-alert';
  private readonly DEFAULT_BUTTONS = [{ name: 'OK' }];
  private readonly DEFAULT_Z_INDEX = 999;
  private readonly DEFAULT_ATTACHING_ELEMENT = 'body';

  @Element() hostElement: HTMLAwesomeAlertElement;

  /**
   * Header of the alert.
   */
  @Prop({ reflect: true }) header: string;

  /**
   * Message of the alert.
   */
  @Prop({ reflect: true }) message: string;

  /**
   * Button definitions of the alert.
   */
  @Prop() buttons: AlertButtonDefinition[] = this.DEFAULT_BUTTONS;

  /**
   * A flag to hide the alert. Default to `true`;
   */
  @Prop({ reflect: true }) hidden: boolean = true;

  /**
   * `z-index` of the alert.
   */
  @Prop({ reflect: true }) zIndex: number = this.DEFAULT_Z_INDEX;

  /**
   * @internal
   * The element for alert to attach to.
   */
  @Prop() attachingElement: string | globalThis.Element = this.DEFAULT_ATTACHING_ELEMENT;

  /**
   * Present an aleret.
   * @param header Header of the alert.
   * @param message Message of the alert.
   * @param buttons Button definitions of the alert.
   * @param zIndex `z-index` of the alert.
   * @param attachingElement The element for alert to attach to.
   * @returns A funtion to dismiss the alert.
   */
  @Method()
  async present(
    header: string,
    message: string,
    buttons: AlertButtonDefinition[] = this.DEFAULT_BUTTONS,
    zIndex: number = this.DEFAULT_Z_INDEX,
    attachingElement: string | globalThis.Element = this.DEFAULT_ATTACHING_ELEMENT,
  ) {
    const alert = document.createElement(this.TAG_NAME);
    alert.header = header;
    alert.message = message;
    alert.buttons = buttons;
    alert.zIndex = zIndex;
    alert.attachingElement = attachingElement;
    this.obtainActualAttachingElement(alert.attachingElement)?.append(alert);
    alert.hidden = false;
    return alert.remove;
  }

  render() {
    return (
      <Host>
        {!this.hidden && (
          <awesome-flex>
            <awesome-flex-item xs={12}>
              <div part="header">{this.header}</div>
            </awesome-flex-item>
            <awesome-flex-item xs={12}>
              <div part="message">{this.message}</div>
            </awesome-flex-item>
            <awesome-flex-item>
              <awesome-flex>
                <awesome-flex-item></awesome-flex-item>
                {this.buttons?.map(button => (
                  <awesome-flex-item xs="auto">
                    <awesome-button variant={button.variant || 'solid'} onClick={this.obtainButtonClickHandler(button)} style={{ float: 'right' }}>
                      {button.name}
                    </awesome-button>
                  </awesome-flex-item>
                ))}
              </awesome-flex>
            </awesome-flex-item>
          </awesome-flex>
        )}
      </Host>
    );
  }

  private obtainButtonClickHandler(button: AlertButtonDefinition) {
    return () => {
      this.hostElement.remove();
      button?.handler?.();
    };
  }

  private obtainActualAttachingElement(element: string | globalThis.Element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    return element;
  }
}
