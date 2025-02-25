import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SchoolsModule } from './schools/schools.module';
import { RegionsModule } from './regions/regions.module';
import { CitiesModule } from './cities/cities.module';
import { SchoolStateModule } from './school_state/school-state.module';
import { SchoolTypeModule } from './school-type/school-type.module';

@Module({
  imports: [
    DatabaseModule,
    SchoolsModule,
    RegionsModule,
    RegionsModule,
    CitiesModule,
    SchoolStateModule,
    SchoolTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
