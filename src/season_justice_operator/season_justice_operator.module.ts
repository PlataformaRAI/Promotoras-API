import { Module } from '@nestjs/common';
import { SeasonJusticeOperatorService } from './season_justice_operator.service';
import { SeasonJusticeOperatorController } from './season_justice_operator.controller';

@Module({
  controllers: [SeasonJusticeOperatorController],
  providers: [SeasonJusticeOperatorService],
})
export class SeasonJusticeOperatorModule {}
