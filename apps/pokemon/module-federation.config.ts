import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'pokemon',
  exposes: {
    './Module': 'apps/pokemon/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
