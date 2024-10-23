import { Injectable } from '@nestjs/common';
import { CreatePhaseSeasonDto } from './dto/create-phase_season.dto';
import { UpdatePhaseSeasonDto } from './dto/update-phase_season.dto';

@Injectable()
export class PhaseSeasonService {
  create(createPhaseSeasonDto: CreatePhaseSeasonDto) {
    return 'This action adds a new phaseSeason';
  }

  findAll() {
    return `This action returns all phaseSeason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phaseSeason`;
  }

  update(id: number, updatePhaseSeasonDto: UpdatePhaseSeasonDto) {
    return `This action updates a #${id} phaseSeason`;
  }

  remove(id: number) {
    return `This action removes a #${id} phaseSeason`;
  }
}
