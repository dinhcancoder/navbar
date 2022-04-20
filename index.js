let close = document.getElementById('close');

close.onclick = function() {
    let nav = document.querySelector('.nav');

    nav.classList.toggle('close');
    nav.style.transition = 'all .5s ease-in-out'
}

function show(emlemnt) {
    let link = document.querySelectorAll('.link');

    for(i = 0; i < link.length; i++) {
        link[i].style.color = 'var(--text-color)';
        link[i].style.backgroundColor = 'transparent'
    }

    emlemnt.style.color = 'var(--black-color)';
    emlemnt.style.backgroundColor = 'var(--white-color)';
    emlemnt.style.transition = 'all .2s ease-in-out';
}

function choose() {
    let nav =  document.querySelector('.nav');
    let main =  document.querySelector('.main__header');

    nav.classList.toggle('display');
    main.classList.toggle('display');
    nav.style.transition = 'all .4s ease-in-out';
    main.style.transition = 'all .4s ease-in-out';
}