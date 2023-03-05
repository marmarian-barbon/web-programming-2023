import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './App.controller';
import { AppService } from '../Services/App.service';

describe('AppController', () => {
	let appController = <AppController | null>null;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(appController?.GetHello()).toBe('Hello World!');
		});
	});
});
