// menubtn
$(function () {
  let isViewing = false; // 現在の状態(非表示時false)
  $("#js_target").on("click", function () {
    if (!isViewing) {
      // メニューが非表示の時(状態:false;条件:true;)
      $(".h_menu_li").each(function (count) {
        // jqueryセレクタに変更し、addClassが使用できるように変数へ代入
        let target = $(this.children);
        setTimeout(function () {
          target.removeClass("removePoyon");
          target.addClass("addPoyon");
        }, count * 100);
      });
      $(".menuImg").css({
        "background-position": "center",
        transition: "0.5s",
      });
      isViewing = true;
    } else {
      $(".h_menu_li").each(function (count) {
        let target = $(this.children);
        setTimeout(function () {
          target.addClass("removePoyon");
        }, count * 100);
      });
      $(".menuImg").css({ "background-position": "" });
      isViewing = false;
    }
  });
});

// menu画像設定
$(".menuImg").hover(
  function () {
    $(".menuImg,.h_menu").css("transform", "scale(1)");
  },
  function () {
    $(".menuImg,.h_menu").css("transform", "scale(0.9)");
    $(".menuImg").css("transition", "all 0.1s");
  }
);

$(".h_menu_li").hover(
  function () {
    let liIndex = $(this).index();
    if (liIndex === 0) {
      $(".menuImg").css(
        "background-image",
        "url(../img/menu/無題482_20231204090416.png)"
      );
    } else if (liIndex === 1) {
      $(".menuImg").css(
        "background-image",
        "url(../img/menu/無題482_20231204090421.png)"
      );
    } else {
      $(".menuImg").css(
        "background-image",
        "url(../img/menu/無題482_20231204143352.png)"
      );
    }
  },
  function () {
    $(".menuImg").css(
      "background-image",
      "url(../img/menu/無題482_20231204090411.png)"
    );
  }
);
// menubtnここまで
