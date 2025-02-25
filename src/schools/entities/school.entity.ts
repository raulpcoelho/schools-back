import { City } from '../../cities/entities/city.entity';
import { Region } from '../../regions/entities/region.entity';
import { SchoolType } from '../../school-type/entities/school-type.entity';
import { SchoolState } from '../../school_state/entities/school-state.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'school' })
export class School {
  @PrimaryColumn({ name: 'id', length: 50 })
  id!: string;

  @Column({ name: 'name', length: 256 })
  name!: string;

  @ManyToOne(() => City, city => city.schools)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @ManyToOne(() => SchoolState, state => state.schools)
  @JoinColumn({ name: 'school_state_id' })
  schoolState: SchoolState;

  @ManyToOne(() => SchoolType, schoolType => schoolType.schools)
  @JoinColumn({ name: 'school_type_id' })
  schoolType: SchoolType;

  @Column({ name: 'address', length: 256 })
  address!: string;

  @Column({ name: 'address_number', nullable: true })
  addressNumber: number;

  @Column({ name: 'district', length: 256 })
  district!: string;

  @ManyToOne(() => Region, region => region.schools)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @Column({ name: 'ddd', nullable: true })
  ddd: number;

  @Column({ name: 'phone', length: 20, nullable: true })
  phone: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
