function buttonUpper() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function definirBotao() {
    if (window.scrollY === 0) {
        document.querySelector('.button-upper').style.display = 'none';
    } else {
        document.querySelector('.button-upper').style.display = 'block';
    }
}

window.addEventListener('scroll', definirBotao);


function botaoMenu() {
    let menu = document.querySelector('.nav-list');

    if (menu.style.display == 'flex') {
      menu.style.display= 'none';
    } else {
      menu.style.display = 'flex';
    }

  }; 