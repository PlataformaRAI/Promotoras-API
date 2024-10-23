import { Test, TestingModule } from '@nestjs/testing';
import { DoubtQuestionService } from './doubt_question.service';

describe('DoubtQuestionService', () => {
  let service: DoubtQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoubtQuestionService],
    }).compile();

    service = module.get<DoubtQuestionService>(DoubtQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
