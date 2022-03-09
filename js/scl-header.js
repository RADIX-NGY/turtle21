//=====================================================
// スクロールするとヘッダーが出てくる
//=====================================================
$(function () {
  var flag = "up";
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      if (flag === "up") {
        $(".cb-header").stop().animate({
          top: 0
        }, 500)
        flag = "down";
      }
    } else {
      if (flag === "down") {
        $(".cb-header").stop().animate({
          top: "-200px"
        }, 500);
        flag = "up";
      }
    }
  });
});
