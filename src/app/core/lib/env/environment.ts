import { APP_INITIALIZER, makeStateKey, TransferState } from '@angular/core';

declare const process: {
  env: Record<string, string | undefined>;
};

export const envStateKey = makeStateKey<Env>('Env');

export interface Env {
  readonly apiUrl: string;
  readonly apiToken: string;
}

export function transferStateFactory(transferState: TransferState) {
  return () => {
    transferState.set<Env>(envStateKey, {
      apiUrl: process.env['API_URL'] ?? '',
      apiToken: process.env['API_TOKEN'] ?? '',
    });
  };
}


export function provideEnv() {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: transferStateFactory,
      deps: [TransferState],
      multi: true,
    },
  ];
}
