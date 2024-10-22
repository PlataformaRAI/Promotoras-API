import { Municipality } from 'src/municipality/entities/municipality.entity';
import { SeasonJusticeOperator } from 'src/season_justice_operator/entities/season_justice_operator.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JusticeOperator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logoUrl: string;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => Municipality, (municipality) => municipality.justiceOperators)
  @JoinColumn()
  municipality: Municipality;

  // BIDIRECTIONAL

  @OneToMany(() => User, (user) => user.justiceOperator, { nullable: true })
  users: User[];

  @OneToMany(() => SeasonJusticeOperator, (seasonJusticeOperator) => seasonJusticeOperator.justiceOperator)
  seasonJusticeOperators: SeasonJusticeOperator[];
}
