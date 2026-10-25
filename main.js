(function () {
  // Photos : si l'image charge, on masque la légende ; sinon le bloc coloré reste.
  document.querySelectorAll('.photo img').forEach(function (img) {
    var fig = img.closest('.photo');
    function ok() { fig.classList.add('ok'); }
    function ko() { img.remove(); }
    if (img.complete) { img.naturalWidth ? ok() : ko(); }
    else { img.addEventListener('load', ok); img.addEventListener('error', ko); }
  });

  // Menu mobile
  var burger = document.querySelector('.burger'), nav = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // Formulaire (à relier à votre service d'e-mail ou de réservation)
  var form = document.querySelector('.form'), msg = form.querySelector('.msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nom = form.nom.value.trim(), tel = form.tel.value.trim();
    msg.textContent = (nom && tel) ? 'Merci ' + nom + ', nous vous recontactons très vite.' : 'Merci de renseigner votre nom et votre téléphone.';
    if (nom && tel) form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();