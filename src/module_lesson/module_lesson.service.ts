import { Injectable } from '@nestjs/common';
import { CreateModuleLessonDto } from './dto/create-module_lesson.dto';
import { UpdateModuleLessonDto } from './dto/update-module_lesson.dto';

@Injectable()
export class ModuleLessonService {
  create(createModuleLessonDto: CreateModuleLessonDto) {
    return 'This action adds a new moduleLesson';
  }

  findAll() {
    return `This action returns all moduleLesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moduleLesson`;
  }

  update(id: number, updateModuleLessonDto: UpdateModuleLessonDto) {
    return `This action updates a #${id} moduleLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} moduleLesson`;
  }
}
