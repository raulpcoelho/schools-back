import { Controller, Get, Query } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { School } from './entities/school.entity';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  async getAll(@Query('page') page: number): Promise<School[] | { error: string }> {
    try {
      return await this.schoolsService.getAll(page);
    } catch (error) {
      console.log(error);
      return { error: 'Error fetching schools' };
    }
  }
}
