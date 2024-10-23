import { Test, TestingModule } from '@nestjs/testing';
import { PhaseModuleController } from './phase_module.controller';
import { PhaseModuleService } from './phase_module.service';

describe('PhaseModuleController', () => {
  let controller: PhaseModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseModuleController],
      providers: [PhaseModuleService],
    }).compile();

    controller = module.get<PhaseModuleController>(PhaseModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
