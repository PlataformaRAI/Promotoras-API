import { DoubtQuestionAnswer } from 'src/doubt_question_answer/entities/doubt_question_answer.entity';
import { ModuleLesson } from 'src/module_lesson/entities/module_lesson.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DoubtQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User, (user) => user.doubtQuestions)
  @JoinColumn()
  authorUser: User;

  @ManyToOne(() => ModuleLesson, (lesson) => lesson.doubtQuestions)
  @JoinColumn()
  lesson: ModuleLesson;

  // BIDIRECTIONAL

  @OneToMany(() => DoubtQuestionAnswer, (answer) => answer.question)
  doubtQuestionAnswers: DoubtQuestionAnswer[];
}
