import { Test, TestingModule } from '@nestjs/testing';
import { SeasonJusticeOperatorController } from './season_justice_operator.controller';
import { SeasonJusticeOperatorService } from './season_justice_operator.service';

describe('SeasonJusticeOperatorController', () => {
  let controller: SeasonJusticeOperatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeasonJusticeOperatorController],
      providers: [SeasonJusticeOperatorService],
    }).compile();

    controller = module.get<SeasonJusticeOperatorController>(SeasonJusticeOperatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
