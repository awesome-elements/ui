import { setMode } from '@stencil/core';
import '@awesome-elements/layout';

const modes = ['default', 'soft'];
const defaultMode = 'default';

function isAwesomeElement(element: HTMLElement) {
  return element.tagName && element.tagName.startsWith('AWESOME-');
}

function isAllowedModeValue(mode: string) {
  return modes.includes(mode);
}

setMode((element: any) => {
  while (element) {
    const elementMode = (element as any).mode || element.getAttribute('mode');
    if (elementMode) {
      if (isAllowedModeValue(elementMode)) {
        return elementMode;
      } else if (isAwesomeElement(element)) {
        console.warn(`Invalid mode: "${elementMode}", expected one from ${JSON.stringify(modes)}.`);
      }
    }
    element = element.parentElement || element.getRootNode()?.host;
  }
  return defaultMode;
});
