import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'awesome-badge',
  styleUrls: {
    default: 'awesome-badge.default.css',
    soft: 'awesome-badge.soft.css',
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
