import { Module } from '@nestjs/common';
import { CompletionLessonUserService } from './completion_lesson_user.service';
import { CompletionLessonUserController } from './completion_lesson_user.controller';

@Module({
  controllers: [CompletionLessonUserController],
  providers: [CompletionLessonUserService],
})
export class CompletionLessonUserModule {}
