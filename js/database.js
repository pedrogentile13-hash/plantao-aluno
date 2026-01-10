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
                {
                    id: 1,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'FATORAÇÃO',
                    descricao: 'Tipos de Fatoração e Exemplos',
                    resumo: `# Fatoração

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
                1: ['matematica'], // Bimestre 1 - apenas Matemática desbloqueada
                2: [],
                3: [],
                4: []
            },
            unlockedBimestres: [1] // Apenas 1º bimestre desbloqueado
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
        if (!content.modulos) return [];
        return content.modulos.filter(m => m.materia === materia && m.bimestre === bimestre);
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
