import { updateCSSVariable } from '@awesome-elements/utils/dist';
import { Component, Host, h, ComponentInterface, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'awesome-select',
  styleUrls: {
    default: 'awesome-select.default.css',
  },
  shadow: true,
})
export class AwesomeSelect implements ComponentInterface {
  private readonly CHILD_SELECT_OPTION_TAG_NAME = 'awesome-select-option';

  @Element() hostElement: HTMLAwesomeSelectElement;

  /**
   * Value of the select.
   */
  @Prop({ reflect: true }) value?: string;

  @Watch('value')
  handleValueChanged(value: string) {
    this.updateOptionHighlights();
    this.awesomeChange.emit({ value });
  }

  /**
   * Placehold when no value is selected.
   */
  @Prop({ reflect: true }) placeholder: string = 'No Selection';

  /**
   * Event of value being changed.
   */
  @Event() awesomeChange: EventEmitter<{ value: string }>;

  render() {
    return (
      <Host>
        <label part="container" htmlFor="toggle">
          <input id="toggle" type="checkbox" hidden onChange={this.handleToggleValueChange} />
          <div part="main">
            <span class="text">{this.value || this.placeholder}</span>
            {this.renderArrow()}
          </div>
          {/* TODO attaching dropdown element to root element*/}
          <div part="dropdown" class="popover">
            <slot></slot>
          </div>
        </label>
      </Host>
    );
  }

  private handleToggleValueChange = (event: Event) => {
    const checked = (event.currentTarget as HTMLInputElement).checked;
    if (checked) {
      const windowHeight = window.innerHeight;
      const hostElementClientRect = this.hostElement.getBoundingClientRect();
      const dropdownMaxHeight = windowHeight - hostElementClientRect.top - hostElementClientRect.height;
      updateCSSVariable('--dropdown-max-height', `${dropdownMaxHeight}px`, this.hostElement);
    }
  };

  private renderArrow() {
    return (
      <svg class="arrow" width="1em" height="1em" viewBox="0 0 100 100">
        <path stroke-width="10" stroke="var(--stroke-color, black)" fill="transparent" d="M20,30 L50,70 L 80 30"></path>
      </svg>
    );
  }

  private updateOptionHighlights() {
    this.hostElement?.querySelectorAll(this.CHILD_SELECT_OPTION_TAG_NAME).forEach(async option => {
      if ((await option.obtainActualValue()) === this.value) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }
}
