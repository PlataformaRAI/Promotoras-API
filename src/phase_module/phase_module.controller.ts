import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhaseModuleService } from './phase_module.service';
import { CreatePhaseModuleDto } from './dto/create-phase_module.dto';
import { UpdatePhaseModuleDto } from './dto/update-phase_module.dto';

@ApiTags('Phase Module')
@Controller('phase-module')
export class PhaseModuleController {
  constructor(private readonly phaseModuleService: PhaseModuleService) {}

  @Post()
  create(@Body() createPhaseModuleDto: CreatePhaseModuleDto) {
    return this.phaseModuleService.create(createPhaseModuleDto);
  }

  @Get()
  findAll() {
    return this.phaseModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhaseModuleDto: UpdatePhaseModuleDto) {
    return this.phaseModuleService.update(+id, updatePhaseModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseModuleService.remove(+id);
  }
}
