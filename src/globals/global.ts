import { setMode } from '@stencil/core';
import '@awesome-elements/layout';

const defaultMode = 'default';

function isAwesomeElement(element: HTMLElement) {
  return element.tagName && element.tagName.startsWith('AWESOME-');
}

function isAllowedModeValue(_mode: string) {
  return true;
}

setMode((element: any) => {
  while (element) {
    const elementMode = (element as any).mode || element.getAttribute('mode');
    if (elementMode) {
      if (isAllowedModeValue(elementMode)) {
        return elementMode;
      } else if (isAwesomeElement(element)) {
        console.warn('Invalid ionic mode: "' + elementMode + '", expected: "ios" or "md"');
      }
    }
    element = element.parentElement;
  }
  return defaultMode;
});
