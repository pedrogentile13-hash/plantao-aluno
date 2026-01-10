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
            resumos: [
                {
                    id: 1,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'Fatoração',
                    conteudo: `# Fatoração

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
3. (x + 3)²`
                },
                {
                    id: 2,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'Equação de Segundo Grau',
                    conteudo: `# Equação de Segundo Grau

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
3. x = 3 (raiz dupla)`
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
            simulados: [
                {
                    id: 1,
                    materia: 'matematica',
                    bimestre: 1,
                    titulo: 'Simulado de Fatoração',
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
            ],
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
