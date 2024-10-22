import { PartialType } from '@nestjs/swagger';
import { CreateJusticeOperatorDto } from './create-justice_operator.dto';

export class UpdateJusticeOperatorDto extends PartialType(CreateJusticeOperatorDto) {}
