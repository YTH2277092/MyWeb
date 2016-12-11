$(document).ready(function () {
    $(".Btn").click(function () {
        $.ajax({
            type: "POST",
            url: "../Home/Index",
            data: {
                //url:"http://www.baidu.com"
            },
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            dataType: "json",
            success: function () {
                alert("成功了");
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

    var pageNo;
    var total;
    var totalRecords;

    $.ajax({
        type: "POST",
        url: "../Home/Index",
        data: {
            skip: 1,
        },
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        dataType: "json",
        success: function (data) {
            var str = "<tr><td>名称</td><td>编码</td><td>职位</td><td>薪资</td><td>省份</td><td>毕业院校</td><td>入职时间</td></tr>";
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                str += "<tr><td>" + obj.FName + "</td><td>" + obj.Code + "</td><td>" + obj.Post + "</td><td>" + obj.Wage + "</td><td>" + obj.Province + "</td><td>" + obj.Graduation + "</td><td>" + obj.EnterTime + "</td></tr>";
            }
            $(".Table_Detail").html(str);
        },
        error: function (data) {
            //alert(data.status + "," + data.statusText);
            //alert("出错了");
        },
    });

    $.ajax({
        type: "POST",
        url: "../Home/GetInfo",
        data: {

        },
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        dataType: "json",
        success: function (data) {
            pageNo = data.PageNo;
            total = data.Total;
            totalRecords = data.TotalRecords;

            //生成分页
            //有些参数是可选的，比如lang，若不传有默认值
            //var pageNo = getParameter('pno');
            kkpager.generPageHtml({
                //当前页数
                pno: pageNo,
                //总页码
                total: total,
                //总数据条数
                totalRecords: totalRecords,
                //链接前部
                hrefFormer: 'Main',
                //链接尾部
                hrefLatter: '',
                //getLink: function (n) {
                //    return this.hrefFormer + this.hrefLatter + "?pno=" + n + "&user=玉天恒&pass=123456";
                //},
                /*
                ,lang				: {
                    firstPageText			: '首页',
                    firstPageTipText		: '首页',
                    lastPageText			: '尾页',
                    lastPageTipText			: '尾页',
                    prePageText				: '上一页',
                    prePageTipText			: '上一页',
                    nextPageText			: '下一页',
                    nextPageTipText			: '下一页',
                    totalPageBeforeText		: '共',
                    totalPageAfterText		: '页',
                    currPageBeforeText		: '当前第',
                    currPageAfterText		: '页',
                    totalInfoSplitStr		: '/',
                    totalRecordsBeforeText	: '共',
                    totalRecordsAfterText	: '条数据',
                    gopageBeforeText		: ' 转到',
                    gopageButtonOkText		: '确定',
                    gopageAfterText			: '页',
                    buttonTipBeforeText		: '第',
                    buttonTipAfterText		: '页'
                }*/
                //模式
                mode: 'click',//默认值是link，可选link或者click
                //首次响应
                getHref: function (n) {
                    return '#';//this.hrefFormer + this.hrefLatter + "?pno=" + n;// + "&user=玉天恒&pass=123456";
                },
                //点击响应
                click: function (n) {
                    $.ajax({
                        type: "POST",
                        url: "../Home/Index",
                        data: {
                            skip: n,
                        },
                        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
                        dataType: "json",
                        success: function (data) {
                            var str = "<tr><td>名称</td><td>编码</td><td>职位</td><td>薪资</td><td>省份</td><td>毕业院校</td><td>入职时间</td></tr>";
                            for (var i = 0; i < data.length; i++) {
                                var obj = data[i];
                                //alert(obj);
                                str += "<tr><td>" + obj.FName + "</td><td>" + obj.Code + "</td><td>" + obj.Post + "</td><td>" + obj.Wage + "</td><td>" + obj.Province + "</td><td>" + obj.Graduation + "</td><td>" + obj.EnterTime + "</td></tr>";
                            }
                            $(".Table_Detail").html(str);
                        },
                        error: function (data) {
                            alert(data.status + "," + data.statusText);
                        },
                        complete: function () {
                            //alert("完成了");
                        }
                    });
                    this.selectPage(n);
                    return false;
                },                
            });
        },
        error: function (data) {
            alert(data.status + "," + data.statusText);
        },
        complete: function () {

        }
    });

    //获取地址中的参数
    function getParameter(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

});