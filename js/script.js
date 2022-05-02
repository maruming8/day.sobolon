$(function(){

  new WOW().init();

  //ドロワーメニュー
  $(".js-drawerIcon").on("click",function(e){
    e.preventDefault();
    $(".p-drawerIcon").toggleClass("is-active");
    $(".p-drawer__menu").toggleClass("is-active");
	  return false;
  });

  //スムーススクロール
    // #から始まるURLがクリックされた時
  $('a[href^="#"]').on('click',function() {
    // .headerクラスがついた要素の高さを取得
    let header = $(".js-header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top - header;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate({
      scrollTop: position
      },speed
    );
    return false;
  });

  /*// スクロール検知
  $(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (100 < $(this).scrollTop()) {
    // is-showクラスをつける
    $('.js-toTop').addClass('is-show');
    } else {
    // 100pxを下回ったらis-showクラスを削除
    $('.js-toTop').removeClass('is-show');
    }
    });*/

    //ヘッダーナビゲーション
    $('.js-nav').click(function() {
      $(this).removeClass('is-active');
      $(this).addClass('is-active');
      return false;
    });
    
    //form
    $('#js-form').submit(function (event) {
      let formData = $('#js-form').serialize();
      $.ajax({
        url: $('#js-form').attr('action'),
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".--success").slideDown();
            $("#js-form").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".--error").slideDown();
          }
        }
      });
      event.preventDefault();
    });

    let $submit = $('#js-submit');
    $('#js-form input, #js-form textarea').on('change', function(){
      if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[name="entry.38750467"]').prop('checked') === true &&
        $('#js-form input[name="entry.971477390"]').prop('checked') === true
      ){
        $submit.prop('disabled', false)
        $submit.addClass('is-active')
      } else{
        $submit.prop('disabled', true)
        $submit.removeClass('is-active')
      }
    });
});

