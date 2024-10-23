import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhaseSeasonService } from './phase_season.service';
import { CreatePhaseSeasonDto } from './dto/create-phase_season.dto';
import { UpdatePhaseSeasonDto } from './dto/update-phase_season.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Phase Season')
@Controller('phase-season')
export class PhaseSeasonController {
  constructor(private readonly phaseSeasonService: PhaseSeasonService) {}

  @Post()
  create(@Body() createPhaseSeasonDto: CreatePhaseSeasonDto) {
    return this.phaseSeasonService.create(createPhaseSeasonDto);
  }

  @Get()
  findAll() {
    return this.phaseSeasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phaseSeasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhaseSeasonDto: UpdatePhaseSeasonDto) {
    return this.phaseSeasonService.update(+id, updatePhaseSeasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phaseSeasonService.remove(+id);
  }
}
