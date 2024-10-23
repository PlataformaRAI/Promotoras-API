import { Test, TestingModule } from '@nestjs/testing';
import { CompletionLessonUserService } from './completion_lesson_user.service';

describe('CompletionLessonUserService', () => {
  let service: CompletionLessonUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompletionLessonUserService],
    }).compile();

    service = module.get<CompletionLessonUserService>(CompletionLessonUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
