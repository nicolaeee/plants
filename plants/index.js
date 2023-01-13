let cells = document.querySelectorAll('.navigation__link')

for(let i=0; i<cells.length;i++){
    cells[i].addEventListener('click', function() {
        if(!this.classList.contains('active')) {
            for (let j = 0; j < cells.length; j++) {
                cells[j].classList.remove('active')
            }
            this.classList.add('active')
        }
    });
}
}