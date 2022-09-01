import { h } from '@stencil/core';

type ArrowDirection = 'up' | 'down' | 'left' | 'right';

export function renderArrow(direction: ArrowDirection = 'down', props?: any) {
  let transfrom = '';
  switch (direction) {
    case 'up':
      transfrom = 'rotate(180)';
      break;
    case 'down':
      break;
    case 'left':
      transfrom = 'rotate(90)';
      break;
    case 'right':
      transfrom = 'rotate(-90)';
      break;
  }
  return (
    <svg class="arrow" width="100%" height="100%" viewBox="0 0 100 100" display="block" {...props}>
      <path stroke-width="10" stroke="var(--stroke-color, black)" fill="transparent" d="M20,30 L50,70 L 80 30" transform={transfrom} transform-origin="center center"></path>
    </svg>
  );
}
