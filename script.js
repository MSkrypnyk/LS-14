document.querySelector('.header__menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
})

var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
