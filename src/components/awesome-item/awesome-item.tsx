import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { renderHrefHandler } from '../../utils/href-handler';

@Component({
  tag: 'awesome-item',
  styleUrls: {
    default: 'awesome-item.default.css',
    soft: 'awesome-item.soft.css',
  },
  shadow: true,
})
export class AwesomeItem implements ComponentInterface {
  /**
   * If `true`, the item would also act as a button. Default to `false`.
   */
  @Prop({ reflect: true }) button: boolean = false;

  /**
   * If this presents and button is `true`, the item would act like an `a` tag using the given `href`.
   */
  @Prop({ reflect: true }) href?: string;

  render() {
    return (
      <Host>
        {this.href && renderHrefHandler(this.href)}
        <awesome-flex>
          <awesome-flex-item xs="auto">
            <slot name="before"></slot>
          </awesome-flex-item>
          <awesome-flex-item part="main">
            <slot></slot>
          </awesome-flex-item>
          <awesome-flex-item xs="auto">
            <slot name="after"></slot>
          </awesome-flex-item>
        </awesome-flex>
      </Host>
    );
  }
}
