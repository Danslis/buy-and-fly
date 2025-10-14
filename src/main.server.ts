import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import * as dotenv from 'dotenv';

import { App } from './app/app';
import { config } from './app/app.config.server';

dotenv.config();

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
