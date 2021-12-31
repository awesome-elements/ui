import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'awesome-elements',
  globalScript: './src/globals/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
