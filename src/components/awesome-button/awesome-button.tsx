import { Component, Host, h, ComponentInterface, Element, Prop } from '@stencil/core';

export type ButtonVariant = 'solid' | 'outline' | 'clear';

@Component({
  tag: 'awesome-button',
  styleUrls: {
    default: 'awesome-button.default.css',
  },
  shadow: true,
})
export class AwesomeButton implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeButtonElement;
  
  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';

  render() {
    return (
      <Host>
        <button id="native-element">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
