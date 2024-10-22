import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseOperationsController } from './database_operations.controller';
import { DatabaseOperationsService } from './database_operations.service';

describe('DatabaseOperationsController', () => {
  let controller: DatabaseOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseOperationsController],
      providers: [DatabaseOperationsService],
    }).compile();

    controller = module.get<DatabaseOperationsController>(DatabaseOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
