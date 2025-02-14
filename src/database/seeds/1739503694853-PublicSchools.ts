import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicSchools1739503694853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153688', 'Centro de Atendimento Educacional Especializado do Recife - Caeer', 'Recife', 'PE', 'Pública', 'Rua Conselheiro Nabuco', NULL, 'Casa Amarela', 'Nordeste', 81, '31814701');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117916', 'Centro de Educação de Jovens e Adultos Poeta Joaquim Cardozo', 'Recife', 'PE', 'Pública', 'Avenida Doutor Jose Rufino', 3071, 'Tejipio', 'Nordeste', 81, '31812710');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121824', 'Centro de Educação de Jovens e Adultos Valdemar de Oliveira', 'Recife', 'PE', 'Pública', 'Av Mario Melo', NULL, 'Santo Amaro', 'Nordeste', 81, '31812728');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191814', 'Centro Educacional Inclusivo Ulisses Pernambucano - Ceiup', 'Recife', 'PE', 'Pública', 'Rua Gouveia de Barros', 189, 'Santo Amaro', 'Nordeste', 81, '31812814');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181835', 'Cmei Alcides Restelli Tedesco', 'Recife', 'PE', 'Pública', 'Rua Fausto Cardoso', 653, 'Madalena', 'Nordeste', 81, '33011836');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122022', 'Cmei Ana Rosa Falcao de Carvalho', 'Recife', 'PE', 'Pública', 'Rua Joao Lira', NULL, 'Santo Amaro', 'Nordeste', 81, '33556546');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124165', 'Cmei Bernard Van Der Leer', 'Recife', 'PE', 'Pública', 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 'Nordeste', 81, '33556554');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153122', 'Cmei Brasilia Teimosa', 'Recife', 'PE', 'Pública', 'Rua Delfim', 55, 'Brasilia Teimosa', 'Nordeste', 81, '33553204');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175878', 'Cmei Celeste Vidal', 'Recife', 'PE', 'Pública', 'Rua Guabiraba', NULL, 'Brejo da Guabiraba', 'Nordeste', 81, '33550212');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26419742', 'Cmei Coelhinho Pensante', 'Recife', 'PE', 'Pública', 'Rua Virgilio de Medeiros', NULL, 'Santo Amaro', 'Nordeste', 81, '33554340');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149800', 'Cmei Creusa Arcoverde de Freitas Cavalcanti', 'Recife', 'PE', 'Pública', 'Rua Nabuco', NULL, 'Casa Amarela', 'Nordeste', 81, '33553902');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156776', 'Cmei da Mangueira', 'Recife', 'PE', 'Pública', 'Rua Vinte e Um de Abril', 1555, 'Mangueira', 'Nordeste', 81, '33553832');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182815', 'Cmei Darcy Ribeiro', 'Recife', 'PE', 'Pública', 'Rua Odete Monteiro', 450, 'Cordeiro', 'Nordeste', 81, '32366048');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26443716', 'Cmei Doutor Alberico Dornelas Camara', 'Recife', 'PE', 'Pública', 'Ref Cais do Apolo', 925, 'Recife', 'Nordeste', 81, '33559216');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26212609', 'Cmei Estrela da Manha', 'Recife', 'PE', 'Pública', 'Rua Dancing Days', 135, 'Imbiribeira', 'Nordeste', 81, '33554818');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153270', 'Cmei Jesus de Nazare', 'Recife', 'PE', 'Pública', 'Rua Angatuba', NULL, 'Ibura', 'Nordeste', 81, '33556974');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149931', 'Cmei Maezinha do Coque', 'Recife', 'PE', 'Pública', 'Rua Guapirama', NULL, 'Ilha Joana Bezerra', 'Nordeste', 81, '32322290');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153262', 'Cmei Nosso Senhor Jesus do Bonfim', 'Recife', 'PE', 'Pública', 'Rua Teixeira de Melo', 56, 'Estancia', 'Nordeste', 81, '33553812');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157551', 'Cmei Novo Pina', 'Recife', 'PE', 'Pública', 'Rua Eurico Vitruvio', NULL, 'Pina', 'Nordeste', 81, '92696149');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26212412', 'Cmei Professor Paulo Rosas', 'Recife', 'PE', 'Pública', 'Av Luiz Freire', NULL, 'Cidade Universitaria', 'Nordeste', 81, '21267073');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153246', 'Cmei Sementinha do Skylab', 'Recife', 'PE', 'Pública', 'Rua Joao da Lagoa', NULL, 'Iputinga', 'Nordeste', 81, '33553680');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122120', 'Colégio da Policia Militar de Pernambuco', 'Recife', 'PE', 'Pública', 'Rua Henrique Dias', 609, 'Derby', 'Nordeste', 81, '31811940');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124297', 'Colégio de Aplicacao do Ce da Ufpe', 'Recife', 'PE', 'Pública', 'Avenida da Arquitetura', NULL, 'Cidade Universitaria', 'Nordeste', 81, '21268332');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139618', 'Colégio Militar do Recife', 'Recife', 'PE', 'Pública', 'Avenida Visconde de Sao Leopoldo', 198, 'Varzea', 'Nordeste', 81, '21296340');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26135396', 'Conservatorio Pernambucano de Musica', 'Recife', 'PE', 'Pública', 'Avenida Joao de Barros', 594, 'Santo Amaro', 'Nordeste', 81, '31833400');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123185', 'Creche Escola Recife Associação Crista Feminina', 'Recife', 'PE', 'Pública', 'Rua Vermelha', 68, 'Torre', 'Nordeste', 81, '33553869');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191822', 'Creche Escola Recife Brejo do Beberibe', 'Recife', 'PE', 'Pública', 'Av Otacilio Azevedo', 1097, 'Vasco da Gama', 'Nordeste', 81, '33554127');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191679', 'Creche Escola Recife Creche Escola Deputado Alcides Teixeira', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 1193, 'Santo Amaro', 'Nordeste', 81, '33553422');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184648', 'Creche Escola Recife do Iraque', 'Recife', 'PE', 'Pública', 'Rua Havai', NULL, 'Estancia', 'Nordeste', 81, '33553387');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190818', 'Creche Escola Recife do Pilar', 'Recife', 'PE', 'Pública', 'Rua Ocidente', NULL, 'Recife', 'Nordeste', 81, '33554082');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183285', 'Creche Escola Recife Dona Carmelita Muniz de Araujo', 'Recife', 'PE', 'Pública', 'Est Mumbeca', 100, 'Guabiraba', 'Nordeste', 81, '34375595');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185679', 'Creche Escola Recife Governador Eduardo Campos', 'Recife', 'PE', 'Pública', 'Rua Vale do Cariri', NULL, 'Cohab', 'Nordeste', 81, '33550421');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190567', 'Creche Escola Recife José de Souza Ferraz', 'Recife', 'PE', 'Pública', 'Rua Jacunda', 573, 'Ipsep', 'Nordeste', 81, '33554767');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191695', 'Creche Escola Recife Maria Luzinete da Costa', 'Recife', 'PE', 'Pública', 'Rua Tabaiares', 190, 'Ilha do Retiro', 'Nordeste', 81, '33554361');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188368', 'Creche Escola Recife Mauriceia da Silva Dias', 'Recife', 'PE', 'Pública', 'Rua Andre Vidal de Negreiros', 35, 'Barro', 'Nordeste', 81, '34865696');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149338', 'Creche Escola Recife Menino Jesus de Casa Forte', 'Recife', 'PE', 'Pública', 'Rua Samuel Farias', 127, 'Santana', 'Nordeste', 81, '32696094');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190362', 'Creche Escola Recife Miguel Arraes Roda de Fogo', 'Recife', 'PE', 'Pública', 'Rua Helio Feijo', NULL, 'Torroes', 'Nordeste', 81, '33553231');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149796', 'Creche Escola Recife Nossa Senhora das Dores', 'Recife', 'PE', 'Pública', 'Rua Caetes', 427, 'Apipucos', 'Nordeste', 81, '92841269');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190060', 'Creche Escola Recife Porto Digital do Recife', 'Recife', 'PE', 'Pública', 'Rua Maria Cesar', 50, 'Recife', 'Nordeste', 81, '33556338');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186322', 'Creche Escola Recife Presidente Tancredo Neves', 'Recife', 'PE', 'Pública', 'Av Jose Rufino', 1848, 'Barro', 'Nordeste', 81, '32322616');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189224', 'Creche Escola Recife Professor Ariano Vilar Suassuna', 'Recife', 'PE', 'Pública', 'Rua Manuel de Medeiros', NULL, 'Dois Irmaos', 'Nordeste', 81, '33556300');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191687', 'Creche Escola Recife Salete Matias Borges', 'Recife', 'PE', 'Pública', 'Av Luxemburgo', NULL, 'Imbiribeira', 'Nordeste', 81, '33553225');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153335', 'Creche Escola Recife Santa Luzia', 'Recife', 'PE', 'Pública', 'Rua Souza Bandeira', NULL, 'Torre', 'Nordeste', 81, '33556824');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190575', 'Creche Escola Recife Sergio Loreto', 'Recife', 'PE', 'Pública', 'Rua Floriano Peixoto', NULL, 'Sao Jose', 'Nordeste', 81, '33553228');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156628', 'Creche Escola Recife Sitio do Cardoso', 'Recife', 'PE', 'Pública', 'Rua Landim', 390, 'Madalena', 'Nordeste', 81, '33554025');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192586', 'Creche Escola Recife Tia Madalena', 'Recife', 'PE', 'Pública', 'Rua Capanema', 39, 'Curado', 'Nordeste', 81, '35555952');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190087', 'Creche Escola Recife Alto do Mandu', 'Recife', 'PE', 'Pública', '2tr Siriji', NULL, 'Monteiro', 'Nordeste', 81, '33553853');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190923', 'Creche Escola Recife da Estancia', 'Recife', 'PE', 'Pública', 'Rua Caldas Filho', 186, 'Estancia', 'Nordeste', 81, '32234160');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156610', 'Creche Escola Recife do Ibura', 'Recife', 'PE', 'Pública', 'Rua Francisco Vitoriano', 10, 'Cohab', 'Nordeste', 81, '33553076');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185180', 'Creche Escola Recife Governador Miguel Arraes', 'Recife', 'PE', 'Pública', 'Rua Gil Rodrigues dos Santos', 10, 'Areias', 'Nordeste', 81, '33554105');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186926', 'Creche Escola Recife Miguel Arraes de Alencar', 'Recife', 'PE', 'Pública', 'Rua Aristonico Oliveira', 189, 'Iputinga', 'Nordeste', 81, '99755526');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183277', 'Creche Municipal 08 de Marco', 'Recife', 'PE', 'Pública', 'Rua Engenho Bulhoes', NULL, 'Ibura', 'Nordeste', 81, '33554357');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149869', 'Creche Municipal Ame As Criancas', 'Recife', 'PE', 'Pública', 'Rua Arlindo Cisneiro', 23, 'Bomba do Hemeterio', 'Nordeste', 81, '33553208');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171643', 'Creche Municipal Aritana', 'Recife', 'PE', 'Pública', 'Rua Manoel Cavalcanti Bezerra', 37, 'Imbiribeira', 'Nordeste', 81, '33554332');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148145', 'Creche Municipal Bido Krause', 'Recife', 'PE', 'Pública', 'Rua Onze de Agosto', NULL, 'Toto', 'Nordeste', 81, '33550050');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149761', 'Creche Municipal Cajueiro', 'Recife', 'PE', 'Pública', 'Rua Alice Tibirica', 453, 'Cajueiro', 'Nordeste', 81, '33556266');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157489', 'Creche Municipal Casinha Azul', 'Recife', 'PE', 'Pública', 'Rua Mateus', NULL, 'Iputinga', 'Nordeste', 81, '33556913');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149214', 'Creche Municipal Ceape', 'Recife', 'PE', 'Pública', 'Rua Costa Sepulveda', 415, 'Engenho do Meio', 'Nordeste', 81, '33554336');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167859', 'Creche Municipal Chico Mendes', 'Recife', 'PE', 'Pública', 'Rua Sindicato dos Vigilantes', 633, 'Cacote', 'Nordeste', 81, '33554822');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190656', 'Creche Municipal Creche Cristo Rei Jordao Alto', 'Recife', 'PE', 'Pública', 'Rua Sertania', 200, 'Jordao', 'Nordeste', 81, '33556648');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149788', 'Creche Municipal Criança Feliz', 'Recife', 'PE', 'Pública', 'Rua Sa Bandeira', NULL, 'Alto José Bonifácio', 'Nordeste', 81, '33554826');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156750', 'Creche Municipal da Torre', 'Recife', 'PE', 'Pública', 'Rua Cantora Clara Nunes', NULL, 'Torre', 'Nordeste', 81, '33553334');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156792', 'Creche Municipal de Afogados', 'Recife', 'PE', 'Pública', 'Rua Cerro Negro', 215, 'Afogados', 'Nordeste', 81, '33554830');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153319', 'Creche Municipal Deus e Amor', 'Recife', 'PE', 'Pública', 'Rua Epaminondas Cristovao de Oliveira', 395, 'Torroes', 'Nordeste', 81, '33556274');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156725', 'Creche Municipal do Bongi', 'Recife', 'PE', 'Pública', 'Rua Mario Portela', NULL, 'Bongi', 'Nordeste', 81, '33554806');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156695', 'Creche Municipal do Jordao Baixo', 'Recife', 'PE', 'Pública', 'Rua Jose da Laje', 1939, 'Ibura', 'Nordeste', 81, '33554848');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153408', 'Creche Municipal e Lutando Que Se Conquista', 'Recife', 'PE', 'Pública', 'Rua Salvador Allende', 36, 'Cordeiro', 'Nordeste', 81, '33554834');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170736', 'Creche Municipal Esperanca', 'Recife', 'PE', 'Pública', 'Rua Leila Felix Karam', NULL, 'San Martin', 'Nordeste', 81, '33556906');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149770', 'Creche Municipal Flor da Comunidade', 'Recife', 'PE', 'Pública', 'Est Morro da Conceicao', 111, 'Morro da Conceicao', 'Nordeste', 81, '33554838');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149842', 'Creche Municipal Flor do Bairro da Guabiraba', 'Recife', 'PE', 'Pública', 'Rua Cassiterita', NULL, 'Brejo da Guabiraba', 'Nordeste', 81, '33554842');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153254', 'Creche Municipal Futuro do Amanha', 'Recife', 'PE', 'Pública', 'Rua Apulcro de Assuncao', 686, 'San Martin', 'Nordeste', 81, '87003014');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181932', 'Creche Municipal Irma Dulce', 'Recife', 'PE', 'Pública', 'Rua Adalgisa', 9, 'Espinheiro', 'Nordeste', 81, '33554295');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186330', 'Creche Municipal Isabel Silvana de Melo', 'Recife', 'PE', 'Pública', 'Av Doze de Junho', NULL, 'Barro', 'Nordeste', 81, '94886367');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157578', 'Creche Municipal João Eugenio', 'Recife', 'PE', 'Pública', 'Rua Gaspar Perez', 3895, 'Iputinga', 'Nordeste', 81, '33553948');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26413779', 'Creche Municipal Lua Luar', 'Recife', 'PE', 'Pública', 'Ref da Av Mauricio de Nassau', 42, 'Iputinga', 'Nordeste', 81, '33556807');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149737', 'Creche Municipal Mardonio Coelho', 'Recife', 'PE', 'Pública', 'Rua Milton de Campos', NULL, 'Vasco da Gama', 'Nordeste', 81, '33553027');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153416', 'Creche Municipal Menino Jesus da Bomba Grande', 'Recife', 'PE', 'Pública', 'Rua Saude', 479, 'Iputinga', 'Nordeste', 81, '33553227');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183269', 'Creche Municipal Mercia Maria Bezerra Costa', 'Recife', 'PE', 'Pública', 'Av Otacilio Azevedo', 1030, 'Brejo de Beberibe', 'Nordeste', 81, '32324526');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171651', 'Creche Municipal Monte das Oliveiras', 'Recife', 'PE', 'Pública', 'Rua Alto da Brasileira', 7, 'Nova Descoberta', 'Nordeste', 81, '33556278');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153300', 'Creche Municipal Nossa Senhora Auxiliadora', 'Recife', 'PE', 'Pública', 'Rua Antonio Correa de Oliveira', 669, 'Torroes', 'Nordeste', 81, '33554858');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171660', 'Creche Municipal Nossa Senhora de Fatima', 'Recife', 'PE', 'Pública', 'Rua Alto do Reservatorio', 720, 'Nova Descoberta', 'Nordeste', 81, '33553257');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153394', 'Creche Municipal Novo Horizonte', 'Recife', 'PE', 'Pública', 'Rua Jose Bezerra Cavalcante', 244, 'Mustardinha', 'Nordeste', 81, '33556282');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153467', 'Creche Municipal Padre Lourenco', 'Recife', 'PE', 'Pública', 'Rua Pereira Carneiro', 172, 'Imbiribeira', 'Nordeste', 81, '33553081');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158701', 'Creche Municipal Professor Francisco do Amaral Lopes', 'Recife', 'PE', 'Pública', 'Av Agamenon Magalhaes', NULL, 'Santo Amaro', 'Nordeste', 81, '85518327');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153130', 'Creche Municipal Recife 2000', 'Recife', 'PE', 'Pública', 'Rua Rio Solimoes', NULL, 'Areias', 'Nordeste', 81, '33553776');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156849', 'Creche Municipal Roda de Fogo', 'Recife', 'PE', 'Pública', 'Rua Ocidental', 33, 'Cordeiro', 'Nordeste', 81, '33556935');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153114', 'Creche Municipal Rosa Selvagem', 'Recife', 'PE', 'Pública', 'Rua Porto Seguro', 4707, 'Varzea', 'Nordeste', 81, '33553220');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149753', 'Creche Municipal São Domingos Savio', 'Recife', 'PE', 'Pública', 'Rua Casados', 164, 'Santo Amaro', 'Nordeste', 81, '33554862');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149923', 'Creche Municipal São João', 'Recife', 'PE', 'Pública', 'Rua Dolcinopolis', 50, 'Macaxeira', 'Nordeste', 81, '33554360');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153440', 'Creche Municipal Senador Paulo Guerra', 'Recife', 'PE', 'Pública', 'Rua Engenho Canto Alegre', NULL, 'Imbiribeira', 'Nordeste', 81, '33553291');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170728', 'Creche Municipal Sitio Grande', 'Recife', 'PE', 'Pública', 'Rua Carlos Leoncio', 123, 'Imbiribeira', 'Nordeste', 81, '33553740');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171678', 'Creche Municipal Sonho de Criança', 'Recife', 'PE', 'Pública', 'Rua Teotonio de Melo Filho', 218, 'Ibura', 'Nordeste', 81, '33556621');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153068', 'Creche Municipal Sonho do Povo', 'Recife', 'PE', 'Pública', 'Rua Cordilheira', 1, 'Cohab', 'Nordeste', 81, '33554364');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157462', 'Creche Municipal Tia Emilia', 'Recife', 'PE', 'Pública', 'Rua Pedro Batista', NULL, 'Dois Unidos', 'Nordeste', 81, '33556466');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149826', 'Creche Municipal Unidos Venceremos', 'Recife', 'PE', 'Pública', 'Rua Corrego Jose Grande', 126, 'Alto Santa Terezinha', 'Nordeste', 81, '92667624');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26177820', 'Creche Municipal Vila dos Milagres', 'Recife', 'PE', 'Pública', 'Rua Miguel', 14, 'Cohab', 'Nordeste', 81, '33554866');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181274', 'Creche Municipal Vila Imperial', 'Recife', 'PE', 'Pública', 'Av Pedro de Melo Pedroza', 10, 'Arruda', 'Nordeste', 81, '33554999');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157560', 'Creche Municipal Vinde A Mim As Criancinhas', 'Recife', 'PE', 'Pública', 'Rua Edeia', 89, 'Madalena', 'Nordeste', 81, '33554870');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149818', 'Creche Municipal Vovo Artur', 'Recife', 'PE', 'Pública', 'Rua Coelhos', NULL, 'Coelhos', 'Nordeste', 81, '33554372');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149850', 'Creche Municipal Waldemar de Souza Cabral', 'Recife', 'PE', 'Pública', 'Rua Antonio Meira', 73, 'Água Fria', 'Nordeste', 81, '33556849');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153351', 'Creche Municipal Waldir Savluschinske', 'Recife', 'PE', 'Pública', 'Rua Alvaro Teixeira de Mesquita', NULL, 'Engenho do Meio', 'Nordeste', 81, '33554090');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149834', 'Creche Municipal Zacarias do Rego Maciel', 'Recife', 'PE', 'Pública', 'Avenida Anibal Benevolo', 1536, 'Fundao', 'Nordeste', 81, '33556925');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26180685', 'Creche Municipal Zilda Arns', 'Recife', 'PE', 'Pública', 'Rua Antonio Paes Barreto', 1, 'Imbiribeira', 'Nordeste', 81, '33554306');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125986', 'Escola Ana Malta da Costa Azevedo', 'Recife', 'PE', 'Pública', 'Rua Padre Oliveira', 684, 'Bomba do Hemeterio', 'Nordeste', 81, '32657464');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122987', 'Escola Carmela Dutra', 'Recife', 'PE', 'Pública', 'Rua General Souza Doca', NULL, 'Afogados', 'Nordeste', 81, '31812720');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126559', 'Escola Comandante Luiz Gomes', 'Recife', 'PE', 'Pública', 'Avenida Vereador Otacilio Azevedo', 2567, 'Nova Descoberta', 'Nordeste', 81, '31814813');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119730', 'Escola de Aplicacao do Recife', 'Recife', 'PE', 'Pública', 'Avenida Eport Club do Recife', 252, 'Madalena', 'Nordeste', 81, '31818646');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121867', 'Escola de Referencia Em Ensino Fundamental Conego Rochael de Medeiros', 'Recife', 'PE', 'Pública', 'Avenida Mario Melo', NULL, 'Santo Amaro', 'Nordeste', 81, '31812754');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126052', 'Escola de Referencia Em Ensino Fundamental Coronel Othon', 'Recife', 'PE', 'Pública', 'Rua Ida', 200, 'Macaxeira', 'Nordeste', 81, '31812812');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123150', 'Escola de Referencia Em Ensino Fundamental Creusa Barreto Dornelas', 'Recife', 'PE', 'Pública', 'Rua Cantora Clara Nunes', NULL, 'Torre', 'Nordeste', 81, '31812945');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124572', 'Escola de Referencia Em Ensino Fundamental Delmiro Gouveia', 'Recife', 'PE', 'Pública', 'Avenida Conselheiro Aguiar', NULL, 'Pina', 'Nordeste', 81, '31813991');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125013', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Gercino de Pontes', 'Recife', 'PE', 'Pública', 'Rua Alvaro Amorim', 375, 'Imbiribeira', 'Nordeste', 81, '31814863');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122227', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Governador Barbosa Lima', 'Recife', 'PE', 'Pública', 'Rua Joaquim Nabuco', 42, 'Gracas', 'Nordeste', 81, '31812869');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120100', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Professora Inalda Spinelli', 'Recife', 'PE', 'Pública', 'Rua Jorge Couceiro da Costa Eiras', 748, 'Boa Viagem', 'Nordeste', 81, '31813975');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123720', 'Escola de Referencia Em Ensino Fundamental e Médio Barão do Bonito', 'Recife', 'PE', 'Pública', 'Praca Quatro de Outubro', NULL, 'Areias', 'Nordeste', 81, '31813028');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127571', 'Escola de Referencia Em Ensino Fundamental e Médio Barros Carvalho', 'Recife', 'PE', 'Pública', 'Rua Honorio Correia', 167, 'Cordeiro', 'Nordeste', 81, '84944894');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124475', 'Escola de Referencia Em Ensino Fundamental e Médio Brigadeiro Eduardo Gomes', 'Recife', 'PE', 'Pública', 'Rua Barao de Souza Leao', NULL, 'Boa Viagem', 'Nordeste', 81, '31814113');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126010', 'Escola de Referencia Em Ensino Fundamental e Médio Caio Pereira', 'Recife', 'PE', 'Pública', 'Rua Alto Jose Bonifacio', NULL, 'Alto José Bonifácio', 'Nordeste', 81, '31812961');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122855', 'Escola de Referencia Em Ensino Fundamental e Médio Debora Feijo', 'Recife', 'PE', 'Pública', 'Rua Jovelino Selva', 71, 'Afogados', 'Nordeste', 81, '31813948');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126141', 'Escola de Referencia Em Ensino Fundamental e Médio Dona Maria Teresa Correa', 'Recife', 'PE', 'Pública', 'Rua Maragogi', NULL, 'Alto José do Pinho', 'Nordeste', 81, '31812751');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127636', 'Escola de Referencia Em Ensino Fundamental e Médio Educador Paulo Freire', 'Recife', 'PE', 'Pública', 'Avenida Engenheiro Abdias de Carvalho', NULL, 'San Martin', 'Nordeste', 81, '31812804');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126206', 'Escola de Referencia Em Ensino Fundamental e Médio Gilberto Freyre', 'Recife', 'PE', 'Pública', 'Alto Treze de Maio', NULL, 'Vasco da Gama', 'Nordeste', 81, '31812753');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128195', 'Escola de Referencia Em Ensino Fundamental e Médio Jarbas Pernambucano', 'Recife', 'PE', 'Pública', 'Rua Marques de Tamandare', NULL, 'Cajueiro', 'Nordeste', 81, '31813994');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127695', 'Escola de Referencia Em Ensino Fundamental e Médio Joaquim Xavier de Brito', 'Recife', 'PE', 'Pública', 'Rua Cordislandia', 1120, 'Iputinga', 'Nordeste', 81, '98494549');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124645', 'Escola de Referencia Em Ensino Fundamental e Médio Jornalista Costa Porto', 'Recife', 'PE', 'Pública', 'Rua Bahia', NULL, 'Jordao Baixo', 'Nordeste', 81, '31814726');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120992', 'Escola de Referencia Em Ensino Fundamental e Médio Liceu de Artes e Oficios', 'Recife', 'PE', 'Pública', 'Avenida Oliveira Lima', 824, 'Boa Vista', 'Nordeste', 81, '21194112');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125650', 'Escola de Referencia Em Ensino Fundamental e Médio Lions de Parnamirim', 'Recife', 'PE', 'Pública', 'Av Dom Manoel de Medeiros', NULL, 'Dois Irmaos', 'Nordeste', 81, '31812917');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124670', 'Escola de Referencia Em Ensino Fundamental e Médio Marechal Eurico Gaspar Dutra', 'Recife', 'PE', 'Pública', 'Rua Sergio Buarque de Holanda', 27906, 'Ibura', 'Nordeste', 81, '31814766');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26107651', 'Escola de Referencia Em Ensino Fundamental e Médio Maria da Conceicao do Rego Barros Lacerda', 'Recife', 'PE', 'Pública', 'Rua Vale do Jaguaribe', NULL, 'Varzea', 'Nordeste', 81, '31814094');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125943', 'Escola de Referencia Em Ensino Fundamental e Médio Monsenhor Manoel Marques', 'Recife', 'PE', 'Pública', 'Rua Desembargador Heraclito Cavalcanti', NULL, 'Mangabeira', 'Nordeste', 81, '31812762');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125358', 'Escola de Referencia Em Ensino Fundamental e Médio Monte Verde', 'Recife', 'PE', 'Pública', 'Rua Maria Lima da Silva', NULL, 'Cohab', 'Nordeste', 81, '31814720');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126443', 'Escola de Referencia Em Ensino Fundamental e Médio Nossa Senhora de Fatima', 'Recife', 'PE', 'Pública', 'Estrada da Mumbeca', 016, 'Guabiraba', 'Nordeste', 81, '31814744');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127431', 'Escola de Referencia Em Ensino Fundamental e Médio Professor Leal de Barros', 'Recife', 'PE', 'Pública', 'Rua Antonio Borges Uchoa', NULL, 'Engenho do Meio', 'Nordeste', 81, '31814866');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124920', 'Escola de Referencia Em Ensino Fundamental e Médio São Francisco de Assis', 'Recife', 'PE', 'Pública', 'Rua Sargento Silvio Delmar Hollembach', NULL, 'Imbiribeira', 'Nordeste', 81, '31814155');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128594', 'Escola de Referencia Em Ensino Fundamental e Médio São Miguel', 'Recife', 'PE', 'Pública', '2ª Travessa Siriji', NULL, 'Monteiro', 'Nordeste', 81, '31813937');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127512', 'Escola de Referencia Em Ensino Fundamental e Médio Senador Novaes Filho', 'Recife', 'PE', 'Pública', 'Rua Dona Maria Lacerda', NULL, 'Varzea', 'Nordeste', 81, '31812889');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122553', 'Escola de Referencia Em Ensino Fundamental Embaixador Gilberto Amado', 'Recife', 'PE', 'Pública', 'Rua Gaspar Regueira', NULL, 'Hipodromo', 'Nordeste', 81, '31812769');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121620', 'Escola de Referencia Em Ensino Fundamental João Barbalho', 'Recife', 'PE', 'Pública', 'Rua do Hospicio', 737, 'Santo Amaro', 'Nordeste', 81, '31812830');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125080', 'Escola de Referencia Em Ensino Fundamental Luis de Camoes', 'Recife', 'PE', 'Pública', 'Rua Doutor Henrique Lins', NULL, 'Brasilia Teimosa', 'Nordeste', 81, '31814088');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123231', 'Escola de Referencia Em Ensino Fundamental Maciel Pinheiro', 'Recife', 'PE', 'Pública', 'Praca Professor Barreto Campelo', 1085, 'Torre', 'Nordeste', 81, '33038049');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123525', 'Escola de Referencia Em Ensino Fundamental Marcelino Champagnat', 'Recife', 'PE', 'Pública', 'Rua Rivadavia Guerra', 55, 'Tejipio', 'Nordeste', 81, '31813040');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123240', 'Escola de Referencia Em Ensino Fundamental Maria Goretti', 'Recife', 'PE', 'Pública', 'Estrada dos Remedios', 1603, 'Afogados', 'Nordeste', 81, '31812742');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153491', 'Escola de Referencia Em Ensino Fundamental Monsenhor Manoel Leonardo de Barros Barreto', 'Recife', 'PE', 'Pública', 'Rua Arariba', NULL, 'Sao Jose', 'Nordeste', 81, '31813091');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124777', 'Escola de Referencia Em Ensino Fundamental Othon Bezerra de Melo', 'Recife', 'PE', 'Pública', 'Rua Virginia Heraclio', 899, 'Ipsep', 'Nordeste', 81, '31813092');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127423', 'Escola de Referencia Em Ensino Fundamental Pintor Lauro Villares', 'Recife', 'PE', 'Pública', 'Rua Clarice Lispector', NULL, 'Torroes', 'Nordeste', 81, '31812924');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122880', 'Escola de Referencia Em Ensino Fundamental Presidente Arthur da Costa e Silva', 'Recife', 'PE', 'Pública', 'Rua Tejucupapo', 536, 'Mustardinha', 'Nordeste', 81, '31812940');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127865', 'Escola de Referencia Em Ensino Fundamental Professor Candido Duarte', 'Recife', 'PE', 'Pública', 'Praca Pinto Damasio', NULL, 'Varzea', 'Nordeste', 81, '31812965');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124424', 'Escola de Referencia Em Ensino Fundamental Professor Marcos de Barros Freire', 'Recife', 'PE', 'Pública', 'Avenida Engenho Babilonia', NULL, 'Cohab', 'Nordeste', 81, '31814054');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122260', 'Escola de Referencia Em Ensino Fundamental Professor Motta e Albuquerque', 'Recife', 'PE', 'Pública', 'Rua Soares Moreno', 117, 'Tamarineira', 'Nordeste', 81, '32686944');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128462', 'Escola de Referencia Em Ensino Fundamental Professor Pedro Augusto Carneiro Leao', 'Recife', 'PE', 'Pública', 'Av.beberibe', 2595, 'Fundao', 'Nordeste', 81, '31813079');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123584', 'Escola de Referencia Em Ensino Fundamental Professora Olindina Alves Semente', 'Recife', 'PE', 'Pública', 'Rua Paulo Afonso', NULL, 'Barro', 'Nordeste', 81, '31813961');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125293', 'Escola de Referencia Em Ensino Fundamental Senador Antonio Farias', 'Recife', 'PE', 'Pública', 'Rua Ibirapua', 757, 'Cohab', 'Nordeste', 81, '31814820');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122952', 'Escola de Referencia Em Ensino Fundamental Senador Nilo de Souza Coelho', 'Recife', 'PE', 'Pública', 'Avenida Recife 4316', NULL, 'Estancia', 'Nordeste', 81, '31813906');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124904', 'Escola de Referencia Em Ensino Fundamental Vila dos Milagres', 'Recife', 'PE', 'Pública', 'Rua Nossa Senhora do Carmo', 340, 'Ibura', 'Nordeste', 81, '31814712');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126079', 'Escola de Referencia Em Ensino Médio Ageu Magalhaes', 'Recife', 'PE', 'Pública', 'Estrada do Arraial', 3208, 'Tamarineira', 'Nordeste', 81, '32663960');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123479', 'Escola de Referencia Em Ensino Médio Alberto Torres', 'Recife', 'PE', 'Pública', 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 'Nordeste', 81, '31812774');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125978', 'Escola de Referencia Em Ensino Médio Alvaro Lins', 'Recife', 'PE', 'Pública', 'Av Vereador Otacilio Azevedo', 4538, 'Nova Descoberta', 'Nordeste', 81, '31814804');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122847', 'Escola de Referencia Em Ensino Médio Amaury de Medeiros', 'Recife', 'PE', 'Pública', 'Rua Sao Miguel', NULL, 'Afogados', 'Nordeste', 81, '31812737');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123703', 'Escola de Referencia Em Ensino Médio Anibal Falcao', 'Recife', 'PE', 'Pública', 'Rua Aprigio Guimaraes', 102, 'Tejipio', 'Nordeste', 81, '31812708');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121859', 'Escola de Referencia Em Ensino Médio Anibal Fernandes', 'Recife', 'PE', 'Pública', 'Rua Marques do Pombal', 730, 'Santo Amaro', 'Nordeste', 81, '31812712');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124432', 'Escola de Referencia Em Ensino Médio Apolonio Sales', 'Recife', 'PE', 'Pública', 'Rua Professor Jose Brasileiro Vila Nova', 38, 'Ibura de Baixo', 'Nordeste', 81, '31813988');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124440', 'Escola de Referencia Em Ensino Médio Assis Chateaubriand', 'Recife', 'PE', 'Pública', 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 'Nordeste', 81, '31813008');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126044', 'Escola de Referencia Em Ensino Médio Clotilde de Oliveira', 'Recife', 'PE', 'Pública', 'Avenida Norte', 6760, 'Casa Amarela', 'Nordeste', 81, '32680002');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122510', 'Escola de Referencia Em Ensino Médio Clovis Bevilaqua', 'Recife', 'PE', 'Pública', 'Rua Carlos Fernandes', 185, 'Hipodromo', 'Nordeste', 81, '31812803');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128101', 'Escola de Referencia Em Ensino Médio de Beberibe', 'Recife', 'PE', 'Pública', 'Rua Uriel de Holanda', 219, 'Beberibe', 'Nordeste', 81, '31812861');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127300', 'Escola de Referencia Em Ensino Médio Diario de Pernambuco', 'Recife', 'PE', 'Pública', 'Rua Costa Sepulveda', NULL, 'Engenho do Meio', 'Nordeste', 81, '984944878');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124785', 'Escola de Referencia Em Ensino Médio Dom Sebastiao Leme', 'Recife', 'PE', 'Pública', 'Avenida Engenho Muribara', NULL, 'Cohab', 'Nordeste', 81, '31812837');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126133', 'Escola de Referencia Em Ensino Médio Dom Vital', 'Recife', 'PE', 'Pública', 'Estrada do Arraial', 4051, 'Casa Amarela', 'Nordeste', 81, '31814099');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124580', 'Escola de Referencia Em Ensino Médio Eleanor Roosevelt', 'Recife', 'PE', 'Pública', 'Rua Aracatuba', 43, 'Ipsep', 'Nordeste', 81, '31812786');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124602', 'Escola de Referencia Em Ensino Médio Engenheiro Lauro Diniz', 'Recife', 'PE', 'Pública', 'Rua Saturnino Meireles', 180, 'Ipsep', 'Nordeste', 81, '31812827');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26172712', 'Escola de Referencia Em Ensino Médio Ginasio Pernambucano - Aurora', 'Recife', 'PE', 'Pública', 'Rua da Aurora', 703, 'Boa Vista', 'Nordeste', 81, '31814777');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121247', 'Escola de Referencia Em Ensino Médio Joaquim Nabuco', 'Recife', 'PE', 'Pública', 'Rua Imperial', 1102, 'Sao Jose', 'Nordeste', 81, '31812796');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123282', 'Escola de Referencia Em Ensino Médio Joaquim Tavora', 'Recife', 'PE', 'Pública', 'Rua Real da Torre', NULL, 'Madalena', 'Nordeste', 81, '31812794');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127334', 'Escola de Referencia Em Ensino Médio Jornalista Trajano Chacon', 'Recife', 'PE', 'Pública', 'Avenida Forte do Arraial Novo do Bom Jesus', NULL, 'Cordeiro', 'Nordeste', 81, '31812675');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123517', 'Escola de Referencia Em Ensino Médio José Mariano', 'Recife', 'PE', 'Pública', 'Avenida Doutor Jose Rufino', 892, 'Estancia', 'Nordeste', 81, '31813067');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125641', 'Escola de Referencia Em Ensino Médio José Vilela', 'Recife', 'PE', 'Pública', 'Estrada do Encanamento', 277, 'Casa Forte', 'Nordeste', 81, '32683110');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124653', 'Escola de Referencia Em Ensino Médio Lagoa Encantada', 'Recife', 'PE', 'Pública', 'Rua Doutor Moacir Sales', NULL, 'Cohab', 'Nordeste', 81, '31813033');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121344', 'Escola de Referencia Em Ensino Médio Luiz Delgado', 'Recife', 'PE', 'Pública', 'Rua do Hospicio', NULL, 'Boa Vista', 'Nordeste', 81, '31813039');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121310', 'Escola de Referencia Em Ensino Médio Manoel Borba', 'Recife', 'PE', 'Pública', 'Rua Almirante Nelson Fernandes', NULL, 'Boa Viagem', 'Nordeste', 81, '31813947');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124696', 'Escola de Referencia Em Ensino Médio Maria Rita da Silva Lessa', 'Recife', 'PE', 'Pública', 'Avenida Industrial Mendo Sampaio', NULL, 'Jordao', 'Nordeste', 81, '31814789');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123258', 'Escola de Referencia Em Ensino Médio Martins Junior', 'Recife', 'PE', 'Pública', 'Rua Padre Jose Regueira', 136, 'Torre', 'Nordeste', 81, '31813094');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179610', 'Escola de Referencia Em Ensino Médio Nobrega', 'Recife', 'PE', 'Pública', 'Estrada de Belem', 257, 'Encruzilhada', 'Nordeste', 81, '31812883');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127415', 'Escola de Referencia Em Ensino Médio Olinto Victor', 'Recife', 'PE', 'Pública', 'Avenida Afonso Olindense', 153, 'Varzea', 'Nordeste', 81, '31812914');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121654', 'Escola de Referencia Em Ensino Médio Oliveira Lima', 'Recife', 'PE', 'Pública', 'Rua Barao de Sao Borja', 347, 'Soledade', 'Nordeste', 81, '31812792');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122839', 'Escola de Referencia Em Ensino Médio Othon Paraiso', 'Recife', 'PE', 'Pública', 'Avenida Manoel Goncalves da Luz', 140, 'Bongi', 'Nordeste', 81, '994889836');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126109', 'Escola de Referencia Em Ensino Médio Padre Machado', 'Recife', 'PE', 'Pública', 'Rua Major Nereu Guerra', 92, 'Casa Amarela', 'Nordeste', 81, '32672812');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128403', 'Escola de Referencia Em Ensino Médio Padre Nercio Rodrigues', 'Recife', 'PE', 'Pública', 'Rua Uriel de Holanda', 1300, 'Linha do Tiro', 'Nordeste', 81, '31812901');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128420', 'Escola de Referencia Em Ensino Médio Pedro Celso', 'Recife', 'PE', 'Pública', 'Rua Uriel de Holanda', NULL, 'Beberibe', 'Nordeste', 81, '31813940');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121670', 'Escola de Referencia Em Ensino Médio Poeta Manuel Bandeira', 'Recife', 'PE', 'Pública', 'Praca Doutor Fernando Figueira', NULL, 'Ilha do Leite', 'Nordeste', 81, '31812896');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188295', 'Escola de Referencia Em Ensino Médio Pompeia Campos', 'Recife', 'PE', 'Pública', 'Avenida Norte Miguel Arraes de Alencar', 7487, 'Macaxeira', 'Nordeste', 81, '31813030');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123576', 'Escola de Referencia Em Ensino Médio Presidente Humberto Castelo Branco', 'Recife', 'PE', 'Pública', 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 'Nordeste', 81, '32529941');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125757', 'Escola de Referencia Em Ensino Médio Professor Candido Duarte', 'Recife', 'PE', 'Pública', 'Av Dois Irmaos', NULL, 'Dois Irmaos', 'Nordeste', 81, '31814806');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125250', 'Escola de Referencia Em Ensino Médio Professor Fernando Mota', 'Recife', 'PE', 'Pública', 'Rua Copacabana', NULL, 'Boa Viagem', 'Nordeste', 81, '31813052');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186241', 'Escola de Referencia Em Ensino Médio Professor Jordao Emerenciano', 'Recife', 'PE', 'Pública', 'Avenida Santarem', 2, 'Cohab', 'Nordeste', 81, '31814859');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128721', 'Escola de Referencia Em Ensino Médio Professor Mardonio de Andrade Lima Coelho', 'Recife', 'PE', 'Pública', 'Rua Cha de Alegria', 117, 'Bomba do Hemeterio', 'Nordeste', 81, '34519993');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123592', 'Escola de Referencia Em Ensino Médio Professor Trajano de Mendonca', 'Recife', 'PE', 'Pública', 'Rua Capetinga', NULL, 'Jardim Sao Paulo', 'Nordeste', 81, '31813065');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127741', 'Escola de Referencia Em Ensino Médio Professora Helena Pugo', 'Recife', 'PE', 'Pública', 'Rua Quinze de Marco', NULL, 'San Martin', 'Nordeste', 81, '31814709');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122278', 'Escola de Referencia Em Ensino Médio Regueira Costa', 'Recife', 'PE', 'Pública', 'Rua Regueira Costa', NULL, 'Rosarinho', 'Nordeste', 81, '31812923');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126613', 'Escola de Referencia Em Ensino Médio Rosa de Magalhaes Melo', 'Recife', 'PE', 'Pública', 'Av Anibal Benevolo', 1378, 'Alto Santa Terezinha', 'Nordeste', 81, '31813072');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126621', 'Escola de Referencia Em Ensino Médio Rotary de Nova Descoberta', 'Recife', 'PE', 'Pública', 'Av Otacilio de Azevedo', NULL, 'Nova Descoberta', 'Nordeste', 81, '31814827');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122677', 'Escola de Referencia Em Ensino Médio Santa Paula Frassinetti', 'Recife', 'PE', 'Pública', 'Rua Gomes Pacheco', NULL, 'Espinheiro', 'Nordeste', 81, '31813054');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124190', 'Escola de Referencia Em Ensino Médio Santos Dumont', 'Recife', 'PE', 'Pública', 'Rua Barao de Souza Leao', 792, 'Boa Viagem', 'Nordeste', 81, '31813080');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118742', 'Escola de Referencia Em Ensino Médio Senador Paulo Pessoa Guerra', 'Recife', 'PE', 'Pública', 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 'Nordeste', 81, '31813016');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125781', 'Escola de Referencia Em Ensino Médio Silva Jardim', 'Recife', 'PE', 'Pública', 'Praca do Monteiro', 2727, 'Monteiro', 'Nordeste', 81, '31814110');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121921', 'Escola de Referencia Em Ensino Médio Sizenando Silveira', 'Recife', 'PE', 'Pública', 'Avenida Jornalista Mario Melo', NULL, 'Santo Amaro', 'Nordeste', 81, '31813943');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121948', 'Escola de Referencia Em Ensino Médio Sylvio Rabello', 'Recife', 'PE', 'Pública', 'Avenida Jornalista Mario Melo', NULL, 'Santo Amaro', 'Nordeste', 81, '34211318');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122960', 'Escola de Referencia Em Ensino Médio Vidal de Negreiros', 'Recife', 'PE', 'Pública', 'Rua Bezerra da Palma', NULL, 'Afogados', 'Nordeste', 81, '31812863');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122545', 'Escola Dom Carlos Coelho - Recife', 'Recife', 'PE', 'Pública', 'Rua Marechal Deodoro', 626533534, 'Campo Grande', 'Nordeste', 81, '31812718');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128160', 'Escola Doutor Fabio Correa', 'Recife', 'PE', 'Pública', 'Av. Adalberto Elias da Costa', NULL, 'Beberibe', 'Nordeste', 81, '31813043');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128179', 'Escola Doutor Francisco Pessoa de Queiroz', 'Recife', 'PE', 'Pública', 'Avenida Hildebrando de Vasconcelos', NULL, 'Dois Unidos', 'Nordeste', 81, '34987749');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123509', 'Escola Edwiges de Sa Pereira', 'Recife', 'PE', 'Pública', 'Rua Rivadavia Guerra', 50, 'Tejipio', 'Nordeste', 81, '31812872');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124599', 'Escola Eneida Rabello', 'Recife', 'PE', 'Pública', 'Avenida Dona Carentina', NULL, 'Jordao Alto', 'Nordeste', 81, '31812869');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126150', 'Escola Erundina Negreiros de Araujo', 'Recife', 'PE', 'Pública', 'Rua Erundina Negreiros de Araujo', NULL, 'Corrego do Jenipapo', 'Nordeste', 81, '32672922');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182629', 'Escola Estadual Nossa Senhora das Gracas - Recife', 'Recife', 'PE', 'Pública', 'Rua Orfeu Carnaval', NULL, 'Sancho', 'Nordeste', 81, '31812638');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127857', 'Escola Fernandes Vieira', 'Recife', 'PE', 'Pública', 'Avenida Caxanga', 3595, 'Iputinga', 'Nordeste', 81, '31812790');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126192', 'Escola Gabriela Mistral', 'Recife', 'PE', 'Pública', 'Rua Ladeira de Pedra', NULL, 'Água Fria', 'Nordeste', 81, '31812963');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126214', 'Escola Gov Carlos de Lima Cavalcanti', 'Recife', 'PE', 'Pública', 'Rua Desembargador Motta Junior', 120, 'Casa Amarela', 'Nordeste', 81, '31812746');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123770', 'Escola Herois da Restauracao', 'Recife', 'PE', 'Pública', 'Rua Oiticica Lins', NULL, 'Areias', 'Nordeste', 81, '31812714');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126230', 'Escola Irma Magna', 'Recife', 'PE', 'Pública', 'Av Vereador Otacilio Azevedo', 288, 'Casa Amarela', 'Nordeste', 81, '31813959');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121891', 'Escola José Maria', 'Recife', 'PE', 'Pública', 'Rua Treze de Maio', NULL, 'Santo Amaro', 'Nordeste', 81, '31812844');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125072', 'Escola Landelino Rocha', 'Recife', 'PE', 'Pública', 'Rua Capitao Rebelinho', NULL, 'Pina', 'Nordeste', 81, '31813050');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126290', 'Escola Maria Amalia', 'Recife', 'PE', 'Pública', 'Avenida Norte', 7750, 'Macaxeira', 'Nordeste', 81, '31814710');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126311', 'Escola Matias de Albuquerque', 'Recife', 'PE', 'Pública', 'R. Fernando de Sousa Caete', NULL, 'Casa Amarela', 'Nordeste', 81, '32668088');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124874', 'Escola Missionario São Bento', 'Recife', 'PE', 'Pública', 'Rua Capitao Vicente Curado', 350, 'Cohab', 'Nordeste', 81, '31814714');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123533', 'Escola Monsenhor Alvaro Negromonte', 'Recife', 'PE', 'Pública', 'Rua Onze de Agosto', NULL, 'Toto', 'Nordeste', 81, '31814851');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121638', 'Escola Monsenhor Francisco Salles', 'Recife', 'PE', 'Pública', 'Av Oliveira Lima', 1029, 'Boa Vista', 'Nordeste', 81, '32223600');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124173', 'Escola Municipal 14 Bis', 'Recife', 'PE', 'Pública', 'Rua Nelson Fernandes', NULL, 'Boa Viagem', 'Nordeste', 81, '33550419');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26154846', 'Escola Municipal 27 de Novembro', 'Recife', 'PE', 'Pública', 'Av Doze de Junho', 1120, 'Cohab', 'Nordeste', 81, '33553534');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124092', 'Escola Municipal Abilio Gomes', 'Recife', 'PE', 'Pública', 'Rua Bruno Veloso', NULL, 'Boa Viagem', 'Nordeste', 81, '33553462');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128110', 'Escola Municipal Alda Romeu', 'Recife', 'PE', 'Pública', 'Rua Corrego do Deodato', 685, 'Água Fria', 'Nordeste', 81, '33553490');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120658', 'Escola Municipal Almirante Soares Dutra', 'Recife', 'PE', 'Pública', 'Rua Camutanga', 180, 'Cabanga', 'Nordeste', 81, '33553880');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123380', 'Escola Municipal Alto da Bela Vista', 'Recife', 'PE', 'Pública', 'Rua Alto da Bela Vista', 338, 'Coqueiral', 'Nordeste', 81, '33550121');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126370', 'Escola Municipal Alto da Guabiraba', 'Recife', 'PE', 'Pública', 'Rua Costa e Silva', NULL, 'Brejo da Guabiraba', 'Nordeste', 81, '33554036');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26136300', 'Escola Municipal Alto do Maracana', 'Recife', 'PE', 'Pública', 'Rua Vila Flor', 356, 'Dois Unidos', 'Nordeste', 81, '33554887');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166593', 'Escola Municipal Alto do Pascoal', 'Recife', 'PE', 'Pública', 'Rua Ladeira de Pedra', 1265, 'Água Fria', 'Nordeste', 81, '33554221');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149370', 'Escola Municipal Alto do Refugio Ivan Neves', 'Recife', 'PE', 'Pública', 'Rua Alto do Refugio', 250, 'Brejo de Beberibe', 'Nordeste', 81, '33554468');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125854', 'Escola Municipal Alto Jardim Progresso', 'Recife', 'PE', 'Pública', 'Rua Alto Jardim Progresso', 300, 'Nova Descoberta', 'Nordeste', 81, '33553430');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139723', 'Escola Municipal Alto Santa Terezinha', 'Recife', 'PE', 'Pública', 'Avenida Anibal Benevolo', NULL, 'Fundao', 'Nordeste', 81, '33553856');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128764', 'Escola Municipal Ana Mauricia Wanderley', 'Recife', 'PE', 'Pública', 'Rua Joao Uzeda Luna', 813, 'Água Fria', 'Nordeste', 81, '33554890');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123541', 'Escola Municipal Andre de Melo', 'Recife', 'PE', 'Pública', 'Rua Morais e Silva', 180, 'Estancia', 'Nordeste', 81, '33553780');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175371', 'Escola Municipal Anexa Casa Amarela', 'Recife', 'PE', 'Pública', 'Rua Corrego da Areia', 568, 'Macaxeira', 'Nordeste', 81, '33554910');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128926', 'Escola Municipal Anita Paes Barreto', 'Recife', 'PE', 'Pública', 'Rua Geroncio Falcao', 198, 'Fundao', 'Nordeste', 81, '34984125');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117576', 'Escola Municipal Antonio Farias Filho', 'Recife', 'PE', 'Pública', 'Rua Vinte e Um de Abril', NULL, 'San Martin', 'Nordeste', 81, '33554902');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128640', 'Escola Municipal Antonio Heraclio do Rego', 'Recife', 'PE', 'Pública', 'Rua Manoel Silva', 134, 'Água Fria', 'Nordeste', 81, '33554228');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128659', 'Escola Municipal Antonio Luiz', 'Recife', 'PE', 'Pública', 'Rua Joao Batista', 134, 'Água Fria', 'Nordeste', 81, '33553792');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128772', 'Escola Municipal Antonio Tiburcio', 'Recife', 'PE', 'Pública', 'Rua Tamboara', 356, 'Alto Santa Terezinha', 'Nordeste', 81, '33556873');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125994', 'Escola Municipal Arquiteto Alexandre Muniz de Oliveira', 'Recife', 'PE', 'Pública', 'Rua Alto do Venacio', 120, 'Corrego do Jenipapo', 'Nordeste', 81, '33553579');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127369', 'Escola Municipal Arraial Novo do Bom Jesus', 'Recife', 'PE', 'Pública', 'Est Forte do Arraial N. do B. Jesus', 1340, 'Torroes', 'Nordeste', 81, '33554123');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171716', 'Escola Municipal Artista Plastico Cicero Dias', 'Recife', 'PE', 'Pública', 'Rua Vale do Cariri', 29005, 'Cohab', 'Nordeste', 81, '33556294');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170639', 'Escola Municipal Asa Branca', 'Recife', 'PE', 'Pública', 'Rua Maria Adelaide Castelo Branco', 55, 'Cohab', 'Nordeste', 81, '33556923');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120682', 'Escola Municipal Balbina Menelau', 'Recife', 'PE', 'Pública', 'Rua Joao de Andrade', 82, 'Jardim Sao Paulo', 'Nordeste', 81, '33553992');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124467', 'Escola Municipal Beato Eugenio Mazenod', 'Recife', 'PE', 'Pública', 'Av Luxemburgo', 303, 'Imbiribeira', 'Nordeste', 81, '33556937');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126869', 'Escola Municipal Boa Esperanca', 'Recife', 'PE', 'Pública', 'Rua Pedra Bonita', 80, 'Vasco da Gama', 'Nordeste', 81, '33556482');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26491710', 'Escola Municipal Bola Na Rede', 'Recife', 'PE', 'Pública', 'Rua Artur Orlando de Andrade Bezerra', 100, 'Guabiraba', 'Nordeste', 81, '91674563');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166623', 'Escola Municipal Campina do Barreto', 'Recife', 'PE', 'Pública', 'Rua Virgilio de Melo Franco', 28, 'Cajueiro', 'Nordeste', 81, '33554212');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124483', 'Escola Municipal Capela Santo Antonio', 'Recife', 'PE', 'Pública', 'Rua Sandalo', NULL, 'Imbiribeira', 'Nordeste', 81, '33554926');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171767', 'Escola Municipal Carlucio de Souza Castanha Junior', 'Recife', 'PE', 'Pública', 'Av Pernambuco', 1, 'Cohab', 'Nordeste', 81, '33553744');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123444', 'Escola Municipal Casa dos Ferroviarios', 'Recife', 'PE', 'Pública', 'Rua Jose Cornelio', 84, 'Coqueiral', 'Nordeste', 81, '33553556');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127016', 'Escola Municipal Casarao do Barbalho', 'Recife', 'PE', 'Pública', 'Est Barbalho', 1595, 'Iputinga', 'Nordeste', 81, '33553864');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175363', 'Escola Municipal Cecilia Meirelles', 'Recife', 'PE', 'Pública', 'Rua Linch', 189, 'Macaxeira', 'Nordeste', 81, '33554914');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127024', 'Escola Municipal Celia Arraes', 'Recife', 'PE', 'Pública', 'Rua Jose Noya', 131, 'Varzea', 'Nordeste', 81, '33554918');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170779', 'Escola Municipal Chico Mendes', 'Recife', 'PE', 'Pública', 'Trv Campo', NULL, 'Cacote', 'Nordeste', 81, '33554476');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26419734', 'Escola Municipal Chico Science', 'Recife', 'PE', 'Pública', 'Rua Catigua', 112, 'Vasco da Gama', 'Nordeste', 81, '92281580');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124513', 'Escola Municipal Cicero Franklin Cordeiro', 'Recife', 'PE', 'Pública', 'Rua Felipe dos Santos', 11105, 'Cohab', 'Nordeste', 81, '33553560');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121972', 'Escola Municipal Cidadao Herbert de Souza', 'Recife', 'PE', 'Pública', 'Rua Arnobio Marques', 310, 'Santo Amaro', 'Nordeste', 81, '33554080');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190079', 'Escola Municipal Clarice Lispector', 'Recife', 'PE', 'Pública', 'Rua Erval', NULL, 'Ipsep', 'Nordeste', 81, '33550074');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26212200', 'Escola Municipal Compositor Capiba', 'Recife', 'PE', 'Pública', 'Rua Othon Paraiso', 375, 'Torreao', 'Nordeste', 81, '33553768');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128780', 'Escola Municipal Compositor Levino Ferreira', 'Recife', 'PE', 'Pública', 'Rua Corrego Jose Grande', 1441, 'Alto José Bonifácio', 'Nordeste', 81, '33554922');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126680', 'Escola Municipal Corrego da Areia', 'Recife', 'PE', 'Pública', 'Rua Corrego da Areia', 5449, 'Nova Descoberta', 'Nordeste', 81, '92975522');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126362', 'Escola Municipal Corrego da Bica', 'Recife', 'PE', 'Pública', 'Rua Corrego da Bica', NULL, 'Passarinho', 'Nordeste', 81, '33554456');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158752', 'Escola Municipal Corrego do Euclides', 'Recife', 'PE', 'Pública', 'Rua Tibirica', 48, 'Morro da Conceicao', 'Nordeste', 81, '33553494');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127008', 'Escola Municipal Creusa de Freitas Cavalcanti', 'Recife', 'PE', 'Pública', 'Rua Epaminondas Cristovao de Oliveira', NULL, 'Torroes', 'Nordeste', 81, '33553938');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133837', 'Escola Municipal Cristiano Cordeiro', 'Recife', 'PE', 'Pública', 'Av Santos', 2, 'Cohab', 'Nordeste', 81, '33553796');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171740', 'Escola Municipal da Guabiraba', 'Recife', 'PE', 'Pública', 'Rua Cassiterita', 395, 'Brejo da Guabiraba', 'Nordeste', 81, '33554200');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119218', 'Escola Municipal da Iputinga', 'Recife', 'PE', 'Pública', 'Rua Fernando Furtado', 479, 'Iputinga', 'Nordeste', 81, '33554097');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128233', 'Escola Municipal da Mangabeira', 'Recife', 'PE', 'Pública', 'Rua Niceas Arcoverde Gusmao', NULL, 'Mangabeira', 'Nordeste', 81, '91004334');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153424', 'Escola Municipal Darcy Ribeiro', 'Recife', 'PE', 'Pública', 'Rua Odete Monteiro', 450, 'Cordeiro', 'Nordeste', 81, '33554110');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166640', 'Escola Municipal de Agua Fria', 'Recife', 'PE', 'Pública', 'Rua Craveiros', 500, 'Campina do Barreto', 'Nordeste', 81, '33554488');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166607', 'Escola Municipal de Beberibe', 'Recife', 'PE', 'Pública', 'Rua Melanio de Barros Correia', 25, 'Beberibe', 'Nordeste', 81, '33553652');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166658', 'Escola Municipal de Casa Amarela', 'Recife', 'PE', 'Pública', 'Rua Corrego da Areia', 287, 'Macaxeira', 'Nordeste', 81, '92884414');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119129', 'Escola Municipal de Dois Rios', 'Recife', 'PE', 'Pública', 'Rua Maria Evangelista', 83, 'Cohab', 'Nordeste', 81, '33553600');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123550', 'Escola Municipal de Tejipio', 'Recife', 'PE', 'Pública', 'Rua Tutoia', 165, 'Coqueiral', 'Nordeste', 81, '33556897');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158329', 'Escola Municipal Deputado Edson Cantarelli', 'Recife', 'PE', 'Pública', 'Rua Rubineia', 49, 'Ibura', 'Nordeste', 81, '33553788');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132267', 'Escola Municipal Deputado Fernando Sampaio', 'Recife', 'PE', 'Pública', 'Alto do Olho Dagua', 105, 'Nova Descoberta', 'Nordeste', 81, '33554930');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128888', 'Escola Municipal Deus e Amor', 'Recife', 'PE', 'Pública', 'Rua Ladeira de Pedra', 395, 'Água Fria', 'Nordeste', 81, '33554216');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170647', 'Escola Municipal Diacono Abel Gueiros', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 7696, 'Macaxeira', 'Nordeste', 81, '33553705');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26155850', 'Escola Municipal Dina de Oliveira', 'Recife', 'PE', 'Pública', 'Rua Mateus', NULL, 'Iputinga', 'Nordeste', 81, '33554204');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127520', 'Escola Municipal Divino Espirito Santo', 'Recife', 'PE', 'Pública', 'Av Caxanga', 127, 'Varzea', 'Nordeste', 81, '33553885');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168073', 'Escola Municipal do Barro', 'Recife', 'PE', 'Pública', 'Rua Guiragibe', 117, 'Barro', 'Nordeste', 81, '33553584');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122898', 'Escola Municipal do Coque', 'Recife', 'PE', 'Pública', 'Rua Mirandopolis', 35, 'Ilha Joana Bezerra', 'Nordeste', 81, '33553636');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120402', 'Escola Municipal do Dom', 'Recife', 'PE', 'Pública', 'Rua Pacheco', 115, 'Varzea', 'Nordeste', 81, '33554492');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120704', 'Escola Municipal do Jordao', 'Recife', 'PE', 'Pública', 'Rua Silva Jardim', 175, 'Jordao', 'Nordeste', 81, '33556901');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120712', 'Escola Municipal do Leao', 'Recife', 'PE', 'Pública', 'Rua Bruno Veloso', 300, 'Boa Viagem', 'Nordeste', 81, '33553872');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168111', 'Escola Municipal do Pantanal', 'Recife', 'PE', 'Pública', 'Rua Diogo', 240, 'Barro', 'Nordeste', 81, '92608037');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168120', 'Escola Municipal do Sancho', 'Recife', 'PE', 'Pública', 'Rua Joao Ferreira', 427, 'Sancho', 'Nordeste', 81, '33550863');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123487', 'Escola Municipal Dom Bosco', 'Recife', 'PE', 'Pública', 'Rua Alvenopolis', 600, 'Jardim Sao Paulo', 'Nordeste', 81, '33553848');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122570', 'Escola Municipal Dom Helder Camara', 'Recife', 'PE', 'Pública', 'Rua Parana', 320, 'Espinheiro', 'Nordeste', 81, '33553668');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126818', 'Escola Municipal Dom José Lamartine Soares', 'Recife', 'PE', 'Pública', 'Rua Alto do Eucalipto', NULL, 'Vasco da Gama', 'Nordeste', 81, '33556302');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181940', 'Escola Municipal Dona Luci Silva Lima', 'Recife', 'PE', 'Pública', 'Av Monaco', 1138, 'Imbiribeira', 'Nordeste', 81, '33554333');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118670', 'Escola Municipal dos Coelhos', 'Recife', 'PE', 'Pública', 'Rua Coelhos', 591, 'Coelhos', 'Nordeste', 81, '33553486');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119145', 'Escola Municipal dos Remedios', 'Recife', 'PE', 'Pública', 'Trv Estrada do Bongi', 91, 'Prado', 'Nordeste', 81, '33553459');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127083', 'Escola Municipal dos Torroes', 'Recife', 'PE', 'Pública', 'Rua Antonio Correa de Oliveira', 110, 'Torroes', 'Nordeste', 81, '33556350');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123495', 'Escola Municipal Doutor Antonio Correia', 'Recife', 'PE', 'Pública', 'Rua Manuel Salvador', 360, 'Barro', 'Nordeste', 81, '33553868');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126389', 'Escola Municipal Doutor Caete', 'Recife', 'PE', 'Pública', 'Rua Alvaraes', 222, 'Nova Descoberta', 'Nordeste', 81, '33554496');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127644', 'Escola Municipal Doutor Ebenezer Gueiros', 'Recife', 'PE', 'Pública', 'Rua Aluisio Baltar', 69, 'Iputinga', 'Nordeste', 81, '33556912');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119641', 'Escola Municipal Doutor Rodolfo Aureliano', 'Recife', 'PE', 'Pública', 'Rua Jose Avelar', 211, 'Varzea', 'Nordeste', 81, '33553996');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127547', 'Escola Municipal Doutor Samuel Goncalves', 'Recife', 'PE', 'Pública', 'Rua Austro Costa', 227, 'Prado', 'Nordeste', 81, '33553453');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120720', 'Escola Municipal Draomiro Chaves Aguiar', 'Recife', 'PE', 'Pública', 'Rua Izabel', 655, 'Casa Amarela', 'Nordeste', 81, '33554072');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123088', 'Escola Municipal Edite Braga', 'Recife', 'PE', 'Pública', 'Rua Nicolau Pereira', 85, 'Afogados', 'Nordeste', 81, '33553692');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148161', 'Escola Municipal Educador Paulo Freire', 'Recife', 'PE', 'Pública', 'Av Bento da Gama', 301, 'Ipsep', 'Nordeste', 81, '33553952');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166631', 'Escola Municipal Engenheiro Edinaldo Miranda de Oliveira', 'Recife', 'PE', 'Pública', 'Rua Inacio Galvao dos Santos', 304, 'Encruzilhada', 'Nordeste', 81, '33553977');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120607', 'Escola Municipal Engenheiro Guilherme Diniz', 'Recife', 'PE', 'Pública', 'Rua Afonso Cunha', NULL, 'Ibura', 'Nordeste', 81, '33553825');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26155869', 'Escola Municipal Engenheiro Henoch Coutinho de Melo', 'Recife', 'PE', 'Pública', 'Rua Ivonete Ferreira da Silva', 12, 'Pina', 'Nordeste', 81, '33053342');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120674', 'Escola Municipal Engenheiro Umberto Gondim', 'Recife', 'PE', 'Pública', 'Rua Ivonete Ferreira da Silva', 13, 'Pina', 'Nordeste', 81, '33053465');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127377', 'Escola Municipal Engenho do Meio', 'Recife', 'PE', 'Pública', 'Rua Bom Pastor', 1406, 'Engenho do Meio', 'Nordeste', 81, '33553450');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190915', 'Escola Municipal Escola Santa Luzia', 'Recife', 'PE', 'Pública', 'Rua Caldas Filho', 186, 'Estancia', 'Nordeste', 81, '33554484');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124955', 'Escola Municipal Escritor Josue de Castro', 'Recife', 'PE', 'Pública', 'Rua Carapeba', NULL, 'Brasilia Teimosa', 'Nordeste', 81, '33554241');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132643', 'Escola Municipal Fernando Santa Cruz', 'Recife', 'PE', 'Pública', 'Rua Boanerges Pereira', 437, 'Jordao', 'Nordeste', 81, '33554500');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175347', 'Escola Municipal Frei Tadeu Glaser', 'Recife', 'PE', 'Pública', 'Prc Agamenon Magalhaes', 600, 'Santo Amaro', 'Nordeste', 81, '33553576');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124610', 'Escola Municipal Futuro Feliz', 'Recife', 'PE', 'Pública', 'Rua Ibiraja', 440, 'Ibura', 'Nordeste', 81, '33554942');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121980', 'Escola Municipal General Emidio Dantas Barreto', 'Recife', 'PE', 'Pública', 'Av Saudade', 303, 'Santo Amaro', 'Nordeste', 81, '33554061');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119617', 'Escola Municipal General San Martin', 'Recife', 'PE', 'Pública', 'Av San Martin', 1864, 'San Martin', 'Nordeste', 81, '33553956');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26177951', 'Escola Municipal Governador Miguel Arraes de Alencar', 'Recife', 'PE', 'Pública', 'Av Tapajos', 419, 'Estancia', 'Nordeste', 81, '33553683');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127873', 'Escola Municipal Henfil', 'Recife', 'PE', 'Pública', 'Rua Seis de Marco', 10, 'Varzea', 'Nordeste', 81, '96352796');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26145227', 'Escola Municipal Historiador Flavio Guerra', 'Recife', 'PE', 'Pública', 'Rua Alto da Telha', 320, 'Passarinho', 'Nordeste', 81, '33554504');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120810', 'Escola Municipal Hugo Gerdau', 'Recife', 'PE', 'Pública', 'Rua Mizael de Mendonca', NULL, 'San Martin', 'Nordeste', 81, '86473764');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168227', 'Escola Municipal Ibura de Baixo', 'Recife', 'PE', 'Pública', 'Rua Rio Novo do Sul', 498, 'Ibura', 'Nordeste', 81, '33554950');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134010', 'Escola Municipal Ines Soares de Lima', 'Recife', 'PE', 'Pública', 'Rua 14 de Novembro', NULL, 'Imbiribeira', 'Nordeste', 81, '33554044');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128950', 'Escola Municipal Irma Terezinha Batista Proj Novo Viver', 'Recife', 'PE', 'Pública', 'Rua Iguatu', NULL, 'Campina do Barreto', 'Nordeste', 81, '33553588');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158310', 'Escola Municipal Isaac Pereira da Silva', 'Recife', 'PE', 'Pública', 'Rua Oiticica Lins', NULL, 'Areias', 'Nordeste', 81, '33554012');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171732', 'Escola Municipal Jader Figueiredo de Andrade Silva', 'Recife', 'PE', 'Pública', 'Av Mucio Uchoa Cavalcanti', 283, 'Engenho do Meio', 'Nordeste', 81, '33553676');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125480', 'Escola Municipal Jardim Mauriceia', 'Recife', 'PE', 'Pública', 'Pte da Avenida Nicolau Copernico', 1107, 'Imbiribeira', 'Nordeste', 81, '33553688');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170663', 'Escola Municipal Jardim Monte Verde', 'Recife', 'PE', 'Pública', 'Av Chapada do Araripe', 51, 'Cohab', 'Nordeste', 81, '33554959');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158280', 'Escola Municipal Jardim Uchoa', 'Recife', 'PE', 'Pública', 'Rua Jupiata', 211, 'Areias', 'Nordeste', 81, '33553620');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26171724', 'Escola Municipal João Amazonas', 'Recife', 'PE', 'Pública', 'Rua Bela Vista', 284, 'Dois Unidos', 'Nordeste', 81, '33554513');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127784', 'Escola Municipal João Pessoa Guerra', 'Recife', 'PE', 'Pública', 'Rua Isaac Buril', 107, 'Varzea', 'Nordeste', 81, '33553980');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119897', 'Escola Municipal João Xxiii', 'Recife', 'PE', 'Pública', 'Est Caiara', 350, 'Iputinga', 'Nordeste', 81, '33553876');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132635', 'Escola Municipal Jordao Baixo', 'Recife', 'PE', 'Pública', 'Av Roberto Silveira', 51, 'Jordao', 'Nordeste', 81, '33556314');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26164361', 'Escola Municipal José Mucio Monteiro', 'Recife', 'PE', 'Pública', 'Av Joao Rio Branco de Lima', 125, 'Cohab', 'Nordeste', 81, '33553609');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126770', 'Escola Municipal Josefina Marinho', 'Recife', 'PE', 'Pública', 'Rua Corrego Jose Grande', 1316, 'Alto José do Pinho', 'Nordeste', 81, '33554962');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118955', 'Escola Municipal Julio Vicente Alves de Araujo', 'Recife', 'PE', 'Pública', 'Prc Conceicao', 468, 'Morro da Conceicao', 'Nordeste', 81, '33556918');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134002', 'Escola Municipal Karla Patricia', 'Recife', 'PE', 'Pública', 'Rua Eduardo Wanderley Filho', 700, 'Boa Viagem', 'Nordeste', 81, '33554040');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170744', 'Escola Municipal Ladjane Bandeira', 'Recife', 'PE', 'Pública', 'Rua Severino Carneiro', 135, 'Água Fria', 'Nordeste', 81, '33556486');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124114', 'Escola Municipal Lagoa Encantada', 'Recife', 'PE', 'Pública', 'Rua Benigno Jordao de Vasconcelos', NULL, 'Cohab', 'Nordeste', 81, '33556315');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128268', 'Escola Municipal Luiz Lua Gonzaga', 'Recife', 'PE', 'Pública', 'Rua Aurilandia', 54, 'Bomba do Hemeterio', 'Nordeste', 81, '33553860');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119927', 'Escola Municipal Luiz Vaz de Camoes', 'Recife', 'PE', 'Pública', 'Rua Jacunda', 508, 'Ipsep', 'Nordeste', 81, '33553941');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121913', 'Escola Municipal Lutadores do Bem', 'Recife', 'PE', 'Pública', 'Rua Virgilio de Medeiros', 269, 'Santo Amaro', 'Nordeste', 81, '33556318');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170671', 'Escola Municipal Maestro Nelson Ferreira', 'Recife', 'PE', 'Pública', 'Rua Avelino Chaves', 176, 'Ibura', 'Nordeste', 81, '98622295');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120763', 'Escola Municipal Magalhaes Bastos', 'Recife', 'PE', 'Pública', 'Rua Francisco Lacerda', NULL, 'Varzea', 'Nordeste', 81, '33556799');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126826', 'Escola Municipal Manoel Antonio de Freitas', 'Recife', 'PE', 'Pública', 'Rua Jeronimo', 147, 'Alto Santa Terezinha', 'Nordeste', 81, '92645224');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134057', 'Escola Municipal Manoel Rolim', 'Recife', 'PE', 'Pública', '1tr Pajussara', 57, 'Tejipio', 'Nordeste', 81, '33554966');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123630', 'Escola Municipal Marechal Rondon', 'Recife', 'PE', 'Pública', 'Av Jose Rufino', 3305, 'Tejipio', 'Nordeste', 81, '33550064');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126281', 'Escola Municipal Margarida de Siqueira Pessoa', 'Recife', 'PE', 'Pública', 'Rua Corrego Jose Grande', 1307, 'Alto José Bonifácio', 'Nordeste', 81, '33554970');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124700', 'Escola Municipal Margarida Serpa Cossart', 'Recife', 'PE', 'Pública', 'Rua Mecejana', 92, 'Cohab', 'Nordeste', 81, '33553649');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124688', 'Escola Municipal Maria Adelaide de Barros', 'Recife', 'PE', 'Pública', 'Rua Alto Erval Novo', 10, 'Cohab', 'Nordeste', 81, '33553434');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124556', 'Escola Municipal Maria de Sampaio Lucena', 'Recife', 'PE', 'Pública', 'Av Pernambuco', 01, 'Cohab', 'Nordeste', 81, '33556586');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122529', 'Escola Municipal Mario Melo', 'Recife', 'PE', 'Pública', 'Rua Oliveira Fonseca', 318, 'Campo Grande', 'Nordeste', 81, '33553713');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153556', 'Escola Municipal Marluce Santiago da Silva', 'Recife', 'PE', 'Pública', 'Av Concris', NULL, 'Passarinho', 'Nordeste', 81, '33554974');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126672', 'Escola Municipal Mauricio de Nassau', 'Recife', 'PE', 'Pública', 'Av Eurico Chaves', 677, 'Alto do Mandu', 'Nordeste', 81, '33556322');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124840', 'Escola Municipal Menino Jesus', 'Recife', 'PE', 'Pública', 'Ref da Av Eng Domingos Ferreira', NULL, 'Pina', 'Nordeste', 81, '33553449');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175398', 'Escola Municipal Mercia de Albuquerque Ferreira', 'Recife', 'PE', 'Pública', 'Rua Tabaiares', 182, 'Ilha do Retiro', 'Nordeste', 81, '33554076');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26419726', 'Escola Municipal Milton Almeida dos Santos', 'Recife', 'PE', 'Pública', 'Rua Itauba', 227, 'Imbiribeira', 'Nordeste', 81, '33554979');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128705', 'Escola Municipal Monsenhor Viana', 'Recife', 'PE', 'Pública', 'Rua Taguatinga', NULL, 'Beberibe', 'Nordeste', 81, '33554136');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118734', 'Escola Municipal Monteiro Lobato', 'Recife', 'PE', 'Pública', 'Av Jardim Brasilia', NULL, 'Peixinhos', 'Nordeste', 81, '33553991');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125706', 'Escola Municipal Mundo Esperanca', 'Recife', 'PE', 'Pública', 'Est Pintos', 900, 'Sitio dos Pintos', 'Nordeste', 81, '33550067');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133389', 'Escola Municipal Nadir Colaco', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 2173, 'Macaxeira', 'Nordeste', 81, '33553971');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134049', 'Escola Municipal Nossa Senhora da Penha', 'Recife', 'PE', 'Pública', 'Rua Francisco de Barros Barreto', 109, 'Boa Viagem', 'Nordeste', 81, '33553564');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147300', 'Escola Municipal Nossa Senhora do Pilar', 'Recife', 'PE', 'Pública', 'Rua Brum', NULL, 'Recife', 'Nordeste', 81, '33554528');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128314', 'Escola Municipal Nova Aurora', 'Recife', 'PE', 'Pública', 'Rua Antonio Meira', 169, 'Água Fria', 'Nordeste', 81, '33554534');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133622', 'Escola Municipal Nova Descoberta', 'Recife', 'PE', 'Pública', 'Rua Waldete Agra', 100, 'Passarinho', 'Nordeste', 81, '33553612');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26177978', 'Escola Municipal Nova Morada', 'Recife', 'PE', 'Pública', 'Rua Eliane Fragoso do Nascimento', 24, 'Caxanga', 'Nordeste', 81, '33553546');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128322', 'Escola Municipal Novo Horizonte', 'Recife', 'PE', 'Pública', 'Av Anibal Benevolo', 1045, 'Água Fria', 'Nordeste', 81, '33553422');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158400', 'Escola Municipal Novo Mangue', 'Recife', 'PE', 'Pública', 'Av Central', 511, 'Ilha Joana Bezerra', 'Nordeste', 81, '33554536');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119994', 'Escola Municipal Novo Pina', 'Recife', 'PE', 'Pública', 'Rua Eurico Vitruvio', 236, 'Pina', 'Nordeste', 81, '33554114');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126087', 'Escola Municipal Octavio de Meira Lins', 'Recife', 'PE', 'Pública', 'Rua Jose Reboucas', 141, 'Vasco da Gama', 'Nordeste', 81, '33553616');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128934', 'Escola Municipal Olindina Monteiro de Oliveira Franca', 'Recife', 'PE', 'Pública', 'Rua Bela Vista', 115, 'Dois Unidos', 'Nordeste', 81, '32327900');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125510', 'Escola Municipal Oswaldo Lima Filho', 'Recife', 'PE', 'Pública', 'Av Domingos Ferreira', 1040, 'Pina', 'Nordeste', 81, '33553928');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121662', 'Escola Municipal Padre Antonio Henrique', 'Recife', 'PE', 'Pública', 'Rua Livramento', 290, 'Derby', 'Nordeste', 81, '33553836');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134350', 'Escola Municipal Padre Donino', 'Recife', 'PE', 'Pública', 'Prc Casa Forte', 442, 'Casa Forte', 'Nordeste', 81, '33554138');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119331', 'Escola Municipal Padre José de Anchieta', 'Recife', 'PE', 'Pública', 'Rua Capitao Adolfo Taquis', NULL, 'Mustardinha', 'Nordeste', 81, '33554188');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120780', 'Escola Municipal Padre José Mathias Delgado', 'Recife', 'PE', 'Pública', 'Rua Devaldo Borges', NULL, 'Jardim Sao Paulo', 'Nordeste', 81, '33553538');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125528', 'Escola Municipal Pais e Filhos', 'Recife', 'PE', 'Pública', 'Rua Dancing Days', 21, 'Imbiribeira', 'Nordeste', 81, '33556498');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127458', 'Escola Municipal Papa João Xxiii', 'Recife', 'PE', 'Pública', 'Rua Girua', NULL, 'Engenho do Meio', 'Nordeste', 81, '33554402');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123266', 'Escola Municipal Paroquial Cristo Rei', 'Recife', 'PE', 'Pública', 'Rua Dom Manoel da Costa', NULL, 'Torre', 'Nordeste', 81, '33553575');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26164701', 'Escola Municipal Parque dos Milagres', 'Recife', 'PE', 'Pública', 'Rua Leandro', NULL, 'Barro', 'Nordeste', 81, '33556562');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157888', 'Escola Municipal Pastor José Munguba Sobrinho', 'Recife', 'PE', 'Pública', 'Rua Silva Jardim', 145, 'Jordao', 'Nordeste', 81, '33554069');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126427', 'Escola Municipal Pastor Paulo Leivas Macalao', 'Recife', 'PE', 'Pública', 'Rua Alterosas', 27, 'Linha do Tiro', 'Nordeste', 81, '33553418');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128390', 'Escola Municipal Paulo Vi', 'Recife', 'PE', 'Pública', 'Rua Guaira', 200, 'Linha do Tiro', 'Nordeste', 81, '33553965');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187957', 'Escola Municipal Paz e Amor', 'Recife', 'PE', 'Pública', 'Rua Edson Regis', 216, 'Ibura', 'Nordeste', 81, '99002445');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126966', 'Escola Municipal Pedrinho', 'Recife', 'PE', 'Pública', 'Rua Botovi', NULL, 'Nova Descoberta', 'Nordeste', 81, '33556857');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175380', 'Escola Municipal Pedro Alcantara', 'Recife', 'PE', 'Pública', 'Rua Tres Morros', 43, 'Corrego do Jenipapo', 'Nordeste', 81, '33556570');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121468', 'Escola Municipal Pedro Augusto', 'Recife', 'PE', 'Pública', 'Rua Barao de Sao Borja', 279, 'Soledade', 'Nordeste', 81, '33554170');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132249', 'Escola Municipal Pintor Lula Cardoso Ayres', 'Recife', 'PE', 'Pública', 'Rua Alvaro Ferraz', 594, 'Jordao', 'Nordeste', 81, '33556346');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170795', 'Escola Municipal Poeta Carlos Pena Filho', 'Recife', 'PE', 'Pública', 'Av Liberdade', 461, 'Jardim Sao Paulo', 'Nordeste', 81, '33554894');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168138', 'Escola Municipal Poeta João Cabral de Melo Neto', 'Recife', 'PE', 'Pública', 'Av Encanta Moca', 377, 'Pina', 'Nordeste', 81, '33556306');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126494', 'Escola Municipal Poeta Joaquim Cardoso', 'Recife', 'PE', 'Pública', 'Rua Corrego da Areia', 950, 'Nova Descoberta', 'Nordeste', 81, '99264825');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122634', 'Escola Municipal Poeta Jonatas Braga', 'Recife', 'PE', 'Pública', 'Rua Caetano', 545, 'Campo Grande', 'Nordeste', 81, '33553581');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125544', 'Escola Municipal Poeta Paulo Bandeira da Cruz', 'Recife', 'PE', 'Pública', 'Rua Panelas', 282, 'Cohab', 'Nordeste', 81, '32323136');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26177960', 'Escola Municipal Poeta Solano Trindade', 'Recife', 'PE', 'Pública', 'Rua Manoel Silva', 134, 'Água Fria', 'Nordeste', 81, '33554186');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126419', 'Escola Municipal Presbitero José Bezerra', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 7636, 'Macaxeira', 'Nordeste', 81, '33554011');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121050', 'Escola Municipal Professor Elizabeth Sales Coutinho Barros', 'Recife', 'PE', 'Pública', 'Rua Professor Avertano Rocha', 386, 'Torroes', 'Nordeste', 81, '33554934');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26155818', 'Escola Municipal Professor Jandira Botelho Pereira da Costa', 'Recife', 'PE', 'Pública', 'Rua Farias Neves', NULL, 'Campo Grande', 'Nordeste', 81, '92533406');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125560', 'Escola Municipal Professor José Lourenco de Lima', 'Recife', 'PE', 'Pública', 'Rua Nova America', 168, 'Ibura', 'Nordeste', 81, '33556502');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125552', 'Escola Municipal Professor Adauto Pontes', 'Recife', 'PE', 'Pública', 'Rua Sertania', 35, 'Jordao', 'Nordeste', 81, '33554990');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126516', 'Escola Municipal Professor Aderbal Galvao', 'Recife', 'PE', 'Pública', 'Rua Vasco da Gama', 399, 'Vasco da Gama', 'Nordeste', 81, '33556980');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153386', 'Escola Municipal Professor Antonio de Brito Alves', 'Recife', 'PE', 'Pública', 'Rua Ernesto Cavalcanti', 41, 'Mustardinha', 'Nordeste', 81, '34482179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153297', 'Escola Municipal Professor Enaldo Manoel de Souza', 'Recife', 'PE', 'Pública', 'Rua Joraci Camargo', NULL, 'Jordao', 'Nordeste', 81, '33553624');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139090', 'Escola Municipal Professor Florestan Fernandes', 'Recife', 'PE', 'Pública', 'Rua Rio Novo do Sul', 591, 'Ibura', 'Nordeste', 81, '33554938');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157845', 'Escola Municipal Professor João Batista Lippo Neto', 'Recife', 'PE', 'Pública', 'Rua Cerro Largo', NULL, 'Varzea', 'Nordeste', 81, '33550086');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158302', 'Escola Municipal Professor João Francisco de Souza', 'Recife', 'PE', 'Pública', 'Rua Jorge da Costa Lima', 3107, 'Varzea', 'Nordeste', 81, '33550101');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121255', 'Escola Municipal Professor José da Costa Porto', 'Recife', 'PE', 'Pública', '1tr Cabo Eutropio', 660, 'Ilha Joana Bezerra', 'Nordeste', 81, '97172716');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166666', 'Escola Municipal Professor José Soares da Silva', 'Recife', 'PE', 'Pública', 'Rua Botovi', 5785, 'Nova Descoberta', 'Nordeste', 81, '33554086');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167891', 'Escola Municipal Professor Josue de Castro', 'Recife', 'PE', 'Pública', 'Av Martin Luther King', 368, 'Ilha Joana Bezerra', 'Nordeste', 81, '33553642');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158299', 'Escola Municipal Professor Julio de Oliveira', 'Recife', 'PE', 'Pública', 'Rua Cafesopolis', 16, 'Imbiribeira', 'Nordeste', 81, '33553510');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124661', 'Escola Municipal Professor Manoel Torres', 'Recife', 'PE', 'Pública', 'Rua Joaquim Pinheiro', 225, 'Imbiribeira', 'Nordeste', 81, '33553925');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126788', 'Escola Municipal Professor Mauro Mota', 'Recife', 'PE', 'Pública', 'Rua Alto da Brasileira', NULL, 'Nova Descoberta', 'Nordeste', 81, '33553844');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120771', 'Escola Municipal Professor Moacyr de Albuquerque', 'Recife', 'PE', 'Pública', 'Rua Corrego da Areia', NULL, 'Nova Descoberta', 'Nordeste', 81, '99216018');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126524', 'Escola Municipal Professor Nilo Pereira', 'Recife', 'PE', 'Pública', 'Est Arraial', 4900, 'Casa Amarela', 'Nordeste', 81, '92433411');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26158370', 'Escola Municipal Professor Orlando Parahym', 'Recife', 'PE', 'Pública', 'Rua Virgilio Lucio', 10441, 'Cohab', 'Nordeste', 81, '33556002');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26154137', 'Escola Municipal Professor Potiguar Matos', 'Recife', 'PE', 'Pública', 'Rua Vinte e Um de Abril', 2191, 'San Martin', 'Nordeste', 81, '33553054');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153599', 'Escola Municipal Professor Ricardo Gama', 'Recife', 'PE', 'Pública', 'Rua Guaira', 160, 'Linha do Tiro', 'Nordeste', 81, '33553690');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124815', 'Escola Municipal Professor Simoes Barbosa', 'Recife', 'PE', 'Pública', 'Av Dois Rios', NULL, 'Ibura', 'Nordeste', 81, '33553920');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26154820', 'Escola Municipal Professor Solano Magalhaes', 'Recife', 'PE', 'Pública', 'Av Jemil Asfora', NULL, 'Pina', 'Nordeste', 81, '33553985');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126117', 'Escola Municipal Professora Almerinda Umbelino de Barros', 'Recife', 'PE', 'Pública', 'Rua Vasco da Gama', NULL, 'Vasco da Gama', 'Nordeste', 81, '91131316');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175355', 'Escola Municipal Professora Helia Maria Pereira', 'Recife', 'PE', 'Pública', 'Rua Alice Gomes', 37, 'Campo Grande', 'Nordeste', 81, '33553414');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120569', 'Escola Municipal Professora Maria da Paz Brandao Alves', 'Recife', 'PE', 'Pública', 'Rua Felicidade', 51, 'Sancho', 'Nordeste', 81, '33554118');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123649', 'Escola Municipal Professora Primitiva de Barros Silva', 'Recife', 'PE', 'Pública', 'Rua Elpidio Camara', 122, 'Jardim Sao Paulo', 'Nordeste', 81, '33553446');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120585', 'Escola Municipal Professora Sonia Maria de Araujo Souza', 'Recife', 'PE', 'Pública', 'Rua Bodoco', 2526, 'Jordao', 'Nordeste', 81, '33554556');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121786', 'Escola Municipal Reitor João Alfredo', 'Recife', 'PE', 'Pública', 'Rua Jose Henrique', 160, 'Ilha do Leite', 'Nordeste', 81, '33553804');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26136335', 'Escola Municipal Renato Accioly Carneiro Campos', 'Recife', 'PE', 'Pública', 'Rua Basilio', 140, 'Nova Descoberta', 'Nordeste', 81, '33556590');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26212404', 'Escola Municipal Rozemar de Macedo Lima', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 5400, 'Casa Amarela', 'Nordeste', 81, '93193662');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122600', 'Escola Municipal Santa Cecilia', 'Recife', 'PE', 'Pública', 'Rua Alice Gomes', 49, 'Campo Grande', 'Nordeste', 81, '33553841');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123100', 'Escola Municipal Santa Edwiges', 'Recife', 'PE', 'Pública', 'Rua Juriti', 41, 'Afogados', 'Nordeste', 81, '86036153');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121077', 'Escola Municipal Santa Maria', 'Recife', 'PE', 'Pública', 'Rua Acaiaca', 70, 'Alto José do Pinho', 'Nordeste', 81, '33554549');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126583', 'Escola Municipal Santa Maria Goretti', 'Recife', 'PE', 'Pública', 'Rua Maria Goretti', 300, 'Vasco da Gama', 'Nordeste', 81, '33556995');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134379', 'Escola Municipal Santo Amaro', 'Recife', 'PE', 'Pública', 'Av Norte Miguel Arraes de Alencar', 570, 'Santo Amaro', 'Nordeste', 81, '33553696');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123673', 'Escola Municipal Santo Antonio do Cacote', 'Recife', 'PE', 'Pública', 'Rua Aurora Cacote', 16, 'Areias', 'Nordeste', 81, '33553580');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126630', 'Escola Municipal São Cristovao', 'Recife', 'PE', 'Pública', 'Rua Cassiterita', 395, 'Brejo da Guabiraba', 'Nordeste', 81, '33556013');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127792', 'Escola Municipal São Domingos', 'Recife', 'PE', 'Pública', 'Rua Mateus', 364, 'Iputinga', 'Nordeste', 81, '33553371');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125579', 'Escola Municipal São Francisco de Assis', 'Recife', 'PE', 'Pública', 'Rua Cosmorama', 900, 'Boa Viagem', 'Nordeste', 81, '33550029');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128748', 'Escola Municipal São João Batista', 'Recife', 'PE', 'Pública', 'Av Anibal Benevolo', 1800, 'Linha do Tiro', 'Nordeste', 81, '32327808');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122014', 'Escola Municipal Sede da Sabedoria', 'Recife', 'PE', 'Pública', 'Rua Artemis', 30, 'Santo Amaro', 'Nordeste', 81, '33553442');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119170', 'Escola Municipal Senador José Ermirio de Moraes', 'Recife', 'PE', 'Pública', 'Rua Roraima', 3007, 'Varzea', 'Nordeste', 81, '99301668');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167808', 'Escola Municipal Serra da Prata', 'Recife', 'PE', 'Pública', 'Rua Pessegueiros', 2005, 'Cohab', 'Nordeste', 81, '33556018');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122464', 'Escola Municipal Serviço Social de Belem', 'Recife', 'PE', 'Pública', 'Rua Rodolfo de Holanda', 248, 'Encruzilhada', 'Nordeste', 81, '91620752');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134067', 'Escola Municipal Severina Bernadete Teixeira', 'Recife', 'PE', 'Pública', 'Rua Ibicare', 1203, 'Cohab', 'Nordeste', 81, '33556023');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122308', 'Escola Municipal Severina Lira', 'Recife', 'PE', 'Pública', 'Rua Boa Vontade', 110, 'Tamarineira', 'Nordeste', 81, '33556958');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170710', 'Escola Municipal Sitio do Berardo', 'Recife', 'PE', 'Pública', 'Rua Quatro de Outubro', 56, 'Prado', 'Nordeste', 81, '33553764');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26136269', 'Escola Municipal Sitio do Ceu', 'Recife', 'PE', 'Pública', 'Rua Anchieta', 85, 'Santo Amaro', 'Nordeste', 81, '33554553');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125692', 'Escola Municipal Sociologo Gilberto Freyre', 'Recife', 'PE', 'Pública', 'Trv Alto Sao Jose', 350, 'Dois Irmaos', 'Nordeste', 81, '33550072');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123304', 'Escola Municipal Soldado José Antonio do Nascimento', 'Recife', 'PE', 'Pública', 'Rua Carlos Porto Carreiro', 86, 'Boa Vista', 'Nordeste', 81, '99946677');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119196', 'Escola Municipal Tres Carneiros', 'Recife', 'PE', 'Pública', 'Rua Ibiraja', 12, 'Cohab', 'Nordeste', 81, '33556026');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167840', 'Escola Municipal Ur 05', 'Recife', 'PE', 'Pública', 'Rua Barbara Heliodora', 4805, 'Cohab', 'Nordeste', 81, '33556030');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120283', 'Escola Municipal Vila Operaria do Recife', 'Recife', 'PE', 'Pública', '1tr Emilio Monteiro Fonseca', 1530, 'Ibura', 'Nordeste', 81, '33556579');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153475', 'Escola Municipal Vila Santa Luzia', 'Recife', 'PE', 'Pública', 'Rua Elizeu Cavalcanti', 52, 'Cordeiro', 'Nordeste', 81, '33553550');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123126', 'Escola Municipal Vila São Miguel', 'Recife', 'PE', 'Pública', 'Rua Rubiacea', 147, 'Afogados', 'Nordeste', 81, '33554052');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121158', 'Escola Municipal Vila Sesamo', 'Recife', 'PE', 'Pública', 'Rua Vale do Itajai', 6505, 'Cohab', 'Nordeste', 81, '33553160');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125811', 'Escola Municipal Virgem Poderosa', 'Recife', 'PE', 'Pública', 'Rua Leonardo Bezerra Cavalcanti', 116, 'Parnamirim', 'Nordeste', 81, '33554224');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124076', 'Escola Municipal Waldemar Valente', 'Recife', 'PE', 'Pública', 'Rua Gastao de Carvalho', 360, 'Curado', 'Nordeste', 81, '98628848');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119200', 'Escola Municipal Zumbi dos Palmares', 'Recife', 'PE', 'Pública', 'Rua Vasconcelos Bittencourt', 35, 'Varzea', 'Nordeste', 81, '33553934');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134177', 'Escola Olga Benario Prestes', 'Recife', 'PE', 'Pública', 'Rua do Bom Pastor', 1407, 'Iputinga', 'Nordeste', 81, '31814032');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127474', 'Escola Padre Dehon', 'Recife', 'PE', 'Pública', 'Avenida Caxanga', 3560, 'Iputinga', 'Nordeste', 81, '31812671');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126575', 'Escola Padre João Barbosa', 'Recife', 'PE', 'Pública', 'Praca da Conceicao', 700, 'Morro da Conceicao', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124831', 'Escola Padre Lebret', 'Recife', 'PE', 'Pública', 'Av. Angra dos Reis', 02, 'Ibura', 'Nordeste', 81, '31812833');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134180', 'Escola Professor Joel Pontes', 'Recife', 'PE', 'Pública', 'Avenida Liberdade, S/n', NULL, 'Sancho', 'Nordeste', 81, '31814151');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128454', 'Escola Professor José dos Anjos', 'Recife', 'PE', 'Pública', 'Av Hildebrando de Vasconcelos', NULL, 'Dois Unidos', 'Nordeste', 81, '31812706');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124807', 'Escola Professor José Vicente Barbosa', 'Recife', 'PE', 'Pública', 'Praca Aleixo de Oliveira', NULL, 'Ipsep', 'Nordeste', 81, '31812726');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127539', 'Escola Professora Fontainha de Abreu', 'Recife', 'PE', 'Pública', 'Rua Antonio Carlos', NULL, 'Cordeiro', 'Nordeste', 81, '31814159');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124912', 'Escola Roberto Silveira', 'Recife', 'PE', 'Pública', 'Avenida Governador Roberto Silveira', NULL, 'Jordao Baixo', 'Nordeste', 81, '31814848');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128527', 'Escola Rotary do Alto do Pascoal', 'Recife', 'PE', 'Pública', 'Rua Ladeira de Pedra', NULL, 'Água Fria', 'Nordeste', 81, '34496468');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128560', 'Escola São Francisco de Assis - Rn', 'Recife', 'PE', 'Pública', 'Rua Sao Bento', NULL, 'Arruda', 'Nordeste', 81, '31812778');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128586', 'Escola São Judas Tadeu', 'Recife', 'PE', 'Pública', 'Rua Marcilio Dias', 591, 'Campina do Barreto', 'Nordeste', 81, '31812907');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124939', 'Escola Sargento Camargo', 'Recife', 'PE', 'Pública', 'Rua Antonio Falcao', 136, 'Boa Viagem', 'Nordeste', 81, '31812702');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121816', 'Escola Tecnica Estadual Almirante Soares Dutra', 'Recife', 'PE', 'Pública', 'Praca General Abreu e Lima', 110, 'Santo Amaro', 'Nordeste', 81, '31813970');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178230', 'Escola Tecnica Estadual Cicero Dias', 'Recife', 'PE', 'Pública', 'Rua Marques de Valenca', 470, 'Boa Viagem', 'Nordeste', 81, '31813020');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157985', 'Escola Tecnica Estadual de Criatividade Musical', 'Recife', 'PE', 'Pública', 'Rua da Aurora', 439, 'Boa Vista', 'Nordeste', 81, '31812874');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126125', 'Escola Tecnica Estadual Dom Bosco - Recife', 'Recife', 'PE', 'Pública', 'Estrada do Arraial', 3208, 'Casa Amarela', 'Nordeste', 81, '34410111');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121751', 'Escola Tecnica Estadual Ginasio Pernambucano', 'Recife', 'PE', 'Pública', 'Avenida Cruz Cabuga', 269, 'Santo Amaro', 'Nordeste', 81, '31812949');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125048', 'Escola Tecnica Estadual João Bezerra', 'Recife', 'PE', 'Pública', 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 'Nordeste', 81, '31813002');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123819', 'Escola Tecnica Estadual Mariano Teixeira', 'Recife', 'PE', 'Pública', 'Avenida Capitao Felipe Ferreira', 171, 'Areias', 'Nordeste', 81, '31812744');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183021', 'Escola Tecnica Estadual Miguel Batista', 'Recife', 'PE', 'Pública', 'Avenida Norte Miguel Arraes de Alencar', 7487, 'Macaxeira', 'Nordeste', 81, '31814910');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179857', 'Escola Tecnica Estadual Porto Digital', 'Recife', 'PE', 'Pública', 'Av. Rio Branco', 193, 'Bairro do Recife', 'Nordeste', 81, '31814868');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122685', 'Escola Tecnica Estadual Professor Agamenon Magalhaes - Etepam', 'Recife', 'PE', 'Pública', 'Avenida Joao de Barros', 1769, 'Espinheiro', 'Nordeste', 81, '31813951');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128497', 'Escola Tecnica Estadual Professor Alfredo Freyre', 'Recife', 'PE', 'Pública', 'Rua Zeferino Agra', 193, 'Água Fria', 'Nordeste', 81, '31812732');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188040', 'Escola Tecnica Estadual Professor Antonio Carlos Gomes da Costa', 'Recife', 'PE', 'Pública', 'Rua Marques do Pombal', 702, 'Santo Amaro', 'Nordeste', 81, '31812759');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176238', 'Escola Tecnica Estadual Professor Lucilo Avila Pessoa', 'Recife', 'PE', 'Pública', 'Avenida Caxanga', 3345, 'Iputinga', 'Nordeste', 81, '31814902');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126605', 'Escola Tome Gibson', 'Recife', 'PE', 'Pública', 'Av. Vereador Otacilio de Azevedo', NULL, 'Guabiraba', 'Nordeste', 81, '32676225');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127563', 'Ifpe - Campus Recife', 'Recife', 'PE', 'Pública', 'Avenida Professor Luiz Freire', 500, 'Curado', 'Nordeste', 81, NULL);   
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM public.school WHERE "rede" = 'Pública';
    `);
  }
}
