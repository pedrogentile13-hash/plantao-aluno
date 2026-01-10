// Funções comuns usadas em várias páginas

// Função de Logout global
function logout() {
    if (confirm('Deseja realmente sair?')) {
        // Carregar DB se ainda não estiver carregado
        if (typeof DB !== 'undefined') {
            DB.logout();
        } else {
            localStorage.removeItem('plantaoaluno_currentUser');
        }
        window.location.href = 'login.html';
    }
}

// Obter nome do plano
function getPlanName(plan) {
    const plans = {
        'gratis': 'Grátis',
        'basico': 'Básico',
        'premium': 'Premium'
    };
    return plans[plan] || 'Grátis';
}

// Obter nome da matéria
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

// Verificar autenticação
function checkAuth() {
    const currentUser = localStorage.getItem('plantaoaluno_currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(currentUser);
}
