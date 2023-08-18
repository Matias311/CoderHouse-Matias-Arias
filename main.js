const texto = document.querySelector("#texto"); 
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

menu.addEventListener ('click', () => {

    texto.classList.add('visible');
    close.classList.add('close-active')
    menu.classList.add('menuhamburgesa-active');

})


close.addEventListener ('click', () => {

    texto.classList.remove('visible');
    close.classList.remove('close-active');
    menu.classList.remove('menuhamburgesa-active');
    
})