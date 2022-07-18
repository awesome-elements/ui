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
  @Event() awesomeChange: EventEmitter<[{ value: string }, globalThis.Event]>;

  /**
   * Event of something is input.
   */
  @Event() awesomeInput: EventEmitter<globalThis.Event>;

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item xs="auto">
            <slot name="before"></slot>
          </awesome-flex-item>
          <awesome-flex-item>
            <input disabled={this.disabled} placeholder={this.placeholder} onChange={this.handleOnChangeEvent} onInput={this.handleOnInputEvent} />
          </awesome-flex-item>
          <awesome-flex-item xs="auto">
            <slot name="after"></slot>
          </awesome-flex-item>
        </awesome-flex>
      </Host>
    );
  }

  private handleOnChangeEvent = (event: globalThis.Event) => {
    this.awesomeChange.emit([{ value: (event.currentTarget as HTMLInputElement).value }, event]);
  };

  private handleOnInputEvent = (event: InputEvent) => {
    this.awesomeInput.emit(event);
  };
}
