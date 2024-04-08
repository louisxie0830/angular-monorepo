import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run pokemon:serve:development',
        production: 'nx run pokemon:serve:production',
      },
      ciWebServerCommand: 'nx run pokemon:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
