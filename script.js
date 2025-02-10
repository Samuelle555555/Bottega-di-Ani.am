// Функция для отображения секций
function showSection(section) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    document.getElementById(section).style.display = 'block';

    // Убираем .active у всех ссылок
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));

    // Добавляем .active к текущей ссылке
    document.querySelector(`nav ul li a[onclick="showSection('${section}')"]`).classList.add('active');
}


// Функция для открытия модального окна с информацией о товаре
function openModal(productName, productDescription, productPrice) {
    document.getElementById('modal-title').innerText = productName;
    document.getElementById('modal-description').innerText = productDescription;
    document.getElementById('modal-price').innerText = `Цена: ${productPrice} руб.`;
    document.getElementById('product-modal').style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Функция для перехода на вкладку "Контакты"
function goToContacts() {
    closeModal();
    showSection('contact');
}

// Устанавливаем стартовую секцию при загрузке страницы
window.onload = function () {
    showSection('home');
};


// Перемещение карусели
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Перемещаем на 100% ширины
}

// Автопрокрутка слайдера каждые 5 секунд
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Инициализация слайдера при загрузке страницы
window.onload = function () {
    moveCarousel(0); // Обновим положение слайдера
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
