import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
  tag: 'awesome-backdrop',
  styleUrls: ['awesome-backdrop.default.css'],
  shadow: true,
})
export class AwesomeBackdrop implements ComponentInterface {
  /**
   * `z-index` of the alert.
   */
  @Prop({ reflect: true }) zIndex: number = 99;

  render() {
    return <Host style={{ zIndex: this.zIndex?.toString() }}></Host>;
  }
}
