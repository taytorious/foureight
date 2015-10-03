
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

    function debounce(threshold, func, execAsap) {
      var timeout = void 0;
      return function() {
        var args, delayed, obj;
        delayed = function() {
          if (!execAsap) {
            func.apply(obj, args);
          }
          timeout = null;
          return timeout;
        };
        obj = this;
        args = arguments;
        if (timeout) {
          clearTimeout(timeout);
        } else {
          if (execAsap) {
            func.apply(obj, args);
          }
        }
        timeout = setTimeout(delayed, threshold || 100);
        return timeout;
      };
    }





})(jQuery);