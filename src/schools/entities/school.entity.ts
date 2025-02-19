import { City } from 'src/cities/entities/city.entity';
import { Region } from 'src/regions/entities/region.entity';
import { SchoolType } from 'src/school-type/entities/school-type.entity';
import { State } from 'src/states/entities/state.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'school' })
export class School {
  @PrimaryColumn({ name: 'co_entidade', length: 50 })
  coEntidade!: string;

  @Column({ name: 'no_entidade', length: 256 })
  noEntidade!: string;

  @ManyToOne(() => City, city => city.schools)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @ManyToOne(() => State, state => state.schools)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @ManyToOne(() => SchoolType, schoolType => schoolType.schools)
  @JoinColumn({ name: 'school_type_id' })
  schoolType: SchoolType;

  @Column({ name: 'ds_endereco', length: 256 })
  dsEndereco!: string;

  @Column({ name: 'nu_endereco', nullable: true })
  nuEndereco: number;

  @Column({ name: 'no_bairro', length: 256 })
  noBairro!: string;

  @ManyToOne(() => Region, region => region.schools)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @Column({ name: 'nu_ddd', nullable: true })
  nuDdd: number;

  @Column({ name: 'nu_telefone', length: 20, nullable: true })
  nuTelefone: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
