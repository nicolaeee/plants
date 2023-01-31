//hamburger menu for 380px;
const toggleButton =document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
//service

//prices
const acc_btns = document.querySelectorAll(".accordion__header");
const acc_contents = document.querySelectorAll(".accordion__body");

acc_btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
                acc_contents.forEach((acc) => {
                        if(e.target.nextElementSibling !== acc && acc.classList.contains("active"))

                        {
                                acc.classList.remove("active");
                                acc_btns.forEach((btn) => btn.classList.remove("active"));
                        }

                });
                const panel = btn.nextElementSibling;
                panel.classList.toggle("active");
                btn.classList.toggle("active");
        });


});
console.log('Score-90/100"\n"Вёрстка валидная +10 "\n"Вёрстка семантическая +20"\n"Вёрстка соответствует макету +40"\n"Требования к css + 12"\n"Интерактивность, реализуемая через css +20')