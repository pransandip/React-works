$(document).ready(function () {
    // Header fixed and Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
            $('#header').addClass('header-fixed');
        } else {
            $('.back-to-top').fadeOut('slow');
            $('#header').removeClass('header-fixed');
        }
    });

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Navigation

    $('ul.nav-menu li:has(ul)').addClass('menu-has-children');

    // Mobile Navigation

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });

        $('#nav-menu-container').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('body').append($mobile_nav);
        $('body .nav-header .container').prepend('<button type="button" id="mobile-nav-toggle"><i class="bx bx-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('bx-x bx-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('bx-x bx-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });

    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    $('li.menu-has-children > a').removeAttr('href');


})