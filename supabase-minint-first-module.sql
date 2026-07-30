-- =====================================================
-- AMIGO DO SABER — Pré-geração do 1º Módulo do MININT
-- Inserção das aulas de Língua Portuguesa para os 5 setores
-- Execute este script no SQL Editor do Supabase
-- =====================================================

-- Primeiro módulo: Língua Portuguesa (slug: portugues)
-- Setores: policia-nacional, sme, sic, spcb, sef
-- Cada setor tem 15 aulas no primeiro módulo
-- Total: 75 aulas pré-geradas

BEGIN;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'compreensao',
  'Compreensão e interpretação de texto',
  $lesson0$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). Muitos candidatos cometem o erro crasso de subestimar a Língua Portuguesa, focando-se apenas na preparação física ou no conhecimento específico da lei. No entanto, recordem-se: um oficial do Ministério do Interior (MININT) que não compreende correctamente uma ordem superior ou que redige com ambiguidade um auto de notícia é um perigo para a segurança jurídica e para a ordem pública.

Nesta aula, vamos dissecar a **Compreensão e Interpretação de Texto**. Não se trata apenas de ler; trata-se de descodificar, analisar e concluir com rigor.

---

## Introdução

A prova de Língua Portuguesa para o concurso do MININT exige do candidato uma competência que vai além da alfabetização funcional. No contexto policial, a interpretação de texto é uma ferramenta de trabalho. Diariamente, os efectivos lidam com despachos, decretos-lei, relatórios de ocorrências e directivas operacionais. Um erro de interpretação sobre "quem", "como" ou "quando" pode comprometer a justiça e a liberdade dos cidadãos.

Nesta aula, focaremos na distinção entre o que o texto diz explicitamente (compreensão) e o que ele sugere implicitamente (interpretação). Vamos aprender a identificar a espinha dorsal de um texto informativo e oficial, separando o essencial do acessório, para que, no momento do exame, não sejam traídos pelas "ratoeiras" linguísticas comuns nestes certames.

---

## Conceitos Fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces em cinco conceitos fundamentais:

### 1. Compreensão vs. Interpretação
*   **Definição:** A compreensão (ou intelecção) refere-se à análise objectiva do que está escrito. A interpretação é o que deduzimos a partir do texto, indo além da superfície.
*   **Exemplo:** Se um comunicado diz: "A criminalidade em Luanda reduziu 10% após o reforço do patrulhamento", a **compreensão** é que houve uma queda estatística. A **interpretação** sugere que a estratégia de patrulhamento foi eficaz.
*   **Nota Prática:** Nas perguntas de compreensão, as respostas começam com "Segundo o texto...", "O autor afirma que...". Na interpretação, começam com "Infere-se que...", "Conclui-se do texto que...".

### 2. Ideia Principal e Ideias Secundárias
*   **Definição:** A ideia principal é o núcleo informativo do parágrafo ou texto. As secundárias são exemplos, justificações ou detalhes que orbitam o núcleo.
*   **Exemplo:** Num texto sobre a Lei de Segurança Nacional, a ideia principal pode ser a protecção do Estado, enquanto as secundárias detalham as penas para crimes de traição.
*   **Nota Prática:** Se retirar a ideia principal, o texto perde o sentido. Se retirar as secundárias, o texto fica apenas mais curto.

### 3. Inferência (ou Dedução)
*   **Definição:** É o processo de chegar a uma conclusão lógica com base em pistas deixadas pelo autor.
*   **Exemplo:** "O agente chegou à esquadra com a farda molhada e o guarda-chuva fechado na mão." **Infere-se** que estava a chover lá fora.
*   **Nota Prática:** A inferência deve ser sempre baseada em factos do texto, nunca em opiniões pessoais do candidato.

### 4. Denotação e Conotação
*   **Definição:** Denotação é o uso da palavra no sentido literal (dicionário). Conotação é o sentido figurado, dependente do contexto.
*   **Exemplo:** "A Polícia é o braço direito da justiça" (Conotação - apoio/ferramenta). "O agente feriu o braço direito" (Denotação - anatomia).
*   **Nota Prática:** Textos oficiais do MININT privilegiam quase exclusivamente a linguagem denotativa para evitar ambiguidades.

### 5. Tipologia Textual: O Texto Informativo/Oficial
*   **Definição:** Textos que visam transmitir dados, normas ou factos de forma impessoal e clara.
*   **Exemplo:** Um Decreto Presidencial ou uma Ordem de Serviço do Comandante Geral.
*   **Nota Prática:** Nestes textos, a objectividade é a regra. O autor não usa "eu acho" ou "talvez".

---

## Aprofundamento

No contexto de um concurso público em Angola, a banca examinadora costuma utilizar textos extraídos do *Jornal de Angola* ou do *Diário da República*. É imperativo que o candidato domine a **Estrutura do Texto Oficial**.

### Estratégias de Leitura Crítica
1.  **Skimming (Leitura Superficial):** Leiam o texto rapidamente para identificar o tema geral. Quem escreveu? Para quem? Sobre o quê?
2.  **Scanning (Leitura Selectiva):** Procurem palavras-chave (datas, nomes de instituições, verbos de ordem como "determina", "proíbe").
3.  **Análise de Conectores:** As conjunções são as dobradiças do texto.
    *   **Adversativas (mas, porém, contudo):** Indicam uma mudança de direcção no argumento.
    *   **Conclusivas (logo, portanto, por conseguinte):** Introduzem a ideia final que a banca adora perguntar.

### A Natureza do Texto no MININT
Os textos de natureza oficial seguem o princípio da **concisão** e **clareza**. No entanto, a complexidade reside no vocabulário técnico-jurídico. Ao interpretar um texto sobre a "Lei Orgânica da Polícia Nacional", o candidato deve estar atento à hierarquia das normas. Se o texto diz que uma norma "revoga" outra, ele deve compreender que a anterior deixou de existir.

**Regra de Ouro:** Nunca tragam conhecimentos externos para dentro da interpretação. Se o texto diz que "o sol é azul", para efeitos daquela questão, o sol é azul. O erro mais comum em Angola é o candidato querer responder com base no que ouviu na "Rádio Despertar" ou na "TPA", esquecendo o que está escrito no papel à sua frente.

---

## Exemplos Resolvidos

### Exemplo 1: Compreensão de Texto Normativo
**Texto:** *"O uso da força por parte dos efectivos da Polícia Nacional deve ser estritamente proporcional à resistência oferecida, visando sempre a neutralização da ameaça e a preservação da vida."*

**Pergunta:** De acordo com o texto, quando deve a polícia usar a força?
A) Sempre que houver um crime.
B) De forma superior à força do criminoso para garantir a vitória.
C) Em resposta proporcional à resistência encontrada.

**Resolução:**
*   **Raciocínio:** O texto utiliza a expressão "estritamente proporcional".
*   **Resposta Correcta:** **C**. As opções A e B extrapolam ou contrariam o texto.

### Exemplo 2: Inferência em Texto Informativo
**Texto:** *"O Ministério do Interior anunciou a abertura de 5.000 novas vagas para a carreira policial. Este aumento do efectivo visa dar resposta ao crescimento demográfico nas novas centralidades de Luanda."*

**Pergunta:** Infere-se do texto que:
A) Luanda tem falta de polícias devido ao aumento da população.
B) O concurso é apenas para residentes nas centralidades.
C) A criminalidade aumentou nas centralidades.

**Resolução:**
*   **Raciocínio:** O texto diz que as vagas visam "dar resposta ao crescimento demográfico". Se é preciso mais polícia porque há mais gente, infere-se que o rácio actual é insuficiente.
*   **Resposta Correcta:** **A**. A opção B é uma restrição que o texto não faz. A opção C é uma suposição (pode haver mais gente sem haver mais crime, embora seja provável, o texto não afirma).

### Exemplo 3: Identificação de Ideia Principal
**Texto:** *"A formação contínua dos agentes é o pilar fundamental da modernização da PNA. Sem instrução técnica e ética, os investimentos em viaturas e armamento tornam-se ineficazes, pois o capital humano é que operacionaliza a segurança."*

**Pergunta:** Qual é a ideia central do fragmento?
A) A compra de viaturas e armamento para a polícia.
B) A primazia da formação humana sobre o investimento material.
C) A necessidade de novos quartéis em Angola.

**Resolução:**
*   **Raciocínio:** O autor compara o investimento material com a formação e conclui que a formação é o "pilar fundamental".
*   **Resposta Correcta:** **B**.

---

## Erros Comuns a Evitar

1.  **Extrapolação:** É o erro de "viajar" além do texto. O candidato acrescenta informações que ele conhece, mas que não estão lá.
2.  **Redução:** É focar-se apenas num detalhe ou exemplo e esquecer o objectivo geral do texto.
3.  **Contradição:** Ler mal uma palavra de negação (não, nunca, jamais, excepto) e marcar a opção oposta à verdade.
4.  **Subjectividade:** Deixar que o sentimento pessoal sobre a polícia ou o governo influencie a análise técnica do texto.
5.  **Ignorar o Título:** Muitas vezes, o título antecipa a ideia principal e ajuda a situar o contexto.

---

## Resumo para Memorização

1.  **Compreender** é ler o que está escrito; **Interpretar** é ler o que está nas entrelinhas.
2.  A **Ideia Principal** é o coração do texto; sem ela, o texto morre.
3.  Em concursos do MININT, a linguagem é **Denotativa** (literal e clara).
4.  As **Conjunções** (mas, portanto, porque) definem a lógica do argumento.
5.  **Atenção aos Comandos:** "Segundo o autor" (está no texto) vs "Depreende-se" (está fora, mas é lógico).

---

## Glossário

1.  **Ambuidade:** Falta de clareza; quando uma frase permite dois ou mais sentidos.
2.  **Coesão:** Ligação gramatical entre as frases e parágrafos (uso de pronomes e conectores).
3.  **Coerência:** Lógica interna do texto; ausência de contradições.
4.  **Intelecção:** O mesmo que compreensão; acto de entender o sentido exacto das palavras.
5.  **Infere-se:** Conclui-se, deduz-se através da lógica.
6.  **Lexicologia:** Estudo do conjunto de palavras (vocabulário) de uma língua ou contexto.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
8.  **Texto Injuntivo:** Texto que dá ordens ou instruções (comum em manuais e leis).

Estudem com afinco, candidatos. A farda exige inteligência e disciplina. Até à próxima aula!
$lesson0$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'tipos-texto',
  'Tipos e géneros textuais',
  $lesson1$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão no Ministério do Interior (MININT). Não se enganem: um oficial de polícia não maneja apenas o armamento ou a técnica de patrulhamento; a sua principal ferramenta de trabalho, no dia-a-dia administrativo e jurídico, é a **Língua Portuguesa**.

## Introdução

A prova de admissão para a Polícia Nacional exige do candidato não apenas o conhecimento das leis, mas a capacidade de interpretar e produzir textos com clareza, rigor e objectividade. No exercício das vossas funções, serão chamados a redigir Autos de Notícia, Relatórios de Ocorrência e participações que servirão de base para processos judiciais. Se um agente não souber distinguir um relato de factos (narração) de uma descrição de um suspeito (descrição), a eficácia da justiça angolana pode ficar comprometida por falhas de comunicação.

Nesta aula, vamos dissecar a tipologia textual e os géneros textuais. Compreender a estrutura de um texto é o que vos permitirá ler uma Ordem de Serviço do Comando Geral e executá-la sem hesitações, ou interpretar correctamente uma questão de interpretação de texto na vossa prova de concurso. O rigor que exijo nesta aula é o mesmo rigor que a farda que pretendem envergar exige de cada cidadão que serve a Pátria.

---

## Conceitos fundamentais

Para dominarmos a língua, precisamos de organizar os textos em categorias. Vamos focar-nos nos cinco tipos principais que surgem invariavelmente nos exames do MININT.

### 1. Texto Narrativo
**Definição:** É o texto que relata uma sequência de acontecimentos, reais ou imaginários, vividos por personagens num determinado tempo e espaço. Predominam os verbos de acção no pretérito (passado).
- **Exemplo concreto:** Um **Auto de Notícia** relatando uma detenção em flagrante delito no mercado do Trinta, em Luanda, detalhando quem fez o quê e em que ordem.
- **Nota prática:** A narração responde à pergunta: *"O que aconteceu?"*

### 2. Texto Descritivo
**Definição:** É o texto que "pinta" uma imagem com palavras. Detalha características de objectos, pessoas, lugares ou situações. Há uma forte presença de adjectivos e verbos de estado.
- **Exemplo concreto:** A caracterização de um indivíduo procurado: "Indivíduo de estatura média, tez escura, com uma cicatriz no braço direito, trajando t-shirt branca e calças jeans azuis."
- **Nota prática:** A descrição responde à pergunta: *"Como é?"*

### 3. Texto Expositivo
**Definição:** Tem como objectivo principal informar, explicar ou apresentar um conceito de forma objectiva e neutra, sem tentar convencer o leitor ou narrar uma história.
- **Exemplo concreto:** Um artigo no **Diário da República** explicando as novas competências da Polícia de Guarda Fronteiras.
- **Nota prática:** A exposição responde à pergunta: *"O que é isto/Como funciona?"*

### 4. Texto Argumentativo
**Definição:** É o texto em que o autor defende um ponto de vista (tese) através de argumentos lógicos, com o objectivo de persuadir ou convencer o interlocutor.
- **Exemplo concreto:** Um parecer jurídico de um comissário justificando a necessidade de reforço do policiamento de proximidade num determinado bairro para reduzir a criminalidade.
- **Nota prática:** A argumentação responde à pergunta: *"Por que razão defendo esta ideia?"*

### 5. Texto Instrucional e Injuntivo
**Definição:** Ambos orientam o comportamento do receptor. O **instrucional** fornece instruções (como um manual), enquanto o **injuntivo** impõe ordens ou normas com carácter coercivo.
- **Exemplo concreto:** O **Código de Estrada** (injuntivo) ou o manual de manutenção de uma viatura patrulha (instrucional).
- **Nota prática:** Estes textos utilizam frequentemente o modo imperativo ("Faça", "Pare", "Cumpra").

---

## Aprofundamento

Meus caros, para o concurso, não basta saber as definições; é preciso compreender a estrutura técnica.

### A Estrutura do Texto Narrativo na Função Policial
Na narração policial, o rigor cronológico é vital. Utilizamos o **Pretérito Perfeito do Indicativo** para acções concluídas ("O suspeito *disparou*") e o **Pretérito Imperfeito** para acções contínuas ou circunstanciais ("Enquanto a patrulha *circulava*..."). Num exame, se virem uma sucessão de verbos de acção, marquem "Narrativo".

### A Objectividade no Texto Expositivo-Argumentativo
Muitas vezes, os textos oficiais do MININT são híbridos. Um relatório pode começar por ser **expositivo** (apresentando dados estatísticos sobre crimes em Benguela) e terminar de forma **argumentativa** (propondo soluções baseadas nesses dados). A gramática aqui exige o uso de conectores lógicos (conjunções): *"portanto", "todavia", "visto que", "por conseguinte"*. O domínio destes conectores é o que separa um candidato aprovado de um reprovado.

### Texto Injuntivo: A Linguagem da Autoridade
A Polícia Nacional rege-se pela hierarquia e disciplina. Por isso, o texto injuntivo é a base das **Ordens de Serviço**. A característica gramatical principal é o uso do **Imperativo** ou do **Infinitivo com valor de imperativo**. Exemplo: "Circular com as luzes de emergência ligadas" ou "Apresente-se imediatamente ao Comando". Em provas, textos que indicam normas, leis ou manuais de conduta são classificados como injuntivos.

---

## Exemplos resolvidos

### Exemplo 1: Identificação de Tipologia
**Texto:** *"O agente aproximou-se da viatura, solicitou a documentação ao condutor e, após verificar a irregularidade, efectuou a autuação conforme a lei vigente."*
- **Pergunta:** Qual a tipologia predominante?
- **Raciocínio:** Observamos uma sequência de acções no passado (aproximou-se, solicitou, verificou, efectuou). Há uma progressão temporal.
- **Resposta:** Texto Narrativo.

### Exemplo 2: Análise de Texto Oficial
**Texto:** *"Considerando o aumento do fluxo migratório na fronteira do Luvo, torna-se imperativo o reforço do efectivo. A segurança nacional depende da nossa capacidade de resposta imediata nestes pontos críticos."*
- **Pergunta:** Qual a intenção comunicativa deste fragmento?
- **Raciocínio:** O autor apresenta um facto (aumento do fluxo) e utiliza-o para defender uma necessidade (reforço do efectivo), tentando convencer da importância da acção.
- **Resposta:** Texto Argumentativo.

### Exemplo 3: Distinção entre Descritivo e Expositivo
**Texto A:** *"A nova farda da Polícia Nacional é composta por um tecido resistente, de cor azul-escuro, com o emblema bordado no braço esquerdo."*
**Texto B:** *"A Polícia Nacional de Angola é uma instituição paramilitar, organizada hierarquicamente, que visa garantir a ordem e a tranquilidade públicas."*
- **Análise:** O Texto A foca em características físicas e sensoriais (cor, posição, material), logo é **Descritivo**. O Texto B define o que é a instituição, a sua natureza e missão, logo é **Expositivo**.

---

## Erros comuns a evitar

1.  **Confundir Narrativo com Descritivo:** Lembrem-se: a narração tem movimento (acção); a descrição é uma "fotografia" parada (características).
2.  **Achar que todo o texto oficial é Injuntivo:** Nem todo o documento da polícia é uma ordem. Um relatório de actividades anual é **Expositivo**, não injuntivo.
3.  **Ignorar os Conectores:** Em textos argumentativos, os candidatos costumam errar a interpretação por não saberem se "contudo" indica oposição ou conclusão. Estudem as conjunções!
4.  **Subestimar o Contexto:** No concurso do MININT, as questões usam frequentemente extractos da Constituição da República de Angola (CRA). Leiam a CRA para se familiarizarem com o tom expositivo-injuntivo da lei.

---

## Resumo para memorização

1.  **Narrativo:** Foca na acção e no tempo (Ex: Relato de crime).
2.  **Descritivo:** Foca nos detalhes e adjectivos (Ex: Retrato falado).
3.  **Expositivo:** Foca na informação neutra e conceitos (Ex: Definição de lei).
4.  **Argumentativo:** Foca na defesa de opinião e persuasão (Ex: Justificação de estratégia).
5.  **Injuntivo:** Foca na ordem e na norma (Ex: Regulamento Disciplinar da PN).

---

## Glossário

1.  **Coerência:** Relação lógica entre as ideias de um texto.
2.  **Coesão:** Ligação gramatical entre as palavras e frases (uso de conectores).
3.  **Coercivo:** Que tem poder de obrigar ou reprimir (comum em textos injuntivos legais).
4.  **Género Textual:** A forma social do texto (Ex: Ofício, Circular, Relatório).
5.  **Tipologia Textual:** A estrutura interna do texto (Ex: Narração, Descrição).
6.  **Pretérito Perfeito:** Tempo verbal que indica uma acção totalmente concluída no passado.
7.  **Imperativo:** Modo verbal que exprime ordem, pedido ou conselho.
8.  **Tez:** Cor ou aspecto da pele do rosto (termo comum em descrições policiais).

Estudem com afinco, aspirantes. A farda não aceita a ignorância. A vossa capacidade de compreender estes textos será a vossa primeira vitória no concurso. Força e disciplina!
$lesson1$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'coesao',
  'Coesão e coerência textual',
  $lesson2$
Bom dia, caros candidatos. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a uma unidade fundamental para quem aspira envergar a farda da **Polícia Nacional de Angola (PN)** ou integrar qualquer órgão do **Ministério do Interior (MININT)**. Não estamos aqui apenas para aprender a "escrever bonito"; estamos aqui para aprender a escrever com precisão, lógica e autoridade.

## Introdução

A coesão e a coerência textual não são meros adornos gramaticais; são ferramentas de trabalho essenciais para o oficial de polícia. Imaginem um Auto de Notícia ou um Relatório de Ocorrência onde as ideias se atropelam, onde os factos são contraditórios ou onde o uso incorrecto de um conector altera o sentido de um depoimento. Um erro desta natureza pode comprometer uma investigação, invalidar um processo judicial e, em última instância, prejudicar a administração da justiça na nossa República.

Para o concurso público do MININT, o júri de exame procura candidatos que demonstrem domínio da norma culta da língua portuguesa (norma angolana). A prova de Língua Portuguesa avalia a vossa capacidade de organizar o pensamento de forma lógica e estruturada. Nesta aula, vamos dissecar os mecanismos que transformam um amontoado de frases num **texto** — uma unidade de sentido coerente e coesa.

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces sobre cinco conceitos fundamentais:

1.  **Coesão Textual:** É a ligação física, gramatical e lexical entre os elementos do texto (palavras, frases, parágrafos). Se o texto fosse uma parede, a coesão seria o cimento que une os tijolos.
    *   *Exemplo:* "O agente deu ordem de paragem. **Este** agiu conforme o regulamento." (O pronome "este" liga a segunda frase à primeira).
    *   *Nota prática:* Sem coesão, o texto parece uma lista de compras, sem fluidez.

2.  **Coerência Textual:** Refere-se à harmonia de sentido do texto. É a relação lógica entre as ideias, garantindo que não haja contradições e que a mensagem seja compreensível.
    *   *Exemplo:* Seria incoerente escrever: "O suspeito estava desarmado, por isso disparou contra a patrulha." (Se estava desarmado, não poderia disparar).
    *   *Nota prática:* A coerência depende do conhecimento de mundo e do contexto logístico da acção policial.

3.  **Conectores (ou Articuladores):** São palavras ou expressões (conjunções, advérbios, locuções) que estabelecem relações de sentido entre as orações (causa, oposição, conclusão, etc.).
    *   *Exemplo:* "Houve uma infracção, **contudo** o condutor recusou-se a pagar a multa."
    *   *Nota prática:* O uso errado de um conector (como usar "portanto" em vez de "entretanto") destrói a lógica do argumento.

4.  **Anáfora e Catáfora:** São mecanismos de referência. A anáfora retoma algo já dito; a catáfora antecipa algo que será dito.
    *   *Exemplo (Anáfora):* "A esquadra foi reabilitada. **Ela** agora tem melhores condições."
    *   *Nota prática:* Evitam a repetição excessiva de substantivos, tornando a leitura menos cansativa.

5.  **Progressão Temática:** É a forma como o texto avança, acrescentando informações novas a informações já conhecidas, sem fugir do tema central.
    *   *Exemplo:* Começar por descrever o local do crime, depois as provas encontradas e, finalmente, os suspeitos identificados.
    *   *Nota prática:* Um texto sem progressão é redundante; "anda em círculos".

## Aprofundamento

### 1. Mecanismos de Coesão Gramatical

A coesão gramatical utiliza os recursos do sistema da língua. No contexto do MININT, a precisão é vital:

*   **Referenciação:** O uso de pronomes pessoais, possessivos e demonstrativos. Em Angola, é comum o uso do pronome "o mesmo" para retomar um sujeito, mas cuidado: o uso excessivo é considerado vício de linguagem. Prefira sinónimos ou a omissão do sujeito quando o contexto permitir.
*   **Coesão Frásica:** Refere-se à concordância e à ordem das palavras. "Os efectivos da PN **estão** prontos" (concordância verbal correcta).
*   **Coesão Interfrásica:** É aqui que entram os conectores. Devem memorizar as tabelas de conjunções:
    *   *Adversativas (Oposição):* mas, porém, todavia, contudo, no entanto.
    *   *Conclusivas:* logo, portanto, por conseguinte, assim.
    *   *Causais:* porque, visto que, dado que, pois.

### 2. Mecanismos de Coesão Lexical

Ocorre através da escolha das palavras (vocabulário):

*   **Sinonímia:** Substituir uma palavra por outra de sentido semelhante para evitar a repetição. Em vez de repetir "crime" cinco vezes, use "delito", "infracção", "acto ilícito", "ocorrência".
*   **Hiperonímia e Hiponímia:** Relação do geral para o particular. "Viatura" é o hiperónimo de "patrulha", "jipe" ou "motocicleta".
*   **Reiteração:** Às vezes, a repetição de uma palavra-chave é necessária para dar ênfase ou garantir que não haja dúvida sobre quem se fala (muito comum em textos jurídicos e policiais).

### 3. Coerência e Progressão Temática

Um texto coerente deve respeitar três princípios:
1.  **Não-contradição:** Não afirmar A e depois dizer o contrário de A.
2.  **Não-tautologia:** Não ser repetitivo ao ponto de não acrescentar informação nova (o famoso "subir para cima").
3.  **Relevância:** As informações devem ser pertinentes ao tema. Num relatório sobre um assalto na Ilha do Cabo, não é relevante descrever a cor das flores do jardim vizinho, a menos que isso tenha influência no crime.

## Exemplos resolvidos

**Exercício 1: Identificação de Conectores**
*Enunciado:* "O Comandante Provincial deu as ordens necessárias, __________ os oficiais não as cumpriram de imediato, __________ houve um erro de comunicação." Preencha as lacunas com os conectores adequados.

*   **Resolução:**
    1.  A primeira relação é de oposição (as ordens foram dadas, mas não cumpridas). Conectores possíveis: *mas, contudo, todavia*.
    2.  A segunda relação é de causa (o motivo de não terem cumprido foi o erro). Conectores possíveis: *porque, visto que, pois*.
    *   *Resposta final:* "O Comandante Provincial deu as ordens necessárias, **contudo** os oficiais não as cumpriram de imediato, **visto que** houve um erro de comunicação."

**Exercício 2: Coesão por Referenciação**
*Enunciado:* Substitua as repetições no texto seguinte: "O suspeito foi detido no Sambizanga. O suspeito levava consigo uma arma. A arma não tinha licença."

*   **Resolução:**
    1.  Podemos substituir o segundo "O suspeito" pelo pronome "Ele" ou por um sinónimo como "O indivíduo".
    2.  Podemos substituir "A arma" pelo pronome relativo "que" ou por "esta".
    *   *Resposta final:* "O suspeito foi detido no Sambizanga. **Ele** levava consigo uma arma **que** não tinha licença." (Ou: "...uma arma, a qual não possuía licença.")

**Exercício 3: Análise de Coerência**
*Enunciado:* Analise a coerência da frase: "Devido à forte chuva que assolou Luanda, os bombeiros foram chamados para apagar um incêndio florestal de grandes proporções."

*   **Resolução:**
    *   A frase é **incoerente**.
    *   *Raciocínio:* Se houve uma "forte chuva", é logicamente improvável (quase impossível) que ocorra um "incêndio florestal de grandes proporções" ao mesmo tempo, pois a humidade impede a propagação do fogo desta natureza. Há uma contradição pragmática entre a causa (chuva) e o efeito (incêndio florestal).

## Erros comuns a evitar

1.  **Queísmo:** O uso excessivo da palavra "que". Exemplo: "O agente que disse que o carro que foi roubado..." Corrija usando particípios ou pronomes: "O agente, ao afirmar que o carro roubado..."
2.  **Ambiguidade (Anfibologia):** Frases com duplo sentido. Exemplo: "O polícia prendeu o ladrão em sua casa." (Na casa de quem? Do polícia ou do ladrão?). Seja específico: "O polícia prendeu o ladrão na residência deste último."
3.  **Uso indevido de "onde":** Lembre-se, "onde" só deve ser usado para **lugares físicos**. Nunca diga: "A situação onde o crime ocorreu". Diga: "A situação **em que** o crime ocorreu".
4.  **Falta de concordância por distanciamento:** Quando o sujeito está longe do verbo, o candidato tende a errar. "A lista dos candidatos aprovados no concurso do MININT para as províncias do sul **saíram** ontem." (Errado! O que saiu foi a **lista**. O correcto é: "...**saiu** ontem").
5.  **Conectores contraditórios:** Usar "embora" (concessivo) quando se quer dar uma ideia de causa.

## Resumo

1.  **Coesão** é a ligação gramatical; **Coerência** é a ligação lógica de sentido.
2.  Os **conectores** são a chave para a pontuação e para a clareza do raciocínio jurídico-policial.
3.  Evite a **repetição** desnecessária usando sinónimos e pronomes (anáfora).
4.  A **progressão temática** garante que o texto apresente factos novos de forma ordenada.
5.  No contexto do **MININT**, a clareza e a objectividade valem mais do que palavras difíceis usadas fora de contexto.

## Glossário

*   **Anáfora:** Retoma de um termo mencionado anteriormente no texto.
*   **Catáfora:** Referência a um termo que ainda será apresentado.
*   **Conector:** Palavra que estabelece nexo entre orações (conjunção).
*   **Elipse:** Omissão de um termo que se subentende facilmente (ex: "Fomos à esquadra" - omissão de "Nós").
*   **Hiperónimo:** Palavra de sentido genérico (ex: Animal).
*   **Hipónimo:** Palavra de sentido específico (ex: Cão).
*   **Semântica:** Estudo do sentido das palavras e das frases.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.

Estudem com afinco, candidatos. A pátria espera de vós não apenas coragem física, mas também clareza intelectual. A aula terminou. Podem sair de forma ordenada.
$lesson2$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'classes-palavras',
  'Classes de palavras',
  $lesson3$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de escrita.

A vossa presença aqui hoje demonstra um compromisso com o serviço à Pátria. No entanto, para envergar a farda do Ministério do Interior (MININT), não basta o vigor físico; é imperativo o domínio da norma culta da nossa língua oficial. Um agente que não sabe redigir um auto de notícia ou que interpreta mal uma ordem superior por desconhecimento gramatical é um agente limitado. Hoje, daremos início ao estudo sistemático da Morfologia, focando-nos nas **Classes de Palavras**.

---

## Introdução

O estudo das classes de palavras, ou Morfologia, é o alicerce de qualquer comunicação eficaz. No contexto da Polícia Nacional, a precisão terminológica e a correcta estruturação das frases são fundamentais. Imaginem a redacção de um relatório de ocorrência: a troca de um adjectivo por um advérbio, ou o uso incorrecto de uma preposição, pode alterar completamente a descrição de um crime, prejudicando o processo judicial e a justiça.

Para o concurso público do MININT, este tema é recorrente e eliminatório. O examinador não quer apenas saber se o candidato sabe ler; ele quer aferir se o candidato compreende a natureza das palavras e como elas se articulam para formar o pensamento lógico-jurídico necessário à actividade policial. Dominar as dez classes de palavras é o primeiro passo para garantir a vossa vaga e, futuramente, a vossa progressão na carreira.

---

## Conceitos fundamentais

Para compreendermos a estrutura da nossa língua, dividimos as palavras em dez grupos distintos, de acordo com a sua função e forma.

1.  **Substantivo:** É a classe que nomeia os seres, objectos, lugares e sentimentos. É o núcleo das orações.
    *   *Exemplo:* O **agente** patrulha a **Ilha de Luanda**.
    *   *Nota prática:* No Direito e na Actividade Policial, o substantivo deve ser preciso (ex: "detido" em vez de "pessoa").

2.  **Verbo:** Indica acção, estado, ocorrência ou fenómeno da natureza. É a classe mais variável.
    *   *Exemplo:* O Comandante **ordenou** a formatura.
    *   *Nota prática:* Atenção à conjugação no modo imperativo, essencial para a transmissão de ordens.

3.  **Adjectivo:** Atribui uma característica, qualidade ou estado ao substantivo.
    *   *Exemplo:* A intervenção foi **oportuna** e **eficaz**.
    *   *Nota prática:* O adjectivo deve concordar em género e número com o substantivo a que se refere.

4.  **Pronome:** Palavra que substitui ou acompanha o substantivo, indicando a sua posição em relação às pessoas do discurso.
    *   *Exemplo:* **Nós** garantimos a ordem; **este** é o nosso dever.
    *   *Nota prática:* O uso correcto dos pronomes de tratamento (Vossa Excelência, Senhor Comissário) é obrigatório na hierarquia policial.

5.  **Advérbio:** Palavra invariável que modifica o sentido de um verbo, de um adjectivo ou de outro advérbio, indicando circunstâncias (tempo, lugar, modo, etc.).
    *   *Exemplo:* A patrulha chegou **cedo** ao local.
    *   *Nota prática:* Advérbios de modo terminados em "-mente" são frequentes em relatórios técnicos.

6.  **Conjunção:** Serve para ligar orações ou termos semelhantes, estabelecendo relações de coordenação ou subordinação.
    *   *Exemplo:* O suspeito fugiu, **mas** foi capturado logo adiante.
    *   *Nota prática:* Conjunções adversativas (mas, porém, contudo) são vitais para descrever factos contraditórios em inquéritos.

---

## Aprofundamento

As dez classes dividem-se em dois grandes grupos: as **Variáveis** (que mudam de forma para indicar género, número ou tempo) e as **Invariáveis** (que mantêm sempre a mesma forma).

### 1. Classes Variáveis

*   **Substantivo:** Podem ser próprios (Angola, PN) ou comuns (viatura, arma). No concurso, fiquem atentos aos substantivos colectivos (ex: *elenco* de leis, *corpo* de polícia).
*   **Artigo:** Define (o, a, os, as) ou indefine (um, uma, uns, umas) o substantivo. O uso do artigo definido antes de cargos é comum: "O Senhor Comissário".
*   **Adjectivo:** Cuidado com a posição do adjectivo. "Um grande oficial" (valorativo/importância) é diferente de "um oficial grande" (descritivo/estatura).
*   **Numeral:** Indica quantidade (cardinal: um, dois), ordem (ordinal: primeiro, segundo), multiplicação ou divisão. Em documentos oficiais, escreve-se o numeral por extenso e entre parênteses o algarismo: "Vinte e dois (22) detidos".
*   **Pronome:** É uma das áreas mais complexas. Devem dominar os pronomes pessoais (eu, tu, ele...), possessivos (meu, teu, nosso...), demonstrativos (este, esse, aquele...) e relativos (que, o qual, cujo...). A colocação pronominal (ênclise, próclise e mesóclise) é tema certo na prova.
*   **Verbo:** É o motor da frase. Devem dominar a concordância verbal. Se o sujeito é composto ("O agente e o inspector"), o verbo vai para o plural ("chegaram").

### 2. Classes Invariáveis

*   **Advérbio:** Não varia em género ou número. Nunca digam "elas estavam meias cansadas"; o correcto é "elas estavam **meio** cansadas" (advérbio de intensidade).
*   **Preposição:** Liga palavras estabelecendo dependência (de, em, para, com, por). Exemplo: "Mandado **de** captura". A omissão ou troca da preposição altera a regência verbal.
*   **Conjunção:** Dividem-se em coordenativas (ligam orações independentes) e subordinativas (ligam orações dependentes). As conjunções integrantes "que" e "se" introduzem orações substantivas fundamentais em depoimentos.
*   **Interjeição:** Exprime emoções súbitas (Oh!, Ah!, Alerta!). É a classe menos usada em textos formais e relatórios policiais, devendo ser evitada, excepto na transcrição fiel de diálogos de terceiros.

---

## Exemplos resolvidos

**Exemplo 1: Identificação de Classes**
*Frase:* "Os novos recrutas marcharam rapidamente ontem."
*   **Os:** Artigo definido, masculino, plural.
*   **novos:** Adjectivo (caracteriza recrutas).
*   **recrutas:** Substantivo comum (núcleo do sujeito).
*   **marcharam:** Verbo (acção, 3ª pessoa do plural do Pretérito Perfeito).
*   **rapidamente:** Advérbio de modo.
*   **ontem:** Advérbio de tempo.

**Exemplo 2: Colocação Pronominal (Comum em provas do MININT)**
*Questão:* Qual a forma correcta?
a) Me empreste a algema.
b) Empreste-me a algema.
*   **Resolução:** A opção **b** é a correcta. Em português de norma angolana/europeia, não se inicia frase com pronome oblíquo átono. Como o verbo está no imperativo, usa-se a ênclise.

**Exemplo 3: Concordância Nominal**
*Frase:* "É ________ a entrada de pessoas estranhas nesta esquadra." (proibido/proibida)
*   **Resolução:** Se houver artigo ("a entrada"), o adjectivo concorda: "É **proibida** a entrada". Se não houver artigo ("entrada"), usa-se o masculino genérico: "É **proibido** entrada".

---

## Erros comuns a evitar

1.  **Confundir "Mal" com "Mau":** "Mal" é advérbio (oposto de bem); "Mau" é adjectivo (oposto de bom). *Ex: O suspeito comportou-se mal (bem). Ele é um mau (bom) cidadão.*
2.  **Uso de "Onde" vs "Aonde":** "Onde" indica lugar fixo. "Aonde" indica movimento (com verbos que pedem a preposição 'a'). *Ex: Onde está a viatura? / Aonde vais com tanta pressa?*
3.  **Incorrecção no uso de "Há" e "A":** "Há" indica tempo decorrido (passado) ou existência. "A" indica distância ou tempo futuro. *Ex: Trabalho na PN há dez anos. A esquadra fica a dois quilómetros.*
4.  **Pleonasmos viciosos:** Evitem "subir para cima" ou "entrar para dentro" em relatórios. São erros de lógica que demonstram pobreza de vocabulário.
5.  **Concordância do verbo "Haver":** Quando significa "existir", o verbo haver é impessoal e fica sempre no singular. *Ex: Havia (e não haviam) muitos manifestantes na praça.*

---

## Resumo

Para a vossa prova, fixem estes cinco pontos:
1.  **Morfologia** estuda a palavra isolada; a sua função na frase será estudada na Sintaxe.
2.  Existem **6 classes variáveis** (substantivo, artigo, adjectivo, numeral, pronome, verbo) e **4 invariáveis** (advérbio, preposição, conjunção, interjeição).
3.  O **Substantivo** e o **Verbo** são os pilares de qualquer texto oficial.
4.  Os **Conectivos** (preposições e conjunções) são responsáveis pela coesão do texto; sem eles, as ideias ficam soltas.
5.  A **Norma Angolana** segue o padrão do português europeu, especialmente na colocação pronominal e regência, sendo este o padrão exigido nos concursos públicos.

---

## Glossário

1.  **Morfologia:** Estudo da estrutura, da formação e da classificação das palavras.
2.  **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
3.  **Locução:** Conjunto de duas ou mais palavras que valem por uma (ex: locução adverbial "às pressas").
4.  **Substantivo Colectivo:** Nome comum que, no singular, designa um conjunto de seres da mesma espécie.
5.  **Verbo Impessoal:** Aquele que não tem sujeito e é usado apenas na 3ª pessoa do singular.
6.  **Regência:** Relação de dependência entre um termo regente (verbo ou nome) e o seu complemento.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e das frases no discurso.
8.  **Ênclise:** Colocação do pronome depois do verbo (ex: Prendi-o).

Estudem com afinco, senhores candidatos. A disciplina é a alma da Polícia e o estudo é a arma do intelectual. Próxima aula: Sintaxe da Oração.

Podem sair para o intervalo.
$lesson3$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'verbos',
  'Conjugação verbal',
  $lesson4$
Bom dia, caros aspirantes. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para a vossa aprovação no concurso público do Ministério do Interior (MININT), especificamente para o ingresso na Polícia Nacional de Angola (PN). A língua portuguesa não é apenas um instrumento de comunicação; para um oficial da ordem, ela é uma ferramenta de trabalho fundamental. Um auto de notícia mal redigido ou um relatório com erros de conjugação verbal pode comprometer a validade jurídica de uma diligência e manchar a imagem da corporação.

Nesta aula, abordaremos a **Conjugação Verbal**. O domínio dos tempos e modos, bem como a distinção entre verbos regulares e irregulares, é o que separa o candidato preparado daquele que sucumbe perante a rasteira do examinador. Exijo rigor, disciplina e foco. Vamos começar.

---

## Introdução

A conjugação verbal é a flexão do verbo em pessoa, número, tempo, modo e voz. No contexto do MININT e da Polícia Nacional, a precisão temporal é vital. Quando um agente relata uma ocorrência, ele deve saber distinguir se uma acção **ocorreu** (concluída), **ocorrera** (anterior a outra já passada) ou **ocorreria** (hipotética ou dependente de condição). A clareza no uso dos tempos verbais garante que a hierarquia e o sistema de justiça compreendam exactamente a sequência dos factos.

Para o concurso público, a banca examinadora foca-se na capacidade do candidato em lidar com as irregularidades verbais e com a correlação entre os modos indicativo e conjuntivo. Não basta saber "falar bem"; é necessário dominar a norma culta, a norma angolana inserida no português europeu, que é a base dos nossos textos legislativos e regulamentares.

---

## Conceitos Fundamentais

Para dominarmos a estrutura, precisamos primeiro de consolidar os alicerces:

1.  **Radical e Desinência:** O radical é a parte que contém o significado do verbo (ex: em *patrulh-ar*, "patrulh" é o radical). A desinência é a terminação que indica o tempo, o modo, a pessoa e o número.
    *   *Exemplo:* No verbo *prender*, em "prendemos", o "-emos" indica a 1.ª pessoa do plural do Presente do Indicativo.
    *   *Nota Prática:* Identificar o radical ajuda a conjugar verbos da mesma família.

2.  **Modos Verbais:** Indicam a atitude do falante em relação à acção.
    *   **Indicativo:** Exprime certeza, factos reais. (Ex: "O agente **cumpre** o seu dever.")
    *   **Conjuntivo:** Exprime dúvida, desejo, hipótese. (Ex: "Espero que o agente **cumpra** o seu dever.")
    *   **Condicional:** Exprime uma acção dependente de uma condição. (Ex: "O agente **cumpriria** o dever, se tivesse meios.")
    *   *Nota Prática:* Em relatórios policiais, o Indicativo é o modo predominante pela sua natureza factual.

3.  **Tempos Simples e Compostos:**
    *   **Simples:** Formados por apenas um verbo. (Ex: "Eu **fiz** a ronda.")
    *   **Compostos:** Formados por um verbo auxiliar (*ter* ou *haver*) + o particípio do verbo principal. (Ex: "Eu **tinha feito** a ronda.")
    *   *Nota Prática:* O tempo composto "tinha feito" é muito mais comum na nossa norma do que o simples "fizera".

4.  **Verbos Regulares e Irregulares:**
    *   **Regulares:** Mantêm o radical e seguem o modelo da sua conjugação. (Ex: *Cantar, Vender, Partir*).
    *   **Irregulares:** Sofrem alterações no radical ou nas desinências. (Ex: *Fazer, Ir, Vir, Ver, Ser*).
    *   *Nota Prática:* Os verbos irregulares são os preferidos das provas de concurso.

5.  **Verbos Auxiliares:** São aqueles que ajudam a formar os tempos compostos e a voz passiva. Os principais são *Ter, Haver, Ser* e *Estar*.
    *   *Exemplo:* "O suspeito **foi** detido pela patrulha." (*Ser* como auxiliar da voz passiva).

---

## Aprofundamento

### 1. O Modo Indicativo: A Espinha Dorsal do Relato
No concurso, fiquem atentos ao **Pretérito Perfeito** (acção concluída: "O Comissário deu a ordem") e ao **Pretérito Imperfeito** (acção contínua no passado ou hábito: "Os agentes patrulhavam a zona diariamente"). 
Uma rasteira comum é o **Pretérito Mais-que-perfeito**. Na forma simples (ex: *fizera*), é raro na fala, mas aparece em textos da Lei Orgânica da Polícia Nacional. Na forma composta (*tinha feito*), é essencial para indicar uma acção anterior a outra já passada.

### 2. O Modo Conjuntivo (Subjuntivo) e a Hipótese
O conjuntivo é o terror dos candidatos. Lembrem-se:
*   **Presente do Conjuntivo:** "É necessário que a Polícia **intervenha**" (e não "intervém").
*   **Futuro do Conjuntivo:** Muito usado em editais e leis. "Se o candidato **fizer** a prova..." (e não "se o candidato fazer").

### 3. Verbos Irregulares de Alta Relevância
Prestem atenção ao verbo **Intervir** (derivado de *vir*). Não se diz "o agente interviu", mas sim "o agente **interveio**". Da mesma forma, o verbo **Deter** (derivado de *ter*): "A polícia **deteve** o suspeito" (e não "deteu").

### 4. Tempos Compostos e a Voz Passiva
A voz passiva é fundamental para a redacção oficial. 
*   Voz Activa: "O efectivo garantiu a segurança."
*   Voz Passiva: "A segurança **foi garantida** pelo efectivo."
Aqui, o verbo auxiliar *ser* deve concordar em tempo e modo com a acção principal.

---

## Exemplos Resolvidos

**Questão 1:** Assinale a opção em que o verbo está correctamente conjugado no Pretérito Perfeito do Indicativo.
a) O agente interviu na discussão para evitar o crime.
b) O agente interveio na discussão para evitar o crime.
c) O agente interveira na discussão para evitar o crime.

*   **Resolução:** A resposta correcta é a **b**. O verbo *intervir* segue a conjugação do verbo *vir*. Se dizemos "ele veio", devemos dizer "ele interveio". A opção 'a' é um erro comum de linguagem coloquial, e a 'c' está no pretérito mais-que-perfeito simples.

**Questão 2:** Transponha a frase para o Futuro do Conjuntivo: "Se a patrulha **vê** a infracção, actua imediatamente."
*   **Resolução:** O Futuro do Conjuntivo do verbo *ver* é **vire**. Portanto: "Se a patrulha **vire** a infracção, actuará imediatamente."
*   *Raciocínio:* Muitos confundem o futuro do conjuntivo de *ver* (vire) com o de *vir* (vier). Atenção redobrada aqui!

**Questão 3:** Identifique o tempo e modo da forma verbal sublinhada: "Os peritos **tinham analisado** as provas antes do julgamento."
*   **Resolução:** Trata-se do **Pretérito Mais-que-perfeito Composto do Indicativo**.
*   *Raciocínio:* Verbo auxiliar *ter* no pretérito imperfeito (tinham) + particípio do verbo principal (analisado). Indica uma acção anterior a outra (o julgamento).

---

## Erros Comuns a Evitar

1.  **Confundir "Haver" com "A":** Em relatórios, usa-se "há" para tempo decorrido (passado) ou existência. "O crime ocorreu **há** duas horas." Nunca use "à duas horas" ou "a duas horas" para passado.
2.  **Trocar "Vier" por "Vierem" ou "Ver" por "Vire":** "Quando você **vire** o Comandante" (do verbo ver) vs. "Quando você **vier** à esquadra" (do verbo vir).
3.  **Má conjugação de verbos derivados:** Verbos como *manter, deter, conter* seguem o verbo *ter*. Logo: "Ele **manteve** a calma" (e não "manteu").
4.  **Uso incorrecto do Condicional:** "Se eu pudesse, eu **ajudava**." Na norma culta para concursos, prefira: "Se eu pudesse, eu **ajudaria**."
5.  **Gerundismo:** Evitem o uso excessivo do gerúndio ("Vou estar enviando o relatório"). Digam: "Enviarei o relatório" ou "Vou enviar o relatório".

---

## Resumo

Para a vossa prova, fixem estes 5 pontos:
1.  **Verbos de Comando:** Verbos como *deter, intervir, manter* e *ver* são recorrentes; dominem as suas irregularidades.
2.  **Correlação Temporal:** Se a frase começa no passado, o verbo seguinte deve manter a lógica temporal.
3.  **Futuro do Conjuntivo:** É a base das normas e condições; saibam conjugar "se eu fizer", "se eu vier", "se eu vir".
4.  **Auxiliares:** O verbo *ter* é o auxiliar por excelência nos tempos compostos na norma angolana.
5.  **Voz Passiva:** Saibam transformar a activa em passiva para identificar o sujeito e a flexão correcta do auxiliar.

---

## Glossário

1.  **Desinência:** Terminação verbal que indica flexão de tempo, modo, número ou pessoa.
2.  **Infinitivo:** Forma nominal do verbo (ex: *estudar*). É o nome do verbo.
3.  **Particípio:** Forma nominal usada nos tempos compostos (ex: *estudado*).
4.  **Modo Subjuntivo (Conjuntivo):** Modo que expressa incerteza, desejo ou possibilidade.
5.  **Verbo Auxiliar:** Verbo que perde o seu sentido original para ajudar na conjugação de outro (ex: *ter, ser*).
6.  **Paradigma Verbal:** Modelo de conjugação que os verbos regulares seguem.
7.  **Voz Passiva:** Construção em que o sujeito sofre a acção expressa pelo verbo.
8.  **Pretérito:** Tempo verbal que se refere ao passado.

Estudem com afinco. A farda que pretendem envergar exige, antes de mais, o domínio da palavra e da lei. Disciplina e bons estudos!
$lesson4$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'concordancia',
  'Concordância verbal e nominal',
  $lesson5$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. É com elevado sentido de dever que iniciamos esta sessão de preparação para o vosso concurso público no Ministério do Interior (MININT). Como vosso professor, exijo o máximo de concentração. A farda que pretendem envergar exige não apenas vigor físico, mas também uma competência intelectual irrepreensível.

## Introdução

A língua portuguesa é a nossa ferramenta de trabalho fundamental. No exercício das funções policiais, a elaboração de autos de notícia, relatórios de ocorrências e participações criminais exige um domínio absoluto da norma culta. Uma concordância mal efectuada num documento oficial não é apenas um erro gramatical; é uma falha de rigor que pode comprometer a clareza de uma prova judicial ou a imagem da corporação perante as instituições do Estado e o cidadão.

Nesta aula, focaremos a nossa atenção na **Concordância Verbal e Nominal**. Estes mecanismos sintácticos são os pilares que garantem a coesão entre os elementos da frase. Para um candidato ao MININT, dominar estas regras é demonstrar que possui a disciplina e a precisão necessárias para servir a Pátria com excelência. Vamos dissecar as regras gerais e as excepções que frequentemente surgem nas provas de admissão.

---

## Conceitos fundamentais

Para dominarmos a sintaxe de concordância, precisamos de fixar os seguintes alicerces:

1.  **Concordância Nominal:** É o princípio segundo o qual os determinantes (artigos, numerais, pronomes) e os adjectivos devem harmonizar-se em género (masculino/feminino) e número (singular/plural) com o substantivo a que se referem.
    *   *Exemplo:* **Os** zeloso**s** agente**s** patrulhavam a zona.
    *   *Nota prática:* O substantivo é o "chefe" da frase nominal; todos os outros termos devem segui-lo.

2.  **Concordância Verbal:** É a relação de harmonia que obriga o verbo a flexionar-se em número e pessoa para concordar com o seu sujeito.
    *   *Exemplo:* **O Comando Geral emitiu** a directiva. (3.ª pessoa do singular).
    *   *Nota prática:* Identificar correctamente o núcleo do sujeito é o primeiro passo para não errar a flexão do verbo.

3.  **Sujeito Composto:** É aquele que possui dois ou mais núcleos. A regra geral dita que o verbo deve ir para o plural.
    *   *Exemplo:* **O Comissário e o Inspector reuniram-se** com a unidade.
    *   *Nota prática:* Se o sujeito composto estiver depois do verbo, este pode concordar com o núcleo mais próximo ou ir para o plural.

4.  **Sujeito Colectivo:** Refere-se a um conjunto de seres da mesma espécie, mas a palavra apresenta-se no singular.
    *   *Exemplo:* **A guarnição manteve-se** em alerta.
    *   *Nota prática:* Embora a ideia seja de pluralidade, a forma gramatical é singular, logo o verbo permanece no singular.

5.  **Expressões Partitivas:** São expressões que indicam uma parte de um todo (ex: "a maioria de", "grande parte de", "metade de").
    *   *Exemplo:* **A maioria dos efectivos participou** (ou **participaram**) na formação.
    *   *Nota prática:* Nestes casos, a norma permite a concordância com o núcleo da expressão (singular) ou com o substantivo que a segue (plural).

---

## Aprofundamento

### 1. Concordância Verbal: Casos Específicos e Complexos

No contexto de um concurso público, as questões raramente abordam o óbvio. Devemos atentar nos detalhes técnicos:

**A) Sujeito Composto por Pessoas Gramaticais Diferentes:**
Se no sujeito houver a 1.ª pessoa (eu/nós), ela prevalece. Se houver a 2.ª pessoa (tu/vós), ela prevalece sobre a 3.ª.
*   *Exemplo:* **Tu e o teu colega (vós) fareis** a ronda nocturna. (Ou "farão", seguindo a tendência do português contemporâneo, mas em prova rigorosa, prefira-se a norma clássica).
*   *Exemplo:* **Eu e o Superintendente elaborámos** o relatório. (Eu + Ele = Nós).

**B) Verbos Impessoais (O perigo do verbo "Haver"):**
O verbo **Haver**, quando significa "existir" ou "ocorrer", é impessoal. Isto significa que não tem sujeito e deve ficar sempre na 3.ª pessoa do singular.
*   *Erro comum:* "Houveram muitos crimes ontem." (**Errado**)
*   *Forma correcta:* "**Houve** muitos crimes ontem." (**Correcto**)
*   *Nota:* O verbo **Existir**, por sua vez, é pessoal e concorda com o sujeito: "**Existiram** muitos crimes."

**C) Concordância com o pronome relativo "QUE" e "QUEM":**
*   Com o "QUE", o verbo concorda com o antecedente: "Fui **eu que solicitei** o reforço."
*   Com o "QUEM", o verbo pode ficar na 3.ª pessoa do singular ou concordar com o antecedente: "Fui **eu quem solicitou**" ou "Fui **eu quem solicitei**".

### 2. Concordância Nominal: Adjectivos e Palavras Especiais

**A) Adjectivo referindo-se a vários substantivos:**
Se o adjectivo vier depois de substantivos de géneros diferentes, vai para o masculino plural.
*   *Exemplo:* O **crime** e a **desordem** foram **combatidos**.

**B) Palavras que funcionam como adjectivos (Anexo, Incluso, Próprio, Mesmo, Obrigado):**
Estas palavras concordam em género e número com o substantivo.
*   *Exemplo:* As **fotografias** seguem **anexas** ao processo.
*   *Exemplo:* A **agente** disse: — Muito **obrigada**.
*   *Atenção:* A expressão "em anexo" é invariável. "As fotografias seguem **em anexo**."

---

## Exemplos resolvidos

**Exercício 1:** Analise a frase: *"Grande parte dos candidatos (concluir) a prova antes do tempo."* Justifique as possibilidades de concordância.
*   **Resolução:**
    1.  *Opção A:* "Grande parte dos candidatos **concluiu**..." (Concordância lógica com o núcleo "parte").
    2.  *Opção B:* "Grande parte dos candidatos **concluíram**..." (Concordância atractiva com o termo "candidatos").
    *   **Raciocínio:** Ambas estão correctas segundo a norma culta para expressões partitivas seguidas de plural.

**Exercício 2:** Corrija a frase: *"Fazem dez anos que a Polícia Nacional reforçou o policiamento de proximidade."*
*   **Resolução:** A forma correcta é "**Faz** dez anos...".
*   **Raciocínio:** O verbo "fazer", quando indica tempo decorrido, é impessoal. Não possui sujeito, devendo permanecer obrigatoriamente na 3.ª pessoa do singular.

**Exercício 3:** Escolha a opção correcta: *"Seguem (anexo/anexos) os relatórios e as guias de marcha."*
*   **Resolução:** A forma correcta é "**anexos**".
*   **Raciocínio:** O adjectivo "anexos" refere-se a dois substantivos ("relatórios" - masc. e "guias" - fem.). Pela regra de precedência, o adjectivo assume o masculino plural.

---

## Erros comuns a evitar

1.  **"Houveram" em vez de "Houve":** Nunca use o verbo haver no plural quando este significar existência. É o erro que mais elimina candidatos em Angola.
2.  **Concordância com "Vossa Excelência":** Embora o pronome se refira à 2.ª pessoa (com quem se fala), o verbo e os adjectivos devem ficar na 3.ª pessoa.
    *   *Errado:* Vossa Excelência estais cansado.
    *   *Correcto:* Vossa Excelência **está cansado**.
3.  **"Alerta" e "Menos":** A palavra "menos" é sempre invariável. A palavra "alerta", quando advérbio, também não varia.
    *   *Exemplo:* Os agentes estavam **alerta** (e não "alertas"). Houve **menos** ocorrências este mês.
4.  **Sujeito Colectivo Distante:** Quando o colectivo está longe do verbo, o aluno tende a pluralizar.
    *   *Errado:* O elenco de oficiais, após longas horas de debate sobre a segurança pública, decidiram...
    *   *Correcto:* O elenco [...] **decidiu**. (O núcleo é "elenco").

---

## Resumo para memorização

1.  **Verbo HAVER (existir/tempo):** Sempre no singular. É uma regra de ouro.
2.  **Expressões Partitivas:** Aceitam dupla concordância (singular ou plural).
3.  **Sujeito Composto:** Regra geral, verbo no plural. Se vier depois do verbo, pode concordar com o mais próximo.
4.  **ANEXO/INCLUSO:** São adjectivos. Devem "imitar" o substantivo em género e número.
5.  **Verbo FAZER (tempo):** Fica no singular. "Faz dois meses", nunca "fazem dois meses".

---

## Glossário

*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
*   **Núcleo do Sujeito:** A palavra principal do sujeito, geralmente um substantivo ou pronome, que dita a concordância do verbo.
*   **Verbo Impessoal:** Verbo que não possui sujeito gramatical, sendo usado apenas na 3.ª pessoa do singular.
*   **Concordância Atractiva:** Quando o verbo ou adjectivo concorda com o termo mais próximo, em vez de concordar com o núcleo principal.
*   **Norma Culta:** Conjunto de regras linguísticas utilizadas em contextos formais, documentos oficiais e provas de concurso.

Estudem com afinco, meus senhores. A disciplina começa na ponta do lápis. A pátria aos seus filhos admira!

**Fim da aula.**
$lesson5$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'regencia',
  'Regência verbal e nominal',
  $lesson6$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para o vosso sucesso no concurso público do Ministério do Interior (MININT): a **Regência Verbal e Nominal**. No exercício das funções policiais, a clareza e a precisão na redacção de autos de notícia, relatórios de ocorrência e participações criminais não são apenas uma questão de estética linguística; são uma questão de legalidade e rigor institucional. Um erro de regência pode alterar o sentido de uma norma ou de um depoimento, comprometendo a justiça.

Nesta aula, vamos dissecar como os verbos e os nomes (substantivos, adjectivos e advérbios) se relacionam com os seus complementos. Veremos que, tal como na hierarquia policial, na língua portuguesa existem termos que mandam (regentes) e termos que obedecem (regidos), muitas vezes exigindo a presença de uma preposição específica para que a mensagem seja transmitida sem ambiguidades.

---

## Conceitos fundamentais

Para dominarmos a regência, precisamos de alicerces sólidos. Vamos rever os conceitos que servirão de base para toda a nossa análise:

1.  **Regência:** É a parte da gramática que estuda a relação de dependência entre os termos de uma oração. O termo "regente" é a palavra principal que exige um complemento, e o termo "regido" é o complemento que completa o sentido do regente.
    *   *Exemplo:* O agente **obedece** (regente) **à lei** (regido).
    *   *Nota prática:* Identificar quem exige a preposição é o primeiro passo para não errar na prova.

2.  **Termo Regente:** É o núcleo que solicita um complemento. Pode ser um verbo (regência verbal) ou um nome (regência nominal).
    *   *Exemplo:* O Comissário tem **necessidade** (nome regente) de reforços.
    *   *Nota prática:* No MININT, muitos termos regentes são substantivos abstractos derivados de verbos de acção.

3.  **Transitividade Verbal:** Indica se o verbo precisa de um complemento para ter sentido completo.
    *   *Exemplo:* O suspeito **fugiu** (intransitivo - sentido completo); O agente **deteve** o suspeito (transitivo directo - exige complemento sem preposição).
    *   *Nota prática:* Verbos transitivos directos não admitem preposição entre o verbo e o objecto.

4.  **Objecto Directo e Indirecto:** São os complementos dos verbos transitivos. O directo liga-se ao verbo sem preposição obrigatória; o indirecto liga-se através de uma preposição.
    *   *Exemplo:* O efectivo **porta** a arma (OD); O efectivo **precisa** de munições (OI).
    *   *Nota prática:* A escolha da preposição correcta (de, a, com, em, por) define a regência indirecta.

5.  **Preposição:** É a palavra invariável que liga dois termos, estabelecendo uma relação de subordinação.
    *   *Exemplo:* Atentado **contra** a segurança do Estado.
    *   *Nota prática:* Em concursos, as preposições "a", "de" e "em" são as que mais geram rasteiras.

---

## Aprofundamento

### 1. Regência Verbal: Casos Críticos para a Polícia Nacional

Muitos verbos mudam de sentido conforme a preposição que utilizam. No contexto policial, isto é vital.

*   **Aspirar:**
    *   No sentido de *sorver, respirar*: É transitivo directo. "O perito aspirou o pó do local do crime."
    *   No sentido de *pretender, desejar*: É transitivo indirecto (exige a preposição **a**). "Muitos jovens angolanos **aspiram à** carreira policial." (Note o uso da crase: a + a).
*   **Assistir:**
    *   No sentido de *prestar socorro*: Geralmente transitivo directo. "O agente assistiu o ferido no acidente."
    *   No sentido de *ver, presenciar*: É transitivo indirecto (exige a preposição **a**). "A testemunha assistiu **ao** assalto." (Erro comum: "assistiu o assalto").
    *   No sentido de *caber, pertencer*: É transitivo indirecto. "Este direito assiste **ao** detido."
*   **Implicar:**
    *   No sentido de *acarretar, resultar*: É transitivo directo (não admite a preposição "em"). "A vossa conduta implicará **expulsão** imediata." (Errado: "implicará em expulsão").
*   **Informar / Avisar / Certificar:**
    *   Estes verbos são transitivos directos e indirectos. Informamos *alguém de alguma coisa* ou *alguma coisa a alguém*.
    *   "O Comando informou **os agentes da** nova escala." ou "O Comando informou **a nova escala aos** agentes."
    *   *Atenção:* Nunca use duas preposições ou nenhuma. "Informou aos agentes da escala" está incorrecto.

### 2. Regência Nominal: A Precisão do Substantivo e Adjectivo

A regência nominal ocorre quando um substantivo, adjectivo ou advérbio exige um complemento preposicionado. Vejamos exemplos comuns em textos oficiais do MININT:

*   **Atentado:** Exige a preposição *a* ou *contra*. "Atentado **à** ordem pública" ou "Atentado **contra** a autoridade".
*   **Inerente:** Exige a preposição *a*. "O risco é inerente **à** profissão policial."
*   **Passível:** Exige a preposição *de*. "A infracção é passível **de** multa."
*   **Obediência:** Exige a preposição *a*. "Devemos obediência **à** Constituição da República de Angola."
*   **Respeito:** Exige a preposição *a, com, para com, por*. "Respeito **pelos** direitos humanos."

### 3. O Uso do Pronome Relativo na Regência

Este é um ponto onde muitos candidatos falham. Quando usamos pronomes relativos (que, qual, cujo), a preposição exigida pelo verbo deve ser colocada **antes** do pronome.

*   *Correcto:* "Esta é a lei **a que** me refiro." (Quem se refere, refere-se **a**).
*   *Incorrecto:* "Esta é a lei que me refiro."

---

## Exemplos resolvidos

**Exemplo 1: Analise a frase "O candidato prefere a Polícia Nacional do que as Forças Armadas." e corrija-a se necessário.**
*   **Raciocínio:** O verbo *preferir* é transitivo directo e indirecto. Ele exige a preposição **a** para o segundo termo e rejeita expressões comparativas como "do que" ou "mais".
*   **Resolução:** "O candidato prefere a Polícia Nacional **às** Forças Armadas."

**Exemplo 2: Preencha a lacuna: "O crime ____ fomos testemunhas ocorreu no Cazenga."**
*   **Raciocínio:** O substantivo "testemunha" exige a preposição **de** (quem é testemunha, é testemunha *de* algo). Como temos um pronome relativo, a preposição deve vir antes dele.
*   **Resolução:** "O crime **de que** fomos testemunhas ocorreu no Cazenga."

**Exemplo 3: Qual a regência correcta para o verbo "Visar" no sentido de objectivar?**
*   **Raciocínio:** No sentido de dar um visto (assinatura), é directo. No sentido de ter como objectivo, é transitivo indirecto (preposição **a**).
*   **Resolução:** "As medidas visam **ao** bem-estar da população." (E não "visam o bem-estar").

---

## Erros comuns a evitar

1.  **"Chegar em":** No português padrão, quem chega, chega **a** algum lugar.
    *   *Errado:* Chegámos na esquadra.
    *   *Correcto:* Chegámos **à** esquadra.
2.  **"Namorar com":** O verbo namorar é transitivo directo.
    *   *Errado:* Ele namora com a colega.
    *   *Correcto:* Ele namora a colega. (Embora o uso coloquial aceite "com", em provas de concurso de Angola, segue-se a norma rígida).
3.  **"Esquecer de":** O verbo esquecer só leva preposição se for pronominal (esquecer-se).
    *   *Errado:* Esqueci do relatório.
    *   *Correcto:* Esqueci o relatório OU Esqueceu-me o relatório OU **Esqueci-me do** relatório.
4.  **"Agradecer aos":** Agradecemos *algo* (directo) *a alguém* (indirecto).
    *   *Errado:* Agradeci o Comandante.
    *   *Correcto:* Agradeci **ao** Comandante.

---

## Resumo para memorização

1.  **Regência Verbal** trata da relação entre verbos e seus complementos; **Regência Nominal** trata de nomes (substantivos/adjectivos) e seus complementos.
2.  O verbo **Assistir** (ver) exige a preposição **A**.
3.  O verbo **Preferir** exige a preposição **A** e nunca aceita "do que".
4.  O verbo **Implicar** (sentido de acarretar) não aceita a preposição "em".
5.  Em frases com **pronomes relativos**, a preposição exigida pelo verbo deve ser deslocada para antes do pronome (ex: O cargo **a que** aspiro).

---

## Glossário

*   **Crase:** Fusão da preposição "a" com o artigo definido "a" ou pronome demonstrativo.
*   **Intransitivo:** Verbo que não exige complemento para fazer sentido.
*   **Norma Culta:** Conjunto de regras linguísticas seguidas em documentos oficiais e provas de concurso.
*   **Objecto Indirecto:** Complemento verbal que vem obrigatoriamente precedido de preposição.
*   **Preposição:** Palavra de ligação que estabelece dependência entre termos.
*   **Regente:** O termo que comanda a relação de subordinação, exigindo ou não preposição.
*   **Regido:** O termo que completa o sentido do regente.
*   **Transitivo Directo:** Verbo que exige complemento sem auxílio de preposição.

Estudem com afinco, aspirantes. A disciplina na linguagem é o reflexo da disciplina na farda. Até à próxima aula.
$lesson6$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'sintaxe',
  'Sintaxe da frase',
  $lesson7$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para quem aspira envergar a farda da nossa gloriosa **Polícia Nacional de Angola (PN)**. A prova de Língua Portuguesa para o Ministério do Interior (MININT) não avalia apenas a vossa capacidade de leitura; ela testa o vosso rigor lógico e a vossa competência em estruturar o pensamento de forma clara e oficial. Um agente da autoridade que não domina a sintaxe da frase é um agente que falha na redacção de um auto de notícia, numa participação criminal ou num relatório de patrulhamento.

A sintaxe é o ramo da gramática que estuda a disposição das palavras na frase e as relações lógicas entre elas. No contexto de um concurso público, o domínio da frase simples e da frase complexa é o que separa o candidato apto daquele que será excluído. A clareza de um texto jurídico ou administrativo depende inteiramente da correcta articulação entre o sujeito, o predicado e as orações que compõem o período. Vamos, portanto, trabalhar com o rigor que a farda exige.

---

## Introdução

A sintaxe é a espinha dorsal da comunicação escrita oficial. No âmbito do MININT, a precisão é fundamental. Imaginem um relatório de ocorrência onde a troca de uma conjunção ou a má estruturação de uma oração subordinada altera o sentido de quem cometeu o crime e de quem foi a vítima. A sintaxe estuda como as palavras se agrupam para formar unidades de sentido: a frase, a oração e o período.

Para o concurso da Polícia Nacional, o examinador focar-se-á na vossa capacidade de identificar os constituintes da frase simples (análise sintáctica interna) e de compreender a articulação das orações no período composto (frase complexa). Dominar estes conceitos permitirá que respondam com segurança às questões de múltipla escolha e, futuramente, que redijam documentos institucionais com a dignidade que a função pública requer.

---

## Conceitos fundamentais

Para avançarmos, precisamos de consolidar os alicerces. Atentem nos seguintes conceitos:

1.  **Frase, Oração e Período:** A frase é qualquer enunciado com sentido completo. A oração é um enunciado que se organiza em torno de um verbo. O período é a frase constituída por uma ou mais orações.
    *   *Exemplo:* "Alto! Polícia!" (Frase nominal). "O agente patrulha a zona da Mutamba." (Oração/Período simples).
    *   *Nota prática:* No concurso, foquem-se no verbo. Se há um verbo, há uma oração.

2.  **Sujeito:** É o ser (pessoa ou coisa) sobre o qual se faz uma declaração e com o qual o verbo concorda em número e pessoa.
    *   *Exemplo:* "Os efectivos da Polícia Nacional garantem a ordem pública." (Sujeito: Os efectivos da Polícia Nacional).
    *   *Nota prática:* Para encontrar o sujeito, perguntem ao verbo: "Quem é que...?" ou "O que é que...?".

3.  **Predicado:** É tudo aquilo que se diz sobre o sujeito. O núcleo do predicado é sempre um verbo.
    *   *Exemplo:* "O Comandante **explicou as novas directrizes**."
    *   *Nota prática:* O predicado contém a acção ou o estado relativo ao sujeito.

4.  **Complementos (Directo e Indirecto):** São termos que completam o sentido de verbos transitivos. O complemento directo liga-se ao verbo sem preposição obrigatória; o indirecto exige preposição (a, para, de, com, etc.).
    *   *Exemplo:* "O agente solicitou **o documento** (CD) **ao condutor** (CI)."
    *   *Nota prática:* Substituam o CD por "o/a" e o CI por "lhe" para testar a função.

5.  **Coordenação:** Processo de ligação de orações independentes, que mantêm o seu sentido próprio mesmo se isoladas.
    *   *Exemplo:* "A patrulha chegou **e** os suspeitos fugiram."
    *   *Nota prática:* As conjunções coordenativas (e, mas, ou, logo) são as vossas bússolas aqui.

6.  **Subordinação:** Processo em que uma oração (subordinada) exerce uma função sintáctica em relação a outra (principal), dependendo dela gramaticalmente.
    *   *Exemplo:* "É necessário **que todos respeitem a lei**."
    *   *Nota prática:* A oração subordinada funciona como se fosse uma peça de um puzzle que falta na oração principal.

---

## Aprofundamento

### 1. A Frase Simples: A Estrutura Interna
A frase simples, ou período simples, contém apenas uma oração (oração absoluta). A sua análise exige o conhecimento da **transitividade verbal**.

*   **Verbos Intransitivos:** Não exigem complemento. "O suspeito fugiu."
*   **Verbos Transitivos Directos:** Exigem um objecto directo. "A Polícia deteve o meliante."
*   **Verbos Transitivos Indirectos:** Exigem um objecto com preposição. "O cidadão obedece à autoridade." (Reparem no uso do acento grave, indicando a preposição 'a' + artigo 'a').
*   **Verbos de Ligação:** Indicam estado ou qualidade (ser, estar, parecer, ficar). Introduzem o **Predicativo do Sujeito**. "O agente está atento." ('Atento' é o predicativo).

### 2. A Frase Complexa: Coordenação e Subordinação
Aqui reside a maior dificuldade dos candidatos. A frase complexa possui duas ou mais orações.

#### A. Orações Coordenadas
Dividem-se em:
*   **Copulativas:** Adição (e, nem, não só... mas também). "O agente vigia e protege."
*   **Adversativas:** Oposição/Contraste (mas, porém, todavia, contudo). "Houve uma denúncia, mas não encontraram provas."
*   **Disjuntivas:** Alternativa (ou, ou... ou, quer... quer). "Ou o cidadão colabora, ou será detido por desobediência."
*   **Conclusivas:** Conclusão (logo, portanto, por conseguinte). "O crime foi provado, logo haverá condenação."
*   **Explicativas:** Justificação (pois, porque, que). "Respeite o agente, que ele está em serviço."

#### B. Orações Subordinadas
Estas dividem-se em três grandes grupos:
1.  **Substantivas:** Exercem funções de substantivo (sujeito, complemento). "O Comissário ordenou **que a operação começasse**." (Oração subordinada substantiva objectiva directa).
2.  **Adjectivas:** Exercem função de adjectivo, introduzidas por pronomes relativos (que, o qual, cujo).
    *   *Restritivas:* "Os agentes **que são honestos** dignificam a farda." (Apenas os honestos).
    *   *Explicativas (entre vírgulas):* "Os agentes, **que são servidores públicos**, devem ser exemplares." (Todos os agentes são servidores).
3.  **Adverbiais:** Exercem função de advérbio (circunstância).
    *   *Temporais:* "Prendam o suspeito **quando ele sair de casa**."
    *   *Causais:* "A estrada foi cortada **porque houve um acidente grave**."
    *   *Condicionais:* "**Se houver motim**, chamem a Unidade de Reacção e Patrulhamento."
    *   *Finais:* "Trabalhamos **para que a paz social seja mantida**."

---

## Exemplos resolvidos

**Exercício 1:** Analise sintacticamente a frase: "O Serviço de Investigação Criminal (SIC) deteve o suspeito ontem em Cacuaco."

*   **Raciocínio:**
    1.  Quem deteve? "O Serviço de Investigação Criminal (SIC)". Logo, este é o **Sujeito Composto** (institucional).
    2.  Qual é a acção? "deteve". Verbo transitivo directo.
    3.  Deteve quem? "o suspeito". **Complemento Directo**.
    4.  Quando? "ontem". **Modificador (ou Adjunto Adverbial) de Tempo**.
    5.  Onde? "em Cacuaco". **Modificador (ou Adjunto Adverbial) de Lugar**.

**Exercício 2:** Classifique a oração sublinhada: "Embora a chuva fosse intensa, a patrulha manteve-se no posto."

*   **Raciocínio:** A conjunção "embora" introduz uma ideia de concessão (um obstáculo que não impede a acção principal).
*   **Resposta:** Oração subordinada adverbial concessiva.

**Exercício 3:** Transforme as duas frases simples numa frase complexa coordenada adversativa:
Frase A: "O agente deu ordem de paragem."
Frase B: "O condutor acelerou o veículo."

*   **Raciocínio:** A relação entre as duas frases é de oposição. Devo usar "mas", "porém" ou "contudo".
*   **Resposta:** "O agente deu ordem de paragem, **mas** o condutor acelerou o veículo."

---

## Erros comuns a evitar

1.  **Separar o Sujeito do Predicado com vírgula:** Este é o erro mais grave. Nunca se escreve: "O Comandante da Esquadra, chegou agora." (Errado). O correcto é: "O Comandante da Esquadra chegou agora."
2.  **Confundir "Porque" com "Porquê":** Em respostas e explicações, usa-se "porque". "Porquê" usa-se no final de frases ou como substantivo.
3.  **Erro de Concordância no Sujeito Composto:** "Chegou o agente e o inspector." (Aceitável se o verbo vier antes), mas o ideal é: "O agente e o inspector chegaram." Atentem à concordância com o plural.
4.  **Confundir Oração Coordenada Adversativa (mas) com Advérbio de Intensidade (mais):** "Queremos mais segurança, mas os recursos são escassos." Nunca troquem um pelo outro.
5.  **Uso incorrecto do pronome relativo "cujo":** "O agente cujo o nome..." (Errado). O correcto é "O agente cujo nome..." (Nunca se usa artigo após 'cujo').

---

## Resumo

Para a vossa prova, memorizem estes 5 pontos:
1.  **Sujeito e Predicado** são os termos essenciais; sem eles, a estrutura da oração fica incompleta.
2.  **Complemento Directo** responde a "quê/quem" e o **Indirecto** exige preposição (a, para).
3.  **Orações Coordenadas** são independentes; as **Subordinadas** dependem da principal.
4.  As **Conjunções** são as chaves para classificar as orações. Estudem as tabelas de conjunções (adversativas, causais, condicionais).
5.  A **Pontuação** muda o sentido. Uma vírgula numa oração adjectiva pode transformar uma restrição numa explicação geral.

---

## Glossário

1.  **Sintaxe:** Parte da gramática que estuda a relação entre as palavras na frase.
2.  **Oração Absoluta:** Período simples, constituído por apenas um verbo.
3.  **Verbo Transitivo:** Verbo que necessita de complementos para ter sentido completo.
4.  **Conjunção:** Palavra invariável que liga duas orações.
5.  **Adjunto Adverbial (Modificador):** Termo que indica uma circunstância (tempo, lugar, modo).
6.  **Predicativo do Sujeito:** Atributo ou estado atribuído ao sujeito através de um verbo de ligação.
7.  **Pronome Relativo:** Palavra que substitui um termo anterior e introduz uma oração subordinada adjectiva.
8.  **Período Composto:** Frase que contém duas ou mais orações.

Estudem com afinco, candidatos. A disciplina é a alma do sucesso, tanto na gramática quanto na vida policial. Força e Honra!
$lesson7$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'pontuacao',
  'Pontuação',
  $lesson8$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para o vosso sucesso no concurso público do Ministério do Interior (MININT). A vossa missão, enquanto futuros agentes da autoridade, não se limitará ao patrulhamento ou à manutenção da ordem pública; ela estende-se à redação rigorosa de autos de notícia, relatórios de ocorrência e participações criminais. Um erro de pontuação num documento oficial não é apenas uma falha gramatical; pode ser a diferença entre a condenação de um criminoso ou a anulação de um processo por ambiguidade.

A pontuação é o sistema de sinais gráficos que indica, na escrita, as pausas e a entoação da leitura, organizando a estrutura das frases para que o sentido seja inequívoco. No contexto da Polícia Nacional, a clareza é um imperativo ético e profissional. Nesta aula, vamos dissecar as regras fundamentais que regem o uso do ponto final, da vírgula, do ponto e vírgula, dos dois pontos e dos sinais de interrogação e exclamação, sempre com o rigor que a farda exige.

---

## Conceitos fundamentais

### 1. Ponto Final (.)
O ponto final assinala a pausa máxima e encerra o período simples ou composto, indicando que o sentido daquela unidade de pensamento está completo.
*   **Exemplo:** O efetivo da Polícia Nacional garantiu a segurança durante a manifestação em Luanda.
*   **Nota prática:** No final de siglas (P.N.A.), o uso do ponto tem caído em desuso na prática administrativa moderna, mas em textos corridos, o ponto final é obrigatório para fechar raciocínios.

### 2. Vírgula (,)
É o sinal que marca uma pausa de curta duração. Serve para separar elementos dentro de uma oração ou orações dentro de um período.
*   **Exemplo:** O Comandante Provincial convocou os oficiais, os sargentos e os agentes para a parada matinal.
*   **Nota prática:** Nunca se separa o sujeito do predicado com uma vírgula. É um erro gravíssimo em provas de concurso.

### 3. Ponto e Vírgula (;)
Indica uma pausa intermédia, superior à da vírgula e inferior à do ponto final. É muito utilizado em enumerações de artigos de lei ou regulamentos.
*   **Exemplo:** São deveres do agente: respeitar a hierarquia; zelar pelo fardamento; e cumprir a Constituição.
*   **Nota prática:** Use o ponto e vírgula para separar itens de uma lista que já contenham vírgulas internas.

### 4. Dois Pontos (:)
Este sinal anuncia uma citação, uma enumeração, uma explicação ou uma síntese do que foi dito anteriormente.
*   **Exemplo:** O suspeito declarou o seguinte: "Eu não estava no local do crime à hora do incidente."
*   **Nota prática:** Em relatórios policiais, os dois pontos são essenciais para introduzir depoimentos de testemunhas.

### 5. Ponto de Interrogação (?) e Exclamação (!)
O ponto de interrogação indica uma pergunta direta. O ponto de exclamação expressa sentimentos como surpresa, ordem ou ênfase.
*   **Exemplo (?):** Qual é o número de identificação do veículo apreendido?
*   **Exemplo (!):** Alto, em nome da Lei!
*   **Nota prática:** Em textos administrativos e jurídicos, o uso da exclamação deve ser extremamente parcimonioso, reservando-se apenas para ordens diretas ou citações.

---

## Aprofundamento

Para dominar a pontuação, o candidato deve compreender a sintaxe da frase. A vírgula, por ser o sinal mais complexo, exige atenção redobrada em quatro situações principais:

1.  **Isolamento do Vocativo:** O vocativo (chamamento) deve ser sempre isolado por vírgulas.
    *   *Exemplo:* "Agente Silva, apresente o relatório agora."
2.  **Isolamento do Aposto:** O aposto (explicação de um termo anterior) também requer vírgulas.
    *   *Exemplo:* "A Marginal de Luanda, local de grande afluência turística, será patrulhada hoje."
3.  **Orações Adjetivas Explicativas:** Diferenciam-se das restritivas pelo uso da vírgula.
    *   *Exemplo:* "Os polícias, que são treinados para o perigo, mantiveram a calma." (Todos os polícias são treinados).
4.  **Deslocamento de Adjuntos Adverbiais:** Quando um adjunto adverbial longo é colocado no início da frase, a vírgula é obrigatória.
    *   *Exemplo:* "Durante a operação de busca e apreensão no Cazenga, foram detidos três indivíduos."

Quanto ao **Ponto e Vírgula**, a sua aplicação técnica mais comum em concursos do MININT refere-se à separação de orações coordenadas que já possuem vírgulas no seu interior ou que apresentam um contraste.
*   *Exemplo:* "O primeiro grupo seguirá pela Avenida Deolinda Rodrigues; o segundo, pela Rua Direita do Gamek." (A vírgula após 'segundo' indica a omissão do verbo 'seguirá', e o ponto e vírgula separa as duas frentes de ação).

Os **Dois Pontos** possuem uma função esclarecedora. No Direito e na Administração Pública angolana, são usados antes de transcrições de artigos: "Nos termos do Artigo 1.º: 'Angola é uma República soberana...'".

---

## Exemplos resolvidos

### Exemplo 1: Correção de Pontuação
**Enunciado:** Pontue corretamente a frase: *O Diretor Nacional embora estivesse ocupado atendeu os candidatos ao concurso.*

**Resolução Passo-a-Passo:**
1.  Identificamos a oração principal: "O Diretor Nacional atendeu os candidatos ao concurso."
2.  Notamos uma oração intercalada de valor concessivo: "embora estivesse ocupado".
3.  Regra: Orações intercaladas devem ser isoladas por vírgulas.
4.  **Resultado:** O Diretor Nacional, embora estivesse ocupado, atendeu os candidatos ao concurso.

### Exemplo 2: Identificação de Erro
**Enunciado:** Identifique o erro na frase: *Os agentes de trânsito, apreenderam as cartas de condução caducadas.*

**Resolução Passo-a-Passo:**
1.  Sujeito: "Os agentes de trânsito".
2.  Predicado: "apreenderam as cartas de condução caducadas".
3.  Análise: Existe uma vírgula separando o sujeito do verbo.
4.  **Regra:** É proibido separar sujeito e predicado com vírgula, mesmo que o sujeito seja longo.
5.  **Correção:** Os agentes de trânsito apreenderam as cartas de condução caducadas.

### Exemplo 3: Uso do Ponto e Vírgula
**Enunciado:** Organize os itens abaixo usando a pontuação adequada para um regulamento.
*Itens: fardamento limpo; pontualidade no serviço; respeito aos cidadãos.*

**Resolução Passo-a-Passo:**
1.  Introduzimos com dois pontos.
2.  Separamos os itens por ponto e vírgula, pois são elementos de uma lista administrativa.
3.  Finalizamos com ponto final.
4.  **Resultado:** O regulamento prevê:
    a) Fardamento limpo;
    b) Pontualidade no serviço;
    c) Respeito aos cidadãos.

---

## Erros comuns a evitar

1.  **Vírgula entre Sujeito e Verbo:** É o erro que mais elimina candidatos. Nunca escreva: "O Comandante, disse...". O correto é: "O Comandante disse...".
2.  **Vírgula antes da conjunção "e":** Em regra, não se usa vírgula antes do "e" quando os sujeitos são os mesmos. Use apenas se os sujeitos forem diferentes (Ex: O sol brilhou, e a chuva caiu).
3.  **Confundir Adjunto Adverbial curto com longo:** Em "Ontem, saímos", a vírgula é facultativa. Em "No dia da independência nacional de Angola, saímos", a vírgula é obrigatória pelo comprimento da expressão.
4.  **Esquecer a vírgula no vocativo:** Escrever "Agente venha cá" está errado. O correto é "Agente, venha cá".
5.  **Uso excessivo de reticências (...):** Em textos oficiais da Polícia Nacional, as reticências são quase proibidas, pois indicam hesitação ou interrupção, o que retira a autoridade e a precisão ao documento.

---

## Resumo

1.  **Ponto Final:** Encerra o pensamento completo e o período.
2.  **Vírgula:** Marca pausas breves, isola vocativos, apostos e orações intercaladas; nunca separa sujeito de verbo.
3.  **Ponto e Vírgula:** Separa itens de enumerações ou orações coordenadas extensas.
4.  **Dois Pontos:** Introduz falas, citações de leis ou explicações detalhadas.
5.  **Interrogação e Exclamação:** Devem ser usados com critério, focando na clareza da intenção comunicativa (pergunta ou ordem).

---

## Glossário

1.  **Aposto:** Termo de caráter explicativo que se junta a um substantivo ou pronome.
2.  **Vocativo:** Termo usado para chamar ou interpelar o interlocutor.
3.  **Oração Intercalada:** Oração que se insere no meio de outra para introduzir uma observação ou ressalva.
4.  **Adjunto Adverbial:** Termo que indica uma circunstância (tempo, lugar, modo).
5.  **Período Composto:** Frase que possui duas ou mais orações.
6.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
7.  **Auto de Notícia:** Documento oficial onde a autoridade policial relata uma infração presenciada.
8.  **Conjunção:** Palavra que liga orações (ex: e, mas, porque, embora).

Estudem com afinco, meus senhores. A disciplina na escrita reflete a disciplina na farda. Boa sorte na vossa preparação!
$lesson8$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'ortografia',
  'Ortografia e acentuação',
  $lesson9$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a uma jornada de rigor e disciplina intelectual. O ingresso no Ministério do Interior (MININT) exige não apenas vigor físico e integridade moral, mas também uma competência linguística irrepreensível. Um oficial que não domina a sua língua materna — o Português, na sua norma angolana — compromete a clareza de um auto de notícia, a precisão de um relatório de ocorrência e a dignidade da instituição que representa.

Nesta aula, abordaremos a Ortografia e a Acentuação Gráfica, com foco nas alterações introduzidas pelo Acordo Ortográfico de 1990 (AO90). A prova de admissão não perdoa o erro ortográfico; um acento mal colocado ou um hífen esquecido pode ser a diferença entre a admissão e a exclusão. Portanto, exijo a vossa máxima atenção. Peguem no material de escrita e registem cada detalhe.

---

## Introdução

A língua escrita é a ferramenta fundamental do agente da autoridade. No contexto do MININT, a redação de documentos oficiais exige o cumprimento estrito das normas gramaticais vigentes. A ortografia não é uma escolha estética, mas uma convenção legal que garante a uniformidade e a compreensão mútua entre as instituições do Estado e o cidadão. Um erro de acentuação num nome próprio ou num termo jurídico pode invalidar um processo administrativo ou judicial.

A importância deste tema para o concurso da Polícia Nacional reside no facto de que a prova de Língua Portuguesa é, historicamente, a que apresenta maior taxa de reprovação. O candidato deve demonstrar que domina as regras de acentuação gráfica, o uso correto do hífen em termos compostos e a aplicação de maiúsculas e minúsculas de acordo com a hierarquia e os protocolos oficiais. Esta aula visa dotar-vos da precisão técnica necessária para superar este desafio.

---

## Conceitos fundamentais

Para dominarmos a ortografia, precisamos de alicerces sólidos. Vamos rever cinco conceitos essenciais:

### 1. Acentuação Tónica vs. Acentuação Gráfica
A **acentuação tónica** refere-se à sílaba pronunciada com maior intensidade (sílaba tónica). A **acentuação gráfica** é o uso de sinais (agudo, circunflexo) para marcar essa intensidade ou a abertura da vogal, seguindo regras específicas.
*   **Exemplo:** Na palavra **esquadra**, a sílaba tónica é "qua", mas não leva acento gráfico. Na palavra **polícia**, a sílaba tónica é "lí" e exige acento agudo.
*   **Nota prática:** Nem toda a palavra acentuada na fala leva acento no papel. O concurso testará se conhece as regras de exceção.

### 2. Classificação das Palavras quanto à Acentuação
As palavras dividem-se em oxítonas (última sílaba tónica), paroxítonas (penúltima) e proparoxítonas (antepenúltima).
*   **Exemplo:** **Retratar** (oxítona), **Agente** (paroxítona), **Viatura** (paroxítona), **Trânsito** (proparoxítona).
*   **Nota prática:** Em Angola, a maioria das palavras são paroxítonas. Lembrem-se: todas as proparoxítonas são obrigatoriamente acentuadas.

### 3. O Hífen e os Prefixos
O hífen é um sinal gráfico de união ou separação. Com o AO90, o seu uso com prefixos (como *auto-*, *sub-*, *infra-*) mudou significativamente.
*   **Exemplo:** **Autoestrada** (agora escreve-se junto) vs. **Anti-higiénico** (mantém o hífen devido ao 'h').
*   **Nota prática:** A regra de ouro atual é: "os opostos atraem-se, os iguais repelem-se" (letras diferentes juntam-se; letras iguais separam-se com hífen).

### 4. Maiúsculas e Minúsculas de Cortesia e Hierarquia
Refere-se ao uso de letras capitais para designar instituições, cargos de chefia e entidades públicas.
*   **Exemplo:** **Ministério do Interior**, **Comissário-Geral**, **Comando Provincial de Luanda**.
*   **Nota prática:** Em documentos oficiais da PN, cargos e instituições devem ser grafados com inicial maiúscula em sinal de respeito e identificação institucional.

### 5. Ditongos Abertos em Paroxítonas
Uma das mudanças mais drásticas do AO90 foi a queda do acento nos ditongos abertos "ei" e "oi" em palavras paroxítonas.
*   **Exemplo:** Antes escrevia-se "idéia", agora escreve-se **ideia**. Antes "assembléia", agora **assembleia**.
*   **Nota prática:** Cuidado! Se a palavra for oxítona, o acento mantém-se (ex: **herói**, **papéis**).

---

## Aprofundamento

Vamos agora ao detalhe técnico que separa o candidato comum do futuro oficial.

### Regras de Acentuação Pós-Acordo Ortográfico

1.  **O Fim do Trema:** O trema desapareceu completamente de todas as palavras da língua portuguesa (ex: *consequência*, *aguentar*), exceto em nomes próprios estrangeiros e seus derivados (ex: *Müller*).
2.  **Acentos Diferenciais:** Foram eliminados na sua maioria. Não se usa mais acento para distinguir "pára" (verbo) de "para" (preposição). No entanto, o acento mantém-se em:
    *   **Pôde** (pretérito perfeito) para distinguir de **pode** (presente).
    *   **Pôr** (verbo) para distinguir de **por** (preposição).
    *   **Têm** e **Vêm** (plural) para distinguir de **tem** e **vem** (singular). Isto é vital em relatórios: "Os suspeitos **têm** antecedentes".
3.  **Hiatos "oo" e "ee":** O acento circunflexo desapareceu. Escreve-se **voo**, **enjoo**, **leem**, **veem**.

### O Uso do Hífen com Prefixos (Regras Detalhadas)

Esta é a área onde ocorrem mais erros em concursos. Memorizem estas diretrizes:
*   **Usa-se hífen** quando o prefixo termina na mesma vogal com que começa a segunda palavra: **micro-ondas**, **anti-inflamatório**.
*   **Usa-se hífen** sempre que a segunda palavra começa por **H**: **super-homem**, **extra-humano**, **pré-história**.
*   **Não se usa hífen** quando o prefixo termina em vogal e a segunda palavra começa por consoante diferente de **R** ou **S**: **semicírculo**, **infraestrutura**, **antiprojecto**.
*   **Regra do R e S:** Se o prefixo termina em vogal e a segunda palavra começa por **R** ou **S**, estas consoantes duplicam-se e o hífen desaparece: **antirracismo**, **antissocial**, **contrarregra**.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a frase que cumpre rigorosamente as normas de acentuação e ortografia vigentes.
A) O Agente da PN parou a viatura para que o Comissário pudesse passar.
B) O Agente da PN párou a viatura para que o Comissário pudesse passar.
C) O Agente da PN parou a viatura para que o Comissário pôdesse passar.

*   **Resolução:** A opção correta é a **A**. 
*   **Raciocínio:** "Parou" (verbo parar) não tem acento. "Pudesse" é o imperfeito do conjuntivo e nunca foi acentuado. Na opção B, o acento em "párou" está incorreto (acento diferencial extinto). Na C, "pôdesse" não existe.

**Exercício 2:** Aplique a regra do hífen corretamente: (Extra) + (oficial); (Sub) + (inspetor).
*   **Resolução:** **Extraoficial** e **Subinspetor**.
*   **Raciocínio:** Em "extraoficial", as vogais são diferentes (a/o), logo juntam-se. Em "subinspetor", o prefixo termina em consoante e a segunda palavra começa por vogal diferente, logo juntam-se.

**Exercício 3:** Corrija a frase: "Eles veem a esquadra de longe e temem o auto-de-infração."
*   **Resolução:** "Eles **veem** a esquadra de longe e temem o **auto de infração**."
*   **Raciocínio:** "Veem" (verbo ver) perdeu o acento circunflexo. "Auto de infração" não leva hífen, pois é uma locução substantiva sem elemento de ligação (regra geral do AO90 para locuções, salvo exceções como "cor-de-rosa").

---

## Erros comuns a evitar

1.  **Confundir "Há" com "A":** "O crime ocorreu **há** duas horas" (tempo decorrido/passado). "A esquadra fica **a** dois quilómetros" (distância/futuro). Em relatórios policiais, este erro é fatal.
2.  **Acentuar "Luanda" ou "Benguela":** São paroxítonas terminadas em vogal "a", logo não levam acento. Muitos candidatos, por excesso de zelo, acentuam nomes de províncias.
3.  **Escrever "Auto-estrada":** Com o novo acordo, vogais diferentes unem-se sem hífen. O correto é **autoestrada**.
4.  **Uso indevido do acento em "Item":** A palavra **item** é paroxítona terminada em "em", tal como "nuvem" ou "homem". Não leva acento. O plural é **itens** (também sem acento).
5.  **Esquecer o acento em "Uíge":** Ao contrário de Luanda, **Uíge** é uma paroxítona terminada em "e" que forma hiato, sendo obrigatório o acento para marcar a tonicidade.

---

## Resumo para memorização

1.  **Proparoxítonas:** Todas são acentuadas (ex: **público**, **policiamento**, **trânsito**).
2.  **Ditongos "ei" e "oi":** Perderam o acento em palavras paroxítonas (**ideia**, **heroico**, **apoio**), mas mantêm em oxítonas (**pastéis**, **herói**).
3.  **Hífen (Vogais):** Letras iguais separam-se (**micro-ondas**); letras diferentes juntam-se (**autoajuda**).
4.  **Hífen (R e S):** Se o prefixo termina em vogal, dobra-se o R ou S e escreve-se junto (**antirroubo**, **minissaia**).
5.  **Diferenciais:** Mantêm-se apenas em **pôr** (verbo), **pôde** (passado), **têm** e **vêm** (plural).

---

## Glossário

1.  **Oxítona:** Palavra cuja acentuação tónica recai na última sílaba.
2.  **Paroxítona:** Palavra cuja acentuação tónica recai na penúltima sílaba.
3.  **Hiato:** Sequência de duas vogais que pertencem a sílabas diferentes.
4.  **Ditongo:** Encontro de uma vogal e uma semivogal na mesma sílaba.
5.  **Prefixo:** Elemento colocado antes da raiz de uma palavra para modificar o seu sentido.
6.  **Locução:** Conjunto de duas ou mais palavras que valem por uma só (ex: locução substantiva).
7.  **Sílaba Tónica:** A sílaba pronunciada com mais força numa palavra.
8.  **Grafia:** A forma correta de escrever as palavras de acordo com as normas.

Estudem com afinco, candidatos. A farda exige brio, e o brio começa na ponta da caneta. Disciplina e bons estudos!
$lesson9$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'semantica',
  'Semântica — sinónimos e antónimos',
  $lesson10$
Bom dia, caros candidatos. Sentem-se e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). A prova de Língua Portuguesa do Ministério do Interior (MININT) não avalia apenas a vossa capacidade de ler; avalia a vossa precisão intelectual. Um oficial de polícia que não domina a semântica é um oficial que redige mal um auto de notícia, que interpreta erradamente uma ordem superior ou que compromete a instrução de um processo criminal por falta de rigor vocabular.

A semântica é o estudo do sentido das palavras e das suas relações de significado. No contexto da segurança pública, a escolha entre duas palavras aparentemente iguais pode ser a diferença entre a legalidade e o abuso de autoridade. Nesta aula, vamos dissecar os sinónimos, antónimos, parónimos, a polissemia e a homonímia, sempre com o foco no rigor que a farda exige.

---

## Introdução

A semântica é a área da linguística que se ocupa do significado das palavras, das frases e dos textos. Para um candidato ao MININT, este tema reveste-se de uma importância estratégica. A actividade policial baseia-se na comunicação escrita e oral: relatórios, depoimentos, mandados e comunicações via rádio. A ambiguidade é a maior inimiga da ordem pública. Se um agente não compreende a nuance entre "deter" e "prender", ou entre "infringir" e "infligir", poderá cometer erros processuais gravíssimos que resultam na nulidade de actos jurídicos.

Além disso, as provas de concurso público em Angola têm privilegiado a capacidade de interpretação textual e a substituição de termos sem perda de sentido. O domínio dos campos semânticos permite ao futuro efectivo da Polícia Nacional compreender a legislação vigente — como a Lei Constitucional ou o Código Penal — com a profundidade necessária para a sua aplicação prática nas ruas de Luanda, de Cabinda ao Cunene.

---

## Conceitos fundamentais

Para dominarmos a semântica, precisamos de estabelecer alicerces sólidos sobre os seguintes conceitos:

### 1. Sinonímia
Refere-se a palavras que possuem significados idênticos ou muito aproximados. É raro existirem sinónimos perfeitos, pois o contexto dita a escolha da palavra.
*   **Exemplo:** *Deter* e *Capturar*. (Ex: "A patrulha conseguiu **deter** o suspeito" / "A patrulha conseguiu **capturar** o suspeito").
*   **Nota prática:** Em relatórios oficiais, prefira termos mais formais. Em vez de "o gatuno fugiu", utilize "o meliante evadiu-se".

### 2. Antonímia
Refere-se a palavras com significados opostos ou contrários.
*   **Exemplo:** *Ordem* e *Anarquia*; *Lícito* e *Ilícito*. (Ex: "O comportamento do cidadão foi **lícito**" vs "O comportamento do cidadão foi **ilícito**").
*   **Nota prática:** O antónimo é fundamental para a classificação de condutas no Direito Penal.

### 3. Paronímia
Palavras que são parecidas na grafia e na pronúncia, mas que têm significados diferentes. Este é o campo onde ocorrem mais erros em concursos.
*   **Exemplo:** *Ratificar* (confirmar) e *Retificar* (corrigir). (Ex: "O Comandante vai **ratificar** a escala de serviço" / "O agente deve **retificar** o erro no relatório").
*   **Nota prática:** Uma letra altera completamente o sentido da ordem dada. Muita atenção à grafia.

### 4. Homonímia
Palavras que têm a mesma pronúncia (homófonas) ou a mesma grafia (homógrafas), mas significados distintos.
*   **Exemplo:** *Auto* (substantivo: documento oficial, como o "Auto de Notícia") e *Auto* (prefixo: a si próprio, como em "Auto-defesa").
*   **Nota prática:** O contexto é o único elemento que permite distinguir o sentido correto de um homónimo.

### 5. Polissemia
É a propriedade de uma palavra ter múltiplos significados dependendo do contexto, mantendo, porém, uma raiz comum de sentido.
*   **Exemplo:** *Linha*. Pode ser a "linha de frente" no patrulhamento, uma "linha telefónica" de emergência (113) ou a "linha de investigação".
*   **Nota prática:** Não confunda com homonímia. Na polissemia, os sentidos estão relacionados entre si.

### 6. Campos Semânticos
É o conjunto de palavras ligadas por um tema ou área de conhecimento.
*   **Exemplo:** Campo semântico de "Segurança Pública": *viatura, algemas, esquadra, patrulha, ordem, cidadania, crime, prevenção*.
*   **Nota prática:** Identificar o campo semântico ajuda na interpretação rápida de textos longos em provas.

---

## Aprofundamento

No estudo da semântica para concursos, devemos ter especial atenção às **nuances contextuais**.

**A) Sinónimos Absolutos vs. Relativos:**
Raramente duas palavras significam exactamente o mesmo em todos os contextos. "Falecer" e "Morrer" são sinónimos, mas num comunicado oficial do Ministério do Interior sobre um agente tombado em serviço, o termo "falecer" ou "perecer" confere a solenidade necessária, enquanto "morrer" é mais genérico.

**B) A Armadilha dos Parónimos no Contexto Policial:**
Existem pares que o candidato deve memorizar obrigatoriamente:
*   **Infligir** (aplicar castigo/pena) vs. **Infringir** (violar uma lei/regra).
*   **Eminente** (elevado, ilustre) vs. **Iminente** (que está prestes a acontecer). Ex: "O perigo de confronto era **iminente**".
*   **Deferir** (conceder, aceitar) vs. **Diferir** (adiar ou ser diferente).

**C) Homónimos e a Escrita:**
Cuidado com as palavras homófonas (som igual, escrita diferente):
*   **Cessão** (acto de ceder bens).
*   **Sessão** (tempo de uma reunião ou cinema).
*   **Secção/Seção** (divisão, departamento). Ex: "Dirija-se à **Secção** de Logística".

**D) Denotação e Conotação:**
A linguagem policial deve ser predominantemente **denotativa** (sentido literal, do dicionário). A linguagem conotativa (figurada) deve ser evitada em documentos oficiais, mas aparece frequentemente em textos literários usados nas provas de interpretação do concurso.

---

## Exemplos resolvidos

### Exemplo 1: Substituição de Termos (Sinonímia)
**Questão:** No trecho "O agente agiu com *presteza* ao imobilizar o suspeito", a palavra sublinhada pode ser substituída, sem alteração de sentido, por:
a) Lentidão
b) Rapidez
c) Hesitação
d) Violência

**Resolução passo-a-passo:**
1. Analisar o contexto: O agente imobilizou o suspeito. "Presteza" indica algo feito de forma pronta, ágil.
2. Analisar as opções: "Lentidão" e "Hesitação" são antónimos. "Violência" é uma característica da acção, mas não é sinónimo de presteza.
3. Conclusão: "Rapidez" é o termo que mantém o sentido original.
**Resposta correcta: b)**

### Exemplo 2: Paronímia e Contexto
**Questão:** Assinale a frase em que o termo entre parênteses foi aplicado correctamente:
a) O meliante agiu com muita (descrição) para não ser visto.
b) O juiz vai (infligir) a sentença ao réu amanhã.
c) O perigo de explosão era (eminente).

**Resolução passo-a-passo:**
1. Na opção (a), o correcto seria "discrição" (qualidade de quem é discreto). "Descrição" é o acto de descrever.
2. Na opção (b), "infligir" significa aplicar uma pena. Está correcto.
3. Na opção (c), "eminente" significa ilustre. O correcto para algo prestes a ocorrer é "iminente".
**Resposta correcta: b)**

### Exemplo 3: Polissemia
**Questão:** A palavra "Posto" apresenta diferentes sentidos nas frases abaixo. Identifique aquela em que se refere a uma patente militar/policial:
a) O combustível no **posto** está caro.
b) Ele foi **posto** em liberdade condicional.
c) O **Posto** de Comissário exige grande responsabilidade.

**Resolução passo-a-passo:**
1. Na frase (a), "posto" é um estabelecimento comercial.
2. Na frase (b), "posto" é o particípio do verbo pôr.
3. Na frase (c), "posto" refere-se ao cargo, à graduação na hierarquia policial.
**Resposta correcta: c)**

---

## Erros comuns a evitar

1.  **Confundir "Ao encontro de" com "De encontro a":** "Ao encontro de" significa estar de acordo; "De encontro a" significa choque, oposição. *Ex: "A viatura foi de encontro ao muro" (bateu).*
2.  **Trocar "Tráfego" por "Tráfico":** "Tráfego" refere-se ao trânsito de veículos. "Tráfico" refere-se ao comércio ilícito (tráfico de estupefacientes). Nunca escreva "tráfico de veículos" a menos que esteja a falar de contrabando de carros.
3.  **Uso indevido de "Mal" e "Mau":** "Mal" é antónimo de "Bem". "Mau" é antónimo de "Bom". *Dica: O agente agiu mal (agiu bem). Ele é um mau elemento (é um bom elemento).*
4.  **Ignorar a regência na sinonímia:** Às vezes, ao trocar um sinónimo, esquece-se que a preposição deve mudar. "Aceder ao sistema" vs. "Entrar no sistema".
5.  **Confundir "Emergir" com "Imergir":** Emergir é vir à tona (aparecer); Imergir é mergulhar (afundar).

---

## Resumo

1.  **Sinónimos** auxiliam na coesão textual e evitam a repetição viciosa em relatórios.
2.  **Antónimos** são essenciais para contrastar factos e comportamentos (legal vs. ilegal).
3.  **Parónimos** exigem atenção redobrada à grafia; uma letra errada pode invalidar o sentido jurídico de um documento.
4.  **Homonímia e Polissemia** dependem estritamente do contexto para serem interpretadas correctamente.
5.  O **Campo Semântico** da Polícia Nacional deve ser dominado para uma leitura técnica eficiente das leis e regulamentos.

---

## Glossário

1.  **Aferir:** Verificar, avaliar, comparar com um padrão (ex: aferir o bafómetro).
2.  **Diligência:** Procedimento ou investigação policial para busca de provas.
3.  **Infracção:** Violação de uma lei, norma ou regulamento.
4.  **Inquirir:** Interrogar, questionar testemunhas ou suspeitos.
5.  **Ostensivo:** Aquilo que é feito à vista de todos, para ser notado (ex: patrulhamento ostensivo).
6.  **Peculato:** Crime de desvio de dinheiro público por funcionário que o administra.
7.  **Flagrante:** Acto que é visto no momento em que ocorre.
8.  **Custódia:** Acto de guardar ou deter alguém sob protecção ou vigilância estatal.

Estudem com afinco. A farda não aceita o erro, e a vossa prova também não. Até à próxima aula.
$lesson10$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'figuras',
  'Figuras de estilo',
  $lesson11$
Bom dia, caros candidatos ao Ministério do Interior. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje não estamos aqui apenas para cumprir um programa; estamos aqui para garantir que a vossa interpretação de texto e o vosso domínio da língua portuguesa sejam ferramentas de precisão, tal como a vossa conduta deverá ser na Polícia Nacional de Angola. No rigor da vida policial, a palavra é a primeira arma de um oficial. Compreender as nuances do que é dito e do que é escrito é fundamental para a elaboração de autos de notícia, relatórios de ocorrência e para a interpretação correta das leis e directivas.

## Introdução

As figuras de estilo, também conhecidas como figuras de linguagem ou recursos retóricos, são estratégias literárias e linguísticas que o emissor utiliza para conferir maior expressividade, ênfase ou beleza à mensagem. No contexto de um concurso público para o MININT, o domínio deste tema é crucial por dois motivos principais: primeiro, porque as provas de Língua Portuguesa testam exaustivamente a vossa capacidade de distinguir o sentido literal (denotativo) do sentido figurado (conotativo); segundo, porque a interpretação de textos jurídicos e literários exige que o candidato identifique intenções que nem sempre estão explícitas na superfície do texto.

Um agente da Polícia Nacional que não saiba identificar uma ironia ou um eufemismo num depoimento pode comprometer a veracidade de uma investigação. Da mesma forma, a compreensão de metáforas e antíteses em discursos oficiais permite uma leitura mais profunda das orientações estratégicas do Comando Geral. Nesta aula, abordaremos as figuras de pensamento, de sintaxe e de som, sempre com o foco no rigor exigido pela vossa futura carreira.

---

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de alicerces sólidos. Vamos focar-nos nos conceitos que mais frequentemente surgem nas provas de acesso à função pública em Angola.

### 1. Metáfora
É a substituição de um termo por outro, baseada numa relação de semelhança implícita, sem o uso de partículas comparativas (como "como", "tal qual").
*   **Exemplo:** "Aquele oficial é um leão na defesa da pátria."
*   **Nota prática:** Diferencia-se da comparação porque a metáfora afirma que algo *é*, enquanto a comparação diz que algo *é como*.

### 2. Metonímia
Ocorre quando se substitui um termo por outro com o qual mantém uma relação de proximidade ou contiguidade (a parte pelo todo, o continente pelo conteúdo, o autor pela obra).
*   **Exemplo:** "A esquadra toda manteve-se em silêncio." (Aqui, "esquadra" substitui os polícias que lá trabalham).
*   **Nota prática:** É muito comum na linguagem administrativa e militar para designar instituições pelos seus edifícios ou símbolos.

### 3. Hipérbole
Consiste no uso de uma expressão exagerada para enfatizar uma ideia ou realidade.
*   **Exemplo:** "Já te disse mil vezes para não estacionares em local proibido!"
*   **Nota prática:** Em relatórios oficiais, a hipérbole deve ser evitada, mas é vital reconhecê-la em depoimentos de civis sob stress emocional.

### 4. Eufemismo
É o recurso utilizado para suavizar uma expressão que possa ser considerada desagradável, chocante ou rude.
*   **Exemplo:** "O suspeito faltou à verdade perante o instrutor do processo." (Em vez de dizer que o suspeito mentiu).
*   **Nota prática:** É uma figura essencial na diplomacia policial e no trato com o público para manter a urbanidade.

### 5. Personificação (ou Prosopopeia)
Atribuição de características, sentimentos ou ações humanas a seres inanimados ou irracionais.
*   **Exemplo:** "As sirenes gritavam desesperadas pelas ruas de Luanda."
*   **Nota prática:** Muito utilizada em textos literários e crónicas jornalísticas sobre a segurança pública.

### 6. Antítese
Aproximação de palavras ou ideias com sentidos opostos para realçar o contraste.
*   **Exemplo:** "A Polícia Nacional trabalha no **dia** e na **noite** para garantir a paz."
*   **Nota prática:** Serve para enfatizar a abrangência de uma ação ou a dualidade de uma situação.

---

## Aprofundamento

Vamos agora elevar o nível da nossa análise. No contexto das provas do MININT, o examinador não quer apenas que saibam o nome da figura; ele quer que compreendam a sua função sintático-semântica.

### Litote: A Afirmação pela Negação
O litote é, de certa forma, o oposto da hipérbole e um parente próximo do eufemismo. Consiste em afirmar algo negando o seu contrário. 
*   **Exemplo:** "O trabalho do agente não foi nada mau." (Significa que foi bom ou muito bom).
*   **Contexto Técnico:** É usado para manter a modéstia ou para suavizar uma crítica, sendo recorrente em pareceres de avaliação de desempenho.

### Ironia: O Sentido Inverso
A ironia consiste em dizer o contrário do que se pensa, geralmente com uma intenção crítica ou humorística. A sua identificação depende totalmente do contexto.
*   **Exemplo:** "Excelente trabalho!", disse o comandante ao ver a viatura suja e mal cuidada.
*   **Atenção:** Na prova, a ironia é frequentemente detetada através de aspas ou de um tom que contradiz a lógica da situação descrita no texto.

### Aliteração e Anáfora: Recursos de Ênfase
*   **Aliteração:** Repetição de sons consonânticos. Exemplo: "O **p**olícia **p**atrulha o **p**erímetro com **p**rudência." Isto cria um ritmo que auxilia na memorização de lemas.
*   **Anáfora:** Repetição de uma palavra ou expressão no início de frases ou versos sucessivos. 
    *   *Exemplo:* "**Pela** ordem, **pela** paz, **pela** segurança do cidadão."
    *   *Uso:* Muito comum em discursos políticos e em preâmbulos de leis para conferir solenidade e autoridade ao texto.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a figura de estilo presente na frase: *"O efetivo da PN é o braço forte da lei em Angola."*
*   **Resolução:** Trata-se de uma **Metáfora**. 
*   **Raciocínio:** Não existe um braço físico de carne e osso que pertença à "lei". Faz-se uma analogia implícita entre a força e a proteção de um braço humano e a capacidade coerciva da Polícia Nacional. Não há partícula comparativa, logo, é metáfora.

**Exercício 2:** Analise a frase: *"Bebemos uma Cuca para celebrar a promoção."*
*   **Resolução:** Trata-se de uma **Metonímia**.
*   **Raciocínio:** Ninguém bebe a marca (Cuca), bebe-se o produto (a cerveja). Substituiu-se o produto pela marca. É uma relação de contiguidade.

**Exercício 3:** Qual a figura de estilo em: *"A morte levou o valoroso agente para o descanso eterno."*
*   **Resolução:** Temos aqui um **Eufemismo** (e também uma personificação).
*   **Raciocínio:** "Descanso eterno" é uma forma suave de dizer que o agente faleceu. O objetivo é tratar um tema doloroso com respeito e menos crueza.

---

## Erros comuns a evitar

1.  **Confundir Metáfora com Comparação:** Se a frase tiver "como", "parece" ou "tal qual", é comparação. Se não tiver, e for uma afirmação direta de identidade figurada, é metáfora.
2.  **Ignorar o Contexto na Ironia:** Muitos candidatos interpretam frases irónicas de forma literal, errando a questão de interpretação de texto. Leiam sempre o parágrafo anterior e o posterior.
3.  **Confundir Antítese com Paradoxo:** A antítese opõe palavras (claro/escuro). O paradoxo opõe ideias que se excluem logicamente numa mesma unidade (ex: "um fogo que arrefece"). O paradoxo é mais profundo e "impossível" na realidade.
4.  **Trocar Metonímia por Metáfora:** Lembrem-se: a metáfora baseia-se na **semelhança**; a metonímia baseia-se na **relação real** (causa/efeito, marca/produto, parte/todo).
5.  **Subestimar a Anáfora:** Em textos de leis, a repetição de termos no início de artigos não é falta de vocabulário, é uma anáfora propositada para garantir a clareza jurídica.

---

## Resumo

1.  **Figuras de Estilo** são recursos que tornam a linguagem mais rica e expressiva, essenciais para a interpretação de textos em concursos.
2.  **Metáfora e Metonímia** são as rainhas das provas; a primeira compara sem o "como", a segunda substitui termos com ligação lógica.
3.  **Eufemismo e Hipérbole** lidam com a intensidade: um suaviza, o outro exagera.
4.  **Ironia** exige atenção redobrada ao contexto e à intenção do autor, sendo comum em crónicas e textos de opinião.
5.  **Antítese e Anáfora** são recursos de estruturação que conferem força e clareza ao discurso institucional e jurídico.

---

## Glossário

*   **Conotativo:** Sentido figurado, subjetivo, que depende do contexto.
*   **Denotativo:** Sentido literal, real, do dicionário.
*   **Semântica:** Estudo do significado das palavras e das mudanças de sentido.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Retórica:** Arte de bem falar, de usar a linguagem para convencer ou influenciar.
*   **Inanimado:** Ser que não tem vida própria (objetos, conceitos abstratos).
*   **Contiguidade:** Relação de proximidade ou dependência entre dois conceitos (base da metonímia).
*   **Coercivo:** Que tem poder de impor pena ou castigo; relativo à força da lei.

Estudem com afinco, candidatos. A farda que pretendem envergar exige um espírito esclarecido e uma mente capaz de decifrar as entrelinhas da realidade angolana. 

**Força e Honra!**
$lesson11$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'redaccao',
  'Redacção oficial e ofícios',
  $lesson12$
# AULA COMPLETA: REDACÇÃO OFICIAL E OFÍCIOS
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção oficial é um instrumento fundamental na administração pública angolana. No contexto do Ministério do Interior, a capacidade de redigir com clareza, precisão e conformidade com as normas estabelecidas é absolutamente essencial. Quer se trate de um ofício dirigido a entidades congéneres, de um memorando interno ou de uma circular de difusão, a qualidade da comunicação escrita reflecte a eficiência e o profissionalismo da instituição. Neste concurso público, espera-se que demonstrem domínio pleno das estruturas e convenções que regem a correspondência administrativa em Angola.

A prova de redacção oficial não avalia apenas a correção gramatical — embora esta seja fundamental — mas também a capacidade de organizar ideias de forma lógica, de adaptar o registo linguístico ao contexto institucional e de cumprir rigorosamente as normas de formatação e protocolo. Compreender a diferença entre um ofício, um memorando e uma circular, bem como dominar as regras de estruturação e as fórmulas de cortesia apropriadas, pode fazer a diferença entre uma classificação excelente e uma classificação medíocre. Portanto, dediquem-se com seriedade a esta matéria.

---

## Conceitos Fundamentais

### 1. **Ofício**

**Definição:** O ofício é um documento oficial de comunicação entre entidades públicas ou entre uma entidade pública e um particular, utilizado para transmitir informações, solicitações, respostas ou decisões de carácter formal e protocolar.

**Exemplo concreto:** Um ofício do MININT dirigido à Polícia Nacional Angolana solicitando informações sobre um processo administrativo, ou um ofício da Direcção Nacional de Migração comunicando uma decisão sobre um pedido de visto.

**Nota prática:** O ofício é o documento mais formal e protocolar. Deve incluir sempre: local e data, número de referência, destinatário, assunto, corpo do texto, fórmula de encerramento e assinatura. Não deve ser nunca demasiado extenso — idealmente, uma página.

---

### 2. **Memorando**

**Definição:** O memorando é um documento de comunicação interna, utilizado para transmitir informações, instruções ou solicitações entre departamentos ou entre superiores e subordinados dentro da mesma instituição.

**Exemplo concreto:** Um memorando do Director do Departamento de Segurança Interna dirigido aos chefes de secção, informando sobre a implementação de um novo procedimento de registo de ocorrências.

**Nota prática:** O memorando é menos formal que o ofício, mas mantém rigor. Pode ser mais conciso e directo. Não requer fórmulas de cortesia tão elaboradas como o ofício. Deve incluir: destinatário, remetente, data, assunto e corpo do texto.

---

### 3. **Circular**

**Definição:** A circular é um documento de difusão interna ou externa, destinado a comunicar informações, normas ou instruções a múltiplos destinatários simultaneamente.

**Exemplo concreto:** Uma circular do MININT dirigida a todas as delegações provinciais, comunicando a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Nota prática:** A circular deve ser clara e objectiva. Começa com uma fórmula de abertura genérica ("Aos Senhores Directores Provinciais") e deve ser numerada e datada. Não é dirigida a um destinatário específico, mas a um conjunto de entidades.

---

### 4. **Exposição de Motivos**

**Definição:** A exposição de motivos é um documento que apresenta, de forma fundamentada e estruturada, as razões, justificações e argumentos que sustentam uma proposta, um pedido ou uma decisão administrativa.

**Exemplo concreto:** Uma exposição de motivos apresentada pelo MININT ao Conselho de Ministros justificando a necessidade de reforço de efectivos nas fronteiras, com dados estatísticos e análise de risco.

**Nota prática:** A exposição de motivos deve ser rigorosa, bem documentada e persuasiva. Segue uma estrutura lógica: introdução, apresentação do problema, análise, propostas e conclusão. Deve citar legislação relevante e dados concretos.

---

### 5. **Registo de Protocolo**

**Definição:** O registo de protocolo é o sistema de numeração e arquivo que garante a rastreabilidade e o controlo de todos os documentos oficiais que entram e saem de uma instituição.

**Exemplo concreto:** Um ofício recebe o número "MININT/DGS/2024/001" que indica: ministério, departamento, ano e número sequencial.

**Nota prática:** Cada instituição tem o seu próprio sistema de protocolo. No MININT, deve familiarizar-se com o formato específico utilizado. Este número deve constar no cabeçalho do documento.

---

### 6. **Fórmulas de Cortesia e Encerramento**

**Definição:** São expressões padronizadas que abrem e fecham documentos oficiais, respeitando protocolos de hierarquia e formalidade.

**Exemplo concreto:** 
- Abertura: "Excelentíssimo Senhor Ministro do Interior"
- Encerramento: "Respeitosamente submetido" ou "Com elevada consideração"

**Nota prática:** A escolha da fórmula depende do destinatário e do grau de formalidade. Para autoridades de topo, use "Excelentíssimo Senhor". Para colegas, "Prezado Colega" é apropriado. O encerramento deve ser sempre respeitoso e formal.

---

## Aprofundamento

### Estrutura Completa do Ofício

Um ofício bem estruturado segue esta ordem:

1. **Cabeçalho institucional:** Logótipo e nome da instituição
2. **Local e data:** "Luanda, 15 de Março de 2024"
3. **Número de referência:** "Ofício nº MININT/DGS/2024/045"
4. **Destinatário:** Nome completo, cargo e instituição
5. **Assunto:** Breve descrição do tema (máximo uma linha)
6. **Saudação:** "Excelentíssimo Senhor" ou equivalente
7. **Corpo do texto:** Dividido em parágrafos lógicos
8. **Encerramento:** Fórmula apropriada
9. **Assinatura:** Nome, cargo e data

### Regras de Redacção Oficial

**Clareza:** Cada frase deve transmitir uma ideia completa. Evite ambiguidades.

**Concisão:** Não use dez palavras quando cinco são suficientes. Elimine redundâncias.

**Objectividade:** Vá directo ao assunto. Não inclua informações desnecessárias.

**Correção gramatical:** Respeite rigorosamente as regras de ortografia, pontuação e concordância.

**Registo formal:** Utilize vocabulário apropriado ao contexto administrativo. Evite gírias, coloquialismos ou expressões muito informais.

**Estrutura lógica:** Organize as ideias de forma sequencial e coerente. Utilize conectores apropriados ("Portanto", "Consequentemente", "Por outro lado").

### Exemplo de Estrutura de Parágrafo Oficial

```
Primeiro parágrafo: Apresentação do assunto e contexto
Parágrafos intermédios: Desenvolvimento, argumentação, detalhes
Último parágrafo: Conclusão, solicitação ou decisão
```

---

## Exemplos Resolvidos

### Exemplo 1: Ofício de Solicitação de Informação

**Situação:** Você trabalha na Direcção de Segurança Interna do MININT e precisa solicitar informações à Polícia Nacional sobre um processo de investigação.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Direcção de Segurança Interna

Luanda, 20 de Março de 2024

Ofício nº MININT/DSI/2024/078

Excelentíssimo Senhor
Comandante-Geral da Polícia Nacional
Luanda

ASSUNTO: Solicitação de informações sobre processo de investigação nº PNA/2024/456

Excelentíssimo Senhor Comandante-Geral,

No âmbito das competências atribuídas a esta Direcção de Segurança Interna, 
solicitamos a Vossa Excelência o envio de informações detalhadas sobre o processo 
de investigação nº PNA/2024/456, relativo ao caso de falsificação de documentos 
de identificação.

Especificamente, requeremos:
a) Relatório técnico da investigação;
b) Listagem de suspeitos identificados;
c) Cronograma das diligências efectuadas;
d) Previsão de conclusão do processo.

Estas informações são necessárias para a elaboração de um parecer técnico que 
será submetido ao Conselho de Ministros, no contexto da avaliação de políticas 
de segurança interna.

Agradecemos antecipadamente a colaboração de Vossa Excelência e ficamos à 
disposição para qualquer esclarecimento adicional.

Respeitosamente submetido,

[Assinatura]
Dr. João Silva
Director de Segurança Interna
```

**Análise:** Este ofício segue rigorosamente a estrutura. Note-se: (1) o cabeçalho institucional; (2) a data e número de referência; (3) a saudação apropriada para uma autoridade de topo; (4) o assunto claro e conciso; (5) o corpo dividido em parágrafos lógicos; (6) o uso de alíneas para maior clareza; (7) a justificação da solicitação; (8) o encerramento formal; (9) a assinatura com identificação completa.

---

### Exemplo 2: Memorando Interno

**Situação:** O Director do Departamento de Recursos Humanos do MININT necessita informar os chefes de secção sobre a implementação de um novo sistema de registo de assiduidade.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Departamento de Recursos Humanos

MEMORANDO

PARA: Chefes de Secção
DE: Dr. António Neves, Director de Recursos Humanos
DATA: 18 de Março de 2024
ASSUNTO: Implementação do novo sistema de registo de assiduidade

---

Informamos que, a partir de 1 de Abril de 2024, entrará em vigor o novo 
sistema de registo de assiduidade (SIRA 2.0) em todas as unidades do MININT.

Este sistema substitui o anterior e apresenta as seguintes melhorias:
• Registo biométrico automático
• Relatórios em tempo real
• Integração com o sistema de folha de pagamento
• Redução de erros administrativos

Solicitamos que:
1. Informem todos os colaboradores da sua secção sobre esta mudança;
2. Participem na sessão de formação (datas a confirmar);
3. Designem um responsável pelo suporte técnico local.

Qualquer dúvida ou sugestão deve ser comunicada a este departamento até 
25 de Março.

Atenciosamente,

[Assinatura]
Dr. António Neves
Director de Recursos Humanos
```

**Análise:** Este memorando é menos formal que o ofício, mas mantém rigor. Note-se: (1) o cabeçalho simplificado; (2) o uso de "PARA/DE/DATA/ASSUNTO" em vez de endereçamento formal; (3) a linguagem mais directa; (4) o uso de alíneas e numeração para clareza; (5) a ausência de fórmulas de cortesia elaboradas; (6) a conclusão com um prazo claro.

---

### Exemplo 3: Circular

**Situação:** O MININT necessita comunicar a todas as delegações provinciais a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Gabinete do Ministro

CIRCULAR Nº MININT/GM/2024/012

Luanda, 22 de Março de 2024

Aos Senhores Directores Provinciais do MININT
Aos Senhores Chefes de Delegação Municipal

ASSUNTO: Entrada em vigor do Regulamento de Procedimentos de Identificação Civil

---

Informamos que, a partir de 1 de Abril de 2024, entra em vigor o novo 
Regulamento de Procedimentos de Identificação Civil, aprovado por Despacho 
Ministerial nº 045/2024, de 15 de Março.

Este regulamento estabelece novos procedimentos para:
• Emissão de cartões de identificação
• Processamento de pedidos de nacionalidade
• Verificação de antecedentes
• Prazos de resposta aos cidadãos

As principais alterações são:
1. Redução do prazo de emissão de 30 para 15 dias úteis
2. Implementação de sistema de agendamento online
3. Reforço dos controlos de segurança
4. Criação de balcão de atendimento prioritário para maiores de 65 anos

Solicitamos que:
• Divulguem este regulamento a todos os colaboradores
• Adaptem os procedimentos locais em conformidade
• Reportem qualquer dificuldade de implementação
• Participem na sessão de esclarecimento (videoconferência, 28 de Março, 14h00)

Cópias do regulamento completo encontram-se em anexo e no portal interno.

Atenciosamente,

[Assinatura]
Eng. José Fernandes
Ministro do Interior
```

**Análise:** Esta circular segue o padrão apropriado: (1) numeração clara; (2) endereçamento genérico a múltiplos destinatários; (3) assunto bem definido; (4) informação estruturada em alíneas; (5) instruções claras; (6) referência a documentação complementar; (7) assinatura de autoridade de topo.

---

## Erros Comuns a Evitar

### 1. **Falta de Clareza no Assunto**
❌ **Errado:** "Assunto: Vários assuntos"
✅ **Correcto:** "Assunto: Solicitação de informações sobre processo de investigação nº PNA/2024/456"

**Explicação:** O assunto deve ser específico e permitir ao leitor compreender imediatamente o conteúdo do documento.

---

### 2. **Uso Incorrecta de Fórmulas de Cortesia**
❌ **Errado:** "Prezado Senhor Ministro" (para um ofício oficial)
✅ **Correcto:** "Excelentíssimo Senhor Ministro"

**Explicação:** A fórmula deve corresponder ao grau de formalidade e à hierarquia do destinatário. Para autoridades de topo, use sempre "Excelentíssimo Senhor".

---

### 3. **Parágrafos Demasiado Longos e Confusos**
❌ **Errado:** Um parágrafo com 10 linhas contendo múltiplas ideias desconexas.
✅ **Correcto:** Parágrafos curtos (3-5 linhas), cada um com uma ideia central clara
$lesson12$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'relatorio',
  'Relatório e acta',
  $lesson13$
# AULA COMPLETA: RELATÓRIO E ACTA
## Módulo de Língua Portuguesa para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção de relatórios e actas constitui uma das competências fundamentais exigidas nos concursos públicos do Ministério do Interior de Angola. Estes documentos não são meros registos burocráticos; são instrumentos legais que documentam decisões, procedimentos e factos ocorridos em contextos administrativos e institucionais. No âmbito do MININT, seja em departamentos de segurança, administração ou gestão de recursos humanos, a capacidade de elaborar estes textos com rigor, clareza e conformidade com as normas estabelecidas é absolutamente essencial.

A importância desta matéria para o vosso concurso reside no facto de que a prova de Língua Portuguesa avalia não apenas a vossa competência gramatical, mas também a vossa capacidade de comunicação profissional e administrativa. Os avaliadores procuram candidatos que dominem a estrutura formal, a linguagem técnica apropriada e as convenções que regem estes documentos. Além disso, durante o exercício das funções no MININT, serão frequentemente chamados a redigir relatórios de actividades, actas de reuniões e minutas de decisões. Por isso, dominar esta competência é investir directamente na vossa carreira profissional.

---

## Conceitos Fundamentais

### 1. **Relatório: Definição e Propósito**

**Definição:** Um relatório é um documento formal que apresenta informações, análises e conclusões sobre um assunto específico, dirigido a uma autoridade ou entidade superior. Tem como objectivo informar, justificar acções, apresentar resultados ou propor soluções.

**Exemplo concreto:** Um inspector do MININT elabora um relatório sobre a fiscalização realizada numa esquadra de polícia em Luanda, descrevendo as irregularidades encontradas, as medidas correctivas necessárias e recomendações para melhorar o funcionamento.

**Nota prática:** O relatório deve ser objectivo, factual e fundamentado em dados concretos. Nunca deve conter opiniões pessoais não justificadas ou linguagem emotiva.

---

### 2. **Acta: Definição e Função**

**Definição:** Uma acta é um documento que regista, de forma resumida mas completa, os assuntos tratados, as decisões tomadas e os acordos estabelecidos durante uma reunião, assembleia ou sessão oficial.

**Exemplo concreto:** Após uma reunião de coordenação entre departamentos do MININT sobre implementação de novos procedimentos de segurança, elabora-se uma acta que regista: data, local, participantes, ordem de trabalhos, deliberações e responsáveis pelas tarefas definidas.

**Nota prática:** A acta é um documento com valor legal. Deve ser precisa, imparcial e registar apenas factos verificados, não interpretações subjectivas.

---

### 3. **Minuta: Definição e Características**

**Definição:** Uma minuta é um documento preliminar, um rascunho ou esboço de um texto oficial (decreto, portaria, resolução) que será posteriormente revisto, aprovado e formalizado. Serve como base para discussão e aperfeiçoamento.

**Exemplo concreto:** O MININT prepara uma minuta de portaria sobre novas normas de funcionamento das esquadras. Esta minuta é distribuída aos departamentos para análise, sugestões e críticas antes da versão final ser assinada pelo Ministro.

**Nota prática:** A minuta não é um documento definitivo. Deve indicar claramente que se trata de um documento em elaboração e estar aberta a sugestões e alterações.

---

### 4. **Linguagem Formal e Registro Administrativo**

**Definição:** É o conjunto de características linguísticas que caracterizam a comunicação oficial e administrativa: vocabulário técnico, estrutura sintáctica complexa, ausência de coloquialismos e respeito pelas normas gramaticais.

**Exemplo concreto:** Em vez de escrever "A polícia foi lá e viu que as coisas não estavam bem", escreve-se: "A inspecção realizada constatou irregularidades no cumprimento dos procedimentos estabelecidos."

**Nota prática:** O registo formal exige concordância rigorosa, uso correcto de tempos verbais (preferencialmente pretérito perfeito para factos passados) e estruturas sintácticas bem definidas.

---

### 5. **Estrutura Formal de um Documento Oficial**

**Definição:** É a organização padronizada dos elementos que compõem um documento administrativo: cabeçalho, identificação, corpo, assinatura e anexos.

**Exemplo concreto:** Um relatório do MININT deve incluir: timbre institucional, número de referência, data, destinatário, assunto, corpo do relatório com introdução/desenvolvimento/conclusão, assinatura e carimbo.

**Nota prática:** A estrutura formal garante que o documento seja reconhecido como oficial e facilita o seu arquivo e consulta posterior.

---

### 6. **Rigor Factual e Verificabilidade**

**Definição:** É a obrigação de que todos os dados, números, datas e factos mencionados sejam exactos, verificáveis e fundamentados em fontes confiáveis.

**Exemplo concreto:** Ao relatar que "foram realizadas 47 inspecções em Março de 2024", este número deve corresponder exactamente aos registos disponíveis. Qualquer discrepância compromete a credibilidade do documento.

**Nota prática:** Sempre que possível, cite fontes, anexe documentos comprovativos e mantenha registos que permitam verificação posterior.

---

## Aprofundamento

### Estrutura Detalhada do Relatório

Um relatório bem estruturado segue este modelo:

**1. Cabeçalho Institucional**
- Timbre do MININT ou departamento responsável
- Número de referência ou protocolo
- Data de elaboração

**2. Identificação**
- Destinatário (a quem se dirige)
- Remetente (quem elabora)
- Assunto (título claro e conciso)

**3. Introdução**
- Contextualização do tema
- Justificação do relatório
- Objectivos específicos
- Período abrangido (se aplicável)

**4. Desenvolvimento**
- Apresentação factual dos dados
- Análise estruturada por tópicos
- Fundamentação com evidências
- Descrição de metodologia (se relevante)

**5. Conclusões**
- Síntese dos achados principais
- Resposta aos objectivos propostos
- Avaliação geral da situação

**6. Recomendações**
- Sugestões de acções correctivas
- Propostas de melhorias
- Responsáveis pelas implementações

**7. Assinatura e Carimbo**
- Nome completo do autor
- Cargo/função
- Data
- Carimbo institucional

### Exemplo de Linguagem Apropriada

**Incorreto (coloquial):**
"Fomos lá e vimos que tudo estava bagunçado. Os rapazes não estavam a fazer bem o trabalho deles."

**Correcto (formal):**
"A inspecção realizada constatou deficiências significativas na organização dos procedimentos administrativos. Verificou-se que o pessoal não cumpria adequadamente os protocolos estabelecidos."

### Regras Gramaticais Essenciais

- **Concordância:** "O relatório e a acta foram elaborados" (não "foi elaborados")
- **Tempos verbais:** Preferencialmente pretérito perfeito para factos passados: "Realizou-se a reunião em 15 de Março"
- **Voz passiva:** Frequente em textos administrativos: "Foi decidido que..." em vez de "Decidimos que..."
- **Pontuação:** Uso correcto de vírgulas em enumerações e períodos complexos

---

## Exemplos Resolvidos

### Exemplo 1: Relatório de Inspecção

**Situação:** Um inspector do MININT realizou uma inspecção numa esquadra de polícia e deve elaborar um relatório.

**Resolução:**

---

**MINISTÉRIO DO INTERIOR**
**DIRECÇÃO NACIONAL DE POLÍCIA**

**RELATÓRIO DE INSPECÇÃO**

**Referência:** DNPOL/2024/0347
**Data:** 18 de Março de 2024
**Destinatário:** Director Nacional de Polícia
**Remetente:** Inspector João da Silva
**Assunto:** Inspecção à Esquadra de Polícia de Viana – Conformidade com Normas de Funcionamento

---

**INTRODUÇÃO**

No cumprimento do plano de inspecções do corrente ano, foi realizada uma visita de avaliação à Esquadra de Polícia de Viana, no período de 11 a 15 de Março de 2024. O objectivo desta inspecção foi verificar o cumprimento das normas estabelecidas no Manual de Procedimentos Administrativos e avaliar as condições de funcionamento da unidade.

**DESENVOLVIMENTO**

1. **Recursos Humanos**
   - Efectivo autorizado: 24 elementos
   - Efectivo presente: 22 elementos
   - Constatou-se que dois elementos se encontravam em licença médica, devidamente documentada
   - O pessoal apresenta-se adequadamente uniformizado e preparado

2. **Infraestruturas**
   - As instalações encontram-se em bom estado de conservação
   - Identificou-se necessidade de reparação da cobertura do pátio traseiro (infiltrações)
   - Os equipamentos informáticos funcionam adequadamente

3. **Documentação e Registos**
   - Os livros de ocorrências estão correctamente preenchidos
   - Verificou-se conformidade com os prazos de arquivo de documentos
   - Detectou-se pequena deficiência no preenchimento de um formulário de denúncia (falta de data)

**CONCLUSÕES**

A Esquadra de Polícia de Viana funciona de forma satisfatória, demonstrando conformidade geral com as normas estabelecidas. O pessoal mostra-se motivado e organizado. As deficiências identificadas são de carácter menor e facilmente corrigíveis.

**RECOMENDAÇÕES**

1. Proceder à reparação da cobertura do pátio traseiro no prazo de 30 dias
2. Reforçar a formação do pessoal sobre preenchimento correcto de formulários
3. Realizar nova inspecção em Setembro de 2024

---

**Assinado:**
Inspector João da Silva
Cédula: 00123456789
Data: 18 de Março de 2024
[Carimbo]

---

### Exemplo 2: Acta de Reunião

**Situação:** Reunião de coordenação entre departamentos do MININT sobre implementação de novo sistema de segurança.

**Resolução:**

---

**ACTA Nº 012/2024**

**MINISTÉRIO DO INTERIOR**
**REUNIÃO DE COORDENAÇÃO INTERDEPARTAMENTAL**

**Data:** 20 de Março de 2024
**Hora de início:** 09h30
**Hora de encerramento:** 11h45
**Local:** Sala de Conferências, Piso 3, Edifício Central

**PARTICIPANTES:**
- Dr. Manuel Ferreira (Director de Segurança) – Presidente
- Eng. Carla Mendes (Departamento de Tecnologia)
- Dr. Paulo Neves (Departamento Jurídico)
- Dra. Amélia Costa (Recursos Humanos)
- Sr. Joaquim Lopes (Segurança Operacional)

**ORDEM DE TRABALHOS:**
1. Apresentação do novo sistema de segurança integrada
2. Cronograma de implementação
3. Responsabilidades departamentais
4. Orçamento e recursos
5. Assuntos diversos

**DELIBERAÇÕES:**

1. **Apresentação do Sistema:** Eng. Carla Mendes apresentou o novo sistema de segurança integrada, com demonstração prática. O sistema foi considerado adequado aos objectivos institucionais.

2. **Cronograma:** Aprovou-se o seguinte cronograma:
   - Fase 1 (Piloto): Abril a Maio de 2024
   - Fase 2 (Expansão): Junho a Agosto de 2024
   - Fase 3 (Consolidação): Setembro a Outubro de 2024

3. **Responsabilidades:**
   - Eng. Carla Mendes: Coordenação técnica geral
   - Dr. Paulo Neves: Conformidade legal e regulatória
   - Dra. Amélia Costa: Formação do pessoal
   - Sr. Joaquim Lopes: Testes operacionais

4. **Orçamento:** Aprovado orçamento de 2.500.000 Kz para a implementação completa.

5. **Próxima Reunião:** Agendada para 10 de Abril de 2024, às 10h00, para avaliação da Fase 1.

**ASSINATURAS:**

Dr. Manuel Ferreira _________________ Data: 20/03/2024
(Presidente)

Eng. Carla Mendes _________________ Data: 20/03/2024

Dr. Paulo Neves _________________ Data: 20/03/2024

Dra. Amélia Costa _________________ Data: 20/03/2024

Sr. Joaquim Lopes _________________ Data: 20/03/2024

---

### Exemplo 3: Minuta de Portaria

**Situação:** Elaboração de minuta de portaria sobre normas de funcionamento de esquadras.

**Resolução:**

---

**MINUTA DE PORTARIA**
**[DOCUMENTO EM ELABORAÇÃO – SUJEITO A REVISÃO]**

**Referência:** MININT/2024/MIN-PORT-0089
**Data de Elaboração:** 18 de Março de 2024
**Departamento Responsável:** Direcção de Administração e Gestão

---

**PORTARIA Nº ___/2024**

**Assunto:** Normas de Funcionamento das Esquadras de Polícia

O Ministro do Interior, considerando:

a) A necessidade de uniformizar procedimentos nas esquadras de polícia em todo o território nacional;
b) A importância de garantir qualidade no atendimento ao público;
c) O cumprimento das obrigações estabelecidas na Lei de Segurança Pública;

**DETERMINA:**

**Artigo 1º – Âmbito de Aplicação**
As presentes normas aplicam-se a todas as esquadras de polícia sob jurisdição do Ministério do Interior.

**Artigo 2º – Horário de Funcionamento**
1. As esquadras funcionarão em regime de 24 horas, com turnos de 8 horas.
2. O atendimento ao público realizar-se-á entre as 07h00 e as 19h00, de segunda a sexta-feira.

**Artigo 3º – Pessoal**
1. Cada esquadra terá um efectivo mínimo de 20 elementos.
2. O pessoal deverá estar adequadamente uniformizado e identificado.

**Artigo 4º – Documentação**
1. Todos os registos deverão ser efectuados em livros próprios ou sistema informático autorizado.
2. Os prazos de arquivo serão os estabelecidos no Manual de Procedimentos.

**Artigo 5º – Disposições Finais**
1. A presente portaria entra em vigor 30 dias após a sua publicação.
2. Revoga todas as disposições anteriores que se lhe oponham.

---
$lesson13$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'policia-nacional',
  'portugues',
  'vocabulario',
  'Vocabulário técnico policial',
  $lesson14$
# AULA: VOCABULÁRIO TÉCNICO POLICIAL
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A preparação para um concurso público no Ministério do Interior exige não apenas conhecimento das leis e regulamentos, mas também o domínio de um vocabulário técnico específico que caracteriza a actividade policial e de segurança interna em Angola. O vocabulário técnico policial não é um simples conjunto de palavras; é, antes, um sistema de comunicação preciso e rigoroso que garante a clareza nas operações, a uniformidade nos relatórios e a compreensão exacta entre os profissionais de segurança. Quando um agente da Polícia Nacional Angolana (PNA) redige um auto de detenção, quando coordena uma operação de patrulhamento ou quando comunica com a hierarquia, utiliza termos que têm significados muito específicos e legalmente vinculativos.

Nesta aula, vamos explorar os termos fundamentais da actividade policial angolana, compreendendo não apenas as suas definições, mas também o seu contexto de utilização e as implicações práticas. Este conhecimento será decisivo na prova escrita do concurso, particularmente nas questões de compreensão de textos oficiais, redacção de relatórios e interpretação de legislação. Além disso, demonstrará ao júri que você compreende a cultura institucional e a linguagem profissional do MININT.

---

## Conceitos Fundamentais

### 1. **Detenção vs. Prisão**

**Definição clara:**
A detenção é o acto de impedir a liberdade de circulação de uma pessoa por um período limitado (até 24 horas, conforme o Código de Processo Penal angolano), enquanto a prisão é uma medida de coação mais grave, decretada por autoridade judicial, que pode ter duração prolongada.

**Exemplo concreto:**
Um polícia detém um indivíduo suspeito de roubo durante uma operação de patrulhamento na Baixa de Luanda. Essa detenção não pode exceder 24 horas. Se, após investigação, existirem indícios suficientes, o Ministério Público pode requerer a prisão preventiva ao tribunal, que pode durar até 90 dias.

**Nota prática:**
Na redacção de relatórios, é fundamental distinguir estes termos. Usar "prisão" quando se refere a "detenção" constitui um erro grave que pode invalidar procedimentos legais.

---

### 2. **Flagrante Delito**

**Definição clara:**
Flagrante delito é a situação em que uma pessoa é apanhada no acto de cometer um crime ou imediatamente após, com evidência clara da sua autoria. É uma circunstância que permite a detenção sem mandado judicial.

**Exemplo concreto:**
Um agente da PNA observa um indivíduo a assaltar uma loja no Sambizanga. O polícia intervém e detém o suspeito no local, com a mercadoria roubada ainda na sua posse. Esta é uma situação de flagrante delito, que justifica a detenção imediata.

**Nota prática:**
O flagrante delito é uma das poucas situações em que a polícia pode actuar sem mandado. Contudo, deve ser documentado com precisão no auto de detenção, incluindo hora, local, testemunhas e descrição exacta do que foi observado.

---

### 3. **Revista e Revista Pessoal**

**Definição clara:**
A revista é o acto de inspecção de bens, veículos ou locais para procura de objectos ilícitos ou provas de crime. A revista pessoal é a inspecção do corpo de uma pessoa, realizada com respeito pela dignidade humana e, preferencialmente, por agente do mesmo sexo.

**Exemplo concreto:**
Durante uma operação de segurança no Kilamba, agentes da PNA efectuam revista de veículos em pontos de controlo. Num desses veículos, encontram armas ilegais. Posteriormente, realizam revista pessoal ao condutor, sendo esta efectuada por um agente do mesmo sexo, respeitando os direitos fundamentais.

**Nota prática:**
A revista deve ser sempre documentada. Qualquer objecto apreendido deve ser registado em auto próprio, com descrição detalhada, assinatura de testemunhas e identificação clara do agente responsável.

---

### 4. **Apreensão e Depósito**

**Definição clara:**
Apreensão é o acto de tomar posse de bens relacionados com a prática de crime ou que constituem instrumentos ou produtos de crime. O depósito é o local seguro onde esses bens são armazenados, sob responsabilidade da polícia.

**Exemplo concreto:**
Numa operação contra tráfico de drogas no Cazenga, agentes apreendem 5 quilogramas de cocaína, uma arma de fogo e 50 mil kwanzas em dinheiro. Estes bens são registados e colocados no depósito da esquadra, sob vigilância, até decisão judicial.

**Nota prática:**
O depósito deve ter registo rigoroso de entrada e saída de bens. Qualquer irregularidade neste processo pode comprometer a validade das provas em tribunal.

---

### 5. **Mandado de Busca e Apreensão**

**Definição clara:**
É uma ordem judicial que autoriza a polícia a entrar num local específico, procurar objectos relacionados com crime e apreendê-los. Deve ser emitido por autoridade judicial competente e conter descrição clara do local e do que se procura.

**Exemplo concreto:**
O Ministério Público obtém um mandado de busca para uma residência em Viana, onde se suspeita de armazenamento de armas ilegais. Os agentes da PNA executam a busca, encontram as armas, procedem à apreensão e elaboram auto circunstanciado.

**Nota prática:**
A execução de um mandado de busca deve ser rigorosa: deve ser apresentado ao proprietário, deve haver testemunhas, e tudo deve ser documentado fotograficamente quando possível. Qualquer desvio do mandado pode invalidar as provas.

---

### 6. **Denúncia e Participação**

**Definição clara:**
Denúncia é a comunicação de um crime feita por qualquer pessoa ao órgão de polícia criminal. Participação é a comunicação de um crime feita pela vítima ou por quem tenha conhecimento directo dos factos.

**Exemplo concreto:**
Um cidadão contacta a esquadra da PNA para denunciar actividades suspeitas num bairro. Uma vítima de roubo apresenta participação formal na polícia, descrevendo o crime e identificando o suspeito.

**Nota prática:**
Ambas devem ser registadas em livro próprio, com data, hora, identificação de quem reporta e descrição clara dos factos. Este registo é fundamental para estatísticas criminais e para rastreabilidade processual.

---

## Aprofundamento

### Contexto Legal e Regulatório

O vocabulário técnico policial em Angola está enquadrado pela **Constituição da República de Angola**, pelo **Código de Processo Penal**, pela **Lei de Organização da Polícia Nacional** e por diversos regulamentos internos do MININT. É essencial que o candidato compreenda que cada termo não é arbitrário, mas resulta de uma construção legal rigorosa.

Quando falamos de "detenção", estamos a referir-nos a um direito fundamental protegido constitucionalmente. O artigo 30 da Constituição garante a liberdade pessoal, e qualquer restrição deve ser proporcional e legal. Por isso, a detenção tem um limite temporal (24 horas) e deve ser comunicada ao Ministério Público. Ultrapassar este prazo sem formalização legal constitui detenção ilegal, com consequências graves para o agente responsável.

### Redacção de Documentos Oficiais

Na prática profissional, o polícia deve redigir autos, relatórios e participações utilizando este vocabulário com precisão. Um auto de detenção deve conter:

- **Identificação clara** do detido (nome completo, data de nascimento, filiação, naturalidade)
- **Circunstâncias da detenção** (hora, local, motivo, se em flagrante ou por mandado)
- **Descrição dos factos** que justificam a detenção
- **Bens apreendidos**, se aplicável, com descrição pormenorizada
- **Assinatura do agente** e de testemunhas
- **Referência ao direito de informação** ao Ministério Público

### Distinções Críticas

É fundamental compreender as seguintes distinções:

| Termo | Duração | Autoridade | Documentação |
|-------|---------|-----------|--------------|
| **Detenção** | Até 24 horas | Polícia | Auto de detenção |
| **Prisão Preventiva** | Até 90 dias | Tribunal | Mandado de prisão |
| **Prisão Preventiva Renovada** | Até 180 dias | Tribunal | Decisão judicial |
| **Prisão Definitiva** | Conforme sentença | Tribunal | Sentença condenatória |

---

## Exemplos Resolvidos

### Exemplo 1: Análise de Situação de Flagrante Delito

**Situação:**
Um agente da PNA, durante patrulhamento nocturno no Rangel, observa um indivíduo a arrombar a porta de uma loja. O agente intervém, detém o suspeito e encontra ferramentas de arrombamento e mercadoria roubada na sua posse.

**Análise passo-a-passo:**

1. **Identificação da situação:** Flagrante delito de roubo/furto qualificado
2. **Justificação da detenção:** O agente presenciou o crime em acto, o que autoriza detenção imediata sem mandado
3. **Documentação necessária:**
   - Auto de detenção (incluindo hora exacta: 23h45, local preciso: Rua X, Rangel)
   - Descrição do suspeito (características físicas, vestuário)
   - Inventário de bens apreendidos (ferramentas, mercadoria, com fotografias se possível)
   - Identificação de testemunhas presentes
4. **Próximos passos:** Comunicação ao Ministério Público dentro de 24 horas, apresentação ao tribunal para decisão sobre prisão preventiva

**Conclusão:** Este é um caso claro de flagrante delito, devidamente documentado, que permite prosseguimento processual válido.

---

### Exemplo 2: Redacção de Relatório de Revista

**Situação:**
Durante operação de segurança no Cazenga, agentes revistam um veículo e encontram uma arma de fogo não registada.

**Redacção correcta:**

> *"Aos 15 de Março de 2024, pelas 14h30, na Avenida Agostinho Neto, Cazenga, durante operação de segurança autorizada, procedemos à revista do veículo de matrícula ABC-1234. Durante a revista, encontrámos, no compartimento de ferramentas, uma arma de fogo tipo pistola, marca Taurus, calibre 9mm, série 123456, sem registo legal. A arma foi apreendida e colocada em depósito. O proprietário do veículo, Sr. João Silva, foi informado dos seus direitos e da apreensão. Testemunhas: Agente Pedro Neves (matrícula 5678) e Agente Maria Gonçalves (matrícula 5679)."*

**Análise:**
- Data e hora precisas ✓
- Local específico ✓
- Descrição detalhada do bem apreendido ✓
- Identificação clara de testemunhas ✓
- Referência a direitos do cidadão ✓

---

### Exemplo 3: Interpretação de Mandado de Busca

**Situação:**
Um candidato recebe um mandado de busca que autoriza procura de "documentos relacionados com fraude" numa residência. O agente encontra documentos, um computador e dinheiro em espécie.

**Análise correcta:**

1. **Documentos:** Podem ser apreendidos (estão explicitamente no mandado)
2. **Computador:** Pode ser apreendido se contiver documentos relacionados com fraude (interpretação razoável)
3. **Dinheiro em espécie:** Só pode ser apreendido se houver indicação clara de que é produto de fraude (não está explícito no mandado)

**Conclusão:** O agente deve apreender documentos e computador, mas registar o dinheiro e solicitar orientação ao Ministério Público sobre apreensão.

**Lição:** Os mandados têm limites específicos. Ultrapassá-los invalida as provas.

---

## Erros Comuns a Evitar

### 1. **Confundir Detenção com Prisão**
**Erro:** "O suspeito foi preso durante 24 horas."
**Correcto:** "O suspeito foi detido durante 24 horas."
**Porquê:** Prisão é medida judicial; detenção é acto policial.

### 2. **Omitir Testemunhas em Autos**
**Erro:** Auto de detenção sem identificação de testemunhas.
**Correcto:** Auto com nomes completos, matrículas e assinaturas de testemunhas.
**Porquê:** Testemunhas garantem validade processual e credibilidade.

### 3. **Usar Linguagem Vaga em Apreensões**
**Erro:** "Foram apreendidos alguns objectos."
**Correcto:** "Foram apreendidos: 1 telemóvel marca Samsung, cor preta; 3 carteiras de couro; 250 mil kwanzas em notas de 5 mil."
**Porquê:** Precisão evita contestações legais e confusões administrativas.

### 4. **Não Distinguir Flagrante de Suspeita**
**Erro:** Deter alguém por "parecer suspeito" sem acto criminoso observado.
**Correcto:** Deter apenas em flagrante delito ou com mandado judicial.
**Porquê:** Detenção sem fundamento é ilegal e viola direitos fundamentais.

### 5. **Exceder Limites de Mandados**
**Erro:** Apreender bens não mencionados num mandado de busca.
**Correcto:** Apreender apenas o que está autorizado; solicitar novo mandado se necessário.
**Porquê:** Excesso invalida provas e compromete processos judiciais.

### 6. **Misturar Conceitos de Revista Pessoal**
**Erro:** Realizar revista pessoal sem respeitar dignidade ou sem agente do mesmo sexo.
**Correcto:** Revista pessoal sempre com agente do mesmo sexo e com máximo respeito.
**Porquê:** Violação de direitos fundamentais e potencial nulidade processual.

---

## Resumo

### 5 Pontos-Chave para Memorizar

1. **Detenção ≠ Prisão:** Detenção é acto policial (até 24h); prisão é medida judicial (duração variável). Esta distinção é fundamental em toda a documentação.

2. **Flagrante Delito é Autorização:** Presenciar crime em acto autoriza detenção imediata sem mandado. Deve ser documentado com precisão (hora, local
$lesson14$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'compreensao',
  'Compreensão e interpretação de texto',
  $lesson15$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). Muitos candidatos cometem o erro crasso de subestimar a Língua Portuguesa, focando-se apenas na preparação física ou no conhecimento específico da lei. No entanto, recordem-se: um oficial do Ministério do Interior (MININT) que não compreende correctamente uma ordem superior ou que redige com ambiguidade um auto de notícia é um perigo para a segurança jurídica e para a ordem pública.

Nesta aula, vamos dissecar a **Compreensão e Interpretação de Texto**. Não se trata apenas de ler; trata-se de descodificar, analisar e concluir com rigor.

---

## Introdução

A prova de Língua Portuguesa para o concurso do MININT exige do candidato uma competência que vai além da alfabetização funcional. No contexto policial, a interpretação de texto é uma ferramenta de trabalho. Diariamente, os efectivos lidam com despachos, decretos-lei, relatórios de ocorrências e directivas operacionais. Um erro de interpretação sobre "quem", "como" ou "quando" pode comprometer a justiça e a liberdade dos cidadãos.

Nesta aula, focaremos na distinção entre o que o texto diz explicitamente (compreensão) e o que ele sugere implicitamente (interpretação). Vamos aprender a identificar a espinha dorsal de um texto informativo e oficial, separando o essencial do acessório, para que, no momento do exame, não sejam traídos pelas "ratoeiras" linguísticas comuns nestes certames.

---

## Conceitos Fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces em cinco conceitos fundamentais:

### 1. Compreensão vs. Interpretação
*   **Definição:** A compreensão (ou intelecção) refere-se à análise objectiva do que está escrito. A interpretação é o que deduzimos a partir do texto, indo além da superfície.
*   **Exemplo:** Se um comunicado diz: "A criminalidade em Luanda reduziu 10% após o reforço do patrulhamento", a **compreensão** é que houve uma queda estatística. A **interpretação** sugere que a estratégia de patrulhamento foi eficaz.
*   **Nota Prática:** Nas perguntas de compreensão, as respostas começam com "Segundo o texto...", "O autor afirma que...". Na interpretação, começam com "Infere-se que...", "Conclui-se do texto que...".

### 2. Ideia Principal e Ideias Secundárias
*   **Definição:** A ideia principal é o núcleo informativo do parágrafo ou texto. As secundárias são exemplos, justificações ou detalhes que orbitam o núcleo.
*   **Exemplo:** Num texto sobre a Lei de Segurança Nacional, a ideia principal pode ser a protecção do Estado, enquanto as secundárias detalham as penas para crimes de traição.
*   **Nota Prática:** Se retirar a ideia principal, o texto perde o sentido. Se retirar as secundárias, o texto fica apenas mais curto.

### 3. Inferência (ou Dedução)
*   **Definição:** É o processo de chegar a uma conclusão lógica com base em pistas deixadas pelo autor.
*   **Exemplo:** "O agente chegou à esquadra com a farda molhada e o guarda-chuva fechado na mão." **Infere-se** que estava a chover lá fora.
*   **Nota Prática:** A inferência deve ser sempre baseada em factos do texto, nunca em opiniões pessoais do candidato.

### 4. Denotação e Conotação
*   **Definição:** Denotação é o uso da palavra no sentido literal (dicionário). Conotação é o sentido figurado, dependente do contexto.
*   **Exemplo:** "A Polícia é o braço direito da justiça" (Conotação - apoio/ferramenta). "O agente feriu o braço direito" (Denotação - anatomia).
*   **Nota Prática:** Textos oficiais do MININT privilegiam quase exclusivamente a linguagem denotativa para evitar ambiguidades.

### 5. Tipologia Textual: O Texto Informativo/Oficial
*   **Definição:** Textos que visam transmitir dados, normas ou factos de forma impessoal e clara.
*   **Exemplo:** Um Decreto Presidencial ou uma Ordem de Serviço do Comandante Geral.
*   **Nota Prática:** Nestes textos, a objectividade é a regra. O autor não usa "eu acho" ou "talvez".

---

## Aprofundamento

No contexto de um concurso público em Angola, a banca examinadora costuma utilizar textos extraídos do *Jornal de Angola* ou do *Diário da República*. É imperativo que o candidato domine a **Estrutura do Texto Oficial**.

### Estratégias de Leitura Crítica
1.  **Skimming (Leitura Superficial):** Leiam o texto rapidamente para identificar o tema geral. Quem escreveu? Para quem? Sobre o quê?
2.  **Scanning (Leitura Selectiva):** Procurem palavras-chave (datas, nomes de instituições, verbos de ordem como "determina", "proíbe").
3.  **Análise de Conectores:** As conjunções são as dobradiças do texto.
    *   **Adversativas (mas, porém, contudo):** Indicam uma mudança de direcção no argumento.
    *   **Conclusivas (logo, portanto, por conseguinte):** Introduzem a ideia final que a banca adora perguntar.

### A Natureza do Texto no MININT
Os textos de natureza oficial seguem o princípio da **concisão** e **clareza**. No entanto, a complexidade reside no vocabulário técnico-jurídico. Ao interpretar um texto sobre a "Lei Orgânica da Polícia Nacional", o candidato deve estar atento à hierarquia das normas. Se o texto diz que uma norma "revoga" outra, ele deve compreender que a anterior deixou de existir.

**Regra de Ouro:** Nunca tragam conhecimentos externos para dentro da interpretação. Se o texto diz que "o sol é azul", para efeitos daquela questão, o sol é azul. O erro mais comum em Angola é o candidato querer responder com base no que ouviu na "Rádio Despertar" ou na "TPA", esquecendo o que está escrito no papel à sua frente.

---

## Exemplos Resolvidos

### Exemplo 1: Compreensão de Texto Normativo
**Texto:** *"O uso da força por parte dos efectivos da Polícia Nacional deve ser estritamente proporcional à resistência oferecida, visando sempre a neutralização da ameaça e a preservação da vida."*

**Pergunta:** De acordo com o texto, quando deve a polícia usar a força?
A) Sempre que houver um crime.
B) De forma superior à força do criminoso para garantir a vitória.
C) Em resposta proporcional à resistência encontrada.

**Resolução:**
*   **Raciocínio:** O texto utiliza a expressão "estritamente proporcional".
*   **Resposta Correcta:** **C**. As opções A e B extrapolam ou contrariam o texto.

### Exemplo 2: Inferência em Texto Informativo
**Texto:** *"O Ministério do Interior anunciou a abertura de 5.000 novas vagas para a carreira policial. Este aumento do efectivo visa dar resposta ao crescimento demográfico nas novas centralidades de Luanda."*

**Pergunta:** Infere-se do texto que:
A) Luanda tem falta de polícias devido ao aumento da população.
B) O concurso é apenas para residentes nas centralidades.
C) A criminalidade aumentou nas centralidades.

**Resolução:**
*   **Raciocínio:** O texto diz que as vagas visam "dar resposta ao crescimento demográfico". Se é preciso mais polícia porque há mais gente, infere-se que o rácio actual é insuficiente.
*   **Resposta Correcta:** **A**. A opção B é uma restrição que o texto não faz. A opção C é uma suposição (pode haver mais gente sem haver mais crime, embora seja provável, o texto não afirma).

### Exemplo 3: Identificação de Ideia Principal
**Texto:** *"A formação contínua dos agentes é o pilar fundamental da modernização da PNA. Sem instrução técnica e ética, os investimentos em viaturas e armamento tornam-se ineficazes, pois o capital humano é que operacionaliza a segurança."*

**Pergunta:** Qual é a ideia central do fragmento?
A) A compra de viaturas e armamento para a polícia.
B) A primazia da formação humana sobre o investimento material.
C) A necessidade de novos quartéis em Angola.

**Resolução:**
*   **Raciocínio:** O autor compara o investimento material com a formação e conclui que a formação é o "pilar fundamental".
*   **Resposta Correcta:** **B**.

---

## Erros Comuns a Evitar

1.  **Extrapolação:** É o erro de "viajar" além do texto. O candidato acrescenta informações que ele conhece, mas que não estão lá.
2.  **Redução:** É focar-se apenas num detalhe ou exemplo e esquecer o objectivo geral do texto.
3.  **Contradição:** Ler mal uma palavra de negação (não, nunca, jamais, excepto) e marcar a opção oposta à verdade.
4.  **Subjectividade:** Deixar que o sentimento pessoal sobre a polícia ou o governo influencie a análise técnica do texto.
5.  **Ignorar o Título:** Muitas vezes, o título antecipa a ideia principal e ajuda a situar o contexto.

---

## Resumo para Memorização

1.  **Compreender** é ler o que está escrito; **Interpretar** é ler o que está nas entrelinhas.
2.  A **Ideia Principal** é o coração do texto; sem ela, o texto morre.
3.  Em concursos do MININT, a linguagem é **Denotativa** (literal e clara).
4.  As **Conjunções** (mas, portanto, porque) definem a lógica do argumento.
5.  **Atenção aos Comandos:** "Segundo o autor" (está no texto) vs "Depreende-se" (está fora, mas é lógico).

---

## Glossário

1.  **Ambuidade:** Falta de clareza; quando uma frase permite dois ou mais sentidos.
2.  **Coesão:** Ligação gramatical entre as frases e parágrafos (uso de pronomes e conectores).
3.  **Coerência:** Lógica interna do texto; ausência de contradições.
4.  **Intelecção:** O mesmo que compreensão; acto de entender o sentido exacto das palavras.
5.  **Infere-se:** Conclui-se, deduz-se através da lógica.
6.  **Lexicologia:** Estudo do conjunto de palavras (vocabulário) de uma língua ou contexto.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
8.  **Texto Injuntivo:** Texto que dá ordens ou instruções (comum em manuais e leis).

Estudem com afinco, candidatos. A farda exige inteligência e disciplina. Até à próxima aula!
$lesson15$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'tipos-texto',
  'Tipos e géneros textuais',
  $lesson16$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão no Ministério do Interior (MININT). Não se enganem: um oficial de polícia não maneja apenas o armamento ou a técnica de patrulhamento; a sua principal ferramenta de trabalho, no dia-a-dia administrativo e jurídico, é a **Língua Portuguesa**.

## Introdução

A prova de admissão para a Polícia Nacional exige do candidato não apenas o conhecimento das leis, mas a capacidade de interpretar e produzir textos com clareza, rigor e objectividade. No exercício das vossas funções, serão chamados a redigir Autos de Notícia, Relatórios de Ocorrência e participações que servirão de base para processos judiciais. Se um agente não souber distinguir um relato de factos (narração) de uma descrição de um suspeito (descrição), a eficácia da justiça angolana pode ficar comprometida por falhas de comunicação.

Nesta aula, vamos dissecar a tipologia textual e os géneros textuais. Compreender a estrutura de um texto é o que vos permitirá ler uma Ordem de Serviço do Comando Geral e executá-la sem hesitações, ou interpretar correctamente uma questão de interpretação de texto na vossa prova de concurso. O rigor que exijo nesta aula é o mesmo rigor que a farda que pretendem envergar exige de cada cidadão que serve a Pátria.

---

## Conceitos fundamentais

Para dominarmos a língua, precisamos de organizar os textos em categorias. Vamos focar-nos nos cinco tipos principais que surgem invariavelmente nos exames do MININT.

### 1. Texto Narrativo
**Definição:** É o texto que relata uma sequência de acontecimentos, reais ou imaginários, vividos por personagens num determinado tempo e espaço. Predominam os verbos de acção no pretérito (passado).
- **Exemplo concreto:** Um **Auto de Notícia** relatando uma detenção em flagrante delito no mercado do Trinta, em Luanda, detalhando quem fez o quê e em que ordem.
- **Nota prática:** A narração responde à pergunta: *"O que aconteceu?"*

### 2. Texto Descritivo
**Definição:** É o texto que "pinta" uma imagem com palavras. Detalha características de objectos, pessoas, lugares ou situações. Há uma forte presença de adjectivos e verbos de estado.
- **Exemplo concreto:** A caracterização de um indivíduo procurado: "Indivíduo de estatura média, tez escura, com uma cicatriz no braço direito, trajando t-shirt branca e calças jeans azuis."
- **Nota prática:** A descrição responde à pergunta: *"Como é?"*

### 3. Texto Expositivo
**Definição:** Tem como objectivo principal informar, explicar ou apresentar um conceito de forma objectiva e neutra, sem tentar convencer o leitor ou narrar uma história.
- **Exemplo concreto:** Um artigo no **Diário da República** explicando as novas competências da Polícia de Guarda Fronteiras.
- **Nota prática:** A exposição responde à pergunta: *"O que é isto/Como funciona?"*

### 4. Texto Argumentativo
**Definição:** É o texto em que o autor defende um ponto de vista (tese) através de argumentos lógicos, com o objectivo de persuadir ou convencer o interlocutor.
- **Exemplo concreto:** Um parecer jurídico de um comissário justificando a necessidade de reforço do policiamento de proximidade num determinado bairro para reduzir a criminalidade.
- **Nota prática:** A argumentação responde à pergunta: *"Por que razão defendo esta ideia?"*

### 5. Texto Instrucional e Injuntivo
**Definição:** Ambos orientam o comportamento do receptor. O **instrucional** fornece instruções (como um manual), enquanto o **injuntivo** impõe ordens ou normas com carácter coercivo.
- **Exemplo concreto:** O **Código de Estrada** (injuntivo) ou o manual de manutenção de uma viatura patrulha (instrucional).
- **Nota prática:** Estes textos utilizam frequentemente o modo imperativo ("Faça", "Pare", "Cumpra").

---

## Aprofundamento

Meus caros, para o concurso, não basta saber as definições; é preciso compreender a estrutura técnica.

### A Estrutura do Texto Narrativo na Função Policial
Na narração policial, o rigor cronológico é vital. Utilizamos o **Pretérito Perfeito do Indicativo** para acções concluídas ("O suspeito *disparou*") e o **Pretérito Imperfeito** para acções contínuas ou circunstanciais ("Enquanto a patrulha *circulava*..."). Num exame, se virem uma sucessão de verbos de acção, marquem "Narrativo".

### A Objectividade no Texto Expositivo-Argumentativo
Muitas vezes, os textos oficiais do MININT são híbridos. Um relatório pode começar por ser **expositivo** (apresentando dados estatísticos sobre crimes em Benguela) e terminar de forma **argumentativa** (propondo soluções baseadas nesses dados). A gramática aqui exige o uso de conectores lógicos (conjunções): *"portanto", "todavia", "visto que", "por conseguinte"*. O domínio destes conectores é o que separa um candidato aprovado de um reprovado.

### Texto Injuntivo: A Linguagem da Autoridade
A Polícia Nacional rege-se pela hierarquia e disciplina. Por isso, o texto injuntivo é a base das **Ordens de Serviço**. A característica gramatical principal é o uso do **Imperativo** ou do **Infinitivo com valor de imperativo**. Exemplo: "Circular com as luzes de emergência ligadas" ou "Apresente-se imediatamente ao Comando". Em provas, textos que indicam normas, leis ou manuais de conduta são classificados como injuntivos.

---

## Exemplos resolvidos

### Exemplo 1: Identificação de Tipologia
**Texto:** *"O agente aproximou-se da viatura, solicitou a documentação ao condutor e, após verificar a irregularidade, efectuou a autuação conforme a lei vigente."*
- **Pergunta:** Qual a tipologia predominante?
- **Raciocínio:** Observamos uma sequência de acções no passado (aproximou-se, solicitou, verificou, efectuou). Há uma progressão temporal.
- **Resposta:** Texto Narrativo.

### Exemplo 2: Análise de Texto Oficial
**Texto:** *"Considerando o aumento do fluxo migratório na fronteira do Luvo, torna-se imperativo o reforço do efectivo. A segurança nacional depende da nossa capacidade de resposta imediata nestes pontos críticos."*
- **Pergunta:** Qual a intenção comunicativa deste fragmento?
- **Raciocínio:** O autor apresenta um facto (aumento do fluxo) e utiliza-o para defender uma necessidade (reforço do efectivo), tentando convencer da importância da acção.
- **Resposta:** Texto Argumentativo.

### Exemplo 3: Distinção entre Descritivo e Expositivo
**Texto A:** *"A nova farda da Polícia Nacional é composta por um tecido resistente, de cor azul-escuro, com o emblema bordado no braço esquerdo."*
**Texto B:** *"A Polícia Nacional de Angola é uma instituição paramilitar, organizada hierarquicamente, que visa garantir a ordem e a tranquilidade públicas."*
- **Análise:** O Texto A foca em características físicas e sensoriais (cor, posição, material), logo é **Descritivo**. O Texto B define o que é a instituição, a sua natureza e missão, logo é **Expositivo**.

---

## Erros comuns a evitar

1.  **Confundir Narrativo com Descritivo:** Lembrem-se: a narração tem movimento (acção); a descrição é uma "fotografia" parada (características).
2.  **Achar que todo o texto oficial é Injuntivo:** Nem todo o documento da polícia é uma ordem. Um relatório de actividades anual é **Expositivo**, não injuntivo.
3.  **Ignorar os Conectores:** Em textos argumentativos, os candidatos costumam errar a interpretação por não saberem se "contudo" indica oposição ou conclusão. Estudem as conjunções!
4.  **Subestimar o Contexto:** No concurso do MININT, as questões usam frequentemente extractos da Constituição da República de Angola (CRA). Leiam a CRA para se familiarizarem com o tom expositivo-injuntivo da lei.

---

## Resumo para memorização

1.  **Narrativo:** Foca na acção e no tempo (Ex: Relato de crime).
2.  **Descritivo:** Foca nos detalhes e adjectivos (Ex: Retrato falado).
3.  **Expositivo:** Foca na informação neutra e conceitos (Ex: Definição de lei).
4.  **Argumentativo:** Foca na defesa de opinião e persuasão (Ex: Justificação de estratégia).
5.  **Injuntivo:** Foca na ordem e na norma (Ex: Regulamento Disciplinar da PN).

---

## Glossário

1.  **Coerência:** Relação lógica entre as ideias de um texto.
2.  **Coesão:** Ligação gramatical entre as palavras e frases (uso de conectores).
3.  **Coercivo:** Que tem poder de obrigar ou reprimir (comum em textos injuntivos legais).
4.  **Género Textual:** A forma social do texto (Ex: Ofício, Circular, Relatório).
5.  **Tipologia Textual:** A estrutura interna do texto (Ex: Narração, Descrição).
6.  **Pretérito Perfeito:** Tempo verbal que indica uma acção totalmente concluída no passado.
7.  **Imperativo:** Modo verbal que exprime ordem, pedido ou conselho.
8.  **Tez:** Cor ou aspecto da pele do rosto (termo comum em descrições policiais).

Estudem com afinco, aspirantes. A farda não aceita a ignorância. A vossa capacidade de compreender estes textos será a vossa primeira vitória no concurso. Força e disciplina!
$lesson16$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'coesao',
  'Coesão e coerência textual',
  $lesson17$
Bom dia, caros candidatos. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a uma unidade fundamental para quem aspira envergar a farda da **Polícia Nacional de Angola (PN)** ou integrar qualquer órgão do **Ministério do Interior (MININT)**. Não estamos aqui apenas para aprender a "escrever bonito"; estamos aqui para aprender a escrever com precisão, lógica e autoridade.

## Introdução

A coesão e a coerência textual não são meros adornos gramaticais; são ferramentas de trabalho essenciais para o oficial de polícia. Imaginem um Auto de Notícia ou um Relatório de Ocorrência onde as ideias se atropelam, onde os factos são contraditórios ou onde o uso incorrecto de um conector altera o sentido de um depoimento. Um erro desta natureza pode comprometer uma investigação, invalidar um processo judicial e, em última instância, prejudicar a administração da justiça na nossa República.

Para o concurso público do MININT, o júri de exame procura candidatos que demonstrem domínio da norma culta da língua portuguesa (norma angolana). A prova de Língua Portuguesa avalia a vossa capacidade de organizar o pensamento de forma lógica e estruturada. Nesta aula, vamos dissecar os mecanismos que transformam um amontoado de frases num **texto** — uma unidade de sentido coerente e coesa.

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces sobre cinco conceitos fundamentais:

1.  **Coesão Textual:** É a ligação física, gramatical e lexical entre os elementos do texto (palavras, frases, parágrafos). Se o texto fosse uma parede, a coesão seria o cimento que une os tijolos.
    *   *Exemplo:* "O agente deu ordem de paragem. **Este** agiu conforme o regulamento." (O pronome "este" liga a segunda frase à primeira).
    *   *Nota prática:* Sem coesão, o texto parece uma lista de compras, sem fluidez.

2.  **Coerência Textual:** Refere-se à harmonia de sentido do texto. É a relação lógica entre as ideias, garantindo que não haja contradições e que a mensagem seja compreensível.
    *   *Exemplo:* Seria incoerente escrever: "O suspeito estava desarmado, por isso disparou contra a patrulha." (Se estava desarmado, não poderia disparar).
    *   *Nota prática:* A coerência depende do conhecimento de mundo e do contexto logístico da acção policial.

3.  **Conectores (ou Articuladores):** São palavras ou expressões (conjunções, advérbios, locuções) que estabelecem relações de sentido entre as orações (causa, oposição, conclusão, etc.).
    *   *Exemplo:* "Houve uma infracção, **contudo** o condutor recusou-se a pagar a multa."
    *   *Nota prática:* O uso errado de um conector (como usar "portanto" em vez de "entretanto") destrói a lógica do argumento.

4.  **Anáfora e Catáfora:** São mecanismos de referência. A anáfora retoma algo já dito; a catáfora antecipa algo que será dito.
    *   *Exemplo (Anáfora):* "A esquadra foi reabilitada. **Ela** agora tem melhores condições."
    *   *Nota prática:* Evitam a repetição excessiva de substantivos, tornando a leitura menos cansativa.

5.  **Progressão Temática:** É a forma como o texto avança, acrescentando informações novas a informações já conhecidas, sem fugir do tema central.
    *   *Exemplo:* Começar por descrever o local do crime, depois as provas encontradas e, finalmente, os suspeitos identificados.
    *   *Nota prática:* Um texto sem progressão é redundante; "anda em círculos".

## Aprofundamento

### 1. Mecanismos de Coesão Gramatical

A coesão gramatical utiliza os recursos do sistema da língua. No contexto do MININT, a precisão é vital:

*   **Referenciação:** O uso de pronomes pessoais, possessivos e demonstrativos. Em Angola, é comum o uso do pronome "o mesmo" para retomar um sujeito, mas cuidado: o uso excessivo é considerado vício de linguagem. Prefira sinónimos ou a omissão do sujeito quando o contexto permitir.
*   **Coesão Frásica:** Refere-se à concordância e à ordem das palavras. "Os efectivos da PN **estão** prontos" (concordância verbal correcta).
*   **Coesão Interfrásica:** É aqui que entram os conectores. Devem memorizar as tabelas de conjunções:
    *   *Adversativas (Oposição):* mas, porém, todavia, contudo, no entanto.
    *   *Conclusivas:* logo, portanto, por conseguinte, assim.
    *   *Causais:* porque, visto que, dado que, pois.

### 2. Mecanismos de Coesão Lexical

Ocorre através da escolha das palavras (vocabulário):

*   **Sinonímia:** Substituir uma palavra por outra de sentido semelhante para evitar a repetição. Em vez de repetir "crime" cinco vezes, use "delito", "infracção", "acto ilícito", "ocorrência".
*   **Hiperonímia e Hiponímia:** Relação do geral para o particular. "Viatura" é o hiperónimo de "patrulha", "jipe" ou "motocicleta".
*   **Reiteração:** Às vezes, a repetição de uma palavra-chave é necessária para dar ênfase ou garantir que não haja dúvida sobre quem se fala (muito comum em textos jurídicos e policiais).

### 3. Coerência e Progressão Temática

Um texto coerente deve respeitar três princípios:
1.  **Não-contradição:** Não afirmar A e depois dizer o contrário de A.
2.  **Não-tautologia:** Não ser repetitivo ao ponto de não acrescentar informação nova (o famoso "subir para cima").
3.  **Relevância:** As informações devem ser pertinentes ao tema. Num relatório sobre um assalto na Ilha do Cabo, não é relevante descrever a cor das flores do jardim vizinho, a menos que isso tenha influência no crime.

## Exemplos resolvidos

**Exercício 1: Identificação de Conectores**
*Enunciado:* "O Comandante Provincial deu as ordens necessárias, __________ os oficiais não as cumpriram de imediato, __________ houve um erro de comunicação." Preencha as lacunas com os conectores adequados.

*   **Resolução:**
    1.  A primeira relação é de oposição (as ordens foram dadas, mas não cumpridas). Conectores possíveis: *mas, contudo, todavia*.
    2.  A segunda relação é de causa (o motivo de não terem cumprido foi o erro). Conectores possíveis: *porque, visto que, pois*.
    *   *Resposta final:* "O Comandante Provincial deu as ordens necessárias, **contudo** os oficiais não as cumpriram de imediato, **visto que** houve um erro de comunicação."

**Exercício 2: Coesão por Referenciação**
*Enunciado:* Substitua as repetições no texto seguinte: "O suspeito foi detido no Sambizanga. O suspeito levava consigo uma arma. A arma não tinha licença."

*   **Resolução:**
    1.  Podemos substituir o segundo "O suspeito" pelo pronome "Ele" ou por um sinónimo como "O indivíduo".
    2.  Podemos substituir "A arma" pelo pronome relativo "que" ou por "esta".
    *   *Resposta final:* "O suspeito foi detido no Sambizanga. **Ele** levava consigo uma arma **que** não tinha licença." (Ou: "...uma arma, a qual não possuía licença.")

**Exercício 3: Análise de Coerência**
*Enunciado:* Analise a coerência da frase: "Devido à forte chuva que assolou Luanda, os bombeiros foram chamados para apagar um incêndio florestal de grandes proporções."

*   **Resolução:**
    *   A frase é **incoerente**.
    *   *Raciocínio:* Se houve uma "forte chuva", é logicamente improvável (quase impossível) que ocorra um "incêndio florestal de grandes proporções" ao mesmo tempo, pois a humidade impede a propagação do fogo desta natureza. Há uma contradição pragmática entre a causa (chuva) e o efeito (incêndio florestal).

## Erros comuns a evitar

1.  **Queísmo:** O uso excessivo da palavra "que". Exemplo: "O agente que disse que o carro que foi roubado..." Corrija usando particípios ou pronomes: "O agente, ao afirmar que o carro roubado..."
2.  **Ambiguidade (Anfibologia):** Frases com duplo sentido. Exemplo: "O polícia prendeu o ladrão em sua casa." (Na casa de quem? Do polícia ou do ladrão?). Seja específico: "O polícia prendeu o ladrão na residência deste último."
3.  **Uso indevido de "onde":** Lembre-se, "onde" só deve ser usado para **lugares físicos**. Nunca diga: "A situação onde o crime ocorreu". Diga: "A situação **em que** o crime ocorreu".
4.  **Falta de concordância por distanciamento:** Quando o sujeito está longe do verbo, o candidato tende a errar. "A lista dos candidatos aprovados no concurso do MININT para as províncias do sul **saíram** ontem." (Errado! O que saiu foi a **lista**. O correcto é: "...**saiu** ontem").
5.  **Conectores contraditórios:** Usar "embora" (concessivo) quando se quer dar uma ideia de causa.

## Resumo

1.  **Coesão** é a ligação gramatical; **Coerência** é a ligação lógica de sentido.
2.  Os **conectores** são a chave para a pontuação e para a clareza do raciocínio jurídico-policial.
3.  Evite a **repetição** desnecessária usando sinónimos e pronomes (anáfora).
4.  A **progressão temática** garante que o texto apresente factos novos de forma ordenada.
5.  No contexto do **MININT**, a clareza e a objectividade valem mais do que palavras difíceis usadas fora de contexto.

## Glossário

*   **Anáfora:** Retoma de um termo mencionado anteriormente no texto.
*   **Catáfora:** Referência a um termo que ainda será apresentado.
*   **Conector:** Palavra que estabelece nexo entre orações (conjunção).
*   **Elipse:** Omissão de um termo que se subentende facilmente (ex: "Fomos à esquadra" - omissão de "Nós").
*   **Hiperónimo:** Palavra de sentido genérico (ex: Animal).
*   **Hipónimo:** Palavra de sentido específico (ex: Cão).
*   **Semântica:** Estudo do sentido das palavras e das frases.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.

Estudem com afinco, candidatos. A pátria espera de vós não apenas coragem física, mas também clareza intelectual. A aula terminou. Podem sair de forma ordenada.
$lesson17$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'classes-palavras',
  'Classes de palavras',
  $lesson18$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de escrita.

A vossa presença aqui hoje demonstra um compromisso com o serviço à Pátria. No entanto, para envergar a farda do Ministério do Interior (MININT), não basta o vigor físico; é imperativo o domínio da norma culta da nossa língua oficial. Um agente que não sabe redigir um auto de notícia ou que interpreta mal uma ordem superior por desconhecimento gramatical é um agente limitado. Hoje, daremos início ao estudo sistemático da Morfologia, focando-nos nas **Classes de Palavras**.

---

## Introdução

O estudo das classes de palavras, ou Morfologia, é o alicerce de qualquer comunicação eficaz. No contexto da Polícia Nacional, a precisão terminológica e a correcta estruturação das frases são fundamentais. Imaginem a redacção de um relatório de ocorrência: a troca de um adjectivo por um advérbio, ou o uso incorrecto de uma preposição, pode alterar completamente a descrição de um crime, prejudicando o processo judicial e a justiça.

Para o concurso público do MININT, este tema é recorrente e eliminatório. O examinador não quer apenas saber se o candidato sabe ler; ele quer aferir se o candidato compreende a natureza das palavras e como elas se articulam para formar o pensamento lógico-jurídico necessário à actividade policial. Dominar as dez classes de palavras é o primeiro passo para garantir a vossa vaga e, futuramente, a vossa progressão na carreira.

---

## Conceitos fundamentais

Para compreendermos a estrutura da nossa língua, dividimos as palavras em dez grupos distintos, de acordo com a sua função e forma.

1.  **Substantivo:** É a classe que nomeia os seres, objectos, lugares e sentimentos. É o núcleo das orações.
    *   *Exemplo:* O **agente** patrulha a **Ilha de Luanda**.
    *   *Nota prática:* No Direito e na Actividade Policial, o substantivo deve ser preciso (ex: "detido" em vez de "pessoa").

2.  **Verbo:** Indica acção, estado, ocorrência ou fenómeno da natureza. É a classe mais variável.
    *   *Exemplo:* O Comandante **ordenou** a formatura.
    *   *Nota prática:* Atenção à conjugação no modo imperativo, essencial para a transmissão de ordens.

3.  **Adjectivo:** Atribui uma característica, qualidade ou estado ao substantivo.
    *   *Exemplo:* A intervenção foi **oportuna** e **eficaz**.
    *   *Nota prática:* O adjectivo deve concordar em género e número com o substantivo a que se refere.

4.  **Pronome:** Palavra que substitui ou acompanha o substantivo, indicando a sua posição em relação às pessoas do discurso.
    *   *Exemplo:* **Nós** garantimos a ordem; **este** é o nosso dever.
    *   *Nota prática:* O uso correcto dos pronomes de tratamento (Vossa Excelência, Senhor Comissário) é obrigatório na hierarquia policial.

5.  **Advérbio:** Palavra invariável que modifica o sentido de um verbo, de um adjectivo ou de outro advérbio, indicando circunstâncias (tempo, lugar, modo, etc.).
    *   *Exemplo:* A patrulha chegou **cedo** ao local.
    *   *Nota prática:* Advérbios de modo terminados em "-mente" são frequentes em relatórios técnicos.

6.  **Conjunção:** Serve para ligar orações ou termos semelhantes, estabelecendo relações de coordenação ou subordinação.
    *   *Exemplo:* O suspeito fugiu, **mas** foi capturado logo adiante.
    *   *Nota prática:* Conjunções adversativas (mas, porém, contudo) são vitais para descrever factos contraditórios em inquéritos.

---

## Aprofundamento

As dez classes dividem-se em dois grandes grupos: as **Variáveis** (que mudam de forma para indicar género, número ou tempo) e as **Invariáveis** (que mantêm sempre a mesma forma).

### 1. Classes Variáveis

*   **Substantivo:** Podem ser próprios (Angola, PN) ou comuns (viatura, arma). No concurso, fiquem atentos aos substantivos colectivos (ex: *elenco* de leis, *corpo* de polícia).
*   **Artigo:** Define (o, a, os, as) ou indefine (um, uma, uns, umas) o substantivo. O uso do artigo definido antes de cargos é comum: "O Senhor Comissário".
*   **Adjectivo:** Cuidado com a posição do adjectivo. "Um grande oficial" (valorativo/importância) é diferente de "um oficial grande" (descritivo/estatura).
*   **Numeral:** Indica quantidade (cardinal: um, dois), ordem (ordinal: primeiro, segundo), multiplicação ou divisão. Em documentos oficiais, escreve-se o numeral por extenso e entre parênteses o algarismo: "Vinte e dois (22) detidos".
*   **Pronome:** É uma das áreas mais complexas. Devem dominar os pronomes pessoais (eu, tu, ele...), possessivos (meu, teu, nosso...), demonstrativos (este, esse, aquele...) e relativos (que, o qual, cujo...). A colocação pronominal (ênclise, próclise e mesóclise) é tema certo na prova.
*   **Verbo:** É o motor da frase. Devem dominar a concordância verbal. Se o sujeito é composto ("O agente e o inspector"), o verbo vai para o plural ("chegaram").

### 2. Classes Invariáveis

*   **Advérbio:** Não varia em género ou número. Nunca digam "elas estavam meias cansadas"; o correcto é "elas estavam **meio** cansadas" (advérbio de intensidade).
*   **Preposição:** Liga palavras estabelecendo dependência (de, em, para, com, por). Exemplo: "Mandado **de** captura". A omissão ou troca da preposição altera a regência verbal.
*   **Conjunção:** Dividem-se em coordenativas (ligam orações independentes) e subordinativas (ligam orações dependentes). As conjunções integrantes "que" e "se" introduzem orações substantivas fundamentais em depoimentos.
*   **Interjeição:** Exprime emoções súbitas (Oh!, Ah!, Alerta!). É a classe menos usada em textos formais e relatórios policiais, devendo ser evitada, excepto na transcrição fiel de diálogos de terceiros.

---

## Exemplos resolvidos

**Exemplo 1: Identificação de Classes**
*Frase:* "Os novos recrutas marcharam rapidamente ontem."
*   **Os:** Artigo definido, masculino, plural.
*   **novos:** Adjectivo (caracteriza recrutas).
*   **recrutas:** Substantivo comum (núcleo do sujeito).
*   **marcharam:** Verbo (acção, 3ª pessoa do plural do Pretérito Perfeito).
*   **rapidamente:** Advérbio de modo.
*   **ontem:** Advérbio de tempo.

**Exemplo 2: Colocação Pronominal (Comum em provas do MININT)**
*Questão:* Qual a forma correcta?
a) Me empreste a algema.
b) Empreste-me a algema.
*   **Resolução:** A opção **b** é a correcta. Em português de norma angolana/europeia, não se inicia frase com pronome oblíquo átono. Como o verbo está no imperativo, usa-se a ênclise.

**Exemplo 3: Concordância Nominal**
*Frase:* "É ________ a entrada de pessoas estranhas nesta esquadra." (proibido/proibida)
*   **Resolução:** Se houver artigo ("a entrada"), o adjectivo concorda: "É **proibida** a entrada". Se não houver artigo ("entrada"), usa-se o masculino genérico: "É **proibido** entrada".

---

## Erros comuns a evitar

1.  **Confundir "Mal" com "Mau":** "Mal" é advérbio (oposto de bem); "Mau" é adjectivo (oposto de bom). *Ex: O suspeito comportou-se mal (bem). Ele é um mau (bom) cidadão.*
2.  **Uso de "Onde" vs "Aonde":** "Onde" indica lugar fixo. "Aonde" indica movimento (com verbos que pedem a preposição 'a'). *Ex: Onde está a viatura? / Aonde vais com tanta pressa?*
3.  **Incorrecção no uso de "Há" e "A":** "Há" indica tempo decorrido (passado) ou existência. "A" indica distância ou tempo futuro. *Ex: Trabalho na PN há dez anos. A esquadra fica a dois quilómetros.*
4.  **Pleonasmos viciosos:** Evitem "subir para cima" ou "entrar para dentro" em relatórios. São erros de lógica que demonstram pobreza de vocabulário.
5.  **Concordância do verbo "Haver":** Quando significa "existir", o verbo haver é impessoal e fica sempre no singular. *Ex: Havia (e não haviam) muitos manifestantes na praça.*

---

## Resumo

Para a vossa prova, fixem estes cinco pontos:
1.  **Morfologia** estuda a palavra isolada; a sua função na frase será estudada na Sintaxe.
2.  Existem **6 classes variáveis** (substantivo, artigo, adjectivo, numeral, pronome, verbo) e **4 invariáveis** (advérbio, preposição, conjunção, interjeição).
3.  O **Substantivo** e o **Verbo** são os pilares de qualquer texto oficial.
4.  Os **Conectivos** (preposições e conjunções) são responsáveis pela coesão do texto; sem eles, as ideias ficam soltas.
5.  A **Norma Angolana** segue o padrão do português europeu, especialmente na colocação pronominal e regência, sendo este o padrão exigido nos concursos públicos.

---

## Glossário

1.  **Morfologia:** Estudo da estrutura, da formação e da classificação das palavras.
2.  **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
3.  **Locução:** Conjunto de duas ou mais palavras que valem por uma (ex: locução adverbial "às pressas").
4.  **Substantivo Colectivo:** Nome comum que, no singular, designa um conjunto de seres da mesma espécie.
5.  **Verbo Impessoal:** Aquele que não tem sujeito e é usado apenas na 3ª pessoa do singular.
6.  **Regência:** Relação de dependência entre um termo regente (verbo ou nome) e o seu complemento.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e das frases no discurso.
8.  **Ênclise:** Colocação do pronome depois do verbo (ex: Prendi-o).

Estudem com afinco, senhores candidatos. A disciplina é a alma da Polícia e o estudo é a arma do intelectual. Próxima aula: Sintaxe da Oração.

Podem sair para o intervalo.
$lesson18$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'verbos',
  'Conjugação verbal',
  $lesson19$
Bom dia, caros aspirantes. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para a vossa aprovação no concurso público do Ministério do Interior (MININT), especificamente para o ingresso na Polícia Nacional de Angola (PN). A língua portuguesa não é apenas um instrumento de comunicação; para um oficial da ordem, ela é uma ferramenta de trabalho fundamental. Um auto de notícia mal redigido ou um relatório com erros de conjugação verbal pode comprometer a validade jurídica de uma diligência e manchar a imagem da corporação.

Nesta aula, abordaremos a **Conjugação Verbal**. O domínio dos tempos e modos, bem como a distinção entre verbos regulares e irregulares, é o que separa o candidato preparado daquele que sucumbe perante a rasteira do examinador. Exijo rigor, disciplina e foco. Vamos começar.

---

## Introdução

A conjugação verbal é a flexão do verbo em pessoa, número, tempo, modo e voz. No contexto do MININT e da Polícia Nacional, a precisão temporal é vital. Quando um agente relata uma ocorrência, ele deve saber distinguir se uma acção **ocorreu** (concluída), **ocorrera** (anterior a outra já passada) ou **ocorreria** (hipotética ou dependente de condição). A clareza no uso dos tempos verbais garante que a hierarquia e o sistema de justiça compreendam exactamente a sequência dos factos.

Para o concurso público, a banca examinadora foca-se na capacidade do candidato em lidar com as irregularidades verbais e com a correlação entre os modos indicativo e conjuntivo. Não basta saber "falar bem"; é necessário dominar a norma culta, a norma angolana inserida no português europeu, que é a base dos nossos textos legislativos e regulamentares.

---

## Conceitos Fundamentais

Para dominarmos a estrutura, precisamos primeiro de consolidar os alicerces:

1.  **Radical e Desinência:** O radical é a parte que contém o significado do verbo (ex: em *patrulh-ar*, "patrulh" é o radical). A desinência é a terminação que indica o tempo, o modo, a pessoa e o número.
    *   *Exemplo:* No verbo *prender*, em "prendemos", o "-emos" indica a 1.ª pessoa do plural do Presente do Indicativo.
    *   *Nota Prática:* Identificar o radical ajuda a conjugar verbos da mesma família.

2.  **Modos Verbais:** Indicam a atitude do falante em relação à acção.
    *   **Indicativo:** Exprime certeza, factos reais. (Ex: "O agente **cumpre** o seu dever.")
    *   **Conjuntivo:** Exprime dúvida, desejo, hipótese. (Ex: "Espero que o agente **cumpra** o seu dever.")
    *   **Condicional:** Exprime uma acção dependente de uma condição. (Ex: "O agente **cumpriria** o dever, se tivesse meios.")
    *   *Nota Prática:* Em relatórios policiais, o Indicativo é o modo predominante pela sua natureza factual.

3.  **Tempos Simples e Compostos:**
    *   **Simples:** Formados por apenas um verbo. (Ex: "Eu **fiz** a ronda.")
    *   **Compostos:** Formados por um verbo auxiliar (*ter* ou *haver*) + o particípio do verbo principal. (Ex: "Eu **tinha feito** a ronda.")
    *   *Nota Prática:* O tempo composto "tinha feito" é muito mais comum na nossa norma do que o simples "fizera".

4.  **Verbos Regulares e Irregulares:**
    *   **Regulares:** Mantêm o radical e seguem o modelo da sua conjugação. (Ex: *Cantar, Vender, Partir*).
    *   **Irregulares:** Sofrem alterações no radical ou nas desinências. (Ex: *Fazer, Ir, Vir, Ver, Ser*).
    *   *Nota Prática:* Os verbos irregulares são os preferidos das provas de concurso.

5.  **Verbos Auxiliares:** São aqueles que ajudam a formar os tempos compostos e a voz passiva. Os principais são *Ter, Haver, Ser* e *Estar*.
    *   *Exemplo:* "O suspeito **foi** detido pela patrulha." (*Ser* como auxiliar da voz passiva).

---

## Aprofundamento

### 1. O Modo Indicativo: A Espinha Dorsal do Relato
No concurso, fiquem atentos ao **Pretérito Perfeito** (acção concluída: "O Comissário deu a ordem") e ao **Pretérito Imperfeito** (acção contínua no passado ou hábito: "Os agentes patrulhavam a zona diariamente"). 
Uma rasteira comum é o **Pretérito Mais-que-perfeito**. Na forma simples (ex: *fizera*), é raro na fala, mas aparece em textos da Lei Orgânica da Polícia Nacional. Na forma composta (*tinha feito*), é essencial para indicar uma acção anterior a outra já passada.

### 2. O Modo Conjuntivo (Subjuntivo) e a Hipótese
O conjuntivo é o terror dos candidatos. Lembrem-se:
*   **Presente do Conjuntivo:** "É necessário que a Polícia **intervenha**" (e não "intervém").
*   **Futuro do Conjuntivo:** Muito usado em editais e leis. "Se o candidato **fizer** a prova..." (e não "se o candidato fazer").

### 3. Verbos Irregulares de Alta Relevância
Prestem atenção ao verbo **Intervir** (derivado de *vir*). Não se diz "o agente interviu", mas sim "o agente **interveio**". Da mesma forma, o verbo **Deter** (derivado de *ter*): "A polícia **deteve** o suspeito" (e não "deteu").

### 4. Tempos Compostos e a Voz Passiva
A voz passiva é fundamental para a redacção oficial. 
*   Voz Activa: "O efectivo garantiu a segurança."
*   Voz Passiva: "A segurança **foi garantida** pelo efectivo."
Aqui, o verbo auxiliar *ser* deve concordar em tempo e modo com a acção principal.

---

## Exemplos Resolvidos

**Questão 1:** Assinale a opção em que o verbo está correctamente conjugado no Pretérito Perfeito do Indicativo.
a) O agente interviu na discussão para evitar o crime.
b) O agente interveio na discussão para evitar o crime.
c) O agente interveira na discussão para evitar o crime.

*   **Resolução:** A resposta correcta é a **b**. O verbo *intervir* segue a conjugação do verbo *vir*. Se dizemos "ele veio", devemos dizer "ele interveio". A opção 'a' é um erro comum de linguagem coloquial, e a 'c' está no pretérito mais-que-perfeito simples.

**Questão 2:** Transponha a frase para o Futuro do Conjuntivo: "Se a patrulha **vê** a infracção, actua imediatamente."
*   **Resolução:** O Futuro do Conjuntivo do verbo *ver* é **vire**. Portanto: "Se a patrulha **vire** a infracção, actuará imediatamente."
*   *Raciocínio:* Muitos confundem o futuro do conjuntivo de *ver* (vire) com o de *vir* (vier). Atenção redobrada aqui!

**Questão 3:** Identifique o tempo e modo da forma verbal sublinhada: "Os peritos **tinham analisado** as provas antes do julgamento."
*   **Resolução:** Trata-se do **Pretérito Mais-que-perfeito Composto do Indicativo**.
*   *Raciocínio:* Verbo auxiliar *ter* no pretérito imperfeito (tinham) + particípio do verbo principal (analisado). Indica uma acção anterior a outra (o julgamento).

---

## Erros Comuns a Evitar

1.  **Confundir "Haver" com "A":** Em relatórios, usa-se "há" para tempo decorrido (passado) ou existência. "O crime ocorreu **há** duas horas." Nunca use "à duas horas" ou "a duas horas" para passado.
2.  **Trocar "Vier" por "Vierem" ou "Ver" por "Vire":** "Quando você **vire** o Comandante" (do verbo ver) vs. "Quando você **vier** à esquadra" (do verbo vir).
3.  **Má conjugação de verbos derivados:** Verbos como *manter, deter, conter* seguem o verbo *ter*. Logo: "Ele **manteve** a calma" (e não "manteu").
4.  **Uso incorrecto do Condicional:** "Se eu pudesse, eu **ajudava**." Na norma culta para concursos, prefira: "Se eu pudesse, eu **ajudaria**."
5.  **Gerundismo:** Evitem o uso excessivo do gerúndio ("Vou estar enviando o relatório"). Digam: "Enviarei o relatório" ou "Vou enviar o relatório".

---

## Resumo

Para a vossa prova, fixem estes 5 pontos:
1.  **Verbos de Comando:** Verbos como *deter, intervir, manter* e *ver* são recorrentes; dominem as suas irregularidades.
2.  **Correlação Temporal:** Se a frase começa no passado, o verbo seguinte deve manter a lógica temporal.
3.  **Futuro do Conjuntivo:** É a base das normas e condições; saibam conjugar "se eu fizer", "se eu vier", "se eu vir".
4.  **Auxiliares:** O verbo *ter* é o auxiliar por excelência nos tempos compostos na norma angolana.
5.  **Voz Passiva:** Saibam transformar a activa em passiva para identificar o sujeito e a flexão correcta do auxiliar.

---

## Glossário

1.  **Desinência:** Terminação verbal que indica flexão de tempo, modo, número ou pessoa.
2.  **Infinitivo:** Forma nominal do verbo (ex: *estudar*). É o nome do verbo.
3.  **Particípio:** Forma nominal usada nos tempos compostos (ex: *estudado*).
4.  **Modo Subjuntivo (Conjuntivo):** Modo que expressa incerteza, desejo ou possibilidade.
5.  **Verbo Auxiliar:** Verbo que perde o seu sentido original para ajudar na conjugação de outro (ex: *ter, ser*).
6.  **Paradigma Verbal:** Modelo de conjugação que os verbos regulares seguem.
7.  **Voz Passiva:** Construção em que o sujeito sofre a acção expressa pelo verbo.
8.  **Pretérito:** Tempo verbal que se refere ao passado.

Estudem com afinco. A farda que pretendem envergar exige, antes de mais, o domínio da palavra e da lei. Disciplina e bons estudos!
$lesson19$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'concordancia',
  'Concordância verbal e nominal',
  $lesson20$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. É com elevado sentido de dever que iniciamos esta sessão de preparação para o vosso concurso público no Ministério do Interior (MININT). Como vosso professor, exijo o máximo de concentração. A farda que pretendem envergar exige não apenas vigor físico, mas também uma competência intelectual irrepreensível.

## Introdução

A língua portuguesa é a nossa ferramenta de trabalho fundamental. No exercício das funções policiais, a elaboração de autos de notícia, relatórios de ocorrências e participações criminais exige um domínio absoluto da norma culta. Uma concordância mal efectuada num documento oficial não é apenas um erro gramatical; é uma falha de rigor que pode comprometer a clareza de uma prova judicial ou a imagem da corporação perante as instituições do Estado e o cidadão.

Nesta aula, focaremos a nossa atenção na **Concordância Verbal e Nominal**. Estes mecanismos sintácticos são os pilares que garantem a coesão entre os elementos da frase. Para um candidato ao MININT, dominar estas regras é demonstrar que possui a disciplina e a precisão necessárias para servir a Pátria com excelência. Vamos dissecar as regras gerais e as excepções que frequentemente surgem nas provas de admissão.

---

## Conceitos fundamentais

Para dominarmos a sintaxe de concordância, precisamos de fixar os seguintes alicerces:

1.  **Concordância Nominal:** É o princípio segundo o qual os determinantes (artigos, numerais, pronomes) e os adjectivos devem harmonizar-se em género (masculino/feminino) e número (singular/plural) com o substantivo a que se referem.
    *   *Exemplo:* **Os** zeloso**s** agente**s** patrulhavam a zona.
    *   *Nota prática:* O substantivo é o "chefe" da frase nominal; todos os outros termos devem segui-lo.

2.  **Concordância Verbal:** É a relação de harmonia que obriga o verbo a flexionar-se em número e pessoa para concordar com o seu sujeito.
    *   *Exemplo:* **O Comando Geral emitiu** a directiva. (3.ª pessoa do singular).
    *   *Nota prática:* Identificar correctamente o núcleo do sujeito é o primeiro passo para não errar a flexão do verbo.

3.  **Sujeito Composto:** É aquele que possui dois ou mais núcleos. A regra geral dita que o verbo deve ir para o plural.
    *   *Exemplo:* **O Comissário e o Inspector reuniram-se** com a unidade.
    *   *Nota prática:* Se o sujeito composto estiver depois do verbo, este pode concordar com o núcleo mais próximo ou ir para o plural.

4.  **Sujeito Colectivo:** Refere-se a um conjunto de seres da mesma espécie, mas a palavra apresenta-se no singular.
    *   *Exemplo:* **A guarnição manteve-se** em alerta.
    *   *Nota prática:* Embora a ideia seja de pluralidade, a forma gramatical é singular, logo o verbo permanece no singular.

5.  **Expressões Partitivas:** São expressões que indicam uma parte de um todo (ex: "a maioria de", "grande parte de", "metade de").
    *   *Exemplo:* **A maioria dos efectivos participou** (ou **participaram**) na formação.
    *   *Nota prática:* Nestes casos, a norma permite a concordância com o núcleo da expressão (singular) ou com o substantivo que a segue (plural).

---

## Aprofundamento

### 1. Concordância Verbal: Casos Específicos e Complexos

No contexto de um concurso público, as questões raramente abordam o óbvio. Devemos atentar nos detalhes técnicos:

**A) Sujeito Composto por Pessoas Gramaticais Diferentes:**
Se no sujeito houver a 1.ª pessoa (eu/nós), ela prevalece. Se houver a 2.ª pessoa (tu/vós), ela prevalece sobre a 3.ª.
*   *Exemplo:* **Tu e o teu colega (vós) fareis** a ronda nocturna. (Ou "farão", seguindo a tendência do português contemporâneo, mas em prova rigorosa, prefira-se a norma clássica).
*   *Exemplo:* **Eu e o Superintendente elaborámos** o relatório. (Eu + Ele = Nós).

**B) Verbos Impessoais (O perigo do verbo "Haver"):**
O verbo **Haver**, quando significa "existir" ou "ocorrer", é impessoal. Isto significa que não tem sujeito e deve ficar sempre na 3.ª pessoa do singular.
*   *Erro comum:* "Houveram muitos crimes ontem." (**Errado**)
*   *Forma correcta:* "**Houve** muitos crimes ontem." (**Correcto**)
*   *Nota:* O verbo **Existir**, por sua vez, é pessoal e concorda com o sujeito: "**Existiram** muitos crimes."

**C) Concordância com o pronome relativo "QUE" e "QUEM":**
*   Com o "QUE", o verbo concorda com o antecedente: "Fui **eu que solicitei** o reforço."
*   Com o "QUEM", o verbo pode ficar na 3.ª pessoa do singular ou concordar com o antecedente: "Fui **eu quem solicitou**" ou "Fui **eu quem solicitei**".

### 2. Concordância Nominal: Adjectivos e Palavras Especiais

**A) Adjectivo referindo-se a vários substantivos:**
Se o adjectivo vier depois de substantivos de géneros diferentes, vai para o masculino plural.
*   *Exemplo:* O **crime** e a **desordem** foram **combatidos**.

**B) Palavras que funcionam como adjectivos (Anexo, Incluso, Próprio, Mesmo, Obrigado):**
Estas palavras concordam em género e número com o substantivo.
*   *Exemplo:* As **fotografias** seguem **anexas** ao processo.
*   *Exemplo:* A **agente** disse: — Muito **obrigada**.
*   *Atenção:* A expressão "em anexo" é invariável. "As fotografias seguem **em anexo**."

---

## Exemplos resolvidos

**Exercício 1:** Analise a frase: *"Grande parte dos candidatos (concluir) a prova antes do tempo."* Justifique as possibilidades de concordância.
*   **Resolução:**
    1.  *Opção A:* "Grande parte dos candidatos **concluiu**..." (Concordância lógica com o núcleo "parte").
    2.  *Opção B:* "Grande parte dos candidatos **concluíram**..." (Concordância atractiva com o termo "candidatos").
    *   **Raciocínio:** Ambas estão correctas segundo a norma culta para expressões partitivas seguidas de plural.

**Exercício 2:** Corrija a frase: *"Fazem dez anos que a Polícia Nacional reforçou o policiamento de proximidade."*
*   **Resolução:** A forma correcta é "**Faz** dez anos...".
*   **Raciocínio:** O verbo "fazer", quando indica tempo decorrido, é impessoal. Não possui sujeito, devendo permanecer obrigatoriamente na 3.ª pessoa do singular.

**Exercício 3:** Escolha a opção correcta: *"Seguem (anexo/anexos) os relatórios e as guias de marcha."*
*   **Resolução:** A forma correcta é "**anexos**".
*   **Raciocínio:** O adjectivo "anexos" refere-se a dois substantivos ("relatórios" - masc. e "guias" - fem.). Pela regra de precedência, o adjectivo assume o masculino plural.

---

## Erros comuns a evitar

1.  **"Houveram" em vez de "Houve":** Nunca use o verbo haver no plural quando este significar existência. É o erro que mais elimina candidatos em Angola.
2.  **Concordância com "Vossa Excelência":** Embora o pronome se refira à 2.ª pessoa (com quem se fala), o verbo e os adjectivos devem ficar na 3.ª pessoa.
    *   *Errado:* Vossa Excelência estais cansado.
    *   *Correcto:* Vossa Excelência **está cansado**.
3.  **"Alerta" e "Menos":** A palavra "menos" é sempre invariável. A palavra "alerta", quando advérbio, também não varia.
    *   *Exemplo:* Os agentes estavam **alerta** (e não "alertas"). Houve **menos** ocorrências este mês.
4.  **Sujeito Colectivo Distante:** Quando o colectivo está longe do verbo, o aluno tende a pluralizar.
    *   *Errado:* O elenco de oficiais, após longas horas de debate sobre a segurança pública, decidiram...
    *   *Correcto:* O elenco [...] **decidiu**. (O núcleo é "elenco").

---

## Resumo para memorização

1.  **Verbo HAVER (existir/tempo):** Sempre no singular. É uma regra de ouro.
2.  **Expressões Partitivas:** Aceitam dupla concordância (singular ou plural).
3.  **Sujeito Composto:** Regra geral, verbo no plural. Se vier depois do verbo, pode concordar com o mais próximo.
4.  **ANEXO/INCLUSO:** São adjectivos. Devem "imitar" o substantivo em género e número.
5.  **Verbo FAZER (tempo):** Fica no singular. "Faz dois meses", nunca "fazem dois meses".

---

## Glossário

*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
*   **Núcleo do Sujeito:** A palavra principal do sujeito, geralmente um substantivo ou pronome, que dita a concordância do verbo.
*   **Verbo Impessoal:** Verbo que não possui sujeito gramatical, sendo usado apenas na 3.ª pessoa do singular.
*   **Concordância Atractiva:** Quando o verbo ou adjectivo concorda com o termo mais próximo, em vez de concordar com o núcleo principal.
*   **Norma Culta:** Conjunto de regras linguísticas utilizadas em contextos formais, documentos oficiais e provas de concurso.

Estudem com afinco, meus senhores. A disciplina começa na ponta do lápis. A pátria aos seus filhos admira!

**Fim da aula.**
$lesson20$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'regencia',
  'Regência verbal e nominal',
  $lesson21$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para o vosso sucesso no concurso público do Ministério do Interior (MININT): a **Regência Verbal e Nominal**. No exercício das funções policiais, a clareza e a precisão na redacção de autos de notícia, relatórios de ocorrência e participações criminais não são apenas uma questão de estética linguística; são uma questão de legalidade e rigor institucional. Um erro de regência pode alterar o sentido de uma norma ou de um depoimento, comprometendo a justiça.

Nesta aula, vamos dissecar como os verbos e os nomes (substantivos, adjectivos e advérbios) se relacionam com os seus complementos. Veremos que, tal como na hierarquia policial, na língua portuguesa existem termos que mandam (regentes) e termos que obedecem (regidos), muitas vezes exigindo a presença de uma preposição específica para que a mensagem seja transmitida sem ambiguidades.

---

## Conceitos fundamentais

Para dominarmos a regência, precisamos de alicerces sólidos. Vamos rever os conceitos que servirão de base para toda a nossa análise:

1.  **Regência:** É a parte da gramática que estuda a relação de dependência entre os termos de uma oração. O termo "regente" é a palavra principal que exige um complemento, e o termo "regido" é o complemento que completa o sentido do regente.
    *   *Exemplo:* O agente **obedece** (regente) **à lei** (regido).
    *   *Nota prática:* Identificar quem exige a preposição é o primeiro passo para não errar na prova.

2.  **Termo Regente:** É o núcleo que solicita um complemento. Pode ser um verbo (regência verbal) ou um nome (regência nominal).
    *   *Exemplo:* O Comissário tem **necessidade** (nome regente) de reforços.
    *   *Nota prática:* No MININT, muitos termos regentes são substantivos abstractos derivados de verbos de acção.

3.  **Transitividade Verbal:** Indica se o verbo precisa de um complemento para ter sentido completo.
    *   *Exemplo:* O suspeito **fugiu** (intransitivo - sentido completo); O agente **deteve** o suspeito (transitivo directo - exige complemento sem preposição).
    *   *Nota prática:* Verbos transitivos directos não admitem preposição entre o verbo e o objecto.

4.  **Objecto Directo e Indirecto:** São os complementos dos verbos transitivos. O directo liga-se ao verbo sem preposição obrigatória; o indirecto liga-se através de uma preposição.
    *   *Exemplo:* O efectivo **porta** a arma (OD); O efectivo **precisa** de munições (OI).
    *   *Nota prática:* A escolha da preposição correcta (de, a, com, em, por) define a regência indirecta.

5.  **Preposição:** É a palavra invariável que liga dois termos, estabelecendo uma relação de subordinação.
    *   *Exemplo:* Atentado **contra** a segurança do Estado.
    *   *Nota prática:* Em concursos, as preposições "a", "de" e "em" são as que mais geram rasteiras.

---

## Aprofundamento

### 1. Regência Verbal: Casos Críticos para a Polícia Nacional

Muitos verbos mudam de sentido conforme a preposição que utilizam. No contexto policial, isto é vital.

*   **Aspirar:**
    *   No sentido de *sorver, respirar*: É transitivo directo. "O perito aspirou o pó do local do crime."
    *   No sentido de *pretender, desejar*: É transitivo indirecto (exige a preposição **a**). "Muitos jovens angolanos **aspiram à** carreira policial." (Note o uso da crase: a + a).
*   **Assistir:**
    *   No sentido de *prestar socorro*: Geralmente transitivo directo. "O agente assistiu o ferido no acidente."
    *   No sentido de *ver, presenciar*: É transitivo indirecto (exige a preposição **a**). "A testemunha assistiu **ao** assalto." (Erro comum: "assistiu o assalto").
    *   No sentido de *caber, pertencer*: É transitivo indirecto. "Este direito assiste **ao** detido."
*   **Implicar:**
    *   No sentido de *acarretar, resultar*: É transitivo directo (não admite a preposição "em"). "A vossa conduta implicará **expulsão** imediata." (Errado: "implicará em expulsão").
*   **Informar / Avisar / Certificar:**
    *   Estes verbos são transitivos directos e indirectos. Informamos *alguém de alguma coisa* ou *alguma coisa a alguém*.
    *   "O Comando informou **os agentes da** nova escala." ou "O Comando informou **a nova escala aos** agentes."
    *   *Atenção:* Nunca use duas preposições ou nenhuma. "Informou aos agentes da escala" está incorrecto.

### 2. Regência Nominal: A Precisão do Substantivo e Adjectivo

A regência nominal ocorre quando um substantivo, adjectivo ou advérbio exige um complemento preposicionado. Vejamos exemplos comuns em textos oficiais do MININT:

*   **Atentado:** Exige a preposição *a* ou *contra*. "Atentado **à** ordem pública" ou "Atentado **contra** a autoridade".
*   **Inerente:** Exige a preposição *a*. "O risco é inerente **à** profissão policial."
*   **Passível:** Exige a preposição *de*. "A infracção é passível **de** multa."
*   **Obediência:** Exige a preposição *a*. "Devemos obediência **à** Constituição da República de Angola."
*   **Respeito:** Exige a preposição *a, com, para com, por*. "Respeito **pelos** direitos humanos."

### 3. O Uso do Pronome Relativo na Regência

Este é um ponto onde muitos candidatos falham. Quando usamos pronomes relativos (que, qual, cujo), a preposição exigida pelo verbo deve ser colocada **antes** do pronome.

*   *Correcto:* "Esta é a lei **a que** me refiro." (Quem se refere, refere-se **a**).
*   *Incorrecto:* "Esta é a lei que me refiro."

---

## Exemplos resolvidos

**Exemplo 1: Analise a frase "O candidato prefere a Polícia Nacional do que as Forças Armadas." e corrija-a se necessário.**
*   **Raciocínio:** O verbo *preferir* é transitivo directo e indirecto. Ele exige a preposição **a** para o segundo termo e rejeita expressões comparativas como "do que" ou "mais".
*   **Resolução:** "O candidato prefere a Polícia Nacional **às** Forças Armadas."

**Exemplo 2: Preencha a lacuna: "O crime ____ fomos testemunhas ocorreu no Cazenga."**
*   **Raciocínio:** O substantivo "testemunha" exige a preposição **de** (quem é testemunha, é testemunha *de* algo). Como temos um pronome relativo, a preposição deve vir antes dele.
*   **Resolução:** "O crime **de que** fomos testemunhas ocorreu no Cazenga."

**Exemplo 3: Qual a regência correcta para o verbo "Visar" no sentido de objectivar?**
*   **Raciocínio:** No sentido de dar um visto (assinatura), é directo. No sentido de ter como objectivo, é transitivo indirecto (preposição **a**).
*   **Resolução:** "As medidas visam **ao** bem-estar da população." (E não "visam o bem-estar").

---

## Erros comuns a evitar

1.  **"Chegar em":** No português padrão, quem chega, chega **a** algum lugar.
    *   *Errado:* Chegámos na esquadra.
    *   *Correcto:* Chegámos **à** esquadra.
2.  **"Namorar com":** O verbo namorar é transitivo directo.
    *   *Errado:* Ele namora com a colega.
    *   *Correcto:* Ele namora a colega. (Embora o uso coloquial aceite "com", em provas de concurso de Angola, segue-se a norma rígida).
3.  **"Esquecer de":** O verbo esquecer só leva preposição se for pronominal (esquecer-se).
    *   *Errado:* Esqueci do relatório.
    *   *Correcto:* Esqueci o relatório OU Esqueceu-me o relatório OU **Esqueci-me do** relatório.
4.  **"Agradecer aos":** Agradecemos *algo* (directo) *a alguém* (indirecto).
    *   *Errado:* Agradeci o Comandante.
    *   *Correcto:* Agradeci **ao** Comandante.

---

## Resumo para memorização

1.  **Regência Verbal** trata da relação entre verbos e seus complementos; **Regência Nominal** trata de nomes (substantivos/adjectivos) e seus complementos.
2.  O verbo **Assistir** (ver) exige a preposição **A**.
3.  O verbo **Preferir** exige a preposição **A** e nunca aceita "do que".
4.  O verbo **Implicar** (sentido de acarretar) não aceita a preposição "em".
5.  Em frases com **pronomes relativos**, a preposição exigida pelo verbo deve ser deslocada para antes do pronome (ex: O cargo **a que** aspiro).

---

## Glossário

*   **Crase:** Fusão da preposição "a" com o artigo definido "a" ou pronome demonstrativo.
*   **Intransitivo:** Verbo que não exige complemento para fazer sentido.
*   **Norma Culta:** Conjunto de regras linguísticas seguidas em documentos oficiais e provas de concurso.
*   **Objecto Indirecto:** Complemento verbal que vem obrigatoriamente precedido de preposição.
*   **Preposição:** Palavra de ligação que estabelece dependência entre termos.
*   **Regente:** O termo que comanda a relação de subordinação, exigindo ou não preposição.
*   **Regido:** O termo que completa o sentido do regente.
*   **Transitivo Directo:** Verbo que exige complemento sem auxílio de preposição.

Estudem com afinco, aspirantes. A disciplina na linguagem é o reflexo da disciplina na farda. Até à próxima aula.
$lesson21$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'sintaxe',
  'Sintaxe da frase',
  $lesson22$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para quem aspira envergar a farda da nossa gloriosa **Polícia Nacional de Angola (PN)**. A prova de Língua Portuguesa para o Ministério do Interior (MININT) não avalia apenas a vossa capacidade de leitura; ela testa o vosso rigor lógico e a vossa competência em estruturar o pensamento de forma clara e oficial. Um agente da autoridade que não domina a sintaxe da frase é um agente que falha na redacção de um auto de notícia, numa participação criminal ou num relatório de patrulhamento.

A sintaxe é o ramo da gramática que estuda a disposição das palavras na frase e as relações lógicas entre elas. No contexto de um concurso público, o domínio da frase simples e da frase complexa é o que separa o candidato apto daquele que será excluído. A clareza de um texto jurídico ou administrativo depende inteiramente da correcta articulação entre o sujeito, o predicado e as orações que compõem o período. Vamos, portanto, trabalhar com o rigor que a farda exige.

---

## Introdução

A sintaxe é a espinha dorsal da comunicação escrita oficial. No âmbito do MININT, a precisão é fundamental. Imaginem um relatório de ocorrência onde a troca de uma conjunção ou a má estruturação de uma oração subordinada altera o sentido de quem cometeu o crime e de quem foi a vítima. A sintaxe estuda como as palavras se agrupam para formar unidades de sentido: a frase, a oração e o período.

Para o concurso da Polícia Nacional, o examinador focar-se-á na vossa capacidade de identificar os constituintes da frase simples (análise sintáctica interna) e de compreender a articulação das orações no período composto (frase complexa). Dominar estes conceitos permitirá que respondam com segurança às questões de múltipla escolha e, futuramente, que redijam documentos institucionais com a dignidade que a função pública requer.

---

## Conceitos fundamentais

Para avançarmos, precisamos de consolidar os alicerces. Atentem nos seguintes conceitos:

1.  **Frase, Oração e Período:** A frase é qualquer enunciado com sentido completo. A oração é um enunciado que se organiza em torno de um verbo. O período é a frase constituída por uma ou mais orações.
    *   *Exemplo:* "Alto! Polícia!" (Frase nominal). "O agente patrulha a zona da Mutamba." (Oração/Período simples).
    *   *Nota prática:* No concurso, foquem-se no verbo. Se há um verbo, há uma oração.

2.  **Sujeito:** É o ser (pessoa ou coisa) sobre o qual se faz uma declaração e com o qual o verbo concorda em número e pessoa.
    *   *Exemplo:* "Os efectivos da Polícia Nacional garantem a ordem pública." (Sujeito: Os efectivos da Polícia Nacional).
    *   *Nota prática:* Para encontrar o sujeito, perguntem ao verbo: "Quem é que...?" ou "O que é que...?".

3.  **Predicado:** É tudo aquilo que se diz sobre o sujeito. O núcleo do predicado é sempre um verbo.
    *   *Exemplo:* "O Comandante **explicou as novas directrizes**."
    *   *Nota prática:* O predicado contém a acção ou o estado relativo ao sujeito.

4.  **Complementos (Directo e Indirecto):** São termos que completam o sentido de verbos transitivos. O complemento directo liga-se ao verbo sem preposição obrigatória; o indirecto exige preposição (a, para, de, com, etc.).
    *   *Exemplo:* "O agente solicitou **o documento** (CD) **ao condutor** (CI)."
    *   *Nota prática:* Substituam o CD por "o/a" e o CI por "lhe" para testar a função.

5.  **Coordenação:** Processo de ligação de orações independentes, que mantêm o seu sentido próprio mesmo se isoladas.
    *   *Exemplo:* "A patrulha chegou **e** os suspeitos fugiram."
    *   *Nota prática:* As conjunções coordenativas (e, mas, ou, logo) são as vossas bússolas aqui.

6.  **Subordinação:** Processo em que uma oração (subordinada) exerce uma função sintáctica em relação a outra (principal), dependendo dela gramaticalmente.
    *   *Exemplo:* "É necessário **que todos respeitem a lei**."
    *   *Nota prática:* A oração subordinada funciona como se fosse uma peça de um puzzle que falta na oração principal.

---

## Aprofundamento

### 1. A Frase Simples: A Estrutura Interna
A frase simples, ou período simples, contém apenas uma oração (oração absoluta). A sua análise exige o conhecimento da **transitividade verbal**.

*   **Verbos Intransitivos:** Não exigem complemento. "O suspeito fugiu."
*   **Verbos Transitivos Directos:** Exigem um objecto directo. "A Polícia deteve o meliante."
*   **Verbos Transitivos Indirectos:** Exigem um objecto com preposição. "O cidadão obedece à autoridade." (Reparem no uso do acento grave, indicando a preposição 'a' + artigo 'a').
*   **Verbos de Ligação:** Indicam estado ou qualidade (ser, estar, parecer, ficar). Introduzem o **Predicativo do Sujeito**. "O agente está atento." ('Atento' é o predicativo).

### 2. A Frase Complexa: Coordenação e Subordinação
Aqui reside a maior dificuldade dos candidatos. A frase complexa possui duas ou mais orações.

#### A. Orações Coordenadas
Dividem-se em:
*   **Copulativas:** Adição (e, nem, não só... mas também). "O agente vigia e protege."
*   **Adversativas:** Oposição/Contraste (mas, porém, todavia, contudo). "Houve uma denúncia, mas não encontraram provas."
*   **Disjuntivas:** Alternativa (ou, ou... ou, quer... quer). "Ou o cidadão colabora, ou será detido por desobediência."
*   **Conclusivas:** Conclusão (logo, portanto, por conseguinte). "O crime foi provado, logo haverá condenação."
*   **Explicativas:** Justificação (pois, porque, que). "Respeite o agente, que ele está em serviço."

#### B. Orações Subordinadas
Estas dividem-se em três grandes grupos:
1.  **Substantivas:** Exercem funções de substantivo (sujeito, complemento). "O Comissário ordenou **que a operação começasse**." (Oração subordinada substantiva objectiva directa).
2.  **Adjectivas:** Exercem função de adjectivo, introduzidas por pronomes relativos (que, o qual, cujo).
    *   *Restritivas:* "Os agentes **que são honestos** dignificam a farda." (Apenas os honestos).
    *   *Explicativas (entre vírgulas):* "Os agentes, **que são servidores públicos**, devem ser exemplares." (Todos os agentes são servidores).
3.  **Adverbiais:** Exercem função de advérbio (circunstância).
    *   *Temporais:* "Prendam o suspeito **quando ele sair de casa**."
    *   *Causais:* "A estrada foi cortada **porque houve um acidente grave**."
    *   *Condicionais:* "**Se houver motim**, chamem a Unidade de Reacção e Patrulhamento."
    *   *Finais:* "Trabalhamos **para que a paz social seja mantida**."

---

## Exemplos resolvidos

**Exercício 1:** Analise sintacticamente a frase: "O Serviço de Investigação Criminal (SIC) deteve o suspeito ontem em Cacuaco."

*   **Raciocínio:**
    1.  Quem deteve? "O Serviço de Investigação Criminal (SIC)". Logo, este é o **Sujeito Composto** (institucional).
    2.  Qual é a acção? "deteve". Verbo transitivo directo.
    3.  Deteve quem? "o suspeito". **Complemento Directo**.
    4.  Quando? "ontem". **Modificador (ou Adjunto Adverbial) de Tempo**.
    5.  Onde? "em Cacuaco". **Modificador (ou Adjunto Adverbial) de Lugar**.

**Exercício 2:** Classifique a oração sublinhada: "Embora a chuva fosse intensa, a patrulha manteve-se no posto."

*   **Raciocínio:** A conjunção "embora" introduz uma ideia de concessão (um obstáculo que não impede a acção principal).
*   **Resposta:** Oração subordinada adverbial concessiva.

**Exercício 3:** Transforme as duas frases simples numa frase complexa coordenada adversativa:
Frase A: "O agente deu ordem de paragem."
Frase B: "O condutor acelerou o veículo."

*   **Raciocínio:** A relação entre as duas frases é de oposição. Devo usar "mas", "porém" ou "contudo".
*   **Resposta:** "O agente deu ordem de paragem, **mas** o condutor acelerou o veículo."

---

## Erros comuns a evitar

1.  **Separar o Sujeito do Predicado com vírgula:** Este é o erro mais grave. Nunca se escreve: "O Comandante da Esquadra, chegou agora." (Errado). O correcto é: "O Comandante da Esquadra chegou agora."
2.  **Confundir "Porque" com "Porquê":** Em respostas e explicações, usa-se "porque". "Porquê" usa-se no final de frases ou como substantivo.
3.  **Erro de Concordância no Sujeito Composto:** "Chegou o agente e o inspector." (Aceitável se o verbo vier antes), mas o ideal é: "O agente e o inspector chegaram." Atentem à concordância com o plural.
4.  **Confundir Oração Coordenada Adversativa (mas) com Advérbio de Intensidade (mais):** "Queremos mais segurança, mas os recursos são escassos." Nunca troquem um pelo outro.
5.  **Uso incorrecto do pronome relativo "cujo":** "O agente cujo o nome..." (Errado). O correcto é "O agente cujo nome..." (Nunca se usa artigo após 'cujo').

---

## Resumo

Para a vossa prova, memorizem estes 5 pontos:
1.  **Sujeito e Predicado** são os termos essenciais; sem eles, a estrutura da oração fica incompleta.
2.  **Complemento Directo** responde a "quê/quem" e o **Indirecto** exige preposição (a, para).
3.  **Orações Coordenadas** são independentes; as **Subordinadas** dependem da principal.
4.  As **Conjunções** são as chaves para classificar as orações. Estudem as tabelas de conjunções (adversativas, causais, condicionais).
5.  A **Pontuação** muda o sentido. Uma vírgula numa oração adjectiva pode transformar uma restrição numa explicação geral.

---

## Glossário

1.  **Sintaxe:** Parte da gramática que estuda a relação entre as palavras na frase.
2.  **Oração Absoluta:** Período simples, constituído por apenas um verbo.
3.  **Verbo Transitivo:** Verbo que necessita de complementos para ter sentido completo.
4.  **Conjunção:** Palavra invariável que liga duas orações.
5.  **Adjunto Adverbial (Modificador):** Termo que indica uma circunstância (tempo, lugar, modo).
6.  **Predicativo do Sujeito:** Atributo ou estado atribuído ao sujeito através de um verbo de ligação.
7.  **Pronome Relativo:** Palavra que substitui um termo anterior e introduz uma oração subordinada adjectiva.
8.  **Período Composto:** Frase que contém duas ou mais orações.

Estudem com afinco, candidatos. A disciplina é a alma do sucesso, tanto na gramática quanto na vida policial. Força e Honra!
$lesson22$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'pontuacao',
  'Pontuação',
  $lesson23$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para o vosso sucesso no concurso público do Ministério do Interior (MININT). A vossa missão, enquanto futuros agentes da autoridade, não se limitará ao patrulhamento ou à manutenção da ordem pública; ela estende-se à redação rigorosa de autos de notícia, relatórios de ocorrência e participações criminais. Um erro de pontuação num documento oficial não é apenas uma falha gramatical; pode ser a diferença entre a condenação de um criminoso ou a anulação de um processo por ambiguidade.

A pontuação é o sistema de sinais gráficos que indica, na escrita, as pausas e a entoação da leitura, organizando a estrutura das frases para que o sentido seja inequívoco. No contexto da Polícia Nacional, a clareza é um imperativo ético e profissional. Nesta aula, vamos dissecar as regras fundamentais que regem o uso do ponto final, da vírgula, do ponto e vírgula, dos dois pontos e dos sinais de interrogação e exclamação, sempre com o rigor que a farda exige.

---

## Conceitos fundamentais

### 1. Ponto Final (.)
O ponto final assinala a pausa máxima e encerra o período simples ou composto, indicando que o sentido daquela unidade de pensamento está completo.
*   **Exemplo:** O efetivo da Polícia Nacional garantiu a segurança durante a manifestação em Luanda.
*   **Nota prática:** No final de siglas (P.N.A.), o uso do ponto tem caído em desuso na prática administrativa moderna, mas em textos corridos, o ponto final é obrigatório para fechar raciocínios.

### 2. Vírgula (,)
É o sinal que marca uma pausa de curta duração. Serve para separar elementos dentro de uma oração ou orações dentro de um período.
*   **Exemplo:** O Comandante Provincial convocou os oficiais, os sargentos e os agentes para a parada matinal.
*   **Nota prática:** Nunca se separa o sujeito do predicado com uma vírgula. É um erro gravíssimo em provas de concurso.

### 3. Ponto e Vírgula (;)
Indica uma pausa intermédia, superior à da vírgula e inferior à do ponto final. É muito utilizado em enumerações de artigos de lei ou regulamentos.
*   **Exemplo:** São deveres do agente: respeitar a hierarquia; zelar pelo fardamento; e cumprir a Constituição.
*   **Nota prática:** Use o ponto e vírgula para separar itens de uma lista que já contenham vírgulas internas.

### 4. Dois Pontos (:)
Este sinal anuncia uma citação, uma enumeração, uma explicação ou uma síntese do que foi dito anteriormente.
*   **Exemplo:** O suspeito declarou o seguinte: "Eu não estava no local do crime à hora do incidente."
*   **Nota prática:** Em relatórios policiais, os dois pontos são essenciais para introduzir depoimentos de testemunhas.

### 5. Ponto de Interrogação (?) e Exclamação (!)
O ponto de interrogação indica uma pergunta direta. O ponto de exclamação expressa sentimentos como surpresa, ordem ou ênfase.
*   **Exemplo (?):** Qual é o número de identificação do veículo apreendido?
*   **Exemplo (!):** Alto, em nome da Lei!
*   **Nota prática:** Em textos administrativos e jurídicos, o uso da exclamação deve ser extremamente parcimonioso, reservando-se apenas para ordens diretas ou citações.

---

## Aprofundamento

Para dominar a pontuação, o candidato deve compreender a sintaxe da frase. A vírgula, por ser o sinal mais complexo, exige atenção redobrada em quatro situações principais:

1.  **Isolamento do Vocativo:** O vocativo (chamamento) deve ser sempre isolado por vírgulas.
    *   *Exemplo:* "Agente Silva, apresente o relatório agora."
2.  **Isolamento do Aposto:** O aposto (explicação de um termo anterior) também requer vírgulas.
    *   *Exemplo:* "A Marginal de Luanda, local de grande afluência turística, será patrulhada hoje."
3.  **Orações Adjetivas Explicativas:** Diferenciam-se das restritivas pelo uso da vírgula.
    *   *Exemplo:* "Os polícias, que são treinados para o perigo, mantiveram a calma." (Todos os polícias são treinados).
4.  **Deslocamento de Adjuntos Adverbiais:** Quando um adjunto adverbial longo é colocado no início da frase, a vírgula é obrigatória.
    *   *Exemplo:* "Durante a operação de busca e apreensão no Cazenga, foram detidos três indivíduos."

Quanto ao **Ponto e Vírgula**, a sua aplicação técnica mais comum em concursos do MININT refere-se à separação de orações coordenadas que já possuem vírgulas no seu interior ou que apresentam um contraste.
*   *Exemplo:* "O primeiro grupo seguirá pela Avenida Deolinda Rodrigues; o segundo, pela Rua Direita do Gamek." (A vírgula após 'segundo' indica a omissão do verbo 'seguirá', e o ponto e vírgula separa as duas frentes de ação).

Os **Dois Pontos** possuem uma função esclarecedora. No Direito e na Administração Pública angolana, são usados antes de transcrições de artigos: "Nos termos do Artigo 1.º: 'Angola é uma República soberana...'".

---

## Exemplos resolvidos

### Exemplo 1: Correção de Pontuação
**Enunciado:** Pontue corretamente a frase: *O Diretor Nacional embora estivesse ocupado atendeu os candidatos ao concurso.*

**Resolução Passo-a-Passo:**
1.  Identificamos a oração principal: "O Diretor Nacional atendeu os candidatos ao concurso."
2.  Notamos uma oração intercalada de valor concessivo: "embora estivesse ocupado".
3.  Regra: Orações intercaladas devem ser isoladas por vírgulas.
4.  **Resultado:** O Diretor Nacional, embora estivesse ocupado, atendeu os candidatos ao concurso.

### Exemplo 2: Identificação de Erro
**Enunciado:** Identifique o erro na frase: *Os agentes de trânsito, apreenderam as cartas de condução caducadas.*

**Resolução Passo-a-Passo:**
1.  Sujeito: "Os agentes de trânsito".
2.  Predicado: "apreenderam as cartas de condução caducadas".
3.  Análise: Existe uma vírgula separando o sujeito do verbo.
4.  **Regra:** É proibido separar sujeito e predicado com vírgula, mesmo que o sujeito seja longo.
5.  **Correção:** Os agentes de trânsito apreenderam as cartas de condução caducadas.

### Exemplo 3: Uso do Ponto e Vírgula
**Enunciado:** Organize os itens abaixo usando a pontuação adequada para um regulamento.
*Itens: fardamento limpo; pontualidade no serviço; respeito aos cidadãos.*

**Resolução Passo-a-Passo:**
1.  Introduzimos com dois pontos.
2.  Separamos os itens por ponto e vírgula, pois são elementos de uma lista administrativa.
3.  Finalizamos com ponto final.
4.  **Resultado:** O regulamento prevê:
    a) Fardamento limpo;
    b) Pontualidade no serviço;
    c) Respeito aos cidadãos.

---

## Erros comuns a evitar

1.  **Vírgula entre Sujeito e Verbo:** É o erro que mais elimina candidatos. Nunca escreva: "O Comandante, disse...". O correto é: "O Comandante disse...".
2.  **Vírgula antes da conjunção "e":** Em regra, não se usa vírgula antes do "e" quando os sujeitos são os mesmos. Use apenas se os sujeitos forem diferentes (Ex: O sol brilhou, e a chuva caiu).
3.  **Confundir Adjunto Adverbial curto com longo:** Em "Ontem, saímos", a vírgula é facultativa. Em "No dia da independência nacional de Angola, saímos", a vírgula é obrigatória pelo comprimento da expressão.
4.  **Esquecer a vírgula no vocativo:** Escrever "Agente venha cá" está errado. O correto é "Agente, venha cá".
5.  **Uso excessivo de reticências (...):** Em textos oficiais da Polícia Nacional, as reticências são quase proibidas, pois indicam hesitação ou interrupção, o que retira a autoridade e a precisão ao documento.

---

## Resumo

1.  **Ponto Final:** Encerra o pensamento completo e o período.
2.  **Vírgula:** Marca pausas breves, isola vocativos, apostos e orações intercaladas; nunca separa sujeito de verbo.
3.  **Ponto e Vírgula:** Separa itens de enumerações ou orações coordenadas extensas.
4.  **Dois Pontos:** Introduz falas, citações de leis ou explicações detalhadas.
5.  **Interrogação e Exclamação:** Devem ser usados com critério, focando na clareza da intenção comunicativa (pergunta ou ordem).

---

## Glossário

1.  **Aposto:** Termo de caráter explicativo que se junta a um substantivo ou pronome.
2.  **Vocativo:** Termo usado para chamar ou interpelar o interlocutor.
3.  **Oração Intercalada:** Oração que se insere no meio de outra para introduzir uma observação ou ressalva.
4.  **Adjunto Adverbial:** Termo que indica uma circunstância (tempo, lugar, modo).
5.  **Período Composto:** Frase que possui duas ou mais orações.
6.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
7.  **Auto de Notícia:** Documento oficial onde a autoridade policial relata uma infração presenciada.
8.  **Conjunção:** Palavra que liga orações (ex: e, mas, porque, embora).

Estudem com afinco, meus senhores. A disciplina na escrita reflete a disciplina na farda. Boa sorte na vossa preparação!
$lesson23$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'ortografia',
  'Ortografia e acentuação',
  $lesson24$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a uma jornada de rigor e disciplina intelectual. O ingresso no Ministério do Interior (MININT) exige não apenas vigor físico e integridade moral, mas também uma competência linguística irrepreensível. Um oficial que não domina a sua língua materna — o Português, na sua norma angolana — compromete a clareza de um auto de notícia, a precisão de um relatório de ocorrência e a dignidade da instituição que representa.

Nesta aula, abordaremos a Ortografia e a Acentuação Gráfica, com foco nas alterações introduzidas pelo Acordo Ortográfico de 1990 (AO90). A prova de admissão não perdoa o erro ortográfico; um acento mal colocado ou um hífen esquecido pode ser a diferença entre a admissão e a exclusão. Portanto, exijo a vossa máxima atenção. Peguem no material de escrita e registem cada detalhe.

---

## Introdução

A língua escrita é a ferramenta fundamental do agente da autoridade. No contexto do MININT, a redação de documentos oficiais exige o cumprimento estrito das normas gramaticais vigentes. A ortografia não é uma escolha estética, mas uma convenção legal que garante a uniformidade e a compreensão mútua entre as instituições do Estado e o cidadão. Um erro de acentuação num nome próprio ou num termo jurídico pode invalidar um processo administrativo ou judicial.

A importância deste tema para o concurso da Polícia Nacional reside no facto de que a prova de Língua Portuguesa é, historicamente, a que apresenta maior taxa de reprovação. O candidato deve demonstrar que domina as regras de acentuação gráfica, o uso correto do hífen em termos compostos e a aplicação de maiúsculas e minúsculas de acordo com a hierarquia e os protocolos oficiais. Esta aula visa dotar-vos da precisão técnica necessária para superar este desafio.

---

## Conceitos fundamentais

Para dominarmos a ortografia, precisamos de alicerces sólidos. Vamos rever cinco conceitos essenciais:

### 1. Acentuação Tónica vs. Acentuação Gráfica
A **acentuação tónica** refere-se à sílaba pronunciada com maior intensidade (sílaba tónica). A **acentuação gráfica** é o uso de sinais (agudo, circunflexo) para marcar essa intensidade ou a abertura da vogal, seguindo regras específicas.
*   **Exemplo:** Na palavra **esquadra**, a sílaba tónica é "qua", mas não leva acento gráfico. Na palavra **polícia**, a sílaba tónica é "lí" e exige acento agudo.
*   **Nota prática:** Nem toda a palavra acentuada na fala leva acento no papel. O concurso testará se conhece as regras de exceção.

### 2. Classificação das Palavras quanto à Acentuação
As palavras dividem-se em oxítonas (última sílaba tónica), paroxítonas (penúltima) e proparoxítonas (antepenúltima).
*   **Exemplo:** **Retratar** (oxítona), **Agente** (paroxítona), **Viatura** (paroxítona), **Trânsito** (proparoxítona).
*   **Nota prática:** Em Angola, a maioria das palavras são paroxítonas. Lembrem-se: todas as proparoxítonas são obrigatoriamente acentuadas.

### 3. O Hífen e os Prefixos
O hífen é um sinal gráfico de união ou separação. Com o AO90, o seu uso com prefixos (como *auto-*, *sub-*, *infra-*) mudou significativamente.
*   **Exemplo:** **Autoestrada** (agora escreve-se junto) vs. **Anti-higiénico** (mantém o hífen devido ao 'h').
*   **Nota prática:** A regra de ouro atual é: "os opostos atraem-se, os iguais repelem-se" (letras diferentes juntam-se; letras iguais separam-se com hífen).

### 4. Maiúsculas e Minúsculas de Cortesia e Hierarquia
Refere-se ao uso de letras capitais para designar instituições, cargos de chefia e entidades públicas.
*   **Exemplo:** **Ministério do Interior**, **Comissário-Geral**, **Comando Provincial de Luanda**.
*   **Nota prática:** Em documentos oficiais da PN, cargos e instituições devem ser grafados com inicial maiúscula em sinal de respeito e identificação institucional.

### 5. Ditongos Abertos em Paroxítonas
Uma das mudanças mais drásticas do AO90 foi a queda do acento nos ditongos abertos "ei" e "oi" em palavras paroxítonas.
*   **Exemplo:** Antes escrevia-se "idéia", agora escreve-se **ideia**. Antes "assembléia", agora **assembleia**.
*   **Nota prática:** Cuidado! Se a palavra for oxítona, o acento mantém-se (ex: **herói**, **papéis**).

---

## Aprofundamento

Vamos agora ao detalhe técnico que separa o candidato comum do futuro oficial.

### Regras de Acentuação Pós-Acordo Ortográfico

1.  **O Fim do Trema:** O trema desapareceu completamente de todas as palavras da língua portuguesa (ex: *consequência*, *aguentar*), exceto em nomes próprios estrangeiros e seus derivados (ex: *Müller*).
2.  **Acentos Diferenciais:** Foram eliminados na sua maioria. Não se usa mais acento para distinguir "pára" (verbo) de "para" (preposição). No entanto, o acento mantém-se em:
    *   **Pôde** (pretérito perfeito) para distinguir de **pode** (presente).
    *   **Pôr** (verbo) para distinguir de **por** (preposição).
    *   **Têm** e **Vêm** (plural) para distinguir de **tem** e **vem** (singular). Isto é vital em relatórios: "Os suspeitos **têm** antecedentes".
3.  **Hiatos "oo" e "ee":** O acento circunflexo desapareceu. Escreve-se **voo**, **enjoo**, **leem**, **veem**.

### O Uso do Hífen com Prefixos (Regras Detalhadas)

Esta é a área onde ocorrem mais erros em concursos. Memorizem estas diretrizes:
*   **Usa-se hífen** quando o prefixo termina na mesma vogal com que começa a segunda palavra: **micro-ondas**, **anti-inflamatório**.
*   **Usa-se hífen** sempre que a segunda palavra começa por **H**: **super-homem**, **extra-humano**, **pré-história**.
*   **Não se usa hífen** quando o prefixo termina em vogal e a segunda palavra começa por consoante diferente de **R** ou **S**: **semicírculo**, **infraestrutura**, **antiprojecto**.
*   **Regra do R e S:** Se o prefixo termina em vogal e a segunda palavra começa por **R** ou **S**, estas consoantes duplicam-se e o hífen desaparece: **antirracismo**, **antissocial**, **contrarregra**.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a frase que cumpre rigorosamente as normas de acentuação e ortografia vigentes.
A) O Agente da PN parou a viatura para que o Comissário pudesse passar.
B) O Agente da PN párou a viatura para que o Comissário pudesse passar.
C) O Agente da PN parou a viatura para que o Comissário pôdesse passar.

*   **Resolução:** A opção correta é a **A**. 
*   **Raciocínio:** "Parou" (verbo parar) não tem acento. "Pudesse" é o imperfeito do conjuntivo e nunca foi acentuado. Na opção B, o acento em "párou" está incorreto (acento diferencial extinto). Na C, "pôdesse" não existe.

**Exercício 2:** Aplique a regra do hífen corretamente: (Extra) + (oficial); (Sub) + (inspetor).
*   **Resolução:** **Extraoficial** e **Subinspetor**.
*   **Raciocínio:** Em "extraoficial", as vogais são diferentes (a/o), logo juntam-se. Em "subinspetor", o prefixo termina em consoante e a segunda palavra começa por vogal diferente, logo juntam-se.

**Exercício 3:** Corrija a frase: "Eles veem a esquadra de longe e temem o auto-de-infração."
*   **Resolução:** "Eles **veem** a esquadra de longe e temem o **auto de infração**."
*   **Raciocínio:** "Veem" (verbo ver) perdeu o acento circunflexo. "Auto de infração" não leva hífen, pois é uma locução substantiva sem elemento de ligação (regra geral do AO90 para locuções, salvo exceções como "cor-de-rosa").

---

## Erros comuns a evitar

1.  **Confundir "Há" com "A":** "O crime ocorreu **há** duas horas" (tempo decorrido/passado). "A esquadra fica **a** dois quilómetros" (distância/futuro). Em relatórios policiais, este erro é fatal.
2.  **Acentuar "Luanda" ou "Benguela":** São paroxítonas terminadas em vogal "a", logo não levam acento. Muitos candidatos, por excesso de zelo, acentuam nomes de províncias.
3.  **Escrever "Auto-estrada":** Com o novo acordo, vogais diferentes unem-se sem hífen. O correto é **autoestrada**.
4.  **Uso indevido do acento em "Item":** A palavra **item** é paroxítona terminada em "em", tal como "nuvem" ou "homem". Não leva acento. O plural é **itens** (também sem acento).
5.  **Esquecer o acento em "Uíge":** Ao contrário de Luanda, **Uíge** é uma paroxítona terminada em "e" que forma hiato, sendo obrigatório o acento para marcar a tonicidade.

---

## Resumo para memorização

1.  **Proparoxítonas:** Todas são acentuadas (ex: **público**, **policiamento**, **trânsito**).
2.  **Ditongos "ei" e "oi":** Perderam o acento em palavras paroxítonas (**ideia**, **heroico**, **apoio**), mas mantêm em oxítonas (**pastéis**, **herói**).
3.  **Hífen (Vogais):** Letras iguais separam-se (**micro-ondas**); letras diferentes juntam-se (**autoajuda**).
4.  **Hífen (R e S):** Se o prefixo termina em vogal, dobra-se o R ou S e escreve-se junto (**antirroubo**, **minissaia**).
5.  **Diferenciais:** Mantêm-se apenas em **pôr** (verbo), **pôde** (passado), **têm** e **vêm** (plural).

---

## Glossário

1.  **Oxítona:** Palavra cuja acentuação tónica recai na última sílaba.
2.  **Paroxítona:** Palavra cuja acentuação tónica recai na penúltima sílaba.
3.  **Hiato:** Sequência de duas vogais que pertencem a sílabas diferentes.
4.  **Ditongo:** Encontro de uma vogal e uma semivogal na mesma sílaba.
5.  **Prefixo:** Elemento colocado antes da raiz de uma palavra para modificar o seu sentido.
6.  **Locução:** Conjunto de duas ou mais palavras que valem por uma só (ex: locução substantiva).
7.  **Sílaba Tónica:** A sílaba pronunciada com mais força numa palavra.
8.  **Grafia:** A forma correta de escrever as palavras de acordo com as normas.

Estudem com afinco, candidatos. A farda exige brio, e o brio começa na ponta da caneta. Disciplina e bons estudos!
$lesson24$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'semantica',
  'Semântica — sinónimos e antónimos',
  $lesson25$
Bom dia, caros candidatos. Sentem-se e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). A prova de Língua Portuguesa do Ministério do Interior (MININT) não avalia apenas a vossa capacidade de ler; avalia a vossa precisão intelectual. Um oficial de polícia que não domina a semântica é um oficial que redige mal um auto de notícia, que interpreta erradamente uma ordem superior ou que compromete a instrução de um processo criminal por falta de rigor vocabular.

A semântica é o estudo do sentido das palavras e das suas relações de significado. No contexto da segurança pública, a escolha entre duas palavras aparentemente iguais pode ser a diferença entre a legalidade e o abuso de autoridade. Nesta aula, vamos dissecar os sinónimos, antónimos, parónimos, a polissemia e a homonímia, sempre com o foco no rigor que a farda exige.

---

## Introdução

A semântica é a área da linguística que se ocupa do significado das palavras, das frases e dos textos. Para um candidato ao MININT, este tema reveste-se de uma importância estratégica. A actividade policial baseia-se na comunicação escrita e oral: relatórios, depoimentos, mandados e comunicações via rádio. A ambiguidade é a maior inimiga da ordem pública. Se um agente não compreende a nuance entre "deter" e "prender", ou entre "infringir" e "infligir", poderá cometer erros processuais gravíssimos que resultam na nulidade de actos jurídicos.

Além disso, as provas de concurso público em Angola têm privilegiado a capacidade de interpretação textual e a substituição de termos sem perda de sentido. O domínio dos campos semânticos permite ao futuro efectivo da Polícia Nacional compreender a legislação vigente — como a Lei Constitucional ou o Código Penal — com a profundidade necessária para a sua aplicação prática nas ruas de Luanda, de Cabinda ao Cunene.

---

## Conceitos fundamentais

Para dominarmos a semântica, precisamos de estabelecer alicerces sólidos sobre os seguintes conceitos:

### 1. Sinonímia
Refere-se a palavras que possuem significados idênticos ou muito aproximados. É raro existirem sinónimos perfeitos, pois o contexto dita a escolha da palavra.
*   **Exemplo:** *Deter* e *Capturar*. (Ex: "A patrulha conseguiu **deter** o suspeito" / "A patrulha conseguiu **capturar** o suspeito").
*   **Nota prática:** Em relatórios oficiais, prefira termos mais formais. Em vez de "o gatuno fugiu", utilize "o meliante evadiu-se".

### 2. Antonímia
Refere-se a palavras com significados opostos ou contrários.
*   **Exemplo:** *Ordem* e *Anarquia*; *Lícito* e *Ilícito*. (Ex: "O comportamento do cidadão foi **lícito**" vs "O comportamento do cidadão foi **ilícito**").
*   **Nota prática:** O antónimo é fundamental para a classificação de condutas no Direito Penal.

### 3. Paronímia
Palavras que são parecidas na grafia e na pronúncia, mas que têm significados diferentes. Este é o campo onde ocorrem mais erros em concursos.
*   **Exemplo:** *Ratificar* (confirmar) e *Retificar* (corrigir). (Ex: "O Comandante vai **ratificar** a escala de serviço" / "O agente deve **retificar** o erro no relatório").
*   **Nota prática:** Uma letra altera completamente o sentido da ordem dada. Muita atenção à grafia.

### 4. Homonímia
Palavras que têm a mesma pronúncia (homófonas) ou a mesma grafia (homógrafas), mas significados distintos.
*   **Exemplo:** *Auto* (substantivo: documento oficial, como o "Auto de Notícia") e *Auto* (prefixo: a si próprio, como em "Auto-defesa").
*   **Nota prática:** O contexto é o único elemento que permite distinguir o sentido correto de um homónimo.

### 5. Polissemia
É a propriedade de uma palavra ter múltiplos significados dependendo do contexto, mantendo, porém, uma raiz comum de sentido.
*   **Exemplo:** *Linha*. Pode ser a "linha de frente" no patrulhamento, uma "linha telefónica" de emergência (113) ou a "linha de investigação".
*   **Nota prática:** Não confunda com homonímia. Na polissemia, os sentidos estão relacionados entre si.

### 6. Campos Semânticos
É o conjunto de palavras ligadas por um tema ou área de conhecimento.
*   **Exemplo:** Campo semântico de "Segurança Pública": *viatura, algemas, esquadra, patrulha, ordem, cidadania, crime, prevenção*.
*   **Nota prática:** Identificar o campo semântico ajuda na interpretação rápida de textos longos em provas.

---

## Aprofundamento

No estudo da semântica para concursos, devemos ter especial atenção às **nuances contextuais**.

**A) Sinónimos Absolutos vs. Relativos:**
Raramente duas palavras significam exactamente o mesmo em todos os contextos. "Falecer" e "Morrer" são sinónimos, mas num comunicado oficial do Ministério do Interior sobre um agente tombado em serviço, o termo "falecer" ou "perecer" confere a solenidade necessária, enquanto "morrer" é mais genérico.

**B) A Armadilha dos Parónimos no Contexto Policial:**
Existem pares que o candidato deve memorizar obrigatoriamente:
*   **Infligir** (aplicar castigo/pena) vs. **Infringir** (violar uma lei/regra).
*   **Eminente** (elevado, ilustre) vs. **Iminente** (que está prestes a acontecer). Ex: "O perigo de confronto era **iminente**".
*   **Deferir** (conceder, aceitar) vs. **Diferir** (adiar ou ser diferente).

**C) Homónimos e a Escrita:**
Cuidado com as palavras homófonas (som igual, escrita diferente):
*   **Cessão** (acto de ceder bens).
*   **Sessão** (tempo de uma reunião ou cinema).
*   **Secção/Seção** (divisão, departamento). Ex: "Dirija-se à **Secção** de Logística".

**D) Denotação e Conotação:**
A linguagem policial deve ser predominantemente **denotativa** (sentido literal, do dicionário). A linguagem conotativa (figurada) deve ser evitada em documentos oficiais, mas aparece frequentemente em textos literários usados nas provas de interpretação do concurso.

---

## Exemplos resolvidos

### Exemplo 1: Substituição de Termos (Sinonímia)
**Questão:** No trecho "O agente agiu com *presteza* ao imobilizar o suspeito", a palavra sublinhada pode ser substituída, sem alteração de sentido, por:
a) Lentidão
b) Rapidez
c) Hesitação
d) Violência

**Resolução passo-a-passo:**
1. Analisar o contexto: O agente imobilizou o suspeito. "Presteza" indica algo feito de forma pronta, ágil.
2. Analisar as opções: "Lentidão" e "Hesitação" são antónimos. "Violência" é uma característica da acção, mas não é sinónimo de presteza.
3. Conclusão: "Rapidez" é o termo que mantém o sentido original.
**Resposta correcta: b)**

### Exemplo 2: Paronímia e Contexto
**Questão:** Assinale a frase em que o termo entre parênteses foi aplicado correctamente:
a) O meliante agiu com muita (descrição) para não ser visto.
b) O juiz vai (infligir) a sentença ao réu amanhã.
c) O perigo de explosão era (eminente).

**Resolução passo-a-passo:**
1. Na opção (a), o correcto seria "discrição" (qualidade de quem é discreto). "Descrição" é o acto de descrever.
2. Na opção (b), "infligir" significa aplicar uma pena. Está correcto.
3. Na opção (c), "eminente" significa ilustre. O correcto para algo prestes a ocorrer é "iminente".
**Resposta correcta: b)**

### Exemplo 3: Polissemia
**Questão:** A palavra "Posto" apresenta diferentes sentidos nas frases abaixo. Identifique aquela em que se refere a uma patente militar/policial:
a) O combustível no **posto** está caro.
b) Ele foi **posto** em liberdade condicional.
c) O **Posto** de Comissário exige grande responsabilidade.

**Resolução passo-a-passo:**
1. Na frase (a), "posto" é um estabelecimento comercial.
2. Na frase (b), "posto" é o particípio do verbo pôr.
3. Na frase (c), "posto" refere-se ao cargo, à graduação na hierarquia policial.
**Resposta correcta: c)**

---

## Erros comuns a evitar

1.  **Confundir "Ao encontro de" com "De encontro a":** "Ao encontro de" significa estar de acordo; "De encontro a" significa choque, oposição. *Ex: "A viatura foi de encontro ao muro" (bateu).*
2.  **Trocar "Tráfego" por "Tráfico":** "Tráfego" refere-se ao trânsito de veículos. "Tráfico" refere-se ao comércio ilícito (tráfico de estupefacientes). Nunca escreva "tráfico de veículos" a menos que esteja a falar de contrabando de carros.
3.  **Uso indevido de "Mal" e "Mau":** "Mal" é antónimo de "Bem". "Mau" é antónimo de "Bom". *Dica: O agente agiu mal (agiu bem). Ele é um mau elemento (é um bom elemento).*
4.  **Ignorar a regência na sinonímia:** Às vezes, ao trocar um sinónimo, esquece-se que a preposição deve mudar. "Aceder ao sistema" vs. "Entrar no sistema".
5.  **Confundir "Emergir" com "Imergir":** Emergir é vir à tona (aparecer); Imergir é mergulhar (afundar).

---

## Resumo

1.  **Sinónimos** auxiliam na coesão textual e evitam a repetição viciosa em relatórios.
2.  **Antónimos** são essenciais para contrastar factos e comportamentos (legal vs. ilegal).
3.  **Parónimos** exigem atenção redobrada à grafia; uma letra errada pode invalidar o sentido jurídico de um documento.
4.  **Homonímia e Polissemia** dependem estritamente do contexto para serem interpretadas correctamente.
5.  O **Campo Semântico** da Polícia Nacional deve ser dominado para uma leitura técnica eficiente das leis e regulamentos.

---

## Glossário

1.  **Aferir:** Verificar, avaliar, comparar com um padrão (ex: aferir o bafómetro).
2.  **Diligência:** Procedimento ou investigação policial para busca de provas.
3.  **Infracção:** Violação de uma lei, norma ou regulamento.
4.  **Inquirir:** Interrogar, questionar testemunhas ou suspeitos.
5.  **Ostensivo:** Aquilo que é feito à vista de todos, para ser notado (ex: patrulhamento ostensivo).
6.  **Peculato:** Crime de desvio de dinheiro público por funcionário que o administra.
7.  **Flagrante:** Acto que é visto no momento em que ocorre.
8.  **Custódia:** Acto de guardar ou deter alguém sob protecção ou vigilância estatal.

Estudem com afinco. A farda não aceita o erro, e a vossa prova também não. Até à próxima aula.
$lesson25$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'figuras',
  'Figuras de estilo',
  $lesson26$
Bom dia, caros candidatos ao Ministério do Interior. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje não estamos aqui apenas para cumprir um programa; estamos aqui para garantir que a vossa interpretação de texto e o vosso domínio da língua portuguesa sejam ferramentas de precisão, tal como a vossa conduta deverá ser na Polícia Nacional de Angola. No rigor da vida policial, a palavra é a primeira arma de um oficial. Compreender as nuances do que é dito e do que é escrito é fundamental para a elaboração de autos de notícia, relatórios de ocorrência e para a interpretação correta das leis e directivas.

## Introdução

As figuras de estilo, também conhecidas como figuras de linguagem ou recursos retóricos, são estratégias literárias e linguísticas que o emissor utiliza para conferir maior expressividade, ênfase ou beleza à mensagem. No contexto de um concurso público para o MININT, o domínio deste tema é crucial por dois motivos principais: primeiro, porque as provas de Língua Portuguesa testam exaustivamente a vossa capacidade de distinguir o sentido literal (denotativo) do sentido figurado (conotativo); segundo, porque a interpretação de textos jurídicos e literários exige que o candidato identifique intenções que nem sempre estão explícitas na superfície do texto.

Um agente da Polícia Nacional que não saiba identificar uma ironia ou um eufemismo num depoimento pode comprometer a veracidade de uma investigação. Da mesma forma, a compreensão de metáforas e antíteses em discursos oficiais permite uma leitura mais profunda das orientações estratégicas do Comando Geral. Nesta aula, abordaremos as figuras de pensamento, de sintaxe e de som, sempre com o foco no rigor exigido pela vossa futura carreira.

---

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de alicerces sólidos. Vamos focar-nos nos conceitos que mais frequentemente surgem nas provas de acesso à função pública em Angola.

### 1. Metáfora
É a substituição de um termo por outro, baseada numa relação de semelhança implícita, sem o uso de partículas comparativas (como "como", "tal qual").
*   **Exemplo:** "Aquele oficial é um leão na defesa da pátria."
*   **Nota prática:** Diferencia-se da comparação porque a metáfora afirma que algo *é*, enquanto a comparação diz que algo *é como*.

### 2. Metonímia
Ocorre quando se substitui um termo por outro com o qual mantém uma relação de proximidade ou contiguidade (a parte pelo todo, o continente pelo conteúdo, o autor pela obra).
*   **Exemplo:** "A esquadra toda manteve-se em silêncio." (Aqui, "esquadra" substitui os polícias que lá trabalham).
*   **Nota prática:** É muito comum na linguagem administrativa e militar para designar instituições pelos seus edifícios ou símbolos.

### 3. Hipérbole
Consiste no uso de uma expressão exagerada para enfatizar uma ideia ou realidade.
*   **Exemplo:** "Já te disse mil vezes para não estacionares em local proibido!"
*   **Nota prática:** Em relatórios oficiais, a hipérbole deve ser evitada, mas é vital reconhecê-la em depoimentos de civis sob stress emocional.

### 4. Eufemismo
É o recurso utilizado para suavizar uma expressão que possa ser considerada desagradável, chocante ou rude.
*   **Exemplo:** "O suspeito faltou à verdade perante o instrutor do processo." (Em vez de dizer que o suspeito mentiu).
*   **Nota prática:** É uma figura essencial na diplomacia policial e no trato com o público para manter a urbanidade.

### 5. Personificação (ou Prosopopeia)
Atribuição de características, sentimentos ou ações humanas a seres inanimados ou irracionais.
*   **Exemplo:** "As sirenes gritavam desesperadas pelas ruas de Luanda."
*   **Nota prática:** Muito utilizada em textos literários e crónicas jornalísticas sobre a segurança pública.

### 6. Antítese
Aproximação de palavras ou ideias com sentidos opostos para realçar o contraste.
*   **Exemplo:** "A Polícia Nacional trabalha no **dia** e na **noite** para garantir a paz."
*   **Nota prática:** Serve para enfatizar a abrangência de uma ação ou a dualidade de uma situação.

---

## Aprofundamento

Vamos agora elevar o nível da nossa análise. No contexto das provas do MININT, o examinador não quer apenas que saibam o nome da figura; ele quer que compreendam a sua função sintático-semântica.

### Litote: A Afirmação pela Negação
O litote é, de certa forma, o oposto da hipérbole e um parente próximo do eufemismo. Consiste em afirmar algo negando o seu contrário. 
*   **Exemplo:** "O trabalho do agente não foi nada mau." (Significa que foi bom ou muito bom).
*   **Contexto Técnico:** É usado para manter a modéstia ou para suavizar uma crítica, sendo recorrente em pareceres de avaliação de desempenho.

### Ironia: O Sentido Inverso
A ironia consiste em dizer o contrário do que se pensa, geralmente com uma intenção crítica ou humorística. A sua identificação depende totalmente do contexto.
*   **Exemplo:** "Excelente trabalho!", disse o comandante ao ver a viatura suja e mal cuidada.
*   **Atenção:** Na prova, a ironia é frequentemente detetada através de aspas ou de um tom que contradiz a lógica da situação descrita no texto.

### Aliteração e Anáfora: Recursos de Ênfase
*   **Aliteração:** Repetição de sons consonânticos. Exemplo: "O **p**olícia **p**atrulha o **p**erímetro com **p**rudência." Isto cria um ritmo que auxilia na memorização de lemas.
*   **Anáfora:** Repetição de uma palavra ou expressão no início de frases ou versos sucessivos. 
    *   *Exemplo:* "**Pela** ordem, **pela** paz, **pela** segurança do cidadão."
    *   *Uso:* Muito comum em discursos políticos e em preâmbulos de leis para conferir solenidade e autoridade ao texto.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a figura de estilo presente na frase: *"O efetivo da PN é o braço forte da lei em Angola."*
*   **Resolução:** Trata-se de uma **Metáfora**. 
*   **Raciocínio:** Não existe um braço físico de carne e osso que pertença à "lei". Faz-se uma analogia implícita entre a força e a proteção de um braço humano e a capacidade coerciva da Polícia Nacional. Não há partícula comparativa, logo, é metáfora.

**Exercício 2:** Analise a frase: *"Bebemos uma Cuca para celebrar a promoção."*
*   **Resolução:** Trata-se de uma **Metonímia**.
*   **Raciocínio:** Ninguém bebe a marca (Cuca), bebe-se o produto (a cerveja). Substituiu-se o produto pela marca. É uma relação de contiguidade.

**Exercício 3:** Qual a figura de estilo em: *"A morte levou o valoroso agente para o descanso eterno."*
*   **Resolução:** Temos aqui um **Eufemismo** (e também uma personificação).
*   **Raciocínio:** "Descanso eterno" é uma forma suave de dizer que o agente faleceu. O objetivo é tratar um tema doloroso com respeito e menos crueza.

---

## Erros comuns a evitar

1.  **Confundir Metáfora com Comparação:** Se a frase tiver "como", "parece" ou "tal qual", é comparação. Se não tiver, e for uma afirmação direta de identidade figurada, é metáfora.
2.  **Ignorar o Contexto na Ironia:** Muitos candidatos interpretam frases irónicas de forma literal, errando a questão de interpretação de texto. Leiam sempre o parágrafo anterior e o posterior.
3.  **Confundir Antítese com Paradoxo:** A antítese opõe palavras (claro/escuro). O paradoxo opõe ideias que se excluem logicamente numa mesma unidade (ex: "um fogo que arrefece"). O paradoxo é mais profundo e "impossível" na realidade.
4.  **Trocar Metonímia por Metáfora:** Lembrem-se: a metáfora baseia-se na **semelhança**; a metonímia baseia-se na **relação real** (causa/efeito, marca/produto, parte/todo).
5.  **Subestimar a Anáfora:** Em textos de leis, a repetição de termos no início de artigos não é falta de vocabulário, é uma anáfora propositada para garantir a clareza jurídica.

---

## Resumo

1.  **Figuras de Estilo** são recursos que tornam a linguagem mais rica e expressiva, essenciais para a interpretação de textos em concursos.
2.  **Metáfora e Metonímia** são as rainhas das provas; a primeira compara sem o "como", a segunda substitui termos com ligação lógica.
3.  **Eufemismo e Hipérbole** lidam com a intensidade: um suaviza, o outro exagera.
4.  **Ironia** exige atenção redobrada ao contexto e à intenção do autor, sendo comum em crónicas e textos de opinião.
5.  **Antítese e Anáfora** são recursos de estruturação que conferem força e clareza ao discurso institucional e jurídico.

---

## Glossário

*   **Conotativo:** Sentido figurado, subjetivo, que depende do contexto.
*   **Denotativo:** Sentido literal, real, do dicionário.
*   **Semântica:** Estudo do significado das palavras e das mudanças de sentido.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Retórica:** Arte de bem falar, de usar a linguagem para convencer ou influenciar.
*   **Inanimado:** Ser que não tem vida própria (objetos, conceitos abstratos).
*   **Contiguidade:** Relação de proximidade ou dependência entre dois conceitos (base da metonímia).
*   **Coercivo:** Que tem poder de impor pena ou castigo; relativo à força da lei.

Estudem com afinco, candidatos. A farda que pretendem envergar exige um espírito esclarecido e uma mente capaz de decifrar as entrelinhas da realidade angolana. 

**Força e Honra!**
$lesson26$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'redaccao',
  'Redacção oficial e ofícios',
  $lesson27$
# AULA COMPLETA: REDACÇÃO OFICIAL E OFÍCIOS
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção oficial é um instrumento fundamental na administração pública angolana. No contexto do Ministério do Interior, a capacidade de redigir com clareza, precisão e conformidade com as normas estabelecidas é absolutamente essencial. Quer se trate de um ofício dirigido a entidades congéneres, de um memorando interno ou de uma circular de difusão, a qualidade da comunicação escrita reflecte a eficiência e o profissionalismo da instituição. Neste concurso público, espera-se que demonstrem domínio pleno das estruturas e convenções que regem a correspondência administrativa em Angola.

A prova de redacção oficial não avalia apenas a correção gramatical — embora esta seja fundamental — mas também a capacidade de organizar ideias de forma lógica, de adaptar o registo linguístico ao contexto institucional e de cumprir rigorosamente as normas de formatação e protocolo. Compreender a diferença entre um ofício, um memorando e uma circular, bem como dominar as regras de estruturação e as fórmulas de cortesia apropriadas, pode fazer a diferença entre uma classificação excelente e uma classificação medíocre. Portanto, dediquem-se com seriedade a esta matéria.

---

## Conceitos Fundamentais

### 1. **Ofício**

**Definição:** O ofício é um documento oficial de comunicação entre entidades públicas ou entre uma entidade pública e um particular, utilizado para transmitir informações, solicitações, respostas ou decisões de carácter formal e protocolar.

**Exemplo concreto:** Um ofício do MININT dirigido à Polícia Nacional Angolana solicitando informações sobre um processo administrativo, ou um ofício da Direcção Nacional de Migração comunicando uma decisão sobre um pedido de visto.

**Nota prática:** O ofício é o documento mais formal e protocolar. Deve incluir sempre: local e data, número de referência, destinatário, assunto, corpo do texto, fórmula de encerramento e assinatura. Não deve ser nunca demasiado extenso — idealmente, uma página.

---

### 2. **Memorando**

**Definição:** O memorando é um documento de comunicação interna, utilizado para transmitir informações, instruções ou solicitações entre departamentos ou entre superiores e subordinados dentro da mesma instituição.

**Exemplo concreto:** Um memorando do Director do Departamento de Segurança Interna dirigido aos chefes de secção, informando sobre a implementação de um novo procedimento de registo de ocorrências.

**Nota prática:** O memorando é menos formal que o ofício, mas mantém rigor. Pode ser mais conciso e directo. Não requer fórmulas de cortesia tão elaboradas como o ofício. Deve incluir: destinatário, remetente, data, assunto e corpo do texto.

---

### 3. **Circular**

**Definição:** A circular é um documento de difusão interna ou externa, destinado a comunicar informações, normas ou instruções a múltiplos destinatários simultaneamente.

**Exemplo concreto:** Uma circular do MININT dirigida a todas as delegações provinciais, comunicando a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Nota prática:** A circular deve ser clara e objectiva. Começa com uma fórmula de abertura genérica ("Aos Senhores Directores Provinciais") e deve ser numerada e datada. Não é dirigida a um destinatário específico, mas a um conjunto de entidades.

---

### 4. **Exposição de Motivos**

**Definição:** A exposição de motivos é um documento que apresenta, de forma fundamentada e estruturada, as razões, justificações e argumentos que sustentam uma proposta, um pedido ou uma decisão administrativa.

**Exemplo concreto:** Uma exposição de motivos apresentada pelo MININT ao Conselho de Ministros justificando a necessidade de reforço de efectivos nas fronteiras, com dados estatísticos e análise de risco.

**Nota prática:** A exposição de motivos deve ser rigorosa, bem documentada e persuasiva. Segue uma estrutura lógica: introdução, apresentação do problema, análise, propostas e conclusão. Deve citar legislação relevante e dados concretos.

---

### 5. **Registo de Protocolo**

**Definição:** O registo de protocolo é o sistema de numeração e arquivo que garante a rastreabilidade e o controlo de todos os documentos oficiais que entram e saem de uma instituição.

**Exemplo concreto:** Um ofício recebe o número "MININT/DGS/2024/001" que indica: ministério, departamento, ano e número sequencial.

**Nota prática:** Cada instituição tem o seu próprio sistema de protocolo. No MININT, deve familiarizar-se com o formato específico utilizado. Este número deve constar no cabeçalho do documento.

---

### 6. **Fórmulas de Cortesia e Encerramento**

**Definição:** São expressões padronizadas que abrem e fecham documentos oficiais, respeitando protocolos de hierarquia e formalidade.

**Exemplo concreto:** 
- Abertura: "Excelentíssimo Senhor Ministro do Interior"
- Encerramento: "Respeitosamente submetido" ou "Com elevada consideração"

**Nota prática:** A escolha da fórmula depende do destinatário e do grau de formalidade. Para autoridades de topo, use "Excelentíssimo Senhor". Para colegas, "Prezado Colega" é apropriado. O encerramento deve ser sempre respeitoso e formal.

---

## Aprofundamento

### Estrutura Completa do Ofício

Um ofício bem estruturado segue esta ordem:

1. **Cabeçalho institucional:** Logótipo e nome da instituição
2. **Local e data:** "Luanda, 15 de Março de 2024"
3. **Número de referência:** "Ofício nº MININT/DGS/2024/045"
4. **Destinatário:** Nome completo, cargo e instituição
5. **Assunto:** Breve descrição do tema (máximo uma linha)
6. **Saudação:** "Excelentíssimo Senhor" ou equivalente
7. **Corpo do texto:** Dividido em parágrafos lógicos
8. **Encerramento:** Fórmula apropriada
9. **Assinatura:** Nome, cargo e data

### Regras de Redacção Oficial

**Clareza:** Cada frase deve transmitir uma ideia completa. Evite ambiguidades.

**Concisão:** Não use dez palavras quando cinco são suficientes. Elimine redundâncias.

**Objectividade:** Vá directo ao assunto. Não inclua informações desnecessárias.

**Correção gramatical:** Respeite rigorosamente as regras de ortografia, pontuação e concordância.

**Registo formal:** Utilize vocabulário apropriado ao contexto administrativo. Evite gírias, coloquialismos ou expressões muito informais.

**Estrutura lógica:** Organize as ideias de forma sequencial e coerente. Utilize conectores apropriados ("Portanto", "Consequentemente", "Por outro lado").

### Exemplo de Estrutura de Parágrafo Oficial

```
Primeiro parágrafo: Apresentação do assunto e contexto
Parágrafos intermédios: Desenvolvimento, argumentação, detalhes
Último parágrafo: Conclusão, solicitação ou decisão
```

---

## Exemplos Resolvidos

### Exemplo 1: Ofício de Solicitação de Informação

**Situação:** Você trabalha na Direcção de Segurança Interna do MININT e precisa solicitar informações à Polícia Nacional sobre um processo de investigação.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Direcção de Segurança Interna

Luanda, 20 de Março de 2024

Ofício nº MININT/DSI/2024/078

Excelentíssimo Senhor
Comandante-Geral da Polícia Nacional
Luanda

ASSUNTO: Solicitação de informações sobre processo de investigação nº PNA/2024/456

Excelentíssimo Senhor Comandante-Geral,

No âmbito das competências atribuídas a esta Direcção de Segurança Interna, 
solicitamos a Vossa Excelência o envio de informações detalhadas sobre o processo 
de investigação nº PNA/2024/456, relativo ao caso de falsificação de documentos 
de identificação.

Especificamente, requeremos:
a) Relatório técnico da investigação;
b) Listagem de suspeitos identificados;
c) Cronograma das diligências efectuadas;
d) Previsão de conclusão do processo.

Estas informações são necessárias para a elaboração de um parecer técnico que 
será submetido ao Conselho de Ministros, no contexto da avaliação de políticas 
de segurança interna.

Agradecemos antecipadamente a colaboração de Vossa Excelência e ficamos à 
disposição para qualquer esclarecimento adicional.

Respeitosamente submetido,

[Assinatura]
Dr. João Silva
Director de Segurança Interna
```

**Análise:** Este ofício segue rigorosamente a estrutura. Note-se: (1) o cabeçalho institucional; (2) a data e número de referência; (3) a saudação apropriada para uma autoridade de topo; (4) o assunto claro e conciso; (5) o corpo dividido em parágrafos lógicos; (6) o uso de alíneas para maior clareza; (7) a justificação da solicitação; (8) o encerramento formal; (9) a assinatura com identificação completa.

---

### Exemplo 2: Memorando Interno

**Situação:** O Director do Departamento de Recursos Humanos do MININT necessita informar os chefes de secção sobre a implementação de um novo sistema de registo de assiduidade.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Departamento de Recursos Humanos

MEMORANDO

PARA: Chefes de Secção
DE: Dr. António Neves, Director de Recursos Humanos
DATA: 18 de Março de 2024
ASSUNTO: Implementação do novo sistema de registo de assiduidade

---

Informamos que, a partir de 1 de Abril de 2024, entrará em vigor o novo 
sistema de registo de assiduidade (SIRA 2.0) em todas as unidades do MININT.

Este sistema substitui o anterior e apresenta as seguintes melhorias:
• Registo biométrico automático
• Relatórios em tempo real
• Integração com o sistema de folha de pagamento
• Redução de erros administrativos

Solicitamos que:
1. Informem todos os colaboradores da sua secção sobre esta mudança;
2. Participem na sessão de formação (datas a confirmar);
3. Designem um responsável pelo suporte técnico local.

Qualquer dúvida ou sugestão deve ser comunicada a este departamento até 
25 de Março.

Atenciosamente,

[Assinatura]
Dr. António Neves
Director de Recursos Humanos
```

**Análise:** Este memorando é menos formal que o ofício, mas mantém rigor. Note-se: (1) o cabeçalho simplificado; (2) o uso de "PARA/DE/DATA/ASSUNTO" em vez de endereçamento formal; (3) a linguagem mais directa; (4) o uso de alíneas e numeração para clareza; (5) a ausência de fórmulas de cortesia elaboradas; (6) a conclusão com um prazo claro.

---

### Exemplo 3: Circular

**Situação:** O MININT necessita comunicar a todas as delegações provinciais a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Gabinete do Ministro

CIRCULAR Nº MININT/GM/2024/012

Luanda, 22 de Março de 2024

Aos Senhores Directores Provinciais do MININT
Aos Senhores Chefes de Delegação Municipal

ASSUNTO: Entrada em vigor do Regulamento de Procedimentos de Identificação Civil

---

Informamos que, a partir de 1 de Abril de 2024, entra em vigor o novo 
Regulamento de Procedimentos de Identificação Civil, aprovado por Despacho 
Ministerial nº 045/2024, de 15 de Março.

Este regulamento estabelece novos procedimentos para:
• Emissão de cartões de identificação
• Processamento de pedidos de nacionalidade
• Verificação de antecedentes
• Prazos de resposta aos cidadãos

As principais alterações são:
1. Redução do prazo de emissão de 30 para 15 dias úteis
2. Implementação de sistema de agendamento online
3. Reforço dos controlos de segurança
4. Criação de balcão de atendimento prioritário para maiores de 65 anos

Solicitamos que:
• Divulguem este regulamento a todos os colaboradores
• Adaptem os procedimentos locais em conformidade
• Reportem qualquer dificuldade de implementação
• Participem na sessão de esclarecimento (videoconferência, 28 de Março, 14h00)

Cópias do regulamento completo encontram-se em anexo e no portal interno.

Atenciosamente,

[Assinatura]
Eng. José Fernandes
Ministro do Interior
```

**Análise:** Esta circular segue o padrão apropriado: (1) numeração clara; (2) endereçamento genérico a múltiplos destinatários; (3) assunto bem definido; (4) informação estruturada em alíneas; (5) instruções claras; (6) referência a documentação complementar; (7) assinatura de autoridade de topo.

---

## Erros Comuns a Evitar

### 1. **Falta de Clareza no Assunto**
❌ **Errado:** "Assunto: Vários assuntos"
✅ **Correcto:** "Assunto: Solicitação de informações sobre processo de investigação nº PNA/2024/456"

**Explicação:** O assunto deve ser específico e permitir ao leitor compreender imediatamente o conteúdo do documento.

---

### 2. **Uso Incorrecta de Fórmulas de Cortesia**
❌ **Errado:** "Prezado Senhor Ministro" (para um ofício oficial)
✅ **Correcto:** "Excelentíssimo Senhor Ministro"

**Explicação:** A fórmula deve corresponder ao grau de formalidade e à hierarquia do destinatário. Para autoridades de topo, use sempre "Excelentíssimo Senhor".

---

### 3. **Parágrafos Demasiado Longos e Confusos**
❌ **Errado:** Um parágrafo com 10 linhas contendo múltiplas ideias desconexas.
✅ **Correcto:** Parágrafos curtos (3-5 linhas), cada um com uma ideia central clara
$lesson27$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'relatorio',
  'Relatório e acta',
  $lesson28$
# AULA COMPLETA: RELATÓRIO E ACTA
## Módulo de Língua Portuguesa para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção de relatórios e actas constitui uma das competências fundamentais exigidas nos concursos públicos do Ministério do Interior de Angola. Estes documentos não são meros registos burocráticos; são instrumentos legais que documentam decisões, procedimentos e factos ocorridos em contextos administrativos e institucionais. No âmbito do MININT, seja em departamentos de segurança, administração ou gestão de recursos humanos, a capacidade de elaborar estes textos com rigor, clareza e conformidade com as normas estabelecidas é absolutamente essencial.

A importância desta matéria para o vosso concurso reside no facto de que a prova de Língua Portuguesa avalia não apenas a vossa competência gramatical, mas também a vossa capacidade de comunicação profissional e administrativa. Os avaliadores procuram candidatos que dominem a estrutura formal, a linguagem técnica apropriada e as convenções que regem estes documentos. Além disso, durante o exercício das funções no MININT, serão frequentemente chamados a redigir relatórios de actividades, actas de reuniões e minutas de decisões. Por isso, dominar esta competência é investir directamente na vossa carreira profissional.

---

## Conceitos Fundamentais

### 1. **Relatório: Definição e Propósito**

**Definição:** Um relatório é um documento formal que apresenta informações, análises e conclusões sobre um assunto específico, dirigido a uma autoridade ou entidade superior. Tem como objectivo informar, justificar acções, apresentar resultados ou propor soluções.

**Exemplo concreto:** Um inspector do MININT elabora um relatório sobre a fiscalização realizada numa esquadra de polícia em Luanda, descrevendo as irregularidades encontradas, as medidas correctivas necessárias e recomendações para melhorar o funcionamento.

**Nota prática:** O relatório deve ser objectivo, factual e fundamentado em dados concretos. Nunca deve conter opiniões pessoais não justificadas ou linguagem emotiva.

---

### 2. **Acta: Definição e Função**

**Definição:** Uma acta é um documento que regista, de forma resumida mas completa, os assuntos tratados, as decisões tomadas e os acordos estabelecidos durante uma reunião, assembleia ou sessão oficial.

**Exemplo concreto:** Após uma reunião de coordenação entre departamentos do MININT sobre implementação de novos procedimentos de segurança, elabora-se uma acta que regista: data, local, participantes, ordem de trabalhos, deliberações e responsáveis pelas tarefas definidas.

**Nota prática:** A acta é um documento com valor legal. Deve ser precisa, imparcial e registar apenas factos verificados, não interpretações subjectivas.

---

### 3. **Minuta: Definição e Características**

**Definição:** Uma minuta é um documento preliminar, um rascunho ou esboço de um texto oficial (decreto, portaria, resolução) que será posteriormente revisto, aprovado e formalizado. Serve como base para discussão e aperfeiçoamento.

**Exemplo concreto:** O MININT prepara uma minuta de portaria sobre novas normas de funcionamento das esquadras. Esta minuta é distribuída aos departamentos para análise, sugestões e críticas antes da versão final ser assinada pelo Ministro.

**Nota prática:** A minuta não é um documento definitivo. Deve indicar claramente que se trata de um documento em elaboração e estar aberta a sugestões e alterações.

---

### 4. **Linguagem Formal e Registro Administrativo**

**Definição:** É o conjunto de características linguísticas que caracterizam a comunicação oficial e administrativa: vocabulário técnico, estrutura sintáctica complexa, ausência de coloquialismos e respeito pelas normas gramaticais.

**Exemplo concreto:** Em vez de escrever "A polícia foi lá e viu que as coisas não estavam bem", escreve-se: "A inspecção realizada constatou irregularidades no cumprimento dos procedimentos estabelecidos."

**Nota prática:** O registo formal exige concordância rigorosa, uso correcto de tempos verbais (preferencialmente pretérito perfeito para factos passados) e estruturas sintácticas bem definidas.

---

### 5. **Estrutura Formal de um Documento Oficial**

**Definição:** É a organização padronizada dos elementos que compõem um documento administrativo: cabeçalho, identificação, corpo, assinatura e anexos.

**Exemplo concreto:** Um relatório do MININT deve incluir: timbre institucional, número de referência, data, destinatário, assunto, corpo do relatório com introdução/desenvolvimento/conclusão, assinatura e carimbo.

**Nota prática:** A estrutura formal garante que o documento seja reconhecido como oficial e facilita o seu arquivo e consulta posterior.

---

### 6. **Rigor Factual e Verificabilidade**

**Definição:** É a obrigação de que todos os dados, números, datas e factos mencionados sejam exactos, verificáveis e fundamentados em fontes confiáveis.

**Exemplo concreto:** Ao relatar que "foram realizadas 47 inspecções em Março de 2024", este número deve corresponder exactamente aos registos disponíveis. Qualquer discrepância compromete a credibilidade do documento.

**Nota prática:** Sempre que possível, cite fontes, anexe documentos comprovativos e mantenha registos que permitam verificação posterior.

---

## Aprofundamento

### Estrutura Detalhada do Relatório

Um relatório bem estruturado segue este modelo:

**1. Cabeçalho Institucional**
- Timbre do MININT ou departamento responsável
- Número de referência ou protocolo
- Data de elaboração

**2. Identificação**
- Destinatário (a quem se dirige)
- Remetente (quem elabora)
- Assunto (título claro e conciso)

**3. Introdução**
- Contextualização do tema
- Justificação do relatório
- Objectivos específicos
- Período abrangido (se aplicável)

**4. Desenvolvimento**
- Apresentação factual dos dados
- Análise estruturada por tópicos
- Fundamentação com evidências
- Descrição de metodologia (se relevante)

**5. Conclusões**
- Síntese dos achados principais
- Resposta aos objectivos propostos
- Avaliação geral da situação

**6. Recomendações**
- Sugestões de acções correctivas
- Propostas de melhorias
- Responsáveis pelas implementações

**7. Assinatura e Carimbo**
- Nome completo do autor
- Cargo/função
- Data
- Carimbo institucional

### Exemplo de Linguagem Apropriada

**Incorreto (coloquial):**
"Fomos lá e vimos que tudo estava bagunçado. Os rapazes não estavam a fazer bem o trabalho deles."

**Correcto (formal):**
"A inspecção realizada constatou deficiências significativas na organização dos procedimentos administrativos. Verificou-se que o pessoal não cumpria adequadamente os protocolos estabelecidos."

### Regras Gramaticais Essenciais

- **Concordância:** "O relatório e a acta foram elaborados" (não "foi elaborados")
- **Tempos verbais:** Preferencialmente pretérito perfeito para factos passados: "Realizou-se a reunião em 15 de Março"
- **Voz passiva:** Frequente em textos administrativos: "Foi decidido que..." em vez de "Decidimos que..."
- **Pontuação:** Uso correcto de vírgulas em enumerações e períodos complexos

---

## Exemplos Resolvidos

### Exemplo 1: Relatório de Inspecção

**Situação:** Um inspector do MININT realizou uma inspecção numa esquadra de polícia e deve elaborar um relatório.

**Resolução:**

---

**MINISTÉRIO DO INTERIOR**
**DIRECÇÃO NACIONAL DE POLÍCIA**

**RELATÓRIO DE INSPECÇÃO**

**Referência:** DNPOL/2024/0347
**Data:** 18 de Março de 2024
**Destinatário:** Director Nacional de Polícia
**Remetente:** Inspector João da Silva
**Assunto:** Inspecção à Esquadra de Polícia de Viana – Conformidade com Normas de Funcionamento

---

**INTRODUÇÃO**

No cumprimento do plano de inspecções do corrente ano, foi realizada uma visita de avaliação à Esquadra de Polícia de Viana, no período de 11 a 15 de Março de 2024. O objectivo desta inspecção foi verificar o cumprimento das normas estabelecidas no Manual de Procedimentos Administrativos e avaliar as condições de funcionamento da unidade.

**DESENVOLVIMENTO**

1. **Recursos Humanos**
   - Efectivo autorizado: 24 elementos
   - Efectivo presente: 22 elementos
   - Constatou-se que dois elementos se encontravam em licença médica, devidamente documentada
   - O pessoal apresenta-se adequadamente uniformizado e preparado

2. **Infraestruturas**
   - As instalações encontram-se em bom estado de conservação
   - Identificou-se necessidade de reparação da cobertura do pátio traseiro (infiltrações)
   - Os equipamentos informáticos funcionam adequadamente

3. **Documentação e Registos**
   - Os livros de ocorrências estão correctamente preenchidos
   - Verificou-se conformidade com os prazos de arquivo de documentos
   - Detectou-se pequena deficiência no preenchimento de um formulário de denúncia (falta de data)

**CONCLUSÕES**

A Esquadra de Polícia de Viana funciona de forma satisfatória, demonstrando conformidade geral com as normas estabelecidas. O pessoal mostra-se motivado e organizado. As deficiências identificadas são de carácter menor e facilmente corrigíveis.

**RECOMENDAÇÕES**

1. Proceder à reparação da cobertura do pátio traseiro no prazo de 30 dias
2. Reforçar a formação do pessoal sobre preenchimento correcto de formulários
3. Realizar nova inspecção em Setembro de 2024

---

**Assinado:**
Inspector João da Silva
Cédula: 00123456789
Data: 18 de Março de 2024
[Carimbo]

---

### Exemplo 2: Acta de Reunião

**Situação:** Reunião de coordenação entre departamentos do MININT sobre implementação de novo sistema de segurança.

**Resolução:**

---

**ACTA Nº 012/2024**

**MINISTÉRIO DO INTERIOR**
**REUNIÃO DE COORDENAÇÃO INTERDEPARTAMENTAL**

**Data:** 20 de Março de 2024
**Hora de início:** 09h30
**Hora de encerramento:** 11h45
**Local:** Sala de Conferências, Piso 3, Edifício Central

**PARTICIPANTES:**
- Dr. Manuel Ferreira (Director de Segurança) – Presidente
- Eng. Carla Mendes (Departamento de Tecnologia)
- Dr. Paulo Neves (Departamento Jurídico)
- Dra. Amélia Costa (Recursos Humanos)
- Sr. Joaquim Lopes (Segurança Operacional)

**ORDEM DE TRABALHOS:**
1. Apresentação do novo sistema de segurança integrada
2. Cronograma de implementação
3. Responsabilidades departamentais
4. Orçamento e recursos
5. Assuntos diversos

**DELIBERAÇÕES:**

1. **Apresentação do Sistema:** Eng. Carla Mendes apresentou o novo sistema de segurança integrada, com demonstração prática. O sistema foi considerado adequado aos objectivos institucionais.

2. **Cronograma:** Aprovou-se o seguinte cronograma:
   - Fase 1 (Piloto): Abril a Maio de 2024
   - Fase 2 (Expansão): Junho a Agosto de 2024
   - Fase 3 (Consolidação): Setembro a Outubro de 2024

3. **Responsabilidades:**
   - Eng. Carla Mendes: Coordenação técnica geral
   - Dr. Paulo Neves: Conformidade legal e regulatória
   - Dra. Amélia Costa: Formação do pessoal
   - Sr. Joaquim Lopes: Testes operacionais

4. **Orçamento:** Aprovado orçamento de 2.500.000 Kz para a implementação completa.

5. **Próxima Reunião:** Agendada para 10 de Abril de 2024, às 10h00, para avaliação da Fase 1.

**ASSINATURAS:**

Dr. Manuel Ferreira _________________ Data: 20/03/2024
(Presidente)

Eng. Carla Mendes _________________ Data: 20/03/2024

Dr. Paulo Neves _________________ Data: 20/03/2024

Dra. Amélia Costa _________________ Data: 20/03/2024

Sr. Joaquim Lopes _________________ Data: 20/03/2024

---

### Exemplo 3: Minuta de Portaria

**Situação:** Elaboração de minuta de portaria sobre normas de funcionamento de esquadras.

**Resolução:**

---

**MINUTA DE PORTARIA**
**[DOCUMENTO EM ELABORAÇÃO – SUJEITO A REVISÃO]**

**Referência:** MININT/2024/MIN-PORT-0089
**Data de Elaboração:** 18 de Março de 2024
**Departamento Responsável:** Direcção de Administração e Gestão

---

**PORTARIA Nº ___/2024**

**Assunto:** Normas de Funcionamento das Esquadras de Polícia

O Ministro do Interior, considerando:

a) A necessidade de uniformizar procedimentos nas esquadras de polícia em todo o território nacional;
b) A importância de garantir qualidade no atendimento ao público;
c) O cumprimento das obrigações estabelecidas na Lei de Segurança Pública;

**DETERMINA:**

**Artigo 1º – Âmbito de Aplicação**
As presentes normas aplicam-se a todas as esquadras de polícia sob jurisdição do Ministério do Interior.

**Artigo 2º – Horário de Funcionamento**
1. As esquadras funcionarão em regime de 24 horas, com turnos de 8 horas.
2. O atendimento ao público realizar-se-á entre as 07h00 e as 19h00, de segunda a sexta-feira.

**Artigo 3º – Pessoal**
1. Cada esquadra terá um efectivo mínimo de 20 elementos.
2. O pessoal deverá estar adequadamente uniformizado e identificado.

**Artigo 4º – Documentação**
1. Todos os registos deverão ser efectuados em livros próprios ou sistema informático autorizado.
2. Os prazos de arquivo serão os estabelecidos no Manual de Procedimentos.

**Artigo 5º – Disposições Finais**
1. A presente portaria entra em vigor 30 dias após a sua publicação.
2. Revoga todas as disposições anteriores que se lhe oponham.

---
$lesson28$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sme',
  'portugues',
  'vocabulario',
  'Vocabulário técnico policial',
  $lesson29$
# AULA: VOCABULÁRIO TÉCNICO POLICIAL
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A preparação para um concurso público no Ministério do Interior exige não apenas conhecimento das leis e regulamentos, mas também o domínio de um vocabulário técnico específico que caracteriza a actividade policial e de segurança interna em Angola. O vocabulário técnico policial não é um simples conjunto de palavras; é, antes, um sistema de comunicação preciso e rigoroso que garante a clareza nas operações, a uniformidade nos relatórios e a compreensão exacta entre os profissionais de segurança. Quando um agente da Polícia Nacional Angolana (PNA) redige um auto de detenção, quando coordena uma operação de patrulhamento ou quando comunica com a hierarquia, utiliza termos que têm significados muito específicos e legalmente vinculativos.

Nesta aula, vamos explorar os termos fundamentais da actividade policial angolana, compreendendo não apenas as suas definições, mas também o seu contexto de utilização e as implicações práticas. Este conhecimento será decisivo na prova escrita do concurso, particularmente nas questões de compreensão de textos oficiais, redacção de relatórios e interpretação de legislação. Além disso, demonstrará ao júri que você compreende a cultura institucional e a linguagem profissional do MININT.

---

## Conceitos Fundamentais

### 1. **Detenção vs. Prisão**

**Definição clara:**
A detenção é o acto de impedir a liberdade de circulação de uma pessoa por um período limitado (até 24 horas, conforme o Código de Processo Penal angolano), enquanto a prisão é uma medida de coação mais grave, decretada por autoridade judicial, que pode ter duração prolongada.

**Exemplo concreto:**
Um polícia detém um indivíduo suspeito de roubo durante uma operação de patrulhamento na Baixa de Luanda. Essa detenção não pode exceder 24 horas. Se, após investigação, existirem indícios suficientes, o Ministério Público pode requerer a prisão preventiva ao tribunal, que pode durar até 90 dias.

**Nota prática:**
Na redacção de relatórios, é fundamental distinguir estes termos. Usar "prisão" quando se refere a "detenção" constitui um erro grave que pode invalidar procedimentos legais.

---

### 2. **Flagrante Delito**

**Definição clara:**
Flagrante delito é a situação em que uma pessoa é apanhada no acto de cometer um crime ou imediatamente após, com evidência clara da sua autoria. É uma circunstância que permite a detenção sem mandado judicial.

**Exemplo concreto:**
Um agente da PNA observa um indivíduo a assaltar uma loja no Sambizanga. O polícia intervém e detém o suspeito no local, com a mercadoria roubada ainda na sua posse. Esta é uma situação de flagrante delito, que justifica a detenção imediata.

**Nota prática:**
O flagrante delito é uma das poucas situações em que a polícia pode actuar sem mandado. Contudo, deve ser documentado com precisão no auto de detenção, incluindo hora, local, testemunhas e descrição exacta do que foi observado.

---

### 3. **Revista e Revista Pessoal**

**Definição clara:**
A revista é o acto de inspecção de bens, veículos ou locais para procura de objectos ilícitos ou provas de crime. A revista pessoal é a inspecção do corpo de uma pessoa, realizada com respeito pela dignidade humana e, preferencialmente, por agente do mesmo sexo.

**Exemplo concreto:**
Durante uma operação de segurança no Kilamba, agentes da PNA efectuam revista de veículos em pontos de controlo. Num desses veículos, encontram armas ilegais. Posteriormente, realizam revista pessoal ao condutor, sendo esta efectuada por um agente do mesmo sexo, respeitando os direitos fundamentais.

**Nota prática:**
A revista deve ser sempre documentada. Qualquer objecto apreendido deve ser registado em auto próprio, com descrição detalhada, assinatura de testemunhas e identificação clara do agente responsável.

---

### 4. **Apreensão e Depósito**

**Definição clara:**
Apreensão é o acto de tomar posse de bens relacionados com a prática de crime ou que constituem instrumentos ou produtos de crime. O depósito é o local seguro onde esses bens são armazenados, sob responsabilidade da polícia.

**Exemplo concreto:**
Numa operação contra tráfico de drogas no Cazenga, agentes apreendem 5 quilogramas de cocaína, uma arma de fogo e 50 mil kwanzas em dinheiro. Estes bens são registados e colocados no depósito da esquadra, sob vigilância, até decisão judicial.

**Nota prática:**
O depósito deve ter registo rigoroso de entrada e saída de bens. Qualquer irregularidade neste processo pode comprometer a validade das provas em tribunal.

---

### 5. **Mandado de Busca e Apreensão**

**Definição clara:**
É uma ordem judicial que autoriza a polícia a entrar num local específico, procurar objectos relacionados com crime e apreendê-los. Deve ser emitido por autoridade judicial competente e conter descrição clara do local e do que se procura.

**Exemplo concreto:**
O Ministério Público obtém um mandado de busca para uma residência em Viana, onde se suspeita de armazenamento de armas ilegais. Os agentes da PNA executam a busca, encontram as armas, procedem à apreensão e elaboram auto circunstanciado.

**Nota prática:**
A execução de um mandado de busca deve ser rigorosa: deve ser apresentado ao proprietário, deve haver testemunhas, e tudo deve ser documentado fotograficamente quando possível. Qualquer desvio do mandado pode invalidar as provas.

---

### 6. **Denúncia e Participação**

**Definição clara:**
Denúncia é a comunicação de um crime feita por qualquer pessoa ao órgão de polícia criminal. Participação é a comunicação de um crime feita pela vítima ou por quem tenha conhecimento directo dos factos.

**Exemplo concreto:**
Um cidadão contacta a esquadra da PNA para denunciar actividades suspeitas num bairro. Uma vítima de roubo apresenta participação formal na polícia, descrevendo o crime e identificando o suspeito.

**Nota prática:**
Ambas devem ser registadas em livro próprio, com data, hora, identificação de quem reporta e descrição clara dos factos. Este registo é fundamental para estatísticas criminais e para rastreabilidade processual.

---

## Aprofundamento

### Contexto Legal e Regulatório

O vocabulário técnico policial em Angola está enquadrado pela **Constituição da República de Angola**, pelo **Código de Processo Penal**, pela **Lei de Organização da Polícia Nacional** e por diversos regulamentos internos do MININT. É essencial que o candidato compreenda que cada termo não é arbitrário, mas resulta de uma construção legal rigorosa.

Quando falamos de "detenção", estamos a referir-nos a um direito fundamental protegido constitucionalmente. O artigo 30 da Constituição garante a liberdade pessoal, e qualquer restrição deve ser proporcional e legal. Por isso, a detenção tem um limite temporal (24 horas) e deve ser comunicada ao Ministério Público. Ultrapassar este prazo sem formalização legal constitui detenção ilegal, com consequências graves para o agente responsável.

### Redacção de Documentos Oficiais

Na prática profissional, o polícia deve redigir autos, relatórios e participações utilizando este vocabulário com precisão. Um auto de detenção deve conter:

- **Identificação clara** do detido (nome completo, data de nascimento, filiação, naturalidade)
- **Circunstâncias da detenção** (hora, local, motivo, se em flagrante ou por mandado)
- **Descrição dos factos** que justificam a detenção
- **Bens apreendidos**, se aplicável, com descrição pormenorizada
- **Assinatura do agente** e de testemunhas
- **Referência ao direito de informação** ao Ministério Público

### Distinções Críticas

É fundamental compreender as seguintes distinções:

| Termo | Duração | Autoridade | Documentação |
|-------|---------|-----------|--------------|
| **Detenção** | Até 24 horas | Polícia | Auto de detenção |
| **Prisão Preventiva** | Até 90 dias | Tribunal | Mandado de prisão |
| **Prisão Preventiva Renovada** | Até 180 dias | Tribunal | Decisão judicial |
| **Prisão Definitiva** | Conforme sentença | Tribunal | Sentença condenatória |

---

## Exemplos Resolvidos

### Exemplo 1: Análise de Situação de Flagrante Delito

**Situação:**
Um agente da PNA, durante patrulhamento nocturno no Rangel, observa um indivíduo a arrombar a porta de uma loja. O agente intervém, detém o suspeito e encontra ferramentas de arrombamento e mercadoria roubada na sua posse.

**Análise passo-a-passo:**

1. **Identificação da situação:** Flagrante delito de roubo/furto qualificado
2. **Justificação da detenção:** O agente presenciou o crime em acto, o que autoriza detenção imediata sem mandado
3. **Documentação necessária:**
   - Auto de detenção (incluindo hora exacta: 23h45, local preciso: Rua X, Rangel)
   - Descrição do suspeito (características físicas, vestuário)
   - Inventário de bens apreendidos (ferramentas, mercadoria, com fotografias se possível)
   - Identificação de testemunhas presentes
4. **Próximos passos:** Comunicação ao Ministério Público dentro de 24 horas, apresentação ao tribunal para decisão sobre prisão preventiva

**Conclusão:** Este é um caso claro de flagrante delito, devidamente documentado, que permite prosseguimento processual válido.

---

### Exemplo 2: Redacção de Relatório de Revista

**Situação:**
Durante operação de segurança no Cazenga, agentes revistam um veículo e encontram uma arma de fogo não registada.

**Redacção correcta:**

> *"Aos 15 de Março de 2024, pelas 14h30, na Avenida Agostinho Neto, Cazenga, durante operação de segurança autorizada, procedemos à revista do veículo de matrícula ABC-1234. Durante a revista, encontrámos, no compartimento de ferramentas, uma arma de fogo tipo pistola, marca Taurus, calibre 9mm, série 123456, sem registo legal. A arma foi apreendida e colocada em depósito. O proprietário do veículo, Sr. João Silva, foi informado dos seus direitos e da apreensão. Testemunhas: Agente Pedro Neves (matrícula 5678) e Agente Maria Gonçalves (matrícula 5679)."*

**Análise:**
- Data e hora precisas ✓
- Local específico ✓
- Descrição detalhada do bem apreendido ✓
- Identificação clara de testemunhas ✓
- Referência a direitos do cidadão ✓

---

### Exemplo 3: Interpretação de Mandado de Busca

**Situação:**
Um candidato recebe um mandado de busca que autoriza procura de "documentos relacionados com fraude" numa residência. O agente encontra documentos, um computador e dinheiro em espécie.

**Análise correcta:**

1. **Documentos:** Podem ser apreendidos (estão explicitamente no mandado)
2. **Computador:** Pode ser apreendido se contiver documentos relacionados com fraude (interpretação razoável)
3. **Dinheiro em espécie:** Só pode ser apreendido se houver indicação clara de que é produto de fraude (não está explícito no mandado)

**Conclusão:** O agente deve apreender documentos e computador, mas registar o dinheiro e solicitar orientação ao Ministério Público sobre apreensão.

**Lição:** Os mandados têm limites específicos. Ultrapassá-los invalida as provas.

---

## Erros Comuns a Evitar

### 1. **Confundir Detenção com Prisão**
**Erro:** "O suspeito foi preso durante 24 horas."
**Correcto:** "O suspeito foi detido durante 24 horas."
**Porquê:** Prisão é medida judicial; detenção é acto policial.

### 2. **Omitir Testemunhas em Autos**
**Erro:** Auto de detenção sem identificação de testemunhas.
**Correcto:** Auto com nomes completos, matrículas e assinaturas de testemunhas.
**Porquê:** Testemunhas garantem validade processual e credibilidade.

### 3. **Usar Linguagem Vaga em Apreensões**
**Erro:** "Foram apreendidos alguns objectos."
**Correcto:** "Foram apreendidos: 1 telemóvel marca Samsung, cor preta; 3 carteiras de couro; 250 mil kwanzas em notas de 5 mil."
**Porquê:** Precisão evita contestações legais e confusões administrativas.

### 4. **Não Distinguir Flagrante de Suspeita**
**Erro:** Deter alguém por "parecer suspeito" sem acto criminoso observado.
**Correcto:** Deter apenas em flagrante delito ou com mandado judicial.
**Porquê:** Detenção sem fundamento é ilegal e viola direitos fundamentais.

### 5. **Exceder Limites de Mandados**
**Erro:** Apreender bens não mencionados num mandado de busca.
**Correcto:** Apreender apenas o que está autorizado; solicitar novo mandado se necessário.
**Porquê:** Excesso invalida provas e compromete processos judiciais.

### 6. **Misturar Conceitos de Revista Pessoal**
**Erro:** Realizar revista pessoal sem respeitar dignidade ou sem agente do mesmo sexo.
**Correcto:** Revista pessoal sempre com agente do mesmo sexo e com máximo respeito.
**Porquê:** Violação de direitos fundamentais e potencial nulidade processual.

---

## Resumo

### 5 Pontos-Chave para Memorizar

1. **Detenção ≠ Prisão:** Detenção é acto policial (até 24h); prisão é medida judicial (duração variável). Esta distinção é fundamental em toda a documentação.

2. **Flagrante Delito é Autorização:** Presenciar crime em acto autoriza detenção imediata sem mandado. Deve ser documentado com precisão (hora, local
$lesson29$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'compreensao',
  'Compreensão e interpretação de texto',
  $lesson30$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). Muitos candidatos cometem o erro crasso de subestimar a Língua Portuguesa, focando-se apenas na preparação física ou no conhecimento específico da lei. No entanto, recordem-se: um oficial do Ministério do Interior (MININT) que não compreende correctamente uma ordem superior ou que redige com ambiguidade um auto de notícia é um perigo para a segurança jurídica e para a ordem pública.

Nesta aula, vamos dissecar a **Compreensão e Interpretação de Texto**. Não se trata apenas de ler; trata-se de descodificar, analisar e concluir com rigor.

---

## Introdução

A prova de Língua Portuguesa para o concurso do MININT exige do candidato uma competência que vai além da alfabetização funcional. No contexto policial, a interpretação de texto é uma ferramenta de trabalho. Diariamente, os efectivos lidam com despachos, decretos-lei, relatórios de ocorrências e directivas operacionais. Um erro de interpretação sobre "quem", "como" ou "quando" pode comprometer a justiça e a liberdade dos cidadãos.

Nesta aula, focaremos na distinção entre o que o texto diz explicitamente (compreensão) e o que ele sugere implicitamente (interpretação). Vamos aprender a identificar a espinha dorsal de um texto informativo e oficial, separando o essencial do acessório, para que, no momento do exame, não sejam traídos pelas "ratoeiras" linguísticas comuns nestes certames.

---

## Conceitos Fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces em cinco conceitos fundamentais:

### 1. Compreensão vs. Interpretação
*   **Definição:** A compreensão (ou intelecção) refere-se à análise objectiva do que está escrito. A interpretação é o que deduzimos a partir do texto, indo além da superfície.
*   **Exemplo:** Se um comunicado diz: "A criminalidade em Luanda reduziu 10% após o reforço do patrulhamento", a **compreensão** é que houve uma queda estatística. A **interpretação** sugere que a estratégia de patrulhamento foi eficaz.
*   **Nota Prática:** Nas perguntas de compreensão, as respostas começam com "Segundo o texto...", "O autor afirma que...". Na interpretação, começam com "Infere-se que...", "Conclui-se do texto que...".

### 2. Ideia Principal e Ideias Secundárias
*   **Definição:** A ideia principal é o núcleo informativo do parágrafo ou texto. As secundárias são exemplos, justificações ou detalhes que orbitam o núcleo.
*   **Exemplo:** Num texto sobre a Lei de Segurança Nacional, a ideia principal pode ser a protecção do Estado, enquanto as secundárias detalham as penas para crimes de traição.
*   **Nota Prática:** Se retirar a ideia principal, o texto perde o sentido. Se retirar as secundárias, o texto fica apenas mais curto.

### 3. Inferência (ou Dedução)
*   **Definição:** É o processo de chegar a uma conclusão lógica com base em pistas deixadas pelo autor.
*   **Exemplo:** "O agente chegou à esquadra com a farda molhada e o guarda-chuva fechado na mão." **Infere-se** que estava a chover lá fora.
*   **Nota Prática:** A inferência deve ser sempre baseada em factos do texto, nunca em opiniões pessoais do candidato.

### 4. Denotação e Conotação
*   **Definição:** Denotação é o uso da palavra no sentido literal (dicionário). Conotação é o sentido figurado, dependente do contexto.
*   **Exemplo:** "A Polícia é o braço direito da justiça" (Conotação - apoio/ferramenta). "O agente feriu o braço direito" (Denotação - anatomia).
*   **Nota Prática:** Textos oficiais do MININT privilegiam quase exclusivamente a linguagem denotativa para evitar ambiguidades.

### 5. Tipologia Textual: O Texto Informativo/Oficial
*   **Definição:** Textos que visam transmitir dados, normas ou factos de forma impessoal e clara.
*   **Exemplo:** Um Decreto Presidencial ou uma Ordem de Serviço do Comandante Geral.
*   **Nota Prática:** Nestes textos, a objectividade é a regra. O autor não usa "eu acho" ou "talvez".

---

## Aprofundamento

No contexto de um concurso público em Angola, a banca examinadora costuma utilizar textos extraídos do *Jornal de Angola* ou do *Diário da República*. É imperativo que o candidato domine a **Estrutura do Texto Oficial**.

### Estratégias de Leitura Crítica
1.  **Skimming (Leitura Superficial):** Leiam o texto rapidamente para identificar o tema geral. Quem escreveu? Para quem? Sobre o quê?
2.  **Scanning (Leitura Selectiva):** Procurem palavras-chave (datas, nomes de instituições, verbos de ordem como "determina", "proíbe").
3.  **Análise de Conectores:** As conjunções são as dobradiças do texto.
    *   **Adversativas (mas, porém, contudo):** Indicam uma mudança de direcção no argumento.
    *   **Conclusivas (logo, portanto, por conseguinte):** Introduzem a ideia final que a banca adora perguntar.

### A Natureza do Texto no MININT
Os textos de natureza oficial seguem o princípio da **concisão** e **clareza**. No entanto, a complexidade reside no vocabulário técnico-jurídico. Ao interpretar um texto sobre a "Lei Orgânica da Polícia Nacional", o candidato deve estar atento à hierarquia das normas. Se o texto diz que uma norma "revoga" outra, ele deve compreender que a anterior deixou de existir.

**Regra de Ouro:** Nunca tragam conhecimentos externos para dentro da interpretação. Se o texto diz que "o sol é azul", para efeitos daquela questão, o sol é azul. O erro mais comum em Angola é o candidato querer responder com base no que ouviu na "Rádio Despertar" ou na "TPA", esquecendo o que está escrito no papel à sua frente.

---

## Exemplos Resolvidos

### Exemplo 1: Compreensão de Texto Normativo
**Texto:** *"O uso da força por parte dos efectivos da Polícia Nacional deve ser estritamente proporcional à resistência oferecida, visando sempre a neutralização da ameaça e a preservação da vida."*

**Pergunta:** De acordo com o texto, quando deve a polícia usar a força?
A) Sempre que houver um crime.
B) De forma superior à força do criminoso para garantir a vitória.
C) Em resposta proporcional à resistência encontrada.

**Resolução:**
*   **Raciocínio:** O texto utiliza a expressão "estritamente proporcional".
*   **Resposta Correcta:** **C**. As opções A e B extrapolam ou contrariam o texto.

### Exemplo 2: Inferência em Texto Informativo
**Texto:** *"O Ministério do Interior anunciou a abertura de 5.000 novas vagas para a carreira policial. Este aumento do efectivo visa dar resposta ao crescimento demográfico nas novas centralidades de Luanda."*

**Pergunta:** Infere-se do texto que:
A) Luanda tem falta de polícias devido ao aumento da população.
B) O concurso é apenas para residentes nas centralidades.
C) A criminalidade aumentou nas centralidades.

**Resolução:**
*   **Raciocínio:** O texto diz que as vagas visam "dar resposta ao crescimento demográfico". Se é preciso mais polícia porque há mais gente, infere-se que o rácio actual é insuficiente.
*   **Resposta Correcta:** **A**. A opção B é uma restrição que o texto não faz. A opção C é uma suposição (pode haver mais gente sem haver mais crime, embora seja provável, o texto não afirma).

### Exemplo 3: Identificação de Ideia Principal
**Texto:** *"A formação contínua dos agentes é o pilar fundamental da modernização da PNA. Sem instrução técnica e ética, os investimentos em viaturas e armamento tornam-se ineficazes, pois o capital humano é que operacionaliza a segurança."*

**Pergunta:** Qual é a ideia central do fragmento?
A) A compra de viaturas e armamento para a polícia.
B) A primazia da formação humana sobre o investimento material.
C) A necessidade de novos quartéis em Angola.

**Resolução:**
*   **Raciocínio:** O autor compara o investimento material com a formação e conclui que a formação é o "pilar fundamental".
*   **Resposta Correcta:** **B**.

---

## Erros Comuns a Evitar

1.  **Extrapolação:** É o erro de "viajar" além do texto. O candidato acrescenta informações que ele conhece, mas que não estão lá.
2.  **Redução:** É focar-se apenas num detalhe ou exemplo e esquecer o objectivo geral do texto.
3.  **Contradição:** Ler mal uma palavra de negação (não, nunca, jamais, excepto) e marcar a opção oposta à verdade.
4.  **Subjectividade:** Deixar que o sentimento pessoal sobre a polícia ou o governo influencie a análise técnica do texto.
5.  **Ignorar o Título:** Muitas vezes, o título antecipa a ideia principal e ajuda a situar o contexto.

---

## Resumo para Memorização

1.  **Compreender** é ler o que está escrito; **Interpretar** é ler o que está nas entrelinhas.
2.  A **Ideia Principal** é o coração do texto; sem ela, o texto morre.
3.  Em concursos do MININT, a linguagem é **Denotativa** (literal e clara).
4.  As **Conjunções** (mas, portanto, porque) definem a lógica do argumento.
5.  **Atenção aos Comandos:** "Segundo o autor" (está no texto) vs "Depreende-se" (está fora, mas é lógico).

---

## Glossário

1.  **Ambuidade:** Falta de clareza; quando uma frase permite dois ou mais sentidos.
2.  **Coesão:** Ligação gramatical entre as frases e parágrafos (uso de pronomes e conectores).
3.  **Coerência:** Lógica interna do texto; ausência de contradições.
4.  **Intelecção:** O mesmo que compreensão; acto de entender o sentido exacto das palavras.
5.  **Infere-se:** Conclui-se, deduz-se através da lógica.
6.  **Lexicologia:** Estudo do conjunto de palavras (vocabulário) de uma língua ou contexto.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
8.  **Texto Injuntivo:** Texto que dá ordens ou instruções (comum em manuais e leis).

Estudem com afinco, candidatos. A farda exige inteligência e disciplina. Até à próxima aula!
$lesson30$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'tipos-texto',
  'Tipos e géneros textuais',
  $lesson31$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão no Ministério do Interior (MININT). Não se enganem: um oficial de polícia não maneja apenas o armamento ou a técnica de patrulhamento; a sua principal ferramenta de trabalho, no dia-a-dia administrativo e jurídico, é a **Língua Portuguesa**.

## Introdução

A prova de admissão para a Polícia Nacional exige do candidato não apenas o conhecimento das leis, mas a capacidade de interpretar e produzir textos com clareza, rigor e objectividade. No exercício das vossas funções, serão chamados a redigir Autos de Notícia, Relatórios de Ocorrência e participações que servirão de base para processos judiciais. Se um agente não souber distinguir um relato de factos (narração) de uma descrição de um suspeito (descrição), a eficácia da justiça angolana pode ficar comprometida por falhas de comunicação.

Nesta aula, vamos dissecar a tipologia textual e os géneros textuais. Compreender a estrutura de um texto é o que vos permitirá ler uma Ordem de Serviço do Comando Geral e executá-la sem hesitações, ou interpretar correctamente uma questão de interpretação de texto na vossa prova de concurso. O rigor que exijo nesta aula é o mesmo rigor que a farda que pretendem envergar exige de cada cidadão que serve a Pátria.

---

## Conceitos fundamentais

Para dominarmos a língua, precisamos de organizar os textos em categorias. Vamos focar-nos nos cinco tipos principais que surgem invariavelmente nos exames do MININT.

### 1. Texto Narrativo
**Definição:** É o texto que relata uma sequência de acontecimentos, reais ou imaginários, vividos por personagens num determinado tempo e espaço. Predominam os verbos de acção no pretérito (passado).
- **Exemplo concreto:** Um **Auto de Notícia** relatando uma detenção em flagrante delito no mercado do Trinta, em Luanda, detalhando quem fez o quê e em que ordem.
- **Nota prática:** A narração responde à pergunta: *"O que aconteceu?"*

### 2. Texto Descritivo
**Definição:** É o texto que "pinta" uma imagem com palavras. Detalha características de objectos, pessoas, lugares ou situações. Há uma forte presença de adjectivos e verbos de estado.
- **Exemplo concreto:** A caracterização de um indivíduo procurado: "Indivíduo de estatura média, tez escura, com uma cicatriz no braço direito, trajando t-shirt branca e calças jeans azuis."
- **Nota prática:** A descrição responde à pergunta: *"Como é?"*

### 3. Texto Expositivo
**Definição:** Tem como objectivo principal informar, explicar ou apresentar um conceito de forma objectiva e neutra, sem tentar convencer o leitor ou narrar uma história.
- **Exemplo concreto:** Um artigo no **Diário da República** explicando as novas competências da Polícia de Guarda Fronteiras.
- **Nota prática:** A exposição responde à pergunta: *"O que é isto/Como funciona?"*

### 4. Texto Argumentativo
**Definição:** É o texto em que o autor defende um ponto de vista (tese) através de argumentos lógicos, com o objectivo de persuadir ou convencer o interlocutor.
- **Exemplo concreto:** Um parecer jurídico de um comissário justificando a necessidade de reforço do policiamento de proximidade num determinado bairro para reduzir a criminalidade.
- **Nota prática:** A argumentação responde à pergunta: *"Por que razão defendo esta ideia?"*

### 5. Texto Instrucional e Injuntivo
**Definição:** Ambos orientam o comportamento do receptor. O **instrucional** fornece instruções (como um manual), enquanto o **injuntivo** impõe ordens ou normas com carácter coercivo.
- **Exemplo concreto:** O **Código de Estrada** (injuntivo) ou o manual de manutenção de uma viatura patrulha (instrucional).
- **Nota prática:** Estes textos utilizam frequentemente o modo imperativo ("Faça", "Pare", "Cumpra").

---

## Aprofundamento

Meus caros, para o concurso, não basta saber as definições; é preciso compreender a estrutura técnica.

### A Estrutura do Texto Narrativo na Função Policial
Na narração policial, o rigor cronológico é vital. Utilizamos o **Pretérito Perfeito do Indicativo** para acções concluídas ("O suspeito *disparou*") e o **Pretérito Imperfeito** para acções contínuas ou circunstanciais ("Enquanto a patrulha *circulava*..."). Num exame, se virem uma sucessão de verbos de acção, marquem "Narrativo".

### A Objectividade no Texto Expositivo-Argumentativo
Muitas vezes, os textos oficiais do MININT são híbridos. Um relatório pode começar por ser **expositivo** (apresentando dados estatísticos sobre crimes em Benguela) e terminar de forma **argumentativa** (propondo soluções baseadas nesses dados). A gramática aqui exige o uso de conectores lógicos (conjunções): *"portanto", "todavia", "visto que", "por conseguinte"*. O domínio destes conectores é o que separa um candidato aprovado de um reprovado.

### Texto Injuntivo: A Linguagem da Autoridade
A Polícia Nacional rege-se pela hierarquia e disciplina. Por isso, o texto injuntivo é a base das **Ordens de Serviço**. A característica gramatical principal é o uso do **Imperativo** ou do **Infinitivo com valor de imperativo**. Exemplo: "Circular com as luzes de emergência ligadas" ou "Apresente-se imediatamente ao Comando". Em provas, textos que indicam normas, leis ou manuais de conduta são classificados como injuntivos.

---

## Exemplos resolvidos

### Exemplo 1: Identificação de Tipologia
**Texto:** *"O agente aproximou-se da viatura, solicitou a documentação ao condutor e, após verificar a irregularidade, efectuou a autuação conforme a lei vigente."*
- **Pergunta:** Qual a tipologia predominante?
- **Raciocínio:** Observamos uma sequência de acções no passado (aproximou-se, solicitou, verificou, efectuou). Há uma progressão temporal.
- **Resposta:** Texto Narrativo.

### Exemplo 2: Análise de Texto Oficial
**Texto:** *"Considerando o aumento do fluxo migratório na fronteira do Luvo, torna-se imperativo o reforço do efectivo. A segurança nacional depende da nossa capacidade de resposta imediata nestes pontos críticos."*
- **Pergunta:** Qual a intenção comunicativa deste fragmento?
- **Raciocínio:** O autor apresenta um facto (aumento do fluxo) e utiliza-o para defender uma necessidade (reforço do efectivo), tentando convencer da importância da acção.
- **Resposta:** Texto Argumentativo.

### Exemplo 3: Distinção entre Descritivo e Expositivo
**Texto A:** *"A nova farda da Polícia Nacional é composta por um tecido resistente, de cor azul-escuro, com o emblema bordado no braço esquerdo."*
**Texto B:** *"A Polícia Nacional de Angola é uma instituição paramilitar, organizada hierarquicamente, que visa garantir a ordem e a tranquilidade públicas."*
- **Análise:** O Texto A foca em características físicas e sensoriais (cor, posição, material), logo é **Descritivo**. O Texto B define o que é a instituição, a sua natureza e missão, logo é **Expositivo**.

---

## Erros comuns a evitar

1.  **Confundir Narrativo com Descritivo:** Lembrem-se: a narração tem movimento (acção); a descrição é uma "fotografia" parada (características).
2.  **Achar que todo o texto oficial é Injuntivo:** Nem todo o documento da polícia é uma ordem. Um relatório de actividades anual é **Expositivo**, não injuntivo.
3.  **Ignorar os Conectores:** Em textos argumentativos, os candidatos costumam errar a interpretação por não saberem se "contudo" indica oposição ou conclusão. Estudem as conjunções!
4.  **Subestimar o Contexto:** No concurso do MININT, as questões usam frequentemente extractos da Constituição da República de Angola (CRA). Leiam a CRA para se familiarizarem com o tom expositivo-injuntivo da lei.

---

## Resumo para memorização

1.  **Narrativo:** Foca na acção e no tempo (Ex: Relato de crime).
2.  **Descritivo:** Foca nos detalhes e adjectivos (Ex: Retrato falado).
3.  **Expositivo:** Foca na informação neutra e conceitos (Ex: Definição de lei).
4.  **Argumentativo:** Foca na defesa de opinião e persuasão (Ex: Justificação de estratégia).
5.  **Injuntivo:** Foca na ordem e na norma (Ex: Regulamento Disciplinar da PN).

---

## Glossário

1.  **Coerência:** Relação lógica entre as ideias de um texto.
2.  **Coesão:** Ligação gramatical entre as palavras e frases (uso de conectores).
3.  **Coercivo:** Que tem poder de obrigar ou reprimir (comum em textos injuntivos legais).
4.  **Género Textual:** A forma social do texto (Ex: Ofício, Circular, Relatório).
5.  **Tipologia Textual:** A estrutura interna do texto (Ex: Narração, Descrição).
6.  **Pretérito Perfeito:** Tempo verbal que indica uma acção totalmente concluída no passado.
7.  **Imperativo:** Modo verbal que exprime ordem, pedido ou conselho.
8.  **Tez:** Cor ou aspecto da pele do rosto (termo comum em descrições policiais).

Estudem com afinco, aspirantes. A farda não aceita a ignorância. A vossa capacidade de compreender estes textos será a vossa primeira vitória no concurso. Força e disciplina!
$lesson31$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'coesao',
  'Coesão e coerência textual',
  $lesson32$
Bom dia, caros candidatos. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a uma unidade fundamental para quem aspira envergar a farda da **Polícia Nacional de Angola (PN)** ou integrar qualquer órgão do **Ministério do Interior (MININT)**. Não estamos aqui apenas para aprender a "escrever bonito"; estamos aqui para aprender a escrever com precisão, lógica e autoridade.

## Introdução

A coesão e a coerência textual não são meros adornos gramaticais; são ferramentas de trabalho essenciais para o oficial de polícia. Imaginem um Auto de Notícia ou um Relatório de Ocorrência onde as ideias se atropelam, onde os factos são contraditórios ou onde o uso incorrecto de um conector altera o sentido de um depoimento. Um erro desta natureza pode comprometer uma investigação, invalidar um processo judicial e, em última instância, prejudicar a administração da justiça na nossa República.

Para o concurso público do MININT, o júri de exame procura candidatos que demonstrem domínio da norma culta da língua portuguesa (norma angolana). A prova de Língua Portuguesa avalia a vossa capacidade de organizar o pensamento de forma lógica e estruturada. Nesta aula, vamos dissecar os mecanismos que transformam um amontoado de frases num **texto** — uma unidade de sentido coerente e coesa.

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces sobre cinco conceitos fundamentais:

1.  **Coesão Textual:** É a ligação física, gramatical e lexical entre os elementos do texto (palavras, frases, parágrafos). Se o texto fosse uma parede, a coesão seria o cimento que une os tijolos.
    *   *Exemplo:* "O agente deu ordem de paragem. **Este** agiu conforme o regulamento." (O pronome "este" liga a segunda frase à primeira).
    *   *Nota prática:* Sem coesão, o texto parece uma lista de compras, sem fluidez.

2.  **Coerência Textual:** Refere-se à harmonia de sentido do texto. É a relação lógica entre as ideias, garantindo que não haja contradições e que a mensagem seja compreensível.
    *   *Exemplo:* Seria incoerente escrever: "O suspeito estava desarmado, por isso disparou contra a patrulha." (Se estava desarmado, não poderia disparar).
    *   *Nota prática:* A coerência depende do conhecimento de mundo e do contexto logístico da acção policial.

3.  **Conectores (ou Articuladores):** São palavras ou expressões (conjunções, advérbios, locuções) que estabelecem relações de sentido entre as orações (causa, oposição, conclusão, etc.).
    *   *Exemplo:* "Houve uma infracção, **contudo** o condutor recusou-se a pagar a multa."
    *   *Nota prática:* O uso errado de um conector (como usar "portanto" em vez de "entretanto") destrói a lógica do argumento.

4.  **Anáfora e Catáfora:** São mecanismos de referência. A anáfora retoma algo já dito; a catáfora antecipa algo que será dito.
    *   *Exemplo (Anáfora):* "A esquadra foi reabilitada. **Ela** agora tem melhores condições."
    *   *Nota prática:* Evitam a repetição excessiva de substantivos, tornando a leitura menos cansativa.

5.  **Progressão Temática:** É a forma como o texto avança, acrescentando informações novas a informações já conhecidas, sem fugir do tema central.
    *   *Exemplo:* Começar por descrever o local do crime, depois as provas encontradas e, finalmente, os suspeitos identificados.
    *   *Nota prática:* Um texto sem progressão é redundante; "anda em círculos".

## Aprofundamento

### 1. Mecanismos de Coesão Gramatical

A coesão gramatical utiliza os recursos do sistema da língua. No contexto do MININT, a precisão é vital:

*   **Referenciação:** O uso de pronomes pessoais, possessivos e demonstrativos. Em Angola, é comum o uso do pronome "o mesmo" para retomar um sujeito, mas cuidado: o uso excessivo é considerado vício de linguagem. Prefira sinónimos ou a omissão do sujeito quando o contexto permitir.
*   **Coesão Frásica:** Refere-se à concordância e à ordem das palavras. "Os efectivos da PN **estão** prontos" (concordância verbal correcta).
*   **Coesão Interfrásica:** É aqui que entram os conectores. Devem memorizar as tabelas de conjunções:
    *   *Adversativas (Oposição):* mas, porém, todavia, contudo, no entanto.
    *   *Conclusivas:* logo, portanto, por conseguinte, assim.
    *   *Causais:* porque, visto que, dado que, pois.

### 2. Mecanismos de Coesão Lexical

Ocorre através da escolha das palavras (vocabulário):

*   **Sinonímia:** Substituir uma palavra por outra de sentido semelhante para evitar a repetição. Em vez de repetir "crime" cinco vezes, use "delito", "infracção", "acto ilícito", "ocorrência".
*   **Hiperonímia e Hiponímia:** Relação do geral para o particular. "Viatura" é o hiperónimo de "patrulha", "jipe" ou "motocicleta".
*   **Reiteração:** Às vezes, a repetição de uma palavra-chave é necessária para dar ênfase ou garantir que não haja dúvida sobre quem se fala (muito comum em textos jurídicos e policiais).

### 3. Coerência e Progressão Temática

Um texto coerente deve respeitar três princípios:
1.  **Não-contradição:** Não afirmar A e depois dizer o contrário de A.
2.  **Não-tautologia:** Não ser repetitivo ao ponto de não acrescentar informação nova (o famoso "subir para cima").
3.  **Relevância:** As informações devem ser pertinentes ao tema. Num relatório sobre um assalto na Ilha do Cabo, não é relevante descrever a cor das flores do jardim vizinho, a menos que isso tenha influência no crime.

## Exemplos resolvidos

**Exercício 1: Identificação de Conectores**
*Enunciado:* "O Comandante Provincial deu as ordens necessárias, __________ os oficiais não as cumpriram de imediato, __________ houve um erro de comunicação." Preencha as lacunas com os conectores adequados.

*   **Resolução:**
    1.  A primeira relação é de oposição (as ordens foram dadas, mas não cumpridas). Conectores possíveis: *mas, contudo, todavia*.
    2.  A segunda relação é de causa (o motivo de não terem cumprido foi o erro). Conectores possíveis: *porque, visto que, pois*.
    *   *Resposta final:* "O Comandante Provincial deu as ordens necessárias, **contudo** os oficiais não as cumpriram de imediato, **visto que** houve um erro de comunicação."

**Exercício 2: Coesão por Referenciação**
*Enunciado:* Substitua as repetições no texto seguinte: "O suspeito foi detido no Sambizanga. O suspeito levava consigo uma arma. A arma não tinha licença."

*   **Resolução:**
    1.  Podemos substituir o segundo "O suspeito" pelo pronome "Ele" ou por um sinónimo como "O indivíduo".
    2.  Podemos substituir "A arma" pelo pronome relativo "que" ou por "esta".
    *   *Resposta final:* "O suspeito foi detido no Sambizanga. **Ele** levava consigo uma arma **que** não tinha licença." (Ou: "...uma arma, a qual não possuía licença.")

**Exercício 3: Análise de Coerência**
*Enunciado:* Analise a coerência da frase: "Devido à forte chuva que assolou Luanda, os bombeiros foram chamados para apagar um incêndio florestal de grandes proporções."

*   **Resolução:**
    *   A frase é **incoerente**.
    *   *Raciocínio:* Se houve uma "forte chuva", é logicamente improvável (quase impossível) que ocorra um "incêndio florestal de grandes proporções" ao mesmo tempo, pois a humidade impede a propagação do fogo desta natureza. Há uma contradição pragmática entre a causa (chuva) e o efeito (incêndio florestal).

## Erros comuns a evitar

1.  **Queísmo:** O uso excessivo da palavra "que". Exemplo: "O agente que disse que o carro que foi roubado..." Corrija usando particípios ou pronomes: "O agente, ao afirmar que o carro roubado..."
2.  **Ambiguidade (Anfibologia):** Frases com duplo sentido. Exemplo: "O polícia prendeu o ladrão em sua casa." (Na casa de quem? Do polícia ou do ladrão?). Seja específico: "O polícia prendeu o ladrão na residência deste último."
3.  **Uso indevido de "onde":** Lembre-se, "onde" só deve ser usado para **lugares físicos**. Nunca diga: "A situação onde o crime ocorreu". Diga: "A situação **em que** o crime ocorreu".
4.  **Falta de concordância por distanciamento:** Quando o sujeito está longe do verbo, o candidato tende a errar. "A lista dos candidatos aprovados no concurso do MININT para as províncias do sul **saíram** ontem." (Errado! O que saiu foi a **lista**. O correcto é: "...**saiu** ontem").
5.  **Conectores contraditórios:** Usar "embora" (concessivo) quando se quer dar uma ideia de causa.

## Resumo

1.  **Coesão** é a ligação gramatical; **Coerência** é a ligação lógica de sentido.
2.  Os **conectores** são a chave para a pontuação e para a clareza do raciocínio jurídico-policial.
3.  Evite a **repetição** desnecessária usando sinónimos e pronomes (anáfora).
4.  A **progressão temática** garante que o texto apresente factos novos de forma ordenada.
5.  No contexto do **MININT**, a clareza e a objectividade valem mais do que palavras difíceis usadas fora de contexto.

## Glossário

*   **Anáfora:** Retoma de um termo mencionado anteriormente no texto.
*   **Catáfora:** Referência a um termo que ainda será apresentado.
*   **Conector:** Palavra que estabelece nexo entre orações (conjunção).
*   **Elipse:** Omissão de um termo que se subentende facilmente (ex: "Fomos à esquadra" - omissão de "Nós").
*   **Hiperónimo:** Palavra de sentido genérico (ex: Animal).
*   **Hipónimo:** Palavra de sentido específico (ex: Cão).
*   **Semântica:** Estudo do sentido das palavras e das frases.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.

Estudem com afinco, candidatos. A pátria espera de vós não apenas coragem física, mas também clareza intelectual. A aula terminou. Podem sair de forma ordenada.
$lesson32$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'classes-palavras',
  'Classes de palavras',
  $lesson33$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de escrita.

A vossa presença aqui hoje demonstra um compromisso com o serviço à Pátria. No entanto, para envergar a farda do Ministério do Interior (MININT), não basta o vigor físico; é imperativo o domínio da norma culta da nossa língua oficial. Um agente que não sabe redigir um auto de notícia ou que interpreta mal uma ordem superior por desconhecimento gramatical é um agente limitado. Hoje, daremos início ao estudo sistemático da Morfologia, focando-nos nas **Classes de Palavras**.

---

## Introdução

O estudo das classes de palavras, ou Morfologia, é o alicerce de qualquer comunicação eficaz. No contexto da Polícia Nacional, a precisão terminológica e a correcta estruturação das frases são fundamentais. Imaginem a redacção de um relatório de ocorrência: a troca de um adjectivo por um advérbio, ou o uso incorrecto de uma preposição, pode alterar completamente a descrição de um crime, prejudicando o processo judicial e a justiça.

Para o concurso público do MININT, este tema é recorrente e eliminatório. O examinador não quer apenas saber se o candidato sabe ler; ele quer aferir se o candidato compreende a natureza das palavras e como elas se articulam para formar o pensamento lógico-jurídico necessário à actividade policial. Dominar as dez classes de palavras é o primeiro passo para garantir a vossa vaga e, futuramente, a vossa progressão na carreira.

---

## Conceitos fundamentais

Para compreendermos a estrutura da nossa língua, dividimos as palavras em dez grupos distintos, de acordo com a sua função e forma.

1.  **Substantivo:** É a classe que nomeia os seres, objectos, lugares e sentimentos. É o núcleo das orações.
    *   *Exemplo:* O **agente** patrulha a **Ilha de Luanda**.
    *   *Nota prática:* No Direito e na Actividade Policial, o substantivo deve ser preciso (ex: "detido" em vez de "pessoa").

2.  **Verbo:** Indica acção, estado, ocorrência ou fenómeno da natureza. É a classe mais variável.
    *   *Exemplo:* O Comandante **ordenou** a formatura.
    *   *Nota prática:* Atenção à conjugação no modo imperativo, essencial para a transmissão de ordens.

3.  **Adjectivo:** Atribui uma característica, qualidade ou estado ao substantivo.
    *   *Exemplo:* A intervenção foi **oportuna** e **eficaz**.
    *   *Nota prática:* O adjectivo deve concordar em género e número com o substantivo a que se refere.

4.  **Pronome:** Palavra que substitui ou acompanha o substantivo, indicando a sua posição em relação às pessoas do discurso.
    *   *Exemplo:* **Nós** garantimos a ordem; **este** é o nosso dever.
    *   *Nota prática:* O uso correcto dos pronomes de tratamento (Vossa Excelência, Senhor Comissário) é obrigatório na hierarquia policial.

5.  **Advérbio:** Palavra invariável que modifica o sentido de um verbo, de um adjectivo ou de outro advérbio, indicando circunstâncias (tempo, lugar, modo, etc.).
    *   *Exemplo:* A patrulha chegou **cedo** ao local.
    *   *Nota prática:* Advérbios de modo terminados em "-mente" são frequentes em relatórios técnicos.

6.  **Conjunção:** Serve para ligar orações ou termos semelhantes, estabelecendo relações de coordenação ou subordinação.
    *   *Exemplo:* O suspeito fugiu, **mas** foi capturado logo adiante.
    *   *Nota prática:* Conjunções adversativas (mas, porém, contudo) são vitais para descrever factos contraditórios em inquéritos.

---

## Aprofundamento

As dez classes dividem-se em dois grandes grupos: as **Variáveis** (que mudam de forma para indicar género, número ou tempo) e as **Invariáveis** (que mantêm sempre a mesma forma).

### 1. Classes Variáveis

*   **Substantivo:** Podem ser próprios (Angola, PN) ou comuns (viatura, arma). No concurso, fiquem atentos aos substantivos colectivos (ex: *elenco* de leis, *corpo* de polícia).
*   **Artigo:** Define (o, a, os, as) ou indefine (um, uma, uns, umas) o substantivo. O uso do artigo definido antes de cargos é comum: "O Senhor Comissário".
*   **Adjectivo:** Cuidado com a posição do adjectivo. "Um grande oficial" (valorativo/importância) é diferente de "um oficial grande" (descritivo/estatura).
*   **Numeral:** Indica quantidade (cardinal: um, dois), ordem (ordinal: primeiro, segundo), multiplicação ou divisão. Em documentos oficiais, escreve-se o numeral por extenso e entre parênteses o algarismo: "Vinte e dois (22) detidos".
*   **Pronome:** É uma das áreas mais complexas. Devem dominar os pronomes pessoais (eu, tu, ele...), possessivos (meu, teu, nosso...), demonstrativos (este, esse, aquele...) e relativos (que, o qual, cujo...). A colocação pronominal (ênclise, próclise e mesóclise) é tema certo na prova.
*   **Verbo:** É o motor da frase. Devem dominar a concordância verbal. Se o sujeito é composto ("O agente e o inspector"), o verbo vai para o plural ("chegaram").

### 2. Classes Invariáveis

*   **Advérbio:** Não varia em género ou número. Nunca digam "elas estavam meias cansadas"; o correcto é "elas estavam **meio** cansadas" (advérbio de intensidade).
*   **Preposição:** Liga palavras estabelecendo dependência (de, em, para, com, por). Exemplo: "Mandado **de** captura". A omissão ou troca da preposição altera a regência verbal.
*   **Conjunção:** Dividem-se em coordenativas (ligam orações independentes) e subordinativas (ligam orações dependentes). As conjunções integrantes "que" e "se" introduzem orações substantivas fundamentais em depoimentos.
*   **Interjeição:** Exprime emoções súbitas (Oh!, Ah!, Alerta!). É a classe menos usada em textos formais e relatórios policiais, devendo ser evitada, excepto na transcrição fiel de diálogos de terceiros.

---

## Exemplos resolvidos

**Exemplo 1: Identificação de Classes**
*Frase:* "Os novos recrutas marcharam rapidamente ontem."
*   **Os:** Artigo definido, masculino, plural.
*   **novos:** Adjectivo (caracteriza recrutas).
*   **recrutas:** Substantivo comum (núcleo do sujeito).
*   **marcharam:** Verbo (acção, 3ª pessoa do plural do Pretérito Perfeito).
*   **rapidamente:** Advérbio de modo.
*   **ontem:** Advérbio de tempo.

**Exemplo 2: Colocação Pronominal (Comum em provas do MININT)**
*Questão:* Qual a forma correcta?
a) Me empreste a algema.
b) Empreste-me a algema.
*   **Resolução:** A opção **b** é a correcta. Em português de norma angolana/europeia, não se inicia frase com pronome oblíquo átono. Como o verbo está no imperativo, usa-se a ênclise.

**Exemplo 3: Concordância Nominal**
*Frase:* "É ________ a entrada de pessoas estranhas nesta esquadra." (proibido/proibida)
*   **Resolução:** Se houver artigo ("a entrada"), o adjectivo concorda: "É **proibida** a entrada". Se não houver artigo ("entrada"), usa-se o masculino genérico: "É **proibido** entrada".

---

## Erros comuns a evitar

1.  **Confundir "Mal" com "Mau":** "Mal" é advérbio (oposto de bem); "Mau" é adjectivo (oposto de bom). *Ex: O suspeito comportou-se mal (bem). Ele é um mau (bom) cidadão.*
2.  **Uso de "Onde" vs "Aonde":** "Onde" indica lugar fixo. "Aonde" indica movimento (com verbos que pedem a preposição 'a'). *Ex: Onde está a viatura? / Aonde vais com tanta pressa?*
3.  **Incorrecção no uso de "Há" e "A":** "Há" indica tempo decorrido (passado) ou existência. "A" indica distância ou tempo futuro. *Ex: Trabalho na PN há dez anos. A esquadra fica a dois quilómetros.*
4.  **Pleonasmos viciosos:** Evitem "subir para cima" ou "entrar para dentro" em relatórios. São erros de lógica que demonstram pobreza de vocabulário.
5.  **Concordância do verbo "Haver":** Quando significa "existir", o verbo haver é impessoal e fica sempre no singular. *Ex: Havia (e não haviam) muitos manifestantes na praça.*

---

## Resumo

Para a vossa prova, fixem estes cinco pontos:
1.  **Morfologia** estuda a palavra isolada; a sua função na frase será estudada na Sintaxe.
2.  Existem **6 classes variáveis** (substantivo, artigo, adjectivo, numeral, pronome, verbo) e **4 invariáveis** (advérbio, preposição, conjunção, interjeição).
3.  O **Substantivo** e o **Verbo** são os pilares de qualquer texto oficial.
4.  Os **Conectivos** (preposições e conjunções) são responsáveis pela coesão do texto; sem eles, as ideias ficam soltas.
5.  A **Norma Angolana** segue o padrão do português europeu, especialmente na colocação pronominal e regência, sendo este o padrão exigido nos concursos públicos.

---

## Glossário

1.  **Morfologia:** Estudo da estrutura, da formação e da classificação das palavras.
2.  **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
3.  **Locução:** Conjunto de duas ou mais palavras que valem por uma (ex: locução adverbial "às pressas").
4.  **Substantivo Colectivo:** Nome comum que, no singular, designa um conjunto de seres da mesma espécie.
5.  **Verbo Impessoal:** Aquele que não tem sujeito e é usado apenas na 3ª pessoa do singular.
6.  **Regência:** Relação de dependência entre um termo regente (verbo ou nome) e o seu complemento.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e das frases no discurso.
8.  **Ênclise:** Colocação do pronome depois do verbo (ex: Prendi-o).

Estudem com afinco, senhores candidatos. A disciplina é a alma da Polícia e o estudo é a arma do intelectual. Próxima aula: Sintaxe da Oração.

Podem sair para o intervalo.
$lesson33$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'verbos',
  'Conjugação verbal',
  $lesson34$
Bom dia, caros aspirantes. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para a vossa aprovação no concurso público do Ministério do Interior (MININT), especificamente para o ingresso na Polícia Nacional de Angola (PN). A língua portuguesa não é apenas um instrumento de comunicação; para um oficial da ordem, ela é uma ferramenta de trabalho fundamental. Um auto de notícia mal redigido ou um relatório com erros de conjugação verbal pode comprometer a validade jurídica de uma diligência e manchar a imagem da corporação.

Nesta aula, abordaremos a **Conjugação Verbal**. O domínio dos tempos e modos, bem como a distinção entre verbos regulares e irregulares, é o que separa o candidato preparado daquele que sucumbe perante a rasteira do examinador. Exijo rigor, disciplina e foco. Vamos começar.

---

## Introdução

A conjugação verbal é a flexão do verbo em pessoa, número, tempo, modo e voz. No contexto do MININT e da Polícia Nacional, a precisão temporal é vital. Quando um agente relata uma ocorrência, ele deve saber distinguir se uma acção **ocorreu** (concluída), **ocorrera** (anterior a outra já passada) ou **ocorreria** (hipotética ou dependente de condição). A clareza no uso dos tempos verbais garante que a hierarquia e o sistema de justiça compreendam exactamente a sequência dos factos.

Para o concurso público, a banca examinadora foca-se na capacidade do candidato em lidar com as irregularidades verbais e com a correlação entre os modos indicativo e conjuntivo. Não basta saber "falar bem"; é necessário dominar a norma culta, a norma angolana inserida no português europeu, que é a base dos nossos textos legislativos e regulamentares.

---

## Conceitos Fundamentais

Para dominarmos a estrutura, precisamos primeiro de consolidar os alicerces:

1.  **Radical e Desinência:** O radical é a parte que contém o significado do verbo (ex: em *patrulh-ar*, "patrulh" é o radical). A desinência é a terminação que indica o tempo, o modo, a pessoa e o número.
    *   *Exemplo:* No verbo *prender*, em "prendemos", o "-emos" indica a 1.ª pessoa do plural do Presente do Indicativo.
    *   *Nota Prática:* Identificar o radical ajuda a conjugar verbos da mesma família.

2.  **Modos Verbais:** Indicam a atitude do falante em relação à acção.
    *   **Indicativo:** Exprime certeza, factos reais. (Ex: "O agente **cumpre** o seu dever.")
    *   **Conjuntivo:** Exprime dúvida, desejo, hipótese. (Ex: "Espero que o agente **cumpra** o seu dever.")
    *   **Condicional:** Exprime uma acção dependente de uma condição. (Ex: "O agente **cumpriria** o dever, se tivesse meios.")
    *   *Nota Prática:* Em relatórios policiais, o Indicativo é o modo predominante pela sua natureza factual.

3.  **Tempos Simples e Compostos:**
    *   **Simples:** Formados por apenas um verbo. (Ex: "Eu **fiz** a ronda.")
    *   **Compostos:** Formados por um verbo auxiliar (*ter* ou *haver*) + o particípio do verbo principal. (Ex: "Eu **tinha feito** a ronda.")
    *   *Nota Prática:* O tempo composto "tinha feito" é muito mais comum na nossa norma do que o simples "fizera".

4.  **Verbos Regulares e Irregulares:**
    *   **Regulares:** Mantêm o radical e seguem o modelo da sua conjugação. (Ex: *Cantar, Vender, Partir*).
    *   **Irregulares:** Sofrem alterações no radical ou nas desinências. (Ex: *Fazer, Ir, Vir, Ver, Ser*).
    *   *Nota Prática:* Os verbos irregulares são os preferidos das provas de concurso.

5.  **Verbos Auxiliares:** São aqueles que ajudam a formar os tempos compostos e a voz passiva. Os principais são *Ter, Haver, Ser* e *Estar*.
    *   *Exemplo:* "O suspeito **foi** detido pela patrulha." (*Ser* como auxiliar da voz passiva).

---

## Aprofundamento

### 1. O Modo Indicativo: A Espinha Dorsal do Relato
No concurso, fiquem atentos ao **Pretérito Perfeito** (acção concluída: "O Comissário deu a ordem") e ao **Pretérito Imperfeito** (acção contínua no passado ou hábito: "Os agentes patrulhavam a zona diariamente"). 
Uma rasteira comum é o **Pretérito Mais-que-perfeito**. Na forma simples (ex: *fizera*), é raro na fala, mas aparece em textos da Lei Orgânica da Polícia Nacional. Na forma composta (*tinha feito*), é essencial para indicar uma acção anterior a outra já passada.

### 2. O Modo Conjuntivo (Subjuntivo) e a Hipótese
O conjuntivo é o terror dos candidatos. Lembrem-se:
*   **Presente do Conjuntivo:** "É necessário que a Polícia **intervenha**" (e não "intervém").
*   **Futuro do Conjuntivo:** Muito usado em editais e leis. "Se o candidato **fizer** a prova..." (e não "se o candidato fazer").

### 3. Verbos Irregulares de Alta Relevância
Prestem atenção ao verbo **Intervir** (derivado de *vir*). Não se diz "o agente interviu", mas sim "o agente **interveio**". Da mesma forma, o verbo **Deter** (derivado de *ter*): "A polícia **deteve** o suspeito" (e não "deteu").

### 4. Tempos Compostos e a Voz Passiva
A voz passiva é fundamental para a redacção oficial. 
*   Voz Activa: "O efectivo garantiu a segurança."
*   Voz Passiva: "A segurança **foi garantida** pelo efectivo."
Aqui, o verbo auxiliar *ser* deve concordar em tempo e modo com a acção principal.

---

## Exemplos Resolvidos

**Questão 1:** Assinale a opção em que o verbo está correctamente conjugado no Pretérito Perfeito do Indicativo.
a) O agente interviu na discussão para evitar o crime.
b) O agente interveio na discussão para evitar o crime.
c) O agente interveira na discussão para evitar o crime.

*   **Resolução:** A resposta correcta é a **b**. O verbo *intervir* segue a conjugação do verbo *vir*. Se dizemos "ele veio", devemos dizer "ele interveio". A opção 'a' é um erro comum de linguagem coloquial, e a 'c' está no pretérito mais-que-perfeito simples.

**Questão 2:** Transponha a frase para o Futuro do Conjuntivo: "Se a patrulha **vê** a infracção, actua imediatamente."
*   **Resolução:** O Futuro do Conjuntivo do verbo *ver* é **vire**. Portanto: "Se a patrulha **vire** a infracção, actuará imediatamente."
*   *Raciocínio:* Muitos confundem o futuro do conjuntivo de *ver* (vire) com o de *vir* (vier). Atenção redobrada aqui!

**Questão 3:** Identifique o tempo e modo da forma verbal sublinhada: "Os peritos **tinham analisado** as provas antes do julgamento."
*   **Resolução:** Trata-se do **Pretérito Mais-que-perfeito Composto do Indicativo**.
*   *Raciocínio:* Verbo auxiliar *ter* no pretérito imperfeito (tinham) + particípio do verbo principal (analisado). Indica uma acção anterior a outra (o julgamento).

---

## Erros Comuns a Evitar

1.  **Confundir "Haver" com "A":** Em relatórios, usa-se "há" para tempo decorrido (passado) ou existência. "O crime ocorreu **há** duas horas." Nunca use "à duas horas" ou "a duas horas" para passado.
2.  **Trocar "Vier" por "Vierem" ou "Ver" por "Vire":** "Quando você **vire** o Comandante" (do verbo ver) vs. "Quando você **vier** à esquadra" (do verbo vir).
3.  **Má conjugação de verbos derivados:** Verbos como *manter, deter, conter* seguem o verbo *ter*. Logo: "Ele **manteve** a calma" (e não "manteu").
4.  **Uso incorrecto do Condicional:** "Se eu pudesse, eu **ajudava**." Na norma culta para concursos, prefira: "Se eu pudesse, eu **ajudaria**."
5.  **Gerundismo:** Evitem o uso excessivo do gerúndio ("Vou estar enviando o relatório"). Digam: "Enviarei o relatório" ou "Vou enviar o relatório".

---

## Resumo

Para a vossa prova, fixem estes 5 pontos:
1.  **Verbos de Comando:** Verbos como *deter, intervir, manter* e *ver* são recorrentes; dominem as suas irregularidades.
2.  **Correlação Temporal:** Se a frase começa no passado, o verbo seguinte deve manter a lógica temporal.
3.  **Futuro do Conjuntivo:** É a base das normas e condições; saibam conjugar "se eu fizer", "se eu vier", "se eu vir".
4.  **Auxiliares:** O verbo *ter* é o auxiliar por excelência nos tempos compostos na norma angolana.
5.  **Voz Passiva:** Saibam transformar a activa em passiva para identificar o sujeito e a flexão correcta do auxiliar.

---

## Glossário

1.  **Desinência:** Terminação verbal que indica flexão de tempo, modo, número ou pessoa.
2.  **Infinitivo:** Forma nominal do verbo (ex: *estudar*). É o nome do verbo.
3.  **Particípio:** Forma nominal usada nos tempos compostos (ex: *estudado*).
4.  **Modo Subjuntivo (Conjuntivo):** Modo que expressa incerteza, desejo ou possibilidade.
5.  **Verbo Auxiliar:** Verbo que perde o seu sentido original para ajudar na conjugação de outro (ex: *ter, ser*).
6.  **Paradigma Verbal:** Modelo de conjugação que os verbos regulares seguem.
7.  **Voz Passiva:** Construção em que o sujeito sofre a acção expressa pelo verbo.
8.  **Pretérito:** Tempo verbal que se refere ao passado.

Estudem com afinco. A farda que pretendem envergar exige, antes de mais, o domínio da palavra e da lei. Disciplina e bons estudos!
$lesson34$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'concordancia',
  'Concordância verbal e nominal',
  $lesson35$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. É com elevado sentido de dever que iniciamos esta sessão de preparação para o vosso concurso público no Ministério do Interior (MININT). Como vosso professor, exijo o máximo de concentração. A farda que pretendem envergar exige não apenas vigor físico, mas também uma competência intelectual irrepreensível.

## Introdução

A língua portuguesa é a nossa ferramenta de trabalho fundamental. No exercício das funções policiais, a elaboração de autos de notícia, relatórios de ocorrências e participações criminais exige um domínio absoluto da norma culta. Uma concordância mal efectuada num documento oficial não é apenas um erro gramatical; é uma falha de rigor que pode comprometer a clareza de uma prova judicial ou a imagem da corporação perante as instituições do Estado e o cidadão.

Nesta aula, focaremos a nossa atenção na **Concordância Verbal e Nominal**. Estes mecanismos sintácticos são os pilares que garantem a coesão entre os elementos da frase. Para um candidato ao MININT, dominar estas regras é demonstrar que possui a disciplina e a precisão necessárias para servir a Pátria com excelência. Vamos dissecar as regras gerais e as excepções que frequentemente surgem nas provas de admissão.

---

## Conceitos fundamentais

Para dominarmos a sintaxe de concordância, precisamos de fixar os seguintes alicerces:

1.  **Concordância Nominal:** É o princípio segundo o qual os determinantes (artigos, numerais, pronomes) e os adjectivos devem harmonizar-se em género (masculino/feminino) e número (singular/plural) com o substantivo a que se referem.
    *   *Exemplo:* **Os** zeloso**s** agente**s** patrulhavam a zona.
    *   *Nota prática:* O substantivo é o "chefe" da frase nominal; todos os outros termos devem segui-lo.

2.  **Concordância Verbal:** É a relação de harmonia que obriga o verbo a flexionar-se em número e pessoa para concordar com o seu sujeito.
    *   *Exemplo:* **O Comando Geral emitiu** a directiva. (3.ª pessoa do singular).
    *   *Nota prática:* Identificar correctamente o núcleo do sujeito é o primeiro passo para não errar a flexão do verbo.

3.  **Sujeito Composto:** É aquele que possui dois ou mais núcleos. A regra geral dita que o verbo deve ir para o plural.
    *   *Exemplo:* **O Comissário e o Inspector reuniram-se** com a unidade.
    *   *Nota prática:* Se o sujeito composto estiver depois do verbo, este pode concordar com o núcleo mais próximo ou ir para o plural.

4.  **Sujeito Colectivo:** Refere-se a um conjunto de seres da mesma espécie, mas a palavra apresenta-se no singular.
    *   *Exemplo:* **A guarnição manteve-se** em alerta.
    *   *Nota prática:* Embora a ideia seja de pluralidade, a forma gramatical é singular, logo o verbo permanece no singular.

5.  **Expressões Partitivas:** São expressões que indicam uma parte de um todo (ex: "a maioria de", "grande parte de", "metade de").
    *   *Exemplo:* **A maioria dos efectivos participou** (ou **participaram**) na formação.
    *   *Nota prática:* Nestes casos, a norma permite a concordância com o núcleo da expressão (singular) ou com o substantivo que a segue (plural).

---

## Aprofundamento

### 1. Concordância Verbal: Casos Específicos e Complexos

No contexto de um concurso público, as questões raramente abordam o óbvio. Devemos atentar nos detalhes técnicos:

**A) Sujeito Composto por Pessoas Gramaticais Diferentes:**
Se no sujeito houver a 1.ª pessoa (eu/nós), ela prevalece. Se houver a 2.ª pessoa (tu/vós), ela prevalece sobre a 3.ª.
*   *Exemplo:* **Tu e o teu colega (vós) fareis** a ronda nocturna. (Ou "farão", seguindo a tendência do português contemporâneo, mas em prova rigorosa, prefira-se a norma clássica).
*   *Exemplo:* **Eu e o Superintendente elaborámos** o relatório. (Eu + Ele = Nós).

**B) Verbos Impessoais (O perigo do verbo "Haver"):**
O verbo **Haver**, quando significa "existir" ou "ocorrer", é impessoal. Isto significa que não tem sujeito e deve ficar sempre na 3.ª pessoa do singular.
*   *Erro comum:* "Houveram muitos crimes ontem." (**Errado**)
*   *Forma correcta:* "**Houve** muitos crimes ontem." (**Correcto**)
*   *Nota:* O verbo **Existir**, por sua vez, é pessoal e concorda com o sujeito: "**Existiram** muitos crimes."

**C) Concordância com o pronome relativo "QUE" e "QUEM":**
*   Com o "QUE", o verbo concorda com o antecedente: "Fui **eu que solicitei** o reforço."
*   Com o "QUEM", o verbo pode ficar na 3.ª pessoa do singular ou concordar com o antecedente: "Fui **eu quem solicitou**" ou "Fui **eu quem solicitei**".

### 2. Concordância Nominal: Adjectivos e Palavras Especiais

**A) Adjectivo referindo-se a vários substantivos:**
Se o adjectivo vier depois de substantivos de géneros diferentes, vai para o masculino plural.
*   *Exemplo:* O **crime** e a **desordem** foram **combatidos**.

**B) Palavras que funcionam como adjectivos (Anexo, Incluso, Próprio, Mesmo, Obrigado):**
Estas palavras concordam em género e número com o substantivo.
*   *Exemplo:* As **fotografias** seguem **anexas** ao processo.
*   *Exemplo:* A **agente** disse: — Muito **obrigada**.
*   *Atenção:* A expressão "em anexo" é invariável. "As fotografias seguem **em anexo**."

---

## Exemplos resolvidos

**Exercício 1:** Analise a frase: *"Grande parte dos candidatos (concluir) a prova antes do tempo."* Justifique as possibilidades de concordância.
*   **Resolução:**
    1.  *Opção A:* "Grande parte dos candidatos **concluiu**..." (Concordância lógica com o núcleo "parte").
    2.  *Opção B:* "Grande parte dos candidatos **concluíram**..." (Concordância atractiva com o termo "candidatos").
    *   **Raciocínio:** Ambas estão correctas segundo a norma culta para expressões partitivas seguidas de plural.

**Exercício 2:** Corrija a frase: *"Fazem dez anos que a Polícia Nacional reforçou o policiamento de proximidade."*
*   **Resolução:** A forma correcta é "**Faz** dez anos...".
*   **Raciocínio:** O verbo "fazer", quando indica tempo decorrido, é impessoal. Não possui sujeito, devendo permanecer obrigatoriamente na 3.ª pessoa do singular.

**Exercício 3:** Escolha a opção correcta: *"Seguem (anexo/anexos) os relatórios e as guias de marcha."*
*   **Resolução:** A forma correcta é "**anexos**".
*   **Raciocínio:** O adjectivo "anexos" refere-se a dois substantivos ("relatórios" - masc. e "guias" - fem.). Pela regra de precedência, o adjectivo assume o masculino plural.

---

## Erros comuns a evitar

1.  **"Houveram" em vez de "Houve":** Nunca use o verbo haver no plural quando este significar existência. É o erro que mais elimina candidatos em Angola.
2.  **Concordância com "Vossa Excelência":** Embora o pronome se refira à 2.ª pessoa (com quem se fala), o verbo e os adjectivos devem ficar na 3.ª pessoa.
    *   *Errado:* Vossa Excelência estais cansado.
    *   *Correcto:* Vossa Excelência **está cansado**.
3.  **"Alerta" e "Menos":** A palavra "menos" é sempre invariável. A palavra "alerta", quando advérbio, também não varia.
    *   *Exemplo:* Os agentes estavam **alerta** (e não "alertas"). Houve **menos** ocorrências este mês.
4.  **Sujeito Colectivo Distante:** Quando o colectivo está longe do verbo, o aluno tende a pluralizar.
    *   *Errado:* O elenco de oficiais, após longas horas de debate sobre a segurança pública, decidiram...
    *   *Correcto:* O elenco [...] **decidiu**. (O núcleo é "elenco").

---

## Resumo para memorização

1.  **Verbo HAVER (existir/tempo):** Sempre no singular. É uma regra de ouro.
2.  **Expressões Partitivas:** Aceitam dupla concordância (singular ou plural).
3.  **Sujeito Composto:** Regra geral, verbo no plural. Se vier depois do verbo, pode concordar com o mais próximo.
4.  **ANEXO/INCLUSO:** São adjectivos. Devem "imitar" o substantivo em género e número.
5.  **Verbo FAZER (tempo):** Fica no singular. "Faz dois meses", nunca "fazem dois meses".

---

## Glossário

*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
*   **Núcleo do Sujeito:** A palavra principal do sujeito, geralmente um substantivo ou pronome, que dita a concordância do verbo.
*   **Verbo Impessoal:** Verbo que não possui sujeito gramatical, sendo usado apenas na 3.ª pessoa do singular.
*   **Concordância Atractiva:** Quando o verbo ou adjectivo concorda com o termo mais próximo, em vez de concordar com o núcleo principal.
*   **Norma Culta:** Conjunto de regras linguísticas utilizadas em contextos formais, documentos oficiais e provas de concurso.

Estudem com afinco, meus senhores. A disciplina começa na ponta do lápis. A pátria aos seus filhos admira!

**Fim da aula.**
$lesson35$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'regencia',
  'Regência verbal e nominal',
  $lesson36$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para o vosso sucesso no concurso público do Ministério do Interior (MININT): a **Regência Verbal e Nominal**. No exercício das funções policiais, a clareza e a precisão na redacção de autos de notícia, relatórios de ocorrência e participações criminais não são apenas uma questão de estética linguística; são uma questão de legalidade e rigor institucional. Um erro de regência pode alterar o sentido de uma norma ou de um depoimento, comprometendo a justiça.

Nesta aula, vamos dissecar como os verbos e os nomes (substantivos, adjectivos e advérbios) se relacionam com os seus complementos. Veremos que, tal como na hierarquia policial, na língua portuguesa existem termos que mandam (regentes) e termos que obedecem (regidos), muitas vezes exigindo a presença de uma preposição específica para que a mensagem seja transmitida sem ambiguidades.

---

## Conceitos fundamentais

Para dominarmos a regência, precisamos de alicerces sólidos. Vamos rever os conceitos que servirão de base para toda a nossa análise:

1.  **Regência:** É a parte da gramática que estuda a relação de dependência entre os termos de uma oração. O termo "regente" é a palavra principal que exige um complemento, e o termo "regido" é o complemento que completa o sentido do regente.
    *   *Exemplo:* O agente **obedece** (regente) **à lei** (regido).
    *   *Nota prática:* Identificar quem exige a preposição é o primeiro passo para não errar na prova.

2.  **Termo Regente:** É o núcleo que solicita um complemento. Pode ser um verbo (regência verbal) ou um nome (regência nominal).
    *   *Exemplo:* O Comissário tem **necessidade** (nome regente) de reforços.
    *   *Nota prática:* No MININT, muitos termos regentes são substantivos abstractos derivados de verbos de acção.

3.  **Transitividade Verbal:** Indica se o verbo precisa de um complemento para ter sentido completo.
    *   *Exemplo:* O suspeito **fugiu** (intransitivo - sentido completo); O agente **deteve** o suspeito (transitivo directo - exige complemento sem preposição).
    *   *Nota prática:* Verbos transitivos directos não admitem preposição entre o verbo e o objecto.

4.  **Objecto Directo e Indirecto:** São os complementos dos verbos transitivos. O directo liga-se ao verbo sem preposição obrigatória; o indirecto liga-se através de uma preposição.
    *   *Exemplo:* O efectivo **porta** a arma (OD); O efectivo **precisa** de munições (OI).
    *   *Nota prática:* A escolha da preposição correcta (de, a, com, em, por) define a regência indirecta.

5.  **Preposição:** É a palavra invariável que liga dois termos, estabelecendo uma relação de subordinação.
    *   *Exemplo:* Atentado **contra** a segurança do Estado.
    *   *Nota prática:* Em concursos, as preposições "a", "de" e "em" são as que mais geram rasteiras.

---

## Aprofundamento

### 1. Regência Verbal: Casos Críticos para a Polícia Nacional

Muitos verbos mudam de sentido conforme a preposição que utilizam. No contexto policial, isto é vital.

*   **Aspirar:**
    *   No sentido de *sorver, respirar*: É transitivo directo. "O perito aspirou o pó do local do crime."
    *   No sentido de *pretender, desejar*: É transitivo indirecto (exige a preposição **a**). "Muitos jovens angolanos **aspiram à** carreira policial." (Note o uso da crase: a + a).
*   **Assistir:**
    *   No sentido de *prestar socorro*: Geralmente transitivo directo. "O agente assistiu o ferido no acidente."
    *   No sentido de *ver, presenciar*: É transitivo indirecto (exige a preposição **a**). "A testemunha assistiu **ao** assalto." (Erro comum: "assistiu o assalto").
    *   No sentido de *caber, pertencer*: É transitivo indirecto. "Este direito assiste **ao** detido."
*   **Implicar:**
    *   No sentido de *acarretar, resultar*: É transitivo directo (não admite a preposição "em"). "A vossa conduta implicará **expulsão** imediata." (Errado: "implicará em expulsão").
*   **Informar / Avisar / Certificar:**
    *   Estes verbos são transitivos directos e indirectos. Informamos *alguém de alguma coisa* ou *alguma coisa a alguém*.
    *   "O Comando informou **os agentes da** nova escala." ou "O Comando informou **a nova escala aos** agentes."
    *   *Atenção:* Nunca use duas preposições ou nenhuma. "Informou aos agentes da escala" está incorrecto.

### 2. Regência Nominal: A Precisão do Substantivo e Adjectivo

A regência nominal ocorre quando um substantivo, adjectivo ou advérbio exige um complemento preposicionado. Vejamos exemplos comuns em textos oficiais do MININT:

*   **Atentado:** Exige a preposição *a* ou *contra*. "Atentado **à** ordem pública" ou "Atentado **contra** a autoridade".
*   **Inerente:** Exige a preposição *a*. "O risco é inerente **à** profissão policial."
*   **Passível:** Exige a preposição *de*. "A infracção é passível **de** multa."
*   **Obediência:** Exige a preposição *a*. "Devemos obediência **à** Constituição da República de Angola."
*   **Respeito:** Exige a preposição *a, com, para com, por*. "Respeito **pelos** direitos humanos."

### 3. O Uso do Pronome Relativo na Regência

Este é um ponto onde muitos candidatos falham. Quando usamos pronomes relativos (que, qual, cujo), a preposição exigida pelo verbo deve ser colocada **antes** do pronome.

*   *Correcto:* "Esta é a lei **a que** me refiro." (Quem se refere, refere-se **a**).
*   *Incorrecto:* "Esta é a lei que me refiro."

---

## Exemplos resolvidos

**Exemplo 1: Analise a frase "O candidato prefere a Polícia Nacional do que as Forças Armadas." e corrija-a se necessário.**
*   **Raciocínio:** O verbo *preferir* é transitivo directo e indirecto. Ele exige a preposição **a** para o segundo termo e rejeita expressões comparativas como "do que" ou "mais".
*   **Resolução:** "O candidato prefere a Polícia Nacional **às** Forças Armadas."

**Exemplo 2: Preencha a lacuna: "O crime ____ fomos testemunhas ocorreu no Cazenga."**
*   **Raciocínio:** O substantivo "testemunha" exige a preposição **de** (quem é testemunha, é testemunha *de* algo). Como temos um pronome relativo, a preposição deve vir antes dele.
*   **Resolução:** "O crime **de que** fomos testemunhas ocorreu no Cazenga."

**Exemplo 3: Qual a regência correcta para o verbo "Visar" no sentido de objectivar?**
*   **Raciocínio:** No sentido de dar um visto (assinatura), é directo. No sentido de ter como objectivo, é transitivo indirecto (preposição **a**).
*   **Resolução:** "As medidas visam **ao** bem-estar da população." (E não "visam o bem-estar").

---

## Erros comuns a evitar

1.  **"Chegar em":** No português padrão, quem chega, chega **a** algum lugar.
    *   *Errado:* Chegámos na esquadra.
    *   *Correcto:* Chegámos **à** esquadra.
2.  **"Namorar com":** O verbo namorar é transitivo directo.
    *   *Errado:* Ele namora com a colega.
    *   *Correcto:* Ele namora a colega. (Embora o uso coloquial aceite "com", em provas de concurso de Angola, segue-se a norma rígida).
3.  **"Esquecer de":** O verbo esquecer só leva preposição se for pronominal (esquecer-se).
    *   *Errado:* Esqueci do relatório.
    *   *Correcto:* Esqueci o relatório OU Esqueceu-me o relatório OU **Esqueci-me do** relatório.
4.  **"Agradecer aos":** Agradecemos *algo* (directo) *a alguém* (indirecto).
    *   *Errado:* Agradeci o Comandante.
    *   *Correcto:* Agradeci **ao** Comandante.

---

## Resumo para memorização

1.  **Regência Verbal** trata da relação entre verbos e seus complementos; **Regência Nominal** trata de nomes (substantivos/adjectivos) e seus complementos.
2.  O verbo **Assistir** (ver) exige a preposição **A**.
3.  O verbo **Preferir** exige a preposição **A** e nunca aceita "do que".
4.  O verbo **Implicar** (sentido de acarretar) não aceita a preposição "em".
5.  Em frases com **pronomes relativos**, a preposição exigida pelo verbo deve ser deslocada para antes do pronome (ex: O cargo **a que** aspiro).

---

## Glossário

*   **Crase:** Fusão da preposição "a" com o artigo definido "a" ou pronome demonstrativo.
*   **Intransitivo:** Verbo que não exige complemento para fazer sentido.
*   **Norma Culta:** Conjunto de regras linguísticas seguidas em documentos oficiais e provas de concurso.
*   **Objecto Indirecto:** Complemento verbal que vem obrigatoriamente precedido de preposição.
*   **Preposição:** Palavra de ligação que estabelece dependência entre termos.
*   **Regente:** O termo que comanda a relação de subordinação, exigindo ou não preposição.
*   **Regido:** O termo que completa o sentido do regente.
*   **Transitivo Directo:** Verbo que exige complemento sem auxílio de preposição.

Estudem com afinco, aspirantes. A disciplina na linguagem é o reflexo da disciplina na farda. Até à próxima aula.
$lesson36$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'sintaxe',
  'Sintaxe da frase',
  $lesson37$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para quem aspira envergar a farda da nossa gloriosa **Polícia Nacional de Angola (PN)**. A prova de Língua Portuguesa para o Ministério do Interior (MININT) não avalia apenas a vossa capacidade de leitura; ela testa o vosso rigor lógico e a vossa competência em estruturar o pensamento de forma clara e oficial. Um agente da autoridade que não domina a sintaxe da frase é um agente que falha na redacção de um auto de notícia, numa participação criminal ou num relatório de patrulhamento.

A sintaxe é o ramo da gramática que estuda a disposição das palavras na frase e as relações lógicas entre elas. No contexto de um concurso público, o domínio da frase simples e da frase complexa é o que separa o candidato apto daquele que será excluído. A clareza de um texto jurídico ou administrativo depende inteiramente da correcta articulação entre o sujeito, o predicado e as orações que compõem o período. Vamos, portanto, trabalhar com o rigor que a farda exige.

---

## Introdução

A sintaxe é a espinha dorsal da comunicação escrita oficial. No âmbito do MININT, a precisão é fundamental. Imaginem um relatório de ocorrência onde a troca de uma conjunção ou a má estruturação de uma oração subordinada altera o sentido de quem cometeu o crime e de quem foi a vítima. A sintaxe estuda como as palavras se agrupam para formar unidades de sentido: a frase, a oração e o período.

Para o concurso da Polícia Nacional, o examinador focar-se-á na vossa capacidade de identificar os constituintes da frase simples (análise sintáctica interna) e de compreender a articulação das orações no período composto (frase complexa). Dominar estes conceitos permitirá que respondam com segurança às questões de múltipla escolha e, futuramente, que redijam documentos institucionais com a dignidade que a função pública requer.

---

## Conceitos fundamentais

Para avançarmos, precisamos de consolidar os alicerces. Atentem nos seguintes conceitos:

1.  **Frase, Oração e Período:** A frase é qualquer enunciado com sentido completo. A oração é um enunciado que se organiza em torno de um verbo. O período é a frase constituída por uma ou mais orações.
    *   *Exemplo:* "Alto! Polícia!" (Frase nominal). "O agente patrulha a zona da Mutamba." (Oração/Período simples).
    *   *Nota prática:* No concurso, foquem-se no verbo. Se há um verbo, há uma oração.

2.  **Sujeito:** É o ser (pessoa ou coisa) sobre o qual se faz uma declaração e com o qual o verbo concorda em número e pessoa.
    *   *Exemplo:* "Os efectivos da Polícia Nacional garantem a ordem pública." (Sujeito: Os efectivos da Polícia Nacional).
    *   *Nota prática:* Para encontrar o sujeito, perguntem ao verbo: "Quem é que...?" ou "O que é que...?".

3.  **Predicado:** É tudo aquilo que se diz sobre o sujeito. O núcleo do predicado é sempre um verbo.
    *   *Exemplo:* "O Comandante **explicou as novas directrizes**."
    *   *Nota prática:* O predicado contém a acção ou o estado relativo ao sujeito.

4.  **Complementos (Directo e Indirecto):** São termos que completam o sentido de verbos transitivos. O complemento directo liga-se ao verbo sem preposição obrigatória; o indirecto exige preposição (a, para, de, com, etc.).
    *   *Exemplo:* "O agente solicitou **o documento** (CD) **ao condutor** (CI)."
    *   *Nota prática:* Substituam o CD por "o/a" e o CI por "lhe" para testar a função.

5.  **Coordenação:** Processo de ligação de orações independentes, que mantêm o seu sentido próprio mesmo se isoladas.
    *   *Exemplo:* "A patrulha chegou **e** os suspeitos fugiram."
    *   *Nota prática:* As conjunções coordenativas (e, mas, ou, logo) são as vossas bússolas aqui.

6.  **Subordinação:** Processo em que uma oração (subordinada) exerce uma função sintáctica em relação a outra (principal), dependendo dela gramaticalmente.
    *   *Exemplo:* "É necessário **que todos respeitem a lei**."
    *   *Nota prática:* A oração subordinada funciona como se fosse uma peça de um puzzle que falta na oração principal.

---

## Aprofundamento

### 1. A Frase Simples: A Estrutura Interna
A frase simples, ou período simples, contém apenas uma oração (oração absoluta). A sua análise exige o conhecimento da **transitividade verbal**.

*   **Verbos Intransitivos:** Não exigem complemento. "O suspeito fugiu."
*   **Verbos Transitivos Directos:** Exigem um objecto directo. "A Polícia deteve o meliante."
*   **Verbos Transitivos Indirectos:** Exigem um objecto com preposição. "O cidadão obedece à autoridade." (Reparem no uso do acento grave, indicando a preposição 'a' + artigo 'a').
*   **Verbos de Ligação:** Indicam estado ou qualidade (ser, estar, parecer, ficar). Introduzem o **Predicativo do Sujeito**. "O agente está atento." ('Atento' é o predicativo).

### 2. A Frase Complexa: Coordenação e Subordinação
Aqui reside a maior dificuldade dos candidatos. A frase complexa possui duas ou mais orações.

#### A. Orações Coordenadas
Dividem-se em:
*   **Copulativas:** Adição (e, nem, não só... mas também). "O agente vigia e protege."
*   **Adversativas:** Oposição/Contraste (mas, porém, todavia, contudo). "Houve uma denúncia, mas não encontraram provas."
*   **Disjuntivas:** Alternativa (ou, ou... ou, quer... quer). "Ou o cidadão colabora, ou será detido por desobediência."
*   **Conclusivas:** Conclusão (logo, portanto, por conseguinte). "O crime foi provado, logo haverá condenação."
*   **Explicativas:** Justificação (pois, porque, que). "Respeite o agente, que ele está em serviço."

#### B. Orações Subordinadas
Estas dividem-se em três grandes grupos:
1.  **Substantivas:** Exercem funções de substantivo (sujeito, complemento). "O Comissário ordenou **que a operação começasse**." (Oração subordinada substantiva objectiva directa).
2.  **Adjectivas:** Exercem função de adjectivo, introduzidas por pronomes relativos (que, o qual, cujo).
    *   *Restritivas:* "Os agentes **que são honestos** dignificam a farda." (Apenas os honestos).
    *   *Explicativas (entre vírgulas):* "Os agentes, **que são servidores públicos**, devem ser exemplares." (Todos os agentes são servidores).
3.  **Adverbiais:** Exercem função de advérbio (circunstância).
    *   *Temporais:* "Prendam o suspeito **quando ele sair de casa**."
    *   *Causais:* "A estrada foi cortada **porque houve um acidente grave**."
    *   *Condicionais:* "**Se houver motim**, chamem a Unidade de Reacção e Patrulhamento."
    *   *Finais:* "Trabalhamos **para que a paz social seja mantida**."

---

## Exemplos resolvidos

**Exercício 1:** Analise sintacticamente a frase: "O Serviço de Investigação Criminal (SIC) deteve o suspeito ontem em Cacuaco."

*   **Raciocínio:**
    1.  Quem deteve? "O Serviço de Investigação Criminal (SIC)". Logo, este é o **Sujeito Composto** (institucional).
    2.  Qual é a acção? "deteve". Verbo transitivo directo.
    3.  Deteve quem? "o suspeito". **Complemento Directo**.
    4.  Quando? "ontem". **Modificador (ou Adjunto Adverbial) de Tempo**.
    5.  Onde? "em Cacuaco". **Modificador (ou Adjunto Adverbial) de Lugar**.

**Exercício 2:** Classifique a oração sublinhada: "Embora a chuva fosse intensa, a patrulha manteve-se no posto."

*   **Raciocínio:** A conjunção "embora" introduz uma ideia de concessão (um obstáculo que não impede a acção principal).
*   **Resposta:** Oração subordinada adverbial concessiva.

**Exercício 3:** Transforme as duas frases simples numa frase complexa coordenada adversativa:
Frase A: "O agente deu ordem de paragem."
Frase B: "O condutor acelerou o veículo."

*   **Raciocínio:** A relação entre as duas frases é de oposição. Devo usar "mas", "porém" ou "contudo".
*   **Resposta:** "O agente deu ordem de paragem, **mas** o condutor acelerou o veículo."

---

## Erros comuns a evitar

1.  **Separar o Sujeito do Predicado com vírgula:** Este é o erro mais grave. Nunca se escreve: "O Comandante da Esquadra, chegou agora." (Errado). O correcto é: "O Comandante da Esquadra chegou agora."
2.  **Confundir "Porque" com "Porquê":** Em respostas e explicações, usa-se "porque". "Porquê" usa-se no final de frases ou como substantivo.
3.  **Erro de Concordância no Sujeito Composto:** "Chegou o agente e o inspector." (Aceitável se o verbo vier antes), mas o ideal é: "O agente e o inspector chegaram." Atentem à concordância com o plural.
4.  **Confundir Oração Coordenada Adversativa (mas) com Advérbio de Intensidade (mais):** "Queremos mais segurança, mas os recursos são escassos." Nunca troquem um pelo outro.
5.  **Uso incorrecto do pronome relativo "cujo":** "O agente cujo o nome..." (Errado). O correcto é "O agente cujo nome..." (Nunca se usa artigo após 'cujo').

---

## Resumo

Para a vossa prova, memorizem estes 5 pontos:
1.  **Sujeito e Predicado** são os termos essenciais; sem eles, a estrutura da oração fica incompleta.
2.  **Complemento Directo** responde a "quê/quem" e o **Indirecto** exige preposição (a, para).
3.  **Orações Coordenadas** são independentes; as **Subordinadas** dependem da principal.
4.  As **Conjunções** são as chaves para classificar as orações. Estudem as tabelas de conjunções (adversativas, causais, condicionais).
5.  A **Pontuação** muda o sentido. Uma vírgula numa oração adjectiva pode transformar uma restrição numa explicação geral.

---

## Glossário

1.  **Sintaxe:** Parte da gramática que estuda a relação entre as palavras na frase.
2.  **Oração Absoluta:** Período simples, constituído por apenas um verbo.
3.  **Verbo Transitivo:** Verbo que necessita de complementos para ter sentido completo.
4.  **Conjunção:** Palavra invariável que liga duas orações.
5.  **Adjunto Adverbial (Modificador):** Termo que indica uma circunstância (tempo, lugar, modo).
6.  **Predicativo do Sujeito:** Atributo ou estado atribuído ao sujeito através de um verbo de ligação.
7.  **Pronome Relativo:** Palavra que substitui um termo anterior e introduz uma oração subordinada adjectiva.
8.  **Período Composto:** Frase que contém duas ou mais orações.

Estudem com afinco, candidatos. A disciplina é a alma do sucesso, tanto na gramática quanto na vida policial. Força e Honra!
$lesson37$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'pontuacao',
  'Pontuação',
  $lesson38$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para o vosso sucesso no concurso público do Ministério do Interior (MININT). A vossa missão, enquanto futuros agentes da autoridade, não se limitará ao patrulhamento ou à manutenção da ordem pública; ela estende-se à redação rigorosa de autos de notícia, relatórios de ocorrência e participações criminais. Um erro de pontuação num documento oficial não é apenas uma falha gramatical; pode ser a diferença entre a condenação de um criminoso ou a anulação de um processo por ambiguidade.

A pontuação é o sistema de sinais gráficos que indica, na escrita, as pausas e a entoação da leitura, organizando a estrutura das frases para que o sentido seja inequívoco. No contexto da Polícia Nacional, a clareza é um imperativo ético e profissional. Nesta aula, vamos dissecar as regras fundamentais que regem o uso do ponto final, da vírgula, do ponto e vírgula, dos dois pontos e dos sinais de interrogação e exclamação, sempre com o rigor que a farda exige.

---

## Conceitos fundamentais

### 1. Ponto Final (.)
O ponto final assinala a pausa máxima e encerra o período simples ou composto, indicando que o sentido daquela unidade de pensamento está completo.
*   **Exemplo:** O efetivo da Polícia Nacional garantiu a segurança durante a manifestação em Luanda.
*   **Nota prática:** No final de siglas (P.N.A.), o uso do ponto tem caído em desuso na prática administrativa moderna, mas em textos corridos, o ponto final é obrigatório para fechar raciocínios.

### 2. Vírgula (,)
É o sinal que marca uma pausa de curta duração. Serve para separar elementos dentro de uma oração ou orações dentro de um período.
*   **Exemplo:** O Comandante Provincial convocou os oficiais, os sargentos e os agentes para a parada matinal.
*   **Nota prática:** Nunca se separa o sujeito do predicado com uma vírgula. É um erro gravíssimo em provas de concurso.

### 3. Ponto e Vírgula (;)
Indica uma pausa intermédia, superior à da vírgula e inferior à do ponto final. É muito utilizado em enumerações de artigos de lei ou regulamentos.
*   **Exemplo:** São deveres do agente: respeitar a hierarquia; zelar pelo fardamento; e cumprir a Constituição.
*   **Nota prática:** Use o ponto e vírgula para separar itens de uma lista que já contenham vírgulas internas.

### 4. Dois Pontos (:)
Este sinal anuncia uma citação, uma enumeração, uma explicação ou uma síntese do que foi dito anteriormente.
*   **Exemplo:** O suspeito declarou o seguinte: "Eu não estava no local do crime à hora do incidente."
*   **Nota prática:** Em relatórios policiais, os dois pontos são essenciais para introduzir depoimentos de testemunhas.

### 5. Ponto de Interrogação (?) e Exclamação (!)
O ponto de interrogação indica uma pergunta direta. O ponto de exclamação expressa sentimentos como surpresa, ordem ou ênfase.
*   **Exemplo (?):** Qual é o número de identificação do veículo apreendido?
*   **Exemplo (!):** Alto, em nome da Lei!
*   **Nota prática:** Em textos administrativos e jurídicos, o uso da exclamação deve ser extremamente parcimonioso, reservando-se apenas para ordens diretas ou citações.

---

## Aprofundamento

Para dominar a pontuação, o candidato deve compreender a sintaxe da frase. A vírgula, por ser o sinal mais complexo, exige atenção redobrada em quatro situações principais:

1.  **Isolamento do Vocativo:** O vocativo (chamamento) deve ser sempre isolado por vírgulas.
    *   *Exemplo:* "Agente Silva, apresente o relatório agora."
2.  **Isolamento do Aposto:** O aposto (explicação de um termo anterior) também requer vírgulas.
    *   *Exemplo:* "A Marginal de Luanda, local de grande afluência turística, será patrulhada hoje."
3.  **Orações Adjetivas Explicativas:** Diferenciam-se das restritivas pelo uso da vírgula.
    *   *Exemplo:* "Os polícias, que são treinados para o perigo, mantiveram a calma." (Todos os polícias são treinados).
4.  **Deslocamento de Adjuntos Adverbiais:** Quando um adjunto adverbial longo é colocado no início da frase, a vírgula é obrigatória.
    *   *Exemplo:* "Durante a operação de busca e apreensão no Cazenga, foram detidos três indivíduos."

Quanto ao **Ponto e Vírgula**, a sua aplicação técnica mais comum em concursos do MININT refere-se à separação de orações coordenadas que já possuem vírgulas no seu interior ou que apresentam um contraste.
*   *Exemplo:* "O primeiro grupo seguirá pela Avenida Deolinda Rodrigues; o segundo, pela Rua Direita do Gamek." (A vírgula após 'segundo' indica a omissão do verbo 'seguirá', e o ponto e vírgula separa as duas frentes de ação).

Os **Dois Pontos** possuem uma função esclarecedora. No Direito e na Administração Pública angolana, são usados antes de transcrições de artigos: "Nos termos do Artigo 1.º: 'Angola é uma República soberana...'".

---

## Exemplos resolvidos

### Exemplo 1: Correção de Pontuação
**Enunciado:** Pontue corretamente a frase: *O Diretor Nacional embora estivesse ocupado atendeu os candidatos ao concurso.*

**Resolução Passo-a-Passo:**
1.  Identificamos a oração principal: "O Diretor Nacional atendeu os candidatos ao concurso."
2.  Notamos uma oração intercalada de valor concessivo: "embora estivesse ocupado".
3.  Regra: Orações intercaladas devem ser isoladas por vírgulas.
4.  **Resultado:** O Diretor Nacional, embora estivesse ocupado, atendeu os candidatos ao concurso.

### Exemplo 2: Identificação de Erro
**Enunciado:** Identifique o erro na frase: *Os agentes de trânsito, apreenderam as cartas de condução caducadas.*

**Resolução Passo-a-Passo:**
1.  Sujeito: "Os agentes de trânsito".
2.  Predicado: "apreenderam as cartas de condução caducadas".
3.  Análise: Existe uma vírgula separando o sujeito do verbo.
4.  **Regra:** É proibido separar sujeito e predicado com vírgula, mesmo que o sujeito seja longo.
5.  **Correção:** Os agentes de trânsito apreenderam as cartas de condução caducadas.

### Exemplo 3: Uso do Ponto e Vírgula
**Enunciado:** Organize os itens abaixo usando a pontuação adequada para um regulamento.
*Itens: fardamento limpo; pontualidade no serviço; respeito aos cidadãos.*

**Resolução Passo-a-Passo:**
1.  Introduzimos com dois pontos.
2.  Separamos os itens por ponto e vírgula, pois são elementos de uma lista administrativa.
3.  Finalizamos com ponto final.
4.  **Resultado:** O regulamento prevê:
    a) Fardamento limpo;
    b) Pontualidade no serviço;
    c) Respeito aos cidadãos.

---

## Erros comuns a evitar

1.  **Vírgula entre Sujeito e Verbo:** É o erro que mais elimina candidatos. Nunca escreva: "O Comandante, disse...". O correto é: "O Comandante disse...".
2.  **Vírgula antes da conjunção "e":** Em regra, não se usa vírgula antes do "e" quando os sujeitos são os mesmos. Use apenas se os sujeitos forem diferentes (Ex: O sol brilhou, e a chuva caiu).
3.  **Confundir Adjunto Adverbial curto com longo:** Em "Ontem, saímos", a vírgula é facultativa. Em "No dia da independência nacional de Angola, saímos", a vírgula é obrigatória pelo comprimento da expressão.
4.  **Esquecer a vírgula no vocativo:** Escrever "Agente venha cá" está errado. O correto é "Agente, venha cá".
5.  **Uso excessivo de reticências (...):** Em textos oficiais da Polícia Nacional, as reticências são quase proibidas, pois indicam hesitação ou interrupção, o que retira a autoridade e a precisão ao documento.

---

## Resumo

1.  **Ponto Final:** Encerra o pensamento completo e o período.
2.  **Vírgula:** Marca pausas breves, isola vocativos, apostos e orações intercaladas; nunca separa sujeito de verbo.
3.  **Ponto e Vírgula:** Separa itens de enumerações ou orações coordenadas extensas.
4.  **Dois Pontos:** Introduz falas, citações de leis ou explicações detalhadas.
5.  **Interrogação e Exclamação:** Devem ser usados com critério, focando na clareza da intenção comunicativa (pergunta ou ordem).

---

## Glossário

1.  **Aposto:** Termo de caráter explicativo que se junta a um substantivo ou pronome.
2.  **Vocativo:** Termo usado para chamar ou interpelar o interlocutor.
3.  **Oração Intercalada:** Oração que se insere no meio de outra para introduzir uma observação ou ressalva.
4.  **Adjunto Adverbial:** Termo que indica uma circunstância (tempo, lugar, modo).
5.  **Período Composto:** Frase que possui duas ou mais orações.
6.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
7.  **Auto de Notícia:** Documento oficial onde a autoridade policial relata uma infração presenciada.
8.  **Conjunção:** Palavra que liga orações (ex: e, mas, porque, embora).

Estudem com afinco, meus senhores. A disciplina na escrita reflete a disciplina na farda. Boa sorte na vossa preparação!
$lesson38$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'ortografia',
  'Ortografia e acentuação',
  $lesson39$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a uma jornada de rigor e disciplina intelectual. O ingresso no Ministério do Interior (MININT) exige não apenas vigor físico e integridade moral, mas também uma competência linguística irrepreensível. Um oficial que não domina a sua língua materna — o Português, na sua norma angolana — compromete a clareza de um auto de notícia, a precisão de um relatório de ocorrência e a dignidade da instituição que representa.

Nesta aula, abordaremos a Ortografia e a Acentuação Gráfica, com foco nas alterações introduzidas pelo Acordo Ortográfico de 1990 (AO90). A prova de admissão não perdoa o erro ortográfico; um acento mal colocado ou um hífen esquecido pode ser a diferença entre a admissão e a exclusão. Portanto, exijo a vossa máxima atenção. Peguem no material de escrita e registem cada detalhe.

---

## Introdução

A língua escrita é a ferramenta fundamental do agente da autoridade. No contexto do MININT, a redação de documentos oficiais exige o cumprimento estrito das normas gramaticais vigentes. A ortografia não é uma escolha estética, mas uma convenção legal que garante a uniformidade e a compreensão mútua entre as instituições do Estado e o cidadão. Um erro de acentuação num nome próprio ou num termo jurídico pode invalidar um processo administrativo ou judicial.

A importância deste tema para o concurso da Polícia Nacional reside no facto de que a prova de Língua Portuguesa é, historicamente, a que apresenta maior taxa de reprovação. O candidato deve demonstrar que domina as regras de acentuação gráfica, o uso correto do hífen em termos compostos e a aplicação de maiúsculas e minúsculas de acordo com a hierarquia e os protocolos oficiais. Esta aula visa dotar-vos da precisão técnica necessária para superar este desafio.

---

## Conceitos fundamentais

Para dominarmos a ortografia, precisamos de alicerces sólidos. Vamos rever cinco conceitos essenciais:

### 1. Acentuação Tónica vs. Acentuação Gráfica
A **acentuação tónica** refere-se à sílaba pronunciada com maior intensidade (sílaba tónica). A **acentuação gráfica** é o uso de sinais (agudo, circunflexo) para marcar essa intensidade ou a abertura da vogal, seguindo regras específicas.
*   **Exemplo:** Na palavra **esquadra**, a sílaba tónica é "qua", mas não leva acento gráfico. Na palavra **polícia**, a sílaba tónica é "lí" e exige acento agudo.
*   **Nota prática:** Nem toda a palavra acentuada na fala leva acento no papel. O concurso testará se conhece as regras de exceção.

### 2. Classificação das Palavras quanto à Acentuação
As palavras dividem-se em oxítonas (última sílaba tónica), paroxítonas (penúltima) e proparoxítonas (antepenúltima).
*   **Exemplo:** **Retratar** (oxítona), **Agente** (paroxítona), **Viatura** (paroxítona), **Trânsito** (proparoxítona).
*   **Nota prática:** Em Angola, a maioria das palavras são paroxítonas. Lembrem-se: todas as proparoxítonas são obrigatoriamente acentuadas.

### 3. O Hífen e os Prefixos
O hífen é um sinal gráfico de união ou separação. Com o AO90, o seu uso com prefixos (como *auto-*, *sub-*, *infra-*) mudou significativamente.
*   **Exemplo:** **Autoestrada** (agora escreve-se junto) vs. **Anti-higiénico** (mantém o hífen devido ao 'h').
*   **Nota prática:** A regra de ouro atual é: "os opostos atraem-se, os iguais repelem-se" (letras diferentes juntam-se; letras iguais separam-se com hífen).

### 4. Maiúsculas e Minúsculas de Cortesia e Hierarquia
Refere-se ao uso de letras capitais para designar instituições, cargos de chefia e entidades públicas.
*   **Exemplo:** **Ministério do Interior**, **Comissário-Geral**, **Comando Provincial de Luanda**.
*   **Nota prática:** Em documentos oficiais da PN, cargos e instituições devem ser grafados com inicial maiúscula em sinal de respeito e identificação institucional.

### 5. Ditongos Abertos em Paroxítonas
Uma das mudanças mais drásticas do AO90 foi a queda do acento nos ditongos abertos "ei" e "oi" em palavras paroxítonas.
*   **Exemplo:** Antes escrevia-se "idéia", agora escreve-se **ideia**. Antes "assembléia", agora **assembleia**.
*   **Nota prática:** Cuidado! Se a palavra for oxítona, o acento mantém-se (ex: **herói**, **papéis**).

---

## Aprofundamento

Vamos agora ao detalhe técnico que separa o candidato comum do futuro oficial.

### Regras de Acentuação Pós-Acordo Ortográfico

1.  **O Fim do Trema:** O trema desapareceu completamente de todas as palavras da língua portuguesa (ex: *consequência*, *aguentar*), exceto em nomes próprios estrangeiros e seus derivados (ex: *Müller*).
2.  **Acentos Diferenciais:** Foram eliminados na sua maioria. Não se usa mais acento para distinguir "pára" (verbo) de "para" (preposição). No entanto, o acento mantém-se em:
    *   **Pôde** (pretérito perfeito) para distinguir de **pode** (presente).
    *   **Pôr** (verbo) para distinguir de **por** (preposição).
    *   **Têm** e **Vêm** (plural) para distinguir de **tem** e **vem** (singular). Isto é vital em relatórios: "Os suspeitos **têm** antecedentes".
3.  **Hiatos "oo" e "ee":** O acento circunflexo desapareceu. Escreve-se **voo**, **enjoo**, **leem**, **veem**.

### O Uso do Hífen com Prefixos (Regras Detalhadas)

Esta é a área onde ocorrem mais erros em concursos. Memorizem estas diretrizes:
*   **Usa-se hífen** quando o prefixo termina na mesma vogal com que começa a segunda palavra: **micro-ondas**, **anti-inflamatório**.
*   **Usa-se hífen** sempre que a segunda palavra começa por **H**: **super-homem**, **extra-humano**, **pré-história**.
*   **Não se usa hífen** quando o prefixo termina em vogal e a segunda palavra começa por consoante diferente de **R** ou **S**: **semicírculo**, **infraestrutura**, **antiprojecto**.
*   **Regra do R e S:** Se o prefixo termina em vogal e a segunda palavra começa por **R** ou **S**, estas consoantes duplicam-se e o hífen desaparece: **antirracismo**, **antissocial**, **contrarregra**.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a frase que cumpre rigorosamente as normas de acentuação e ortografia vigentes.
A) O Agente da PN parou a viatura para que o Comissário pudesse passar.
B) O Agente da PN párou a viatura para que o Comissário pudesse passar.
C) O Agente da PN parou a viatura para que o Comissário pôdesse passar.

*   **Resolução:** A opção correta é a **A**. 
*   **Raciocínio:** "Parou" (verbo parar) não tem acento. "Pudesse" é o imperfeito do conjuntivo e nunca foi acentuado. Na opção B, o acento em "párou" está incorreto (acento diferencial extinto). Na C, "pôdesse" não existe.

**Exercício 2:** Aplique a regra do hífen corretamente: (Extra) + (oficial); (Sub) + (inspetor).
*   **Resolução:** **Extraoficial** e **Subinspetor**.
*   **Raciocínio:** Em "extraoficial", as vogais são diferentes (a/o), logo juntam-se. Em "subinspetor", o prefixo termina em consoante e a segunda palavra começa por vogal diferente, logo juntam-se.

**Exercício 3:** Corrija a frase: "Eles veem a esquadra de longe e temem o auto-de-infração."
*   **Resolução:** "Eles **veem** a esquadra de longe e temem o **auto de infração**."
*   **Raciocínio:** "Veem" (verbo ver) perdeu o acento circunflexo. "Auto de infração" não leva hífen, pois é uma locução substantiva sem elemento de ligação (regra geral do AO90 para locuções, salvo exceções como "cor-de-rosa").

---

## Erros comuns a evitar

1.  **Confundir "Há" com "A":** "O crime ocorreu **há** duas horas" (tempo decorrido/passado). "A esquadra fica **a** dois quilómetros" (distância/futuro). Em relatórios policiais, este erro é fatal.
2.  **Acentuar "Luanda" ou "Benguela":** São paroxítonas terminadas em vogal "a", logo não levam acento. Muitos candidatos, por excesso de zelo, acentuam nomes de províncias.
3.  **Escrever "Auto-estrada":** Com o novo acordo, vogais diferentes unem-se sem hífen. O correto é **autoestrada**.
4.  **Uso indevido do acento em "Item":** A palavra **item** é paroxítona terminada em "em", tal como "nuvem" ou "homem". Não leva acento. O plural é **itens** (também sem acento).
5.  **Esquecer o acento em "Uíge":** Ao contrário de Luanda, **Uíge** é uma paroxítona terminada em "e" que forma hiato, sendo obrigatório o acento para marcar a tonicidade.

---

## Resumo para memorização

1.  **Proparoxítonas:** Todas são acentuadas (ex: **público**, **policiamento**, **trânsito**).
2.  **Ditongos "ei" e "oi":** Perderam o acento em palavras paroxítonas (**ideia**, **heroico**, **apoio**), mas mantêm em oxítonas (**pastéis**, **herói**).
3.  **Hífen (Vogais):** Letras iguais separam-se (**micro-ondas**); letras diferentes juntam-se (**autoajuda**).
4.  **Hífen (R e S):** Se o prefixo termina em vogal, dobra-se o R ou S e escreve-se junto (**antirroubo**, **minissaia**).
5.  **Diferenciais:** Mantêm-se apenas em **pôr** (verbo), **pôde** (passado), **têm** e **vêm** (plural).

---

## Glossário

1.  **Oxítona:** Palavra cuja acentuação tónica recai na última sílaba.
2.  **Paroxítona:** Palavra cuja acentuação tónica recai na penúltima sílaba.
3.  **Hiato:** Sequência de duas vogais que pertencem a sílabas diferentes.
4.  **Ditongo:** Encontro de uma vogal e uma semivogal na mesma sílaba.
5.  **Prefixo:** Elemento colocado antes da raiz de uma palavra para modificar o seu sentido.
6.  **Locução:** Conjunto de duas ou mais palavras que valem por uma só (ex: locução substantiva).
7.  **Sílaba Tónica:** A sílaba pronunciada com mais força numa palavra.
8.  **Grafia:** A forma correta de escrever as palavras de acordo com as normas.

Estudem com afinco, candidatos. A farda exige brio, e o brio começa na ponta da caneta. Disciplina e bons estudos!
$lesson39$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'semantica',
  'Semântica — sinónimos e antónimos',
  $lesson40$
Bom dia, caros candidatos. Sentem-se e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). A prova de Língua Portuguesa do Ministério do Interior (MININT) não avalia apenas a vossa capacidade de ler; avalia a vossa precisão intelectual. Um oficial de polícia que não domina a semântica é um oficial que redige mal um auto de notícia, que interpreta erradamente uma ordem superior ou que compromete a instrução de um processo criminal por falta de rigor vocabular.

A semântica é o estudo do sentido das palavras e das suas relações de significado. No contexto da segurança pública, a escolha entre duas palavras aparentemente iguais pode ser a diferença entre a legalidade e o abuso de autoridade. Nesta aula, vamos dissecar os sinónimos, antónimos, parónimos, a polissemia e a homonímia, sempre com o foco no rigor que a farda exige.

---

## Introdução

A semântica é a área da linguística que se ocupa do significado das palavras, das frases e dos textos. Para um candidato ao MININT, este tema reveste-se de uma importância estratégica. A actividade policial baseia-se na comunicação escrita e oral: relatórios, depoimentos, mandados e comunicações via rádio. A ambiguidade é a maior inimiga da ordem pública. Se um agente não compreende a nuance entre "deter" e "prender", ou entre "infringir" e "infligir", poderá cometer erros processuais gravíssimos que resultam na nulidade de actos jurídicos.

Além disso, as provas de concurso público em Angola têm privilegiado a capacidade de interpretação textual e a substituição de termos sem perda de sentido. O domínio dos campos semânticos permite ao futuro efectivo da Polícia Nacional compreender a legislação vigente — como a Lei Constitucional ou o Código Penal — com a profundidade necessária para a sua aplicação prática nas ruas de Luanda, de Cabinda ao Cunene.

---

## Conceitos fundamentais

Para dominarmos a semântica, precisamos de estabelecer alicerces sólidos sobre os seguintes conceitos:

### 1. Sinonímia
Refere-se a palavras que possuem significados idênticos ou muito aproximados. É raro existirem sinónimos perfeitos, pois o contexto dita a escolha da palavra.
*   **Exemplo:** *Deter* e *Capturar*. (Ex: "A patrulha conseguiu **deter** o suspeito" / "A patrulha conseguiu **capturar** o suspeito").
*   **Nota prática:** Em relatórios oficiais, prefira termos mais formais. Em vez de "o gatuno fugiu", utilize "o meliante evadiu-se".

### 2. Antonímia
Refere-se a palavras com significados opostos ou contrários.
*   **Exemplo:** *Ordem* e *Anarquia*; *Lícito* e *Ilícito*. (Ex: "O comportamento do cidadão foi **lícito**" vs "O comportamento do cidadão foi **ilícito**").
*   **Nota prática:** O antónimo é fundamental para a classificação de condutas no Direito Penal.

### 3. Paronímia
Palavras que são parecidas na grafia e na pronúncia, mas que têm significados diferentes. Este é o campo onde ocorrem mais erros em concursos.
*   **Exemplo:** *Ratificar* (confirmar) e *Retificar* (corrigir). (Ex: "O Comandante vai **ratificar** a escala de serviço" / "O agente deve **retificar** o erro no relatório").
*   **Nota prática:** Uma letra altera completamente o sentido da ordem dada. Muita atenção à grafia.

### 4. Homonímia
Palavras que têm a mesma pronúncia (homófonas) ou a mesma grafia (homógrafas), mas significados distintos.
*   **Exemplo:** *Auto* (substantivo: documento oficial, como o "Auto de Notícia") e *Auto* (prefixo: a si próprio, como em "Auto-defesa").
*   **Nota prática:** O contexto é o único elemento que permite distinguir o sentido correto de um homónimo.

### 5. Polissemia
É a propriedade de uma palavra ter múltiplos significados dependendo do contexto, mantendo, porém, uma raiz comum de sentido.
*   **Exemplo:** *Linha*. Pode ser a "linha de frente" no patrulhamento, uma "linha telefónica" de emergência (113) ou a "linha de investigação".
*   **Nota prática:** Não confunda com homonímia. Na polissemia, os sentidos estão relacionados entre si.

### 6. Campos Semânticos
É o conjunto de palavras ligadas por um tema ou área de conhecimento.
*   **Exemplo:** Campo semântico de "Segurança Pública": *viatura, algemas, esquadra, patrulha, ordem, cidadania, crime, prevenção*.
*   **Nota prática:** Identificar o campo semântico ajuda na interpretação rápida de textos longos em provas.

---

## Aprofundamento

No estudo da semântica para concursos, devemos ter especial atenção às **nuances contextuais**.

**A) Sinónimos Absolutos vs. Relativos:**
Raramente duas palavras significam exactamente o mesmo em todos os contextos. "Falecer" e "Morrer" são sinónimos, mas num comunicado oficial do Ministério do Interior sobre um agente tombado em serviço, o termo "falecer" ou "perecer" confere a solenidade necessária, enquanto "morrer" é mais genérico.

**B) A Armadilha dos Parónimos no Contexto Policial:**
Existem pares que o candidato deve memorizar obrigatoriamente:
*   **Infligir** (aplicar castigo/pena) vs. **Infringir** (violar uma lei/regra).
*   **Eminente** (elevado, ilustre) vs. **Iminente** (que está prestes a acontecer). Ex: "O perigo de confronto era **iminente**".
*   **Deferir** (conceder, aceitar) vs. **Diferir** (adiar ou ser diferente).

**C) Homónimos e a Escrita:**
Cuidado com as palavras homófonas (som igual, escrita diferente):
*   **Cessão** (acto de ceder bens).
*   **Sessão** (tempo de uma reunião ou cinema).
*   **Secção/Seção** (divisão, departamento). Ex: "Dirija-se à **Secção** de Logística".

**D) Denotação e Conotação:**
A linguagem policial deve ser predominantemente **denotativa** (sentido literal, do dicionário). A linguagem conotativa (figurada) deve ser evitada em documentos oficiais, mas aparece frequentemente em textos literários usados nas provas de interpretação do concurso.

---

## Exemplos resolvidos

### Exemplo 1: Substituição de Termos (Sinonímia)
**Questão:** No trecho "O agente agiu com *presteza* ao imobilizar o suspeito", a palavra sublinhada pode ser substituída, sem alteração de sentido, por:
a) Lentidão
b) Rapidez
c) Hesitação
d) Violência

**Resolução passo-a-passo:**
1. Analisar o contexto: O agente imobilizou o suspeito. "Presteza" indica algo feito de forma pronta, ágil.
2. Analisar as opções: "Lentidão" e "Hesitação" são antónimos. "Violência" é uma característica da acção, mas não é sinónimo de presteza.
3. Conclusão: "Rapidez" é o termo que mantém o sentido original.
**Resposta correcta: b)**

### Exemplo 2: Paronímia e Contexto
**Questão:** Assinale a frase em que o termo entre parênteses foi aplicado correctamente:
a) O meliante agiu com muita (descrição) para não ser visto.
b) O juiz vai (infligir) a sentença ao réu amanhã.
c) O perigo de explosão era (eminente).

**Resolução passo-a-passo:**
1. Na opção (a), o correcto seria "discrição" (qualidade de quem é discreto). "Descrição" é o acto de descrever.
2. Na opção (b), "infligir" significa aplicar uma pena. Está correcto.
3. Na opção (c), "eminente" significa ilustre. O correcto para algo prestes a ocorrer é "iminente".
**Resposta correcta: b)**

### Exemplo 3: Polissemia
**Questão:** A palavra "Posto" apresenta diferentes sentidos nas frases abaixo. Identifique aquela em que se refere a uma patente militar/policial:
a) O combustível no **posto** está caro.
b) Ele foi **posto** em liberdade condicional.
c) O **Posto** de Comissário exige grande responsabilidade.

**Resolução passo-a-passo:**
1. Na frase (a), "posto" é um estabelecimento comercial.
2. Na frase (b), "posto" é o particípio do verbo pôr.
3. Na frase (c), "posto" refere-se ao cargo, à graduação na hierarquia policial.
**Resposta correcta: c)**

---

## Erros comuns a evitar

1.  **Confundir "Ao encontro de" com "De encontro a":** "Ao encontro de" significa estar de acordo; "De encontro a" significa choque, oposição. *Ex: "A viatura foi de encontro ao muro" (bateu).*
2.  **Trocar "Tráfego" por "Tráfico":** "Tráfego" refere-se ao trânsito de veículos. "Tráfico" refere-se ao comércio ilícito (tráfico de estupefacientes). Nunca escreva "tráfico de veículos" a menos que esteja a falar de contrabando de carros.
3.  **Uso indevido de "Mal" e "Mau":** "Mal" é antónimo de "Bem". "Mau" é antónimo de "Bom". *Dica: O agente agiu mal (agiu bem). Ele é um mau elemento (é um bom elemento).*
4.  **Ignorar a regência na sinonímia:** Às vezes, ao trocar um sinónimo, esquece-se que a preposição deve mudar. "Aceder ao sistema" vs. "Entrar no sistema".
5.  **Confundir "Emergir" com "Imergir":** Emergir é vir à tona (aparecer); Imergir é mergulhar (afundar).

---

## Resumo

1.  **Sinónimos** auxiliam na coesão textual e evitam a repetição viciosa em relatórios.
2.  **Antónimos** são essenciais para contrastar factos e comportamentos (legal vs. ilegal).
3.  **Parónimos** exigem atenção redobrada à grafia; uma letra errada pode invalidar o sentido jurídico de um documento.
4.  **Homonímia e Polissemia** dependem estritamente do contexto para serem interpretadas correctamente.
5.  O **Campo Semântico** da Polícia Nacional deve ser dominado para uma leitura técnica eficiente das leis e regulamentos.

---

## Glossário

1.  **Aferir:** Verificar, avaliar, comparar com um padrão (ex: aferir o bafómetro).
2.  **Diligência:** Procedimento ou investigação policial para busca de provas.
3.  **Infracção:** Violação de uma lei, norma ou regulamento.
4.  **Inquirir:** Interrogar, questionar testemunhas ou suspeitos.
5.  **Ostensivo:** Aquilo que é feito à vista de todos, para ser notado (ex: patrulhamento ostensivo).
6.  **Peculato:** Crime de desvio de dinheiro público por funcionário que o administra.
7.  **Flagrante:** Acto que é visto no momento em que ocorre.
8.  **Custódia:** Acto de guardar ou deter alguém sob protecção ou vigilância estatal.

Estudem com afinco. A farda não aceita o erro, e a vossa prova também não. Até à próxima aula.
$lesson40$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'figuras',
  'Figuras de estilo',
  $lesson41$
Bom dia, caros candidatos ao Ministério do Interior. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje não estamos aqui apenas para cumprir um programa; estamos aqui para garantir que a vossa interpretação de texto e o vosso domínio da língua portuguesa sejam ferramentas de precisão, tal como a vossa conduta deverá ser na Polícia Nacional de Angola. No rigor da vida policial, a palavra é a primeira arma de um oficial. Compreender as nuances do que é dito e do que é escrito é fundamental para a elaboração de autos de notícia, relatórios de ocorrência e para a interpretação correta das leis e directivas.

## Introdução

As figuras de estilo, também conhecidas como figuras de linguagem ou recursos retóricos, são estratégias literárias e linguísticas que o emissor utiliza para conferir maior expressividade, ênfase ou beleza à mensagem. No contexto de um concurso público para o MININT, o domínio deste tema é crucial por dois motivos principais: primeiro, porque as provas de Língua Portuguesa testam exaustivamente a vossa capacidade de distinguir o sentido literal (denotativo) do sentido figurado (conotativo); segundo, porque a interpretação de textos jurídicos e literários exige que o candidato identifique intenções que nem sempre estão explícitas na superfície do texto.

Um agente da Polícia Nacional que não saiba identificar uma ironia ou um eufemismo num depoimento pode comprometer a veracidade de uma investigação. Da mesma forma, a compreensão de metáforas e antíteses em discursos oficiais permite uma leitura mais profunda das orientações estratégicas do Comando Geral. Nesta aula, abordaremos as figuras de pensamento, de sintaxe e de som, sempre com o foco no rigor exigido pela vossa futura carreira.

---

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de alicerces sólidos. Vamos focar-nos nos conceitos que mais frequentemente surgem nas provas de acesso à função pública em Angola.

### 1. Metáfora
É a substituição de um termo por outro, baseada numa relação de semelhança implícita, sem o uso de partículas comparativas (como "como", "tal qual").
*   **Exemplo:** "Aquele oficial é um leão na defesa da pátria."
*   **Nota prática:** Diferencia-se da comparação porque a metáfora afirma que algo *é*, enquanto a comparação diz que algo *é como*.

### 2. Metonímia
Ocorre quando se substitui um termo por outro com o qual mantém uma relação de proximidade ou contiguidade (a parte pelo todo, o continente pelo conteúdo, o autor pela obra).
*   **Exemplo:** "A esquadra toda manteve-se em silêncio." (Aqui, "esquadra" substitui os polícias que lá trabalham).
*   **Nota prática:** É muito comum na linguagem administrativa e militar para designar instituições pelos seus edifícios ou símbolos.

### 3. Hipérbole
Consiste no uso de uma expressão exagerada para enfatizar uma ideia ou realidade.
*   **Exemplo:** "Já te disse mil vezes para não estacionares em local proibido!"
*   **Nota prática:** Em relatórios oficiais, a hipérbole deve ser evitada, mas é vital reconhecê-la em depoimentos de civis sob stress emocional.

### 4. Eufemismo
É o recurso utilizado para suavizar uma expressão que possa ser considerada desagradável, chocante ou rude.
*   **Exemplo:** "O suspeito faltou à verdade perante o instrutor do processo." (Em vez de dizer que o suspeito mentiu).
*   **Nota prática:** É uma figura essencial na diplomacia policial e no trato com o público para manter a urbanidade.

### 5. Personificação (ou Prosopopeia)
Atribuição de características, sentimentos ou ações humanas a seres inanimados ou irracionais.
*   **Exemplo:** "As sirenes gritavam desesperadas pelas ruas de Luanda."
*   **Nota prática:** Muito utilizada em textos literários e crónicas jornalísticas sobre a segurança pública.

### 6. Antítese
Aproximação de palavras ou ideias com sentidos opostos para realçar o contraste.
*   **Exemplo:** "A Polícia Nacional trabalha no **dia** e na **noite** para garantir a paz."
*   **Nota prática:** Serve para enfatizar a abrangência de uma ação ou a dualidade de uma situação.

---

## Aprofundamento

Vamos agora elevar o nível da nossa análise. No contexto das provas do MININT, o examinador não quer apenas que saibam o nome da figura; ele quer que compreendam a sua função sintático-semântica.

### Litote: A Afirmação pela Negação
O litote é, de certa forma, o oposto da hipérbole e um parente próximo do eufemismo. Consiste em afirmar algo negando o seu contrário. 
*   **Exemplo:** "O trabalho do agente não foi nada mau." (Significa que foi bom ou muito bom).
*   **Contexto Técnico:** É usado para manter a modéstia ou para suavizar uma crítica, sendo recorrente em pareceres de avaliação de desempenho.

### Ironia: O Sentido Inverso
A ironia consiste em dizer o contrário do que se pensa, geralmente com uma intenção crítica ou humorística. A sua identificação depende totalmente do contexto.
*   **Exemplo:** "Excelente trabalho!", disse o comandante ao ver a viatura suja e mal cuidada.
*   **Atenção:** Na prova, a ironia é frequentemente detetada através de aspas ou de um tom que contradiz a lógica da situação descrita no texto.

### Aliteração e Anáfora: Recursos de Ênfase
*   **Aliteração:** Repetição de sons consonânticos. Exemplo: "O **p**olícia **p**atrulha o **p**erímetro com **p**rudência." Isto cria um ritmo que auxilia na memorização de lemas.
*   **Anáfora:** Repetição de uma palavra ou expressão no início de frases ou versos sucessivos. 
    *   *Exemplo:* "**Pela** ordem, **pela** paz, **pela** segurança do cidadão."
    *   *Uso:* Muito comum em discursos políticos e em preâmbulos de leis para conferir solenidade e autoridade ao texto.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a figura de estilo presente na frase: *"O efetivo da PN é o braço forte da lei em Angola."*
*   **Resolução:** Trata-se de uma **Metáfora**. 
*   **Raciocínio:** Não existe um braço físico de carne e osso que pertença à "lei". Faz-se uma analogia implícita entre a força e a proteção de um braço humano e a capacidade coerciva da Polícia Nacional. Não há partícula comparativa, logo, é metáfora.

**Exercício 2:** Analise a frase: *"Bebemos uma Cuca para celebrar a promoção."*
*   **Resolução:** Trata-se de uma **Metonímia**.
*   **Raciocínio:** Ninguém bebe a marca (Cuca), bebe-se o produto (a cerveja). Substituiu-se o produto pela marca. É uma relação de contiguidade.

**Exercício 3:** Qual a figura de estilo em: *"A morte levou o valoroso agente para o descanso eterno."*
*   **Resolução:** Temos aqui um **Eufemismo** (e também uma personificação).
*   **Raciocínio:** "Descanso eterno" é uma forma suave de dizer que o agente faleceu. O objetivo é tratar um tema doloroso com respeito e menos crueza.

---

## Erros comuns a evitar

1.  **Confundir Metáfora com Comparação:** Se a frase tiver "como", "parece" ou "tal qual", é comparação. Se não tiver, e for uma afirmação direta de identidade figurada, é metáfora.
2.  **Ignorar o Contexto na Ironia:** Muitos candidatos interpretam frases irónicas de forma literal, errando a questão de interpretação de texto. Leiam sempre o parágrafo anterior e o posterior.
3.  **Confundir Antítese com Paradoxo:** A antítese opõe palavras (claro/escuro). O paradoxo opõe ideias que se excluem logicamente numa mesma unidade (ex: "um fogo que arrefece"). O paradoxo é mais profundo e "impossível" na realidade.
4.  **Trocar Metonímia por Metáfora:** Lembrem-se: a metáfora baseia-se na **semelhança**; a metonímia baseia-se na **relação real** (causa/efeito, marca/produto, parte/todo).
5.  **Subestimar a Anáfora:** Em textos de leis, a repetição de termos no início de artigos não é falta de vocabulário, é uma anáfora propositada para garantir a clareza jurídica.

---

## Resumo

1.  **Figuras de Estilo** são recursos que tornam a linguagem mais rica e expressiva, essenciais para a interpretação de textos em concursos.
2.  **Metáfora e Metonímia** são as rainhas das provas; a primeira compara sem o "como", a segunda substitui termos com ligação lógica.
3.  **Eufemismo e Hipérbole** lidam com a intensidade: um suaviza, o outro exagera.
4.  **Ironia** exige atenção redobrada ao contexto e à intenção do autor, sendo comum em crónicas e textos de opinião.
5.  **Antítese e Anáfora** são recursos de estruturação que conferem força e clareza ao discurso institucional e jurídico.

---

## Glossário

*   **Conotativo:** Sentido figurado, subjetivo, que depende do contexto.
*   **Denotativo:** Sentido literal, real, do dicionário.
*   **Semântica:** Estudo do significado das palavras e das mudanças de sentido.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Retórica:** Arte de bem falar, de usar a linguagem para convencer ou influenciar.
*   **Inanimado:** Ser que não tem vida própria (objetos, conceitos abstratos).
*   **Contiguidade:** Relação de proximidade ou dependência entre dois conceitos (base da metonímia).
*   **Coercivo:** Que tem poder de impor pena ou castigo; relativo à força da lei.

Estudem com afinco, candidatos. A farda que pretendem envergar exige um espírito esclarecido e uma mente capaz de decifrar as entrelinhas da realidade angolana. 

**Força e Honra!**
$lesson41$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'redaccao',
  'Redacção oficial e ofícios',
  $lesson42$
# AULA COMPLETA: REDACÇÃO OFICIAL E OFÍCIOS
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção oficial é um instrumento fundamental na administração pública angolana. No contexto do Ministério do Interior, a capacidade de redigir com clareza, precisão e conformidade com as normas estabelecidas é absolutamente essencial. Quer se trate de um ofício dirigido a entidades congéneres, de um memorando interno ou de uma circular de difusão, a qualidade da comunicação escrita reflecte a eficiência e o profissionalismo da instituição. Neste concurso público, espera-se que demonstrem domínio pleno das estruturas e convenções que regem a correspondência administrativa em Angola.

A prova de redacção oficial não avalia apenas a correção gramatical — embora esta seja fundamental — mas também a capacidade de organizar ideias de forma lógica, de adaptar o registo linguístico ao contexto institucional e de cumprir rigorosamente as normas de formatação e protocolo. Compreender a diferença entre um ofício, um memorando e uma circular, bem como dominar as regras de estruturação e as fórmulas de cortesia apropriadas, pode fazer a diferença entre uma classificação excelente e uma classificação medíocre. Portanto, dediquem-se com seriedade a esta matéria.

---

## Conceitos Fundamentais

### 1. **Ofício**

**Definição:** O ofício é um documento oficial de comunicação entre entidades públicas ou entre uma entidade pública e um particular, utilizado para transmitir informações, solicitações, respostas ou decisões de carácter formal e protocolar.

**Exemplo concreto:** Um ofício do MININT dirigido à Polícia Nacional Angolana solicitando informações sobre um processo administrativo, ou um ofício da Direcção Nacional de Migração comunicando uma decisão sobre um pedido de visto.

**Nota prática:** O ofício é o documento mais formal e protocolar. Deve incluir sempre: local e data, número de referência, destinatário, assunto, corpo do texto, fórmula de encerramento e assinatura. Não deve ser nunca demasiado extenso — idealmente, uma página.

---

### 2. **Memorando**

**Definição:** O memorando é um documento de comunicação interna, utilizado para transmitir informações, instruções ou solicitações entre departamentos ou entre superiores e subordinados dentro da mesma instituição.

**Exemplo concreto:** Um memorando do Director do Departamento de Segurança Interna dirigido aos chefes de secção, informando sobre a implementação de um novo procedimento de registo de ocorrências.

**Nota prática:** O memorando é menos formal que o ofício, mas mantém rigor. Pode ser mais conciso e directo. Não requer fórmulas de cortesia tão elaboradas como o ofício. Deve incluir: destinatário, remetente, data, assunto e corpo do texto.

---

### 3. **Circular**

**Definição:** A circular é um documento de difusão interna ou externa, destinado a comunicar informações, normas ou instruções a múltiplos destinatários simultaneamente.

**Exemplo concreto:** Uma circular do MININT dirigida a todas as delegações provinciais, comunicando a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Nota prática:** A circular deve ser clara e objectiva. Começa com uma fórmula de abertura genérica ("Aos Senhores Directores Provinciais") e deve ser numerada e datada. Não é dirigida a um destinatário específico, mas a um conjunto de entidades.

---

### 4. **Exposição de Motivos**

**Definição:** A exposição de motivos é um documento que apresenta, de forma fundamentada e estruturada, as razões, justificações e argumentos que sustentam uma proposta, um pedido ou uma decisão administrativa.

**Exemplo concreto:** Uma exposição de motivos apresentada pelo MININT ao Conselho de Ministros justificando a necessidade de reforço de efectivos nas fronteiras, com dados estatísticos e análise de risco.

**Nota prática:** A exposição de motivos deve ser rigorosa, bem documentada e persuasiva. Segue uma estrutura lógica: introdução, apresentação do problema, análise, propostas e conclusão. Deve citar legislação relevante e dados concretos.

---

### 5. **Registo de Protocolo**

**Definição:** O registo de protocolo é o sistema de numeração e arquivo que garante a rastreabilidade e o controlo de todos os documentos oficiais que entram e saem de uma instituição.

**Exemplo concreto:** Um ofício recebe o número "MININT/DGS/2024/001" que indica: ministério, departamento, ano e número sequencial.

**Nota prática:** Cada instituição tem o seu próprio sistema de protocolo. No MININT, deve familiarizar-se com o formato específico utilizado. Este número deve constar no cabeçalho do documento.

---

### 6. **Fórmulas de Cortesia e Encerramento**

**Definição:** São expressões padronizadas que abrem e fecham documentos oficiais, respeitando protocolos de hierarquia e formalidade.

**Exemplo concreto:** 
- Abertura: "Excelentíssimo Senhor Ministro do Interior"
- Encerramento: "Respeitosamente submetido" ou "Com elevada consideração"

**Nota prática:** A escolha da fórmula depende do destinatário e do grau de formalidade. Para autoridades de topo, use "Excelentíssimo Senhor". Para colegas, "Prezado Colega" é apropriado. O encerramento deve ser sempre respeitoso e formal.

---

## Aprofundamento

### Estrutura Completa do Ofício

Um ofício bem estruturado segue esta ordem:

1. **Cabeçalho institucional:** Logótipo e nome da instituição
2. **Local e data:** "Luanda, 15 de Março de 2024"
3. **Número de referência:** "Ofício nº MININT/DGS/2024/045"
4. **Destinatário:** Nome completo, cargo e instituição
5. **Assunto:** Breve descrição do tema (máximo uma linha)
6. **Saudação:** "Excelentíssimo Senhor" ou equivalente
7. **Corpo do texto:** Dividido em parágrafos lógicos
8. **Encerramento:** Fórmula apropriada
9. **Assinatura:** Nome, cargo e data

### Regras de Redacção Oficial

**Clareza:** Cada frase deve transmitir uma ideia completa. Evite ambiguidades.

**Concisão:** Não use dez palavras quando cinco são suficientes. Elimine redundâncias.

**Objectividade:** Vá directo ao assunto. Não inclua informações desnecessárias.

**Correção gramatical:** Respeite rigorosamente as regras de ortografia, pontuação e concordância.

**Registo formal:** Utilize vocabulário apropriado ao contexto administrativo. Evite gírias, coloquialismos ou expressões muito informais.

**Estrutura lógica:** Organize as ideias de forma sequencial e coerente. Utilize conectores apropriados ("Portanto", "Consequentemente", "Por outro lado").

### Exemplo de Estrutura de Parágrafo Oficial

```
Primeiro parágrafo: Apresentação do assunto e contexto
Parágrafos intermédios: Desenvolvimento, argumentação, detalhes
Último parágrafo: Conclusão, solicitação ou decisão
```

---

## Exemplos Resolvidos

### Exemplo 1: Ofício de Solicitação de Informação

**Situação:** Você trabalha na Direcção de Segurança Interna do MININT e precisa solicitar informações à Polícia Nacional sobre um processo de investigação.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Direcção de Segurança Interna

Luanda, 20 de Março de 2024

Ofício nº MININT/DSI/2024/078

Excelentíssimo Senhor
Comandante-Geral da Polícia Nacional
Luanda

ASSUNTO: Solicitação de informações sobre processo de investigação nº PNA/2024/456

Excelentíssimo Senhor Comandante-Geral,

No âmbito das competências atribuídas a esta Direcção de Segurança Interna, 
solicitamos a Vossa Excelência o envio de informações detalhadas sobre o processo 
de investigação nº PNA/2024/456, relativo ao caso de falsificação de documentos 
de identificação.

Especificamente, requeremos:
a) Relatório técnico da investigação;
b) Listagem de suspeitos identificados;
c) Cronograma das diligências efectuadas;
d) Previsão de conclusão do processo.

Estas informações são necessárias para a elaboração de um parecer técnico que 
será submetido ao Conselho de Ministros, no contexto da avaliação de políticas 
de segurança interna.

Agradecemos antecipadamente a colaboração de Vossa Excelência e ficamos à 
disposição para qualquer esclarecimento adicional.

Respeitosamente submetido,

[Assinatura]
Dr. João Silva
Director de Segurança Interna
```

**Análise:** Este ofício segue rigorosamente a estrutura. Note-se: (1) o cabeçalho institucional; (2) a data e número de referência; (3) a saudação apropriada para uma autoridade de topo; (4) o assunto claro e conciso; (5) o corpo dividido em parágrafos lógicos; (6) o uso de alíneas para maior clareza; (7) a justificação da solicitação; (8) o encerramento formal; (9) a assinatura com identificação completa.

---

### Exemplo 2: Memorando Interno

**Situação:** O Director do Departamento de Recursos Humanos do MININT necessita informar os chefes de secção sobre a implementação de um novo sistema de registo de assiduidade.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Departamento de Recursos Humanos

MEMORANDO

PARA: Chefes de Secção
DE: Dr. António Neves, Director de Recursos Humanos
DATA: 18 de Março de 2024
ASSUNTO: Implementação do novo sistema de registo de assiduidade

---

Informamos que, a partir de 1 de Abril de 2024, entrará em vigor o novo 
sistema de registo de assiduidade (SIRA 2.0) em todas as unidades do MININT.

Este sistema substitui o anterior e apresenta as seguintes melhorias:
• Registo biométrico automático
• Relatórios em tempo real
• Integração com o sistema de folha de pagamento
• Redução de erros administrativos

Solicitamos que:
1. Informem todos os colaboradores da sua secção sobre esta mudança;
2. Participem na sessão de formação (datas a confirmar);
3. Designem um responsável pelo suporte técnico local.

Qualquer dúvida ou sugestão deve ser comunicada a este departamento até 
25 de Março.

Atenciosamente,

[Assinatura]
Dr. António Neves
Director de Recursos Humanos
```

**Análise:** Este memorando é menos formal que o ofício, mas mantém rigor. Note-se: (1) o cabeçalho simplificado; (2) o uso de "PARA/DE/DATA/ASSUNTO" em vez de endereçamento formal; (3) a linguagem mais directa; (4) o uso de alíneas e numeração para clareza; (5) a ausência de fórmulas de cortesia elaboradas; (6) a conclusão com um prazo claro.

---

### Exemplo 3: Circular

**Situação:** O MININT necessita comunicar a todas as delegações provinciais a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Gabinete do Ministro

CIRCULAR Nº MININT/GM/2024/012

Luanda, 22 de Março de 2024

Aos Senhores Directores Provinciais do MININT
Aos Senhores Chefes de Delegação Municipal

ASSUNTO: Entrada em vigor do Regulamento de Procedimentos de Identificação Civil

---

Informamos que, a partir de 1 de Abril de 2024, entra em vigor o novo 
Regulamento de Procedimentos de Identificação Civil, aprovado por Despacho 
Ministerial nº 045/2024, de 15 de Março.

Este regulamento estabelece novos procedimentos para:
• Emissão de cartões de identificação
• Processamento de pedidos de nacionalidade
• Verificação de antecedentes
• Prazos de resposta aos cidadãos

As principais alterações são:
1. Redução do prazo de emissão de 30 para 15 dias úteis
2. Implementação de sistema de agendamento online
3. Reforço dos controlos de segurança
4. Criação de balcão de atendimento prioritário para maiores de 65 anos

Solicitamos que:
• Divulguem este regulamento a todos os colaboradores
• Adaptem os procedimentos locais em conformidade
• Reportem qualquer dificuldade de implementação
• Participem na sessão de esclarecimento (videoconferência, 28 de Março, 14h00)

Cópias do regulamento completo encontram-se em anexo e no portal interno.

Atenciosamente,

[Assinatura]
Eng. José Fernandes
Ministro do Interior
```

**Análise:** Esta circular segue o padrão apropriado: (1) numeração clara; (2) endereçamento genérico a múltiplos destinatários; (3) assunto bem definido; (4) informação estruturada em alíneas; (5) instruções claras; (6) referência a documentação complementar; (7) assinatura de autoridade de topo.

---

## Erros Comuns a Evitar

### 1. **Falta de Clareza no Assunto**
❌ **Errado:** "Assunto: Vários assuntos"
✅ **Correcto:** "Assunto: Solicitação de informações sobre processo de investigação nº PNA/2024/456"

**Explicação:** O assunto deve ser específico e permitir ao leitor compreender imediatamente o conteúdo do documento.

---

### 2. **Uso Incorrecta de Fórmulas de Cortesia**
❌ **Errado:** "Prezado Senhor Ministro" (para um ofício oficial)
✅ **Correcto:** "Excelentíssimo Senhor Ministro"

**Explicação:** A fórmula deve corresponder ao grau de formalidade e à hierarquia do destinatário. Para autoridades de topo, use sempre "Excelentíssimo Senhor".

---

### 3. **Parágrafos Demasiado Longos e Confusos**
❌ **Errado:** Um parágrafo com 10 linhas contendo múltiplas ideias desconexas.
✅ **Correcto:** Parágrafos curtos (3-5 linhas), cada um com uma ideia central clara
$lesson42$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'relatorio',
  'Relatório e acta',
  $lesson43$
# AULA COMPLETA: RELATÓRIO E ACTA
## Módulo de Língua Portuguesa para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção de relatórios e actas constitui uma das competências fundamentais exigidas nos concursos públicos do Ministério do Interior de Angola. Estes documentos não são meros registos burocráticos; são instrumentos legais que documentam decisões, procedimentos e factos ocorridos em contextos administrativos e institucionais. No âmbito do MININT, seja em departamentos de segurança, administração ou gestão de recursos humanos, a capacidade de elaborar estes textos com rigor, clareza e conformidade com as normas estabelecidas é absolutamente essencial.

A importância desta matéria para o vosso concurso reside no facto de que a prova de Língua Portuguesa avalia não apenas a vossa competência gramatical, mas também a vossa capacidade de comunicação profissional e administrativa. Os avaliadores procuram candidatos que dominem a estrutura formal, a linguagem técnica apropriada e as convenções que regem estes documentos. Além disso, durante o exercício das funções no MININT, serão frequentemente chamados a redigir relatórios de actividades, actas de reuniões e minutas de decisões. Por isso, dominar esta competência é investir directamente na vossa carreira profissional.

---

## Conceitos Fundamentais

### 1. **Relatório: Definição e Propósito**

**Definição:** Um relatório é um documento formal que apresenta informações, análises e conclusões sobre um assunto específico, dirigido a uma autoridade ou entidade superior. Tem como objectivo informar, justificar acções, apresentar resultados ou propor soluções.

**Exemplo concreto:** Um inspector do MININT elabora um relatório sobre a fiscalização realizada numa esquadra de polícia em Luanda, descrevendo as irregularidades encontradas, as medidas correctivas necessárias e recomendações para melhorar o funcionamento.

**Nota prática:** O relatório deve ser objectivo, factual e fundamentado em dados concretos. Nunca deve conter opiniões pessoais não justificadas ou linguagem emotiva.

---

### 2. **Acta: Definição e Função**

**Definição:** Uma acta é um documento que regista, de forma resumida mas completa, os assuntos tratados, as decisões tomadas e os acordos estabelecidos durante uma reunião, assembleia ou sessão oficial.

**Exemplo concreto:** Após uma reunião de coordenação entre departamentos do MININT sobre implementação de novos procedimentos de segurança, elabora-se uma acta que regista: data, local, participantes, ordem de trabalhos, deliberações e responsáveis pelas tarefas definidas.

**Nota prática:** A acta é um documento com valor legal. Deve ser precisa, imparcial e registar apenas factos verificados, não interpretações subjectivas.

---

### 3. **Minuta: Definição e Características**

**Definição:** Uma minuta é um documento preliminar, um rascunho ou esboço de um texto oficial (decreto, portaria, resolução) que será posteriormente revisto, aprovado e formalizado. Serve como base para discussão e aperfeiçoamento.

**Exemplo concreto:** O MININT prepara uma minuta de portaria sobre novas normas de funcionamento das esquadras. Esta minuta é distribuída aos departamentos para análise, sugestões e críticas antes da versão final ser assinada pelo Ministro.

**Nota prática:** A minuta não é um documento definitivo. Deve indicar claramente que se trata de um documento em elaboração e estar aberta a sugestões e alterações.

---

### 4. **Linguagem Formal e Registro Administrativo**

**Definição:** É o conjunto de características linguísticas que caracterizam a comunicação oficial e administrativa: vocabulário técnico, estrutura sintáctica complexa, ausência de coloquialismos e respeito pelas normas gramaticais.

**Exemplo concreto:** Em vez de escrever "A polícia foi lá e viu que as coisas não estavam bem", escreve-se: "A inspecção realizada constatou irregularidades no cumprimento dos procedimentos estabelecidos."

**Nota prática:** O registo formal exige concordância rigorosa, uso correcto de tempos verbais (preferencialmente pretérito perfeito para factos passados) e estruturas sintácticas bem definidas.

---

### 5. **Estrutura Formal de um Documento Oficial**

**Definição:** É a organização padronizada dos elementos que compõem um documento administrativo: cabeçalho, identificação, corpo, assinatura e anexos.

**Exemplo concreto:** Um relatório do MININT deve incluir: timbre institucional, número de referência, data, destinatário, assunto, corpo do relatório com introdução/desenvolvimento/conclusão, assinatura e carimbo.

**Nota prática:** A estrutura formal garante que o documento seja reconhecido como oficial e facilita o seu arquivo e consulta posterior.

---

### 6. **Rigor Factual e Verificabilidade**

**Definição:** É a obrigação de que todos os dados, números, datas e factos mencionados sejam exactos, verificáveis e fundamentados em fontes confiáveis.

**Exemplo concreto:** Ao relatar que "foram realizadas 47 inspecções em Março de 2024", este número deve corresponder exactamente aos registos disponíveis. Qualquer discrepância compromete a credibilidade do documento.

**Nota prática:** Sempre que possível, cite fontes, anexe documentos comprovativos e mantenha registos que permitam verificação posterior.

---

## Aprofundamento

### Estrutura Detalhada do Relatório

Um relatório bem estruturado segue este modelo:

**1. Cabeçalho Institucional**
- Timbre do MININT ou departamento responsável
- Número de referência ou protocolo
- Data de elaboração

**2. Identificação**
- Destinatário (a quem se dirige)
- Remetente (quem elabora)
- Assunto (título claro e conciso)

**3. Introdução**
- Contextualização do tema
- Justificação do relatório
- Objectivos específicos
- Período abrangido (se aplicável)

**4. Desenvolvimento**
- Apresentação factual dos dados
- Análise estruturada por tópicos
- Fundamentação com evidências
- Descrição de metodologia (se relevante)

**5. Conclusões**
- Síntese dos achados principais
- Resposta aos objectivos propostos
- Avaliação geral da situação

**6. Recomendações**
- Sugestões de acções correctivas
- Propostas de melhorias
- Responsáveis pelas implementações

**7. Assinatura e Carimbo**
- Nome completo do autor
- Cargo/função
- Data
- Carimbo institucional

### Exemplo de Linguagem Apropriada

**Incorreto (coloquial):**
"Fomos lá e vimos que tudo estava bagunçado. Os rapazes não estavam a fazer bem o trabalho deles."

**Correcto (formal):**
"A inspecção realizada constatou deficiências significativas na organização dos procedimentos administrativos. Verificou-se que o pessoal não cumpria adequadamente os protocolos estabelecidos."

### Regras Gramaticais Essenciais

- **Concordância:** "O relatório e a acta foram elaborados" (não "foi elaborados")
- **Tempos verbais:** Preferencialmente pretérito perfeito para factos passados: "Realizou-se a reunião em 15 de Março"
- **Voz passiva:** Frequente em textos administrativos: "Foi decidido que..." em vez de "Decidimos que..."
- **Pontuação:** Uso correcto de vírgulas em enumerações e períodos complexos

---

## Exemplos Resolvidos

### Exemplo 1: Relatório de Inspecção

**Situação:** Um inspector do MININT realizou uma inspecção numa esquadra de polícia e deve elaborar um relatório.

**Resolução:**

---

**MINISTÉRIO DO INTERIOR**
**DIRECÇÃO NACIONAL DE POLÍCIA**

**RELATÓRIO DE INSPECÇÃO**

**Referência:** DNPOL/2024/0347
**Data:** 18 de Março de 2024
**Destinatário:** Director Nacional de Polícia
**Remetente:** Inspector João da Silva
**Assunto:** Inspecção à Esquadra de Polícia de Viana – Conformidade com Normas de Funcionamento

---

**INTRODUÇÃO**

No cumprimento do plano de inspecções do corrente ano, foi realizada uma visita de avaliação à Esquadra de Polícia de Viana, no período de 11 a 15 de Março de 2024. O objectivo desta inspecção foi verificar o cumprimento das normas estabelecidas no Manual de Procedimentos Administrativos e avaliar as condições de funcionamento da unidade.

**DESENVOLVIMENTO**

1. **Recursos Humanos**
   - Efectivo autorizado: 24 elementos
   - Efectivo presente: 22 elementos
   - Constatou-se que dois elementos se encontravam em licença médica, devidamente documentada
   - O pessoal apresenta-se adequadamente uniformizado e preparado

2. **Infraestruturas**
   - As instalações encontram-se em bom estado de conservação
   - Identificou-se necessidade de reparação da cobertura do pátio traseiro (infiltrações)
   - Os equipamentos informáticos funcionam adequadamente

3. **Documentação e Registos**
   - Os livros de ocorrências estão correctamente preenchidos
   - Verificou-se conformidade com os prazos de arquivo de documentos
   - Detectou-se pequena deficiência no preenchimento de um formulário de denúncia (falta de data)

**CONCLUSÕES**

A Esquadra de Polícia de Viana funciona de forma satisfatória, demonstrando conformidade geral com as normas estabelecidas. O pessoal mostra-se motivado e organizado. As deficiências identificadas são de carácter menor e facilmente corrigíveis.

**RECOMENDAÇÕES**

1. Proceder à reparação da cobertura do pátio traseiro no prazo de 30 dias
2. Reforçar a formação do pessoal sobre preenchimento correcto de formulários
3. Realizar nova inspecção em Setembro de 2024

---

**Assinado:**
Inspector João da Silva
Cédula: 00123456789
Data: 18 de Março de 2024
[Carimbo]

---

### Exemplo 2: Acta de Reunião

**Situação:** Reunião de coordenação entre departamentos do MININT sobre implementação de novo sistema de segurança.

**Resolução:**

---

**ACTA Nº 012/2024**

**MINISTÉRIO DO INTERIOR**
**REUNIÃO DE COORDENAÇÃO INTERDEPARTAMENTAL**

**Data:** 20 de Março de 2024
**Hora de início:** 09h30
**Hora de encerramento:** 11h45
**Local:** Sala de Conferências, Piso 3, Edifício Central

**PARTICIPANTES:**
- Dr. Manuel Ferreira (Director de Segurança) – Presidente
- Eng. Carla Mendes (Departamento de Tecnologia)
- Dr. Paulo Neves (Departamento Jurídico)
- Dra. Amélia Costa (Recursos Humanos)
- Sr. Joaquim Lopes (Segurança Operacional)

**ORDEM DE TRABALHOS:**
1. Apresentação do novo sistema de segurança integrada
2. Cronograma de implementação
3. Responsabilidades departamentais
4. Orçamento e recursos
5. Assuntos diversos

**DELIBERAÇÕES:**

1. **Apresentação do Sistema:** Eng. Carla Mendes apresentou o novo sistema de segurança integrada, com demonstração prática. O sistema foi considerado adequado aos objectivos institucionais.

2. **Cronograma:** Aprovou-se o seguinte cronograma:
   - Fase 1 (Piloto): Abril a Maio de 2024
   - Fase 2 (Expansão): Junho a Agosto de 2024
   - Fase 3 (Consolidação): Setembro a Outubro de 2024

3. **Responsabilidades:**
   - Eng. Carla Mendes: Coordenação técnica geral
   - Dr. Paulo Neves: Conformidade legal e regulatória
   - Dra. Amélia Costa: Formação do pessoal
   - Sr. Joaquim Lopes: Testes operacionais

4. **Orçamento:** Aprovado orçamento de 2.500.000 Kz para a implementação completa.

5. **Próxima Reunião:** Agendada para 10 de Abril de 2024, às 10h00, para avaliação da Fase 1.

**ASSINATURAS:**

Dr. Manuel Ferreira _________________ Data: 20/03/2024
(Presidente)

Eng. Carla Mendes _________________ Data: 20/03/2024

Dr. Paulo Neves _________________ Data: 20/03/2024

Dra. Amélia Costa _________________ Data: 20/03/2024

Sr. Joaquim Lopes _________________ Data: 20/03/2024

---

### Exemplo 3: Minuta de Portaria

**Situação:** Elaboração de minuta de portaria sobre normas de funcionamento de esquadras.

**Resolução:**

---

**MINUTA DE PORTARIA**
**[DOCUMENTO EM ELABORAÇÃO – SUJEITO A REVISÃO]**

**Referência:** MININT/2024/MIN-PORT-0089
**Data de Elaboração:** 18 de Março de 2024
**Departamento Responsável:** Direcção de Administração e Gestão

---

**PORTARIA Nº ___/2024**

**Assunto:** Normas de Funcionamento das Esquadras de Polícia

O Ministro do Interior, considerando:

a) A necessidade de uniformizar procedimentos nas esquadras de polícia em todo o território nacional;
b) A importância de garantir qualidade no atendimento ao público;
c) O cumprimento das obrigações estabelecidas na Lei de Segurança Pública;

**DETERMINA:**

**Artigo 1º – Âmbito de Aplicação**
As presentes normas aplicam-se a todas as esquadras de polícia sob jurisdição do Ministério do Interior.

**Artigo 2º – Horário de Funcionamento**
1. As esquadras funcionarão em regime de 24 horas, com turnos de 8 horas.
2. O atendimento ao público realizar-se-á entre as 07h00 e as 19h00, de segunda a sexta-feira.

**Artigo 3º – Pessoal**
1. Cada esquadra terá um efectivo mínimo de 20 elementos.
2. O pessoal deverá estar adequadamente uniformizado e identificado.

**Artigo 4º – Documentação**
1. Todos os registos deverão ser efectuados em livros próprios ou sistema informático autorizado.
2. Os prazos de arquivo serão os estabelecidos no Manual de Procedimentos.

**Artigo 5º – Disposições Finais**
1. A presente portaria entra em vigor 30 dias após a sua publicação.
2. Revoga todas as disposições anteriores que se lhe oponham.

---
$lesson43$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sic',
  'portugues',
  'vocabulario',
  'Vocabulário técnico policial',
  $lesson44$
# AULA: VOCABULÁRIO TÉCNICO POLICIAL
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A preparação para um concurso público no Ministério do Interior exige não apenas conhecimento das leis e regulamentos, mas também o domínio de um vocabulário técnico específico que caracteriza a actividade policial e de segurança interna em Angola. O vocabulário técnico policial não é um simples conjunto de palavras; é, antes, um sistema de comunicação preciso e rigoroso que garante a clareza nas operações, a uniformidade nos relatórios e a compreensão exacta entre os profissionais de segurança. Quando um agente da Polícia Nacional Angolana (PNA) redige um auto de detenção, quando coordena uma operação de patrulhamento ou quando comunica com a hierarquia, utiliza termos que têm significados muito específicos e legalmente vinculativos.

Nesta aula, vamos explorar os termos fundamentais da actividade policial angolana, compreendendo não apenas as suas definições, mas também o seu contexto de utilização e as implicações práticas. Este conhecimento será decisivo na prova escrita do concurso, particularmente nas questões de compreensão de textos oficiais, redacção de relatórios e interpretação de legislação. Além disso, demonstrará ao júri que você compreende a cultura institucional e a linguagem profissional do MININT.

---

## Conceitos Fundamentais

### 1. **Detenção vs. Prisão**

**Definição clara:**
A detenção é o acto de impedir a liberdade de circulação de uma pessoa por um período limitado (até 24 horas, conforme o Código de Processo Penal angolano), enquanto a prisão é uma medida de coação mais grave, decretada por autoridade judicial, que pode ter duração prolongada.

**Exemplo concreto:**
Um polícia detém um indivíduo suspeito de roubo durante uma operação de patrulhamento na Baixa de Luanda. Essa detenção não pode exceder 24 horas. Se, após investigação, existirem indícios suficientes, o Ministério Público pode requerer a prisão preventiva ao tribunal, que pode durar até 90 dias.

**Nota prática:**
Na redacção de relatórios, é fundamental distinguir estes termos. Usar "prisão" quando se refere a "detenção" constitui um erro grave que pode invalidar procedimentos legais.

---

### 2. **Flagrante Delito**

**Definição clara:**
Flagrante delito é a situação em que uma pessoa é apanhada no acto de cometer um crime ou imediatamente após, com evidência clara da sua autoria. É uma circunstância que permite a detenção sem mandado judicial.

**Exemplo concreto:**
Um agente da PNA observa um indivíduo a assaltar uma loja no Sambizanga. O polícia intervém e detém o suspeito no local, com a mercadoria roubada ainda na sua posse. Esta é uma situação de flagrante delito, que justifica a detenção imediata.

**Nota prática:**
O flagrante delito é uma das poucas situações em que a polícia pode actuar sem mandado. Contudo, deve ser documentado com precisão no auto de detenção, incluindo hora, local, testemunhas e descrição exacta do que foi observado.

---

### 3. **Revista e Revista Pessoal**

**Definição clara:**
A revista é o acto de inspecção de bens, veículos ou locais para procura de objectos ilícitos ou provas de crime. A revista pessoal é a inspecção do corpo de uma pessoa, realizada com respeito pela dignidade humana e, preferencialmente, por agente do mesmo sexo.

**Exemplo concreto:**
Durante uma operação de segurança no Kilamba, agentes da PNA efectuam revista de veículos em pontos de controlo. Num desses veículos, encontram armas ilegais. Posteriormente, realizam revista pessoal ao condutor, sendo esta efectuada por um agente do mesmo sexo, respeitando os direitos fundamentais.

**Nota prática:**
A revista deve ser sempre documentada. Qualquer objecto apreendido deve ser registado em auto próprio, com descrição detalhada, assinatura de testemunhas e identificação clara do agente responsável.

---

### 4. **Apreensão e Depósito**

**Definição clara:**
Apreensão é o acto de tomar posse de bens relacionados com a prática de crime ou que constituem instrumentos ou produtos de crime. O depósito é o local seguro onde esses bens são armazenados, sob responsabilidade da polícia.

**Exemplo concreto:**
Numa operação contra tráfico de drogas no Cazenga, agentes apreendem 5 quilogramas de cocaína, uma arma de fogo e 50 mil kwanzas em dinheiro. Estes bens são registados e colocados no depósito da esquadra, sob vigilância, até decisão judicial.

**Nota prática:**
O depósito deve ter registo rigoroso de entrada e saída de bens. Qualquer irregularidade neste processo pode comprometer a validade das provas em tribunal.

---

### 5. **Mandado de Busca e Apreensão**

**Definição clara:**
É uma ordem judicial que autoriza a polícia a entrar num local específico, procurar objectos relacionados com crime e apreendê-los. Deve ser emitido por autoridade judicial competente e conter descrição clara do local e do que se procura.

**Exemplo concreto:**
O Ministério Público obtém um mandado de busca para uma residência em Viana, onde se suspeita de armazenamento de armas ilegais. Os agentes da PNA executam a busca, encontram as armas, procedem à apreensão e elaboram auto circunstanciado.

**Nota prática:**
A execução de um mandado de busca deve ser rigorosa: deve ser apresentado ao proprietário, deve haver testemunhas, e tudo deve ser documentado fotograficamente quando possível. Qualquer desvio do mandado pode invalidar as provas.

---

### 6. **Denúncia e Participação**

**Definição clara:**
Denúncia é a comunicação de um crime feita por qualquer pessoa ao órgão de polícia criminal. Participação é a comunicação de um crime feita pela vítima ou por quem tenha conhecimento directo dos factos.

**Exemplo concreto:**
Um cidadão contacta a esquadra da PNA para denunciar actividades suspeitas num bairro. Uma vítima de roubo apresenta participação formal na polícia, descrevendo o crime e identificando o suspeito.

**Nota prática:**
Ambas devem ser registadas em livro próprio, com data, hora, identificação de quem reporta e descrição clara dos factos. Este registo é fundamental para estatísticas criminais e para rastreabilidade processual.

---

## Aprofundamento

### Contexto Legal e Regulatório

O vocabulário técnico policial em Angola está enquadrado pela **Constituição da República de Angola**, pelo **Código de Processo Penal**, pela **Lei de Organização da Polícia Nacional** e por diversos regulamentos internos do MININT. É essencial que o candidato compreenda que cada termo não é arbitrário, mas resulta de uma construção legal rigorosa.

Quando falamos de "detenção", estamos a referir-nos a um direito fundamental protegido constitucionalmente. O artigo 30 da Constituição garante a liberdade pessoal, e qualquer restrição deve ser proporcional e legal. Por isso, a detenção tem um limite temporal (24 horas) e deve ser comunicada ao Ministério Público. Ultrapassar este prazo sem formalização legal constitui detenção ilegal, com consequências graves para o agente responsável.

### Redacção de Documentos Oficiais

Na prática profissional, o polícia deve redigir autos, relatórios e participações utilizando este vocabulário com precisão. Um auto de detenção deve conter:

- **Identificação clara** do detido (nome completo, data de nascimento, filiação, naturalidade)
- **Circunstâncias da detenção** (hora, local, motivo, se em flagrante ou por mandado)
- **Descrição dos factos** que justificam a detenção
- **Bens apreendidos**, se aplicável, com descrição pormenorizada
- **Assinatura do agente** e de testemunhas
- **Referência ao direito de informação** ao Ministério Público

### Distinções Críticas

É fundamental compreender as seguintes distinções:

| Termo | Duração | Autoridade | Documentação |
|-------|---------|-----------|--------------|
| **Detenção** | Até 24 horas | Polícia | Auto de detenção |
| **Prisão Preventiva** | Até 90 dias | Tribunal | Mandado de prisão |
| **Prisão Preventiva Renovada** | Até 180 dias | Tribunal | Decisão judicial |
| **Prisão Definitiva** | Conforme sentença | Tribunal | Sentença condenatória |

---

## Exemplos Resolvidos

### Exemplo 1: Análise de Situação de Flagrante Delito

**Situação:**
Um agente da PNA, durante patrulhamento nocturno no Rangel, observa um indivíduo a arrombar a porta de uma loja. O agente intervém, detém o suspeito e encontra ferramentas de arrombamento e mercadoria roubada na sua posse.

**Análise passo-a-passo:**

1. **Identificação da situação:** Flagrante delito de roubo/furto qualificado
2. **Justificação da detenção:** O agente presenciou o crime em acto, o que autoriza detenção imediata sem mandado
3. **Documentação necessária:**
   - Auto de detenção (incluindo hora exacta: 23h45, local preciso: Rua X, Rangel)
   - Descrição do suspeito (características físicas, vestuário)
   - Inventário de bens apreendidos (ferramentas, mercadoria, com fotografias se possível)
   - Identificação de testemunhas presentes
4. **Próximos passos:** Comunicação ao Ministério Público dentro de 24 horas, apresentação ao tribunal para decisão sobre prisão preventiva

**Conclusão:** Este é um caso claro de flagrante delito, devidamente documentado, que permite prosseguimento processual válido.

---

### Exemplo 2: Redacção de Relatório de Revista

**Situação:**
Durante operação de segurança no Cazenga, agentes revistam um veículo e encontram uma arma de fogo não registada.

**Redacção correcta:**

> *"Aos 15 de Março de 2024, pelas 14h30, na Avenida Agostinho Neto, Cazenga, durante operação de segurança autorizada, procedemos à revista do veículo de matrícula ABC-1234. Durante a revista, encontrámos, no compartimento de ferramentas, uma arma de fogo tipo pistola, marca Taurus, calibre 9mm, série 123456, sem registo legal. A arma foi apreendida e colocada em depósito. O proprietário do veículo, Sr. João Silva, foi informado dos seus direitos e da apreensão. Testemunhas: Agente Pedro Neves (matrícula 5678) e Agente Maria Gonçalves (matrícula 5679)."*

**Análise:**
- Data e hora precisas ✓
- Local específico ✓
- Descrição detalhada do bem apreendido ✓
- Identificação clara de testemunhas ✓
- Referência a direitos do cidadão ✓

---

### Exemplo 3: Interpretação de Mandado de Busca

**Situação:**
Um candidato recebe um mandado de busca que autoriza procura de "documentos relacionados com fraude" numa residência. O agente encontra documentos, um computador e dinheiro em espécie.

**Análise correcta:**

1. **Documentos:** Podem ser apreendidos (estão explicitamente no mandado)
2. **Computador:** Pode ser apreendido se contiver documentos relacionados com fraude (interpretação razoável)
3. **Dinheiro em espécie:** Só pode ser apreendido se houver indicação clara de que é produto de fraude (não está explícito no mandado)

**Conclusão:** O agente deve apreender documentos e computador, mas registar o dinheiro e solicitar orientação ao Ministério Público sobre apreensão.

**Lição:** Os mandados têm limites específicos. Ultrapassá-los invalida as provas.

---

## Erros Comuns a Evitar

### 1. **Confundir Detenção com Prisão**
**Erro:** "O suspeito foi preso durante 24 horas."
**Correcto:** "O suspeito foi detido durante 24 horas."
**Porquê:** Prisão é medida judicial; detenção é acto policial.

### 2. **Omitir Testemunhas em Autos**
**Erro:** Auto de detenção sem identificação de testemunhas.
**Correcto:** Auto com nomes completos, matrículas e assinaturas de testemunhas.
**Porquê:** Testemunhas garantem validade processual e credibilidade.

### 3. **Usar Linguagem Vaga em Apreensões**
**Erro:** "Foram apreendidos alguns objectos."
**Correcto:** "Foram apreendidos: 1 telemóvel marca Samsung, cor preta; 3 carteiras de couro; 250 mil kwanzas em notas de 5 mil."
**Porquê:** Precisão evita contestações legais e confusões administrativas.

### 4. **Não Distinguir Flagrante de Suspeita**
**Erro:** Deter alguém por "parecer suspeito" sem acto criminoso observado.
**Correcto:** Deter apenas em flagrante delito ou com mandado judicial.
**Porquê:** Detenção sem fundamento é ilegal e viola direitos fundamentais.

### 5. **Exceder Limites de Mandados**
**Erro:** Apreender bens não mencionados num mandado de busca.
**Correcto:** Apreender apenas o que está autorizado; solicitar novo mandado se necessário.
**Porquê:** Excesso invalida provas e compromete processos judiciais.

### 6. **Misturar Conceitos de Revista Pessoal**
**Erro:** Realizar revista pessoal sem respeitar dignidade ou sem agente do mesmo sexo.
**Correcto:** Revista pessoal sempre com agente do mesmo sexo e com máximo respeito.
**Porquê:** Violação de direitos fundamentais e potencial nulidade processual.

---

## Resumo

### 5 Pontos-Chave para Memorizar

1. **Detenção ≠ Prisão:** Detenção é acto policial (até 24h); prisão é medida judicial (duração variável). Esta distinção é fundamental em toda a documentação.

2. **Flagrante Delito é Autorização:** Presenciar crime em acto autoriza detenção imediata sem mandado. Deve ser documentado com precisão (hora, local
$lesson44$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'compreensao',
  'Compreensão e interpretação de texto',
  $lesson45$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). Muitos candidatos cometem o erro crasso de subestimar a Língua Portuguesa, focando-se apenas na preparação física ou no conhecimento específico da lei. No entanto, recordem-se: um oficial do Ministério do Interior (MININT) que não compreende correctamente uma ordem superior ou que redige com ambiguidade um auto de notícia é um perigo para a segurança jurídica e para a ordem pública.

Nesta aula, vamos dissecar a **Compreensão e Interpretação de Texto**. Não se trata apenas de ler; trata-se de descodificar, analisar e concluir com rigor.

---

## Introdução

A prova de Língua Portuguesa para o concurso do MININT exige do candidato uma competência que vai além da alfabetização funcional. No contexto policial, a interpretação de texto é uma ferramenta de trabalho. Diariamente, os efectivos lidam com despachos, decretos-lei, relatórios de ocorrências e directivas operacionais. Um erro de interpretação sobre "quem", "como" ou "quando" pode comprometer a justiça e a liberdade dos cidadãos.

Nesta aula, focaremos na distinção entre o que o texto diz explicitamente (compreensão) e o que ele sugere implicitamente (interpretação). Vamos aprender a identificar a espinha dorsal de um texto informativo e oficial, separando o essencial do acessório, para que, no momento do exame, não sejam traídos pelas "ratoeiras" linguísticas comuns nestes certames.

---

## Conceitos Fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces em cinco conceitos fundamentais:

### 1. Compreensão vs. Interpretação
*   **Definição:** A compreensão (ou intelecção) refere-se à análise objectiva do que está escrito. A interpretação é o que deduzimos a partir do texto, indo além da superfície.
*   **Exemplo:** Se um comunicado diz: "A criminalidade em Luanda reduziu 10% após o reforço do patrulhamento", a **compreensão** é que houve uma queda estatística. A **interpretação** sugere que a estratégia de patrulhamento foi eficaz.
*   **Nota Prática:** Nas perguntas de compreensão, as respostas começam com "Segundo o texto...", "O autor afirma que...". Na interpretação, começam com "Infere-se que...", "Conclui-se do texto que...".

### 2. Ideia Principal e Ideias Secundárias
*   **Definição:** A ideia principal é o núcleo informativo do parágrafo ou texto. As secundárias são exemplos, justificações ou detalhes que orbitam o núcleo.
*   **Exemplo:** Num texto sobre a Lei de Segurança Nacional, a ideia principal pode ser a protecção do Estado, enquanto as secundárias detalham as penas para crimes de traição.
*   **Nota Prática:** Se retirar a ideia principal, o texto perde o sentido. Se retirar as secundárias, o texto fica apenas mais curto.

### 3. Inferência (ou Dedução)
*   **Definição:** É o processo de chegar a uma conclusão lógica com base em pistas deixadas pelo autor.
*   **Exemplo:** "O agente chegou à esquadra com a farda molhada e o guarda-chuva fechado na mão." **Infere-se** que estava a chover lá fora.
*   **Nota Prática:** A inferência deve ser sempre baseada em factos do texto, nunca em opiniões pessoais do candidato.

### 4. Denotação e Conotação
*   **Definição:** Denotação é o uso da palavra no sentido literal (dicionário). Conotação é o sentido figurado, dependente do contexto.
*   **Exemplo:** "A Polícia é o braço direito da justiça" (Conotação - apoio/ferramenta). "O agente feriu o braço direito" (Denotação - anatomia).
*   **Nota Prática:** Textos oficiais do MININT privilegiam quase exclusivamente a linguagem denotativa para evitar ambiguidades.

### 5. Tipologia Textual: O Texto Informativo/Oficial
*   **Definição:** Textos que visam transmitir dados, normas ou factos de forma impessoal e clara.
*   **Exemplo:** Um Decreto Presidencial ou uma Ordem de Serviço do Comandante Geral.
*   **Nota Prática:** Nestes textos, a objectividade é a regra. O autor não usa "eu acho" ou "talvez".

---

## Aprofundamento

No contexto de um concurso público em Angola, a banca examinadora costuma utilizar textos extraídos do *Jornal de Angola* ou do *Diário da República*. É imperativo que o candidato domine a **Estrutura do Texto Oficial**.

### Estratégias de Leitura Crítica
1.  **Skimming (Leitura Superficial):** Leiam o texto rapidamente para identificar o tema geral. Quem escreveu? Para quem? Sobre o quê?
2.  **Scanning (Leitura Selectiva):** Procurem palavras-chave (datas, nomes de instituições, verbos de ordem como "determina", "proíbe").
3.  **Análise de Conectores:** As conjunções são as dobradiças do texto.
    *   **Adversativas (mas, porém, contudo):** Indicam uma mudança de direcção no argumento.
    *   **Conclusivas (logo, portanto, por conseguinte):** Introduzem a ideia final que a banca adora perguntar.

### A Natureza do Texto no MININT
Os textos de natureza oficial seguem o princípio da **concisão** e **clareza**. No entanto, a complexidade reside no vocabulário técnico-jurídico. Ao interpretar um texto sobre a "Lei Orgânica da Polícia Nacional", o candidato deve estar atento à hierarquia das normas. Se o texto diz que uma norma "revoga" outra, ele deve compreender que a anterior deixou de existir.

**Regra de Ouro:** Nunca tragam conhecimentos externos para dentro da interpretação. Se o texto diz que "o sol é azul", para efeitos daquela questão, o sol é azul. O erro mais comum em Angola é o candidato querer responder com base no que ouviu na "Rádio Despertar" ou na "TPA", esquecendo o que está escrito no papel à sua frente.

---

## Exemplos Resolvidos

### Exemplo 1: Compreensão de Texto Normativo
**Texto:** *"O uso da força por parte dos efectivos da Polícia Nacional deve ser estritamente proporcional à resistência oferecida, visando sempre a neutralização da ameaça e a preservação da vida."*

**Pergunta:** De acordo com o texto, quando deve a polícia usar a força?
A) Sempre que houver um crime.
B) De forma superior à força do criminoso para garantir a vitória.
C) Em resposta proporcional à resistência encontrada.

**Resolução:**
*   **Raciocínio:** O texto utiliza a expressão "estritamente proporcional".
*   **Resposta Correcta:** **C**. As opções A e B extrapolam ou contrariam o texto.

### Exemplo 2: Inferência em Texto Informativo
**Texto:** *"O Ministério do Interior anunciou a abertura de 5.000 novas vagas para a carreira policial. Este aumento do efectivo visa dar resposta ao crescimento demográfico nas novas centralidades de Luanda."*

**Pergunta:** Infere-se do texto que:
A) Luanda tem falta de polícias devido ao aumento da população.
B) O concurso é apenas para residentes nas centralidades.
C) A criminalidade aumentou nas centralidades.

**Resolução:**
*   **Raciocínio:** O texto diz que as vagas visam "dar resposta ao crescimento demográfico". Se é preciso mais polícia porque há mais gente, infere-se que o rácio actual é insuficiente.
*   **Resposta Correcta:** **A**. A opção B é uma restrição que o texto não faz. A opção C é uma suposição (pode haver mais gente sem haver mais crime, embora seja provável, o texto não afirma).

### Exemplo 3: Identificação de Ideia Principal
**Texto:** *"A formação contínua dos agentes é o pilar fundamental da modernização da PNA. Sem instrução técnica e ética, os investimentos em viaturas e armamento tornam-se ineficazes, pois o capital humano é que operacionaliza a segurança."*

**Pergunta:** Qual é a ideia central do fragmento?
A) A compra de viaturas e armamento para a polícia.
B) A primazia da formação humana sobre o investimento material.
C) A necessidade de novos quartéis em Angola.

**Resolução:**
*   **Raciocínio:** O autor compara o investimento material com a formação e conclui que a formação é o "pilar fundamental".
*   **Resposta Correcta:** **B**.

---

## Erros Comuns a Evitar

1.  **Extrapolação:** É o erro de "viajar" além do texto. O candidato acrescenta informações que ele conhece, mas que não estão lá.
2.  **Redução:** É focar-se apenas num detalhe ou exemplo e esquecer o objectivo geral do texto.
3.  **Contradição:** Ler mal uma palavra de negação (não, nunca, jamais, excepto) e marcar a opção oposta à verdade.
4.  **Subjectividade:** Deixar que o sentimento pessoal sobre a polícia ou o governo influencie a análise técnica do texto.
5.  **Ignorar o Título:** Muitas vezes, o título antecipa a ideia principal e ajuda a situar o contexto.

---

## Resumo para Memorização

1.  **Compreender** é ler o que está escrito; **Interpretar** é ler o que está nas entrelinhas.
2.  A **Ideia Principal** é o coração do texto; sem ela, o texto morre.
3.  Em concursos do MININT, a linguagem é **Denotativa** (literal e clara).
4.  As **Conjunções** (mas, portanto, porque) definem a lógica do argumento.
5.  **Atenção aos Comandos:** "Segundo o autor" (está no texto) vs "Depreende-se" (está fora, mas é lógico).

---

## Glossário

1.  **Ambuidade:** Falta de clareza; quando uma frase permite dois ou mais sentidos.
2.  **Coesão:** Ligação gramatical entre as frases e parágrafos (uso de pronomes e conectores).
3.  **Coerência:** Lógica interna do texto; ausência de contradições.
4.  **Intelecção:** O mesmo que compreensão; acto de entender o sentido exacto das palavras.
5.  **Infere-se:** Conclui-se, deduz-se através da lógica.
6.  **Lexicologia:** Estudo do conjunto de palavras (vocabulário) de uma língua ou contexto.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
8.  **Texto Injuntivo:** Texto que dá ordens ou instruções (comum em manuais e leis).

Estudem com afinco, candidatos. A farda exige inteligência e disciplina. Até à próxima aula!
$lesson45$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'tipos-texto',
  'Tipos e géneros textuais',
  $lesson46$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão no Ministério do Interior (MININT). Não se enganem: um oficial de polícia não maneja apenas o armamento ou a técnica de patrulhamento; a sua principal ferramenta de trabalho, no dia-a-dia administrativo e jurídico, é a **Língua Portuguesa**.

## Introdução

A prova de admissão para a Polícia Nacional exige do candidato não apenas o conhecimento das leis, mas a capacidade de interpretar e produzir textos com clareza, rigor e objectividade. No exercício das vossas funções, serão chamados a redigir Autos de Notícia, Relatórios de Ocorrência e participações que servirão de base para processos judiciais. Se um agente não souber distinguir um relato de factos (narração) de uma descrição de um suspeito (descrição), a eficácia da justiça angolana pode ficar comprometida por falhas de comunicação.

Nesta aula, vamos dissecar a tipologia textual e os géneros textuais. Compreender a estrutura de um texto é o que vos permitirá ler uma Ordem de Serviço do Comando Geral e executá-la sem hesitações, ou interpretar correctamente uma questão de interpretação de texto na vossa prova de concurso. O rigor que exijo nesta aula é o mesmo rigor que a farda que pretendem envergar exige de cada cidadão que serve a Pátria.

---

## Conceitos fundamentais

Para dominarmos a língua, precisamos de organizar os textos em categorias. Vamos focar-nos nos cinco tipos principais que surgem invariavelmente nos exames do MININT.

### 1. Texto Narrativo
**Definição:** É o texto que relata uma sequência de acontecimentos, reais ou imaginários, vividos por personagens num determinado tempo e espaço. Predominam os verbos de acção no pretérito (passado).
- **Exemplo concreto:** Um **Auto de Notícia** relatando uma detenção em flagrante delito no mercado do Trinta, em Luanda, detalhando quem fez o quê e em que ordem.
- **Nota prática:** A narração responde à pergunta: *"O que aconteceu?"*

### 2. Texto Descritivo
**Definição:** É o texto que "pinta" uma imagem com palavras. Detalha características de objectos, pessoas, lugares ou situações. Há uma forte presença de adjectivos e verbos de estado.
- **Exemplo concreto:** A caracterização de um indivíduo procurado: "Indivíduo de estatura média, tez escura, com uma cicatriz no braço direito, trajando t-shirt branca e calças jeans azuis."
- **Nota prática:** A descrição responde à pergunta: *"Como é?"*

### 3. Texto Expositivo
**Definição:** Tem como objectivo principal informar, explicar ou apresentar um conceito de forma objectiva e neutra, sem tentar convencer o leitor ou narrar uma história.
- **Exemplo concreto:** Um artigo no **Diário da República** explicando as novas competências da Polícia de Guarda Fronteiras.
- **Nota prática:** A exposição responde à pergunta: *"O que é isto/Como funciona?"*

### 4. Texto Argumentativo
**Definição:** É o texto em que o autor defende um ponto de vista (tese) através de argumentos lógicos, com o objectivo de persuadir ou convencer o interlocutor.
- **Exemplo concreto:** Um parecer jurídico de um comissário justificando a necessidade de reforço do policiamento de proximidade num determinado bairro para reduzir a criminalidade.
- **Nota prática:** A argumentação responde à pergunta: *"Por que razão defendo esta ideia?"*

### 5. Texto Instrucional e Injuntivo
**Definição:** Ambos orientam o comportamento do receptor. O **instrucional** fornece instruções (como um manual), enquanto o **injuntivo** impõe ordens ou normas com carácter coercivo.
- **Exemplo concreto:** O **Código de Estrada** (injuntivo) ou o manual de manutenção de uma viatura patrulha (instrucional).
- **Nota prática:** Estes textos utilizam frequentemente o modo imperativo ("Faça", "Pare", "Cumpra").

---

## Aprofundamento

Meus caros, para o concurso, não basta saber as definições; é preciso compreender a estrutura técnica.

### A Estrutura do Texto Narrativo na Função Policial
Na narração policial, o rigor cronológico é vital. Utilizamos o **Pretérito Perfeito do Indicativo** para acções concluídas ("O suspeito *disparou*") e o **Pretérito Imperfeito** para acções contínuas ou circunstanciais ("Enquanto a patrulha *circulava*..."). Num exame, se virem uma sucessão de verbos de acção, marquem "Narrativo".

### A Objectividade no Texto Expositivo-Argumentativo
Muitas vezes, os textos oficiais do MININT são híbridos. Um relatório pode começar por ser **expositivo** (apresentando dados estatísticos sobre crimes em Benguela) e terminar de forma **argumentativa** (propondo soluções baseadas nesses dados). A gramática aqui exige o uso de conectores lógicos (conjunções): *"portanto", "todavia", "visto que", "por conseguinte"*. O domínio destes conectores é o que separa um candidato aprovado de um reprovado.

### Texto Injuntivo: A Linguagem da Autoridade
A Polícia Nacional rege-se pela hierarquia e disciplina. Por isso, o texto injuntivo é a base das **Ordens de Serviço**. A característica gramatical principal é o uso do **Imperativo** ou do **Infinitivo com valor de imperativo**. Exemplo: "Circular com as luzes de emergência ligadas" ou "Apresente-se imediatamente ao Comando". Em provas, textos que indicam normas, leis ou manuais de conduta são classificados como injuntivos.

---

## Exemplos resolvidos

### Exemplo 1: Identificação de Tipologia
**Texto:** *"O agente aproximou-se da viatura, solicitou a documentação ao condutor e, após verificar a irregularidade, efectuou a autuação conforme a lei vigente."*
- **Pergunta:** Qual a tipologia predominante?
- **Raciocínio:** Observamos uma sequência de acções no passado (aproximou-se, solicitou, verificou, efectuou). Há uma progressão temporal.
- **Resposta:** Texto Narrativo.

### Exemplo 2: Análise de Texto Oficial
**Texto:** *"Considerando o aumento do fluxo migratório na fronteira do Luvo, torna-se imperativo o reforço do efectivo. A segurança nacional depende da nossa capacidade de resposta imediata nestes pontos críticos."*
- **Pergunta:** Qual a intenção comunicativa deste fragmento?
- **Raciocínio:** O autor apresenta um facto (aumento do fluxo) e utiliza-o para defender uma necessidade (reforço do efectivo), tentando convencer da importância da acção.
- **Resposta:** Texto Argumentativo.

### Exemplo 3: Distinção entre Descritivo e Expositivo
**Texto A:** *"A nova farda da Polícia Nacional é composta por um tecido resistente, de cor azul-escuro, com o emblema bordado no braço esquerdo."*
**Texto B:** *"A Polícia Nacional de Angola é uma instituição paramilitar, organizada hierarquicamente, que visa garantir a ordem e a tranquilidade públicas."*
- **Análise:** O Texto A foca em características físicas e sensoriais (cor, posição, material), logo é **Descritivo**. O Texto B define o que é a instituição, a sua natureza e missão, logo é **Expositivo**.

---

## Erros comuns a evitar

1.  **Confundir Narrativo com Descritivo:** Lembrem-se: a narração tem movimento (acção); a descrição é uma "fotografia" parada (características).
2.  **Achar que todo o texto oficial é Injuntivo:** Nem todo o documento da polícia é uma ordem. Um relatório de actividades anual é **Expositivo**, não injuntivo.
3.  **Ignorar os Conectores:** Em textos argumentativos, os candidatos costumam errar a interpretação por não saberem se "contudo" indica oposição ou conclusão. Estudem as conjunções!
4.  **Subestimar o Contexto:** No concurso do MININT, as questões usam frequentemente extractos da Constituição da República de Angola (CRA). Leiam a CRA para se familiarizarem com o tom expositivo-injuntivo da lei.

---

## Resumo para memorização

1.  **Narrativo:** Foca na acção e no tempo (Ex: Relato de crime).
2.  **Descritivo:** Foca nos detalhes e adjectivos (Ex: Retrato falado).
3.  **Expositivo:** Foca na informação neutra e conceitos (Ex: Definição de lei).
4.  **Argumentativo:** Foca na defesa de opinião e persuasão (Ex: Justificação de estratégia).
5.  **Injuntivo:** Foca na ordem e na norma (Ex: Regulamento Disciplinar da PN).

---

## Glossário

1.  **Coerência:** Relação lógica entre as ideias de um texto.
2.  **Coesão:** Ligação gramatical entre as palavras e frases (uso de conectores).
3.  **Coercivo:** Que tem poder de obrigar ou reprimir (comum em textos injuntivos legais).
4.  **Género Textual:** A forma social do texto (Ex: Ofício, Circular, Relatório).
5.  **Tipologia Textual:** A estrutura interna do texto (Ex: Narração, Descrição).
6.  **Pretérito Perfeito:** Tempo verbal que indica uma acção totalmente concluída no passado.
7.  **Imperativo:** Modo verbal que exprime ordem, pedido ou conselho.
8.  **Tez:** Cor ou aspecto da pele do rosto (termo comum em descrições policiais).

Estudem com afinco, aspirantes. A farda não aceita a ignorância. A vossa capacidade de compreender estes textos será a vossa primeira vitória no concurso. Força e disciplina!
$lesson46$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'coesao',
  'Coesão e coerência textual',
  $lesson47$
Bom dia, caros candidatos. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a uma unidade fundamental para quem aspira envergar a farda da **Polícia Nacional de Angola (PN)** ou integrar qualquer órgão do **Ministério do Interior (MININT)**. Não estamos aqui apenas para aprender a "escrever bonito"; estamos aqui para aprender a escrever com precisão, lógica e autoridade.

## Introdução

A coesão e a coerência textual não são meros adornos gramaticais; são ferramentas de trabalho essenciais para o oficial de polícia. Imaginem um Auto de Notícia ou um Relatório de Ocorrência onde as ideias se atropelam, onde os factos são contraditórios ou onde o uso incorrecto de um conector altera o sentido de um depoimento. Um erro desta natureza pode comprometer uma investigação, invalidar um processo judicial e, em última instância, prejudicar a administração da justiça na nossa República.

Para o concurso público do MININT, o júri de exame procura candidatos que demonstrem domínio da norma culta da língua portuguesa (norma angolana). A prova de Língua Portuguesa avalia a vossa capacidade de organizar o pensamento de forma lógica e estruturada. Nesta aula, vamos dissecar os mecanismos que transformam um amontoado de frases num **texto** — uma unidade de sentido coerente e coesa.

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces sobre cinco conceitos fundamentais:

1.  **Coesão Textual:** É a ligação física, gramatical e lexical entre os elementos do texto (palavras, frases, parágrafos). Se o texto fosse uma parede, a coesão seria o cimento que une os tijolos.
    *   *Exemplo:* "O agente deu ordem de paragem. **Este** agiu conforme o regulamento." (O pronome "este" liga a segunda frase à primeira).
    *   *Nota prática:* Sem coesão, o texto parece uma lista de compras, sem fluidez.

2.  **Coerência Textual:** Refere-se à harmonia de sentido do texto. É a relação lógica entre as ideias, garantindo que não haja contradições e que a mensagem seja compreensível.
    *   *Exemplo:* Seria incoerente escrever: "O suspeito estava desarmado, por isso disparou contra a patrulha." (Se estava desarmado, não poderia disparar).
    *   *Nota prática:* A coerência depende do conhecimento de mundo e do contexto logístico da acção policial.

3.  **Conectores (ou Articuladores):** São palavras ou expressões (conjunções, advérbios, locuções) que estabelecem relações de sentido entre as orações (causa, oposição, conclusão, etc.).
    *   *Exemplo:* "Houve uma infracção, **contudo** o condutor recusou-se a pagar a multa."
    *   *Nota prática:* O uso errado de um conector (como usar "portanto" em vez de "entretanto") destrói a lógica do argumento.

4.  **Anáfora e Catáfora:** São mecanismos de referência. A anáfora retoma algo já dito; a catáfora antecipa algo que será dito.
    *   *Exemplo (Anáfora):* "A esquadra foi reabilitada. **Ela** agora tem melhores condições."
    *   *Nota prática:* Evitam a repetição excessiva de substantivos, tornando a leitura menos cansativa.

5.  **Progressão Temática:** É a forma como o texto avança, acrescentando informações novas a informações já conhecidas, sem fugir do tema central.
    *   *Exemplo:* Começar por descrever o local do crime, depois as provas encontradas e, finalmente, os suspeitos identificados.
    *   *Nota prática:* Um texto sem progressão é redundante; "anda em círculos".

## Aprofundamento

### 1. Mecanismos de Coesão Gramatical

A coesão gramatical utiliza os recursos do sistema da língua. No contexto do MININT, a precisão é vital:

*   **Referenciação:** O uso de pronomes pessoais, possessivos e demonstrativos. Em Angola, é comum o uso do pronome "o mesmo" para retomar um sujeito, mas cuidado: o uso excessivo é considerado vício de linguagem. Prefira sinónimos ou a omissão do sujeito quando o contexto permitir.
*   **Coesão Frásica:** Refere-se à concordância e à ordem das palavras. "Os efectivos da PN **estão** prontos" (concordância verbal correcta).
*   **Coesão Interfrásica:** É aqui que entram os conectores. Devem memorizar as tabelas de conjunções:
    *   *Adversativas (Oposição):* mas, porém, todavia, contudo, no entanto.
    *   *Conclusivas:* logo, portanto, por conseguinte, assim.
    *   *Causais:* porque, visto que, dado que, pois.

### 2. Mecanismos de Coesão Lexical

Ocorre através da escolha das palavras (vocabulário):

*   **Sinonímia:** Substituir uma palavra por outra de sentido semelhante para evitar a repetição. Em vez de repetir "crime" cinco vezes, use "delito", "infracção", "acto ilícito", "ocorrência".
*   **Hiperonímia e Hiponímia:** Relação do geral para o particular. "Viatura" é o hiperónimo de "patrulha", "jipe" ou "motocicleta".
*   **Reiteração:** Às vezes, a repetição de uma palavra-chave é necessária para dar ênfase ou garantir que não haja dúvida sobre quem se fala (muito comum em textos jurídicos e policiais).

### 3. Coerência e Progressão Temática

Um texto coerente deve respeitar três princípios:
1.  **Não-contradição:** Não afirmar A e depois dizer o contrário de A.
2.  **Não-tautologia:** Não ser repetitivo ao ponto de não acrescentar informação nova (o famoso "subir para cima").
3.  **Relevância:** As informações devem ser pertinentes ao tema. Num relatório sobre um assalto na Ilha do Cabo, não é relevante descrever a cor das flores do jardim vizinho, a menos que isso tenha influência no crime.

## Exemplos resolvidos

**Exercício 1: Identificação de Conectores**
*Enunciado:* "O Comandante Provincial deu as ordens necessárias, __________ os oficiais não as cumpriram de imediato, __________ houve um erro de comunicação." Preencha as lacunas com os conectores adequados.

*   **Resolução:**
    1.  A primeira relação é de oposição (as ordens foram dadas, mas não cumpridas). Conectores possíveis: *mas, contudo, todavia*.
    2.  A segunda relação é de causa (o motivo de não terem cumprido foi o erro). Conectores possíveis: *porque, visto que, pois*.
    *   *Resposta final:* "O Comandante Provincial deu as ordens necessárias, **contudo** os oficiais não as cumpriram de imediato, **visto que** houve um erro de comunicação."

**Exercício 2: Coesão por Referenciação**
*Enunciado:* Substitua as repetições no texto seguinte: "O suspeito foi detido no Sambizanga. O suspeito levava consigo uma arma. A arma não tinha licença."

*   **Resolução:**
    1.  Podemos substituir o segundo "O suspeito" pelo pronome "Ele" ou por um sinónimo como "O indivíduo".
    2.  Podemos substituir "A arma" pelo pronome relativo "que" ou por "esta".
    *   *Resposta final:* "O suspeito foi detido no Sambizanga. **Ele** levava consigo uma arma **que** não tinha licença." (Ou: "...uma arma, a qual não possuía licença.")

**Exercício 3: Análise de Coerência**
*Enunciado:* Analise a coerência da frase: "Devido à forte chuva que assolou Luanda, os bombeiros foram chamados para apagar um incêndio florestal de grandes proporções."

*   **Resolução:**
    *   A frase é **incoerente**.
    *   *Raciocínio:* Se houve uma "forte chuva", é logicamente improvável (quase impossível) que ocorra um "incêndio florestal de grandes proporções" ao mesmo tempo, pois a humidade impede a propagação do fogo desta natureza. Há uma contradição pragmática entre a causa (chuva) e o efeito (incêndio florestal).

## Erros comuns a evitar

1.  **Queísmo:** O uso excessivo da palavra "que". Exemplo: "O agente que disse que o carro que foi roubado..." Corrija usando particípios ou pronomes: "O agente, ao afirmar que o carro roubado..."
2.  **Ambiguidade (Anfibologia):** Frases com duplo sentido. Exemplo: "O polícia prendeu o ladrão em sua casa." (Na casa de quem? Do polícia ou do ladrão?). Seja específico: "O polícia prendeu o ladrão na residência deste último."
3.  **Uso indevido de "onde":** Lembre-se, "onde" só deve ser usado para **lugares físicos**. Nunca diga: "A situação onde o crime ocorreu". Diga: "A situação **em que** o crime ocorreu".
4.  **Falta de concordância por distanciamento:** Quando o sujeito está longe do verbo, o candidato tende a errar. "A lista dos candidatos aprovados no concurso do MININT para as províncias do sul **saíram** ontem." (Errado! O que saiu foi a **lista**. O correcto é: "...**saiu** ontem").
5.  **Conectores contraditórios:** Usar "embora" (concessivo) quando se quer dar uma ideia de causa.

## Resumo

1.  **Coesão** é a ligação gramatical; **Coerência** é a ligação lógica de sentido.
2.  Os **conectores** são a chave para a pontuação e para a clareza do raciocínio jurídico-policial.
3.  Evite a **repetição** desnecessária usando sinónimos e pronomes (anáfora).
4.  A **progressão temática** garante que o texto apresente factos novos de forma ordenada.
5.  No contexto do **MININT**, a clareza e a objectividade valem mais do que palavras difíceis usadas fora de contexto.

## Glossário

*   **Anáfora:** Retoma de um termo mencionado anteriormente no texto.
*   **Catáfora:** Referência a um termo que ainda será apresentado.
*   **Conector:** Palavra que estabelece nexo entre orações (conjunção).
*   **Elipse:** Omissão de um termo que se subentende facilmente (ex: "Fomos à esquadra" - omissão de "Nós").
*   **Hiperónimo:** Palavra de sentido genérico (ex: Animal).
*   **Hipónimo:** Palavra de sentido específico (ex: Cão).
*   **Semântica:** Estudo do sentido das palavras e das frases.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.

Estudem com afinco, candidatos. A pátria espera de vós não apenas coragem física, mas também clareza intelectual. A aula terminou. Podem sair de forma ordenada.
$lesson47$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'classes-palavras',
  'Classes de palavras',
  $lesson48$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de escrita.

A vossa presença aqui hoje demonstra um compromisso com o serviço à Pátria. No entanto, para envergar a farda do Ministério do Interior (MININT), não basta o vigor físico; é imperativo o domínio da norma culta da nossa língua oficial. Um agente que não sabe redigir um auto de notícia ou que interpreta mal uma ordem superior por desconhecimento gramatical é um agente limitado. Hoje, daremos início ao estudo sistemático da Morfologia, focando-nos nas **Classes de Palavras**.

---

## Introdução

O estudo das classes de palavras, ou Morfologia, é o alicerce de qualquer comunicação eficaz. No contexto da Polícia Nacional, a precisão terminológica e a correcta estruturação das frases são fundamentais. Imaginem a redacção de um relatório de ocorrência: a troca de um adjectivo por um advérbio, ou o uso incorrecto de uma preposição, pode alterar completamente a descrição de um crime, prejudicando o processo judicial e a justiça.

Para o concurso público do MININT, este tema é recorrente e eliminatório. O examinador não quer apenas saber se o candidato sabe ler; ele quer aferir se o candidato compreende a natureza das palavras e como elas se articulam para formar o pensamento lógico-jurídico necessário à actividade policial. Dominar as dez classes de palavras é o primeiro passo para garantir a vossa vaga e, futuramente, a vossa progressão na carreira.

---

## Conceitos fundamentais

Para compreendermos a estrutura da nossa língua, dividimos as palavras em dez grupos distintos, de acordo com a sua função e forma.

1.  **Substantivo:** É a classe que nomeia os seres, objectos, lugares e sentimentos. É o núcleo das orações.
    *   *Exemplo:* O **agente** patrulha a **Ilha de Luanda**.
    *   *Nota prática:* No Direito e na Actividade Policial, o substantivo deve ser preciso (ex: "detido" em vez de "pessoa").

2.  **Verbo:** Indica acção, estado, ocorrência ou fenómeno da natureza. É a classe mais variável.
    *   *Exemplo:* O Comandante **ordenou** a formatura.
    *   *Nota prática:* Atenção à conjugação no modo imperativo, essencial para a transmissão de ordens.

3.  **Adjectivo:** Atribui uma característica, qualidade ou estado ao substantivo.
    *   *Exemplo:* A intervenção foi **oportuna** e **eficaz**.
    *   *Nota prática:* O adjectivo deve concordar em género e número com o substantivo a que se refere.

4.  **Pronome:** Palavra que substitui ou acompanha o substantivo, indicando a sua posição em relação às pessoas do discurso.
    *   *Exemplo:* **Nós** garantimos a ordem; **este** é o nosso dever.
    *   *Nota prática:* O uso correcto dos pronomes de tratamento (Vossa Excelência, Senhor Comissário) é obrigatório na hierarquia policial.

5.  **Advérbio:** Palavra invariável que modifica o sentido de um verbo, de um adjectivo ou de outro advérbio, indicando circunstâncias (tempo, lugar, modo, etc.).
    *   *Exemplo:* A patrulha chegou **cedo** ao local.
    *   *Nota prática:* Advérbios de modo terminados em "-mente" são frequentes em relatórios técnicos.

6.  **Conjunção:** Serve para ligar orações ou termos semelhantes, estabelecendo relações de coordenação ou subordinação.
    *   *Exemplo:* O suspeito fugiu, **mas** foi capturado logo adiante.
    *   *Nota prática:* Conjunções adversativas (mas, porém, contudo) são vitais para descrever factos contraditórios em inquéritos.

---

## Aprofundamento

As dez classes dividem-se em dois grandes grupos: as **Variáveis** (que mudam de forma para indicar género, número ou tempo) e as **Invariáveis** (que mantêm sempre a mesma forma).

### 1. Classes Variáveis

*   **Substantivo:** Podem ser próprios (Angola, PN) ou comuns (viatura, arma). No concurso, fiquem atentos aos substantivos colectivos (ex: *elenco* de leis, *corpo* de polícia).
*   **Artigo:** Define (o, a, os, as) ou indefine (um, uma, uns, umas) o substantivo. O uso do artigo definido antes de cargos é comum: "O Senhor Comissário".
*   **Adjectivo:** Cuidado com a posição do adjectivo. "Um grande oficial" (valorativo/importância) é diferente de "um oficial grande" (descritivo/estatura).
*   **Numeral:** Indica quantidade (cardinal: um, dois), ordem (ordinal: primeiro, segundo), multiplicação ou divisão. Em documentos oficiais, escreve-se o numeral por extenso e entre parênteses o algarismo: "Vinte e dois (22) detidos".
*   **Pronome:** É uma das áreas mais complexas. Devem dominar os pronomes pessoais (eu, tu, ele...), possessivos (meu, teu, nosso...), demonstrativos (este, esse, aquele...) e relativos (que, o qual, cujo...). A colocação pronominal (ênclise, próclise e mesóclise) é tema certo na prova.
*   **Verbo:** É o motor da frase. Devem dominar a concordância verbal. Se o sujeito é composto ("O agente e o inspector"), o verbo vai para o plural ("chegaram").

### 2. Classes Invariáveis

*   **Advérbio:** Não varia em género ou número. Nunca digam "elas estavam meias cansadas"; o correcto é "elas estavam **meio** cansadas" (advérbio de intensidade).
*   **Preposição:** Liga palavras estabelecendo dependência (de, em, para, com, por). Exemplo: "Mandado **de** captura". A omissão ou troca da preposição altera a regência verbal.
*   **Conjunção:** Dividem-se em coordenativas (ligam orações independentes) e subordinativas (ligam orações dependentes). As conjunções integrantes "que" e "se" introduzem orações substantivas fundamentais em depoimentos.
*   **Interjeição:** Exprime emoções súbitas (Oh!, Ah!, Alerta!). É a classe menos usada em textos formais e relatórios policiais, devendo ser evitada, excepto na transcrição fiel de diálogos de terceiros.

---

## Exemplos resolvidos

**Exemplo 1: Identificação de Classes**
*Frase:* "Os novos recrutas marcharam rapidamente ontem."
*   **Os:** Artigo definido, masculino, plural.
*   **novos:** Adjectivo (caracteriza recrutas).
*   **recrutas:** Substantivo comum (núcleo do sujeito).
*   **marcharam:** Verbo (acção, 3ª pessoa do plural do Pretérito Perfeito).
*   **rapidamente:** Advérbio de modo.
*   **ontem:** Advérbio de tempo.

**Exemplo 2: Colocação Pronominal (Comum em provas do MININT)**
*Questão:* Qual a forma correcta?
a) Me empreste a algema.
b) Empreste-me a algema.
*   **Resolução:** A opção **b** é a correcta. Em português de norma angolana/europeia, não se inicia frase com pronome oblíquo átono. Como o verbo está no imperativo, usa-se a ênclise.

**Exemplo 3: Concordância Nominal**
*Frase:* "É ________ a entrada de pessoas estranhas nesta esquadra." (proibido/proibida)
*   **Resolução:** Se houver artigo ("a entrada"), o adjectivo concorda: "É **proibida** a entrada". Se não houver artigo ("entrada"), usa-se o masculino genérico: "É **proibido** entrada".

---

## Erros comuns a evitar

1.  **Confundir "Mal" com "Mau":** "Mal" é advérbio (oposto de bem); "Mau" é adjectivo (oposto de bom). *Ex: O suspeito comportou-se mal (bem). Ele é um mau (bom) cidadão.*
2.  **Uso de "Onde" vs "Aonde":** "Onde" indica lugar fixo. "Aonde" indica movimento (com verbos que pedem a preposição 'a'). *Ex: Onde está a viatura? / Aonde vais com tanta pressa?*
3.  **Incorrecção no uso de "Há" e "A":** "Há" indica tempo decorrido (passado) ou existência. "A" indica distância ou tempo futuro. *Ex: Trabalho na PN há dez anos. A esquadra fica a dois quilómetros.*
4.  **Pleonasmos viciosos:** Evitem "subir para cima" ou "entrar para dentro" em relatórios. São erros de lógica que demonstram pobreza de vocabulário.
5.  **Concordância do verbo "Haver":** Quando significa "existir", o verbo haver é impessoal e fica sempre no singular. *Ex: Havia (e não haviam) muitos manifestantes na praça.*

---

## Resumo

Para a vossa prova, fixem estes cinco pontos:
1.  **Morfologia** estuda a palavra isolada; a sua função na frase será estudada na Sintaxe.
2.  Existem **6 classes variáveis** (substantivo, artigo, adjectivo, numeral, pronome, verbo) e **4 invariáveis** (advérbio, preposição, conjunção, interjeição).
3.  O **Substantivo** e o **Verbo** são os pilares de qualquer texto oficial.
4.  Os **Conectivos** (preposições e conjunções) são responsáveis pela coesão do texto; sem eles, as ideias ficam soltas.
5.  A **Norma Angolana** segue o padrão do português europeu, especialmente na colocação pronominal e regência, sendo este o padrão exigido nos concursos públicos.

---

## Glossário

1.  **Morfologia:** Estudo da estrutura, da formação e da classificação das palavras.
2.  **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
3.  **Locução:** Conjunto de duas ou mais palavras que valem por uma (ex: locução adverbial "às pressas").
4.  **Substantivo Colectivo:** Nome comum que, no singular, designa um conjunto de seres da mesma espécie.
5.  **Verbo Impessoal:** Aquele que não tem sujeito e é usado apenas na 3ª pessoa do singular.
6.  **Regência:** Relação de dependência entre um termo regente (verbo ou nome) e o seu complemento.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e das frases no discurso.
8.  **Ênclise:** Colocação do pronome depois do verbo (ex: Prendi-o).

Estudem com afinco, senhores candidatos. A disciplina é a alma da Polícia e o estudo é a arma do intelectual. Próxima aula: Sintaxe da Oração.

Podem sair para o intervalo.
$lesson48$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'verbos',
  'Conjugação verbal',
  $lesson49$
Bom dia, caros aspirantes. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para a vossa aprovação no concurso público do Ministério do Interior (MININT), especificamente para o ingresso na Polícia Nacional de Angola (PN). A língua portuguesa não é apenas um instrumento de comunicação; para um oficial da ordem, ela é uma ferramenta de trabalho fundamental. Um auto de notícia mal redigido ou um relatório com erros de conjugação verbal pode comprometer a validade jurídica de uma diligência e manchar a imagem da corporação.

Nesta aula, abordaremos a **Conjugação Verbal**. O domínio dos tempos e modos, bem como a distinção entre verbos regulares e irregulares, é o que separa o candidato preparado daquele que sucumbe perante a rasteira do examinador. Exijo rigor, disciplina e foco. Vamos começar.

---

## Introdução

A conjugação verbal é a flexão do verbo em pessoa, número, tempo, modo e voz. No contexto do MININT e da Polícia Nacional, a precisão temporal é vital. Quando um agente relata uma ocorrência, ele deve saber distinguir se uma acção **ocorreu** (concluída), **ocorrera** (anterior a outra já passada) ou **ocorreria** (hipotética ou dependente de condição). A clareza no uso dos tempos verbais garante que a hierarquia e o sistema de justiça compreendam exactamente a sequência dos factos.

Para o concurso público, a banca examinadora foca-se na capacidade do candidato em lidar com as irregularidades verbais e com a correlação entre os modos indicativo e conjuntivo. Não basta saber "falar bem"; é necessário dominar a norma culta, a norma angolana inserida no português europeu, que é a base dos nossos textos legislativos e regulamentares.

---

## Conceitos Fundamentais

Para dominarmos a estrutura, precisamos primeiro de consolidar os alicerces:

1.  **Radical e Desinência:** O radical é a parte que contém o significado do verbo (ex: em *patrulh-ar*, "patrulh" é o radical). A desinência é a terminação que indica o tempo, o modo, a pessoa e o número.
    *   *Exemplo:* No verbo *prender*, em "prendemos", o "-emos" indica a 1.ª pessoa do plural do Presente do Indicativo.
    *   *Nota Prática:* Identificar o radical ajuda a conjugar verbos da mesma família.

2.  **Modos Verbais:** Indicam a atitude do falante em relação à acção.
    *   **Indicativo:** Exprime certeza, factos reais. (Ex: "O agente **cumpre** o seu dever.")
    *   **Conjuntivo:** Exprime dúvida, desejo, hipótese. (Ex: "Espero que o agente **cumpra** o seu dever.")
    *   **Condicional:** Exprime uma acção dependente de uma condição. (Ex: "O agente **cumpriria** o dever, se tivesse meios.")
    *   *Nota Prática:* Em relatórios policiais, o Indicativo é o modo predominante pela sua natureza factual.

3.  **Tempos Simples e Compostos:**
    *   **Simples:** Formados por apenas um verbo. (Ex: "Eu **fiz** a ronda.")
    *   **Compostos:** Formados por um verbo auxiliar (*ter* ou *haver*) + o particípio do verbo principal. (Ex: "Eu **tinha feito** a ronda.")
    *   *Nota Prática:* O tempo composto "tinha feito" é muito mais comum na nossa norma do que o simples "fizera".

4.  **Verbos Regulares e Irregulares:**
    *   **Regulares:** Mantêm o radical e seguem o modelo da sua conjugação. (Ex: *Cantar, Vender, Partir*).
    *   **Irregulares:** Sofrem alterações no radical ou nas desinências. (Ex: *Fazer, Ir, Vir, Ver, Ser*).
    *   *Nota Prática:* Os verbos irregulares são os preferidos das provas de concurso.

5.  **Verbos Auxiliares:** São aqueles que ajudam a formar os tempos compostos e a voz passiva. Os principais são *Ter, Haver, Ser* e *Estar*.
    *   *Exemplo:* "O suspeito **foi** detido pela patrulha." (*Ser* como auxiliar da voz passiva).

---

## Aprofundamento

### 1. O Modo Indicativo: A Espinha Dorsal do Relato
No concurso, fiquem atentos ao **Pretérito Perfeito** (acção concluída: "O Comissário deu a ordem") e ao **Pretérito Imperfeito** (acção contínua no passado ou hábito: "Os agentes patrulhavam a zona diariamente"). 
Uma rasteira comum é o **Pretérito Mais-que-perfeito**. Na forma simples (ex: *fizera*), é raro na fala, mas aparece em textos da Lei Orgânica da Polícia Nacional. Na forma composta (*tinha feito*), é essencial para indicar uma acção anterior a outra já passada.

### 2. O Modo Conjuntivo (Subjuntivo) e a Hipótese
O conjuntivo é o terror dos candidatos. Lembrem-se:
*   **Presente do Conjuntivo:** "É necessário que a Polícia **intervenha**" (e não "intervém").
*   **Futuro do Conjuntivo:** Muito usado em editais e leis. "Se o candidato **fizer** a prova..." (e não "se o candidato fazer").

### 3. Verbos Irregulares de Alta Relevância
Prestem atenção ao verbo **Intervir** (derivado de *vir*). Não se diz "o agente interviu", mas sim "o agente **interveio**". Da mesma forma, o verbo **Deter** (derivado de *ter*): "A polícia **deteve** o suspeito" (e não "deteu").

### 4. Tempos Compostos e a Voz Passiva
A voz passiva é fundamental para a redacção oficial. 
*   Voz Activa: "O efectivo garantiu a segurança."
*   Voz Passiva: "A segurança **foi garantida** pelo efectivo."
Aqui, o verbo auxiliar *ser* deve concordar em tempo e modo com a acção principal.

---

## Exemplos Resolvidos

**Questão 1:** Assinale a opção em que o verbo está correctamente conjugado no Pretérito Perfeito do Indicativo.
a) O agente interviu na discussão para evitar o crime.
b) O agente interveio na discussão para evitar o crime.
c) O agente interveira na discussão para evitar o crime.

*   **Resolução:** A resposta correcta é a **b**. O verbo *intervir* segue a conjugação do verbo *vir*. Se dizemos "ele veio", devemos dizer "ele interveio". A opção 'a' é um erro comum de linguagem coloquial, e a 'c' está no pretérito mais-que-perfeito simples.

**Questão 2:** Transponha a frase para o Futuro do Conjuntivo: "Se a patrulha **vê** a infracção, actua imediatamente."
*   **Resolução:** O Futuro do Conjuntivo do verbo *ver* é **vire**. Portanto: "Se a patrulha **vire** a infracção, actuará imediatamente."
*   *Raciocínio:* Muitos confundem o futuro do conjuntivo de *ver* (vire) com o de *vir* (vier). Atenção redobrada aqui!

**Questão 3:** Identifique o tempo e modo da forma verbal sublinhada: "Os peritos **tinham analisado** as provas antes do julgamento."
*   **Resolução:** Trata-se do **Pretérito Mais-que-perfeito Composto do Indicativo**.
*   *Raciocínio:* Verbo auxiliar *ter* no pretérito imperfeito (tinham) + particípio do verbo principal (analisado). Indica uma acção anterior a outra (o julgamento).

---

## Erros Comuns a Evitar

1.  **Confundir "Haver" com "A":** Em relatórios, usa-se "há" para tempo decorrido (passado) ou existência. "O crime ocorreu **há** duas horas." Nunca use "à duas horas" ou "a duas horas" para passado.
2.  **Trocar "Vier" por "Vierem" ou "Ver" por "Vire":** "Quando você **vire** o Comandante" (do verbo ver) vs. "Quando você **vier** à esquadra" (do verbo vir).
3.  **Má conjugação de verbos derivados:** Verbos como *manter, deter, conter* seguem o verbo *ter*. Logo: "Ele **manteve** a calma" (e não "manteu").
4.  **Uso incorrecto do Condicional:** "Se eu pudesse, eu **ajudava**." Na norma culta para concursos, prefira: "Se eu pudesse, eu **ajudaria**."
5.  **Gerundismo:** Evitem o uso excessivo do gerúndio ("Vou estar enviando o relatório"). Digam: "Enviarei o relatório" ou "Vou enviar o relatório".

---

## Resumo

Para a vossa prova, fixem estes 5 pontos:
1.  **Verbos de Comando:** Verbos como *deter, intervir, manter* e *ver* são recorrentes; dominem as suas irregularidades.
2.  **Correlação Temporal:** Se a frase começa no passado, o verbo seguinte deve manter a lógica temporal.
3.  **Futuro do Conjuntivo:** É a base das normas e condições; saibam conjugar "se eu fizer", "se eu vier", "se eu vir".
4.  **Auxiliares:** O verbo *ter* é o auxiliar por excelência nos tempos compostos na norma angolana.
5.  **Voz Passiva:** Saibam transformar a activa em passiva para identificar o sujeito e a flexão correcta do auxiliar.

---

## Glossário

1.  **Desinência:** Terminação verbal que indica flexão de tempo, modo, número ou pessoa.
2.  **Infinitivo:** Forma nominal do verbo (ex: *estudar*). É o nome do verbo.
3.  **Particípio:** Forma nominal usada nos tempos compostos (ex: *estudado*).
4.  **Modo Subjuntivo (Conjuntivo):** Modo que expressa incerteza, desejo ou possibilidade.
5.  **Verbo Auxiliar:** Verbo que perde o seu sentido original para ajudar na conjugação de outro (ex: *ter, ser*).
6.  **Paradigma Verbal:** Modelo de conjugação que os verbos regulares seguem.
7.  **Voz Passiva:** Construção em que o sujeito sofre a acção expressa pelo verbo.
8.  **Pretérito:** Tempo verbal que se refere ao passado.

Estudem com afinco. A farda que pretendem envergar exige, antes de mais, o domínio da palavra e da lei. Disciplina e bons estudos!
$lesson49$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'concordancia',
  'Concordância verbal e nominal',
  $lesson50$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. É com elevado sentido de dever que iniciamos esta sessão de preparação para o vosso concurso público no Ministério do Interior (MININT). Como vosso professor, exijo o máximo de concentração. A farda que pretendem envergar exige não apenas vigor físico, mas também uma competência intelectual irrepreensível.

## Introdução

A língua portuguesa é a nossa ferramenta de trabalho fundamental. No exercício das funções policiais, a elaboração de autos de notícia, relatórios de ocorrências e participações criminais exige um domínio absoluto da norma culta. Uma concordância mal efectuada num documento oficial não é apenas um erro gramatical; é uma falha de rigor que pode comprometer a clareza de uma prova judicial ou a imagem da corporação perante as instituições do Estado e o cidadão.

Nesta aula, focaremos a nossa atenção na **Concordância Verbal e Nominal**. Estes mecanismos sintácticos são os pilares que garantem a coesão entre os elementos da frase. Para um candidato ao MININT, dominar estas regras é demonstrar que possui a disciplina e a precisão necessárias para servir a Pátria com excelência. Vamos dissecar as regras gerais e as excepções que frequentemente surgem nas provas de admissão.

---

## Conceitos fundamentais

Para dominarmos a sintaxe de concordância, precisamos de fixar os seguintes alicerces:

1.  **Concordância Nominal:** É o princípio segundo o qual os determinantes (artigos, numerais, pronomes) e os adjectivos devem harmonizar-se em género (masculino/feminino) e número (singular/plural) com o substantivo a que se referem.
    *   *Exemplo:* **Os** zeloso**s** agente**s** patrulhavam a zona.
    *   *Nota prática:* O substantivo é o "chefe" da frase nominal; todos os outros termos devem segui-lo.

2.  **Concordância Verbal:** É a relação de harmonia que obriga o verbo a flexionar-se em número e pessoa para concordar com o seu sujeito.
    *   *Exemplo:* **O Comando Geral emitiu** a directiva. (3.ª pessoa do singular).
    *   *Nota prática:* Identificar correctamente o núcleo do sujeito é o primeiro passo para não errar a flexão do verbo.

3.  **Sujeito Composto:** É aquele que possui dois ou mais núcleos. A regra geral dita que o verbo deve ir para o plural.
    *   *Exemplo:* **O Comissário e o Inspector reuniram-se** com a unidade.
    *   *Nota prática:* Se o sujeito composto estiver depois do verbo, este pode concordar com o núcleo mais próximo ou ir para o plural.

4.  **Sujeito Colectivo:** Refere-se a um conjunto de seres da mesma espécie, mas a palavra apresenta-se no singular.
    *   *Exemplo:* **A guarnição manteve-se** em alerta.
    *   *Nota prática:* Embora a ideia seja de pluralidade, a forma gramatical é singular, logo o verbo permanece no singular.

5.  **Expressões Partitivas:** São expressões que indicam uma parte de um todo (ex: "a maioria de", "grande parte de", "metade de").
    *   *Exemplo:* **A maioria dos efectivos participou** (ou **participaram**) na formação.
    *   *Nota prática:* Nestes casos, a norma permite a concordância com o núcleo da expressão (singular) ou com o substantivo que a segue (plural).

---

## Aprofundamento

### 1. Concordância Verbal: Casos Específicos e Complexos

No contexto de um concurso público, as questões raramente abordam o óbvio. Devemos atentar nos detalhes técnicos:

**A) Sujeito Composto por Pessoas Gramaticais Diferentes:**
Se no sujeito houver a 1.ª pessoa (eu/nós), ela prevalece. Se houver a 2.ª pessoa (tu/vós), ela prevalece sobre a 3.ª.
*   *Exemplo:* **Tu e o teu colega (vós) fareis** a ronda nocturna. (Ou "farão", seguindo a tendência do português contemporâneo, mas em prova rigorosa, prefira-se a norma clássica).
*   *Exemplo:* **Eu e o Superintendente elaborámos** o relatório. (Eu + Ele = Nós).

**B) Verbos Impessoais (O perigo do verbo "Haver"):**
O verbo **Haver**, quando significa "existir" ou "ocorrer", é impessoal. Isto significa que não tem sujeito e deve ficar sempre na 3.ª pessoa do singular.
*   *Erro comum:* "Houveram muitos crimes ontem." (**Errado**)
*   *Forma correcta:* "**Houve** muitos crimes ontem." (**Correcto**)
*   *Nota:* O verbo **Existir**, por sua vez, é pessoal e concorda com o sujeito: "**Existiram** muitos crimes."

**C) Concordância com o pronome relativo "QUE" e "QUEM":**
*   Com o "QUE", o verbo concorda com o antecedente: "Fui **eu que solicitei** o reforço."
*   Com o "QUEM", o verbo pode ficar na 3.ª pessoa do singular ou concordar com o antecedente: "Fui **eu quem solicitou**" ou "Fui **eu quem solicitei**".

### 2. Concordância Nominal: Adjectivos e Palavras Especiais

**A) Adjectivo referindo-se a vários substantivos:**
Se o adjectivo vier depois de substantivos de géneros diferentes, vai para o masculino plural.
*   *Exemplo:* O **crime** e a **desordem** foram **combatidos**.

**B) Palavras que funcionam como adjectivos (Anexo, Incluso, Próprio, Mesmo, Obrigado):**
Estas palavras concordam em género e número com o substantivo.
*   *Exemplo:* As **fotografias** seguem **anexas** ao processo.
*   *Exemplo:* A **agente** disse: — Muito **obrigada**.
*   *Atenção:* A expressão "em anexo" é invariável. "As fotografias seguem **em anexo**."

---

## Exemplos resolvidos

**Exercício 1:** Analise a frase: *"Grande parte dos candidatos (concluir) a prova antes do tempo."* Justifique as possibilidades de concordância.
*   **Resolução:**
    1.  *Opção A:* "Grande parte dos candidatos **concluiu**..." (Concordância lógica com o núcleo "parte").
    2.  *Opção B:* "Grande parte dos candidatos **concluíram**..." (Concordância atractiva com o termo "candidatos").
    *   **Raciocínio:** Ambas estão correctas segundo a norma culta para expressões partitivas seguidas de plural.

**Exercício 2:** Corrija a frase: *"Fazem dez anos que a Polícia Nacional reforçou o policiamento de proximidade."*
*   **Resolução:** A forma correcta é "**Faz** dez anos...".
*   **Raciocínio:** O verbo "fazer", quando indica tempo decorrido, é impessoal. Não possui sujeito, devendo permanecer obrigatoriamente na 3.ª pessoa do singular.

**Exercício 3:** Escolha a opção correcta: *"Seguem (anexo/anexos) os relatórios e as guias de marcha."*
*   **Resolução:** A forma correcta é "**anexos**".
*   **Raciocínio:** O adjectivo "anexos" refere-se a dois substantivos ("relatórios" - masc. e "guias" - fem.). Pela regra de precedência, o adjectivo assume o masculino plural.

---

## Erros comuns a evitar

1.  **"Houveram" em vez de "Houve":** Nunca use o verbo haver no plural quando este significar existência. É o erro que mais elimina candidatos em Angola.
2.  **Concordância com "Vossa Excelência":** Embora o pronome se refira à 2.ª pessoa (com quem se fala), o verbo e os adjectivos devem ficar na 3.ª pessoa.
    *   *Errado:* Vossa Excelência estais cansado.
    *   *Correcto:* Vossa Excelência **está cansado**.
3.  **"Alerta" e "Menos":** A palavra "menos" é sempre invariável. A palavra "alerta", quando advérbio, também não varia.
    *   *Exemplo:* Os agentes estavam **alerta** (e não "alertas"). Houve **menos** ocorrências este mês.
4.  **Sujeito Colectivo Distante:** Quando o colectivo está longe do verbo, o aluno tende a pluralizar.
    *   *Errado:* O elenco de oficiais, após longas horas de debate sobre a segurança pública, decidiram...
    *   *Correcto:* O elenco [...] **decidiu**. (O núcleo é "elenco").

---

## Resumo para memorização

1.  **Verbo HAVER (existir/tempo):** Sempre no singular. É uma regra de ouro.
2.  **Expressões Partitivas:** Aceitam dupla concordância (singular ou plural).
3.  **Sujeito Composto:** Regra geral, verbo no plural. Se vier depois do verbo, pode concordar com o mais próximo.
4.  **ANEXO/INCLUSO:** São adjectivos. Devem "imitar" o substantivo em género e número.
5.  **Verbo FAZER (tempo):** Fica no singular. "Faz dois meses", nunca "fazem dois meses".

---

## Glossário

*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
*   **Núcleo do Sujeito:** A palavra principal do sujeito, geralmente um substantivo ou pronome, que dita a concordância do verbo.
*   **Verbo Impessoal:** Verbo que não possui sujeito gramatical, sendo usado apenas na 3.ª pessoa do singular.
*   **Concordância Atractiva:** Quando o verbo ou adjectivo concorda com o termo mais próximo, em vez de concordar com o núcleo principal.
*   **Norma Culta:** Conjunto de regras linguísticas utilizadas em contextos formais, documentos oficiais e provas de concurso.

Estudem com afinco, meus senhores. A disciplina começa na ponta do lápis. A pátria aos seus filhos admira!

**Fim da aula.**
$lesson50$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'regencia',
  'Regência verbal e nominal',
  $lesson51$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para o vosso sucesso no concurso público do Ministério do Interior (MININT): a **Regência Verbal e Nominal**. No exercício das funções policiais, a clareza e a precisão na redacção de autos de notícia, relatórios de ocorrência e participações criminais não são apenas uma questão de estética linguística; são uma questão de legalidade e rigor institucional. Um erro de regência pode alterar o sentido de uma norma ou de um depoimento, comprometendo a justiça.

Nesta aula, vamos dissecar como os verbos e os nomes (substantivos, adjectivos e advérbios) se relacionam com os seus complementos. Veremos que, tal como na hierarquia policial, na língua portuguesa existem termos que mandam (regentes) e termos que obedecem (regidos), muitas vezes exigindo a presença de uma preposição específica para que a mensagem seja transmitida sem ambiguidades.

---

## Conceitos fundamentais

Para dominarmos a regência, precisamos de alicerces sólidos. Vamos rever os conceitos que servirão de base para toda a nossa análise:

1.  **Regência:** É a parte da gramática que estuda a relação de dependência entre os termos de uma oração. O termo "regente" é a palavra principal que exige um complemento, e o termo "regido" é o complemento que completa o sentido do regente.
    *   *Exemplo:* O agente **obedece** (regente) **à lei** (regido).
    *   *Nota prática:* Identificar quem exige a preposição é o primeiro passo para não errar na prova.

2.  **Termo Regente:** É o núcleo que solicita um complemento. Pode ser um verbo (regência verbal) ou um nome (regência nominal).
    *   *Exemplo:* O Comissário tem **necessidade** (nome regente) de reforços.
    *   *Nota prática:* No MININT, muitos termos regentes são substantivos abstractos derivados de verbos de acção.

3.  **Transitividade Verbal:** Indica se o verbo precisa de um complemento para ter sentido completo.
    *   *Exemplo:* O suspeito **fugiu** (intransitivo - sentido completo); O agente **deteve** o suspeito (transitivo directo - exige complemento sem preposição).
    *   *Nota prática:* Verbos transitivos directos não admitem preposição entre o verbo e o objecto.

4.  **Objecto Directo e Indirecto:** São os complementos dos verbos transitivos. O directo liga-se ao verbo sem preposição obrigatória; o indirecto liga-se através de uma preposição.
    *   *Exemplo:* O efectivo **porta** a arma (OD); O efectivo **precisa** de munições (OI).
    *   *Nota prática:* A escolha da preposição correcta (de, a, com, em, por) define a regência indirecta.

5.  **Preposição:** É a palavra invariável que liga dois termos, estabelecendo uma relação de subordinação.
    *   *Exemplo:* Atentado **contra** a segurança do Estado.
    *   *Nota prática:* Em concursos, as preposições "a", "de" e "em" são as que mais geram rasteiras.

---

## Aprofundamento

### 1. Regência Verbal: Casos Críticos para a Polícia Nacional

Muitos verbos mudam de sentido conforme a preposição que utilizam. No contexto policial, isto é vital.

*   **Aspirar:**
    *   No sentido de *sorver, respirar*: É transitivo directo. "O perito aspirou o pó do local do crime."
    *   No sentido de *pretender, desejar*: É transitivo indirecto (exige a preposição **a**). "Muitos jovens angolanos **aspiram à** carreira policial." (Note o uso da crase: a + a).
*   **Assistir:**
    *   No sentido de *prestar socorro*: Geralmente transitivo directo. "O agente assistiu o ferido no acidente."
    *   No sentido de *ver, presenciar*: É transitivo indirecto (exige a preposição **a**). "A testemunha assistiu **ao** assalto." (Erro comum: "assistiu o assalto").
    *   No sentido de *caber, pertencer*: É transitivo indirecto. "Este direito assiste **ao** detido."
*   **Implicar:**
    *   No sentido de *acarretar, resultar*: É transitivo directo (não admite a preposição "em"). "A vossa conduta implicará **expulsão** imediata." (Errado: "implicará em expulsão").
*   **Informar / Avisar / Certificar:**
    *   Estes verbos são transitivos directos e indirectos. Informamos *alguém de alguma coisa* ou *alguma coisa a alguém*.
    *   "O Comando informou **os agentes da** nova escala." ou "O Comando informou **a nova escala aos** agentes."
    *   *Atenção:* Nunca use duas preposições ou nenhuma. "Informou aos agentes da escala" está incorrecto.

### 2. Regência Nominal: A Precisão do Substantivo e Adjectivo

A regência nominal ocorre quando um substantivo, adjectivo ou advérbio exige um complemento preposicionado. Vejamos exemplos comuns em textos oficiais do MININT:

*   **Atentado:** Exige a preposição *a* ou *contra*. "Atentado **à** ordem pública" ou "Atentado **contra** a autoridade".
*   **Inerente:** Exige a preposição *a*. "O risco é inerente **à** profissão policial."
*   **Passível:** Exige a preposição *de*. "A infracção é passível **de** multa."
*   **Obediência:** Exige a preposição *a*. "Devemos obediência **à** Constituição da República de Angola."
*   **Respeito:** Exige a preposição *a, com, para com, por*. "Respeito **pelos** direitos humanos."

### 3. O Uso do Pronome Relativo na Regência

Este é um ponto onde muitos candidatos falham. Quando usamos pronomes relativos (que, qual, cujo), a preposição exigida pelo verbo deve ser colocada **antes** do pronome.

*   *Correcto:* "Esta é a lei **a que** me refiro." (Quem se refere, refere-se **a**).
*   *Incorrecto:* "Esta é a lei que me refiro."

---

## Exemplos resolvidos

**Exemplo 1: Analise a frase "O candidato prefere a Polícia Nacional do que as Forças Armadas." e corrija-a se necessário.**
*   **Raciocínio:** O verbo *preferir* é transitivo directo e indirecto. Ele exige a preposição **a** para o segundo termo e rejeita expressões comparativas como "do que" ou "mais".
*   **Resolução:** "O candidato prefere a Polícia Nacional **às** Forças Armadas."

**Exemplo 2: Preencha a lacuna: "O crime ____ fomos testemunhas ocorreu no Cazenga."**
*   **Raciocínio:** O substantivo "testemunha" exige a preposição **de** (quem é testemunha, é testemunha *de* algo). Como temos um pronome relativo, a preposição deve vir antes dele.
*   **Resolução:** "O crime **de que** fomos testemunhas ocorreu no Cazenga."

**Exemplo 3: Qual a regência correcta para o verbo "Visar" no sentido de objectivar?**
*   **Raciocínio:** No sentido de dar um visto (assinatura), é directo. No sentido de ter como objectivo, é transitivo indirecto (preposição **a**).
*   **Resolução:** "As medidas visam **ao** bem-estar da população." (E não "visam o bem-estar").

---

## Erros comuns a evitar

1.  **"Chegar em":** No português padrão, quem chega, chega **a** algum lugar.
    *   *Errado:* Chegámos na esquadra.
    *   *Correcto:* Chegámos **à** esquadra.
2.  **"Namorar com":** O verbo namorar é transitivo directo.
    *   *Errado:* Ele namora com a colega.
    *   *Correcto:* Ele namora a colega. (Embora o uso coloquial aceite "com", em provas de concurso de Angola, segue-se a norma rígida).
3.  **"Esquecer de":** O verbo esquecer só leva preposição se for pronominal (esquecer-se).
    *   *Errado:* Esqueci do relatório.
    *   *Correcto:* Esqueci o relatório OU Esqueceu-me o relatório OU **Esqueci-me do** relatório.
4.  **"Agradecer aos":** Agradecemos *algo* (directo) *a alguém* (indirecto).
    *   *Errado:* Agradeci o Comandante.
    *   *Correcto:* Agradeci **ao** Comandante.

---

## Resumo para memorização

1.  **Regência Verbal** trata da relação entre verbos e seus complementos; **Regência Nominal** trata de nomes (substantivos/adjectivos) e seus complementos.
2.  O verbo **Assistir** (ver) exige a preposição **A**.
3.  O verbo **Preferir** exige a preposição **A** e nunca aceita "do que".
4.  O verbo **Implicar** (sentido de acarretar) não aceita a preposição "em".
5.  Em frases com **pronomes relativos**, a preposição exigida pelo verbo deve ser deslocada para antes do pronome (ex: O cargo **a que** aspiro).

---

## Glossário

*   **Crase:** Fusão da preposição "a" com o artigo definido "a" ou pronome demonstrativo.
*   **Intransitivo:** Verbo que não exige complemento para fazer sentido.
*   **Norma Culta:** Conjunto de regras linguísticas seguidas em documentos oficiais e provas de concurso.
*   **Objecto Indirecto:** Complemento verbal que vem obrigatoriamente precedido de preposição.
*   **Preposição:** Palavra de ligação que estabelece dependência entre termos.
*   **Regente:** O termo que comanda a relação de subordinação, exigindo ou não preposição.
*   **Regido:** O termo que completa o sentido do regente.
*   **Transitivo Directo:** Verbo que exige complemento sem auxílio de preposição.

Estudem com afinco, aspirantes. A disciplina na linguagem é o reflexo da disciplina na farda. Até à próxima aula.
$lesson51$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'sintaxe',
  'Sintaxe da frase',
  $lesson52$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para quem aspira envergar a farda da nossa gloriosa **Polícia Nacional de Angola (PN)**. A prova de Língua Portuguesa para o Ministério do Interior (MININT) não avalia apenas a vossa capacidade de leitura; ela testa o vosso rigor lógico e a vossa competência em estruturar o pensamento de forma clara e oficial. Um agente da autoridade que não domina a sintaxe da frase é um agente que falha na redacção de um auto de notícia, numa participação criminal ou num relatório de patrulhamento.

A sintaxe é o ramo da gramática que estuda a disposição das palavras na frase e as relações lógicas entre elas. No contexto de um concurso público, o domínio da frase simples e da frase complexa é o que separa o candidato apto daquele que será excluído. A clareza de um texto jurídico ou administrativo depende inteiramente da correcta articulação entre o sujeito, o predicado e as orações que compõem o período. Vamos, portanto, trabalhar com o rigor que a farda exige.

---

## Introdução

A sintaxe é a espinha dorsal da comunicação escrita oficial. No âmbito do MININT, a precisão é fundamental. Imaginem um relatório de ocorrência onde a troca de uma conjunção ou a má estruturação de uma oração subordinada altera o sentido de quem cometeu o crime e de quem foi a vítima. A sintaxe estuda como as palavras se agrupam para formar unidades de sentido: a frase, a oração e o período.

Para o concurso da Polícia Nacional, o examinador focar-se-á na vossa capacidade de identificar os constituintes da frase simples (análise sintáctica interna) e de compreender a articulação das orações no período composto (frase complexa). Dominar estes conceitos permitirá que respondam com segurança às questões de múltipla escolha e, futuramente, que redijam documentos institucionais com a dignidade que a função pública requer.

---

## Conceitos fundamentais

Para avançarmos, precisamos de consolidar os alicerces. Atentem nos seguintes conceitos:

1.  **Frase, Oração e Período:** A frase é qualquer enunciado com sentido completo. A oração é um enunciado que se organiza em torno de um verbo. O período é a frase constituída por uma ou mais orações.
    *   *Exemplo:* "Alto! Polícia!" (Frase nominal). "O agente patrulha a zona da Mutamba." (Oração/Período simples).
    *   *Nota prática:* No concurso, foquem-se no verbo. Se há um verbo, há uma oração.

2.  **Sujeito:** É o ser (pessoa ou coisa) sobre o qual se faz uma declaração e com o qual o verbo concorda em número e pessoa.
    *   *Exemplo:* "Os efectivos da Polícia Nacional garantem a ordem pública." (Sujeito: Os efectivos da Polícia Nacional).
    *   *Nota prática:* Para encontrar o sujeito, perguntem ao verbo: "Quem é que...?" ou "O que é que...?".

3.  **Predicado:** É tudo aquilo que se diz sobre o sujeito. O núcleo do predicado é sempre um verbo.
    *   *Exemplo:* "O Comandante **explicou as novas directrizes**."
    *   *Nota prática:* O predicado contém a acção ou o estado relativo ao sujeito.

4.  **Complementos (Directo e Indirecto):** São termos que completam o sentido de verbos transitivos. O complemento directo liga-se ao verbo sem preposição obrigatória; o indirecto exige preposição (a, para, de, com, etc.).
    *   *Exemplo:* "O agente solicitou **o documento** (CD) **ao condutor** (CI)."
    *   *Nota prática:* Substituam o CD por "o/a" e o CI por "lhe" para testar a função.

5.  **Coordenação:** Processo de ligação de orações independentes, que mantêm o seu sentido próprio mesmo se isoladas.
    *   *Exemplo:* "A patrulha chegou **e** os suspeitos fugiram."
    *   *Nota prática:* As conjunções coordenativas (e, mas, ou, logo) são as vossas bússolas aqui.

6.  **Subordinação:** Processo em que uma oração (subordinada) exerce uma função sintáctica em relação a outra (principal), dependendo dela gramaticalmente.
    *   *Exemplo:* "É necessário **que todos respeitem a lei**."
    *   *Nota prática:* A oração subordinada funciona como se fosse uma peça de um puzzle que falta na oração principal.

---

## Aprofundamento

### 1. A Frase Simples: A Estrutura Interna
A frase simples, ou período simples, contém apenas uma oração (oração absoluta). A sua análise exige o conhecimento da **transitividade verbal**.

*   **Verbos Intransitivos:** Não exigem complemento. "O suspeito fugiu."
*   **Verbos Transitivos Directos:** Exigem um objecto directo. "A Polícia deteve o meliante."
*   **Verbos Transitivos Indirectos:** Exigem um objecto com preposição. "O cidadão obedece à autoridade." (Reparem no uso do acento grave, indicando a preposição 'a' + artigo 'a').
*   **Verbos de Ligação:** Indicam estado ou qualidade (ser, estar, parecer, ficar). Introduzem o **Predicativo do Sujeito**. "O agente está atento." ('Atento' é o predicativo).

### 2. A Frase Complexa: Coordenação e Subordinação
Aqui reside a maior dificuldade dos candidatos. A frase complexa possui duas ou mais orações.

#### A. Orações Coordenadas
Dividem-se em:
*   **Copulativas:** Adição (e, nem, não só... mas também). "O agente vigia e protege."
*   **Adversativas:** Oposição/Contraste (mas, porém, todavia, contudo). "Houve uma denúncia, mas não encontraram provas."
*   **Disjuntivas:** Alternativa (ou, ou... ou, quer... quer). "Ou o cidadão colabora, ou será detido por desobediência."
*   **Conclusivas:** Conclusão (logo, portanto, por conseguinte). "O crime foi provado, logo haverá condenação."
*   **Explicativas:** Justificação (pois, porque, que). "Respeite o agente, que ele está em serviço."

#### B. Orações Subordinadas
Estas dividem-se em três grandes grupos:
1.  **Substantivas:** Exercem funções de substantivo (sujeito, complemento). "O Comissário ordenou **que a operação começasse**." (Oração subordinada substantiva objectiva directa).
2.  **Adjectivas:** Exercem função de adjectivo, introduzidas por pronomes relativos (que, o qual, cujo).
    *   *Restritivas:* "Os agentes **que são honestos** dignificam a farda." (Apenas os honestos).
    *   *Explicativas (entre vírgulas):* "Os agentes, **que são servidores públicos**, devem ser exemplares." (Todos os agentes são servidores).
3.  **Adverbiais:** Exercem função de advérbio (circunstância).
    *   *Temporais:* "Prendam o suspeito **quando ele sair de casa**."
    *   *Causais:* "A estrada foi cortada **porque houve um acidente grave**."
    *   *Condicionais:* "**Se houver motim**, chamem a Unidade de Reacção e Patrulhamento."
    *   *Finais:* "Trabalhamos **para que a paz social seja mantida**."

---

## Exemplos resolvidos

**Exercício 1:** Analise sintacticamente a frase: "O Serviço de Investigação Criminal (SIC) deteve o suspeito ontem em Cacuaco."

*   **Raciocínio:**
    1.  Quem deteve? "O Serviço de Investigação Criminal (SIC)". Logo, este é o **Sujeito Composto** (institucional).
    2.  Qual é a acção? "deteve". Verbo transitivo directo.
    3.  Deteve quem? "o suspeito". **Complemento Directo**.
    4.  Quando? "ontem". **Modificador (ou Adjunto Adverbial) de Tempo**.
    5.  Onde? "em Cacuaco". **Modificador (ou Adjunto Adverbial) de Lugar**.

**Exercício 2:** Classifique a oração sublinhada: "Embora a chuva fosse intensa, a patrulha manteve-se no posto."

*   **Raciocínio:** A conjunção "embora" introduz uma ideia de concessão (um obstáculo que não impede a acção principal).
*   **Resposta:** Oração subordinada adverbial concessiva.

**Exercício 3:** Transforme as duas frases simples numa frase complexa coordenada adversativa:
Frase A: "O agente deu ordem de paragem."
Frase B: "O condutor acelerou o veículo."

*   **Raciocínio:** A relação entre as duas frases é de oposição. Devo usar "mas", "porém" ou "contudo".
*   **Resposta:** "O agente deu ordem de paragem, **mas** o condutor acelerou o veículo."

---

## Erros comuns a evitar

1.  **Separar o Sujeito do Predicado com vírgula:** Este é o erro mais grave. Nunca se escreve: "O Comandante da Esquadra, chegou agora." (Errado). O correcto é: "O Comandante da Esquadra chegou agora."
2.  **Confundir "Porque" com "Porquê":** Em respostas e explicações, usa-se "porque". "Porquê" usa-se no final de frases ou como substantivo.
3.  **Erro de Concordância no Sujeito Composto:** "Chegou o agente e o inspector." (Aceitável se o verbo vier antes), mas o ideal é: "O agente e o inspector chegaram." Atentem à concordância com o plural.
4.  **Confundir Oração Coordenada Adversativa (mas) com Advérbio de Intensidade (mais):** "Queremos mais segurança, mas os recursos são escassos." Nunca troquem um pelo outro.
5.  **Uso incorrecto do pronome relativo "cujo":** "O agente cujo o nome..." (Errado). O correcto é "O agente cujo nome..." (Nunca se usa artigo após 'cujo').

---

## Resumo

Para a vossa prova, memorizem estes 5 pontos:
1.  **Sujeito e Predicado** são os termos essenciais; sem eles, a estrutura da oração fica incompleta.
2.  **Complemento Directo** responde a "quê/quem" e o **Indirecto** exige preposição (a, para).
3.  **Orações Coordenadas** são independentes; as **Subordinadas** dependem da principal.
4.  As **Conjunções** são as chaves para classificar as orações. Estudem as tabelas de conjunções (adversativas, causais, condicionais).
5.  A **Pontuação** muda o sentido. Uma vírgula numa oração adjectiva pode transformar uma restrição numa explicação geral.

---

## Glossário

1.  **Sintaxe:** Parte da gramática que estuda a relação entre as palavras na frase.
2.  **Oração Absoluta:** Período simples, constituído por apenas um verbo.
3.  **Verbo Transitivo:** Verbo que necessita de complementos para ter sentido completo.
4.  **Conjunção:** Palavra invariável que liga duas orações.
5.  **Adjunto Adverbial (Modificador):** Termo que indica uma circunstância (tempo, lugar, modo).
6.  **Predicativo do Sujeito:** Atributo ou estado atribuído ao sujeito através de um verbo de ligação.
7.  **Pronome Relativo:** Palavra que substitui um termo anterior e introduz uma oração subordinada adjectiva.
8.  **Período Composto:** Frase que contém duas ou mais orações.

Estudem com afinco, candidatos. A disciplina é a alma do sucesso, tanto na gramática quanto na vida policial. Força e Honra!
$lesson52$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'pontuacao',
  'Pontuação',
  $lesson53$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para o vosso sucesso no concurso público do Ministério do Interior (MININT). A vossa missão, enquanto futuros agentes da autoridade, não se limitará ao patrulhamento ou à manutenção da ordem pública; ela estende-se à redação rigorosa de autos de notícia, relatórios de ocorrência e participações criminais. Um erro de pontuação num documento oficial não é apenas uma falha gramatical; pode ser a diferença entre a condenação de um criminoso ou a anulação de um processo por ambiguidade.

A pontuação é o sistema de sinais gráficos que indica, na escrita, as pausas e a entoação da leitura, organizando a estrutura das frases para que o sentido seja inequívoco. No contexto da Polícia Nacional, a clareza é um imperativo ético e profissional. Nesta aula, vamos dissecar as regras fundamentais que regem o uso do ponto final, da vírgula, do ponto e vírgula, dos dois pontos e dos sinais de interrogação e exclamação, sempre com o rigor que a farda exige.

---

## Conceitos fundamentais

### 1. Ponto Final (.)
O ponto final assinala a pausa máxima e encerra o período simples ou composto, indicando que o sentido daquela unidade de pensamento está completo.
*   **Exemplo:** O efetivo da Polícia Nacional garantiu a segurança durante a manifestação em Luanda.
*   **Nota prática:** No final de siglas (P.N.A.), o uso do ponto tem caído em desuso na prática administrativa moderna, mas em textos corridos, o ponto final é obrigatório para fechar raciocínios.

### 2. Vírgula (,)
É o sinal que marca uma pausa de curta duração. Serve para separar elementos dentro de uma oração ou orações dentro de um período.
*   **Exemplo:** O Comandante Provincial convocou os oficiais, os sargentos e os agentes para a parada matinal.
*   **Nota prática:** Nunca se separa o sujeito do predicado com uma vírgula. É um erro gravíssimo em provas de concurso.

### 3. Ponto e Vírgula (;)
Indica uma pausa intermédia, superior à da vírgula e inferior à do ponto final. É muito utilizado em enumerações de artigos de lei ou regulamentos.
*   **Exemplo:** São deveres do agente: respeitar a hierarquia; zelar pelo fardamento; e cumprir a Constituição.
*   **Nota prática:** Use o ponto e vírgula para separar itens de uma lista que já contenham vírgulas internas.

### 4. Dois Pontos (:)
Este sinal anuncia uma citação, uma enumeração, uma explicação ou uma síntese do que foi dito anteriormente.
*   **Exemplo:** O suspeito declarou o seguinte: "Eu não estava no local do crime à hora do incidente."
*   **Nota prática:** Em relatórios policiais, os dois pontos são essenciais para introduzir depoimentos de testemunhas.

### 5. Ponto de Interrogação (?) e Exclamação (!)
O ponto de interrogação indica uma pergunta direta. O ponto de exclamação expressa sentimentos como surpresa, ordem ou ênfase.
*   **Exemplo (?):** Qual é o número de identificação do veículo apreendido?
*   **Exemplo (!):** Alto, em nome da Lei!
*   **Nota prática:** Em textos administrativos e jurídicos, o uso da exclamação deve ser extremamente parcimonioso, reservando-se apenas para ordens diretas ou citações.

---

## Aprofundamento

Para dominar a pontuação, o candidato deve compreender a sintaxe da frase. A vírgula, por ser o sinal mais complexo, exige atenção redobrada em quatro situações principais:

1.  **Isolamento do Vocativo:** O vocativo (chamamento) deve ser sempre isolado por vírgulas.
    *   *Exemplo:* "Agente Silva, apresente o relatório agora."
2.  **Isolamento do Aposto:** O aposto (explicação de um termo anterior) também requer vírgulas.
    *   *Exemplo:* "A Marginal de Luanda, local de grande afluência turística, será patrulhada hoje."
3.  **Orações Adjetivas Explicativas:** Diferenciam-se das restritivas pelo uso da vírgula.
    *   *Exemplo:* "Os polícias, que são treinados para o perigo, mantiveram a calma." (Todos os polícias são treinados).
4.  **Deslocamento de Adjuntos Adverbiais:** Quando um adjunto adverbial longo é colocado no início da frase, a vírgula é obrigatória.
    *   *Exemplo:* "Durante a operação de busca e apreensão no Cazenga, foram detidos três indivíduos."

Quanto ao **Ponto e Vírgula**, a sua aplicação técnica mais comum em concursos do MININT refere-se à separação de orações coordenadas que já possuem vírgulas no seu interior ou que apresentam um contraste.
*   *Exemplo:* "O primeiro grupo seguirá pela Avenida Deolinda Rodrigues; o segundo, pela Rua Direita do Gamek." (A vírgula após 'segundo' indica a omissão do verbo 'seguirá', e o ponto e vírgula separa as duas frentes de ação).

Os **Dois Pontos** possuem uma função esclarecedora. No Direito e na Administração Pública angolana, são usados antes de transcrições de artigos: "Nos termos do Artigo 1.º: 'Angola é uma República soberana...'".

---

## Exemplos resolvidos

### Exemplo 1: Correção de Pontuação
**Enunciado:** Pontue corretamente a frase: *O Diretor Nacional embora estivesse ocupado atendeu os candidatos ao concurso.*

**Resolução Passo-a-Passo:**
1.  Identificamos a oração principal: "O Diretor Nacional atendeu os candidatos ao concurso."
2.  Notamos uma oração intercalada de valor concessivo: "embora estivesse ocupado".
3.  Regra: Orações intercaladas devem ser isoladas por vírgulas.
4.  **Resultado:** O Diretor Nacional, embora estivesse ocupado, atendeu os candidatos ao concurso.

### Exemplo 2: Identificação de Erro
**Enunciado:** Identifique o erro na frase: *Os agentes de trânsito, apreenderam as cartas de condução caducadas.*

**Resolução Passo-a-Passo:**
1.  Sujeito: "Os agentes de trânsito".
2.  Predicado: "apreenderam as cartas de condução caducadas".
3.  Análise: Existe uma vírgula separando o sujeito do verbo.
4.  **Regra:** É proibido separar sujeito e predicado com vírgula, mesmo que o sujeito seja longo.
5.  **Correção:** Os agentes de trânsito apreenderam as cartas de condução caducadas.

### Exemplo 3: Uso do Ponto e Vírgula
**Enunciado:** Organize os itens abaixo usando a pontuação adequada para um regulamento.
*Itens: fardamento limpo; pontualidade no serviço; respeito aos cidadãos.*

**Resolução Passo-a-Passo:**
1.  Introduzimos com dois pontos.
2.  Separamos os itens por ponto e vírgula, pois são elementos de uma lista administrativa.
3.  Finalizamos com ponto final.
4.  **Resultado:** O regulamento prevê:
    a) Fardamento limpo;
    b) Pontualidade no serviço;
    c) Respeito aos cidadãos.

---

## Erros comuns a evitar

1.  **Vírgula entre Sujeito e Verbo:** É o erro que mais elimina candidatos. Nunca escreva: "O Comandante, disse...". O correto é: "O Comandante disse...".
2.  **Vírgula antes da conjunção "e":** Em regra, não se usa vírgula antes do "e" quando os sujeitos são os mesmos. Use apenas se os sujeitos forem diferentes (Ex: O sol brilhou, e a chuva caiu).
3.  **Confundir Adjunto Adverbial curto com longo:** Em "Ontem, saímos", a vírgula é facultativa. Em "No dia da independência nacional de Angola, saímos", a vírgula é obrigatória pelo comprimento da expressão.
4.  **Esquecer a vírgula no vocativo:** Escrever "Agente venha cá" está errado. O correto é "Agente, venha cá".
5.  **Uso excessivo de reticências (...):** Em textos oficiais da Polícia Nacional, as reticências são quase proibidas, pois indicam hesitação ou interrupção, o que retira a autoridade e a precisão ao documento.

---

## Resumo

1.  **Ponto Final:** Encerra o pensamento completo e o período.
2.  **Vírgula:** Marca pausas breves, isola vocativos, apostos e orações intercaladas; nunca separa sujeito de verbo.
3.  **Ponto e Vírgula:** Separa itens de enumerações ou orações coordenadas extensas.
4.  **Dois Pontos:** Introduz falas, citações de leis ou explicações detalhadas.
5.  **Interrogação e Exclamação:** Devem ser usados com critério, focando na clareza da intenção comunicativa (pergunta ou ordem).

---

## Glossário

1.  **Aposto:** Termo de caráter explicativo que se junta a um substantivo ou pronome.
2.  **Vocativo:** Termo usado para chamar ou interpelar o interlocutor.
3.  **Oração Intercalada:** Oração que se insere no meio de outra para introduzir uma observação ou ressalva.
4.  **Adjunto Adverbial:** Termo que indica uma circunstância (tempo, lugar, modo).
5.  **Período Composto:** Frase que possui duas ou mais orações.
6.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
7.  **Auto de Notícia:** Documento oficial onde a autoridade policial relata uma infração presenciada.
8.  **Conjunção:** Palavra que liga orações (ex: e, mas, porque, embora).

Estudem com afinco, meus senhores. A disciplina na escrita reflete a disciplina na farda. Boa sorte na vossa preparação!
$lesson53$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'ortografia',
  'Ortografia e acentuação',
  $lesson54$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a uma jornada de rigor e disciplina intelectual. O ingresso no Ministério do Interior (MININT) exige não apenas vigor físico e integridade moral, mas também uma competência linguística irrepreensível. Um oficial que não domina a sua língua materna — o Português, na sua norma angolana — compromete a clareza de um auto de notícia, a precisão de um relatório de ocorrência e a dignidade da instituição que representa.

Nesta aula, abordaremos a Ortografia e a Acentuação Gráfica, com foco nas alterações introduzidas pelo Acordo Ortográfico de 1990 (AO90). A prova de admissão não perdoa o erro ortográfico; um acento mal colocado ou um hífen esquecido pode ser a diferença entre a admissão e a exclusão. Portanto, exijo a vossa máxima atenção. Peguem no material de escrita e registem cada detalhe.

---

## Introdução

A língua escrita é a ferramenta fundamental do agente da autoridade. No contexto do MININT, a redação de documentos oficiais exige o cumprimento estrito das normas gramaticais vigentes. A ortografia não é uma escolha estética, mas uma convenção legal que garante a uniformidade e a compreensão mútua entre as instituições do Estado e o cidadão. Um erro de acentuação num nome próprio ou num termo jurídico pode invalidar um processo administrativo ou judicial.

A importância deste tema para o concurso da Polícia Nacional reside no facto de que a prova de Língua Portuguesa é, historicamente, a que apresenta maior taxa de reprovação. O candidato deve demonstrar que domina as regras de acentuação gráfica, o uso correto do hífen em termos compostos e a aplicação de maiúsculas e minúsculas de acordo com a hierarquia e os protocolos oficiais. Esta aula visa dotar-vos da precisão técnica necessária para superar este desafio.

---

## Conceitos fundamentais

Para dominarmos a ortografia, precisamos de alicerces sólidos. Vamos rever cinco conceitos essenciais:

### 1. Acentuação Tónica vs. Acentuação Gráfica
A **acentuação tónica** refere-se à sílaba pronunciada com maior intensidade (sílaba tónica). A **acentuação gráfica** é o uso de sinais (agudo, circunflexo) para marcar essa intensidade ou a abertura da vogal, seguindo regras específicas.
*   **Exemplo:** Na palavra **esquadra**, a sílaba tónica é "qua", mas não leva acento gráfico. Na palavra **polícia**, a sílaba tónica é "lí" e exige acento agudo.
*   **Nota prática:** Nem toda a palavra acentuada na fala leva acento no papel. O concurso testará se conhece as regras de exceção.

### 2. Classificação das Palavras quanto à Acentuação
As palavras dividem-se em oxítonas (última sílaba tónica), paroxítonas (penúltima) e proparoxítonas (antepenúltima).
*   **Exemplo:** **Retratar** (oxítona), **Agente** (paroxítona), **Viatura** (paroxítona), **Trânsito** (proparoxítona).
*   **Nota prática:** Em Angola, a maioria das palavras são paroxítonas. Lembrem-se: todas as proparoxítonas são obrigatoriamente acentuadas.

### 3. O Hífen e os Prefixos
O hífen é um sinal gráfico de união ou separação. Com o AO90, o seu uso com prefixos (como *auto-*, *sub-*, *infra-*) mudou significativamente.
*   **Exemplo:** **Autoestrada** (agora escreve-se junto) vs. **Anti-higiénico** (mantém o hífen devido ao 'h').
*   **Nota prática:** A regra de ouro atual é: "os opostos atraem-se, os iguais repelem-se" (letras diferentes juntam-se; letras iguais separam-se com hífen).

### 4. Maiúsculas e Minúsculas de Cortesia e Hierarquia
Refere-se ao uso de letras capitais para designar instituições, cargos de chefia e entidades públicas.
*   **Exemplo:** **Ministério do Interior**, **Comissário-Geral**, **Comando Provincial de Luanda**.
*   **Nota prática:** Em documentos oficiais da PN, cargos e instituições devem ser grafados com inicial maiúscula em sinal de respeito e identificação institucional.

### 5. Ditongos Abertos em Paroxítonas
Uma das mudanças mais drásticas do AO90 foi a queda do acento nos ditongos abertos "ei" e "oi" em palavras paroxítonas.
*   **Exemplo:** Antes escrevia-se "idéia", agora escreve-se **ideia**. Antes "assembléia", agora **assembleia**.
*   **Nota prática:** Cuidado! Se a palavra for oxítona, o acento mantém-se (ex: **herói**, **papéis**).

---

## Aprofundamento

Vamos agora ao detalhe técnico que separa o candidato comum do futuro oficial.

### Regras de Acentuação Pós-Acordo Ortográfico

1.  **O Fim do Trema:** O trema desapareceu completamente de todas as palavras da língua portuguesa (ex: *consequência*, *aguentar*), exceto em nomes próprios estrangeiros e seus derivados (ex: *Müller*).
2.  **Acentos Diferenciais:** Foram eliminados na sua maioria. Não se usa mais acento para distinguir "pára" (verbo) de "para" (preposição). No entanto, o acento mantém-se em:
    *   **Pôde** (pretérito perfeito) para distinguir de **pode** (presente).
    *   **Pôr** (verbo) para distinguir de **por** (preposição).
    *   **Têm** e **Vêm** (plural) para distinguir de **tem** e **vem** (singular). Isto é vital em relatórios: "Os suspeitos **têm** antecedentes".
3.  **Hiatos "oo" e "ee":** O acento circunflexo desapareceu. Escreve-se **voo**, **enjoo**, **leem**, **veem**.

### O Uso do Hífen com Prefixos (Regras Detalhadas)

Esta é a área onde ocorrem mais erros em concursos. Memorizem estas diretrizes:
*   **Usa-se hífen** quando o prefixo termina na mesma vogal com que começa a segunda palavra: **micro-ondas**, **anti-inflamatório**.
*   **Usa-se hífen** sempre que a segunda palavra começa por **H**: **super-homem**, **extra-humano**, **pré-história**.
*   **Não se usa hífen** quando o prefixo termina em vogal e a segunda palavra começa por consoante diferente de **R** ou **S**: **semicírculo**, **infraestrutura**, **antiprojecto**.
*   **Regra do R e S:** Se o prefixo termina em vogal e a segunda palavra começa por **R** ou **S**, estas consoantes duplicam-se e o hífen desaparece: **antirracismo**, **antissocial**, **contrarregra**.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a frase que cumpre rigorosamente as normas de acentuação e ortografia vigentes.
A) O Agente da PN parou a viatura para que o Comissário pudesse passar.
B) O Agente da PN párou a viatura para que o Comissário pudesse passar.
C) O Agente da PN parou a viatura para que o Comissário pôdesse passar.

*   **Resolução:** A opção correta é a **A**. 
*   **Raciocínio:** "Parou" (verbo parar) não tem acento. "Pudesse" é o imperfeito do conjuntivo e nunca foi acentuado. Na opção B, o acento em "párou" está incorreto (acento diferencial extinto). Na C, "pôdesse" não existe.

**Exercício 2:** Aplique a regra do hífen corretamente: (Extra) + (oficial); (Sub) + (inspetor).
*   **Resolução:** **Extraoficial** e **Subinspetor**.
*   **Raciocínio:** Em "extraoficial", as vogais são diferentes (a/o), logo juntam-se. Em "subinspetor", o prefixo termina em consoante e a segunda palavra começa por vogal diferente, logo juntam-se.

**Exercício 3:** Corrija a frase: "Eles veem a esquadra de longe e temem o auto-de-infração."
*   **Resolução:** "Eles **veem** a esquadra de longe e temem o **auto de infração**."
*   **Raciocínio:** "Veem" (verbo ver) perdeu o acento circunflexo. "Auto de infração" não leva hífen, pois é uma locução substantiva sem elemento de ligação (regra geral do AO90 para locuções, salvo exceções como "cor-de-rosa").

---

## Erros comuns a evitar

1.  **Confundir "Há" com "A":** "O crime ocorreu **há** duas horas" (tempo decorrido/passado). "A esquadra fica **a** dois quilómetros" (distância/futuro). Em relatórios policiais, este erro é fatal.
2.  **Acentuar "Luanda" ou "Benguela":** São paroxítonas terminadas em vogal "a", logo não levam acento. Muitos candidatos, por excesso de zelo, acentuam nomes de províncias.
3.  **Escrever "Auto-estrada":** Com o novo acordo, vogais diferentes unem-se sem hífen. O correto é **autoestrada**.
4.  **Uso indevido do acento em "Item":** A palavra **item** é paroxítona terminada em "em", tal como "nuvem" ou "homem". Não leva acento. O plural é **itens** (também sem acento).
5.  **Esquecer o acento em "Uíge":** Ao contrário de Luanda, **Uíge** é uma paroxítona terminada em "e" que forma hiato, sendo obrigatório o acento para marcar a tonicidade.

---

## Resumo para memorização

1.  **Proparoxítonas:** Todas são acentuadas (ex: **público**, **policiamento**, **trânsito**).
2.  **Ditongos "ei" e "oi":** Perderam o acento em palavras paroxítonas (**ideia**, **heroico**, **apoio**), mas mantêm em oxítonas (**pastéis**, **herói**).
3.  **Hífen (Vogais):** Letras iguais separam-se (**micro-ondas**); letras diferentes juntam-se (**autoajuda**).
4.  **Hífen (R e S):** Se o prefixo termina em vogal, dobra-se o R ou S e escreve-se junto (**antirroubo**, **minissaia**).
5.  **Diferenciais:** Mantêm-se apenas em **pôr** (verbo), **pôde** (passado), **têm** e **vêm** (plural).

---

## Glossário

1.  **Oxítona:** Palavra cuja acentuação tónica recai na última sílaba.
2.  **Paroxítona:** Palavra cuja acentuação tónica recai na penúltima sílaba.
3.  **Hiato:** Sequência de duas vogais que pertencem a sílabas diferentes.
4.  **Ditongo:** Encontro de uma vogal e uma semivogal na mesma sílaba.
5.  **Prefixo:** Elemento colocado antes da raiz de uma palavra para modificar o seu sentido.
6.  **Locução:** Conjunto de duas ou mais palavras que valem por uma só (ex: locução substantiva).
7.  **Sílaba Tónica:** A sílaba pronunciada com mais força numa palavra.
8.  **Grafia:** A forma correta de escrever as palavras de acordo com as normas.

Estudem com afinco, candidatos. A farda exige brio, e o brio começa na ponta da caneta. Disciplina e bons estudos!
$lesson54$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'semantica',
  'Semântica — sinónimos e antónimos',
  $lesson55$
Bom dia, caros candidatos. Sentem-se e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). A prova de Língua Portuguesa do Ministério do Interior (MININT) não avalia apenas a vossa capacidade de ler; avalia a vossa precisão intelectual. Um oficial de polícia que não domina a semântica é um oficial que redige mal um auto de notícia, que interpreta erradamente uma ordem superior ou que compromete a instrução de um processo criminal por falta de rigor vocabular.

A semântica é o estudo do sentido das palavras e das suas relações de significado. No contexto da segurança pública, a escolha entre duas palavras aparentemente iguais pode ser a diferença entre a legalidade e o abuso de autoridade. Nesta aula, vamos dissecar os sinónimos, antónimos, parónimos, a polissemia e a homonímia, sempre com o foco no rigor que a farda exige.

---

## Introdução

A semântica é a área da linguística que se ocupa do significado das palavras, das frases e dos textos. Para um candidato ao MININT, este tema reveste-se de uma importância estratégica. A actividade policial baseia-se na comunicação escrita e oral: relatórios, depoimentos, mandados e comunicações via rádio. A ambiguidade é a maior inimiga da ordem pública. Se um agente não compreende a nuance entre "deter" e "prender", ou entre "infringir" e "infligir", poderá cometer erros processuais gravíssimos que resultam na nulidade de actos jurídicos.

Além disso, as provas de concurso público em Angola têm privilegiado a capacidade de interpretação textual e a substituição de termos sem perda de sentido. O domínio dos campos semânticos permite ao futuro efectivo da Polícia Nacional compreender a legislação vigente — como a Lei Constitucional ou o Código Penal — com a profundidade necessária para a sua aplicação prática nas ruas de Luanda, de Cabinda ao Cunene.

---

## Conceitos fundamentais

Para dominarmos a semântica, precisamos de estabelecer alicerces sólidos sobre os seguintes conceitos:

### 1. Sinonímia
Refere-se a palavras que possuem significados idênticos ou muito aproximados. É raro existirem sinónimos perfeitos, pois o contexto dita a escolha da palavra.
*   **Exemplo:** *Deter* e *Capturar*. (Ex: "A patrulha conseguiu **deter** o suspeito" / "A patrulha conseguiu **capturar** o suspeito").
*   **Nota prática:** Em relatórios oficiais, prefira termos mais formais. Em vez de "o gatuno fugiu", utilize "o meliante evadiu-se".

### 2. Antonímia
Refere-se a palavras com significados opostos ou contrários.
*   **Exemplo:** *Ordem* e *Anarquia*; *Lícito* e *Ilícito*. (Ex: "O comportamento do cidadão foi **lícito**" vs "O comportamento do cidadão foi **ilícito**").
*   **Nota prática:** O antónimo é fundamental para a classificação de condutas no Direito Penal.

### 3. Paronímia
Palavras que são parecidas na grafia e na pronúncia, mas que têm significados diferentes. Este é o campo onde ocorrem mais erros em concursos.
*   **Exemplo:** *Ratificar* (confirmar) e *Retificar* (corrigir). (Ex: "O Comandante vai **ratificar** a escala de serviço" / "O agente deve **retificar** o erro no relatório").
*   **Nota prática:** Uma letra altera completamente o sentido da ordem dada. Muita atenção à grafia.

### 4. Homonímia
Palavras que têm a mesma pronúncia (homófonas) ou a mesma grafia (homógrafas), mas significados distintos.
*   **Exemplo:** *Auto* (substantivo: documento oficial, como o "Auto de Notícia") e *Auto* (prefixo: a si próprio, como em "Auto-defesa").
*   **Nota prática:** O contexto é o único elemento que permite distinguir o sentido correto de um homónimo.

### 5. Polissemia
É a propriedade de uma palavra ter múltiplos significados dependendo do contexto, mantendo, porém, uma raiz comum de sentido.
*   **Exemplo:** *Linha*. Pode ser a "linha de frente" no patrulhamento, uma "linha telefónica" de emergência (113) ou a "linha de investigação".
*   **Nota prática:** Não confunda com homonímia. Na polissemia, os sentidos estão relacionados entre si.

### 6. Campos Semânticos
É o conjunto de palavras ligadas por um tema ou área de conhecimento.
*   **Exemplo:** Campo semântico de "Segurança Pública": *viatura, algemas, esquadra, patrulha, ordem, cidadania, crime, prevenção*.
*   **Nota prática:** Identificar o campo semântico ajuda na interpretação rápida de textos longos em provas.

---

## Aprofundamento

No estudo da semântica para concursos, devemos ter especial atenção às **nuances contextuais**.

**A) Sinónimos Absolutos vs. Relativos:**
Raramente duas palavras significam exactamente o mesmo em todos os contextos. "Falecer" e "Morrer" são sinónimos, mas num comunicado oficial do Ministério do Interior sobre um agente tombado em serviço, o termo "falecer" ou "perecer" confere a solenidade necessária, enquanto "morrer" é mais genérico.

**B) A Armadilha dos Parónimos no Contexto Policial:**
Existem pares que o candidato deve memorizar obrigatoriamente:
*   **Infligir** (aplicar castigo/pena) vs. **Infringir** (violar uma lei/regra).
*   **Eminente** (elevado, ilustre) vs. **Iminente** (que está prestes a acontecer). Ex: "O perigo de confronto era **iminente**".
*   **Deferir** (conceder, aceitar) vs. **Diferir** (adiar ou ser diferente).

**C) Homónimos e a Escrita:**
Cuidado com as palavras homófonas (som igual, escrita diferente):
*   **Cessão** (acto de ceder bens).
*   **Sessão** (tempo de uma reunião ou cinema).
*   **Secção/Seção** (divisão, departamento). Ex: "Dirija-se à **Secção** de Logística".

**D) Denotação e Conotação:**
A linguagem policial deve ser predominantemente **denotativa** (sentido literal, do dicionário). A linguagem conotativa (figurada) deve ser evitada em documentos oficiais, mas aparece frequentemente em textos literários usados nas provas de interpretação do concurso.

---

## Exemplos resolvidos

### Exemplo 1: Substituição de Termos (Sinonímia)
**Questão:** No trecho "O agente agiu com *presteza* ao imobilizar o suspeito", a palavra sublinhada pode ser substituída, sem alteração de sentido, por:
a) Lentidão
b) Rapidez
c) Hesitação
d) Violência

**Resolução passo-a-passo:**
1. Analisar o contexto: O agente imobilizou o suspeito. "Presteza" indica algo feito de forma pronta, ágil.
2. Analisar as opções: "Lentidão" e "Hesitação" são antónimos. "Violência" é uma característica da acção, mas não é sinónimo de presteza.
3. Conclusão: "Rapidez" é o termo que mantém o sentido original.
**Resposta correcta: b)**

### Exemplo 2: Paronímia e Contexto
**Questão:** Assinale a frase em que o termo entre parênteses foi aplicado correctamente:
a) O meliante agiu com muita (descrição) para não ser visto.
b) O juiz vai (infligir) a sentença ao réu amanhã.
c) O perigo de explosão era (eminente).

**Resolução passo-a-passo:**
1. Na opção (a), o correcto seria "discrição" (qualidade de quem é discreto). "Descrição" é o acto de descrever.
2. Na opção (b), "infligir" significa aplicar uma pena. Está correcto.
3. Na opção (c), "eminente" significa ilustre. O correcto para algo prestes a ocorrer é "iminente".
**Resposta correcta: b)**

### Exemplo 3: Polissemia
**Questão:** A palavra "Posto" apresenta diferentes sentidos nas frases abaixo. Identifique aquela em que se refere a uma patente militar/policial:
a) O combustível no **posto** está caro.
b) Ele foi **posto** em liberdade condicional.
c) O **Posto** de Comissário exige grande responsabilidade.

**Resolução passo-a-passo:**
1. Na frase (a), "posto" é um estabelecimento comercial.
2. Na frase (b), "posto" é o particípio do verbo pôr.
3. Na frase (c), "posto" refere-se ao cargo, à graduação na hierarquia policial.
**Resposta correcta: c)**

---

## Erros comuns a evitar

1.  **Confundir "Ao encontro de" com "De encontro a":** "Ao encontro de" significa estar de acordo; "De encontro a" significa choque, oposição. *Ex: "A viatura foi de encontro ao muro" (bateu).*
2.  **Trocar "Tráfego" por "Tráfico":** "Tráfego" refere-se ao trânsito de veículos. "Tráfico" refere-se ao comércio ilícito (tráfico de estupefacientes). Nunca escreva "tráfico de veículos" a menos que esteja a falar de contrabando de carros.
3.  **Uso indevido de "Mal" e "Mau":** "Mal" é antónimo de "Bem". "Mau" é antónimo de "Bom". *Dica: O agente agiu mal (agiu bem). Ele é um mau elemento (é um bom elemento).*
4.  **Ignorar a regência na sinonímia:** Às vezes, ao trocar um sinónimo, esquece-se que a preposição deve mudar. "Aceder ao sistema" vs. "Entrar no sistema".
5.  **Confundir "Emergir" com "Imergir":** Emergir é vir à tona (aparecer); Imergir é mergulhar (afundar).

---

## Resumo

1.  **Sinónimos** auxiliam na coesão textual e evitam a repetição viciosa em relatórios.
2.  **Antónimos** são essenciais para contrastar factos e comportamentos (legal vs. ilegal).
3.  **Parónimos** exigem atenção redobrada à grafia; uma letra errada pode invalidar o sentido jurídico de um documento.
4.  **Homonímia e Polissemia** dependem estritamente do contexto para serem interpretadas correctamente.
5.  O **Campo Semântico** da Polícia Nacional deve ser dominado para uma leitura técnica eficiente das leis e regulamentos.

---

## Glossário

1.  **Aferir:** Verificar, avaliar, comparar com um padrão (ex: aferir o bafómetro).
2.  **Diligência:** Procedimento ou investigação policial para busca de provas.
3.  **Infracção:** Violação de uma lei, norma ou regulamento.
4.  **Inquirir:** Interrogar, questionar testemunhas ou suspeitos.
5.  **Ostensivo:** Aquilo que é feito à vista de todos, para ser notado (ex: patrulhamento ostensivo).
6.  **Peculato:** Crime de desvio de dinheiro público por funcionário que o administra.
7.  **Flagrante:** Acto que é visto no momento em que ocorre.
8.  **Custódia:** Acto de guardar ou deter alguém sob protecção ou vigilância estatal.

Estudem com afinco. A farda não aceita o erro, e a vossa prova também não. Até à próxima aula.
$lesson55$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'figuras',
  'Figuras de estilo',
  $lesson56$
Bom dia, caros candidatos ao Ministério do Interior. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje não estamos aqui apenas para cumprir um programa; estamos aqui para garantir que a vossa interpretação de texto e o vosso domínio da língua portuguesa sejam ferramentas de precisão, tal como a vossa conduta deverá ser na Polícia Nacional de Angola. No rigor da vida policial, a palavra é a primeira arma de um oficial. Compreender as nuances do que é dito e do que é escrito é fundamental para a elaboração de autos de notícia, relatórios de ocorrência e para a interpretação correta das leis e directivas.

## Introdução

As figuras de estilo, também conhecidas como figuras de linguagem ou recursos retóricos, são estratégias literárias e linguísticas que o emissor utiliza para conferir maior expressividade, ênfase ou beleza à mensagem. No contexto de um concurso público para o MININT, o domínio deste tema é crucial por dois motivos principais: primeiro, porque as provas de Língua Portuguesa testam exaustivamente a vossa capacidade de distinguir o sentido literal (denotativo) do sentido figurado (conotativo); segundo, porque a interpretação de textos jurídicos e literários exige que o candidato identifique intenções que nem sempre estão explícitas na superfície do texto.

Um agente da Polícia Nacional que não saiba identificar uma ironia ou um eufemismo num depoimento pode comprometer a veracidade de uma investigação. Da mesma forma, a compreensão de metáforas e antíteses em discursos oficiais permite uma leitura mais profunda das orientações estratégicas do Comando Geral. Nesta aula, abordaremos as figuras de pensamento, de sintaxe e de som, sempre com o foco no rigor exigido pela vossa futura carreira.

---

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de alicerces sólidos. Vamos focar-nos nos conceitos que mais frequentemente surgem nas provas de acesso à função pública em Angola.

### 1. Metáfora
É a substituição de um termo por outro, baseada numa relação de semelhança implícita, sem o uso de partículas comparativas (como "como", "tal qual").
*   **Exemplo:** "Aquele oficial é um leão na defesa da pátria."
*   **Nota prática:** Diferencia-se da comparação porque a metáfora afirma que algo *é*, enquanto a comparação diz que algo *é como*.

### 2. Metonímia
Ocorre quando se substitui um termo por outro com o qual mantém uma relação de proximidade ou contiguidade (a parte pelo todo, o continente pelo conteúdo, o autor pela obra).
*   **Exemplo:** "A esquadra toda manteve-se em silêncio." (Aqui, "esquadra" substitui os polícias que lá trabalham).
*   **Nota prática:** É muito comum na linguagem administrativa e militar para designar instituições pelos seus edifícios ou símbolos.

### 3. Hipérbole
Consiste no uso de uma expressão exagerada para enfatizar uma ideia ou realidade.
*   **Exemplo:** "Já te disse mil vezes para não estacionares em local proibido!"
*   **Nota prática:** Em relatórios oficiais, a hipérbole deve ser evitada, mas é vital reconhecê-la em depoimentos de civis sob stress emocional.

### 4. Eufemismo
É o recurso utilizado para suavizar uma expressão que possa ser considerada desagradável, chocante ou rude.
*   **Exemplo:** "O suspeito faltou à verdade perante o instrutor do processo." (Em vez de dizer que o suspeito mentiu).
*   **Nota prática:** É uma figura essencial na diplomacia policial e no trato com o público para manter a urbanidade.

### 5. Personificação (ou Prosopopeia)
Atribuição de características, sentimentos ou ações humanas a seres inanimados ou irracionais.
*   **Exemplo:** "As sirenes gritavam desesperadas pelas ruas de Luanda."
*   **Nota prática:** Muito utilizada em textos literários e crónicas jornalísticas sobre a segurança pública.

### 6. Antítese
Aproximação de palavras ou ideias com sentidos opostos para realçar o contraste.
*   **Exemplo:** "A Polícia Nacional trabalha no **dia** e na **noite** para garantir a paz."
*   **Nota prática:** Serve para enfatizar a abrangência de uma ação ou a dualidade de uma situação.

---

## Aprofundamento

Vamos agora elevar o nível da nossa análise. No contexto das provas do MININT, o examinador não quer apenas que saibam o nome da figura; ele quer que compreendam a sua função sintático-semântica.

### Litote: A Afirmação pela Negação
O litote é, de certa forma, o oposto da hipérbole e um parente próximo do eufemismo. Consiste em afirmar algo negando o seu contrário. 
*   **Exemplo:** "O trabalho do agente não foi nada mau." (Significa que foi bom ou muito bom).
*   **Contexto Técnico:** É usado para manter a modéstia ou para suavizar uma crítica, sendo recorrente em pareceres de avaliação de desempenho.

### Ironia: O Sentido Inverso
A ironia consiste em dizer o contrário do que se pensa, geralmente com uma intenção crítica ou humorística. A sua identificação depende totalmente do contexto.
*   **Exemplo:** "Excelente trabalho!", disse o comandante ao ver a viatura suja e mal cuidada.
*   **Atenção:** Na prova, a ironia é frequentemente detetada através de aspas ou de um tom que contradiz a lógica da situação descrita no texto.

### Aliteração e Anáfora: Recursos de Ênfase
*   **Aliteração:** Repetição de sons consonânticos. Exemplo: "O **p**olícia **p**atrulha o **p**erímetro com **p**rudência." Isto cria um ritmo que auxilia na memorização de lemas.
*   **Anáfora:** Repetição de uma palavra ou expressão no início de frases ou versos sucessivos. 
    *   *Exemplo:* "**Pela** ordem, **pela** paz, **pela** segurança do cidadão."
    *   *Uso:* Muito comum em discursos políticos e em preâmbulos de leis para conferir solenidade e autoridade ao texto.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a figura de estilo presente na frase: *"O efetivo da PN é o braço forte da lei em Angola."*
*   **Resolução:** Trata-se de uma **Metáfora**. 
*   **Raciocínio:** Não existe um braço físico de carne e osso que pertença à "lei". Faz-se uma analogia implícita entre a força e a proteção de um braço humano e a capacidade coerciva da Polícia Nacional. Não há partícula comparativa, logo, é metáfora.

**Exercício 2:** Analise a frase: *"Bebemos uma Cuca para celebrar a promoção."*
*   **Resolução:** Trata-se de uma **Metonímia**.
*   **Raciocínio:** Ninguém bebe a marca (Cuca), bebe-se o produto (a cerveja). Substituiu-se o produto pela marca. É uma relação de contiguidade.

**Exercício 3:** Qual a figura de estilo em: *"A morte levou o valoroso agente para o descanso eterno."*
*   **Resolução:** Temos aqui um **Eufemismo** (e também uma personificação).
*   **Raciocínio:** "Descanso eterno" é uma forma suave de dizer que o agente faleceu. O objetivo é tratar um tema doloroso com respeito e menos crueza.

---

## Erros comuns a evitar

1.  **Confundir Metáfora com Comparação:** Se a frase tiver "como", "parece" ou "tal qual", é comparação. Se não tiver, e for uma afirmação direta de identidade figurada, é metáfora.
2.  **Ignorar o Contexto na Ironia:** Muitos candidatos interpretam frases irónicas de forma literal, errando a questão de interpretação de texto. Leiam sempre o parágrafo anterior e o posterior.
3.  **Confundir Antítese com Paradoxo:** A antítese opõe palavras (claro/escuro). O paradoxo opõe ideias que se excluem logicamente numa mesma unidade (ex: "um fogo que arrefece"). O paradoxo é mais profundo e "impossível" na realidade.
4.  **Trocar Metonímia por Metáfora:** Lembrem-se: a metáfora baseia-se na **semelhança**; a metonímia baseia-se na **relação real** (causa/efeito, marca/produto, parte/todo).
5.  **Subestimar a Anáfora:** Em textos de leis, a repetição de termos no início de artigos não é falta de vocabulário, é uma anáfora propositada para garantir a clareza jurídica.

---

## Resumo

1.  **Figuras de Estilo** são recursos que tornam a linguagem mais rica e expressiva, essenciais para a interpretação de textos em concursos.
2.  **Metáfora e Metonímia** são as rainhas das provas; a primeira compara sem o "como", a segunda substitui termos com ligação lógica.
3.  **Eufemismo e Hipérbole** lidam com a intensidade: um suaviza, o outro exagera.
4.  **Ironia** exige atenção redobrada ao contexto e à intenção do autor, sendo comum em crónicas e textos de opinião.
5.  **Antítese e Anáfora** são recursos de estruturação que conferem força e clareza ao discurso institucional e jurídico.

---

## Glossário

*   **Conotativo:** Sentido figurado, subjetivo, que depende do contexto.
*   **Denotativo:** Sentido literal, real, do dicionário.
*   **Semântica:** Estudo do significado das palavras e das mudanças de sentido.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Retórica:** Arte de bem falar, de usar a linguagem para convencer ou influenciar.
*   **Inanimado:** Ser que não tem vida própria (objetos, conceitos abstratos).
*   **Contiguidade:** Relação de proximidade ou dependência entre dois conceitos (base da metonímia).
*   **Coercivo:** Que tem poder de impor pena ou castigo; relativo à força da lei.

Estudem com afinco, candidatos. A farda que pretendem envergar exige um espírito esclarecido e uma mente capaz de decifrar as entrelinhas da realidade angolana. 

**Força e Honra!**
$lesson56$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'redaccao',
  'Redacção oficial e ofícios',
  $lesson57$
# AULA COMPLETA: REDACÇÃO OFICIAL E OFÍCIOS
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção oficial é um instrumento fundamental na administração pública angolana. No contexto do Ministério do Interior, a capacidade de redigir com clareza, precisão e conformidade com as normas estabelecidas é absolutamente essencial. Quer se trate de um ofício dirigido a entidades congéneres, de um memorando interno ou de uma circular de difusão, a qualidade da comunicação escrita reflecte a eficiência e o profissionalismo da instituição. Neste concurso público, espera-se que demonstrem domínio pleno das estruturas e convenções que regem a correspondência administrativa em Angola.

A prova de redacção oficial não avalia apenas a correção gramatical — embora esta seja fundamental — mas também a capacidade de organizar ideias de forma lógica, de adaptar o registo linguístico ao contexto institucional e de cumprir rigorosamente as normas de formatação e protocolo. Compreender a diferença entre um ofício, um memorando e uma circular, bem como dominar as regras de estruturação e as fórmulas de cortesia apropriadas, pode fazer a diferença entre uma classificação excelente e uma classificação medíocre. Portanto, dediquem-se com seriedade a esta matéria.

---

## Conceitos Fundamentais

### 1. **Ofício**

**Definição:** O ofício é um documento oficial de comunicação entre entidades públicas ou entre uma entidade pública e um particular, utilizado para transmitir informações, solicitações, respostas ou decisões de carácter formal e protocolar.

**Exemplo concreto:** Um ofício do MININT dirigido à Polícia Nacional Angolana solicitando informações sobre um processo administrativo, ou um ofício da Direcção Nacional de Migração comunicando uma decisão sobre um pedido de visto.

**Nota prática:** O ofício é o documento mais formal e protocolar. Deve incluir sempre: local e data, número de referência, destinatário, assunto, corpo do texto, fórmula de encerramento e assinatura. Não deve ser nunca demasiado extenso — idealmente, uma página.

---

### 2. **Memorando**

**Definição:** O memorando é um documento de comunicação interna, utilizado para transmitir informações, instruções ou solicitações entre departamentos ou entre superiores e subordinados dentro da mesma instituição.

**Exemplo concreto:** Um memorando do Director do Departamento de Segurança Interna dirigido aos chefes de secção, informando sobre a implementação de um novo procedimento de registo de ocorrências.

**Nota prática:** O memorando é menos formal que o ofício, mas mantém rigor. Pode ser mais conciso e directo. Não requer fórmulas de cortesia tão elaboradas como o ofício. Deve incluir: destinatário, remetente, data, assunto e corpo do texto.

---

### 3. **Circular**

**Definição:** A circular é um documento de difusão interna ou externa, destinado a comunicar informações, normas ou instruções a múltiplos destinatários simultaneamente.

**Exemplo concreto:** Uma circular do MININT dirigida a todas as delegações provinciais, comunicando a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Nota prática:** A circular deve ser clara e objectiva. Começa com uma fórmula de abertura genérica ("Aos Senhores Directores Provinciais") e deve ser numerada e datada. Não é dirigida a um destinatário específico, mas a um conjunto de entidades.

---

### 4. **Exposição de Motivos**

**Definição:** A exposição de motivos é um documento que apresenta, de forma fundamentada e estruturada, as razões, justificações e argumentos que sustentam uma proposta, um pedido ou uma decisão administrativa.

**Exemplo concreto:** Uma exposição de motivos apresentada pelo MININT ao Conselho de Ministros justificando a necessidade de reforço de efectivos nas fronteiras, com dados estatísticos e análise de risco.

**Nota prática:** A exposição de motivos deve ser rigorosa, bem documentada e persuasiva. Segue uma estrutura lógica: introdução, apresentação do problema, análise, propostas e conclusão. Deve citar legislação relevante e dados concretos.

---

### 5. **Registo de Protocolo**

**Definição:** O registo de protocolo é o sistema de numeração e arquivo que garante a rastreabilidade e o controlo de todos os documentos oficiais que entram e saem de uma instituição.

**Exemplo concreto:** Um ofício recebe o número "MININT/DGS/2024/001" que indica: ministério, departamento, ano e número sequencial.

**Nota prática:** Cada instituição tem o seu próprio sistema de protocolo. No MININT, deve familiarizar-se com o formato específico utilizado. Este número deve constar no cabeçalho do documento.

---

### 6. **Fórmulas de Cortesia e Encerramento**

**Definição:** São expressões padronizadas que abrem e fecham documentos oficiais, respeitando protocolos de hierarquia e formalidade.

**Exemplo concreto:** 
- Abertura: "Excelentíssimo Senhor Ministro do Interior"
- Encerramento: "Respeitosamente submetido" ou "Com elevada consideração"

**Nota prática:** A escolha da fórmula depende do destinatário e do grau de formalidade. Para autoridades de topo, use "Excelentíssimo Senhor". Para colegas, "Prezado Colega" é apropriado. O encerramento deve ser sempre respeitoso e formal.

---

## Aprofundamento

### Estrutura Completa do Ofício

Um ofício bem estruturado segue esta ordem:

1. **Cabeçalho institucional:** Logótipo e nome da instituição
2. **Local e data:** "Luanda, 15 de Março de 2024"
3. **Número de referência:** "Ofício nº MININT/DGS/2024/045"
4. **Destinatário:** Nome completo, cargo e instituição
5. **Assunto:** Breve descrição do tema (máximo uma linha)
6. **Saudação:** "Excelentíssimo Senhor" ou equivalente
7. **Corpo do texto:** Dividido em parágrafos lógicos
8. **Encerramento:** Fórmula apropriada
9. **Assinatura:** Nome, cargo e data

### Regras de Redacção Oficial

**Clareza:** Cada frase deve transmitir uma ideia completa. Evite ambiguidades.

**Concisão:** Não use dez palavras quando cinco são suficientes. Elimine redundâncias.

**Objectividade:** Vá directo ao assunto. Não inclua informações desnecessárias.

**Correção gramatical:** Respeite rigorosamente as regras de ortografia, pontuação e concordância.

**Registo formal:** Utilize vocabulário apropriado ao contexto administrativo. Evite gírias, coloquialismos ou expressões muito informais.

**Estrutura lógica:** Organize as ideias de forma sequencial e coerente. Utilize conectores apropriados ("Portanto", "Consequentemente", "Por outro lado").

### Exemplo de Estrutura de Parágrafo Oficial

```
Primeiro parágrafo: Apresentação do assunto e contexto
Parágrafos intermédios: Desenvolvimento, argumentação, detalhes
Último parágrafo: Conclusão, solicitação ou decisão
```

---

## Exemplos Resolvidos

### Exemplo 1: Ofício de Solicitação de Informação

**Situação:** Você trabalha na Direcção de Segurança Interna do MININT e precisa solicitar informações à Polícia Nacional sobre um processo de investigação.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Direcção de Segurança Interna

Luanda, 20 de Março de 2024

Ofício nº MININT/DSI/2024/078

Excelentíssimo Senhor
Comandante-Geral da Polícia Nacional
Luanda

ASSUNTO: Solicitação de informações sobre processo de investigação nº PNA/2024/456

Excelentíssimo Senhor Comandante-Geral,

No âmbito das competências atribuídas a esta Direcção de Segurança Interna, 
solicitamos a Vossa Excelência o envio de informações detalhadas sobre o processo 
de investigação nº PNA/2024/456, relativo ao caso de falsificação de documentos 
de identificação.

Especificamente, requeremos:
a) Relatório técnico da investigação;
b) Listagem de suspeitos identificados;
c) Cronograma das diligências efectuadas;
d) Previsão de conclusão do processo.

Estas informações são necessárias para a elaboração de um parecer técnico que 
será submetido ao Conselho de Ministros, no contexto da avaliação de políticas 
de segurança interna.

Agradecemos antecipadamente a colaboração de Vossa Excelência e ficamos à 
disposição para qualquer esclarecimento adicional.

Respeitosamente submetido,

[Assinatura]
Dr. João Silva
Director de Segurança Interna
```

**Análise:** Este ofício segue rigorosamente a estrutura. Note-se: (1) o cabeçalho institucional; (2) a data e número de referência; (3) a saudação apropriada para uma autoridade de topo; (4) o assunto claro e conciso; (5) o corpo dividido em parágrafos lógicos; (6) o uso de alíneas para maior clareza; (7) a justificação da solicitação; (8) o encerramento formal; (9) a assinatura com identificação completa.

---

### Exemplo 2: Memorando Interno

**Situação:** O Director do Departamento de Recursos Humanos do MININT necessita informar os chefes de secção sobre a implementação de um novo sistema de registo de assiduidade.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Departamento de Recursos Humanos

MEMORANDO

PARA: Chefes de Secção
DE: Dr. António Neves, Director de Recursos Humanos
DATA: 18 de Março de 2024
ASSUNTO: Implementação do novo sistema de registo de assiduidade

---

Informamos que, a partir de 1 de Abril de 2024, entrará em vigor o novo 
sistema de registo de assiduidade (SIRA 2.0) em todas as unidades do MININT.

Este sistema substitui o anterior e apresenta as seguintes melhorias:
• Registo biométrico automático
• Relatórios em tempo real
• Integração com o sistema de folha de pagamento
• Redução de erros administrativos

Solicitamos que:
1. Informem todos os colaboradores da sua secção sobre esta mudança;
2. Participem na sessão de formação (datas a confirmar);
3. Designem um responsável pelo suporte técnico local.

Qualquer dúvida ou sugestão deve ser comunicada a este departamento até 
25 de Março.

Atenciosamente,

[Assinatura]
Dr. António Neves
Director de Recursos Humanos
```

**Análise:** Este memorando é menos formal que o ofício, mas mantém rigor. Note-se: (1) o cabeçalho simplificado; (2) o uso de "PARA/DE/DATA/ASSUNTO" em vez de endereçamento formal; (3) a linguagem mais directa; (4) o uso de alíneas e numeração para clareza; (5) a ausência de fórmulas de cortesia elaboradas; (6) a conclusão com um prazo claro.

---

### Exemplo 3: Circular

**Situação:** O MININT necessita comunicar a todas as delegações provinciais a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Gabinete do Ministro

CIRCULAR Nº MININT/GM/2024/012

Luanda, 22 de Março de 2024

Aos Senhores Directores Provinciais do MININT
Aos Senhores Chefes de Delegação Municipal

ASSUNTO: Entrada em vigor do Regulamento de Procedimentos de Identificação Civil

---

Informamos que, a partir de 1 de Abril de 2024, entra em vigor o novo 
Regulamento de Procedimentos de Identificação Civil, aprovado por Despacho 
Ministerial nº 045/2024, de 15 de Março.

Este regulamento estabelece novos procedimentos para:
• Emissão de cartões de identificação
• Processamento de pedidos de nacionalidade
• Verificação de antecedentes
• Prazos de resposta aos cidadãos

As principais alterações são:
1. Redução do prazo de emissão de 30 para 15 dias úteis
2. Implementação de sistema de agendamento online
3. Reforço dos controlos de segurança
4. Criação de balcão de atendimento prioritário para maiores de 65 anos

Solicitamos que:
• Divulguem este regulamento a todos os colaboradores
• Adaptem os procedimentos locais em conformidade
• Reportem qualquer dificuldade de implementação
• Participem na sessão de esclarecimento (videoconferência, 28 de Março, 14h00)

Cópias do regulamento completo encontram-se em anexo e no portal interno.

Atenciosamente,

[Assinatura]
Eng. José Fernandes
Ministro do Interior
```

**Análise:** Esta circular segue o padrão apropriado: (1) numeração clara; (2) endereçamento genérico a múltiplos destinatários; (3) assunto bem definido; (4) informação estruturada em alíneas; (5) instruções claras; (6) referência a documentação complementar; (7) assinatura de autoridade de topo.

---

## Erros Comuns a Evitar

### 1. **Falta de Clareza no Assunto**
❌ **Errado:** "Assunto: Vários assuntos"
✅ **Correcto:** "Assunto: Solicitação de informações sobre processo de investigação nº PNA/2024/456"

**Explicação:** O assunto deve ser específico e permitir ao leitor compreender imediatamente o conteúdo do documento.

---

### 2. **Uso Incorrecta de Fórmulas de Cortesia**
❌ **Errado:** "Prezado Senhor Ministro" (para um ofício oficial)
✅ **Correcto:** "Excelentíssimo Senhor Ministro"

**Explicação:** A fórmula deve corresponder ao grau de formalidade e à hierarquia do destinatário. Para autoridades de topo, use sempre "Excelentíssimo Senhor".

---

### 3. **Parágrafos Demasiado Longos e Confusos**
❌ **Errado:** Um parágrafo com 10 linhas contendo múltiplas ideias desconexas.
✅ **Correcto:** Parágrafos curtos (3-5 linhas), cada um com uma ideia central clara
$lesson57$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'relatorio',
  'Relatório e acta',
  $lesson58$
# AULA COMPLETA: RELATÓRIO E ACTA
## Módulo de Língua Portuguesa para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção de relatórios e actas constitui uma das competências fundamentais exigidas nos concursos públicos do Ministério do Interior de Angola. Estes documentos não são meros registos burocráticos; são instrumentos legais que documentam decisões, procedimentos e factos ocorridos em contextos administrativos e institucionais. No âmbito do MININT, seja em departamentos de segurança, administração ou gestão de recursos humanos, a capacidade de elaborar estes textos com rigor, clareza e conformidade com as normas estabelecidas é absolutamente essencial.

A importância desta matéria para o vosso concurso reside no facto de que a prova de Língua Portuguesa avalia não apenas a vossa competência gramatical, mas também a vossa capacidade de comunicação profissional e administrativa. Os avaliadores procuram candidatos que dominem a estrutura formal, a linguagem técnica apropriada e as convenções que regem estes documentos. Além disso, durante o exercício das funções no MININT, serão frequentemente chamados a redigir relatórios de actividades, actas de reuniões e minutas de decisões. Por isso, dominar esta competência é investir directamente na vossa carreira profissional.

---

## Conceitos Fundamentais

### 1. **Relatório: Definição e Propósito**

**Definição:** Um relatório é um documento formal que apresenta informações, análises e conclusões sobre um assunto específico, dirigido a uma autoridade ou entidade superior. Tem como objectivo informar, justificar acções, apresentar resultados ou propor soluções.

**Exemplo concreto:** Um inspector do MININT elabora um relatório sobre a fiscalização realizada numa esquadra de polícia em Luanda, descrevendo as irregularidades encontradas, as medidas correctivas necessárias e recomendações para melhorar o funcionamento.

**Nota prática:** O relatório deve ser objectivo, factual e fundamentado em dados concretos. Nunca deve conter opiniões pessoais não justificadas ou linguagem emotiva.

---

### 2. **Acta: Definição e Função**

**Definição:** Uma acta é um documento que regista, de forma resumida mas completa, os assuntos tratados, as decisões tomadas e os acordos estabelecidos durante uma reunião, assembleia ou sessão oficial.

**Exemplo concreto:** Após uma reunião de coordenação entre departamentos do MININT sobre implementação de novos procedimentos de segurança, elabora-se uma acta que regista: data, local, participantes, ordem de trabalhos, deliberações e responsáveis pelas tarefas definidas.

**Nota prática:** A acta é um documento com valor legal. Deve ser precisa, imparcial e registar apenas factos verificados, não interpretações subjectivas.

---

### 3. **Minuta: Definição e Características**

**Definição:** Uma minuta é um documento preliminar, um rascunho ou esboço de um texto oficial (decreto, portaria, resolução) que será posteriormente revisto, aprovado e formalizado. Serve como base para discussão e aperfeiçoamento.

**Exemplo concreto:** O MININT prepara uma minuta de portaria sobre novas normas de funcionamento das esquadras. Esta minuta é distribuída aos departamentos para análise, sugestões e críticas antes da versão final ser assinada pelo Ministro.

**Nota prática:** A minuta não é um documento definitivo. Deve indicar claramente que se trata de um documento em elaboração e estar aberta a sugestões e alterações.

---

### 4. **Linguagem Formal e Registro Administrativo**

**Definição:** É o conjunto de características linguísticas que caracterizam a comunicação oficial e administrativa: vocabulário técnico, estrutura sintáctica complexa, ausência de coloquialismos e respeito pelas normas gramaticais.

**Exemplo concreto:** Em vez de escrever "A polícia foi lá e viu que as coisas não estavam bem", escreve-se: "A inspecção realizada constatou irregularidades no cumprimento dos procedimentos estabelecidos."

**Nota prática:** O registo formal exige concordância rigorosa, uso correcto de tempos verbais (preferencialmente pretérito perfeito para factos passados) e estruturas sintácticas bem definidas.

---

### 5. **Estrutura Formal de um Documento Oficial**

**Definição:** É a organização padronizada dos elementos que compõem um documento administrativo: cabeçalho, identificação, corpo, assinatura e anexos.

**Exemplo concreto:** Um relatório do MININT deve incluir: timbre institucional, número de referência, data, destinatário, assunto, corpo do relatório com introdução/desenvolvimento/conclusão, assinatura e carimbo.

**Nota prática:** A estrutura formal garante que o documento seja reconhecido como oficial e facilita o seu arquivo e consulta posterior.

---

### 6. **Rigor Factual e Verificabilidade**

**Definição:** É a obrigação de que todos os dados, números, datas e factos mencionados sejam exactos, verificáveis e fundamentados em fontes confiáveis.

**Exemplo concreto:** Ao relatar que "foram realizadas 47 inspecções em Março de 2024", este número deve corresponder exactamente aos registos disponíveis. Qualquer discrepância compromete a credibilidade do documento.

**Nota prática:** Sempre que possível, cite fontes, anexe documentos comprovativos e mantenha registos que permitam verificação posterior.

---

## Aprofundamento

### Estrutura Detalhada do Relatório

Um relatório bem estruturado segue este modelo:

**1. Cabeçalho Institucional**
- Timbre do MININT ou departamento responsável
- Número de referência ou protocolo
- Data de elaboração

**2. Identificação**
- Destinatário (a quem se dirige)
- Remetente (quem elabora)
- Assunto (título claro e conciso)

**3. Introdução**
- Contextualização do tema
- Justificação do relatório
- Objectivos específicos
- Período abrangido (se aplicável)

**4. Desenvolvimento**
- Apresentação factual dos dados
- Análise estruturada por tópicos
- Fundamentação com evidências
- Descrição de metodologia (se relevante)

**5. Conclusões**
- Síntese dos achados principais
- Resposta aos objectivos propostos
- Avaliação geral da situação

**6. Recomendações**
- Sugestões de acções correctivas
- Propostas de melhorias
- Responsáveis pelas implementações

**7. Assinatura e Carimbo**
- Nome completo do autor
- Cargo/função
- Data
- Carimbo institucional

### Exemplo de Linguagem Apropriada

**Incorreto (coloquial):**
"Fomos lá e vimos que tudo estava bagunçado. Os rapazes não estavam a fazer bem o trabalho deles."

**Correcto (formal):**
"A inspecção realizada constatou deficiências significativas na organização dos procedimentos administrativos. Verificou-se que o pessoal não cumpria adequadamente os protocolos estabelecidos."

### Regras Gramaticais Essenciais

- **Concordância:** "O relatório e a acta foram elaborados" (não "foi elaborados")
- **Tempos verbais:** Preferencialmente pretérito perfeito para factos passados: "Realizou-se a reunião em 15 de Março"
- **Voz passiva:** Frequente em textos administrativos: "Foi decidido que..." em vez de "Decidimos que..."
- **Pontuação:** Uso correcto de vírgulas em enumerações e períodos complexos

---

## Exemplos Resolvidos

### Exemplo 1: Relatório de Inspecção

**Situação:** Um inspector do MININT realizou uma inspecção numa esquadra de polícia e deve elaborar um relatório.

**Resolução:**

---

**MINISTÉRIO DO INTERIOR**
**DIRECÇÃO NACIONAL DE POLÍCIA**

**RELATÓRIO DE INSPECÇÃO**

**Referência:** DNPOL/2024/0347
**Data:** 18 de Março de 2024
**Destinatário:** Director Nacional de Polícia
**Remetente:** Inspector João da Silva
**Assunto:** Inspecção à Esquadra de Polícia de Viana – Conformidade com Normas de Funcionamento

---

**INTRODUÇÃO**

No cumprimento do plano de inspecções do corrente ano, foi realizada uma visita de avaliação à Esquadra de Polícia de Viana, no período de 11 a 15 de Março de 2024. O objectivo desta inspecção foi verificar o cumprimento das normas estabelecidas no Manual de Procedimentos Administrativos e avaliar as condições de funcionamento da unidade.

**DESENVOLVIMENTO**

1. **Recursos Humanos**
   - Efectivo autorizado: 24 elementos
   - Efectivo presente: 22 elementos
   - Constatou-se que dois elementos se encontravam em licença médica, devidamente documentada
   - O pessoal apresenta-se adequadamente uniformizado e preparado

2. **Infraestruturas**
   - As instalações encontram-se em bom estado de conservação
   - Identificou-se necessidade de reparação da cobertura do pátio traseiro (infiltrações)
   - Os equipamentos informáticos funcionam adequadamente

3. **Documentação e Registos**
   - Os livros de ocorrências estão correctamente preenchidos
   - Verificou-se conformidade com os prazos de arquivo de documentos
   - Detectou-se pequena deficiência no preenchimento de um formulário de denúncia (falta de data)

**CONCLUSÕES**

A Esquadra de Polícia de Viana funciona de forma satisfatória, demonstrando conformidade geral com as normas estabelecidas. O pessoal mostra-se motivado e organizado. As deficiências identificadas são de carácter menor e facilmente corrigíveis.

**RECOMENDAÇÕES**

1. Proceder à reparação da cobertura do pátio traseiro no prazo de 30 dias
2. Reforçar a formação do pessoal sobre preenchimento correcto de formulários
3. Realizar nova inspecção em Setembro de 2024

---

**Assinado:**
Inspector João da Silva
Cédula: 00123456789
Data: 18 de Março de 2024
[Carimbo]

---

### Exemplo 2: Acta de Reunião

**Situação:** Reunião de coordenação entre departamentos do MININT sobre implementação de novo sistema de segurança.

**Resolução:**

---

**ACTA Nº 012/2024**

**MINISTÉRIO DO INTERIOR**
**REUNIÃO DE COORDENAÇÃO INTERDEPARTAMENTAL**

**Data:** 20 de Março de 2024
**Hora de início:** 09h30
**Hora de encerramento:** 11h45
**Local:** Sala de Conferências, Piso 3, Edifício Central

**PARTICIPANTES:**
- Dr. Manuel Ferreira (Director de Segurança) – Presidente
- Eng. Carla Mendes (Departamento de Tecnologia)
- Dr. Paulo Neves (Departamento Jurídico)
- Dra. Amélia Costa (Recursos Humanos)
- Sr. Joaquim Lopes (Segurança Operacional)

**ORDEM DE TRABALHOS:**
1. Apresentação do novo sistema de segurança integrada
2. Cronograma de implementação
3. Responsabilidades departamentais
4. Orçamento e recursos
5. Assuntos diversos

**DELIBERAÇÕES:**

1. **Apresentação do Sistema:** Eng. Carla Mendes apresentou o novo sistema de segurança integrada, com demonstração prática. O sistema foi considerado adequado aos objectivos institucionais.

2. **Cronograma:** Aprovou-se o seguinte cronograma:
   - Fase 1 (Piloto): Abril a Maio de 2024
   - Fase 2 (Expansão): Junho a Agosto de 2024
   - Fase 3 (Consolidação): Setembro a Outubro de 2024

3. **Responsabilidades:**
   - Eng. Carla Mendes: Coordenação técnica geral
   - Dr. Paulo Neves: Conformidade legal e regulatória
   - Dra. Amélia Costa: Formação do pessoal
   - Sr. Joaquim Lopes: Testes operacionais

4. **Orçamento:** Aprovado orçamento de 2.500.000 Kz para a implementação completa.

5. **Próxima Reunião:** Agendada para 10 de Abril de 2024, às 10h00, para avaliação da Fase 1.

**ASSINATURAS:**

Dr. Manuel Ferreira _________________ Data: 20/03/2024
(Presidente)

Eng. Carla Mendes _________________ Data: 20/03/2024

Dr. Paulo Neves _________________ Data: 20/03/2024

Dra. Amélia Costa _________________ Data: 20/03/2024

Sr. Joaquim Lopes _________________ Data: 20/03/2024

---

### Exemplo 3: Minuta de Portaria

**Situação:** Elaboração de minuta de portaria sobre normas de funcionamento de esquadras.

**Resolução:**

---

**MINUTA DE PORTARIA**
**[DOCUMENTO EM ELABORAÇÃO – SUJEITO A REVISÃO]**

**Referência:** MININT/2024/MIN-PORT-0089
**Data de Elaboração:** 18 de Março de 2024
**Departamento Responsável:** Direcção de Administração e Gestão

---

**PORTARIA Nº ___/2024**

**Assunto:** Normas de Funcionamento das Esquadras de Polícia

O Ministro do Interior, considerando:

a) A necessidade de uniformizar procedimentos nas esquadras de polícia em todo o território nacional;
b) A importância de garantir qualidade no atendimento ao público;
c) O cumprimento das obrigações estabelecidas na Lei de Segurança Pública;

**DETERMINA:**

**Artigo 1º – Âmbito de Aplicação**
As presentes normas aplicam-se a todas as esquadras de polícia sob jurisdição do Ministério do Interior.

**Artigo 2º – Horário de Funcionamento**
1. As esquadras funcionarão em regime de 24 horas, com turnos de 8 horas.
2. O atendimento ao público realizar-se-á entre as 07h00 e as 19h00, de segunda a sexta-feira.

**Artigo 3º – Pessoal**
1. Cada esquadra terá um efectivo mínimo de 20 elementos.
2. O pessoal deverá estar adequadamente uniformizado e identificado.

**Artigo 4º – Documentação**
1. Todos os registos deverão ser efectuados em livros próprios ou sistema informático autorizado.
2. Os prazos de arquivo serão os estabelecidos no Manual de Procedimentos.

**Artigo 5º – Disposições Finais**
1. A presente portaria entra em vigor 30 dias após a sua publicação.
2. Revoga todas as disposições anteriores que se lhe oponham.

---
$lesson58$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'spcb',
  'portugues',
  'vocabulario',
  'Vocabulário técnico policial',
  $lesson59$
# AULA: VOCABULÁRIO TÉCNICO POLICIAL
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A preparação para um concurso público no Ministério do Interior exige não apenas conhecimento das leis e regulamentos, mas também o domínio de um vocabulário técnico específico que caracteriza a actividade policial e de segurança interna em Angola. O vocabulário técnico policial não é um simples conjunto de palavras; é, antes, um sistema de comunicação preciso e rigoroso que garante a clareza nas operações, a uniformidade nos relatórios e a compreensão exacta entre os profissionais de segurança. Quando um agente da Polícia Nacional Angolana (PNA) redige um auto de detenção, quando coordena uma operação de patrulhamento ou quando comunica com a hierarquia, utiliza termos que têm significados muito específicos e legalmente vinculativos.

Nesta aula, vamos explorar os termos fundamentais da actividade policial angolana, compreendendo não apenas as suas definições, mas também o seu contexto de utilização e as implicações práticas. Este conhecimento será decisivo na prova escrita do concurso, particularmente nas questões de compreensão de textos oficiais, redacção de relatórios e interpretação de legislação. Além disso, demonstrará ao júri que você compreende a cultura institucional e a linguagem profissional do MININT.

---

## Conceitos Fundamentais

### 1. **Detenção vs. Prisão**

**Definição clara:**
A detenção é o acto de impedir a liberdade de circulação de uma pessoa por um período limitado (até 24 horas, conforme o Código de Processo Penal angolano), enquanto a prisão é uma medida de coação mais grave, decretada por autoridade judicial, que pode ter duração prolongada.

**Exemplo concreto:**
Um polícia detém um indivíduo suspeito de roubo durante uma operação de patrulhamento na Baixa de Luanda. Essa detenção não pode exceder 24 horas. Se, após investigação, existirem indícios suficientes, o Ministério Público pode requerer a prisão preventiva ao tribunal, que pode durar até 90 dias.

**Nota prática:**
Na redacção de relatórios, é fundamental distinguir estes termos. Usar "prisão" quando se refere a "detenção" constitui um erro grave que pode invalidar procedimentos legais.

---

### 2. **Flagrante Delito**

**Definição clara:**
Flagrante delito é a situação em que uma pessoa é apanhada no acto de cometer um crime ou imediatamente após, com evidência clara da sua autoria. É uma circunstância que permite a detenção sem mandado judicial.

**Exemplo concreto:**
Um agente da PNA observa um indivíduo a assaltar uma loja no Sambizanga. O polícia intervém e detém o suspeito no local, com a mercadoria roubada ainda na sua posse. Esta é uma situação de flagrante delito, que justifica a detenção imediata.

**Nota prática:**
O flagrante delito é uma das poucas situações em que a polícia pode actuar sem mandado. Contudo, deve ser documentado com precisão no auto de detenção, incluindo hora, local, testemunhas e descrição exacta do que foi observado.

---

### 3. **Revista e Revista Pessoal**

**Definição clara:**
A revista é o acto de inspecção de bens, veículos ou locais para procura de objectos ilícitos ou provas de crime. A revista pessoal é a inspecção do corpo de uma pessoa, realizada com respeito pela dignidade humana e, preferencialmente, por agente do mesmo sexo.

**Exemplo concreto:**
Durante uma operação de segurança no Kilamba, agentes da PNA efectuam revista de veículos em pontos de controlo. Num desses veículos, encontram armas ilegais. Posteriormente, realizam revista pessoal ao condutor, sendo esta efectuada por um agente do mesmo sexo, respeitando os direitos fundamentais.

**Nota prática:**
A revista deve ser sempre documentada. Qualquer objecto apreendido deve ser registado em auto próprio, com descrição detalhada, assinatura de testemunhas e identificação clara do agente responsável.

---

### 4. **Apreensão e Depósito**

**Definição clara:**
Apreensão é o acto de tomar posse de bens relacionados com a prática de crime ou que constituem instrumentos ou produtos de crime. O depósito é o local seguro onde esses bens são armazenados, sob responsabilidade da polícia.

**Exemplo concreto:**
Numa operação contra tráfico de drogas no Cazenga, agentes apreendem 5 quilogramas de cocaína, uma arma de fogo e 50 mil kwanzas em dinheiro. Estes bens são registados e colocados no depósito da esquadra, sob vigilância, até decisão judicial.

**Nota prática:**
O depósito deve ter registo rigoroso de entrada e saída de bens. Qualquer irregularidade neste processo pode comprometer a validade das provas em tribunal.

---

### 5. **Mandado de Busca e Apreensão**

**Definição clara:**
É uma ordem judicial que autoriza a polícia a entrar num local específico, procurar objectos relacionados com crime e apreendê-los. Deve ser emitido por autoridade judicial competente e conter descrição clara do local e do que se procura.

**Exemplo concreto:**
O Ministério Público obtém um mandado de busca para uma residência em Viana, onde se suspeita de armazenamento de armas ilegais. Os agentes da PNA executam a busca, encontram as armas, procedem à apreensão e elaboram auto circunstanciado.

**Nota prática:**
A execução de um mandado de busca deve ser rigorosa: deve ser apresentado ao proprietário, deve haver testemunhas, e tudo deve ser documentado fotograficamente quando possível. Qualquer desvio do mandado pode invalidar as provas.

---

### 6. **Denúncia e Participação**

**Definição clara:**
Denúncia é a comunicação de um crime feita por qualquer pessoa ao órgão de polícia criminal. Participação é a comunicação de um crime feita pela vítima ou por quem tenha conhecimento directo dos factos.

**Exemplo concreto:**
Um cidadão contacta a esquadra da PNA para denunciar actividades suspeitas num bairro. Uma vítima de roubo apresenta participação formal na polícia, descrevendo o crime e identificando o suspeito.

**Nota prática:**
Ambas devem ser registadas em livro próprio, com data, hora, identificação de quem reporta e descrição clara dos factos. Este registo é fundamental para estatísticas criminais e para rastreabilidade processual.

---

## Aprofundamento

### Contexto Legal e Regulatório

O vocabulário técnico policial em Angola está enquadrado pela **Constituição da República de Angola**, pelo **Código de Processo Penal**, pela **Lei de Organização da Polícia Nacional** e por diversos regulamentos internos do MININT. É essencial que o candidato compreenda que cada termo não é arbitrário, mas resulta de uma construção legal rigorosa.

Quando falamos de "detenção", estamos a referir-nos a um direito fundamental protegido constitucionalmente. O artigo 30 da Constituição garante a liberdade pessoal, e qualquer restrição deve ser proporcional e legal. Por isso, a detenção tem um limite temporal (24 horas) e deve ser comunicada ao Ministério Público. Ultrapassar este prazo sem formalização legal constitui detenção ilegal, com consequências graves para o agente responsável.

### Redacção de Documentos Oficiais

Na prática profissional, o polícia deve redigir autos, relatórios e participações utilizando este vocabulário com precisão. Um auto de detenção deve conter:

- **Identificação clara** do detido (nome completo, data de nascimento, filiação, naturalidade)
- **Circunstâncias da detenção** (hora, local, motivo, se em flagrante ou por mandado)
- **Descrição dos factos** que justificam a detenção
- **Bens apreendidos**, se aplicável, com descrição pormenorizada
- **Assinatura do agente** e de testemunhas
- **Referência ao direito de informação** ao Ministério Público

### Distinções Críticas

É fundamental compreender as seguintes distinções:

| Termo | Duração | Autoridade | Documentação |
|-------|---------|-----------|--------------|
| **Detenção** | Até 24 horas | Polícia | Auto de detenção |
| **Prisão Preventiva** | Até 90 dias | Tribunal | Mandado de prisão |
| **Prisão Preventiva Renovada** | Até 180 dias | Tribunal | Decisão judicial |
| **Prisão Definitiva** | Conforme sentença | Tribunal | Sentença condenatória |

---

## Exemplos Resolvidos

### Exemplo 1: Análise de Situação de Flagrante Delito

**Situação:**
Um agente da PNA, durante patrulhamento nocturno no Rangel, observa um indivíduo a arrombar a porta de uma loja. O agente intervém, detém o suspeito e encontra ferramentas de arrombamento e mercadoria roubada na sua posse.

**Análise passo-a-passo:**

1. **Identificação da situação:** Flagrante delito de roubo/furto qualificado
2. **Justificação da detenção:** O agente presenciou o crime em acto, o que autoriza detenção imediata sem mandado
3. **Documentação necessária:**
   - Auto de detenção (incluindo hora exacta: 23h45, local preciso: Rua X, Rangel)
   - Descrição do suspeito (características físicas, vestuário)
   - Inventário de bens apreendidos (ferramentas, mercadoria, com fotografias se possível)
   - Identificação de testemunhas presentes
4. **Próximos passos:** Comunicação ao Ministério Público dentro de 24 horas, apresentação ao tribunal para decisão sobre prisão preventiva

**Conclusão:** Este é um caso claro de flagrante delito, devidamente documentado, que permite prosseguimento processual válido.

---

### Exemplo 2: Redacção de Relatório de Revista

**Situação:**
Durante operação de segurança no Cazenga, agentes revistam um veículo e encontram uma arma de fogo não registada.

**Redacção correcta:**

> *"Aos 15 de Março de 2024, pelas 14h30, na Avenida Agostinho Neto, Cazenga, durante operação de segurança autorizada, procedemos à revista do veículo de matrícula ABC-1234. Durante a revista, encontrámos, no compartimento de ferramentas, uma arma de fogo tipo pistola, marca Taurus, calibre 9mm, série 123456, sem registo legal. A arma foi apreendida e colocada em depósito. O proprietário do veículo, Sr. João Silva, foi informado dos seus direitos e da apreensão. Testemunhas: Agente Pedro Neves (matrícula 5678) e Agente Maria Gonçalves (matrícula 5679)."*

**Análise:**
- Data e hora precisas ✓
- Local específico ✓
- Descrição detalhada do bem apreendido ✓
- Identificação clara de testemunhas ✓
- Referência a direitos do cidadão ✓

---

### Exemplo 3: Interpretação de Mandado de Busca

**Situação:**
Um candidato recebe um mandado de busca que autoriza procura de "documentos relacionados com fraude" numa residência. O agente encontra documentos, um computador e dinheiro em espécie.

**Análise correcta:**

1. **Documentos:** Podem ser apreendidos (estão explicitamente no mandado)
2. **Computador:** Pode ser apreendido se contiver documentos relacionados com fraude (interpretação razoável)
3. **Dinheiro em espécie:** Só pode ser apreendido se houver indicação clara de que é produto de fraude (não está explícito no mandado)

**Conclusão:** O agente deve apreender documentos e computador, mas registar o dinheiro e solicitar orientação ao Ministério Público sobre apreensão.

**Lição:** Os mandados têm limites específicos. Ultrapassá-los invalida as provas.

---

## Erros Comuns a Evitar

### 1. **Confundir Detenção com Prisão**
**Erro:** "O suspeito foi preso durante 24 horas."
**Correcto:** "O suspeito foi detido durante 24 horas."
**Porquê:** Prisão é medida judicial; detenção é acto policial.

### 2. **Omitir Testemunhas em Autos**
**Erro:** Auto de detenção sem identificação de testemunhas.
**Correcto:** Auto com nomes completos, matrículas e assinaturas de testemunhas.
**Porquê:** Testemunhas garantem validade processual e credibilidade.

### 3. **Usar Linguagem Vaga em Apreensões**
**Erro:** "Foram apreendidos alguns objectos."
**Correcto:** "Foram apreendidos: 1 telemóvel marca Samsung, cor preta; 3 carteiras de couro; 250 mil kwanzas em notas de 5 mil."
**Porquê:** Precisão evita contestações legais e confusões administrativas.

### 4. **Não Distinguir Flagrante de Suspeita**
**Erro:** Deter alguém por "parecer suspeito" sem acto criminoso observado.
**Correcto:** Deter apenas em flagrante delito ou com mandado judicial.
**Porquê:** Detenção sem fundamento é ilegal e viola direitos fundamentais.

### 5. **Exceder Limites de Mandados**
**Erro:** Apreender bens não mencionados num mandado de busca.
**Correcto:** Apreender apenas o que está autorizado; solicitar novo mandado se necessário.
**Porquê:** Excesso invalida provas e compromete processos judiciais.

### 6. **Misturar Conceitos de Revista Pessoal**
**Erro:** Realizar revista pessoal sem respeitar dignidade ou sem agente do mesmo sexo.
**Correcto:** Revista pessoal sempre com agente do mesmo sexo e com máximo respeito.
**Porquê:** Violação de direitos fundamentais e potencial nulidade processual.

---

## Resumo

### 5 Pontos-Chave para Memorizar

1. **Detenção ≠ Prisão:** Detenção é acto policial (até 24h); prisão é medida judicial (duração variável). Esta distinção é fundamental em toda a documentação.

2. **Flagrante Delito é Autorização:** Presenciar crime em acto autoriza detenção imediata sem mandado. Deve ser documentado com precisão (hora, local
$lesson59$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'compreensao',
  'Compreensão e interpretação de texto',
  $lesson60$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). Muitos candidatos cometem o erro crasso de subestimar a Língua Portuguesa, focando-se apenas na preparação física ou no conhecimento específico da lei. No entanto, recordem-se: um oficial do Ministério do Interior (MININT) que não compreende correctamente uma ordem superior ou que redige com ambiguidade um auto de notícia é um perigo para a segurança jurídica e para a ordem pública.

Nesta aula, vamos dissecar a **Compreensão e Interpretação de Texto**. Não se trata apenas de ler; trata-se de descodificar, analisar e concluir com rigor.

---

## Introdução

A prova de Língua Portuguesa para o concurso do MININT exige do candidato uma competência que vai além da alfabetização funcional. No contexto policial, a interpretação de texto é uma ferramenta de trabalho. Diariamente, os efectivos lidam com despachos, decretos-lei, relatórios de ocorrências e directivas operacionais. Um erro de interpretação sobre "quem", "como" ou "quando" pode comprometer a justiça e a liberdade dos cidadãos.

Nesta aula, focaremos na distinção entre o que o texto diz explicitamente (compreensão) e o que ele sugere implicitamente (interpretação). Vamos aprender a identificar a espinha dorsal de um texto informativo e oficial, separando o essencial do acessório, para que, no momento do exame, não sejam traídos pelas "ratoeiras" linguísticas comuns nestes certames.

---

## Conceitos Fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces em cinco conceitos fundamentais:

### 1. Compreensão vs. Interpretação
*   **Definição:** A compreensão (ou intelecção) refere-se à análise objectiva do que está escrito. A interpretação é o que deduzimos a partir do texto, indo além da superfície.
*   **Exemplo:** Se um comunicado diz: "A criminalidade em Luanda reduziu 10% após o reforço do patrulhamento", a **compreensão** é que houve uma queda estatística. A **interpretação** sugere que a estratégia de patrulhamento foi eficaz.
*   **Nota Prática:** Nas perguntas de compreensão, as respostas começam com "Segundo o texto...", "O autor afirma que...". Na interpretação, começam com "Infere-se que...", "Conclui-se do texto que...".

### 2. Ideia Principal e Ideias Secundárias
*   **Definição:** A ideia principal é o núcleo informativo do parágrafo ou texto. As secundárias são exemplos, justificações ou detalhes que orbitam o núcleo.
*   **Exemplo:** Num texto sobre a Lei de Segurança Nacional, a ideia principal pode ser a protecção do Estado, enquanto as secundárias detalham as penas para crimes de traição.
*   **Nota Prática:** Se retirar a ideia principal, o texto perde o sentido. Se retirar as secundárias, o texto fica apenas mais curto.

### 3. Inferência (ou Dedução)
*   **Definição:** É o processo de chegar a uma conclusão lógica com base em pistas deixadas pelo autor.
*   **Exemplo:** "O agente chegou à esquadra com a farda molhada e o guarda-chuva fechado na mão." **Infere-se** que estava a chover lá fora.
*   **Nota Prática:** A inferência deve ser sempre baseada em factos do texto, nunca em opiniões pessoais do candidato.

### 4. Denotação e Conotação
*   **Definição:** Denotação é o uso da palavra no sentido literal (dicionário). Conotação é o sentido figurado, dependente do contexto.
*   **Exemplo:** "A Polícia é o braço direito da justiça" (Conotação - apoio/ferramenta). "O agente feriu o braço direito" (Denotação - anatomia).
*   **Nota Prática:** Textos oficiais do MININT privilegiam quase exclusivamente a linguagem denotativa para evitar ambiguidades.

### 5. Tipologia Textual: O Texto Informativo/Oficial
*   **Definição:** Textos que visam transmitir dados, normas ou factos de forma impessoal e clara.
*   **Exemplo:** Um Decreto Presidencial ou uma Ordem de Serviço do Comandante Geral.
*   **Nota Prática:** Nestes textos, a objectividade é a regra. O autor não usa "eu acho" ou "talvez".

---

## Aprofundamento

No contexto de um concurso público em Angola, a banca examinadora costuma utilizar textos extraídos do *Jornal de Angola* ou do *Diário da República*. É imperativo que o candidato domine a **Estrutura do Texto Oficial**.

### Estratégias de Leitura Crítica
1.  **Skimming (Leitura Superficial):** Leiam o texto rapidamente para identificar o tema geral. Quem escreveu? Para quem? Sobre o quê?
2.  **Scanning (Leitura Selectiva):** Procurem palavras-chave (datas, nomes de instituições, verbos de ordem como "determina", "proíbe").
3.  **Análise de Conectores:** As conjunções são as dobradiças do texto.
    *   **Adversativas (mas, porém, contudo):** Indicam uma mudança de direcção no argumento.
    *   **Conclusivas (logo, portanto, por conseguinte):** Introduzem a ideia final que a banca adora perguntar.

### A Natureza do Texto no MININT
Os textos de natureza oficial seguem o princípio da **concisão** e **clareza**. No entanto, a complexidade reside no vocabulário técnico-jurídico. Ao interpretar um texto sobre a "Lei Orgânica da Polícia Nacional", o candidato deve estar atento à hierarquia das normas. Se o texto diz que uma norma "revoga" outra, ele deve compreender que a anterior deixou de existir.

**Regra de Ouro:** Nunca tragam conhecimentos externos para dentro da interpretação. Se o texto diz que "o sol é azul", para efeitos daquela questão, o sol é azul. O erro mais comum em Angola é o candidato querer responder com base no que ouviu na "Rádio Despertar" ou na "TPA", esquecendo o que está escrito no papel à sua frente.

---

## Exemplos Resolvidos

### Exemplo 1: Compreensão de Texto Normativo
**Texto:** *"O uso da força por parte dos efectivos da Polícia Nacional deve ser estritamente proporcional à resistência oferecida, visando sempre a neutralização da ameaça e a preservação da vida."*

**Pergunta:** De acordo com o texto, quando deve a polícia usar a força?
A) Sempre que houver um crime.
B) De forma superior à força do criminoso para garantir a vitória.
C) Em resposta proporcional à resistência encontrada.

**Resolução:**
*   **Raciocínio:** O texto utiliza a expressão "estritamente proporcional".
*   **Resposta Correcta:** **C**. As opções A e B extrapolam ou contrariam o texto.

### Exemplo 2: Inferência em Texto Informativo
**Texto:** *"O Ministério do Interior anunciou a abertura de 5.000 novas vagas para a carreira policial. Este aumento do efectivo visa dar resposta ao crescimento demográfico nas novas centralidades de Luanda."*

**Pergunta:** Infere-se do texto que:
A) Luanda tem falta de polícias devido ao aumento da população.
B) O concurso é apenas para residentes nas centralidades.
C) A criminalidade aumentou nas centralidades.

**Resolução:**
*   **Raciocínio:** O texto diz que as vagas visam "dar resposta ao crescimento demográfico". Se é preciso mais polícia porque há mais gente, infere-se que o rácio actual é insuficiente.
*   **Resposta Correcta:** **A**. A opção B é uma restrição que o texto não faz. A opção C é uma suposição (pode haver mais gente sem haver mais crime, embora seja provável, o texto não afirma).

### Exemplo 3: Identificação de Ideia Principal
**Texto:** *"A formação contínua dos agentes é o pilar fundamental da modernização da PNA. Sem instrução técnica e ética, os investimentos em viaturas e armamento tornam-se ineficazes, pois o capital humano é que operacionaliza a segurança."*

**Pergunta:** Qual é a ideia central do fragmento?
A) A compra de viaturas e armamento para a polícia.
B) A primazia da formação humana sobre o investimento material.
C) A necessidade de novos quartéis em Angola.

**Resolução:**
*   **Raciocínio:** O autor compara o investimento material com a formação e conclui que a formação é o "pilar fundamental".
*   **Resposta Correcta:** **B**.

---

## Erros Comuns a Evitar

1.  **Extrapolação:** É o erro de "viajar" além do texto. O candidato acrescenta informações que ele conhece, mas que não estão lá.
2.  **Redução:** É focar-se apenas num detalhe ou exemplo e esquecer o objectivo geral do texto.
3.  **Contradição:** Ler mal uma palavra de negação (não, nunca, jamais, excepto) e marcar a opção oposta à verdade.
4.  **Subjectividade:** Deixar que o sentimento pessoal sobre a polícia ou o governo influencie a análise técnica do texto.
5.  **Ignorar o Título:** Muitas vezes, o título antecipa a ideia principal e ajuda a situar o contexto.

---

## Resumo para Memorização

1.  **Compreender** é ler o que está escrito; **Interpretar** é ler o que está nas entrelinhas.
2.  A **Ideia Principal** é o coração do texto; sem ela, o texto morre.
3.  Em concursos do MININT, a linguagem é **Denotativa** (literal e clara).
4.  As **Conjunções** (mas, portanto, porque) definem a lógica do argumento.
5.  **Atenção aos Comandos:** "Segundo o autor" (está no texto) vs "Depreende-se" (está fora, mas é lógico).

---

## Glossário

1.  **Ambuidade:** Falta de clareza; quando uma frase permite dois ou mais sentidos.
2.  **Coesão:** Ligação gramatical entre as frases e parágrafos (uso de pronomes e conectores).
3.  **Coerência:** Lógica interna do texto; ausência de contradições.
4.  **Intelecção:** O mesmo que compreensão; acto de entender o sentido exacto das palavras.
5.  **Infere-se:** Conclui-se, deduz-se através da lógica.
6.  **Lexicologia:** Estudo do conjunto de palavras (vocabulário) de uma língua ou contexto.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
8.  **Texto Injuntivo:** Texto que dá ordens ou instruções (comum em manuais e leis).

Estudem com afinco, candidatos. A farda exige inteligência e disciplina. Até à próxima aula!
$lesson60$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'tipos-texto',
  'Tipos e géneros textuais',
  $lesson61$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão no Ministério do Interior (MININT). Não se enganem: um oficial de polícia não maneja apenas o armamento ou a técnica de patrulhamento; a sua principal ferramenta de trabalho, no dia-a-dia administrativo e jurídico, é a **Língua Portuguesa**.

## Introdução

A prova de admissão para a Polícia Nacional exige do candidato não apenas o conhecimento das leis, mas a capacidade de interpretar e produzir textos com clareza, rigor e objectividade. No exercício das vossas funções, serão chamados a redigir Autos de Notícia, Relatórios de Ocorrência e participações que servirão de base para processos judiciais. Se um agente não souber distinguir um relato de factos (narração) de uma descrição de um suspeito (descrição), a eficácia da justiça angolana pode ficar comprometida por falhas de comunicação.

Nesta aula, vamos dissecar a tipologia textual e os géneros textuais. Compreender a estrutura de um texto é o que vos permitirá ler uma Ordem de Serviço do Comando Geral e executá-la sem hesitações, ou interpretar correctamente uma questão de interpretação de texto na vossa prova de concurso. O rigor que exijo nesta aula é o mesmo rigor que a farda que pretendem envergar exige de cada cidadão que serve a Pátria.

---

## Conceitos fundamentais

Para dominarmos a língua, precisamos de organizar os textos em categorias. Vamos focar-nos nos cinco tipos principais que surgem invariavelmente nos exames do MININT.

### 1. Texto Narrativo
**Definição:** É o texto que relata uma sequência de acontecimentos, reais ou imaginários, vividos por personagens num determinado tempo e espaço. Predominam os verbos de acção no pretérito (passado).
- **Exemplo concreto:** Um **Auto de Notícia** relatando uma detenção em flagrante delito no mercado do Trinta, em Luanda, detalhando quem fez o quê e em que ordem.
- **Nota prática:** A narração responde à pergunta: *"O que aconteceu?"*

### 2. Texto Descritivo
**Definição:** É o texto que "pinta" uma imagem com palavras. Detalha características de objectos, pessoas, lugares ou situações. Há uma forte presença de adjectivos e verbos de estado.
- **Exemplo concreto:** A caracterização de um indivíduo procurado: "Indivíduo de estatura média, tez escura, com uma cicatriz no braço direito, trajando t-shirt branca e calças jeans azuis."
- **Nota prática:** A descrição responde à pergunta: *"Como é?"*

### 3. Texto Expositivo
**Definição:** Tem como objectivo principal informar, explicar ou apresentar um conceito de forma objectiva e neutra, sem tentar convencer o leitor ou narrar uma história.
- **Exemplo concreto:** Um artigo no **Diário da República** explicando as novas competências da Polícia de Guarda Fronteiras.
- **Nota prática:** A exposição responde à pergunta: *"O que é isto/Como funciona?"*

### 4. Texto Argumentativo
**Definição:** É o texto em que o autor defende um ponto de vista (tese) através de argumentos lógicos, com o objectivo de persuadir ou convencer o interlocutor.
- **Exemplo concreto:** Um parecer jurídico de um comissário justificando a necessidade de reforço do policiamento de proximidade num determinado bairro para reduzir a criminalidade.
- **Nota prática:** A argumentação responde à pergunta: *"Por que razão defendo esta ideia?"*

### 5. Texto Instrucional e Injuntivo
**Definição:** Ambos orientam o comportamento do receptor. O **instrucional** fornece instruções (como um manual), enquanto o **injuntivo** impõe ordens ou normas com carácter coercivo.
- **Exemplo concreto:** O **Código de Estrada** (injuntivo) ou o manual de manutenção de uma viatura patrulha (instrucional).
- **Nota prática:** Estes textos utilizam frequentemente o modo imperativo ("Faça", "Pare", "Cumpra").

---

## Aprofundamento

Meus caros, para o concurso, não basta saber as definições; é preciso compreender a estrutura técnica.

### A Estrutura do Texto Narrativo na Função Policial
Na narração policial, o rigor cronológico é vital. Utilizamos o **Pretérito Perfeito do Indicativo** para acções concluídas ("O suspeito *disparou*") e o **Pretérito Imperfeito** para acções contínuas ou circunstanciais ("Enquanto a patrulha *circulava*..."). Num exame, se virem uma sucessão de verbos de acção, marquem "Narrativo".

### A Objectividade no Texto Expositivo-Argumentativo
Muitas vezes, os textos oficiais do MININT são híbridos. Um relatório pode começar por ser **expositivo** (apresentando dados estatísticos sobre crimes em Benguela) e terminar de forma **argumentativa** (propondo soluções baseadas nesses dados). A gramática aqui exige o uso de conectores lógicos (conjunções): *"portanto", "todavia", "visto que", "por conseguinte"*. O domínio destes conectores é o que separa um candidato aprovado de um reprovado.

### Texto Injuntivo: A Linguagem da Autoridade
A Polícia Nacional rege-se pela hierarquia e disciplina. Por isso, o texto injuntivo é a base das **Ordens de Serviço**. A característica gramatical principal é o uso do **Imperativo** ou do **Infinitivo com valor de imperativo**. Exemplo: "Circular com as luzes de emergência ligadas" ou "Apresente-se imediatamente ao Comando". Em provas, textos que indicam normas, leis ou manuais de conduta são classificados como injuntivos.

---

## Exemplos resolvidos

### Exemplo 1: Identificação de Tipologia
**Texto:** *"O agente aproximou-se da viatura, solicitou a documentação ao condutor e, após verificar a irregularidade, efectuou a autuação conforme a lei vigente."*
- **Pergunta:** Qual a tipologia predominante?
- **Raciocínio:** Observamos uma sequência de acções no passado (aproximou-se, solicitou, verificou, efectuou). Há uma progressão temporal.
- **Resposta:** Texto Narrativo.

### Exemplo 2: Análise de Texto Oficial
**Texto:** *"Considerando o aumento do fluxo migratório na fronteira do Luvo, torna-se imperativo o reforço do efectivo. A segurança nacional depende da nossa capacidade de resposta imediata nestes pontos críticos."*
- **Pergunta:** Qual a intenção comunicativa deste fragmento?
- **Raciocínio:** O autor apresenta um facto (aumento do fluxo) e utiliza-o para defender uma necessidade (reforço do efectivo), tentando convencer da importância da acção.
- **Resposta:** Texto Argumentativo.

### Exemplo 3: Distinção entre Descritivo e Expositivo
**Texto A:** *"A nova farda da Polícia Nacional é composta por um tecido resistente, de cor azul-escuro, com o emblema bordado no braço esquerdo."*
**Texto B:** *"A Polícia Nacional de Angola é uma instituição paramilitar, organizada hierarquicamente, que visa garantir a ordem e a tranquilidade públicas."*
- **Análise:** O Texto A foca em características físicas e sensoriais (cor, posição, material), logo é **Descritivo**. O Texto B define o que é a instituição, a sua natureza e missão, logo é **Expositivo**.

---

## Erros comuns a evitar

1.  **Confundir Narrativo com Descritivo:** Lembrem-se: a narração tem movimento (acção); a descrição é uma "fotografia" parada (características).
2.  **Achar que todo o texto oficial é Injuntivo:** Nem todo o documento da polícia é uma ordem. Um relatório de actividades anual é **Expositivo**, não injuntivo.
3.  **Ignorar os Conectores:** Em textos argumentativos, os candidatos costumam errar a interpretação por não saberem se "contudo" indica oposição ou conclusão. Estudem as conjunções!
4.  **Subestimar o Contexto:** No concurso do MININT, as questões usam frequentemente extractos da Constituição da República de Angola (CRA). Leiam a CRA para se familiarizarem com o tom expositivo-injuntivo da lei.

---

## Resumo para memorização

1.  **Narrativo:** Foca na acção e no tempo (Ex: Relato de crime).
2.  **Descritivo:** Foca nos detalhes e adjectivos (Ex: Retrato falado).
3.  **Expositivo:** Foca na informação neutra e conceitos (Ex: Definição de lei).
4.  **Argumentativo:** Foca na defesa de opinião e persuasão (Ex: Justificação de estratégia).
5.  **Injuntivo:** Foca na ordem e na norma (Ex: Regulamento Disciplinar da PN).

---

## Glossário

1.  **Coerência:** Relação lógica entre as ideias de um texto.
2.  **Coesão:** Ligação gramatical entre as palavras e frases (uso de conectores).
3.  **Coercivo:** Que tem poder de obrigar ou reprimir (comum em textos injuntivos legais).
4.  **Género Textual:** A forma social do texto (Ex: Ofício, Circular, Relatório).
5.  **Tipologia Textual:** A estrutura interna do texto (Ex: Narração, Descrição).
6.  **Pretérito Perfeito:** Tempo verbal que indica uma acção totalmente concluída no passado.
7.  **Imperativo:** Modo verbal que exprime ordem, pedido ou conselho.
8.  **Tez:** Cor ou aspecto da pele do rosto (termo comum em descrições policiais).

Estudem com afinco, aspirantes. A farda não aceita a ignorância. A vossa capacidade de compreender estes textos será a vossa primeira vitória no concurso. Força e disciplina!
$lesson61$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'coesao',
  'Coesão e coerência textual',
  $lesson62$
Bom dia, caros candidatos. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a uma unidade fundamental para quem aspira envergar a farda da **Polícia Nacional de Angola (PN)** ou integrar qualquer órgão do **Ministério do Interior (MININT)**. Não estamos aqui apenas para aprender a "escrever bonito"; estamos aqui para aprender a escrever com precisão, lógica e autoridade.

## Introdução

A coesão e a coerência textual não são meros adornos gramaticais; são ferramentas de trabalho essenciais para o oficial de polícia. Imaginem um Auto de Notícia ou um Relatório de Ocorrência onde as ideias se atropelam, onde os factos são contraditórios ou onde o uso incorrecto de um conector altera o sentido de um depoimento. Um erro desta natureza pode comprometer uma investigação, invalidar um processo judicial e, em última instância, prejudicar a administração da justiça na nossa República.

Para o concurso público do MININT, o júri de exame procura candidatos que demonstrem domínio da norma culta da língua portuguesa (norma angolana). A prova de Língua Portuguesa avalia a vossa capacidade de organizar o pensamento de forma lógica e estruturada. Nesta aula, vamos dissecar os mecanismos que transformam um amontoado de frases num **texto** — uma unidade de sentido coerente e coesa.

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de assentar os alicerces sobre cinco conceitos fundamentais:

1.  **Coesão Textual:** É a ligação física, gramatical e lexical entre os elementos do texto (palavras, frases, parágrafos). Se o texto fosse uma parede, a coesão seria o cimento que une os tijolos.
    *   *Exemplo:* "O agente deu ordem de paragem. **Este** agiu conforme o regulamento." (O pronome "este" liga a segunda frase à primeira).
    *   *Nota prática:* Sem coesão, o texto parece uma lista de compras, sem fluidez.

2.  **Coerência Textual:** Refere-se à harmonia de sentido do texto. É a relação lógica entre as ideias, garantindo que não haja contradições e que a mensagem seja compreensível.
    *   *Exemplo:* Seria incoerente escrever: "O suspeito estava desarmado, por isso disparou contra a patrulha." (Se estava desarmado, não poderia disparar).
    *   *Nota prática:* A coerência depende do conhecimento de mundo e do contexto logístico da acção policial.

3.  **Conectores (ou Articuladores):** São palavras ou expressões (conjunções, advérbios, locuções) que estabelecem relações de sentido entre as orações (causa, oposição, conclusão, etc.).
    *   *Exemplo:* "Houve uma infracção, **contudo** o condutor recusou-se a pagar a multa."
    *   *Nota prática:* O uso errado de um conector (como usar "portanto" em vez de "entretanto") destrói a lógica do argumento.

4.  **Anáfora e Catáfora:** São mecanismos de referência. A anáfora retoma algo já dito; a catáfora antecipa algo que será dito.
    *   *Exemplo (Anáfora):* "A esquadra foi reabilitada. **Ela** agora tem melhores condições."
    *   *Nota prática:* Evitam a repetição excessiva de substantivos, tornando a leitura menos cansativa.

5.  **Progressão Temática:** É a forma como o texto avança, acrescentando informações novas a informações já conhecidas, sem fugir do tema central.
    *   *Exemplo:* Começar por descrever o local do crime, depois as provas encontradas e, finalmente, os suspeitos identificados.
    *   *Nota prática:* Um texto sem progressão é redundante; "anda em círculos".

## Aprofundamento

### 1. Mecanismos de Coesão Gramatical

A coesão gramatical utiliza os recursos do sistema da língua. No contexto do MININT, a precisão é vital:

*   **Referenciação:** O uso de pronomes pessoais, possessivos e demonstrativos. Em Angola, é comum o uso do pronome "o mesmo" para retomar um sujeito, mas cuidado: o uso excessivo é considerado vício de linguagem. Prefira sinónimos ou a omissão do sujeito quando o contexto permitir.
*   **Coesão Frásica:** Refere-se à concordância e à ordem das palavras. "Os efectivos da PN **estão** prontos" (concordância verbal correcta).
*   **Coesão Interfrásica:** É aqui que entram os conectores. Devem memorizar as tabelas de conjunções:
    *   *Adversativas (Oposição):* mas, porém, todavia, contudo, no entanto.
    *   *Conclusivas:* logo, portanto, por conseguinte, assim.
    *   *Causais:* porque, visto que, dado que, pois.

### 2. Mecanismos de Coesão Lexical

Ocorre através da escolha das palavras (vocabulário):

*   **Sinonímia:** Substituir uma palavra por outra de sentido semelhante para evitar a repetição. Em vez de repetir "crime" cinco vezes, use "delito", "infracção", "acto ilícito", "ocorrência".
*   **Hiperonímia e Hiponímia:** Relação do geral para o particular. "Viatura" é o hiperónimo de "patrulha", "jipe" ou "motocicleta".
*   **Reiteração:** Às vezes, a repetição de uma palavra-chave é necessária para dar ênfase ou garantir que não haja dúvida sobre quem se fala (muito comum em textos jurídicos e policiais).

### 3. Coerência e Progressão Temática

Um texto coerente deve respeitar três princípios:
1.  **Não-contradição:** Não afirmar A e depois dizer o contrário de A.
2.  **Não-tautologia:** Não ser repetitivo ao ponto de não acrescentar informação nova (o famoso "subir para cima").
3.  **Relevância:** As informações devem ser pertinentes ao tema. Num relatório sobre um assalto na Ilha do Cabo, não é relevante descrever a cor das flores do jardim vizinho, a menos que isso tenha influência no crime.

## Exemplos resolvidos

**Exercício 1: Identificação de Conectores**
*Enunciado:* "O Comandante Provincial deu as ordens necessárias, __________ os oficiais não as cumpriram de imediato, __________ houve um erro de comunicação." Preencha as lacunas com os conectores adequados.

*   **Resolução:**
    1.  A primeira relação é de oposição (as ordens foram dadas, mas não cumpridas). Conectores possíveis: *mas, contudo, todavia*.
    2.  A segunda relação é de causa (o motivo de não terem cumprido foi o erro). Conectores possíveis: *porque, visto que, pois*.
    *   *Resposta final:* "O Comandante Provincial deu as ordens necessárias, **contudo** os oficiais não as cumpriram de imediato, **visto que** houve um erro de comunicação."

**Exercício 2: Coesão por Referenciação**
*Enunciado:* Substitua as repetições no texto seguinte: "O suspeito foi detido no Sambizanga. O suspeito levava consigo uma arma. A arma não tinha licença."

*   **Resolução:**
    1.  Podemos substituir o segundo "O suspeito" pelo pronome "Ele" ou por um sinónimo como "O indivíduo".
    2.  Podemos substituir "A arma" pelo pronome relativo "que" ou por "esta".
    *   *Resposta final:* "O suspeito foi detido no Sambizanga. **Ele** levava consigo uma arma **que** não tinha licença." (Ou: "...uma arma, a qual não possuía licença.")

**Exercício 3: Análise de Coerência**
*Enunciado:* Analise a coerência da frase: "Devido à forte chuva que assolou Luanda, os bombeiros foram chamados para apagar um incêndio florestal de grandes proporções."

*   **Resolução:**
    *   A frase é **incoerente**.
    *   *Raciocínio:* Se houve uma "forte chuva", é logicamente improvável (quase impossível) que ocorra um "incêndio florestal de grandes proporções" ao mesmo tempo, pois a humidade impede a propagação do fogo desta natureza. Há uma contradição pragmática entre a causa (chuva) e o efeito (incêndio florestal).

## Erros comuns a evitar

1.  **Queísmo:** O uso excessivo da palavra "que". Exemplo: "O agente que disse que o carro que foi roubado..." Corrija usando particípios ou pronomes: "O agente, ao afirmar que o carro roubado..."
2.  **Ambiguidade (Anfibologia):** Frases com duplo sentido. Exemplo: "O polícia prendeu o ladrão em sua casa." (Na casa de quem? Do polícia ou do ladrão?). Seja específico: "O polícia prendeu o ladrão na residência deste último."
3.  **Uso indevido de "onde":** Lembre-se, "onde" só deve ser usado para **lugares físicos**. Nunca diga: "A situação onde o crime ocorreu". Diga: "A situação **em que** o crime ocorreu".
4.  **Falta de concordância por distanciamento:** Quando o sujeito está longe do verbo, o candidato tende a errar. "A lista dos candidatos aprovados no concurso do MININT para as províncias do sul **saíram** ontem." (Errado! O que saiu foi a **lista**. O correcto é: "...**saiu** ontem").
5.  **Conectores contraditórios:** Usar "embora" (concessivo) quando se quer dar uma ideia de causa.

## Resumo

1.  **Coesão** é a ligação gramatical; **Coerência** é a ligação lógica de sentido.
2.  Os **conectores** são a chave para a pontuação e para a clareza do raciocínio jurídico-policial.
3.  Evite a **repetição** desnecessária usando sinónimos e pronomes (anáfora).
4.  A **progressão temática** garante que o texto apresente factos novos de forma ordenada.
5.  No contexto do **MININT**, a clareza e a objectividade valem mais do que palavras difíceis usadas fora de contexto.

## Glossário

*   **Anáfora:** Retoma de um termo mencionado anteriormente no texto.
*   **Catáfora:** Referência a um termo que ainda será apresentado.
*   **Conector:** Palavra que estabelece nexo entre orações (conjunção).
*   **Elipse:** Omissão de um termo que se subentende facilmente (ex: "Fomos à esquadra" - omissão de "Nós").
*   **Hiperónimo:** Palavra de sentido genérico (ex: Animal).
*   **Hipónimo:** Palavra de sentido específico (ex: Cão).
*   **Semântica:** Estudo do sentido das palavras e das frases.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.

Estudem com afinco, candidatos. A pátria espera de vós não apenas coragem física, mas também clareza intelectual. A aula terminou. Podem sair de forma ordenada.
$lesson62$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'classes-palavras',
  'Classes de palavras',
  $lesson63$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de escrita.

A vossa presença aqui hoje demonstra um compromisso com o serviço à Pátria. No entanto, para envergar a farda do Ministério do Interior (MININT), não basta o vigor físico; é imperativo o domínio da norma culta da nossa língua oficial. Um agente que não sabe redigir um auto de notícia ou que interpreta mal uma ordem superior por desconhecimento gramatical é um agente limitado. Hoje, daremos início ao estudo sistemático da Morfologia, focando-nos nas **Classes de Palavras**.

---

## Introdução

O estudo das classes de palavras, ou Morfologia, é o alicerce de qualquer comunicação eficaz. No contexto da Polícia Nacional, a precisão terminológica e a correcta estruturação das frases são fundamentais. Imaginem a redacção de um relatório de ocorrência: a troca de um adjectivo por um advérbio, ou o uso incorrecto de uma preposição, pode alterar completamente a descrição de um crime, prejudicando o processo judicial e a justiça.

Para o concurso público do MININT, este tema é recorrente e eliminatório. O examinador não quer apenas saber se o candidato sabe ler; ele quer aferir se o candidato compreende a natureza das palavras e como elas se articulam para formar o pensamento lógico-jurídico necessário à actividade policial. Dominar as dez classes de palavras é o primeiro passo para garantir a vossa vaga e, futuramente, a vossa progressão na carreira.

---

## Conceitos fundamentais

Para compreendermos a estrutura da nossa língua, dividimos as palavras em dez grupos distintos, de acordo com a sua função e forma.

1.  **Substantivo:** É a classe que nomeia os seres, objectos, lugares e sentimentos. É o núcleo das orações.
    *   *Exemplo:* O **agente** patrulha a **Ilha de Luanda**.
    *   *Nota prática:* No Direito e na Actividade Policial, o substantivo deve ser preciso (ex: "detido" em vez de "pessoa").

2.  **Verbo:** Indica acção, estado, ocorrência ou fenómeno da natureza. É a classe mais variável.
    *   *Exemplo:* O Comandante **ordenou** a formatura.
    *   *Nota prática:* Atenção à conjugação no modo imperativo, essencial para a transmissão de ordens.

3.  **Adjectivo:** Atribui uma característica, qualidade ou estado ao substantivo.
    *   *Exemplo:* A intervenção foi **oportuna** e **eficaz**.
    *   *Nota prática:* O adjectivo deve concordar em género e número com o substantivo a que se refere.

4.  **Pronome:** Palavra que substitui ou acompanha o substantivo, indicando a sua posição em relação às pessoas do discurso.
    *   *Exemplo:* **Nós** garantimos a ordem; **este** é o nosso dever.
    *   *Nota prática:* O uso correcto dos pronomes de tratamento (Vossa Excelência, Senhor Comissário) é obrigatório na hierarquia policial.

5.  **Advérbio:** Palavra invariável que modifica o sentido de um verbo, de um adjectivo ou de outro advérbio, indicando circunstâncias (tempo, lugar, modo, etc.).
    *   *Exemplo:* A patrulha chegou **cedo** ao local.
    *   *Nota prática:* Advérbios de modo terminados em "-mente" são frequentes em relatórios técnicos.

6.  **Conjunção:** Serve para ligar orações ou termos semelhantes, estabelecendo relações de coordenação ou subordinação.
    *   *Exemplo:* O suspeito fugiu, **mas** foi capturado logo adiante.
    *   *Nota prática:* Conjunções adversativas (mas, porém, contudo) são vitais para descrever factos contraditórios em inquéritos.

---

## Aprofundamento

As dez classes dividem-se em dois grandes grupos: as **Variáveis** (que mudam de forma para indicar género, número ou tempo) e as **Invariáveis** (que mantêm sempre a mesma forma).

### 1. Classes Variáveis

*   **Substantivo:** Podem ser próprios (Angola, PN) ou comuns (viatura, arma). No concurso, fiquem atentos aos substantivos colectivos (ex: *elenco* de leis, *corpo* de polícia).
*   **Artigo:** Define (o, a, os, as) ou indefine (um, uma, uns, umas) o substantivo. O uso do artigo definido antes de cargos é comum: "O Senhor Comissário".
*   **Adjectivo:** Cuidado com a posição do adjectivo. "Um grande oficial" (valorativo/importância) é diferente de "um oficial grande" (descritivo/estatura).
*   **Numeral:** Indica quantidade (cardinal: um, dois), ordem (ordinal: primeiro, segundo), multiplicação ou divisão. Em documentos oficiais, escreve-se o numeral por extenso e entre parênteses o algarismo: "Vinte e dois (22) detidos".
*   **Pronome:** É uma das áreas mais complexas. Devem dominar os pronomes pessoais (eu, tu, ele...), possessivos (meu, teu, nosso...), demonstrativos (este, esse, aquele...) e relativos (que, o qual, cujo...). A colocação pronominal (ênclise, próclise e mesóclise) é tema certo na prova.
*   **Verbo:** É o motor da frase. Devem dominar a concordância verbal. Se o sujeito é composto ("O agente e o inspector"), o verbo vai para o plural ("chegaram").

### 2. Classes Invariáveis

*   **Advérbio:** Não varia em género ou número. Nunca digam "elas estavam meias cansadas"; o correcto é "elas estavam **meio** cansadas" (advérbio de intensidade).
*   **Preposição:** Liga palavras estabelecendo dependência (de, em, para, com, por). Exemplo: "Mandado **de** captura". A omissão ou troca da preposição altera a regência verbal.
*   **Conjunção:** Dividem-se em coordenativas (ligam orações independentes) e subordinativas (ligam orações dependentes). As conjunções integrantes "que" e "se" introduzem orações substantivas fundamentais em depoimentos.
*   **Interjeição:** Exprime emoções súbitas (Oh!, Ah!, Alerta!). É a classe menos usada em textos formais e relatórios policiais, devendo ser evitada, excepto na transcrição fiel de diálogos de terceiros.

---

## Exemplos resolvidos

**Exemplo 1: Identificação de Classes**
*Frase:* "Os novos recrutas marcharam rapidamente ontem."
*   **Os:** Artigo definido, masculino, plural.
*   **novos:** Adjectivo (caracteriza recrutas).
*   **recrutas:** Substantivo comum (núcleo do sujeito).
*   **marcharam:** Verbo (acção, 3ª pessoa do plural do Pretérito Perfeito).
*   **rapidamente:** Advérbio de modo.
*   **ontem:** Advérbio de tempo.

**Exemplo 2: Colocação Pronominal (Comum em provas do MININT)**
*Questão:* Qual a forma correcta?
a) Me empreste a algema.
b) Empreste-me a algema.
*   **Resolução:** A opção **b** é a correcta. Em português de norma angolana/europeia, não se inicia frase com pronome oblíquo átono. Como o verbo está no imperativo, usa-se a ênclise.

**Exemplo 3: Concordância Nominal**
*Frase:* "É ________ a entrada de pessoas estranhas nesta esquadra." (proibido/proibida)
*   **Resolução:** Se houver artigo ("a entrada"), o adjectivo concorda: "É **proibida** a entrada". Se não houver artigo ("entrada"), usa-se o masculino genérico: "É **proibido** entrada".

---

## Erros comuns a evitar

1.  **Confundir "Mal" com "Mau":** "Mal" é advérbio (oposto de bem); "Mau" é adjectivo (oposto de bom). *Ex: O suspeito comportou-se mal (bem). Ele é um mau (bom) cidadão.*
2.  **Uso de "Onde" vs "Aonde":** "Onde" indica lugar fixo. "Aonde" indica movimento (com verbos que pedem a preposição 'a'). *Ex: Onde está a viatura? / Aonde vais com tanta pressa?*
3.  **Incorrecção no uso de "Há" e "A":** "Há" indica tempo decorrido (passado) ou existência. "A" indica distância ou tempo futuro. *Ex: Trabalho na PN há dez anos. A esquadra fica a dois quilómetros.*
4.  **Pleonasmos viciosos:** Evitem "subir para cima" ou "entrar para dentro" em relatórios. São erros de lógica que demonstram pobreza de vocabulário.
5.  **Concordância do verbo "Haver":** Quando significa "existir", o verbo haver é impessoal e fica sempre no singular. *Ex: Havia (e não haviam) muitos manifestantes na praça.*

---

## Resumo

Para a vossa prova, fixem estes cinco pontos:
1.  **Morfologia** estuda a palavra isolada; a sua função na frase será estudada na Sintaxe.
2.  Existem **6 classes variáveis** (substantivo, artigo, adjectivo, numeral, pronome, verbo) e **4 invariáveis** (advérbio, preposição, conjunção, interjeição).
3.  O **Substantivo** e o **Verbo** são os pilares de qualquer texto oficial.
4.  Os **Conectivos** (preposições e conjunções) são responsáveis pela coesão do texto; sem eles, as ideias ficam soltas.
5.  A **Norma Angolana** segue o padrão do português europeu, especialmente na colocação pronominal e regência, sendo este o padrão exigido nos concursos públicos.

---

## Glossário

1.  **Morfologia:** Estudo da estrutura, da formação e da classificação das palavras.
2.  **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
3.  **Locução:** Conjunto de duas ou mais palavras que valem por uma (ex: locução adverbial "às pressas").
4.  **Substantivo Colectivo:** Nome comum que, no singular, designa um conjunto de seres da mesma espécie.
5.  **Verbo Impessoal:** Aquele que não tem sujeito e é usado apenas na 3ª pessoa do singular.
6.  **Regência:** Relação de dependência entre um termo regente (verbo ou nome) e o seu complemento.
7.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e das frases no discurso.
8.  **Ênclise:** Colocação do pronome depois do verbo (ex: Prendi-o).

Estudem com afinco, senhores candidatos. A disciplina é a alma da Polícia e o estudo é a arma do intelectual. Próxima aula: Sintaxe da Oração.

Podem sair para o intervalo.
$lesson63$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'verbos',
  'Conjugação verbal',
  $lesson64$
Bom dia, caros aspirantes. Tomem os vossos lugares e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para a vossa aprovação no concurso público do Ministério do Interior (MININT), especificamente para o ingresso na Polícia Nacional de Angola (PN). A língua portuguesa não é apenas um instrumento de comunicação; para um oficial da ordem, ela é uma ferramenta de trabalho fundamental. Um auto de notícia mal redigido ou um relatório com erros de conjugação verbal pode comprometer a validade jurídica de uma diligência e manchar a imagem da corporação.

Nesta aula, abordaremos a **Conjugação Verbal**. O domínio dos tempos e modos, bem como a distinção entre verbos regulares e irregulares, é o que separa o candidato preparado daquele que sucumbe perante a rasteira do examinador. Exijo rigor, disciplina e foco. Vamos começar.

---

## Introdução

A conjugação verbal é a flexão do verbo em pessoa, número, tempo, modo e voz. No contexto do MININT e da Polícia Nacional, a precisão temporal é vital. Quando um agente relata uma ocorrência, ele deve saber distinguir se uma acção **ocorreu** (concluída), **ocorrera** (anterior a outra já passada) ou **ocorreria** (hipotética ou dependente de condição). A clareza no uso dos tempos verbais garante que a hierarquia e o sistema de justiça compreendam exactamente a sequência dos factos.

Para o concurso público, a banca examinadora foca-se na capacidade do candidato em lidar com as irregularidades verbais e com a correlação entre os modos indicativo e conjuntivo. Não basta saber "falar bem"; é necessário dominar a norma culta, a norma angolana inserida no português europeu, que é a base dos nossos textos legislativos e regulamentares.

---

## Conceitos Fundamentais

Para dominarmos a estrutura, precisamos primeiro de consolidar os alicerces:

1.  **Radical e Desinência:** O radical é a parte que contém o significado do verbo (ex: em *patrulh-ar*, "patrulh" é o radical). A desinência é a terminação que indica o tempo, o modo, a pessoa e o número.
    *   *Exemplo:* No verbo *prender*, em "prendemos", o "-emos" indica a 1.ª pessoa do plural do Presente do Indicativo.
    *   *Nota Prática:* Identificar o radical ajuda a conjugar verbos da mesma família.

2.  **Modos Verbais:** Indicam a atitude do falante em relação à acção.
    *   **Indicativo:** Exprime certeza, factos reais. (Ex: "O agente **cumpre** o seu dever.")
    *   **Conjuntivo:** Exprime dúvida, desejo, hipótese. (Ex: "Espero que o agente **cumpra** o seu dever.")
    *   **Condicional:** Exprime uma acção dependente de uma condição. (Ex: "O agente **cumpriria** o dever, se tivesse meios.")
    *   *Nota Prática:* Em relatórios policiais, o Indicativo é o modo predominante pela sua natureza factual.

3.  **Tempos Simples e Compostos:**
    *   **Simples:** Formados por apenas um verbo. (Ex: "Eu **fiz** a ronda.")
    *   **Compostos:** Formados por um verbo auxiliar (*ter* ou *haver*) + o particípio do verbo principal. (Ex: "Eu **tinha feito** a ronda.")
    *   *Nota Prática:* O tempo composto "tinha feito" é muito mais comum na nossa norma do que o simples "fizera".

4.  **Verbos Regulares e Irregulares:**
    *   **Regulares:** Mantêm o radical e seguem o modelo da sua conjugação. (Ex: *Cantar, Vender, Partir*).
    *   **Irregulares:** Sofrem alterações no radical ou nas desinências. (Ex: *Fazer, Ir, Vir, Ver, Ser*).
    *   *Nota Prática:* Os verbos irregulares são os preferidos das provas de concurso.

5.  **Verbos Auxiliares:** São aqueles que ajudam a formar os tempos compostos e a voz passiva. Os principais são *Ter, Haver, Ser* e *Estar*.
    *   *Exemplo:* "O suspeito **foi** detido pela patrulha." (*Ser* como auxiliar da voz passiva).

---

## Aprofundamento

### 1. O Modo Indicativo: A Espinha Dorsal do Relato
No concurso, fiquem atentos ao **Pretérito Perfeito** (acção concluída: "O Comissário deu a ordem") e ao **Pretérito Imperfeito** (acção contínua no passado ou hábito: "Os agentes patrulhavam a zona diariamente"). 
Uma rasteira comum é o **Pretérito Mais-que-perfeito**. Na forma simples (ex: *fizera*), é raro na fala, mas aparece em textos da Lei Orgânica da Polícia Nacional. Na forma composta (*tinha feito*), é essencial para indicar uma acção anterior a outra já passada.

### 2. O Modo Conjuntivo (Subjuntivo) e a Hipótese
O conjuntivo é o terror dos candidatos. Lembrem-se:
*   **Presente do Conjuntivo:** "É necessário que a Polícia **intervenha**" (e não "intervém").
*   **Futuro do Conjuntivo:** Muito usado em editais e leis. "Se o candidato **fizer** a prova..." (e não "se o candidato fazer").

### 3. Verbos Irregulares de Alta Relevância
Prestem atenção ao verbo **Intervir** (derivado de *vir*). Não se diz "o agente interviu", mas sim "o agente **interveio**". Da mesma forma, o verbo **Deter** (derivado de *ter*): "A polícia **deteve** o suspeito" (e não "deteu").

### 4. Tempos Compostos e a Voz Passiva
A voz passiva é fundamental para a redacção oficial. 
*   Voz Activa: "O efectivo garantiu a segurança."
*   Voz Passiva: "A segurança **foi garantida** pelo efectivo."
Aqui, o verbo auxiliar *ser* deve concordar em tempo e modo com a acção principal.

---

## Exemplos Resolvidos

**Questão 1:** Assinale a opção em que o verbo está correctamente conjugado no Pretérito Perfeito do Indicativo.
a) O agente interviu na discussão para evitar o crime.
b) O agente interveio na discussão para evitar o crime.
c) O agente interveira na discussão para evitar o crime.

*   **Resolução:** A resposta correcta é a **b**. O verbo *intervir* segue a conjugação do verbo *vir*. Se dizemos "ele veio", devemos dizer "ele interveio". A opção 'a' é um erro comum de linguagem coloquial, e a 'c' está no pretérito mais-que-perfeito simples.

**Questão 2:** Transponha a frase para o Futuro do Conjuntivo: "Se a patrulha **vê** a infracção, actua imediatamente."
*   **Resolução:** O Futuro do Conjuntivo do verbo *ver* é **vire**. Portanto: "Se a patrulha **vire** a infracção, actuará imediatamente."
*   *Raciocínio:* Muitos confundem o futuro do conjuntivo de *ver* (vire) com o de *vir* (vier). Atenção redobrada aqui!

**Questão 3:** Identifique o tempo e modo da forma verbal sublinhada: "Os peritos **tinham analisado** as provas antes do julgamento."
*   **Resolução:** Trata-se do **Pretérito Mais-que-perfeito Composto do Indicativo**.
*   *Raciocínio:* Verbo auxiliar *ter* no pretérito imperfeito (tinham) + particípio do verbo principal (analisado). Indica uma acção anterior a outra (o julgamento).

---

## Erros Comuns a Evitar

1.  **Confundir "Haver" com "A":** Em relatórios, usa-se "há" para tempo decorrido (passado) ou existência. "O crime ocorreu **há** duas horas." Nunca use "à duas horas" ou "a duas horas" para passado.
2.  **Trocar "Vier" por "Vierem" ou "Ver" por "Vire":** "Quando você **vire** o Comandante" (do verbo ver) vs. "Quando você **vier** à esquadra" (do verbo vir).
3.  **Má conjugação de verbos derivados:** Verbos como *manter, deter, conter* seguem o verbo *ter*. Logo: "Ele **manteve** a calma" (e não "manteu").
4.  **Uso incorrecto do Condicional:** "Se eu pudesse, eu **ajudava**." Na norma culta para concursos, prefira: "Se eu pudesse, eu **ajudaria**."
5.  **Gerundismo:** Evitem o uso excessivo do gerúndio ("Vou estar enviando o relatório"). Digam: "Enviarei o relatório" ou "Vou enviar o relatório".

---

## Resumo

Para a vossa prova, fixem estes 5 pontos:
1.  **Verbos de Comando:** Verbos como *deter, intervir, manter* e *ver* são recorrentes; dominem as suas irregularidades.
2.  **Correlação Temporal:** Se a frase começa no passado, o verbo seguinte deve manter a lógica temporal.
3.  **Futuro do Conjuntivo:** É a base das normas e condições; saibam conjugar "se eu fizer", "se eu vier", "se eu vir".
4.  **Auxiliares:** O verbo *ter* é o auxiliar por excelência nos tempos compostos na norma angolana.
5.  **Voz Passiva:** Saibam transformar a activa em passiva para identificar o sujeito e a flexão correcta do auxiliar.

---

## Glossário

1.  **Desinência:** Terminação verbal que indica flexão de tempo, modo, número ou pessoa.
2.  **Infinitivo:** Forma nominal do verbo (ex: *estudar*). É o nome do verbo.
3.  **Particípio:** Forma nominal usada nos tempos compostos (ex: *estudado*).
4.  **Modo Subjuntivo (Conjuntivo):** Modo que expressa incerteza, desejo ou possibilidade.
5.  **Verbo Auxiliar:** Verbo que perde o seu sentido original para ajudar na conjugação de outro (ex: *ter, ser*).
6.  **Paradigma Verbal:** Modelo de conjugação que os verbos regulares seguem.
7.  **Voz Passiva:** Construção em que o sujeito sofre a acção expressa pelo verbo.
8.  **Pretérito:** Tempo verbal que se refere ao passado.

Estudem com afinco. A farda que pretendem envergar exige, antes de mais, o domínio da palavra e da lei. Disciplina e bons estudos!
$lesson64$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'concordancia',
  'Concordância verbal e nominal',
  $lesson65$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. É com elevado sentido de dever que iniciamos esta sessão de preparação para o vosso concurso público no Ministério do Interior (MININT). Como vosso professor, exijo o máximo de concentração. A farda que pretendem envergar exige não apenas vigor físico, mas também uma competência intelectual irrepreensível.

## Introdução

A língua portuguesa é a nossa ferramenta de trabalho fundamental. No exercício das funções policiais, a elaboração de autos de notícia, relatórios de ocorrências e participações criminais exige um domínio absoluto da norma culta. Uma concordância mal efectuada num documento oficial não é apenas um erro gramatical; é uma falha de rigor que pode comprometer a clareza de uma prova judicial ou a imagem da corporação perante as instituições do Estado e o cidadão.

Nesta aula, focaremos a nossa atenção na **Concordância Verbal e Nominal**. Estes mecanismos sintácticos são os pilares que garantem a coesão entre os elementos da frase. Para um candidato ao MININT, dominar estas regras é demonstrar que possui a disciplina e a precisão necessárias para servir a Pátria com excelência. Vamos dissecar as regras gerais e as excepções que frequentemente surgem nas provas de admissão.

---

## Conceitos fundamentais

Para dominarmos a sintaxe de concordância, precisamos de fixar os seguintes alicerces:

1.  **Concordância Nominal:** É o princípio segundo o qual os determinantes (artigos, numerais, pronomes) e os adjectivos devem harmonizar-se em género (masculino/feminino) e número (singular/plural) com o substantivo a que se referem.
    *   *Exemplo:* **Os** zeloso**s** agente**s** patrulhavam a zona.
    *   *Nota prática:* O substantivo é o "chefe" da frase nominal; todos os outros termos devem segui-lo.

2.  **Concordância Verbal:** É a relação de harmonia que obriga o verbo a flexionar-se em número e pessoa para concordar com o seu sujeito.
    *   *Exemplo:* **O Comando Geral emitiu** a directiva. (3.ª pessoa do singular).
    *   *Nota prática:* Identificar correctamente o núcleo do sujeito é o primeiro passo para não errar a flexão do verbo.

3.  **Sujeito Composto:** É aquele que possui dois ou mais núcleos. A regra geral dita que o verbo deve ir para o plural.
    *   *Exemplo:* **O Comissário e o Inspector reuniram-se** com a unidade.
    *   *Nota prática:* Se o sujeito composto estiver depois do verbo, este pode concordar com o núcleo mais próximo ou ir para o plural.

4.  **Sujeito Colectivo:** Refere-se a um conjunto de seres da mesma espécie, mas a palavra apresenta-se no singular.
    *   *Exemplo:* **A guarnição manteve-se** em alerta.
    *   *Nota prática:* Embora a ideia seja de pluralidade, a forma gramatical é singular, logo o verbo permanece no singular.

5.  **Expressões Partitivas:** São expressões que indicam uma parte de um todo (ex: "a maioria de", "grande parte de", "metade de").
    *   *Exemplo:* **A maioria dos efectivos participou** (ou **participaram**) na formação.
    *   *Nota prática:* Nestes casos, a norma permite a concordância com o núcleo da expressão (singular) ou com o substantivo que a segue (plural).

---

## Aprofundamento

### 1. Concordância Verbal: Casos Específicos e Complexos

No contexto de um concurso público, as questões raramente abordam o óbvio. Devemos atentar nos detalhes técnicos:

**A) Sujeito Composto por Pessoas Gramaticais Diferentes:**
Se no sujeito houver a 1.ª pessoa (eu/nós), ela prevalece. Se houver a 2.ª pessoa (tu/vós), ela prevalece sobre a 3.ª.
*   *Exemplo:* **Tu e o teu colega (vós) fareis** a ronda nocturna. (Ou "farão", seguindo a tendência do português contemporâneo, mas em prova rigorosa, prefira-se a norma clássica).
*   *Exemplo:* **Eu e o Superintendente elaborámos** o relatório. (Eu + Ele = Nós).

**B) Verbos Impessoais (O perigo do verbo "Haver"):**
O verbo **Haver**, quando significa "existir" ou "ocorrer", é impessoal. Isto significa que não tem sujeito e deve ficar sempre na 3.ª pessoa do singular.
*   *Erro comum:* "Houveram muitos crimes ontem." (**Errado**)
*   *Forma correcta:* "**Houve** muitos crimes ontem." (**Correcto**)
*   *Nota:* O verbo **Existir**, por sua vez, é pessoal e concorda com o sujeito: "**Existiram** muitos crimes."

**C) Concordância com o pronome relativo "QUE" e "QUEM":**
*   Com o "QUE", o verbo concorda com o antecedente: "Fui **eu que solicitei** o reforço."
*   Com o "QUEM", o verbo pode ficar na 3.ª pessoa do singular ou concordar com o antecedente: "Fui **eu quem solicitou**" ou "Fui **eu quem solicitei**".

### 2. Concordância Nominal: Adjectivos e Palavras Especiais

**A) Adjectivo referindo-se a vários substantivos:**
Se o adjectivo vier depois de substantivos de géneros diferentes, vai para o masculino plural.
*   *Exemplo:* O **crime** e a **desordem** foram **combatidos**.

**B) Palavras que funcionam como adjectivos (Anexo, Incluso, Próprio, Mesmo, Obrigado):**
Estas palavras concordam em género e número com o substantivo.
*   *Exemplo:* As **fotografias** seguem **anexas** ao processo.
*   *Exemplo:* A **agente** disse: — Muito **obrigada**.
*   *Atenção:* A expressão "em anexo" é invariável. "As fotografias seguem **em anexo**."

---

## Exemplos resolvidos

**Exercício 1:** Analise a frase: *"Grande parte dos candidatos (concluir) a prova antes do tempo."* Justifique as possibilidades de concordância.
*   **Resolução:**
    1.  *Opção A:* "Grande parte dos candidatos **concluiu**..." (Concordância lógica com o núcleo "parte").
    2.  *Opção B:* "Grande parte dos candidatos **concluíram**..." (Concordância atractiva com o termo "candidatos").
    *   **Raciocínio:** Ambas estão correctas segundo a norma culta para expressões partitivas seguidas de plural.

**Exercício 2:** Corrija a frase: *"Fazem dez anos que a Polícia Nacional reforçou o policiamento de proximidade."*
*   **Resolução:** A forma correcta é "**Faz** dez anos...".
*   **Raciocínio:** O verbo "fazer", quando indica tempo decorrido, é impessoal. Não possui sujeito, devendo permanecer obrigatoriamente na 3.ª pessoa do singular.

**Exercício 3:** Escolha a opção correcta: *"Seguem (anexo/anexos) os relatórios e as guias de marcha."*
*   **Resolução:** A forma correcta é "**anexos**".
*   **Raciocínio:** O adjectivo "anexos" refere-se a dois substantivos ("relatórios" - masc. e "guias" - fem.). Pela regra de precedência, o adjectivo assume o masculino plural.

---

## Erros comuns a evitar

1.  **"Houveram" em vez de "Houve":** Nunca use o verbo haver no plural quando este significar existência. É o erro que mais elimina candidatos em Angola.
2.  **Concordância com "Vossa Excelência":** Embora o pronome se refira à 2.ª pessoa (com quem se fala), o verbo e os adjectivos devem ficar na 3.ª pessoa.
    *   *Errado:* Vossa Excelência estais cansado.
    *   *Correcto:* Vossa Excelência **está cansado**.
3.  **"Alerta" e "Menos":** A palavra "menos" é sempre invariável. A palavra "alerta", quando advérbio, também não varia.
    *   *Exemplo:* Os agentes estavam **alerta** (e não "alertas"). Houve **menos** ocorrências este mês.
4.  **Sujeito Colectivo Distante:** Quando o colectivo está longe do verbo, o aluno tende a pluralizar.
    *   *Errado:* O elenco de oficiais, após longas horas de debate sobre a segurança pública, decidiram...
    *   *Correcto:* O elenco [...] **decidiu**. (O núcleo é "elenco").

---

## Resumo para memorização

1.  **Verbo HAVER (existir/tempo):** Sempre no singular. É uma regra de ouro.
2.  **Expressões Partitivas:** Aceitam dupla concordância (singular ou plural).
3.  **Sujeito Composto:** Regra geral, verbo no plural. Se vier depois do verbo, pode concordar com o mais próximo.
4.  **ANEXO/INCLUSO:** São adjectivos. Devem "imitar" o substantivo em género e número.
5.  **Verbo FAZER (tempo):** Fica no singular. "Faz dois meses", nunca "fazem dois meses".

---

## Glossário

*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Flexão:** Alteração na terminação das palavras para indicar género, número, pessoa, tempo ou modo.
*   **Núcleo do Sujeito:** A palavra principal do sujeito, geralmente um substantivo ou pronome, que dita a concordância do verbo.
*   **Verbo Impessoal:** Verbo que não possui sujeito gramatical, sendo usado apenas na 3.ª pessoa do singular.
*   **Concordância Atractiva:** Quando o verbo ou adjectivo concorda com o termo mais próximo, em vez de concordar com o núcleo principal.
*   **Norma Culta:** Conjunto de regras linguísticas utilizadas em contextos formais, documentos oficiais e provas de concurso.

Estudem com afinco, meus senhores. A disciplina começa na ponta do lápis. A pátria aos seus filhos admira!

**Fim da aula.**
$lesson65$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'regencia',
  'Regência verbal e nominal',
  $lesson66$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Tomem os vossos lugares e preparem o material de anotação.

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para o vosso sucesso no concurso público do Ministério do Interior (MININT): a **Regência Verbal e Nominal**. No exercício das funções policiais, a clareza e a precisão na redacção de autos de notícia, relatórios de ocorrência e participações criminais não são apenas uma questão de estética linguística; são uma questão de legalidade e rigor institucional. Um erro de regência pode alterar o sentido de uma norma ou de um depoimento, comprometendo a justiça.

Nesta aula, vamos dissecar como os verbos e os nomes (substantivos, adjectivos e advérbios) se relacionam com os seus complementos. Veremos que, tal como na hierarquia policial, na língua portuguesa existem termos que mandam (regentes) e termos que obedecem (regidos), muitas vezes exigindo a presença de uma preposição específica para que a mensagem seja transmitida sem ambiguidades.

---

## Conceitos fundamentais

Para dominarmos a regência, precisamos de alicerces sólidos. Vamos rever os conceitos que servirão de base para toda a nossa análise:

1.  **Regência:** É a parte da gramática que estuda a relação de dependência entre os termos de uma oração. O termo "regente" é a palavra principal que exige um complemento, e o termo "regido" é o complemento que completa o sentido do regente.
    *   *Exemplo:* O agente **obedece** (regente) **à lei** (regido).
    *   *Nota prática:* Identificar quem exige a preposição é o primeiro passo para não errar na prova.

2.  **Termo Regente:** É o núcleo que solicita um complemento. Pode ser um verbo (regência verbal) ou um nome (regência nominal).
    *   *Exemplo:* O Comissário tem **necessidade** (nome regente) de reforços.
    *   *Nota prática:* No MININT, muitos termos regentes são substantivos abstractos derivados de verbos de acção.

3.  **Transitividade Verbal:** Indica se o verbo precisa de um complemento para ter sentido completo.
    *   *Exemplo:* O suspeito **fugiu** (intransitivo - sentido completo); O agente **deteve** o suspeito (transitivo directo - exige complemento sem preposição).
    *   *Nota prática:* Verbos transitivos directos não admitem preposição entre o verbo e o objecto.

4.  **Objecto Directo e Indirecto:** São os complementos dos verbos transitivos. O directo liga-se ao verbo sem preposição obrigatória; o indirecto liga-se através de uma preposição.
    *   *Exemplo:* O efectivo **porta** a arma (OD); O efectivo **precisa** de munições (OI).
    *   *Nota prática:* A escolha da preposição correcta (de, a, com, em, por) define a regência indirecta.

5.  **Preposição:** É a palavra invariável que liga dois termos, estabelecendo uma relação de subordinação.
    *   *Exemplo:* Atentado **contra** a segurança do Estado.
    *   *Nota prática:* Em concursos, as preposições "a", "de" e "em" são as que mais geram rasteiras.

---

## Aprofundamento

### 1. Regência Verbal: Casos Críticos para a Polícia Nacional

Muitos verbos mudam de sentido conforme a preposição que utilizam. No contexto policial, isto é vital.

*   **Aspirar:**
    *   No sentido de *sorver, respirar*: É transitivo directo. "O perito aspirou o pó do local do crime."
    *   No sentido de *pretender, desejar*: É transitivo indirecto (exige a preposição **a**). "Muitos jovens angolanos **aspiram à** carreira policial." (Note o uso da crase: a + a).
*   **Assistir:**
    *   No sentido de *prestar socorro*: Geralmente transitivo directo. "O agente assistiu o ferido no acidente."
    *   No sentido de *ver, presenciar*: É transitivo indirecto (exige a preposição **a**). "A testemunha assistiu **ao** assalto." (Erro comum: "assistiu o assalto").
    *   No sentido de *caber, pertencer*: É transitivo indirecto. "Este direito assiste **ao** detido."
*   **Implicar:**
    *   No sentido de *acarretar, resultar*: É transitivo directo (não admite a preposição "em"). "A vossa conduta implicará **expulsão** imediata." (Errado: "implicará em expulsão").
*   **Informar / Avisar / Certificar:**
    *   Estes verbos são transitivos directos e indirectos. Informamos *alguém de alguma coisa* ou *alguma coisa a alguém*.
    *   "O Comando informou **os agentes da** nova escala." ou "O Comando informou **a nova escala aos** agentes."
    *   *Atenção:* Nunca use duas preposições ou nenhuma. "Informou aos agentes da escala" está incorrecto.

### 2. Regência Nominal: A Precisão do Substantivo e Adjectivo

A regência nominal ocorre quando um substantivo, adjectivo ou advérbio exige um complemento preposicionado. Vejamos exemplos comuns em textos oficiais do MININT:

*   **Atentado:** Exige a preposição *a* ou *contra*. "Atentado **à** ordem pública" ou "Atentado **contra** a autoridade".
*   **Inerente:** Exige a preposição *a*. "O risco é inerente **à** profissão policial."
*   **Passível:** Exige a preposição *de*. "A infracção é passível **de** multa."
*   **Obediência:** Exige a preposição *a*. "Devemos obediência **à** Constituição da República de Angola."
*   **Respeito:** Exige a preposição *a, com, para com, por*. "Respeito **pelos** direitos humanos."

### 3. O Uso do Pronome Relativo na Regência

Este é um ponto onde muitos candidatos falham. Quando usamos pronomes relativos (que, qual, cujo), a preposição exigida pelo verbo deve ser colocada **antes** do pronome.

*   *Correcto:* "Esta é a lei **a que** me refiro." (Quem se refere, refere-se **a**).
*   *Incorrecto:* "Esta é a lei que me refiro."

---

## Exemplos resolvidos

**Exemplo 1: Analise a frase "O candidato prefere a Polícia Nacional do que as Forças Armadas." e corrija-a se necessário.**
*   **Raciocínio:** O verbo *preferir* é transitivo directo e indirecto. Ele exige a preposição **a** para o segundo termo e rejeita expressões comparativas como "do que" ou "mais".
*   **Resolução:** "O candidato prefere a Polícia Nacional **às** Forças Armadas."

**Exemplo 2: Preencha a lacuna: "O crime ____ fomos testemunhas ocorreu no Cazenga."**
*   **Raciocínio:** O substantivo "testemunha" exige a preposição **de** (quem é testemunha, é testemunha *de* algo). Como temos um pronome relativo, a preposição deve vir antes dele.
*   **Resolução:** "O crime **de que** fomos testemunhas ocorreu no Cazenga."

**Exemplo 3: Qual a regência correcta para o verbo "Visar" no sentido de objectivar?**
*   **Raciocínio:** No sentido de dar um visto (assinatura), é directo. No sentido de ter como objectivo, é transitivo indirecto (preposição **a**).
*   **Resolução:** "As medidas visam **ao** bem-estar da população." (E não "visam o bem-estar").

---

## Erros comuns a evitar

1.  **"Chegar em":** No português padrão, quem chega, chega **a** algum lugar.
    *   *Errado:* Chegámos na esquadra.
    *   *Correcto:* Chegámos **à** esquadra.
2.  **"Namorar com":** O verbo namorar é transitivo directo.
    *   *Errado:* Ele namora com a colega.
    *   *Correcto:* Ele namora a colega. (Embora o uso coloquial aceite "com", em provas de concurso de Angola, segue-se a norma rígida).
3.  **"Esquecer de":** O verbo esquecer só leva preposição se for pronominal (esquecer-se).
    *   *Errado:* Esqueci do relatório.
    *   *Correcto:* Esqueci o relatório OU Esqueceu-me o relatório OU **Esqueci-me do** relatório.
4.  **"Agradecer aos":** Agradecemos *algo* (directo) *a alguém* (indirecto).
    *   *Errado:* Agradeci o Comandante.
    *   *Correcto:* Agradeci **ao** Comandante.

---

## Resumo para memorização

1.  **Regência Verbal** trata da relação entre verbos e seus complementos; **Regência Nominal** trata de nomes (substantivos/adjectivos) e seus complementos.
2.  O verbo **Assistir** (ver) exige a preposição **A**.
3.  O verbo **Preferir** exige a preposição **A** e nunca aceita "do que".
4.  O verbo **Implicar** (sentido de acarretar) não aceita a preposição "em".
5.  Em frases com **pronomes relativos**, a preposição exigida pelo verbo deve ser deslocada para antes do pronome (ex: O cargo **a que** aspiro).

---

## Glossário

*   **Crase:** Fusão da preposição "a" com o artigo definido "a" ou pronome demonstrativo.
*   **Intransitivo:** Verbo que não exige complemento para fazer sentido.
*   **Norma Culta:** Conjunto de regras linguísticas seguidas em documentos oficiais e provas de concurso.
*   **Objecto Indirecto:** Complemento verbal que vem obrigatoriamente precedido de preposição.
*   **Preposição:** Palavra de ligação que estabelece dependência entre termos.
*   **Regente:** O termo que comanda a relação de subordinação, exigindo ou não preposição.
*   **Regido:** O termo que completa o sentido do regente.
*   **Transitivo Directo:** Verbo que exige complemento sem auxílio de preposição.

Estudem com afinco, aspirantes. A disciplina na linguagem é o reflexo da disciplina na farda. Até à próxima aula.
$lesson66$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'sintaxe',
  'Sintaxe da frase',
  $lesson67$
Bom dia, caros candidatos. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje daremos início a um dos módulos mais críticos para quem aspira envergar a farda da nossa gloriosa **Polícia Nacional de Angola (PN)**. A prova de Língua Portuguesa para o Ministério do Interior (MININT) não avalia apenas a vossa capacidade de leitura; ela testa o vosso rigor lógico e a vossa competência em estruturar o pensamento de forma clara e oficial. Um agente da autoridade que não domina a sintaxe da frase é um agente que falha na redacção de um auto de notícia, numa participação criminal ou num relatório de patrulhamento.

A sintaxe é o ramo da gramática que estuda a disposição das palavras na frase e as relações lógicas entre elas. No contexto de um concurso público, o domínio da frase simples e da frase complexa é o que separa o candidato apto daquele que será excluído. A clareza de um texto jurídico ou administrativo depende inteiramente da correcta articulação entre o sujeito, o predicado e as orações que compõem o período. Vamos, portanto, trabalhar com o rigor que a farda exige.

---

## Introdução

A sintaxe é a espinha dorsal da comunicação escrita oficial. No âmbito do MININT, a precisão é fundamental. Imaginem um relatório de ocorrência onde a troca de uma conjunção ou a má estruturação de uma oração subordinada altera o sentido de quem cometeu o crime e de quem foi a vítima. A sintaxe estuda como as palavras se agrupam para formar unidades de sentido: a frase, a oração e o período.

Para o concurso da Polícia Nacional, o examinador focar-se-á na vossa capacidade de identificar os constituintes da frase simples (análise sintáctica interna) e de compreender a articulação das orações no período composto (frase complexa). Dominar estes conceitos permitirá que respondam com segurança às questões de múltipla escolha e, futuramente, que redijam documentos institucionais com a dignidade que a função pública requer.

---

## Conceitos fundamentais

Para avançarmos, precisamos de consolidar os alicerces. Atentem nos seguintes conceitos:

1.  **Frase, Oração e Período:** A frase é qualquer enunciado com sentido completo. A oração é um enunciado que se organiza em torno de um verbo. O período é a frase constituída por uma ou mais orações.
    *   *Exemplo:* "Alto! Polícia!" (Frase nominal). "O agente patrulha a zona da Mutamba." (Oração/Período simples).
    *   *Nota prática:* No concurso, foquem-se no verbo. Se há um verbo, há uma oração.

2.  **Sujeito:** É o ser (pessoa ou coisa) sobre o qual se faz uma declaração e com o qual o verbo concorda em número e pessoa.
    *   *Exemplo:* "Os efectivos da Polícia Nacional garantem a ordem pública." (Sujeito: Os efectivos da Polícia Nacional).
    *   *Nota prática:* Para encontrar o sujeito, perguntem ao verbo: "Quem é que...?" ou "O que é que...?".

3.  **Predicado:** É tudo aquilo que se diz sobre o sujeito. O núcleo do predicado é sempre um verbo.
    *   *Exemplo:* "O Comandante **explicou as novas directrizes**."
    *   *Nota prática:* O predicado contém a acção ou o estado relativo ao sujeito.

4.  **Complementos (Directo e Indirecto):** São termos que completam o sentido de verbos transitivos. O complemento directo liga-se ao verbo sem preposição obrigatória; o indirecto exige preposição (a, para, de, com, etc.).
    *   *Exemplo:* "O agente solicitou **o documento** (CD) **ao condutor** (CI)."
    *   *Nota prática:* Substituam o CD por "o/a" e o CI por "lhe" para testar a função.

5.  **Coordenação:** Processo de ligação de orações independentes, que mantêm o seu sentido próprio mesmo se isoladas.
    *   *Exemplo:* "A patrulha chegou **e** os suspeitos fugiram."
    *   *Nota prática:* As conjunções coordenativas (e, mas, ou, logo) são as vossas bússolas aqui.

6.  **Subordinação:** Processo em que uma oração (subordinada) exerce uma função sintáctica em relação a outra (principal), dependendo dela gramaticalmente.
    *   *Exemplo:* "É necessário **que todos respeitem a lei**."
    *   *Nota prática:* A oração subordinada funciona como se fosse uma peça de um puzzle que falta na oração principal.

---

## Aprofundamento

### 1. A Frase Simples: A Estrutura Interna
A frase simples, ou período simples, contém apenas uma oração (oração absoluta). A sua análise exige o conhecimento da **transitividade verbal**.

*   **Verbos Intransitivos:** Não exigem complemento. "O suspeito fugiu."
*   **Verbos Transitivos Directos:** Exigem um objecto directo. "A Polícia deteve o meliante."
*   **Verbos Transitivos Indirectos:** Exigem um objecto com preposição. "O cidadão obedece à autoridade." (Reparem no uso do acento grave, indicando a preposição 'a' + artigo 'a').
*   **Verbos de Ligação:** Indicam estado ou qualidade (ser, estar, parecer, ficar). Introduzem o **Predicativo do Sujeito**. "O agente está atento." ('Atento' é o predicativo).

### 2. A Frase Complexa: Coordenação e Subordinação
Aqui reside a maior dificuldade dos candidatos. A frase complexa possui duas ou mais orações.

#### A. Orações Coordenadas
Dividem-se em:
*   **Copulativas:** Adição (e, nem, não só... mas também). "O agente vigia e protege."
*   **Adversativas:** Oposição/Contraste (mas, porém, todavia, contudo). "Houve uma denúncia, mas não encontraram provas."
*   **Disjuntivas:** Alternativa (ou, ou... ou, quer... quer). "Ou o cidadão colabora, ou será detido por desobediência."
*   **Conclusivas:** Conclusão (logo, portanto, por conseguinte). "O crime foi provado, logo haverá condenação."
*   **Explicativas:** Justificação (pois, porque, que). "Respeite o agente, que ele está em serviço."

#### B. Orações Subordinadas
Estas dividem-se em três grandes grupos:
1.  **Substantivas:** Exercem funções de substantivo (sujeito, complemento). "O Comissário ordenou **que a operação começasse**." (Oração subordinada substantiva objectiva directa).
2.  **Adjectivas:** Exercem função de adjectivo, introduzidas por pronomes relativos (que, o qual, cujo).
    *   *Restritivas:* "Os agentes **que são honestos** dignificam a farda." (Apenas os honestos).
    *   *Explicativas (entre vírgulas):* "Os agentes, **que são servidores públicos**, devem ser exemplares." (Todos os agentes são servidores).
3.  **Adverbiais:** Exercem função de advérbio (circunstância).
    *   *Temporais:* "Prendam o suspeito **quando ele sair de casa**."
    *   *Causais:* "A estrada foi cortada **porque houve um acidente grave**."
    *   *Condicionais:* "**Se houver motim**, chamem a Unidade de Reacção e Patrulhamento."
    *   *Finais:* "Trabalhamos **para que a paz social seja mantida**."

---

## Exemplos resolvidos

**Exercício 1:** Analise sintacticamente a frase: "O Serviço de Investigação Criminal (SIC) deteve o suspeito ontem em Cacuaco."

*   **Raciocínio:**
    1.  Quem deteve? "O Serviço de Investigação Criminal (SIC)". Logo, este é o **Sujeito Composto** (institucional).
    2.  Qual é a acção? "deteve". Verbo transitivo directo.
    3.  Deteve quem? "o suspeito". **Complemento Directo**.
    4.  Quando? "ontem". **Modificador (ou Adjunto Adverbial) de Tempo**.
    5.  Onde? "em Cacuaco". **Modificador (ou Adjunto Adverbial) de Lugar**.

**Exercício 2:** Classifique a oração sublinhada: "Embora a chuva fosse intensa, a patrulha manteve-se no posto."

*   **Raciocínio:** A conjunção "embora" introduz uma ideia de concessão (um obstáculo que não impede a acção principal).
*   **Resposta:** Oração subordinada adverbial concessiva.

**Exercício 3:** Transforme as duas frases simples numa frase complexa coordenada adversativa:
Frase A: "O agente deu ordem de paragem."
Frase B: "O condutor acelerou o veículo."

*   **Raciocínio:** A relação entre as duas frases é de oposição. Devo usar "mas", "porém" ou "contudo".
*   **Resposta:** "O agente deu ordem de paragem, **mas** o condutor acelerou o veículo."

---

## Erros comuns a evitar

1.  **Separar o Sujeito do Predicado com vírgula:** Este é o erro mais grave. Nunca se escreve: "O Comandante da Esquadra, chegou agora." (Errado). O correcto é: "O Comandante da Esquadra chegou agora."
2.  **Confundir "Porque" com "Porquê":** Em respostas e explicações, usa-se "porque". "Porquê" usa-se no final de frases ou como substantivo.
3.  **Erro de Concordância no Sujeito Composto:** "Chegou o agente e o inspector." (Aceitável se o verbo vier antes), mas o ideal é: "O agente e o inspector chegaram." Atentem à concordância com o plural.
4.  **Confundir Oração Coordenada Adversativa (mas) com Advérbio de Intensidade (mais):** "Queremos mais segurança, mas os recursos são escassos." Nunca troquem um pelo outro.
5.  **Uso incorrecto do pronome relativo "cujo":** "O agente cujo o nome..." (Errado). O correcto é "O agente cujo nome..." (Nunca se usa artigo após 'cujo').

---

## Resumo

Para a vossa prova, memorizem estes 5 pontos:
1.  **Sujeito e Predicado** são os termos essenciais; sem eles, a estrutura da oração fica incompleta.
2.  **Complemento Directo** responde a "quê/quem" e o **Indirecto** exige preposição (a, para).
3.  **Orações Coordenadas** são independentes; as **Subordinadas** dependem da principal.
4.  As **Conjunções** são as chaves para classificar as orações. Estudem as tabelas de conjunções (adversativas, causais, condicionais).
5.  A **Pontuação** muda o sentido. Uma vírgula numa oração adjectiva pode transformar uma restrição numa explicação geral.

---

## Glossário

1.  **Sintaxe:** Parte da gramática que estuda a relação entre as palavras na frase.
2.  **Oração Absoluta:** Período simples, constituído por apenas um verbo.
3.  **Verbo Transitivo:** Verbo que necessita de complementos para ter sentido completo.
4.  **Conjunção:** Palavra invariável que liga duas orações.
5.  **Adjunto Adverbial (Modificador):** Termo que indica uma circunstância (tempo, lugar, modo).
6.  **Predicativo do Sujeito:** Atributo ou estado atribuído ao sujeito através de um verbo de ligação.
7.  **Pronome Relativo:** Palavra que substitui um termo anterior e introduz uma oração subordinada adjectiva.
8.  **Período Composto:** Frase que contém duas ou mais orações.

Estudem com afinco, candidatos. A disciplina é a alma do sucesso, tanto na gramática quanto na vida policial. Força e Honra!
$lesson67$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'pontuacao',
  'Pontuação',
  $lesson68$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a um módulo crucial para o vosso sucesso no concurso público do Ministério do Interior (MININT). A vossa missão, enquanto futuros agentes da autoridade, não se limitará ao patrulhamento ou à manutenção da ordem pública; ela estende-se à redação rigorosa de autos de notícia, relatórios de ocorrência e participações criminais. Um erro de pontuação num documento oficial não é apenas uma falha gramatical; pode ser a diferença entre a condenação de um criminoso ou a anulação de um processo por ambiguidade.

A pontuação é o sistema de sinais gráficos que indica, na escrita, as pausas e a entoação da leitura, organizando a estrutura das frases para que o sentido seja inequívoco. No contexto da Polícia Nacional, a clareza é um imperativo ético e profissional. Nesta aula, vamos dissecar as regras fundamentais que regem o uso do ponto final, da vírgula, do ponto e vírgula, dos dois pontos e dos sinais de interrogação e exclamação, sempre com o rigor que a farda exige.

---

## Conceitos fundamentais

### 1. Ponto Final (.)
O ponto final assinala a pausa máxima e encerra o período simples ou composto, indicando que o sentido daquela unidade de pensamento está completo.
*   **Exemplo:** O efetivo da Polícia Nacional garantiu a segurança durante a manifestação em Luanda.
*   **Nota prática:** No final de siglas (P.N.A.), o uso do ponto tem caído em desuso na prática administrativa moderna, mas em textos corridos, o ponto final é obrigatório para fechar raciocínios.

### 2. Vírgula (,)
É o sinal que marca uma pausa de curta duração. Serve para separar elementos dentro de uma oração ou orações dentro de um período.
*   **Exemplo:** O Comandante Provincial convocou os oficiais, os sargentos e os agentes para a parada matinal.
*   **Nota prática:** Nunca se separa o sujeito do predicado com uma vírgula. É um erro gravíssimo em provas de concurso.

### 3. Ponto e Vírgula (;)
Indica uma pausa intermédia, superior à da vírgula e inferior à do ponto final. É muito utilizado em enumerações de artigos de lei ou regulamentos.
*   **Exemplo:** São deveres do agente: respeitar a hierarquia; zelar pelo fardamento; e cumprir a Constituição.
*   **Nota prática:** Use o ponto e vírgula para separar itens de uma lista que já contenham vírgulas internas.

### 4. Dois Pontos (:)
Este sinal anuncia uma citação, uma enumeração, uma explicação ou uma síntese do que foi dito anteriormente.
*   **Exemplo:** O suspeito declarou o seguinte: "Eu não estava no local do crime à hora do incidente."
*   **Nota prática:** Em relatórios policiais, os dois pontos são essenciais para introduzir depoimentos de testemunhas.

### 5. Ponto de Interrogação (?) e Exclamação (!)
O ponto de interrogação indica uma pergunta direta. O ponto de exclamação expressa sentimentos como surpresa, ordem ou ênfase.
*   **Exemplo (?):** Qual é o número de identificação do veículo apreendido?
*   **Exemplo (!):** Alto, em nome da Lei!
*   **Nota prática:** Em textos administrativos e jurídicos, o uso da exclamação deve ser extremamente parcimonioso, reservando-se apenas para ordens diretas ou citações.

---

## Aprofundamento

Para dominar a pontuação, o candidato deve compreender a sintaxe da frase. A vírgula, por ser o sinal mais complexo, exige atenção redobrada em quatro situações principais:

1.  **Isolamento do Vocativo:** O vocativo (chamamento) deve ser sempre isolado por vírgulas.
    *   *Exemplo:* "Agente Silva, apresente o relatório agora."
2.  **Isolamento do Aposto:** O aposto (explicação de um termo anterior) também requer vírgulas.
    *   *Exemplo:* "A Marginal de Luanda, local de grande afluência turística, será patrulhada hoje."
3.  **Orações Adjetivas Explicativas:** Diferenciam-se das restritivas pelo uso da vírgula.
    *   *Exemplo:* "Os polícias, que são treinados para o perigo, mantiveram a calma." (Todos os polícias são treinados).
4.  **Deslocamento de Adjuntos Adverbiais:** Quando um adjunto adverbial longo é colocado no início da frase, a vírgula é obrigatória.
    *   *Exemplo:* "Durante a operação de busca e apreensão no Cazenga, foram detidos três indivíduos."

Quanto ao **Ponto e Vírgula**, a sua aplicação técnica mais comum em concursos do MININT refere-se à separação de orações coordenadas que já possuem vírgulas no seu interior ou que apresentam um contraste.
*   *Exemplo:* "O primeiro grupo seguirá pela Avenida Deolinda Rodrigues; o segundo, pela Rua Direita do Gamek." (A vírgula após 'segundo' indica a omissão do verbo 'seguirá', e o ponto e vírgula separa as duas frentes de ação).

Os **Dois Pontos** possuem uma função esclarecedora. No Direito e na Administração Pública angolana, são usados antes de transcrições de artigos: "Nos termos do Artigo 1.º: 'Angola é uma República soberana...'".

---

## Exemplos resolvidos

### Exemplo 1: Correção de Pontuação
**Enunciado:** Pontue corretamente a frase: *O Diretor Nacional embora estivesse ocupado atendeu os candidatos ao concurso.*

**Resolução Passo-a-Passo:**
1.  Identificamos a oração principal: "O Diretor Nacional atendeu os candidatos ao concurso."
2.  Notamos uma oração intercalada de valor concessivo: "embora estivesse ocupado".
3.  Regra: Orações intercaladas devem ser isoladas por vírgulas.
4.  **Resultado:** O Diretor Nacional, embora estivesse ocupado, atendeu os candidatos ao concurso.

### Exemplo 2: Identificação de Erro
**Enunciado:** Identifique o erro na frase: *Os agentes de trânsito, apreenderam as cartas de condução caducadas.*

**Resolução Passo-a-Passo:**
1.  Sujeito: "Os agentes de trânsito".
2.  Predicado: "apreenderam as cartas de condução caducadas".
3.  Análise: Existe uma vírgula separando o sujeito do verbo.
4.  **Regra:** É proibido separar sujeito e predicado com vírgula, mesmo que o sujeito seja longo.
5.  **Correção:** Os agentes de trânsito apreenderam as cartas de condução caducadas.

### Exemplo 3: Uso do Ponto e Vírgula
**Enunciado:** Organize os itens abaixo usando a pontuação adequada para um regulamento.
*Itens: fardamento limpo; pontualidade no serviço; respeito aos cidadãos.*

**Resolução Passo-a-Passo:**
1.  Introduzimos com dois pontos.
2.  Separamos os itens por ponto e vírgula, pois são elementos de uma lista administrativa.
3.  Finalizamos com ponto final.
4.  **Resultado:** O regulamento prevê:
    a) Fardamento limpo;
    b) Pontualidade no serviço;
    c) Respeito aos cidadãos.

---

## Erros comuns a evitar

1.  **Vírgula entre Sujeito e Verbo:** É o erro que mais elimina candidatos. Nunca escreva: "O Comandante, disse...". O correto é: "O Comandante disse...".
2.  **Vírgula antes da conjunção "e":** Em regra, não se usa vírgula antes do "e" quando os sujeitos são os mesmos. Use apenas se os sujeitos forem diferentes (Ex: O sol brilhou, e a chuva caiu).
3.  **Confundir Adjunto Adverbial curto com longo:** Em "Ontem, saímos", a vírgula é facultativa. Em "No dia da independência nacional de Angola, saímos", a vírgula é obrigatória pelo comprimento da expressão.
4.  **Esquecer a vírgula no vocativo:** Escrever "Agente venha cá" está errado. O correto é "Agente, venha cá".
5.  **Uso excessivo de reticências (...):** Em textos oficiais da Polícia Nacional, as reticências são quase proibidas, pois indicam hesitação ou interrupção, o que retira a autoridade e a precisão ao documento.

---

## Resumo

1.  **Ponto Final:** Encerra o pensamento completo e o período.
2.  **Vírgula:** Marca pausas breves, isola vocativos, apostos e orações intercaladas; nunca separa sujeito de verbo.
3.  **Ponto e Vírgula:** Separa itens de enumerações ou orações coordenadas extensas.
4.  **Dois Pontos:** Introduz falas, citações de leis ou explicações detalhadas.
5.  **Interrogação e Exclamação:** Devem ser usados com critério, focando na clareza da intenção comunicativa (pergunta ou ordem).

---

## Glossário

1.  **Aposto:** Termo de caráter explicativo que se junta a um substantivo ou pronome.
2.  **Vocativo:** Termo usado para chamar ou interpelar o interlocutor.
3.  **Oração Intercalada:** Oração que se insere no meio de outra para introduzir uma observação ou ressalva.
4.  **Adjunto Adverbial:** Termo que indica uma circunstância (tempo, lugar, modo).
5.  **Período Composto:** Frase que possui duas ou mais orações.
6.  **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
7.  **Auto de Notícia:** Documento oficial onde a autoridade policial relata uma infração presenciada.
8.  **Conjunção:** Palavra que liga orações (ex: e, mas, porque, embora).

Estudem com afinco, meus senhores. A disciplina na escrita reflete a disciplina na farda. Boa sorte na vossa preparação!
$lesson68$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'ortografia',
  'Ortografia e acentuação',
  $lesson69$
Bom dia, caros aspirantes às fileiras da Polícia Nacional de Angola. Sou o vosso professor e hoje daremos início a uma jornada de rigor e disciplina intelectual. O ingresso no Ministério do Interior (MININT) exige não apenas vigor físico e integridade moral, mas também uma competência linguística irrepreensível. Um oficial que não domina a sua língua materna — o Português, na sua norma angolana — compromete a clareza de um auto de notícia, a precisão de um relatório de ocorrência e a dignidade da instituição que representa.

Nesta aula, abordaremos a Ortografia e a Acentuação Gráfica, com foco nas alterações introduzidas pelo Acordo Ortográfico de 1990 (AO90). A prova de admissão não perdoa o erro ortográfico; um acento mal colocado ou um hífen esquecido pode ser a diferença entre a admissão e a exclusão. Portanto, exijo a vossa máxima atenção. Peguem no material de escrita e registem cada detalhe.

---

## Introdução

A língua escrita é a ferramenta fundamental do agente da autoridade. No contexto do MININT, a redação de documentos oficiais exige o cumprimento estrito das normas gramaticais vigentes. A ortografia não é uma escolha estética, mas uma convenção legal que garante a uniformidade e a compreensão mútua entre as instituições do Estado e o cidadão. Um erro de acentuação num nome próprio ou num termo jurídico pode invalidar um processo administrativo ou judicial.

A importância deste tema para o concurso da Polícia Nacional reside no facto de que a prova de Língua Portuguesa é, historicamente, a que apresenta maior taxa de reprovação. O candidato deve demonstrar que domina as regras de acentuação gráfica, o uso correto do hífen em termos compostos e a aplicação de maiúsculas e minúsculas de acordo com a hierarquia e os protocolos oficiais. Esta aula visa dotar-vos da precisão técnica necessária para superar este desafio.

---

## Conceitos fundamentais

Para dominarmos a ortografia, precisamos de alicerces sólidos. Vamos rever cinco conceitos essenciais:

### 1. Acentuação Tónica vs. Acentuação Gráfica
A **acentuação tónica** refere-se à sílaba pronunciada com maior intensidade (sílaba tónica). A **acentuação gráfica** é o uso de sinais (agudo, circunflexo) para marcar essa intensidade ou a abertura da vogal, seguindo regras específicas.
*   **Exemplo:** Na palavra **esquadra**, a sílaba tónica é "qua", mas não leva acento gráfico. Na palavra **polícia**, a sílaba tónica é "lí" e exige acento agudo.
*   **Nota prática:** Nem toda a palavra acentuada na fala leva acento no papel. O concurso testará se conhece as regras de exceção.

### 2. Classificação das Palavras quanto à Acentuação
As palavras dividem-se em oxítonas (última sílaba tónica), paroxítonas (penúltima) e proparoxítonas (antepenúltima).
*   **Exemplo:** **Retratar** (oxítona), **Agente** (paroxítona), **Viatura** (paroxítona), **Trânsito** (proparoxítona).
*   **Nota prática:** Em Angola, a maioria das palavras são paroxítonas. Lembrem-se: todas as proparoxítonas são obrigatoriamente acentuadas.

### 3. O Hífen e os Prefixos
O hífen é um sinal gráfico de união ou separação. Com o AO90, o seu uso com prefixos (como *auto-*, *sub-*, *infra-*) mudou significativamente.
*   **Exemplo:** **Autoestrada** (agora escreve-se junto) vs. **Anti-higiénico** (mantém o hífen devido ao 'h').
*   **Nota prática:** A regra de ouro atual é: "os opostos atraem-se, os iguais repelem-se" (letras diferentes juntam-se; letras iguais separam-se com hífen).

### 4. Maiúsculas e Minúsculas de Cortesia e Hierarquia
Refere-se ao uso de letras capitais para designar instituições, cargos de chefia e entidades públicas.
*   **Exemplo:** **Ministério do Interior**, **Comissário-Geral**, **Comando Provincial de Luanda**.
*   **Nota prática:** Em documentos oficiais da PN, cargos e instituições devem ser grafados com inicial maiúscula em sinal de respeito e identificação institucional.

### 5. Ditongos Abertos em Paroxítonas
Uma das mudanças mais drásticas do AO90 foi a queda do acento nos ditongos abertos "ei" e "oi" em palavras paroxítonas.
*   **Exemplo:** Antes escrevia-se "idéia", agora escreve-se **ideia**. Antes "assembléia", agora **assembleia**.
*   **Nota prática:** Cuidado! Se a palavra for oxítona, o acento mantém-se (ex: **herói**, **papéis**).

---

## Aprofundamento

Vamos agora ao detalhe técnico que separa o candidato comum do futuro oficial.

### Regras de Acentuação Pós-Acordo Ortográfico

1.  **O Fim do Trema:** O trema desapareceu completamente de todas as palavras da língua portuguesa (ex: *consequência*, *aguentar*), exceto em nomes próprios estrangeiros e seus derivados (ex: *Müller*).
2.  **Acentos Diferenciais:** Foram eliminados na sua maioria. Não se usa mais acento para distinguir "pára" (verbo) de "para" (preposição). No entanto, o acento mantém-se em:
    *   **Pôde** (pretérito perfeito) para distinguir de **pode** (presente).
    *   **Pôr** (verbo) para distinguir de **por** (preposição).
    *   **Têm** e **Vêm** (plural) para distinguir de **tem** e **vem** (singular). Isto é vital em relatórios: "Os suspeitos **têm** antecedentes".
3.  **Hiatos "oo" e "ee":** O acento circunflexo desapareceu. Escreve-se **voo**, **enjoo**, **leem**, **veem**.

### O Uso do Hífen com Prefixos (Regras Detalhadas)

Esta é a área onde ocorrem mais erros em concursos. Memorizem estas diretrizes:
*   **Usa-se hífen** quando o prefixo termina na mesma vogal com que começa a segunda palavra: **micro-ondas**, **anti-inflamatório**.
*   **Usa-se hífen** sempre que a segunda palavra começa por **H**: **super-homem**, **extra-humano**, **pré-história**.
*   **Não se usa hífen** quando o prefixo termina em vogal e a segunda palavra começa por consoante diferente de **R** ou **S**: **semicírculo**, **infraestrutura**, **antiprojecto**.
*   **Regra do R e S:** Se o prefixo termina em vogal e a segunda palavra começa por **R** ou **S**, estas consoantes duplicam-se e o hífen desaparece: **antirracismo**, **antissocial**, **contrarregra**.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a frase que cumpre rigorosamente as normas de acentuação e ortografia vigentes.
A) O Agente da PN parou a viatura para que o Comissário pudesse passar.
B) O Agente da PN párou a viatura para que o Comissário pudesse passar.
C) O Agente da PN parou a viatura para que o Comissário pôdesse passar.

*   **Resolução:** A opção correta é a **A**. 
*   **Raciocínio:** "Parou" (verbo parar) não tem acento. "Pudesse" é o imperfeito do conjuntivo e nunca foi acentuado. Na opção B, o acento em "párou" está incorreto (acento diferencial extinto). Na C, "pôdesse" não existe.

**Exercício 2:** Aplique a regra do hífen corretamente: (Extra) + (oficial); (Sub) + (inspetor).
*   **Resolução:** **Extraoficial** e **Subinspetor**.
*   **Raciocínio:** Em "extraoficial", as vogais são diferentes (a/o), logo juntam-se. Em "subinspetor", o prefixo termina em consoante e a segunda palavra começa por vogal diferente, logo juntam-se.

**Exercício 3:** Corrija a frase: "Eles veem a esquadra de longe e temem o auto-de-infração."
*   **Resolução:** "Eles **veem** a esquadra de longe e temem o **auto de infração**."
*   **Raciocínio:** "Veem" (verbo ver) perdeu o acento circunflexo. "Auto de infração" não leva hífen, pois é uma locução substantiva sem elemento de ligação (regra geral do AO90 para locuções, salvo exceções como "cor-de-rosa").

---

## Erros comuns a evitar

1.  **Confundir "Há" com "A":** "O crime ocorreu **há** duas horas" (tempo decorrido/passado). "A esquadra fica **a** dois quilómetros" (distância/futuro). Em relatórios policiais, este erro é fatal.
2.  **Acentuar "Luanda" ou "Benguela":** São paroxítonas terminadas em vogal "a", logo não levam acento. Muitos candidatos, por excesso de zelo, acentuam nomes de províncias.
3.  **Escrever "Auto-estrada":** Com o novo acordo, vogais diferentes unem-se sem hífen. O correto é **autoestrada**.
4.  **Uso indevido do acento em "Item":** A palavra **item** é paroxítona terminada em "em", tal como "nuvem" ou "homem". Não leva acento. O plural é **itens** (também sem acento).
5.  **Esquecer o acento em "Uíge":** Ao contrário de Luanda, **Uíge** é uma paroxítona terminada em "e" que forma hiato, sendo obrigatório o acento para marcar a tonicidade.

---

## Resumo para memorização

1.  **Proparoxítonas:** Todas são acentuadas (ex: **público**, **policiamento**, **trânsito**).
2.  **Ditongos "ei" e "oi":** Perderam o acento em palavras paroxítonas (**ideia**, **heroico**, **apoio**), mas mantêm em oxítonas (**pastéis**, **herói**).
3.  **Hífen (Vogais):** Letras iguais separam-se (**micro-ondas**); letras diferentes juntam-se (**autoajuda**).
4.  **Hífen (R e S):** Se o prefixo termina em vogal, dobra-se o R ou S e escreve-se junto (**antirroubo**, **minissaia**).
5.  **Diferenciais:** Mantêm-se apenas em **pôr** (verbo), **pôde** (passado), **têm** e **vêm** (plural).

---

## Glossário

1.  **Oxítona:** Palavra cuja acentuação tónica recai na última sílaba.
2.  **Paroxítona:** Palavra cuja acentuação tónica recai na penúltima sílaba.
3.  **Hiato:** Sequência de duas vogais que pertencem a sílabas diferentes.
4.  **Ditongo:** Encontro de uma vogal e uma semivogal na mesma sílaba.
5.  **Prefixo:** Elemento colocado antes da raiz de uma palavra para modificar o seu sentido.
6.  **Locução:** Conjunto de duas ou mais palavras que valem por uma só (ex: locução substantiva).
7.  **Sílaba Tónica:** A sílaba pronunciada com mais força numa palavra.
8.  **Grafia:** A forma correta de escrever as palavras de acordo com as normas.

Estudem com afinco, candidatos. A farda exige brio, e o brio começa na ponta da caneta. Disciplina e bons estudos!
$lesson69$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'semantica',
  'Semântica — sinónimos e antónimos',
  $lesson70$
Bom dia, caros candidatos. Sentem-se e prestem a máxima atenção.

Sou o vosso professor e hoje daremos início a um módulo crucial para a vossa admissão na Polícia Nacional de Angola (PNA). A prova de Língua Portuguesa do Ministério do Interior (MININT) não avalia apenas a vossa capacidade de ler; avalia a vossa precisão intelectual. Um oficial de polícia que não domina a semântica é um oficial que redige mal um auto de notícia, que interpreta erradamente uma ordem superior ou que compromete a instrução de um processo criminal por falta de rigor vocabular.

A semântica é o estudo do sentido das palavras e das suas relações de significado. No contexto da segurança pública, a escolha entre duas palavras aparentemente iguais pode ser a diferença entre a legalidade e o abuso de autoridade. Nesta aula, vamos dissecar os sinónimos, antónimos, parónimos, a polissemia e a homonímia, sempre com o foco no rigor que a farda exige.

---

## Introdução

A semântica é a área da linguística que se ocupa do significado das palavras, das frases e dos textos. Para um candidato ao MININT, este tema reveste-se de uma importância estratégica. A actividade policial baseia-se na comunicação escrita e oral: relatórios, depoimentos, mandados e comunicações via rádio. A ambiguidade é a maior inimiga da ordem pública. Se um agente não compreende a nuance entre "deter" e "prender", ou entre "infringir" e "infligir", poderá cometer erros processuais gravíssimos que resultam na nulidade de actos jurídicos.

Além disso, as provas de concurso público em Angola têm privilegiado a capacidade de interpretação textual e a substituição de termos sem perda de sentido. O domínio dos campos semânticos permite ao futuro efectivo da Polícia Nacional compreender a legislação vigente — como a Lei Constitucional ou o Código Penal — com a profundidade necessária para a sua aplicação prática nas ruas de Luanda, de Cabinda ao Cunene.

---

## Conceitos fundamentais

Para dominarmos a semântica, precisamos de estabelecer alicerces sólidos sobre os seguintes conceitos:

### 1. Sinonímia
Refere-se a palavras que possuem significados idênticos ou muito aproximados. É raro existirem sinónimos perfeitos, pois o contexto dita a escolha da palavra.
*   **Exemplo:** *Deter* e *Capturar*. (Ex: "A patrulha conseguiu **deter** o suspeito" / "A patrulha conseguiu **capturar** o suspeito").
*   **Nota prática:** Em relatórios oficiais, prefira termos mais formais. Em vez de "o gatuno fugiu", utilize "o meliante evadiu-se".

### 2. Antonímia
Refere-se a palavras com significados opostos ou contrários.
*   **Exemplo:** *Ordem* e *Anarquia*; *Lícito* e *Ilícito*. (Ex: "O comportamento do cidadão foi **lícito**" vs "O comportamento do cidadão foi **ilícito**").
*   **Nota prática:** O antónimo é fundamental para a classificação de condutas no Direito Penal.

### 3. Paronímia
Palavras que são parecidas na grafia e na pronúncia, mas que têm significados diferentes. Este é o campo onde ocorrem mais erros em concursos.
*   **Exemplo:** *Ratificar* (confirmar) e *Retificar* (corrigir). (Ex: "O Comandante vai **ratificar** a escala de serviço" / "O agente deve **retificar** o erro no relatório").
*   **Nota prática:** Uma letra altera completamente o sentido da ordem dada. Muita atenção à grafia.

### 4. Homonímia
Palavras que têm a mesma pronúncia (homófonas) ou a mesma grafia (homógrafas), mas significados distintos.
*   **Exemplo:** *Auto* (substantivo: documento oficial, como o "Auto de Notícia") e *Auto* (prefixo: a si próprio, como em "Auto-defesa").
*   **Nota prática:** O contexto é o único elemento que permite distinguir o sentido correto de um homónimo.

### 5. Polissemia
É a propriedade de uma palavra ter múltiplos significados dependendo do contexto, mantendo, porém, uma raiz comum de sentido.
*   **Exemplo:** *Linha*. Pode ser a "linha de frente" no patrulhamento, uma "linha telefónica" de emergência (113) ou a "linha de investigação".
*   **Nota prática:** Não confunda com homonímia. Na polissemia, os sentidos estão relacionados entre si.

### 6. Campos Semânticos
É o conjunto de palavras ligadas por um tema ou área de conhecimento.
*   **Exemplo:** Campo semântico de "Segurança Pública": *viatura, algemas, esquadra, patrulha, ordem, cidadania, crime, prevenção*.
*   **Nota prática:** Identificar o campo semântico ajuda na interpretação rápida de textos longos em provas.

---

## Aprofundamento

No estudo da semântica para concursos, devemos ter especial atenção às **nuances contextuais**.

**A) Sinónimos Absolutos vs. Relativos:**
Raramente duas palavras significam exactamente o mesmo em todos os contextos. "Falecer" e "Morrer" são sinónimos, mas num comunicado oficial do Ministério do Interior sobre um agente tombado em serviço, o termo "falecer" ou "perecer" confere a solenidade necessária, enquanto "morrer" é mais genérico.

**B) A Armadilha dos Parónimos no Contexto Policial:**
Existem pares que o candidato deve memorizar obrigatoriamente:
*   **Infligir** (aplicar castigo/pena) vs. **Infringir** (violar uma lei/regra).
*   **Eminente** (elevado, ilustre) vs. **Iminente** (que está prestes a acontecer). Ex: "O perigo de confronto era **iminente**".
*   **Deferir** (conceder, aceitar) vs. **Diferir** (adiar ou ser diferente).

**C) Homónimos e a Escrita:**
Cuidado com as palavras homófonas (som igual, escrita diferente):
*   **Cessão** (acto de ceder bens).
*   **Sessão** (tempo de uma reunião ou cinema).
*   **Secção/Seção** (divisão, departamento). Ex: "Dirija-se à **Secção** de Logística".

**D) Denotação e Conotação:**
A linguagem policial deve ser predominantemente **denotativa** (sentido literal, do dicionário). A linguagem conotativa (figurada) deve ser evitada em documentos oficiais, mas aparece frequentemente em textos literários usados nas provas de interpretação do concurso.

---

## Exemplos resolvidos

### Exemplo 1: Substituição de Termos (Sinonímia)
**Questão:** No trecho "O agente agiu com *presteza* ao imobilizar o suspeito", a palavra sublinhada pode ser substituída, sem alteração de sentido, por:
a) Lentidão
b) Rapidez
c) Hesitação
d) Violência

**Resolução passo-a-passo:**
1. Analisar o contexto: O agente imobilizou o suspeito. "Presteza" indica algo feito de forma pronta, ágil.
2. Analisar as opções: "Lentidão" e "Hesitação" são antónimos. "Violência" é uma característica da acção, mas não é sinónimo de presteza.
3. Conclusão: "Rapidez" é o termo que mantém o sentido original.
**Resposta correcta: b)**

### Exemplo 2: Paronímia e Contexto
**Questão:** Assinale a frase em que o termo entre parênteses foi aplicado correctamente:
a) O meliante agiu com muita (descrição) para não ser visto.
b) O juiz vai (infligir) a sentença ao réu amanhã.
c) O perigo de explosão era (eminente).

**Resolução passo-a-passo:**
1. Na opção (a), o correcto seria "discrição" (qualidade de quem é discreto). "Descrição" é o acto de descrever.
2. Na opção (b), "infligir" significa aplicar uma pena. Está correcto.
3. Na opção (c), "eminente" significa ilustre. O correcto para algo prestes a ocorrer é "iminente".
**Resposta correcta: b)**

### Exemplo 3: Polissemia
**Questão:** A palavra "Posto" apresenta diferentes sentidos nas frases abaixo. Identifique aquela em que se refere a uma patente militar/policial:
a) O combustível no **posto** está caro.
b) Ele foi **posto** em liberdade condicional.
c) O **Posto** de Comissário exige grande responsabilidade.

**Resolução passo-a-passo:**
1. Na frase (a), "posto" é um estabelecimento comercial.
2. Na frase (b), "posto" é o particípio do verbo pôr.
3. Na frase (c), "posto" refere-se ao cargo, à graduação na hierarquia policial.
**Resposta correcta: c)**

---

## Erros comuns a evitar

1.  **Confundir "Ao encontro de" com "De encontro a":** "Ao encontro de" significa estar de acordo; "De encontro a" significa choque, oposição. *Ex: "A viatura foi de encontro ao muro" (bateu).*
2.  **Trocar "Tráfego" por "Tráfico":** "Tráfego" refere-se ao trânsito de veículos. "Tráfico" refere-se ao comércio ilícito (tráfico de estupefacientes). Nunca escreva "tráfico de veículos" a menos que esteja a falar de contrabando de carros.
3.  **Uso indevido de "Mal" e "Mau":** "Mal" é antónimo de "Bem". "Mau" é antónimo de "Bom". *Dica: O agente agiu mal (agiu bem). Ele é um mau elemento (é um bom elemento).*
4.  **Ignorar a regência na sinonímia:** Às vezes, ao trocar um sinónimo, esquece-se que a preposição deve mudar. "Aceder ao sistema" vs. "Entrar no sistema".
5.  **Confundir "Emergir" com "Imergir":** Emergir é vir à tona (aparecer); Imergir é mergulhar (afundar).

---

## Resumo

1.  **Sinónimos** auxiliam na coesão textual e evitam a repetição viciosa em relatórios.
2.  **Antónimos** são essenciais para contrastar factos e comportamentos (legal vs. ilegal).
3.  **Parónimos** exigem atenção redobrada à grafia; uma letra errada pode invalidar o sentido jurídico de um documento.
4.  **Homonímia e Polissemia** dependem estritamente do contexto para serem interpretadas correctamente.
5.  O **Campo Semântico** da Polícia Nacional deve ser dominado para uma leitura técnica eficiente das leis e regulamentos.

---

## Glossário

1.  **Aferir:** Verificar, avaliar, comparar com um padrão (ex: aferir o bafómetro).
2.  **Diligência:** Procedimento ou investigação policial para busca de provas.
3.  **Infracção:** Violação de uma lei, norma ou regulamento.
4.  **Inquirir:** Interrogar, questionar testemunhas ou suspeitos.
5.  **Ostensivo:** Aquilo que é feito à vista de todos, para ser notado (ex: patrulhamento ostensivo).
6.  **Peculato:** Crime de desvio de dinheiro público por funcionário que o administra.
7.  **Flagrante:** Acto que é visto no momento em que ocorre.
8.  **Custódia:** Acto de guardar ou deter alguém sob protecção ou vigilância estatal.

Estudem com afinco. A farda não aceita o erro, e a vossa prova também não. Até à próxima aula.
$lesson70$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'figuras',
  'Figuras de estilo',
  $lesson71$
Bom dia, caros candidatos ao Ministério do Interior. Tomem os vossos lugares e preparem o material de escrita. 

Sou o vosso professor e hoje não estamos aqui apenas para cumprir um programa; estamos aqui para garantir que a vossa interpretação de texto e o vosso domínio da língua portuguesa sejam ferramentas de precisão, tal como a vossa conduta deverá ser na Polícia Nacional de Angola. No rigor da vida policial, a palavra é a primeira arma de um oficial. Compreender as nuances do que é dito e do que é escrito é fundamental para a elaboração de autos de notícia, relatórios de ocorrência e para a interpretação correta das leis e directivas.

## Introdução

As figuras de estilo, também conhecidas como figuras de linguagem ou recursos retóricos, são estratégias literárias e linguísticas que o emissor utiliza para conferir maior expressividade, ênfase ou beleza à mensagem. No contexto de um concurso público para o MININT, o domínio deste tema é crucial por dois motivos principais: primeiro, porque as provas de Língua Portuguesa testam exaustivamente a vossa capacidade de distinguir o sentido literal (denotativo) do sentido figurado (conotativo); segundo, porque a interpretação de textos jurídicos e literários exige que o candidato identifique intenções que nem sempre estão explícitas na superfície do texto.

Um agente da Polícia Nacional que não saiba identificar uma ironia ou um eufemismo num depoimento pode comprometer a veracidade de uma investigação. Da mesma forma, a compreensão de metáforas e antíteses em discursos oficiais permite uma leitura mais profunda das orientações estratégicas do Comando Geral. Nesta aula, abordaremos as figuras de pensamento, de sintaxe e de som, sempre com o foco no rigor exigido pela vossa futura carreira.

---

## Conceitos fundamentais

Para dominarmos esta matéria, precisamos de alicerces sólidos. Vamos focar-nos nos conceitos que mais frequentemente surgem nas provas de acesso à função pública em Angola.

### 1. Metáfora
É a substituição de um termo por outro, baseada numa relação de semelhança implícita, sem o uso de partículas comparativas (como "como", "tal qual").
*   **Exemplo:** "Aquele oficial é um leão na defesa da pátria."
*   **Nota prática:** Diferencia-se da comparação porque a metáfora afirma que algo *é*, enquanto a comparação diz que algo *é como*.

### 2. Metonímia
Ocorre quando se substitui um termo por outro com o qual mantém uma relação de proximidade ou contiguidade (a parte pelo todo, o continente pelo conteúdo, o autor pela obra).
*   **Exemplo:** "A esquadra toda manteve-se em silêncio." (Aqui, "esquadra" substitui os polícias que lá trabalham).
*   **Nota prática:** É muito comum na linguagem administrativa e militar para designar instituições pelos seus edifícios ou símbolos.

### 3. Hipérbole
Consiste no uso de uma expressão exagerada para enfatizar uma ideia ou realidade.
*   **Exemplo:** "Já te disse mil vezes para não estacionares em local proibido!"
*   **Nota prática:** Em relatórios oficiais, a hipérbole deve ser evitada, mas é vital reconhecê-la em depoimentos de civis sob stress emocional.

### 4. Eufemismo
É o recurso utilizado para suavizar uma expressão que possa ser considerada desagradável, chocante ou rude.
*   **Exemplo:** "O suspeito faltou à verdade perante o instrutor do processo." (Em vez de dizer que o suspeito mentiu).
*   **Nota prática:** É uma figura essencial na diplomacia policial e no trato com o público para manter a urbanidade.

### 5. Personificação (ou Prosopopeia)
Atribuição de características, sentimentos ou ações humanas a seres inanimados ou irracionais.
*   **Exemplo:** "As sirenes gritavam desesperadas pelas ruas de Luanda."
*   **Nota prática:** Muito utilizada em textos literários e crónicas jornalísticas sobre a segurança pública.

### 6. Antítese
Aproximação de palavras ou ideias com sentidos opostos para realçar o contraste.
*   **Exemplo:** "A Polícia Nacional trabalha no **dia** e na **noite** para garantir a paz."
*   **Nota prática:** Serve para enfatizar a abrangência de uma ação ou a dualidade de uma situação.

---

## Aprofundamento

Vamos agora elevar o nível da nossa análise. No contexto das provas do MININT, o examinador não quer apenas que saibam o nome da figura; ele quer que compreendam a sua função sintático-semântica.

### Litote: A Afirmação pela Negação
O litote é, de certa forma, o oposto da hipérbole e um parente próximo do eufemismo. Consiste em afirmar algo negando o seu contrário. 
*   **Exemplo:** "O trabalho do agente não foi nada mau." (Significa que foi bom ou muito bom).
*   **Contexto Técnico:** É usado para manter a modéstia ou para suavizar uma crítica, sendo recorrente em pareceres de avaliação de desempenho.

### Ironia: O Sentido Inverso
A ironia consiste em dizer o contrário do que se pensa, geralmente com uma intenção crítica ou humorística. A sua identificação depende totalmente do contexto.
*   **Exemplo:** "Excelente trabalho!", disse o comandante ao ver a viatura suja e mal cuidada.
*   **Atenção:** Na prova, a ironia é frequentemente detetada através de aspas ou de um tom que contradiz a lógica da situação descrita no texto.

### Aliteração e Anáfora: Recursos de Ênfase
*   **Aliteração:** Repetição de sons consonânticos. Exemplo: "O **p**olícia **p**atrulha o **p**erímetro com **p**rudência." Isto cria um ritmo que auxilia na memorização de lemas.
*   **Anáfora:** Repetição de uma palavra ou expressão no início de frases ou versos sucessivos. 
    *   *Exemplo:* "**Pela** ordem, **pela** paz, **pela** segurança do cidadão."
    *   *Uso:* Muito comum em discursos políticos e em preâmbulos de leis para conferir solenidade e autoridade ao texto.

---

## Exemplos resolvidos

**Exercício 1:** Identifique a figura de estilo presente na frase: *"O efetivo da PN é o braço forte da lei em Angola."*
*   **Resolução:** Trata-se de uma **Metáfora**. 
*   **Raciocínio:** Não existe um braço físico de carne e osso que pertença à "lei". Faz-se uma analogia implícita entre a força e a proteção de um braço humano e a capacidade coerciva da Polícia Nacional. Não há partícula comparativa, logo, é metáfora.

**Exercício 2:** Analise a frase: *"Bebemos uma Cuca para celebrar a promoção."*
*   **Resolução:** Trata-se de uma **Metonímia**.
*   **Raciocínio:** Ninguém bebe a marca (Cuca), bebe-se o produto (a cerveja). Substituiu-se o produto pela marca. É uma relação de contiguidade.

**Exercício 3:** Qual a figura de estilo em: *"A morte levou o valoroso agente para o descanso eterno."*
*   **Resolução:** Temos aqui um **Eufemismo** (e também uma personificação).
*   **Raciocínio:** "Descanso eterno" é uma forma suave de dizer que o agente faleceu. O objetivo é tratar um tema doloroso com respeito e menos crueza.

---

## Erros comuns a evitar

1.  **Confundir Metáfora com Comparação:** Se a frase tiver "como", "parece" ou "tal qual", é comparação. Se não tiver, e for uma afirmação direta de identidade figurada, é metáfora.
2.  **Ignorar o Contexto na Ironia:** Muitos candidatos interpretam frases irónicas de forma literal, errando a questão de interpretação de texto. Leiam sempre o parágrafo anterior e o posterior.
3.  **Confundir Antítese com Paradoxo:** A antítese opõe palavras (claro/escuro). O paradoxo opõe ideias que se excluem logicamente numa mesma unidade (ex: "um fogo que arrefece"). O paradoxo é mais profundo e "impossível" na realidade.
4.  **Trocar Metonímia por Metáfora:** Lembrem-se: a metáfora baseia-se na **semelhança**; a metonímia baseia-se na **relação real** (causa/efeito, marca/produto, parte/todo).
5.  **Subestimar a Anáfora:** Em textos de leis, a repetição de termos no início de artigos não é falta de vocabulário, é uma anáfora propositada para garantir a clareza jurídica.

---

## Resumo

1.  **Figuras de Estilo** são recursos que tornam a linguagem mais rica e expressiva, essenciais para a interpretação de textos em concursos.
2.  **Metáfora e Metonímia** são as rainhas das provas; a primeira compara sem o "como", a segunda substitui termos com ligação lógica.
3.  **Eufemismo e Hipérbole** lidam com a intensidade: um suaviza, o outro exagera.
4.  **Ironia** exige atenção redobrada ao contexto e à intenção do autor, sendo comum em crónicas e textos de opinião.
5.  **Antítese e Anáfora** são recursos de estruturação que conferem força e clareza ao discurso institucional e jurídico.

---

## Glossário

*   **Conotativo:** Sentido figurado, subjetivo, que depende do contexto.
*   **Denotativo:** Sentido literal, real, do dicionário.
*   **Semântica:** Estudo do significado das palavras e das mudanças de sentido.
*   **Sintaxe:** Parte da gramática que estuda a disposição das palavras na frase e a relação entre elas.
*   **Retórica:** Arte de bem falar, de usar a linguagem para convencer ou influenciar.
*   **Inanimado:** Ser que não tem vida própria (objetos, conceitos abstratos).
*   **Contiguidade:** Relação de proximidade ou dependência entre dois conceitos (base da metonímia).
*   **Coercivo:** Que tem poder de impor pena ou castigo; relativo à força da lei.

Estudem com afinco, candidatos. A farda que pretendem envergar exige um espírito esclarecido e uma mente capaz de decifrar as entrelinhas da realidade angolana. 

**Força e Honra!**
$lesson71$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'redaccao',
  'Redacção oficial e ofícios',
  $lesson72$
# AULA COMPLETA: REDACÇÃO OFICIAL E OFÍCIOS
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção oficial é um instrumento fundamental na administração pública angolana. No contexto do Ministério do Interior, a capacidade de redigir com clareza, precisão e conformidade com as normas estabelecidas é absolutamente essencial. Quer se trate de um ofício dirigido a entidades congéneres, de um memorando interno ou de uma circular de difusão, a qualidade da comunicação escrita reflecte a eficiência e o profissionalismo da instituição. Neste concurso público, espera-se que demonstrem domínio pleno das estruturas e convenções que regem a correspondência administrativa em Angola.

A prova de redacção oficial não avalia apenas a correção gramatical — embora esta seja fundamental — mas também a capacidade de organizar ideias de forma lógica, de adaptar o registo linguístico ao contexto institucional e de cumprir rigorosamente as normas de formatação e protocolo. Compreender a diferença entre um ofício, um memorando e uma circular, bem como dominar as regras de estruturação e as fórmulas de cortesia apropriadas, pode fazer a diferença entre uma classificação excelente e uma classificação medíocre. Portanto, dediquem-se com seriedade a esta matéria.

---

## Conceitos Fundamentais

### 1. **Ofício**

**Definição:** O ofício é um documento oficial de comunicação entre entidades públicas ou entre uma entidade pública e um particular, utilizado para transmitir informações, solicitações, respostas ou decisões de carácter formal e protocolar.

**Exemplo concreto:** Um ofício do MININT dirigido à Polícia Nacional Angolana solicitando informações sobre um processo administrativo, ou um ofício da Direcção Nacional de Migração comunicando uma decisão sobre um pedido de visto.

**Nota prática:** O ofício é o documento mais formal e protocolar. Deve incluir sempre: local e data, número de referência, destinatário, assunto, corpo do texto, fórmula de encerramento e assinatura. Não deve ser nunca demasiado extenso — idealmente, uma página.

---

### 2. **Memorando**

**Definição:** O memorando é um documento de comunicação interna, utilizado para transmitir informações, instruções ou solicitações entre departamentos ou entre superiores e subordinados dentro da mesma instituição.

**Exemplo concreto:** Um memorando do Director do Departamento de Segurança Interna dirigido aos chefes de secção, informando sobre a implementação de um novo procedimento de registo de ocorrências.

**Nota prática:** O memorando é menos formal que o ofício, mas mantém rigor. Pode ser mais conciso e directo. Não requer fórmulas de cortesia tão elaboradas como o ofício. Deve incluir: destinatário, remetente, data, assunto e corpo do texto.

---

### 3. **Circular**

**Definição:** A circular é um documento de difusão interna ou externa, destinado a comunicar informações, normas ou instruções a múltiplos destinatários simultaneamente.

**Exemplo concreto:** Uma circular do MININT dirigida a todas as delegações provinciais, comunicando a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Nota prática:** A circular deve ser clara e objectiva. Começa com uma fórmula de abertura genérica ("Aos Senhores Directores Provinciais") e deve ser numerada e datada. Não é dirigida a um destinatário específico, mas a um conjunto de entidades.

---

### 4. **Exposição de Motivos**

**Definição:** A exposição de motivos é um documento que apresenta, de forma fundamentada e estruturada, as razões, justificações e argumentos que sustentam uma proposta, um pedido ou uma decisão administrativa.

**Exemplo concreto:** Uma exposição de motivos apresentada pelo MININT ao Conselho de Ministros justificando a necessidade de reforço de efectivos nas fronteiras, com dados estatísticos e análise de risco.

**Nota prática:** A exposição de motivos deve ser rigorosa, bem documentada e persuasiva. Segue uma estrutura lógica: introdução, apresentação do problema, análise, propostas e conclusão. Deve citar legislação relevante e dados concretos.

---

### 5. **Registo de Protocolo**

**Definição:** O registo de protocolo é o sistema de numeração e arquivo que garante a rastreabilidade e o controlo de todos os documentos oficiais que entram e saem de uma instituição.

**Exemplo concreto:** Um ofício recebe o número "MININT/DGS/2024/001" que indica: ministério, departamento, ano e número sequencial.

**Nota prática:** Cada instituição tem o seu próprio sistema de protocolo. No MININT, deve familiarizar-se com o formato específico utilizado. Este número deve constar no cabeçalho do documento.

---

### 6. **Fórmulas de Cortesia e Encerramento**

**Definição:** São expressões padronizadas que abrem e fecham documentos oficiais, respeitando protocolos de hierarquia e formalidade.

**Exemplo concreto:** 
- Abertura: "Excelentíssimo Senhor Ministro do Interior"
- Encerramento: "Respeitosamente submetido" ou "Com elevada consideração"

**Nota prática:** A escolha da fórmula depende do destinatário e do grau de formalidade. Para autoridades de topo, use "Excelentíssimo Senhor". Para colegas, "Prezado Colega" é apropriado. O encerramento deve ser sempre respeitoso e formal.

---

## Aprofundamento

### Estrutura Completa do Ofício

Um ofício bem estruturado segue esta ordem:

1. **Cabeçalho institucional:** Logótipo e nome da instituição
2. **Local e data:** "Luanda, 15 de Março de 2024"
3. **Número de referência:** "Ofício nº MININT/DGS/2024/045"
4. **Destinatário:** Nome completo, cargo e instituição
5. **Assunto:** Breve descrição do tema (máximo uma linha)
6. **Saudação:** "Excelentíssimo Senhor" ou equivalente
7. **Corpo do texto:** Dividido em parágrafos lógicos
8. **Encerramento:** Fórmula apropriada
9. **Assinatura:** Nome, cargo e data

### Regras de Redacção Oficial

**Clareza:** Cada frase deve transmitir uma ideia completa. Evite ambiguidades.

**Concisão:** Não use dez palavras quando cinco são suficientes. Elimine redundâncias.

**Objectividade:** Vá directo ao assunto. Não inclua informações desnecessárias.

**Correção gramatical:** Respeite rigorosamente as regras de ortografia, pontuação e concordância.

**Registo formal:** Utilize vocabulário apropriado ao contexto administrativo. Evite gírias, coloquialismos ou expressões muito informais.

**Estrutura lógica:** Organize as ideias de forma sequencial e coerente. Utilize conectores apropriados ("Portanto", "Consequentemente", "Por outro lado").

### Exemplo de Estrutura de Parágrafo Oficial

```
Primeiro parágrafo: Apresentação do assunto e contexto
Parágrafos intermédios: Desenvolvimento, argumentação, detalhes
Último parágrafo: Conclusão, solicitação ou decisão
```

---

## Exemplos Resolvidos

### Exemplo 1: Ofício de Solicitação de Informação

**Situação:** Você trabalha na Direcção de Segurança Interna do MININT e precisa solicitar informações à Polícia Nacional sobre um processo de investigação.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Direcção de Segurança Interna

Luanda, 20 de Março de 2024

Ofício nº MININT/DSI/2024/078

Excelentíssimo Senhor
Comandante-Geral da Polícia Nacional
Luanda

ASSUNTO: Solicitação de informações sobre processo de investigação nº PNA/2024/456

Excelentíssimo Senhor Comandante-Geral,

No âmbito das competências atribuídas a esta Direcção de Segurança Interna, 
solicitamos a Vossa Excelência o envio de informações detalhadas sobre o processo 
de investigação nº PNA/2024/456, relativo ao caso de falsificação de documentos 
de identificação.

Especificamente, requeremos:
a) Relatório técnico da investigação;
b) Listagem de suspeitos identificados;
c) Cronograma das diligências efectuadas;
d) Previsão de conclusão do processo.

Estas informações são necessárias para a elaboração de um parecer técnico que 
será submetido ao Conselho de Ministros, no contexto da avaliação de políticas 
de segurança interna.

Agradecemos antecipadamente a colaboração de Vossa Excelência e ficamos à 
disposição para qualquer esclarecimento adicional.

Respeitosamente submetido,

[Assinatura]
Dr. João Silva
Director de Segurança Interna
```

**Análise:** Este ofício segue rigorosamente a estrutura. Note-se: (1) o cabeçalho institucional; (2) a data e número de referência; (3) a saudação apropriada para uma autoridade de topo; (4) o assunto claro e conciso; (5) o corpo dividido em parágrafos lógicos; (6) o uso de alíneas para maior clareza; (7) a justificação da solicitação; (8) o encerramento formal; (9) a assinatura com identificação completa.

---

### Exemplo 2: Memorando Interno

**Situação:** O Director do Departamento de Recursos Humanos do MININT necessita informar os chefes de secção sobre a implementação de um novo sistema de registo de assiduidade.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Departamento de Recursos Humanos

MEMORANDO

PARA: Chefes de Secção
DE: Dr. António Neves, Director de Recursos Humanos
DATA: 18 de Março de 2024
ASSUNTO: Implementação do novo sistema de registo de assiduidade

---

Informamos que, a partir de 1 de Abril de 2024, entrará em vigor o novo 
sistema de registo de assiduidade (SIRA 2.0) em todas as unidades do MININT.

Este sistema substitui o anterior e apresenta as seguintes melhorias:
• Registo biométrico automático
• Relatórios em tempo real
• Integração com o sistema de folha de pagamento
• Redução de erros administrativos

Solicitamos que:
1. Informem todos os colaboradores da sua secção sobre esta mudança;
2. Participem na sessão de formação (datas a confirmar);
3. Designem um responsável pelo suporte técnico local.

Qualquer dúvida ou sugestão deve ser comunicada a este departamento até 
25 de Março.

Atenciosamente,

[Assinatura]
Dr. António Neves
Director de Recursos Humanos
```

**Análise:** Este memorando é menos formal que o ofício, mas mantém rigor. Note-se: (1) o cabeçalho simplificado; (2) o uso de "PARA/DE/DATA/ASSUNTO" em vez de endereçamento formal; (3) a linguagem mais directa; (4) o uso de alíneas e numeração para clareza; (5) a ausência de fórmulas de cortesia elaboradas; (6) a conclusão com um prazo claro.

---

### Exemplo 3: Circular

**Situação:** O MININT necessita comunicar a todas as delegações provinciais a entrada em vigor de um novo regulamento sobre procedimentos de identificação civil.

**Resolução:**

```
MINISTÉRIO DO INTERIOR
Gabinete do Ministro

CIRCULAR Nº MININT/GM/2024/012

Luanda, 22 de Março de 2024

Aos Senhores Directores Provinciais do MININT
Aos Senhores Chefes de Delegação Municipal

ASSUNTO: Entrada em vigor do Regulamento de Procedimentos de Identificação Civil

---

Informamos que, a partir de 1 de Abril de 2024, entra em vigor o novo 
Regulamento de Procedimentos de Identificação Civil, aprovado por Despacho 
Ministerial nº 045/2024, de 15 de Março.

Este regulamento estabelece novos procedimentos para:
• Emissão de cartões de identificação
• Processamento de pedidos de nacionalidade
• Verificação de antecedentes
• Prazos de resposta aos cidadãos

As principais alterações são:
1. Redução do prazo de emissão de 30 para 15 dias úteis
2. Implementação de sistema de agendamento online
3. Reforço dos controlos de segurança
4. Criação de balcão de atendimento prioritário para maiores de 65 anos

Solicitamos que:
• Divulguem este regulamento a todos os colaboradores
• Adaptem os procedimentos locais em conformidade
• Reportem qualquer dificuldade de implementação
• Participem na sessão de esclarecimento (videoconferência, 28 de Março, 14h00)

Cópias do regulamento completo encontram-se em anexo e no portal interno.

Atenciosamente,

[Assinatura]
Eng. José Fernandes
Ministro do Interior
```

**Análise:** Esta circular segue o padrão apropriado: (1) numeração clara; (2) endereçamento genérico a múltiplos destinatários; (3) assunto bem definido; (4) informação estruturada em alíneas; (5) instruções claras; (6) referência a documentação complementar; (7) assinatura de autoridade de topo.

---

## Erros Comuns a Evitar

### 1. **Falta de Clareza no Assunto**
❌ **Errado:** "Assunto: Vários assuntos"
✅ **Correcto:** "Assunto: Solicitação de informações sobre processo de investigação nº PNA/2024/456"

**Explicação:** O assunto deve ser específico e permitir ao leitor compreender imediatamente o conteúdo do documento.

---

### 2. **Uso Incorrecta de Fórmulas de Cortesia**
❌ **Errado:** "Prezado Senhor Ministro" (para um ofício oficial)
✅ **Correcto:** "Excelentíssimo Senhor Ministro"

**Explicação:** A fórmula deve corresponder ao grau de formalidade e à hierarquia do destinatário. Para autoridades de topo, use sempre "Excelentíssimo Senhor".

---

### 3. **Parágrafos Demasiado Longos e Confusos**
❌ **Errado:** Um parágrafo com 10 linhas contendo múltiplas ideias desconexas.
✅ **Correcto:** Parágrafos curtos (3-5 linhas), cada um com uma ideia central clara
$lesson72$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'relatorio',
  'Relatório e acta',
  $lesson73$
# AULA COMPLETA: RELATÓRIO E ACTA
## Módulo de Língua Portuguesa para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A redacção de relatórios e actas constitui uma das competências fundamentais exigidas nos concursos públicos do Ministério do Interior de Angola. Estes documentos não são meros registos burocráticos; são instrumentos legais que documentam decisões, procedimentos e factos ocorridos em contextos administrativos e institucionais. No âmbito do MININT, seja em departamentos de segurança, administração ou gestão de recursos humanos, a capacidade de elaborar estes textos com rigor, clareza e conformidade com as normas estabelecidas é absolutamente essencial.

A importância desta matéria para o vosso concurso reside no facto de que a prova de Língua Portuguesa avalia não apenas a vossa competência gramatical, mas também a vossa capacidade de comunicação profissional e administrativa. Os avaliadores procuram candidatos que dominem a estrutura formal, a linguagem técnica apropriada e as convenções que regem estes documentos. Além disso, durante o exercício das funções no MININT, serão frequentemente chamados a redigir relatórios de actividades, actas de reuniões e minutas de decisões. Por isso, dominar esta competência é investir directamente na vossa carreira profissional.

---

## Conceitos Fundamentais

### 1. **Relatório: Definição e Propósito**

**Definição:** Um relatório é um documento formal que apresenta informações, análises e conclusões sobre um assunto específico, dirigido a uma autoridade ou entidade superior. Tem como objectivo informar, justificar acções, apresentar resultados ou propor soluções.

**Exemplo concreto:** Um inspector do MININT elabora um relatório sobre a fiscalização realizada numa esquadra de polícia em Luanda, descrevendo as irregularidades encontradas, as medidas correctivas necessárias e recomendações para melhorar o funcionamento.

**Nota prática:** O relatório deve ser objectivo, factual e fundamentado em dados concretos. Nunca deve conter opiniões pessoais não justificadas ou linguagem emotiva.

---

### 2. **Acta: Definição e Função**

**Definição:** Uma acta é um documento que regista, de forma resumida mas completa, os assuntos tratados, as decisões tomadas e os acordos estabelecidos durante uma reunião, assembleia ou sessão oficial.

**Exemplo concreto:** Após uma reunião de coordenação entre departamentos do MININT sobre implementação de novos procedimentos de segurança, elabora-se uma acta que regista: data, local, participantes, ordem de trabalhos, deliberações e responsáveis pelas tarefas definidas.

**Nota prática:** A acta é um documento com valor legal. Deve ser precisa, imparcial e registar apenas factos verificados, não interpretações subjectivas.

---

### 3. **Minuta: Definição e Características**

**Definição:** Uma minuta é um documento preliminar, um rascunho ou esboço de um texto oficial (decreto, portaria, resolução) que será posteriormente revisto, aprovado e formalizado. Serve como base para discussão e aperfeiçoamento.

**Exemplo concreto:** O MININT prepara uma minuta de portaria sobre novas normas de funcionamento das esquadras. Esta minuta é distribuída aos departamentos para análise, sugestões e críticas antes da versão final ser assinada pelo Ministro.

**Nota prática:** A minuta não é um documento definitivo. Deve indicar claramente que se trata de um documento em elaboração e estar aberta a sugestões e alterações.

---

### 4. **Linguagem Formal e Registro Administrativo**

**Definição:** É o conjunto de características linguísticas que caracterizam a comunicação oficial e administrativa: vocabulário técnico, estrutura sintáctica complexa, ausência de coloquialismos e respeito pelas normas gramaticais.

**Exemplo concreto:** Em vez de escrever "A polícia foi lá e viu que as coisas não estavam bem", escreve-se: "A inspecção realizada constatou irregularidades no cumprimento dos procedimentos estabelecidos."

**Nota prática:** O registo formal exige concordância rigorosa, uso correcto de tempos verbais (preferencialmente pretérito perfeito para factos passados) e estruturas sintácticas bem definidas.

---

### 5. **Estrutura Formal de um Documento Oficial**

**Definição:** É a organização padronizada dos elementos que compõem um documento administrativo: cabeçalho, identificação, corpo, assinatura e anexos.

**Exemplo concreto:** Um relatório do MININT deve incluir: timbre institucional, número de referência, data, destinatário, assunto, corpo do relatório com introdução/desenvolvimento/conclusão, assinatura e carimbo.

**Nota prática:** A estrutura formal garante que o documento seja reconhecido como oficial e facilita o seu arquivo e consulta posterior.

---

### 6. **Rigor Factual e Verificabilidade**

**Definição:** É a obrigação de que todos os dados, números, datas e factos mencionados sejam exactos, verificáveis e fundamentados em fontes confiáveis.

**Exemplo concreto:** Ao relatar que "foram realizadas 47 inspecções em Março de 2024", este número deve corresponder exactamente aos registos disponíveis. Qualquer discrepância compromete a credibilidade do documento.

**Nota prática:** Sempre que possível, cite fontes, anexe documentos comprovativos e mantenha registos que permitam verificação posterior.

---

## Aprofundamento

### Estrutura Detalhada do Relatório

Um relatório bem estruturado segue este modelo:

**1. Cabeçalho Institucional**
- Timbre do MININT ou departamento responsável
- Número de referência ou protocolo
- Data de elaboração

**2. Identificação**
- Destinatário (a quem se dirige)
- Remetente (quem elabora)
- Assunto (título claro e conciso)

**3. Introdução**
- Contextualização do tema
- Justificação do relatório
- Objectivos específicos
- Período abrangido (se aplicável)

**4. Desenvolvimento**
- Apresentação factual dos dados
- Análise estruturada por tópicos
- Fundamentação com evidências
- Descrição de metodologia (se relevante)

**5. Conclusões**
- Síntese dos achados principais
- Resposta aos objectivos propostos
- Avaliação geral da situação

**6. Recomendações**
- Sugestões de acções correctivas
- Propostas de melhorias
- Responsáveis pelas implementações

**7. Assinatura e Carimbo**
- Nome completo do autor
- Cargo/função
- Data
- Carimbo institucional

### Exemplo de Linguagem Apropriada

**Incorreto (coloquial):**
"Fomos lá e vimos que tudo estava bagunçado. Os rapazes não estavam a fazer bem o trabalho deles."

**Correcto (formal):**
"A inspecção realizada constatou deficiências significativas na organização dos procedimentos administrativos. Verificou-se que o pessoal não cumpria adequadamente os protocolos estabelecidos."

### Regras Gramaticais Essenciais

- **Concordância:** "O relatório e a acta foram elaborados" (não "foi elaborados")
- **Tempos verbais:** Preferencialmente pretérito perfeito para factos passados: "Realizou-se a reunião em 15 de Março"
- **Voz passiva:** Frequente em textos administrativos: "Foi decidido que..." em vez de "Decidimos que..."
- **Pontuação:** Uso correcto de vírgulas em enumerações e períodos complexos

---

## Exemplos Resolvidos

### Exemplo 1: Relatório de Inspecção

**Situação:** Um inspector do MININT realizou uma inspecção numa esquadra de polícia e deve elaborar um relatório.

**Resolução:**

---

**MINISTÉRIO DO INTERIOR**
**DIRECÇÃO NACIONAL DE POLÍCIA**

**RELATÓRIO DE INSPECÇÃO**

**Referência:** DNPOL/2024/0347
**Data:** 18 de Março de 2024
**Destinatário:** Director Nacional de Polícia
**Remetente:** Inspector João da Silva
**Assunto:** Inspecção à Esquadra de Polícia de Viana – Conformidade com Normas de Funcionamento

---

**INTRODUÇÃO**

No cumprimento do plano de inspecções do corrente ano, foi realizada uma visita de avaliação à Esquadra de Polícia de Viana, no período de 11 a 15 de Março de 2024. O objectivo desta inspecção foi verificar o cumprimento das normas estabelecidas no Manual de Procedimentos Administrativos e avaliar as condições de funcionamento da unidade.

**DESENVOLVIMENTO**

1. **Recursos Humanos**
   - Efectivo autorizado: 24 elementos
   - Efectivo presente: 22 elementos
   - Constatou-se que dois elementos se encontravam em licença médica, devidamente documentada
   - O pessoal apresenta-se adequadamente uniformizado e preparado

2. **Infraestruturas**
   - As instalações encontram-se em bom estado de conservação
   - Identificou-se necessidade de reparação da cobertura do pátio traseiro (infiltrações)
   - Os equipamentos informáticos funcionam adequadamente

3. **Documentação e Registos**
   - Os livros de ocorrências estão correctamente preenchidos
   - Verificou-se conformidade com os prazos de arquivo de documentos
   - Detectou-se pequena deficiência no preenchimento de um formulário de denúncia (falta de data)

**CONCLUSÕES**

A Esquadra de Polícia de Viana funciona de forma satisfatória, demonstrando conformidade geral com as normas estabelecidas. O pessoal mostra-se motivado e organizado. As deficiências identificadas são de carácter menor e facilmente corrigíveis.

**RECOMENDAÇÕES**

1. Proceder à reparação da cobertura do pátio traseiro no prazo de 30 dias
2. Reforçar a formação do pessoal sobre preenchimento correcto de formulários
3. Realizar nova inspecção em Setembro de 2024

---

**Assinado:**
Inspector João da Silva
Cédula: 00123456789
Data: 18 de Março de 2024
[Carimbo]

---

### Exemplo 2: Acta de Reunião

**Situação:** Reunião de coordenação entre departamentos do MININT sobre implementação de novo sistema de segurança.

**Resolução:**

---

**ACTA Nº 012/2024**

**MINISTÉRIO DO INTERIOR**
**REUNIÃO DE COORDENAÇÃO INTERDEPARTAMENTAL**

**Data:** 20 de Março de 2024
**Hora de início:** 09h30
**Hora de encerramento:** 11h45
**Local:** Sala de Conferências, Piso 3, Edifício Central

**PARTICIPANTES:**
- Dr. Manuel Ferreira (Director de Segurança) – Presidente
- Eng. Carla Mendes (Departamento de Tecnologia)
- Dr. Paulo Neves (Departamento Jurídico)
- Dra. Amélia Costa (Recursos Humanos)
- Sr. Joaquim Lopes (Segurança Operacional)

**ORDEM DE TRABALHOS:**
1. Apresentação do novo sistema de segurança integrada
2. Cronograma de implementação
3. Responsabilidades departamentais
4. Orçamento e recursos
5. Assuntos diversos

**DELIBERAÇÕES:**

1. **Apresentação do Sistema:** Eng. Carla Mendes apresentou o novo sistema de segurança integrada, com demonstração prática. O sistema foi considerado adequado aos objectivos institucionais.

2. **Cronograma:** Aprovou-se o seguinte cronograma:
   - Fase 1 (Piloto): Abril a Maio de 2024
   - Fase 2 (Expansão): Junho a Agosto de 2024
   - Fase 3 (Consolidação): Setembro a Outubro de 2024

3. **Responsabilidades:**
   - Eng. Carla Mendes: Coordenação técnica geral
   - Dr. Paulo Neves: Conformidade legal e regulatória
   - Dra. Amélia Costa: Formação do pessoal
   - Sr. Joaquim Lopes: Testes operacionais

4. **Orçamento:** Aprovado orçamento de 2.500.000 Kz para a implementação completa.

5. **Próxima Reunião:** Agendada para 10 de Abril de 2024, às 10h00, para avaliação da Fase 1.

**ASSINATURAS:**

Dr. Manuel Ferreira _________________ Data: 20/03/2024
(Presidente)

Eng. Carla Mendes _________________ Data: 20/03/2024

Dr. Paulo Neves _________________ Data: 20/03/2024

Dra. Amélia Costa _________________ Data: 20/03/2024

Sr. Joaquim Lopes _________________ Data: 20/03/2024

---

### Exemplo 3: Minuta de Portaria

**Situação:** Elaboração de minuta de portaria sobre normas de funcionamento de esquadras.

**Resolução:**

---

**MINUTA DE PORTARIA**
**[DOCUMENTO EM ELABORAÇÃO – SUJEITO A REVISÃO]**

**Referência:** MININT/2024/MIN-PORT-0089
**Data de Elaboração:** 18 de Março de 2024
**Departamento Responsável:** Direcção de Administração e Gestão

---

**PORTARIA Nº ___/2024**

**Assunto:** Normas de Funcionamento das Esquadras de Polícia

O Ministro do Interior, considerando:

a) A necessidade de uniformizar procedimentos nas esquadras de polícia em todo o território nacional;
b) A importância de garantir qualidade no atendimento ao público;
c) O cumprimento das obrigações estabelecidas na Lei de Segurança Pública;

**DETERMINA:**

**Artigo 1º – Âmbito de Aplicação**
As presentes normas aplicam-se a todas as esquadras de polícia sob jurisdição do Ministério do Interior.

**Artigo 2º – Horário de Funcionamento**
1. As esquadras funcionarão em regime de 24 horas, com turnos de 8 horas.
2. O atendimento ao público realizar-se-á entre as 07h00 e as 19h00, de segunda a sexta-feira.

**Artigo 3º – Pessoal**
1. Cada esquadra terá um efectivo mínimo de 20 elementos.
2. O pessoal deverá estar adequadamente uniformizado e identificado.

**Artigo 4º – Documentação**
1. Todos os registos deverão ser efectuados em livros próprios ou sistema informático autorizado.
2. Os prazos de arquivo serão os estabelecidos no Manual de Procedimentos.

**Artigo 5º – Disposições Finais**
1. A presente portaria entra em vigor 30 dias após a sua publicação.
2. Revoga todas as disposições anteriores que se lhe oponham.

---
$lesson73$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

INSERT INTO public.lessons
  (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md)
VALUES (
  'concurso',
  'minint',
  'sef',
  'portugues',
  'vocabulario',
  'Vocabulário técnico policial',
  $lesson74$
# AULA: VOCABULÁRIO TÉCNICO POLICIAL
## Preparação para Concurso Público do MININT

---

## Introdução

Caros alunos e alunas,

A preparação para um concurso público no Ministério do Interior exige não apenas conhecimento das leis e regulamentos, mas também o domínio de um vocabulário técnico específico que caracteriza a actividade policial e de segurança interna em Angola. O vocabulário técnico policial não é um simples conjunto de palavras; é, antes, um sistema de comunicação preciso e rigoroso que garante a clareza nas operações, a uniformidade nos relatórios e a compreensão exacta entre os profissionais de segurança. Quando um agente da Polícia Nacional Angolana (PNA) redige um auto de detenção, quando coordena uma operação de patrulhamento ou quando comunica com a hierarquia, utiliza termos que têm significados muito específicos e legalmente vinculativos.

Nesta aula, vamos explorar os termos fundamentais da actividade policial angolana, compreendendo não apenas as suas definições, mas também o seu contexto de utilização e as implicações práticas. Este conhecimento será decisivo na prova escrita do concurso, particularmente nas questões de compreensão de textos oficiais, redacção de relatórios e interpretação de legislação. Além disso, demonstrará ao júri que você compreende a cultura institucional e a linguagem profissional do MININT.

---

## Conceitos Fundamentais

### 1. **Detenção vs. Prisão**

**Definição clara:**
A detenção é o acto de impedir a liberdade de circulação de uma pessoa por um período limitado (até 24 horas, conforme o Código de Processo Penal angolano), enquanto a prisão é uma medida de coação mais grave, decretada por autoridade judicial, que pode ter duração prolongada.

**Exemplo concreto:**
Um polícia detém um indivíduo suspeito de roubo durante uma operação de patrulhamento na Baixa de Luanda. Essa detenção não pode exceder 24 horas. Se, após investigação, existirem indícios suficientes, o Ministério Público pode requerer a prisão preventiva ao tribunal, que pode durar até 90 dias.

**Nota prática:**
Na redacção de relatórios, é fundamental distinguir estes termos. Usar "prisão" quando se refere a "detenção" constitui um erro grave que pode invalidar procedimentos legais.

---

### 2. **Flagrante Delito**

**Definição clara:**
Flagrante delito é a situação em que uma pessoa é apanhada no acto de cometer um crime ou imediatamente após, com evidência clara da sua autoria. É uma circunstância que permite a detenção sem mandado judicial.

**Exemplo concreto:**
Um agente da PNA observa um indivíduo a assaltar uma loja no Sambizanga. O polícia intervém e detém o suspeito no local, com a mercadoria roubada ainda na sua posse. Esta é uma situação de flagrante delito, que justifica a detenção imediata.

**Nota prática:**
O flagrante delito é uma das poucas situações em que a polícia pode actuar sem mandado. Contudo, deve ser documentado com precisão no auto de detenção, incluindo hora, local, testemunhas e descrição exacta do que foi observado.

---

### 3. **Revista e Revista Pessoal**

**Definição clara:**
A revista é o acto de inspecção de bens, veículos ou locais para procura de objectos ilícitos ou provas de crime. A revista pessoal é a inspecção do corpo de uma pessoa, realizada com respeito pela dignidade humana e, preferencialmente, por agente do mesmo sexo.

**Exemplo concreto:**
Durante uma operação de segurança no Kilamba, agentes da PNA efectuam revista de veículos em pontos de controlo. Num desses veículos, encontram armas ilegais. Posteriormente, realizam revista pessoal ao condutor, sendo esta efectuada por um agente do mesmo sexo, respeitando os direitos fundamentais.

**Nota prática:**
A revista deve ser sempre documentada. Qualquer objecto apreendido deve ser registado em auto próprio, com descrição detalhada, assinatura de testemunhas e identificação clara do agente responsável.

---

### 4. **Apreensão e Depósito**

**Definição clara:**
Apreensão é o acto de tomar posse de bens relacionados com a prática de crime ou que constituem instrumentos ou produtos de crime. O depósito é o local seguro onde esses bens são armazenados, sob responsabilidade da polícia.

**Exemplo concreto:**
Numa operação contra tráfico de drogas no Cazenga, agentes apreendem 5 quilogramas de cocaína, uma arma de fogo e 50 mil kwanzas em dinheiro. Estes bens são registados e colocados no depósito da esquadra, sob vigilância, até decisão judicial.

**Nota prática:**
O depósito deve ter registo rigoroso de entrada e saída de bens. Qualquer irregularidade neste processo pode comprometer a validade das provas em tribunal.

---

### 5. **Mandado de Busca e Apreensão**

**Definição clara:**
É uma ordem judicial que autoriza a polícia a entrar num local específico, procurar objectos relacionados com crime e apreendê-los. Deve ser emitido por autoridade judicial competente e conter descrição clara do local e do que se procura.

**Exemplo concreto:**
O Ministério Público obtém um mandado de busca para uma residência em Viana, onde se suspeita de armazenamento de armas ilegais. Os agentes da PNA executam a busca, encontram as armas, procedem à apreensão e elaboram auto circunstanciado.

**Nota prática:**
A execução de um mandado de busca deve ser rigorosa: deve ser apresentado ao proprietário, deve haver testemunhas, e tudo deve ser documentado fotograficamente quando possível. Qualquer desvio do mandado pode invalidar as provas.

---

### 6. **Denúncia e Participação**

**Definição clara:**
Denúncia é a comunicação de um crime feita por qualquer pessoa ao órgão de polícia criminal. Participação é a comunicação de um crime feita pela vítima ou por quem tenha conhecimento directo dos factos.

**Exemplo concreto:**
Um cidadão contacta a esquadra da PNA para denunciar actividades suspeitas num bairro. Uma vítima de roubo apresenta participação formal na polícia, descrevendo o crime e identificando o suspeito.

**Nota prática:**
Ambas devem ser registadas em livro próprio, com data, hora, identificação de quem reporta e descrição clara dos factos. Este registo é fundamental para estatísticas criminais e para rastreabilidade processual.

---

## Aprofundamento

### Contexto Legal e Regulatório

O vocabulário técnico policial em Angola está enquadrado pela **Constituição da República de Angola**, pelo **Código de Processo Penal**, pela **Lei de Organização da Polícia Nacional** e por diversos regulamentos internos do MININT. É essencial que o candidato compreenda que cada termo não é arbitrário, mas resulta de uma construção legal rigorosa.

Quando falamos de "detenção", estamos a referir-nos a um direito fundamental protegido constitucionalmente. O artigo 30 da Constituição garante a liberdade pessoal, e qualquer restrição deve ser proporcional e legal. Por isso, a detenção tem um limite temporal (24 horas) e deve ser comunicada ao Ministério Público. Ultrapassar este prazo sem formalização legal constitui detenção ilegal, com consequências graves para o agente responsável.

### Redacção de Documentos Oficiais

Na prática profissional, o polícia deve redigir autos, relatórios e participações utilizando este vocabulário com precisão. Um auto de detenção deve conter:

- **Identificação clara** do detido (nome completo, data de nascimento, filiação, naturalidade)
- **Circunstâncias da detenção** (hora, local, motivo, se em flagrante ou por mandado)
- **Descrição dos factos** que justificam a detenção
- **Bens apreendidos**, se aplicável, com descrição pormenorizada
- **Assinatura do agente** e de testemunhas
- **Referência ao direito de informação** ao Ministério Público

### Distinções Críticas

É fundamental compreender as seguintes distinções:

| Termo | Duração | Autoridade | Documentação |
|-------|---------|-----------|--------------|
| **Detenção** | Até 24 horas | Polícia | Auto de detenção |
| **Prisão Preventiva** | Até 90 dias | Tribunal | Mandado de prisão |
| **Prisão Preventiva Renovada** | Até 180 dias | Tribunal | Decisão judicial |
| **Prisão Definitiva** | Conforme sentença | Tribunal | Sentença condenatória |

---

## Exemplos Resolvidos

### Exemplo 1: Análise de Situação de Flagrante Delito

**Situação:**
Um agente da PNA, durante patrulhamento nocturno no Rangel, observa um indivíduo a arrombar a porta de uma loja. O agente intervém, detém o suspeito e encontra ferramentas de arrombamento e mercadoria roubada na sua posse.

**Análise passo-a-passo:**

1. **Identificação da situação:** Flagrante delito de roubo/furto qualificado
2. **Justificação da detenção:** O agente presenciou o crime em acto, o que autoriza detenção imediata sem mandado
3. **Documentação necessária:**
   - Auto de detenção (incluindo hora exacta: 23h45, local preciso: Rua X, Rangel)
   - Descrição do suspeito (características físicas, vestuário)
   - Inventário de bens apreendidos (ferramentas, mercadoria, com fotografias se possível)
   - Identificação de testemunhas presentes
4. **Próximos passos:** Comunicação ao Ministério Público dentro de 24 horas, apresentação ao tribunal para decisão sobre prisão preventiva

**Conclusão:** Este é um caso claro de flagrante delito, devidamente documentado, que permite prosseguimento processual válido.

---

### Exemplo 2: Redacção de Relatório de Revista

**Situação:**
Durante operação de segurança no Cazenga, agentes revistam um veículo e encontram uma arma de fogo não registada.

**Redacção correcta:**

> *"Aos 15 de Março de 2024, pelas 14h30, na Avenida Agostinho Neto, Cazenga, durante operação de segurança autorizada, procedemos à revista do veículo de matrícula ABC-1234. Durante a revista, encontrámos, no compartimento de ferramentas, uma arma de fogo tipo pistola, marca Taurus, calibre 9mm, série 123456, sem registo legal. A arma foi apreendida e colocada em depósito. O proprietário do veículo, Sr. João Silva, foi informado dos seus direitos e da apreensão. Testemunhas: Agente Pedro Neves (matrícula 5678) e Agente Maria Gonçalves (matrícula 5679)."*

**Análise:**
- Data e hora precisas ✓
- Local específico ✓
- Descrição detalhada do bem apreendido ✓
- Identificação clara de testemunhas ✓
- Referência a direitos do cidadão ✓

---

### Exemplo 3: Interpretação de Mandado de Busca

**Situação:**
Um candidato recebe um mandado de busca que autoriza procura de "documentos relacionados com fraude" numa residência. O agente encontra documentos, um computador e dinheiro em espécie.

**Análise correcta:**

1. **Documentos:** Podem ser apreendidos (estão explicitamente no mandado)
2. **Computador:** Pode ser apreendido se contiver documentos relacionados com fraude (interpretação razoável)
3. **Dinheiro em espécie:** Só pode ser apreendido se houver indicação clara de que é produto de fraude (não está explícito no mandado)

**Conclusão:** O agente deve apreender documentos e computador, mas registar o dinheiro e solicitar orientação ao Ministério Público sobre apreensão.

**Lição:** Os mandados têm limites específicos. Ultrapassá-los invalida as provas.

---

## Erros Comuns a Evitar

### 1. **Confundir Detenção com Prisão**
**Erro:** "O suspeito foi preso durante 24 horas."
**Correcto:** "O suspeito foi detido durante 24 horas."
**Porquê:** Prisão é medida judicial; detenção é acto policial.

### 2. **Omitir Testemunhas em Autos**
**Erro:** Auto de detenção sem identificação de testemunhas.
**Correcto:** Auto com nomes completos, matrículas e assinaturas de testemunhas.
**Porquê:** Testemunhas garantem validade processual e credibilidade.

### 3. **Usar Linguagem Vaga em Apreensões**
**Erro:** "Foram apreendidos alguns objectos."
**Correcto:** "Foram apreendidos: 1 telemóvel marca Samsung, cor preta; 3 carteiras de couro; 250 mil kwanzas em notas de 5 mil."
**Porquê:** Precisão evita contestações legais e confusões administrativas.

### 4. **Não Distinguir Flagrante de Suspeita**
**Erro:** Deter alguém por "parecer suspeito" sem acto criminoso observado.
**Correcto:** Deter apenas em flagrante delito ou com mandado judicial.
**Porquê:** Detenção sem fundamento é ilegal e viola direitos fundamentais.

### 5. **Exceder Limites de Mandados**
**Erro:** Apreender bens não mencionados num mandado de busca.
**Correcto:** Apreender apenas o que está autorizado; solicitar novo mandado se necessário.
**Porquê:** Excesso invalida provas e compromete processos judiciais.

### 6. **Misturar Conceitos de Revista Pessoal**
**Erro:** Realizar revista pessoal sem respeitar dignidade ou sem agente do mesmo sexo.
**Correcto:** Revista pessoal sempre com agente do mesmo sexo e com máximo respeito.
**Porquê:** Violação de direitos fundamentais e potencial nulidade processual.

---

## Resumo

### 5 Pontos-Chave para Memorizar

1. **Detenção ≠ Prisão:** Detenção é acto policial (até 24h); prisão é medida judicial (duração variável). Esta distinção é fundamental em toda a documentação.

2. **Flagrante Delito é Autorização:** Presenciar crime em acto autoriza detenção imediata sem mandado. Deve ser documentado com precisão (hora, local
$lesson74$
)
ON CONFLICT (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
DO UPDATE SET content_md = EXCLUDED.content_md, title = EXCLUDED.title;

COMMIT;

-- Verificação: contar aulas inseridas
SELECT sector_slug, module_slug, COUNT(*) as total
FROM public.lessons
WHERE track_kind = 'concurso' AND track_slug = 'minint' AND module_slug = 'portugues'
GROUP BY sector_slug, module_slug
ORDER BY sector_slug;