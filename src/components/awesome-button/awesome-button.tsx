import { Component, Host, h, ComponentInterface, Element, Prop } from '@stencil/core';
import { Color, Theme } from '../../utils/types';

export type ButtonVariant = 'solid' | 'outline' | 'clear';

@Component({
  tag: 'awesome-button',
  styleUrl: 'awesome-button.css',
  shadow: true,
})
export class AwesomeButton implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeButtonElement;

  @Prop({ reflect: true }) theme: Theme = 'main';

  @Prop({ reflect: true }) color: Color = 'primary';
  
  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';

  render() {
    return (
      <Host>
        <button id="native-element">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
