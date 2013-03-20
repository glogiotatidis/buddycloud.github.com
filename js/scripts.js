$(function() {
    $('.fixedHeader .container').append($('.primarySection header').clone());

    $('.socialNetwork').waypoint(function(direction) {
        if (direction === 'down') {
            $('.fixedHeader').fadeIn('fast');
        } else {
            $('.fixedHeader').fadeOut('fast');
        }
    });
})