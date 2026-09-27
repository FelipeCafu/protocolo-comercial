/* ROTEIRO COMERCIAL — ICBARI (SDR + Closer + Jornada do Paciente)
   Identidade NEUTRA (a atualizar quando chegar a marca). Conteúdo compartilhado
   entre o sistema (Roteiro) e as apresentações comerciais. */
window.ICBARI_INFO={
  nome:"ICBARI",
  sub:"Instituto de Cirurgia Bariátrica, Digestiva e Especialidades",
  frase:"Transformamos vidas além da balança: cirurgia com acompanhamento multidisciplinar do primeiro contato ao pós-operatório.",
  pilares:[
   {t:"Consulta que orienta",d:"Avaliação com o cirurgião, indicação do procedimento e plano claro. A gente explica como amigo, sem jargão."},
   {t:"Jornada conduzida",d:"A clínica marca todos os exames e a cirurgia, e o paciente é acompanhado por nutricionista, psicóloga e endocrinologista."},
   {t:"Cuidado que continua",d:"Acompanhamento no pós com nutri por 6 meses e suporte psicológico. Aqui ninguém opera e abandona."}
  ]
};
window.ROTEIRO_ICBARI={
 "sdr":[
  {n:1,title:"ICBARI",t:"Pré-ligação · 30s",tec:"Preparação · mindset",
   s:"**Antes de discar (10s):** respire, sorria, tom firme e acolhedor. Você não está vendendo — está **cuidando de uma pessoa** que procurou ajuda para um problema de saúde.\nTenha à mão: nome, por qual canal a pessoa chegou e a queixa/procedimento de interesse, se houver.\n\n**ESPELHAMENTO (regra de ouro):** copie o ritmo da pessoa — fala rápido, fale rápido; fala devagar, vá devagar. Quanto mais parecido, mais confiança.",
   do:"Sorria (ouve-se no telefone). Tom sereno passa segurança em tema de saúde.",
   av:"Ligar no automático, robotizado, ou tratar como venda comum."},
  {n:2,title:"Primeiro a pessoa. Depois o procedimento.",t:"Abertura · 1 a 3 min",tec:"Rapport · acolhimento",
   s:"**Abertura (nunca \"2 minutinhos\"):**\n\"Olá {NOME}, tudo bem? Aqui é {SDR}, da ICBARI. Vi que você buscou informação sobre {PROCEDIMENTO}. Posso te fazer umas perguntas rápidas pra entender seu caso e te orientar do jeito certo?\"\n\n**Acolhimento:** \"Há quanto tempo você convive com isso?\" → ouça. \"Já procurou algum médico antes?\" → ouça.\n→ Valide o sentimento: \"Entendo, é desconfortável mesmo. Você fez certo em buscar avaliação.\"",
   do:"Fale o nome 2–3x. Uma pergunta de cada vez. Ouça de verdade.",
   av:"Emendar perguntas sem ouvir. Ir direto ao preço ou à agenda."},
  {n:3,title:"Só quero te entender.",t:"Intenções · 40s",tec:"Baixa a guarda",
   s:"**Setar as intenções:**\n\"{NOME}, deixa eu deixar claro: **um** — eu não vou te empurrar nada; **dois** — quero primeiro entender o seu caso pra ver o melhor caminho; **três** — e te explicar como funciona a nossa clínica, pra você decidir com clareza. Combinado?\" → **espere o \"combinado\".**",
   do:"Diga \"combinado?\" e faça silêncio até o sim.",
   av:"Emendar sem pausa — a pausa gera a concordância."},
  {n:4,title:"O que muda com a ICBARI.",t:"Pitch curto · 1 a 2 min",tec:"Vender a jornada",
   s:"**Pitch curto — venda a CONDUÇÃO (é o coração):**\n\"{NOME}, o que faz a ICBARI diferente é que a gente **conduz a sua jornada inteira**. Muita gente adia cirurgia porque se perde no meio de exames, autorizações e agendamentos. Aqui não: depois que o cirurgião avalia e indica o procedimento, **a nossa equipe marca todos os exames, as avaliações e a própria cirurgia** — e ainda te acompanha no pós-operatório. Você cuida da sua saúde, a gente cuida da logística.\"\n\n**Micropacto:** \"Faz sentido ter esse acompanhamento?\"",
   do:"Enfatize: a clínica marca tudo. Isso tira o medo do processo.",
   av:"Despejar lista de cirurgias. Aqui o foco é a CONDUÇÃO."},
  {n:5,title:"Vídeo e robótica.",t:"Segurança · 1 min",tec:"Autoridade técnica",
   s:"**Gerar segurança (sem tecniquês):**\n\"E as cirurgias são feitas por **videolaparoscopia e por técnica robótica** — que costumam ter **menos dor, recuperação mais rápida e cicatrizes menores** que a cirurgia aberta. É o que há de mais moderno para o aparelho digestivo.\"\n\nSe couber, cite **1 caso curto** de paciente que se recuperou bem.",
   do:"Traduza o benefício: menos dor, volta mais rápido à rotina.",
   av:"Prometer resultado ou falar termo técnico sem explicar."},
  {n:6,title:"As perguntas que qualificam.",t:"Qualificação · o coração do SDR",tec:"Situação + dor + urgência",
   s:"**Qualificação (anote tudo):**\n1) \"{NOME}, me conta com suas palavras: **o que você está sentindo** / qual o problema?\" → anote.\n2) \"Há **quanto tempo**? Está atrapalhando o seu dia a dia?\" → anote a urgência.\n3) \"Você já tem **algum exame ou laudo** recente? Já passou por outro médico?\" → anote.\n4) \"Você tem **convênio** ou pensa em particular?\" → anote (sem prometer cobertura).\n\n→ **Não diagnostique.** Você mapeia o caso para o cirurgião.",
   do:"Anote queixa, tempo, exames prévios e convênio — o closer/médico usa tudo.",
   av:"Dar diagnóstico ou opinião clínica. Isso é do médico."},
  {n:7,title:"O próximo passo é a consulta.",t:"Transição · 1 a 2 min",tec:"Agendar a avaliação",
   s:"**Conduzir para a consulta:**\n\"{NOME}, pelo que você me contou, o passo certo agora é uma **consulta de avaliação com o nosso cirurgião**. É nela que ele examina, esclarece suas dúvidas e, se for o caso, indica o procedimento e explica a jornada.\"\n\nFeche com **duas opções**: \"Tenho **quinta 10h ou sexta 16h** — qual encaixa melhor?\"\n\n**Se pedir preço da cirurgia:** \"O valor a gente fecha na consulta, porque depende da avaliação do médico — antes disso qualquer número seria chute, e eu não quero te enganar.\"",
   do:"Ofereça 2 horários fechados. Confirme dados de contato e e-mail.",
   av:"\"Me avisa quando puder\". Dar preço de cirurgia por telefone."},
  {n:8,title:"Objeção é pedido de clareza.",t:"Objeções · sob demanda",tec:"Devolve → reenquadra → agenda",
   s:"**Objeções — só para vender a consulta:**\n\"Está caro\" → \"A consulta é o primeiro passo e é onde tudo fica claro; sem ela nem dá pra falar de valores.\"\n\"Tenho medo de cirurgia\" → \"É super normal. A consulta serve justamente pra tirar esse medo com informação — e nossas técnicas são minimamente invasivas.\"\n\"Vou pensar\" → \"Claro. Só pra eu te ajudar: o que mais pesa na sua decisão? Enquanto isso, deixo um horário reservado.\"\n\"Preciso ver com a família\" → \"Ótimo, traga quem você quiser na consulta.\"",
   do:"Trate a objeção e volte para o agendamento. Acolha o medo.",
   av:"Discutir. Prometer cobertura de convênio. Insistir sem empatia."},
  {n:9,title:"Confirmado e sem sumiço.",t:"Fechamento do agendamento",tec:"E-mail + confirmação + lembrete",
   s:"**Fechar o agendamento:**\n\"Fechado, {NOME}: **{DIA} às {HORA}**. Vou te mandar a confirmação — **me passa seu melhor e-mail e WhatsApp**. Você vai receber lembrete um dia antes e no dia. Se precisar remarcar, é só me chamar.\"\n\nPasse o contexto quente (queixa, tempo, exames prévios, convênio) para o Closer/médico. **Nada se perde no sistema.**",
   do:"Capture e-mail/WhatsApp, confirme e ative o lembrete anti-falta.",
   av:"Encerrar sem contato e sem próximo passo."}
 ],
 "closer":[
  {n:1,title:"Conduzir uma decisão de saúde.",t:"Pré-consulta · mindset",tec:"Sereno · preparado",
   s:"Antes da consulta: **tom sereno**, ritmo calmo. Em saúde, o silêncio e a segurança valem mais que a pressa. Releia as anotações do SDR: **queixa, tempo, exames prévios, convênio, medo**.\n\n**ESPELHAMENTO:** acompanhe o ritmo do paciente.",
   do:"Chegue sabendo o caso. Confirme o nome e como a pessoa prefere ser chamada.",
   av:"Recomeçar do zero, ignorando o que o SDR já mapeou."},
  {n:2,title:"Primeiras perguntas: confirme o ICP.",t:"Abertura · 2 a 4 min",tec:"Reconfirmar o ICP (siga / não siga)",
   s:"**As suas primeiras perguntas confirmam o ICP** (o {SDR} já anotou; você valida):\n\"{NOME}, deixa eu confirmar rapidinho pra não te fazer repetir. Você vai usar **convênio ou particular**? Qual é o seu **plano**? 🚫 (se for Hapvida: a clínica não atende, oriente e encerre)\"\n\"Você já tem **algum exame recente**? E seu **peso e altura** hoje?\" → (bariátrica confirma **IMC ≥ 35**; vesícula/hérnia/refluxo confirma **exame prévio**).\n\"A **decisão** é sua? É pra **resolver agora**?\"\n\n**❌ Não é ICP** (Hapvida ou fora do critério clínico): não siga pra apresentação, acolha e encerre. **✅ É ICP:** recrie o pacto (\"não vim te empurrar cirurgia, vim entender e te orientar\") e siga.",
   do:"Confirme o ICP com perguntas. Se não bater (Hapvida/critério), encerre com respeito.",
   av:"Ir direto ao procedimento/valor sem confirmar plano e critério clínico."},
  {n:3,title:"A avaliação (o médico conduz).",t:"Consulta · exame",tec:"Escuta + exame",
   s:"**Momento clínico (do cirurgião):**\nEscuta ativa, exame físico, leitura dos exames trazidos. O papel comercial aqui é **preparar o terreno**: garantir que o paciente se sinta ouvido e seguro, e organizar a papelada para o médico.\n\nAo fim, o médico dá a **indicação**: qual procedimento, por qual técnica (vídeo/robótica) e por quê.",
   do:"Deixe o paciente falar. Anote dúvidas para responder depois.",
   av:"Atropelar a fala do médico ou do paciente com assunto comercial."},
  {n:4,title:"O plano cirúrgico, em palavras simples.",t:"Apresentação · 3 a 5 min",tec:"Traduzir a conduta",
   s:"**Explicar a conduta (sem tecniquês):**\n\"{NOME}, o que o doutor indicou é o **{PROCEDIMENTO}**, feito por {TÉCNICA}. Na prática significa: {BENEFÍCIO — ex.: resolver o refluxo, corrigir a hérnia, tratar a obesidade}.\"\n\nMostre a **jornada**: \"O caminho é este — a gente marca os seus **exames pré-operatórios** e as **avaliações** (cardiologista, anestesista e o que o seu caso pedir), depois o **retorno ao médico** com os resultados, aí **marcamos a cirurgia** no hospital e cuidamos do **pós-operatório**.\"\n\n**Micropacto:** \"Ficou claro o caminho?\"",
   do:"Use a Jornada do Paciente na tela. Uma etapa de cada vez.",
   av:"Enterrar o paciente em termos médicos. Pular a explicação da jornada."},
  {n:5,title:"Imagine já resolvido.",t:"Benefício · 1 min",tec:"Benefício do benefício",
   s:"**Projetar o depois:**\n\"{NOME}, imagina daqui a alguns meses: **sem {DOR}**, voltando a {ATIVIDADE que ele citou}, com a saúde em dia. É isso que a cirurgia devolve pra você — não é sobre o procedimento, é sobre a **vida depois dele**.\"\n\n→ deixe o paciente completar o cenário.",
   do:"Pinte o futuro com as palavras que ELE usou. Depois cale-se.",
   av:"Voltar ao racional cedo demais."},
  {n:6,title:"Segurança e quem cuida de você.",t:"Confiança · 1 a 2 min",tec:"Equipe + condução",
   s:"**Reforçar segurança:**\n\"Você não vai ficar perdido em nada. Tem uma **equipe da clínica** que marca cada exame, te manda os horários no WhatsApp e no seu e-mail, e acompanha tudo. E a técnica é **minimamente invasiva** — menos dor e recuperação mais rápida.\"\n\n**Antecipar dúvidas:** \"Você deve estar se perguntando: e os exames? e a autorização do convênio? e a recuperação? A gente cuida de cada um desses pontos com você.\"",
   do:"Mostre que a clínica conduz. Isso é o principal diferencial.",
   av:"Deixar a sensação de que o paciente vai ter que se virar sozinho."},
  {n:7,title:"O investimento, com transparência.",t:"Valores · 3 a 5 min",tec:"Ancorar valor → preço",
   s:"**Antes do preço, o valor:**\n\"Nesse acompanhamento está tudo: a **condução da jornada**, a marcação dos exames e da cirurgia, a **técnica moderna** e o **pós-operatório**. É um cuidado completo, não só o ato cirúrgico.\"\n\nApresente o **valor** com firmeza e **faça silêncio**. Se houver convênio: explique o que a clínica ajuda a solicitar, **sem prometer cobertura** (\"quem autoriza é o convênio; a gente prepara toda a documentação certinha\").\n\n**Isolar o preço:** \"Se o investimento couber no seu planejamento, é isso que você quer resolver, certo?\"",
   do:"Ancore o cuidado completo. Diga o valor e cale-se. Seja transparente sobre convênio.",
   av:"Prometer cobertura. Falar por cima do silêncio. Dar desconto cedo."},
  {n:8,title:"Argumenta › Acolhe › Encaminha.",t:"Fechamento · objeções",tec:"Empatia + próximo passo",
   s:"**Fechamento com empatia:**\n**\"Vou pensar\":** \"Faz todo sentido. Me diz: sua dúvida é sobre o **procedimento**, sobre o **valor** ou sobre o **momento**? Assim eu te ajudo a decidir com clareza.\"\n**\"Medo da cirurgia\":** \"É natural. Por isso a gente conduz passo a passo e usa técnica minimamente invasiva. O que mais te assusta? Vamos falar sobre isso.\"\n**\"Preciso ver o convênio\":** \"Perfeito — já deixo a documentação pronta pra solicitar a autorização. Enquanto isso, começamos os exames?\"\n\n**Encaminhar:** \"O primeiro passo concreto é **começar os exames**. Posso já iniciar sua jornada no sistema e a nossa equipe marca o primeiro exame ainda essa semana?\"",
   do:"Acolha a emoção, isole a real objeção e encaminhe para o próximo passo concreto.",
   av:"Pressionar em tema de saúde. Discutir. Ignorar o medo."},
  {n:9,title:"Bem-vindo à jornada.",t:"Pós-fechamento",tec:"Iniciar a jornada + handoff CS",
   s:"**Iniciar de verdade:**\n\"{NOME}, então vamos começar! Vou **abrir sua jornada** aqui no sistema e a nossa equipe de acompanhamento já entra em contato pra marcar seus exames. Você vai receber tudo no WhatsApp e no e-mail.\"\n\nCrie a **Jornada do Paciente** (escolhendo o procedimento — os exames entram automaticamente) e passe o caso para o **CS/pós-venda**. Comemore a decisão com o paciente.",
   do:"Abra a Jornada na hora e faça o handoff para o CS. Mande o 1º passo no WhatsApp.",
   av:"Encerrar sem iniciar a jornada. Deixar o pós no vácuo."}
 ],
 "jornada":[
  {n:1,title:"Boas-vindas",t:"CS · Dia 0",tec:"Acolher + alinhar",
   s:"Dê as **boas-vindas**, confirme dados e e-mail e explique: **a clínica vai marcar todos os exames e a cirurgia**. Envie a **lista de exames** do procedimento (ela já aparece na jornada).",
   do:"Confirme WhatsApp e e-mail. Envie a lista de exames.",
   av:"Sumir depois do fechamento."},
  {n:2,title:"Marcação dos exames",t:"CS · Exames",tec:"Agendar + avisar",
   s:"Para cada exame/avaliação: **agende** (médico/local, telefone, data), gere o **evento no calendário** do paciente e envie por **WhatsApp e e-mail**. Registre a **data prevista do resultado**.",
   do:"Um item de cada vez. Sempre envie calendário + WhatsApp + e-mail.",
   av:"Marcar sem avisar o paciente."},
  {n:3,title:"Resultados e retorno",t:"CS · Resultados → Retorno",tec:"Coletar + retornar",
   s:"Acompanhe os **resultados** (ligue para confirmar as datas). Com tudo em mãos, **marque o retorno ao cirurgião** para a decisão da cirurgia.",
   do:"Só marque o retorno com todos os resultados prontos.",
   av:"Marcar retorno faltando exame."},
  {n:4,title:"Marcar a cirurgia",t:"CS · Hospital",tec:"Checklist do hospital",
   s:"Marque a cirurgia no hospital e confira o **checklist**: pedido médico com código, laudos dos exames, termos de consentimento (cirúrgico e anestésico), autorização do convênio/OPME quando houver e documentos do paciente.",
   do:"Use o checklist da jornada. Confirme autorização antes da data.",
   av:"Marcar a data sem a autorização/documentos."},
  {n:5,title:"Pós-operatório",t:"CS · 1, 2 e 3 meses",tec:"Cuidar que continua",
   s:"Faça o acompanhamento em **1, 2 e 3 meses**, **independentemente** de o paciente ter retornado. Pergunte como está, registre a observação e ofereça ajuda. É aqui que nasce a **indicação**.",
   do:"Contate nos 3 marcos. Registre tudo (nada se perde).",
   av:"Só acompanhar quem reclama."}
 ]
};

