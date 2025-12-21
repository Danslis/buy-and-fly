import { APP_INITIALIZER, makeStateKey, TransferState } from '@angular/core';

declare const process: {
  env: Record<string, string | undefined>;
};

export const envStateKey = makeStateKey<Env>('Env');

export interface Env {
  readonly aviasalesToken: string;
  readonly hotellookToken: string;
}

export function transferStateFactory(transferState: TransferState) {
  return () => {
    transferState.set<Env>(envStateKey, {
      aviasalesToken: process.env['AVIASALES_TOKEN'] ?? '',
      hotellookToken: process.env['HOTELLOOK_TOKEN'] ?? '',
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
