// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initVideoaulas();
});

function initVideoaulas() {
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

    // Verificar se tem acesso premium
    if (currentUser.plan !== 'premium') {
        document.getElementById('premiumRequired').style.display = 'block';
        document.getElementById('videoaulasContent').style.display = 'none';
    } else {
        // Inicializar filtro de ano escolar
        initAnoFilter(currentUser.schoolYear);
    }
}

function openVideoaulas(materia, bimestre) {
    const currentUser = DB.getCurrentUser();

    if (currentUser.plan !== 'premium') {
        alert('As videoaulas estão disponíveis apenas no plano Premium!');
        return;
    }

    const videoaulas = DB.getVideoaulas(materia, bimestre);

    if (videoaulas.length === 0) {
        alert('Nenhuma videoaula disponível ainda!');
        return;
    }

    const modal = document.getElementById('videoaulasModal');
    const content = document.getElementById('videoaulasListContent');

    let html = `
        <h2>🎥 Videoaulas de ${getMateriaName(materia)}</h2>
        <div class="videoaulas-grid">
    `;

    videoaulas.forEach(video => {
        html += `
            <div class="video-card" onclick="playVideo('${video.url}', '${video.titulo}')">
                <div class="video-thumbnail">
                    <span class="play-icon">▶️</span>
                </div>
                <div class="video-info">
                    <h4>${video.titulo}</h4>
                    <p class="video-duration">⏱️ ${video.duracao}</p>
                </div>
            </div>
        `;
    });

    html += `</div>`;

    content.innerHTML = html;
    modal.classList.add('show');
}

function playVideo(url, titulo) {
    const modal = document.getElementById('videoaulasModal');
    const content = document.getElementById('videoaulasListContent');

    const html = `
        <div class="video-player-container">
            <button class="btn btn-outline" onclick="initVideoaulas(); openVideoaulas('matematica', 1)">
                ← Voltar para lista
            </button>
            <h2>${titulo}</h2>
            <div class="video-wrapper">
                <iframe
                    width="100%"
                    height="500"
                    src="${url}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;

    content.innerHTML = html;
}

function closeVideoaulasModal() {
    const modal = document.getElementById('videoaulasModal');
    modal.classList.remove('show');
}

function showUpgradeModal() {
    alert('Para ter acesso às videoaulas, faça upgrade para o plano Premium!\n\nVá para o Dashboard e clique em "Fazer Upgrade".');
    window.location.href = 'dashboard.html';
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

function initAnoFilter(currentSchoolYear) {
    const anoButtons = document.querySelectorAll('.ano-btn');

    // Marcar o ano atual do usuário como ativo
    anoButtons.forEach(btn => {
        const ano = btn.dataset.ano;
        if (ano === currentSchoolYear) {
            btn.classList.add('active');
        }

        // Adicionar evento de click
        btn.addEventListener('click', () => {
            // Atualizar botões ativos
            anoButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Atualizar ano escolar do usuário
            const currentUser = DB.getCurrentUser();
            currentUser.schoolYear = ano;
            DB.updateUser(currentUser);

            // Recarregar conteúdo com filtro aplicado
            location.reload();
        });
    });
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        DB.logout();
        window.location.href = 'login.html';
    }
}

// CSS adicional para videoaulas
const style = document.createElement('style');
style.textContent = `
    .videoaulas-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
    }

    .video-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        cursor: pointer;
        transition: all 0.3s;
    }

    .video-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    }

    .video-thumbnail {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .play-icon {
        font-size: 64px;
        color: white;
        opacity: 0.9;
    }

    .video-info {
        padding: 20px;
    }

    .video-info h4 {
        margin-bottom: 8px;
        font-size: 18px;
    }

    .video-duration {
        color: var(--text-secondary);
        font-size: 14px;
    }

    .video-player-container {
        padding: 20px;
    }

    .video-wrapper {
        margin-top: 24px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);
