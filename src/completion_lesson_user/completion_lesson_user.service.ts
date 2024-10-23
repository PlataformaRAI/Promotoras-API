import { Injectable } from '@nestjs/common';
import { CreateCompletionLessonUserDto } from './dto/create-completion_lesson_user.dto';
import { UpdateCompletionLessonUserDto } from './dto/update-completion_lesson_user.dto';

@Injectable()
export class CompletionLessonUserService {
  create(createCompletionLessonUserDto: CreateCompletionLessonUserDto) {
    return 'This action adds a new completionLessonUser';
  }

  findAll() {
    return `This action returns all completionLessonUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} completionLessonUser`;
  }

  update(id: number, updateCompletionLessonUserDto: UpdateCompletionLessonUserDto) {
    return `This action updates a #${id} completionLessonUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} completionLessonUser`;
  }
}
