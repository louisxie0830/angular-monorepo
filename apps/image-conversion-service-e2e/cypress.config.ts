import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run image-conversion-service:serve:development',
        production: 'nx run image-conversion-service:serve:production',
      },
      ciWebServerCommand: 'nx run image-conversion-service:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
