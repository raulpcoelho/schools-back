import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicSchools1740449385500 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153688', 'Centro de Atendimento Educacional Especializado do Recife - Caeer', 1, 1, 1, 'Rua Conselheiro Nabuco', NULL, 'Casa Amarela', 1, 81, '31814701');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117916', 'Centro de Educação de Jovens e Adultos Poeta Joaquim Cardozo', 1, 1, 1, 'Avenida Doutor Jose Rufino', 3071, 'Tejipio', 1, 81, '31812710');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121824', 'Centro de Educação de Jovens e Adultos Valdemar de Oliveira', 1, 1, 1, 'Av Mario Melo', NULL, 'Santo Amaro', 1, 81, '31812728');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191814', 'Centro Educacional Inclusivo Ulisses Pernambucano - Ceiup', 1, 1, 1, 'Rua Gouveia de Barros', 189, 'Santo Amaro', 1, 81, '31812814');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181835', 'Cmei Alcides Restelli Tedesco', 1, 1, 1, 'Rua Fausto Cardoso', 653, 'Madalena', 1, 81, '33011836');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122022', 'Cmei Ana Rosa Falcao de Carvalho', 1, 1, 1, 'Rua Joao Lira', NULL, 'Santo Amaro', 1, 81, '33556546');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124165', 'Cmei Bernard Van Der Leer', 1, 1, 1, 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 1, 81, '33556554');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153122', 'Cmei Brasilia Teimosa', 1, 1, 1, 'Rua Delfim', 55, 'Brasilia Teimosa', 1, 81, '33553204');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175878', 'Cmei Celeste Vidal', 1, 1, 1, 'Rua Guabiraba', NULL, 'Brejo da Guabiraba', 1, 81, '33550212');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26419742', 'Cmei Coelhinho Pensante', 1, 1, 1, 'Rua Virgilio de Medeiros', NULL, 'Santo Amaro', 1, 81, '33554340');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149800', 'Cmei Creusa Arcoverde de Freitas Cavalcanti', 1, 1, 1, 'Rua Nabuco', NULL, 'Casa Amarela', 1, 81, '33553902');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156776', 'Cmei da Mangueira', 1, 1, 1, 'Rua Vinte e Um de Abril', 1555, 'Mangueira', 1, 81, '33553832');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182815', 'Cmei Darcy Ribeiro', 1, 1, 1, 'Rua Odete Monteiro', 450, 'Cordeiro', 1, 81, '32366048');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26443716', 'Cmei Doutor Alberico Dornelas Camara', 1, 1, 1, 'Ref Cais do Apolo', 925, 'Recife', 1, 81, '33559216');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26212609', 'Cmei Estrela da Manha', 1, 1, 1, 'Rua Dancing Days', 135, 'Imbiribeira', 1, 81, '33554818');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153270', 'Cmei Jesus de Nazare', 1, 1, 1, 'Rua Angatuba', NULL, 'Ibura', 1, 81, '33556974');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149931', 'Cmei Maezinha do Coque', 1, 1, 1, 'Rua Guapirama', NULL, 'Ilha Joana Bezerra', 1, 81, '32322290');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153262', 'Cmei Nosso Senhor Jesus do Bonfim', 1, 1, 1, 'Rua Teixeira de Melo', 56, 'Estancia', 1, 81, '33553812');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157551', 'Cmei Novo Pina', 1, 1, 1, 'Rua Eurico Vitruvio', NULL, 'Pina', 1, 81, '92696149');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26212412', 'Cmei Professor Paulo Rosas', 1, 1, 1, 'Av Luiz Freire', NULL, 'Cidade Universitaria', 1, 81, '21267073');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153246', 'Cmei Sementinha do Skylab', 1, 1, 1, 'Rua Joao da Lagoa', NULL, 'Iputinga', 1, 81, '33553680');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122120', 'Colégio da Policia Militar de Pernambuco', 1, 1, 1, 'Rua Henrique Dias', 609, 'Derby', 1, 81, '31811940');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124297', 'Colégio de Aplicacao do Ce da Ufpe', 1, 1, 1, 'Avenida da Arquitetura', NULL, 'Cidade Universitaria', 1, 81, '21268332');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139618', 'Colégio Militar do Recife', 1, 1, 1, 'Avenida Visconde de Sao Leopoldo', 198, 'Varzea', 1, 81, '21296340');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26135396', 'Conservatorio Pernambucano de Musica', 1, 1, 1, 'Avenida Joao de Barros', 594, 'Santo Amaro', 1, 81, '31833400');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123185', 'Creche Escola Recife Associação Crista Feminina', 1, 1, 1, 'Rua Vermelha', 68, 'Torre', 1, 81, '33553869');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191822', 'Creche Escola Recife Brejo do Beberibe', 1, 1, 1, 'Av Otacilio Azevedo', 1097, 'Vasco da Gama', 1, 81, '33554127');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191679', 'Creche Escola Recife Creche Escola Deputado Alcides Teixeira', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 1193, 'Santo Amaro', 1, 81, '33553422');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184648', 'Creche Escola Recife do Iraque', 1, 1, 1, 'Rua Havai', NULL, 'Estancia', 1, 81, '33553387');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190818', 'Creche Escola Recife do Pilar', 1, 1, 1, 'Rua Ocidente', NULL, 'Recife', 1, 81, '33554082');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183285', 'Creche Escola Recife Dona Carmelita Muniz de Araujo', 1, 1, 1, 'Est Mumbeca', 100, 'Guabiraba', 1, 81, '34375595');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185679', 'Creche Escola Recife Governador Eduardo Campos', 1, 1, 1, 'Rua Vale do Cariri', NULL, 'Cohab', 1, 81, '33550421');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190567', 'Creche Escola Recife José de Souza Ferraz', 1, 1, 1, 'Rua Jacunda', 573, 'Ipsep', 1, 81, '33554767');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191695', 'Creche Escola Recife Maria Luzinete da Costa', 1, 1, 1, 'Rua Tabaiares', 190, 'Ilha do Retiro', 1, 81, '33554361');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188368', 'Creche Escola Recife Mauriceia da Silva Dias', 1, 1, 1, 'Rua Andre Vidal de Negreiros', 35, 'Barro', 1, 81, '34865696');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149338', 'Creche Escola Recife Menino Jesus de Casa Forte', 1, 1, 1, 'Rua Samuel Farias', 127, 'Santana', 1, 81, '32696094');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190362', 'Creche Escola Recife Miguel Arraes Roda de Fogo', 1, 1, 1, 'Rua Helio Feijo', NULL, 'Torroes', 1, 81, '33553231');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149796', 'Creche Escola Recife Nossa Senhora das Dores', 1, 1, 1, 'Rua Caetes', 427, 'Apipucos', 1, 81, '92841269');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190060', 'Creche Escola Recife Porto Digital do Recife', 1, 1, 1, 'Rua Maria Cesar', 50, 'Recife', 1, 81, '33556338');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186322', 'Creche Escola Recife Presidente Tancredo Neves', 1, 1, 1, 'Av Jose Rufino', 1848, 'Barro', 1, 81, '32322616');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189224', 'Creche Escola Recife Professor Ariano Vilar Suassuna', 1, 1, 1, 'Rua Manuel de Medeiros', NULL, 'Dois Irmaos', 1, 81, '33556300');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191687', 'Creche Escola Recife Salete Matias Borges', 1, 1, 1, 'Av Luxemburgo', NULL, 'Imbiribeira', 1, 81, '33553225');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153335', 'Creche Escola Recife Santa Luzia', 1, 1, 1, 'Rua Souza Bandeira', NULL, 'Torre', 1, 81, '33556824');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190575', 'Creche Escola Recife Sergio Loreto', 1, 1, 1, 'Rua Floriano Peixoto', NULL, 'Sao Jose', 1, 81, '33553228');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156628', 'Creche Escola Recife Sitio do Cardoso', 1, 1, 1, 'Rua Landim', 390, 'Madalena', 1, 81, '33554025');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192586', 'Creche Escola Recife Tia Madalena', 1, 1, 1, 'Rua Capanema', 39, 'Curado', 1, 81, '35555952');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190087', 'Creche Escola Recife Alto do Mandu', 1, 1, 1, '2tr Siriji', NULL, 'Monteiro', 1, 81, '33553853');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190923', 'Creche Escola Recife da Estancia', 1, 1, 1, 'Rua Caldas Filho', 186, 'Estancia', 1, 81, '32234160');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156610', 'Creche Escola Recife do Ibura', 1, 1, 1, 'Rua Francisco Vitoriano', 10, 'Cohab', 1, 81, '33553076');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185180', 'Creche Escola Recife Governador Miguel Arraes', 1, 1, 1, 'Rua Gil Rodrigues dos Santos', 10, 'Areias', 1, 81, '33554105');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186926', 'Creche Escola Recife Miguel Arraes de Alencar', 1, 1, 1, 'Rua Aristonico Oliveira', 189, 'Iputinga', 1, 81, '99755526');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183277', 'Creche Municipal 08 de Marco', 1, 1, 1, 'Rua Engenho Bulhoes', NULL, 'Ibura', 1, 81, '33554357');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149869', 'Creche Municipal Ame As Criancas', 1, 1, 1, 'Rua Arlindo Cisneiro', 23, 'Bomba do Hemeterio', 1, 81, '33553208');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171643', 'Creche Municipal Aritana', 1, 1, 1, 'Rua Manoel Cavalcanti Bezerra', 37, 'Imbiribeira', 1, 81, '33554332');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148145', 'Creche Municipal Bido Krause', 1, 1, 1, 'Rua Onze de Agosto', NULL, 'Toto', 1, 81, '33550050');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149761', 'Creche Municipal Cajueiro', 1, 1, 1, 'Rua Alice Tibirica', 453, 'Cajueiro', 1, 81, '33556266');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157489', 'Creche Municipal Casinha Azul', 1, 1, 1, 'Rua Mateus', NULL, 'Iputinga', 1, 81, '33556913');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149214', 'Creche Municipal Ceape', 1, 1, 1, 'Rua Costa Sepulveda', 415, 'Engenho do Meio', 1, 81, '33554336');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167859', 'Creche Municipal Chico Mendes', 1, 1, 1, 'Rua Sindicato dos Vigilantes', 633, 'Cacote', 1, 81, '33554822');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190656', 'Creche Municipal Creche Cristo Rei Jordao Alto', 1, 1, 1, 'Rua Sertania', 200, 'Jordao', 1, 81, '33556648');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149788', 'Creche Municipal Criança Feliz', 1, 1, 1, 'Rua Sa Bandeira', NULL, 'Alto José Bonifácio', 1, 81, '33554826');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156750', 'Creche Municipal da Torre', 1, 1, 1, 'Rua Cantora Clara Nunes', NULL, 'Torre', 1, 81, '33553334');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156792', 'Creche Municipal de Afogados', 1, 1, 1, 'Rua Cerro Negro', 215, 'Afogados', 1, 81, '33554830');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153319', 'Creche Municipal Deus e Amor', 1, 1, 1, 'Rua Epaminondas Cristovao de Oliveira', 395, 'Torroes', 1, 81, '33556274');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156725', 'Creche Municipal do Bongi', 1, 1, 1, 'Rua Mario Portela', NULL, 'Bongi', 1, 81, '33554806');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156695', 'Creche Municipal do Jordao Baixo', 1, 1, 1, 'Rua Jose da Laje', 1939, 'Ibura', 1, 81, '33554848');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153408', 'Creche Municipal e Lutando Que Se Conquista', 1, 1, 1, 'Rua Salvador Allende', 36, 'Cordeiro', 1, 81, '33554834');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170736', 'Creche Municipal Esperanca', 1, 1, 1, 'Rua Leila Felix Karam', NULL, 'San Martin', 1, 81, '33556906');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149770', 'Creche Municipal Flor da Comunidade', 1, 1, 1, 'Est Morro da Conceicao', 111, 'Morro da Conceicao', 1, 81, '33554838');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149842', 'Creche Municipal Flor do Bairro da Guabiraba', 1, 1, 1, 'Rua Cassiterita', NULL, 'Brejo da Guabiraba', 1, 81, '33554842');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153254', 'Creche Municipal Futuro do Amanha', 1, 1, 1, 'Rua Apulcro de Assuncao', 686, 'San Martin', 1, 81, '87003014');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181932', 'Creche Municipal Irma Dulce', 1, 1, 1, 'Rua Adalgisa', 9, 'Espinheiro', 1, 81, '33554295');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186330', 'Creche Municipal Isabel Silvana de Melo', 1, 1, 1, 'Av Doze de Junho', NULL, 'Barro', 1, 81, '94886367');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157578', 'Creche Municipal João Eugenio', 1, 1, 1, 'Rua Gaspar Perez', 3895, 'Iputinga', 1, 81, '33553948');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26413779', 'Creche Municipal Lua Luar', 1, 1, 1, 'Ref da Av Mauricio de Nassau', 42, 'Iputinga', 1, 81, '33556807');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149737', 'Creche Municipal Mardonio Coelho', 1, 1, 1, 'Rua Milton de Campos', NULL, 'Vasco da Gama', 1, 81, '33553027');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153416', 'Creche Municipal Menino Jesus da Bomba Grande', 1, 1, 1, 'Rua Saude', 479, 'Iputinga', 1, 81, '33553227');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183269', 'Creche Municipal Mercia Maria Bezerra Costa', 1, 1, 1, 'Av Otacilio Azevedo', 1030, 'Brejo de Beberibe', 1, 81, '32324526');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171651', 'Creche Municipal Monte das Oliveiras', 1, 1, 1, 'Rua Alto da Brasileira', 7, 'Nova Descoberta', 1, 81, '33556278');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153300', 'Creche Municipal Nossa Senhora Auxiliadora', 1, 1, 1, 'Rua Antonio Correa de Oliveira', 669, 'Torroes', 1, 81, '33554858');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171660', 'Creche Municipal Nossa Senhora de Fatima', 1, 1, 1, 'Rua Alto do Reservatorio', 720, 'Nova Descoberta', 1, 81, '33553257');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153394', 'Creche Municipal Novo Horizonte', 1, 1, 1, 'Rua Jose Bezerra Cavalcante', 244, 'Mustardinha', 1, 81, '33556282');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153467', 'Creche Municipal Padre Lourenco', 1, 1, 1, 'Rua Pereira Carneiro', 172, 'Imbiribeira', 1, 81, '33553081');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158701', 'Creche Municipal Professor Francisco do Amaral Lopes', 1, 1, 1, 'Av Agamenon Magalhaes', NULL, 'Santo Amaro', 1, 81, '85518327');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153130', 'Creche Municipal Recife 2000', 1, 1, 1, 'Rua Rio Solimoes', NULL, 'Areias', 1, 81, '33553776');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156849', 'Creche Municipal Roda de Fogo', 1, 1, 1, 'Rua Ocidental', 33, 'Cordeiro', 1, 81, '33556935');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153114', 'Creche Municipal Rosa Selvagem', 1, 1, 1, 'Rua Porto Seguro', 4707, 'Varzea', 1, 81, '33553220');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149753', 'Creche Municipal São Domingos Savio', 1, 1, 1, 'Rua Casados', 164, 'Santo Amaro', 1, 81, '33554862');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149923', 'Creche Municipal São João', 1, 1, 1, 'Rua Dolcinopolis', 50, 'Macaxeira', 1, 81, '33554360');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153440', 'Creche Municipal Senador Paulo Guerra', 1, 1, 1, 'Rua Engenho Canto Alegre', NULL, 'Imbiribeira', 1, 81, '33553291');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170728', 'Creche Municipal Sitio Grande', 1, 1, 1, 'Rua Carlos Leoncio', 123, 'Imbiribeira', 1, 81, '33553740');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171678', 'Creche Municipal Sonho de Criança', 1, 1, 1, 'Rua Teotonio de Melo Filho', 218, 'Ibura', 1, 81, '33556621');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153068', 'Creche Municipal Sonho do Povo', 1, 1, 1, 'Rua Cordilheira', 1, 'Cohab', 1, 81, '33554364');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157462', 'Creche Municipal Tia Emilia', 1, 1, 1, 'Rua Pedro Batista', NULL, 'Dois Unidos', 1, 81, '33556466');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149826', 'Creche Municipal Unidos Venceremos', 1, 1, 1, 'Rua Corrego Jose Grande', 126, 'Alto Santa Terezinha', 1, 81, '92667624');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26177820', 'Creche Municipal Vila dos Milagres', 1, 1, 1, 'Rua Miguel', 14, 'Cohab', 1, 81, '33554866');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181274', 'Creche Municipal Vila Imperial', 1, 1, 1, 'Av Pedro de Melo Pedroza', 10, 'Arruda', 1, 81, '33554999');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157560', 'Creche Municipal Vinde A Mim As Criancinhas', 1, 1, 1, 'Rua Edeia', 89, 'Madalena', 1, 81, '33554870');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149818', 'Creche Municipal Vovo Artur', 1, 1, 1, 'Rua Coelhos', NULL, 'Coelhos', 1, 81, '33554372');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149850', 'Creche Municipal Waldemar de Souza Cabral', 1, 1, 1, 'Rua Antonio Meira', 73, 'Água Fria', 1, 81, '33556849');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153351', 'Creche Municipal Waldir Savluschinske', 1, 1, 1, 'Rua Alvaro Teixeira de Mesquita', NULL, 'Engenho do Meio', 1, 81, '33554090');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149834', 'Creche Municipal Zacarias do Rego Maciel', 1, 1, 1, 'Avenida Anibal Benevolo', 1536, 'Fundao', 1, 81, '33556925');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26180685', 'Creche Municipal Zilda Arns', 1, 1, 1, 'Rua Antonio Paes Barreto', 1, 'Imbiribeira', 1, 81, '33554306');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125986', 'Escola Ana Malta da Costa Azevedo', 1, 1, 1, 'Rua Padre Oliveira', 684, 'Bomba do Hemeterio', 1, 81, '32657464');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122987', 'Escola Carmela Dutra', 1, 1, 1, 'Rua General Souza Doca', NULL, 'Afogados', 1, 81, '31812720');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126559', 'Escola Comandante Luiz Gomes', 1, 1, 1, 'Avenida Vereador Otacilio Azevedo', 2567, 'Nova Descoberta', 1, 81, '31814813');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119730', 'Escola de Aplicacao do Recife', 1, 1, 1, 'Avenida Eport Club do Recife', 252, 'Madalena', 1, 81, '31818646');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121867', 'Escola de Referencia Em Ensino Fundamental Conego Rochael de Medeiros', 1, 1, 1, 'Avenida Mario Melo', NULL, 'Santo Amaro', 1, 81, '31812754');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126052', 'Escola de Referencia Em Ensino Fundamental Coronel Othon', 1, 1, 1, 'Rua Ida', 200, 'Macaxeira', 1, 81, '31812812');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123150', 'Escola de Referencia Em Ensino Fundamental Creusa Barreto Dornelas', 1, 1, 1, 'Rua Cantora Clara Nunes', NULL, 'Torre', 1, 81, '31812945');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124572', 'Escola de Referencia Em Ensino Fundamental Delmiro Gouveia', 1, 1, 1, 'Avenida Conselheiro Aguiar', NULL, 'Pina', 1, 81, '31813991');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125013', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Gercino de Pontes', 1, 1, 1, 'Rua Alvaro Amorim', 375, 'Imbiribeira', 1, 81, '31814863');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122227', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Governador Barbosa Lima', 1, 1, 1, 'Rua Joaquim Nabuco', 42, 'Gracas', 1, 81, '31812869');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120100', 'Escola de Referencia Em Ensino Fundamental e Ensino Médio Professora Inalda Spinelli', 1, 1, 1, 'Rua Jorge Couceiro da Costa Eiras', 748, 'Boa Viagem', 1, 81, '31813975');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123720', 'Escola de Referencia Em Ensino Fundamental e Médio Barão do Bonito', 1, 1, 1, 'Praca Quatro de Outubro', NULL, 'Areias', 1, 81, '31813028');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127571', 'Escola de Referencia Em Ensino Fundamental e Médio Barros Carvalho', 1, 1, 1, 'Rua Honorio Correia', 167, 'Cordeiro', 1, 81, '84944894');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124475', 'Escola de Referencia Em Ensino Fundamental e Médio Brigadeiro Eduardo Gomes', 1, 1, 1, 'Rua Barao de Souza Leao', NULL, 'Boa Viagem', 1, 81, '31814113');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126010', 'Escola de Referencia Em Ensino Fundamental e Médio Caio Pereira', 1, 1, 1, 'Rua Alto Jose Bonifacio', NULL, 'Alto José Bonifácio', 1, 81, '31812961');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122855', 'Escola de Referencia Em Ensino Fundamental e Médio Debora Feijo', 1, 1, 1, 'Rua Jovelino Selva', 71, 'Afogados', 1, 81, '31813948');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126141', 'Escola de Referencia Em Ensino Fundamental e Médio Dona Maria Teresa Correa', 1, 1, 1, 'Rua Maragogi', NULL, 'Alto José do Pinho', 1, 81, '31812751');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127636', 'Escola de Referencia Em Ensino Fundamental e Médio Educador Paulo Freire', 1, 1, 1, 'Avenida Engenheiro Abdias de Carvalho', NULL, 'San Martin', 1, 81, '31812804');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126206', 'Escola de Referencia Em Ensino Fundamental e Médio Gilberto Freyre', 1, 1, 1, 'Alto Treze de Maio', NULL, 'Vasco da Gama', 1, 81, '31812753');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128195', 'Escola de Referencia Em Ensino Fundamental e Médio Jarbas Pernambucano', 1, 1, 1, 'Rua Marques de Tamandare', NULL, 'Cajueiro', 1, 81, '31813994');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127695', 'Escola de Referencia Em Ensino Fundamental e Médio Joaquim Xavier de Brito', 1, 1, 1, 'Rua Cordislandia', 1120, 'Iputinga', 1, 81, '98494549');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124645', 'Escola de Referencia Em Ensino Fundamental e Médio Jornalista Costa Porto', 1, 1, 1, 'Rua Bahia', NULL, 'Jordao Baixo', 1, 81, '31814726');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120992', 'Escola de Referencia Em Ensino Fundamental e Médio Liceu de Artes e Oficios', 1, 1, 1, 'Avenida Oliveira Lima', 824, 'Boa Vista', 1, 81, '21194112');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125650', 'Escola de Referencia Em Ensino Fundamental e Médio Lions de Parnamirim', 1, 1, 1, 'Av Dom Manoel de Medeiros', NULL, 'Dois Irmaos', 1, 81, '31812917');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124670', 'Escola de Referencia Em Ensino Fundamental e Médio Marechal Eurico Gaspar Dutra', 1, 1, 1, 'Rua Sergio Buarque de Holanda', 27906, 'Ibura', 1, 81, '31814766');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26107651', 'Escola de Referencia Em Ensino Fundamental e Médio Maria da Conceicao do Rego Barros Lacerda', 1, 1, 1, 'Rua Vale do Jaguaribe', NULL, 'Varzea', 1, 81, '31814094');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125943', 'Escola de Referencia Em Ensino Fundamental e Médio Monsenhor Manoel Marques', 1, 1, 1, 'Rua Desembargador Heraclito Cavalcanti', NULL, 'Mangabeira', 1, 81, '31812762');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125358', 'Escola de Referencia Em Ensino Fundamental e Médio Monte Verde', 1, 1, 1, 'Rua Maria Lima da Silva', NULL, 'Cohab', 1, 81, '31814720');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126443', 'Escola de Referencia Em Ensino Fundamental e Médio Nossa Senhora de Fatima', 1, 1, 1, 'Estrada da Mumbeca', 016, 'Guabiraba', 1, 81, '31814744');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127431', 'Escola de Referencia Em Ensino Fundamental e Médio Professor Leal de Barros', 1, 1, 1, 'Rua Antonio Borges Uchoa', NULL, 'Engenho do Meio', 1, 81, '31814866');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124920', 'Escola de Referencia Em Ensino Fundamental e Médio São Francisco de Assis', 1, 1, 1, 'Rua Sargento Silvio Delmar Hollembach', NULL, 'Imbiribeira', 1, 81, '31814155');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128594', 'Escola de Referencia Em Ensino Fundamental e Médio São Miguel', 1, 1, 1, '2ª Travessa Siriji', NULL, 'Monteiro', 1, 81, '31813937');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127512', 'Escola de Referencia Em Ensino Fundamental e Médio Senador Novaes Filho', 1, 1, 1, 'Rua Dona Maria Lacerda', NULL, 'Varzea', 1, 81, '31812889');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122553', 'Escola de Referencia Em Ensino Fundamental Embaixador Gilberto Amado', 1, 1, 1, 'Rua Gaspar Regueira', NULL, 'Hipodromo', 1, 81, '31812769');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121620', 'Escola de Referencia Em Ensino Fundamental João Barbalho', 1, 1, 1, 'Rua do Hospicio', 737, 'Santo Amaro', 1, 81, '31812830');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125080', 'Escola de Referencia Em Ensino Fundamental Luis de Camoes', 1, 1, 1, 'Rua Doutor Henrique Lins', NULL, 'Brasilia Teimosa', 1, 81, '31814088');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123231', 'Escola de Referencia Em Ensino Fundamental Maciel Pinheiro', 1, 1, 1, 'Praca Professor Barreto Campelo', 1085, 'Torre', 1, 81, '33038049');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123525', 'Escola de Referencia Em Ensino Fundamental Marcelino Champagnat', 1, 1, 1, 'Rua Rivadavia Guerra', 55, 'Tejipio', 1, 81, '31813040');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123240', 'Escola de Referencia Em Ensino Fundamental Maria Goretti', 1, 1, 1, 'Estrada dos Remedios', 1603, 'Afogados', 1, 81, '31812742');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153491', 'Escola de Referencia Em Ensino Fundamental Monsenhor Manoel Leonardo de Barros Barreto', 1, 1, 1, 'Rua Arariba', NULL, 'Sao Jose', 1, 81, '31813091');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124777', 'Escola de Referencia Em Ensino Fundamental Othon Bezerra de Melo', 1, 1, 1, 'Rua Virginia Heraclio', 899, 'Ipsep', 1, 81, '31813092');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127423', 'Escola de Referencia Em Ensino Fundamental Pintor Lauro Villares', 1, 1, 1, 'Rua Clarice Lispector', NULL, 'Torroes', 1, 81, '31812924');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122880', 'Escola de Referencia Em Ensino Fundamental Presidente Arthur da Costa e Silva', 1, 1, 1, 'Rua Tejucupapo', 536, 'Mustardinha', 1, 81, '31812940');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127865', 'Escola de Referencia Em Ensino Fundamental Professor Candido Duarte', 1, 1, 1, 'Praca Pinto Damasio', NULL, 'Varzea', 1, 81, '31812965');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124424', 'Escola de Referencia Em Ensino Fundamental Professor Marcos de Barros Freire', 1, 1, 1, 'Avenida Engenho Babilonia', NULL, 'Cohab', 1, 81, '31814054');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122260', 'Escola de Referencia Em Ensino Fundamental Professor Motta e Albuquerque', 1, 1, 1, 'Rua Soares Moreno', 117, 'Tamarineira', 1, 81, '32686944');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128462', 'Escola de Referencia Em Ensino Fundamental Professor Pedro Augusto Carneiro Leao', 1, 1, 1, 'Av.beberibe', 2595, 'Fundao', 1, 81, '31813079');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123584', 'Escola de Referencia Em Ensino Fundamental Professora Olindina Alves Semente', 1, 1, 1, 'Rua Paulo Afonso', NULL, 'Barro', 1, 81, '31813961');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125293', 'Escola de Referencia Em Ensino Fundamental Senador Antonio Farias', 1, 1, 1, 'Rua Ibirapua', 757, 'Cohab', 1, 81, '31814820');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122952', 'Escola de Referencia Em Ensino Fundamental Senador Nilo de Souza Coelho', 1, 1, 1, 'Avenida Recife 4316', NULL, 'Estancia', 1, 81, '31813906');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124904', 'Escola de Referencia Em Ensino Fundamental Vila dos Milagres', 1, 1, 1, 'Rua Nossa Senhora do Carmo', 340, 'Ibura', 1, 81, '31814712');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126079', 'Escola de Referencia Em Ensino Médio Ageu Magalhaes', 1, 1, 1, 'Estrada do Arraial', 3208, 'Tamarineira', 1, 81, '32663960');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123479', 'Escola de Referencia Em Ensino Médio Alberto Torres', 1, 1, 1, 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 1, 81, '31812774');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125978', 'Escola de Referencia Em Ensino Médio Alvaro Lins', 1, 1, 1, 'Av Vereador Otacilio Azevedo', 4538, 'Nova Descoberta', 1, 81, '31814804');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122847', 'Escola de Referencia Em Ensino Médio Amaury de Medeiros', 1, 1, 1, 'Rua Sao Miguel', NULL, 'Afogados', 1, 81, '31812737');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123703', 'Escola de Referencia Em Ensino Médio Anibal Falcao', 1, 1, 1, 'Rua Aprigio Guimaraes', 102, 'Tejipio', 1, 81, '31812708');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121859', 'Escola de Referencia Em Ensino Médio Anibal Fernandes', 1, 1, 1, 'Rua Marques do Pombal', 730, 'Santo Amaro', 1, 81, '31812712');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124432', 'Escola de Referencia Em Ensino Médio Apolonio Sales', 1, 1, 1, 'Rua Professor Jose Brasileiro Vila Nova', 38, 'Ibura de Baixo', 1, 81, '31813988');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124440', 'Escola de Referencia Em Ensino Médio Assis Chateaubriand', 1, 1, 1, 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 1, 81, '31813008');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126044', 'Escola de Referencia Em Ensino Médio Clotilde de Oliveira', 1, 1, 1, 'Avenida Norte', 6760, 'Casa Amarela', 1, 81, '32680002');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122510', 'Escola de Referencia Em Ensino Médio Clovis Bevilaqua', 1, 1, 1, 'Rua Carlos Fernandes', 185, 'Hipodromo', 1, 81, '31812803');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128101', 'Escola de Referencia Em Ensino Médio de Beberibe', 1, 1, 1, 'Rua Uriel de Holanda', 219, 'Beberibe', 1, 81, '31812861');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127300', 'Escola de Referencia Em Ensino Médio Diario de Pernambuco', 1, 1, 1, 'Rua Costa Sepulveda', NULL, 'Engenho do Meio', 1, 81, '984944878');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124785', 'Escola de Referencia Em Ensino Médio Dom Sebastiao Leme', 1, 1, 1, 'Avenida Engenho Muribara', NULL, 'Cohab', 1, 81, '31812837');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126133', 'Escola de Referencia Em Ensino Médio Dom Vital', 1, 1, 1, 'Estrada do Arraial', 4051, 'Casa Amarela', 1, 81, '31814099');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124580', 'Escola de Referencia Em Ensino Médio Eleanor Roosevelt', 1, 1, 1, 'Rua Aracatuba', 43, 'Ipsep', 1, 81, '31812786');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124602', 'Escola de Referencia Em Ensino Médio Engenheiro Lauro Diniz', 1, 1, 1, 'Rua Saturnino Meireles', 180, 'Ipsep', 1, 81, '31812827');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26172712', 'Escola de Referencia Em Ensino Médio Ginasio Pernambucano - Aurora', 1, 1, 1, 'Rua da Aurora', 703, 'Boa Vista', 1, 81, '31814777');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121247', 'Escola de Referencia Em Ensino Médio Joaquim Nabuco', 1, 1, 1, 'Rua Imperial', 1102, 'Sao Jose', 1, 81, '31812796');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123282', 'Escola de Referencia Em Ensino Médio Joaquim Tavora', 1, 1, 1, 'Rua Real da Torre', NULL, 'Madalena', 1, 81, '31812794');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127334', 'Escola de Referencia Em Ensino Médio Jornalista Trajano Chacon', 1, 1, 1, 'Avenida Forte do Arraial Novo do Bom Jesus', NULL, 'Cordeiro', 1, 81, '31812675');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123517', 'Escola de Referencia Em Ensino Médio José Mariano', 1, 1, 1, 'Avenida Doutor Jose Rufino', 892, 'Estancia', 1, 81, '31813067');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125641', 'Escola de Referencia Em Ensino Médio José Vilela', 1, 1, 1, 'Estrada do Encanamento', 277, 'Casa Forte', 1, 81, '32683110');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124653', 'Escola de Referencia Em Ensino Médio Lagoa Encantada', 1, 1, 1, 'Rua Doutor Moacir Sales', NULL, 'Cohab', 1, 81, '31813033');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121344', 'Escola de Referencia Em Ensino Médio Luiz Delgado', 1, 1, 1, 'Rua do Hospicio', NULL, 'Boa Vista', 1, 81, '31813039');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121310', 'Escola de Referencia Em Ensino Médio Manoel Borba', 1, 1, 1, 'Rua Almirante Nelson Fernandes', NULL, 'Boa Viagem', 1, 81, '31813947');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124696', 'Escola de Referencia Em Ensino Médio Maria Rita da Silva Lessa', 1, 1, 1, 'Avenida Industrial Mendo Sampaio', NULL, 'Jordao', 1, 81, '31814789');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123258', 'Escola de Referencia Em Ensino Médio Martins Junior', 1, 1, 1, 'Rua Padre Jose Regueira', 136, 'Torre', 1, 81, '31813094');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179610', 'Escola de Referencia Em Ensino Médio Nobrega', 1, 1, 1, 'Estrada de Belem', 257, 'Encruzilhada', 1, 81, '31812883');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127415', 'Escola de Referencia Em Ensino Médio Olinto Victor', 1, 1, 1, 'Avenida Afonso Olindense', 153, 'Varzea', 1, 81, '31812914');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121654', 'Escola de Referencia Em Ensino Médio Oliveira Lima', 1, 1, 1, 'Rua Barao de Sao Borja', 347, 'Soledade', 1, 81, '31812792');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122839', 'Escola de Referencia Em Ensino Médio Othon Paraiso', 1, 1, 1, 'Avenida Manoel Goncalves da Luz', 140, 'Bongi', 1, 81, '994889836');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126109', 'Escola de Referencia Em Ensino Médio Padre Machado', 1, 1, 1, 'Rua Major Nereu Guerra', 92, 'Casa Amarela', 1, 81, '32672812');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128403', 'Escola de Referencia Em Ensino Médio Padre Nercio Rodrigues', 1, 1, 1, 'Rua Uriel de Holanda', 1300, 'Linha do Tiro', 1, 81, '31812901');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128420', 'Escola de Referencia Em Ensino Médio Pedro Celso', 1, 1, 1, 'Rua Uriel de Holanda', NULL, 'Beberibe', 1, 81, '31813940');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121670', 'Escola de Referencia Em Ensino Médio Poeta Manuel Bandeira', 1, 1, 1, 'Praca Doutor Fernando Figueira', NULL, 'Ilha do Leite', 1, 81, '31812896');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188295', 'Escola de Referencia Em Ensino Médio Pompeia Campos', 1, 1, 1, 'Avenida Norte Miguel Arraes de Alencar', 7487, 'Macaxeira', 1, 81, '31813030');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123576', 'Escola de Referencia Em Ensino Médio Presidente Humberto Castelo Branco', 1, 1, 1, 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 1, 81, '32529941');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125757', 'Escola de Referencia Em Ensino Médio Professor Candido Duarte', 1, 1, 1, 'Av Dois Irmaos', NULL, 'Dois Irmaos', 1, 81, '31814806');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125250', 'Escola de Referencia Em Ensino Médio Professor Fernando Mota', 1, 1, 1, 'Rua Copacabana', NULL, 'Boa Viagem', 1, 81, '31813052');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186241', 'Escola de Referencia Em Ensino Médio Professor Jordao Emerenciano', 1, 1, 1, 'Avenida Santarem', 2, 'Cohab', 1, 81, '31814859');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128721', 'Escola de Referencia Em Ensino Médio Professor Mardonio de Andrade Lima Coelho', 1, 1, 1, 'Rua Cha de Alegria', 117, 'Bomba do Hemeterio', 1, 81, '34519993');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123592', 'Escola de Referencia Em Ensino Médio Professor Trajano de Mendonca', 1, 1, 1, 'Rua Capetinga', NULL, 'Jardim Sao Paulo', 1, 81, '31813065');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127741', 'Escola de Referencia Em Ensino Médio Professora Helena Pugo', 1, 1, 1, 'Rua Quinze de Marco', NULL, 'San Martin', 1, 81, '31814709');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122278', 'Escola de Referencia Em Ensino Médio Regueira Costa', 1, 1, 1, 'Rua Regueira Costa', NULL, 'Rosarinho', 1, 81, '31812923');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126613', 'Escola de Referencia Em Ensino Médio Rosa de Magalhaes Melo', 1, 1, 1, 'Av Anibal Benevolo', 1378, 'Alto Santa Terezinha', 1, 81, '31813072');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126621', 'Escola de Referencia Em Ensino Médio Rotary de Nova Descoberta', 1, 1, 1, 'Av Otacilio de Azevedo', NULL, 'Nova Descoberta', 1, 81, '31814827');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122677', 'Escola de Referencia Em Ensino Médio Santa Paula Frassinetti', 1, 1, 1, 'Rua Gomes Pacheco', NULL, 'Espinheiro', 1, 81, '31813054');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124190', 'Escola de Referencia Em Ensino Médio Santos Dumont', 1, 1, 1, 'Rua Barao de Souza Leao', 792, 'Boa Viagem', 1, 81, '31813080');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118742', 'Escola de Referencia Em Ensino Médio Senador Paulo Pessoa Guerra', 1, 1, 1, 'Avenida Doutor Jose Rufino', 2993, 'Tejipio', 1, 81, '31813016');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125781', 'Escola de Referencia Em Ensino Médio Silva Jardim', 1, 1, 1, 'Praca do Monteiro', 2727, 'Monteiro', 1, 81, '31814110');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121921', 'Escola de Referencia Em Ensino Médio Sizenando Silveira', 1, 1, 1, 'Avenida Jornalista Mario Melo', NULL, 'Santo Amaro', 1, 81, '31813943');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121948', 'Escola de Referencia Em Ensino Médio Sylvio Rabello', 1, 1, 1, 'Avenida Jornalista Mario Melo', NULL, 'Santo Amaro', 1, 81, '34211318');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122960', 'Escola de Referencia Em Ensino Médio Vidal de Negreiros', 1, 1, 1, 'Rua Bezerra da Palma', NULL, 'Afogados', 1, 81, '31812863');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122545', 'Escola Dom Carlos Coelho - Recife', 1, 1, 1, 'Rua Marechal Deodoro', 626533534, 'Campo Grande', 1, 81, '31812718');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128160', 'Escola Doutor Fabio Correa', 1, 1, 1, 'Av. Adalberto Elias da Costa', NULL, 'Beberibe', 1, 81, '31813043');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128179', 'Escola Doutor Francisco Pessoa de Queiroz', 1, 1, 1, 'Avenida Hildebrando de Vasconcelos', NULL, 'Dois Unidos', 1, 81, '34987749');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123509', 'Escola Edwiges de Sa Pereira', 1, 1, 1, 'Rua Rivadavia Guerra', 50, 'Tejipio', 1, 81, '31812872');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124599', 'Escola Eneida Rabello', 1, 1, 1, 'Avenida Dona Carentina', NULL, 'Jordao Alto', 1, 81, '31812869');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126150', 'Escola Erundina Negreiros de Araujo', 1, 1, 1, 'Rua Erundina Negreiros de Araujo', NULL, 'Corrego do Jenipapo', 1, 81, '32672922');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182629', 'Escola Estadual Nossa Senhora das Gracas - Recife', 1, 1, 1, 'Rua Orfeu Carnaval', NULL, 'Sancho', 1, 81, '31812638');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127857', 'Escola Fernandes Vieira', 1, 1, 1, 'Avenida Caxanga', 3595, 'Iputinga', 1, 81, '31812790');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126192', 'Escola Gabriela Mistral', 1, 1, 1, 'Rua Ladeira de Pedra', NULL, 'Água Fria', 1, 81, '31812963');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126214', 'Escola Gov Carlos de Lima Cavalcanti', 1, 1, 1, 'Rua Desembargador Motta Junior', 120, 'Casa Amarela', 1, 81, '31812746');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123770', 'Escola Herois da Restauracao', 1, 1, 1, 'Rua Oiticica Lins', NULL, 'Areias', 1, 81, '31812714');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126230', 'Escola Irma Magna', 1, 1, 1, 'Av Vereador Otacilio Azevedo', 288, 'Casa Amarela', 1, 81, '31813959');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121891', 'Escola José Maria', 1, 1, 1, 'Rua Treze de Maio', NULL, 'Santo Amaro', 1, 81, '31812844');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125072', 'Escola Landelino Rocha', 1, 1, 1, 'Rua Capitao Rebelinho', NULL, 'Pina', 1, 81, '31813050');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126290', 'Escola Maria Amalia', 1, 1, 1, 'Avenida Norte', 7750, 'Macaxeira', 1, 81, '31814710');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126311', 'Escola Matias de Albuquerque', 1, 1, 1, 'R. Fernando de Sousa Caete', NULL, 'Casa Amarela', 1, 81, '32668088');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124874', 'Escola Missionario São Bento', 1, 1, 1, 'Rua Capitao Vicente Curado', 350, 'Cohab', 1, 81, '31814714');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123533', 'Escola Monsenhor Alvaro Negromonte', 1, 1, 1, 'Rua Onze de Agosto', NULL, 'Toto', 1, 81, '31814851');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121638', 'Escola Monsenhor Francisco Salles', 1, 1, 1, 'Av Oliveira Lima', 1029, 'Boa Vista', 1, 81, '32223600');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124173', 'Escola Municipal 14 Bis', 1, 1, 1, 'Rua Nelson Fernandes', NULL, 'Boa Viagem', 1, 81, '33550419');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26154846', 'Escola Municipal 27 de Novembro', 1, 1, 1, 'Av Doze de Junho', 1120, 'Cohab', 1, 81, '33553534');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124092', 'Escola Municipal Abilio Gomes', 1, 1, 1, 'Rua Bruno Veloso', NULL, 'Boa Viagem', 1, 81, '33553462');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128110', 'Escola Municipal Alda Romeu', 1, 1, 1, 'Rua Corrego do Deodato', 685, 'Água Fria', 1, 81, '33553490');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120658', 'Escola Municipal Almirante Soares Dutra', 1, 1, 1, 'Rua Camutanga', 180, 'Cabanga', 1, 81, '33553880');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123380', 'Escola Municipal Alto da Bela Vista', 1, 1, 1, 'Rua Alto da Bela Vista', 338, 'Coqueiral', 1, 81, '33550121');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126370', 'Escola Municipal Alto da Guabiraba', 1, 1, 1, 'Rua Costa e Silva', NULL, 'Brejo da Guabiraba', 1, 81, '33554036');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26136300', 'Escola Municipal Alto do Maracana', 1, 1, 1, 'Rua Vila Flor', 356, 'Dois Unidos', 1, 81, '33554887');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166593', 'Escola Municipal Alto do Pascoal', 1, 1, 1, 'Rua Ladeira de Pedra', 1265, 'Água Fria', 1, 81, '33554221');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149370', 'Escola Municipal Alto do Refugio Ivan Neves', 1, 1, 1, 'Rua Alto do Refugio', 250, 'Brejo de Beberibe', 1, 81, '33554468');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125854', 'Escola Municipal Alto Jardim Progresso', 1, 1, 1, 'Rua Alto Jardim Progresso', 300, 'Nova Descoberta', 1, 81, '33553430');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139723', 'Escola Municipal Alto Santa Terezinha', 1, 1, 1, 'Avenida Anibal Benevolo', NULL, 'Fundao', 1, 81, '33553856');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128764', 'Escola Municipal Ana Mauricia Wanderley', 1, 1, 1, 'Rua Joao Uzeda Luna', 813, 'Água Fria', 1, 81, '33554890');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123541', 'Escola Municipal Andre de Melo', 1, 1, 1, 'Rua Morais e Silva', 180, 'Estancia', 1, 81, '33553780');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175371', 'Escola Municipal Anexa Casa Amarela', 1, 1, 1, 'Rua Corrego da Areia', 568, 'Macaxeira', 1, 81, '33554910');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128926', 'Escola Municipal Anita Paes Barreto', 1, 1, 1, 'Rua Geroncio Falcao', 198, 'Fundao', 1, 81, '34984125');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117576', 'Escola Municipal Antonio Farias Filho', 1, 1, 1, 'Rua Vinte e Um de Abril', NULL, 'San Martin', 1, 81, '33554902');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128640', 'Escola Municipal Antonio Heraclio do Rego', 1, 1, 1, 'Rua Manoel Silva', 134, 'Água Fria', 1, 81, '33554228');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128659', 'Escola Municipal Antonio Luiz', 1, 1, 1, 'Rua Joao Batista', 134, 'Água Fria', 1, 81, '33553792');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128772', 'Escola Municipal Antonio Tiburcio', 1, 1, 1, 'Rua Tamboara', 356, 'Alto Santa Terezinha', 1, 81, '33556873');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125994', 'Escola Municipal Arquiteto Alexandre Muniz de Oliveira', 1, 1, 1, 'Rua Alto do Venacio', 120, 'Corrego do Jenipapo', 1, 81, '33553579');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127369', 'Escola Municipal Arraial Novo do Bom Jesus', 1, 1, 1, 'Est Forte do Arraial N. do B. Jesus', 1340, 'Torroes', 1, 81, '33554123');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171716', 'Escola Municipal Artista Plastico Cicero Dias', 1, 1, 1, 'Rua Vale do Cariri', 29005, 'Cohab', 1, 81, '33556294');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170639', 'Escola Municipal Asa Branca', 1, 1, 1, 'Rua Maria Adelaide Castelo Branco', 55, 'Cohab', 1, 81, '33556923');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120682', 'Escola Municipal Balbina Menelau', 1, 1, 1, 'Rua Joao de Andrade', 82, 'Jardim Sao Paulo', 1, 81, '33553992');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124467', 'Escola Municipal Beato Eugenio Mazenod', 1, 1, 1, 'Av Luxemburgo', 303, 'Imbiribeira', 1, 81, '33556937');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126869', 'Escola Municipal Boa Esperanca', 1, 1, 1, 'Rua Pedra Bonita', 80, 'Vasco da Gama', 1, 81, '33556482');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26491710', 'Escola Municipal Bola Na Rede', 1, 1, 1, 'Rua Artur Orlando de Andrade Bezerra', 100, 'Guabiraba', 1, 81, '91674563');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166623', 'Escola Municipal Campina do Barreto', 1, 1, 1, 'Rua Virgilio de Melo Franco', 28, 'Cajueiro', 1, 81, '33554212');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124483', 'Escola Municipal Capela Santo Antonio', 1, 1, 1, 'Rua Sandalo', NULL, 'Imbiribeira', 1, 81, '33554926');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171767', 'Escola Municipal Carlucio de Souza Castanha Junior', 1, 1, 1, 'Av Pernambuco', 1, 'Cohab', 1, 81, '33553744');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123444', 'Escola Municipal Casa dos Ferroviarios', 1, 1, 1, 'Rua Jose Cornelio', 84, 'Coqueiral', 1, 81, '33553556');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127016', 'Escola Municipal Casarao do Barbalho', 1, 1, 1, 'Est Barbalho', 1595, 'Iputinga', 1, 81, '33553864');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175363', 'Escola Municipal Cecilia Meirelles', 1, 1, 1, 'Rua Linch', 189, 'Macaxeira', 1, 81, '33554914');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127024', 'Escola Municipal Celia Arraes', 1, 1, 1, 'Rua Jose Noya', 131, 'Varzea', 1, 81, '33554918');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170779', 'Escola Municipal Chico Mendes', 1, 1, 1, 'Trv Campo', NULL, 'Cacote', 1, 81, '33554476');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26419734', 'Escola Municipal Chico Science', 1, 1, 1, 'Rua Catigua', 112, 'Vasco da Gama', 1, 81, '92281580');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124513', 'Escola Municipal Cicero Franklin Cordeiro', 1, 1, 1, 'Rua Felipe dos Santos', 11105, 'Cohab', 1, 81, '33553560');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121972', 'Escola Municipal Cidadao Herbert de Souza', 1, 1, 1, 'Rua Arnobio Marques', 310, 'Santo Amaro', 1, 81, '33554080');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190079', 'Escola Municipal Clarice Lispector', 1, 1, 1, 'Rua Erval', NULL, 'Ipsep', 1, 81, '33550074');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26212200', 'Escola Municipal Compositor Capiba', 1, 1, 1, 'Rua Othon Paraiso', 375, 'Torreao', 1, 81, '33553768');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128780', 'Escola Municipal Compositor Levino Ferreira', 1, 1, 1, 'Rua Corrego Jose Grande', 1441, 'Alto José Bonifácio', 1, 81, '33554922');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126680', 'Escola Municipal Corrego da Areia', 1, 1, 1, 'Rua Corrego da Areia', 5449, 'Nova Descoberta', 1, 81, '92975522');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126362', 'Escola Municipal Corrego da Bica', 1, 1, 1, 'Rua Corrego da Bica', NULL, 'Passarinho', 1, 81, '33554456');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158752', 'Escola Municipal Corrego do Euclides', 1, 1, 1, 'Rua Tibirica', 48, 'Morro da Conceicao', 1, 81, '33553494');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127008', 'Escola Municipal Creusa de Freitas Cavalcanti', 1, 1, 1, 'Rua Epaminondas Cristovao de Oliveira', NULL, 'Torroes', 1, 81, '33553938');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133837', 'Escola Municipal Cristiano Cordeiro', 1, 1, 1, 'Av Santos', 2, 'Cohab', 1, 81, '33553796');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171740', 'Escola Municipal da Guabiraba', 1, 1, 1, 'Rua Cassiterita', 395, 'Brejo da Guabiraba', 1, 81, '33554200');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119218', 'Escola Municipal da Iputinga', 1, 1, 1, 'Rua Fernando Furtado', 479, 'Iputinga', 1, 81, '33554097');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128233', 'Escola Municipal da Mangabeira', 1, 1, 1, 'Rua Niceas Arcoverde Gusmao', NULL, 'Mangabeira', 1, 81, '91004334');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153424', 'Escola Municipal Darcy Ribeiro', 1, 1, 1, 'Rua Odete Monteiro', 450, 'Cordeiro', 1, 81, '33554110');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166640', 'Escola Municipal de Agua Fria', 1, 1, 1, 'Rua Craveiros', 500, 'Campina do Barreto', 1, 81, '33554488');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166607', 'Escola Municipal de Beberibe', 1, 1, 1, 'Rua Melanio de Barros Correia', 25, 'Beberibe', 1, 81, '33553652');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166658', 'Escola Municipal de Casa Amarela', 1, 1, 1, 'Rua Corrego da Areia', 287, 'Macaxeira', 1, 81, '92884414');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119129', 'Escola Municipal de Dois Rios', 1, 1, 1, 'Rua Maria Evangelista', 83, 'Cohab', 1, 81, '33553600');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123550', 'Escola Municipal de Tejipio', 1, 1, 1, 'Rua Tutoia', 165, 'Coqueiral', 1, 81, '33556897');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158329', 'Escola Municipal Deputado Edson Cantarelli', 1, 1, 1, 'Rua Rubineia', 49, 'Ibura', 1, 81, '33553788');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132267', 'Escola Municipal Deputado Fernando Sampaio', 1, 1, 1, 'Alto do Olho Dagua', 105, 'Nova Descoberta', 1, 81, '33554930');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128888', 'Escola Municipal Deus e Amor', 1, 1, 1, 'Rua Ladeira de Pedra', 395, 'Água Fria', 1, 81, '33554216');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170647', 'Escola Municipal Diacono Abel Gueiros', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 7696, 'Macaxeira', 1, 81, '33553705');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26155850', 'Escola Municipal Dina de Oliveira', 1, 1, 1, 'Rua Mateus', NULL, 'Iputinga', 1, 81, '33554204');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127520', 'Escola Municipal Divino Espirito Santo', 1, 1, 1, 'Av Caxanga', 127, 'Varzea', 1, 81, '33553885');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168073', 'Escola Municipal do Barro', 1, 1, 1, 'Rua Guiragibe', 117, 'Barro', 1, 81, '33553584');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122898', 'Escola Municipal do Coque', 1, 1, 1, 'Rua Mirandopolis', 35, 'Ilha Joana Bezerra', 1, 81, '33553636');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120402', 'Escola Municipal do Dom', 1, 1, 1, 'Rua Pacheco', 115, 'Varzea', 1, 81, '33554492');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120704', 'Escola Municipal do Jordao', 1, 1, 1, 'Rua Silva Jardim', 175, 'Jordao', 1, 81, '33556901');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120712', 'Escola Municipal do Leao', 1, 1, 1, 'Rua Bruno Veloso', 300, 'Boa Viagem', 1, 81, '33553872');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168111', 'Escola Municipal do Pantanal', 1, 1, 1, 'Rua Diogo', 240, 'Barro', 1, 81, '92608037');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168120', 'Escola Municipal do Sancho', 1, 1, 1, 'Rua Joao Ferreira', 427, 'Sancho', 1, 81, '33550863');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123487', 'Escola Municipal Dom Bosco', 1, 1, 1, 'Rua Alvenopolis', 600, 'Jardim Sao Paulo', 1, 81, '33553848');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122570', 'Escola Municipal Dom Helder Camara', 1, 1, 1, 'Rua Parana', 320, 'Espinheiro', 1, 81, '33553668');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126818', 'Escola Municipal Dom José Lamartine Soares', 1, 1, 1, 'Rua Alto do Eucalipto', NULL, 'Vasco da Gama', 1, 81, '33556302');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181940', 'Escola Municipal Dona Luci Silva Lima', 1, 1, 1, 'Av Monaco', 1138, 'Imbiribeira', 1, 81, '33554333');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118670', 'Escola Municipal dos Coelhos', 1, 1, 1, 'Rua Coelhos', 591, 'Coelhos', 1, 81, '33553486');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119145', 'Escola Municipal dos Remedios', 1, 1, 1, 'Trv Estrada do Bongi', 91, 'Prado', 1, 81, '33553459');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127083', 'Escola Municipal dos Torroes', 1, 1, 1, 'Rua Antonio Correa de Oliveira', 110, 'Torroes', 1, 81, '33556350');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123495', 'Escola Municipal Doutor Antonio Correia', 1, 1, 1, 'Rua Manuel Salvador', 360, 'Barro', 1, 81, '33553868');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126389', 'Escola Municipal Doutor Caete', 1, 1, 1, 'Rua Alvaraes', 222, 'Nova Descoberta', 1, 81, '33554496');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127644', 'Escola Municipal Doutor Ebenezer Gueiros', 1, 1, 1, 'Rua Aluisio Baltar', 69, 'Iputinga', 1, 81, '33556912');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119641', 'Escola Municipal Doutor Rodolfo Aureliano', 1, 1, 1, 'Rua Jose Avelar', 211, 'Varzea', 1, 81, '33553996');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127547', 'Escola Municipal Doutor Samuel Goncalves', 1, 1, 1, 'Rua Austro Costa', 227, 'Prado', 1, 81, '33553453');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120720', 'Escola Municipal Draomiro Chaves Aguiar', 1, 1, 1, 'Rua Izabel', 655, 'Casa Amarela', 1, 81, '33554072');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123088', 'Escola Municipal Edite Braga', 1, 1, 1, 'Rua Nicolau Pereira', 85, 'Afogados', 1, 81, '33553692');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148161', 'Escola Municipal Educador Paulo Freire', 1, 1, 1, 'Av Bento da Gama', 301, 'Ipsep', 1, 81, '33553952');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166631', 'Escola Municipal Engenheiro Edinaldo Miranda de Oliveira', 1, 1, 1, 'Rua Inacio Galvao dos Santos', 304, 'Encruzilhada', 1, 81, '33553977');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120607', 'Escola Municipal Engenheiro Guilherme Diniz', 1, 1, 1, 'Rua Afonso Cunha', NULL, 'Ibura', 1, 81, '33553825');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26155869', 'Escola Municipal Engenheiro Henoch Coutinho de Melo', 1, 1, 1, 'Rua Ivonete Ferreira da Silva', 12, 'Pina', 1, 81, '33053342');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120674', 'Escola Municipal Engenheiro Umberto Gondim', 1, 1, 1, 'Rua Ivonete Ferreira da Silva', 13, 'Pina', 1, 81, '33053465');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127377', 'Escola Municipal Engenho do Meio', 1, 1, 1, 'Rua Bom Pastor', 1406, 'Engenho do Meio', 1, 81, '33553450');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190915', 'Escola Municipal Escola Santa Luzia', 1, 1, 1, 'Rua Caldas Filho', 186, 'Estancia', 1, 81, '33554484');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124955', 'Escola Municipal Escritor Josue de Castro', 1, 1, 1, 'Rua Carapeba', NULL, 'Brasilia Teimosa', 1, 81, '33554241');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132643', 'Escola Municipal Fernando Santa Cruz', 1, 1, 1, 'Rua Boanerges Pereira', 437, 'Jordao', 1, 81, '33554500');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175347', 'Escola Municipal Frei Tadeu Glaser', 1, 1, 1, 'Prc Agamenon Magalhaes', 600, 'Santo Amaro', 1, 81, '33553576');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124610', 'Escola Municipal Futuro Feliz', 1, 1, 1, 'Rua Ibiraja', 440, 'Ibura', 1, 81, '33554942');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121980', 'Escola Municipal General Emidio Dantas Barreto', 1, 1, 1, 'Av Saudade', 303, 'Santo Amaro', 1, 81, '33554061');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119617', 'Escola Municipal General San Martin', 1, 1, 1, 'Av San Martin', 1864, 'San Martin', 1, 81, '33553956');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26177951', 'Escola Municipal Governador Miguel Arraes de Alencar', 1, 1, 1, 'Av Tapajos', 419, 'Estancia', 1, 81, '33553683');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127873', 'Escola Municipal Henfil', 1, 1, 1, 'Rua Seis de Marco', 10, 'Varzea', 1, 81, '96352796');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26145227', 'Escola Municipal Historiador Flavio Guerra', 1, 1, 1, 'Rua Alto da Telha', 320, 'Passarinho', 1, 81, '33554504');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120810', 'Escola Municipal Hugo Gerdau', 1, 1, 1, 'Rua Mizael de Mendonca', NULL, 'San Martin', 1, 81, '86473764');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168227', 'Escola Municipal Ibura de Baixo', 1, 1, 1, 'Rua Rio Novo do Sul', 498, 'Ibura', 1, 81, '33554950');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134010', 'Escola Municipal Ines Soares de Lima', 1, 1, 1, 'Rua 14 de Novembro', NULL, 'Imbiribeira', 1, 81, '33554044');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128950', 'Escola Municipal Irma Terezinha Batista Proj Novo Viver', 1, 1, 1, 'Rua Iguatu', NULL, 'Campina do Barreto', 1, 81, '33553588');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158310', 'Escola Municipal Isaac Pereira da Silva', 1, 1, 1, 'Rua Oiticica Lins', NULL, 'Areias', 1, 81, '33554012');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171732', 'Escola Municipal Jader Figueiredo de Andrade Silva', 1, 1, 1, 'Av Mucio Uchoa Cavalcanti', 283, 'Engenho do Meio', 1, 81, '33553676');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125480', 'Escola Municipal Jardim Mauriceia', 1, 1, 1, 'Pte da Avenida Nicolau Copernico', 1107, 'Imbiribeira', 1, 81, '33553688');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170663', 'Escola Municipal Jardim Monte Verde', 1, 1, 1, 'Av Chapada do Araripe', 51, 'Cohab', 1, 81, '33554959');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158280', 'Escola Municipal Jardim Uchoa', 1, 1, 1, 'Rua Jupiata', 211, 'Areias', 1, 81, '33553620');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26171724', 'Escola Municipal João Amazonas', 1, 1, 1, 'Rua Bela Vista', 284, 'Dois Unidos', 1, 81, '33554513');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127784', 'Escola Municipal João Pessoa Guerra', 1, 1, 1, 'Rua Isaac Buril', 107, 'Varzea', 1, 81, '33553980');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119897', 'Escola Municipal João Xxiii', 1, 1, 1, 'Est Caiara', 350, 'Iputinga', 1, 81, '33553876');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132635', 'Escola Municipal Jordao Baixo', 1, 1, 1, 'Av Roberto Silveira', 51, 'Jordao', 1, 81, '33556314');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26164361', 'Escola Municipal José Mucio Monteiro', 1, 1, 1, 'Av Joao Rio Branco de Lima', 125, 'Cohab', 1, 81, '33553609');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126770', 'Escola Municipal Josefina Marinho', 1, 1, 1, 'Rua Corrego Jose Grande', 1316, 'Alto José do Pinho', 1, 81, '33554962');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118955', 'Escola Municipal Julio Vicente Alves de Araujo', 1, 1, 1, 'Prc Conceicao', 468, 'Morro da Conceicao', 1, 81, '33556918');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134002', 'Escola Municipal Karla Patricia', 1, 1, 1, 'Rua Eduardo Wanderley Filho', 700, 'Boa Viagem', 1, 81, '33554040');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170744', 'Escola Municipal Ladjane Bandeira', 1, 1, 1, 'Rua Severino Carneiro', 135, 'Água Fria', 1, 81, '33556486');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124114', 'Escola Municipal Lagoa Encantada', 1, 1, 1, 'Rua Benigno Jordao de Vasconcelos', NULL, 'Cohab', 1, 81, '33556315');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128268', 'Escola Municipal Luiz Lua Gonzaga', 1, 1, 1, 'Rua Aurilandia', 54, 'Bomba do Hemeterio', 1, 81, '33553860');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119927', 'Escola Municipal Luiz Vaz de Camoes', 1, 1, 1, 'Rua Jacunda', 508, 'Ipsep', 1, 81, '33553941');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121913', 'Escola Municipal Lutadores do Bem', 1, 1, 1, 'Rua Virgilio de Medeiros', 269, 'Santo Amaro', 1, 81, '33556318');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170671', 'Escola Municipal Maestro Nelson Ferreira', 1, 1, 1, 'Rua Avelino Chaves', 176, 'Ibura', 1, 81, '98622295');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120763', 'Escola Municipal Magalhaes Bastos', 1, 1, 1, 'Rua Francisco Lacerda', NULL, 'Varzea', 1, 81, '33556799');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126826', 'Escola Municipal Manoel Antonio de Freitas', 1, 1, 1, 'Rua Jeronimo', 147, 'Alto Santa Terezinha', 1, 81, '92645224');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134057', 'Escola Municipal Manoel Rolim', 1, 1, 1, '1tr Pajussara', 57, 'Tejipio', 1, 81, '33554966');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123630', 'Escola Municipal Marechal Rondon', 1, 1, 1, 'Av Jose Rufino', 3305, 'Tejipio', 1, 81, '33550064');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126281', 'Escola Municipal Margarida de Siqueira Pessoa', 1, 1, 1, 'Rua Corrego Jose Grande', 1307, 'Alto José Bonifácio', 1, 81, '33554970');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124700', 'Escola Municipal Margarida Serpa Cossart', 1, 1, 1, 'Rua Mecejana', 92, 'Cohab', 1, 81, '33553649');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124688', 'Escola Municipal Maria Adelaide de Barros', 1, 1, 1, 'Rua Alto Erval Novo', 10, 'Cohab', 1, 81, '33553434');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124556', 'Escola Municipal Maria de Sampaio Lucena', 1, 1, 1, 'Av Pernambuco', 01, 'Cohab', 1, 81, '33556586');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122529', 'Escola Municipal Mario Melo', 1, 1, 1, 'Rua Oliveira Fonseca', 318, 'Campo Grande', 1, 81, '33553713');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153556', 'Escola Municipal Marluce Santiago da Silva', 1, 1, 1, 'Av Concris', NULL, 'Passarinho', 1, 81, '33554974');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126672', 'Escola Municipal Mauricio de Nassau', 1, 1, 1, 'Av Eurico Chaves', 677, 'Alto do Mandu', 1, 81, '33556322');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124840', 'Escola Municipal Menino Jesus', 1, 1, 1, 'Ref da Av Eng Domingos Ferreira', NULL, 'Pina', 1, 81, '33553449');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175398', 'Escola Municipal Mercia de Albuquerque Ferreira', 1, 1, 1, 'Rua Tabaiares', 182, 'Ilha do Retiro', 1, 81, '33554076');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26419726', 'Escola Municipal Milton Almeida dos Santos', 1, 1, 1, 'Rua Itauba', 227, 'Imbiribeira', 1, 81, '33554979');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128705', 'Escola Municipal Monsenhor Viana', 1, 1, 1, 'Rua Taguatinga', NULL, 'Beberibe', 1, 81, '33554136');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118734', 'Escola Municipal Monteiro Lobato', 1, 1, 1, 'Av Jardim Brasilia', NULL, 'Peixinhos', 1, 81, '33553991');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125706', 'Escola Municipal Mundo Esperanca', 1, 1, 1, 'Est Pintos', 900, 'Sitio dos Pintos', 1, 81, '33550067');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133389', 'Escola Municipal Nadir Colaco', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 2173, 'Macaxeira', 1, 81, '33553971');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134049', 'Escola Municipal Nossa Senhora da Penha', 1, 1, 1, 'Rua Francisco de Barros Barreto', 109, 'Boa Viagem', 1, 81, '33553564');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147300', 'Escola Municipal Nossa Senhora do Pilar', 1, 1, 1, 'Rua Brum', NULL, 'Recife', 1, 81, '33554528');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128314', 'Escola Municipal Nova Aurora', 1, 1, 1, 'Rua Antonio Meira', 169, 'Água Fria', 1, 81, '33554534');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133622', 'Escola Municipal Nova Descoberta', 1, 1, 1, 'Rua Waldete Agra', 100, 'Passarinho', 1, 81, '33553612');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26177978', 'Escola Municipal Nova Morada', 1, 1, 1, 'Rua Eliane Fragoso do Nascimento', 24, 'Caxanga', 1, 81, '33553546');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128322', 'Escola Municipal Novo Horizonte', 1, 1, 1, 'Av Anibal Benevolo', 1045, 'Água Fria', 1, 81, '33553422');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158400', 'Escola Municipal Novo Mangue', 1, 1, 1, 'Av Central', 511, 'Ilha Joana Bezerra', 1, 81, '33554536');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119994', 'Escola Municipal Novo Pina', 1, 1, 1, 'Rua Eurico Vitruvio', 236, 'Pina', 1, 81, '33554114');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126087', 'Escola Municipal Octavio de Meira Lins', 1, 1, 1, 'Rua Jose Reboucas', 141, 'Vasco da Gama', 1, 81, '33553616');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128934', 'Escola Municipal Olindina Monteiro de Oliveira Franca', 1, 1, 1, 'Rua Bela Vista', 115, 'Dois Unidos', 1, 81, '32327900');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125510', 'Escola Municipal Oswaldo Lima Filho', 1, 1, 1, 'Av Domingos Ferreira', 1040, 'Pina', 1, 81, '33553928');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121662', 'Escola Municipal Padre Antonio Henrique', 1, 1, 1, 'Rua Livramento', 290, 'Derby', 1, 81, '33553836');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134350', 'Escola Municipal Padre Donino', 1, 1, 1, 'Prc Casa Forte', 442, 'Casa Forte', 1, 81, '33554138');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119331', 'Escola Municipal Padre José de Anchieta', 1, 1, 1, 'Rua Capitao Adolfo Taquis', NULL, 'Mustardinha', 1, 81, '33554188');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120780', 'Escola Municipal Padre José Mathias Delgado', 1, 1, 1, 'Rua Devaldo Borges', NULL, 'Jardim Sao Paulo', 1, 81, '33553538');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125528', 'Escola Municipal Pais e Filhos', 1, 1, 1, 'Rua Dancing Days', 21, 'Imbiribeira', 1, 81, '33556498');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127458', 'Escola Municipal Papa João Xxiii', 1, 1, 1, 'Rua Girua', NULL, 'Engenho do Meio', 1, 81, '33554402');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123266', 'Escola Municipal Paroquial Cristo Rei', 1, 1, 1, 'Rua Dom Manoel da Costa', NULL, 'Torre', 1, 81, '33553575');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26164701', 'Escola Municipal Parque dos Milagres', 1, 1, 1, 'Rua Leandro', NULL, 'Barro', 1, 81, '33556562');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157888', 'Escola Municipal Pastor José Munguba Sobrinho', 1, 1, 1, 'Rua Silva Jardim', 145, 'Jordao', 1, 81, '33554069');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126427', 'Escola Municipal Pastor Paulo Leivas Macalao', 1, 1, 1, 'Rua Alterosas', 27, 'Linha do Tiro', 1, 81, '33553418');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128390', 'Escola Municipal Paulo Vi', 1, 1, 1, 'Rua Guaira', 200, 'Linha do Tiro', 1, 81, '33553965');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187957', 'Escola Municipal Paz e Amor', 1, 1, 1, 'Rua Edson Regis', 216, 'Ibura', 1, 81, '99002445');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126966', 'Escola Municipal Pedrinho', 1, 1, 1, 'Rua Botovi', NULL, 'Nova Descoberta', 1, 81, '33556857');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175380', 'Escola Municipal Pedro Alcantara', 1, 1, 1, 'Rua Tres Morros', 43, 'Corrego do Jenipapo', 1, 81, '33556570');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121468', 'Escola Municipal Pedro Augusto', 1, 1, 1, 'Rua Barao de Sao Borja', 279, 'Soledade', 1, 81, '33554170');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132249', 'Escola Municipal Pintor Lula Cardoso Ayres', 1, 1, 1, 'Rua Alvaro Ferraz', 594, 'Jordao', 1, 81, '33556346');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170795', 'Escola Municipal Poeta Carlos Pena Filho', 1, 1, 1, 'Av Liberdade', 461, 'Jardim Sao Paulo', 1, 81, '33554894');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168138', 'Escola Municipal Poeta João Cabral de Melo Neto', 1, 1, 1, 'Av Encanta Moca', 377, 'Pina', 1, 81, '33556306');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126494', 'Escola Municipal Poeta Joaquim Cardoso', 1, 1, 1, 'Rua Corrego da Areia', 950, 'Nova Descoberta', 1, 81, '99264825');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122634', 'Escola Municipal Poeta Jonatas Braga', 1, 1, 1, 'Rua Caetano', 545, 'Campo Grande', 1, 81, '33553581');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125544', 'Escola Municipal Poeta Paulo Bandeira da Cruz', 1, 1, 1, 'Rua Panelas', 282, 'Cohab', 1, 81, '32323136');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26177960', 'Escola Municipal Poeta Solano Trindade', 1, 1, 1, 'Rua Manoel Silva', 134, 'Água Fria', 1, 81, '33554186');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126419', 'Escola Municipal Presbitero José Bezerra', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 7636, 'Macaxeira', 1, 81, '33554011');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121050', 'Escola Municipal Professor Elizabeth Sales Coutinho Barros', 1, 1, 1, 'Rua Professor Avertano Rocha', 386, 'Torroes', 1, 81, '33554934');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26155818', 'Escola Municipal Professor Jandira Botelho Pereira da Costa', 1, 1, 1, 'Rua Farias Neves', NULL, 'Campo Grande', 1, 81, '92533406');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125560', 'Escola Municipal Professor José Lourenco de Lima', 1, 1, 1, 'Rua Nova America', 168, 'Ibura', 1, 81, '33556502');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125552', 'Escola Municipal Professor Adauto Pontes', 1, 1, 1, 'Rua Sertania', 35, 'Jordao', 1, 81, '33554990');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126516', 'Escola Municipal Professor Aderbal Galvao', 1, 1, 1, 'Rua Vasco da Gama', 399, 'Vasco da Gama', 1, 81, '33556980');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153386', 'Escola Municipal Professor Antonio de Brito Alves', 1, 1, 1, 'Rua Ernesto Cavalcanti', 41, 'Mustardinha', 1, 81, '34482179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153297', 'Escola Municipal Professor Enaldo Manoel de Souza', 1, 1, 1, 'Rua Joraci Camargo', NULL, 'Jordao', 1, 81, '33553624');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139090', 'Escola Municipal Professor Florestan Fernandes', 1, 1, 1, 'Rua Rio Novo do Sul', 591, 'Ibura', 1, 81, '33554938');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157845', 'Escola Municipal Professor João Batista Lippo Neto', 1, 1, 1, 'Rua Cerro Largo', NULL, 'Varzea', 1, 81, '33550086');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158302', 'Escola Municipal Professor João Francisco de Souza', 1, 1, 1, 'Rua Jorge da Costa Lima', 3107, 'Varzea', 1, 81, '33550101');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121255', 'Escola Municipal Professor José da Costa Porto', 1, 1, 1, '1tr Cabo Eutropio', 660, 'Ilha Joana Bezerra', 1, 81, '97172716');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166666', 'Escola Municipal Professor José Soares da Silva', 1, 1, 1, 'Rua Botovi', 5785, 'Nova Descoberta', 1, 81, '33554086');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167891', 'Escola Municipal Professor Josue de Castro', 1, 1, 1, 'Av Martin Luther King', 368, 'Ilha Joana Bezerra', 1, 81, '33553642');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158299', 'Escola Municipal Professor Julio de Oliveira', 1, 1, 1, 'Rua Cafesopolis', 16, 'Imbiribeira', 1, 81, '33553510');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124661', 'Escola Municipal Professor Manoel Torres', 1, 1, 1, 'Rua Joaquim Pinheiro', 225, 'Imbiribeira', 1, 81, '33553925');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126788', 'Escola Municipal Professor Mauro Mota', 1, 1, 1, 'Rua Alto da Brasileira', NULL, 'Nova Descoberta', 1, 81, '33553844');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120771', 'Escola Municipal Professor Moacyr de Albuquerque', 1, 1, 1, 'Rua Corrego da Areia', NULL, 'Nova Descoberta', 1, 81, '99216018');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126524', 'Escola Municipal Professor Nilo Pereira', 1, 1, 1, 'Est Arraial', 4900, 'Casa Amarela', 1, 81, '92433411');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26158370', 'Escola Municipal Professor Orlando Parahym', 1, 1, 1, 'Rua Virgilio Lucio', 10441, 'Cohab', 1, 81, '33556002');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26154137', 'Escola Municipal Professor Potiguar Matos', 1, 1, 1, 'Rua Vinte e Um de Abril', 2191, 'San Martin', 1, 81, '33553054');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153599', 'Escola Municipal Professor Ricardo Gama', 1, 1, 1, 'Rua Guaira', 160, 'Linha do Tiro', 1, 81, '33553690');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124815', 'Escola Municipal Professor Simoes Barbosa', 1, 1, 1, 'Av Dois Rios', NULL, 'Ibura', 1, 81, '33553920');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26154820', 'Escola Municipal Professor Solano Magalhaes', 1, 1, 1, 'Av Jemil Asfora', NULL, 'Pina', 1, 81, '33553985');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126117', 'Escola Municipal Professora Almerinda Umbelino de Barros', 1, 1, 1, 'Rua Vasco da Gama', NULL, 'Vasco da Gama', 1, 81, '91131316');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175355', 'Escola Municipal Professora Helia Maria Pereira', 1, 1, 1, 'Rua Alice Gomes', 37, 'Campo Grande', 1, 81, '33553414');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120569', 'Escola Municipal Professora Maria da Paz Brandao Alves', 1, 1, 1, 'Rua Felicidade', 51, 'Sancho', 1, 81, '33554118');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123649', 'Escola Municipal Professora Primitiva de Barros Silva', 1, 1, 1, 'Rua Elpidio Camara', 122, 'Jardim Sao Paulo', 1, 81, '33553446');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120585', 'Escola Municipal Professora Sonia Maria de Araujo Souza', 1, 1, 1, 'Rua Bodoco', 2526, 'Jordao', 1, 81, '33554556');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121786', 'Escola Municipal Reitor João Alfredo', 1, 1, 1, 'Rua Jose Henrique', 160, 'Ilha do Leite', 1, 81, '33553804');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26136335', 'Escola Municipal Renato Accioly Carneiro Campos', 1, 1, 1, 'Rua Basilio', 140, 'Nova Descoberta', 1, 81, '33556590');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26212404', 'Escola Municipal Rozemar de Macedo Lima', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 5400, 'Casa Amarela', 1, 81, '93193662');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122600', 'Escola Municipal Santa Cecilia', 1, 1, 1, 'Rua Alice Gomes', 49, 'Campo Grande', 1, 81, '33553841');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123100', 'Escola Municipal Santa Edwiges', 1, 1, 1, 'Rua Juriti', 41, 'Afogados', 1, 81, '86036153');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121077', 'Escola Municipal Santa Maria', 1, 1, 1, 'Rua Acaiaca', 70, 'Alto José do Pinho', 1, 81, '33554549');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126583', 'Escola Municipal Santa Maria Goretti', 1, 1, 1, 'Rua Maria Goretti', 300, 'Vasco da Gama', 1, 81, '33556995');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134379', 'Escola Municipal Santo Amaro', 1, 1, 1, 'Av Norte Miguel Arraes de Alencar', 570, 'Santo Amaro', 1, 81, '33553696');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123673', 'Escola Municipal Santo Antonio do Cacote', 1, 1, 1, 'Rua Aurora Cacote', 16, 'Areias', 1, 81, '33553580');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126630', 'Escola Municipal São Cristovao', 1, 1, 1, 'Rua Cassiterita', 395, 'Brejo da Guabiraba', 1, 81, '33556013');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127792', 'Escola Municipal São Domingos', 1, 1, 1, 'Rua Mateus', 364, 'Iputinga', 1, 81, '33553371');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125579', 'Escola Municipal São Francisco de Assis', 1, 1, 1, 'Rua Cosmorama', 900, 'Boa Viagem', 1, 81, '33550029');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128748', 'Escola Municipal São João Batista', 1, 1, 1, 'Av Anibal Benevolo', 1800, 'Linha do Tiro', 1, 81, '32327808');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122014', 'Escola Municipal Sede da Sabedoria', 1, 1, 1, 'Rua Artemis', 30, 'Santo Amaro', 1, 81, '33553442');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119170', 'Escola Municipal Senador José Ermirio de Moraes', 1, 1, 1, 'Rua Roraima', 3007, 'Varzea', 1, 81, '99301668');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167808', 'Escola Municipal Serra da Prata', 1, 1, 1, 'Rua Pessegueiros', 2005, 'Cohab', 1, 81, '33556018');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122464', 'Escola Municipal Serviço Social de Belem', 1, 1, 1, 'Rua Rodolfo de Holanda', 248, 'Encruzilhada', 1, 81, '91620752');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134067', 'Escola Municipal Severina Bernadete Teixeira', 1, 1, 1, 'Rua Ibicare', 1203, 'Cohab', 1, 81, '33556023');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122308', 'Escola Municipal Severina Lira', 1, 1, 1, 'Rua Boa Vontade', 110, 'Tamarineira', 1, 81, '33556958');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170710', 'Escola Municipal Sitio do Berardo', 1, 1, 1, 'Rua Quatro de Outubro', 56, 'Prado', 1, 81, '33553764');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26136269', 'Escola Municipal Sitio do Ceu', 1, 1, 1, 'Rua Anchieta', 85, 'Santo Amaro', 1, 81, '33554553');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125692', 'Escola Municipal Sociologo Gilberto Freyre', 1, 1, 1, 'Trv Alto Sao Jose', 350, 'Dois Irmaos', 1, 81, '33550072');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123304', 'Escola Municipal Soldado José Antonio do Nascimento', 1, 1, 1, 'Rua Carlos Porto Carreiro', 86, 'Boa Vista', 1, 81, '99946677');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119196', 'Escola Municipal Tres Carneiros', 1, 1, 1, 'Rua Ibiraja', 12, 'Cohab', 1, 81, '33556026');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167840', 'Escola Municipal Ur 05', 1, 1, 1, 'Rua Barbara Heliodora', 4805, 'Cohab', 1, 81, '33556030');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120283', 'Escola Municipal Vila Operaria do Recife', 1, 1, 1, '1tr Emilio Monteiro Fonseca', 1530, 'Ibura', 1, 81, '33556579');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153475', 'Escola Municipal Vila Santa Luzia', 1, 1, 1, 'Rua Elizeu Cavalcanti', 52, 'Cordeiro', 1, 81, '33553550');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123126', 'Escola Municipal Vila São Miguel', 1, 1, 1, 'Rua Rubiacea', 147, 'Afogados', 1, 81, '33554052');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121158', 'Escola Municipal Vila Sesamo', 1, 1, 1, 'Rua Vale do Itajai', 6505, 'Cohab', 1, 81, '33553160');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125811', 'Escola Municipal Virgem Poderosa', 1, 1, 1, 'Rua Leonardo Bezerra Cavalcanti', 116, 'Parnamirim', 1, 81, '33554224');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124076', 'Escola Municipal Waldemar Valente', 1, 1, 1, 'Rua Gastao de Carvalho', 360, 'Curado', 1, 81, '98628848');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119200', 'Escola Municipal Zumbi dos Palmares', 1, 1, 1, 'Rua Vasconcelos Bittencourt', 35, 'Varzea', 1, 81, '33553934');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134177', 'Escola Olga Benario Prestes', 1, 1, 1, 'Rua do Bom Pastor', 1407, 'Iputinga', 1, 81, '31814032');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127474', 'Escola Padre Dehon', 1, 1, 1, 'Avenida Caxanga', 3560, 'Iputinga', 1, 81, '31812671');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126575', 'Escola Padre João Barbosa', 1, 1, 1, 'Praca da Conceicao', 700, 'Morro da Conceicao', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124831', 'Escola Padre Lebret', 1, 1, 1, 'Av. Angra dos Reis', 02, 'Ibura', 1, 81, '31812833');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134180', 'Escola Professor Joel Pontes', 1, 1, 1, 'Avenida Liberdade, S/n', NULL, 'Sancho', 1, 81, '31814151');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128454', 'Escola Professor José dos Anjos', 1, 1, 1, 'Av Hildebrando de Vasconcelos', NULL, 'Dois Unidos', 1, 81, '31812706');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124807', 'Escola Professor José Vicente Barbosa', 1, 1, 1, 'Praca Aleixo de Oliveira', NULL, 'Ipsep', 1, 81, '31812726');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127539', 'Escola Professora Fontainha de Abreu', 1, 1, 1, 'Rua Antonio Carlos', NULL, 'Cordeiro', 1, 81, '31814159');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124912', 'Escola Roberto Silveira', 1, 1, 1, 'Avenida Governador Roberto Silveira', NULL, 'Jordao Baixo', 1, 81, '31814848');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128527', 'Escola Rotary do Alto do Pascoal', 1, 1, 1, 'Rua Ladeira de Pedra', NULL, 'Água Fria', 1, 81, '34496468');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128560', 'Escola São Francisco de Assis - Rn', 1, 1, 1, 'Rua Sao Bento', NULL, 'Arruda', 1, 81, '31812778');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128586', 'Escola São Judas Tadeu', 1, 1, 1, 'Rua Marcilio Dias', 591, 'Campina do Barreto', 1, 81, '31812907');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124939', 'Escola Sargento Camargo', 1, 1, 1, 'Rua Antonio Falcao', 136, 'Boa Viagem', 1, 81, '31812702');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121816', 'Escola Tecnica Estadual Almirante Soares Dutra', 1, 1, 1, 'Praca General Abreu e Lima', 110, 'Santo Amaro', 1, 81, '31813970');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178230', 'Escola Tecnica Estadual Cicero Dias', 1, 1, 1, 'Rua Marques de Valenca', 470, 'Boa Viagem', 1, 81, '31813020');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157985', 'Escola Tecnica Estadual de Criatividade Musical', 1, 1, 1, 'Rua da Aurora', 439, 'Boa Vista', 1, 81, '31812874');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126125', 'Escola Tecnica Estadual Dom Bosco - Recife', 1, 1, 1, 'Estrada do Arraial', 3208, 'Casa Amarela', 1, 81, '34410111');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121751', 'Escola Tecnica Estadual Ginasio Pernambucano', 1, 1, 1, 'Avenida Cruz Cabuga', 269, 'Santo Amaro', 1, 81, '31812949');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125048', 'Escola Tecnica Estadual João Bezerra', 1, 1, 1, 'Rua Francisco Valpassos', NULL, 'Brasilia Teimosa', 1, 81, '31813002');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123819', 'Escola Tecnica Estadual Mariano Teixeira', 1, 1, 1, 'Avenida Capitao Felipe Ferreira', 171, 'Areias', 1, 81, '31812744');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183021', 'Escola Tecnica Estadual Miguel Batista', 1, 1, 1, 'Avenida Norte Miguel Arraes de Alencar', 7487, 'Macaxeira', 1, 81, '31814910');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179857', 'Escola Tecnica Estadual Porto Digital', 1, 1, 1, 'Av. Rio Branco', 193, 'Bairro do Recife', 1, 81, '31814868');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122685', 'Escola Tecnica Estadual Professor Agamenon Magalhaes - Etepam', 1, 1, 1, 'Avenida Joao de Barros', 1769, 'Espinheiro', 1, 81, '31813951');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128497', 'Escola Tecnica Estadual Professor Alfredo Freyre', 1, 1, 1, 'Rua Zeferino Agra', 193, 'Água Fria', 1, 81, '31812732');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188040', 'Escola Tecnica Estadual Professor Antonio Carlos Gomes da Costa', 1, 1, 1, 'Rua Marques do Pombal', 702, 'Santo Amaro', 1, 81, '31812759');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176238', 'Escola Tecnica Estadual Professor Lucilo Avila Pessoa', 1, 1, 1, 'Avenida Caxanga', 3345, 'Iputinga', 1, 81, '31814902');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126605', 'Escola Tome Gibson', 1, 1, 1, 'Av. Vereador Otacilio de Azevedo', NULL, 'Guabiraba', 1, 81, '32676225');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127563', 'Ifpe - Campus Recife', 1, 1, 1, 'Avenida Professor Luiz Freire', 500, 'Curado', 1, 81, NULL);   
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM public.school WHERE "school_type_id" = 1;
    `);
  }
}
