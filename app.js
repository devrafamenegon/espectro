const questionBank = [
  // ECONOMIA — 5 entram no curto; 3 extras no detalhado.
  { id:'eco-1', axis:'economy', label:'Economia', core:true, dir:1,
    text:'Empresas privadas costumam administrar serviços melhor do que o governo.',
    help:{ plain:'A pergunta compara quem costuma ser mais eficiente para administrar serviços: empresas ou governo.', agree:'Você tende a confiar mais em empresas privadas para organizar serviços, reduzir custos e buscar eficiência.', disagree:'Você tende a confiar mais no poder público, principalmente quando o serviço é essencial ou não deveria depender de lucro.' } },
  { id:'eco-2', axis:'economy', label:'Economia', core:true, dir:1,
    text:'O governo deveria privatizar empresas públicas quando isso puder melhorar o serviço.',
    terms:[['privatizar','Vender ou transferir uma empresa controlada pelo governo para a iniciativa privada.']],
    help:{ plain:'Aqui você decide se empresas que hoje pertencem ao governo podem passar para a iniciativa privada.', agree:'Você aceita privatizações quando acredita que uma empresa privada pode entregar um serviço melhor ou mais barato.', disagree:'Você prefere manter empresas importantes sob controle público, mesmo que existam problemas de eficiência.' } },
  { id:'eco-3', axis:'economy', label:'Economia', core:true, dir:1,
    text:'Impostos menores ajudam mais a economia do que aumentar os gastos do governo.',
    terms:[['impostos','Valores obrigatórios pagos por pessoas e empresas para financiar serviços e ações do governo.']],
    help:{ plain:'A pergunta compara duas formas de movimentar a economia: cobrar menos impostos ou o governo gastar mais.', agree:'Você acredita que deixar mais dinheiro com pessoas e empresas tende a gerar mais consumo, investimento e empregos.', disagree:'Você acredita que gastos públicos em serviços, obras e programas podem ajudar mais a economia do que reduzir impostos.' } },
  { id:'eco-4', axis:'economy', label:'Economia', core:true, dir:-1,
    text:'Saúde e educação públicas devem ser fortes, mesmo que isso exija cobrar mais impostos.',
    terms:[['impostos','Valores obrigatórios pagos por pessoas e empresas para financiar serviços e ações do governo.']],
    help:{ plain:'A ideia é saber quanto você aceita pagar coletivamente para financiar serviços públicos universais.', agree:'Você considera justo cobrar mais impostos se isso garantir SUS, escolas e universidades públicas melhores.', disagree:'Você prefere impostos menores e mais espaço para cada pessoa escolher serviços privados quando quiser.' } },
  { id:'eco-5', axis:'economy', label:'Economia', core:true, dir:-1,
    text:'Grandes empresas precisam de regras fortes para evitar abusos contra consumidores e concorrentes.',
    terms:[['regras fortes','Leis e fiscalização que limitam o que empresas podem fazer quando isso afeta consumidores, trabalhadores ou concorrentes.']],
    help:{ plain:'A pergunta mede quanto controle o governo deve ter sobre empresas muito grandes.', agree:'Você acha que empresas com muito poder econômico precisam de fiscalização e limites mais rígidos.', disagree:'Você acha que concorrência e escolha do consumidor costumam funcionar melhor do que muitas regras do governo.' } },
  { id:'eco-6', axis:'economy', label:'Economia', core:false, dir:-1,
    text:'Em uma alta muito forte de preços, o governo pode limitar temporariamente o preço de itens essenciais.',
    terms:[['limitar o preço','Definir por lei um valor máximo que pode ser cobrado por determinado produto ou serviço.']],
    help:{ plain:'Imagine comida, combustível ou remédios subindo muito em pouco tempo. A pergunta é se o governo deveria poder colocar um teto temporário.', agree:'Você aceita esse tipo de intervenção para proteger a população em uma crise.', disagree:'Você teme que controlar preços cause falta de produtos, mercado paralelo ou outros problemas.' } },
  { id:'eco-7', axis:'economy', label:'Economia', core:false, dir:1,
    text:'Empresas deveriam ter mais liberdade para contratar e negociar condições de trabalho diretamente com funcionários.',
    help:{ plain:'A pergunta compara flexibilidade nas relações de trabalho com regras trabalhistas definidas pelo Estado.', agree:'Você acredita que empresas e trabalhadores deveriam ter mais liberdade para negociar salários, horários e contratos.', disagree:'Você prefere regras trabalhistas mais fortes para evitar que o trabalhador fique em desvantagem na negociação.' } },

  { id:'eco-8', axis:'economy', label:'Economia', core:false, dir:1,
    text:'Empresas que dão prejuízo por muitos anos não deveriam continuar recebendo dinheiro do governo só para permanecer abertas.',
    terms:[['prejuízo','Quando uma empresa gasta mais dinheiro do que consegue receber com suas atividades.']],
    help:{ plain:'A pergunta é sobre até que ponto o governo deve sustentar empresas que não conseguem se manter sozinhas.', agree:'Você prefere cortar esse apoio e deixar a empresa se reorganizar, ser vendida ou fechar se não for viável.', disagree:'Você aceita manter o apoio público quando a empresa presta um serviço importante ou preserva muitos empregos.' } },

  // COSTUMES
  { id:'soc-1', axis:'social', label:'Costumes', core:true, dir:1,
    text:'Adultos devem poder formar famílias como quiserem, inclusive casais do mesmo sexo.',
    help:{ plain:'A pergunta é sobre o quanto o Estado deve aceitar diferentes formas de família entre adultos.', agree:'Você entende que casais adultos devem ter os mesmos direitos, independentemente de serem do mesmo sexo.', disagree:'Você entende que a lei deveria preservar um modelo mais tradicional de família.' } },
  { id:'soc-2', axis:'social', label:'Costumes', core:true, dir:1,
    text:'O aborto deveria ser permitido por lei em mais situações do que é hoje no Brasil.',
    terms:[['aborto','Interrupção de uma gravidez. No Brasil, a lei permite em situações específicas; a pergunta trata de ampliar ou não essas permissões.']],
    help:{ plain:'Aqui a questão é se a lei brasileira deveria permitir o aborto em mais casos.', agree:'Você acredita que a mulher deveria ter mais possibilidade legal de decidir interromper uma gravidez dentro de regras.', disagree:'Você acredita que a lei deve continuar mais restritiva para proteger a vida do feto.' } },
  { id:'soc-3', axis:'social', label:'Costumes', core:true, dir:-1,
    text:'Valores religiosos deveriam ter mais influência nas leis do país.',
    help:{ plain:'A pergunta é sobre o quanto crenças religiosas devem influenciar regras que valem para toda a população.', agree:'Você vê princípios religiosos como uma referência legítima para decisões políticas e leis.', disagree:'Você prefere que as leis sejam feitas sem favorecer uma religião, mesmo quando a maioria da população é religiosa.' } },
  { id:'soc-4', axis:'social', label:'Costumes', core:true, dir:1,
    text:'O uso de maconha por adultos deveria ser legal e controlado por regras.',
    terms:[['legal e controlado','Permitido por lei, mas com regras de idade, venda, locais de uso e fiscalização.']],
    help:{ plain:'A pergunta não fala em liberar sem regras; fala em permitir o uso adulto dentro de uma regulamentação.', agree:'Você prefere tratar o uso como uma escolha adulta regulada, parecida com álcool e cigarro.', disagree:'Você prefere manter a proibição por considerar que a liberação aumentaria problemas de saúde ou segurança.' } },
  { id:'soc-5', axis:'social', label:'Costumes', core:false, dir:-1,
    text:'Mudanças muito rápidas sobre gênero e família podem prejudicar valores importantes da sociedade.',
    terms:[['gênero','Conjunto de papéis, identidades e expectativas sociais ligados ao que uma sociedade entende como masculino, feminino ou outras identidades.']],
    help:{ plain:'A pergunta mede sua cautela diante de mudanças culturais sobre identidade, família e comportamento.', agree:'Você prefere mudanças mais lentas porque acredita que tradições também ajudam a dar estabilidade à sociedade.', disagree:'Você acha que costumes devem mudar quando limitam escolhas individuais, mesmo que a mudança seja rápida.' } },
  { id:'soc-6', axis:'social', label:'Costumes', core:false, dir:1,
    text:'O Estado deve ser laico e não favorecer nenhuma religião.',
    terms:[['laico','Um Estado laico não adota religião oficial e deve tratar diferentes crenças — e quem não tem religião — de forma igual.']],
    help:{ plain:'Aqui você decide se governo e religião devem ficar mais separados.', agree:'Você acha que políticas públicas devem valer igualmente para pessoas de qualquer religião ou sem religião.', disagree:'Você acha aceitável que a religião majoritária tenha mais influência em símbolos, regras ou decisões públicas.' } },
  { id:'soc-7', axis:'social', label:'Costumes', core:false, dir:1,
    text:'Escolas deveriam falar sobre sexualidade e diversidade de forma adequada à idade dos alunos.',
    terms:[['diversidade','Diferenças entre pessoas, incluindo formas de família, orientação sexual, identidade, cultura e outros aspectos.']],
    help:{ plain:'A pergunta é se a escola pode abordar esses temas de forma planejada e adaptada para cada idade.', agree:'Você vê a escola como um lugar que também pode informar e prevenir preconceito, abuso e desinformação.', disagree:'Você acha que esses assuntos devem ficar principalmente sob responsabilidade das famílias.' } },

  { id:'soc-8', axis:'social', label:'Costumes', core:false, dir:-1,
    text:'O governo deveria proteger mais símbolos e tradições nacionais, mesmo quando parte da população considera isso ultrapassado.',
    terms:[['tradições nacionais','Costumes, símbolos e práticas que fazem parte da história e da identidade cultural do país.']],
    help:{ plain:'A pergunta é sobre quanto peso o poder público deve dar à preservação de tradições e símbolos coletivos.', agree:'Você acha importante preservar referências culturais e nacionais, mesmo quando elas parecem antigas para algumas pessoas.', disagree:'Você prefere que costumes e símbolos mudem com a sociedade, sem proteção especial do governo.' } },

  // LIBERDADES
  { id:'lib-1', axis:'liberty', label:'Liberdades', core:true, dir:-1,
    text:'Em algumas situações, vale abrir mão de parte da privacidade para aumentar a segurança.',
    terms:[['privacidade','Direito de manter dados, conversas e aspectos da vida pessoal fora do acesso de outras pessoas ou do governo.']],
    help:{ plain:'Pense em câmeras, dados de celular ou monitoramento. A pergunta é quanto de privacidade pode ser trocado por segurança.', agree:'Você aceita mais monitoramento quando acredita que isso pode prevenir crimes ou ajudar investigações.', disagree:'Você prefere limites fortes ao monitoramento, mesmo que isso torne algumas investigações mais difíceis.' } },
  { id:'lib-2', axis:'liberty', label:'Liberdades', core:true, dir:1,
    text:'O governo deve ter limites fortes para acessar mensagens e dados pessoais.',
    terms:[['dados pessoais','Informações ligadas a uma pessoa, como localização, mensagens, documentos, histórico de uso e informações financeiras.']],
    help:{ plain:'A pergunta é sobre o poder do Estado para entrar na vida digital de uma pessoa.', agree:'Você acredita que o governo só deveria acessar dados em situações bem definidas e com controle judicial.', disagree:'Você aceita dar mais acesso às autoridades quando isso ajuda a investigar crimes e ameaças.' } },
  { id:'lib-3', axis:'liberty', label:'Liberdades', core:true, dir:1,
    text:'Uma pessoa deve poder dizer coisas ofensivas sem ser punida pelo governo, desde que não incentive violência.',
    terms:[['incentive violência','Estimular de forma direta que outras pessoas ataquem, machuquem ou matem alguém ou algum grupo.']],
    help:{ plain:'A pergunta separa fala ofensiva de uma fala que pede violência direta.', agree:'Você prefere proteger uma liberdade de expressão bem ampla, mesmo quando a opinião é desagradável.', disagree:'Você aceita mais limites legais para proteger pessoas e grupos de discursos considerados muito nocivos.' } },
  { id:'lib-4', axis:'liberty', label:'Liberdades', core:true, dir:1,
    text:'Cidadãos sem antecedentes deveriam ter mais facilidade para possuir uma arma legalmente.',
    terms:[['possuir uma arma','Ter uma arma de fogo legalmente registrada. Isso não significa necessariamente poder carregá-la na rua.']],
    help:{ plain:'A pergunta é sobre facilitar o acesso legal a armas para pessoas sem antecedentes criminais.', agree:'Você vê a posse de arma como uma liberdade e uma forma possível de defesa pessoal.', disagree:'Você acha que facilitar armas aumenta riscos de acidentes, violência ou mortes.' } },
  { id:'lib-5', axis:'liberty', label:'Liberdades', core:false, dir:1,
    text:'O governo não deveria proibir escolhas pessoais que não causam dano direto a outras pessoas.',
    help:{ plain:'A pergunta é sobre escolhas privadas de adultos quando não existe uma vítima direta.', agree:'Você prefere que cada adulto decida como viver, mesmo quando outras pessoas consideram aquela escolha errada ou imoral.', disagree:'Você aceita que o governo proíba alguns comportamentos para proteger valores sociais, saúde ou ordem pública.' } },
  { id:'lib-6', axis:'liberty', label:'Liberdades', core:false, dir:-1,
    text:'Em grandes protestos, manter a ordem pode ser mais importante do que permitir toda forma de manifestação.',
    help:{ plain:'A pergunta compara liberdade de protestar com o dever do governo de manter ruas, serviços e segurança funcionando.', agree:'Você aceita mais limites a protestos quando eles causam grande desordem ou risco.', disagree:'Você prefere dar bastante espaço aos protestos, mesmo quando eles atrapalham a rotina ou causam transtornos.' } },
  { id:'lib-7', axis:'liberty', label:'Liberdades', core:false, dir:-1,
    text:'O governo deveria poder mandar redes sociais remover conteúdos falsos que possam causar dano público.',
    terms:[['dano público','Risco relevante para a coletividade, como fraude, violência, saúde pública ou interferência grave em processos democráticos.']],
    help:{ plain:'A pergunta é sobre dar ao poder público mais capacidade para obrigar plataformas a remover certos conteúdos.', agree:'Você considera aceitável remover conteúdos em situações graves para evitar danos coletivos.', disagree:'Você teme que esse poder seja usado como censura e prefere regras mais limitadas.' } },

  { id:'lib-8', axis:'liberty', label:'Liberdades', core:false, dir:1,
    text:'Adultos deveriam poder tomar decisões arriscadas sobre a própria vida, desde que não prejudiquem outras pessoas.',
    terms:[['decisões arriscadas','Escolhas pessoais que podem trazer riscos para a própria pessoa, mas não causam dano direto a terceiros.']],
    help:{ plain:'A pergunta mede quanto o Estado deve interferir em escolhas pessoais que podem fazer mal principalmente a quem escolhe.', agree:'Você prefere deixar o adulto decidir por si mesmo, mesmo quando a escolha parece imprudente.', disagree:'Você aceita que o governo limite certas escolhas para proteger as pessoas de riscos graves.' } },

  // IGUALDADE
  { id:'equ-1', axis:'equality', label:'Igualdade', core:true, dir:1,
    text:'Quem nasce em uma família pobre costuma ter menos oportunidades e o governo deve ajudar a compensar isso.',
    help:{ plain:'A pergunta é sobre quanto as condições de nascimento influenciam as chances de uma pessoa.', agree:'Você acha que políticas públicas devem tentar reduzir a diferença entre quem começa a vida com mais e menos recursos.', disagree:'Você prefere que o governo interfira menos e dê mais peso às escolhas e ao esforço de cada pessoa.' } },
  { id:'equ-2', axis:'equality', label:'Igualdade', core:true, dir:1,
    text:'Programas como Bolsa Família são importantes para garantir um mínimo de dignidade.',
    terms:[['transferência de renda','Programa em que o governo entrega dinheiro diretamente a famílias ou pessoas que atendem determinados critérios.']],
    help:{ plain:'A pergunta é sobre programas públicos que transferem renda diretamente para famílias de baixa renda.', agree:'Você considera esses programas uma proteção necessária para quem não consegue manter condições básicas sozinho.', disagree:'Você acha que esse tipo de programa deve ser menor, mais curto ou substituído por outras formas de apoio.' } },
  { id:'equ-3', axis:'equality', label:'Igualdade', core:true, dir:1,
    text:'Cotas podem ser usadas para diminuir desigualdades históricas no acesso a universidades e empregos públicos.',
    terms:[['cotas','Reserva de parte das vagas para grupos definidos por critérios como renda, escola pública, raça, deficiência ou outros previstos em lei.']],
    help:{ plain:'A pergunta é sobre reservar parte das vagas para grupos que tiveram menos acesso a oportunidades ao longo do tempo.', agree:'Você vê as cotas como uma ferramenta para corrigir desigualdades de acesso.', disagree:'Você prefere que todas as vagas sejam disputadas pelos mesmos critérios, sem reserva por grupo.' } },
  { id:'equ-4', axis:'equality', label:'Igualdade', core:true, dir:1,
    text:'Quem ganha muito mais deveria pagar uma porcentagem maior de impostos.',
    terms:[['porcentagem maior de impostos','Modelo em que a taxa de imposto aumenta conforme a renda ou patrimônio da pessoa cresce.']],
    help:{ plain:'A pergunta é se pessoas de renda muito alta deveriam contribuir proporcionalmente mais.', agree:'Você considera justo que quem tem mais capacidade financeira pague uma parcela maior para financiar serviços públicos.', disagree:'Você prefere taxas mais parecidas para todos e teme punir quem ganha ou produz mais.' } },
  { id:'equ-5', axis:'equality', label:'Igualdade', core:false, dir:-1,
    text:'Criar empregos e fazer a economia crescer é mais importante do que reduzir a diferença entre ricos e pobres.',
    help:{ plain:'A pergunta compara crescimento econômico com redução direta da desigualdade.', agree:'Você aceita alguma desigualdade se a economia estiver crescendo e mais pessoas estiverem encontrando trabalho.', disagree:'Você acha que crescimento sozinho não basta e que reduzir a distância entre ricos e pobres também deve ser prioridade.' } },
  { id:'equ-6', axis:'equality', label:'Igualdade', core:false, dir:1,
    text:'Heranças muito grandes deveriam pagar mais impostos do que pagam hoje.',
    terms:[['herança','Dinheiro, imóveis e outros bens que passam para outra pessoa após a morte do proprietário.']],
    help:{ plain:'A pergunta é sobre cobrar mais imposto quando uma pessoa recebe um patrimônio muito grande por herança.', agree:'Você entende que grandes heranças aumentam desigualdades entre quem nasce com e sem patrimônio.', disagree:'Você considera injusto cobrar mais imposto sobre bens que uma família já acumulou e quer transmitir.' } },
  { id:'equ-7', axis:'equality', label:'Igualdade', core:false, dir:-1,
    text:'Benefícios públicos deveriam ser mais focados em quem realmente precisa, em vez de atender todo mundo.',
    terms:[['benefícios públicos','Serviços, auxílios ou vantagens financiados pelo governo.']],
    help:{ plain:'A pergunta compara políticas para todos com políticas direcionadas principalmente às pessoas de menor renda.', agree:'Você prefere concentrar recursos públicos em quem tem mais necessidade.', disagree:'Você prefere serviços e benefícios universais porque eles alcançam toda a população e reduzem diferenças de tratamento.' } },

  { id:'equ-8', axis:'equality', label:'Igualdade', core:false, dir:1,
    text:'Quem ganha muito mais deveria pagar uma parcela maior da renda em impostos do que quem ganha pouco.',
    terms:[['parcela maior da renda','Uma porcentagem maior do que a paga por pessoas de renda mais baixa.']],
    help:{ plain:'A pergunta é sobre imposto progressivo: quem ganha mais paga uma porcentagem maior da própria renda.', agree:'Você acha justo cobrar proporcionalmente mais de quem tem renda alta para financiar serviços e políticas públicas.', disagree:'Você prefere alíquotas mais parecidas entre faixas de renda, para não punir quem ganha mais.' } },

  // SEGURANÇA — 0 prevenção/garantias, 100 repressão/punição
  { id:'sec-1', axis:'security', label:'Segurança', core:true, dir:1,
    text:'Penas mais duras ajudam a reduzir crimes violentos.',
    help:{ plain:'A pergunta é se aumentar o tempo ou a força das punições é uma ferramenta importante contra crimes graves.', agree:'Você acredita que punições mais duras desestimulam crimes e afastam criminosos perigosos das ruas.', disagree:'Você acredita que só aumentar penas tem pouco efeito sem investigação, prevenção e melhoria do sistema prisional.' } },
  { id:'sec-2', axis:'security', label:'Segurança', core:true, dir:1,
    text:'A polícia deveria ter mais liberdade para agir em áreas dominadas pelo crime organizado.',
    terms:[['crime organizado','Grupos estruturados que atuam de forma contínua em crimes como tráfico, extorsão, roubo, lavagem de dinheiro e controle territorial.']],
    help:{ plain:'A pergunta é sobre dar mais autonomia operacional à polícia em locais onde grupos criminosos têm grande controle.', agree:'Você aceita ações policiais mais duras e rápidas para recuperar áreas dominadas por facções.', disagree:'Você prefere regras e fiscalização fortes para reduzir abusos, mesmo que operações fiquem mais limitadas.' } },
  { id:'sec-3', axis:'security', label:'Segurança', core:true, dir:-1,
    text:'Prevenir o crime com escola, emprego e assistência social funciona melhor no longo prazo do que aumentar penas.',
    help:{ plain:'A pergunta compara políticas sociais de prevenção com uma resposta mais focada em punição.', agree:'Você acha que reduzir as causas que empurram pessoas para o crime é mais eficaz no longo prazo.', disagree:'Você acredita que prevenção social é importante, mas que punição e repressão têm papel maior para reduzir crimes.' } },
  { id:'sec-4', axis:'security', label:'Segurança', core:true, dir:-1,
    text:'Prisões deveriam dar mais espaço para estudo, trabalho e recuperação dos presos.',
    terms:[['recuperação','Também chamada de ressocialização: preparar a pessoa presa para voltar à sociedade com menor chance de cometer novos crimes.']],
    help:{ plain:'A pergunta é sobre o quanto a prisão deve tentar preparar o preso para voltar à sociedade, além de puni-lo.', agree:'Você considera estudo e trabalho ferramentas importantes para diminuir a reincidência após a prisão.', disagree:'Você acha que a principal função da prisão é punir e proteger a sociedade, e que recuperação deve ter menos prioridade.' } },
  { id:'sec-5', axis:'security', label:'Segurança', core:true, dir:1,
    text:'Adolescentes de 16 e 17 anos deveriam responder como adultos por crimes muito graves.',
    terms:[['responder como adultos','Ser julgado e punido pelo sistema penal de adultos em vez das regras específicas para adolescentes.']],
    help:{ plain:'A pergunta trata da idade de responsabilidade penal em casos graves.', agree:'Você entende que, em crimes muito graves, jovens de 16 e 17 anos já devem receber punições do sistema adulto.', disagree:'Você prefere manter um sistema específico para adolescentes, mesmo em crimes graves, por considerar que eles ainda estão em formação.' } },
  { id:'sec-6', axis:'security', label:'Segurança', core:false, dir:-1,
    text:'Policiais em serviço deveriam usar câmeras corporais na maior parte das operações.',
    terms:[['câmeras corporais','Pequenas câmeras presas ao uniforme que registram parte da atuação do policial.']],
    help:{ plain:'A pergunta é sobre registrar em vídeo a atuação policial como forma de fiscalização e prova.', agree:'Você vê a câmera como proteção para cidadãos e também para policiais acusados injustamente.', disagree:'Você acha que a câmera pode atrapalhar operações, expor policiais ou limitar decisões rápidas em situações de risco.' } },
  { id:'sec-7', axis:'security', label:'Segurança', core:false, dir:-1,
    text:'A polícia deveria seguir regras mais rígidas sobre uso da força, mesmo que algumas ações fiquem mais lentas.',
    terms:[['uso da força','Uso de força física, armas não letais ou armas de fogo por agentes de segurança.']],
    help:{ plain:'A pergunta compara rapidez de ação com regras que tentam evitar excesso de força policial.', agree:'Você prefere mais controles para reduzir abusos e mortes desnecessárias.', disagree:'Você prefere dar mais margem para o policial decidir rapidamente em situações perigosas.' } },

  { id:'sec-8', axis:'security', label:'Segurança', core:false, dir:1,
    text:'Em áreas dominadas por facções, operações policiais grandes e frequentes podem ser necessárias mesmo com risco de confronto.',
    terms:[['facções','Grupos criminosos organizados que controlam atividades ilegais e, em alguns lugares, também territórios.']],
    help:{ plain:'A pergunta é sobre aceitar operações policiais mais intensas em locais onde grupos criminosos têm forte presença.', agree:'Você aceita mais operações e risco de confronto para enfraquecer o domínio de facções.', disagree:'Você prefere ações mais pontuais e planejadas para reduzir o risco para moradores e policiais.' } },

  // DESENVOLVIMENTO — 0 preservação, 100 exploração econômica
  { id:'dev-1', axis:'development', label:'Desenvolvimento', core:true, dir:1,
    text:'Grandes obras podem valer a pena mesmo causando algum impacto ambiental.',
    terms:[['impacto ambiental','Mudança causada no meio ambiente, como desmatamento, poluição, perda de habitat ou alteração de rios e solo.']],
    help:{ plain:'A pergunta é se benefícios como empregos, energia ou transporte podem justificar algum dano ambiental.', agree:'Você aceita algum impacto quando o ganho econômico ou de infraestrutura é considerado grande.', disagree:'Você prefere evitar projetos com dano ambiental relevante, mesmo que tragam crescimento ou empregos.' } },
  { id:'dev-2', axis:'development', label:'Desenvolvimento', core:true, dir:-1,
    text:'A Amazônia deveria ter regras ambientais mais rígidas do que outras regiões do país.',
    help:{ plain:'A pergunta é se a importância ambiental da Amazônia justifica regras especiais e mais restritivas.', agree:'Você considera a floresta um patrimônio estratégico que exige proteção acima da média.', disagree:'Você prefere regras mais parecidas no país todo e mais espaço para atividades econômicas legais na região.' } },
  { id:'dev-3', axis:'development', label:'Desenvolvimento', core:true, dir:1,
    text:'Regras ambientais muito rígidas podem atrapalhar empregos e crescimento econômico.',
    help:{ plain:'A pergunta mede quanto peso você dá ao custo econômico de regras ambientais.', agree:'Você acha que algumas exigências precisam ser simplificadas para investimentos e empregos não travarem.', disagree:'Você acha que proteger o ambiente justifica regras exigentes, mesmo quando projetos ficam mais caros ou lentos.' } },
  { id:'dev-4', axis:'development', label:'Desenvolvimento', core:true, dir:-1,
    text:'O Brasil deveria depender menos de petróleo, mesmo que isso reduza receita no curto prazo.',
    terms:[['depender menos de petróleo','Diminuir gradualmente a importância de petróleo e derivados na energia, transporte e receita pública, ampliando outras fontes.']],
    help:{ plain:'A pergunta compara ganhos atuais do petróleo com uma transição mais rápida para outras fontes de energia.', agree:'Você aceita perder parte da receita no curto prazo para acelerar fontes mais limpas e reduzir emissões.', disagree:'Você prefere aproveitar as reservas e a receita do petróleo enquanto a transição acontece de forma mais lenta.' } },
  { id:'dev-5', axis:'development', label:'Desenvolvimento', core:false, dir:-1,
    text:'Mineração e agronegócio só deveriam se expandir depois de uma análise ambiental rigorosa.',
    terms:[['análise ambiental','Estudo dos possíveis danos de um projeto e das medidas necessárias para evitar, reduzir ou compensar esses danos.']],
    help:{ plain:'A pergunta é sobre exigir estudos e condições ambientais antes de ampliar atividades econômicas.', agree:'Você prefere verificar riscos ambientais com cuidado antes de autorizar a expansão.', disagree:'Você teme que exigências longas demais impeçam investimentos e prefere processos mais simples e rápidos.' } },
  { id:'dev-6', axis:'development', label:'Desenvolvimento', core:false, dir:1,
    text:'O Brasil pode explorar petróleo em áreas ambientalmente sensíveis se houver tecnologia e fiscalização para reduzir os riscos.',
    terms:[['áreas ambientalmente sensíveis','Regiões em que um acidente ou alteração pode causar danos ambientais especialmente importantes ou difíceis de reparar.']],
    help:{ plain:'A pergunta é se medidas técnicas e fiscalização podem tornar aceitável explorar recursos em áreas de maior risco ambiental.', agree:'Você aceita a exploração se houver regras, tecnologia e fiscalização para controlar os riscos.', disagree:'Você acha que algumas áreas são importantes demais para assumir esse risco, mesmo com controles.' } },
  { id:'dev-7', axis:'development', label:'Desenvolvimento', core:false, dir:1,
    text:'É melhor permitir um projeto que gere muitos empregos e obrigar a empresa a compensar o dano ambiental do que proibir o projeto.',
    terms:[['compensar o dano ambiental','Financiar recuperação, preservação ou outras medidas para compensar impactos que não puderam ser evitados.']],
    help:{ plain:'A pergunta compara proibir um projeto com permitir que ele aconteça mediante compensações ambientais.', agree:'Você prefere viabilizar o investimento e cobrar medidas para reparar ou compensar os impactos.', disagree:'Você entende que alguns danos não podem ser compensados e que certos projetos deveriam ser barrados.' } },
  { id:'dev-8', axis:'development', label:'Desenvolvimento', core:false, dir:-1,
    text:'Projetos com grande impacto ambiental deveriam poder ser barrados mesmo quando prometem muitos empregos.',
    terms:[['barrados','Impedidos de seguir adiante por decisão de órgãos responsáveis ou da Justiça.']],
    help:{ plain:'A pergunta é sobre situações em que o benefício econômico é grande, mas o dano ambiental também pode ser.', agree:'Você acha que alguns riscos ambientais são importantes demais para serem aceitos, mesmo com geração de empregos.', disagree:'Você prefere permitir o projeto quando o ganho econômico é grande e os impactos podem ser reduzidos ou compensados.' } },


  // INSTITUIÇÕES — 0 mais freios e contrapesos, 100 mais força para a maioria eleita
  { id:'ins-1', axis:'institutions', label:'Instituições', core:true, dir:-1,
    text:'Se o Congresso aprovar uma lei que fere a Constituição, o STF deve poder barrar essa lei.',
    terms:[['Constituição','Conjunto das regras fundamentais do país, que define direitos e limites para os poderes públicos.'],['STF','Supremo Tribunal Federal, a corte responsável por interpretar a Constituição em decisões de alcance nacional.']],
    help:{ plain:'A pergunta é sobre o que deve acontecer quando uma lei aprovada pelo Congresso entra em conflito com as regras da Constituição.', agree:'Você acha importante que exista um tribunal capaz de limitar decisões do Congresso quando elas violam regras constitucionais.', disagree:'Você prefere dar mais peso à decisão dos representantes eleitos e limitar situações em que o STF pode barrá-los.' } },
  { id:'ins-2', axis:'institutions', label:'Instituições', core:true, dir:1,
    text:'Um presidente eleito deveria ter mais liberdade para colocar seu plano de governo em prática sem tantos bloqueios de outros poderes.',
    terms:[['outros poderes','Principalmente Congresso e Judiciário, que podem aprovar, alterar, fiscalizar ou barrar decisões do Executivo.']],
    help:{ plain:'Aqui a questão é quanto os outros poderes devem conseguir limitar um presidente que venceu a eleição.', agree:'Você acha que quem venceu a eleição precisa de mais espaço para cumprir o programa escolhido pela maioria.', disagree:'Você prefere que Congresso e Justiça tenham bastante poder para revisar e limitar decisões do presidente.' } },
  { id:'ins-3', axis:'institutions', label:'Instituições', core:true, dir:-1,
    text:'Órgãos de fiscalização e controle devem poder investigar o governo mesmo quando isso atrapalha decisões políticas.',
    terms:[['órgãos de fiscalização e controle','Instituições como tribunais de contas, controladorias, Ministério Público e outros órgãos que acompanham o uso do poder e do dinheiro público.']],
    help:{ plain:'A pergunta mede quanto de independência você quer dar a instituições que fiscalizam quem está governando.', agree:'Você prefere que essas instituições tenham liberdade para investigar e cobrar o governo mesmo quando isso gera conflito.', disagree:'Você acha que controles não deveriam travar demais um governo eleito tentando colocar suas políticas em prática.' } },
  { id:'ins-4', axis:'institutions', label:'Instituições', core:true, dir:1,
    text:'Assuntos muito importantes deveriam ser decididos mais vezes por voto direto da população.',
    terms:[['voto direto da população','Plebiscitos e referendos em que eleitores votam diretamente sobre uma proposta, em vez de deixar a decisão apenas com representantes ou tribunais.']],
    help:{ plain:'A pergunta compara decisões tomadas diretamente pelos eleitores com decisões feitas por instituições e representantes.', agree:'Você gostaria que a população tivesse mais chances de decidir diretamente temas importantes.', disagree:'Você prefere que representantes eleitos e instituições especializadas tomem a maior parte dessas decisões.' } },
  { id:'ins-5', axis:'institutions', label:'Instituições', core:false, dir:1,
    text:'O Congresso deveria ter um caminho mais simples para rever decisões do STF quando considerar que o tribunal foi longe demais.',
    terms:[['rever decisões do STF','Criar novas regras ou mecanismos políticos que reduzam ou alterem os efeitos de decisões do Supremo em determinados assuntos.']],
    help:{ plain:'A pergunta é sobre o equilíbrio de força entre Congresso e STF quando existe conflito entre os dois.', agree:'Você quer dar mais instrumentos aos representantes eleitos para reagir a decisões do Supremo.', disagree:'Você prefere que decisões constitucionais do STF sejam mais difíceis de mudar por pressão política do Congresso.' } },
  { id:'ins-6', axis:'institutions', label:'Instituições', core:false, dir:-1,
    text:'O presidente não deveria poder decidir temas muito importantes por decreto sem passar pelo Congresso.',
    terms:[['decreto','Ato do presidente usado para regulamentar ou organizar medidas do governo sem passar pelo mesmo processo de uma lei comum.']],
    help:{ plain:'Aqui você decide quanto poder o presidente deveria ter para agir sozinho em assuntos relevantes.', agree:'Você prefere que decisões grandes precisem de negociação e aprovação do Congresso.', disagree:'Você aceita que o presidente tenha mais ferramentas para agir rapidamente sem depender tanto do Congresso.' } },
  { id:'ins-7', axis:'institutions', label:'Instituições', core:false, dir:-1,
    text:'Instituições técnicas deveriam continuar independentes mesmo quando suas decisões contrariam o governo eleito.',
    terms:[['instituições técnicas','Órgãos que tomam decisões especializadas e possuem algum grau de autonomia em relação ao governo do momento.']],
    help:{ plain:'A pergunta é sobre proteger decisões técnicas da pressão política de quem está governando.', agree:'Você valoriza órgãos independentes que possam discordar do governo quando suas regras e análises apontarem outro caminho.', disagree:'Você acha que um governo eleito deveria ter mais influência sobre órgãos que executam políticas públicas.' } },
  { id:'ins-8', axis:'institutions', label:'Instituições', core:false, dir:1,
    text:'Quando um governo vence a eleição com apoio claro da maioria, as instituições deveriam evitar barrar suas principais propostas.',
    terms:[['instituições','Congresso, tribunais e órgãos independentes que dividem ou fiscalizam o poder político.']],
    help:{ plain:'A pergunta compara o peso do resultado eleitoral com o papel das instituições em colocar limites no governo.', agree:'Você acha que a maioria que venceu a eleição deve ter bastante espaço para transformar suas propostas em políticas.', disagree:'Você prefere que os limites institucionais continuem fortes mesmo quando o governo tem apoio eleitoral amplo.' } },

];


