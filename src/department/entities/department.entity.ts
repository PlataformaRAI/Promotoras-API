import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // BIDIRECTIONAL

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}
