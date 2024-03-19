const UserBtn = document.querySelector('.user__name');
const Card = document.querySelector('.card');

UserBtn.addEventListener('click', () => {
    Card.classList.toggle('hidden__card');
    UserBtn.classList.toggle('scale');
});