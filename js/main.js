// Detect Mobile
var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  ua
);
function inputHolder() {
  $('.fs-group input[type="text"], .fs-group input[type="password"]').focus(function (e) {
    $(this).parent().parent().removeClass('fs-show-error');
  });
  $('.fs-error-txt').click(function () {
    $(this).parent().removeClass('fs-show-error');
    $(this).parent().find('input').focus();
  });
}

// Events Common
function fsEvent() {

  $('.tab-q9 li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-q9 li').removeClass('active');
      $(this).addClass('active');
      $('.tab-size.q9 .by-tabsize').removeClass('active');
      $('.tab-size.q9 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-q9R li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-q9R li').removeClass('active');
      $(this).addClass('active');
      $('.tab-size.q9R .by-tabsize').removeClass('active');
      $('.tab-size.q9R .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-q8 li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-q8 li').removeClass('active');
      $(this).addClass('active');
      $('.tab-size.q8 .by-tabsize').removeClass('active');
      $('.tab-size.q8 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-qa6595 .size li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-qa6595 .size li').removeClass('active');
      $(this).addClass('active');
      $('.tab-qa6595 .by-tabsize').removeClass('active');
      $('.tab-qa6595 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-qa8580 .size li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-qa8580 .size li').removeClass('active');
      $(this).addClass('active');
      $('.tab-qa8580 .by-tabsize').removeClass('active');
      $('.tab-qa8580 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-qa8570 .size li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-qa8570 .size li').removeClass('active');
      $(this).addClass('active');
      $('.tab-qa8570 .by-tabsize').removeClass('active');
      $('.tab-qa8570 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-qa6565 .size li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-qa6565 .size li').removeClass('active');
      $(this).addClass('active');
      $('.tab-qa6565 .by-tabsize').removeClass('active');
      $('.tab-qa6565 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tab-qa8560 .size li').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-size');
      $('.tab-qa8560 .size li').removeClass('active');
      $(this).addClass('active');
      $('.tab-qa8560 .by-tabsize').removeClass('active');
      $('.tab-qa8560 .by-tabsize[data-size=' + target + ']').addClass('active');
    }
  });

  $('.tabs span').on('click', function () {
    if (!$(this).hasClass('active')) {
      var target = $(this).attr('data-tab');
      $('.tabs span').removeClass('active');
      $('.tv-item').removeClass('active');
      $('.tv-item[data-tv=' + target + ']').addClass('active');
      $(this).addClass('active');
    }
  });


  $('.fs-but').on('click', function () {
    var top = $('.fs-agencies').offset().top;
    $('html,body').animate({ scrollTop: top }, 500);
  });

  $('.add-to-cart').on('click', function () {
    fbq('track', 'AV-TV-Premium-Dat Mua Ngay');
    gtag_report_add_to_cart_conversion();
  });
 
  $('.btn-readmore').on('click', function () {
    fbq('track', 'AV-TV-Premium-Tim Hieu Them');
  });

  $('#commpare-qled-8k').on('click', function () {
    fbq('track', 'AV-TV-Premium-So Sanh QLED TV');
    gtag_report_compare_qled_tv_conversion();
  });
  inputHolder();
}

