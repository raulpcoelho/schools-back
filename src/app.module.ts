import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [DatabaseModule, SchoolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
