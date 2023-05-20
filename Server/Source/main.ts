import { NestFactory } from '@nestjs/core';

import { AppModule } from './App.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	await app.listen(3000);
}

bootstrap();
