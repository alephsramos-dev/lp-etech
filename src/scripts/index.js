const cardsContainer = document.querySelector('.feedback__container__cards');
const leftButton = document.getElementById('feedback_left');
const rightButton = document.getElementById('feedback_right');
const pageIndicator = document.getElementById('feedback_page');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.feedback__card').length;
const cardsPerPage = 3;
const totalPages = Math.ceil(totalCards / cardsPerPage);

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightButton.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const newTranslateX = -(currentIndex * 100 / totalPages);
    cardsContainer.style.transform = `translateX(${newTranslateX}%)`;
    pageIndicator.textContent = `0${currentIndex + 1}/0${totalPages}`;
}

// Inicializa o carrossel na posição correta
updateCarousel();