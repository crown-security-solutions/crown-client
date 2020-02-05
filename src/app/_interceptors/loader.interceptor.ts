import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	constructor(public loaderService: NgxSpinnerService) { }
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.loaderService.show();
		return next.handle(req).pipe(
			finalize(() => this.loaderService.hide())
		);
	}
}