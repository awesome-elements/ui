import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'awesome-card',
  styleUrls: {
    default: 'awesome-card.default.css',
  },
  shadow: true,
})
export class AwesomeCard implements ComponentInterface {
  /**
   * If `true`, the card would also act as a button. Default to `false`.
   */
  @Prop({ reflect: true }) button: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
