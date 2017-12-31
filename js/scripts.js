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

  const txt = "Evan Johnson";
  const dev = "Web & Mobile Developer";
  const speed = 200;

  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("header-name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      return;
    }
    typeWriter2();
  }
  let j = 0;
  function typeWriter2() {
    if (j < dev.length) {
      document.getElementById("header-developer").innerHTML += dev.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }
  typeWriter()
});
