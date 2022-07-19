import { ComponentInterface } from '@awesome-elements/layout/dist/types/stencil-public-runtime';
import { updateCSSVariable } from '@awesome-elements/utils/dist';
import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'awesome-progress-bar',
  styleUrls: {
    default: 'awesome-progress-bar.default.css',
  },
  shadow: true,
})
export class AwesomeProgressBar implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeProgressBarElement;

  /**
   * Progress of the bar. From `0` to `1`. Default to `0`;
   */
  @Prop() progress: number = 0;

  @Watch('progress')
  handleProgressChange(progress: number) {
    updateCSSVariable('--progress', progress.toString(), this.hostElement);
  }

  connectedCallback() {
    this.handleProgressChange(this.progress);
  }

  render() {
    return (
      <Host>
        <div></div>
      </Host>
    );
  }
}
