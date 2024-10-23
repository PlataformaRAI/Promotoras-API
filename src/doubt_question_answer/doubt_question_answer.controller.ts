import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoubtQuestionAnswerService } from './doubt_question_answer.service';
import { CreateDoubtQuestionAnswerDto } from './dto/create-doubt_question_answer.dto';
import { UpdateDoubtQuestionAnswerDto } from './dto/update-doubt_question_answer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doubt Question Answer')
@Controller('doubt-question-answer')
export class DoubtQuestionAnswerController {
  constructor(private readonly doubtQuestionAnswerService: DoubtQuestionAnswerService) {}

  @Post()
  create(@Body() createDoubtQuestionAnswerDto: CreateDoubtQuestionAnswerDto) {
    return this.doubtQuestionAnswerService.create(createDoubtQuestionAnswerDto);
  }

  @Get()
  findAll() {
    return this.doubtQuestionAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doubtQuestionAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoubtQuestionAnswerDto: UpdateDoubtQuestionAnswerDto) {
    return this.doubtQuestionAnswerService.update(+id, updateDoubtQuestionAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doubtQuestionAnswerService.remove(+id);
  }
}
