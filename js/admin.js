let questionCount = 0;

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initAdmin();
});

function initAdmin() {
    const currentUser = DB.getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    if (!currentUser.isAdmin) {
        alert('Acesso negado! Apenas administradores podem acessar esta página.');
        window.location.href = 'dashboard.html';
        return;
    }

    document.getElementById('userName').textContent = currentUser.name;

    // Calcular estatísticas gerais
    updateGeneralStats();

    // Inicializar tabs
    initTabs();

    // Carregar dados iniciais
    loadUsers();
    loadSubscriptions();
    loadResults();
    loadContentLists();
    loadModulos();

    // Inicializar formulários
    initForms();
}

function updateGeneralStats() {
    const users = DB.getUsers();
    const results = DB.getResults();

    document.getElementById('totalStudents').textContent = users.filter(u => !u.isAdmin).length;

    const activeSubscriptions = users.filter(u => u.plan !== 'gratis' && !u.isAdmin).length;
    document.getElementById('activeSubscriptions').textContent = activeSubscriptions;

    if (results.length > 0) {
        const grades = results.map(r => r.nota);
        const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1);
        document.getElementById('generalAverage').textContent = average;
    } else {
        document.getElementById('generalAverage').textContent = '-';
    }

    document.getElementById('totalSimulados').textContent = results.length;
}

function initTabs() {
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Atualizar tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Atualizar conteúdo
            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
}

