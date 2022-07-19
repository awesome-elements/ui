import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'awesome-item',
  styleUrls: {
    default: 'awesome-item.default.css',
  },
  shadow: true,
})
export class AwesomeItem implements ComponentInterface {
  /**
   * If `true`, the item would also act as a button. Default to `false`.
   */
  @Prop() button: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
