import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'image-conversion-service',
  exposes: {
    './Module': 'apps/image-conversion-service/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
