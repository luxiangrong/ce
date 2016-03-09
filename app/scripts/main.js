/* global jQuery */

'use strict';

jQuery(function($) {
    $('#history-slick').slick({
        speed: 500
    });

    $('.btn-more').on('click', function(e) {
        e.preventDefault();
        $(this).parent().find('.more').show();
        $(this).hide();
    });
});
