import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseOperationsService } from './database_operations.service';

describe('DatabaseOperationsService', () => {
  let service: DatabaseOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseOperationsService],
    }).compile();

    service = module.get<DatabaseOperationsService>(DatabaseOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
