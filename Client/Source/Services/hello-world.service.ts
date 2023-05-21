import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { BaseService } from './base.service';
import type { Observable } from 'rxjs/internal/Observable';

export class HelloWorldService extends BaseService {
	protected static urlBase = `${super.urlBase}`;

	public GetHello(): Observable<string> {
		return ajax<string>({
			method: 'GET',
			url: `${HelloWorldService.urlBase}/`,
			responseType: 'text'
		}).pipe(map(call => {
			if (call.status !== 200) {
				console.log(`Error with status: ${call.status}!`);
				return '';
			}

			return call.response;
		}));
	}
}

const helloWorldService = new HelloWorldService();

export { helloWorldService };
