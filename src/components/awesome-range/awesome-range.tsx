import { updateCSSVariable } from '@awesome-elements/utils';
import { Component, Host, h, ComponentInterface, Prop, Watch, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'awesome-range',
  styleUrls: {
    default: 'awesome-range.default.css',
  },
  shadow: true,
})
export class AwesomeRange implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeRangeElement;

  /**
   * Minimum number of the range. Default to `0`.
   */
  @Prop({ reflect: true }) min: number = 0;

  /**
   * Maximum number of the range. Default to `100`.
   */
  @Prop({ reflect: true }) max: number = 100;

  /**
   * Step of the range. Default to `""`.
   */
  @Prop({ reflect: true }) step: number | '' | 'any' = '';

  /**
   * Value of the range. Default to `0`.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) value: number = 0;

  @Watch('value')
  handleValueChange(value: number) {
    const positionPercentage = ((value - this.min) / (this.max - this.min)) * 100;
    updateCSSVariable('--awesome-range-handle-position', `${positionPercentage}%`, this.hostElement);
  }

  /**
   * Event of value being changed.
   */
  @Event() awesomeChange: EventEmitter<[number, globalThis.Event]>;

  /**
   * Event of value being input.
   */
  @Event() awesomeInput: EventEmitter<InputEvent>;

  connectedCallback() {
    this.handleValueChange(this.value);
  }

  render() {
    return (
      <Host>
        <input part="native" type="range" min={this.min} max={this.max} step={this.step} value={this.value} onChange={this.handleOnChangeEvent} onInput={this.handleOnInputEvent} />
      </Host>
    );
  }

  private handleOnChangeEvent = event => {
    this.awesomeChange.emit([+(event.currentTarget as HTMLInputElement).value, event]);
  };

  private handleOnInputEvent = (event: InputEvent) => {
    this.value = +(event.currentTarget as HTMLInputElement).value;
    this.awesomeInput.emit(event);
  };
}
