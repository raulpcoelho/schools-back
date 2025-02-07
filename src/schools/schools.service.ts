import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmService } from 'src/database/typeorm.service';
import { School } from './entities/school.entity';
import { ILike } from 'typeorm';
import { GetSchoolDto } from './dtos/get-schools.dto';

@Injectable()
export class SchoolsService {
  constructor(private readonly typeOrmService: TypeOrmService) {}
  async getAll(getSchoolDto: GetSchoolDto): Promise<School[]> {
    let { noEntidade, page } = getSchoolDto;
    if (!noEntidade) noEntidade = '';
    if (!page || page < 1) page = 1;

    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    try {
      const schools = await this.typeOrmService.manager.find(School, {
        skip: offset,
        take: pageSize,
        where: { noEntidade: ILike(`%${noEntidade}%`) },
      });
      return schools;
    } catch (error) {
      throw error;
    }
  }

  async getById(coEntidade: number): Promise<School> {
    try {
      const school = await this.typeOrmService.manager.findOne(School, { where: { coEntidade: String(coEntidade) } });
      if (!school) {
        throw new NotFoundException('School not found');
      }
      return school;
    } catch (error) {
      throw error;
    }
  }
}
