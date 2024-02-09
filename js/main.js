// TOP

// WORKS

$(window).on("scroll", function () {
  let scroll = $(window).scrollTop(); // スクロール量
  let webh = $("#web_container").offset().top; // webコンテンツのトップの高さ
  let apph = $("#fanfic_container").offset().top; // fanficコンテンツのトップの高さ
  let illusth = $("#illust_container").offset().top; // illustコンテンツのトップの高さ

  if (scroll >= illusth - 100) {
    // スクロールの位置がfanh以下だったら
    $(".scroll_where a").css("color", "#464646");
    $(".illust_p").css("color", "red"); // fanhのみ赤
  } else if (scroll >= apph - 100) {
    // スクロールの位置がillust以下だったら
    $(".scroll_where a").css("color", "#464646");
    $(".fanfic_p").css("color", "red"); // illustのみ赤
  } else if (scroll >= webh - 100) {
    // スクロールの位置がweb以下だったら
    $(".scroll_where a").css("color", "#464646");
    $(".web_p").css("color", "red"); // webのみ赤
    $(".phoneSise").removeClass("scrollFadeOut"); // レスポンシブ：フェードアウト消去
    $(".phoneSise").addClass("scrollFadeIn"); // レスポンシブ：フェードイン
  } else {
    // 上記条件以外すべて元の色に戻す
    $(".scroll_where a").css("color", "#464646");
    $(".phoneSise").addClass("scrollFadeOut"); // レスポンシブ：フェードアウト
  }
});
// console.log($(".illustModal").children.length);

$(function () {
  $(".content").on("click", function (event) {
    let contentIndex = $(this).index();
    let parent = $(event.target).parents("section").attr("id");
    let modalIndex = $(".modalContent").eq(contentIndex).index();
    console.log(contentIndex);
    console.log(modalIndex);

    // 初期化
    $(".modalContent").removeClass("modalContent_View");
    $(".modalBase,.modalBack,.closeBtn").removeClass("modalAnime_Close");
    //
    $(".closeBtn").css("display", "flex");
    $("html, body").css("overflow", "hidden");

    if (contentIndex === modalIndex) {
      if (parent === "web_container") {
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $(".webModal")
          .children()
          .eq(contentIndex)
          .addClass("modalContent_View");
      } else if (parent === "illust_container") {
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $(".illustModal")
          .children()
          .eq(contentIndex)
          .addClass("modalContent_View");
      } else if (parent === "fanfic_container") {
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $(".appModal")
          .children()
          .eq(contentIndex)
          .addClass("modalContent_View");
      }
    }
  });
  $(".closeBtn,.modalBack").on("click", function () {
    $(".modalBase,.modalBack,.closeBtn").addClass("modalAnime_Close");
    setTimeout(function () {
      $(".modalContent").removeClass("modalContent_View");
      $(".modalBase,.modalBack,.closeBtn").removeClass("modalAnime_Open");
    }, 400);
    $("html, body").removeAttr("style");
  });
});

// WORKSここまで

// レスポンシブ
// TOP
$(".newTopics_ber").on("touchend", function () {
  $(".newTopics").toggleClass("touch");
});
