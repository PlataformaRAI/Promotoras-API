import { Injectable } from '@nestjs/common';
import { CreateSeasonJusticeOperatorDto } from './dto/create-season_justice_operator.dto';
import { UpdateSeasonJusticeOperatorDto } from './dto/update-season_justice_operator.dto';

@Injectable()
export class SeasonJusticeOperatorService {
  create(createSeasonJusticeOperatorDto: CreateSeasonJusticeOperatorDto) {
    return 'This action adds a new seasonJusticeOperator';
  }

  findAll() {
    return `This action returns all seasonJusticeOperator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seasonJusticeOperator`;
  }

  update(id: number, updateSeasonJusticeOperatorDto: UpdateSeasonJusticeOperatorDto) {
    return `This action updates a #${id} seasonJusticeOperator`;
  }

  remove(id: number) {
    return `This action removes a #${id} seasonJusticeOperator`;
  }
}
