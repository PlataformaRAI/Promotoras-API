import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhaseProgressUserService } from './phase_progress_user.service';
import { CreatePhaseProgressUserDto } from './dto/create-phase_progress_user.dto';
import { UpdatePhaseProgressUserDto } from './dto/update-phase_progress_user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Phase Progress User')
@Controller('phase-progress-user')
export class PhaseProgressUserController {
  constructor(private readonly phaseProgressUserService: PhaseProgressUserService) {}

  @Post()
  create(@Body() createPhaseProgressUserDto: CreatePhaseProgressUserDto) {
    return this.phaseProgressUserService.create(createPhaseProgressUserDto);
  }

  @Get()
  findAll() {
    return this.phaseProgressUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseProgressUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhaseProgressUserDto: UpdatePhaseProgressUserDto) {
    return this.phaseProgressUserService.update(+id, updatePhaseProgressUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseProgressUserService.remove(+id);
  }
}
