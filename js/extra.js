/**
 * Created by tailordevs on 29-03-2016.
*/
 $(document).ready(function () {
                $('.button-collapse').sideNav()
                           });

$(window).scroll(function() {
    var nav=$('nav');
    if ($(this).scrollTop() > 100){
        nav.addClass("white");
        $("a").addClass("color-black");
        nav.removeClass("transparent");
        $("#nav-under").find('img.img-logo').attr('src','img/blacklogo.jpg');

    }
    else{
        nav.removeClass("white");
        $("a").removeClass("color-black");
        nav.addClass("transparent");
        $("#nav-under").find('img.img-logo').attr('src','img/white.jpg');
    }
});

            $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(500).css({'overflow':'visible'});
        })
 