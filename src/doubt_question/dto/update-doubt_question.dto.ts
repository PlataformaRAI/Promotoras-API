import { PartialType } from '@nestjs/swagger';
import { CreateDoubtQuestionDto } from './create-doubt_question.dto';

export class UpdateDoubtQuestionDto extends PartialType(CreateDoubtQuestionDto) {}
