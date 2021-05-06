let swiper = new Swiper('.swiper-container', {
  speed: 700,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '  ' +
        '<span class="' + totalClass + '"></span>';
    }
  },
});

function addZero(num) {
  return (num > 9) ? num : '0' + num;
}
// input-mask tel //
let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+38 (999) 999 99 99', { "clearIncomplete": true });

im.mask(selector);
// input-mask tel //

// header_burger //

let burgerButton = document.querySelector('.header_burger-menu');

burgerButton.addEventListener('click', menuBurger);

function menuBurger() {
  let menuList = document.querySelector('.header_menu');
  if (menuList.classList.contains('menu_active')) {
    menuList.classList.remove('menu_active')
  } else {
    menuList.classList.add('menu_active')
  }
  burgerButton.classList.toggle('burger_active')
}

// header_burger //

AOS.init(
  {
    offset: 250
  }
);