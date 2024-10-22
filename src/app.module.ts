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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
