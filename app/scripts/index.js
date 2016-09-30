var $ = require('jquery');


// toggles product menu on hover event
$('.product-menu-wrapper').hover(function(e){
  if (e.type === "mouseenter") {
    $(this).find('.product-menu').addClass('menu-open');
  }else{
    $(this).find('.product-menu').removeClass('menu-open');
  }
});
