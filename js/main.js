// Main JavaScript - Landing Page

function redirectToLogin() {
    window.location.href = 'pages/login.html';
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle Mensal/Anual
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const billingType = btn.dataset.billing;

            // Atualizar botões ativos
            toggleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Atualizar preços dos planos
            updatePlanPrices(billingType);
        });
    });
});

function updatePlanPrices(billingType) {
    const planCards = document.querySelectorAll('.plan-card-landing[data-monthly-price]');

    planCards.forEach(card => {
        const priceValue = card.querySelector('.price-value');
        const oldPriceValue = card.querySelector('.old-price-value');
        const periodText = card.querySelector('.period-text');
        const yearlyInfo = card.querySelector('.yearly-info');
        const installmentValue = card.querySelector('.installment-value');

        if (billingType === 'yearly') {
            const yearlyPrice = parseFloat(card.dataset.yearlyPrice);
            const yearlyOldPrice = parseFloat(card.dataset.yearlyOld);
            const installment = (yearlyPrice / 12).toFixed(2).replace('.', ',');

            priceValue.textContent = yearlyPrice.toFixed(2).replace('.', ',');
            oldPriceValue.textContent = yearlyOldPrice.toFixed(2).replace('.', ',');
            periodText.textContent = '/ano';

            if (yearlyInfo && installmentValue) {
                installmentValue.textContent = installment;
                yearlyInfo.style.display = 'block';
            }
        } else {
            const monthlyPrice = parseFloat(card.dataset.monthlyPrice);
            const monthlyOldPrice = parseFloat(card.dataset.monthlyOld);

            priceValue.textContent = monthlyPrice.toFixed(2).replace('.', ',');
            oldPriceValue.textContent = monthlyOldPrice.toFixed(2).replace('.', ',');
            periodText.textContent = '/mês';

            if (yearlyInfo) {
                yearlyInfo.style.display = 'none';
            }
        }
    });
}
