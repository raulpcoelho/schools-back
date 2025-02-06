import { Injectable } from '@nestjs/common';
import { TypeOrmService } from 'src/database/typeorm.service';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolsService {
  constructor(private readonly typeOrmService: TypeOrmService) {}
  async getAll(page: number): Promise<School[]> {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    try {
      const schools = await this.typeOrmService.manager.find(School, {
        skip: offset,
        take: pageSize,
      });
      return schools;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: number) {
    console.log(id);
    return null;
  }

  async getByName(name: string) {
    console.log(name);
    return null;
  }
}
