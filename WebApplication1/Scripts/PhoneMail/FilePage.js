$(document).ready(function () {
    var size = 5;

    //文件名列
    var file = new Array(5);
    file[0] = "力德公司文件.txt";
    file[1] = "我的文件.zip";
    file[2] = "泰坦文件.exe";
    file[3] = "项目文件.txt";
    file[4] = "工具文件.txt";
    
    //文件大小列
    var fileS = new Array(5);
    fileS[0] = "32.0KB";
    fileS[1] = "56MB";
    fileS[2] = "3.8KB";
    fileS[3] = "6.2MB";
    fileS[4] = "8.0KB";

    //图片列
    var image = new Array(2);
    image[0] = "word.png";
    image[1] = "word.png";
    image[2] = "file.jpg";
    image[3] = "file.jpg";
    image[4] = "word.png";

    //图片
    for (var i = 0; i < size;i++) {
        $("body").append("<div class=\"ALine" + i + "\">" + "</div>");
        $(".ALine" + i).css({ "backgroundColor": "#fff","width":"100%","height": "13em", "marginTop": "10px", });
        //$(".ALine" + i).append("<div class=\"Photo" + i + "\"></div>");
        //$(".Photo" + i).css({"width":"20%","height":"160px","backgroundColor":"#aaa","marginLeft":"20px","display":"inline-block"});
        $(".ALine" + i).append("<img src=\"/Content/image/" + image[i] +"\" width=\" 20%\" height=\"95%\" style=\"margin-left:20px\"/>");
        $("img").css({ "display": "inline-block" });
    }

    //文件名
    for (var i = 0; i < size;i++) {
        $(".ALine" + i).append("<div class=\"FileName" + i + "\">" + file[i] + "</div>");
        $(".FileName" + i).css({ "position":"absolute","backgroundColor":"#fff","color": "#000", "fontSize": "3.0em", "display": "inline", "marginLeft": "30px", "lineHeight": "60px" });
    }

    //时间
    for (var i = 0; i < size;i++) {
        $(".ALine" + i).append("<div class=\"Time" + i + "\">" + fileS[i] + "&nbsp&nbsp&nbsp&nbsp" + "2016/9/8</div>");
        $(".Time" + i).css({ "position":"absolute","color": "#797777", "display": "inline", "fontSize": "2.6em","left":"250px","marginTop":"110px" });
    }

    //按钮
    for (var i = 0; i < size;i++) {
        $(".ALine" + i).append("<button class=\"Btn" + i + " btn btn-primary\">" + "下载" + "</button>");
        $(".Btn" + i).css({"display":"inline","width":"18%","height":"50%","lineHeight":"70px","fontWeight":"100","textAlign":"center","float":"right","fontSize":"3.0em","marginTop":"40px","marginRight":"20px"});
    }

    //下划线
    for (var i = 0; i < size;i++) {
        $(".ALine" + i).append("<hr />");
        $("hr").css({"backgroundColor":"#000","height":"1px","backgroundColor":"grey","padding":"0","marginTop":"5px"});
    }

    
});