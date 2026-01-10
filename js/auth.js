// Carregar o sistema de database
const script = document.createElement('script');
script.src = '../js/database.js';
document.head.appendChild(script);

// Aguardar carregamento do DB
setTimeout(() => {
    initAuth();
}, 100);

function initAuth() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleLink = document.getElementById('toggleLink');
    const toggleText = document.getElementById('toggleText');
    const authTitle = document.getElementById('authTitle');

    let isLogin = true;

    // Toggle entre Login e Cadastro
    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            authTitle.textContent = 'Entrar na sua conta';
            toggleText.innerHTML = 'Não tem uma conta? <a href="#" id="toggleLink">Cadastre-se</a>';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            authTitle.textContent = 'Criar nova conta';
            toggleText.innerHTML = 'Já tem uma conta? <a href="#" id="toggleLink">Entrar</a>';
        }

        // Rebind do evento no novo link
        document.getElementById('toggleLink').addEventListener('click', arguments.callee);
    });

    // Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = DB.login(email, password);
        if (user) {
            alert('Login realizado com sucesso!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    });

    // Cadastro
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const schoolYear = document.getElementById('school-year').value;

        // Verificar se email já existe
        if (DB.getUserByEmail(email)) {
            alert('Este email já está cadastrado!');
            return;
        }

        // Criar novo usuário
        const newUser = DB.createUser({
            name,
            email,
            password,
            schoolYear
        });

        if (newUser) {
            alert('Conta criada com sucesso!');
            DB.login(email, password);
            window.location.href = 'dashboard.html';
        } else {
            alert('Erro ao criar conta. Tente novamente.');
        }
    });
}

// Verificar se já está logado
script.addEventListener('load', () => {
    const currentUser = DB.getCurrentUser();
    if (currentUser) {
        window.location.href = 'dashboard.html';
    }
});
