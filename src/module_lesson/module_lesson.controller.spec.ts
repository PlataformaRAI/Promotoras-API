import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLessonController } from './module_lesson.controller';
import { ModuleLessonService } from './module_lesson.service';

describe('ModuleLessonController', () => {
  let controller: ModuleLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleLessonController],
      providers: [ModuleLessonService],
    }).compile();

    controller = module.get<ModuleLessonController>(ModuleLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
