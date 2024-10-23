import { CompletionLessonUser } from 'src/completion_lesson_user/entities/completion_lesson_user.entity';
import { DatabaseOperation } from 'src/database_operations/entities/database_operation.entity';
import { DoubtQuestion } from 'src/doubt_question/entities/doubt_question.entity';
import { DoubtQuestionAnswer } from 'src/doubt_question_answer/entities/doubt_question_answer.entity';
import { JusticeOperator } from 'src/justice_operator/entities/justice_operator.entity';
import { Phase } from 'src/phase/entities/phase.entity';
import { PhaseProgressUser } from 'src/phase_progress_user/entities/phase_progress_user.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ length: 8 })
  phoneNumber: string;

  @Column()
  avatarUrl: string;

  @Column({ default: true })
  isFirstLogin: boolean;

  @Column({ default: true })
  isEnable: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => Rol, (rol) => rol.users)
  @JoinColumn()
  rol: Rol;

  @ManyToOne(() => JusticeOperator, (justiceOperator) => justiceOperator.users, { nullable: true })
  @JoinColumn()
  justiceOperator: JusticeOperator;

  // BIDIRECTIONAL

  @OneToMany(() => DatabaseOperation, (databaseOperation) => databaseOperation.doneByUser)
  databaseOperations: DatabaseOperation[];

  @OneToMany(() => Phase, (phase) => phase.instructor)
  phases: Phase[];

  @OneToMany(() => DoubtQuestion, (question) => question.authorUser)
  doubtQuestions: DoubtQuestion[];

  @OneToMany(() => DoubtQuestionAnswer, (answer) => answer.user)
  doubtQuestionAnswers: DoubtQuestionAnswer[];

  @OneToMany(() => CompletionLessonUser, (completionLesson) => completionLesson.user)
  completionLessonsUser: CompletionLessonUser[];

  @OneToMany(() => PhaseProgressUser, (phaseProgress) => phaseProgress.user)
  phasesProgressUser: PhaseProgressUser[];
}
