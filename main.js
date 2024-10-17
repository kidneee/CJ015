// ハンバーガーメニュー
const hamburgerButton = document.querySelector('#js-buttonHamburger');

hamburgerButton.addEventListener('click', (e) => {
  const isExpanded = e.currentTarget.getAttribute('aria-expanded') !== 'false';
  e.currentTarget.setAttribute('aria-expanded', !isExpanded);

  document.documentElement.classList.toggle('is-drawerActive');
});

document.getElementById('js-buttonHamburger').addEventListener('click', function () {
  const drawer = document.getElementById('drawerMenu');
  if (drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  } else {
    drawer.classList.add('open');
  }
});

// スライドイン
window.addEventListener('scroll', function () {
  const elementsLeft = document.querySelectorAll('.js-slidein-left');
  const elementsRight = document.querySelectorAll('.js-slidein-right');
  const elementsZoom = document.querySelectorAll('.js-zoom');

  elementsLeft.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('active');
    }
  });

  elementsRight.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('active');
    }
  });

  elementsZoom.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('active');
    }
  });
});
