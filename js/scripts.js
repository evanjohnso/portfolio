$(document).ready( () => {
    $('.nav-link').click( (e) => {
      const ref = e.target.getAttribute('href');
      $('html, body').animate({
        scrollTop: $(ref).offset().top
    }, 400);
    });
  });