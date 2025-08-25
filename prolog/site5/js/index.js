$(document).ready(function() {
    // Initialize Bootstrap Carousels
    var heroCarousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
        interval: 3000,
        pause: 'hover'
    });

    // Configuração do carousel de clientes para mostrar 4 itens no desktop e 2 no mobile
    // e avançar um item por vez, mantendo 4 itens visíveis
    var clientsCarousel = new bootstrap.Carousel(document.querySelector('#clientsCarousel'), {
        pause: false,
        ride: 'carousel',
        interval: 8000
    });
});