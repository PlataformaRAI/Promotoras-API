import { Injectable } from '@nestjs/common';
import { CreatePhaseProgressUserDto } from './dto/create-phase_progress_user.dto';
import { UpdatePhaseProgressUserDto } from './dto/update-phase_progress_user.dto';

@Injectable()
export class PhaseProgressUserService {
  create(createPhaseProgressUserDto: CreatePhaseProgressUserDto) {
    return 'This action adds a new phaseProgressUser';
  }

  findAll() {
    return `This action returns all phaseProgressUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phaseProgressUser`;
  }

  update(id: number, updatePhaseProgressUserDto: UpdatePhaseProgressUserDto) {
    return `This action updates a #${id} phaseProgressUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} phaseProgressUser`;
  }
}
