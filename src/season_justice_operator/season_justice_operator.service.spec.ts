import { Test, TestingModule } from '@nestjs/testing';
import { SeasonJusticeOperatorService } from './season_justice_operator.service';

describe('SeasonJusticeOperatorService', () => {
  let service: SeasonJusticeOperatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeasonJusticeOperatorService],
    }).compile();

    service = module.get<SeasonJusticeOperatorService>(SeasonJusticeOperatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