// Create Slider
function fsSlider() {
  //2020
  if ($('.features-slider').length) {

    new Swiper('.features-slider', {
      effect: 'slide',
      loop: true,
      speed: 800,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.fs-features .swiper-pagination',
        clickable: true
      },
      a11y: {
        enabled: false
      },
      navigation: {
        nextEl: '.fs-features .swiper-button-next',
        prevEl: '.fs-features .swiper-button-prev',
      }
    });
  }

  // Products slider
  if ($('.fs-product-item').length) {
    var productSlider = null;
    var breakPoint = 1100;
    function initSwiper() {
      var screenWidth = $(window).width();
      if (screenWidth < breakPoint && productSlider == undefined) {
        productSlider = new Swiper('.fs-donate-slider', {
          effect: 'slide',
          loop: false,
          speed: 1000,
          slidesPerView: 1,
          slidesPerGroup: 1,
          //simulateTouch: false,
          //allowTouchMove: false,
          navigation: {
            nextEl: '.fs-product-item .swiper-button-next',
            prevEl: '.fs-product-item .swiper-button-prev',
          },
          a11y: {
            enabled: false
          },
          on: {
            init: function () {
            }, transitionStart: function () {
              $('.fs-products-nav .fs-box').removeClass('active');
              var relIndex = this.activeIndex + 1;
              $('.fs-products-nav .fs-box:nth-child(' + relIndex + ')').addClass('active');
            }, transitionEnd: function () {
            }
          },
        });

        var tabOmni = 'buy option|;QA82Q800TAK|QA82Q800TAKXXV';
        // Active products event
        $('.fs-products-nav .fs-box').on('click', function () {
          if (!$(this).hasClass('active')) {
            var index = $(this).attr('data-index');
            tabOmni = $(this).attr('data-but');
            $('.fs-donate-box .fs-but').attr('data-omni', tabOmni);
            productSlider.slideTo(index, 1000, null);
          }
        });

      } else if (screenWidth > breakPoint && productSlider != undefined) {
        $('.fs-products-nav .fs-box').unbind('click');
        productSlider.destroy();
        productSlider = undefined;
      }
    }
    initSwiper();
    let _productTimeout = null;
    $(window).on('resize', function () {
      if (_productTimeout) {
        clearTimeout(_productTimeout);
      }
      _productTimeout = setTimeout(initSwiper, 500);
    });
  }


  //Promotion slider
  if ($('.promotion-slider').length) {
    new Swiper('.promotion-slider', {
      effect: 'slide',
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.fs-promotions .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.fs-promotions .swiper-button-next',
        prevEl: '.fs-promotions .swiper-button-prev',
      },
      a11y: {
        enabled: false
      }
    });
  }
  //Stores slider
  if ($('.apps-box').length) {

    function addScaleClass() {
      let $activeSlide = $('.apps-slider .swiper-slide-active');
      let scaleClass = ['scale-075', 'scale-054', 'scale-033', 'scale-012'];
      let removeClass = scaleClass.join(' ');
      let currentIndex = null;
      let allSlides = [];
      $activeSlide.parent().children().each(function (index, value) {
        let $item = $(this);
        $item.removeClass(removeClass).removeClass('scale-right scale-left');
        if ($item.is('.swiper-slide-active')) {
          currentIndex = index;
        }
        allSlides.push($item);
      });
      for (let i = 0; i < scaleClass.length; i++) {
        $(allSlides[currentIndex + i + 1]).addClass(scaleClass[i]).addClass('scale-right');
        $(allSlides[currentIndex - i - 1]).addClass(scaleClass[i]).addClass('scale-left');
      }
    }

    if ($('.fs-apps').length) {
      var slide = new Swiper('.apps-slider-txt', {
        effect: 'fade',
        speed: 300,
        spaceBetween: 10,
        loop: false,
        simulateTouch: false,
        allowTouchMove: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      });

      var thumb = new Swiper('.apps-slider', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        loopedSlides: 7,
        loop: true,
        navigation: {
          nextEl: '.fs-apps .swiper-button-next',
          prevEl: '.fs-apps .swiper-button-prev',
        },
        on: {
          init: function () {
            addScaleClass();
            this.slideTo(3, 300, null);
          }, transitionStart: function () {
            var index = this.realIndex;
            slide.slideTo(index, 300, null);
            addScaleClass();
            this.update();
          }, transitionEnd: function () {
          }
        }
      });

      $('.apps-slider .swiper-slide').on('click', function () {
        var index = $('.apps-slider .swiper-slide').index(this);
        thumb.slideTo(index, 300, null);
      });

    }




  }


  if ($('.tv-main-slider').length) {
    var mainSlider = new Swiper('.tv-main-slider', {
      effect: 'slide',
      loop: false,
      speed: 800,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.tv-main .swiper-pagination',
        clickable: true,
        //type: 'fraction',
      },
      on: {
        init: function () {
        }, transitionStart: function () {
          var relIndex = this.activeIndex + 1;
          $('.tv-thumb li').removeClass('active');
          $('.tv-thumb li:nth-child(' + relIndex + ')').addClass('active');
        }, transitionEnd: function () {
        }
      },
      a11y: {
        enabled: false
      }
    });

    $('.tv-thumb li').on('click', function () {
      if (!$(this).hasClass('active')) {
        var index = $('.tv-thumb li').index(this);
        mainSlider.slideTo(index, 800, null);
      }
    });

    $('.tab-size-nav span').on('click', function () {
      if (!$(this).hasClass('active')) {
        var target = $(this).attr('data-tab');
        var tagging =  $(this).attr('data-but');
        $('.tv-items .fs-but').attr('data-omni', tagging);
        $('.tv-pics img').removeClass('active');
        $('.tv-pics img[data-tab=' + target + ']').addClass('active');
        $('.tab-size-nav span, .tab-size-content .tab-size').removeClass('active');
        $('.tab-size-content .tab-size[data-tab=' + target + ']').addClass('active');
        $(this).addClass('active');
        mainSlider.slideTo(0, 800, null);
      }
    });


  }

  if ($('.tv-main-2020-slider').length) {
    new Swiper('.tv-main-2020-slider', {
      effect: 'slide',
      loop: false,
      speed: 1000,
      breakpoints: {
        1100: {
          slidesPerView: 1,
        }
      },
      slidesPerView: 3,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.tv-item .swiper-button-next',
        prevEl: '.tv-item .swiper-button-prev',
      },
      a11y: {
        enabled: false
      }
    });
  }


}
//Info slider

