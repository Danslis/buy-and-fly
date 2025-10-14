import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';

import { appConfig } from './app.config';
import { provideEnv } from './core/lib/env/environment';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideEnv()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

