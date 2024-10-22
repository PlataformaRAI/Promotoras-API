import { Test, TestingModule } from '@nestjs/testing';
import { JusticeOperatorService } from './justice_operator.service';

describe('JusticeOperatorService', () => {
  let service: JusticeOperatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JusticeOperatorService],
    }).compile();

    service = module.get<JusticeOperatorService>(JusticeOperatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
