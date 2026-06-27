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
    var sections = $('section[id]');
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

})(jQuery)
