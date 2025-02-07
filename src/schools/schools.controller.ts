import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { School } from './entities/school.entity';
import { GetSchoolDto } from './dtos/get-schools.dto';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  async getAll(@Query() getSchoolDto: GetSchoolDto): Promise<School[] | { error: string }> {
    try {
      return await this.schoolsService.getAll(getSchoolDto);
    } catch (error) {
      console.log(error);
      return { error: 'Error fetching schools' };
    }
  }

  @Get(':coEntidade')
  async getById(@Param('coEntidade') coEntidade: number): Promise<School | { error: string }> {
    if (isNaN(coEntidade)) {
      return { error: 'Invalid parameter' };
    }
    try {
      return await this.schoolsService.getById(coEntidade);
    } catch (error) {
      console.log(error);
      if (error instanceof NotFoundException) {
        return { error: 'School not found' };
      }
      return { error: 'Error fetching school' };
    }
  }
}
