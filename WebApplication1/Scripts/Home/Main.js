$(document).ready(function () {
    $(".Btn").click(function () {
        $.ajax({
            type: "POST",
            url: "../Home/Indexs",
            data: {
                url:"http://www.baidu.com"
            },
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            dataType: "json",
            success: function () {
                    
            },
            error: function (data) {
                alert(data.status + "," + data.statusText);
            },
            complete: function () {
                alert("完成了");
            }
        });

        //$.getJSON("../Home/Index",function (data) {
        //    for (var i = 0 ; i < data.length; i++) {
        //        var obj = data[i];
        //        alert(obj);
        //    }
        //});

    });
});