document.querySelector('#nav-opt1').addEventListener('click', ()=>{
    let title = document.querySelector('#h1-main');
    let noticia = document.querySelector('.hidden-bsb');

    if (title.innerHTML == 'Ciências') {
        let noticiaCiencias = document.querySelector('.noticias-ciencias');
        noticiaCiencias.classList.replace('noticias-ciencias', 'hidden-ciencias');
    } else if(title.innerHTML == 'Futebol'){
        let noticiaFutebol = document.querySelector('.noticias-futebol');
        noticiaFutebol.classList.replace('noticias-futebol', 'hidden-futebol');
    };

    title.innerHTML = 'Notícias de Brasília';
    noticia.classList.replace('hidden-bsb', 'noticias-bsb');
});

document.querySelector('#nav-opt2').addEventListener('click', ()=>{
    let title = document.querySelector('#h1-main');
    let noticia = document.querySelector('.hidden-ciencias');

    if (title.innerHTML == 'Notícias de Brasília') {
        let noticiaBsb = document.querySelector('.noticias-bsb');
        noticiaBsb.classList.replace('noticias-bsb', 'hidden-bsb');
    } else if(title.innerHTML == 'Futebol'){
        let noticiaFutebol = document.querySelector('.noticias-futebol');
        noticiaFutebol.classList.replace('noticias-futebol', 'hidden-futebol');
    };

    title.innerHTML = 'Ciências';
    noticia.classList.replace('hidden-ciencias', 'noticias-ciencias');
});

document.querySelector('#nav-opt3').addEventListener('click', ()=>{
    let title = document.querySelector('#h1-main');
    let noticia = document.querySelector('.hidden-futebol');

    if (title.innerHTML == 'Notícias de Brasília') {
        let noticiaBsb = document.querySelector('.noticias-bsb');
        noticiaBsb.classList.replace('noticias-bsb', 'hidden-bsb');
    } else if (title.innerHTML == 'Ciências') {
        let noticiaCiencias = document.querySelector('.noticias-ciencias');
        noticiaCiencias.classList.replace('noticias-ciencias', 'hidden-ciencias');
    };

    title.innerHTML = 'Futebol';
    noticia.classList.replace('hidden-futebol', 'noticias-futebol');
});