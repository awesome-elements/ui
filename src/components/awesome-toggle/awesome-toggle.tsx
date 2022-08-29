import { Component, Host, h, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';

export type ToggleVariant = 'checkbox' | 'switch';

@Component({
  tag: 'awesome-toggle',
  styleUrls: {
    default: 'awesome-toggle.default.css',
  },
  shadow: true,
})
export class AwesomeToggle implements ComponentInterface {
  /**
   * Variant of the toogle. Default to `checkbox`.
   */
  @Prop({ reflect: true }) variant: ToggleVariant = 'checkbox';

  /**
   * If `true`, the toggle is checked. Default to `false`;
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * The flag of disabling the toggle. Default to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Event of status being changed.
   */
  @Event() awesomeChange: EventEmitter<{ checked: boolean; innerEvent: globalThis.Event }>;

  render() {
    return (
      <Host>
        <input id="native" type="checkbox" checked={this.checked} disabled={this.disabled} hidden onChange={this.handleToggleChange} />
        <label part="container" htmlFor="native">
          {this.renderToggle()}
          <slot></slot>
        </label>
      </Host>
    );
  }

  private renderToggle() {
    let content;
    switch (this.variant) {
      case 'checkbox':
        content = (
          <svg class="check-mark" viewBox="0 0 100 100">
            <path d="M10,55L40,80L90,20" fill="none" stroke="var(--awesome-ui-default-color-contrast)" stroke-width={20} />
          </svg>
        );
        break;
      case 'switch':
        content = <div class="thumb"></div>;
        break;
    }
    return <div part="toggle">{content}</div>;
  }

  private handleToggleChange = (event: Event) => {
    this.checked = (event.currentTarget as HTMLInputElement)?.checked;
    this.awesomeChange.emit({ checked: this.checked, innerEvent: event });
  };
}
