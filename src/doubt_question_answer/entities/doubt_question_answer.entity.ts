import { DoubtQuestion } from 'src/doubt_question/entities/doubt_question.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DoubtQuestionAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User, (user) => user.doubtQuestionAnswers)
  @JoinColumn()
  user: User;

  @ManyToOne(() => DoubtQuestion, (question) => question.doubtQuestionAnswers)
  @JoinColumn()
  question: DoubtQuestion;
}
