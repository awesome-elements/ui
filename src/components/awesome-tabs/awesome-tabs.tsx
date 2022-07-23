import { Component, Host, h, Method, Element, Event, EventEmitter, Prop, Watch, ComponentInterface } from '@stencil/core';
import { updateCSSVariable } from '@awesome-elements/utils/dist';

export type TabsOrientation = 'up' | 'down';

@Component({
  tag: 'awesome-tabs',
  styleUrls: {
    default: 'awesome-tabs.default.css',
  },
  shadow: true,
})
export class AwesomeTabs implements ComponentInterface {
  private readonly CHILD_TAB_TAG_NAME = 'awesome-tab';

  private get childTabElements() {
    return Array.from(this.hostElement?.querySelectorAll(this.CHILD_TAB_TAG_NAME));
  }

  private selectedTabElement?: HTMLAwesomeTabElement;

  @Element() hostElement: HTMLAwesomeTabsElement;

  /***
   * Orientation of the tabs. Default to `down`.
   */
  @Prop({ reflect: true }) orientation: TabsOrientation = 'down';

  /**
   * Value of the tabs.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ reflect: true, mutable: true }) value?: string;

  @Watch('value')
  handleValueChange(value: string) {
    this.awesomeChange.emit({ value });
  }

  /**
   * Event of value being changed.
   */
  @Event() awesomeChange: EventEmitter<{ value: string }>;

  async componentDidLoad() {
    let selectedTab: HTMLAwesomeTabElement;
    for (const tab of this.childTabElements) {
      if ((await tab.obtainActualValue()) === this.value) {
        selectedTab = tab;
        break;
      }
    }
    this.updateHighlight(selectedTab);
  }

  /**
   * @internal
   */
  @Method()
  async updateSelectedTab(tabElement: HTMLAwesomeTabElement) {
    this.updateHighlight(tabElement);
    this.value = await tabElement.obtainActualValue();
  }

  /**
   * @internal
   */
  @Method()
  async moveHighlightToTabPosition(tabElement?: HTMLAwesomeTabElement) {
    updateCSSVariable('--highlight-left-offset', `${tabElement.offsetLeft || 0}px`, this.hostElement);
    updateCSSVariable('--highlight-width', `${tabElement.clientWidth || 0}px`, this.hostElement);
  }

  /**
   * @internal
   */
  @Method()
  async resetHighlightPosition() {
    updateCSSVariable('--highlight-left-offset', `${this.selectedTabElement?.offsetLeft || 0}px`, this.hostElement);
    updateCSSVariable('--highlight-width', `${this.selectedTabElement?.clientWidth || 0}px`, this.hostElement);
  }

  render() {
    return (
      <Host>
        <div part="highlight"></div>
        <awesome-grid part="container" columns="1fr auto 1fr">
          <awesome-grid-item column={2}>
            <slot></slot>
          </awesome-grid-item>
        </awesome-grid>
      </Host>
    );
  }

  private updateHighlight(selectedTabElement?: HTMLAwesomeTabElement) {
    if (Boolean(selectedTabElement)) {
      this.selectedTabElement = selectedTabElement;
      this.childTabElements?.forEach(tab => (tab.selected = false));
      selectedTabElement.selected = true;
      this.moveHighlightToTabPosition(selectedTabElement);
    }
  }
}
