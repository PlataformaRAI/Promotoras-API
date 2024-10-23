import { PhaseModule } from 'src/phase_module/entities/phase_module.entity';
import { File } from 'src/file/entities/file.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DoubtQuestion } from 'src/doubt_question/entities/doubt_question.entity';
import { CompletionLessonUser } from 'src/completion_lesson_user/entities/completion_lesson_user.entity';

@Entity()
export class ModuleLesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  videoUrl: string;

  @Column()
  position: number;

  @ManyToOne(() => PhaseModule, (module) => module.lessons)
  @JoinColumn()
  module: PhaseModule;

  // BIDIRECTIONAL

  @OneToMany(() => File, (file) => file.lesson)
  files: File[];

  @OneToMany(() => DoubtQuestion, (question) => question.lesson)
  doubtQuestions: DoubtQuestion[];

  @OneToMany(() => CompletionLessonUser, (completionLesson) => completionLesson.lesson)
  completionLessonsUser: CompletionLessonUser[];
}
