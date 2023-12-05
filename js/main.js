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
      $('.menuImg').css({'background-position':'center','transition':'0.5s'})
      isViewing = true;
    } else {
      $(".h_menu_li").each(function (count) {
        let target = $(this.children);
        setTimeout(function () {
          target.addClass("removePoyon");
        }, count * 100);
      });
      $('.menuImg').css({'background-position':''})
      isViewing = false;
    }
  });
});

// menu画像設定
$(".menuImg").hover(
  function(){
    $('.menuImg,.h_menu').css('transform','scale(1)')
  },
  function(){
    $('.menuImg,.h_menu').css('transform','scale(0.9)')
    $('.menuImg').css('transition','all 0.1s')
  }
)

// menubtnここまで

// ABOUT

$(".desk,.item_cursor").hover(function () {
  $(".item_cursor").toggleClass("hover_cursor");
});

$(function () {
  // deskをクリックするまで#about_contentを高さ含め非表示
  $("#about_content").css("display", "none");
  // deskをクリックしたらtitle_viewを消す&全体表示
  $(".desk").on("click", function () {
    $(".title_view,.item_cursor").css("display", "none");
    $("#about_content").css("display", "block");
  });
});

$('.h_menu_li').hover(
  function(){
    let liIndex = $(this).index()
    if (liIndex === 0){
      $('.menuImg').css('background-image','url(../img/menu/無題482_20231204090416.png)')
    }else if(liIndex === 1){
      $('.menuImg').css('background-image','url(../img/menu/無題482_20231204090421.png)')
    }else{
      $('.menuImg').css('background-image','url(../img/menu/無題482_20231204143352.png)')
    }
  },
  function(){
    $('.menuImg').css('background-image','url(../img/menu/無題482_20231204090411.png)')
  }
)
// ABOUTここまで

// WORKS

$(window).on("scroll", function () {
  let scroll = $(window).scrollTop(); // スクロール量
  let webh = $("#web_container").offset().top; // webコンテンツのトップの高さ
  let illusth = $("#illust_container").offset().top; // illustコンテンツのトップの高さ
  let fanh = $("#fanfic_container").offset().top; // fanficコンテンツのトップの高さ

  if (scroll >= fanh - 100) {
    // スクロールの位置がfanh以下だったら
    $(".scroll_where a").css("color", "#464646");
    $(".fanfic_p").css("color", "red"); // fanhのみ赤
  } else if (scroll >= illusth - 100) {
    // スクロールの位置がillust以下だったら
    $(".scroll_where a").css("color", "#464646");
    $(".illust_p").css("color", "red"); // illustのみ赤
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

$(function () {
  $(".content").on("click", function (event) {
    let contentIndex = $(this).index();
    let parent = $(event.target).parents("section").attr("id");
    let modalIndex = $('.modalContent').eq(contentIndex).index();
    // 初期化
    $('.modalContent').removeClass('modalContent_View');
    $(".modalBase,.modalBack,.closeBtn").removeClass("modalAnime_Close");
    $(".closeBtn").css('display','flex');
    $('html, body').css('overflow', 'hidden');
    
    if(contentIndex === modalIndex){
    if (parent === "web_container") {
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $('.webModal').children().eq(contentIndex).addClass('modalContent_View');
      }else if(parent === "illust_container"){
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $('.illustModal').children().eq(contentIndex).addClass('modalContent_View');
      
    }else{
        $(".modalBase,.modalBack").addClass("modalAnime_Open");
        $('.fanficModal').children().eq(contentIndex).addClass('modalContent_View');
      }
    }else{
      return false;
    }
  });
  $(".closeBtn,.modalBack").on("click", function () {
    $(".modalBase,.modalBack,.closeBtn").addClass("modalAnime_Close");
    $('html, body').removeAttr('style');
  });
});

// WORKSここまで

// レスポンシブ
// TOP
$(".newTopics_ber").on("touchend", function () {
  $(".newTopics").toggleClass("touch");
});
// ABOUT
// $('.h_menu_li').on('touchstart',function(){
//     let liIndex = $(this).index()
//     if (liIndex === 0){
//       $('.menuImg').css('background-image','url(../img/menu/無題482_20231204090416.png)')
//     }else if(liIndex === 1){
//       $('.menuImg').css('background-image','url(../img/menu/無題482_20231204090421.png)')
//     }else{
//       $('.menuImg').css('background-image','url(../img/menu/無題482_20231204143352.png)')
//     }
// })
