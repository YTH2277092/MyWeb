$(document).ready(function () {
    $(".BothTwo").click(function () {
        $(this).hide();
        $(".EachOne").show();
    });

    //������ǳ���/���ͱ༭��ʱ��+����ʧ
    $("html").click(function (e) {
        if (e.target != $(".CSend")[0]) {
            $(".add-one").hide();
        }
        if (e.target != $(".MSend")[0]) {
            $(".add-two").hide();
        }    
    });

    $('.dropdown-toggle').dropdown();
    //����+�Ű�ť����
    $('.dropdown-toggle').css({ "backgroundColor": "#fff" });
    
    //input���
    $(".dropdown-toggle").each(function () {
        $(this).hide();
    });
    $(".CSend").click(function () {
        $(".dropdown-toggle").eq(0).show();
        $(".dropdown-toggle").eq(1).hide();
    })
    $(".MSend").click(function () {
        $(".dropdown-toggle").eq(1).show();
        $(".dropdown-toggle").eq(0).hide();
    })

    //+�ŵ��
    $($(".dropdown-toggle").eq(0)).click(function () {
        $(".drop-c li").click(function () {
            var text = $(this).text();
            $(".CSend").val(text);
        });
    });
    $($(".dropdown-toggle").eq(1)).click(function () {
        $(".drop-m li").click(function () {
            var text = $(this).text();
            $(".MSend").val(text);
        });
    });    
    

});