$('.menu').removeClass('active');

$('.hamburguesa').click(function() {
    if ($('.menu').hasClass('active')) {
        $('.menu').removeClass('active');
    } else {
        $('.menu').addClass('active');
    }
});