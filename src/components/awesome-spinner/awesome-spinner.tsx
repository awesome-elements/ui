import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'awesome-spinner',
  styleUrls: {
    default: 'awesome-spinner.default.css',
  },
  shadow: true,
})
export class AwesomeSpinner implements ComponentInterface {
  render() {
    return (
      <Host>
        <awesome-ratio-box part="ring" heightFactor={1} widthFactor={1}></awesome-ratio-box>
      </Host>
    );
  }
}
