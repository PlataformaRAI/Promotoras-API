import { Test, TestingModule } from '@nestjs/testing';
import { DoubtQuestionAnswerController } from './doubt_question_answer.controller';
import { DoubtQuestionAnswerService } from './doubt_question_answer.service';

describe('DoubtQuestionAnswerController', () => {
  let controller: DoubtQuestionAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoubtQuestionAnswerController],
      providers: [DoubtQuestionAnswerService],
    }).compile();

    controller = module.get<DoubtQuestionAnswerController>(DoubtQuestionAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
