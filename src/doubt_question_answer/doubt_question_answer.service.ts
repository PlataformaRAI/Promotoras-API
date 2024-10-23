import { Injectable } from '@nestjs/common';
import { CreateDoubtQuestionAnswerDto } from './dto/create-doubt_question_answer.dto';
import { UpdateDoubtQuestionAnswerDto } from './dto/update-doubt_question_answer.dto';

@Injectable()
export class DoubtQuestionAnswerService {
  create(createDoubtQuestionAnswerDto: CreateDoubtQuestionAnswerDto) {
    return 'This action adds a new doubtQuestionAnswer';
  }

  findAll() {
    return `This action returns all doubtQuestionAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doubtQuestionAnswer`;
  }

  update(id: number, updateDoubtQuestionAnswerDto: UpdateDoubtQuestionAnswerDto) {
    return `This action updates a #${id} doubtQuestionAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} doubtQuestionAnswer`;
  }
}
