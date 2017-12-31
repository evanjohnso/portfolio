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

  const name = "Evan Johnson";
  const dev = "Web & Mobile Developer";
  const speed = 200;

  let header = document.getElementById("header-name");
  let title = document.getElementById("header-developer");

  let kill = false;
  function typeWriter(html, txt, charCounter) {
    if (kill) return;
    if (charCounter < txt.length) {
      html.innerHTML += txt.charAt(charCounter);
      charCounter++;
      setTimeout(typeWriter.bind(this, html, txt, charCounter), speed);
      return;
    }
    if (txt === dev) kill = true;
    typeWriter(title, dev, 0)
  }
  typeWriter(header, name, 0)
});
