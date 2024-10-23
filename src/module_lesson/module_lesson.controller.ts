import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModuleLessonService } from './module_lesson.service';
import { CreateModuleLessonDto } from './dto/create-module_lesson.dto';
import { UpdateModuleLessonDto } from './dto/update-module_lesson.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Module Lesson')
@Controller('module-lesson')
export class ModuleLessonController {
  constructor(private readonly moduleLessonService: ModuleLessonService) {}

  @Post()
  create(@Body() createModuleLessonDto: CreateModuleLessonDto) {
    return this.moduleLessonService.create(createModuleLessonDto);
  }

  @Get()
  findAll() {
    return this.moduleLessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleLessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleLessonDto: UpdateModuleLessonDto) {
    return this.moduleLessonService.update(+id, updateModuleLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleLessonService.remove(+id);
  }
}
