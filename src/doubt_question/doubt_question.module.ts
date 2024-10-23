import { Module } from '@nestjs/common';
import { DoubtQuestionService } from './doubt_question.service';
import { DoubtQuestionController } from './doubt_question.controller';

@Module({
  controllers: [DoubtQuestionController],
  providers: [DoubtQuestionService],
})
export class DoubtQuestionModule {}
