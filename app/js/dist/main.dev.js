"use strict";

$(function () {
  $('.header__burger').on('click', function () {
    $('.header__burger,.header__top-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.btn-form').on('click', function () {
    $('.btn-form').toggleClass('active');
    $('.header__form-slide').toggleClass('active');
  });
  $('.btn-social').on('click', function () {
    $('.btn-social').toggleClass('active');
    $('.btn-social__list').slideToggle(300);
  });
  $(".testimonials-slider").slick({
    dots: true,
    adaptiveHeight: true,
    appendArrows: ".testimonials",
    prevArrow: '<button class="slick-arrow slick-prev "><img src="../images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next "><img src="../images/icons/arrow-right.svg" alt=""></button>',
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: "linear",
    responsive: [{
      breakpoint: 880,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  new WOW().init();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $(".header-top").css("background-color", "rgb(0 0 0 / 80%)");
    } else {
      $(".header-top").css("background-color", "rgb(0 0 0)");
    }
  });
});