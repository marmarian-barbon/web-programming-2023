import { Module } from '@nestjs/common';

import { AppController } from './Controllers/App.controller';
import { AppService } from './Services/App.service';

@Module({
	imports: [],
	controllers: [
		AppController,
	],
	providers: [
		AppService,
	],
})
export class AppModule { }
