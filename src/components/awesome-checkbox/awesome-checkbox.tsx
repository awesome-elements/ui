import { Component, Host, h, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'awesome-checkbox',
  styleUrls: {
    default: 'awesome-checkbox.default.css',
  },
  shadow: true,
})
export class AwesomeCheckbox implements ComponentInterface {
  /**
   * If `true`, the checkbox is checked. Default to `false`;
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * The flag of disabling the checkbox. Default to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Event of status being changed.
   */
  @Event() awesomeChange: EventEmitter<{ checked: boolean; innerEvent: globalThis.Event }>;

  render() {
    return (
      <Host>
        <input id="native" type="checkbox" checked={this.checked} disabled={this.disabled} hidden onChange={this.handleCheckboxChange} />
        <label part="container" htmlFor="native">
          {this.renderCheckMark()}
        </label>
      </Host>
    );
  }

  private renderCheckMark() {
    return (
      <svg class="check-mark" viewBox="0 0 100 100">
        <path d="M10,55L40,80L90,20" fill="none" stroke="var(--awesome-ui-color-contrast)" stroke-width={20} />
      </svg>
    );
  }

  private handleCheckboxChange = (event: Event) => {
    this.checked = (event.currentTarget as HTMLInputElement)?.checked;
    this.awesomeChange.emit({ checked: this.checked, innerEvent: event });
  };
}
