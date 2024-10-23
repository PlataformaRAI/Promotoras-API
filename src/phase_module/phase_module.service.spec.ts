import { Test, TestingModule } from '@nestjs/testing';
import { PhaseModuleService } from './phase_module.service';

describe('PhaseModuleService', () => {
  let service: PhaseModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseModuleService],
    }).compile();

    service = module.get<PhaseModuleService>(PhaseModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
