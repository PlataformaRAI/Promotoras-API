import { DatabaseOperation } from 'src/database_operations/entities/database_operation.entity';
import { JusticeOperator } from 'src/justice_operator/entities/justice_operator.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ length: 8 })
  phoneNumber: string;

  @Column()
  avatarUrl: string;

  @Column({ default: true })
  isFirstLogin: boolean;

  @Column({ default: true })
  isEnable: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => Rol, (rol) => rol.users)
  @JoinColumn()
  rol: Rol;

  @ManyToOne(() => JusticeOperator, (justiceOperator) => justiceOperator.users, { nullable: true })
  @JoinColumn()
  justiceOperator: JusticeOperator;

  // BIDIRECTIONAL

  @OneToMany(() => DatabaseOperation, (databaseOperation) => databaseOperation.doneByUser)
  databaseOperations: DatabaseOperation[];
}
