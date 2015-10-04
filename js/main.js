
(function($) {

    $(".pebble-donate__tab--link").on ("click swipe", function(e) {
        var donate = $(".pebble-donate");

        console.log("TAB CLICK");
        if (donate.hasClass("active")) {
            donate.removeClass("active");
        } else {
            donate.addClass("active");
            e.preventDefault();
        }
    });

    if (isMobile.any) {
        var navController = new ScrollListener();
    }

})(jQuery);