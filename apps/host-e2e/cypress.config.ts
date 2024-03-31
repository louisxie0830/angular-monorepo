import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run host:serve:development',
        production: 'nx run host:serve:production',
      },
      ciWebServerCommand: 'nx run host:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
