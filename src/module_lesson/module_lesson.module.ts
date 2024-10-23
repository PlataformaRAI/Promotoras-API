import { Module } from '@nestjs/common';
import { ModuleLessonService } from './module_lesson.service';
import { ModuleLessonController } from './module_lesson.controller';

@Module({
  controllers: [ModuleLessonController],
  providers: [ModuleLessonService],
})
export class ModuleLessonModule {}
