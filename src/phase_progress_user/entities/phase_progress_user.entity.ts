import { PhaseSeason } from 'src/phase_season/entities/phase_season.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhaseProgressUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ default: 0 })
  score: number;

  @ManyToOne(() => User, (user) => user.phasesProgressUser)
  @JoinColumn()
  user: User;

  @ManyToOne(() => PhaseSeason, (phaseSeason) => phaseSeason.phasesProgressUser)
  @JoinColumn()
  phaseSeason: PhaseSeason;
}
