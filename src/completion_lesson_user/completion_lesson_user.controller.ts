import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompletionLessonUserService } from './completion_lesson_user.service';
import { CreateCompletionLessonUserDto } from './dto/create-completion_lesson_user.dto';
import { UpdateCompletionLessonUserDto } from './dto/update-completion_lesson_user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Completion Lesson User')
@Controller('completion-lesson-user')
export class CompletionLessonUserController {
  constructor(private readonly completionLessonUserService: CompletionLessonUserService) {}

  @Post()
  create(@Body() createCompletionLessonUserDto: CreateCompletionLessonUserDto) {
    return this.completionLessonUserService.create(createCompletionLessonUserDto);
  }

  @Get()
  findAll() {
    return this.completionLessonUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.completionLessonUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompletionLessonUserDto: UpdateCompletionLessonUserDto) {
    return this.completionLessonUserService.update(+id, updateCompletionLessonUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.completionLessonUserService.remove(+id);
  }
}
