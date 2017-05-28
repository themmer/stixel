// Sticky menu shrink logic
$(function() {
  const shrinkClass = 'sticky-shrinknav-wrapper';
  const $body = $('body');
  const headerSizeWithNoMenu = 150;
  $(window).scroll(function() {
    const hasShrunk = $body.hasClass(shrinkClass);
    const winScrollTop = $(window).scrollTop();
    const viewportHeight = $(window).outerHeight(true);
    const documentHeight = $(document).outerHeight(true);
    if (!hasShrunk && winScrollTop >= headerSizeWithNoMenu && documentHeight > viewportHeight + headerSizeWithNoMenu) {
      $body.addClass(shrinkClass);
    } else if (winScrollTop < 1 && hasShrunk) {
      $body.removeClass(shrinkClass);
    }
  });
});

// Active menu highlighting
$(function() {
  const pageUrl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  $('.menu li a').each(function() {
    if ($(this).attr('href') == pageUrl || $(this).attr('href') == '') {
      $(this).addClass('active');
    }
  });
});
