import { PartialType } from '@nestjs/swagger';
import { CreatePhaseModuleDto } from './create-phase_module.dto';

export class UpdatePhaseModuleDto extends PartialType(CreatePhaseModuleDto) {}
