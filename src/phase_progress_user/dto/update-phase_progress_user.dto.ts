import { PartialType } from '@nestjs/swagger';
import { CreatePhaseProgressUserDto } from './create-phase_progress_user.dto';

export class UpdatePhaseProgressUserDto extends PartialType(CreatePhaseProgressUserDto) {}
