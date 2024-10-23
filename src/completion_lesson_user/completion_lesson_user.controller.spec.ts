import { Test, TestingModule } from '@nestjs/testing';
import { CompletionLessonUserController } from './completion_lesson_user.controller';
import { CompletionLessonUserService } from './completion_lesson_user.service';

describe('CompletionLessonUserController', () => {
  let controller: CompletionLessonUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompletionLessonUserController],
      providers: [CompletionLessonUserService],
    }).compile();

    controller = module.get<CompletionLessonUserController>(CompletionLessonUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
