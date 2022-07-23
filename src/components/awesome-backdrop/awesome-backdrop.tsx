import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'awesome-backdrop',
  styleUrls: ['awesome-backdrop.default.css'],
  shadow: true,
})
export class AwesomeBackdrop implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
