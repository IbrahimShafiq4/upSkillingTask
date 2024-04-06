import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';

export const contactInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    params: new HttpParams().set('upSkilling', 'Jsb'),
    headers: new HttpHeaders().set('random', 'header'),
  })
  return next(modifiedReq);
};