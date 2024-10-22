import { Injectable } from '@nestjs/common';
import { CreateJusticeOperatorDto } from './dto/create-justice_operator.dto';
import { UpdateJusticeOperatorDto } from './dto/update-justice_operator.dto';

@Injectable()
export class JusticeOperatorService {
  create(createJusticeOperatorDto: CreateJusticeOperatorDto) {
    return 'This action adds a new justiceOperator';
  }

  findAll() {
    return `This action returns all justiceOperator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} justiceOperator`;
  }

  update(id: number, updateJusticeOperatorDto: UpdateJusticeOperatorDto) {
    return `This action updates a #${id} justiceOperator`;
  }

  remove(id: number) {
    return `This action removes a #${id} justiceOperator`;
  }
}
