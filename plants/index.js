//hamburger menu for 380px;
const toggleButton =document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

console.log('Score-90/100"\n"Вёрстка валидная +10 "\n"Вёрстка семантическая +20"\n"Вёрстка соответствует макету +40"\n"Требования к css + 12"\n"Интерактивность, реализуемая через css +20')