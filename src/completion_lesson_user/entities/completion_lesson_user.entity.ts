import { ModuleLesson } from 'src/module_lesson/entities/module_lesson.entity';
import { PhaseSeason } from 'src/phase_season/entities/phase_season.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompletionLessonUser {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  completionDate: Date;

  @ManyToOne(() => ModuleLesson, (lesson) => lesson.completionLessonsUser)
  @JoinColumn()
  lesson: ModuleLesson;

  @ManyToOne(() => User, (user) => user.completionLessonsUser)
  @JoinColumn()
  user: User;

  @ManyToOne(() => PhaseSeason, (phaseSeason) => phaseSeason.completionLessonsUser)
  @JoinColumn()
  phaseSeason: PhaseSeason;
}
