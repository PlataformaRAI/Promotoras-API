import { CompletionLessonUser } from 'src/completion_lesson_user/entities/completion_lesson_user.entity';
import { Phase } from 'src/phase/entities/phase.entity';
import { PhaseProgressUser } from 'src/phase_progress_user/entities/phase_progress_user.entity';
import { Season } from 'src/season/entities/season.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class PhaseSeason {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => Phase, (phase) => phase.phaseSeasons)
  @JoinColumn()
  phase: Phase;

  @ManyToOne(() => Season, (season) => season.phaseSeasons)
  @JoinColumn()
  season: Season;

  // BIDIRECTIONAL

  @OneToMany(() => CompletionLessonUser, (completionLesson) => completionLesson.phaseSeason)
  completionLessonsUser: CompletionLessonUser[];

  @OneToMany(() => PhaseProgressUser, (phaseProgress) => phaseProgress.phaseSeason)
  phasesProgressUser: PhaseProgressUser[];
}
