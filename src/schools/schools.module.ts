import { Module } from '@nestjs/common';
import { SchoolsController } from './schools.controller';
import { SchoolsService } from './schools.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService],
  imports: [DatabaseModule],
})
export class SchoolsModule {}