/* ===== Roteiro do SDR POR ORIGEM do lead (anúncio/tráfego · indicação · retorno/frio) =====
   Espelha o Script de Vendas: o que a pessoa vai FALAR, palavra por palavra, sabendo o que fazer. */
window.ROTEIRO_ICB_SDR=function(orig){
 orig=orig||"anuncio";
 var pre={title:"Antes de discar",t:"Pré-ligação · 30s",tec:"Preparação · espelhamento",
  s:"**Respire, sorria, tom firme e acolhedor.** Você não está vendendo, está cuidando de uma pessoa que procurou ajuda para um problema de saúde.\nTenha à mão: **nome**, **por qual canal** a pessoa chegou e a **queixa/procedimento** de interesse.\n\n**ESPELHAMENTO (regra de ouro):** copie o ritmo da pessoa. Fala rápido, fale rápido; fala devagar, vá devagar.",
  do:"Sorria (ouve-se no telefone). Uma pergunta de cada vez, ouça de verdade.",
  av:"Ligar no automático, robotizado, ou tratar como venda comum."};

 var qualificar={title:"Acolher e qualificar (as perguntas que qualificam)",t:"Qualificação · o coração do SDR",tec:"Situação + dor + ICP",
  s:"**Acolha e mapeie (anote tudo, sem diagnosticar):**\n\"Me conta com suas palavras: **o que você está sentindo** / o que quer resolver?\" → \"Há **quanto tempo**? Está atrapalhando o seu dia a dia?\" → \"Você já tem **algum exame ou laudo** recente? Já passou por outro médico?\"\n\n**Perguntas que definem o perfil (ICP):**\n\"Você já tem **indicação de cirurgia** ou quer uma **avaliação**?\" → \"Vai ser por **convênio** ou **particular**?\" (se convênio: **qual plano?**) → \"Você é de **Brasília e entorno**?\"",
  do:"Anote queixa, tempo, exames, plano e cidade. Com o plano você já sabe o perfil.",
  av:"Dar diagnóstico. Prometer cobertura. ⚠️ Hapvida = não agenda, encerre com orientação."};

 var spin={title:"Gerar clareza e urgência (SPIN clínico)",t:"Condução · 1 a 2 min",tec:"Situação → Problema → Implicação → Necessidade",
  s:"**Reaja ao que ele disse, com empatia:**\n**Situação:** \"Entendi. E no dia a dia, isso te limita em quê, trabalho, sono, alimentação?\"\n**Problema:** \"O que mais te incomoda nisso hoje?\"\n**Implicação:** \"E deixar como está, sem avaliar, o que pode acontecer? Costuma melhorar sozinho esperando?\"\n**Necessidade:** \"Se um cirurgião avaliasse e a clínica cuidasse de todos os exames pra você, isso te ajudaria?\"",
  do:"Uma pergunta, um silêncio. Deixe a pessoa concluir que precisa resolver.",
  av:"Despejar as 4 perguntas seguidas. Empurrar cirurgia."};

 var converter={title:"Converter para a consulta",t:"Transição · o objetivo do SDR",tec:"Agendar a avaliação",
  s:"\"**{NOME}**, pelo que você me contou, o passo certo agora é uma **consulta de avaliação com o nosso cirurgião**. É nela que ele te examina, tira suas dúvidas e, se for o caso, indica o procedimento e explica a jornada. E aqui **a clínica marca todos os exames e a cirurgia pra você**. Prefere **amanhã 10h ou 16h**?\"\n\n**Se pedir preço da cirurgia:** \"O valor a gente fecha na consulta, porque depende da avaliação do médico. Antes disso, qualquer número seria chute e eu não quero te enganar.\"",
  do:"Ofereça sempre 2 horários fechados. Confirme e-mail e WhatsApp.",
  av:"\"Me avisa quando puder.\" Dar preço de cirurgia por telefone."};

 var confirmar={title:"Confirmar e blindar o no-show",t:"Fechamento do agendamento",tec:"WhatsApp na hora",
  s:"\"Fechado, **{NOME}**: **{DIA} às {HORA}** 🙌. Vou te mandar a confirmação aqui, me passa seu **melhor e-mail e WhatsApp**. Você recebe lembrete um dia antes e no dia. Se tiver exames antigos, leve com você. Qualquer coisa é só me chamar.\"",
  do:"Capture contato, confirme e ative o lembrete anti-falta. Passe o contexto quente pro Closer.",
  av:"Encerrar sem contato e sem próximo passo."};

 var objecoes={title:"Objeção é pedido de clareza",t:"Objeções · sob demanda",tec:"Acolhe → reenquadra → agenda",
  s:"**Sempre para vender a consulta (não a cirurgia):**\n\"Está caro\" → \"A consulta é o primeiro passo e é onde tudo fica claro; sem ela nem dá pra falar de valores.\"\n\"Tenho medo de cirurgia\" → \"É super normal. A consulta serve justamente pra tirar esse medo com informação, e nossas técnicas são minimamente invasivas.\"\n\"Vou pensar\" → \"Claro. Só pra eu te ajudar: o que mais pesa na sua decisão? Enquanto isso, deixo um horário reservado.\"\n\"Preciso ver com a família\" → \"Ótimo, traga quem você quiser na consulta.\"",
  do:"Trate a objeção e volte para o agendamento. Acolha o medo.",
  av:"Discutir. Prometer cobertura. Insistir sem empatia."};

 var fechamento={title:"Confirmado e sem sumiço",t:"Handoff",tec:"Contexto quente pro Closer",
  s:"Reforce a confirmação e **passe todo o contexto pro Closer/médico**: queixa, tempo, exames prévios, convênio (qual plano), perfil A–F. **Nada se perde no sistema.**\n\n\"Já deixei tudo certinho aqui, **{NOME}**. Te espero no dia. Vai dar tudo certo 💚\"",
  do:"Deixe o CRM completo. O Closer recebe o paciente pronto.",
  av:"Handoff sem anotação. Deixar o Closer recomeçar do zero."};

 var flows={
  anuncio:[pre,
   {title:"Abertura (veio de anúncio / tráfego)",t:"Abertura · responda em minutos",tec:"Rapport · referência ao anúncio",
    s:"\"Olá **{NOME}**, tudo bem? Aqui é **{SDR}**, da ICBARI. Vi que você buscou informação sobre **{PROCEDIMENTO}**. Posso te fazer umas perguntas rápidas pra entender seu caso e te orientar do jeito certo?\"",
    do:"Responda em minutos, lead de tráfego esfria rápido. Fale o nome 2-3x.",
    av:"Demorar horas. Ir direto ao preço ou à agenda."},
   qualificar,spin,converter,confirmar,objecoes,fechamento],
  indicacao:[pre,
   {title:"Abertura (veio por indicação)",t:"Abertura · use a confiança",tec:"Rapport · quem indicou",
    s:"\"Olá **{NOME}**, tudo bem? Aqui é **{SDR}**, da ICBARI. Quem me passou seu contato falou que você está querendo resolver **{QUEIXA}**. Que bom que chegou até a gente! Deixa eu te entender melhor pra já te direcionar.\"",
    do:"Cite quem indicou se puder. Indicação já vem com confiança, mas ainda qualifique.",
    av:"Pular a qualificação achando que já está fechado."},
   qualificar,spin,converter,confirmar,objecoes,fechamento],
  retorno:[pre,
   {title:"Reconectar (leve, sem cobrar)",t:"Repescagem · lead frio",tec:"Reabrir com carinho",
    s:"\"Oi **{NOME}**, aqui é **{SDR}**, da ICBARI. Você chegou a falar com a gente sobre **{PROCEDIMENTO}** um tempo atrás. Tô te ligando com carinho só pra saber **como você está com isso hoje**. Tem um minutinho?\"",
    do:"Frio = já veio ou se interessou e não fechou. Reabra leve, curiosidade de verdade.",
    av:"Cobrar (\"você sumiu\"). Pressionar. Recomeçar como se fosse lead novo."},
   {title:"Descobrir o que travou (sem culpa)",t:"Repescagem · achar a objeção real",tec:"BANT reverso",
    s:"\"Na época a gente não chegou a seguir com a sua avaliação. Só pra eu te entender e te ajudar melhor agora: **o que fez você segurar** naquele momento? Foi o **tempo**, o **valor**, algum **medo**, ou a dúvida com o **convênio**?\"",
    do:"Pergunte leve e OUÇA. Aqui aparece a objeção verdadeira.",
    av:"Fazer a pessoa se justificar. Emendar sem ouvir."},
   {title:"Reacender a dor (SPIN de repescagem)",t:"Repescagem · trazer de volta",tec:"Implicação de adiar",
    s:"**Situação/Problema:** \"E hoje, o **{QUEIXA}** continua te incomodando? Em quê ele atrapalha o seu dia a dia?\"\n**Implicação:** \"Já faz um tempo que você sabe que precisa resolver e ainda convive com isso. Se seguir mais um ano do mesmo jeito, o que pode acontecer?\"\n**Necessidade:** \"Se a gente cuidasse de tudo pra você agora, avaliação, exames e cirurgia marcados pela clínica, isso mudaria a sua decisão?\"",
    do:"Amplie a consequência de continuar adiando, com empatia.",
    av:"Culpar pela demora. Prometer resultado."},
   {title:"Reoferecer a consulta (com a novidade)",t:"Repescagem · nova oferta",tec:"A clínica marca tudo",
    s:"\"**{NOME}**, muita coisa evoluiu por aqui. Hoje a **clínica marca todos os exames e a própria cirurgia pra você**, e a consulta é justamente pra tirar suas dúvidas, sem compromisso. Que tal a gente **retomar do ponto onde você parou**? Tenho **{DIA} 10h ou {DIA} 16h**, qual encaixa melhor?\"",
    do:"Traga uma novidade real. Ofereça 2 horários fechados.",
    av:"Repetir a mesma oferta de antes sem nada novo."},
   confirmar,
   {title:"Objeções do lead frio",t:"Repescagem · objeções",tec:"Acolhe → reenquadra",
    s:"\"Já pensei e deixei pra lá\" → \"Faz sentido, a vida corre. Mas se o {QUEIXA} ainda te incomoda, talvez seja a hora de resolver, agora com a gente marcando tudo.\"\n\"Não era o momento\" → \"Entendo. E hoje, como está o momento? Às vezes só faltou alguém organizar o caminho, e é isso que a gente faz.\"\n\"Achei caro\" → \"Obrigado pela sinceridade. Muita coisa mudou e a maioria parcela. Antes do valor, o passo é a consulta. Posso reservar um horário?\"\n\"Já resolvi em outro lugar\" → \"Que bom que cuidou disso! Se surgir outra necessidade digestiva, quero que lembre da ICBARI. Posso atualizar seu contato aqui?\"",
    do:"Acolha, reenquadre e volte pro agendamento.",
    av:"Discutir. Desistir na primeira objeção."},
   fechamento]
 };
 var arr=(flows[orig]||flows.anuncio).map(function(s){return Object.assign({},s);});
 arr.forEach(function(s,i){s.n=i+1;});
 return arr;
};
/* default (compatibilidade): a aba SDR do roteiro começa no fluxo de anúncio */
window.ROTEIRO_ICBARI.sdr=window.ROTEIRO_ICB_SDR("anuncio");
