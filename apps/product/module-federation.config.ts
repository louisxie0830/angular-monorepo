import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product',
  exposes: {
    './Module': 'apps/product/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
