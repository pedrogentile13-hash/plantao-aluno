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
            // Remover ícone de cadeado e span "Em Breve" se existirem
            const lockIcon = tab.querySelector('.lock-icon');
            const comingSoon = tab.querySelector('.coming-soon');
            if (lockIcon) lockIcon.remove();
            if (comingSoon) comingSoon.remove();
            tab.addEventListener('click', () => switchBimestre(bimestre));
        }
    });

    // Desbloquear matérias para cada bimestre
    content.unlockedBimestres.forEach(bimestre => {
        const bimestreContent = document.getElementById(`bimestre-${bimestre}`);
        if (!bimestreContent) return;

        const materiaCards = bimestreContent.querySelectorAll('.materia-card');
        const unlockedMaterias = content.unlockedMaterias[bimestre] || [];

        materiaCards.forEach(card => {
            // Pegar o nome da matéria do card (título h3)
            const materiaTitle = card.querySelector('h3');
            if (!materiaTitle) return;

            const materiaText = materiaTitle.textContent.toLowerCase();

            // Mapear o título para o ID da matéria
            const materiaMap = {
                'matemática': 'matematica',
                'geografia': 'geografia',
                'história': 'historia',
                'português': 'portugues',
                'física': 'fisica',
                'química': 'quimica',
                'biologia': 'biologia',
                'inglês': 'ingles'
            };

            const materiaId = materiaMap[materiaText];

            if (materiaId && unlockedMaterias.includes(materiaId)) {
                // Desbloquear a matéria
                card.classList.remove('locked');
                card.classList.add('unlocked');

                // Remover "Em breve" e trocar por descrição apropriada
                const description = card.querySelector('.materia-description');
                if (description && description.textContent === 'Em breve') {
                    const descriptions = {
                        'matematica': 'Números, equações, geometria e álgebra',
                        'geografia': 'Mapas, territórios, clima e geopolítica',
                        'historia': 'Eventos históricos, períodos e civilizações',
                        'portugues': 'Gramática, literatura e interpretação de textos',
                        'fisica': 'Mecânica, energia, movimento e forças',
                        'quimica': 'Matéria, reações, elementos e compostos',
                        'biologia': 'Seres vivos, células, ecologia e evolução',
                        'ingles': 'Vocabulário, gramática e conversação'
                    };
                    description.textContent = descriptions[materiaId];
                }

                // Trocar o badge de status
                const statusBadge = card.querySelector('.status-badge');
                if (statusBadge && statusBadge.classList.contains('coming-soon')) {
                    statusBadge.classList.remove('coming-soon');
                    statusBadge.classList.add('available');
                    statusBadge.innerHTML = '✅ Disponível';
                }

                // Adicionar evento de click
                card.style.cursor = 'pointer';
                card.onclick = () => openMateria(materiaId, bimestre);
            }
        });
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
    const modulos = DB.getModulos(materia, bimestre);

    if (modulos.length === 0) {
        alert('Nenhum módulo disponível ainda!');
        return;
    }

    const modal = document.getElementById('materiaModal');
    const content = document.getElementById('materiaContent');

    // Montar conteúdo do modal com módulos em cards
    let html = `
        <h2>📚 ${getMateriaName(materia)} - ${bimestre}º Bimestre</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">
            ${modulos.length} módulo${modulos.length > 1 ? 's' : ''} disponível${modulos.length > 1 ? 'eis' : ''}
        </p>
        <div class="modulos-grid">
    `;

    modulos.forEach((modulo, index) => {
        html += `
            <div class="modulo-card">
                <div class="modulo-icon">📘</div>
                <h3 class="modulo-titulo">${modulo.titulo}</h3>
                <p class="modulo-descricao">${modulo.descricao}</p>
                <div class="modulo-acoes">
                    <button class="btn-modulo btn-modulo-resumo" onclick="openResumo(${modulo.id})">
                        <span>📝</span> ACESSAR RESUMO
                    </button>
                    <button class="btn-modulo btn-modulo-simulado" onclick="openSimuladoFromModulo(${modulo.id})">
                        <span>📊</span> ACESSAR SIMULADO
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;

    content.innerHTML = html;
    modal.classList.add('show');
}

function openResumo(moduloId) {
    const currentUser = DB.getCurrentUser();
    const modulos = DB.getAllModulos();
    const modulo = modulos.find(m => m.id === moduloId);

    if (!modulo || !modulo.resumo) {
        alert('Resumo não disponível!');
        return;
    }

    // Verificar se usuário tem plano gratuito
    if (currentUser.plan === 'gratis') {
        alert('📚 Resumos Exclusivos!\n\nOs resumos completos estão disponíveis apenas para assinantes dos planos Básico e Premium.\n\n✨ Faça upgrade agora e tenha acesso ilimitado a todo o conteúdo!');
        return;
    }

    const modal = document.getElementById('resumoModal');
    const content = document.getElementById('resumoContent');

    let html = `
        <h2>${modulo.titulo}</h2>
        <div class="resumo-content">
            ${formatMarkdown(modulo.resumo)}
        </div>
    `;

    content.innerHTML = html;
    modal.classList.add('show');
}

function closeResumoModal() {
    const modal = document.getElementById('resumoModal');
    modal.classList.remove('show');
}

function openSimuladoFromModulo(moduloId) {
    const modulos = DB.getAllModulos();
    const modulo = modulos.find(m => m.id === moduloId);

    if (!modulo || !modulo.simulado) {
        alert('Simulado não disponível!');
        return;
    }

    const currentUser = DB.getCurrentUser();

    // Verificar limite de simulados por plano
    const userResults = DB.getUserResults(currentUser.id);
    const simuladosThisBimestre = userResults.filter(r =>
        r.bimestre === modulo.bimestre &&
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

    openSimuladoModal(modulo);
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

function openSimuladoModal(modulo) {
    const modal = document.getElementById('simuladoModal');
    const content = document.getElementById('simuladoContent');

    const questoes = modulo.simulado.questoes;

    let html = `
        <h2>Simulado: ${modulo.titulo}</h2>
        <div class="simulado-info">
            <p><strong>Total de questões:</strong> ${questoes.length}</p>
            <p><strong>Pontuação:</strong> 5 fáceis (1pt), 5 médias (2pts), 5 difíceis (3pts)</p>
            <p><strong>Nota:</strong> 0 a 10</p>
        </div>
        <form id="simuladoForm">
    `;

    questoes.forEach((questao, index) => {
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
        finalizarSimulado(modulo);
    });
}

function finalizarSimulado(modulo) {
    const form = document.getElementById('simuladoForm');
    const formData = new FormData(form);

    let pontuacaoTotal = 0;
    let acertos = 0;

    const questoes = modulo.simulado.questoes;

    questoes.forEach((questao, index) => {
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
        moduloId: modulo.id,
        materia: modulo.materia,
        bimestre: modulo.bimestre,
        nota: parseFloat(nota),
        acertos: acertos,
        totalQuestoes: questoes.length,
        pontuacao: pontuacaoTotal
    });

    // Mostrar resultado
    closeSimuladoModal();
    alert(`Simulado Finalizado!\n\nAcertos: ${acertos}/${questoes.length}\nPontuação: ${pontuacaoTotal}/30\nNota: ${nota}/10`);

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

// CSS adicional para módulos e simulados
const style = document.createElement('style');
style.textContent = `
    /* Grid de módulos */
    .modulos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 24px;
        margin-top: 24px;
    }

    /* Card de módulo */
    .modulo-card {
        background: white;
        border: 2px solid var(--border-color);
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .modulo-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        border-color: var(--primary-color);
    }

    .modulo-icon {
        font-size: 48px;
        margin-bottom: 16px;
        background: var(--light-bg);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modulo-titulo {
        font-size: 18px;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 12px;
        letter-spacing: 0.5px;
    }

    .modulo-descricao {
        font-size: 14px;
        color: var(--text-secondary);
        margin-bottom: 20px;
        line-height: 1.5;
    }

    .modulo-acoes {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .btn-modulo {
        width: 100%;
        padding: 12px 16px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-style: italic;
    }

    .btn-modulo span {
        font-size: 16px;
        font-style: normal;
    }

    .btn-modulo-resumo {
        background: #7c3aed;
        color: white;
    }

    .btn-modulo-resumo:hover {
        background: #6d28d9;
        transform: scale(1.02);
    }

    .btn-modulo-simulado {
        background: #a3e635;
        color: #1a1a1a;
    }

    .btn-modulo-simulado:hover {
        background: #84cc16;
        transform: scale(1.02);
    }

    /* Resumo content */
    .resumo-content {
        line-height: 1.8;
        padding: 20px;
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

    .resumo-content h4 {
        color: var(--text-primary);
        margin-top: 12px;
        margin-bottom: 8px;
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

    /* Status badge disponível */
    .status-badge.available {
        background: var(--success-color);
        color: white;
    }
`;
document.head.appendChild(style);
