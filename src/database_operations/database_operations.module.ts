import { Module } from '@nestjs/common';
import { DatabaseOperationsService } from './database_operations.service';
import { DatabaseOperationsController } from './database_operations.controller';

@Module({
  controllers: [DatabaseOperationsController],
  providers: [DatabaseOperationsService],
})
export class DatabaseOperationsModule {}
