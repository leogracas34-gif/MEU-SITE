// Espera a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
   
    const header = document.querySelector('header');

    // Função para mudar a cor do header ao rolar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('black-bg');
        } else {
            header.classList.remove('black-bg');
        }
    });

    // Menu Mobile (Simples toggle)
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            // Lógica simples para mostrar menu no mobile seria aqui
            alert("Menu Mobile Clicado!");
        });
    }

    console.log("Script do VLTV PLAY carregado com sucesso!");
});