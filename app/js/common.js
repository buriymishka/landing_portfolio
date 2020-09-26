document.addEventListener("DOMContentLoaded", () => {
  let setupMobileMenu = () => {
    let menuBtn = document.querySelector('.menu-btn');
    let mobileMenu =document.querySelector('.menu-mobile');
    let mobileMenuList = document.querySelector('.menu-mobile__navigation');
    let menuList = document.querySelector('.header__nav-list');
    mobileMenuList.append(menuList.cloneNode(true));
    // mobileMenuList.querySelector('.header__nav-list').classList.remove('main-menu');

    let links = mobileMenuList.querySelectorAll('.header__nav-item a');
    links.forEach((el) => {
      el.addEventListener('click', (e) => {
        closeMenu(e)
      })
    })

    menuBtn.addEventListener('click', function(e){
      closeMenu(e);
    });

    let closeMenu = (e) => {
      e.preventDefault();
      menuBtn.classList.toggle('active');
      menuBtn.classList.toggle('on');
      mobileMenu.classList.toggle('active');
    };
  }
  setupMobileMenu();

  var linkNav = document.querySelectorAll('[href^="#"]'),
  mainTaim = 0.8;  // время в секундах
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
      e.preventDefault();
      var w = window.pageYOffset,  // прокрутка
          hash = this.href.replace(/[^#]*(.*)/, '$1'),  // id элемента, к которому нужно перейти
          t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
          start = null;
      var V = Math.abs(t / (mainTaim * 1000));// t / (mainTaim * 1000)
      requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = (t < 0 ? Math.max(w - progress*V, w + t) : Math.min(w + progress*V, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          // location.hash = hash  // URL с хэшем
        }
      }
    }, false);
  }
});
