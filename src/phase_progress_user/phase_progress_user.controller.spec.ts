import { Test, TestingModule } from '@nestjs/testing';
import { PhaseProgressUserController } from './phase_progress_user.controller';
import { PhaseProgressUserService } from './phase_progress_user.service';

describe('PhaseProgressUserController', () => {
  let controller: PhaseProgressUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseProgressUserController],
      providers: [PhaseProgressUserService],
    }).compile();

    controller = module.get<PhaseProgressUserController>(PhaseProgressUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
