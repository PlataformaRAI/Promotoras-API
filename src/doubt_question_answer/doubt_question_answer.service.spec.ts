import { Test, TestingModule } from '@nestjs/testing';
import { DoubtQuestionAnswerService } from './doubt_question_answer.service';

describe('DoubtQuestionAnswerService', () => {
  let service: DoubtQuestionAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoubtQuestionAnswerService],
    }).compile();

    service = module.get<DoubtQuestionAnswerService>(DoubtQuestionAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
