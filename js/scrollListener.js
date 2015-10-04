function ScrollListener() {
  var lastScrollIndex = $(window).scrollTop();
  $(window).scroll(debounce(150, function () {
    var container = el.parents('.flip-container');
    var scrollIndex = $('body').scrollTop() || $('html').scrollTop();

    if (scrollIndex > lastScrollIndex && lastScrollIndex > 100 && !container.hasClass('hidden-nav')) {
      container.addClass('hidden-nav');
    }
    if (container.hasClass('hidden-nav') && scrollIndex < lastScrollIndex) {
      container.removeClass('hidden-nav');

    }
    lastScrollIndex = scrollIndex;

  }));


}
