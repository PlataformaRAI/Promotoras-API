import { Module } from '@nestjs/common';
import { PhaseSeasonService } from './phase_season.service';
import { PhaseSeasonController } from './phase_season.controller';

@Module({
  controllers: [PhaseSeasonController],
  providers: [PhaseSeasonService],
})
export class PhaseSeasonModule {}
