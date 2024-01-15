
// Header
$(".nav-link").on("click", function(){
	$(".nav-link.active").removeClass("active");
	$(this).addClass("active");
});

// function bootnavbar(options) {
//   const defaultOption = {
//     selector: "main_navbar",
//     animation: true,
//     animateIn: "animate__fadeIn",
//   };

//   const bnOptions = { ...defaultOption, ...options };

//   init = function () {
//     var dropdowns = document
//       .getElementById(bnOptions.selector)
//       .getElementsByClassName("dropdown");

//     Array.prototype.forEach.call(dropdowns, (item) => {
//       //add animation
//       if (bnOptions.animation) {
//         const element = item.querySelector(".dropdown-menu");
//         element.classList.add("animate__animated");
//         element.classList.add(bnOptions.animateIn);
//       }

//       //hover effects
//       item.addEventListener("mouseover", function () {
//         this.classList.add("show");
//         const element = this.querySelector(".dropdown-menu");
//         element.classList.add("show");
//       });

//       item.addEventListener("mouseout", function () {
//         this.classList.remove("show");
//         const element = this.querySelector(".dropdown-menu");
//         element.classList.remove("show");
//       });
//     });
//   };

//   init();
// }


// Sticky Header
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",scrollY>100);
 });

// Table Sorting
$(document).ready(function () {
    $('#example').DataTable();
});



// Nav Menu

// document.addEventListener("DOMContentLoaded", function () {
//   // make it as accordion for smaller screens
//   if (window.innerWidth > 992) {

//     document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

//       everyitem.addEventListener('mouseover', function (e) {

//         let el_link = this.querySelector('a[data-bs-toggle]');

//         if (el_link != null) {
//           let nextEl = el_link.nextElementSibling;
//           el_link.classList.add('show');
//           nextEl.classList.add('show');
//         }

//       });
//       everyitem.addEventListener('mouseleave', function (e) {
//         let el_link = this.querySelector('a[data-bs-toggle]');

//         if (el_link != null) {
//           let nextEl = el_link.nextElementSibling;
//           el_link.classList.remove('show');
//           nextEl.classList.remove('show');
//         }


//       })
//     });

//   }
//   // end if innerWidth
// });




// Back to Top Button
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// Tab Section start

$(document).ready(function () {
  $('#content-one').show();
  $('#content-two').hide();
  $('#content-three').hide();
  $('#content-four').hide();
  $('#content-five').hide();

  $('#tab-one').click(function () {

    $('#tab-one').addClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');


    $('#content-one').show();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').hide();
  });

  $('#tab-two').click(function () {

    $('#tab-one').removeClass('active');
    $('#tab-two').addClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');

    $('#content-one').hide();
    $('#content-two').show();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').hide();
  });

  $('#tab-three').click(function () {

    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').addClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').removeClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').show();
    $('#content-four').hide();
    $('#content-five').hide();
  });

  $('#tab-four').click(function () {

    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').addClass('active');
    $('#tab-five').removeClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').show();
    $('#content-five').hide();
  });

  $('#tab-five').click(function () {

    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#tab-four').removeClass('active');
    $('#tab-five').addClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').hide();
    $('#content-four').hide();
    $('#content-five').show();
  });
});
// Tab Section end



// Start Banner Slider 
var swiper = new Swiper(".bannerSwiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  effect: "fade",
});
//End Banner Slider   



// Home Department slider one
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});


// Eventss Slider
var swiper = new Swiper(".eventtSwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});



// Home Alumni Slider
var swiper = new Swiper(".alumniSwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});
// Home Gallery End

// Video Gallery Start
var swiper = new Swiper(".videoSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  clickable: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
});
var videoSwiper2 = new Swiper(".videoSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  clickable: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
});
// Video Gallery end

// Department Teachers Slider
var swiper = new Swiper(".teachersSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});

//   Department Gallery Slider
var swiper = new Swiper(".departmentSwiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// 
var swiper = new Swiper(".bnccSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//   Counter Up
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//Notice Board Close Button
$(document).ready(function () {
  $("#closebtn").click(function () {
    $(".all-notice").addClass("hideit");
  });
});


$(document).ready(function () {
  $("#clossebtn").click(function () {
    $(".notiss-board").addClass("hideit");
  });
});
// WOW JS
new WOW().init();

// center class remove

    if (window.innerWidth < 992){
        const boxes = document.getElementsByTagName("div");
for(const box of boxes) {
  box.classList.remove("center");
}
    }
    