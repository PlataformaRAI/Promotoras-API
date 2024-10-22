import { Test, TestingModule } from '@nestjs/testing';
import { JusticeOperatorController } from './justice_operator.controller';
import { JusticeOperatorService } from './justice_operator.service';

describe('JusticeOperatorController', () => {
  let controller: JusticeOperatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JusticeOperatorController],
      providers: [JusticeOperatorService],
    }).compile();

    controller = module.get<JusticeOperatorController>(JusticeOperatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
