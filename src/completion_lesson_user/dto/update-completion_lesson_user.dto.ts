import { PartialType } from '@nestjs/swagger';
import { CreateCompletionLessonUserDto } from './create-completion_lesson_user.dto';

export class UpdateCompletionLessonUserDto extends PartialType(CreateCompletionLessonUserDto) {}
