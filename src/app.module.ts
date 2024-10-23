import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { JusticeOperatorModule } from './justice_operator/justice_operator.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { PermissionModule } from './permission/permission.module';
import { DatabaseOperationsModule } from './database_operations/database_operations.module';
import { SeasonModule } from './season/season.module';
import { SeasonJusticeOperatorModule } from './season_justice_operator/season_justice_operator.module';
import { PhaseModule } from './phase/phase.module';
import { PhaseSeasonModule } from './phase_season/phase_season.module';
import { PhaseModuleModule } from './phase_module/phase_module.module';
import { ModuleLessonModule } from './module_lesson/module_lesson.module';
import { FileModule } from './file/file.module';
import { DoubtQuestionModule } from './doubt_question/doubt_question.module';
import { DoubtQuestionAnswerModule } from './doubt_question_answer/doubt_question_answer.module';
import { CompletionLessonUserModule } from './completion_lesson_user/completion_lesson_user.module';
import { PhaseProgressUserModule } from './phase_progress_user/phase_progress_user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'promotoras_bdd',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    UserModule,
    DepartmentModule,
    MunicipalityModule,
    JusticeOperatorModule,
    RolModule,
    PermissionModule,
    DatabaseOperationsModule,
    SeasonModule,
    SeasonJusticeOperatorModule,
    PhaseModule,
    PhaseSeasonModule,
    PhaseModuleModule,
    ModuleLessonModule,
    FileModule,
    DoubtQuestionModule,
    DoubtQuestionAnswerModule,
    CompletionLessonUserModule,
    PhaseProgressUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
