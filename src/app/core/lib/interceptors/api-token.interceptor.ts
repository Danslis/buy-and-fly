import { HttpInterceptorFn } from '@angular/common/http';
import { inject, TransferState } from '@angular/core';

import { envStateKey } from '@baf/core';

export const apiTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TransferState).get(envStateKey, { apiUrl: '', apiToken: '' }).apiToken;
  req = req.clone({ headers: req.headers.set('X-Access-Token', token) });
  return next(req);
};
