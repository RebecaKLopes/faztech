//menu hamburguer
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


//carrossel de imagens
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++
    if(count>4){
        count = 1
    }
    document.getElementById("radio"+count).checked = true;
}