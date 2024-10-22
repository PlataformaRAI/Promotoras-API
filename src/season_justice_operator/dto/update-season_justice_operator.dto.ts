import { PartialType } from '@nestjs/swagger';
import { CreateSeasonJusticeOperatorDto } from './create-season_justice_operator.dto';

export class UpdateSeasonJusticeOperatorDto extends PartialType(CreateSeasonJusticeOperatorDto) {}
