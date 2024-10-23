import { PartialType } from '@nestjs/swagger';
import { CreateDoubtQuestionAnswerDto } from './create-doubt_question_answer.dto';

export class UpdateDoubtQuestionAnswerDto extends PartialType(CreateDoubtQuestionAnswerDto) {}
