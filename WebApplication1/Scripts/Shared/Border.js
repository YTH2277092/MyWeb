$(document).ready(function () {
    $("li").click(function () {
        $(this).css({ "backgroundColor": "#295cb6" });
        $(this).prevAll("li").css({ "backgroundColor": "#0b168b" });
        $(this).nextAll("li").css({ "backgroundColor": "#0b168b" });
    });
});