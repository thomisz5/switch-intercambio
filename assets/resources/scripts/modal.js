$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.slider').slider({
        indicators: true,
        height: 500,
        transition: 500,
        interval: 2500,
    });

})
//modal
//querySelector
const elemsModal = document.querySelectorAll(".modal");
const instance = M.Modal.init(elemsModal);

function github() {
    var val = window.confirm('Deseja ir para o github?');
    if (val == true) {
        window.open("https://github.com/thomisz5/switch-intercambio");
    } else {
        window.alert('Continue explorando o site!');
    }
};