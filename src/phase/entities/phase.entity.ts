import { PhaseModule } from 'src/phase_module/entities/phase_module.entity';
import { PhaseSeason } from 'src/phase_season/entities/phase_season.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  quizzesCooldownTime: number;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => User, (user) => user.phases)
  @JoinColumn()
  instructor: User;

  // BIDIRECTIONAL

  @OneToMany(() => PhaseSeason, (phaseSeason) => phaseSeason.phase)
  phaseSeasons: PhaseSeason[];

  @OneToMany(() => PhaseModule, (phaseModule) => phaseModule.phase)
  phaseModules: PhaseModule[];
}
