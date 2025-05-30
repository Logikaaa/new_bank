document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn-send');
    const sumaInput = document.getElementById('suma');
    const moneyElement = document.querySelector('.money');
    const resaltElement = document.querySelector('.resalt');

    // 1. Показати актуальну суму з localStorage (на всіх сторінках, де є .money)
    if (moneyElement) {
        let savedMoney = localStorage.getItem('money');
        if (savedMoney === null) {
            // Якщо грошей ще не збережено — ставимо 1000 за замовчуванням
            savedMoney = 1000;
            localStorage.setItem('money', savedMoney);
        }
        moneyElement.textContent = savedMoney;
    }

    // 2. Якщо є кнопка — це index.html, додаємо логіку переказу
    if (btn && sumaInput) {
        btn.addEventListener('click', function () {
            const currentMoney = +localStorage.getItem('money');
            const suma = +sumaInput.value;

            if (!isNaN(suma) && suma > 0) {
                if (currentMoney >= suma) {
                    const newMoney = currentMoney - suma;
                    localStorage.setItem('money', newMoney);
                    location.href = './true.html';
                } else {
                    location.href = './false.html';
                }
            } else {
                alert("Введіть коректну суму!");
            }
        });
    }

    // 3. Якщо це true.html — оновити .resalt сумою після переказу (робимо це через .money.resalt)
    if (resaltElement) {
        const savedMoney = localStorage.getItem('money');
        resaltElement.textContent = savedMoney !== null ? savedMoney : '—';
    }
});
