import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	public GetHello(): string {
		return 'Hello World!';
	}
}