let testMode = 'short';
let questions = questionBank.filter(q => q.core);

const scale = [
  { label: 'Discordo totalmente', value: -2 },
  { label: 'Discordo', value: -1 },
  { label: 'Neutro / depende', value: 0 },
  { label: 'Concordo', value: 1 },
  { label: 'Concordo totalmente', value: 2 },
];

const stages = [
  { key: 'economy', label: 'Economia', color: '#d9ff45' },
  { key: 'social', label: 'Costumes', color: '#ffb4d1' },
  { key: 'liberty', label: 'Liberdades', color: '#C7B7F6' },
  { key: 'equality', label: 'Igualdade', color: '#ff5c35' },
  { key: 'security', label: 'Segurança', color: '#C8A98C' },
  { key: 'development', label: 'Desenvolvimento', color: '#A8DEC8' },
  { key: 'institutions', label: 'Instituições', color: '#C9C9C6' },
];

const app = document.getElementById('app');
const restartDialog = document.getElementById('restart-dialog');
const saveDialog = document.getElementById('save-dialog');
const headerSave = document.getElementById('header-save');
const headerRedo = document.getElementById('header-redo');
const candidateFaceTooltip = document.getElementById('candidate-face-tooltip');
const candidateFaceImg = document.getElementById('candidate-face-img');
const candidateFaceName = document.getElementById('candidate-face-name');
const candidateFaceCompare = document.getElementById('candidate-face-compare');
const ideologyHoverChip = document.getElementById('ideology-hover-chip');
const glossaryTooltip = document.getElementById('glossary-tooltip');
const questionExplainDialog = document.getElementById('question-explain-dialog');
let current = 0;
let answers = [];
let isTransitioning = false;
let lastResult = null;
let questionHelpTimer = null;
let questionHelpHideTimer = null;
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
const brandLogoImage = new Image();
brandLogoImage.src = 'logo-segundo-turno.svg';

