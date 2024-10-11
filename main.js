// ハンバーガーメニュー
document.querySelector('.header-menu__btn').addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});

// スライドイン
window.addEventListener('scroll', function () {
  const elementsLeft = document.querySelectorAll('.js-slidein-left');
  const elementsRight = document.querySelectorAll('.js-slidein-right');
  const elementsZoom = document.querySelectorAll('.js-zoomin');

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
});
