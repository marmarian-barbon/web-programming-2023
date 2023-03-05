import { Controller, Get } from '@nestjs/common';

import { AppService } from '../Services/App.service';

@Controller()
export class AppController {
	private readonly appService: AppService;

	public constructor(
		appService: AppService
	) {
		this.appService = appService;
	}

	@Get()
	public GetHello(): string {
		return this.appService.GetHello();
	}
}
