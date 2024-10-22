import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DatabaseOperation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  operation: string;

  @Column()
  tableName: string;

  @Column()
  affectedItem: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User, (user) => user.databaseOperations)
  @JoinColumn({ name: 'doneByUser' })
  doneByUser: User;
}
