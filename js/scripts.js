$(document).ready( () => {
  $('.nav-link').click( (e) => {
    const ref = e.target.getAttribute('href');
      $('html, body').animate({
        scrollTop: $(ref).offset().top
    }, 400);
  });
  $(document).click( event => {
    var clickover = $(event.target);
    var $navbar = $("#navbarResponsive");
    var _opened = $navbar.hasClass('collapse');
    if (_opened && !clickover.hasClass("nav-item")) {
      $navbar.collapse('hide');
    };
  });
});
