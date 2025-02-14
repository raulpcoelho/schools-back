import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'school' })
export class School {
  @PrimaryColumn({ name: 'co_entidade', length: 50 })
  coEntidade!: string;

  @Column({ name: 'no_entidade', length: 256 })
  noEntidade!: string;

  @Column({ name: 'no_municipio', length: 256 })
  noMunicipio!: string;

  @Column({ name: 'sg_uf', length: 5 })
  sgUf!: string;

  @Column({ name: 'rede', length: 256 })
  rede!: string;

  @Column({ name: 'ds_endereco', length: 256 })
  dsEndereco!: string;

  @Column({ name: 'nu_endereco', nullable: true })
  nuEndereco: number;

  @Column({ name: 'no_bairro', length: 256 })
  noBairro!: string;

  @Column({ name: 'no_regiao', length: 20 })
  noRegiao!: string;

  @Column({ name: 'nu_ddd', nullable: true })
  nuDdd: number;

  @Column({ name: 'nu_telefone', length: 20, nullable: true })
  nuTelefone: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
