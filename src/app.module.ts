import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SchoolsModule } from './schools/schools.module';
import { RegionsModule } from './regions/regions.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';
import { SchoolTypeModule } from './school-type/school-type.module';

@Module({
  imports: [DatabaseModule, SchoolsModule, RegionsModule, RegionsModule, CitiesModule, StatesModule, SchoolTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