function setView(view) {
  document.body.classList.remove('view-intro', 'view-mode', 'view-question', 'view-result');
  document.body.classList.add(`view-${view}`);
  document.documentElement.style.overflow = view === 'question' ? 'hidden' : '';
}


function cloneTemplate(templateId) {
  const frag = document.getElementById(templateId).content.cloneNode(true);
  return frag.firstElementChild;
}

function mount(templateId) {
  app.innerHTML = '';
  const node = cloneTemplate(templateId);
  app.appendChild(node);
  node.classList.add('enter');
  return node;
}

function setTestMode(mode) {
  testMode = mode === 'detailed' ? 'detailed' : 'short';
  questions = testMode === 'detailed' ? [...questionBank] : questionBank.filter(q => q.core);
  current = 0;
  answers = [];
  const topContext = document.querySelector('.top-context');
  if (topContext) topContext.textContent = `7 eixos · ${questions.length} perguntas`;
}

function showIntro() {
  current = 0;
  answers = [];
  setView('intro');
  const topContext = document.querySelector('.top-context');
  if (topContext) topContext.textContent = '7 eixos · escolha 30 ou 56 perguntas';
  const section = mount('intro-template');
  section.querySelector('#start-btn').addEventListener('click', showModeSelection);
  Object.values(candidateVisuals).forEach(({ photo }) => { const img = new Image(); img.src = photo; });
  bindCandidateFaceHover(section);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showModeSelection() {
  setView('mode');
  const section = mount('test-mode-template');
  section.querySelectorAll('[data-test-mode]').forEach(button => {
    button.addEventListener('click', () => {
      setTestMode(button.dataset.testMode);
      showQuestion('forward', false);
    });
  });
  section.querySelector('[data-mode-back]')?.addEventListener('click', showIntro);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
}

function renderQuestionText(q) {
  let html = escapeHtml(q.text);
  (q.terms || []).forEach(([term, definition]) => {
    const escapedTerm = escapeHtml(term);
    const escapedDefinition = escapeHtml(definition);
    const pattern = new RegExp(escapedTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    html = html.replace(pattern, match => `<span class="glossary-term" tabindex="0" data-definition="${escapedDefinition}">${match}</span>`);
  });
  return html;
}

function openQuestionExplanation(q) {
  if (!questionExplainDialog?.showModal) return;
  glossaryTooltip?.classList.remove('is-visible');
  document.getElementById('question-explain-title').textContent = q.text;
  document.getElementById('question-explain-plain').textContent = q.help.plain;
  document.getElementById('question-explain-agree').textContent = q.help.agree;
  document.getElementById('question-explain-disagree').textContent = q.help.disagree;
  questionExplainDialog.showModal();
}

function bindGlossaryTerms(section) {
  if (!glossaryTooltip) return;
  const terms = section.querySelectorAll('.glossary-term');
  const position = (target, event = null) => {
    const rect = target.getBoundingClientRect();
    let x = event?.clientX ?? (rect.left + rect.width / 2);
    let y = event?.clientY ?? rect.bottom;
    const width = 300;
    x = Math.min(window.innerWidth - width - 16, Math.max(16, x));
    y = Math.min(window.innerHeight - 110, Math.max(16, y));
    glossaryTooltip.style.left = `${x}px`;
    glossaryTooltip.style.top = `${y}px`;
  };
  const show = (target, event = null) => {
    glossaryTooltip.textContent = target.dataset.definition || '';
    position(target, event);
    glossaryTooltip.classList.add('is-visible');
    glossaryTooltip.setAttribute('aria-hidden', 'false');
  };
  const hide = () => {
    glossaryTooltip.classList.remove('is-visible');
    glossaryTooltip.setAttribute('aria-hidden', 'true');
  };
  terms.forEach(term => {
    term.addEventListener('mouseenter', e => show(term, e));
    term.addEventListener('mousemove', e => position(term, e));
    term.addEventListener('mouseleave', hide);
    term.addEventListener('focus', () => show(term));
    term.addEventListener('blur', hide);
    term.addEventListener('click', e => { e.stopPropagation(); show(term, e); });
  });
}

function clearQuestionHelpTimer() {
  if (questionHelpTimer) {
    window.clearTimeout(questionHelpTimer);
    questionHelpTimer = null;
  }
  if (questionHelpHideTimer) {
    window.clearTimeout(questionHelpHideTimer);
    questionHelpHideTimer = null;
  }
  document.querySelectorAll('.question-info-btn.is-attention').forEach(el => el.classList.remove('is-attention'));
  document.querySelectorAll('.question-help-nudge.is-visible').forEach(el => {
    el.classList.remove('is-visible');
    el.setAttribute('aria-hidden', 'true');
  });
}

function scheduleQuestionHelpNudge(root) {
  clearQuestionHelpTimer();
  const button = root?.querySelector?.('[data-question-info]');
  const nudge = root?.querySelector?.('[data-question-nudge]');
  if (!button || !nudge) return;
  questionHelpTimer = window.setTimeout(() => {
    button.classList.add('is-attention');
    nudge.classList.add('is-visible');
    nudge.setAttribute('aria-hidden', 'false');
    questionHelpHideTimer = window.setTimeout(() => {
      button.classList.remove('is-attention');
      nudge.classList.remove('is-visible');
      nudge.setAttribute('aria-hidden', 'true');
      questionHelpHideTimer = null;
    }, 5000);
  }, 30000);
}

function buildQuestionSection(index) {
  const section = cloneTemplate('question-template');
  const q = questions[index];

  section.querySelector('[data-question-count]').textContent = `${String(index + 1).padStart(2,'0')} / ${questions.length}`;
  section.querySelector('[data-question-index]').textContent = String(index + 1).padStart(2,'0');
  section.querySelector('[data-question-kicker]').textContent = `SOBRE ${q.label.toUpperCase()}`;
  section.querySelector('[data-question-text]').innerHTML = renderQuestionText(q);
  section.querySelector('[data-progress-fill]').style.width = `${((index + 1) / questions.length) * 100}%`;

  const stageIndex = stages.findIndex(stage => stage.key === q.axis);
  section.querySelector('[data-progress-stages]').innerHTML = stages.map((stage, i) => `
    <span class="progress-stage stage-${stage.key} ${i === stageIndex ? 'is-active' : ''} ${i < stageIndex ? 'is-complete' : ''}">${stage.label}</span>
  `).join('');
  const stageCounts = stages.map(stage => questions.filter(item => item.axis === stage.key).length);
  let cumulativeQuestions = 0;
  section.querySelector('[data-progress-dividers]').innerHTML = stageCounts.slice(0, -1).map(count => {
    cumulativeQuestions += count;
    return `<span class="progress-divider" style="left:${(cumulativeQuestions/questions.length)*100}%"></span>`;
  }).join('');

  const stageColor = stages[stageIndex]?.color || '#ff5c35';
  section.style.setProperty('--stage-color', stageColor);
  const shape = section.querySelector('[data-shape-question]');
  shape.style.background = stageColor;
  shape.style.borderRadius = `${35 + (index*7)%30}% ${65 - (index*7)%30}% ${40 + (index*11)%25}% ${60 - (index*11)%25}% / 55% 42% 58% 45%`;

  const backBtn = section.querySelector('[data-back]');
  if (index === 0) backBtn.classList.add('is-hidden');
  backBtn.addEventListener('click', goBack);
  section.querySelector('[data-question-info]')?.addEventListener('click', () => { clearQuestionHelpTimer(); openQuestionExplanation(q); });

  const answersEl = section.querySelector('[data-answers]');
  scale.forEach((item, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    if (answers[index] === item.value) btn.classList.add('is-selected');
    btn.innerHTML = `<strong>${item.label}</strong><span>0${i+1}</span>`;
    btn.addEventListener('click', () => selectAnswer(item.value));
    answersEl.appendChild(btn);
  });
  bindGlossaryTerms(section);
  return section;
}

function syncQuestionChrome(screen, source) {
  screen.querySelector('[data-question-count]').textContent = source.querySelector('[data-question-count]').textContent;
  screen.querySelector('[data-progress-stages]').innerHTML = source.querySelector('[data-progress-stages]').innerHTML;
  screen.querySelector('[data-progress-fill]').style.width = source.querySelector('[data-progress-fill]').style.width;
  screen.querySelector('[data-progress-dividers]').innerHTML = source.querySelector('[data-progress-dividers]').innerHTML;
  screen.style.setProperty('--stage-color', source.style.getPropertyValue('--stage-color'));

  const shape = screen.querySelector('[data-shape-question]');
  const sourceShape = source.querySelector('[data-shape-question]');
  shape.style.background = sourceShape.style.background;
  shape.style.borderRadius = sourceShape.style.borderRadius;
}

function showQuestion(direction = 'forward', animate = true) {
  setView('question');
  const screen = app.querySelector('.question-screen');
  const source = buildQuestionSection(current);

  if (!animate || !screen) {
    app.innerHTML = '';
    app.appendChild(source);
    source.classList.add('enter');
    isTransitioning = false;
    scheduleQuestionHelpNudge(source);
    return;
  }

  const stage = screen.querySelector('[data-question-stage]');
  const oldLayout = stage.querySelector('.question-layout');
  const nextLayout = source.querySelector('.question-layout');
  isTransitioning = true;

  nextLayout.classList.add(direction === 'forward' ? 'push-in-right' : 'push-in-left');
  oldLayout.classList.add(direction === 'forward' ? 'push-out-left' : 'push-out-right');
  stage.appendChild(nextLayout);
  scheduleQuestionHelpNudge(nextLayout);

  // Progress and background remain fixed; only their state changes while the question content slides.
  syncQuestionChrome(screen, source);

  window.setTimeout(() => {
    oldLayout.remove();
    nextLayout.classList.remove('push-in-right', 'push-in-left');
    isTransitioning = false;
  }, 835);
}

function selectAnswer(value) {
  if (isTransitioning) return;
  clearQuestionHelpTimer();
  glossaryTooltip?.classList.remove('is-visible');
  answers[current] = value;

  if (current >= questions.length - 1) {
    const layout = app.querySelector('.question-stage .question-layout');
    layout?.classList.add('push-out-left');
    isTransitioning = true;
    window.setTimeout(() => {
      isTransitioning = false;
      showResult();
    }, 835);
    return;
  }

  current += 1;
  showQuestion('forward', true);
}

function goBack() {
  if (isTransitioning || current === 0) return;
  clearQuestionHelpTimer();
  glossaryTooltip?.classList.remove('is-visible');
  current -= 1;
  showQuestion('back', true);
}

function axisScore(axis) {
  const items = questions
    .map((q, i) => ({ ...q, answer: answers[i] ?? 0 }))
    .filter(q => q.axis === axis);
  const raw = items.reduce((sum, q) => sum + q.answer * q.dir, 0);
  const max = items.length * 2;
  return Math.round(((raw + max) / (2 * max)) * 100);
}

function distance(a, b) {
  return Math.sqrt(Object.keys(a).reduce((sum, key) => sum + Math.pow(a[key] - b[key], 2), 0));
}

const ideologies = [
  { name: 'Social-liberalismo', v: { economy: 56, social: 78, liberty: 66, equality: 64, security: 46, development: 38, institutions: 32 }, desc: 'Mercado com regulação, direitos individuais amplos e uma rede pública relevante.' },
  { name: 'Liberalismo clássico', v: { economy: 80, social: 65, liberty: 83, equality: 35, security: 42, development: 68, institutions: 26 }, desc: 'Livre mercado, Estado limitado e forte proteção às liberdades individuais.' },
  { name: 'Social-democracia', v: { economy: 34, social: 76, liberty: 62, equality: 82, security: 42, development: 32, institutions: 30 }, desc: 'Economia de mercado combinada a serviços públicos e redistribuição robustos.' },
  { name: 'Progressismo de esquerda', v: { economy: 24, social: 90, liberty: 70, equality: 88, security: 30, development: 22, institutions: 40 }, desc: 'Mudança social ampla, direitos civis e forte preocupação com desigualdade estrutural.' },
  { name: 'Libertarianismo', v: { economy: 90, social: 82, liberty: 96, equality: 20, security: 34, development: 76, institutions: 22 }, desc: 'Máxima liberdade econômica e pessoal, com Estado bastante reduzido.' },
  { name: 'Liberal-conservadorismo', v: { economy: 76, social: 38, liberty: 60, equality: 34, security: 72, development: 74, institutions: 56 }, desc: 'Mercado forte, responsabilidade individual e maior apego a normas sociais tradicionais.' },
  { name: 'Conservadorismo', v: { economy: 62, social: 22, liberty: 38, equality: 35, security: 82, development: 66, institutions: 64 }, desc: 'Ordem, tradição, responsabilidade individual e mudanças sociais mais graduais.' },
  { name: 'Comunitarismo', v: { economy: 38, social: 45, liberty: 28, equality: 74, security: 58, development: 34, institutions: 48 }, desc: 'Coesão social, proteção coletiva e maior disposição para intervenção estatal.' },
];

/*
  Candidate positions are approximate placements on this quiz's seven axes,
  synthesized from 2026 government plans and public proposals. They are only
  used to render a neutral side-by-side chart and thematic-distance summary.
  The distance is descriptive and is not a voting recommendation or endorsement.
*/
const candidates2026 = {
  lula: { economy: 30, social: 76, liberty: 58, equality: 86, security: 58, development: 42, institutions: 38 },
  flavio: { economy: 82, social: 24, liberty: 38, equality: 38, security: 88, development: 80, institutions: 62 },
};

const candidateVisuals = {
  lula: {
    name: 'Lula',
    // Foto oficial do candidato publicada pelo TSE para a eleição presidencial de 2026.
    photo: 'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002542548.jpeg',
  },
  flavio: {
    name: 'Flávio',
    photo: 'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002551544.jpeg',
  },
};


const resultAxisConfigs = [
  { key:'economy', name:'Economia', low:'+ Estado', high:'+ Mercado', reverse:false, color:'var(--acid)' },
  { key:'social', name:'Costumes', low:'Progressista', high:'Conservador', reverse:true, color:'var(--pink)' },
  { key:'liberty', name:'Liberdades', low:'+ Liberdade', high:'+ Autoridade', reverse:true, color:'var(--lavender)' },
  { key:'equality', name:'Igualdade', low:'+ Proteção', high:'+ Mérito', reverse:true, color:'var(--accent)' },
  { key:'security', name:'Segurança', low:'Prevenção', high:'Punição', reverse:false, color:'var(--security)' },
  { key:'development', name:'Desenvolvimento', low:'Preservação', high:'Exploração econômica', reverse:false, color:'var(--development)' },
  { key:'institutions', name:'Instituições', low:'Freios e contrapesos', high:'Força da maioria eleita', reverse:false, color:'var(--institutions)' },
];

const comparisonAxisConfigs = [
  { key:'economy', name:'Economia', low:'+ Estado', high:'+ Mercado', reverse:false, color:'var(--acid)' },
  { key:'social', name:'Costumes', low:'Progressista', high:'Conservador', reverse:true, color:'var(--pink)' },
  { key:'liberty', name:'Liberdades', low:'+ Liberdade', high:'+ Autoridade', reverse:true, color:'var(--lavender)' },
  { key:'equality', name:'Igualdade', low:'+ Proteção', high:'+ Mérito', reverse:true, color:'var(--accent)' },
  { key:'security', name:'Segurança', low:'Prevenção', high:'Punição', reverse:false, color:'var(--security)' },
  { key:'development', name:'Desenvolvimento', low:'Preservação', high:'Exploração econômica', reverse:false, color:'var(--development)' },
  { key:'institutions', name:'Instituições', low:'Freios e contrapesos', high:'Força da maioria eleita', reverse:false, color:'var(--institutions)' },
];

// Aproximações interpretativas baseadas em posições e planos públicos; não são endosso ou recomendação.
const otherPoliticians = [
  { name:'Romeu Zema', party:'NOVO', photo:'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002539826.jpeg', v:{ economy:88, social:42, liberty:58, equality:28, security:78, development:82, institutions:44 } },
  { name:'Ronaldo Caiado', party:'PSD', photo:'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002551932.jpeg', v:{ economy:68, social:28, liberty:38, equality:38, security:91, development:70, institutions:52 } },
  { name:'Renan Santos', party:'MISSÃO', photo:'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002540694.jpeg', v:{ economy:84, social:58, liberty:72, equality:30, security:70, development:66, institutions:34 } },
  { name:'Edmilson Costa', party:'PCB', photo:'https://resultados.tse.jus.br/oficial/ele2026/6257/fotos/br/280002551975.jpeg', v:{ economy:12, social:86, liberty:62, equality:94, security:28, development:20, institutions:46 } },
];

function thematicSimilarity(a,b) {
  const keys = ['economy','social','liberty','equality','security','development','institutions'];
  const avg = keys.reduce((sum,key)=>sum+Math.abs(a[key]-b[key]),0)/keys.length;
  return Math.max(0, Math.min(100, Math.round(100-avg)));
}

function comparisonDisplayValue(axis, value) {
  return axis.reverse ? 100-value : value;
}

function compactAxisPhrase(axis, value) {
  const display = value;
  const strength = Math.round(Math.abs(display-50)*2);
  if (strength <= 8) return 'equilibrado';
  return `${strength}% ${display < 50 ? axis.low : axis.high}`;
}

function buildResultTagline(scores) {
  const descriptors = {
    economy: ['mais estatista na economia','mais pró-mercado'],
    social: ['mais conservador nos costumes','mais progressista nos costumes'],
    liberty: ['mais favorável à autoridade','mais liberal nas liberdades civis'],
    equality: ['mais voltado ao mérito individual','mais favorável à proteção social'],
    security: ['mais voltado à prevenção e às garantias','mais favorável a repressão e punição'],
    development: ['mais preservacionista','mais desenvolvimentista'],
    institutions: ['mais favorável a freios e contrapesos','mais favorável à força da maioria eleita'],
  };
  const strongest = resultAxisConfigs
    .map(axis => ({ axis, score:scores[axis.key], strength:Math.abs(scores[axis.key]-50) }))
    .sort((a,b)=>b.strength-a.strength)
    .slice(0,3)
    .map(item => item.strength <= 7 ? `equilibrado em ${item.axis.name.toLowerCase()}` : descriptors[item.axis.key][item.score < 50 ? 0 : 1]);
  return `Você tende a ser ${strongest[0]}, ${strongest[1]} e ${strongest[2]}.`;
}

function classify(scores) {
  return ideologies
    .map(x => ({ ...x, d: distance(scores, x.v) }))
    .sort((a,b) => a.d - b.d);
}

function descriptor(score, low, high, middle) {
  if (score <= 38) return low;
  if (score >= 62) return high;
  return middle;
}

function spectrumInfo(scores) {
  // Conventional left-right shorthand, weighted mostly by economy and secondarily by redistribution.
  const index = Math.round(scores.economy * 0.65 + (100 - scores.equality) * 0.35);
  let label = 'Centro';
  if (index <= 18) label = 'Extrema-esquerda';
  else if (index <= 35) label = 'Esquerda';
  else if (index <= 47) label = 'Centro-esquerda';
  else if (index <= 53) label = 'Centro';
  else if (index <= 65) label = 'Centro-direita';
  else if (index <= 82) label = 'Direita';
  else label = 'Extrema-direita';

  const social = descriptor(scores.social, 'conservador nos costumes', 'progressista nos costumes', 'moderado nos costumes');
  const liberty = descriptor(scores.liberty, 'mais favorável à autoridade', 'mais liberal em liberdades civis', 'equilibrado em liberdades civis');
  const economy = descriptor(scores.economy, 'mais estatista na economia', 'mais pró-mercado na economia', 'misto na economia');
  const security = descriptor(scores.security, 'mais focado em prevenção e garantias', 'mais focado em repressão e punição', 'equilibrado em segurança');
  const development = descriptor(scores.development, 'mais preservacionista', 'mais favorável à exploração econômica', 'equilibrado entre preservação e desenvolvimento');
  const institutions = descriptor(scores.institutions, 'mais favorável a freios e contrapesos', 'mais favorável à força da maioria eleita', 'equilibrado entre maioria e limites institucionais');
  return { index, label, social, liberty, economy, security, development, institutions };
}

function capitalizeFirst(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ideologyUrl(name) {
  return `ideology.html?slug=${encodeURIComponent(slugify(name))}`;
}

function getIdeologyByName(name) {
  return ideologies.find(item => item.name === name) || ideologies[0];
}

function getCandidateProximity(scores) {
  const keys = ['economy', 'social', 'liberty', 'equality', 'security', 'development', 'institutions'];
  const labels = { economy: 'Economia', social: 'Costumes', liberty: 'Liberdades', equality: 'Igualdade', security: 'Segurança', development: 'Desenvolvimento', institutions: 'Instituições' };
  const averageDistance = candidateKey => keys.reduce((sum, key) => sum + Math.abs(scores[key] - candidates2026[candidateKey][key]), 0) / keys.length;
  const lulaDistance = averageDistance('lula');
  const flavioDistance = averageDistance('flavio');

  const axisResults = keys.map(key => {
    const lula = Math.abs(scores[key] - candidates2026.lula[key]);
    const flavio = Math.abs(scores[key] - candidates2026.flavio[key]);
    const closest = Math.abs(lula - flavio) < 0.5 ? 'tie' : (lula < flavio ? 'lula' : 'flavio');
    return { key, label: labels[key], lula, flavio, closest };
  });

  const lulaAxes = axisResults.filter(item => item.closest === 'lula').length;
  const flavioAxes = axisResults.filter(item => item.closest === 'flavio').length;
  const ties = axisResults.filter(item => item.closest === 'tie').length;
  const averageTie = Math.abs(lulaDistance - flavioDistance) < 0.0001;
  const axesTie = lulaAxes === flavioAxes;
  const totalTie = averageTie && axesTie;

  let closerKey = 'both';
  if (!totalTie) {
    if (averageTie) closerKey = lulaAxes > flavioAxes ? 'lula' : 'flavio';
    else closerKey = lulaDistance < flavioDistance ? 'lula' : 'flavio';
  }

  const meta = {
    both: { name: 'Ambos', otherName: '—', accent: '#8A8A8A' },
    lula: { name: 'Lula', otherName: 'Flávio Bolsonaro', accent: '#EB5665' },
    flavio: { name: 'Flávio Bolsonaro', otherName: 'Lula', accent: '#5578DB' },
  };

  return {
    keys,
    labels,
    axisResults,
    lulaDistance,
    flavioDistance,
    lulaAxes,
    flavioAxes,
    ties,
    totalTie,
    closerKey,
    closerName: meta[closerKey].name,
    otherName: meta[closerKey].otherName,
    closerDistance: totalTie ? lulaDistance : Math.min(lulaDistance, flavioDistance),
    otherDistance: totalTie ? flavioDistance : Math.max(lulaDistance, flavioDistance),
  };
}

function showResult() {
  setView('result');
  const section = mount('result-template');
  const scores = {
    economy: axisScore('economy'),
    social: axisScore('social'),
    liberty: axisScore('liberty'),
    equality: axisScore('equality'),
    security: axisScore('security'),
    development: axisScore('development'),
    institutions: axisScore('institutions'),
  };
  const matches = classify(scores);
  const top = matches[0];
  const spectrum = spectrumInfo(scores);
  lastResult = { scores, matches, top, spectrum };

  section.querySelector('#result-title').innerHTML = top.name.replace('-', '-<br>');
  section.querySelector('#result-summary').textContent = buildResultTagline(scores);
  section.querySelector('#result-spectrum').textContent = spectrum.label;
  section.querySelector('#result-spectrum-copy').textContent = top.desc;
  const aboutCard = section.querySelector('#result-about-card');
  aboutCard.dataset.ideology = top.name;
  aboutCard.setAttribute('aria-label', `Saiba mais sobre ${top.name}`);
  section.querySelector('#result-match-percent').textContent = `${thematicSimilarity(scores, top.v)}%`;
  section.querySelector('#spectrum-chips').innerHTML = [spectrum.economy, spectrum.social, spectrum.liberty, spectrum.security, spectrum.development, spectrum.institutions]
    .map(text => `<span class="spectrum-chip">${text}</span>`).join('');

  const spectrumPointer = section.querySelector('#spectrum-pointer');
  const spectrumTarget = Math.max(2, Math.min(98, spectrum.index));
  spectrumPointer.dataset.target = String(spectrumTarget);
  spectrumPointer.style.left = `${prefersReducedMotion ? spectrumTarget : 50}%`;
  section.querySelector('#spectrum-pointer-label').textContent = spectrum.label;
  section.querySelector('#spectrum-index-label').textContent = `posição ${prefersReducedMotion ? spectrum.index : 0} / 100`;

  const dot = section.querySelector('#compass-dot');
  const dotLeft = Math.max(4, Math.min(96, scores.economy));
  const dotTop = Math.max(4, Math.min(96, 100 - scores.social));
  dot.dataset.left = String(dotLeft);
  dot.dataset.top = String(dotTop);
  dot.style.left = `${prefersReducedMotion ? dotLeft : 50}%`;
  dot.style.top = `${prefersReducedMotion ? dotTop : 50}%`;

  const bars = section.querySelector('#score-bars');
  resultAxisConfigs.forEach(axis => {
    const rawScore = scores[axis.key];
    const score = axis.reverse ? 100 - rawScore : rawScore;
    bars.insertAdjacentHTML('beforeend', `
      <div class="score-row score-${axis.key}" style="--axis-color:${axis.color}" data-score-row data-target="${score}" data-low="${axis.low}" data-high="${axis.high}">
        <div class="score-top"><strong>${axis.name}</strong><span data-score-value>${prefersReducedMotion ? formatBipolarScore(score, axis.low, axis.high) : 'equilibrado'}</span></div>
        <div class="score-track"><span class="score-mid"></span><div class="score-fill" style="left:${prefersReducedMotion ? Math.min(50, score) : 50}%;width:${prefersReducedMotion ? Math.abs(score - 50) : 0}%" data-score-fill></div><span class="score-point" style="left:${prefersReducedMotion ? score : 50}%" data-score-point></span></div>
        <div class="score-ends"><span>${axis.low}</span><span>${axis.high}</span></div>
      </div>`);
  });

  const readings = [
    ['Economia', descriptor(scores.economy, 'Intervencionista', 'Pró-mercado', 'Mista'), economyText(scores.economy)],
    ['Costumes', descriptor(scores.social, 'Conservador', 'Progressista', 'Moderado'), socialText(scores.social)],
    ['Liberdades', descriptor(scores.liberty, 'Mais autoridade', 'Mais liberdade', 'Equilíbrio'), libertyText(scores.liberty)],
    ['Igualdade', descriptor(scores.equality, 'Mérito individual', 'Proteção social', 'Centro'), equalityText(scores.equality)],
    ['Segurança', descriptor(scores.security, 'Prevenção e garantias', 'Repressão e punição', 'Equilíbrio'), securityText(scores.security)],
    ['Desenvolvimento', descriptor(scores.development, 'Preservacionista', 'Desenvolvimentista', 'Equilíbrio'), developmentText(scores.development)],
    ['Instituições', descriptor(scores.institutions, 'Freios e contrapesos', 'Força da maioria', 'Equilíbrio institucional'), institutionsText(scores.institutions)],
  ];
  section.querySelector('#reading-grid').innerHTML = readings.map(([k, title, text]) => `
    <div class="reading-card-hitbox">
      <article class="reading-card"><span class="mono">${k}</span><div><h3>${title}</h3><p>${text}</p></div></article>
    </div>`).join('');

  section.querySelector('#nearby-list').innerHTML = matches.slice(0,3).map((m,i) => `
    <article class="nearby-item ${i===0 ? 'is-user' : ''}" data-ideology="${m.name}" role="link" tabindex="0" aria-label="Saiba mais sobre ${m.name}">
      <span class="num">0${i+1}</span>
      <div class="nearby-title-wrap">
        <h3>${m.name}</h3>
        ${i===0 ? '<span class="nearby-badge mono">seu resultado</span>' : ''}
      </div>
      <p>${m.desc}</p>
    </article>`).join('');

  Object.values(candidateVisuals).forEach(({ photo }) => { const img = new Image(); img.src = photo; });
  renderCandidateComparison(section, scores);
  bindIdeologyLinks(section);
  setupCompassExplorer(section, scores);
  setupResultMotion(section, scores, spectrum);

  section.querySelector('#save-result').addEventListener('click', openSaveDialog);
  section.querySelector('#redo-test').addEventListener('click', () => requestRestart(null, 'result'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderCandidateComparison(section, scores) {
  const axisData = comparisonAxisConfigs;

  const resolveMarkerLayout = (values) => {
    const items = values.map((item, index) => ({ ...item, index, offsetX: 0, stack: false }));
    const sorted = [...items].sort((a,b) => a.value - b.value);
    let i = 0;
    while (i < sorted.length) {
      const cluster = [sorted[i]];
      let j = i + 1;
      while (j < sorted.length && sorted[j].value - cluster[cluster.length - 1].value <= 3.5) {
        cluster.push(sorted[j]);
        j++;
      }
      if (cluster.length > 1) {
        cluster.forEach((item, k) => {
          item.offsetX = (k - (cluster.length - 1) / 2) * 7;
          item.stack = true;
        });
      }
      i = j;
    }
    return items.map(original => sorted.find(x => x.index === original.index) || original);
  };

  const candidateSpectrumHtml = (() => {
    const values = resolveMarkerLayout([
      { cls: 'you', label: 'Você', value: spectrumInfo(scores).index, candidate: '' },
      { cls: 'lula', label: 'Lula', value: spectrumInfo(candidates2026.lula).index, candidate: 'lula' },
      { cls: 'flavio', label: 'Flávio Bolsonaro', value: spectrumInfo(candidates2026.flavio).index, candidate: 'flavio' },
    ]);
    return `
      <div class="candidate-spectrum-shell">
        <div class="candidate-spectrum-zones mono">
          <span>esquerda</span><span>centro</span><span>direita</span>
        </div>
        <div class="candidate-spectrum-rail">
          <span class="candidate-spectrum-tick" style="left:35%"></span>
          <span class="candidate-spectrum-tick" style="left:50%"></span>
          <span class="candidate-spectrum-tick" style="left:65%"></span>
          ${values.map(m => `<span class="candidate-spectrum-marker ${m.cls}${m.stack ? ' is-clustered' : ''}" style="left:${m.value}%;--cluster-x:${m.offsetX}px" data-label="${m.label}" data-axis="Esquerda ↔ direita" data-user-compare="${spectrumInfo(scores).index}%" data-candidate-compare="${m.value}%" ${m.candidate ? `data-candidate="${m.candidate}"` : ''}>${m.candidate ? `<img src="${candidateVisuals[m.candidate].photo}" alt="${m.label}">` : ''}</span>`).join('')}
        </div>
        <div class="candidate-spectrum-labels mono"><span>mais à esquerda</span><span>mais à direita</span></div>
      </div>`;
  })();
  section.querySelector('#candidate-spectrum-line').innerHTML = candidateSpectrumHtml;


  section.querySelector('#candidate-axis-list').innerHTML = axisData.map(axis => {
    const userValue = comparisonDisplayValue(axis, scores[axis.key]);
    const lulaValue = comparisonDisplayValue(axis, candidates2026.lula[axis.key]);
    const flavioValue = comparisonDisplayValue(axis, candidates2026.flavio[axis.key]);
    const userPhrase = compactAxisPhrase(axis,userValue);
    const markers = resolveMarkerLayout([
      { cls: 'you', label: 'Você', value: userValue, candidate: '' },
      { cls: 'lula', label: 'Lula', value: lulaValue, candidate: 'lula', candidatePhrase: compactAxisPhrase(axis,lulaValue) },
      { cls: 'flavio', label: 'Flávio Bolsonaro', value: flavioValue, candidate: 'flavio', candidatePhrase: compactAxisPhrase(axis,flavioValue) },
    ]);
    const markerHtml = markers.map(m => `<span class="candidate-marker ${m.cls}${m.stack ? ' is-clustered' : ''}" style="left:${m.value}%;--cluster-x:${m.offsetX}px" aria-label="${m.label}: ${m.value}" data-label="${m.label}" data-axis="${axis.name}" data-user-compare="${userPhrase}" data-candidate-compare="${m.candidatePhrase || ''}" ${m.candidate ? `data-candidate="${m.candidate}"` : ''}>${m.candidate ? `<img src="${candidateVisuals[m.candidate].photo}" alt="${m.label}">` : ''}</span>`).join('');
    const fillDistance = Math.abs(userValue-50);
    const fillStyle = userValue >= 50
      ? `left:50%;right:auto;width:${fillDistance}%`
      : `left:auto;right:50%;width:${fillDistance}%`;
    return `
      <div class="candidate-axis axis-${axis.key}" style="--axis-color:${axis.color}">
        <div class="candidate-axis-name">
          <strong>${axis.name}</strong>
          <span>${compactAxisPhrase(axis,userValue)}</span>
        </div>
        <div class="candidate-axis-track">
          <div class="candidate-line"></div>
          <div class="candidate-mid"></div>
          <div class="candidate-user-fill" style="${fillStyle}"></div>
          <span class="candidate-user-tooltip" style="left:${userValue}%"><b>VOCÊ</b><strong>${userPhrase}</strong></span>
          ${markerHtml}
          <div class="candidate-track-labels"><span>${axis.low}</span><span>${axis.high}</span></div>
        </div>
      </div>`;
  }).join('');

  renderCandidateProximity(section, scores);
  bindCandidateFaceHover(section);
}

function practicalAlignmentExample(axisKey, candidateKey) {
  const value = candidates2026[candidateKey][axisKey];
  const high = value >= 58;
  const low = value <= 42;
  const examples = {
    economy: high ? 'dar mais espaço para empresas, privatizações e menos intervenção econômica do governo' : low ? 'manter serviços públicos fortes, regulação e uma presença maior do Estado na economia' : 'combinar iniciativa privada com atuação pública conforme o setor',
    social: high ? 'aceitar mais mudanças em temas como família, drogas, aborto e direitos civis' : low ? 'preservar posições mais tradicionais em temas como família, drogas e aborto' : 'tratar mudanças de costumes de forma mais moderada, caso a caso',
    liberty: high ? 'limitar mais a vigilância e a interferência do Estado na vida privada' : low ? 'aceitar mais autoridade e controle estatal quando isso é visto como necessário para ordem e segurança' : 'equilibrar liberdade individual e autoridade conforme a situação',
    equality: high ? 'apoiar mais transferência de renda, cotas e políticas que reduzam desigualdades de partida' : low ? 'dar mais peso ao mérito individual e usar menos redistribuição e políticas de cotas' : 'combinar mérito individual com alguma proteção social',
    security: high ? 'priorizar penas mais duras, repressão ao crime e maior força policial' : low ? 'investir mais em prevenção, ressocialização e garantias no sistema de justiça' : 'misturar prevenção com endurecimento da resposta ao crime',
    development: high ? 'aceitar mais obras, petróleo, mineração ou infraestrutura quando o ganho econômico é considerado alto' : low ? 'dar mais peso à preservação ambiental, mesmo quando isso limita alguns projetos econômicos' : 'tentar equilibrar crescimento e preservação projeto a projeto',
    institutions: high ? 'dar mais espaço para o governo e a maioria eleita colocarem seu programa em prática' : low ? 'manter freios e contrapesos fortes, com tribunais e órgãos de controle capazes de limitar os governantes' : 'equilibrar o mandato de quem venceu com controles institucionais',
  };
  return examples[axisKey] || 'tomar decisões parecidas nesse tema';
}

function renderCandidateProximity(section, scores) {
  const proximity = getCandidateProximity(scores);
  const { axisResults, closerKey, closerName, closerDistance, totalTie } = proximity;

  const proximityCard = section.querySelector('#candidate-proximity-card');
  proximityCard.classList.remove('is-lula', 'is-flavio', 'is-both');
  proximityCard.classList.add(`is-${closerKey}`);

  section.querySelector('#candidate-proximity-name').textContent = closerName;
  const avatars = section.querySelector('#candidate-proximity-avatars');
  if (closerKey === 'both') {
    avatars.innerHTML = `
      <span class="candidate-proximity-avatar is-duo"><img src="${candidateVisuals.lula.photo}" alt="Lula"></span>
      <span class="candidate-proximity-avatar is-duo is-second"><img src="${candidateVisuals.flavio.photo}" alt="Flávio Bolsonaro"></span>`;
  } else {
    const visual = candidateVisuals[closerKey];
    avatars.innerHTML = `<span class="candidate-proximity-avatar"><img src="${visual.photo}" alt="${closerName}"></span>`;
  }

  const proximityPercent = Math.max(0, Math.min(100, Math.round(100 - closerDistance)));
  const formatAxisList = list => list.length <= 1 ? (list[0] || 'nenhum eixo isolado') : `${list.slice(0,-1).join(', ')} e ${list.at(-1)}`;
  const closerAxes = axisResults.filter(item => item.closest === closerKey).map(item => item.label);

  let proximityReason;
  let proximityCopy;
  if (totalTie) {
    proximityReason = 'Seu perfil ficou dividido: nenhum dos dois candidatos se aproxima de forma claramente maior quando os sete temas são considerados juntos.';
    proximityCopy = 'Isso acontece porque suas respostas se aproximam de candidatos diferentes dependendo do assunto. O resultado “Ambos” evita escolher um lado quando o conjunto não mostra uma vantagem real.';
  } else {
    const opponentKey = closerKey === 'lula' ? 'flavio' : 'lula';
    const opponentName = closerKey === 'lula' ? 'Flávio Bolsonaro' : 'Lula';
    const advantages = axisResults
      .map(item => ({ ...item, advantage: item[opponentKey] - item[closerKey] }))
      .filter(item => item.advantage > 0.5)
      .sort((a,b) => b.advantage - a.advantage);
    const whyCloser = advantages.slice(0, 3).map(item => item.label);
    const fartherCandidates = axisResults
      .map(item => ({ ...item, gap: item[opponentKey] - item[closerKey] }))
      .filter(item => item.gap > 0.5)
      .sort((a,b) => b.gap - a.gap);
    const whyFarther = (fartherCandidates.length ? fartherCandidates : axisResults
      .map(item => ({ ...item, gap: item[opponentKey] }))
      .sort((a,b) => b.gap - a.gap))
      .slice(0, 2)
      .map(item => item.label);
    const opponentNear = axisResults
      .map(item => ({ ...item, opponentDistance: item[opponentKey] }))
      .sort((a,b) => a.opponentDistance - b.opponentDistance)
      .slice(0, 2)
      .map(item => item.label);
    const closerList = whyCloser.length ? whyCloser : closerAxes;
    const mainAxes = formatAxisList(closerList);
    const axisKeyByLabel = Object.fromEntries(axisResults.map(item => [item.label, item.key]));
    const closerExamples = closerList.slice(0,2).map(label => practicalAlignmentExample(axisKeyByLabel[label], closerKey));
    const opponentExamples = opponentNear.slice(0,1).map(label => practicalAlignmentExample(axisKeyByLabel[label], opponentKey));
    proximityReason = `Você se aproxima mais de ${closerName} porque suas respostas caminham na mesma direção principalmente em ${mainAxes}. Na vida real, isso aparece em posições como ${closerExamples.join(' e ')}. Por isso, o conjunto do seu perfil fica mais parecido com o de ${closerName}.`;
    proximityCopy = `Com ${opponentName}, sua maior aproximação aparece em ${formatAxisList(opponentNear)}${opponentExamples.length ? ` — por exemplo, ao ${opponentExamples[0]}` : ''}. É um ponto em comum, mas mais pontual do que as convergências com ${closerName}.`;
  }

  const percentEl = section.querySelector('#candidate-proximity-percent strong');
  const percentLabel = section.querySelector('#candidate-proximity-percent span');
  if (percentEl) percentEl.textContent = `${proximityPercent}%`;
  if (percentLabel) percentLabel.textContent = totalTie ? 'proximidade ideológica com ambos nos 7 eixos' : `proximidade ideológica com ${closerName} nos 7 eixos`;
  section.querySelector('#candidate-proximity-reason').textContent = proximityReason;
  section.querySelector('#candidate-proximity-copy').textContent = proximityCopy;
  section.querySelector('#candidate-proximity-visual').innerHTML = axisResults.map(item => {
    const isTie = item.closest === 'tie';
    const candidateKey = isTie ? null : item.closest;
    const label = isTie ? 'equilíbrio entre Lula e Flávio' : (candidateKey === 'lula' ? 'mais próximo de Lula' : 'mais próximo de Flávio');
    const dots = isTie
      ? '<i class="proximity-dot lula"></i><i class="proximity-dot flavio"></i>'
      : `<i class="proximity-dot ${candidateKey}"></i>`;
    const photos = isTie
      ? `<img class="is-lula" src="${candidateVisuals.lula.photo}" alt="Lula"><img class="is-flavio" src="${candidateVisuals.flavio.photo}" alt="Flávio Bolsonaro">`
      : `<img class="is-${candidateKey}" src="${candidateVisuals[candidateKey].photo}" alt="${candidateVisuals[candidateKey].name}">`;
    return `
      <div class="proximity-axis-row ${item.closest}">
        <div class="proximity-axis-choice ${item.closest}">
          <div class="proximity-candidate-dots">${dots}</div>
          <div class="proximity-axis-copy">
            <span class="mono">${item.label}</span>
            <strong>${label}</strong>
          </div>
          <div class="proximity-candidate-portraits">${photos}</div>
        </div>
      </div>`;
  }).join('');

  const politicianGrid = section.querySelector('#politician-match-grid');
  if (politicianGrid) {
    const ranked = otherPoliticians
      .map(pol => ({...pol, match: thematicSimilarity(scores, pol.v)}))
      .sort((a,b)=>b.match-a.match)
      .slice(0,4);
    politicianGrid.innerHTML = ranked.map((pol,index) => `
      <div class="politician-match-hitbox">
        <article class="politician-match-card">
          <div class="politician-match-avatar"><img src="${pol.photo}" alt="${pol.name}" loading="lazy"></div>
          <div class="politician-match-copy">
            <span class="mono">0${index+1} · ${pol.party}</span>
            <strong>${pol.name}</strong>
            <small>aproximação temática estimada</small>
          </div>
          <div class="politician-match-score"><b>${pol.match}%</b><span class="mono">match</span></div>
        </article>
      </div>`).join('');
  }
}

function saveReturnState() {
  try {
    sessionStorage.setItem('espectro-return-state', JSON.stringify({ answers, current, testMode }));
  } catch (error) {
    // The page still works if sessionStorage is unavailable.
  }
}

function bindIdeologyLinks(section) {
  const targets = section.querySelectorAll('[data-ideology]');
  if (!targets.length) return;

  const move = (event) => {
    if (!ideologyHoverChip) return;
    ideologyHoverChip.style.left = `${event.clientX}px`;
    ideologyHoverChip.style.top = `${event.clientY}px`;
  };

  const show = (event) => {
    if (!ideologyHoverChip) return;
    move(event);
    ideologyHoverChip.classList.add('is-visible');
  };

  const hide = () => ideologyHoverChip?.classList.remove('is-visible');

  targets.forEach(target => {
    const name = target.dataset.ideology;
    target.addEventListener('mouseenter', show);
    target.addEventListener('mousemove', move);
    target.addEventListener('mouseleave', hide);
    target.addEventListener('focus', () => {
      if (!ideologyHoverChip) return;
      const rect = target.getBoundingClientRect();
      ideologyHoverChip.style.left = `${rect.right - 10}px`;
      ideologyHoverChip.style.top = `${rect.top + rect.height / 2}px`;
      ideologyHoverChip.classList.add('is-visible');
    });
    target.addEventListener('blur', hide);
    target.addEventListener('click', () => { saveReturnState(); window.location.href = ideologyUrl(name); });
    target.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        saveReturnState();
        window.location.href = ideologyUrl(name);
      }
    });
  });
}

function animateNumber(el, target, duration = 760, formatter = value => String(value)) {
  if (!el) return;
  if (prefersReducedMotion) {
    el.textContent = formatter(target);
    return;
  }
  const start = performance.now();
  const tick = now => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatter(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function setupResultMotion(section, scores, spectrum) {
  const revealTargets = [
    section.querySelector('.result-hero > div:first-child'),
    section.querySelector('.result-match-card'),
    section.querySelector('.spectrum-line-panel'),
    ...section.querySelectorAll('.result-grid > .panel'),
    section.querySelector('.reading-panel'),
    section.querySelector('.nearby'),
    section.querySelector('.candidate-heading'),
    section.querySelector('.candidate-overview-panel'),
    section.querySelector('.candidate-axes-panel'),
    section.querySelector('.candidate-cards'),
    section.querySelector('.candidate-proximity-card'),
  ].filter(Boolean);
  revealTargets.forEach(el => el.classList.add('result-reveal'));

  const spectrumPanel = section.querySelector('.spectrum-line-panel');
  const spectrumPointer = section.querySelector('#spectrum-pointer');
  const spectrumLabel = section.querySelector('#spectrum-index-label');
  const compassPanel = section.querySelector('.compass-panel');
  const compassDot = section.querySelector('#compass-dot');
  const scoresPanel = section.querySelector('.scores-panel');
  const candidateOverview = section.querySelector('.candidate-overview-panel');
  const candidateAxes = section.querySelector('.candidate-axes-panel');

  const reveal = el => el?.classList.add('is-visible');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(reveal);
    spectrumPointer.style.left = `${spectrumPointer.dataset.target}%`;
    spectrumLabel.textContent = `posição ${spectrum.index} / 100`;
    compassDot.style.left = `${compassDot.dataset.left}%`;
    compassDot.style.top = `${compassDot.dataset.top}%`;
    compassDot.classList.add('is-settled');
    section.querySelectorAll('[data-score-row]').forEach(row => {
      const value = Number(row.dataset.target);
      const fill = row.querySelector('[data-score-fill]');
      fill.style.left = `${Math.min(50, value)}%`;
      fill.style.width = `${Math.abs(value - 50)}%`;
      row.querySelector('[data-score-point]').style.left = `${value}%`;
      row.querySelector('[data-score-value]').textContent = formatBipolarScore(value, row.dataset.low, row.dataset.high);
    });
    candidateOverview?.classList.add('is-revealed');
    candidateAxes?.classList.add('is-revealed');
    return;
  }

  requestAnimationFrame(() => {
    reveal(section.querySelector('.result-hero > div:first-child'));
    setTimeout(() => reveal(section.querySelector('.result-match-card')), 130);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      reveal(el);

      if (el === spectrumPanel && !el.dataset.animated) {
        el.dataset.animated = 'true';
        spectrumPointer.style.left = `${spectrumPointer.dataset.target}%`;
        animateNumber(spectrumLabel, spectrum.index, 820, n => `posição ${n} / 100`);
      }
      if (el === compassPanel && !el.dataset.animated) {
        el.dataset.animated = 'true';
        compassDot.style.left = `${compassDot.dataset.left}%`;
        compassDot.style.top = `${compassDot.dataset.top}%`;
        window.setTimeout(() => compassDot.classList.add('is-settled'), 820);
      }
      if (el === scoresPanel && !el.dataset.animated) {
        el.dataset.animated = 'true';
        section.querySelectorAll('[data-score-row]').forEach((row, index) => {
          const target = Number(row.dataset.target);
          window.setTimeout(() => {
            const fill = row.querySelector('[data-score-fill]');
            fill.style.left = `${Math.min(50, target)}%`;
            fill.style.width = `${Math.abs(target - 50)}%`;
            row.querySelector('[data-score-point]').style.left = `${target}%`;
            const valueEl = row.querySelector('[data-score-value]');
            const low = row.dataset.low; const high = row.dataset.high;
            if (prefersReducedMotion) valueEl.textContent = formatBipolarScore(target, low, high);
            else {
              const finalStrength = Math.round(Math.abs(target - 50) * 2);
              animateNumber(valueEl, finalStrength, 720, n => n <= 8 ? 'equilibrado' : `${n}% ${target < 50 ? low : high}`);
            }
          }, index * 90);
        });
      }
      if (el === candidateOverview) el.classList.add('is-revealed');
      if (el === candidateAxes) el.classList.add('is-revealed');
      observer.unobserve(el);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  revealTargets.filter(el => !el.classList.contains('result-hero')).forEach(el => observer.observe(el));
}

function setupCompassExplorer(section, scores) {
  const compass = section.querySelector('#compass');
  const explorer = section.querySelector('#compass-explorer');
  const explorerLabel = section.querySelector('#compass-explorer-label');
  const explorerTitle = section.querySelector('#compass-explorer-title');
  const explorerValues = section.querySelector('#compass-explorer-values');
  const dot = section.querySelector('#compass-dot');
  if (!compass || !explorer) return;

  const describe = (economy, social) => {
    const econ = economy < 42 ? '+ Estado' : economy > 58 ? '+ Mercado' : 'Centro econômico';
    const soc = social < 42 ? 'Conservador' : social > 58 ? 'Progressista' : 'Moderado';
    return `${soc} · ${econ}`;
  };

  const positionExplorer = (x, y) => {
    const maxX = Math.max(12, compass.clientWidth - 190);
    const maxY = Math.max(12, compass.clientHeight - 96);
    explorer.style.left = `${Math.min(maxX, Math.max(12, x + 16))}px`;
    explorer.style.top = `${Math.min(maxY, Math.max(12, y + 16))}px`;
  };

  const updateFromPointer = e => {
    const rect = compass.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
    const economy = Math.round((x / rect.width) * 100);
    const social = Math.round(100 - (y / rect.height) * 100);
    explorerLabel.textContent = 'EXPLORE O MAPA';
    explorerTitle.textContent = describe(economy, social);
    explorerValues.textContent = `Economia ${economy} · Costumes ${social}`;
    positionExplorer(x, y);
    explorer.classList.add('is-visible');
  };

  compass.addEventListener('pointermove', updateFromPointer);
  compass.addEventListener('pointerleave', () => explorer.classList.remove('is-visible'));
  compass.addEventListener('pointerdown', updateFromPointer);

  dot.addEventListener('pointerenter', e => {
    e.stopPropagation();
    explorerLabel.textContent = 'VOCÊ ESTÁ AQUI';
    explorerTitle.textContent = describe(scores.economy, scores.social);
    explorerValues.textContent = `Economia ${scores.economy} · Costumes ${scores.social}`;
    const rect = compass.getBoundingClientRect();
    positionExplorer(e.clientX - rect.left, e.clientY - rect.top);
    explorer.classList.add('is-visible', 'is-user');
  });
  dot.addEventListener('pointermove', e => {
    e.stopPropagation();
    const rect = compass.getBoundingClientRect();
    positionExplorer(e.clientX - rect.left, e.clientY - rect.top);
  });
  dot.addEventListener('pointerleave', () => explorer.classList.remove('is-user'));
}

function bindCandidateFaceHover(root = document) {
  const targets = root.querySelectorAll('[data-candidate]');
  targets.forEach(el => {
    el.addEventListener('pointerenter', (e) => showCandidateFace(el.dataset.candidate, e));
    el.addEventListener('pointermove', moveCandidateFace);
    el.addEventListener('pointerleave', hideCandidateFace);
  });
}

function showCandidateFace(key, e) {
  if (!candidateFaceTooltip || !candidateVisuals[key]) return;
  const data = candidateVisuals[key];
  const target = e?.currentTarget;
  const axis = target?.dataset?.axis || '';
  const userCompare = target?.dataset?.userCompare || '';
  const candidateCompare = target?.dataset?.candidateCompare || '';
  candidateFaceImg.src = data.photo;
  candidateFaceImg.alt = `Foto oficial de ${data.name}`;
  candidateFaceName.textContent = data.name;
  if (candidateFaceCompare) {
    if (userCompare && candidateCompare) {
      candidateFaceCompare.innerHTML = `${axis ? `<span class="candidate-compare-axis">${axis}</span>` : ''}<span class="candidate-compare-row is-user"><b>VOCÊ</b><strong>${userCompare}</strong></span><span class="candidate-compare-row is-candidate ${key}"><b>${data.name.toUpperCase()}</b><strong>${candidateCompare}</strong></span>`;
      candidateFaceCompare.style.display = 'grid';
    } else {
      candidateFaceCompare.innerHTML = '';
      candidateFaceCompare.style.display = 'none';
    }
  }
  candidateFaceTooltip.classList.add('is-visible');
  candidateFaceTooltip.setAttribute('aria-hidden', 'false');
  moveCandidateFace(e);
}

function moveCandidateFace(e) {
  if (!candidateFaceTooltip || !candidateFaceTooltip.classList.contains('is-visible')) return;
  const margin = 18;
  const tooltipW = 280;
  const tooltipH = 120;
  let x = e.clientX;
  let y = e.clientY;
  if (x + tooltipW + margin > window.innerWidth) x -= tooltipW + 36;
  if (y + tooltipH + margin > window.innerHeight) y -= tooltipH + 36;
  candidateFaceTooltip.style.left = `${x}px`;
  candidateFaceTooltip.style.top = `${y}px`;
}

function hideCandidateFace() {
  candidateFaceTooltip?.classList.remove('is-visible');
  candidateFaceTooltip?.setAttribute('aria-hidden', 'true');
}
function buildSummary(s, name) {
  const econ = descriptor(s.economy, 'um papel econômico mais forte para o Estado', 'mais espaço para mercado e iniciativa privada', 'uma economia mista');
  const social = descriptor(s.social, 'valores sociais mais tradicionais', 'liberdades individuais e mudanças sociais', 'posições sociais moderadas');
  const eq = descriptor(s.equality, 'responsabilidade individual e mérito', 'correção de desigualdades de partida', 'um equilíbrio entre mérito e proteção social');
  const security = descriptor(s.security, 'prevenção e garantias na segurança', 'repressão e punições mais duras na segurança', 'um equilíbrio entre prevenção e repressão');
  const development = descriptor(s.development, 'mais proteção ambiental', 'mais espaço para exploração econômica', 'um equilíbrio entre preservação e desenvolvimento');
  const institutions = descriptor(s.institutions, 'mais freios e contrapesos entre os poderes', 'mais força para a maioria eleita colocar seu programa em prática', 'um equilíbrio entre decisão da maioria e limites institucionais');
  return `Sua combinação se aproxima de ${name}: você tende a favorecer ${econ}, mostra preferência por ${social} e dá peso a ${eq}. Em segurança, sua resposta aponta para ${security}; no desenvolvimento, para ${development}; e nas instituições, para ${institutions}.`;
}

function economyText(v) {
  if (v >= 62) return 'Você tende a confiar mais em competição, iniciativa privada e mecanismos de mercado, ainda que isso possa coexistir com regulação.';
  if (v <= 38) return 'Você vê o Estado como ator econômico importante, especialmente para garantir serviços, corrigir falhas de mercado e limitar concentração.';
  return 'Você aceita mercado e iniciativa privada, mas também considera legítima uma presença estatal relevante em áreas estratégicas e sociais.';
}
function socialText(v) {
  if (v >= 62) return 'Você tende a priorizar autonomia pessoal, Estado laico e adaptação das normas sociais às escolhas individuais.';
  if (v <= 38) return 'Você tende a valorizar continuidade, tradição e mudanças sociais mais graduais, com maior cautela sobre transformações culturais.';
  return 'Você combina abertura a liberdades pessoais com algumas reservas sobre mudanças sociais ou culturais específicas.';
}
function libertyText(v) {
  if (v >= 62) return 'Você prefere limitar coerção e vigilância estatal, mesmo quando isso reduz parte da capacidade do governo de impor ordem.';
  if (v <= 38) return 'Você aceita mais intervenção do Estado para preservar segurança, ordem ou normas coletivas.';
  return 'Você tenta equilibrar direitos individuais com autoridade pública, variando conforme o tema.';
}
function equalityText(v) {
  if (v >= 62) return 'Você reconhece diferenças de ponto de partida e aceita políticas públicas para ampliar oportunidades e reduzir vulnerabilidade.';
  if (v <= 38) return 'Você coloca mais peso em esforço, escolha e responsabilidade individual do que em redistribuição de resultados.';
  return 'Você valoriza mérito, mas considera legítimo algum nível de proteção social e correção de desigualdades de oportunidade.';
}

function securityText(v) {
  if (v >= 62) return 'Você tende a apoiar punições mais duras e maior liberdade de ação para as forças de segurança diante de crimes graves.';
  if (v <= 38) return 'Você tende a dar mais peso à prevenção, fiscalização da atuação policial e recuperação de quem cumpre pena.';
  return 'Você combina cobrança por ordem e punição com preocupação em prevenção e limites para a atuação do Estado.';
}
function developmentText(v) {
  if (v >= 62) return 'Você aceita mais impactos e riscos ambientais quando acredita que o ganho em empregos, energia ou crescimento compensa.';
  if (v <= 38) return 'Você tende a priorizar preservação ambiental mesmo quando isso limita ou desacelera alguns projetos econômicos.';
  return 'Você procura equilibrar crescimento econômico com proteção ambiental e tende a decidir conforme o tipo de projeto.';
}
function institutionsText(v) {
  if (v >= 62) return 'Você tende a dar mais espaço para a maioria eleita e para decisões políticas diretas, mesmo que isso reduza parte dos bloqueios de outros poderes.';
  if (v <= 38) return 'Você valoriza mais freios, fiscalização e instituições independentes capazes de limitar decisões do governo e do Congresso.';
  return 'Você tenta equilibrar o mandato de quem venceu a eleição com limites e controles entre os poderes.';
}

function formatBipolarScore(score, low, high) {
  const strength = Math.round(Math.abs(score - 50) * 2);
  if (strength <= 8) return 'equilibrado';
  return `${strength}% ${score < 50 ? low : high}`;
}

function requestRestart(e, source = 'logo') {
  e?.preventDefault?.();
  if (document.body.classList.contains('view-intro')) return;

  const kicker = document.getElementById('restart-kicker');
  const title = document.getElementById('restart-title');
  const copy = document.getElementById('restart-copy');
  const confirm = document.getElementById('restart-confirm-label');

  if (source === 'result') {
    kicker.textContent = 'REFAZER TESTE';
    title.textContent = 'Refazer o teste do zero?';
    copy.textContent = 'Suas respostas e o resultado atual serão apagados. Se quiser guardar esse resultado, salve o PNG antes de continuar.';
    confirm.innerHTML = 'refazer teste <span>↻</span>';
  } else if (document.body.classList.contains('view-result')) {
    kicker.textContent = 'VOLTAR AO INÍCIO';
    title.textContent = 'Quer sair deste resultado?';
    copy.textContent = 'Ao voltar para a página inicial, suas respostas e este resultado serão descartados. Salve o resultado antes se quiser guardá-lo.';
    confirm.innerHTML = 'voltar ao início <span>↖</span>';
  } else {
    kicker.textContent = 'VOLTAR AO INÍCIO';
    title.textContent = 'Quer interromper o teste?';
    copy.textContent = 'Seu progresso atual será perdido e todas as respostas dadas até aqui serão apagadas.';
    confirm.innerHTML = 'voltar ao início <span>↖</span>';
  }

  if (restartDialog?.showModal) restartDialog.showModal();
}

function confirmRestart() {
  restartDialog?.close();
  showIntro();
}

function cancelRestart() {
  restartDialog?.close();
}

const exportPalettes = {
  cream: { bg: '#f3f1ea', ink: '#121212', accent: '#ff5c35', soft: '#d9ff45', left: '#F98E99', right: '#88A7FF', lula: '#F98E99', flavio: '#88A7FF', liberty: '#C7B7F6', muted: '#6c6a63', card: '#f8f6ef' },
  acid: { bg: '#d9ff45', ink: '#121212', accent: '#ff5c35', soft: '#f3f1ea', left: '#F98E99', right: '#88A7FF', lula: '#F98E99', flavio: '#88A7FF', liberty: '#C7B7F6', muted: '#4d5427', card: '#efffb1' },
  blue: { bg: '#c9d6ff', ink: '#121212', accent: '#ff5c35', soft: '#f3f1ea', left: '#F98E99', right: '#88A7FF', lula: '#F98E99', flavio: '#88A7FF', liberty: '#C7B7F6', muted: '#34415f', card: '#dce4ff' },
  dark: { bg: '#161616', ink: '#f3f1ea', accent: '#ff7654', soft: '#d9ff45', left: '#F98E99', right: '#88A7FF', lula: '#F98E99', flavio: '#88A7FF', liberty: '#9d8bd6', muted: '#b9b5aa', card: '#242424' },
};

const exportSizes = {
  square: [1080, 1080],
  story: [1080, 1920],
  landscape: [1600, 900],
};

function openSaveDialog() {
  if (!lastResult || !saveDialog?.showModal) return;
  saveDialog.showModal();
  requestAnimationFrame(updateExportPreview);
}

function exportOptions() {
  const format = document.querySelector('input[name="export-format"]:checked')?.value || 'square';
  const palette = document.querySelector('input[name="export-palette"]:checked')?.value || 'cream';
  const content = document.querySelector('input[name="export-content"]:checked')?.value || 'spectrum';
  return { format, palette, content };
}

function roundRect(ctx, x, y, w, h, r, fill, stroke = null, lineWidth = 2) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
}

function drawTextWrapped(ctx, text, x, y, maxWidth, lineHeight, maxLines = 99) {
  const words = text.split(/\s+/);
  let line = '';
  const lines = [];
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length >= maxLines) break;
    } else line = test;
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
}

function spectrumDescription(spectrum) {
  return `No eixo geral esquerda ↔ direita, suas respostas ficam em ${spectrum.label.toLowerCase()}. O rótulo situa sua tendência geral; os outros eixos mostram onde ela ganha nuance.`;
}

function directLanguageText(spectrum) {
  return `${capitalizeFirst(spectrum.economy)}, ${spectrum.social} e ${spectrum.liberty}.`;
}

function drawExportHeader(ctx, W, pad, p, scale = 1) {
  if (brandLogoImage.complete && brandLogoImage.naturalWidth) {
    const logoH = 30 * scale;
    const logoW = logoH * (brandLogoImage.naturalWidth / brandLogoImage.naturalHeight);
    ctx.drawImage(brandLogoImage, pad, pad - logoH + 4*scale, logoW, logoH);
  } else {
    ctx.fillStyle = p.ink;
    ctx.font = `800 ${22*scale}px Manrope, sans-serif`;
    ctx.fillText('SEGUNDO TURNO', pad, pad);
  }
  ctx.textAlign = 'right';
  ctx.fillStyle = p.ink;
  ctx.font = `${12*scale}px "DM Mono", monospace`;
  ctx.fillText('TESTE DE ESPECTRO POLÍTICO', W-pad, pad-2);
  ctx.textAlign = 'left';
}

function drawExportHero(ctx, x, y, w, top, spectrum, p, scale = 1) {
  ctx.fillStyle = p.muted;
  ctx.font = `${11*scale}px "DM Mono", monospace`;
  ctx.fillText('SEU RESULTADO', x, y);
  y += 50*scale;
  ctx.fillStyle = p.ink;
  ctx.font = `800 ${64*scale}px Manrope, sans-serif`;
  y = drawTextWrapped(ctx, top.name, x, y, w, 60*scale, 2);
  y += 10*scale;
  ctx.fillStyle = p.ink;
  ctx.font = `500 ${16*scale}px Manrope, sans-serif`;
  y = drawTextWrapped(ctx, buildSummary(lastResult.scores, top.name), x, y, w, 23*scale, 4);
  return y;
}


function drawDirectCard(ctx, x, y, w, spectrum, p, scale = 1) {
  const h = 136*scale;
  ctx.fillStyle = p.ink;
  ctx.font = `${10*scale}px "DM Mono", monospace`;
  ctx.fillText('EM LINGUAGEM DIRETA', x, y+24*scale);
  ctx.fillStyle = p.accent;
  ctx.font = `600 ${31*scale}px "Playfair Display", serif`;
  ctx.fillText(spectrum.label, x, y+62*scale);
  ctx.fillStyle = p.muted;
  ctx.font = `500 ${11.5*scale}px Manrope, sans-serif`;
  drawTextWrapped(ctx, `No atalho esquerda ↔ direita deste teste, você cai em ${spectrum.label.toLowerCase()}. Os sete eixos abaixo mostram as nuances.`, x+175*scale, y+51*scale, Math.max(120, w-175*scale), 17*scale, 3);
  return y+h;
}

function drawResultStamp(ctx, cx, cy, size, top, p, scale = 1) {
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(8*Math.PI/180);
  ctx.beginPath(); ctx.arc(0,0,size/2,0,Math.PI*2);
  ctx.fillStyle = p.soft; ctx.fill();
  ctx.strokeStyle = p.ink; ctx.lineWidth = 2*scale; ctx.stroke();
  ctx.textAlign = 'center';
  ctx.fillStyle = p.ink;
  ctx.font = `${9.5*scale}px "DM Mono", monospace`;
  ctx.fillText('CORRENTE MAIS',0,-23*scale);
  ctx.fillText('PRÓXIMA',0,-9*scale);
  ctx.font = `700 ${15*scale}px Manrope, sans-serif`;
  drawTextWrapped(ctx, top.name, -size*.32, 15*scale, size*.64, 18*scale, 3);
  ctx.restore(); ctx.textAlign='left';
}

function clusterMarkerOffsets(markers, threshold = 3.5, spacing = 14) {
  const sorted = [...markers].sort((a,b)=>a.v-b.v);
  for(let i=0;i<sorted.length;i++){
    const group=[sorted[i]];
    let j=i+1;
    while(j<sorted.length && sorted[j].v-group[group.length-1].v<=threshold){ group.push(sorted[j]); j++; }
    if(group.length>1) group.forEach((m,k)=>m.offset=(k-(group.length-1)/2)*spacing);
    i=j-1;
  }
}

function drawSpectrumScale(ctx, x, y, w, spectrum, p, scale = 1, includeCandidates = false) {
  ctx.fillStyle = p.ink;
  ctx.font = `700 ${17*scale}px Manrope, sans-serif`;
  ctx.fillText('ESQUERDA ↔ DIREITA', x, y);
  ctx.textAlign = 'right';
  ctx.font = `${11*scale}px "DM Mono", monospace`;
  ctx.fillText(`${spectrum.label.toUpperCase()} · ${spectrum.index}/100`, x+w, y);
  ctx.textAlign = 'left';

  const railY = y + 22*scale;
  const railH = 18*scale;
  const grad = ctx.createLinearGradient(x, 0, x+w, 0);
  grad.addColorStop(0, p.left);
  grad.addColorStop(.5, p.bg);
  grad.addColorStop(1, p.right);
  roundRect(ctx, x, railY, w, railH, railH/2, grad, p.ink, 2*scale);
  [18,35,47,53,65,82].forEach(v => {
    ctx.beginPath(); ctx.moveTo(x+w*v/100, railY); ctx.lineTo(x+w*v/100, railY+railH);
    ctx.strokeStyle=p.ink; ctx.globalAlpha=.22; ctx.lineWidth=1; ctx.stroke(); ctx.globalAlpha=1;
  });

  const markers = [{ v:spectrum.index, color:p.accent, r:11*scale, offset:0, label:'VOCÊ' }];
  if (includeCandidates) {
    markers.push({ v:spectrumInfo(candidates2026.lula).index, color:p.lula, r:9*scale, offset:0, label:'LULA' });
    markers.push({ v:spectrumInfo(candidates2026.flavio).index, color:p.flavio, r:9*scale, offset:0, label:'FLÁVIO' });
  }
  clusterMarkerOffsets(markers, 3.5, 13*scale);
  markers.forEach(m => {
    ctx.beginPath(); ctx.arc(x+w*m.v/100+m.offset, railY+railH/2, m.r, 0, Math.PI*2);
    ctx.fillStyle=m.color; ctx.fill(); ctx.strokeStyle=p.ink; ctx.lineWidth=2*scale; ctx.stroke();
  });

  ctx.fillStyle=p.muted; ctx.font=`${9*scale}px "DM Mono", monospace`;
  ctx.fillText('ESQUERDA',x,railY+38*scale); ctx.textAlign='right'; ctx.fillText('DIREITA',x+w,railY+38*scale); ctx.textAlign='left';

  if (includeCandidates) {
    let lx=x;
    const ly=railY+58*scale;
    [['VOCÊ',p.accent],['LULA',p.lula],['FLÁVIO',p.flavio]].forEach(([label,color])=>{
      ctx.beginPath(); ctx.arc(lx+6*scale,ly-4*scale,5*scale,0,Math.PI*2); ctx.fillStyle=color;ctx.fill();ctx.strokeStyle=p.ink;ctx.lineWidth=1*scale;ctx.stroke();
      ctx.fillStyle=p.ink;ctx.font=`${9*scale}px "DM Mono", monospace`;ctx.fillText(label,lx+16*scale,ly);
      lx += 82*scale;
    });
    return railY+66*scale;
  }
  return railY+44*scale;
}

function drawMainCompass(ctx, x, y, w, h, scores, p, scale = 1, includeCandidates = false) {
  const r=20*scale;
  ctx.save();
  ctx.beginPath(); ctx.roundRect(x,y,w,h,r); ctx.clip();
  ctx.fillStyle = p.bg;
  ctx.fillRect(x,y,w,h);

  const leftGlow = ctx.createRadialGradient(x + w * 0.18, y + h * 0.18, 10, x + w * 0.18, y + h * 0.18, w * 0.55);
  leftGlow.addColorStop(0, p.left + '7A');
  leftGlow.addColorStop(1, p.left + '00');
  ctx.fillStyle = leftGlow;
  ctx.fillRect(x,y,w,h);

  const rightGlow = ctx.createRadialGradient(x + w * 0.82, y + h * 0.82, 10, x + w * 0.82, y + h * 0.82, w * 0.55);
  rightGlow.addColorStop(0, p.right + '7A');
  rightGlow.addColorStop(1, p.right + '00');
  ctx.fillStyle = rightGlow;
  ctx.fillRect(x,y,w,h);
  ctx.restore();
  roundRect(ctx,x,y,w,h,r,null,p.ink,2*scale);
  ctx.strokeStyle=p.ink;ctx.globalAlpha=.35;ctx.lineWidth=1*scale;
  ctx.beginPath();ctx.moveTo(x+w/2,y);ctx.lineTo(x+w/2,y+h);ctx.moveTo(x,y+h/2);ctx.lineTo(x+w,y+h/2);ctx.stroke();ctx.globalAlpha=1;

  const pts=[{name:'Você',ex:scores.economy,sy:scores.social,color:p.accent,r:10*scale}];
  if(includeCandidates){
    pts.push({name:'Lula',ex:candidates2026.lula.economy,sy:candidates2026.lula.social,color:p.lula,r:8*scale});
    pts.push({name:'Flávio',ex:candidates2026.flavio.economy,sy:candidates2026.flavio.social,color:p.flavio,r:8*scale});
  }
  pts.forEach(pt=>{
    const px=x+w*pt.ex/100, py=y+h*(1-pt.sy/100);
    ctx.beginPath();ctx.arc(px,py,pt.r,0,Math.PI*2);ctx.fillStyle=pt.color;ctx.fill();ctx.strokeStyle=p.ink;ctx.lineWidth=2*scale;ctx.stroke();
  });
  ctx.fillStyle=p.muted;ctx.font=`${9*scale}px "DM Mono", monospace`;
  ctx.fillText('+ ESTADO',x+10*scale,y+h/2-9*scale);ctx.textAlign='right';ctx.fillText('+ MERCADO',x+w-10*scale,y+h/2-9*scale);ctx.textAlign='center';
  ctx.fillText('+ PROGRESSISTA',x+w/2,y+17*scale);ctx.fillText('+ CONSERVADOR',x+w/2,y+h-10*scale);ctx.textAlign='left';
  return y+h;
}

function axisReadingData(scores) {
  return [
    { label:'Economia', title:descriptor(scores.economy,'Intervencionista','Pró-mercado','Mista'), text:economyText(scores.economy), fill:'#d9ff45' },
    { label:'Costumes', title:descriptor(scores.social,'Conservador','Progressista','Moderado'), text:socialText(scores.social), fill:'#ffb4d1' },
    { label:'Liberdades', title:descriptor(scores.liberty,'Mais autoridade','Mais liberdade','Equilíbrio'), text:libertyText(scores.liberty), fill:'#C7B7F6' },
    { label:'Igualdade', title:descriptor(scores.equality,'Mérito individual','Proteção social','Centro'), text:equalityText(scores.equality), fill:null },
    { label:'Segurança', title:descriptor(scores.security,'Prevenção e garantias','Repressão e punição','Equilíbrio'), text:securityText(scores.security), fill:'#C8A98C' },
    { label:'Desenvolvimento', title:descriptor(scores.development,'Preservacionista','Desenvolvimentista','Equilíbrio'), text:developmentText(scores.development), fill:'#A8DEC8' },
    { label:'Instituições', title:descriptor(scores.institutions,'Freios e contrapesos','Força da maioria','Equilíbrio institucional'), text:institutionsText(scores.institutions), fill:'#D4C9B8' },
  ];
}

function drawReadingCards(ctx, x, y, w, h, scores, p, scale = 1) {
  const data=axisReadingData(scores);
  const gap=12*scale;
  const cols = w >= 660*scale ? 3 : 2;
  const rows = Math.ceil(data.length/cols);
  const colW=(w-gap*(cols-1))/cols;
  const rowH=(h-gap*(rows-1))/rows;
  data.forEach((item,i)=>{
    const cx=x+(i%cols)*(colW+gap), cy=y+Math.floor(i/cols)*(rowH+gap);
    const fill=item.fill || p.card;
    roundRect(ctx,cx,cy,colW,rowH,16*scale,fill,p.ink,1.6*scale);
    ctx.fillStyle=p.ink;ctx.font=`${8.5*scale}px "DM Mono", monospace`;ctx.fillText(item.label.toUpperCase(),cx+12*scale,cy+20*scale);
    ctx.font=`700 ${16*scale}px Manrope, sans-serif`;ctx.fillText(item.title,cx+12*scale,cy+44*scale);
    ctx.fillStyle=p.muted;ctx.font=`500 ${9.5*scale}px Manrope, sans-serif`;
    drawTextWrapped(ctx,item.text,cx+12*scale,cy+65*scale,colW-24*scale,13*scale,4);
  });
}

function drawDifferenceCard(ctx, x, y, w, h, scores, p, scale = 1) {
  roundRect(ctx,x,y,w,h,20*scale,p.card,p.ink,2*scale);
  ctx.fillStyle=p.ink;ctx.font=`${10*scale}px "DM Mono", monospace`;ctx.fillText('ONDE VOCÊ SE APROXIMA',x+18*scale,y+24*scale);
  ctx.fillStyle=p.muted;ctx.font=`500 ${11*scale}px Manrope, sans-serif`;
  drawTextWrapped(ctx,'Quanto menor o número, mais próximas são as posições naquele eixo. Leia como comparação por tema, não como recomendação eleitoral.',x+18*scale,y+48*scale,w-36*scale,16*scale,3);
  const axes=[['ECO','economy'],['COS','social'],['LIB','liberty'],['IGU','equality'],['SEG','security'],['DES','development'],['INS','institutions']];
  const startY=y+103*scale;
  [['LULA','lula',p.lula],['FLÁVIO','flavio',p.flavio]].forEach((row,ri)=>{
    const cy=startY+ri*48*scale;
    ctx.beginPath();ctx.arc(x+24*scale,cy-5*scale,7*scale,0,Math.PI*2);ctx.fillStyle=row[2];ctx.fill();ctx.strokeStyle=p.ink;ctx.lineWidth=1.4*scale;ctx.stroke();
    ctx.fillStyle=p.ink;ctx.font=`700 ${11*scale}px Manrope, sans-serif`;ctx.fillText(row[0],x+40*scale,cy);
    let cx=x+118*scale;
    axes.forEach(([abbr,key])=>{
      const diff=Math.abs(scores[key]-candidates2026[row[1]][key]);
      ctx.font=`${9*scale}px "DM Mono", monospace`;ctx.fillStyle=p.muted;ctx.fillText(abbr,cx,cy-11*scale);
      ctx.font=`700 ${11*scale}px Manrope, sans-serif`;ctx.fillStyle=p.ink;ctx.fillText(String(diff),cx,cy+6*scale);
      cx += 58*scale;
    });
  });
}

function drawProximityExportCard(ctx, x, y, w, h, scores, p, scale = 1) {
  const proximity = getCandidateProximity(scores);
  roundRect(ctx, x, y, w, h, 20*scale, p.card, p.ink, 2*scale);
  ctx.fillStyle = p.ink;
  ctx.font = `${10*scale}px "DM Mono", monospace`;
  ctx.fillText('PROXIMIDADE TEMÁTICA', x+18*scale, y+24*scale);
  ctx.textAlign = 'right';
  ctx.fillText('7 EIXOS ANALISADOS', x+w-18*scale, y+24*scale);
  ctx.textAlign = 'left';

  const name = proximity.closerName;
  const nameColor = proximity.closerKey === 'lula' ? '#EB5665' : proximity.closerKey === 'flavio' ? '#5578DB' : '#8A8A8A';
  const avY = y + 64*scale;
  const avatar = (cx, label, fill) => {
    ctx.beginPath(); ctx.arc(cx, avY, 18*scale, 0, Math.PI*2); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = p.ink; ctx.lineWidth = 1.5*scale; ctx.stroke();
    ctx.fillStyle = p.ink; ctx.font = `700 ${11*scale}px "DM Mono", monospace`; ctx.textAlign='center'; ctx.fillText(label, cx, avY+4*scale); ctx.textAlign='left';
  };
  if (proximity.closerKey === 'both') {
    avatar(x+34*scale, 'L', p.lula);
    avatar(x+56*scale, 'F', p.flavio);
  } else {
    avatar(x+40*scale, proximity.closerKey === 'lula' ? 'L' : 'F', proximity.closerKey === 'lula' ? p.lula : p.flavio);
  }
  ctx.fillStyle = nameColor;
  ctx.font = `700 ${28*scale}px "Playfair Display", serif`;
  ctx.fillText(name, x + 86*scale, y + 74*scale);

  ctx.fillStyle = p.muted;
  ctx.font = `500 ${11.5*scale}px Manrope, sans-serif`;
  const copy = proximity.totalTie
    ? `Seu perfil ficou dividido entre os dois candidatos no conjunto dos sete temas, sem uma vantagem clara para nenhum deles.`
    : `${proximity.closerName} ficou mais próximo no conjunto dos sete temas. A leitura mostra semelhança temática, não recomendação de voto.`;
  drawTextWrapped(ctx, copy, x+18*scale, y+104*scale, w-36*scale, 16*scale, 3);

  if (h >= 220*scale) {
    const rowsHeight = proximity.axisResults.length * 18*scale;
    let rowY = Math.max(y + 150*scale, y + h - rowsHeight - 12*scale);
    proximity.axisResults.forEach((item, i) => {
      const cy = rowY + i * 18*scale;
      ctx.fillStyle = p.ink; ctx.font = `${8.5*scale}px "DM Mono", monospace`; ctx.fillText(item.label.toUpperCase(), x+18*scale, cy);
      const pillX = x + 110*scale, pillW = w - 128*scale;
      roundRect(ctx, pillX, cy-11*scale, pillW, 16*scale, 999, null, p.ink, 1.2*scale);
      ctx.beginPath(); ctx.arc(pillX+12*scale, cy-3*scale, 4.5*scale, 0, Math.PI*2); ctx.fillStyle = p.lula; ctx.fill(); ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.beginPath(); ctx.arc(pillX+pillW-12*scale, cy-3*scale, 4.5*scale, 0, Math.PI*2); ctx.fillStyle = p.flavio; ctx.fill(); ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.fillStyle = p.ink; ctx.font = `700 ${8.5*scale}px Manrope, sans-serif`; ctx.textAlign='center';
      const label = item.closest === 'tie' ? 'equilíbrio' : (item.closest === 'lula' ? 'mais próximo de Lula' : 'mais próximo de Flávio');
      ctx.fillText(label, pillX + pillW/2, cy); ctx.textAlign='left';
    });
  }
}

function drawCandidateAxesExport(ctx, x, y, w, h, scores, p, scale = 1) {
  const axes = [
    { key:'economy', label:'Economia', low:'+ Estado', high:'+ Mercado', reverse:false },
    { key:'social', label:'Costumes', low:'Progressista', high:'Conservador', reverse:true },
    { key:'liberty', label:'Liberdades', low:'+ Liberdade', high:'+ Autoridade', reverse:true },
    { key:'equality', label:'Igualdade', low:'+ Proteção', high:'+ Mérito', reverse:true },
    { key:'security', label:'Segurança', low:'Prevenção', high:'Punição', reverse:false },
    { key:'development', label:'Desenvolvimento', low:'Preservação', high:'Exploração', reverse:false },
    { key:'institutions', label:'Instituições', low:'Freios', high:'Maioria eleita', reverse:false },
  ];
  const gap = 7*scale;
  const rowH = (h-gap*(axes.length-1))/axes.length;
  axes.forEach((axis,i)=>{
    const cy=y+i*(rowH+gap);
    ctx.fillStyle=p.ink; ctx.font=`700 ${12*scale}px Manrope, sans-serif`;
    ctx.fillText(axis.label,x+14*scale,cy+22*scale);
    const railX=x+128*scale, railW=w-146*scale, railY=cy+rowH/2;
    ctx.strokeStyle=p.muted; ctx.globalAlpha=.5; ctx.lineWidth=2*scale;
    ctx.beginPath();ctx.moveTo(railX,railY);ctx.lineTo(railX+railW,railY);ctx.stroke();ctx.globalAlpha=1;
    const val=v=>axis.reverse?100-v:v;
    const markers=[
      [val(scores[axis.key]),p.accent,7.5*scale],
      [val(candidates2026.lula[axis.key]),p.lula,6.5*scale],
      [val(candidates2026.flavio[axis.key]),p.flavio,6.5*scale],
    ];
    clusterMarkerOffsets(markers.map(m=>({v:m[0],offset:0,m})),3.5,9*scale);
    const wrapped=markers.map(m=>({v:m[0],color:m[1],r:m[2],offset:0}));
    clusterMarkerOffsets(wrapped,3.5,9*scale);
    wrapped.forEach(m=>{ ctx.beginPath();ctx.arc(railX+railW*m.v/100+m.offset,railY,m.r,0,Math.PI*2);ctx.fillStyle=m.color;ctx.fill();ctx.strokeStyle=p.ink;ctx.lineWidth=1.3*scale;ctx.stroke(); });
    ctx.fillStyle=p.muted;ctx.font=`${8*scale}px "DM Mono", monospace`;
    ctx.fillText(axis.low,railX,cy+rowH-9*scale);ctx.textAlign='right';ctx.fillText(axis.high,railX+railW,cy+rowH-9*scale);ctx.textAlign='left';
  });
}

function renderResultCanvas(canvas, options = exportOptions()) {
  if (!lastResult) return;
  const [W,H]=exportSizes[options.format];
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');
  const p=exportPalettes[options.palette];
  const {scores,spectrum,top}=lastResult;
  const electoral=options.content==='candidates';
  ctx.fillStyle=p.bg; ctx.fillRect(0,0,W,H);

  const landscape=options.format==='landscape';
  const story=options.format==='story';
  const pad=landscape?58:54;
  const scale=landscape?.84:(story?1:.78);
  drawExportHeader(ctx,W,pad,p,scale);

  let y=pad+(landscape?66:72);
  const contentW=W-pad*2;
  const stampSize=(landscape?158:(story?170:150));
  const heroW=contentW-stampSize-(landscape?42:28);
  y=drawExportHero(ctx,pad,y,heroW,top,spectrum,p,scale);
  drawResultStamp(ctx,W-pad-stampSize/2,pad+(landscape?136:150),stampSize,top,p,scale);
  y=Math.max(y+18,pad+(landscape?230:260));
  y=drawDirectCard(ctx,pad,y,contentW,spectrum,p,scale)+18;
  y=drawSpectrumScale(ctx,pad,y,contentW,spectrum,p,scale,electoral)+(landscape?24:28);

  if(landscape){
    const lowerH=Math.max(190,H-y-pad-18);
    const mapW=contentW*.43;
    drawMainCompass(ctx,pad,y,mapW,lowerH,scores,p,.8,electoral);
    if(electoral) {
      const rightX = pad + mapW + 18;
      const rightW = contentW - mapW - 18;
      const axesH = lowerH * 0.58;
      drawCandidateAxesExport(ctx,rightX,y,rightW,axesH,scores,p,.78);
      drawProximityExportCard(ctx,rightX,y+axesH+14,rightW,Math.max(118, lowerH-axesH-14),scores,p,.78);
    } else {
      drawReadingCards(ctx,pad+mapW+18,y,contentW-mapW-18,lowerH,scores,p,.78);
    }
  } else if(story){
    const mapH=electoral ? 410 : 460;
    y=drawMainCompass(ctx,pad,y,contentW,mapH,scores,p,.96,electoral)+30;
    const remaining=H-y-pad-38;
    if(electoral) {
      const axesH = Math.max(300, remaining * 0.48);
      drawCandidateAxesExport(ctx,pad,y,contentW,axesH,scores,p,.95);
      drawProximityExportCard(ctx,pad,y+axesH+18,contentW,Math.max(220, remaining-axesH-18),scores,p,.95);
    } else {
      drawReadingCards(ctx,pad,y,contentW,Math.max(500,remaining),scores,p,.95);
    }
  } else {
    const lowerH=Math.max(250,H-y-pad-18);
    if(electoral) {
      const axesH = Math.max(180, lowerH * .48);
      drawCandidateAxesExport(ctx,pad,y,contentW,axesH,scores,p,.7);
      drawProximityExportCard(ctx,pad,y+axesH+16,contentW,Math.max(165, lowerH-axesH-16),scores,p,.7);
    } else {
      const mapW=contentW*.48;
      drawMainCompass(ctx,pad,y,mapW,lowerH,scores,p,.7,false);
      drawReadingCards(ctx,pad+mapW+16,y,contentW-mapW-16,lowerH,scores,p,.7);
    }
  }

  ctx.fillStyle=p.muted; ctx.font=`10px "DM Mono", monospace`;
  ctx.fillText('EDUCACIONAL · NÃO CIENTÍFICO',pad,H-20);
  ctx.textAlign='right';ctx.fillText('espectro político · 2026',W-pad,H-20);ctx.textAlign='left';
}

function updateExportPreview() {
  const canvas = document.getElementById('export-preview');
  if (!canvas) return;
  renderResultCanvas(canvas, exportOptions());
}

function downloadResultPng() {
  const canvas = document.createElement('canvas');
  const options = exportOptions();
  renderResultCanvas(canvas, options);
  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meu-espectro-${options.format}-${options.content}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1200);
  }, 'image/png');
}

