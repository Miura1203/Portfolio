// ABOUT

$(".desk,.item_cursor").hover(function () {
  $(".item_cursor").toggleClass("hover_cursor");
});

$(function () {
  // deskをクリックするまで#about_contentを高さ含め非表示
  $("html,body").css("overflow", "hidden");
  // deskをクリックしたらtitle_viewを消す&全体表示
  $(".desk").on("click", function () {
    $(".loading").css("animation", "loadingAnime 1.2s");
    setTimeout(function () {
      $(".title_view,.item_cursor").css("display", "none");
      $("html,body").css("overflow", "unset");
    }, 350);
  });
});

$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  //   let windowHeinght = $(window).height();
  if (scroll > 2500) {
    $(".slideAnime").eq(1).addClass("slideAnimation");
    $(".slideAnime").eq(1).removeClass("removeAnimation");
  } else {
    if ($(".slideAnime").eq(1).hasClass("slideAnimation")) {
      $(".slideAnime").eq(1).addClass("removeAnimation");
    }
  }

  if (scroll > 1000) {
    $(".slideAnime").eq(0).addClass("slideAnimation");
    $(".slideAnime").eq(0).removeClass("removeAnimation");
  } else {
    if ($(".slideAnime").eq(0).hasClass("slideAnimation")) {
      $(".slideAnime").eq(0).addClass("removeAnimation");
    }
  }
});

// ABOUTここまで
