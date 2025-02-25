import { MigrationInterface, QueryRunner } from 'typeorm';

export class PrivateSchools1740450554683 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128829', '90 Graus Colégio e Curso', 1, 1, 2, 'Avenida Beberibe', 3878, 'Porto da Madeira', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124106', 'Academia Crista de Boa Viagem', 1, 1, 2, 'Avenida Visconde de Jequitinhonha', 355, 'Boa Viagem', 1, 81, '33125000');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184028', 'Academia Crista de Boa Viagem - Unidade Ii', 1, 1, 2, 'Avenida Helio Falcao', 139, 'Boa Viagem', 1, 81, '33125022');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156105', 'Alice Mendonca', 1, 1, 2, 'Rua Serafina Carneiro', 46, 'Torroes', 1, 81, '32230061');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190257', 'Alphatec', 1, 1, 2, 'Rua Gervasio Pires', 826, 'Santo Amaro', 1, 81, '30714279');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26496720', 'Anjos Baby', 1, 1, 2, 'Rua Rui Duarte', 141, 'Varzea', 1, 81, '34540906');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139588', 'Annaic de Mendonca Travassos Me', 1, 1, 2, 'Rua Padre Dias Martins, 201', NULL, 'Zumbi', 1, 81, '34451253');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117584', 'Apoio Grupo de Asses Educac e Pedagogica', 1, 1, 2, 'Rua Conselheiro Nabuco', 44, 'Casa Amarela', 1, 81, '34415015');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26464730', 'Arte Vida Escola Crista de Boa Viagem', 1, 1, 2, 'Rua Doutor Luiz Correa de Oliveira', NULL, 'Imbiribeira', 1, 81, '32232163');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192691', 'Associação Centro Educacional Magno Delamadri', 1, 1, 2, 'Rua Espinosa', 361, 'Linha do Tiro', 1, 81, '32994996');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192470', 'Associação Construindo A Cidadania Projeto Amor e Esperanca', 1, 1, 2, 'Rua Arapoema', 35, 'Brejo de Beberibe', 1, 81, '999302643');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178273', 'Associação de Moradores Bolo de Noiva', 1, 1, 2, 'Rua Sao Bento', 410, 'Macaxeira', 1, 81, '999070006');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163403', 'Associação de Mulheres de Beirinha', 1, 1, 2, '1ª Travessa dos Prazeres', 244, 'Areias', 1, 81, '997736083');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147513', 'Associação Educ e Cultural Arco-iris', 1, 1, 2, 'Rua Mendes Martins', 92, 'Varzea', 1, 81, '32712485');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192705', 'Associação Pai e Filhos do Saber', 1, 1, 2, 'Rua Corrego da Areia', 1012, 'Nova Descoberta', 1, 81, '987690792');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192535', 'Associação Pro Ternura - Instituto Ternura', 1, 1, 2, 'Rua da Amizade', 102, 'Brejo de Beberibe', 1, 81, '989085667');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132176', 'Atitude Nucleo de Formacao Profissional', 1, 1, 2, 'Avenida Beberibe', 621, 'Encruzilhada', 1, 81, '32410484');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143658', 'Babymel e Escolas', 1, 1, 2, 'Rua Virginia Loreto', 123, 'Parnamirim', 1, 81, '34419099');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167980', 'C de Educação Comunitaria Gabriela Feliz', 1, 1, 2, 'Rua Doutor Antonio Hermenegildo de Castro Neto', 23, 'Caxanga', 1, 81, '34534797');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156067', 'Centro Comun Semente de Um Novo Mundo', 1, 1, 2, 'Rua Nossa Senhora da Penha', 179, 'Torroes', 1, 81, '34467123');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125595', 'Centro de Cultura Infantil Reino Mágico', 1, 1, 2, 'Estrada do Arraial', 2949, 'Tamarineira', 1, 81, '32681426');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117673', 'Centro de Desenvolvimento da Criança', 1, 1, 2, 'Rua Ademar Pires Travassos', 278, 'Iputinga', 1, 81, '34539283');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191008', 'Centro de Desenvolvimento Infantil Avancado', 1, 1, 2, 'Rua Barauna', 71, 'Alto do Mandu', 1, 81, '34416004');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186659', 'Centro de Educação Crescer', 1, 1, 2, 'Rua Salvador de Sa', 475, 'Rosarinho', 1, 81, '30872614');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26361612', 'Centro de Educação Infantil Carochinha', 1, 1, 2, 'Rua do Chacon', 248, 'Poco', 1, 81, '32686501');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184621', 'Centro de Educação Profissional - Cepro', 1, 1, 2, 'Rua Miguel Couto', 44, 'Boa Vista', 1, 81, '32310800');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192632', 'Centro de Educação Profissional Mediotec', 1, 1, 2, 'Avenida Joao de Barros', 561, 'Boa Vista', 1, 81, '34136650');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182858', 'Centro de Ensino Grau I Boa Vistai Boa Vista', 1, 1, 2, 'Avenida Conde da Boa Vista', 1209, 'Soledade', 1, 81, '30373939');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185792', 'Centro de Ensino Grau Tecnico', 1, 1, 2, 'Av Marechal Mascarenhas de Moraes', 1062, 'Imbiribeira', 1, 81, '30350010');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184141', 'Centro de Estudos da Saude Cesa', 1, 1, 2, 'Avenida Manoel Borba', 609, 'Boa Vista', 1, 81, '30313393');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192527', 'Centro de Progressao Nossa Senhora Aparecida', 1, 1, 2, 'Rua Ipiniras', 160, 'Cordeiro', 1, 81, '999923778');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123754', 'Centro Educ Olavo Bilac', 1, 1, 2, 'Rua Rosario de Minas', 30, 'Coqueiral', 1, 81, '34555127');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128063', 'Centro Educacional Ana Nery', 1, 1, 2, 'Rua Ana Mauricia Wanderley', 156, 'Arruda', 1, 81, '34434539');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117797', 'Centro Educacional Antonio Galdino', 1, 1, 2, 'Rua Fernando Tomaz da Silva', 66, 'Ibura', 1, 81, '31283095');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189402', 'Centro Educacional Bem Me Quer', 1, 1, 2, 'Rua Pero Vaz de Caminha', 72, 'Cohab', 1, 81, '31326435');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152681', 'Centro Educacional Bernardo Lucas', 1, 1, 2, 'Rua Aprigio Guimaraes', 862, 'Sancho', 1, 81, '32523899');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26136430', 'Centro Educacional Castelo Infantil', 1, 1, 2, 'Rua Antonio Borges Uchoa', 596, 'Engenho do Meio', 1, 81, '32719015');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185130', 'Centro Educacional Cavalcanti Heissler', 1, 1, 2, 'Rua Adelmar Tavares', 25, 'Cordeiro', 1, 81, '34450103');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26164388', 'Centro Educacional Comunitario Redencao', 1, 1, 2, 'Rua Joao Praxedes de Oliveira Filho', 25, 'Campina do Barreto', 1, 81, '973323212');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157420', 'Centro Educacional Creative', 1, 1, 2, 'Rua Anapolis', 387, 'Tejipio', 1, 81, '987043846');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192268', 'Centro Educacional Creche Vovo Rosa', 1, 1, 2, 'Rua Doutor Gustavo Pinto', 480, 'Jardim Sao Paulo', 1, 81, '981331437');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175908', 'Centro Educacional Cristo Salva', 1, 1, 2, 'Rua Rio', 370, 'Água Fria', 1, 81, '988980554');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120534', 'Centro Educacional da Criança', 1, 1, 2, 'Rua Major Rubens Vaz', 178, 'Varzea', 1, 81, '995325172');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26497719', 'Centro Educacional da Iputinga', 1, 1, 2, 'Rua Henrique Milet', 166, 'Iputinga', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143097', 'Centro Educacional Desenvolvimento', 1, 1, 2, 'Rua Alto da Loira', 20, 'Brejo da Guabiraba', 1, 81, '985897584');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188635', 'Centro Educacional Emanuel', 1, 1, 2, 'Rua Professor Mario Neves Baptista', 26, 'Ibura', 1, 81, '985442721');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147424', 'Centro Educacional Francisco de Assis', 1, 1, 2, 'Rua Piassabussu', 252, 'Cohab', 1, 81, '985303716');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185148', 'Centro Educacional Gouveia de Melo', 1, 1, 2, 'Rua Adelmar Tavares', 25, 'Cordeiro', 1, 81, '30482121');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176602', 'Centro Educacional Infancia Feliz', 1, 1, 2, 'Rua Estrela do Mar', 356, 'Brasilia Teimosa', 1, 81, '34666655');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120429', 'Centro Educacional João Brito', 1, 1, 2, 'Rua Ana Carneiro Dalbuquerque', 288, 'Toto', 1, 81, '32514512');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163730', 'Centro Educacional Miriam Imelda', 1, 1, 2, 'Rua Aureliano Leal', 79, 'Dois Unidos', 1, 81, '34412066');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133776', 'Centro Educacional Monte Sinai', 1, 1, 2, 'Rua Odilon Araujo', 241, 'Iputinga', 1, 81, '34536662');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156733', 'Centro Educacional Mundo Infantil do Chie', 1, 1, 2, 'Rua Continental', 126126, 'Campo Grande', 1, 81, '992156261');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173387', 'Centro Educacional Nossa Senhora Auxiliadora', 1, 1, 2, 'Rua Catume', 108, 'Bongi', 1, 81, '982903401');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190931', 'Centro Educacional Pequeno Pesquisador', 1, 1, 2, 'Rua Satiro Dias', 99, 'Ibura', 1, 81, '30404261');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26180197', 'Centro Educacional Saber Viver', 1, 1, 2, 'Rua do Espinheiro', 836, 'Espinheiro', 1, 81, '32410289');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26132540', 'Centro Educacional Shalon', 1, 1, 2, 'Rua Murilo Menezes Lira', 357, 'Varzea', 1, 81, '32714065');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26160196', 'Centro Educacional Social e Cultural', 1, 1, 2, 'Rua Coripos', 323, 'Coqueiral', 1, 81, '32543116');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117827', 'Centro Educacional Tiradentes', 1, 1, 2, 'Rua Engenho Matapagipe', 70, 'Cohab', 1, 81, '30394075');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189496', 'Centro Educacional Upgrade', 1, 1, 2, 'Rua Tenente Wanderley', 421, 'Cajueiro', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125765', 'Centro Escolar Carochinha', 1, 1, 2, 'Rua do Chacon', 245, 'Poco', 1, 81, '32686501');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167107', 'Centro Profissionalizante de Saude Irma Dulce', 1, 1, 2, 'Avenida Visconde de Suassuna', 705, 'Santo Amaro', 1, 81, '32217209');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26154021', 'Centro Social Guararapes', 1, 1, 2, 'Avenida Dona Alice Montenegro Lessa', 115, 'Jordao Baixo', 1, 81, '996725201');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183692', 'Centro Universitario Mauricio de Nassau - Bloco B - Campus - Fac Mauricio de Nassau - Campus Recife', 1, 1, 2, 'Rua Guilherme Pinto', 114, 'Gracas', 1, 81, '88941763');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26180200', 'Cfi-colegio de Formacao Integral', 1, 1, 2, 'Avenida Caxanga', 460, 'Madalena', 1, 81, '32269499');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192519', 'Clube de Maes dos Moradores do Alto do Refugio', 1, 1, 2, 'Rua Alto do Refugio', 468, 'Nova Descoberta', 1, 81, '32995505');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167913', 'Clube de Maes Futuro do Amanha de San Martin', 1, 1, 2, 'Rua Doutor Jose Ramos de Vasconcelos', 3, 'San Martin', 1, 81, '32046860');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26528711', 'Colégio 17 de Agosto', 1, 1, 2, 'Rua do Chacon', 245, 'Poco', 1, 81, '32680583');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26205602', 'Colégio 2001', 1, 1, 2, 'Rua Vitoriano Ebla', 49, 'Jardim Sao Paulo', 1, 81, '32495170');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121379', 'Colégio 2001', 1, 1, 2, 'Rua do Riachuelo', 403, 'Boa Vista', 1, 81, '34234533');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128853', 'Colégio Adventista do Arruda', 1, 1, 2, 'Rua Zeferino Agra', 268, 'Água Fria', 1, 81, '32017730');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121328', 'Colégio Adventista do Recife', 1, 1, 2, 'Rua Gervasio Pires', 700, 'Boa Vista', 1, 81, '34214225');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26145103', 'Colégio Albert Sabin', 1, 1, 2, 'Travessa Inacio Monteiro', 295, 'Cordeiro', 1, 81, '30976661');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173310', 'Colégio Alfama', 1, 1, 2, 'Avenida Visconde de Albuquerque', 175, 'Madalena', 1, 81, '37872955');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121506', 'Colégio Americano Batista', 1, 1, 2, 'Rua Dom Bosco', 1308, 'Boa Vista', 1, 81, '21225599');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117975', 'Colégio Anchieta', 1, 1, 2, 'Rua Ernesto de Paula Santos', 607, 'Boa Viagem', 1, 81, '34663830');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26180863', 'Colégio Anglo Lider', 1, 1, 2, 'Rua Visconde de Abaete', 200, 'Tamarineira', 1, 81, '33048400');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26419718', 'Colégio Anglo Lider Junior', 1, 1, 2, 'Rua Paes Cabral', 289, 'Cordeiro', 1, 81, '32273099');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26110504', 'Colégio Ascenso Ferreira', 1, 1, 2, 'Avenida Armindo Moura', 263, 'Boa Viagem', 1, 81, '33413994');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125404', 'Colégio Avance', 1, 1, 2, 'Rua Rio Maju', 130, 'Ipsep', 1, 81, '34715740');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117991', 'Colégio Boa Viagem', 1, 1, 2, 'Rua Professor Eduardo Wanderley Filho', 539, 'Boa Viagem', 1, 81, '34654444');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188260', 'Colégio Brasileirinho', 1, 1, 2, 'Avenida Avenida Inacio Monteiro', 1153, 'Torroes', 1, 81, '32261952');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183196', 'Colégio Brilho de Jesus', 1, 1, 2, 'Avenida Hildebrando de Vasconcelos', 2208, 'Dois Unidos', 1, 81, '33528355');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188287', 'Colégio Brilho de Jesus', 1, 1, 2, 'Estrada do Caiara', 342, 'Iputinga', 1, 81, '988332547');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133725', 'Colégio Capitao Moroni', 1, 1, 2, 'Rua Desembargador Fonseca Galvao', 93, 'Vasco da Gama', 1, 81, '32693342');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187310', 'Colégio Carlos Murakami', 1, 1, 2, 'Estrada do Arraial', 3460, 'Casa Amarela', 1, 81, '31280101');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166976', 'Colégio Casaforte', 1, 1, 2, 'Praca de Casa Forte', 548, 'Casa Forte', 1, 81, '32681931');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187604', 'Colégio Cbv Jaqueira', 1, 1, 2, 'Rua Doutor Jose Maria', 1106, 'Tamarineira', 1, 81, '34654444');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26534711', 'Colégio Cognitivo', 1, 1, 2, 'Rua de Sant Ana', 213, 'Santana', 1, 81, '32690047');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189569', 'Colégio Cognitivo', 1, 1, 2, 'Avenida Antinio Torres Galvao', 283, 'Imbiribeira', 1, 81, '32690047');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127580', 'Colégio Conhecer', 1, 1, 2, 'Rua Zezito Costa Rego', 130, 'Varzea', 1, 81, '32710233');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147963', 'Colégio Cordeiro de Deus', 1, 1, 2, 'Avenida Engenho Muribara', 1733, 'Cohab', 1, 81, '985949583');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153920', 'Colégio Cristao do Recife', 1, 1, 2, 'Rua Waldemar Nery Carneiro Monteiro', 101, 'Boa Viagem', 1, 81, '33421832');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118149', 'Colégio da Imaculada Conceicao', 1, 1, 2, 'Avenida Doutor Jose Rufino', 2184, 'Barro', 1, 81, '974014472');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122081', 'Colégio das Damas da Instrucao Crista', 1, 1, 2, 'Avenida Rui Barbosa', 1426, 'Gracas', 1, 81, '31394500');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121514', 'Colégio de São José', 1, 1, 2, 'Avenida Conde da Boa Vista', 921, 'Boa Vista', 1, 81, '34232810');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26526719', 'Colégio do Saber', 1, 1, 2, 'Rua Franklin Tavora', 159, 'Campo Grande', 1, 81, '32421633');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192179', 'Colégio Dom', 1, 1, 2, 'Rua Jose Carvalheira', 391, 'Tamarineira', 1, 81, '32236585');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127091', 'Colégio Dourado', 1, 1, 2, 'Avenida Vinte de Janeiro', 1245, 'Boa Viagem', 1, 81, '33414800');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127750', 'Colégio Dulce de Souza Leao', 1, 1, 2, 'Rua Gregorio Junior', 261, 'Zumbi', 1, 81, '40093888');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175339', 'Colégio e Curso Atitude', 1, 1, 2, 'Rua Doutor Tome Dias', 75, 'Casa Amarela', 1, 81, '32691601');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187507', 'Colégio e Curso Desafio', 1, 1, 2, 'Rua Professor Antonio Coelho', 50, 'Varzea', 1, 81, '32745010');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118211', 'Colégio e Curso Mickeylandia', 1, 1, 2, 'Rua Joana Francisca de Azevedo', 38, 'Mustardinha', 1, 81, '30198294');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121190', 'Colégio e Curso Nossa Senhora do Carmo', 1, 1, 2, 'Rua Parintins', 32, 'Cohab', 1, 81, '985621245');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178281', 'Colégio e Curso Raio de Sol', 1, 1, 2, 'Rua Presidente Costa e Silva', 292, 'Brejo da Guabiraba', 1, 81, '998149347');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147386', 'Colégio e Curso Senhor do Bonfim', 1, 1, 2, 'Rua Tiuma', 26, 'Varzea', 1, 81, '996028810');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123177', 'Colégio e Curso Vencer', 1, 1, 2, 'Rua Dom Jose Lopes', 871, 'Boa Viagem', 1, 81, '33250923');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122219', 'Colégio Educacional Trajano', 1, 1, 2, 'Rua Salvador de Sa', 366, 'Rosarinho', 1, 81, '30872614');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125625', 'Colégio Elo', 1, 1, 2, 'Rua Jose Paraiso', 189, 'Boa Viagem', 1, 81, '31349494');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118165', 'Colégio Equipe', 1, 1, 2, 'Rua Demostenes de Olinda', 121, 'Madalena', 1, 81, '34453255');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179016', 'Colégio Ethos', 1, 1, 2, 'Rua do Chacon', 184, 'Poco da Panela', 1, 81, '32696969');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187914', 'Colégio Evolucao do Recife', 1, 1, 2, 'Rua Mandacaru', 554, 'Alto do Mandu', 1, 81, '33016619');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188023', 'Colégio Exato', 1, 1, 2, 'Rua Padre Antonio Fernandes', 102, 'Cordeiro', 1, 81, '30393344');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26197405', 'Colégio Eximius', 1, 1, 2, 'Rua de Sant Ana', 511, 'Casa Forte', 1, 81, '32681554');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118378', 'Colégio Expor A Mente', 1, 1, 2, 'Rua Maria de Fatima Soares', 16, 'Iputinga', 1, 81, '32641049');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184079', 'Colégio Expor A Mente Unidade Ii', 1, 1, 2, 'Rua Leal de Barros', 404, 'Iputinga', 1, 81, '32721319');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181231', 'Colégio Fazer Crescer - Ensino Médio', 1, 1, 2, 'Rua Salvador de Sa', 475, 'Rosarinho', 1, 81, '30872614');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148773', 'Colégio Fazer Crescer', 1, 1, 2, 'Avenida Santos Dumont', 1181, 'Rosarinho', 1, 81, '30872614');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149087', 'Colégio Futuro', 1, 1, 2, 'Rua Riolandia', 70, 'Bomba do Hemeterio', 1, 81, '34443873');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127105', 'Colégio Geracao Ativa', 1, 1, 2, 'Rua Gomes Taborda', 1826, 'Cordeiro', 1, 81, '34452190');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163039', 'Colégio Gge', 1, 1, 2, 'Rua Jose da Silva Lucena', 18, 'Imbiribeira', 1, 81, '32271000');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190451', 'Colégio Gge', 1, 1, 2, 'Rua Desembargador Gois Cavalcante', 460, 'Parnamirim', 1, 81, '32271000');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173280', 'Colégio Grande Passo', 1, 1, 2, 'Rua Professor Aurelio de Castro Cavalcanti', 97, 'Boa Viagem', 1, 81, '33415362');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26289601', 'Colégio Gremio Educativo', 1, 1, 2, 'Rua Engenho Pedra Lavada', 163, 'Cohab', 1, 81, '30388337');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188627', 'Colégio Gremio Educativo - Unidade Ii', 1, 1, 2, 'Rua Engenho Duas Barras', 23, 'Ibura', 1, 81, '30388337');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118190', 'Colégio Henrique Dias', 1, 1, 2, 'Rua Professor Jose Constantino da Silva', 205, 'Jordao', 1, 81, '34629105');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122405', 'Colégio Imaculado Coracao de Maria', 1, 1, 2, 'Rua Doutor Machado', 379, 'Campo Grande', 1, 81, '34264982');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178133', 'Colégio Incentivo', 1, 1, 2, 'Avenida Doutor Jose Rufino', 1545, 'Barro', 1, 81, '41014012');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133199', 'Colégio Inovacao', 1, 1, 2, 'Rua Padre Lima e Sa', 407, 'Ipsep', 1, 81, '34714300');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118041', 'Colégio Israelita Moyses Chvarts', 1, 1, 2, 'Rua Pio Ix', 792, 'Madalena', 1, 81, '32270418');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122413', 'Colégio Jesus Crucificado', 1, 1, 2, 'Rua Odorico Mendes', 70, 'Campo Grande', 1, 81, '32416330');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119889', 'Colégio João Paulo', 1, 1, 2, 'Rua Desembargador Evandro Netto', 27, 'Jordao Baixo', 1, 81, '988276385');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153050', 'Colégio Logos', 1, 1, 2, 'Rua Zeferino Pinho', 507, 'Imbiribeira', 1, 81, '33383030');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26172720', 'Colégio Madre de Deus Zona Norte', 1, 1, 2, 'Rua Sebastiao Alves', 73, 'Tamarineira', 1, 81, '32044179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119269', 'Colégio Madre Teresa de Calcuta', 1, 1, 2, 'Rua da Linha', 339, 'Imbiribeira', 1, 81, '37883174');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125137', 'Colégio Maria Emilia', 1, 1, 2, 'Rua Felix Pacheco', 262, 'Ipsep', 1, 81, '33391746');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118270', 'Colégio Maria Tereza', 1, 1, 2, 'Rua Barao de Souza Leao', 1647, 'Imbiribeira', 1, 81, '32011600');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122162', 'Colégio Marista São Luis', 1, 1, 2, 'Avenida Rui Barbosa', 1104, 'Gracas', 1, 81, '40095355');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26507722', 'Colégio Meu Pequeno Mundo', 1, 1, 2, 'Rua Manuel Alves Deus Dara', 35, 'Engenho do Meio', 1, 81, '30834874');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173085', 'Colégio Milenio', 1, 1, 2, 'Avenida Afonso Olindense', 620, 'Varzea', 1, 81, '32720437');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122235', 'Colégio Modelo do Recife', 1, 1, 2, 'Rua Ramiz Galvao', 83, 'Arruda', 1, 81, '30374815');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190800', 'Colégio Motivo', 1, 1, 2, 'Rua Tenente Manoel Barbosa', 35, 'Imbiribeira', 1, 81, '21199777');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26160307', 'Colégio Motivo', 1, 1, 2, 'Rua Tenente Manoel Barbosa', 32, 'Imbiribeira', 1, 81, '21199777');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125668', 'Colégio Motivo', 1, 1, 2, 'Avenida Dezessete de Agosto', 1872, 'Casa Forte', 1, 81, '34416300');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143470', 'Colégio Movimento', 1, 1, 2, 'Rua Moema', 133, 'Água Fria', 1, 81, '985339733');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26399636', 'Colégio Movimento Criativo', 1, 1, 2, 'Rua Barbara Heliodora', 325, 'Cohab-ibura-recife', 1, 81, '34755290');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143330', 'Colégio Multiplo Ensino', 1, 1, 2, 'Avenida Guanabara', 99, 'Coqueiral', 1, 81, '34558488');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122189', 'Colégio Nossa Sra de Lourdes', 1, 1, 2, 'Avenida Conselheiro Rosa e Silva', 1767, 'Tamarineira', 1, 81, '34419396');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26478714', 'Colégio Novo Mundo', 1, 1, 2, 'Rua Guilherme de Araujo', 248, 'Prado', 1, 81, '987780176');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26137631', 'Colégio Nucleo', 1, 1, 2, 'Avenida Rui Barbosa', 1680, 'Gracas', 1, 81, '30341177');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187353', 'Colégio Nucleo - Boa Viagem', 1, 1, 2, 'Avenida Engenheiro Domingos Ferreira', 2142, 'Boa Viagem', 1, 81, '31261177');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189259', 'Colégio Panda', 1, 1, 2, 'Rua Ana Mauricia Wanderley', 237, 'Arruda', 1, 81, '34987223');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26162016', 'Colégio Pontual Centro Educacional', 1, 1, 2, 'Rua Marechal Manoel Luis Osorio', 495, 'Varzea', 1, 81, '32714616');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122090', 'Colégio Presbiteriano Agnes Erskine', 1, 1, 2, 'Avenida Rui Barbosa', 704, 'Gracas', 1, 81, '31316950');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26140802', 'Colégio Questao de Inteligencia', 1, 1, 2, 'Avenida Beberibe', 1744, 'Água Fria', 1, 81, '34437176');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178419', 'Colégio Reino de Juda', 1, 1, 2, 'Rua Capitao Joao Roma', 26, 'Cordeiro', 1, 81, '32283455');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121557', 'Colégio Renascer', 1, 1, 2, 'Rua Sao Goncalo', 51, 'Boa Vista', 1, 81, '30389074');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170485', 'Colégio Saber Fazer Me', 1, 1, 2, 'Rua Guanambi', 86, 'Bomba do Hemeterio', 1, 81, '34983540');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121484', 'Colégio Salesiano Sagrado Coracao', 1, 1, 2, 'Rua Dom Bosco', 551, 'Boa Vista', 1, 81, '21295900');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122154', 'Colégio Santa Catarina', 1, 1, 2, 'Estrada do Arraial', 2740, 'Tamarineira', 1, 81, '33341160');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181266', 'Colégio Santa Emilia', 1, 1, 2, 'Rua Adelmar Tavares', 25, 'Cordeiro', 1, 81, '30482121');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170507', 'Colégio Santa Luisa de Marillac', 1, 1, 2, 'Rua Leonardo Bezerra Cavalcanti', 116, 'Parnamirim', 1, 81, '33141771');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124220', 'Colégio Santa Maria', 1, 1, 2, 'Rua Padre Bernardino Pessoa', 512, 'Boa Viagem', 1, 81, '34655133');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170337', 'Colégio Santa Teresa', 1, 1, 2, 'Rua Caichoeira', 403, 'Imbiribeira', 1, 81, '992004823');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128039', 'Colégio São Jorge', 1, 1, 2, 'Rua dos Craveiros', 3, 'Campina do Barreto', 1, 81, '34443173');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191865', 'Colégio São Placido', 1, 1, 2, 'Avenida Inacio Monteiro', 597, 'Cordeiro', 1, 81, '999712305');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123746', 'Colégio Ser e Crescer', 1, 1, 2, 'Rua Capitao Gregorio de Albuquerque', 161, 'Areias', 1, 81, '32514361');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181363', 'Colégio Tempo de Crescer', 1, 1, 2, 'Rua Engenho Nova Vila', 15, 'Cohab', 1, 81, '34751823');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157527', 'Colégio Terceiro Milenio', 1, 1, 2, 'Rua Doutor Fernando Allain', 136, 'Espinheiro', 1, 81, '32415583');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126508', 'Colégio Tres Marias 1º e 2º Grau', 1, 1, 2, 'Rua Compositor Edgar Moraes', 46, 'Brejo da Guabiraba', 1, 81, '34426629');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26164060', 'Colégio Triunfo', 1, 1, 2, 'Rua do Triunfo', 647, 'Arruda', 1, 81, '32219651');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26440733', 'Colégio Unico Unidade Santo Amaro', 1, 1, 2, 'Rua Doutor Carlos Chagas', 112, 'Santo Amaro', 1, 81, '32315525');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188473', 'Colégio Universo da Criança', 1, 1, 2, 'Rua Joaquim Teixeira', 100, 'Morro da Conceicao', 1, 81, '30882126');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166941', 'Colégio Universo do Saber', 1, 1, 2, 'Rua Marques de Abrantes', 459, 'Campo Grande', 1, 81, '41416002');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122170', 'Colégio Vera Cruz Recife', 1, 1, 2, 'Avenida Rui Barbosa', 57, 'Gracas', 1, 81, '32221876');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118262', 'Colégio Visao', 1, 1, 2, 'Avenida Doutor Jose Rufino', 241, 'Estancia', 1, 81, '32510169');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163462', 'Conselho dos Moradores do Jiquia', 1, 1, 2, 'Avenida Central', 4579, 'Afogados', 1, 81, '34555544');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156075', 'Creche Beneficente Amiguinhos', 1, 1, 2, 'Rua Santa Leonor', 176, 'Boa Viagem', 1, 81, '33424010');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179059', 'Creche Beneficente Sant', 1, 1, 2, 'Rua Itacari', 293, 'Imbiribeira', 1, 81, '33380062');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153343', 'Creche Com N Sra da Boa Viagem', 1, 1, 2, 'Rua Bruno Veloso', 430, 'Boa Viagem', 1, 81, '34669923');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156024', 'Creche Espirita Missionario da Luz', 1, 1, 2, 'Avenida Encanta Moca', 212, 'Pina', 1, 81, '34664025');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26140195', 'Csv Educacional - Colégio Saber Viver Anexo', 1, 1, 2, 'Avenida Joao de Barros', 1563, 'Espinheiro', 1, 81, '32410289');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170515', 'Ctm Colégio e Curso', 1, 1, 2, 'Rua Doutor Geraldo de Andrade', 152, 'Espinheiro', 1, 81, '32415583');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187612', 'Day Care Infantil Educar', 1, 1, 2, 'Rua Dom Sebastiao Leme', 137, 'Gracas', 1, 81, '973111805');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187868', 'Doce Criança Escola de Educação Infantil', 1, 1, 2, 'Rua Dom Expedito Lopes', 122, 'San Martin', 1, 81, '997341780');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190249', 'Educação Infantil Bilingue Limitada Me Sunny Place International School', 1, 1, 2, 'Rua do Chacon', 300, 'Poco', 1, 81, '981301174');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125870', 'Educandario Adriana Carvalho', 1, 1, 2, 'Rua Uniao da Vitoria', 49, 'Alto José do Pinho', 1, 81, '32680491');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173131', 'Educandario Alegria do Saber Sc', 1, 1, 2, 'Rua Pero Vaz de Caminha', 7105, 'Cohab', 1, 81, '987443339');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26493837', 'Educandario Ana Lucia', 1, 1, 2, 'Rua Ibiratinga', 230, 'Cohab', 1, 81, '987716906');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133083', 'Educandario Ana Raquel', 1, 1, 2, 'Rua Diogo Alvares', 68, 'Torre', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26146630', 'Educandario Analine', 1, 1, 2, 'Rua Major Mario Portela', 177, 'Bongi', 1, 81, '87575180');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118360', 'Educandario Anita Garibaldi', 1, 1, 2, 'Rua Conego Lira', 282, 'Imbiribeira', 1, 81, '34288333');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187680', 'Educandario Anita Garibaldi', 1, 1, 2, 'Rua Agricultor Joao Bezerra de Oliveira', 53, 'Imbiribeira', 1, 81, '33390277');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149010', 'Educandario Bem Querer', 1, 1, 2, 'Rua Edson', 63, 'Morro da Conceicao', 1, 81, '988012398');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143640', 'Educandario Brasileirinho', 1, 1, 2, 'Rua Vasco da Gama', 973, 'Vasco da Gama', 1, 81, '32687771');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167123', 'Educandario Caminho Didatico', 1, 1, 2, 'Rua Dois de Fevereiro', 271, 'Morro da Conceicao', 1, 81, '32684548');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149435', 'Educandario Campos Andrade', 1, 1, 2, 'Avenida Norte Miguel Arraes de Alencar', 67186720, 'Vasco da Gama', 1, 81, '988801116');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122782', 'Educandario Canto Livre', 1, 1, 2, 'Rua Imbituba', 48, 'San Martin', 1, 81, '34473298');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182882', 'Educandario Cassia Maria', 1, 1, 2, 'Rua Aparecida', 389, 'Afogados', 1, 81, '984115120');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149400', 'Educandario Claudia Lima', 1, 1, 2, 'Rua Sao Jorge', 4640, 'Brejo de Beberibe', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168871', 'Educandario Criando e Recriando', 1, 1, 2, 'Rua Sobral Pinto', 218, 'Nova Descoberta', 1, 81, '33040484');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143739', 'Educandario da Carla', 1, 1, 2, 'Rua Eliete Aguiar', 27530, 'Alto do Mandu', 1, 81, '34412194');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173298', 'Educandario Danvictor', 1, 1, 2, 'Rua Doutor Benigno Jordao Vasconcelos', 246, 'Cohab', 1, 81, '34756022');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143313', 'Educandario Desenvolver', 1, 1, 2, 'Avenida Governador Roberto Silveira', 1, 'Jordao Baixo', 1, 81, '985388787');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26465736', 'Educandario Doce Infancia', 1, 1, 2, 'Rua Vereador Sergio Xavier', 237, 'San Martin', 1, 81, '32299414');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133202', 'Educandario Duarte', 1, 1, 2, 'Rua Tuparetama', 88, 'Estancia', 1, 81, '995082670');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178974', 'Educandario Evangelico Ideal', 1, 1, 2, 'Rua Rodrigues Sete', 412, 'Casa Amarela', 1, 81, '32693865');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178257', 'Educandario Exodo', 1, 1, 2, 'Rua Rio Maranhao', 47, 'Ipsep', 1, 81, '983687841');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156784', 'Educandario Genilda Satiro', 1, 1, 2, 'Rua Nordeste', 125, 'Vasco da Gama', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26530740', 'Educandario Gente Inocente', 1, 1, 2, 'Rua Genesio Teofilo Bezerra Filho', 61, 'Iputinga', 1, 81, '32734503');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26218402', 'Educandario Infancia Feliz', 1, 1, 2, 'Rua Alto da Bica', 16, 'Passarinho', 1, 81, '986660934');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124378', 'Educandario Jardim Paraiso', 1, 1, 2, 'Rua Deputado Luis Dias Lins', 226, 'Cohab', 1, 81, '30510179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26144107', 'Educandario Joana Darc', 1, 1, 2, 'Avenida Beberibe', 568, 'Água Fria', 1, 81, '34519615');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191113', 'Educandario João Paulo', 1, 1, 2, 'Rua Coronel Mario Liborio', 38, 'Campina do Barreto', 1, 81, '988902506');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128047', 'Educandario Leda Mello', 1, 1, 2, 'Rua Mamede Coelho', 801, 'Dois Unidos', 1, 81, '32692271');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26493721', 'Educandario Lima', 1, 1, 2, 'Subida do Cajueiro', 26, 'Nova Descoberta', 1, 81, '32685437');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176505', 'Educandario Luz do Mundo', 1, 1, 2, 'Rua Deputado Manoel Paes', 57, 'Areias', 1, 81, '987192333');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176491', 'Educandario Mae Rainha do Sagrado Coracao', 1, 1, 2, 'Rua Rezende', 159, 'Iputinga', 1, 81, '32733477');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124394', 'Educandario Marcia Cristina', 1, 1, 2, 'Avenida Encanta Moca', 136, 'Pina', 1, 81, '34651930');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118424', 'Educandario Maria Imaculada', 1, 1, 2, 'Rua Major Quinteiro', 97, 'Cordeiro', 1, 81, '32271024');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143178', 'Educandario Menezes', 1, 1, 2, 'Rua Carnaiba', 64, 'Nova Descoberta', 1, 81, '34424767');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149060', 'Educandario Menezes Ii', 1, 1, 2, 'Rua Mirian Lopes Verbena', 27, 'Macaxeira', 1, 81, '32663771');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173140', 'Educandario Monte Horebe', 1, 1, 2, 'Rua Adamantina', 70, 'Jardim Sao Paulo', 1, 81, '41016683');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26493764', 'Educandario Mundo da Criança', 1, 1, 2, 'Rua Estreliana', 307, 'Alto José do Pinho', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26466724', 'Educandario Mundo Feliz', 1, 1, 2, 'Rua Santa Joana Darc', 94, 'Areias', 1, 81, '986639425');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26177870', 'Educandario Nossa Senhora Aparecida', 1, 1, 2, 'Rua Diogo de Vasconcelos', 410, 'Varzea', 1, 81, '34536512');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128055', 'Educandario Nossa Senhora da Conceicao', 1, 1, 2, 'Rua Julio Jose de Souza', 347, 'Água Fria', 1, 81, '34432906');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152959', 'Educandario Nossa Senhora da Conceicao', 1, 1, 2, 'Rua Presidente Weizman', 82, 'Areias', 1, 81, '32519918');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125900', 'Educandario Nossa Senhora da Piedade', 1, 1, 2, 'Rua Nossa Senhora da Piedade', 63, 'Brejo da Guabiraba', 1, 81, '34414946');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173077', 'Educandario Nossa Senhora das Gracas', 1, 1, 2, 'Rua Sitio dos Coqueiros', 47, 'Varzea', 1, 81, '32726187');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118327', 'Educandario Nossa Senhora de Fatima', 1, 1, 2, 'Rua Aracagi', 135, 'Barro', 1, 81, '30366442');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187850', 'Educandario Nossa Senhora do Rosario', 1, 1, 2, 'Rua Joao Francisco Lisboa', 90, 'Varzea', 1, 81, '34539106');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166984', 'Educandario Nova Era', 1, 1, 2, 'Rua Manoel Lopes de Albuquerque', 301, 'Dois Unidos', 1, 81, '34432814');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26427710', 'Educandario Paraiso', 1, 1, 2, 'Rua Hemeterio Maciel', 82, 'Varzea', 1, 81, '34540408');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26141019', 'Educandario Pedro Henrique', 1, 1, 2, 'Rua Tupiniquins', 97, 'Santo Amaro', 1, 81, '986265264');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187884', 'Educandario Pequeno Principe', 1, 1, 2, 'Rua Vinte e Um de Abril', 2857, 'San Martin', 1, 81, '32267789');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173328', 'Educandario Professora Eusa Carpintero', 1, 1, 2, 'Rua Francisco do Rego', 163, 'Areias', 1, 81, '30322660');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168863', 'Educandario Recanto Infantil', 1, 1, 2, 'Rua Tupinamba', 44, 'Linha do Tiro', 1, 81, '983136315');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167093', 'Educandario Rita Barbosa', 1, 1, 2, 'Rua Barao de Oeiras', 53, 'Porto da Madeira', 1, 81, '998094590');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143232', 'Educandario Rita de Cassia', 1, 1, 2, 'Rua Maria Augusta de Souza', 218, 'Campo Grande', 1, 81, '986942931');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26140977', 'Educandario Rosa de Saron', 1, 1, 2, 'Rua Itajaci', 48, 'Alto José Bonifácio', 1, 81, '988224611');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26144360', 'Educandario Santa Rosa', 1, 1, 2, 'Rua Joao Leite', 468, 'Mangueira', 1, 81, '34220321');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188856', 'Educandario Santa Terezinha Baby', 1, 1, 2, 'Rua Luiz Figueiroa', 219, 'Mangueira', 1, 81, '997062770');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176653', 'Educandario Santa Terezinha do Menino Jesus', 1, 1, 2, 'Rua Ernesto Cavalcanti', 67, 'Afogados', 1, 81, '30384453');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191474', 'Educandario Santo Antonio', 1, 1, 2, 'Rua Arapixuna', 184, 'Água Fria', 1, 81, '996714076');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125927', 'Educandario São Domingos', 1, 1, 2, 'Rua Corrego do Euclides', 209, 'Alto José Bonifácio', 1, 81, '31058229');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176726', 'Educandario São Jorge', 1, 1, 2, 'Rua Coripos', 29, 'Coqueiral', 1, 81, '992048528');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147955', 'Educandario São Pedro', 1, 1, 2, 'Rua Santa Rosa', NULL, 'San Martin', 1, 81, '32273772');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157454', 'Educandario Shalom', 1, 1, 2, 'Rua Corrego do Euclides', 91, 'Alto José Bonifácio', 1, 81, '31297307');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149389', 'Educandario Siqueira Brandao', 1, 1, 2, 'Avenida Beberibe', 4149, 'Beberibe', 1, 81, '34497469');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148854', 'Educandario Sonhos de Icaro', 1, 1, 2, 'Rua Antonio Carneiro', 103, 'Nova Descoberta', 1, 81, '32214395');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147483', 'Educandario Tania Bezerra', 1, 1, 2, 'Rua Mostardas', 120, 'Torroes', 1, 81, '32271846');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26530716', 'Educandario Tia Nai', 1, 1, 2, 'Avenida Izabel de Goes', 941, 'Areias', 1, 81, '32512255');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167000', 'Educandario Tia Nice', 1, 1, 2, 'Rua Manuel de Medeiros', 1388, 'Dois Irmaos', 1, 81, '34423795');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26464748', 'Educandario Unibaby', 1, 1, 2, 'Rua Rio Pajeu', 144, 'Ibura', 1, 81, '34724448');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26149443', 'Educandario Universo Infantil', 1, 1, 2, 'Rua Erundina Negreiros de Araujo', 188, 'Macaxeira', 1, 81, '33043354');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26464713', 'Educandario Vovo Juca', 1, 1, 2, 'Rua Agaci', 207, 'Brejo de Beberibe', 1, 81, '32688696');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26218003', 'Educandario Vovo Milita', 1, 1, 2, 'Rua Santa Maria Goretti', 184, 'Vasco da Gama', 1, 81, '985057472');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178265', 'Educandario Vovo Rita', 1, 1, 2, 'Rua Tacaimbo', 59, 'Nova Descoberta', 1, 81, '34416179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26142988', 'Educandario Wanessa Karla', 1, 1, 2, 'Avenida Santarem', 16202, 'Cohab', 1, 81, '988552874');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163225', 'Escola Crista Bessoni', 1, 1, 2, 'Rua Cabedelo', 40, 'Afogados', 1, 81, '30823786');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26512726', 'Escola 1º Passo', 1, 1, 2, 'Rua Quatro de Fevereiro', 161, 'Cohab', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26513714', 'Escola Abdias Gomes de Moura', 1, 1, 2, 'Rua Manuel Salvador', 280, 'Barro', 1, 81, '31283916');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119650', 'Escola Abelhinha', 1, 1, 2, 'Avenida Marechal Mascarenhas de Morais', 2169, 'Imbiribeira', 1, 81, '20114139');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26484714', 'Escola Adonay', 1, 1, 2, 'Rua Principal', 106, 'Alto José do Pinho', 1, 81, '986678460');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26489716', 'Escola Adventista de San Martin', 1, 1, 2, 'Av. General San Martin', 2442, 'San Martin', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26141000', 'Escola Alegria do Saber', 1, 1, 2, 'Rua Marcilio Dias', 33, 'Campina do Barreto', 1, 81, '34981416');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26146690', 'Escola Americana do Recife', 1, 1, 2, 'Rua Sa e Souza', 408, 'Boa Viagem', 1, 81, '33414716');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122979', 'Escola Ana Cecilia', 1, 1, 2, 'Rua Severina Silva Rego', 86, 'Estancia', 1, 81, '32515657');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26184877', 'Escola Ana Maria', 1, 1, 2, 'Rua Gaston Camara', 50, 'Cordeiro', 1, 81, '41412666');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176580', 'Escola Arca de Noe', 1, 1, 2, 'Rua Doutor Adelino', 289, 'Afogados', 1, 81, '34481185');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179598', 'Escola Arco Iris', 1, 1, 2, 'Rua do Triunfo', 116, 'Arruda', 1, 81, '30482462');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126060', 'Escola Assembleia de Deus', 1, 1, 2, 'Rua Conselheiro Ribas', 20, 'Casa Amarela', 1, 81, '38232398');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26504731', 'Escola Bem Me Quer', 1, 1, 2, 'Rua Doutor Gomes Porto', 374, 'San Martin', 1, 81, '32297763');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178206', 'Escola Bem Querer', 1, 1, 2, 'Rua Faustino Porto', 151, 'Boa Viagem', 1, 81, '34658670');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118645', 'Escola Bem-me-quer - Falcao Centro Cultural', 1, 1, 2, 'Rua Faustino Porto', 151, 'Boa Viagem', 1, 81, '34658670');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153084', 'Escola Benfica', 1, 1, 2, 'Rua Benfica', 197, 'Madalena', 1, 81, '33346875');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187833', 'Escola Brinquedos e Brincadeiras', 1, 1, 2, 'Rua Conselheiro Nabuco', NULL, 'Casa Amarela', 1, 81, '32652783');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181797', 'Escola Caminhando Com Cristo', 1, 1, 2, 'Rua Massape', 40, 'Cohab', 1, 81, '34866025');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26137810', 'Escola Casinha do Saber', 1, 1, 2, 'Rua Rio Ipojuca', 328, 'Ipsep', 1, 81, '33391447');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148951', 'Escola Castelo do Saber', 1, 1, 2, 'Rua Nazare', 428, 'Água Fria', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166895', 'Escola Castelo Encantado', 1, 1, 2, 'Rua Clodomiro Selva', 194, 'Casa Amarela', 1, 81, '32694368');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190940', 'Escola Castelo Renascer Em Cristo', 1, 1, 2, 'Rua Cabo Eutropio', 321, 'Ilha de Joana Bezerra', 1, 81, '986939349');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26138948', 'Escola Cecilia Meireles', 1, 1, 2, 'Rua Rio Douro', 72, 'Ibura', 1, 81, '34719372');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173220', 'Escola Chave do Saber', 1, 1, 2, 'Rua Jose Miranda', 172, 'Afogados', 1, 81, '34289108');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156709', 'Escola Comunitaria Maria Estevao', 1, 1, 2, 'Rua Maria Estevao', 241, 'Dois Unidos', 1, 81, '34432797');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26163780', 'Escola Comunitaria Tom e Jerry', 1, 1, 2, 'Rua Corrego da Areia', 82, 'Nova Descoberta', 1, 81, '988434414');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152894', 'Escola Construindo O Saber', 1, 1, 2, 'Rua Rio Colorado', 45, 'Ipsep', 1, 81, '33393428');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26530724', 'Escola Convisao', 1, 1, 2, 'Avenida Doutor Jose Rufino', 173, 'Estancia', 1, 81, '32510169');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26529726', 'Escola Coracao de Estudante', 1, 1, 2, 'Rua Gurupe', 221, 'Afogados', 1, 81, '988914426');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119714', 'Escola Coracao de Maria', 1, 1, 2, 'Rua Hugo de Carvalho', NULL, 'Prado', 1, 81, '32492285');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176483', 'Escola Crescer e Transformar', 1, 1, 2, 'Avenida Coracao de Jesus', 20027, 'Barro', 1, 81, '987002332');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148943', 'Escola Criança Futuro Feliz', 1, 1, 2, 'Rua Taguatinga', 54, 'Beberibe', 1, 81, '34442212');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187744', 'Escola Criar e Recriar', 1, 1, 2, 'Rua Manoel Estevao da Costa', 284, 'Iputinga', 1, 81, '34531353');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117541', 'Escola Criativa', 1, 1, 2, 'Rua Conde de Iraja', 254236, 'Torre', 1, 81, '33668300');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191903', 'Escola Crista da Boa Viagem', 1, 1, 2, 'Rua Cruzeiro do Forte', 183, 'Boa Viagem', 1, 81, '33424854');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191539', 'Escola Crista Na Varzea', 1, 1, 2, 'Rua Francisco Lacerda', 176, 'Varzea', 1, 81, '31320873');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126702', 'Escola da Aninha', 1, 1, 2, 'Corrego Jose Idalino', 480, 'Brejo da Guabiraba', 1, 81, '994518476');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173190', 'Escola de Enfermagem São Caetano', 1, 1, 2, 'Rua Alvaro Amorim', 219, 'Imbiribeira', 1, 81, '34283607');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26474727', 'Escola Despertar - Unidade I', 1, 1, 2, 'Rua Real da Torre', 1645, 'Torre', 1, 81, '34465251');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181258', 'Escola Despertar - Unidade Ii', 1, 1, 2, 'Rua Real da Torre', 1633, 'Torre', 1, 81, '34465251');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133482', 'Escola Dinamica', 1, 1, 2, 'Rua Joao Trajano da Silva', 164, 'Bongi', 1, 81, '32364011');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173271', 'Escola dos Anjos', 1, 1, 2, 'Rua Mineirolandia', 287, 'San Martin', 1, 81, '32236682');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121611', 'Escola e Curso Bandeira', 1, 1, 2, 'Rua da Conceicao', 132, 'Boa Vista', 1, 81, '32214956');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128187', 'Escola Educacional Cecilia Meirelles', 1, 1, 2, 'Rua Uriel de Holanda', 371, 'Linha do Tiro', 1, 81, '34491484');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191857', 'Escola Eleva', 1, 1, 2, 'Rua Alameda das Hortencias', NULL, 'Imbiribeira', 1, 81, '33345477');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26147378', 'Escola Espaço Alegre', 1, 1, 2, 'Rua Manoel de Arruda Camara', 54, 'Prado', 1, 81, '32273158');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139189', 'Escola Espaço Criativo', 1, 1, 2, 'Avenida Luis Antonio de Araujo', 209, 'Sitio dos Pintos', 1, 81, '34423874');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143143', 'Escola Espaço Dinamico', 1, 1, 2, 'Rua Catulo da Paixao Cearense', 95, 'Campo Grande', 1, 81, '32424257');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26493829', 'Escola Evangelica Gideao', 1, 1, 2, 'Rua Manoel Ariosto', 145, 'Cordeiro', 1, 81, '32231865');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187434', 'Escola Faculdade da Criança', 1, 1, 2, 'Rua Sao Vicente de Paula', 747, 'Varzea', 1, 81, '34561706');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26309610', 'Escola Feliz Saber', 1, 1, 2, 'Rua Secundino Carneiro', NULL, 'Prado', 1, 81, '34464727');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176637', 'Escola Florencio de Santana', 1, 1, 2, 'Rua Ernesto Cavalcanti', 150, 'Afogados', 1, 81, '987258475');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176807', 'Escola Fraternal Maria de Nazare', 1, 1, 2, 'Rua Guaraci', 76, 'Cacote', 1, 81, '34556199');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26161036', 'Escola Futuro Cidadao', 1, 1, 2, 'Rua Marechal Taumaturgo', 23, 'Cohab', 1, 81, '34755036');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26172739', 'Escola Geracao Atual', 1, 1, 2, 'Estrada do Arraial', 4341, 'Casa Amarela', 1, 81, '32679176');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26483718', 'Escola Geracao do Futuro', 1, 1, 2, 'Rua Almirante Batista Leao', 81, 'Boa Viagem', 1, 81, '33431588');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181711', 'Escola Geracao Vitoria', 1, 1, 2, 'Rua Doutor Sergio Romero', 13, 'Campina do Barreto', 1, 81, '34431128');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26463733', 'Escola Heronilda Aragao', 1, 1, 2, 'Rua Doutor Valdir Pessoa', 74, 'Imbiribeira', 1, 81, '34220449');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182734', 'Escola Incentivo', 1, 1, 2, 'Avenida Pinheiros', 711, 'Imbiribeira', 1, 81, '34283961');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26507730', 'Escola Infantil Conviver', 1, 1, 2, 'Rua Uriel de', NULL, 'Linha do Tiro', 1, 81, '34430631');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185067', 'Escola Infantil Criativa', 1, 1, 2, 'Rua Conde de Iraja', 275, 'Torre', 1, 81, '33668323');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191911', 'Escola Integrar', 1, 1, 2, 'Rua Doutor Joao Marques', 220, 'Ilha do Retiro', 1, 81, '32273478');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127679', 'Escola Interagir', 1, 1, 2, 'Rua Jasmim', NULL, 'Cidade Universitaria', 1, 81, '32731581');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179989', 'Escola Internacional Aba', 1, 1, 2, 'Avenida Conselheiro Rosa e Silva', 1510, 'Aflitos', 1, 81, '34278800');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119862', 'Escola Irma Dulce', 1, 1, 2, 'Rua Industrial Antonio Carlos Menezes', 4, 'Curado', 1, 81, '988040480');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26146622', 'Escola Jardim do Eden', 1, 1, 2, 'Rua Blumenau', 280, 'Ipsep', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173158', 'Escola João Francisco de Torres', 1, 1, 2, 'Rua Vinte e Um de Abril', 3427, 'San Martin', 1, 81, '30978963');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123800', 'Escola João Verissimo', 1, 1, 2, 'Rua Capitao Amador Rodrigues', 23, 'Areias', 1, 81, '32515105');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156806', 'Escola Lapis Na Mao', 1, 1, 2, 'Rua Frei Teofilo de Virgoletta', 480, 'Zumbi', 1, 81, '30770329');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143135', 'Escola Leonarda Alves', 1, 1, 2, 'Rua Antonio Carneiro', 129, 'Nova Descoberta', 1, 81, '32219686');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182823', 'Escola Lirio dos Vales', 1, 1, 2, 'Rua Ladeira de Pedra', 1066, 'Água Fria', 1, 81, '986028758');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118963', 'Escola Luis Alves', 1, 1, 2, 'Travessa Ribeiro Roma', 429, 'Zumbi', 1, 81, '987467325');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125099', 'Escola Luz e Saber', 1, 1, 2, 'Rua Marques de Valenca', 162, 'Boa Viagem', 1, 81, '41020877');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119935', 'Escola Madre de Deus', 1, 1, 2, 'Rua Belmonte', 199, 'Boa Viagem', 1, 81, '33413530');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176424', 'Escola Maravilha', 1, 1, 2, 'Rua Diogo Alvares', 159, 'Zumbi', 1, 81, '32272286');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119943', 'Escola Maria Auxiliadora', 1, 1, 2, 'Rua Jaguariaiva', 12402, 'Cohab', 1, 81, '34755532');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139642', 'Escola Maria de Fatima', 1, 1, 2, 'Rua Sao Benedito', 59, 'Pina', 1, 81, '99776858');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173107', 'Escola Maria de Fatima Ferreira', 1, 1, 2, 'Avenida Mario Alvares Pereira de Lira', 198, 'Cordeiro', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153998', 'Escola Maria Lucena', 1, 1, 2, 'Rua Doutor Gastao da Silveira', 43, 'Cordeiro', 1, 81, '34454254');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126753', 'Escola Maria Luiza', 1, 1, 2, 'Rua Carnaiba', 29, 'Nova Descoberta', 1, 81, '30748485');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181428', 'Escola Meu Caminhar Boa Viagem', 1, 1, 2, 'Rua Doutor Joao Guilherme de Pontes Sobrinho', 516, 'Boa Viagem', 1, 81, '33279692');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119978', 'Escola Modelada Para Criança', 1, 1, 2, 'Rua Piratininga', 180, 'Jardim Sao Paulo', 1, 81, '34551644');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119986', 'Escola Moderna Nossa Senhora do Loreto', 1, 1, 2, 'Rua Amazonas', 360, 'Boa Viagem', 1, 81, '987162958');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128250', 'Escola Monsenhor Viana', 1, 1, 2, 'Rua Mamede Coelho', 374, 'Dois Unidos', 1, 81, '31260661');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26455714', 'Escola Monte Moria', 1, 1, 2, 'Rua Parise', 57, 'Jardim Sao Paulo', 1, 81, '32538455');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192560', 'Escola Multi', 1, 1, 2, 'Rua Nossa Senhora de Fatima', 190, 'Jardim Sao Paulo', 1, 81, '999625200');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125056', 'Escola Mundo', 1, 1, 2, 'Rua Varsovia', 520, 'Imbiribeira', 1, 81, '33148988');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156857', 'Escola Mundo da Cultura', 1, 1, 2, 'Rua Jacques Maritain', 83, 'Areias', 1, 81, '30390636');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26288605', 'Escola Mundo Infantil', 1, 1, 2, 'Avenida Manaus', 137, 'Cohab', 1, 81, '31276728');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176548', 'Escola Nossa Senhora da Piedade', 1, 1, 2, 'Rua Duarte Filho', 10, 'San Martin', 1, 81, '32264609');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126435', 'Escola Nossa Senhora das Dores', 1, 1, 2, 'Rua Padre Oliveira', 724, 'Alto José do Pinho', 1, 81, '983244797');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26197600', 'Escola Nossa Senhora das Gracas', 1, 1, 2, 'Rua de Sant Ana', 383, 'Santana', 1, 81, '996760180');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26457776', 'Escola Nossa Senhora das Gracas', 1, 1, 2, 'Rua Manoel Alves Deus Dara', 227, 'Engenho do Meio', 1, 81, '34535128');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26155834', 'Escola Nossa Senhora de Guadalupe', 1, 1, 2, 'Rua Anita', 174, 'Macaxeira', 1, 81, '983241433');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168170', 'Escola Nosso Espaço', 1, 1, 2, 'Rua Manuel Rodrigues Porto', NULL, 'Areias', 1, 81, '32523443');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152843', 'Escola Nova Geracao', 1, 1, 2, 'Avenida Dona Celia Arraes', 24, 'Jordao Baixo', 1, 81, '34624549');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143100', 'Escola Nova Geracao', 1, 1, 2, 'Rua Joao de Carvalho', 175, 'Hipodromo', 1, 81, '34279873');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173301', 'Escola Novo Contato', 1, 1, 2, 'Rua Dom Expedito Moura', 95, 'San Martin', 1, 81, '34456561');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152606', 'Escola Novo Horizonte', 1, 1, 2, 'Rua Visconde de Itaborai', 555, 'Cordeiro', 1, 81, '32270947');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187876', 'Escola Novo Mundo', 1, 1, 2, 'Rua Jose da Bomba', 128, 'Afogados', 1, 81, '985321985');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26495767', 'Escola Novo Mundo Mágico', 1, 1, 2, 'Rua Rio Uruguai', 641, 'Cohab', 1, 81, '99211792');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126451', 'Escola O Mundo do Abc', 1, 1, 2, 'Rua Fernandinho', 76, 'Corrego do Jenipapo', 1, 81, '30285304');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26137992', 'Escola O Pequeno Aprendiz', 1, 1, 2, 'Rua Doutor Benigno Jordao Vasconcelos', 786, 'Cohab', 1, 81, '34751869');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119242', 'Escola O Pequenote', 1, 1, 2, 'Rua Doutor Luiz Correa de Oliveira', 455, 'Boa Viagem', 1, 81, '33412214');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176742', 'Escola Opcao', 1, 1, 2, 'Rua Ribeirao do Pinhal', 212, 'Ibura', 1, 81, '996480818');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192454', 'Escola Pao da Vida', 1, 1, 2, 'Rua Conceicao de Macabu', 8, 'Ilha Joana Bezerra', 1, 81, '988119382');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118661', 'Escola Paroquial Santa Luzia Ensino Fundamental e Médio', 1, 1, 2, 'Avenida Doutor Jose Rufino', 700, 'Estancia', 1, 81, '32512339');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126460', 'Escola Particular Nossa Senhora da Conceicao', 1, 1, 2, 'Rua da Democracia', 76, 'Corrego do Jenipapo', 1, 81, '32681204');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119293', 'Escola Pastor Munguba Sobrinho', 1, 1, 2, 'Avenida Avenida Inacio Monteiro', 1601, 'Cordeiro', 1, 81, '32284621');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26470713', 'Escola Patria Unida', 1, 1, 2, 'Rua Bonito', 315, 'Mangueira', 1, 81, '985510756');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125218', 'Escola Paulo Freire', 1, 1, 2, 'Rua Sudoeste', 35, 'Jordao', 1, 81, '986253208');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143720', 'Escola Pedro Leandro', 1, 1, 2, 'Rua Carolina', 426, 'Casa Amarela', 1, 81, '33162912');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176564', 'Escola Pena Azul', 1, 1, 2, 'Rua Estrela do Mar', 28, 'Brasilia Teimosa', 1, 81, '34631367');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122618', 'Escola Pensar e Criar', 1, 1, 2, 'Rua Quarenta e Oito', 1013, 'Encruzilhada', 1, 81, '34270533');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173255', 'Escola Pequeno Aprendiz', 1, 1, 2, 'Rua Walfrido de Medeiros', 113, 'Cordeiro', 1, 81, '30333157');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187485', 'Escola Pequeno Principe', 1, 1, 2, 'Rua Teolandia', 55, 'Brejo de Beberibe', 1, 81, '33042683');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26162822', 'Escola Pequeno Principe', 1, 1, 2, 'Rua Silva Jardim, Cep 50250-100', 89, 'Jordao', 1, 81, '995253474');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26126486', 'Escola Peralta', 1, 1, 2, 'Estrada do Arraial', 2926, 'Casa Amarela', 1, 81, '32666828');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26486717', 'Escola Pingo de Gente', 1, 1, 2, 'Avenida Trinta de Outubro', 755, 'Jardim Sao Paulo', 1, 81, '32511014');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125234', 'Escola Pinheiros', 1, 1, 2, 'Rua Arquiteto Luiz Nunes', 673, 'Imbiribeira', 1, 81, '31299179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26492741', 'Escola Planeta Kids', 1, 1, 2, 'Rua da Harmonia', 553, 'Casa Amarela', 1, 81, '34418764');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26475715', 'Escola Plano de Deus', 1, 1, 2, 'Rua Parauna', 211, 'Ibura', 1, 81, '985433012');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182831', 'Escola Politec I e Ii', 1, 1, 2, 'Avenida Conde da Boa Vista', 1546, 'Soledade', 1, 81, '32225252');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125242', 'Escola Primeiro Passo', 1, 1, 2, 'Rua Professor Aurelio de Castro Cavalcanti', 511, 'Boa Viagem', 1, 81, '33415362');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122715', 'Escola Professor Quiteria Sena', 1, 1, 2, 'Rua Marques de Baipendi', 463, 'Campo Grande', 1, 81, '32226290');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26482711', 'Escola Professora Maria Cristina Vieira', 1, 1, 2, 'Rua Escada', 25, 'Coqueiral', 1, 81, '988383075');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173212', 'Escola Profissionalizante Ana Neri', 1, 1, 2, 'Rua Vinte e Um de Abril', 1042, 'Afogados', 1, 81, '34288403');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26164736', 'Escola Profissionalizante de Enfermagem de Israel', 1, 1, 2, 'Avenida Norte Miguel Arraes de Alencar', 5049, 'Tamarineira', 1, 81, '30190907');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176572', 'Escola Profissionalizante de Tecnico de Enfermagem Vitoria', 1, 1, 2, 'Rua Francisco Vita', 92, 'Cordeiro', 1, 81, '32297188');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176432', 'Escola Querer Saber', 1, 1, 2, 'Rua Jose Demetrios', 49, 'Barro', 1, 81, '988815809');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187787', 'Escola Querubim', 1, 1, 2, 'Rua Doutor Joao Coimbra', 267, 'Madalena', 1, 81, '31270011');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127237', 'Escola Realismo', 1, 1, 2, 'Avenida Nossa Senhora da Saude', 56, 'Iputinga', 1, 81, '32274426');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166909', 'Escola Recanto Feliz', 1, 1, 2, 'Largo Joao Pessoa', 33, 'Casa Amarela', 1, 81, '34414609');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123924', 'Escola Recreio da Tia Marta', 1, 1, 2, 'Rua Itapetininga', 209, 'Curado', 1, 81, '981605491');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26176629', 'Escola Rei David', 1, 1, 2, 'Rua Vinte e Um de Abril', 294, 'Afogados', 1, 81, '30622160');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26119471', 'Escola Reluzir', 1, 1, 2, 'Rua Coronel Geraldo Gomes de Matos', 96, 'Ibura', 1, 81, '30375835');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26183323', 'Escola Renascer', 1, 1, 2, 'Rua Brejo Novo', 71, 'Curado', 1, 81, '34458226');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185920', 'Escola Saber e Criar', 1, 1, 2, 'Rua Genesio Teofilo Bezerra Filho', 69, 'Iputinga', 1, 81, '34539243');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122669', 'Escola Saber Viver', 1, 1, 2, 'Rua do Espinheiro', 865, 'Espinheiro', 1, 81, '32410289');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167085', 'Escola Sabor da Infancia', 1, 1, 2, 'Rua Corrego da Areia', 390, 'Nova Descoberta', 1, 81, '984059651');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120151', 'Escola Sagrado Coracao', 1, 1, 2, 'Avenida Dois Rios', 1326, 'Ibura', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170493', 'Escola Santa Bernadete', 1, 1, 2, 'Rua Gerinaldo Alves', 139, 'Campina do Barreto', 1, 81, '34492144');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189020', 'Escola Santa Terezinha', 1, 1, 2, 'Rua Ernesto Cavalcanti', 5767, 'Afogados', 1, 81, '30384453');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120208', 'Escola São Jorge', 1, 1, 2, 'Rua Aprigio Guimaraes', 840, 'Sancho', 1, 81, '34555781');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170450', 'Escola São Miguel', 1, 1, 2, 'Rua Felipe Guerra', 718, 'Varzea', 1, 81, '985003770');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26252600', 'Escola São Vicente de Paulo', 1, 1, 2, 'Rua Florestopolis', 300, 'Água Fria', 1, 81, '985450662');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26445727', 'Escola Silva Oliveira', 1, 1, 2, 'Ladeira do Bartolomeu', 12, 'Morro da Conceicao', 1, 81, '32687883');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187655', 'Escola Sonho Real Me', 1, 1, 2, 'Avenida Engenheiro Abdias de Carvalho', 2990, 'Torroes', 1, 81, '999649117');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120224', 'Escola Souza Veras', 1, 1, 2, 'Rua Governador Lopo Garro', 875, 'Engenho do Meio', 1, 81, '32713049');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181150', 'Escola Souza Veras Anexo I', 1, 1, 2, 'Rua Governador Lopo Garro', 309, 'Engenho do Meio', 1, 81, '32713049');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191415', 'Escola Studio da Criança', 1, 1, 2, 'R Antonio Pedro de Figueiredo', 172, 'Boa Viagem', 1, 81, '33142940');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26491761', 'Escola Sua Majestade', 1, 1, 2, 'Rua Paes Cabral', 710, 'Cordeiro', 1, 81, '32283588');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189038', 'Escola Tecnica de Saude do Real Hospital Portugues', 1, 1, 2, 'Rua Imperador Dom Pedro Ii', 310, 'Santo Antonio', 1, 81, '34168080');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26162199', 'Escola Tecnica Leiaut Carielo', 1, 1, 2, 'Rua Joaquim Felipe', 119, 'Soledade', 1, 81, '30815552');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26117711', 'Escola Tecnica Senai Santo Amaro', 1, 1, 2, 'Avenida Norte Miguel Arraes de Alencar', 539, 'Santo Amaro', 1, 81, '32025121');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178060', 'Escola Tempo de Crescer', 1, 1, 2, 'Rua Engenho Duas Barras', 15, 'Cohab', 1, 81, '34751823');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178150', 'Escola Tereza Galdino', 1, 1, 2, 'Rua Turiacu', 572, 'Afogados', 1, 81, '34284522');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173352', 'Escola Tia Marina', 1, 1, 2, 'Avenida Piracicaba', 710, 'Jardim Sao Paulo', 1, 81, '32546877');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128616', 'Escola Tom e Jerry', 1, 1, 2, 'Rua Fernando da Veiga Pessoa', 123, 'Fundao', 1, 81, '34441803');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26230607', 'Escola Tradicional do Recife', 1, 1, 2, 'Rua Maria Goncalves', NULL, 'Mangabeira', 1, 81, '32657313');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167034', 'Escola Uniao Comunitaria', 1, 1, 2, 'Estrada dos Macacos', 34, 'Guabiraba', 1, 81, '33043089');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189445', 'Escola Unidade', 1, 1, 2, 'Rua Davino Pontual', 59, 'Madalena', 1, 81, '31328369');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189453', 'Escola Unidade - Berçário', 1, 1, 2, 'Rua Costa Gomes', 98, 'Madalena', 1, 81, '32270122');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181142', 'Escola Universo da Criança', 1, 1, 2, 'Rua Teixeira de Freitas', 63, 'Varzea', 1, 81, '87683195');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125277', 'Escola Universo Infantil', 1, 1, 2, 'Rua Engenho Cana Brava', 21, 'Cohab', 1, 81, '986611485');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26146703', 'Escola Viana', 1, 1, 2, 'Rua Jordao', 123, 'Torroes', 1, 81, '34463179');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26182777', 'Escola Vila Aprendiz', 1, 1, 2, 'Rua Arnaud de Holanda', NULL, 'Boa Viagem', 1, 81, '30914222');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26140870', 'Escola Vila Sezamo', 1, 1, 2, 'Rua Murici', 46, 'Casa Amarela', 1, 81, '32688104');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26530759', 'Escola Virgem de Fatima', 1, 1, 2, 'Rua Celia', 272, 'Mustardinha', 1, 81, '997993344');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26175940', 'Escola Visao Atual', 1, 1, 2, 'Rua Uriel de Holanda', 1274, 'Linha do Tiro', 1, 81, '33527595');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128624', 'Escola Vitor Meireles', 1, 1, 2, 'Rua das Mocas', 1594, 'Água Fria', 1, 81, '34344147');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26230615', 'Escola Waldorf Recife', 1, 1, 2, 'Estrada Real do Poco', 191, 'Poco da Panela', 1, 81, '34410703');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26457741', 'Escolinha Arte e Manha', 1, 1, 2, 'Rua Magnolia', 120, 'Barro', 1, 81, '988466459');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26468719', 'Escolinha da Elba', 1, 1, 2, 'Rua Artur Licio', 257, 'Pina', 1, 81, '30611234');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26494779', 'Escolinha do Gury', 1, 1, 2, 'Rua Marques de Monte Belo', 118, 'Dois Unidos', 1, 81, '988458728');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181681', 'Escolinha Lapis Na Mao', 1, 1, 2, 'Rua Tres de Agosto', 454, 'Afogados', 1, 81, '34480312');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26159724', 'Escolinha Menina Flor', 1, 1, 2, 'Rua Luiz Cesario de Melo', 362, 'Vasco da Gama', 1, 81, '987425192');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26485729', 'Escolinha Raio de Sol', 1, 1, 2, 'Rua Ator Elpidio Camara', 170, 'Jardim Sao Paulo', 1, 81, '32516062');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26123061', 'Escolinha Tia Carminha', 1, 1, 2, 'Vila Nossa Senhora de Lourdes', 84, 'Jiquia', 1, 81, '34554303');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26185644', 'Eso Centro Educacional', 1, 1, 2, 'Corrego do Bartolomeu', 532, 'Morro da Conceicao', 1, 81, '32687883');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26188481', 'Espaço Cata-vento', 1, 1, 2, 'Avenida Conselheiro Rosa e Silva', 315, 'Gracas', 1, 81, '998730234');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143607', 'Espaço Cultural Ariano Suassuna Centro Educacacional', 1, 1, 2, 'Rua Rodrigues Sete', 15, 'Casa Amarela', 1, 81, '32680343');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187400', 'Exclusivo Colégio e Curso', 1, 1, 2, 'Rua Professor Bandeira', 211, 'Iputinga', 1, 81, '32274191');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26118181', 'Geracao Colégio e Curso', 1, 1, 2, 'Rua Deputado Cunha Rabelo', 1235, 'Varzea', 1, 81, '34532114');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152630', 'Gge Vestibulares', 1, 1, 2, 'Rua Benfica', 286314, 'Madalena', 1, 81, '32271000');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26153521', 'Grupo de Maes do Ipsep - Creche Brasil', 1, 1, 2, 'Rua Blumenau', 623, 'Ipsep', 1, 81, '32228574');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26152819', 'Grupo Educ do Recife Anglo Lider', 1, 1, 2, 'Rua Camilo Colier', 136, 'Cordeiro', 1, 81, '34451144');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120801', 'Grupo Universitario Reabilitacao Infantil', 1, 1, 2, 'Rua Bom Gosto', 36, 'Afogados', 1, 81, '34471765');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186942', 'Hotelzinho Pinguinhos de Amor', 1, 1, 2, 'Estrada Velha de Agua Fria', 1729, 'Água Fria', 1, 81, '983690466');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170400', 'Inst Esp Semead da Fe Creche Morada da Felicidade', 1, 1, 2, 'Rua Rego Monteiro', 90, 'Iputinga', 1, 81, '30770270');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26519712', 'Instituto Alcance', 1, 1, 2, 'Rua Rosario do Oeste', NULL, 'Ibura', 1, 81, '30618073');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26435713', 'Instituto Ayllton Santos', 1, 1, 2, 'Avenida Beberibe', 4628, 'Água Fria', 1, 81, '34490496');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26528754', 'Instituto Caca Talentos', 1, 1, 2, 'Rua Alto do Eucalipto', 733, 'Vasco da Gama', 1, 81, '34429313');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122332', 'Instituto Capibaribe', 1, 1, 2, 'Rua das Gracas', 51, 'Gracas', 1, 81, '32214950');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139847', 'Instituto Catarina Rosa', 1, 1, 2, 'Avenida Hildebrando de Vasconcelos', 508, 'Beberibe', 1, 81, '984041494');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26506718', 'Instituto Cristao', 1, 1, 2, 'Rua Rubineia', 38, 'Ibura', 1, 81, '995378031');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192500', 'Instituto de Desenvolvimento Social e Cultural - Idesc', 1, 1, 2, 'Rua Rio Oiapoque', 338, 'Areias', 1, 81, '986104677');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127938', 'Instituto Educacional Alexandre Barros', 1, 1, 2, 'Rua Sorocaba', 233, 'Cordeiro', 1, 81, '32289008');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120917', 'Instituto Educacional João de Deus', 1, 1, 2, 'Rua Bonito', 254, 'Mangueira', 1, 81, '34223610');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26143534', 'Instituto Educacional Lira', 1, 1, 2, 'Rua Madre Linch', 1256, 'Macaxeira', 1, 81, '32991977');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26512742', 'Instituto Educacional Maria da Conceicao', 1, 1, 2, 'Rua Albacora', 333, 'Brasilia Teimosa', 1, 81, '985119855');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156741', 'Instituto Educacional Naara Franca', 1, 1, 2, 'Rua Corrego do Euclides', 433, 'Alto José Bonifácio', 1, 81, '983255082');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127903', 'Instituto Educacional Pedro Herminio', 1, 1, 2, 'Rua Ocidental', 560, 'Cordeiro', 1, 81, '32741055');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186691', 'Instituto Educacional Saber Viver- Unidade Ii', 1, 1, 2, 'Avenida Joao de Barros', 1545, 'Espinheiro', 1, 81, '32410289');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26513722', 'Instituto Educacional Sandra Meiry', 1, 1, 2, 'Rua Professora Maria dos Anjos Manta', 45, 'Dois Unidos', 1, 81, NULL);
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120925', 'Instituto Educacional São Sebastiao', 1, 1, 2, 'Rua Manoel Vieira', 53, 'San Martin', 1, 81, '88847029');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26173336', 'Instituto Escolar Edite Maria', 1, 1, 2, 'Rua Professor Jose Joaquim de Almeida', 30, 'Torroes', 1, 81, '30744623');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26134608', 'Instituto Escolar Marlene Almeida', 1, 1, 2, 'Rua Luiz da Camara Cascudo', 294, 'Torroes', 1, 81, '34542579');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170531', 'Instituto Espaço Criativo', 1, 1, 2, 'Rua Conselheiro Barros Barreto', 192, 'Porto da Madeira', 1, 81, '34492109');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26178311', 'Instituto Evangelico Renascer', 1, 1, 2, 'Avenida Vereador Otacilio Azevedo', 1115, 'Vasco da Gama', 1, 81, '84026362');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26140837', 'Instituto Fabiana', 1, 1, 2, 'Rua Corrego do Deodato', 104, 'Água Fria', 1, 81, '995293147');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26218208', 'Instituto Genesis', 1, 1, 2, 'Avenida Vereador Otacilio Azevedo', 366, 'Vasco da Gama', 1, 81, '32663849');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191962', 'Instituto Grande Ser', 1, 1, 2, 'Rua Timbiras', 31, 'Santo Amaro', 1, 81, '997515330');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127890', 'Instituto Helena Lubienska', 1, 1, 2, 'Rua Paraguassu', 255, 'Zumbi', 1, 81, '33121444');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26482720', 'Instituto Infantil Lapis Na Mao', 1, 1, 2, 'Rua Santa Tereza', 15, 'Brejo da Guabiraba', 1, 81, '32663380');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125447', 'Instituto Ivone Vanderley', 1, 1, 2, 'Rua Brazopolis', 122, 'Brasilia Teimosa', 1, 81, '33251826');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128870', 'Instituto Jesus de Nazare', 1, 1, 2, 'Rua Sabia', 67, 'Passarinho', 1, 81, '34517504');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26133652', 'Instituto Joana de Oliveira', 1, 1, 2, 'Rua Doze de Julho', 150, 'Pina', 1, 81, '33274751');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124033', 'Instituto João Batista', 1, 1, 2, 'Rua Guaraci', 149, 'Cacote', 1, 81, '32516158');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26494736', 'Instituto Kayros', 1, 1, 2, 'Rua Horacio Silva', 263, 'Alto José do Pinho', 1, 81, '985802531');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26157543', 'Instituto Marcos Paulo', 1, 1, 2, 'Rua Itanhandu', 56, 'Brejo da Guabiraba', 1, 81, '986606559');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26148986', 'Instituto Maria Fernandes', 1, 1, 2, 'Rua Expedicionario Joao Maria', 33, 'Dois Unidos', 1, 81, '985054608');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192543', 'Instituto Nossa Senhora Aparecida', 1, 1, 2, 'Rua Diogo de Vasconcelos', 410, 'Varzea', 1, 81, '987591379');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139782', 'Instituto Nossa Senhora de Fatima', 1, 1, 2, 'Rua Marques de Baipendi', 674, 'Campo Grande', 1, 81, '32223303');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128837', 'Instituto Nossa Senhora de Lourdes', 1, 1, 2, 'Avenida Sebastiao Salazar', 561, 'Cajueiro', 1, 81, '34445336');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26124017', 'Instituto Nossa Senhora do Carmo', 1, 1, 2, 'Rua Italacy', 86, 'Jardim Sao Paulo', 1, 81, '34555079');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122359', 'Instituto Profis Maria Auxiliadora', 1, 1, 2, 'Rua Rua Joaquim Nabuco', 237, 'Derby', 1, 81, '32224097');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139685', 'Instituto Raquel de Queiroz', 1, 1, 2, 'Rua Mandacaru', 316, 'Alto do Mandu', 1, 81, '34411032');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26166690', 'Instituto Renascer', 1, 1, 2, 'Avenida Anibal Benevolo', 1876, 'Água Fria', 1, 81, '34430275');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26125820', 'Instituto Santa Cruz', 1, 1, 2, 'Estrada das Ubaias', 596, 'Casa Forte', 1, 81, '32688039');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120968', 'Instituto Santa Maria Mazzarello', 1, 1, 2, 'Avenida Afonso Olindense', 1553, 'Varzea', 1, 81, '32710825');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26120879', 'Instituto Santa Rita de Cassia', 1, 1, 2, 'Rua Rio Chuy', 115, 'Ibura', 1, 81, '33390569');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26121182', 'Instituto Santa Terezinha', 1, 1, 2, 'Rua Pereira Coutinho Filho', 751, 'Iputinga', 1, 81, '32720607');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26127970', 'Instituto São João Batista', 1, 1, 2, 'Rua Equador', 301, 'San Martin', 1, 81, '988211397');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26139820', 'Instituto São Marcos', 1, 1, 2, 'Rua Sodrelandia', 1093, 'Alto Santa Terezinha', 1, 81, '34441712');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26172852', 'Invest Centro Educacional', 1, 1, 2, 'Avenida Beberibe', 3607, 'Porto da Madeira', 1, 81, '34430185');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26181703', 'Invest Educação Infantil', 1, 1, 2, 'Avenida Beberibe', 3494, 'Porto da Madeira', 1, 81, '34430185');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26128845', 'Invest Ensino Fundamental', 1, 1, 2, 'Avenida Beberibe', 3604, 'Porto da Madeira', 1, 81, '34430185');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26156202', 'Md Educacional- Colégio Madre de Deus Unidade Ii', 1, 1, 2, 'Rua Joao Cardoso Aires', 705, 'Boa Viagem', 1, 81, '33411747');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187086', 'Mima Nenem Berçário e Educação Infantil', 1, 1, 2, 'Rua Carlos Gomes', 669, 'Prado', 1, 81, '92752622');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170469', 'Nip - Escola de Educação Aplicada', 1, 1, 2, 'Rua Fernando Griz', NULL, 'Areias', 1, 81, '992467384');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189410', 'Nosso Ninho Educação Infantil', 1, 1, 2, 'Rua Pio Ix', 301, 'Madalena', 1, 81, '986965841');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189046', 'Prime Enfant Centro de Desenvolvimento Infantil', 1, 1, 2, 'Rua Ana Camelo da Silva', 105, 'Boa Viagem', 1, 81, '31290303');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192489', 'Projeto Social Maria Amelia', 1, 1, 2, 'Rua Guaraciaba', 163, 'Cohab', 1, 81, '999071001');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192497', 'Ra Associação de Apoio e Desenvolvimento de Novas Tecnologias Aos Transportes', 1, 1, 2, 'Rua Costa Honorato', 72, 'Areias', 1, 81, '991149012');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26190443', 'Red House International School', 1, 1, 2, 'Rua Confederacao do Equador', 77, 'Gracas', 1, 81, '20117777');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186683', 'Rn Centro Educacional', 1, 1, 2, 'Rua do Espinheiro', 854, 'Espinheiro', 1, 81, '32410289');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26179628', 'Saberes Centro Educacional', 1, 1, 2, 'Avenida Visconde de Suassuna', 475, 'Santo Amaro', 1, 81, '33145255');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26154030', 'Santos e Lopes Ensino Fundamental -', 1, 1, 2, 'Rua Mauriceia', 222, 'Iputinga', 1, 81, '34538002');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26160340', 'Senai Centro de Formacao Profissional Joseph Turton Junior', 1, 1, 2, 'Avenida Doutor Jose Rufino', 1099, 'Areias', 1, 81, '32020666');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122030', 'Serviço Nacional de Aprendizagem Comercial', 1, 1, 2, 'Avenida Visconde de Suassuna', 500, 'Santo Amaro', 1, 81, '34136666');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26170477', 'Serviço Social do Comércio Sesc Casa Amarela', 1, 1, 2, 'Avenida Norte Miguel Arraes de Alencar', 4490, 'Mangabeira', 1, 81, '32674418');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26162075', 'Serviço Social do Comércio Sesc Santo Amaro', 1, 1, 2, 'Rua Treze de Maio', 455, 'Santo Amaro', 1, 81, '32161709');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168154', 'Sesi Ibura', 1, 1, 2, 'Avenida Ministro Oliveira Salazar', 228, 'Ibura', 1, 81, '988770893');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26167115', 'Sesi Vasco da Gama', 1, 1, 2, 'Rua Vasco da Gama', 145, 'Vasco da Gama', 1, 81, '32657065');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26191601', 'Shalom Centro Educacional', 1, 1, 2, 'Rua Maraial', 69, 'Morro da Conceicao', 1, 81, '31792307');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26168014', 'Soc Beneficente Mista 12 de Outubro', 1, 1, 2, 'Rua Abel Manuel do Nascimento', 63, 'Areias', 1, 81, '973119043');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122367', 'Sociedade de Orientacao Psicopedagogica', 1, 1, 2, 'Rua Abelardo', 131, 'Gracas', 1, 81, '34270388');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26187671', 'Sociedade Educacional Geracao Vitoria', 1, 1, 2, 'Rua Hermogenes de Morais', 149, 'Madalena', 1, 81, '34453177');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26186055', 'Talentinho Creche e Pre Escola Me', 1, 1, 2, 'Rua Gomes Taborda', 1691, 'Cordeiro', 1, 81, '34452868');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26180804', 'Universidade Infantil', 1, 1, 2, 'Rua Mariapolis', 218, 'Afogados', 1, 81, '34480848');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26189500', 'Vila Mais Ensino Fundamental', 1, 1, 2, 'Rua Waldemar Nery Carneiro Monteiro', 486, 'Boa Viagem', 1, 81, '31276009');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26122200', 'W D Centro Educacional', 1, 1, 2, 'Rua Gervasio Fioravante', 123, 'Gracas', 1, 81, '32221506');
        INSERT INTO public.school (id, name, city_id, school_state_id, school_type_id, address, address_number, district, region_id, ddd, phone)
        VALUES
        ('26192136', 'Zoe Centro Educacional', 1, 1, 2, 'Rua Paulo Setubal', 79, 'Pina', 1, 81, '999966001');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM public.school WHERE "school_type_id" = 2;
    `);
  }
}
