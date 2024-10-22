import { JusticeOperator } from 'src/justice_operator/entities/justice_operator.entity';
import { Season } from 'src/season/entities/season.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SeasonJusticeOperator {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Season, (season) => season.seasonJusticeOperators)
  @JoinColumn()
  season: Season;

  @ManyToOne(() => JusticeOperator, (justiceOperator) => justiceOperator.seasonJusticeOperators)
  @JoinColumn()
  justiceOperator: JusticeOperator;

  @Column()
  registeredDate: Date;
}
