import { ModuleLesson } from 'src/module_lesson/entities/module_lesson.entity';
import { Phase } from 'src/phase/entities/phase.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhaseModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  @Column({ default: true })
  isDeleted: boolean;

  @ManyToOne(() => Phase, (phase) => phase.phaseModules)
  @JoinColumn()
  phase: Phase;

  @Column()
  quiz: number;

  // BIDIRECTIONAL

  @OneToMany(() => ModuleLesson, (lesson) => lesson.module)
  lessons: ModuleLesson[];
}
