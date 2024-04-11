import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'order-system-f',
  exposes: {
    './Module': 'apps/order-system-f/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
