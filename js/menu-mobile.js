const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-overlay');

btn.addEventListener('click', () => {
    btn.classList.toggle('hamburger--active');
    menu.classList.toggle('visually-hidden');
});
document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            toggleModal();
        }
});