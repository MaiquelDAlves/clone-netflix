function scroll() {
    if(window.scrollY === 0) {
        document.querySelector('header').style.background = 'linear-gradient(to bottom, rgba(0,0,0,.7)10%, rgba(0,0,0,0))';
    } else {
        document.querySelector('header').style.background = 'rgba(0,0,0,10)'
    }
}
window.addEventListener('scroll', scroll);

function abrirMenu() {
   let lagura = document.querySelector('.menu-area')

   if(lagura.style.width === '0px') {
       lagura.style.width = '200px';
   } else {
    lagura.style.width = '0px';
   }
}

