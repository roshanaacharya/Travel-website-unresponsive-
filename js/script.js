
$(window).on('load', function () {
    $('#status').delay(1000).fadeOut(1000);
    $('#preloader').delay(1000).fadeOut(1000);
  });

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

