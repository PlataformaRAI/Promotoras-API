import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoubtQuestionService } from './doubt_question.service';
import { CreateDoubtQuestionDto } from './dto/create-doubt_question.dto';
import { UpdateDoubtQuestionDto } from './dto/update-doubt_question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doubt Question')
@Controller('doubt-question')
export class DoubtQuestionController {
  constructor(private readonly doubtQuestionService: DoubtQuestionService) {}

  @Post()
  create(@Body() createDoubtQuestionDto: CreateDoubtQuestionDto) {
    return this.doubtQuestionService.create(createDoubtQuestionDto);
  }

  @Get()
  findAll() {
    return this.doubtQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doubtQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoubtQuestionDto: UpdateDoubtQuestionDto) {
    return this.doubtQuestionService.update(+id, updateDoubtQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doubtQuestionService.remove(+id);
  }
}
