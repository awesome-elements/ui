import { Component, Host, h, ComponentInterface, Element, Prop, Method } from '@stencil/core';

@Component({
  tag: 'awesome-tab',
  styleUrls: {
    default: 'awesome-tab.default.css',
    soft: 'awesome-tab.soft.css',
  },
  shadow: true,
})
export class AwesomeTab implements ComponentInterface {
  private readonly PARENT_TABS_ELEMENT_TAG_NAME = 'awesome-tabs';

  private get parentTabsElement() {
    const parentElement = this.hostElement?.parentElement;
    if (parentElement.tagName.toUpperCase() === this.PARENT_TABS_ELEMENT_TAG_NAME.toUpperCase()) {
      return parentElement as HTMLAwesomeTabsElement;
    }
  }

  private get actualValue() {
    return this.value || this.hostElement?.innerHTML;
  }

  @Element() hostElement: HTMLAwesomeTabElement;

  /**
   * Value of the tab.
   */
  @Prop({ reflect: true }) value: string;

  /**
   * @internal
   */
  @Prop({ reflect: true }) selected: boolean = false;

  /**
   * @internal
   */
  @Method()
  async obtainActualValue() {
    return this.actualValue;
  }

  render() {
    return (
      <Host onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <slot></slot>
      </Host>
    );
  }

  private handleClick = () => {
    this.parentTabsElement?.updateSelectedTab(this.hostElement);
  };

  private handleMouseOver = () => {
    this.parentTabsElement?.moveHighlightToTabPosition(this.hostElement);
  };

  private handleMouseOut = () => {
    this.parentTabsElement?.resetHighlightPosition();
  };
}
