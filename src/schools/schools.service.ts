import { Injectable } from '@nestjs/common';

@Injectable()
export class SchoolsService {
  async getAll(): Promise<Array<object>> {
    return null;
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
