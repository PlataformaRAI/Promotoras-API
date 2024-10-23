import { Injectable } from '@nestjs/common';
import { CreatePhaseModuleDto } from './dto/create-phase_module.dto';
import { UpdatePhaseModuleDto } from './dto/update-phase_module.dto';

@Injectable()
export class PhaseModuleService {
  create(createPhaseModuleDto: CreatePhaseModuleDto) {
    return 'This action adds a new phaseModule';
  }

  findAll() {
    return `This action returns all phaseModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phaseModule`;
  }

  update(id: number, updatePhaseModuleDto: UpdatePhaseModuleDto) {
    return `This action updates a #${id} phaseModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} phaseModule`;
  }
}
