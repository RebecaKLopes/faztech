const btnMobile = document.getElementById('btn-mobile')

function clickMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', 'active');
    if(active){
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'abrir menu');
    }
}

btnMobile.addEventListener('click', clickMenu)
btnMobile.addEventListener('touchstart', clickMenu)