function loadUsers() {
    const users = DB.getUsers().filter(u => !u.isAdmin);
    const table = document.getElementById('usersTable');

    if (users.length === 0) {
        table.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum aluno cadastrado</p>';
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ano</th>
                    <th>Plano</th>
                    <th>Cadastro</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
    `;

    users.forEach(user => {
        html += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.schoolYear}º ano</td>
                <td>${getPlanName(user.plan)}</td>
                <td>${new Date(user.createdAt).toLocaleDateString('pt-BR')}</td>
                <td>
                    <button class="btn btn-outline" onclick="changePlan(${user.id})">Mudar Plano</button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    table.innerHTML = html;
}

function loadSubscriptions() {
    const users = DB.getUsers().filter(u => !u.isAdmin && u.plan !== 'gratis');
    const table = document.getElementById('subscriptionsTable');

    if (users.length === 0) {
        table.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhuma assinatura ativa</p>';
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Aluno</th>
                    <th>Email</th>
                    <th>Plano</th>
                    <th>Desde</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
    `;

    users.forEach(user => {
        const valor = user.plan === 'basico' ? 'R$ 22,90/mês' : 'R$ 34,90/mês';
        html += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${getPlanName(user.plan)}</td>
                <td>${new Date(user.createdAt).toLocaleDateString('pt-BR')}</td>
                <td>${valor}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    table.innerHTML = html;
}

function loadResults() {
    const results = DB.getResults();
    const table = document.getElementById('resultsTable');

    if (results.length === 0) {
        table.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum resultado registrado</p>';
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Aluno</th>
                    <th>Matéria</th>
                    <th>Bimestre</th>
                    <th>Nota</th>
                    <th>Acertos</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Ordenar por data (mais recente primeiro)
    results.sort((a, b) => new Date(b.date) - new Date(a.date));

    results.forEach(result => {
        const user = DB.getUsers().find(u => u.id === result.userId);
        const userName = user ? user.name : 'Usuário desconhecido';

        html += `
            <tr>
                <td>${new Date(result.date).toLocaleDateString('pt-BR')}</td>
                <td>${userName}</td>
                <td>${getMateriaName(result.materia)}</td>
                <td>${result.bimestre}º</td>
                <td><strong>${result.nota.toFixed(1)}</strong></td>
                <td>${result.acertos}/${result.totalQuestoes}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    table.innerHTML = html;
}

function changePlan(userId) {
    const user = DB.getUsers().find(u => u.id === userId);
    if (!user) return;

    const plans = ['gratis', 'basico', 'premium'];
    const planNames = ['Grátis', 'Básico', 'Premium'];

    const choice = prompt(`Escolha o novo plano para ${user.name}:\n\n1 - Grátis\n2 - Básico\n3 - Premium\n\nDigite o número:`);

    if (choice && choice >= 1 && choice <= 3) {
        const newPlan = plans[choice - 1];
        DB.updateUser(userId, { plan: newPlan });
        alert(`Plano alterado para ${planNames[choice - 1]}!`);
        loadUsers();
        updateGeneralStats();
    }
}

function initForms() {
    // Formulário de Resumo
    document.getElementById('addResumoForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const resumo = {
            materia: document.getElementById('resumoMateria').value,
            bimestre: parseInt(document.getElementById('resumoBimestre').value),
            titulo: document.getElementById('resumoTitulo').value,
            conteudo: document.getElementById('resumoConteudo').value
        };

        DB.addResumo(resumo);
        alert('Resumo adicionado com sucesso!');
        e.target.reset();
    });

    // Formulário de Videoaula
    document.getElementById('addVideoForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const video = {
            materia: document.getElementById('videoMateria').value,
            bimestre: parseInt(document.getElementById('videoBimestre').value),
            titulo: document.getElementById('videoTitulo').value,
            url: document.getElementById('videoUrl').value,
            duracao: document.getElementById('videoDuracao').value
        };

        DB.addVideoaula(video);
        alert('Videoaula adicionada com sucesso!');
        e.target.reset();
    });

    // Formulário de Simulado
    document.getElementById('addSimuladoForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const questoes = [];
        const container = document.getElementById('questionsContainer');
        const questaoCards = container.querySelectorAll('.questao-form-card');

        if (questaoCards.length !== 15) {
            alert('É necessário adicionar exatamente 15 questões!\n(5 fáceis, 5 médias, 5 difíceis)');
            return;
        }

        questaoCards.forEach(card => {
            const questao = {
                peso: parseInt(card.querySelector('[name^="peso"]').value),
                enunciado: card.querySelector('[name^="enunciado"]').value,
                alternativas: [
                    card.querySelector('[name^="alt1"]').value,
                    card.querySelector('[name^="alt2"]').value,
                    card.querySelector('[name^="alt3"]').value,
                    card.querySelector('[name^="alt4"]').value
                ],
                respostaCorreta: parseInt(card.querySelector('[name^="correta"]').value)
            };
            questoes.push(questao);
        });

        // Verificar se tem 5 de cada peso
        const pesos = questoes.map(q => q.peso);
        const faceis = pesos.filter(p => p === 1).length;
        const medias = pesos.filter(p => p === 2).length;
        const dificeis = pesos.filter(p => p === 3).length;

        if (faceis !== 5 || medias !== 5 || dificeis !== 5) {
            alert('Distribuição incorreta!\nÉ necessário:\n- 5 questões fáceis (peso 1)\n- 5 questões médias (peso 2)\n- 5 questões difíceis (peso 3)');
            return;
        }

        const simulado = {
            materia: document.getElementById('simuladoMateria').value,
            bimestre: parseInt(document.getElementById('simuladoBimestre').value),
            titulo: document.getElementById('simuladoTitulo').value,
            questoes: questoes
        };

        DB.addSimulado(simulado);
        alert('Simulado criado com sucesso!');
        e.target.reset();
        document.getElementById('questionsContainer').innerHTML = '<h4>Questões (15 no total: 5 fáceis, 5 médias, 5 difíceis)</h4><p class="form-hint">As questões serão adicionadas dinamicamente</p>';
        questionCount = 0;
    });
}

function addQuestion() {
    questionCount++;
    const container = document.getElementById('questionsContainer');

    const questionCard = document.createElement('div');
    questionCard.className = 'questao-form-card';
    questionCard.innerHTML = `
        <div class="questao-form-header">
            <h5>Questão ${questionCount}</h5>
            <button type="button" class="btn btn-danger" onclick="removeQuestion(this)">Remover</button>
        </div>
        <div class="form-group">
            <label>Dificuldade</label>
            <select name="peso${questionCount}" required>
                <option value="1">Fácil (1 ponto)</option>
                <option value="2">Médio (2 pontos)</option>
                <option value="3">Difícil (3 pontos)</option>
            </select>
        </div>
        <div class="form-group">
            <label>Enunciado</label>
            <textarea name="enunciado${questionCount}" rows="3" required></textarea>
        </div>
        <div class="form-group">
            <label>Alternativa A</label>
            <input type="text" name="alt1${questionCount}" required>
        </div>
        <div class="form-group">
            <label>Alternativa B</label>
            <input type="text" name="alt2${questionCount}" required>
        </div>
        <div class="form-group">
            <label>Alternativa C</label>
            <input type="text" name="alt3${questionCount}" required>
        </div>
        <div class="form-group">
            <label>Alternativa D</label>
            <input type="text" name="alt4${questionCount}" required>
        </div>
        <div class="form-group">
            <label>Resposta Correta</label>
            <select name="correta${questionCount}" required>
                <option value="0">A</option>
                <option value="1">B</option>
                <option value="2">C</option>
                <option value="3">D</option>
            </select>
        </div>
    `;

    container.appendChild(questionCard);
}

function removeQuestion(button) {
    button.closest('.questao-form-card').remove();
    questionCount--;
}

function unlockBimestre() {
    const bimestre = parseInt(document.getElementById('manageBimestre').value);
    DB.unlockBimestre(bimestre);
    alert(`✅ ${bimestre}º Bimestre desbloqueado!`);
}

function lockBimestre() {
    const bimestre = parseInt(document.getElementById('manageBimestre').value);
    if (confirm(`Bloquear o ${bimestre}º Bimestre?\n\nOs alunos não terão mais acesso a este bimestre.`)) {
        DB.lockBimestre(bimestre);
        alert(`🔒 ${bimestre}º Bimestre bloqueado!`);
    }
}

function unlockMateria() {
    const materia = document.getElementById('manageMateria').value;
    const bimestre = parseInt(document.getElementById('manageMateriaBimestre').value);
    DB.unlockMateria(materia, bimestre);
    alert(`✅ ${getMateriaName(materia)} desbloqueada no ${bimestre}º Bimestre!`);
}

function lockMateria() {
    const materia = document.getElementById('manageMateria').value;
    const bimestre = parseInt(document.getElementById('manageMateriaBimestre').value);
    if (confirm(`Bloquear ${getMateriaName(materia)} no ${bimestre}º Bimestre?\n\nOs alunos não terão mais acesso a esta matéria.`)) {
        DB.lockMateria(materia, bimestre);
        alert(`🔒 ${getMateriaName(materia)} bloqueada no ${bimestre}º Bimestre!`);
    }
}

function loadContentLists() {
    const content = DB.getContent();

    // Listar Resumos
    let resumosHTML = '';
    if (content.resumos.length === 0) {
        resumosHTML = '<p style="color: var(--text-secondary);">Nenhum resumo cadastrado</p>';
    } else {
        resumosHTML = '<ul style="list-style: none; padding: 0;">';
        content.resumos.forEach(resumo => {
            resumosHTML += `
                <li style="padding: 10px; margin-bottom: 8px; background: var(--light-bg); border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${resumo.titulo}</strong><br>
                        <small>${getMateriaName(resumo.materia)} - ${resumo.bimestre}º Bimestre</small>
                    </div>
                    <button class="btn btn-small btn-danger" onclick="deleteResumo(${resumo.id})">🗑️</button>
                </li>
            `;
        });
        resumosHTML += '</ul>';
    }
    document.getElementById('resumosList').innerHTML = resumosHTML;

    // Listar Videoaulas
    let videosHTML = '';
    if (content.videoaulas.length === 0) {
        videosHTML = '<p style="color: var(--text-secondary);">Nenhuma videoaula cadastrada</p>';
    } else {
        videosHTML = '<ul style="list-style: none; padding: 0;">';
        content.videoaulas.forEach(video => {
            videosHTML += `
                <li style="padding: 10px; margin-bottom: 8px; background: var(--light-bg); border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${video.titulo}</strong><br>
                        <small>${getMateriaName(video.materia)} - ${video.bimestre}º Bimestre - ${video.duracao}</small>
                    </div>
                    <button class="btn btn-small btn-danger" onclick="deleteVideoaula(${video.id})">🗑️</button>
                </li>
            `;
        });
        videosHTML += '</ul>';
    }
    document.getElementById('videoaulasList').innerHTML = videosHTML;

    // Listar Simulados
    let simuladosHTML = '';
    if (content.simulados.length === 0) {
        simuladosHTML = '<p style="color: var(--text-secondary);">Nenhum simulado cadastrado</p>';
    } else {
        simuladosHTML = '<ul style="list-style: none; padding: 0;">';
        content.simulados.forEach(simulado => {
            simuladosHTML += `
                <li style="padding: 10px; margin-bottom: 8px; background: var(--light-bg); border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${simulado.titulo}</strong><br>
                        <small>${getMateriaName(simulado.materia)} - ${simulado.bimestre}º Bimestre - ${simulado.questoes.length} questões</small>
                    </div>
                    <button class="btn btn-small btn-danger" onclick="deleteSimulado(${simulado.id})">🗑️</button>
                </li>
            `;
        });
        simuladosHTML += '</ul>';
    }
    document.getElementById('simuladosList').innerHTML = simuladosHTML;
}

function deleteResumo(resumoId) {
    const content = DB.getContent();
    const resumo = content.resumos.find(r => r.id === resumoId);
    if (!resumo) return;

    if (confirm(`Excluir o resumo "${resumo.titulo}"?\n\nEsta ação não pode ser desfeita!`)) {
        DB.deleteResumo(resumoId);
        alert('✅ Resumo excluído com sucesso!');
        loadContentLists();
    }
}

function deleteVideoaula(videoId) {
    const content = DB.getContent();
    const video = content.videoaulas.find(v => v.id === videoId);
    if (!video) return;

    if (confirm(`Excluir a videoaula "${video.titulo}"?\n\nEsta ação não pode ser desfeita!`)) {
        DB.deleteVideoaula(videoId);
        alert('✅ Videoaula excluída com sucesso!');
        loadContentLists();
    }
}

function deleteSimulado(simuladoId) {
    const content = DB.getContent();
    const simulado = content.simulados.find(s => s.id === simuladoId);
    if (!simulado) return;

    if (confirm(`Excluir o simulado "${simulado.titulo}"?\n\nEsta ação não pode ser desfeita!`)) {
        DB.deleteSimulado(simuladoId);
        alert('✅ Simulado excluído com sucesso!');
        loadContentLists();
    }
}

function getMateriaName(materia) {
    const names = {
        'matematica': 'Matemática',
        'geografia': 'Geografia',
        'historia': 'História',
        'portugues': 'Português',
        'fisica': 'Física',
        'quimica': 'Química',
        'biologia': 'Biologia',
        'ingles': 'Inglês'
    };
    return names[materia] || materia;
}

function getPlanName(plan) {
    const plans = {
        'gratis': 'Grátis',
        'basico': 'Básico',
        'premium': 'Premium'
    };
    return plans[plan] || 'Grátis';
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        DB.logout();
        window.location.href = 'login.html';
    }
}

// CSS adicional para admin
// GERENCIAR MÓDULOS
function loadModulos() {
    const modulos = DB.getAllModulos();
    const modulosContainer = document.getElementById('modulosList');

    if (!modulosContainer) return;

    if (modulos.length === 0) {
        modulosContainer.innerHTML = '<p style="color: var(--text-secondary)">Nenhum módulo criado ainda.</p>';
        return;
    }

    let html = '<ul style="list-style: none; padding: 0;">';
    modulos.forEach(modulo => {
        html += `
            <li style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--light-bg); border-radius: 8px; margin-bottom: 8px;">
                <div>
                    <strong>${modulo.titulo}</strong><br>
                    <small>${getMateriaName(modulo.materia)} - ${modulo.bimestre}º Bimestre</small><br>
                    <small style="color: var(--text-secondary)">${modulo.descricao}</small>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-small btn-primary" onclick="editModulo(${modulo.id})">✏️ Editar</button>
                    <button class="btn btn-small btn-danger" onclick="deleteModulo(${modulo.id})">🗑️ Excluir</button>
                </div>
            </li>
        `;
    });
    html += '</ul>';

    modulosContainer.innerHTML = html;
}

function editModulo(moduloId) {
    const modulos = DB.getAllModulos();
    const modulo = modulos.find(m => m.id === moduloId);

    if (!modulo) {
        alert('Módulo não encontrado!');
        return;
    }

    const titulo = prompt('Título do Módulo:', modulo.titulo);
    if (!titulo) return;

    const descricao = prompt('Descrição do Módulo:', modulo.descricao);
    if (!descricao) return;

    const resumo = prompt('Resumo (Markdown):', modulo.resumo);
    if (!resumo) return;

    DB.updateModulo(moduloId, {
        titulo,
        descricao,
        resumo
    });

    alert('Módulo atualizado com sucesso!');
    loadModulos();
}

function deleteModulo(moduloId) {
    if (!confirm('Tem certeza que deseja excluir este módulo?')) return;

    DB.deleteModulo(moduloId);
    alert('Módulo excluído com sucesso!');
    loadModulos();
}

function createModulo() {
    const materia = prompt('Matéria (matematica, portugues, etc):');
    if (!materia) return;

    const bimestre = parseInt(prompt('Bimestre (1-4):'));
    if (!bimestre || bimestre < 1 || bimestre > 4) {
        alert('Bimestre inválido!');
        return;
    }

    const titulo = prompt('Título do Módulo (ex: FATORAÇÃO):');
    if (!titulo) return;

    const descricao = prompt('Descrição breve:');
    if (!descricao) return;

    const resumo = prompt('Resumo (Markdown):');
    if (!resumo) return;

    // Criar simulado vazio
    const simulado = {
        questoes: []
    };

    DB.addModulo({
        materia,
        bimestre,
        titulo,
        descricao,
        resumo,
        simulado
    });

    alert('Módulo criado! Agora você pode adicionar questões ao simulado.');
    loadModulos();
}

const style = document.createElement('style');
style.textContent = `
    .questao-form-card {
        padding: 24px;
        background: var(--light-bg);
        border-radius: 12px;
        margin-bottom: 16px;
        border: 2px solid var(--border-color);
    }

    .questao-form-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .questao-form-header h5 {
        margin: 0;
        font-size: 18px;
    }

    .content-lists {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 20px;
    }

    .content-list-section {
        background: var(--card-bg);
        padding: 20px;
        border-radius: 12px;
        border: 2px solid var(--border-color);
    }

    .content-list-section h4 {
        margin-bottom: 16px;
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);
