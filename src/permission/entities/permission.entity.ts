import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Rol, (rol) => rol.permissions)
  roles: Rol[];
}
