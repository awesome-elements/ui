import { Component, Host, h, ComponentInterface, Prop, Event, EventEmitter } from '@stencil/core';

export type InputType = 'text' | 'number' | 'password';

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
   * The minimum number for the input. Only valid when `type` is set to `"number"`.
   */
  @Prop({ reflect: true }) min: number;

  /**
   * The maxiumn number for the input. Only valid when `type` is set to `"number"`.
   */
  @Prop({ reflect: true }) max: number;

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
  @Event() awesomeChange: EventEmitter<{ value: string; innerEvent: globalThis.Event }>;

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
            <input
              part="native"
              type={this.type}
              min={this.min}
              max={this.max}
              value={this.value}
              disabled={this.disabled}
              placeholder={this.placeholder}
              onChange={this.handleOnChangeEvent}
              onInput={this.handleOnInputEvent}
            />
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
    this.awesomeChange.emit({ value: this.value, innerEvent: event });
  };

  private handleOnInputEvent = (event: InputEvent) => {
    this.awesomeInput.emit({ innerEvent: event });
  };
}
