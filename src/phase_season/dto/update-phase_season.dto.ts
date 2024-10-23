import { PartialType } from '@nestjs/swagger';
import { CreatePhaseSeasonDto } from './create-phase_season.dto';

export class UpdatePhaseSeasonDto extends PartialType(CreatePhaseSeasonDto) {}
