import { PartialType } from '@nestjs/swagger';
import { CreateDatabaseOperationDto } from './create-database_operation.dto';

export class UpdateDatabaseOperationDto extends PartialType(CreateDatabaseOperationDto) {}
