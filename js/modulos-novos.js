// MÓDULOS ATUALIZADOS - Copiar e colar no database.js substituindo a array modulos

const NOVOS_MODULOS = [
    // 1. PORTUGUÊS - Comunicação (linguagem e sentido)
    {
        id: 1,
        materia: 'portugues',
        bimestre: 1,
        schoolYear: '9',
        titulo: 'LINGUAGEM E SENTIDO',
        descricao: 'Comunicação: linguagem e sentido',
        resumo: `# Linguagem e Sentido

## O que é Linguagem?

Linguagem é o sistema de signos usado para comunicar ideias, pensamentos e emoções.

## Tipos de Linguagem

### 1. Linguagem Verbal
Usa palavras (orais ou escritas).
- **Oral**: conversas, palestras
- **Escrita**: textos, livros

### 2. Linguagem Não-Verbal
Usa outros recursos além das palavras.
- **Gestos, imagens, sons, expressões faciais**

### 3. Linguagem Mista
Combina verbal e não-verbal (HQ, memes, posts).

## Sentido e Significado

### Denotação
Sentido literal, do dicionário.
- "Pedro quebrou o braço" (quebrou realmente)

### Conotação
Sentido figurado, depende do contexto.
- "Ele tem um coração de pedra" (insensível)

## Funções da Linguagem

1. **Referencial**: informar
2. **Emotiva**: expressar emoções
3. **Conativa**: persuadir
4. **Fática**: manter contato
5. **Metalinguística**: explicar a linguagem
6. **Poética**: beleza da mensagem

## Elementos da Comunicação

Emissor → Mensagem → Receptor
(usando Canal, Código, dentro de um Contexto)

## Polissemia

Uma palavra com múltiplos significados.
- Manga: fruta / parte da roupa
- Banco: assento / instituição

## Ambiguidade

Frase com mais de uma interpretação possível.`,
        simulado: {
            questoes: [
                {peso: 1, enunciado: 'O que é linguagem verbal?', alternativas: ['Uso de gestos', 'Uso de palavras', 'Uso de imagens', 'Uso de sons'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Qual é o sentido literal?', alternativas: ['Conotação', 'Denotação', 'Polissemia', 'Ambiguidade'], respostaCorreta: 1},
                {peso: 1, enunciado: '"Compre agora!" é qual função?', alternativas: ['Emotiva', 'Referencial', 'Conativa', 'Fática'], respostaCorreta: 2},
                {peso: 1, enunciado: 'Quem recebe a mensagem?', alternativas: ['Emissor', 'Receptor', 'Canal', 'Código'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Placas são que linguagem?', alternativas: ['Verbal', 'Não-verbal', 'Mista', 'Oral'], respostaCorreta: 1},
                {peso: 2, enunciado: 'Qual tem conotação?', alternativas: ['O carro é azul', 'Coração de pedra', 'Mesa de madeira', 'Livro na estante'], respostaCorreta: 1},
                {peso: 2, enunciado: '"Alô? Me ouve?" é função:', alternativas: ['Referencial', 'Emotiva', 'Fática', 'Poética'], respostaCorreta: 2},
                {peso: 2, enunciado: 'HQ usa linguagem:', alternativas: ['Verbal', 'Não-verbal', 'Mista', 'Nenhuma'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Polissemia é:', alternativas: ['Muitos sons', 'Muitos significados', 'Muitas letras', 'Muitas frases'], respostaCorreta: 1},
                {peso: 2, enunciado: 'Canal em ligação telefônica:', alternativas: ['A voz', 'O telefone', 'A pessoa', 'A mensagem'], respostaCorreta: 1},
                {peso: 3, enunciado: '"Que dia lindo!" é função:', alternativas: ['Referencial', 'Emotiva', 'Conativa', 'Metal'], respostaCorreta: 1},
                {peso: 3, enunciado: '"Substantivo nomeia" é:', alternativas: ['Referencial', 'Metalinguística', 'Poética', 'Fática'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Ambiguidade ocorre quando:', alternativas: ['Há erro', 'Há múltiplas interpretações', 'Sem sentido', 'Há repetição'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Em poesias predomina:', alternativas: ['Referencial', 'Conativa', 'Poética', 'Fática'], respostaCorreta: 2},
                {peso: 3, enunciado: 'NÃO é elemento da comunicação:', alternativas: ['Emissor', 'Receptor', 'Ambiguidade', 'Canal'], respostaCorreta: 2}
            ]
        }
    },

    // 2. MATEMÁTICA - Operações Básicas
    {
        id: 2,
        materia: 'matematica',
        bimestre: 1,
        schoolYear: '9',
        titulo: 'MATEMÁTICA BÁSICA',
        descricao: 'Operações fundamentais com números naturais e decimais',
        resumo: `# Matemática Básica

## Números Naturais

Números naturais são os números inteiros positivos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...

## Operações Fundamentais

### 1. Adição (+)
Juntar quantidades.
- 5 + 3 = 8
- 12 + 7 = 19
- 45 + 38 = 83

**Propriedades:**
- Comutativa: 3 + 5 = 5 + 3
- Elemento neutro: 8 + 0 = 8

### 2. Subtração (−)
Tirar uma quantidade de outra.
- 9 − 4 = 5
- 15 − 7 = 8
- 50 − 23 = 27

**Atenção:**
- O resultado pode ser negativo: 3 − 5 = −2

### 3. Multiplicação (×)
Adição repetida.
- 4 × 3 = 12 (4 + 4 + 4)
- 7 × 5 = 35
- 9 × 8 = 72

**Propriedades:**
- Comutativa: 4 × 5 = 5 × 4
- Elemento neutro: 7 × 1 = 7
- Elemento absorvente: 9 × 0 = 0

### 4. Divisão (÷)
Distribuir em partes iguais.
- 12 ÷ 3 = 4
- 20 ÷ 5 = 4
- 35 ÷ 7 = 5

**Atenção:**
- Não existe divisão por zero!
- 10 ÷ 3 = 3 com resto 1

## Números Decimais

Números com vírgula: 0,1 - 5,94 - 10,41

### Leitura de Decimais
- 0,1 = um décimo
- 5,94 = cinco inteiros e noventa e quatro centésimos
- 10,41 = dez inteiros e quarenta e um centésimos

### Adição de Decimais
Alinhar as vírgulas:
```
  3,45
+ 2,30
------
  5,75
```

### Subtração de Decimais
Alinhar as vírgulas:
```
  5,94
- 2,50
------
  3,44
```

### Multiplicação de Decimais
1. Multiplique normalmente ignorando a vírgula
2. Conte quantas casas decimais no total
3. Coloque a vírgula no resultado

Exemplo: 2,5 × 3
- 25 × 3 = 75
- 1 casa decimal → 7,5

### Divisão de Decimais
10,41 ÷ 3:
- 10,41 ÷ 3 = 3,47

## Ordem das Operações

Ordem de resolução (PEMDAS):
1. **Parênteses** ( )
2. **Expoentes** e Raízes
3. **Multiplicação e Divisão** (esquerda → direita)
4. **Adição e Subtração** (esquerda → direita)

Exemplo: 5 + 3 × 2 = 5 + 6 = 11

## Exercícios de Fixação

1. Calcule: 45 + 38
2. Calcule: 10,41 − 5,94
3. Calcule: 7 × 8
4. Calcule: 36 ÷ 4
5. Calcule: 5 + 3 × 2

## Respostas
1. 83
2. 4,47
3. 56
4. 9
5. 11`,
        simulado: {
            questoes: [
                {peso: 1, enunciado: 'Quanto é 7 + 8?', alternativas: ['14', '15', '16', '17'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Quanto é 15 − 9?', alternativas: ['4', '5', '6', '7'], respostaCorreta: 2},
                {peso: 1, enunciado: 'Quanto é 6 × 7?', alternativas: ['36', '40', '42', '48'], respostaCorreta: 2},
                {peso: 1, enunciado: 'Quanto é 24 ÷ 6?', alternativas: ['3', '4', '5', '6'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Qual o elemento neutro da adição?', alternativas: ['0', '1', '2', '10'], respostaCorreta: 0},
                {peso: 2, enunciado: 'Calcule: 3,5 + 2,4', alternativas: ['5,9', '6,0', '5,1', '6,9'], respostaCorreta: 0},
                {peso: 2, enunciado: 'Calcule: 10,5 − 4,3', alternativas: ['6,2', '6,8', '7,2', '5,2'], respostaCorreta: 0},
                {peso: 2, enunciado: 'Calcule: 2,5 × 4', alternativas: ['8,0', '9,0', '10,0', '10,5'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Calcule: 15 ÷ 3', alternativas: ['3', '4', '5', '6'], respostaCorreta: 2},
                {peso: 2, enunciado: '5 + 3 × 2 = ?', alternativas: ['16', '11', '13', '10'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Calcule: (5 + 3) × 2', alternativas: ['11', '13', '16', '18'], respostaCorreta: 2},
                {peso: 3, enunciado: '10,41 + 5,94 = ?', alternativas: ['15,35', '16,35', '15,45', '16,45'], respostaCorreta: 1},
                {peso: 3, enunciado: '100 ÷ 25 = ?', alternativas: ['3', '4', '5', '6'], respostaCorreta: 1},
                {peso: 3, enunciado: '7 × 8 + 4 = ?', alternativas: ['60', '84', '88', '90'], respostaCorreta: 0},
                {peso: 3, enunciado: '20 − 5 × 2 = ?', alternativas: ['10', '15', '20', '30'], respostaCorreta: 0}
            ]
        }
    },

    // 3. GEOGRAFIA - Geopolítica
    {
        id: 3,
        materia: 'geografia',
        bimestre: 1,
        schoolYear: '9',
        titulo: 'GEOPOLÍTICA MUNDIAL',
        descricao: 'Mundo bipolar, multipolar, IDH, migração',
        resumo: `# Geopolítica Mundial

## O que é Geopolítica?

Geopolítica estuda as relações de poder entre países, territórios e recursos.

## Ordem Mundial

### Mundo Bipolar (1945-1991)

Período da **Guerra Fria**: duas superpotências.

**Estados Unidos (EUA)**
- Capitalismo
- Economia de mercado
- Democracia liberal

**União Soviética (URSS)**
- Socialismo
- Economia planificada
- Partido único

**Características:**
- Corrida armamentista
- Corrida espacial
- Guerra ideológica
- Muro de Berlim (1961-1989)

### Mundo Multipolar (1991-atual)

Após queda da URSS (1991): múltiplos centros de poder.

**Principais Potências:**
- **EUA**: maior economia, poder militar
- **China**: segunda maior economia, industrial
- **União Europeia**: bloco econômico forte
- **Rússia**: recursos naturais, nuclear
- **Índia**: população, tecnologia
- **Brasil**: recursos, agricultura

## Nova Ordem Mundial

**Globalização**: integração econômica, cultural e política mundial.

**Características:**
- Tecnologia conecta o mundo
- Empresas multinacionais
- Blocos econômicos (UE, Mercosul)
- ONU, OMC, FMI
- Interdependência econômica

**Desafios:**
- Desigualdade entre países
- Conflitos regionais
- Terrorismo
- Questões ambientais

## IDH (Índice de Desenvolvimento Humano)

Mede qualidade de vida de um país (0 a 1).

**Indicadores:**
- **Expectativa de vida**: quantos anos vivem
- **Educação**: anos de estudo
- **Renda**: PIB per capita

**Classificação:**
- **Muito Alto**: IDH > 0,800 (Noruega, Suíça)
- **Alto**: 0,700-0,799 (Brasil ~0,765)
- **Médio**: 0,550-0,699
- **Baixo**: < 0,550 (países africanos)

## Migração

**Emigração**: sair do país de origem
**Imigração**: entrar em outro país

### Tipos de Migração

**1. Econômica**
Busca de emprego e melhores condições.
- Brasileiros para EUA, Europa, Japão

**2. Refúgio**
Fugir de guerras, perseguições.
- Sírios fugindo da guerra
- Venezuelanos para Brasil

**3. Ambiental**
Desastres naturais, mudanças climáticas.

**4. Sazonal**
Temporária, épocas específicas.
- Trabalhadores rurais na colheita

### Consequências da Migração

**No país de origem:**
- Perda de mão de obra
- Remessas de dinheiro

**No país destino:**
- Mão de obra
- Diversidade cultural
- Possíveis tensões sociais

## Termos Técnicos Importantes

- **PIB**: Produto Interno Bruto (riqueza produzida)
- **G20**: Grupo das 20 maiores economias
- **BRICS**: Brasil, Rússia, Índia, China, África do Sul
- **ONU**: Organização das Nações Unidas
- **Xenofobia**: preconceito contra estrangeiros

## Exercícios de Fixação

1. Quais eram as superpotências no mundo bipolar?
2. O que é IDH?
3. Cite 3 tipos de migração
4. O que caracteriza o mundo multipolar?

## Respostas
1. EUA e URSS
2. Índice de Desenvolvimento Humano
3. Econômica, refúgio, ambiental
4. Vários centros de poder`,
        simulado: {
            questoes: [
                {peso: 1, enunciado: 'Geopolítica estuda:', alternativas: ['Rochas', 'Relações de poder', 'Clima', 'Vegetação'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Superpotências da Guerra Fria:', alternativas: ['EUA e China', 'EUA e URSS', 'China e Rússia', 'EUA e Brasil'], respostaCorreta: 1},
                {peso: 1, enunciado: 'O que é IDH?', alternativas: ['Índice de Densidade', 'Índice de Desenvolvimento Humano', 'Indicador de História', 'Índice de Demografia'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Sair do país é:', alternativas: ['Imigração', 'Emigração', 'Migração', 'Refugiado'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Mundo multipolar tem:', alternativas: ['Uma potência', 'Duas potências', 'Várias potências', 'Nenhuma potência'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Guerra Fria foi entre:', alternativas: ['1900-1950', '1945-1991', '1960-2000', '1939-1945'], respostaCorreta: 1},
                {peso: 2, enunciado: 'IDH muito alto é maior que:', alternativas: ['0,500', '0,700', '0,800', '0,900'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Migração econômica busca:', alternativas: ['Fugir de guerra', 'Emprego', 'Estudar', 'Turismo'], respostaCorreta: 1},
                {peso: 2, enunciado: 'Globalização caracteriza:', alternativas: ['Isolamento', 'Integração mundial', 'Guerra', 'Ditadura'], respostaCorreta: 1},
                {peso: 2, enunciado: 'BRICS inclui:', alternativas: ['EUA', 'Brasil', 'França', 'Alemanha'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Queda URSS aconteceu em:', alternativas: ['1989', '1991', '1995', '2000'], respostaCorreta: 1},
                {peso: 3, enunciado: 'IDH mede:', alternativas: ['Só renda', 'Renda, saúde, educação', 'Só educação', 'Só população'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Xenofobia é:', alternativas: ['Amor a estrangeiros', 'Preconceito contra estrangeiros', 'Medo de aranhas', 'Amor ao país'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Segunda maior economia mundial:', alternativas: ['EUA', 'China', 'Japão', 'Brasil'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Bloco econômico europeu:', alternativas: ['Mercosul', 'BRICS', 'União Europeia', 'G20'], respostaCorreta: 2}
            ]
        }
    },

    // 4. BIOLOGIA - Sistema Cardiovascular
    {
        id: 4,
        materia: 'biologia',
        bimestre: 1,
        schoolYear: '9',
        titulo: 'SISTEMA CARDIOVASCULAR',
        descricao: 'Sistema circulatório - coração, sangue e vasos',
        resumo: `# Sistema Cardiovascular

## O que é?

Sistema responsável por transportar sangue pelo corpo, levando oxigênio e nutrientes.

## Componentes Principais

### 1. Coração

Órgão muscular que bombeia o sangue.

**Estrutura:**
- **4 câmaras:**
  - 2 Átrios (superiores): recebem sangue
  - 2 Ventrículos (inferiores): bombeiam sangue

**Átrio Direito** → Ventrículo Direito → Pulmões
**Pulmões** → Átrio Esquerdo → Ventrículo Esquerdo → Corpo

**Válvulas:** impedem retorno do sangue
- Tricúspide (direita)
- Mitral ou Bicúspide (esquerda)

**Batimentos:**
- Repouso: 60-100 bpm
- Exercício: aumenta para levar mais oxigênio

### 2. Vasos Sanguíneos

**Artérias**
- Saem do coração
- Parede grossa e elástica
- Sangue sob alta pressão
- Aorta: maior artéria

**Veias**
- Chegam ao coração
- Parede mais fina
- Sangue sob baixa pressão
- Têm válvulas

**Capilares**
- Vasos microscópicos
- Fazem trocas com células
- Parede muito fina

### 3. Sangue

**Componentes:**

**Plasma (55%)**
- Parte líquida
- 90% água
- Transporta nutrientes, hormônios

**Células (45%):**

**a) Hemácias (glóbulos vermelhos)**
- Transportam oxigênio
- Contêm hemoglobina
- Mais numerosas

**b) Leucócitos (glóbulos brancos)**
- Defesa do organismo
- Combatem infecções

**c) Plaquetas**
- Coagulação do sangue
- Param sangramentos

## Circulação

### Pequena Circulação (Pulmonar)

Coração → Pulmões → Coração
- Sangue pobre em O₂ vai aos pulmões
- Sangue rico em O₂ volta ao coração

### Grande Circulação (Sistêmica)

Coração → Corpo → Coração
- Sangue rico em O₂ vai ao corpo
- Sangue pobre em O₂ volta ao coração

## Pressão Arterial

Força do sangue nas paredes das artérias.

**Medida:** 120/80 mmHg (normal)
- **Sistólica (120)**: contração do coração
- **Diastólica (80)**: relaxamento

**Hipertensão:** pressão alta (≥ 140/90)
**Hipotensão:** pressão baixa (< 90/60)

## Doenças Cardiovasculares

**Infarto:**
- Bloqueio de artéria coronária
- Parte do coração morre

**AVC (Derrame):**
- Bloqueio ou rompimento de vaso cerebral

**Aterosclerose:**
- Acúmulo de gordura nas artérias
- Dificulta passagem do sangue

**Anemia:**
- Baixa quantidade de hemácias
- Fadiga, cansaço

## Cuidados com o Coração

✓ Alimentação saudável
✓ Exercícios físicos
✓ Não fumar
✓ Controlar estresse
✓ Dormir bem
✓ Evitar excesso de sal

## Curiosidades

- Coração bate ~100.000 vezes/dia
- Bombeia ~5 litros de sangue/minuto
- Corpo adulto tem ~5 litros de sangue
- Capilares têm espessura de 1 célula

## Exercícios de Fixação

1. Quantas câmaras tem o coração?
2. Qual vaso sai do coração?
3. O que transporta oxigênio no sangue?
4. Qual a pressão arterial normal?

## Respostas
1. 4 (2 átrios e 2 ventrículos)
2. Artérias
3. Hemácias (hemoglobina)
4. 120/80 mmHg`,
        simulado: {
            questoes: [
                {peso: 1, enunciado: 'Quantas câmaras tem o coração?', alternativas: ['2', '3', '4', '5'], respostaCorreta: 2},
                {peso: 1, enunciado: 'Vasos que saem do coração:', alternativas: ['Veias', 'Artérias', 'Capilares', 'Nervos'], respostaCorreta: 1},
                {peso: 1, enunciado: 'O que transporta oxigênio?', alternativas: ['Plaquetas', 'Leucócitos', 'Hemácias', 'Plasma'], respostaCorreta: 2},
                {peso: 1, enunciado: 'Maior artéria do corpo:', alternativas: ['Pulmonar', 'Aorta', 'Coronária', 'Femoral'], respostaCorreta: 1},
                {peso: 1, enunciado: 'Pequena circulação vai para:', alternativas: ['Cérebro', 'Fígado', 'Pulmões', 'Rins'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Câmaras superiores do coração:', alternativas: ['Ventrículos', 'Átrios', 'Válvulas', 'Artérias'], respostaCorreta: 1},
                {peso: 2, enunciado: 'Células de defesa:', alternativas: ['Hemácias', 'Plaquetas', 'Leucócitos', 'Plasma'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Pressão arterial normal:', alternativas: ['100/60', '120/80', '140/90', '160/100'], respostaCorreta: 1},
                {peso: 2, enunciado: 'Coagulação é função de:', alternativas: ['Hemácias', 'Leucócitos', 'Plaquetas', 'Plasma'], respostaCorreta: 2},
                {peso: 2, enunciado: 'Sangue rico em O₂ no:', alternativas: ['Átrio direito', 'Ventrículo direito', 'Átrio esquerdo', 'Veia cava'], respostaCorreta: 2},
                {peso: 3, enunciado: 'Infarto é bloqueio na:', alternativas: ['Veia pulmonar', 'Artéria coronária', 'Aorta', 'Veia cava'], respostaCorreta: 1},
                {peso: 3, enunciado: 'Hemoglobina está em:', alternativas: ['Plaquetas', 'Leucócitos', 'Hemácias', 'Plasma'], respostaCorreta: 2},
                {peso: 3, enunciado: 'Hipertensão é pressão:', alternativas: ['Baixa', 'Normal', 'Alta', 'Zero'], respostaCorreta: 2},
                {peso: 3, enunciado: 'Vasos microscópicos:', alternativas: ['Artérias', 'Veias', 'Capilares', 'Aorta'], respostaCorreta: 2},
                {peso: 3, enunciado: 'Aterosclerose é acúmulo de:', alternativas: ['Água', 'Sangue', 'Gordura', 'Ar'], respostaCorreta: 2}
            ]
        }
    }
];

console.log('✅ 4 módulos novos prontos!');
console.log('Módulos:', NOVOS_MODULOS.map(m => `${m.materia} - ${m.titulo}`));
