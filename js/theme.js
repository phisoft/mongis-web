;(function($){
    "use strict"

    var nav_offset_top = $('header').height() + 50;

    /* Navbar Fixed on scroll */
    function navbarFixed(){
        if ( $('.header_area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        }
    }
    navbarFixed();

    /* Scrollspy - highlight active nav item */
    var sections = $('section[id], div[id^="services-"]');
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + 100;
        sections.each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');
            if (scrollPos >= top && scrollPos < bottom) {
                $('.menu_nav .nav-item').removeClass('active');
                $('.menu_nav .nav-item a[href="#' + id + '"]').parent().addClass('active');
            }
        });
    });

    /* Smooth scroll for anchor links */
    $('.menu_nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
    });

    /* Back to Top Button */
    var $backToTop = $('#backToTop');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $backToTop.addClass('visible');
        } else {
            $backToTop.removeClass('visible');
        }
    });
    $backToTop.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* Navbar dropdown accessibility */
    $('.dropdown-toggle').on('click', function() {
        var $this = $(this);
        var isExpanded = $this.attr('aria-expanded') === 'true';
        $this.attr('aria-expanded', !isExpanded);
    });

    /* Close mobile menu on link click */
    $('.menu_nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery)
