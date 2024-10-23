import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLessonService } from './module_lesson.service';

describe('ModuleLessonService', () => {
  let service: ModuleLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleLessonService],
    }).compile();

    service = module.get<ModuleLessonService>(ModuleLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
