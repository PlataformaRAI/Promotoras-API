import { Injectable } from '@nestjs/common';
import { CreateDatabaseOperationDto } from './dto/create-database_operation.dto';
import { UpdateDatabaseOperationDto } from './dto/update-database_operation.dto';

@Injectable()
export class DatabaseOperationsService {
  create(createDatabaseOperationDto: CreateDatabaseOperationDto) {
    return 'This action adds a new databaseOperation';
  }

  findAll() {
    return `This action returns all databaseOperations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} databaseOperation`;
  }

  update(id: number, updateDatabaseOperationDto: UpdateDatabaseOperationDto) {
    return `This action updates a #${id} databaseOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} databaseOperation`;
  }
}
