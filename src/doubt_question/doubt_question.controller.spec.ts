import { Test, TestingModule } from '@nestjs/testing';
import { DoubtQuestionController } from './doubt_question.controller';
import { DoubtQuestionService } from './doubt_question.service';

describe('DoubtQuestionController', () => {
  let controller: DoubtQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoubtQuestionController],
      providers: [DoubtQuestionService],
    }).compile();

    controller = module.get<DoubtQuestionController>(DoubtQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
