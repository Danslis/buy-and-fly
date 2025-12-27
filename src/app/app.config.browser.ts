import 'hammerjs';

import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';

import { provideHammer } from '@baf/core';

import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [provideHammer()],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
