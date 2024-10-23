import { Module } from '@nestjs/common';
import { PhaseProgressUserService } from './phase_progress_user.service';
import { PhaseProgressUserController } from './phase_progress_user.controller';

@Module({
  controllers: [PhaseProgressUserController],
  providers: [PhaseProgressUserService],
})
export class PhaseProgressUserModule {}
