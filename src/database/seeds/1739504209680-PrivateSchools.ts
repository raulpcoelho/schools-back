import { MigrationInterface, QueryRunner } from 'typeorm';

export class PrivateSchools1739504209680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128829', '90 Graus Colégio e Curso', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 3878, 'Porto da Madeira', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124106', 'Academia Crista de Boa Viagem', 'Recife', 'PE', 'Privada', 'Avenida Visconde de Jequitinhonha', 355, 'Boa Viagem', 'Nordeste', 81, '33125000');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184028', 'Academia Crista de Boa Viagem - Unidade Ii', 'Recife', 'PE', 'Privada', 'Avenida Helio Falcao', 139, 'Boa Viagem', 'Nordeste', 81, '33125022');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156105', 'Alice Mendonca', 'Recife', 'PE', 'Privada', 'Rua Serafina Carneiro', 46, 'Torroes', 'Nordeste', 81, '32230061');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190257', 'Alphatec', 'Recife', 'PE', 'Privada', 'Rua Gervasio Pires', 826, 'Santo Amaro', 'Nordeste', 81, '30714279');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26496720', 'Anjos Baby', 'Recife', 'PE', 'Privada', 'Rua Rui Duarte', 141, 'Varzea', 'Nordeste', 81, '34540906');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139588', 'Annaic de Mendonca Travassos Me', 'Recife', 'PE', 'Privada', 'Rua Padre Dias Martins, 201', NULL, 'Zumbi', 'Nordeste', 81, '34451253');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117584', 'Apoio Grupo de Asses Educac e Pedagogica', 'Recife', 'PE', 'Privada', 'Rua Conselheiro Nabuco', 44, 'Casa Amarela', 'Nordeste', 81, '34415015');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26464730', 'Arte Vida Escola Crista de Boa Viagem', 'Recife', 'PE', 'Privada', 'Rua Doutor Luiz Correa de Oliveira', NULL, 'Imbiribeira', 'Nordeste', 81, '32232163');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192691', 'Associação Centro Educacional Magno Delamadri', 'Recife', 'PE', 'Privada', 'Rua Espinosa', 361, 'Linha do Tiro', 'Nordeste', 81, '32994996');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192470', 'Associação Construindo A Cidadania Projeto Amor e Esperanca', 'Recife', 'PE', 'Privada', 'Rua Arapoema', 35, 'Brejo de Beberibe', 'Nordeste', 81, '999302643');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178273', 'Associação de Moradores Bolo de Noiva', 'Recife', 'PE', 'Privada', 'Rua Sao Bento', 410, 'Macaxeira', 'Nordeste', 81, '999070006');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163403', 'Associação de Mulheres de Beirinha', 'Recife', 'PE', 'Privada', '1ª Travessa dos Prazeres', 244, 'Areias', 'Nordeste', 81, '997736083');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147513', 'Associação Educ e Cultural Arco-iris', 'Recife', 'PE', 'Privada', 'Rua Mendes Martins', 92, 'Varzea', 'Nordeste', 81, '32712485');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192705', 'Associação Pai e Filhos do Saber', 'Recife', 'PE', 'Privada', 'Rua Corrego da Areia', 1012, 'Nova Descoberta', 'Nordeste', 81, '987690792');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192535', 'Associação Pro Ternura - Instituto Ternura', 'Recife', 'PE', 'Privada', 'Rua da Amizade', 102, 'Brejo de Beberibe', 'Nordeste', 81, '989085667');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132176', 'Atitude Nucleo de Formacao Profissional', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 621, 'Encruzilhada', 'Nordeste', 81, '32410484');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143658', 'Babymel e Escolas', 'Recife', 'PE', 'Privada', 'Rua Virginia Loreto', 123, 'Parnamirim', 'Nordeste', 81, '34419099');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167980', 'C de Educação Comunitaria Gabriela Feliz', 'Recife', 'PE', 'Privada', 'Rua Doutor Antonio Hermenegildo de Castro Neto', 23, 'Caxanga', 'Nordeste', 81, '34534797');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156067', 'Centro Comun Semente de Um Novo Mundo', 'Recife', 'PE', 'Privada', 'Rua Nossa Senhora da Penha', 179, 'Torroes', 'Nordeste', 81, '34467123');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125595', 'Centro de Cultura Infantil Reino Mágico', 'Recife', 'PE', 'Privada', 'Estrada do Arraial', 2949, 'Tamarineira', 'Nordeste', 81, '32681426');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117673', 'Centro de Desenvolvimento da Criança', 'Recife', 'PE', 'Privada', 'Rua Ademar Pires Travassos', 278, 'Iputinga', 'Nordeste', 81, '34539283');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191008', 'Centro de Desenvolvimento Infantil Avancado', 'Recife', 'PE', 'Privada', 'Rua Barauna', 71, 'Alto do Mandu', 'Nordeste', 81, '34416004');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186659', 'Centro de Educação Crescer', 'Recife', 'PE', 'Privada', 'Rua Salvador de Sa', 475, 'Rosarinho', 'Nordeste', 81, '30872614');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26361612', 'Centro de Educação Infantil Carochinha', 'Recife', 'PE', 'Privada', 'Rua do Chacon', 248, 'Poco', 'Nordeste', 81, '32686501');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184621', 'Centro de Educação Profissional - Cepro', 'Recife', 'PE', 'Privada', 'Rua Miguel Couto', 44, 'Boa Vista', 'Nordeste', 81, '32310800');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192632', 'Centro de Educação Profissional Mediotec', 'Recife', 'PE', 'Privada', 'Avenida Joao de Barros', 561, 'Boa Vista', 'Nordeste', 81, '34136650');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182858', 'Centro de Ensino Grau I Boa Vistai Boa Vista', 'Recife', 'PE', 'Privada', 'Avenida Conde da Boa Vista', 1209, 'Soledade', 'Nordeste', 81, '30373939');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185792', 'Centro de Ensino Grau Tecnico', 'Recife', 'PE', 'Privada', 'Av Marechal Mascarenhas de Moraes', 1062, 'Imbiribeira', 'Nordeste', 81, '30350010');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184141', 'Centro de Estudos da Saude Cesa', 'Recife', 'PE', 'Privada', 'Avenida Manoel Borba', 609, 'Boa Vista', 'Nordeste', 81, '30313393');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192527', 'Centro de Progressao Nossa Senhora Aparecida', 'Recife', 'PE', 'Privada', 'Rua Ipiniras', 160, 'Cordeiro', 'Nordeste', 81, '999923778');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123754', 'Centro Educ Olavo Bilac', 'Recife', 'PE', 'Privada', 'Rua Rosario de Minas', 30, 'Coqueiral', 'Nordeste', 81, '34555127');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128063', 'Centro Educacional Ana Nery', 'Recife', 'PE', 'Privada', 'Rua Ana Mauricia Wanderley', 156, 'Arruda', 'Nordeste', 81, '34434539');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117797', 'Centro Educacional Antonio Galdino', 'Recife', 'PE', 'Privada', 'Rua Fernando Tomaz da Silva', 66, 'Ibura', 'Nordeste', 81, '31283095');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189402', 'Centro Educacional Bem Me Quer', 'Recife', 'PE', 'Privada', 'Rua Pero Vaz de Caminha', 72, 'Cohab', 'Nordeste', 81, '31326435');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152681', 'Centro Educacional Bernardo Lucas', 'Recife', 'PE', 'Privada', 'Rua Aprigio Guimaraes', 862, 'Sancho', 'Nordeste', 81, '32523899');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26136430', 'Centro Educacional Castelo Infantil', 'Recife', 'PE', 'Privada', 'Rua Antonio Borges Uchoa', 596, 'Engenho do Meio', 'Nordeste', 81, '32719015');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185130', 'Centro Educacional Cavalcanti Heissler', 'Recife', 'PE', 'Privada', 'Rua Adelmar Tavares', 25, 'Cordeiro', 'Nordeste', 81, '34450103');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26164388', 'Centro Educacional Comunitario Redencao', 'Recife', 'PE', 'Privada', 'Rua Joao Praxedes de Oliveira Filho', 25, 'Campina do Barreto', 'Nordeste', 81, '973323212');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157420', 'Centro Educacional Creative', 'Recife', 'PE', 'Privada', 'Rua Anapolis', 387, 'Tejipio', 'Nordeste', 81, '987043846');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192268', 'Centro Educacional Creche Vovo Rosa', 'Recife', 'PE', 'Privada', 'Rua Doutor Gustavo Pinto', 480, 'Jardim Sao Paulo', 'Nordeste', 81, '981331437');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175908', 'Centro Educacional Cristo Salva', 'Recife', 'PE', 'Privada', 'Rua Rio', 370, 'Água Fria', 'Nordeste', 81, '988980554');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120534', 'Centro Educacional da Criança', 'Recife', 'PE', 'Privada', 'Rua Major Rubens Vaz', 178, 'Varzea', 'Nordeste', 81, '995325172');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26497719', 'Centro Educacional da Iputinga', 'Recife', 'PE', 'Privada', 'Rua Henrique Milet', 166, 'Iputinga', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143097', 'Centro Educacional Desenvolvimento', 'Recife', 'PE', 'Privada', 'Rua Alto da Loira', 20, 'Brejo da Guabiraba', 'Nordeste', 81, '985897584');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188635', 'Centro Educacional Emanuel', 'Recife', 'PE', 'Privada', 'Rua Professor Mario Neves Baptista', 26, 'Ibura', 'Nordeste', 81, '985442721');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147424', 'Centro Educacional Francisco de Assis', 'Recife', 'PE', 'Privada', 'Rua Piassabussu', 252, 'Cohab', 'Nordeste', 81, '985303716');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185148', 'Centro Educacional Gouveia de Melo', 'Recife', 'PE', 'Privada', 'Rua Adelmar Tavares', 25, 'Cordeiro', 'Nordeste', 81, '30482121');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176602', 'Centro Educacional Infancia Feliz', 'Recife', 'PE', 'Privada', 'Rua Estrela do Mar', 356, 'Brasilia Teimosa', 'Nordeste', 81, '34666655');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120429', 'Centro Educacional João Brito', 'Recife', 'PE', 'Privada', 'Rua Ana Carneiro Dalbuquerque', 288, 'Toto', 'Nordeste', 81, '32514512');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163730', 'Centro Educacional Miriam Imelda', 'Recife', 'PE', 'Privada', 'Rua Aureliano Leal', 79, 'Dois Unidos', 'Nordeste', 81, '34412066');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133776', 'Centro Educacional Monte Sinai', 'Recife', 'PE', 'Privada', 'Rua Odilon Araujo', 241, 'Iputinga', 'Nordeste', 81, '34536662');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156733', 'Centro Educacional Mundo Infantil do Chie', 'Recife', 'PE', 'Privada', 'Rua Continental', 126126, 'Campo Grande', 'Nordeste', 81, '992156261');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173387', 'Centro Educacional Nossa Senhora Auxiliadora', 'Recife', 'PE', 'Privada', 'Rua Catume', 108, 'Bongi', 'Nordeste', 81, '982903401');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190931', 'Centro Educacional Pequeno Pesquisador', 'Recife', 'PE', 'Privada', 'Rua Satiro Dias', 99, 'Ibura', 'Nordeste', 81, '30404261');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26180197', 'Centro Educacional Saber Viver', 'Recife', 'PE', 'Privada', 'Rua do Espinheiro', 836, 'Espinheiro', 'Nordeste', 81, '32410289');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26132540', 'Centro Educacional Shalon', 'Recife', 'PE', 'Privada', 'Rua Murilo Menezes Lira', 357, 'Varzea', 'Nordeste', 81, '32714065');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26160196', 'Centro Educacional Social e Cultural', 'Recife', 'PE', 'Privada', 'Rua Coripos', 323, 'Coqueiral', 'Nordeste', 81, '32543116');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117827', 'Centro Educacional Tiradentes', 'Recife', 'PE', 'Privada', 'Rua Engenho Matapagipe', 70, 'Cohab', 'Nordeste', 81, '30394075');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189496', 'Centro Educacional Upgrade', 'Recife', 'PE', 'Privada', 'Rua Tenente Wanderley', 421, 'Cajueiro', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125765', 'Centro Escolar Carochinha', 'Recife', 'PE', 'Privada', 'Rua do Chacon', 245, 'Poco', 'Nordeste', 81, '32686501');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167107', 'Centro Profissionalizante de Saude Irma Dulce', 'Recife', 'PE', 'Privada', 'Avenida Visconde de Suassuna', 705, 'Santo Amaro', 'Nordeste', 81, '32217209');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26154021', 'Centro Social Guararapes', 'Recife', 'PE', 'Privada', 'Avenida Dona Alice Montenegro Lessa', 115, 'Jordao Baixo', 'Nordeste', 81, '996725201');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183692', 'Centro Universitario Mauricio de Nassau - Bloco B - Campus - Fac Mauricio de Nassau - Campus Recife', 'Recife', 'PE', 'Privada', 'Rua Guilherme Pinto', 114, 'Gracas', 'Nordeste', 81, '88941763');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26180200', 'Cfi-colegio de Formacao Integral', 'Recife', 'PE', 'Privada', 'Avenida Caxanga', 460, 'Madalena', 'Nordeste', 81, '32269499');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192519', 'Clube de Maes dos Moradores do Alto do Refugio', 'Recife', 'PE', 'Privada', 'Rua Alto do Refugio', 468, 'Nova Descoberta', 'Nordeste', 81, '32995505');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167913', 'Clube de Maes Futuro do Amanha de San Martin', 'Recife', 'PE', 'Privada', 'Rua Doutor Jose Ramos de Vasconcelos', 3, 'San Martin', 'Nordeste', 81, '32046860');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26528711', 'Colégio 17 de Agosto', 'Recife', 'PE', 'Privada', 'Rua do Chacon', 245, 'Poco', 'Nordeste', 81, '32680583');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26205602', 'Colégio 2001', 'Recife', 'PE', 'Privada', 'Rua Vitoriano Ebla', 49, 'Jardim Sao Paulo', 'Nordeste', 81, '32495170');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121379', 'Colégio 2001', 'Recife', 'PE', 'Privada', 'Rua do Riachuelo', 403, 'Boa Vista', 'Nordeste', 81, '34234533');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128853', 'Colégio Adventista do Arruda', 'Recife', 'PE', 'Privada', 'Rua Zeferino Agra', 268, 'Água Fria', 'Nordeste', 81, '32017730');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121328', 'Colégio Adventista do Recife', 'Recife', 'PE', 'Privada', 'Rua Gervasio Pires', 700, 'Boa Vista', 'Nordeste', 81, '34214225');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26145103', 'Colégio Albert Sabin', 'Recife', 'PE', 'Privada', 'Travessa Inacio Monteiro', 295, 'Cordeiro', 'Nordeste', 81, '30976661');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173310', 'Colégio Alfama', 'Recife', 'PE', 'Privada', 'Avenida Visconde de Albuquerque', 175, 'Madalena', 'Nordeste', 81, '37872955');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121506', 'Colégio Americano Batista', 'Recife', 'PE', 'Privada', 'Rua Dom Bosco', 1308, 'Boa Vista', 'Nordeste', 81, '21225599');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117975', 'Colégio Anchieta', 'Recife', 'PE', 'Privada', 'Rua Ernesto de Paula Santos', 607, 'Boa Viagem', 'Nordeste', 81, '34663830');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26180863', 'Colégio Anglo Lider', 'Recife', 'PE', 'Privada', 'Rua Visconde de Abaete', 200, 'Tamarineira', 'Nordeste', 81, '33048400');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26419718', 'Colégio Anglo Lider Junior', 'Recife', 'PE', 'Privada', 'Rua Paes Cabral', 289, 'Cordeiro', 'Nordeste', 81, '32273099');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26110504', 'Colégio Ascenso Ferreira', 'Recife', 'PE', 'Privada', 'Avenida Armindo Moura', 263, 'Boa Viagem', 'Nordeste', 81, '33413994');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125404', 'Colégio Avance', 'Recife', 'PE', 'Privada', 'Rua Rio Maju', 130, 'Ipsep', 'Nordeste', 81, '34715740');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117991', 'Colégio Boa Viagem', 'Recife', 'PE', 'Privada', 'Rua Professor Eduardo Wanderley Filho', 539, 'Boa Viagem', 'Nordeste', 81, '34654444');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188260', 'Colégio Brasileirinho', 'Recife', 'PE', 'Privada', 'Avenida Avenida Inacio Monteiro', 1153, 'Torroes', 'Nordeste', 81, '32261952');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183196', 'Colégio Brilho de Jesus', 'Recife', 'PE', 'Privada', 'Avenida Hildebrando de Vasconcelos', 2208, 'Dois Unidos', 'Nordeste', 81, '33528355');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188287', 'Colégio Brilho de Jesus', 'Recife', 'PE', 'Privada', 'Estrada do Caiara', 342, 'Iputinga', 'Nordeste', 81, '988332547');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133725', 'Colégio Capitao Moroni', 'Recife', 'PE', 'Privada', 'Rua Desembargador Fonseca Galvao', 93, 'Vasco da Gama', 'Nordeste', 81, '32693342');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187310', 'Colégio Carlos Murakami', 'Recife', 'PE', 'Privada', 'Estrada do Arraial', 3460, 'Casa Amarela', 'Nordeste', 81, '31280101');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166976', 'Colégio Casaforte', 'Recife', 'PE', 'Privada', 'Praca de Casa Forte', 548, 'Casa Forte', 'Nordeste', 81, '32681931');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187604', 'Colégio Cbv Jaqueira', 'Recife', 'PE', 'Privada', 'Rua Doutor Jose Maria', 1106, 'Tamarineira', 'Nordeste', 81, '34654444');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26534711', 'Colégio Cognitivo', 'Recife', 'PE', 'Privada', 'Rua de Sant Ana', 213, 'Santana', 'Nordeste', 81, '32690047');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189569', 'Colégio Cognitivo', 'Recife', 'PE', 'Privada', 'Avenida Antinio Torres Galvao', 283, 'Imbiribeira', 'Nordeste', 81, '32690047');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127580', 'Colégio Conhecer', 'Recife', 'PE', 'Privada', 'Rua Zezito Costa Rego', 130, 'Varzea', 'Nordeste', 81, '32710233');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147963', 'Colégio Cordeiro de Deus', 'Recife', 'PE', 'Privada', 'Avenida Engenho Muribara', 1733, 'Cohab', 'Nordeste', 81, '985949583');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153920', 'Colégio Cristao do Recife', 'Recife', 'PE', 'Privada', 'Rua Waldemar Nery Carneiro Monteiro', 101, 'Boa Viagem', 'Nordeste', 81, '33421832');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118149', 'Colégio da Imaculada Conceicao', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 2184, 'Barro', 'Nordeste', 81, '974014472');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122081', 'Colégio das Damas da Instrucao Crista', 'Recife', 'PE', 'Privada', 'Avenida Rui Barbosa', 1426, 'Gracas', 'Nordeste', 81, '31394500');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121514', 'Colégio de São José', 'Recife', 'PE', 'Privada', 'Avenida Conde da Boa Vista', 921, 'Boa Vista', 'Nordeste', 81, '34232810');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26526719', 'Colégio do Saber', 'Recife', 'PE', 'Privada', 'Rua Franklin Tavora', 159, 'Campo Grande', 'Nordeste', 81, '32421633');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192179', 'Colégio Dom', 'Recife', 'PE', 'Privada', 'Rua Jose Carvalheira', 391, 'Tamarineira', 'Nordeste', 81, '32236585');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127091', 'Colégio Dourado', 'Recife', 'PE', 'Privada', 'Avenida Vinte de Janeiro', 1245, 'Boa Viagem', 'Nordeste', 81, '33414800');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127750', 'Colégio Dulce de Souza Leao', 'Recife', 'PE', 'Privada', 'Rua Gregorio Junior', 261, 'Zumbi', 'Nordeste', 81, '40093888');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175339', 'Colégio e Curso Atitude', 'Recife', 'PE', 'Privada', 'Rua Doutor Tome Dias', 75, 'Casa Amarela', 'Nordeste', 81, '32691601');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187507', 'Colégio e Curso Desafio', 'Recife', 'PE', 'Privada', 'Rua Professor Antonio Coelho', 50, 'Varzea', 'Nordeste', 81, '32745010');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118211', 'Colégio e Curso Mickeylandia', 'Recife', 'PE', 'Privada', 'Rua Joana Francisca de Azevedo', 38, 'Mustardinha', 'Nordeste', 81, '30198294');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121190', 'Colégio e Curso Nossa Senhora do Carmo', 'Recife', 'PE', 'Privada', 'Rua Parintins', 32, 'Cohab', 'Nordeste', 81, '985621245');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178281', 'Colégio e Curso Raio de Sol', 'Recife', 'PE', 'Privada', 'Rua Presidente Costa e Silva', 292, 'Brejo da Guabiraba', 'Nordeste', 81, '998149347');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147386', 'Colégio e Curso Senhor do Bonfim', 'Recife', 'PE', 'Privada', 'Rua Tiuma', 26, 'Varzea', 'Nordeste', 81, '996028810');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123177', 'Colégio e Curso Vencer', 'Recife', 'PE', 'Privada', 'Rua Dom Jose Lopes', 871, 'Boa Viagem', 'Nordeste', 81, '33250923');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122219', 'Colégio Educacional Trajano', 'Recife', 'PE', 'Privada', 'Rua Salvador de Sa', 366, 'Rosarinho', 'Nordeste', 81, '30872614');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125625', 'Colégio Elo', 'Recife', 'PE', 'Privada', 'Rua Jose Paraiso', 189, 'Boa Viagem', 'Nordeste', 81, '31349494');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118165', 'Colégio Equipe', 'Recife', 'PE', 'Privada', 'Rua Demostenes de Olinda', 121, 'Madalena', 'Nordeste', 81, '34453255');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179016', 'Colégio Ethos', 'Recife', 'PE', 'Privada', 'Rua do Chacon', 184, 'Poco da Panela', 'Nordeste', 81, '32696969');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187914', 'Colégio Evolucao do Recife', 'Recife', 'PE', 'Privada', 'Rua Mandacaru', 554, 'Alto do Mandu', 'Nordeste', 81, '33016619');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188023', 'Colégio Exato', 'Recife', 'PE', 'Privada', 'Rua Padre Antonio Fernandes', 102, 'Cordeiro', 'Nordeste', 81, '30393344');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26197405', 'Colégio Eximius', 'Recife', 'PE', 'Privada', 'Rua de Sant Ana', 511, 'Casa Forte', 'Nordeste', 81, '32681554');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118378', 'Colégio Expor A Mente', 'Recife', 'PE', 'Privada', 'Rua Maria de Fatima Soares', 16, 'Iputinga', 'Nordeste', 81, '32641049');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184079', 'Colégio Expor A Mente Unidade Ii', 'Recife', 'PE', 'Privada', 'Rua Leal de Barros', 404, 'Iputinga', 'Nordeste', 81, '32721319');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181231', 'Colégio Fazer Crescer - Ensino Médio', 'Recife', 'PE', 'Privada', 'Rua Salvador de Sa', 475, 'Rosarinho', 'Nordeste', 81, '30872614');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148773', 'Colégio Fazer Crescer', 'Recife', 'PE', 'Privada', 'Avenida Santos Dumont', 1181, 'Rosarinho', 'Nordeste', 81, '30872614');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149087', 'Colégio Futuro', 'Recife', 'PE', 'Privada', 'Rua Riolandia', 70, 'Bomba do Hemeterio', 'Nordeste', 81, '34443873');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127105', 'Colégio Geracao Ativa', 'Recife', 'PE', 'Privada', 'Rua Gomes Taborda', 1826, 'Cordeiro', 'Nordeste', 81, '34452190');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163039', 'Colégio Gge', 'Recife', 'PE', 'Privada', 'Rua Jose da Silva Lucena', 18, 'Imbiribeira', 'Nordeste', 81, '32271000');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190451', 'Colégio Gge', 'Recife', 'PE', 'Privada', 'Rua Desembargador Gois Cavalcante', 460, 'Parnamirim', 'Nordeste', 81, '32271000');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173280', 'Colégio Grande Passo', 'Recife', 'PE', 'Privada', 'Rua Professor Aurelio de Castro Cavalcanti', 97, 'Boa Viagem', 'Nordeste', 81, '33415362');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26289601', 'Colégio Gremio Educativo', 'Recife', 'PE', 'Privada', 'Rua Engenho Pedra Lavada', 163, 'Cohab', 'Nordeste', 81, '30388337');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188627', 'Colégio Gremio Educativo - Unidade Ii', 'Recife', 'PE', 'Privada', 'Rua Engenho Duas Barras', 23, 'Ibura', 'Nordeste', 81, '30388337');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118190', 'Colégio Henrique Dias', 'Recife', 'PE', 'Privada', 'Rua Professor Jose Constantino da Silva', 205, 'Jordao', 'Nordeste', 81, '34629105');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122405', 'Colégio Imaculado Coracao de Maria', 'Recife', 'PE', 'Privada', 'Rua Doutor Machado', 379, 'Campo Grande', 'Nordeste', 81, '34264982');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178133', 'Colégio Incentivo', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 1545, 'Barro', 'Nordeste', 81, '41014012');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133199', 'Colégio Inovacao', 'Recife', 'PE', 'Privada', 'Rua Padre Lima e Sa', 407, 'Ipsep', 'Nordeste', 81, '34714300');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118041', 'Colégio Israelita Moyses Chvarts', 'Recife', 'PE', 'Privada', 'Rua Pio Ix', 792, 'Madalena', 'Nordeste', 81, '32270418');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122413', 'Colégio Jesus Crucificado', 'Recife', 'PE', 'Privada', 'Rua Odorico Mendes', 70, 'Campo Grande', 'Nordeste', 81, '32416330');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119889', 'Colégio João Paulo', 'Recife', 'PE', 'Privada', 'Rua Desembargador Evandro Netto', 27, 'Jordao Baixo', 'Nordeste', 81, '988276385');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153050', 'Colégio Logos', 'Recife', 'PE', 'Privada', 'Rua Zeferino Pinho', 507, 'Imbiribeira', 'Nordeste', 81, '33383030');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26172720', 'Colégio Madre de Deus Zona Norte', 'Recife', 'PE', 'Privada', 'Rua Sebastiao Alves', 73, 'Tamarineira', 'Nordeste', 81, '32044179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119269', 'Colégio Madre Teresa de Calcuta', 'Recife', 'PE', 'Privada', 'Rua da Linha', 339, 'Imbiribeira', 'Nordeste', 81, '37883174');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125137', 'Colégio Maria Emilia', 'Recife', 'PE', 'Privada', 'Rua Felix Pacheco', 262, 'Ipsep', 'Nordeste', 81, '33391746');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118270', 'Colégio Maria Tereza', 'Recife', 'PE', 'Privada', 'Rua Barao de Souza Leao', 1647, 'Imbiribeira', 'Nordeste', 81, '32011600');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122162', 'Colégio Marista São Luis', 'Recife', 'PE', 'Privada', 'Avenida Rui Barbosa', 1104, 'Gracas', 'Nordeste', 81, '40095355');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26507722', 'Colégio Meu Pequeno Mundo', 'Recife', 'PE', 'Privada', 'Rua Manuel Alves Deus Dara', 35, 'Engenho do Meio', 'Nordeste', 81, '30834874');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173085', 'Colégio Milenio', 'Recife', 'PE', 'Privada', 'Avenida Afonso Olindense', 620, 'Varzea', 'Nordeste', 81, '32720437');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122235', 'Colégio Modelo do Recife', 'Recife', 'PE', 'Privada', 'Rua Ramiz Galvao', 83, 'Arruda', 'Nordeste', 81, '30374815');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190800', 'Colégio Motivo', 'Recife', 'PE', 'Privada', 'Rua Tenente Manoel Barbosa', 35, 'Imbiribeira', 'Nordeste', 81, '21199777');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26160307', 'Colégio Motivo', 'Recife', 'PE', 'Privada', 'Rua Tenente Manoel Barbosa', 32, 'Imbiribeira', 'Nordeste', 81, '21199777');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125668', 'Colégio Motivo', 'Recife', 'PE', 'Privada', 'Avenida Dezessete de Agosto', 1872, 'Casa Forte', 'Nordeste', 81, '34416300');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143470', 'Colégio Movimento', 'Recife', 'PE', 'Privada', 'Rua Moema', 133, 'Água Fria', 'Nordeste', 81, '985339733');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26399636', 'Colégio Movimento Criativo', 'Recife', 'PE', 'Privada', 'Rua Barbara Heliodora', 325, 'Cohab-ibura-recife', 'Nordeste', 81, '34755290');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143330', 'Colégio Multiplo Ensino', 'Recife', 'PE', 'Privada', 'Avenida Guanabara', 99, 'Coqueiral', 'Nordeste', 81, '34558488');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122189', 'Colégio Nossa Sra de Lourdes', 'Recife', 'PE', 'Privada', 'Avenida Conselheiro Rosa e Silva', 1767, 'Tamarineira', 'Nordeste', 81, '34419396');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26478714', 'Colégio Novo Mundo', 'Recife', 'PE', 'Privada', 'Rua Guilherme de Araujo', 248, 'Prado', 'Nordeste', 81, '987780176');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26137631', 'Colégio Nucleo', 'Recife', 'PE', 'Privada', 'Avenida Rui Barbosa', 1680, 'Gracas', 'Nordeste', 81, '30341177');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187353', 'Colégio Nucleo - Boa Viagem', 'Recife', 'PE', 'Privada', 'Avenida Engenheiro Domingos Ferreira', 2142, 'Boa Viagem', 'Nordeste', 81, '31261177');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189259', 'Colégio Panda', 'Recife', 'PE', 'Privada', 'Rua Ana Mauricia Wanderley', 237, 'Arruda', 'Nordeste', 81, '34987223');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26162016', 'Colégio Pontual Centro Educacional', 'Recife', 'PE', 'Privada', 'Rua Marechal Manoel Luis Osorio', 495, 'Varzea', 'Nordeste', 81, '32714616');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122090', 'Colégio Presbiteriano Agnes Erskine', 'Recife', 'PE', 'Privada', 'Avenida Rui Barbosa', 704, 'Gracas', 'Nordeste', 81, '31316950');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26140802', 'Colégio Questao de Inteligencia', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 1744, 'Água Fria', 'Nordeste', 81, '34437176');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178419', 'Colégio Reino de Juda', 'Recife', 'PE', 'Privada', 'Rua Capitao Joao Roma', 26, 'Cordeiro', 'Nordeste', 81, '32283455');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121557', 'Colégio Renascer', 'Recife', 'PE', 'Privada', 'Rua Sao Goncalo', 51, 'Boa Vista', 'Nordeste', 81, '30389074');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170485', 'Colégio Saber Fazer Me', 'Recife', 'PE', 'Privada', 'Rua Guanambi', 86, 'Bomba do Hemeterio', 'Nordeste', 81, '34983540');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121484', 'Colégio Salesiano Sagrado Coracao', 'Recife', 'PE', 'Privada', 'Rua Dom Bosco', 551, 'Boa Vista', 'Nordeste', 81, '21295900');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122154', 'Colégio Santa Catarina', 'Recife', 'PE', 'Privada', 'Estrada do Arraial', 2740, 'Tamarineira', 'Nordeste', 81, '33341160');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181266', 'Colégio Santa Emilia', 'Recife', 'PE', 'Privada', 'Rua Adelmar Tavares', 25, 'Cordeiro', 'Nordeste', 81, '30482121');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170507', 'Colégio Santa Luisa de Marillac', 'Recife', 'PE', 'Privada', 'Rua Leonardo Bezerra Cavalcanti', 116, 'Parnamirim', 'Nordeste', 81, '33141771');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124220', 'Colégio Santa Maria', 'Recife', 'PE', 'Privada', 'Rua Padre Bernardino Pessoa', 512, 'Boa Viagem', 'Nordeste', 81, '34655133');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170337', 'Colégio Santa Teresa', 'Recife', 'PE', 'Privada', 'Rua Caichoeira', 403, 'Imbiribeira', 'Nordeste', 81, '992004823');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128039', 'Colégio São Jorge', 'Recife', 'PE', 'Privada', 'Rua dos Craveiros', 3, 'Campina do Barreto', 'Nordeste', 81, '34443173');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191865', 'Colégio São Placido', 'Recife', 'PE', 'Privada', 'Avenida Inacio Monteiro', 597, 'Cordeiro', 'Nordeste', 81, '999712305');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123746', 'Colégio Ser e Crescer', 'Recife', 'PE', 'Privada', 'Rua Capitao Gregorio de Albuquerque', 161, 'Areias', 'Nordeste', 81, '32514361');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181363', 'Colégio Tempo de Crescer', 'Recife', 'PE', 'Privada', 'Rua Engenho Nova Vila', 15, 'Cohab', 'Nordeste', 81, '34751823');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157527', 'Colégio Terceiro Milenio', 'Recife', 'PE', 'Privada', 'Rua Doutor Fernando Allain', 136, 'Espinheiro', 'Nordeste', 81, '32415583');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126508', 'Colégio Tres Marias 1º e 2º Grau', 'Recife', 'PE', 'Privada', 'Rua Compositor Edgar Moraes', 46, 'Brejo da Guabiraba', 'Nordeste', 81, '34426629');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26164060', 'Colégio Triunfo', 'Recife', 'PE', 'Privada', 'Rua do Triunfo', 647, 'Arruda', 'Nordeste', 81, '32219651');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26440733', 'Colégio Unico Unidade Santo Amaro', 'Recife', 'PE', 'Privada', 'Rua Doutor Carlos Chagas', 112, 'Santo Amaro', 'Nordeste', 81, '32315525');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188473', 'Colégio Universo da Criança', 'Recife', 'PE', 'Privada', 'Rua Joaquim Teixeira', 100, 'Morro da Conceicao', 'Nordeste', 81, '30882126');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166941', 'Colégio Universo do Saber', 'Recife', 'PE', 'Privada', 'Rua Marques de Abrantes', 459, 'Campo Grande', 'Nordeste', 81, '41416002');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122170', 'Colégio Vera Cruz Recife', 'Recife', 'PE', 'Privada', 'Avenida Rui Barbosa', 57, 'Gracas', 'Nordeste', 81, '32221876');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118262', 'Colégio Visao', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 241, 'Estancia', 'Nordeste', 81, '32510169');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163462', 'Conselho dos Moradores do Jiquia', 'Recife', 'PE', 'Privada', 'Avenida Central', 4579, 'Afogados', 'Nordeste', 81, '34555544');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156075', 'Creche Beneficente Amiguinhos', 'Recife', 'PE', 'Privada', 'Rua Santa Leonor', 176, 'Boa Viagem', 'Nordeste', 81, '33424010');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179059', 'Creche Beneficente Sant', 'Recife', 'PE', 'Privada', 'Rua Itacari', 293, 'Imbiribeira', 'Nordeste', 81, '33380062');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153343', 'Creche Com N Sra da Boa Viagem', 'Recife', 'PE', 'Privada', 'Rua Bruno Veloso', 430, 'Boa Viagem', 'Nordeste', 81, '34669923');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156024', 'Creche Espirita Missionario da Luz', 'Recife', 'PE', 'Privada', 'Avenida Encanta Moca', 212, 'Pina', 'Nordeste', 81, '34664025');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26140195', 'Csv Educacional - Colégio Saber Viver Anexo', 'Recife', 'PE', 'Privada', 'Avenida Joao de Barros', 1563, 'Espinheiro', 'Nordeste', 81, '32410289');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170515', 'Ctm Colégio e Curso', 'Recife', 'PE', 'Privada', 'Rua Doutor Geraldo de Andrade', 152, 'Espinheiro', 'Nordeste', 81, '32415583');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187612', 'Day Care Infantil Educar', 'Recife', 'PE', 'Privada', 'Rua Dom Sebastiao Leme', 137, 'Gracas', 'Nordeste', 81, '973111805');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187868', 'Doce Criança Escola de Educação Infantil', 'Recife', 'PE', 'Privada', 'Rua Dom Expedito Lopes', 122, 'San Martin', 'Nordeste', 81, '997341780');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190249', 'Educação Infantil Bilingue Limitada Me Sunny Place International School', 'Recife', 'PE', 'Privada', 'Rua do Chacon', 300, 'Poco', 'Nordeste', 81, '981301174');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125870', 'Educandario Adriana Carvalho', 'Recife', 'PE', 'Privada', 'Rua Uniao da Vitoria', 49, 'Alto José do Pinho', 'Nordeste', 81, '32680491');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173131', 'Educandario Alegria do Saber Sc', 'Recife', 'PE', 'Privada', 'Rua Pero Vaz de Caminha', 7105, 'Cohab', 'Nordeste', 81, '987443339');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26493837', 'Educandario Ana Lucia', 'Recife', 'PE', 'Privada', 'Rua Ibiratinga', 230, 'Cohab', 'Nordeste', 81, '987716906');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133083', 'Educandario Ana Raquel', 'Recife', 'PE', 'Privada', 'Rua Diogo Alvares', 68, 'Torre', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26146630', 'Educandario Analine', 'Recife', 'PE', 'Privada', 'Rua Major Mario Portela', 177, 'Bongi', 'Nordeste', 81, '87575180');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118360', 'Educandario Anita Garibaldi', 'Recife', 'PE', 'Privada', 'Rua Conego Lira', 282, 'Imbiribeira', 'Nordeste', 81, '34288333');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187680', 'Educandario Anita Garibaldi', 'Recife', 'PE', 'Privada', 'Rua Agricultor Joao Bezerra de Oliveira', 53, 'Imbiribeira', 'Nordeste', 81, '33390277');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149010', 'Educandario Bem Querer', 'Recife', 'PE', 'Privada', 'Rua Edson', 63, 'Morro da Conceicao', 'Nordeste', 81, '988012398');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143640', 'Educandario Brasileirinho', 'Recife', 'PE', 'Privada', 'Rua Vasco da Gama', 973, 'Vasco da Gama', 'Nordeste', 81, '32687771');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167123', 'Educandario Caminho Didatico', 'Recife', 'PE', 'Privada', 'Rua Dois de Fevereiro', 271, 'Morro da Conceicao', 'Nordeste', 81, '32684548');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149435', 'Educandario Campos Andrade', 'Recife', 'PE', 'Privada', 'Avenida Norte Miguel Arraes de Alencar', 67186720, 'Vasco da Gama', 'Nordeste', 81, '988801116');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122782', 'Educandario Canto Livre', 'Recife', 'PE', 'Privada', 'Rua Imbituba', 48, 'San Martin', 'Nordeste', 81, '34473298');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182882', 'Educandario Cassia Maria', 'Recife', 'PE', 'Privada', 'Rua Aparecida', 389, 'Afogados', 'Nordeste', 81, '984115120');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149400', 'Educandario Claudia Lima', 'Recife', 'PE', 'Privada', 'Rua Sao Jorge', 4640, 'Brejo de Beberibe', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168871', 'Educandario Criando e Recriando', 'Recife', 'PE', 'Privada', 'Rua Sobral Pinto', 218, 'Nova Descoberta', 'Nordeste', 81, '33040484');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143739', 'Educandario da Carla', 'Recife', 'PE', 'Privada', 'Rua Eliete Aguiar', 27530, 'Alto do Mandu', 'Nordeste', 81, '34412194');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173298', 'Educandario Danvictor', 'Recife', 'PE', 'Privada', 'Rua Doutor Benigno Jordao Vasconcelos', 246, 'Cohab', 'Nordeste', 81, '34756022');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143313', 'Educandario Desenvolver', 'Recife', 'PE', 'Privada', 'Avenida Governador Roberto Silveira', 1, 'Jordao Baixo', 'Nordeste', 81, '985388787');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26465736', 'Educandario Doce Infancia', 'Recife', 'PE', 'Privada', 'Rua Vereador Sergio Xavier', 237, 'San Martin', 'Nordeste', 81, '32299414');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133202', 'Educandario Duarte', 'Recife', 'PE', 'Privada', 'Rua Tuparetama', 88, 'Estancia', 'Nordeste', 81, '995082670');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178974', 'Educandario Evangelico Ideal', 'Recife', 'PE', 'Privada', 'Rua Rodrigues Sete', 412, 'Casa Amarela', 'Nordeste', 81, '32693865');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178257', 'Educandario Exodo', 'Recife', 'PE', 'Privada', 'Rua Rio Maranhao', 47, 'Ipsep', 'Nordeste', 81, '983687841');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156784', 'Educandario Genilda Satiro', 'Recife', 'PE', 'Privada', 'Rua Nordeste', 125, 'Vasco da Gama', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26530740', 'Educandario Gente Inocente', 'Recife', 'PE', 'Privada', 'Rua Genesio Teofilo Bezerra Filho', 61, 'Iputinga', 'Nordeste', 81, '32734503');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26218402', 'Educandario Infancia Feliz', 'Recife', 'PE', 'Privada', 'Rua Alto da Bica', 16, 'Passarinho', 'Nordeste', 81, '986660934');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124378', 'Educandario Jardim Paraiso', 'Recife', 'PE', 'Privada', 'Rua Deputado Luis Dias Lins', 226, 'Cohab', 'Nordeste', 81, '30510179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26144107', 'Educandario Joana Darc', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 568, 'Água Fria', 'Nordeste', 81, '34519615');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191113', 'Educandario João Paulo', 'Recife', 'PE', 'Privada', 'Rua Coronel Mario Liborio', 38, 'Campina do Barreto', 'Nordeste', 81, '988902506');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128047', 'Educandario Leda Mello', 'Recife', 'PE', 'Privada', 'Rua Mamede Coelho', 801, 'Dois Unidos', 'Nordeste', 81, '32692271');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26493721', 'Educandario Lima', 'Recife', 'PE', 'Privada', 'Subida do Cajueiro', 26, 'Nova Descoberta', 'Nordeste', 81, '32685437');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176505', 'Educandario Luz do Mundo', 'Recife', 'PE', 'Privada', 'Rua Deputado Manoel Paes', 57, 'Areias', 'Nordeste', 81, '987192333');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176491', 'Educandario Mae Rainha do Sagrado Coracao', 'Recife', 'PE', 'Privada', 'Rua Rezende', 159, 'Iputinga', 'Nordeste', 81, '32733477');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124394', 'Educandario Marcia Cristina', 'Recife', 'PE', 'Privada', 'Avenida Encanta Moca', 136, 'Pina', 'Nordeste', 81, '34651930');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118424', 'Educandario Maria Imaculada', 'Recife', 'PE', 'Privada', 'Rua Major Quinteiro', 97, 'Cordeiro', 'Nordeste', 81, '32271024');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143178', 'Educandario Menezes', 'Recife', 'PE', 'Privada', 'Rua Carnaiba', 64, 'Nova Descoberta', 'Nordeste', 81, '34424767');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149060', 'Educandario Menezes Ii', 'Recife', 'PE', 'Privada', 'Rua Mirian Lopes Verbena', 27, 'Macaxeira', 'Nordeste', 81, '32663771');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173140', 'Educandario Monte Horebe', 'Recife', 'PE', 'Privada', 'Rua Adamantina', 70, 'Jardim Sao Paulo', 'Nordeste', 81, '41016683');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26493764', 'Educandario Mundo da Criança', 'Recife', 'PE', 'Privada', 'Rua Estreliana', 307, 'Alto José do Pinho', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26466724', 'Educandario Mundo Feliz', 'Recife', 'PE', 'Privada', 'Rua Santa Joana Darc', 94, 'Areias', 'Nordeste', 81, '986639425');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26177870', 'Educandario Nossa Senhora Aparecida', 'Recife', 'PE', 'Privada', 'Rua Diogo de Vasconcelos', 410, 'Varzea', 'Nordeste', 81, '34536512');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128055', 'Educandario Nossa Senhora da Conceicao', 'Recife', 'PE', 'Privada', 'Rua Julio Jose de Souza', 347, 'Água Fria', 'Nordeste', 81, '34432906');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152959', 'Educandario Nossa Senhora da Conceicao', 'Recife', 'PE', 'Privada', 'Rua Presidente Weizman', 82, 'Areias', 'Nordeste', 81, '32519918');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125900', 'Educandario Nossa Senhora da Piedade', 'Recife', 'PE', 'Privada', 'Rua Nossa Senhora da Piedade', 63, 'Brejo da Guabiraba', 'Nordeste', 81, '34414946');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173077', 'Educandario Nossa Senhora das Gracas', 'Recife', 'PE', 'Privada', 'Rua Sitio dos Coqueiros', 47, 'Varzea', 'Nordeste', 81, '32726187');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118327', 'Educandario Nossa Senhora de Fatima', 'Recife', 'PE', 'Privada', 'Rua Aracagi', 135, 'Barro', 'Nordeste', 81, '30366442');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187850', 'Educandario Nossa Senhora do Rosario', 'Recife', 'PE', 'Privada', 'Rua Joao Francisco Lisboa', 90, 'Varzea', 'Nordeste', 81, '34539106');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166984', 'Educandario Nova Era', 'Recife', 'PE', 'Privada', 'Rua Manoel Lopes de Albuquerque', 301, 'Dois Unidos', 'Nordeste', 81, '34432814');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26427710', 'Educandario Paraiso', 'Recife', 'PE', 'Privada', 'Rua Hemeterio Maciel', 82, 'Varzea', 'Nordeste', 81, '34540408');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26141019', 'Educandario Pedro Henrique', 'Recife', 'PE', 'Privada', 'Rua Tupiniquins', 97, 'Santo Amaro', 'Nordeste', 81, '986265264');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187884', 'Educandario Pequeno Principe', 'Recife', 'PE', 'Privada', 'Rua Vinte e Um de Abril', 2857, 'San Martin', 'Nordeste', 81, '32267789');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173328', 'Educandario Professora Eusa Carpintero', 'Recife', 'PE', 'Privada', 'Rua Francisco do Rego', 163, 'Areias', 'Nordeste', 81, '30322660');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168863', 'Educandario Recanto Infantil', 'Recife', 'PE', 'Privada', 'Rua Tupinamba', 44, 'Linha do Tiro', 'Nordeste', 81, '983136315');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167093', 'Educandario Rita Barbosa', 'Recife', 'PE', 'Privada', 'Rua Barao de Oeiras', 53, 'Porto da Madeira', 'Nordeste', 81, '998094590');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143232', 'Educandario Rita de Cassia', 'Recife', 'PE', 'Privada', 'Rua Maria Augusta de Souza', 218, 'Campo Grande', 'Nordeste', 81, '986942931');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26140977', 'Educandario Rosa de Saron', 'Recife', 'PE', 'Privada', 'Rua Itajaci', 48, 'Alto José Bonifácio', 'Nordeste', 81, '988224611');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26144360', 'Educandario Santa Rosa', 'Recife', 'PE', 'Privada', 'Rua Joao Leite', 468, 'Mangueira', 'Nordeste', 81, '34220321');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188856', 'Educandario Santa Terezinha Baby', 'Recife', 'PE', 'Privada', 'Rua Luiz Figueiroa', 219, 'Mangueira', 'Nordeste', 81, '997062770');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176653', 'Educandario Santa Terezinha do Menino Jesus', 'Recife', 'PE', 'Privada', 'Rua Ernesto Cavalcanti', 67, 'Afogados', 'Nordeste', 81, '30384453');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191474', 'Educandario Santo Antonio', 'Recife', 'PE', 'Privada', 'Rua Arapixuna', 184, 'Água Fria', 'Nordeste', 81, '996714076');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125927', 'Educandario São Domingos', 'Recife', 'PE', 'Privada', 'Rua Corrego do Euclides', 209, 'Alto José Bonifácio', 'Nordeste', 81, '31058229');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176726', 'Educandario São Jorge', 'Recife', 'PE', 'Privada', 'Rua Coripos', 29, 'Coqueiral', 'Nordeste', 81, '992048528');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147955', 'Educandario São Pedro', 'Recife', 'PE', 'Privada', 'Rua Santa Rosa', NULL, 'San Martin', 'Nordeste', 81, '32273772');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157454', 'Educandario Shalom', 'Recife', 'PE', 'Privada', 'Rua Corrego do Euclides', 91, 'Alto José Bonifácio', 'Nordeste', 81, '31297307');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149389', 'Educandario Siqueira Brandao', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 4149, 'Beberibe', 'Nordeste', 81, '34497469');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148854', 'Educandario Sonhos de Icaro', 'Recife', 'PE', 'Privada', 'Rua Antonio Carneiro', 103, 'Nova Descoberta', 'Nordeste', 81, '32214395');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147483', 'Educandario Tania Bezerra', 'Recife', 'PE', 'Privada', 'Rua Mostardas', 120, 'Torroes', 'Nordeste', 81, '32271846');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26530716', 'Educandario Tia Nai', 'Recife', 'PE', 'Privada', 'Avenida Izabel de Goes', 941, 'Areias', 'Nordeste', 81, '32512255');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167000', 'Educandario Tia Nice', 'Recife', 'PE', 'Privada', 'Rua Manuel de Medeiros', 1388, 'Dois Irmaos', 'Nordeste', 81, '34423795');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26464748', 'Educandario Unibaby', 'Recife', 'PE', 'Privada', 'Rua Rio Pajeu', 144, 'Ibura', 'Nordeste', 81, '34724448');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26149443', 'Educandario Universo Infantil', 'Recife', 'PE', 'Privada', 'Rua Erundina Negreiros de Araujo', 188, 'Macaxeira', 'Nordeste', 81, '33043354');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26464713', 'Educandario Vovo Juca', 'Recife', 'PE', 'Privada', 'Rua Agaci', 207, 'Brejo de Beberibe', 'Nordeste', 81, '32688696');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26218003', 'Educandario Vovo Milita', 'Recife', 'PE', 'Privada', 'Rua Santa Maria Goretti', 184, 'Vasco da Gama', 'Nordeste', 81, '985057472');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178265', 'Educandario Vovo Rita', 'Recife', 'PE', 'Privada', 'Rua Tacaimbo', 59, 'Nova Descoberta', 'Nordeste', 81, '34416179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26142988', 'Educandario Wanessa Karla', 'Recife', 'PE', 'Privada', 'Avenida Santarem', 16202, 'Cohab', 'Nordeste', 81, '988552874');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163225', 'Escola Crista Bessoni', 'Recife', 'PE', 'Privada', 'Rua Cabedelo', 40, 'Afogados', 'Nordeste', 81, '30823786');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26512726', 'Escola 1º Passo', 'Recife', 'PE', 'Privada', 'Rua Quatro de Fevereiro', 161, 'Cohab', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26513714', 'Escola Abdias Gomes de Moura', 'Recife', 'PE', 'Privada', 'Rua Manuel Salvador', 280, 'Barro', 'Nordeste', 81, '31283916');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119650', 'Escola Abelhinha', 'Recife', 'PE', 'Privada', 'Avenida Marechal Mascarenhas de Morais', 2169, 'Imbiribeira', 'Nordeste', 81, '20114139');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26484714', 'Escola Adonay', 'Recife', 'PE', 'Privada', 'Rua Principal', 106, 'Alto José do Pinho', 'Nordeste', 81, '986678460');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26489716', 'Escola Adventista de San Martin', 'Recife', 'PE', 'Privada', 'Av. General San Martin', 2442, 'San Martin', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26141000', 'Escola Alegria do Saber', 'Recife', 'PE', 'Privada', 'Rua Marcilio Dias', 33, 'Campina do Barreto', 'Nordeste', 81, '34981416');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26146690', 'Escola Americana do Recife', 'Recife', 'PE', 'Privada', 'Rua Sa e Souza', 408, 'Boa Viagem', 'Nordeste', 81, '33414716');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122979', 'Escola Ana Cecilia', 'Recife', 'PE', 'Privada', 'Rua Severina Silva Rego', 86, 'Estancia', 'Nordeste', 81, '32515657');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26184877', 'Escola Ana Maria', 'Recife', 'PE', 'Privada', 'Rua Gaston Camara', 50, 'Cordeiro', 'Nordeste', 81, '41412666');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176580', 'Escola Arca de Noe', 'Recife', 'PE', 'Privada', 'Rua Doutor Adelino', 289, 'Afogados', 'Nordeste', 81, '34481185');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179598', 'Escola Arco Iris', 'Recife', 'PE', 'Privada', 'Rua do Triunfo', 116, 'Arruda', 'Nordeste', 81, '30482462');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126060', 'Escola Assembleia de Deus', 'Recife', 'PE', 'Privada', 'Rua Conselheiro Ribas', 20, 'Casa Amarela', 'Nordeste', 81, '38232398');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26504731', 'Escola Bem Me Quer', 'Recife', 'PE', 'Privada', 'Rua Doutor Gomes Porto', 374, 'San Martin', 'Nordeste', 81, '32297763');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178206', 'Escola Bem Querer', 'Recife', 'PE', 'Privada', 'Rua Faustino Porto', 151, 'Boa Viagem', 'Nordeste', 81, '34658670');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118645', 'Escola Bem-me-quer - Falcao Centro Cultural', 'Recife', 'PE', 'Privada', 'Rua Faustino Porto', 151, 'Boa Viagem', 'Nordeste', 81, '34658670');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153084', 'Escola Benfica', 'Recife', 'PE', 'Privada', 'Rua Benfica', 197, 'Madalena', 'Nordeste', 81, '33346875');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187833', 'Escola Brinquedos e Brincadeiras', 'Recife', 'PE', 'Privada', 'Rua Conselheiro Nabuco', NULL, 'Casa Amarela', 'Nordeste', 81, '32652783');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181797', 'Escola Caminhando Com Cristo', 'Recife', 'PE', 'Privada', 'Rua Massape', 40, 'Cohab', 'Nordeste', 81, '34866025');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26137810', 'Escola Casinha do Saber', 'Recife', 'PE', 'Privada', 'Rua Rio Ipojuca', 328, 'Ipsep', 'Nordeste', 81, '33391447');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148951', 'Escola Castelo do Saber', 'Recife', 'PE', 'Privada', 'Rua Nazare', 428, 'Água Fria', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166895', 'Escola Castelo Encantado', 'Recife', 'PE', 'Privada', 'Rua Clodomiro Selva', 194, 'Casa Amarela', 'Nordeste', 81, '32694368');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190940', 'Escola Castelo Renascer Em Cristo', 'Recife', 'PE', 'Privada', 'Rua Cabo Eutropio', 321, 'Ilha de Joana Bezerra', 'Nordeste', 81, '986939349');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26138948', 'Escola Cecilia Meireles', 'Recife', 'PE', 'Privada', 'Rua Rio Douro', 72, 'Ibura', 'Nordeste', 81, '34719372');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173220', 'Escola Chave do Saber', 'Recife', 'PE', 'Privada', 'Rua Jose Miranda', 172, 'Afogados', 'Nordeste', 81, '34289108');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156709', 'Escola Comunitaria Maria Estevao', 'Recife', 'PE', 'Privada', 'Rua Maria Estevao', 241, 'Dois Unidos', 'Nordeste', 81, '34432797');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26163780', 'Escola Comunitaria Tom e Jerry', 'Recife', 'PE', 'Privada', 'Rua Corrego da Areia', 82, 'Nova Descoberta', 'Nordeste', 81, '988434414');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152894', 'Escola Construindo O Saber', 'Recife', 'PE', 'Privada', 'Rua Rio Colorado', 45, 'Ipsep', 'Nordeste', 81, '33393428');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26530724', 'Escola Convisao', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 173, 'Estancia', 'Nordeste', 81, '32510169');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26529726', 'Escola Coracao de Estudante', 'Recife', 'PE', 'Privada', 'Rua Gurupe', 221, 'Afogados', 'Nordeste', 81, '988914426');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119714', 'Escola Coracao de Maria', 'Recife', 'PE', 'Privada', 'Rua Hugo de Carvalho', NULL, 'Prado', 'Nordeste', 81, '32492285');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176483', 'Escola Crescer e Transformar', 'Recife', 'PE', 'Privada', 'Avenida Coracao de Jesus', 20027, 'Barro', 'Nordeste', 81, '987002332');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148943', 'Escola Criança Futuro Feliz', 'Recife', 'PE', 'Privada', 'Rua Taguatinga', 54, 'Beberibe', 'Nordeste', 81, '34442212');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187744', 'Escola Criar e Recriar', 'Recife', 'PE', 'Privada', 'Rua Manoel Estevao da Costa', 284, 'Iputinga', 'Nordeste', 81, '34531353');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117541', 'Escola Criativa', 'Recife', 'PE', 'Privada', 'Rua Conde de Iraja', 254236, 'Torre', 'Nordeste', 81, '33668300');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191903', 'Escola Crista da Boa Viagem', 'Recife', 'PE', 'Privada', 'Rua Cruzeiro do Forte', 183, 'Boa Viagem', 'Nordeste', 81, '33424854');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191539', 'Escola Crista Na Varzea', 'Recife', 'PE', 'Privada', 'Rua Francisco Lacerda', 176, 'Varzea', 'Nordeste', 81, '31320873');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126702', 'Escola da Aninha', 'Recife', 'PE', 'Privada', 'Corrego Jose Idalino', 480, 'Brejo da Guabiraba', 'Nordeste', 81, '994518476');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173190', 'Escola de Enfermagem São Caetano', 'Recife', 'PE', 'Privada', 'Rua Alvaro Amorim', 219, 'Imbiribeira', 'Nordeste', 81, '34283607');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26474727', 'Escola Despertar - Unidade I', 'Recife', 'PE', 'Privada', 'Rua Real da Torre', 1645, 'Torre', 'Nordeste', 81, '34465251');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181258', 'Escola Despertar - Unidade Ii', 'Recife', 'PE', 'Privada', 'Rua Real da Torre', 1633, 'Torre', 'Nordeste', 81, '34465251');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133482', 'Escola Dinamica', 'Recife', 'PE', 'Privada', 'Rua Joao Trajano da Silva', 164, 'Bongi', 'Nordeste', 81, '32364011');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173271', 'Escola dos Anjos', 'Recife', 'PE', 'Privada', 'Rua Mineirolandia', 287, 'San Martin', 'Nordeste', 81, '32236682');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121611', 'Escola e Curso Bandeira', 'Recife', 'PE', 'Privada', 'Rua da Conceicao', 132, 'Boa Vista', 'Nordeste', 81, '32214956');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128187', 'Escola Educacional Cecilia Meirelles', 'Recife', 'PE', 'Privada', 'Rua Uriel de Holanda', 371, 'Linha do Tiro', 'Nordeste', 81, '34491484');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191857', 'Escola Eleva', 'Recife', 'PE', 'Privada', 'Rua Alameda das Hortencias', NULL, 'Imbiribeira', 'Nordeste', 81, '33345477');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26147378', 'Escola Espaço Alegre', 'Recife', 'PE', 'Privada', 'Rua Manoel de Arruda Camara', 54, 'Prado', 'Nordeste', 81, '32273158');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139189', 'Escola Espaço Criativo', 'Recife', 'PE', 'Privada', 'Avenida Luis Antonio de Araujo', 209, 'Sitio dos Pintos', 'Nordeste', 81, '34423874');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143143', 'Escola Espaço Dinamico', 'Recife', 'PE', 'Privada', 'Rua Catulo da Paixao Cearense', 95, 'Campo Grande', 'Nordeste', 81, '32424257');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26493829', 'Escola Evangelica Gideao', 'Recife', 'PE', 'Privada', 'Rua Manoel Ariosto', 145, 'Cordeiro', 'Nordeste', 81, '32231865');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187434', 'Escola Faculdade da Criança', 'Recife', 'PE', 'Privada', 'Rua Sao Vicente de Paula', 747, 'Varzea', 'Nordeste', 81, '34561706');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26309610', 'Escola Feliz Saber', 'Recife', 'PE', 'Privada', 'Rua Secundino Carneiro', NULL, 'Prado', 'Nordeste', 81, '34464727');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176637', 'Escola Florencio de Santana', 'Recife', 'PE', 'Privada', 'Rua Ernesto Cavalcanti', 150, 'Afogados', 'Nordeste', 81, '987258475');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176807', 'Escola Fraternal Maria de Nazare', 'Recife', 'PE', 'Privada', 'Rua Guaraci', 76, 'Cacote', 'Nordeste', 81, '34556199');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26161036', 'Escola Futuro Cidadao', 'Recife', 'PE', 'Privada', 'Rua Marechal Taumaturgo', 23, 'Cohab', 'Nordeste', 81, '34755036');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26172739', 'Escola Geracao Atual', 'Recife', 'PE', 'Privada', 'Estrada do Arraial', 4341, 'Casa Amarela', 'Nordeste', 81, '32679176');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26483718', 'Escola Geracao do Futuro', 'Recife', 'PE', 'Privada', 'Rua Almirante Batista Leao', 81, 'Boa Viagem', 'Nordeste', 81, '33431588');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181711', 'Escola Geracao Vitoria', 'Recife', 'PE', 'Privada', 'Rua Doutor Sergio Romero', 13, 'Campina do Barreto', 'Nordeste', 81, '34431128');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26463733', 'Escola Heronilda Aragao', 'Recife', 'PE', 'Privada', 'Rua Doutor Valdir Pessoa', 74, 'Imbiribeira', 'Nordeste', 81, '34220449');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182734', 'Escola Incentivo', 'Recife', 'PE', 'Privada', 'Avenida Pinheiros', 711, 'Imbiribeira', 'Nordeste', 81, '34283961');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26507730', 'Escola Infantil Conviver', 'Recife', 'PE', 'Privada', 'Rua Uriel de', NULL, 'Linha do Tiro', 'Nordeste', 81, '34430631');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185067', 'Escola Infantil Criativa', 'Recife', 'PE', 'Privada', 'Rua Conde de Iraja', 275, 'Torre', 'Nordeste', 81, '33668323');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191911', 'Escola Integrar', 'Recife', 'PE', 'Privada', 'Rua Doutor Joao Marques', 220, 'Ilha do Retiro', 'Nordeste', 81, '32273478');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127679', 'Escola Interagir', 'Recife', 'PE', 'Privada', 'Rua Jasmim', NULL, 'Cidade Universitaria', 'Nordeste', 81, '32731581');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179989', 'Escola Internacional Aba', 'Recife', 'PE', 'Privada', 'Avenida Conselheiro Rosa e Silva', 1510, 'Aflitos', 'Nordeste', 81, '34278800');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119862', 'Escola Irma Dulce', 'Recife', 'PE', 'Privada', 'Rua Industrial Antonio Carlos Menezes', 4, 'Curado', 'Nordeste', 81, '988040480');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26146622', 'Escola Jardim do Eden', 'Recife', 'PE', 'Privada', 'Rua Blumenau', 280, 'Ipsep', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173158', 'Escola João Francisco de Torres', 'Recife', 'PE', 'Privada', 'Rua Vinte e Um de Abril', 3427, 'San Martin', 'Nordeste', 81, '30978963');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123800', 'Escola João Verissimo', 'Recife', 'PE', 'Privada', 'Rua Capitao Amador Rodrigues', 23, 'Areias', 'Nordeste', 81, '32515105');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156806', 'Escola Lapis Na Mao', 'Recife', 'PE', 'Privada', 'Rua Frei Teofilo de Virgoletta', 480, 'Zumbi', 'Nordeste', 81, '30770329');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143135', 'Escola Leonarda Alves', 'Recife', 'PE', 'Privada', 'Rua Antonio Carneiro', 129, 'Nova Descoberta', 'Nordeste', 81, '32219686');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182823', 'Escola Lirio dos Vales', 'Recife', 'PE', 'Privada', 'Rua Ladeira de Pedra', 1066, 'Água Fria', 'Nordeste', 81, '986028758');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118963', 'Escola Luis Alves', 'Recife', 'PE', 'Privada', 'Travessa Ribeiro Roma', 429, 'Zumbi', 'Nordeste', 81, '987467325');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125099', 'Escola Luz e Saber', 'Recife', 'PE', 'Privada', 'Rua Marques de Valenca', 162, 'Boa Viagem', 'Nordeste', 81, '41020877');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119935', 'Escola Madre de Deus', 'Recife', 'PE', 'Privada', 'Rua Belmonte', 199, 'Boa Viagem', 'Nordeste', 81, '33413530');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176424', 'Escola Maravilha', 'Recife', 'PE', 'Privada', 'Rua Diogo Alvares', 159, 'Zumbi', 'Nordeste', 81, '32272286');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119943', 'Escola Maria Auxiliadora', 'Recife', 'PE', 'Privada', 'Rua Jaguariaiva', 12402, 'Cohab', 'Nordeste', 81, '34755532');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139642', 'Escola Maria de Fatima', 'Recife', 'PE', 'Privada', 'Rua Sao Benedito', 59, 'Pina', 'Nordeste', 81, '99776858');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173107', 'Escola Maria de Fatima Ferreira', 'Recife', 'PE', 'Privada', 'Avenida Mario Alvares Pereira de Lira', 198, 'Cordeiro', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153998', 'Escola Maria Lucena', 'Recife', 'PE', 'Privada', 'Rua Doutor Gastao da Silveira', 43, 'Cordeiro', 'Nordeste', 81, '34454254');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126753', 'Escola Maria Luiza', 'Recife', 'PE', 'Privada', 'Rua Carnaiba', 29, 'Nova Descoberta', 'Nordeste', 81, '30748485');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181428', 'Escola Meu Caminhar Boa Viagem', 'Recife', 'PE', 'Privada', 'Rua Doutor Joao Guilherme de Pontes Sobrinho', 516, 'Boa Viagem', 'Nordeste', 81, '33279692');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119978', 'Escola Modelada Para Criança', 'Recife', 'PE', 'Privada', 'Rua Piratininga', 180, 'Jardim Sao Paulo', 'Nordeste', 81, '34551644');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119986', 'Escola Moderna Nossa Senhora do Loreto', 'Recife', 'PE', 'Privada', 'Rua Amazonas', 360, 'Boa Viagem', 'Nordeste', 81, '987162958');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128250', 'Escola Monsenhor Viana', 'Recife', 'PE', 'Privada', 'Rua Mamede Coelho', 374, 'Dois Unidos', 'Nordeste', 81, '31260661');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26455714', 'Escola Monte Moria', 'Recife', 'PE', 'Privada', 'Rua Parise', 57, 'Jardim Sao Paulo', 'Nordeste', 81, '32538455');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192560', 'Escola Multi', 'Recife', 'PE', 'Privada', 'Rua Nossa Senhora de Fatima', 190, 'Jardim Sao Paulo', 'Nordeste', 81, '999625200');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125056', 'Escola Mundo', 'Recife', 'PE', 'Privada', 'Rua Varsovia', 520, 'Imbiribeira', 'Nordeste', 81, '33148988');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156857', 'Escola Mundo da Cultura', 'Recife', 'PE', 'Privada', 'Rua Jacques Maritain', 83, 'Areias', 'Nordeste', 81, '30390636');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26288605', 'Escola Mundo Infantil', 'Recife', 'PE', 'Privada', 'Avenida Manaus', 137, 'Cohab', 'Nordeste', 81, '31276728');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176548', 'Escola Nossa Senhora da Piedade', 'Recife', 'PE', 'Privada', 'Rua Duarte Filho', 10, 'San Martin', 'Nordeste', 81, '32264609');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126435', 'Escola Nossa Senhora das Dores', 'Recife', 'PE', 'Privada', 'Rua Padre Oliveira', 724, 'Alto José do Pinho', 'Nordeste', 81, '983244797');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26197600', 'Escola Nossa Senhora das Gracas', 'Recife', 'PE', 'Privada', 'Rua de Sant Ana', 383, 'Santana', 'Nordeste', 81, '996760180');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26457776', 'Escola Nossa Senhora das Gracas', 'Recife', 'PE', 'Privada', 'Rua Manoel Alves Deus Dara', 227, 'Engenho do Meio', 'Nordeste', 81, '34535128');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26155834', 'Escola Nossa Senhora de Guadalupe', 'Recife', 'PE', 'Privada', 'Rua Anita', 174, 'Macaxeira', 'Nordeste', 81, '983241433');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168170', 'Escola Nosso Espaço', 'Recife', 'PE', 'Privada', 'Rua Manuel Rodrigues Porto', NULL, 'Areias', 'Nordeste', 81, '32523443');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152843', 'Escola Nova Geracao', 'Recife', 'PE', 'Privada', 'Avenida Dona Celia Arraes', 24, 'Jordao Baixo', 'Nordeste', 81, '34624549');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143100', 'Escola Nova Geracao', 'Recife', 'PE', 'Privada', 'Rua Joao de Carvalho', 175, 'Hipodromo', 'Nordeste', 81, '34279873');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173301', 'Escola Novo Contato', 'Recife', 'PE', 'Privada', 'Rua Dom Expedito Moura', 95, 'San Martin', 'Nordeste', 81, '34456561');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152606', 'Escola Novo Horizonte', 'Recife', 'PE', 'Privada', 'Rua Visconde de Itaborai', 555, 'Cordeiro', 'Nordeste', 81, '32270947');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187876', 'Escola Novo Mundo', 'Recife', 'PE', 'Privada', 'Rua Jose da Bomba', 128, 'Afogados', 'Nordeste', 81, '985321985');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26495767', 'Escola Novo Mundo Mágico', 'Recife', 'PE', 'Privada', 'Rua Rio Uruguai', 641, 'Cohab', 'Nordeste', 81, '99211792');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126451', 'Escola O Mundo do Abc', 'Recife', 'PE', 'Privada', 'Rua Fernandinho', 76, 'Corrego do Jenipapo', 'Nordeste', 81, '30285304');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26137992', 'Escola O Pequeno Aprendiz', 'Recife', 'PE', 'Privada', 'Rua Doutor Benigno Jordao Vasconcelos', 786, 'Cohab', 'Nordeste', 81, '34751869');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119242', 'Escola O Pequenote', 'Recife', 'PE', 'Privada', 'Rua Doutor Luiz Correa de Oliveira', 455, 'Boa Viagem', 'Nordeste', 81, '33412214');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176742', 'Escola Opcao', 'Recife', 'PE', 'Privada', 'Rua Ribeirao do Pinhal', 212, 'Ibura', 'Nordeste', 81, '996480818');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192454', 'Escola Pao da Vida', 'Recife', 'PE', 'Privada', 'Rua Conceicao de Macabu', 8, 'Ilha Joana Bezerra', 'Nordeste', 81, '988119382');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118661', 'Escola Paroquial Santa Luzia Ensino Fundamental e Médio', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 700, 'Estancia', 'Nordeste', 81, '32512339');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126460', 'Escola Particular Nossa Senhora da Conceicao', 'Recife', 'PE', 'Privada', 'Rua da Democracia', 76, 'Corrego do Jenipapo', 'Nordeste', 81, '32681204');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119293', 'Escola Pastor Munguba Sobrinho', 'Recife', 'PE', 'Privada', 'Avenida Avenida Inacio Monteiro', 1601, 'Cordeiro', 'Nordeste', 81, '32284621');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26470713', 'Escola Patria Unida', 'Recife', 'PE', 'Privada', 'Rua Bonito', 315, 'Mangueira', 'Nordeste', 81, '985510756');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125218', 'Escola Paulo Freire', 'Recife', 'PE', 'Privada', 'Rua Sudoeste', 35, 'Jordao', 'Nordeste', 81, '986253208');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143720', 'Escola Pedro Leandro', 'Recife', 'PE', 'Privada', 'Rua Carolina', 426, 'Casa Amarela', 'Nordeste', 81, '33162912');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176564', 'Escola Pena Azul', 'Recife', 'PE', 'Privada', 'Rua Estrela do Mar', 28, 'Brasilia Teimosa', 'Nordeste', 81, '34631367');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122618', 'Escola Pensar e Criar', 'Recife', 'PE', 'Privada', 'Rua Quarenta e Oito', 1013, 'Encruzilhada', 'Nordeste', 81, '34270533');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173255', 'Escola Pequeno Aprendiz', 'Recife', 'PE', 'Privada', 'Rua Walfrido de Medeiros', 113, 'Cordeiro', 'Nordeste', 81, '30333157');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187485', 'Escola Pequeno Principe', 'Recife', 'PE', 'Privada', 'Rua Teolandia', 55, 'Brejo de Beberibe', 'Nordeste', 81, '33042683');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26162822', 'Escola Pequeno Principe', 'Recife', 'PE', 'Privada', 'Rua Silva Jardim, Cep 50250-100', 89, 'Jordao', 'Nordeste', 81, '995253474');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26126486', 'Escola Peralta', 'Recife', 'PE', 'Privada', 'Estrada do Arraial', 2926, 'Casa Amarela', 'Nordeste', 81, '32666828');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26486717', 'Escola Pingo de Gente', 'Recife', 'PE', 'Privada', 'Avenida Trinta de Outubro', 755, 'Jardim Sao Paulo', 'Nordeste', 81, '32511014');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125234', 'Escola Pinheiros', 'Recife', 'PE', 'Privada', 'Rua Arquiteto Luiz Nunes', 673, 'Imbiribeira', 'Nordeste', 81, '31299179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26492741', 'Escola Planeta Kids', 'Recife', 'PE', 'Privada', 'Rua da Harmonia', 553, 'Casa Amarela', 'Nordeste', 81, '34418764');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26475715', 'Escola Plano de Deus', 'Recife', 'PE', 'Privada', 'Rua Parauna', 211, 'Ibura', 'Nordeste', 81, '985433012');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182831', 'Escola Politec I e Ii', 'Recife', 'PE', 'Privada', 'Avenida Conde da Boa Vista', 1546, 'Soledade', 'Nordeste', 81, '32225252');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125242', 'Escola Primeiro Passo', 'Recife', 'PE', 'Privada', 'Rua Professor Aurelio de Castro Cavalcanti', 511, 'Boa Viagem', 'Nordeste', 81, '33415362');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122715', 'Escola Professor Quiteria Sena', 'Recife', 'PE', 'Privada', 'Rua Marques de Baipendi', 463, 'Campo Grande', 'Nordeste', 81, '32226290');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26482711', 'Escola Professora Maria Cristina Vieira', 'Recife', 'PE', 'Privada', 'Rua Escada', 25, 'Coqueiral', 'Nordeste', 81, '988383075');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173212', 'Escola Profissionalizante Ana Neri', 'Recife', 'PE', 'Privada', 'Rua Vinte e Um de Abril', 1042, 'Afogados', 'Nordeste', 81, '34288403');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26164736', 'Escola Profissionalizante de Enfermagem de Israel', 'Recife', 'PE', 'Privada', 'Avenida Norte Miguel Arraes de Alencar', 5049, 'Tamarineira', 'Nordeste', 81, '30190907');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176572', 'Escola Profissionalizante de Tecnico de Enfermagem Vitoria', 'Recife', 'PE', 'Privada', 'Rua Francisco Vita', 92, 'Cordeiro', 'Nordeste', 81, '32297188');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176432', 'Escola Querer Saber', 'Recife', 'PE', 'Privada', 'Rua Jose Demetrios', 49, 'Barro', 'Nordeste', 81, '988815809');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187787', 'Escola Querubim', 'Recife', 'PE', 'Privada', 'Rua Doutor Joao Coimbra', 267, 'Madalena', 'Nordeste', 81, '31270011');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127237', 'Escola Realismo', 'Recife', 'PE', 'Privada', 'Avenida Nossa Senhora da Saude', 56, 'Iputinga', 'Nordeste', 81, '32274426');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166909', 'Escola Recanto Feliz', 'Recife', 'PE', 'Privada', 'Largo Joao Pessoa', 33, 'Casa Amarela', 'Nordeste', 81, '34414609');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123924', 'Escola Recreio da Tia Marta', 'Recife', 'PE', 'Privada', 'Rua Itapetininga', 209, 'Curado', 'Nordeste', 81, '981605491');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26176629', 'Escola Rei David', 'Recife', 'PE', 'Privada', 'Rua Vinte e Um de Abril', 294, 'Afogados', 'Nordeste', 81, '30622160');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26119471', 'Escola Reluzir', 'Recife', 'PE', 'Privada', 'Rua Coronel Geraldo Gomes de Matos', 96, 'Ibura', 'Nordeste', 81, '30375835');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26183323', 'Escola Renascer', 'Recife', 'PE', 'Privada', 'Rua Brejo Novo', 71, 'Curado', 'Nordeste', 81, '34458226');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185920', 'Escola Saber e Criar', 'Recife', 'PE', 'Privada', 'Rua Genesio Teofilo Bezerra Filho', 69, 'Iputinga', 'Nordeste', 81, '34539243');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122669', 'Escola Saber Viver', 'Recife', 'PE', 'Privada', 'Rua do Espinheiro', 865, 'Espinheiro', 'Nordeste', 81, '32410289');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167085', 'Escola Sabor da Infancia', 'Recife', 'PE', 'Privada', 'Rua Corrego da Areia', 390, 'Nova Descoberta', 'Nordeste', 81, '984059651');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120151', 'Escola Sagrado Coracao', 'Recife', 'PE', 'Privada', 'Avenida Dois Rios', 1326, 'Ibura', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170493', 'Escola Santa Bernadete', 'Recife', 'PE', 'Privada', 'Rua Gerinaldo Alves', 139, 'Campina do Barreto', 'Nordeste', 81, '34492144');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189020', 'Escola Santa Terezinha', 'Recife', 'PE', 'Privada', 'Rua Ernesto Cavalcanti', 5767, 'Afogados', 'Nordeste', 81, '30384453');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120208', 'Escola São Jorge', 'Recife', 'PE', 'Privada', 'Rua Aprigio Guimaraes', 840, 'Sancho', 'Nordeste', 81, '34555781');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170450', 'Escola São Miguel', 'Recife', 'PE', 'Privada', 'Rua Felipe Guerra', 718, 'Varzea', 'Nordeste', 81, '985003770');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26252600', 'Escola São Vicente de Paulo', 'Recife', 'PE', 'Privada', 'Rua Florestopolis', 300, 'Água Fria', 'Nordeste', 81, '985450662');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26445727', 'Escola Silva Oliveira', 'Recife', 'PE', 'Privada', 'Ladeira do Bartolomeu', 12, 'Morro da Conceicao', 'Nordeste', 81, '32687883');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187655', 'Escola Sonho Real Me', 'Recife', 'PE', 'Privada', 'Avenida Engenheiro Abdias de Carvalho', 2990, 'Torroes', 'Nordeste', 81, '999649117');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120224', 'Escola Souza Veras', 'Recife', 'PE', 'Privada', 'Rua Governador Lopo Garro', 875, 'Engenho do Meio', 'Nordeste', 81, '32713049');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181150', 'Escola Souza Veras Anexo I', 'Recife', 'PE', 'Privada', 'Rua Governador Lopo Garro', 309, 'Engenho do Meio', 'Nordeste', 81, '32713049');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191415', 'Escola Studio da Criança', 'Recife', 'PE', 'Privada', 'R Antonio Pedro de Figueiredo', 172, 'Boa Viagem', 'Nordeste', 81, '33142940');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26491761', 'Escola Sua Majestade', 'Recife', 'PE', 'Privada', 'Rua Paes Cabral', 710, 'Cordeiro', 'Nordeste', 81, '32283588');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189038', 'Escola Tecnica de Saude do Real Hospital Portugues', 'Recife', 'PE', 'Privada', 'Rua Imperador Dom Pedro Ii', 310, 'Santo Antonio', 'Nordeste', 81, '34168080');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26162199', 'Escola Tecnica Leiaut Carielo', 'Recife', 'PE', 'Privada', 'Rua Joaquim Felipe', 119, 'Soledade', 'Nordeste', 81, '30815552');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26117711', 'Escola Tecnica Senai Santo Amaro', 'Recife', 'PE', 'Privada', 'Avenida Norte Miguel Arraes de Alencar', 539, 'Santo Amaro', 'Nordeste', 81, '32025121');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178060', 'Escola Tempo de Crescer', 'Recife', 'PE', 'Privada', 'Rua Engenho Duas Barras', 15, 'Cohab', 'Nordeste', 81, '34751823');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178150', 'Escola Tereza Galdino', 'Recife', 'PE', 'Privada', 'Rua Turiacu', 572, 'Afogados', 'Nordeste', 81, '34284522');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173352', 'Escola Tia Marina', 'Recife', 'PE', 'Privada', 'Avenida Piracicaba', 710, 'Jardim Sao Paulo', 'Nordeste', 81, '32546877');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128616', 'Escola Tom e Jerry', 'Recife', 'PE', 'Privada', 'Rua Fernando da Veiga Pessoa', 123, 'Fundao', 'Nordeste', 81, '34441803');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26230607', 'Escola Tradicional do Recife', 'Recife', 'PE', 'Privada', 'Rua Maria Goncalves', NULL, 'Mangabeira', 'Nordeste', 81, '32657313');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167034', 'Escola Uniao Comunitaria', 'Recife', 'PE', 'Privada', 'Estrada dos Macacos', 34, 'Guabiraba', 'Nordeste', 81, '33043089');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189445', 'Escola Unidade', 'Recife', 'PE', 'Privada', 'Rua Davino Pontual', 59, 'Madalena', 'Nordeste', 81, '31328369');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189453', 'Escola Unidade - Berçário', 'Recife', 'PE', 'Privada', 'Rua Costa Gomes', 98, 'Madalena', 'Nordeste', 81, '32270122');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181142', 'Escola Universo da Criança', 'Recife', 'PE', 'Privada', 'Rua Teixeira de Freitas', 63, 'Varzea', 'Nordeste', 81, '87683195');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125277', 'Escola Universo Infantil', 'Recife', 'PE', 'Privada', 'Rua Engenho Cana Brava', 21, 'Cohab', 'Nordeste', 81, '986611485');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26146703', 'Escola Viana', 'Recife', 'PE', 'Privada', 'Rua Jordao', 123, 'Torroes', 'Nordeste', 81, '34463179');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26182777', 'Escola Vila Aprendiz', 'Recife', 'PE', 'Privada', 'Rua Arnaud de Holanda', NULL, 'Boa Viagem', 'Nordeste', 81, '30914222');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26140870', 'Escola Vila Sezamo', 'Recife', 'PE', 'Privada', 'Rua Murici', 46, 'Casa Amarela', 'Nordeste', 81, '32688104');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26530759', 'Escola Virgem de Fatima', 'Recife', 'PE', 'Privada', 'Rua Celia', 272, 'Mustardinha', 'Nordeste', 81, '997993344');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26175940', 'Escola Visao Atual', 'Recife', 'PE', 'Privada', 'Rua Uriel de Holanda', 1274, 'Linha do Tiro', 'Nordeste', 81, '33527595');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128624', 'Escola Vitor Meireles', 'Recife', 'PE', 'Privada', 'Rua das Mocas', 1594, 'Água Fria', 'Nordeste', 81, '34344147');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26230615', 'Escola Waldorf Recife', 'Recife', 'PE', 'Privada', 'Estrada Real do Poco', 191, 'Poco da Panela', 'Nordeste', 81, '34410703');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26457741', 'Escolinha Arte e Manha', 'Recife', 'PE', 'Privada', 'Rua Magnolia', 120, 'Barro', 'Nordeste', 81, '988466459');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26468719', 'Escolinha da Elba', 'Recife', 'PE', 'Privada', 'Rua Artur Licio', 257, 'Pina', 'Nordeste', 81, '30611234');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26494779', 'Escolinha do Gury', 'Recife', 'PE', 'Privada', 'Rua Marques de Monte Belo', 118, 'Dois Unidos', 'Nordeste', 81, '988458728');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181681', 'Escolinha Lapis Na Mao', 'Recife', 'PE', 'Privada', 'Rua Tres de Agosto', 454, 'Afogados', 'Nordeste', 81, '34480312');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26159724', 'Escolinha Menina Flor', 'Recife', 'PE', 'Privada', 'Rua Luiz Cesario de Melo', 362, 'Vasco da Gama', 'Nordeste', 81, '987425192');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26485729', 'Escolinha Raio de Sol', 'Recife', 'PE', 'Privada', 'Rua Ator Elpidio Camara', 170, 'Jardim Sao Paulo', 'Nordeste', 81, '32516062');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26123061', 'Escolinha Tia Carminha', 'Recife', 'PE', 'Privada', 'Vila Nossa Senhora de Lourdes', 84, 'Jiquia', 'Nordeste', 81, '34554303');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26185644', 'Eso Centro Educacional', 'Recife', 'PE', 'Privada', 'Corrego do Bartolomeu', 532, 'Morro da Conceicao', 'Nordeste', 81, '32687883');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26188481', 'Espaço Cata-vento', 'Recife', 'PE', 'Privada', 'Avenida Conselheiro Rosa e Silva', 315, 'Gracas', 'Nordeste', 81, '998730234');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143607', 'Espaço Cultural Ariano Suassuna Centro Educacacional', 'Recife', 'PE', 'Privada', 'Rua Rodrigues Sete', 15, 'Casa Amarela', 'Nordeste', 81, '32680343');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187400', 'Exclusivo Colégio e Curso', 'Recife', 'PE', 'Privada', 'Rua Professor Bandeira', 211, 'Iputinga', 'Nordeste', 81, '32274191');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26118181', 'Geracao Colégio e Curso', 'Recife', 'PE', 'Privada', 'Rua Deputado Cunha Rabelo', 1235, 'Varzea', 'Nordeste', 81, '34532114');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152630', 'Gge Vestibulares', 'Recife', 'PE', 'Privada', 'Rua Benfica', 286314, 'Madalena', 'Nordeste', 81, '32271000');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26153521', 'Grupo de Maes do Ipsep - Creche Brasil', 'Recife', 'PE', 'Privada', 'Rua Blumenau', 623, 'Ipsep', 'Nordeste', 81, '32228574');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26152819', 'Grupo Educ do Recife Anglo Lider', 'Recife', 'PE', 'Privada', 'Rua Camilo Colier', 136, 'Cordeiro', 'Nordeste', 81, '34451144');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120801', 'Grupo Universitario Reabilitacao Infantil', 'Recife', 'PE', 'Privada', 'Rua Bom Gosto', 36, 'Afogados', 'Nordeste', 81, '34471765');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186942', 'Hotelzinho Pinguinhos de Amor', 'Recife', 'PE', 'Privada', 'Estrada Velha de Agua Fria', 1729, 'Água Fria', 'Nordeste', 81, '983690466');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170400', 'Inst Esp Semead da Fe Creche Morada da Felicidade', 'Recife', 'PE', 'Privada', 'Rua Rego Monteiro', 90, 'Iputinga', 'Nordeste', 81, '30770270');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26519712', 'Instituto Alcance', 'Recife', 'PE', 'Privada', 'Rua Rosario do Oeste', NULL, 'Ibura', 'Nordeste', 81, '30618073');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26435713', 'Instituto Ayllton Santos', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 4628, 'Água Fria', 'Nordeste', 81, '34490496');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26528754', 'Instituto Caca Talentos', 'Recife', 'PE', 'Privada', 'Rua Alto do Eucalipto', 733, 'Vasco da Gama', 'Nordeste', 81, '34429313');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122332', 'Instituto Capibaribe', 'Recife', 'PE', 'Privada', 'Rua das Gracas', 51, 'Gracas', 'Nordeste', 81, '32214950');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139847', 'Instituto Catarina Rosa', 'Recife', 'PE', 'Privada', 'Avenida Hildebrando de Vasconcelos', 508, 'Beberibe', 'Nordeste', 81, '984041494');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26506718', 'Instituto Cristao', 'Recife', 'PE', 'Privada', 'Rua Rubineia', 38, 'Ibura', 'Nordeste', 81, '995378031');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192500', 'Instituto de Desenvolvimento Social e Cultural - Idesc', 'Recife', 'PE', 'Privada', 'Rua Rio Oiapoque', 338, 'Areias', 'Nordeste', 81, '986104677');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127938', 'Instituto Educacional Alexandre Barros', 'Recife', 'PE', 'Privada', 'Rua Sorocaba', 233, 'Cordeiro', 'Nordeste', 81, '32289008');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120917', 'Instituto Educacional João de Deus', 'Recife', 'PE', 'Privada', 'Rua Bonito', 254, 'Mangueira', 'Nordeste', 81, '34223610');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26143534', 'Instituto Educacional Lira', 'Recife', 'PE', 'Privada', 'Rua Madre Linch', 1256, 'Macaxeira', 'Nordeste', 81, '32991977');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26512742', 'Instituto Educacional Maria da Conceicao', 'Recife', 'PE', 'Privada', 'Rua Albacora', 333, 'Brasilia Teimosa', 'Nordeste', 81, '985119855');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156741', 'Instituto Educacional Naara Franca', 'Recife', 'PE', 'Privada', 'Rua Corrego do Euclides', 433, 'Alto José Bonifácio', 'Nordeste', 81, '983255082');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127903', 'Instituto Educacional Pedro Herminio', 'Recife', 'PE', 'Privada', 'Rua Ocidental', 560, 'Cordeiro', 'Nordeste', 81, '32741055');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186691', 'Instituto Educacional Saber Viver- Unidade Ii', 'Recife', 'PE', 'Privada', 'Avenida Joao de Barros', 1545, 'Espinheiro', 'Nordeste', 81, '32410289');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26513722', 'Instituto Educacional Sandra Meiry', 'Recife', 'PE', 'Privada', 'Rua Professora Maria dos Anjos Manta', 45, 'Dois Unidos', 'Nordeste', 81, NULL);
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120925', 'Instituto Educacional São Sebastiao', 'Recife', 'PE', 'Privada', 'Rua Manoel Vieira', 53, 'San Martin', 'Nordeste', 81, '88847029');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26173336', 'Instituto Escolar Edite Maria', 'Recife', 'PE', 'Privada', 'Rua Professor Jose Joaquim de Almeida', 30, 'Torroes', 'Nordeste', 81, '30744623');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26134608', 'Instituto Escolar Marlene Almeida', 'Recife', 'PE', 'Privada', 'Rua Luiz da Camara Cascudo', 294, 'Torroes', 'Nordeste', 81, '34542579');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170531', 'Instituto Espaço Criativo', 'Recife', 'PE', 'Privada', 'Rua Conselheiro Barros Barreto', 192, 'Porto da Madeira', 'Nordeste', 81, '34492109');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26178311', 'Instituto Evangelico Renascer', 'Recife', 'PE', 'Privada', 'Avenida Vereador Otacilio Azevedo', 1115, 'Vasco da Gama', 'Nordeste', 81, '84026362');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26140837', 'Instituto Fabiana', 'Recife', 'PE', 'Privada', 'Rua Corrego do Deodato', 104, 'Água Fria', 'Nordeste', 81, '995293147');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26218208', 'Instituto Genesis', 'Recife', 'PE', 'Privada', 'Avenida Vereador Otacilio Azevedo', 366, 'Vasco da Gama', 'Nordeste', 81, '32663849');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191962', 'Instituto Grande Ser', 'Recife', 'PE', 'Privada', 'Rua Timbiras', 31, 'Santo Amaro', 'Nordeste', 81, '997515330');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127890', 'Instituto Helena Lubienska', 'Recife', 'PE', 'Privada', 'Rua Paraguassu', 255, 'Zumbi', 'Nordeste', 81, '33121444');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26482720', 'Instituto Infantil Lapis Na Mao', 'Recife', 'PE', 'Privada', 'Rua Santa Tereza', 15, 'Brejo da Guabiraba', 'Nordeste', 81, '32663380');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125447', 'Instituto Ivone Vanderley', 'Recife', 'PE', 'Privada', 'Rua Brazopolis', 122, 'Brasilia Teimosa', 'Nordeste', 81, '33251826');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128870', 'Instituto Jesus de Nazare', 'Recife', 'PE', 'Privada', 'Rua Sabia', 67, 'Passarinho', 'Nordeste', 81, '34517504');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26133652', 'Instituto Joana de Oliveira', 'Recife', 'PE', 'Privada', 'Rua Doze de Julho', 150, 'Pina', 'Nordeste', 81, '33274751');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124033', 'Instituto João Batista', 'Recife', 'PE', 'Privada', 'Rua Guaraci', 149, 'Cacote', 'Nordeste', 81, '32516158');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26494736', 'Instituto Kayros', 'Recife', 'PE', 'Privada', 'Rua Horacio Silva', 263, 'Alto José do Pinho', 'Nordeste', 81, '985802531');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26157543', 'Instituto Marcos Paulo', 'Recife', 'PE', 'Privada', 'Rua Itanhandu', 56, 'Brejo da Guabiraba', 'Nordeste', 81, '986606559');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26148986', 'Instituto Maria Fernandes', 'Recife', 'PE', 'Privada', 'Rua Expedicionario Joao Maria', 33, 'Dois Unidos', 'Nordeste', 81, '985054608');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192543', 'Instituto Nossa Senhora Aparecida', 'Recife', 'PE', 'Privada', 'Rua Diogo de Vasconcelos', 410, 'Varzea', 'Nordeste', 81, '987591379');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139782', 'Instituto Nossa Senhora de Fatima', 'Recife', 'PE', 'Privada', 'Rua Marques de Baipendi', 674, 'Campo Grande', 'Nordeste', 81, '32223303');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128837', 'Instituto Nossa Senhora de Lourdes', 'Recife', 'PE', 'Privada', 'Avenida Sebastiao Salazar', 561, 'Cajueiro', 'Nordeste', 81, '34445336');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26124017', 'Instituto Nossa Senhora do Carmo', 'Recife', 'PE', 'Privada', 'Rua Italacy', 86, 'Jardim Sao Paulo', 'Nordeste', 81, '34555079');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122359', 'Instituto Profis Maria Auxiliadora', 'Recife', 'PE', 'Privada', 'Rua Rua Joaquim Nabuco', 237, 'Derby', 'Nordeste', 81, '32224097');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139685', 'Instituto Raquel de Queiroz', 'Recife', 'PE', 'Privada', 'Rua Mandacaru', 316, 'Alto do Mandu', 'Nordeste', 81, '34411032');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26166690', 'Instituto Renascer', 'Recife', 'PE', 'Privada', 'Avenida Anibal Benevolo', 1876, 'Água Fria', 'Nordeste', 81, '34430275');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26125820', 'Instituto Santa Cruz', 'Recife', 'PE', 'Privada', 'Estrada das Ubaias', 596, 'Casa Forte', 'Nordeste', 81, '32688039');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120968', 'Instituto Santa Maria Mazzarello', 'Recife', 'PE', 'Privada', 'Avenida Afonso Olindense', 1553, 'Varzea', 'Nordeste', 81, '32710825');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26120879', 'Instituto Santa Rita de Cassia', 'Recife', 'PE', 'Privada', 'Rua Rio Chuy', 115, 'Ibura', 'Nordeste', 81, '33390569');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26121182', 'Instituto Santa Terezinha', 'Recife', 'PE', 'Privada', 'Rua Pereira Coutinho Filho', 751, 'Iputinga', 'Nordeste', 81, '32720607');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26127970', 'Instituto São João Batista', 'Recife', 'PE', 'Privada', 'Rua Equador', 301, 'San Martin', 'Nordeste', 81, '988211397');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26139820', 'Instituto São Marcos', 'Recife', 'PE', 'Privada', 'Rua Sodrelandia', 1093, 'Alto Santa Terezinha', 'Nordeste', 81, '34441712');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26172852', 'Invest Centro Educacional', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 3607, 'Porto da Madeira', 'Nordeste', 81, '34430185');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26181703', 'Invest Educação Infantil', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 3494, 'Porto da Madeira', 'Nordeste', 81, '34430185');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26128845', 'Invest Ensino Fundamental', 'Recife', 'PE', 'Privada', 'Avenida Beberibe', 3604, 'Porto da Madeira', 'Nordeste', 81, '34430185');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26156202', 'Md Educacional- Colégio Madre de Deus Unidade Ii', 'Recife', 'PE', 'Privada', 'Rua Joao Cardoso Aires', 705, 'Boa Viagem', 'Nordeste', 81, '33411747');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187086', 'Mima Nenem Berçário e Educação Infantil', 'Recife', 'PE', 'Privada', 'Rua Carlos Gomes', 669, 'Prado', 'Nordeste', 81, '92752622');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170469', 'Nip - Escola de Educação Aplicada', 'Recife', 'PE', 'Privada', 'Rua Fernando Griz', NULL, 'Areias', 'Nordeste', 81, '992467384');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189410', 'Nosso Ninho Educação Infantil', 'Recife', 'PE', 'Privada', 'Rua Pio Ix', 301, 'Madalena', 'Nordeste', 81, '986965841');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189046', 'Prime Enfant Centro de Desenvolvimento Infantil', 'Recife', 'PE', 'Privada', 'Rua Ana Camelo da Silva', 105, 'Boa Viagem', 'Nordeste', 81, '31290303');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192489', 'Projeto Social Maria Amelia', 'Recife', 'PE', 'Privada', 'Rua Guaraciaba', 163, 'Cohab', 'Nordeste', 81, '999071001');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192497', 'Ra Associação de Apoio e Desenvolvimento de Novas Tecnologias Aos Transportes', 'Recife', 'PE', 'Privada', 'Rua Costa Honorato', 72, 'Areias', 'Nordeste', 81, '991149012');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26190443', 'Red House International School', 'Recife', 'PE', 'Privada', 'Rua Confederacao do Equador', 77, 'Gracas', 'Nordeste', 81, '20117777');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186683', 'Rn Centro Educacional', 'Recife', 'PE', 'Privada', 'Rua do Espinheiro', 854, 'Espinheiro', 'Nordeste', 81, '32410289');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26179628', 'Saberes Centro Educacional', 'Recife', 'PE', 'Privada', 'Avenida Visconde de Suassuna', 475, 'Santo Amaro', 'Nordeste', 81, '33145255');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26154030', 'Santos e Lopes Ensino Fundamental -', 'Recife', 'PE', 'Privada', 'Rua Mauriceia', 222, 'Iputinga', 'Nordeste', 81, '34538002');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26160340', 'Senai Centro de Formacao Profissional Joseph Turton Junior', 'Recife', 'PE', 'Privada', 'Avenida Doutor Jose Rufino', 1099, 'Areias', 'Nordeste', 81, '32020666');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122030', 'Serviço Nacional de Aprendizagem Comercial', 'Recife', 'PE', 'Privada', 'Avenida Visconde de Suassuna', 500, 'Santo Amaro', 'Nordeste', 81, '34136666');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26170477', 'Serviço Social do Comércio Sesc Casa Amarela', 'Recife', 'PE', 'Privada', 'Avenida Norte Miguel Arraes de Alencar', 4490, 'Mangabeira', 'Nordeste', 81, '32674418');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26162075', 'Serviço Social do Comércio Sesc Santo Amaro', 'Recife', 'PE', 'Privada', 'Rua Treze de Maio', 455, 'Santo Amaro', 'Nordeste', 81, '32161709');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168154', 'Sesi Ibura', 'Recife', 'PE', 'Privada', 'Avenida Ministro Oliveira Salazar', 228, 'Ibura', 'Nordeste', 81, '988770893');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26167115', 'Sesi Vasco da Gama', 'Recife', 'PE', 'Privada', 'Rua Vasco da Gama', 145, 'Vasco da Gama', 'Nordeste', 81, '32657065');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26191601', 'Shalom Centro Educacional', 'Recife', 'PE', 'Privada', 'Rua Maraial', 69, 'Morro da Conceicao', 'Nordeste', 81, '31792307');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26168014', 'Soc Beneficente Mista 12 de Outubro', 'Recife', 'PE', 'Privada', 'Rua Abel Manuel do Nascimento', 63, 'Areias', 'Nordeste', 81, '973119043');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122367', 'Sociedade de Orientacao Psicopedagogica', 'Recife', 'PE', 'Privada', 'Rua Abelardo', 131, 'Gracas', 'Nordeste', 81, '34270388');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26187671', 'Sociedade Educacional Geracao Vitoria', 'Recife', 'PE', 'Privada', 'Rua Hermogenes de Morais', 149, 'Madalena', 'Nordeste', 81, '34453177');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26186055', 'Talentinho Creche e Pre Escola Me', 'Recife', 'PE', 'Privada', 'Rua Gomes Taborda', 1691, 'Cordeiro', 'Nordeste', 81, '34452868');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26180804', 'Universidade Infantil', 'Recife', 'PE', 'Privada', 'Rua Mariapolis', 218, 'Afogados', 'Nordeste', 81, '34480848');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26189500', 'Vila Mais Ensino Fundamental', 'Recife', 'PE', 'Privada', 'Rua Waldemar Nery Carneiro Monteiro', 486, 'Boa Viagem', 'Nordeste', 81, '31276009');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26122200', 'W D Centro Educacional', 'Recife', 'PE', 'Privada', 'Rua Gervasio Fioravante', 123, 'Gracas', 'Nordeste', 81, '32221506');
        INSERT INTO public.school (co_entidade, no_entidade, no_municipio, sg_uf, rede, ds_endereco, nu_endereco, no_bairro, no_regiao, nu_ddd, nu_telefone)
        VALUES
        ('26192136', 'Zoe Centro Educacional', 'Recife', 'PE', 'Privada', 'Rua Paulo Setubal', 79, 'Pina', 'Nordeste', 81, '999966001');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM public.school WHERE "rede" = 'Privada';
    `);
  }
}
