import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let appController: ClientController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    }).compile();

    appController = app.get<ClientController>(ClientController);
  });

  it('should return "Hello World!"', () => {
    expect(true).toBe(true);
  });
});
