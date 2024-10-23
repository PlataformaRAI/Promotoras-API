import { Module } from '@nestjs/common';
import { DoubtQuestionAnswerService } from './doubt_question_answer.service';
import { DoubtQuestionAnswerController } from './doubt_question_answer.controller';

@Module({
  controllers: [DoubtQuestionAnswerController],
  providers: [DoubtQuestionAnswerService],
})
export class DoubtQuestionAnswerModule {}
