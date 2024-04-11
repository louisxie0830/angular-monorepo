import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'order-system-b',
  exposes: {
    './Module': 'apps/order-system-b/src/app/remote-entry/entry.module.ts',
  }
};

export default config;
