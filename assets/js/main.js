// $.noConflict();
$(document).ready(function () {
  $(".main-banner").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      "<a class='arrow-slick arrow-prev'><img src='assets/images/chevron-dark.svg' /></a>",
    nextArrow:
      "<a class='arrow-slick arrow-next'><img src='assets/images/chevron-dark.svg' /></a>",
  });

  $(".youtube-stories").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<a class='arrow-slick arrow-prev'><img src='assets/images/chevron-light.svg' /></a>",
    nextArrow:
      "<a class='arrow-slick arrow-next'><img src='assets/images/chevron-light.svg' /></a>",
  });

  $(".care-slider").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow:
      "<a class='arrow-slick arrow-prev'><img src='assets/images/chevron-light.svg' /></a>",
    nextArrow:
      "<a class='arrow-slick arrow-next'><img src='assets/images/chevron-light.svg' /></a>",
  });

  $(".gwk-slider").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow:
      "<a class='arrow-slick arrow-prev'><img src='assets/images/chevron-light.svg' /></a>",
    nextArrow:
      "<a class='arrow-slick arrow-next'><img src='assets/images/chevron-light.svg' /></a>",
  });

  // Global Menus
  $(function () {
    var loc = window.location.href;
    if (/index.html/.test(loc)) {
      $("ul.menu > li:nth-of-type(1)").addClass("active");
    } else if (/about.html/.test(loc)) {
      $("ul.menu > li:nth-of-type(2)").addClass("active");
    } else if (/care.html/.test(loc)) {
      $("ul.menu > li:nth-of-type(3)").addClass("active");
    } else if (/product.html/.test(loc)) {
      $("ul.menu li:nth-of-type(4)").addClass("active");
    } else if (/news.html/.test(loc)) {
      $("ul.menu > li:nth-of-type(5)").addClass("active");
    }
  });

  // Load More
  // $(".grid-stories").showMoreItems({
  //   nowNum: 1,
  //   startNum: 6,
  //   afterNum: 3,
  //   moreText: "Load More"
  // });

  $('[data-toggle="tooltip"]').tooltip({
    container: "body",
  });

  $("#click").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#div1").offset().top,
      },
      2000
    );
  });

  // $(".dropdown").hover(function() {
  //   $(".dropdown-toggle", this).trigger("hover");
  // });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: {
    display: ["counter", "zoom", "close"],
  },
  mainClass: "fancy-light",
});

Fancybox.bind('[data-fancybox="video"]', {
  Thumbs: true,
  Toolbar: {
    display: ["counter", "zoom", "close"],
  },
  mainClass: "fancy-dark",
});

Fancybox.bind('[data-fancybox="gwk"]', {
  Thumbs: false,
  fit: "cover",
  Toolbar: {
    display: ["counter", "zoom", "close"],
  },
  mainClass: "fancy-dark",
});

Fancybox.bind('[data-fancybox="borobudur"]', {
  Thumbs: false,
  fit: "cover",
  Toolbar: {
    display: ["counter", "zoom", "close"],
  },
  mainClass: "fancy-dark",
});

// Fancybox.bind('[id="mainCarousel"]', {
//   Thumbs: true,
//   Toolbar: {
//     display: ["counter", "zoom", "close"]
//   },
//   mainClass: "fancy-dark"
// });

// CAROUSEL WITH THUMB
// const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
//   Dots: false,
//   center: true,
//   slidesPerPage: 1,
//   on: {
//     createSlide: (carousel, slide) => {
//       slide.Panzoom = new Panzoom(slide.$el.querySelector(".panzoom"), {
//         panOnlyZoomed: true,
//         resizeParent: true
//       });
//     },
//     deleteSlide: (carousel, slide) => {
//       if (slide.Panzoom) {
//         slide.Panzoom.destroy();
//         slide.Panzoom = null;
//       }
//     }
//   }
// });

// const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
//   Sync: {
//     target: mainCarousel,
//     friction: 0
//   },
//   Dots: false,
//   Navigation: false,
//   center: true,
//   infinite: false
// });

// Background parallax
const simpleParallax = (elem, modifier) => {
  let paras = document.getElementsByClassName(elem);
  for (let i = 0; i < paras.length; i++) {
    paras[i].setAttribute(
      "style",
      "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
    );
  }
  const sp = () => {
    for (let i = 0; i < paras.length; i++) {
      let x = paras[i].getBoundingClientRect().top / modifier;
      let y = Math.round(x * 100) / 100;
      paras[i].style.backgroundPosition = "center " + y + "px";
    }
    requestAnimationFrame(sp);
  };
  requestAnimationFrame(sp);
};

simpleParallax("muri", 2);
simpleParallax("banner", 2);

// init Isotope
var $grid = $(".grid-stories").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};

// bind filter button click
$(".filters-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

// bind filter on select change
$(".filters-select").on("change", function () {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// $("html,body").animate({
//   scrollTop: $(window.location.hash).offset().top,
// });

var targetElement = $(window.location.hash);
if (targetElement.length) {
  $("html,body").animate({
    scrollTop: targetElement.offset().top,
  });
} else {
  console.warn("Element not found for hash:", window.location.hash);
}
