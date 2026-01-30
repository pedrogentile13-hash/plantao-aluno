// Sistema de Database Local (LocalStorage)

const DB = {
    // Inicializar database
    init() {
        if (!localStorage.getItem('plantaoaluno_users')) {
            localStorage.setItem('plantaoaluno_users', JSON.stringify([]));
        }
        if (!localStorage.getItem('plantaoaluno_content')) {
            this.initDefaultContent();
        }
        if (!localStorage.getItem('plantaoaluno_results')) {
            localStorage.setItem('plantaoaluno_results', JSON.stringify([]));
        }
    },

    // Inicializar conteúdo padrão
    initDefaultContent() {
        const defaultContent = {
            modulos: [
                // PORTUGUÊS - Comunicação (linguagem e sentido)
                {
                    id: 1,
                    materia: 'portugues',
                    bimestre: 1,
                    schoolYear: '9',
                    titulo: 'LINGUAGEM E SENTIDO',
                    descricao: 'Comunicação: linguagem e sentido',
                    resumo: `# Linguagem e Sentido

## O que é Linguagem?

Linguagem é o sistema de signos usado para comunicar ideias, pensamentos e emoções. É através da linguagem que nos comunicamos com o mundo.

## Tipos de Linguagem

### 1. Linguagem Verbal
Usa palavras (orais ou escritas) para se comunicar.
- **Oral**: conversas, palestras, apresentações
- **Escrita**: textos, livros, mensagens

### 2. Linguagem Não-Verbal
Usa outros recursos além das palavras.
- **Gestos**: acenos, sinais
- **Imagens**: fotos, desenhos, placas
- **Sons**: música, buzinas
- **Expressões faciais**: sorrisos, caretas

### 3. Linguagem Mista
Combina linguagem verbal e não-verbal.
Exemplo: história em quadrinhos, memes, posts em redes sociais

## Sentido e Significado

### Denotação
Sentido literal, objetivo, do dicionário.
- Exemplo: "Pedro quebrou o braço" (quebrou realmente)

### Conotação
Sentido figurado, subjetivo, depende do contexto.
- Exemplo: "Pedro quebrou o braço da cadeira" (danificou)
- Exemplo: "Ele tem um coração de pedra" (pessoa insensível)

## Funções da Linguagem

### 1. Função Referencial (Informativa)
Foco no contexto, em informar.
- Exemplo: "A prova será amanhã às 10h."

### 2. Função Emotiva (Expressiva)
Foco no emissor, expressar emoções.
- Exemplo: "Que dia maravilhoso!"

### 3. Função Conativa (Apelativa)
Foco no receptor, convencer, persuadir.
- Exemplo: "Compre agora! Última chance!"

### 4. Função Fática
Foco no canal, manter contato.
- Exemplo: "Alô? Está me ouvindo?"

### 5. Função Metalinguística
Foco no código, explicar a própria linguagem.
- Exemplo: "Substantivo é a palavra que nomeia seres."

### 6. Função Poética
Foco na mensagem, na forma, beleza.
- Exemplo: Poesias, letras de música

## Elementos da Comunicação

- **Emissor**: quem envia a mensagem
- **Receptor**: quem recebe a mensagem
- **Mensagem**: conteúdo transmitido
- **Canal**: meio de transmissão
- **Código**: língua, gestos, símbolos
- **Contexto**: situação da comunicação

## Polissemia

Uma palavra com múltiplos significados.
- Manga: fruta / parte da roupa
- Banco: assento / instituição financeira
- Pena: pluma de ave / sentimento / punição

## Ambiguidade

Quando uma frase tem mais de uma interpretação.
- "Vi o homem no parque com o telescópio"
  * Estava no parque e usei telescópio para vê-lo?
  * Ele estava no parque e tinha um telescópio?

## Exercícios de Fixação
1. Identifique se é linguagem verbal, não-verbal ou mista: emoji 😊
2. "Aquela menina é uma flor" - Denotação ou conotação?
3. Qual função: "Venha para a Caixa você também!"

## Respostas
1. Não-verbal
2. Conotação
3. Função Conativa (apelativa)`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'O que é linguagem verbal?',
                                alternativas: ['Uso de gestos', 'Uso de palavras', 'Uso de imagens', 'Uso de sons'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual é o sentido literal de uma palavra?',
                                alternativas: ['Conotação', 'Denotação', 'Polissemia', 'Ambiguidade'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: '"Compre agora!" é exemplo de qual função?',
                                alternativas: ['Emotiva', 'Referencial', 'Conativa', 'Fática'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Quem recebe a mensagem na comunicação?',
                                alternativas: ['Emissor', 'Receptor', 'Canal', 'Código'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Placas de trânsito são que tipo de linguagem?',
                                alternativas: ['Verbal', 'Não-verbal', 'Mista', 'Oral'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual frase tem conotação?',
                                alternativas: ['O carro é azul', 'Ele tem coração de pedra', 'A mesa é de madeira', 'O livro está na estante'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: '"Alô? Está me ouvindo?" é qual função?',
                                alternativas: ['Referencial', 'Emotiva', 'Fática', 'Poética'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'História em quadrinhos usa linguagem:',
                                alternativas: ['Apenas verbal', 'Apenas não-verbal', 'Mista', 'Nenhuma'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'O que é polissemia?',
                                alternativas: ['Muitos sons', 'Muitos significados', 'Muitas letras', 'Muitas frases'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual o canal em uma conversa telefônica?',
                                alternativas: ['A voz', 'O telefone', 'A pessoa', 'A mensagem'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Identifique a função: "Que dia lindo!"',
                                alternativas: ['Referencial', 'Emotiva', 'Conativa', 'Metalinguística'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: '"Substantivo nomeia seres" é função:',
                                alternativas: ['Referencial', 'Metalinguística', 'Poética', 'Fática'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Ambiguidade ocorre quando:',
                                alternativas: ['Há erro gramatical', 'Há múltiplas interpretações', 'Não há sentido', 'Há repetição'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Em poesias, qual função predomina?',
                                alternativas: ['Referencial', 'Conativa', 'Poética', 'Fática'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual NÃO é elemento da comunicação?',
                                alternativas: ['Emissor', 'Receptor', 'Ambiguidade', 'Canal'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                },
                // MATEMÁTICA - Operações Básicas
                {
                    id: 2,
                    materia: 'matematica',
                    bimestre: 1,
                    schoolYear: '9',
                    titulo: 'MATEMÁTICA BÁSICA',
                    descricao: 'Operações fundamentais com números naturais e decimais',
                    resumo: `# Matemática

## O que é Fatoração?

Fatoração é o processo de transformar uma expressão algébrica em um produto de fatores mais simples.

## Tipos de Fatoração

### 1. Fator Comum
Quando todos os termos têm um fator em comum.
Exemplo: 6x + 9 = 3(2x + 3)

### 2. Agrupamento
Agrupar termos que possuem fatores comuns.
Exemplo: ax + bx + ay + by = x(a + b) + y(a + b) = (x + y)(a + b)

### 3. Diferença de Quadrados
a² - b² = (a + b)(a - b)
Exemplo: x² - 9 = (x + 3)(x - 3)

### 4. Trinômio Quadrado Perfeito
a² + 2ab + b² = (a + b)²
a² - 2ab + b² = (a - b)²

## Exercícios de Fixação

1. Fatore: 5x + 15
2. Fatore: x² - 16
3. Fatore: x² + 6x + 9

## Respostas
1. 5(x + 3)
2. (x + 4)(x - 4)
3. (x + 3)²`,
                    simulado: {
                        questoes: [
                            // 5 Questões Fáceis (peso 1)
                            {
                                peso: 1,
                                enunciado: 'Fatore a expressão: 2x + 6',
                                alternativas: ['2(x + 3)', '2(x + 6)', 'x(2 + 3)', '3(x + 2)'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual é o fator comum em 5a + 5b?',
                                alternativas: ['a', 'b', '5', '10'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Fatore: 3x + 9',
                                alternativas: ['3(x + 9)', '3(x + 3)', 'x(3 + 9)', '9(x + 1)'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Simplifique: 4x + 8',
                                alternativas: ['2(2x + 4)', '4(x + 2)', '2(x + 4)', '4(2x + 2)'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Fatore: 7y + 14',
                                alternativas: ['7(y + 14)', '14(y + 1)', '7(y + 2)', '2(7y + 7)'],
                                respostaCorreta: 2
                            },
                            // 5 Questões Médias (peso 2)
                            {
                                peso: 2,
                                enunciado: 'Fatore a diferença de quadrados: x² - 25',
                                alternativas: ['(x + 5)(x + 5)', '(x - 5)(x - 5)', '(x + 5)(x - 5)', '(x + 25)(x - 1)'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Fatore: x² - 9',
                                alternativas: ['(x + 3)(x + 3)', '(x - 3)(x - 3)', '(x + 3)(x - 3)', '(x + 9)(x - 1)'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Fatore o trinômio quadrado perfeito: x² + 6x + 9',
                                alternativas: ['(x + 3)²', '(x + 9)²', '(x + 3)(x + 6)', '(x + 2)(x + 3)'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Fatore: x² - 4x + 4',
                                alternativas: ['(x - 2)²', '(x + 2)²', '(x - 4)(x - 1)', '(x - 2)(x + 2)'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Fatore por agrupamento: ax + ay + bx + by',
                                alternativas: ['(a + b)(x + y)', '(x + y)(a + b)', 'Ambas estão corretas', 'Nenhuma está correta'],
                                respostaCorreta: 2
                            },
                            // 5 Questões Difíceis (peso 3)
                            {
                                peso: 3,
                                enunciado: 'Fatore completamente: 2x² - 18',
                                alternativas: ['2(x² - 9)', '2(x + 3)(x - 3)', '(2x + 6)(x - 3)', '2(x - 9)(x + 1)'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Fatore: 3x² + 12x + 12',
                                alternativas: ['3(x + 2)²', '(3x + 6)²', '3(x² + 4x + 4)', 'A e C estão corretas'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Fatore: x³ - x',
                                alternativas: ['x(x² - 1)', 'x(x + 1)(x - 1)', 'x(x - 1)²', '(x² + 1)(x - 1)'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Fatore: 4x² - 12x + 9',
                                alternativas: ['(4x - 3)²', '(2x - 3)²', '4(x - 3)²', '2(2x - 3)²'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Fatore: x⁴ - 16',
                                alternativas: ['(x² + 4)(x² - 4)', '(x² + 4)(x + 2)(x - 2)', '(x + 2)(x - 2)(x² + 4)', 'B e C estão corretas'],
                                respostaCorreta: 3
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    materia: 'matematica',
                    bimestre: 1,
                    schoolYear: '9',
                    titulo: 'EXPRESSÃO DE 2o GRAU',
                    descricao: 'Aprenda a expressão.',
                    resumo: `# Equação de Segundo Grau

## O que é?

Uma equação do segundo grau é toda equação na forma ax² + bx + c = 0, onde a, b e c são números reais e a ≠ 0.

## Estrutura

- **a** = coeficiente de x² (termo quadrático)
- **b** = coeficiente de x (termo linear)
- **c** = termo independente

Exemplo: 2x² + 5x - 3 = 0
- a = 2
- b = 5
- c = -3

## Fórmula de Bhaskara

A fórmula para encontrar as raízes da equação é:

x = (-b ± √Δ) / 2a

Onde Δ (delta) = b² - 4ac

## Discriminante (Δ)

O valor de Δ determina quantas raízes a equação tem:

- **Δ > 0**: Duas raízes reais e diferentes
- **Δ = 0**: Duas raízes reais e iguais
- **Δ < 0**: Não há raízes reais

## Exemplos Resolvidos

### Exemplo 1: x² - 5x + 6 = 0

a = 1, b = -5, c = 6

Δ = (-5)² - 4(1)(6) = 25 - 24 = 1

x = (5 ± √1) / 2 = (5 ± 1) / 2

x₁ = 6/2 = 3
x₂ = 4/2 = 2

**Raízes: x = 2 ou x = 3**

### Exemplo 2: x² - 4x + 4 = 0

a = 1, b = -4, c = 4

Δ = (-4)² - 4(1)(4) = 16 - 16 = 0

x = (4 ± 0) / 2 = 2

**Raiz dupla: x = 2**

## Exercícios de Fixação

1. Resolva: x² - 7x + 10 = 0
2. Calcule o Δ de: 2x² + 3x - 2 = 0
3. Resolva: x² - 6x + 9 = 0

## Respostas
1. x = 2 ou x = 5
2. Δ = 25
3. x = 3 (raiz dupla)`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Em uma equação do 2º grau ax² + bx + c = 0, o que representa "a"?',
                                alternativas: ['Termo independente', 'Coeficiente de x', 'Coeficiente de x²', 'Discriminante'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual a fórmula do discriminante (Δ)?',
                                alternativas: ['b² + 4ac', 'b² - 4ac', '-b² + 4ac', '4ac - b²'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Se Δ = 0, quantas raízes reais a equação possui?',
                                alternativas: ['Nenhuma', 'Uma raiz dupla', 'Duas raízes diferentes', 'Três raízes'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Na equação x² - 5x + 6 = 0, qual o valor de c?',
                                alternativas: ['1', '-5', '6', '0'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Se Δ < 0, a equação possui:',
                                alternativas: ['Duas raízes reais', 'Uma raiz real', 'Nenhuma raiz real', 'Infinitas raízes'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Calcule Δ para x² - 4x + 4 = 0',
                                alternativas: ['0', '4', '16', '-16'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Resolva x² - 5x + 6 = 0',
                                alternativas: ['x = 1 ou x = 6', 'x = 2 ou x = 3', 'x = -2 ou x = -3', 'x = 5 ou x = 1'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Na equação 2x² + 8x + 8 = 0, qual o valor de Δ?',
                                alternativas: ['0', '8', '16', '32'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual equação tem Δ > 0?',
                                alternativas: ['x² - 2x + 1 = 0', 'x² + 2x + 2 = 0', 'x² - 5x + 6 = 0', 'x² + 4x + 4 = 0'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Resolva x² - 6x + 9 = 0',
                                alternativas: ['x = 3 (raiz dupla)', 'x = -3 (raiz dupla)', 'x = 3 ou x = -3', 'Não há raízes reais'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Resolva 2x² - 8x + 8 = 0',
                                alternativas: ['x = 1', 'x = 2', 'x = 4', 'x = 2 (raiz dupla)'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Calcule as raízes de x² + 6x + 5 = 0',
                                alternativas: ['x = -1 ou x = -5', 'x = 1 ou x = 5', 'x = -1 ou x = 5', 'x = 1 ou x = -5'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Para que x² - 6x + k = 0 tenha raízes iguais, k deve ser:',
                                alternativas: ['6', '9', '12', '36'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Resolva 3x² - 12x + 12 = 0',
                                alternativas: ['x = 1', 'x = 2 (raiz dupla)', 'x = 3', 'x = 4'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Quantas raízes reais tem x² + x + 1 = 0?',
                                alternativas: ['Nenhuma', 'Uma', 'Duas', 'Três'],
                                respostaCorreta: 0
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    materia: 'matematica',
                    bimestre: 1,
                    schoolYear: '8',
                    titulo: 'FORMAS 3D',
                    descricao: 'Aprenda as formas espaciais',
                    resumo: `# Formas 3D (Geometria Espacial)

## O que são Formas 3D?

Formas tridimensionais são objetos que possuem comprimento, largura e altura.

## Principais Sólidos Geométricos

### 1. Cubo
- 6 faces quadradas
- 12 arestas
- 8 vértices
- Volume: V = a³
- Área total: A = 6a²

### 2. Paralelepípedo
- 6 faces retangulares
- Volume: V = a × b × c
- Área total: A = 2(ab + ac + bc)

### 3. Esfera
- Superfície curva
- Volume: V = (4/3)πr³
- Área: A = 4πr²

### 4. Cilindro
- 2 bases circulares
- Volume: V = πr²h
- Área lateral: A = 2πrh

### 5. Cone
- 1 base circular
- Volume: V = (1/3)πr²h
- Área lateral: A = πrg (g = geratriz)

### 6. Pirâmide
- Base poligonal
- Volume: V = (1/3)Bh (B = área da base)`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Quantas faces tem um cubo?',
                                alternativas: ['4', '6', '8', '12'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual sólido tem todas as faces quadradas?',
                                alternativas: ['Paralelepípedo', 'Cubo', 'Pirâmide', 'Prisma'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'A esfera possui quantas faces planas?',
                                alternativas: ['0', '1', '2', '3'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 1,
                                enunciado: 'O cilindro possui quantas bases?',
                                alternativas: ['0', '1', '2', '3'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual sólido tem um vértice no topo?',
                                alternativas: ['Cubo', 'Cilindro', 'Cone', 'Esfera'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Calcule o volume de um cubo de aresta 3 cm',
                                alternativas: ['9 cm³', '18 cm³', '27 cm³', '81 cm³'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Um paralelepípedo tem dimensões 2×3×4. Qual seu volume?',
                                alternativas: ['9 cm³', '24 cm³', '26 cm³', '32 cm³'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual a área total de um cubo de aresta 2?',
                                alternativas: ['8', '12', '16', '24'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 2,
                                enunciado: 'Quantos vértices tem uma pirâmide de base quadrada?',
                                alternativas: ['4', '5', '6', '8'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'O que é a geratriz de um cone?',
                                alternativas: ['A altura', 'A distância do vértice à borda da base', 'O raio da base', 'O diâmetro'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Calcule a área total de um cubo de aresta 5 cm',
                                alternativas: ['25 cm²', '75 cm²', '125 cm²', '150 cm²'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Um cilindro tem raio 3 e altura 5. Qual seu volume? (use π = 3)',
                                alternativas: ['45', '90', '135', '270'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Volume de uma esfera de raio 3 (use π = 3 e simplifique)',
                                alternativas: ['36', '54', '72', '108'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Área da superfície de uma esfera de raio 2 (use π = 3)',
                                alternativas: ['12', '24', '36', '48'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Volume de um cone com raio 3 e altura 4 (use π = 3)',
                                alternativas: ['12', '24', '36', '48'],
                                respostaCorreta: 0
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    materia: 'geografia',
                    bimestre: 1,
                    schoolYear: '8',
                    titulo: 'CARTOGRAFIA',
                    descricao: 'Entenda mapas, coordenadas e escalas',
                    resumo: `# Cartografia

## O que é Cartografia?

Cartografia é a ciência que estuda e produz mapas, representando a superfície terrestre em um plano.

## Elementos de um Mapa

### 1. Título
Indica o tema do mapa (ex: Mapa Político do Brasil)

### 2. Legenda
Explica os símbolos e cores utilizados no mapa

### 3. Escala
Mostra a proporção entre o mapa e a realidade
- **Escala numérica**: 1:100.000 (1 cm no mapa = 100.000 cm na realidade)
- **Escala gráfica**: Representada por uma régua desenhada

### 4. Rosa dos Ventos
Indica os pontos cardeais (N, S, L, O) e colaterais (NE, NO, SE, SO)

## Coordenadas Geográficas

### Latitude
- Distância em graus do Equador (0°)
- Varia de 0° a 90° Norte ou Sul
- Linhas horizontais (paralelos)

### Longitude
- Distância em graus do Meridiano de Greenwich (0°)
- Varia de 0° a 180° Leste ou Oeste
- Linhas verticais (meridianos)

## Tipos de Mapas

1. **Político**: Mostra divisões políticas (países, estados, cidades)
2. **Físico**: Mostra relevo, rios, montanhas
3. **Temático**: Mostra temas específicos (clima, população, economia)

## Projeções Cartográficas

Formas de representar a Terra esférica em um plano:
- **Cilíndrica** (Mercator): distorce áreas próximas aos polos
- **Cônica**: boa para médias latitudes
- **Azimutal**: centrada em um ponto`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'O que é cartografia?',
                                alternativas: ['Estudo dos astros', 'Ciência que produz mapas', 'Estudo do clima', 'Análise de populações'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual elemento do mapa explica os símbolos usados?',
                                alternativas: ['Título', 'Escala', 'Legenda', 'Rosa dos ventos'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Latitude é medida a partir de qual referência?',
                                alternativas: ['Polo Norte', 'Meridiano de Greenwich', 'Linha do Equador', 'Trópico de Capricórnio'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Quantos pontos cardeais existem?',
                                alternativas: ['2', '4', '6', '8'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Longitude é medida em relação a qual linha?',
                                alternativas: ['Equador', 'Trópico de Câncer', 'Meridiano de Greenwich', 'Círculo Polar Ártico'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Em uma escala 1:50.000, 2 cm no mapa representam quantos metros na realidade?',
                                alternativas: ['500 m', '1.000 m', '5.000 m', '10.000 m'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual a latitude máxima possível?',
                                alternativas: ['45°', '90°', '180°', '360°'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Nordeste (NE) é um ponto:',
                                alternativas: ['Cardinal', 'Colateral', 'Subcolateral', 'Principal'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual tipo de mapa mostra divisões de países e estados?',
                                alternativas: ['Físico', 'Político', 'Climático', 'Econômico'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'As linhas de latitude são chamadas de:',
                                alternativas: ['Meridianos', 'Paralelos', 'Coordenadas', 'Eixos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Em uma escala 1:100.000, quantos quilômetros são representados por 5 cm?',
                                alternativas: ['5 km', '10 km', '50 km', '100 km'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual projeção distorce as áreas próximas aos polos?',
                                alternativas: ['Cônica', 'Azimutal', 'Cilíndrica (Mercator)', 'Plana'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Uma cidade está a 23°S de latitude. Ela está:',
                                alternativas: ['No Hemisfério Norte', 'No Hemisfério Sul', 'Na Linha do Equador', 'No Polo Sul'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Brasília está aproximadamente a 15°S, 48°W. O que significa 48°W?',
                                alternativas: ['Latitude sul', 'Longitude oeste', 'Altitude', 'Temperatura'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual elemento NÃO é obrigatório em um mapa?',
                                alternativas: ['Título', 'Escala', 'Fotografia aérea', 'Legenda'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    materia: 'historia',
                    bimestre: 1,
                    titulo: 'REVOLUÇÃO FRANCESA',
                    descricao: 'A revolução que mudou o mundo',
                    resumo: `# Revolução Francesa (1789-1799)

## Contexto Histórico

A França do século XVIII vivia sob uma monarquia absolutista com grande desigualdade social.

## Sociedade Francesa (Antigo Regime)

### Primeiro Estado: Clero
- Padres, bispos e religiosos
- Privilégios e isenção de impostos
- Cerca de 0,5% da população

### Segundo Estado: Nobreza
- Aristocratas e proprietários de terras
- Privilégios e isenção de impostos
- Cerca de 1,5% da população

### Terceiro Estado: Povo
- Burguesia, camponeses, trabalhadores
- Pagavam todos os impostos
- Cerca de 98% da população
- **Sem direitos políticos**

## Causas da Revolução

1. **Crise econômica**: Dívidas da monarquia
2. **Fome**: Más colheitas e escassez de alimentos
3. **Desigualdade**: Privilégios do clero e nobreza
4. **Iluminismo**: Ideias de liberdade e igualdade
5. **Exemplo americano**: Independência dos EUA (1776)

## Principais Eventos

### 1789: Início
- **14 de julho**: Queda da Bastilha (prisão símbolo do absolutismo)
- Declaração dos Direitos do Homem e do Cidadão

### 1792: República
- Fim da monarquia
- Proclamação da República

### 1793-1794: Terror
- Governo radical de Robespierre
- Guilhotina para opositores
- Execução do rei Luís XVI e da rainha Maria Antonieta

### 1799: Fim
- Napoleão Bonaparte assume o poder (Golpe do 18 Brumário)

## Lema da Revolução

**Liberdade, Igualdade, Fraternidade**

## Consequências

- Fim do absolutismo na França
- Influenciou revoluções em todo o mundo
- Declaração de direitos humanos
- Ascensão da burguesia
- Código Napoleônico (leis)`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Em que ano começou a Revolução Francesa?',
                                alternativas: ['1776', '1789', '1792', '1799'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual era o Primeiro Estado na França do Antigo Regime?',
                                alternativas: ['Nobreza', 'Burguesia', 'Clero', 'Camponeses'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual o lema da Revolução Francesa?',
                                alternativas: ['Paz, Amor e União', 'Liberdade, Igualdade, Fraternidade', 'Trabalho, Pátria, Família', 'Ordem e Progresso'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual prisão foi tomada em 14 de julho de 1789?',
                                alternativas: ['Torre de Londres', 'Bastilha', 'Alcatraz', 'Versalhes'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Quem assumiu o poder ao final da Revolução em 1799?',
                                alternativas: ['Luís XVI', 'Robespierre', 'Napoleão Bonaparte', 'Maria Antonieta'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual era a porcentagem aproximada do Terceiro Estado?',
                                alternativas: ['10%', '50%', '75%', '98%'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 2,
                                enunciado: 'O que foi declarado em 1789 sobre direitos?',
                                alternativas: ['Declaração de Independência', 'Declaração dos Direitos do Homem e do Cidadão', 'Carta Magna', 'Constituição Federal'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual período ficou conhecido como "Terror"?',
                                alternativas: ['1789-1790', '1791-1792', '1793-1794', '1798-1799'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Quem liderou o período do Terror?',
                                alternativas: ['Napoleão', 'Luís XVI', 'Robespierre', 'Voltaire'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual corrente de pensamento influenciou a Revolução?',
                                alternativas: ['Feudalismo', 'Mercantilismo', 'Iluminismo', 'Romantismo'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual rei foi executado durante a Revolução?',
                                alternativas: ['Luís XIV', 'Luís XV', 'Luís XVI', 'Carlos X'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual revolução serviu de exemplo para os franceses?',
                                alternativas: ['Revolução Russa', 'Independência dos EUA', 'Revolução Industrial', 'Revolução Chinesa'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual instrumento foi usado para executar nobres e opositores?',
                                alternativas: ['Forca', 'Guilhotina', 'Fuzilamento', 'Fogueira'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Em que ano a monarquia francesa foi abolida?',
                                alternativas: ['1789', '1791', '1792', '1794'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Quem NÃO pertencia ao Terceiro Estado?',
                                alternativas: ['Burgueses', 'Camponeses', 'Artesãos', 'Nobres'],
                                respostaCorreta: 3
                            }
                        ]
                    }
                },
                {
                    id: 6,
                    materia: 'portugues',
                    bimestre: 1,
                    titulo: 'CLASSES GRAMATICAIS',
                    descricao: 'Substantivos, verbos, adjetivos e mais',
                    resumo: `# Classes Gramaticais

## O que são Classes Gramaticais?

São categorias que agrupam palavras de acordo com sua função na frase.

## 10 Classes Gramaticais

### 1. Substantivo
**Nomeia** seres, lugares, sentimentos, qualidades
- Exemplos: casa, João, amor, beleza
- Tipos: próprio, comum, concreto, abstrato

### 2. Artigo
**Define ou indefine** o substantivo
- Definidos: o, a, os, as
- Indefinidos: um, uma, uns, umas

### 3. Adjetivo
**Qualifica** ou caracteriza o substantivo
- Exemplos: bonito, inteligente, azul, grande

### 4. Numeral
**Indica quantidade** ou ordem
- Cardinais: um, dois, três
- Ordinais: primeiro, segundo, terceiro

### 5. Pronome
**Substitui ou acompanha** o substantivo
- Pessoais: eu, tu, ele, nós, vós, eles
- Possessivos: meu, teu, seu, nosso
- Demonstrativos: este, esse, aquele

### 6. Verbo
**Indica ação, estado ou fenômeno**
- Exemplos: correr, ser, chover
- Flexões: tempo, modo, pessoa, número

### 7. Advérbio
**Modifica** verbo, adjetivo ou outro advérbio
- Lugar: aqui, ali, perto
- Tempo: hoje, ontem, sempre
- Modo: bem, mal, assim
- Intensidade: muito, pouco, bastante

### 8. Preposição
**Liga** palavras estabelecendo relação
- Exemplos: a, de, em, para, por, com, sem

### 9. Conjunção
**Liga** orações ou palavras
- Coordenativas: e, mas, ou, porém
- Subordinativas: que, se, quando, porque

### 10. Interjeição
**Expressa emoção**
- Exemplos: Ah! Oba! Ui! Socorro!

## Como Identificar?

1. **Substantivo**: pode vir após artigo (o amor, a casa)
2. **Verbo**: indica ação ou estado (ele corre, ela é)
3. **Adjetivo**: caracteriza (casa bonita)
4. **Advérbio**: modifica verbo (corre rapidamente)`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Qual palavra é um substantivo?',
                                alternativas: ['Correr', 'Bonito', 'Casa', 'Muito'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual classe gramatical qualifica o substantivo?',
                                alternativas: ['Verbo', 'Adjetivo', 'Advérbio', 'Pronome'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'A palavra "rapidamente" é um:',
                                alternativas: ['Substantivo', 'Verbo', 'Adjetivo', 'Advérbio'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 1,
                                enunciado: 'Quantas classes gramaticais existem?',
                                alternativas: ['5', '8', '10', '12'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual palavra é um artigo definido?',
                                alternativas: ['um', 'uma', 'o', 'uns'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Na frase "O cachorro preto corre rápido", qual é o adjetivo?',
                                alternativas: ['cachorro', 'preto', 'corre', 'rápido'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Na frase "Ele mora em São Paulo", qual é a preposição?',
                                alternativas: ['Ele', 'mora', 'em', 'São Paulo'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual é a função do pronome?',
                                alternativas: ['Qualificar', 'Substituir ou acompanhar o substantivo', 'Ligar palavras', 'Indicar ação'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: '"Meu" e "nosso" são pronomes:',
                                alternativas: ['Pessoais', 'Possessivos', 'Demonstrativos', 'Indefinidos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual palavra expressa emoção?',
                                alternativas: ['Verbo', 'Substantivo', 'Interjeição', 'Conjunção'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Na frase "João e Maria estudam muito", qual é a conjunção?',
                                alternativas: ['João', 'e', 'estudam', 'muito'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: '"Primeiro, segundo, terceiro" são numerais:',
                                alternativas: ['Cardinais', 'Ordinais', 'Multiplicativos', 'Fracionários'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual frase contém um advérbio de tempo?',
                                alternativas: ['Ele mora aqui', 'Ela chegou ontem', 'Corremos rapidamente', 'João é muito alto'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Substantivo abstrato nomeia:',
                                alternativas: ['Objetos concretos', 'Sentimentos e qualidades', 'Pessoas específicas', 'Lugares'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Na frase "A menina bonita canta bem", quantos adjetivos há?',
                                alternativas: ['0', '1', '2', '3'],
                                respostaCorreta: 1
                            }
                        ]
                    }
                },
                {
                    id: 7,
                    materia: 'fisica',
                    bimestre: 1,
                    titulo: 'CINEMÁTICA - MOVIMENTO',
                    descricao: 'Estudo do movimento dos corpos',
                    resumo: `# Cinemática - Movimento

## O que é Cinemática?

Parte da Física que estuda o **movimento** dos corpos sem se preocupar com suas causas.

## Conceitos Fundamentais

### Referencial
Ponto de vista a partir do qual observamos o movimento
- Exemplo: Você dentro de um ônibus está em repouso em relação ao ônibus, mas em movimento em relação à rua

### Trajetória
Caminho percorrido pelo corpo em movimento
- Retilínea: linha reta
- Curvilínea: curva

### Posição (S)
Local onde o corpo está em determinado instante
- Medida em metros (m)

### Deslocamento (ΔS)
Variação da posição
- ΔS = Sfinal - Sinicial

### Velocidade (V)
Rapidez com que o corpo muda de posição
- **Velocidade Média**: Vm = ΔS / Δt
- Unidades: m/s (metros por segundo) ou km/h

## Movimento Uniforme (MU)

Movimento com **velocidade constante**

### Fórmula:
S = S₀ + vt

Onde:
- S = posição final
- S₀ = posição inicial
- v = velocidade
- t = tempo

### Características:
- Velocidade constante
- Aceleração = 0
- Gráfico v×t = linha horizontal

## Conversão de Unidades

### km/h para m/s: dividir por 3,6
- 36 km/h = 36 ÷ 3,6 = 10 m/s

### m/s para km/h: multiplicar por 3,6
- 20 m/s = 20 × 3,6 = 72 km/h

## Exemplos

### Exemplo 1:
Um carro percorre 100 km em 2 horas. Qual sua velocidade média?

Vm = ΔS / Δt = 100 km / 2 h = **50 km/h**

### Exemplo 2:
Um móvel parte da posição 5 m com velocidade 2 m/s. Onde estará após 10 segundos?

S = S₀ + vt
S = 5 + 2×10
S = 5 + 20 = **25 m**`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Cinemática estuda:',
                                alternativas: ['Causas do movimento', 'O movimento sem suas causas', 'Forças', 'Energia'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'A unidade de velocidade no SI é:',
                                alternativas: ['km/h', 'm/s', 'cm/s', 'km/s'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'No Movimento Uniforme, a velocidade é:',
                                alternativas: ['Crescente', 'Decrescente', 'Constante', 'Nula'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Deslocamento é:',
                                alternativas: ['Posição inicial', 'Variação da posição', 'Tempo gasto', 'Velocidade'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Para converter km/h para m/s, devemos:',
                                alternativas: ['Multiplicar por 3,6', 'Dividir por 3,6', 'Multiplicar por 10', 'Dividir por 10'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Um carro percorre 150 km em 3 horas. Sua velocidade média é:',
                                alternativas: ['30 km/h', '45 km/h', '50 km/h', '60 km/h'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Converta 72 km/h para m/s:',
                                alternativas: ['10 m/s', '15 m/s', '20 m/s', '25 m/s'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'A fórmula do Movimento Uniforme é:',
                                alternativas: ['S = vt', 'S = S₀ + vt', 'V = S/t', 'V = at'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Um móvel está na posição 10 m e vai para 30 m. Seu deslocamento foi:',
                                alternativas: ['10 m', '20 m', '30 m', '40 m'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'No MU, a aceleração vale:',
                                alternativas: ['-1 m/s²', '0 m/s²', '1 m/s²', '10 m/s²'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Um móvel parte de S₀=5m com v=3m/s. Após 4s, sua posição será:',
                                alternativas: ['12 m', '15 m', '17 m', '20 m'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Um atleta corre 400m em 50s. Sua velocidade média em m/s é:',
                                alternativas: ['6 m/s', '7 m/s', '8 m/s', '9 m/s'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Converta 25 m/s para km/h:',
                                alternativas: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Um carro a 20 m/s percorre que distância em 10 segundos?',
                                alternativas: ['100 m', '150 m', '200 m', '250 m'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Se S=10+2t, qual a velocidade do móvel?',
                                alternativas: ['10 m/s', '2 m/s', '12 m/s', '8 m/s'],
                                respostaCorreta: 1
                            }
                        ]
                    }
                },
                {
                    id: 8,
                    materia: 'quimica',
                    bimestre: 1,
                    titulo: 'TABELA PERIÓDICA',
                    descricao: 'Organização dos elementos químicos',
                    resumo: `# Tabela Periódica

## O que é?

Organização dos **elementos químicos** por suas propriedades e características.

## Histórico

Criada por **Dmitri Mendeleev** (1869), organizando os elementos por massa atômica crescente.

## Estrutura da Tabela

### Períodos (Linhas Horizontais)
- São 7 períodos
- Indicam o número de camadas eletrônicas
- Exemplo: Carbono está no 2º período → 2 camadas

### Famílias ou Grupos (Colunas Verticais)
- São 18 famílias
- Elementos da mesma família têm propriedades semelhantes

## Principais Famílias

### Família 1: Metais Alcalinos
- Li, Na, K, Rb, Cs, Fr
- Muito reativos
- Um elétron na camada de valência

### Família 2: Metais Alcalino-Terrosos
- Be, Mg, Ca, Sr, Ba, Ra
- Dois elétrons na camada de valência

### Família 17: Halogênios
- F, Cl, Br, I, At
- Muito reativos
- 7 elétrons na camada de valência

### Família 18: Gases Nobres
- He, Ne, Ar, Kr, Xe, Rn
- Muito estáveis (não reagem)
- 8 elétrons na camada de valência (camada completa)

## Classificação dos Elementos

### Metais
- Maioria dos elementos
- Conduzem eletricidade e calor
- Brilhosos, maleáveis, dúcteis
- Exemplos: Fe, Cu, Au, Ag

### Ametais (Não-metais)
- Não conduzem bem eletricidade
- Opacos, quebradiços
- Exemplos: C, O, N, S, P

### Semimetais (Metaloides)
- Propriedades intermediárias
- Exemplos: Si, Ge, As

## Informações no Elemento

Cada quadrado da tabela mostra:
- **Símbolo**: C (Carbono)
- **Número atômico** (Z): Número de prótons
- **Massa atômica** (A): Prótons + Nêutrons

### Exemplo: Carbono (C)
- Z = 6 (6 prótons)
- A = 12
- Nêutrons = A - Z = 12 - 6 = 6`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Quem criou a Tabela Periódica?',
                                alternativas: ['Albert Einstein', 'Isaac Newton', 'Dmitri Mendeleev', 'Marie Curie'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Quantos períodos tem a Tabela Periódica?',
                                alternativas: ['5', '6', '7', '8'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Os períodos indicam:',
                                alternativas: ['Número de prótons', 'Número de camadas eletrônicas', 'Número de nêutrons', 'Massa atômica'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual família é conhecida como Gases Nobres?',
                                alternativas: ['Família 1', 'Família 2', 'Família 17', 'Família 18'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 1,
                                enunciado: 'O símbolo do Carbono é:',
                                alternativas: ['Ca', 'C', 'Co', 'Cr'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual característica dos Gases Nobres?',
                                alternativas: ['Muito reativos', 'Muito estáveis', 'São metais', 'São líquidos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Metais Alcalinos têm quantos elétrons na camada de valência?',
                                alternativas: ['1', '2', '7', '8'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Cl (Cloro) pertence à família dos:',
                                alternativas: ['Metais Alcalinos', 'Gases Nobres', 'Halogênios', 'Alcalino-Terrosos'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual NÃO é uma característica dos metais?',
                                alternativas: ['Conduzem eletricidade', 'São brilhosos', 'São quebradiços', 'São maleáveis'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'O número atômico (Z) indica:',
                                alternativas: ['Número de nêutrons', 'Número de prótons', 'Massa atômica', 'Número de elétrons livres'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Um elemento com Z=6 e A=12 tem quantos nêutrons?',
                                alternativas: ['6', '12', '18', '3'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual elemento é um ametal?',
                                alternativas: ['Ferro (Fe)', 'Ouro (Au)', 'Oxigênio (O)', 'Prata (Ag)'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Silício (Si) é classificado como:',
                                alternativas: ['Metal', 'Ametal', 'Semimetal', 'Gás nobre'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Na (Sódio) e K (Potássio) estão na mesma:',
                                alternativas: ['Período', 'Família', 'Camada', 'Valência diferente'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Um elemento do 3º período tem quantas camadas eletrônicas?',
                                alternativas: ['1', '2', '3', '4'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                },
                {
                    id: 9,
                    materia: 'biologia',
                    bimestre: 1,
                    titulo: 'CÉLULAS',
                    descricao: 'A unidade básica da vida',
                    resumo: `# Células - A Unidade da Vida

## O que é uma Célula?

A célula é a **menor unidade viva** dos seres vivos. Todo ser vivo é formado por células.

## Teoria Celular

1. Todos os seres vivos são formados por células
2. A célula é a unidade básica da vida
3. Toda célula vem de outra célula preexistente

## Tipos de Células

### Células Procariontes
- **Mais simples**
- SEM núcleo definido (material genético disperso)
- Exemplo: Bactérias

### Células Eucariontes
- **Mais complexas**
- COM núcleo definido (envolvido por membrana)
- Exemplos: Animais, plantas, fungos

## Partes da Célula Eucarionte

### 1. Membrana Plasmática
- Envolve a célula
- Controla entrada e saída de substâncias
- Permeabilidade seletiva

### 2. Citoplasma
- Região entre membrana e núcleo
- Contém as organelas
- Líquido gelatinoso

### 3. Núcleo
- Contém o DNA (material genético)
- Controla as atividades celulares
- Envolvido pela carioteca (membrana nuclear)

## Principais Organelas

### Mitocôndria
- **Respiração celular**
- Produz energia (ATP)
- "Usina de energia"

### Ribossomos
- **Síntese de proteínas**
- Produção de proteínas

### Retículo Endoplasmático
- Transporte de substâncias
- RE liso e RE rugoso (com ribossomos)

### Complexo de Golgi
- Empacotamento e secreção
- "Correios da célula"

### Lisossomos
- Digestão intracelular
- Contém enzimas digestivas

### Centríolos
- Participam da divisão celular

## Diferenças: Célula Animal × Vegetal

### Exclusivas da Célula Vegetal:
- **Parede celular** (celulose) - proteção
- **Cloroplastos** - fotossíntese
- **Vacúolo grande** - armazenamento

### Exclusivas da Célula Animal:
- **Centríolos** - divisão celular`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Qual a menor unidade viva dos seres vivos?',
                                alternativas: ['Tecido', 'Órgão', 'Célula', 'Sistema'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Células que NÃO possuem núcleo definido são:',
                                alternativas: ['Eucariontes', 'Procariontes', 'Vegetais', 'Animais'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Bactérias são células:',
                                alternativas: ['Eucariontes', 'Procariontes', 'Vegetais', 'Animais'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual organela é chamada de "usina de energia"?',
                                alternativas: ['Núcleo', 'Mitocôndria', 'Ribossomo', 'Lisossomo'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'A membrana plasmática:',
                                alternativas: ['Contém o DNA', 'Produz energia', 'Controla entrada e saída de substâncias', 'Sintetiza proteínas'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual organela realiza a fotossíntese?',
                                alternativas: ['Mitocôndria', 'Cloroplasto', 'Ribossomo', 'Núcleo'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Ribossomos são responsáveis por:',
                                alternativas: ['Respiração celular', 'Síntese de proteínas', 'Fotossíntese', 'Divisão celular'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'O material genético (DNA) fica localizado no:',
                                alternativas: ['Citoplasma', 'Membrana', 'Núcleo', 'Ribossomo'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual estrutura EXISTE em células vegetais e NÃO em animais?',
                                alternativas: ['Núcleo', 'Mitocôndria', 'Parede celular', 'Membrana plasmática'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Lisossomos contêm:',
                                alternativas: ['DNA', 'Enzimas digestivas', 'Clorofila', 'Ribossomos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'O Complexo de Golgi é responsável por:',
                                alternativas: ['Respiração', 'Fotossíntese', 'Empacotamento e secreção', 'Divisão celular'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Centríolos participam de qual processo?',
                                alternativas: ['Respiração', 'Fotossíntese', 'Digestão', 'Divisão celular'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual característica NÃO pertence a células eucariontes?',
                                alternativas: ['Núcleo definido', 'Mitocôndrias', 'DNA disperso no citoplasma', 'Organelas membranosas'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'A parede celular das plantas é composta principalmente de:',
                                alternativas: ['Proteína', 'Celulose', 'DNA', 'Lipídios'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual NÃO é um princípio da Teoria Celular?',
                                alternativas: ['Todos os seres vivos são formados por células', 'A célula é a unidade básica da vida', 'Células surgem espontaneamente', 'Toda célula vem de outra célula'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                },
                {
                    id: 10,
                    materia: 'ingles',
                    bimestre: 1,
                    titulo: 'SIMPLE PRESENT',
                    descricao: 'Presente simples em inglês',
                    resumo: `# Simple Present

## O que é?

Tempo verbal usado para expressar **ações habituais, verdades universais e fatos**.

## Estrutura

### Afirmativa
**Sujeito + Verbo (base)**

- I play (Eu jogo)
- You play (Você joga)
- We play (Nós jogamos)
- They play (Eles jogam)

**3ª pessoa singular (He/She/It) → Verbo + S/ES**

- He play**s** (Ele joga)
- She work**s** (Ela trabalha)
- It rain**s** (Chove)

### Negativa
**Sujeito + DO/DOES + NOT + Verbo (base)**

- I **do not** (don't) play
- You **do not** (don't) play
- He/She/It **does not** (doesn't) play
- We **do not** (don't) play
- They **do not** (don't) play

### Interrogativa
**DO/DOES + Sujeito + Verbo (base)?**

- **Do** I play?
- **Do** you play?
- **Does** he/she/it play?
- **Do** we play?
- **Do** they play?

## Regras do S/ES (3ª pessoa)

### Adicionar S
- work → work**s**
- play → play**s**
- eat → eat**s**

### Adicionar ES
Verbos terminados em: **-s, -sh, -ch, -x, -o, -z**
- watch → watch**es**
- go → go**es**
- fix → fix**es**
- wash → wash**es**

### Y → IES
Verbos terminados em consoante + Y
- study → stud**ies**
- fly → fl**ies**

## Usos do Simple Present

1. **Ações habituais/rotinas**
   - I wake up at 7 AM. (Eu acordo às 7h)
   - She studies English every day. (Ela estuda inglês todo dia)

2. **Verdades universais**
   - The sun rises in the east. (O sol nasce no leste)
   - Water boils at 100°C. (A água ferve a 100°C)

3. **Fatos**
   - He lives in Brazil. (Ele mora no Brasil)
   - They speak Portuguese. (Eles falam português)

## Advérbios de Frequência

Indicam com que frequência fazemos algo:
- **Always** (sempre)
- **Usually** (geralmente)
- **Often** (frequentemente)
- **Sometimes** (às vezes)
- **Rarely** (raramente)
- **Never** (nunca)

Posição: geralmente ANTES do verbo principal
- I **always** wake up early.
- She **never** eats meat.

## Exemplos

✅ I **work** every day.
✅ He **works** every day.
✅ She **doesn't** like coffee.
✅ **Does** he play soccer?
✅ They **don't** live here.`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Qual a forma correta de "play" na 3ª pessoa do singular?',
                                alternativas: ['play', 'plays', 'playes', 'playing'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Complete: She _____ English.',
                                alternativas: ['speak', 'speaks', 'speaking', 'speakes'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual o auxiliar usado na negativa com "he"?',
                                alternativas: ['do not', 'does not', 'did not', 'is not'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Complete: I _____ like pizza. (negativa)',
                                alternativas: ['not', 'doesn\'t', 'don\'t', 'am not'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual palavra significa "sempre"?',
                                alternativas: ['Never', 'Sometimes', 'Always', 'Rarely'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Complete: He _____ to school every day.',
                                alternativas: ['go', 'goes', 'going', 'gos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Qual frase está CORRETA?',
                                alternativas: ['She don\'t like tea', 'She doesn\'t likes tea', 'She doesn\'t like tea', 'She not like tea'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Complete: _____ you speak English?',
                                alternativas: ['Do', 'Does', 'Are', 'Is'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'O verbo "study" na 3ª pessoa fica:',
                                alternativas: ['studys', 'studies', 'studyes', 'studie'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Complete: They _____ in New York. (morar)',
                                alternativas: ['lives', 'live', 'living', 'lifes'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual frase está na interrogativa CORRETA?',
                                alternativas: ['Does she plays soccer?', 'Do she play soccer?', 'Does she play soccer?', 'Do she plays soccer?'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'O verbo "watch" na 3ª pessoa fica:',
                                alternativas: ['watchs', 'watches', 'watchies', 'watch'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Complete: He _____ (not/work) on Sundays.',
                                alternativas: ['don\'t work', 'doesn\'t works', 'doesn\'t work', 'not work'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Onde geralmente colocamos advérbios de frequência?',
                                alternativas: ['No final da frase', 'Antes do verbo principal', 'Depois do verbo principal', 'No início da frase sempre'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual frase usa Simple Present para verdade universal?',
                                alternativas: ['I am eating', 'She played yesterday', 'The Earth orbits the Sun', 'They will travel'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                },
                // Módulos adicionais para 8º ano
                {
                    id: 6,
                    materia: 'matematica',
                    bimestre: 1,
                    schoolYear: '8',
                    titulo: 'POTENCIAÇÃO E RADICIAÇÃO',
                    descricao: 'Aprenda sobre potências e raízes',
                    resumo: `# Potenciação e Radiciação

## Potenciação

A potenciação é uma multiplicação repetida do mesmo número.

**Notação:** aⁿ = a × a × a × ... (n vezes)

- **a** = base
- **n** = expoente
- **aⁿ** = potência

### Exemplos:
- 2³ = 2 × 2 × 2 = 8
- 5² = 5 × 5 = 25
- 10⁴ = 10 × 10 × 10 × 10 = 10.000

### Propriedades Importantes:

1. **Multiplicação de potências de mesma base:**
   aᵐ × aⁿ = aᵐ⁺ⁿ
   Exemplo: 2³ × 2² = 2⁵ = 32

2. **Divisão de potências de mesma base:**
   aᵐ ÷ aⁿ = aᵐ⁻ⁿ
   Exemplo: 5⁴ ÷ 5² = 5² = 25

3. **Potência de potência:**
   (aᵐ)ⁿ = aᵐˣⁿ
   Exemplo: (3²)³ = 3⁶ = 729

4. **Expoente zero:**
   a⁰ = 1 (para a ≠ 0)

5. **Expoente negativo:**
   a⁻ⁿ = 1/aⁿ
   Exemplo: 2⁻³ = 1/2³ = 1/8

## Radiciação

A radiciação é a operação inversa da potenciação.

**Notação:** ⁿ√a = b (b é a raiz n-ésima de a)

- **n** = índice da raiz
- **a** = radicando
- **b** = raiz

### Exemplos:
- √25 = 5 (porque 5² = 25)
- ³√8 = 2 (porque 2³ = 8)
- ⁴√16 = 2 (porque 2⁴ = 16)

### Propriedades:

1. **Raiz de um produto:**
   ⁿ√(a × b) = ⁿ√a × ⁿ√b

2. **Raiz de um quociente:**
   ⁿ√(a ÷ b) = ⁿ√a ÷ ⁿ√b

3. **Raiz de raiz:**
   ᵐ√(ⁿ√a) = ᵐˣⁿ√a

## Exercícios de Fixação
1. Calcule: 3⁴
2. Calcule: 2⁵ × 2³
3. Calcule: √144
4. Calcule: ³√27

## Respostas
1. 81
2. 2⁸ = 256
3. 12
4. 3`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Quanto é 2⁴?',
                                alternativas: ['8', '12', '16', '24'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 1,
                                enunciado: 'Quanto é 5²?',
                                alternativas: ['10', '15', '20', '25'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 1,
                                enunciado: 'Quanto é √36?',
                                alternativas: ['4', '6', '8', '9'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Quanto é 10³?',
                                alternativas: ['30', '100', '300', '1000'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 1,
                                enunciado: 'Quanto é 3⁰?',
                                alternativas: ['0', '1', '3', '9'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Calcule: 2³ × 2²',
                                alternativas: ['2⁵', '2⁶', '4⁵', '4⁶'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Calcule: 5⁴ ÷ 5²',
                                alternativas: ['5²', '5⁶', '25²', '25⁶'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 2,
                                enunciado: 'Quanto é ³√64?',
                                alternativas: ['2', '4', '6', '8'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Calcule: (2²)³',
                                alternativas: ['2⁵', '2⁶', '4⁶', '8⁶'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Quanto é √100?',
                                alternativas: ['5', '10', '20', '50'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Calcule: 2⁻³',
                                alternativas: ['-6', '-8', '1/6', '1/8'],
                                respostaCorreta: 3
                            },
                            {
                                peso: 3,
                                enunciado: 'Calcule: (3²)² ÷ 3³',
                                alternativas: ['3', '9', '27', '81'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Simplifique: ⁴√16',
                                alternativas: ['2', '4', '8', '16'],
                                respostaCorreta: 0
                            },
                            {
                                peso: 3,
                                enunciado: 'Calcule: √(64 × 36)',
                                alternativas: ['24', '36', '48', '100'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Quanto é (10²)³?',
                                alternativas: ['10⁵', '10⁶', '100⁶', '1000⁶'],
                                respostaCorreta: 1
                            }
                        ]
                    }
                },
                {
                    id: 7,
                    materia: 'portugues',
                    bimestre: 1,
                    schoolYear: '9',
                    titulo: 'ORAÇÕES SUBORDINADAS',
                    descricao: 'Entenda orações subordinadas e suas classificações',
                    resumo: `# Orações Subordinadas

## O que são?

Orações subordinadas são aquelas que dependem de uma oração principal para ter sentido completo.

## Tipos de Orações Subordinadas

### 1. Orações Subordinadas Substantivas

Funcionam como substantivo na frase.

**Tipos:**

- **Subjetiva**: funciona como sujeito
  - É importante **que você estude**.

- **Objetiva Direta**: funciona como objeto direto
  - Espero **que você venha**.

- **Objetiva Indireta**: funciona como objeto indireto
  - Necessito **de que me ajude**.

- **Completiva Nominal**: complementa um nome
  - Tenho certeza **de que vai dar certo**.

- **Predicativa**: funciona como predicativo
  - O problema é **que não temos tempo**.

- **Apositiva**: funciona como aposto
  - Só quero uma coisa: **que seja feliz**.

### 2. Orações Subordinadas Adjetivas

Funcionam como adjetivo, caracterizando um substantivo.

**Tipos:**

- **Restritiva**: restringe o sentido (sem vírgula)
  - Os alunos **que estudam** passam.

- **Explicativa**: explica (com vírgula)
  - Os alunos, **que estudam**, passam.

### 3. Orações Subordinadas Adverbiais

Funcionam como advérbio, indicando circunstância.

**Tipos:**

- **Causal**: indica causa (porque, pois, como)
  - Fiquei feliz **porque passei**.

- **Consecutiva**: indica consequência (que, tanto que)
  - Estudei tanto **que passei**.

- **Condicional**: indica condição (se, caso)
  - **Se estudar**, passará.

- **Temporal**: indica tempo (quando, enquanto)
  - **Quando chegou**, todos saíram.

- **Final**: indica finalidade (para que, a fim de que)
  - Estudo **para que passe**.

- **Comparativa**: indica comparação (como, mais que)
  - Ele é alto **como o pai**.

- **Conformativa**: indica conformidade (conforme, segundo)
  - Fiz **conforme você pediu**.

- **Concessiva**: indica concessão (embora, ainda que)
  - **Embora estudasse**, não passou.

- **Proporcional**: indica proporção (à medida que)
  - **À medida que cresce**, amadurece.

## Exercícios de Fixação
1. Identifique o tipo: "Espero que você entenda."
2. Identifique: "O livro que comprei é bom."
3. Identifique: "Estudei porque queria passar."

## Respostas
1. Subordinada substantiva objetiva direta
2. Subordinada adjetiva restritiva
3. Subordinada adverbial causal`,
                    simulado: {
                        questoes: [
                            {
                                peso: 1,
                                enunciado: 'Orações subordinadas dependem de:',
                                alternativas: ['Nada', 'Oração principal', 'Sujeito apenas', 'Predicado apenas'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Quantos tipos principais de orações subordinadas existem?',
                                alternativas: ['2', '3', '4', '5'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Em "Espero que você venha", a oração subordinada é:',
                                alternativas: ['Adjetiva', 'Substantiva', 'Adverbial', 'Coordenada'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Orações adjetivas funcionam como:',
                                alternativas: ['Substantivo', 'Adjetivo', 'Advérbio', 'Verbo'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 1,
                                enunciado: 'Qual conjunção introduz oração causal?',
                                alternativas: ['se', 'porque', 'quando', 'para que'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Em "Estudei tanto que passei", temos oração:',
                                alternativas: ['Causal', 'Final', 'Consecutiva', 'Condicional'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Classifique: "É importante que você estude."',
                                alternativas: ['Objetiva direta', 'Subjetiva', 'Predicativa', 'Apositiva'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Em "Se estudar, passará", temos oração:',
                                alternativas: ['Temporal', 'Causal', 'Condicional', 'Final'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 2,
                                enunciado: 'Orações adjetivas restritivas usam:',
                                alternativas: ['Vírgula sempre', 'Nunca vírgula', 'Ponto e vírgula', 'Dois pontos'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 2,
                                enunciado: 'Em "Embora estudasse, não passou", temos oração:',
                                alternativas: ['Causal', 'Concessiva', 'Consecutiva', 'Condicional'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Classifique: "Tenho certeza de que vai dar certo."',
                                alternativas: ['Objetiva direta', 'Objetiva indireta', 'Completiva nominal', 'Subjetiva'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Em "Os alunos, que estudam, passam", a oração é:',
                                alternativas: ['Adjetiva restritiva', 'Adjetiva explicativa', 'Substantiva', 'Adverbial'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Qual oração indica finalidade?',
                                alternativas: ['Causal', 'Consecutiva', 'Final', 'Temporal'],
                                respostaCorreta: 2
                            },
                            {
                                peso: 3,
                                enunciado: 'Em "Quando chegou, todos saíram", temos oração:',
                                alternativas: ['Causal', 'Temporal', 'Condicional', 'Consecutiva'],
                                respostaCorreta: 1
                            },
                            {
                                peso: 3,
                                enunciado: 'Classifique: "O problema é que não temos tempo."',
                                alternativas: ['Subjetiva', 'Objetiva direta', 'Predicativa', 'Completiva nominal'],
                                respostaCorreta: 2
                            }
                        ]
                    }
                }
            ],
            videoaulas: [
                {
                    id: 1,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'Introdução à Fatoração',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    duracao: '15:30'
                },
                {
                    id: 2,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'Fatoração - Exercícios Resolvidos',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    duracao: '22:45'
                }
            ],
            resumos: [],
            simulados: [],
            unlockedMaterias: {
                1: ['portugues', 'matematica', 'geografia', 'biologia'],
                2: ['portugues', 'matematica', 'geografia', 'biologia'],
                3: ['portugues', 'matematica', 'geografia', 'biologia'],
                4: ['portugues', 'matematica', 'geografia', 'biologia']
            },
            unlockedBimestres: [1, 2, 3, 4] // Todos os bimestres desbloqueados
        };
        localStorage.setItem('plantaoaluno_content', JSON.stringify(defaultContent));
    },

    // USERS
    getUsers() {
        return JSON.parse(localStorage.getItem('plantaoaluno_users') || '[]');
    },

    getUserByEmail(email) {
        const users = this.getUsers();
        return users.find(u => u.email === email);
    },

    createUser(userData) {
        const users = this.getUsers();
        const newUser = {
            id: Date.now(),
            ...userData,
            plan: 'gratis',
            createdAt: new Date().toISOString(),
            isAdmin: false
        };
        users.push(newUser);
        localStorage.setItem('plantaoaluno_users', JSON.stringify(users));
        return newUser;
    },

    updateUser(userId, updates) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            localStorage.setItem('plantaoaluno_users', JSON.stringify(users));
            return users[index];
        }
        return null;
    },

    deleteUser(userId) {
        const users = this.getUsers();
        const filtered = users.filter(u => u.id !== userId);
        localStorage.setItem('plantaoaluno_users', JSON.stringify(filtered));
    },

    // CONTENT
    getContent() {
        return JSON.parse(localStorage.getItem('plantaoaluno_content'));
    },

    getResumos(materia, bimestre) {
        const content = this.getContent();
        return content.resumos.filter(r => r.materia === materia && r.bimestre === bimestre);
    },

    getVideoaulas(materia, bimestre) {
        const content = this.getContent();
        return content.videoaulas.filter(v => v.materia === materia && v.bimestre === bimestre);
    },

    getSimulados(materia, bimestre) {
        const content = this.getContent();
        return content.simulados.filter(s => s.materia === materia && s.bimestre === bimestre);
    },

    addResumo(resumoData) {
        const content = this.getContent();
        const newResumo = {
            id: Date.now(),
            ...resumoData
        };
        content.resumos.push(newResumo);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        return newResumo;
    },

    addVideoaula(videoData) {
        const content = this.getContent();
        const newVideo = {
            id: Date.now(),
            ...videoData
        };
        content.videoaulas.push(newVideo);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        return newVideo;
    },

    addSimulado(simuladoData) {
        const content = this.getContent();
        const newSimulado = {
            id: Date.now(),
            ...simuladoData
        };
        content.simulados.push(newSimulado);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        return newSimulado;
    },

    unlockMateria(materia, bimestre) {
        const content = this.getContent();
        if (!content.unlockedMaterias[bimestre].includes(materia)) {
            content.unlockedMaterias[bimestre].push(materia);
            localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        }
    },

    unlockBimestre(bimestre) {
        const content = this.getContent();
        if (!content.unlockedBimestres.includes(bimestre)) {
            content.unlockedBimestres.push(bimestre);
            localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        }
    },

    lockMateria(materia, bimestre) {
        const content = this.getContent();
        const index = content.unlockedMaterias[bimestre].indexOf(materia);
        if (index > -1) {
            content.unlockedMaterias[bimestre].splice(index, 1);
            localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        }
    },

    lockBimestre(bimestre) {
        const content = this.getContent();
        const index = content.unlockedBimestres.indexOf(bimestre);
        if (index > -1) {
            content.unlockedBimestres.splice(index, 1);
            localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        }
    },

    deleteResumo(resumoId) {
        const content = this.getContent();
        content.resumos = content.resumos.filter(r => r.id !== resumoId);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
    },

    deleteVideoaula(videoId) {
        const content = this.getContent();
        content.videoaulas = content.videoaulas.filter(v => v.id !== videoId);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
    },

    deleteSimulado(simuladoId) {
        const content = this.getContent();
        content.simulados = content.simulados.filter(s => s.id !== simuladoId);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
    },

    // MODULOS
    getModulos(materia, bimestre) {
        const content = this.getContent();
        const currentUser = this.getCurrentUser();
        if (!content.modulos) return [];

        // Filtrar por matéria, bimestre e ano escolar do usuário
        return content.modulos.filter(m => {
            const matchesMateriaBimestre = m.materia === materia && m.bimestre === bimestre;
            const matchesSchoolYear = !m.schoolYear || m.schoolYear === currentUser.schoolYear;
            return matchesMateriaBimestre && matchesSchoolYear;
        });
    },

    getAllModulos() {
        const content = this.getContent();
        return content.modulos || [];
    },

    addModulo(moduloData) {
        const content = this.getContent();
        if (!content.modulos) content.modulos = [];
        const newModulo = {
            id: Date.now(),
            ...moduloData
        };
        content.modulos.push(newModulo);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
        return newModulo;
    },

    updateModulo(moduloId, updates) {
        const content = this.getContent();
        if (!content.modulos) return null;
        const index = content.modulos.findIndex(m => m.id === moduloId);
        if (index !== -1) {
            content.modulos[index] = { ...content.modulos[index], ...updates };
            localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
            return content.modulos[index];
        }
        return null;
    },

    deleteModulo(moduloId) {
        const content = this.getContent();
        if (!content.modulos) return;
        content.modulos = content.modulos.filter(m => m.id !== moduloId);
        localStorage.setItem('plantaoaluno_content', JSON.stringify(content));
    },

    // RESULTS
    getResults() {
        return JSON.parse(localStorage.getItem('plantaoaluno_results') || '[]');
    },

    getUserResults(userId) {
        const results = this.getResults();
        return results.filter(r => r.userId === userId);
    },

    saveResult(resultData) {
        const results = this.getResults();
        const newResult = {
            id: Date.now(),
            ...resultData,
            date: new Date().toISOString()
        };
        results.push(newResult);
        localStorage.setItem('plantaoaluno_results', JSON.stringify(results));
        return newResult;
    },

    // AUTH
    login(email, password) {
        const user = this.getUserByEmail(email);
        if (user && user.password === password) {
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(user));
            return user;
        }
        return null;
    },

    logout() {
        localStorage.removeItem('plantaoaluno_currentUser');
    },

    getCurrentUser() {
        const userStr = localStorage.getItem('plantaoaluno_currentUser');
        return userStr ? JSON.parse(userStr) : null;
    },

    updateCurrentUser(updates) {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
            const updatedUser = this.updateUser(currentUser.id, updates);
            localStorage.setItem('plantaoaluno_currentUser', JSON.stringify(updatedUser));
            return updatedUser;
        }
        return null;
    }
};

// Inicializar database
DB.init();

// Criar usuário admin padrão se não existir
if (!DB.getUserByEmail('admin@plantaoaluno.com')) {
    DB.createUser({
        name: 'Administrador',
        email: 'admin@plantaoaluno.com',
        password: 'admin123',
        schoolYear: '9',
        isAdmin: true,
        plan: 'premium'
    });
}
