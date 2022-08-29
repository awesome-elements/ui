import { Component, Host, h, ComponentInterface } from '@stencil/core';

export type SkeletonType = 'text';

@Component({
  tag: 'awesome-skeleton',
  styleUrls: {
    default: 'awesome-skeleton.default.css',
    soft: 'awesome-skeleton.soft.css',
  },
  shadow: true,
})
export class AwesomeSkeleton implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
