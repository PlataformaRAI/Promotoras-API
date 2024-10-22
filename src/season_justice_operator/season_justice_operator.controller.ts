import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeasonJusticeOperatorService } from './season_justice_operator.service';
import { CreateSeasonJusticeOperatorDto } from './dto/create-season_justice_operator.dto';
import { UpdateSeasonJusticeOperatorDto } from './dto/update-season_justice_operator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Season Justice Operator')
@Controller('season-justice-operator')
export class SeasonJusticeOperatorController {
  constructor(private readonly seasonJusticeOperatorService: SeasonJusticeOperatorService) {}

  @Post()
  create(@Body() createSeasonJusticeOperatorDto: CreateSeasonJusticeOperatorDto) {
    return this.seasonJusticeOperatorService.create(createSeasonJusticeOperatorDto);
  }

  @Get()
  findAll() {
    return this.seasonJusticeOperatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seasonJusticeOperatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeasonJusticeOperatorDto: UpdateSeasonJusticeOperatorDto) {
    return this.seasonJusticeOperatorService.update(+id, updateSeasonJusticeOperatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seasonJusticeOperatorService.remove(+id);
  }
}
