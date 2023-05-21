import { BaseService } from './base.service';

export class HelloWorldService extends BaseService {
	protected static urlBase = `${super.urlBase}`;

	public GetHello(callback: (result: string) => void): void {
		const request = new XMLHttpRequest();
		request.open('GET', `${HelloWorldService.urlBase}/`);
		request.onload = () => {
			if (request.status !== 200) {
				console.log(`Error with status: ${request.status}!`);
			}

			callback(request.responseText);
		};
		request.send();
	}
}

const helloWorldService = new HelloWorldService();

export { helloWorldService };