// Variables for Scroll
var isCroll = false,
  scrollPos = 0,
  threshold = 100;

// LazyLoad
function ImgLazyLoad() {

  lazyImages = window.innerWidth > 1100 ? document.querySelectorAll('.cmPic.fs-lazy, .pcPic.fs-lazy') : document.querySelectorAll('.cmPic.fs-lazy, .spPic.fs-lazy');
  lazyBgs = window.innerWidth > 1100 ? document.querySelectorAll('.cmBg.fs-lazy, .pcBg.fs-lazy') : document.querySelectorAll('.cmBg.fs-lazy, .spBg.fs-lazy');

  // Lazy images
  [].slice.call(lazyImages).forEach(function (elm) {
    if (elm.getBoundingClientRect().top <= window.innerHeight + threshold * 5) {
      elm.setAttribute('src', elm.getAttribute('data-src'));
      elm.classList.remove('fs-lazy');
    }
  });

  // Lazy background
  [].slice.call(lazyBgs).forEach(function (elm) {
    if (elm.getBoundingClientRect().top <= window.innerHeight + threshold * 5) {
      elm.style.backgroundImage = 'url(' + elm.getAttribute('data-src') + ')';
      elm.classList.remove('fs-lazy');
    }
  });

}

function ImgLazyAll() {
  lazyAllImages = window.innerWidth > 1100 ? document.querySelectorAll('.cmPic.fs-lazy, .pcPic.fs-lazy') : document.querySelectorAll('.cmPic.fs-lazy, .spPic.fs-lazy');
  lazyAllBgs = window.innerWidth > 1100 ? document.querySelectorAll('.cmBg.fs-lazy, .pcBg.fs-lazy') : document.querySelectorAll('.cmBg.fs-lazy, .spBg.fs-lazy');
  // Lazy images
  [].slice.call(lazyAllImages).forEach(function (elm) {
    elm.setAttribute('src', elm.getAttribute('data-src'));
    elm.classList.remove('fs-lazy');
  });
  // Lazy background
  [].slice.call(lazyAllBgs).forEach(function (elm) {
    elm.style.backgroundImage = 'url(' + elm.getAttribute('data-src') + ')';
    elm.classList.remove('fs-lazy');
  });
}


var loading = true;

function starPage() {

  ImgLazyLoad();
  if (loading) {
    loading = false;
    $('.fs-loading').fadeOut(1000, function () {
      $('.fs-loading').remove();

      onScroll(); // must be call here fisrt

      // Fade Page [ this can edit for each projects]
      isCroll = true;

      fsEvent();

    });

    setTimeout(function () {
      ImgLazyAll();
      fsSlider();
    }, 300);
  }

}


// Func Scroll
function onScroll() {

  if (isCroll) {
    //Can play animation
  }
  ImgLazyLoad();
}

// Func Resize
function Resize() {
  // Need detect not mobile when resize because in mobile scrolling call resize
  if (!isMobile) {
    ImgLazyLoad();
  }

}

// Func Rotate
function Rotate() {
  ImgLazyLoad();

}

// Set Scroll for Page
$(window).on('scroll', onScroll);

// Page Rezize
$(window).on('resize', Resize);

// Page Rotate
$(window).on('orientationchange', Rotate);

//  Page load
$(window).on('load', function () {
  if (loading) {
    starPage();
  }
});

$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

// Page Ready
(function () {
  ImgLazyLoad(); // must be call here fisrt
  setTimeout(function () {
    if (loading) {
      starPage();
    }
  }, 3000);
})();
