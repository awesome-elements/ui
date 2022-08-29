import { Component, Host, h, ComponentInterface, Element, Prop, Method } from '@stencil/core';

@Component({
  tag: 'awesome-select-option',
  styleUrls: {
    default: 'awesome-select-option.default.css',
    soft: 'awesome-select-option.soft.css',
  },
  shadow: true,
})
export class AwesomeSelectOption implements ComponentInterface {
  private readonly PARENT_SELECT_ELEMENT_TAG_NAME = 'awesome-select';

  private get parentSelectElement() {
    const parentElement = this.hostElement?.parentElement;
    if (parentElement.tagName.toUpperCase() === this.PARENT_SELECT_ELEMENT_TAG_NAME.toUpperCase()) {
      return parentElement as HTMLAwesomeSelectElement;
    }
  }

  private get actualValue() {
    return this.value || this.hostElement?.innerText;
  }

  @Element() hostElement: HTMLAwesomeSelectOptionElement;

  /**
   * Value of the select option.
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
      <Host>
        <awesome-item id="item" button onClick={this.select}>
          <slot></slot>
        </awesome-item>
      </Host>
    );
  }

  private select = () => {
    const parentSelectElement = this.parentSelectElement;
    if (parentSelectElement) {
      parentSelectElement.value = this.actualValue;
    }
  };
}
