$(document).ready( () => {
  $(document).click(collapsingNavBar);
  $('.nav-link').click(scrollTo);
  $('header').imagesLoaded( {background: true}, typeHeaders);
});

function scrollTo(e) {
  if (!e) { return; }
  const ref = e.target.getAttribute('href');
  $('html, body').animate({
    scrollTop: $(ref).offset().top
  }, 400);
}
function collapsingNavBar(e) {
  console.log(e)
  let clickover = $(e.target);
  let $navbar = $("#navbarResponsive");
  let _opened = $navbar.hasClass('collapse');
  if (_opened && !clickover.hasClass("nav-item")) {
    $navbar.collapse('hide');
  };
}
function typeHeaders() {

  const header1 = "Evan Johnson";
  const header2 = "Web & Mobile Developer";
  const speed = 150;
  
  let name = document.getElementById("header-name");
  let title = document.getElementById("header-developer");
  
  let finished = false;
  typeWriter(name, header1, 0);
  function typeWriter(html, txt, charCounter) {
    if (finished) return;
    if (charCounter < txt.length) {
      html.innerHTML += txt.charAt(charCounter);
      charCounter++;
      setTimeout(typeWriter.bind(this, html, txt, charCounter), speed);
      return;
    }
    if (txt === header2) finished = true;
    // setTimeout(typeWriter(title, header2, 0), 3000);
    typeWriter(title, header2, 0)
  }
};