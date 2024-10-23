import { ModuleLesson } from 'src/module_lesson/entities/module_lesson.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  fileUrl: string;

  @ManyToOne(() => ModuleLesson, (lesson) => lesson.files)
  @JoinColumn()
  lesson: ModuleLesson;
}
