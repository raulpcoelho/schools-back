import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmService } from 'src/database/typeorm.service';
import { School } from './entities/school.entity';
import { ILike } from 'typeorm';
import { GetSchoolDto } from './dtos/get-schools.dto';
import { SchoolDto } from './dtos/school.dto';

@Injectable()
export class SchoolsService {
  constructor(private readonly typeOrmService: TypeOrmService) {}
  async getAll(getSchoolDto: GetSchoolDto): Promise<SchoolDto[]> {
    let { noEntidade, page } = getSchoolDto;
    if (!noEntidade) noEntidade = '';
    if (!page || page < 1) page = 1;

    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    try {
      const schools = await this.typeOrmService.manager.find(School, {
        relations: ['city', 'schoolState', 'schoolType', 'region'],
        skip: offset,
        take: pageSize,
        where: { name: ILike(`%${noEntidade}%`) },
      });
      const schoolDtos = schools.map(SchoolsService.mapSchoolToDto);
      return schoolDtos;
    } catch (error) {
      throw error;
    }
  }

  async getById(coEntidade: number): Promise<SchoolDto> {
    try {
      const school = await this.typeOrmService.manager.findOne(School, {
        relations: ['city', 'schoolState', 'schoolType', 'region'],
        where: { id: String(coEntidade) },
      });
      if (!school) {
        throw new NotFoundException('School not found');
      }
      return SchoolsService.mapSchoolToDto(school);
    } catch (error) {
      throw error;
    }
  }

  private static mapSchoolToDto(school: School): SchoolDto {
    return {
      coEntidade: school.id,
      noEntidade: school.name,
      noMunicipio: school.city.name,
      sgUf: school.schoolState.name,
      rede: school.schoolType.name,
      dsEndereco: school.address,
      nuEndereco: school.addressNumber,
      noBairro: school.district,
      noRegiao: school.region.name,
      nuDdd: school.ddd,
      nuTelefone: school.phone,
    };
  }
}
