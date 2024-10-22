import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JusticeOperatorService } from './justice_operator.service';
import { CreateJusticeOperatorDto } from './dto/create-justice_operator.dto';
import { UpdateJusticeOperatorDto } from './dto/update-justice_operator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Justice Operator')
@Controller('justice-operator')
export class JusticeOperatorController {
  constructor(
    private readonly justiceOperatorService: JusticeOperatorService,
  ) {}

  @Post()
  create(@Body() createJusticeOperatorDto: CreateJusticeOperatorDto) {
    return this.justiceOperatorService.create(createJusticeOperatorDto);
  }

  @Get()
  findAll() {
    return this.justiceOperatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.justiceOperatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJusticeOperatorDto: UpdateJusticeOperatorDto,
  ) {
    return this.justiceOperatorService.update(+id, updateJusticeOperatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.justiceOperatorService.remove(+id);
  }
}
