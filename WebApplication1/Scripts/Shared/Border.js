$(document).ready(function () {
    $("li").click(function () {
        $(this).css({ "backgroundColor": "#295cb6" });
        $(this).prevAll("li").css({ "backgroundColor": "#0b168b" });
        $(this).nextAll("li").css({ "backgroundColor": "#0b168b" });
    });

    var screen_height = $(window).height();
    var top_height = $(".Top-main").height();
    $(".Border-left").height(screen_height - top_height);

});