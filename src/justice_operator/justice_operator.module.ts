import { Module } from '@nestjs/common';
import { JusticeOperatorService } from './justice_operator.service';
import { JusticeOperatorController } from './justice_operator.controller';

@Module({
  controllers: [JusticeOperatorController],
  providers: [JusticeOperatorService],
})
export class JusticeOperatorModule {}
