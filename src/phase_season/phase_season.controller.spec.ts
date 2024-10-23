import { Test, TestingModule } from '@nestjs/testing';
import { PhaseSeasonController } from './phase_season.controller';
import { PhaseSeasonService } from './phase_season.service';

describe('PhaseSeasonController', () => {
  let controller: PhaseSeasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseSeasonController],
      providers: [PhaseSeasonService],
    }).compile();

    controller = module.get<PhaseSeasonController>(PhaseSeasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
