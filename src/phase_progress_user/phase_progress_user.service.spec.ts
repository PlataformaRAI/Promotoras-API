import { Test, TestingModule } from '@nestjs/testing';
import { PhaseProgressUserService } from './phase_progress_user.service';

describe('PhaseProgressUserService', () => {
  let service: PhaseProgressUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseProgressUserService],
    }).compile();

    service = module.get<PhaseProgressUserService>(PhaseProgressUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
