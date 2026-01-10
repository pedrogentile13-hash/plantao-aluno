// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initPerfil();
});

function initPerfil() {
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

    // Preencher informações do perfil
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileSchoolYear').textContent = currentUser.schoolYear + 'º ano';
    document.getElementById('profilePlan').textContent = getPlanName(currentUser.plan);

    // Calcular desempenho
    const userResults = DB.getUserResults(currentUser.id);

    if (userResults.length > 0) {
        const grades = userResults.map(r => r.nota);
        const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1);
        const best = Math.max(...grades).toFixed(1);

        document.getElementById('perfAverage').textContent = average;
        document.getElementById('perfBest').textContent = best;
        document.getElementById('perfTotal').textContent = userResults.length;

        // Mostrar histórico
        showGradesHistory(userResults);
    } else {
        document.getElementById('perfAverage').textContent = '-';
        document.getElementById('perfBest').textContent = '-';
        document.getElementById('perfTotal').textContent = '0';
        document.getElementById('gradesTable').innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum simulado realizado ainda</p>';
    }

    // Atualizar informações de assinatura
    updateSubscriptionInfo(currentUser);
}

function showGradesHistory(results) {
    const table = document.getElementById('gradesTable');

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Matéria</th>
                    <th>Bimestre</th>
                    <th>Acertos</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Ordenar por data (mais recente primeiro)
    results.sort((a, b) => new Date(b.date) - new Date(a.date));

    results.forEach(result => {
        const date = new Date(result.date).toLocaleDateString('pt-BR');
        html += `
            <tr>
                <td>${date}</td>
                <td>${getMateriaName(result.materia)}</td>
                <td>${result.bimestre}º Bimestre</td>
                <td>${result.acertos}/${result.totalQuestoes}</td>
                <td><strong>${result.nota.toFixed(1)}</strong></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    table.innerHTML = html;
}

function updateSubscriptionInfo(user) {
    const subPlan = document.getElementById('subPlan');
    const subInfo = document.getElementById('subInfo');
    const cancelBtn = document.getElementById('cancelBtn');
    const upgradeBtn = document.getElementById('upgradeBtn');

    subPlan.textContent = getPlanName(user.plan);

    if (user.plan === 'gratis') {
        subInfo.textContent = 'Você está usando o plano gratuito. Faça upgrade para ter acesso completo!';
        cancelBtn.style.display = 'none';
        upgradeBtn.style.display = 'inline-block';
    } else {
        subInfo.textContent = `Assinatura ativa desde ${new Date(user.createdAt).toLocaleDateString('pt-BR')}`;
        cancelBtn.style.display = 'inline-block';
        if (user.plan === 'basico') {
            upgradeBtn.style.display = 'inline-block';
            upgradeBtn.textContent = 'Fazer Upgrade para Premium';
        } else {
            upgradeBtn.style.display = 'none';
        }
    }
}

function showUpgradeModal() {
    const currentUser = DB.getCurrentUser();

    if (currentUser.plan === 'premium') {
        alert('Você já possui o plano Premium!');
        return;
    }

    if (currentUser.plan === 'gratis') {
        const choice = confirm('Escolha seu plano:\n\nOK = Básico (R$ 22,90/mês)\nCancelar = Premium (R$ 34,90/mês)');
        if (choice) {
            upgradeToPlan('basico');
        } else {
            upgradeToPlan('premium');
        }
    } else if (currentUser.plan === 'basico') {
        if (confirm('Fazer upgrade para Premium por R$ 34,90/mês?')) {
            upgradeToPlan('premium');
        }
    }
}

function upgradeToPlan(plan) {
    DB.updateCurrentUser({ plan });
    alert('Plano atualizado com sucesso!');
    location.reload();
}

function cancelSubscription() {
    const modal = document.getElementById('cancelSubModal');
    modal.classList.add('show');
}

function closeCancelSubModal() {
    const modal = document.getElementById('cancelSubModal');
    modal.classList.remove('show');
}

function confirmCancelSubscription() {
    DB.updateCurrentUser({ plan: 'gratis' });
    alert('Assinatura cancelada. Você ainda tem acesso até o final do período atual.');
    closeCancelSubModal();
    location.reload();
}

function deleteAccount() {
    const modal = document.getElementById('deleteModal');
    modal.classList.add('show');
}

function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.classList.remove('show');
}

function confirmDeleteAccount() {
    const currentUser = DB.getCurrentUser();

    const confirmText = prompt('ATENÇÃO: Esta ação é irreversível!\n\nDigite "EXCLUIR" (em maiúsculas) para confirmar:');

    if (confirmText === 'EXCLUIR') {
        DB.deleteUser(currentUser.id);
        DB.logout();
        alert('Conta excluída com sucesso.');
        window.location.href = 'login.html';
    } else if (confirmText !== null) {
        alert('Texto incorreto. Exclusão cancelada.');
        closeDeleteModal();
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

// Fechar modals ao clicar fora
window.onclick = function(event) {
    const deleteModal = document.getElementById('deleteModal');
    const cancelModal = document.getElementById('cancelSubModal');

    if (event.target == deleteModal) {
        closeDeleteModal();
    }
    if (event.target == cancelModal) {
        closeCancelSubModal();
    }
}

// CSS adicional
const style = document.createElement('style');
style.textContent = `
    .grades-history {
        margin-top: 32px;
    }

    .grades-history h4 {
        margin-bottom: 16px;
    }
`;
document.head.appendChild(style);
