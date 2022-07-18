import { Component, Host, h, ComponentInterface, Element, Prop } from '@stencil/core';

export type ButtonVariant = 'solid' | 'hollow' | 'clear';

@Component({
  tag: 'awesome-button',
  styleUrls: {
    default: 'awesome-button.default.css',
  },
  shadow: true,
})
export class AwesomeButton implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeButtonElement;

  /**
   * Variant of the button. Default to `solid`.
   */
  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';

  /**
   * If presents, the button would act like an `a` tag using the given `href`.
   */
  @Prop({ reflect: true }) href?: string;

  /**
   * The flag of disabling the button. Default to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  render() {
    return (
      <Host>
        {this.href && <a href={this.href}></a>}
        <slot></slot>
      </Host>
    );
  }
}
