import { IsNumber, IsString } from 'class-validator';

export class SchoolDto {
  @IsString()
  coEntidade!: string;

  @IsString()
  noEntidade!: string;

  @IsString()
  noMunicipio!: string;

  @IsString()
  sgUf!: string;

  @IsString()
  rede!: string;

  @IsString()
  dsEndereco!: string;

  @IsNumber()
  nuEndereco!: number;

  @IsString()
  noBairro!: string;

  @IsString()
  noRegiao!: string;

  @IsNumber()
  nuDdd!: number;

  @IsString()
  nuTelefone!: string;
}
