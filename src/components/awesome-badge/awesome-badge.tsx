import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'awesome-badge',
  styleUrls: {
    default: 'awesome-badge.default.css',
  },
  shadow: true,
})
export class AwesomeBadge implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
