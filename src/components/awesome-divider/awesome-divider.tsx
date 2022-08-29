import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'awesome-divider',
  styleUrls: {
    default: 'awesome-divider.default.css',
    soft: 'awesome-divider.soft.css',
  },
  shadow: true,
})
export class AwesomeDivider implements ComponentInterface {
  render() {
    return (
      <Host>
        <div></div>
      </Host>
    );
  }
}
