import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { renderArrow } from '../../utils/arrow';

@Component({
  tag: 'awesome-back-button',
  styleUrls: {
    default: 'awesome-back-button.default.css',
    soft: 'awesome-back-button.soft.css',
  },
  shadow: true,
})
export class AwesomeBackButton implements ComponentInterface {
  /**
   * If does not present, the button would try to navigate back according to the browsing history.
   */
  @Prop({ reflect: true }) href: string;

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
    if (this.href) {
      location.href = this.href;
    } else {
      history.back();
    }
  };
}
