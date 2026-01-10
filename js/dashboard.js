// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    const currentUser = DB.getCurrentUser();

    // Verificar autenticação
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Atualizar informações do usuário
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userPlan').textContent = getPlanName(currentUser.plan);
    document.getElementById('schoolYear').textContent = currentUser.schoolYear + 'º ano';

    // Mostrar link admin se for admin
    if (currentUser.isAdmin) {
        document.getElementById('adminLink').style.display = 'flex';
        document.getElementById('adminLink').href = 'admin.html';
    }

    // Calcular estatísticas
    const userResults = DB.getUserResults(currentUser.id);
    if (userResults.length > 0) {
        const grades = userResults.map(r => r.nota);
        const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1);
        const best = Math.max(...grades).toFixed(1);

        document.getElementById('averageGrade').textContent = average;
        document.getElementById('bestGrade').textContent = best;
        document.getElementById('simuladosCompleted').textContent = userResults.length;
    } else {
        document.getElementById('averageGrade').textContent = '-';
        document.getElementById('bestGrade').textContent = '-';
        document.getElementById('simuladosCompleted').textContent = '0';
    }

    // Atualizar informações do plano
    updatePlanInfo(currentUser.plan);
}

function getPlanName(plan) {
    const plans = {
        'gratis': 'Grátis',
        'basico': 'Básico',
        'premium': 'Premium'
    };
    return plans[plan] || 'Grátis';
}

function updatePlanInfo(plan) {
    const planName = document.getElementById('planName');
    const planDescription = document.getElementById('planDescription');

    const planInfo = {
        'gratis': {
            name: 'Plano Grátis',
            description: 'Você está usando o plano gratuito. Faça upgrade para ter acesso completo!'
        },
        'basico': {
            name: 'Plano Básico',
            description: 'Acesso a todos os resumos e 4 simulados por bimestre'
        },
        'premium': {
            name: 'Plano Premium',
            description: 'Acesso completo a resumos, videoaulas e todos os simulados'
        }
    };

    const info = planInfo[plan] || planInfo['gratis'];
    planName.textContent = info.name;
    planDescription.textContent = info.description;
}

function showUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    modal.style.display = 'flex';
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    modal.style.display = 'none';
}

function selectPlan(plan) {
    const currentUser = DB.getCurrentUser();

    if (plan === 'basico') {
        if (confirm('Assinar o Plano Básico por R$ 22,90/mês?\n\n(Esta é uma simulação - pagamento não será processado)')) {
            DB.updateCurrentUser({ plan: 'basico' });
            alert('Plano Básico ativado com sucesso!');
            location.reload();
        }
    } else if (plan === 'premium') {
        if (confirm('Assinar o Plano Premium por R$ 34,90/mês?\n\n(Esta é uma simulação - pagamento não será processado)')) {
            DB.updateCurrentUser({ plan: 'premium' });
            alert('Plano Premium ativado com sucesso!');
            location.reload();
        }
    }
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        DB.logout();
        window.location.href = 'login.html';
    }
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('upgradeModal');
    if (event.target == modal) {
        closeUpgradeModal();
    }
}
