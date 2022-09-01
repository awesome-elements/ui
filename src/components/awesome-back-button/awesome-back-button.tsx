import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { renderArrow } from '../../utils/arrow';

@Component({
  tag: 'awesome-back-button',
  styleUrls: {
    default: 'awesome-back-button.default.css',
  },
  shadow: true,
})
export class AwesomeBackButton implements ComponentInterface {
  /**
   * The default href to be used when there is no browsing history.
   */
  @Prop({ reflect: true }) defaultHref: string;

  render() {
    return (
      <Host>
        <awesome-button part="button" variant="clear" onClick={this.handleButtonClick}>
          {renderArrow('left')}
        </awesome-button>
      </Host>
    );
  }

  private handleButtonClick = () => {
    const currentHref = window.location.href;
    history.back();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const failingToGoBack = window.location.href === currentHref;
        if (failingToGoBack) {
          location.href = this.defaultHref;
        }
      });
    });
  };
}
