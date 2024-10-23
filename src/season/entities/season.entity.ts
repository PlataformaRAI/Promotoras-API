import { PhaseSeason } from 'src/phase_season/entities/phase_season.entity';
import { SeasonJusticeOperator } from 'src/season_justice_operator/entities/season_justice_operator.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ default: false })
  isDeleted: boolean;

  // BIDIRECTIONAL

  @OneToMany(() => SeasonJusticeOperator, (seasonJusticeOperator) => seasonJusticeOperator.season)
  seasonJusticeOperators: SeasonJusticeOperator[];

  @OneToMany(() => PhaseSeason, (phaseSeason) => phaseSeason.season)
  phaseSeasons: PhaseSeason[];
}
