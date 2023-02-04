//hamburger menu for 380px;
const toggleButton =document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
//service


const filterBox = document.querySelectorAll('.services');
const cards = document.querySelectorAll('.services');

 const buttons = document.querySelectorAll('button2');

 buttons.forEach(button => {
    button.addEventListener('click', function (){
        button.forEach(btn => btn.classList.remove('alo'));
        this.classList.add('alo');
    })
 })




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
//contacts
let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });



        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }

    };


    select();
console.log('Score-90/100"\n"Вёрстка валидная +10 "\n"Вёрстка семантическая +20"\n"Вёрстка соответствует макету +40"\n"Требования к css + 12"\n"Интерактивность, реализуемая через css +20')