document.addEventListener('click', async (e) => {
  if (e.target.closest('[data-confirm-restart]')) {
    e.preventDefault();
    confirmRestart();
  }
  if (e.target.closest('[data-cancel-restart]')) {
    e.preventDefault();
    cancelRestart();
  }
  if (e.target.closest('#open-support-dialog')) {
    e.preventDefault();
    document.getElementById('support-dialog')?.showModal();
  }
  if (e.target.closest('[data-close-support]')) {
    e.preventDefault();
    document.getElementById('support-dialog')?.close();
  }
  if (e.target.closest('#copy-support-pix')) {
    e.preventDefault();
    const input = document.getElementById('support-pix-input');
    const feedback = document.getElementById('support-copy-feedback');
    if (!input) return;
    try {
      await navigator.clipboard.writeText(input.value);
    } catch (error) {
      input.select();
      document.execCommand('copy');
      input.setSelectionRange(0,0);
    }
    if (feedback) {
      feedback.textContent = 'código copiado ✓';
      window.setTimeout(() => { feedback.textContent = ''; }, 2200);
    }
  }
});

document.getElementById('brand').addEventListener('click', (e) => {
  e.preventDefault();
  if (!document.body.classList.contains('view-intro')) requestRestart(e, 'logo');
});

headerSave?.addEventListener('click', openSaveDialog);
headerRedo?.addEventListener('click', () => requestRestart(null, 'result'));
document.getElementById('save-form')?.addEventListener('change', (e) => {
  if (e.target.matches('input[type="radio"]')) updateExportPreview();
});
document.getElementById('download-result')?.addEventListener('click', downloadResultPng);

