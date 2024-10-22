import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseOperationsService } from './database_operations.service';
import { CreateDatabaseOperationDto } from './dto/create-database_operation.dto';
import { UpdateDatabaseOperationDto } from './dto/update-database_operation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Database Operations')
@Controller('database-operations')
export class DatabaseOperationsController {
  constructor(private readonly databaseOperationsService: DatabaseOperationsService) {}

  @Post()
  create(@Body() createDatabaseOperationDto: CreateDatabaseOperationDto) {
    return this.databaseOperationsService.create(createDatabaseOperationDto);
  }

  @Get()
  findAll() {
    return this.databaseOperationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.databaseOperationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatabaseOperationDto: UpdateDatabaseOperationDto) {
    return this.databaseOperationsService.update(+id, updateDatabaseOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.databaseOperationsService.remove(+id);
  }
}
