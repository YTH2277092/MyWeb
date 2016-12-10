$(document).ready(function () {
    //显示详细信息按钮
    $(".ShowDetail").click(function ()
    {
        if ($(".Detail-two").is(":hidden"))
        {
            $(".Detail-one").hide();
            $(".Detail-two").show();
            $(this).text("隐藏详情");
        }
        else
        {
            $(".Detail-one").show();
            $(".Detail-two").hide();
            $(".ShowDetail").text("显示详情");
        }
    });

    //举报按钮
    $(".Report").click(function ()
    {
        if ($(".InPage").is(":hidden")) {
            $(".InPage").show();
            $(".bg").show();
            
            //取消滚动条
            $("html").css({"height":"100%","overflow":"hidden"});
            $("body").css({"height":"100%","overflow":"hidden"});
        }
        
    });

    //黑色背景点击
    $(".bg").click(function ()
    {
        $(this).hide();
        $(".InPage").hide();
        $("body").css({"overflow":"visible"});
    });

});
