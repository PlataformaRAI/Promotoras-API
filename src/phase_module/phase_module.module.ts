import { Module } from '@nestjs/common';
import { PhaseModuleService } from './phase_module.service';
import { PhaseModuleController } from './phase_module.controller';

@Module({
  controllers: [PhaseModuleController],
  providers: [PhaseModuleService],
})
export class PhaseModuleModule {}
