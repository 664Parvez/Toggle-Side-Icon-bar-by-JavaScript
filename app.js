let arrowClick = document.querySelector('.arr');
arrowClick.addEventListener('click', function(e) {
    let fullBox = document.querySelector('.box');
    fullBox.classList.toggle('active');

    e.preventDefault()
})