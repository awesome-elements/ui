import { updateCSSVariable } from '@awesome-elements/utils/dist';
import { Component, Host, h, ComponentInterface, Element, Prop, Event, EventEmitter, Watch, State } from '@stencil/core';
import { renderArrow } from '../../utils/arrow';

@Component({
  tag: 'awesome-select',
  styleUrls: {
    default: 'awesome-select.default.css',
    soft: 'awesome-select.soft.css',
  },
  shadow: true,
})
export class AwesomeSelect implements ComponentInterface {
  private readonly CHILD_SELECT_OPTION_TAG_NAME = 'awesome-select-option';

  @Element() hostElement: HTMLAwesomeSelectElement;

  @State() expanded: boolean = false;

  @Watch('expanded')
  handleExpandedChange(expanded: boolean) {
    if (expanded) {
      const windowHeight = window.innerHeight;
      const hostElementClientRect = this.hostElement.getBoundingClientRect();
      const dropdownMaxHeight = windowHeight - hostElementClientRect.top - hostElementClientRect.height;
      updateCSSVariable('--dropdown-max-height', `${dropdownMaxHeight}px`, this.hostElement);
    }
  }

  /**
   * `z-index` of the dropdown.
   */
  @Prop({ reflect: true }) dropdownZIndex: number = 99;

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
    const zIndex = (this.expanded ? this.dropdownZIndex : 0) || 0;

    return (
      <Host>
        {this.expanded && <awesome-backdrop part="backdrop" zIndex={zIndex - 1} onClick={this.handleBackdropClick}></awesome-backdrop>}
        <label part="container" htmlFor="toggle" style={{ zIndex: zIndex.toString() }}>
          <input id="toggle" type="checkbox" checked={this.expanded} hidden onChange={this.handleToggleValueChange} />
          <div part="main">
            <span class="text">{this.value || this.placeholder}</span>
            {renderArrow('down', { height: '1em', width: '1em' })}
          </div>
          {/* TODO attaching dropdown element to root element*/}
          <div part="dropdown" class="popover" style={{ zIndex: zIndex.toString() }}>
            <slot></slot>
          </div>
        </label>
      </Host>
    );
  }

  private handleBackdropClick = () => {
    this.expanded = false;
  };

  private handleToggleValueChange = (event: Event) => {
    const checked = (event.currentTarget as HTMLInputElement).checked;
    this.expanded = checked;
  };

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
