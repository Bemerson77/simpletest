var $ = require('jquery');

$('.product-menu-wrapper').hover(function(e){
  if (e.type === "mouseenter") {
    $(this).find('.product-menu').addClass('menu-open');
  }else{
    $(this).find('.product-menu').removeClass('menu-open');
  }
});
