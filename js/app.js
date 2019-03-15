$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.links').toggleClass('links_active');
  $('.menu-btn').toggleClass('menu-btn_active');
})

$('.links_btn').on('click', function(e) {
  $('.links_active').toggleClass('links_active');
  $('.menu-btn_active').toggleClass('menu-btn_active');
})

