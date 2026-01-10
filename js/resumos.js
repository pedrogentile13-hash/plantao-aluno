// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initResumos();
});

function initResumos() {
    const currentUser = DB.getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userPlan').textContent = getPlanName(currentUser.plan);

    if (currentUser.isAdmin) {
        document.getElementById('adminLink').style.display = 'flex';
    }

    // Inicializar tabs de bimestres
    const content = DB.getContent();
    const tabs = document.querySelectorAll('.bimestre-tab');

    tabs.forEach(tab => {
        const bimestre = parseInt(tab.dataset.bimestre);

        if (content.unlockedBimestres.includes(bimestre)) {
            tab.classList.remove('locked');
            tab.addEventListener('click', () => switchBimestre(bimestre));
        }
    });
}

function switchBimestre(bimestre) {
    // Atualizar tabs
    document.querySelectorAll('.bimestre-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-bimestre="${bimestre}"]`).classList.add('active');

    // Atualizar conteúdo
    document.querySelectorAll('.bimestre-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`bimestre-${bimestre}`).classList.add('active');
}

function openMateria(materia, bimestre) {
    const currentUser = DB.getCurrentUser();
    const resumos = DB.getResumos(materia, bimestre);

    if (resumos.length === 0) {
        alert('Nenhum resumo disponível ainda!');
        return;
    }

    const modal = document.getElementById('materiaModal');
    const content = document.getElementById('materiaContent');

    // Montar conteúdo do modal
    let html = `
        <h2>📚 ${getMateriaName(materia)} - ${bimestre}º Bimestre</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">
            ${resumos.length} tema${resumos.length > 1 ? 's' : ''} disponível${resumos.length > 1 ? 'eis' : ''}
        </p>
        <div class="resumos-list">
    `;

    resumos.forEach((resumo, index) => {
        html += `
            <div class="resumo-item">
                <div class="resumo-header">
                    <span class="resumo-number">Tema ${index + 1}</span>
                    <h3>${resumo.titulo}</h3>
                </div>
                <div class="resumo-content">
                    ${formatMarkdown(resumo.conteudo)}
                </div>
            </div>
        `;
    });

    html += `</div><hr style="margin: 32px 0;">`;

    // Adicionar simulados
    const simulados = DB.getSimulados(materia, bimestre);

    if (simulados.length > 0) {
        html += `
            <h2>📊 Simulados Disponíveis</h2>
            <div class="simulados-list">
        `;

        simulados.forEach(simulado => {
            html += `
                <div class="simulado-card" onclick="startSimulado(${simulado.id})">
                    <h4>${simulado.titulo}</h4>
                    <p>15 questões • Nota de 0 a 10</p>
                    <button class="btn btn-primary">Iniciar Simulado</button>
                </div>
            `;
        });

        html += `</div>`;
    }

    content.innerHTML = html;
    modal.classList.add('show');
}

function closeMateriaModal() {
    const modal = document.getElementById('materiaModal');
    modal.classList.remove('show');
}

function startSimulado(simuladoId) {
    closeMateriaModal();

    const currentUser = DB.getCurrentUser();
    const content = DB.getContent();
    const simulado = content.simulados.find(s => s.id === simuladoId);

    if (!simulado) {
        alert('Simulado não encontrado!');
        return;
    }

    // Verificar limite de simulados por plano
    const userResults = DB.getUserResults(currentUser.id);
    const simuladosThisBimestre = userResults.filter(r =>
        r.bimestre === simulado.bimestre &&
        new Date(r.date).getMonth() === new Date().getMonth()
    );

    if (currentUser.plan === 'gratis' && simuladosThisBimestre.length >= 1) {
        alert('Você atingiu o limite de simulados do plano gratuito!\nFaça upgrade para ter acesso ilimitado.');
        return;
    }

    if (currentUser.plan === 'basico' && simuladosThisBimestre.length >= 4) {
        alert('Você atingiu o limite de 4 simulados por bimestre do plano básico!\nFaça upgrade para Premium para ter acesso ilimitado.');
        return;
    }

    // Abrir modal do simulado
    openSimuladoModal(simulado);
}

function openSimuladoModal(simulado) {
    const modal = document.getElementById('simuladoModal');
    const content = document.getElementById('simuladoContent');

    let html = `
        <h2>${simulado.titulo}</h2>
        <div class="simulado-info">
            <p><strong>Total de questões:</strong> 15</p>
            <p><strong>Pontuação:</strong> 5 fáceis (1pt), 5 médias (2pts), 5 difíceis (3pts)</p>
            <p><strong>Nota:</strong> 0 a 10</p>
        </div>
        <form id="simuladoForm">
    `;

    simulado.questoes.forEach((questao, index) => {
        const dificuldade = questao.peso === 1 ? 'Fácil' : questao.peso === 2 ? 'Médio' : 'Difícil';
        const cor = questao.peso === 1 ? '#10b981' : questao.peso === 2 ? '#f59e0b' : '#ef4444';

        html += `
            <div class="questao-card">
                <div class="questao-header">
                    <span class="questao-numero">Questão ${index + 1}</span>
                    <span class="questao-dificuldade" style="background: ${cor}">${dificuldade} (${questao.peso}pt${questao.peso > 1 ? 's' : ''})</span>
                </div>
                <p class="questao-enunciado">${questao.enunciado}</p>
                <div class="questao-alternativas">
        `;

        questao.alternativas.forEach((alt, altIndex) => {
            html += `
                <label class="alternativa-label">
                    <input type="radio" name="questao${index}" value="${altIndex}" required>
                    <span>${String.fromCharCode(65 + altIndex)}) ${alt}</span>
                </label>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    html += `
            <button type="submit" class="btn btn-primary btn-large">Finalizar Simulado</button>
        </form>
    `;

    content.innerHTML = html;
    modal.classList.add('show');

    // Adicionar evento de submit
    document.getElementById('simuladoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        finalizarSimulado(simulado);
    });
}

function finalizarSimulado(simulado) {
    const form = document.getElementById('simuladoForm');
    const formData = new FormData(form);

    let pontuacaoTotal = 0;
    let acertos = 0;

    simulado.questoes.forEach((questao, index) => {
        const resposta = parseInt(formData.get(`questao${index}`));
        if (resposta === questao.respostaCorreta) {
            pontuacaoTotal += questao.peso;
            acertos++;
        }
    });

    // Calcular nota de 0 a 10
    const pontuacaoMaxima = 30; // 5*1 + 5*2 + 5*3 = 30
    const nota = (pontuacaoTotal / pontuacaoMaxima * 10).toFixed(1);

    // Salvar resultado
    const currentUser = DB.getCurrentUser();
    DB.saveResult({
        userId: currentUser.id,
        simuladoId: simulado.id,
        materia: simulado.materia,
        bimestre: simulado.bimestre,
        nota: parseFloat(nota),
        acertos: acertos,
        totalQuestoes: simulado.questoes.length,
        pontuacao: pontuacaoTotal
    });

    // Mostrar resultado
    closeSimuladoModal();
    alert(`Simulado Finalizado!\n\nAcertos: ${acertos}/15\nPontuação: ${pontuacaoTotal}/30\nNota: ${nota}/10`);

    location.reload();
}

function closeSimuladoModal() {
    const modal = document.getElementById('simuladoModal');
    modal.classList.remove('show');
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

function formatMarkdown(text) {
    // Simples conversão de markdown para HTML
    return text
        .replace(/^# (.*$)/gim, '<h2>$1</h2>')
        .replace(/^## (.*$)/gim, '<h3>$1</h3>')
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        DB.logout();
        window.location.href = 'login.html';
    }
}

// CSS adicional para simulados
const style = document.createElement('style');
style.textContent = `
    .resumo-item {
        margin-bottom: 32px;
        padding: 24px;
        background: var(--light-bg);
        border-radius: 12px;
        border-left: 4px solid var(--primary-color);
    }

    .resumo-header {
        margin-bottom: 20px;
    }

    .resumo-number {
        display: inline-block;
        background: var(--primary-color);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 8px;
    }

    .resumo-header h3 {
        margin-top: 8px;
        color: var(--primary-color);
        font-size: 24px;
    }

    .resumo-content {
        line-height: 1.8;
    }

    .resumo-content h2 {
        color: var(--primary-color);
        margin-top: 24px;
        margin-bottom: 12px;
    }

    .resumo-content h3 {
        color: var(--text-primary);
        margin-top: 16px;
        margin-bottom: 8px;
    }

    .simulados-list {
        display: grid;
        gap: 16px;
    }

    .simulado-card {
        padding: 24px;
        background: var(--light-bg);
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .simulado-card:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-4px);
    }

    .simulado-info {
        padding: 16px;
        background: var(--light-bg);
        border-radius: 8px;
        margin-bottom: 24px;
    }

    .questao-card {
        padding: 24px;
        background: var(--light-bg);
        border-radius: 12px;
        margin-bottom: 24px;
    }

    .questao-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .questao-numero {
        font-weight: 700;
        font-size: 18px;
    }

    .questao-dificuldade {
        padding: 4px 12px;
        border-radius: 20px;
        color: white;
        font-size: 12px;
        font-weight: 600;
    }

    .questao-enunciado {
        font-size: 16px;
        margin-bottom: 16px;
        font-weight: 500;
    }

    .questao-alternativas {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .alternativa-label {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: white;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .alternativa-label:hover {
        border-color: var(--primary-color);
        background: var(--light-bg);
    }

    .alternativa-label input[type="radio"] {
        width: 20px;
        height: 20px;
    }
`;
document.head.appendChild(style);
