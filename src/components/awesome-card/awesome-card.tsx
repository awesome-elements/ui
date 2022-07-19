import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { renderHrefHandler } from '../../utils/href-handler';

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

  /**
   * If this presents and button is `true`, the card would act like an `a` tag using the given `href`.
   */
  @Prop({ reflect: true }) href?: string;

  render() {
    return (
      <Host>
        {this.href && renderHrefHandler(this.href)}
        <slot></slot>
      </Host>
    );
  }
}
