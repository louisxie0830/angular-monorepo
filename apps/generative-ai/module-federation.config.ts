import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'generative-ai',
  exposes: {
    './Module': 'apps/generative-ai/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
