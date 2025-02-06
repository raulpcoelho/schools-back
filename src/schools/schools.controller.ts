import { Controller, Get } from '@nestjs/common';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  async getAll(): Promise<Array<object>> {
    return this.schoolsService.getAll();
  }
}
