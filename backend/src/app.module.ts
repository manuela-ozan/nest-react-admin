import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { CourseModule } from './course/course.module';
import { StatsModule } from './stats/stats.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    DatabaseModule,
    UserModule,
    AuthModule,
    CourseModule,
    ContentModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
