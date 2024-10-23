import { Injectable } from '@nestjs/common';
import { CreateDoubtQuestionDto } from './dto/create-doubt_question.dto';
import { UpdateDoubtQuestionDto } from './dto/update-doubt_question.dto';

@Injectable()
export class DoubtQuestionService {
  create(createDoubtQuestionDto: CreateDoubtQuestionDto) {
    return 'This action adds a new doubtQuestion';
  }

  findAll() {
    return `This action returns all doubtQuestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doubtQuestion`;
  }

  update(id: number, updateDoubtQuestionDto: UpdateDoubtQuestionDto) {
    return `This action updates a #${id} doubtQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} doubtQuestion`;
  }
}
