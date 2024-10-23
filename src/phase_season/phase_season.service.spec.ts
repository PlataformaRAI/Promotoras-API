import { Test, TestingModule } from '@nestjs/testing';
import { PhaseSeasonService } from './phase_season.service';

describe('PhaseSeasonService', () => {
  let service: PhaseSeasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseSeasonService],
    }).compile();

    service = module.get<PhaseSeasonService>(PhaseSeasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