document.querySelector('[data-close-question-help]')?.addEventListener('click', () => questionExplainDialog?.close());
questionExplainDialog?.addEventListener('click', (event) => {
  if (event.target === questionExplainDialog) questionExplainDialog.close();
});

const supportDialog = document.getElementById('support-dialog');
supportDialog?.addEventListener('click', (event) => {
  if (event.target === supportDialog) supportDialog.close();
});

document.addEventListener('keydown', (e) => {
  if (!document.querySelector('.question-screen') || isTransitioning || questionExplainDialog?.open) return;
  const n = Number(e.key);
  if (n >= 1 && n <= 5) selectAnswer(scale[n-1].value);
  if (e.key === 'ArrowLeft') goBack();
});

function bootstrapApp() {
  try {
    const saved = sessionStorage.getItem('espectro-return-state');
    if (saved) {
      const state = JSON.parse(saved);
      if (Array.isArray(state.answers) && state.answers.length) {
        setTestMode(state.testMode || (state.answers.length > 30 ? 'detailed' : 'short'));
        answers = state.answers;
        current = Number.isInteger(state.current) ? state.current : questions.length - 1;
        sessionStorage.removeItem('espectro-return-state');
        showResult();
        return;
      }
    }
  } catch (error) {
    // Fall back to the landing page if restoring state fails.
  }
  showIntro();
}

bootstrapApp();

window.addEventListener('pageshow', () => {
  if (document.body.classList.contains('view-result')) {
    try { sessionStorage.removeItem('espectro-return-state'); } catch (error) {}
  }
});
