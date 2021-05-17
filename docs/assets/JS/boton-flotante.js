// Variables
var amountScrolled = 200;
var amountScrolledNav = 25;

// Agregar clase a un boton dependiendo de una accion
$(window).scroll(function() {
if ( $(window).scrollTop() > amountScrolled ) {
    $('button.boton-flotante').addClass('show');
} else {
    $('button.boton-flotante').removeClass('show');
}
});

// Al accionar un boton se ejecuta una animacion, en este caso el desplazamiento de la posicion actual a 0 con el scroll
$('button.boton-flotante').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});