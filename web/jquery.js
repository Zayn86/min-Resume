//滑動至指定位置
$(".BarText a").click(function () {
  var btn = $(this).attr("href");
  var pos = $(btn).offset();
  $("html,body").animate({ scrollTop: pos.top }, 600);
});

// AboutBottom 關於我js tab切換
$(function () {
  var $li = $("ul.Aboutlist li");
  $($li.eq(0).addClass("active").find("a").attr("href"))
    .siblings(".list1")
    .hide();

  $li.click(function () {
    $($(this).find("a").attr("href")).show().siblings(".list1").hide();
    $(this).addClass("active").siblings(".active").removeClass("active");
  });
});

$(document).ready(function () {
  // 初步認識內容
  $(".list-qa").click(function (event) {
    var target = event.target;

    if (!$(target).hasClass("list-qa__question")) return;

    $(target)
      .parent()
      .siblings()
      .find(".list-qa__question")
      .removeClass("list-qa__question--active")
      .find(".list-qa__answer")
      .slideUp();

    $(target).toggleClass("list-qa__question--active");
    $(target).find(".list-qa__answer").slideToggle();
  });
});
// 修正ＨＴＭＬ＃偏移
$(".Aboutlist a").click(function () {
  $("html,body").animate({ scrollTop: 1080 }, 300);
});
