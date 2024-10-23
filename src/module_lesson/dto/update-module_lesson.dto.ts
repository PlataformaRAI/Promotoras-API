import { PartialType } from '@nestjs/swagger';
import { CreateModuleLessonDto } from './create-module_lesson.dto';

export class UpdateModuleLessonDto extends PartialType(CreateModuleLessonDto) {}
