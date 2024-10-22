import { Department } from 'src/department/entities/department.entity';
import { JusticeOperator } from 'src/justice_operator/entities/justice_operator.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Municipality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.municipalities)
  @JoinColumn()
  department: Department;

  @OneToMany(() => JusticeOperator, (justiceOperator) => justiceOperator.municipality)
  @JoinColumn()
  justiceOperators: JusticeOperator[];
}
