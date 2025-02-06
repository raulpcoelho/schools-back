import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'school' })
export class School {
  @PrimaryColumn({ name: 'co_entidade', length: 256 })
  coEntidade!: string;

  @Column({ name: 'no_entidade', length: 256 })
  noEntidade!: string;

  @Column({ name: 'no_municipio', length: 256 })
  noMunicipio!: string;

  @Column({ name: 'sg_uf', length: 256 })
  sgUf!: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
