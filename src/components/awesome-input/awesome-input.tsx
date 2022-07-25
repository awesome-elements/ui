import { Component, Host, h, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';
import '@awesome-elements/layout';

export type InputType = 'text';

@Component({
  tag: 'awesome-input',
  styleUrls: {
    default: 'awesome-input.default.css',
  },
  shadow: true,
})
export class AwesomeInput implements ComponentInterface {
  /**
   * Type of the input. Default to `text`.
   */
  @Prop({ reflect: true }) type: InputType = 'text';

  /**
   * Value of the input.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) value?: string;

  /**
   * Placeholder of the input.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * The flag of disabling the input. Default to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Event of content being changed.
   */
  @Event() awesomeChange: EventEmitter<[{ value: string; innerEvent: globalThis.Event }]>;

  /**
   * Event of something being input.
   */
  @Event() awesomeInput: EventEmitter<{ innerEvent: InputEvent }>;

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item xs="auto">
            <slot name="before"></slot>
          </awesome-flex-item>
          <awesome-flex-item>
            <input part="native" value={this.value} disabled={this.disabled} placeholder={this.placeholder} onChange={this.handleOnChangeEvent} onInput={this.handleOnInputEvent} />
          </awesome-flex-item>
          <awesome-flex-item xs="auto">
            <slot name="after"></slot>
          </awesome-flex-item>
        </awesome-flex>
      </Host>
    );
  }

  private handleOnChangeEvent = (event: globalThis.Event) => {
    this.value = (event.currentTarget as HTMLInputElement).value;
    this.awesomeChange.emit([{ value: this.value, innerEvent: event }]);
  };

  private handleOnInputEvent = (event: InputEvent) => {
    this.awesomeInput.emit({ innerEvent: event });
  };
}
