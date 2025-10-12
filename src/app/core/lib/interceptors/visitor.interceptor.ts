import { HttpInterceptorFn } from '@angular/common/http';

import { getVisitorUuid } from '../utils/visitor';

export const visitorInterceptor: HttpInterceptorFn = (req, next) => {
  const visitorUuid = getVisitorUuid();
  req = req.clone({ headers: req.headers.set('Visitor-uuid', visitorUuid) });
  return next(req);
};
