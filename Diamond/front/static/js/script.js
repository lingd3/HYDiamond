$(function(){
    getInfo("");
    var query = "1=1";
    var orderby = "";
    var count = 1, count2 = 1;

    $("#query").click(function (){
        //添加查询条件
        var id = $("#id").val();
        if (id != "") {
            query = "id="+id;
            getInfo3(1);
            return;
        }

        //color
        var color="";
        var obj = $('input:checkbox[name="color"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                color += obj[i].value+',';
            }  
            color += obj[obj.length-1].value;
        }

        //clarity
        var clarity="";
        var obj = $('input:checkbox[name="clarity"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                clarity += obj[i].value+',';
            }  
            clarity += obj[obj.length-1].value;
        }

        //cut
        var cut="";
        var obj = $('input:checkbox[name="cut"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                cut += obj[i].value+',';
            }  
            cut += obj[obj.length-1].value;
        }

        //polish
        var polish="";
        var obj = $('input:checkbox[name="polish"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                polish += obj[i].value+',';
            }  
            polish += obj[obj.length-1].value;
        }

        //symmetry
        var symmetry="";
        var obj = $('input:checkbox[name="symmetry"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                symmetry += obj[i].value+',';
            }  
            symmetry += obj[obj.length-1].value;
        }

        //fluorescence
        var fluorescence="";
        var obj = $('input:checkbox[name="fluorescence"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                fluorescence += obj[i].value+',';
            }  
            fluorescence += obj[obj.length-1].value;
        }

        //brown
        var brown="";
        var obj = $('input:checkbox[name="brown"]:checked'); 
        if (obj.length != 0) {
            for (var i = 0; i < obj.length-1; i++) {
                brown += obj[i].value+',';
            }  
            brown += obj[obj.length-1].value;
        }

        //carat
        var carat1 = $("#carat1").val();
        var carat2 = $("#carat2").val();

        query = "1=1";
        if (color != "") {
            query += "&color="+color;
        }
        if (clarity != "") {
            query += "&clarity="+clarity;
        }
        if (cut != "") {
            query += "&cut="+cut;
        }
        if (polish != "") {
            query += "&polish="+polish;
        }
        if (symmetry != "") {
            query += "&symmetry="+symmetry;
        }
        if (fluorescence != "") {
            query += "&fluorescence="+fluorescence;
        }
        if (brown != "") {
            query += "&brown="+brown;
        }
        if (carat1 != "") {
            query += "&carat1="+carat1;
        }
        if (carat2 != "") {
            query += "&carat2="+carat2;
        }
        if (orderby != "") {
            query += "&"+orderby;
        }

        getInfo3(1);
    });

    $("#reset").click(function (){
        $('input:checkbox').each(function () {
            $("input").prop({checked:false});
        });
        $("#carat1").val("");
        $("#carat2").val("");
        $("#id").val("");
        $("#limit").val("10");
        query = "1=1";
        orderby = "";
        count = 1;
        count2 = 1;
    });

    //初始查询
    function getInfo(str) {
        $.ajax({
            type:"get",
            async:true,
            url:"http://localhost:8080/DiamondShop/query?"+str,
            dataType:"text",
            success:function(data) {
                callBackPagination(data);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                // alert(XMLHttpRequest.status+","+XMLHttpRequest.readyState+","+textStatus);
                alert("服务器开小差了，请稍后重试...");
            }
        });
    }

    //分页查询
    function getInfo2(page) {
        $.ajax({
            type:"get",
            async:true,
            url:"http://localhost:8080/DiamondShop/query?"+query+"&page="+page,
            dataType:"text",
            success:function(data) {
                callBackPagination2(data);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                // alert(XMLHttpRequest.status+","+XMLHttpRequest.readyState+","+textStatus);
                alert("服务器开小差了，请稍后重试...");            
            }
        });
    }

    //多条件查询
    function getInfo3(page) {
        $.ajax({
            type:"get",
            async:true,
            url:"http://localhost:8080/DiamondShop/query?"+query+"&page="+page,
            dataType:"text",
            success:function(data) {
                callBackPagination(data);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                // alert(XMLHttpRequest.status+","+XMLHttpRequest.readyState+","+textStatus);
                alert("服务器开小差了，请稍后重试...");
            }
        });
    }

    function callBackPagination(data) {
        var json = eval("("+data+")");
        var totalCount = json.total;
        var currPage = json.page;
        var limit = $("#limit").val();

        createTable(currPage, limit, totalCount, json);

        if (count%2 == 0) {
            $("#carat").html("重量↓");
        }
        else {
            $("#carat").html("重量↑");
        }

        if (count2%2 == 0) {
            $("#price").html("RMB/粒↓");
        }
        else {
            $("#price").html("RMB/粒↑");
        }


        $('#callBackPager').extendPagination({
            totalCount: totalCount,
            limit: limit,
            callback: function () {
                return false;
            }
        });
    }

    function callBackPagination2(data) {
        var json = eval("("+data+")");
        var totalCount = json.total;
        var currPage = json.page;
        var limit = $("#limit").val();

        createTable(currPage, limit, totalCount, json);
    }

    function createTable(currPage, limit, total, json) {
        var html = [], showNum = limit;
        if (total-(currPage*limit) < 0) showNum = total-((currPage-1)*limit);

        html.push(' <table class="table table-hover piece" style="margin-left: 0;">');
        html.push(' <caption class="num">裸钻总数量：<span class="total">'+total+'</span> 颗， 当前第 '+'<span id="currPage">'+currPage+'</span> 页' +'</caption>');
        html.push(' <thead><tr><th style="width:8%">货号</th><th style="width:5%">状态</th><th style="width:5%">货期</th><th style="width:5%">形状</th><th id="carat" style="width:5%">重量↑</th><th style="width:5%">颜色</th><th style="width:5%">净度</th><th style="width:5%">切工</th><th style="width:5%">抛光</th><th style="width:5%">对称</th><th style="width:5%">荧光</th><th style="width:5%">直径</th><th style="width:6%">国际美金</th><th id="price" style="width:8%">RMB/粒↑</th><th style="width:5%">咖色</th><th style="width:5%">奶色</th></tr></thead><tbody>');

        for (var i = 0; i < showNum; i++) {
            var diamond = json.diamonds[i];
            html.push('<tr><td>' + diamond.id + '</td>');
            html.push('<td>' + diamond.status + '</td>');
            html.push('<td>' + diamond.delivery_date + '</td>');
            html.push('<td>' + diamond.shape + '</td>');
            html.push('<td>' + diamond.carat + '</td>');
            html.push('<td>' + diamond.color + '</td>');
            html.push('<td>' + diamond.clarity + '</td>');
            html.push('<td>' + diamond.cut + '</td>');
            html.push('<td>' + diamond.polish + '</td>');
            html.push('<td>' + diamond.symmetry + '</td>');
            html.push('<td>' + diamond.fluorescence + '</td>');
            html.push('<td>' + diamond.diameter + '</td>');
            html.push('<td>' + diamond.dollar + '</td>');
            html.push('<td>' + diamond.price + '</td>');
            html.push('<td>' + diamond.brown + '</td>');
            html.push('<td>' + diamond.milk + '</td>');
            html.push('</tr>');
        }
        html.push('</tbody></table>');
        var mainObj = $('#mainContent');
        mainObj.empty();
        mainObj.html(html.join(''));

        $("#carat").click(function (){
            count = count + 1;
            if (count%2 != 0) {
                orderby = "orderby=carat&order=ASC";
            }
            else {
                orderby = "orderby=carat&order=DESC";
            }
            $("#query").click();
        });

        $("#price").click(function (){
            count2 = count2 + 1;
            if (count2%2 != 0) {
                orderby = "orderby=price&order=ASC";
            }
            else {
                orderby = "orderby=price&order=DESC";
            }
            $("#query").click();
        });

    }

    $.fn.extendPagination = function (options) {
        var defaults = {
            totalCount: '',
            showPage: '10',
            limit: '50',
            callback: function () {
                return false;
            }
        };
        $.extend(defaults, options || {});
        if (defaults.totalCount == '') {
            //alert('总数不能为空!');
            $(this).empty();
            return false;
        } else if (Number(defaults.totalCount) <= 0) {
            //alert('总数要大于0!');
            $(this).empty();
            return false;
        }
        if (defaults.showPage == '') {
            defaults.showPage = '10';
        } else if (Number(defaults.showPage) <= 0) defaults.showPage = '10';
        if (defaults.limit == '') {
            defaults.limit = '50';
        } else if (Number(defaults.limit) <= 0)defaults.limit = '50';
        var totalCount = Number(defaults.totalCount), showPage = Number(defaults.showPage),
            limit = Number(defaults.limit), totalPage = Math.ceil(totalCount / limit);

        if (totalPage > 0) {
            var html = [];
            html.push(' <ul class="pagination">');
            html.push(' <li class="previous"><a href="#">&laquo;</a></li>');
            html.push('<li class="disabled hidden"><a href="#">...</a></li>');
            if (totalPage <= showPage) {
                for (var i = 1; i <= totalPage; i++) {
                    if (i == 1) html.push(' <li class="active"><a href="#">' + i + '</a></li>');
                    else html.push(' <li><a href="#">' + i + '</a></li>');
                }
            } else {
                for (var j = 1; j <= showPage; j++) {
                    if (j == 1) html.push(' <li class="active"><a href="#">' + j + '</a></li>');
                    else html.push(' <li><a href="#">' + j + '</a></li>');
                }
            }
            html.push('<li class="disabled hidden"><a href="#">...</a></li>');
            html.push('<li class="next"><a href="#">&raquo;</a></li></ul>');
            $(this).html(html.join(''));
            if (totalPage > showPage) $(this).find('ul.pagination li.next').prev().removeClass('hidden');

            var pageObj = $(this).find('ul.pagination'), preObj = pageObj.find('li.previous'),
                currentObj = pageObj.find('li').not('.previous,.disabled,.next'),
                nextObj = pageObj.find('li.next');

            function loopPageElement(minPage, maxPage) {
                var tempObj = preObj.next();
                for (var i = minPage; i <= maxPage; i++) {
                    if (minPage == 1 && (preObj.next().attr('class').indexOf('hidden')) < 0)
                        preObj.next().addClass('hidden');
                    else if (minPage > 1 && (preObj.next().attr('class').indexOf('hidden')) > 0)
                        preObj.next().removeClass('hidden');
                    if (maxPage == totalPage && (nextObj.prev().attr('class').indexOf('hidden')) < 0)
                        nextObj.prev().addClass('hidden');
                    else if (maxPage < totalPage && (nextObj.prev().attr('class').indexOf('hidden')) > 0)
                        nextObj.prev().removeClass('hidden');
                    var obj = tempObj.next().find('a');
                    if (!isNaN(obj.html()))obj.html(i);
                    tempObj = tempObj.next();
                }
            }

            function callBack(curr) {
                $("#currPage").text(curr+"页");
                getInfo2(curr);
            }

            currentObj.click(function (event) {
                event.preventDefault();
                var currPage = Number($(this).find('a').html()), activeObj = pageObj.find('li[class="active"]'),
                    activePage = Number(activeObj.find('a').html());
                if (currPage == activePage) return false;
                if (totalPage > showPage && currPage > 1)  {
                    var maxPage = currPage, minPage = 1;
                    if (($(this).prev().attr('class'))
                        && ($(this).prev().attr('class').indexOf('disabled')) >= 0) {
                        minPage = currPage - 1;
                        maxPage = minPage + showPage - 1;
                        loopPageElement(minPage, maxPage);
                    } else if (($(this).next().attr('class'))
                        && ($(this).next().attr('class').indexOf('disabled')) >= 0) {
                        if (totalPage - currPage >= 1) maxPage = currPage + 1;
                        else  maxPage = totalPage;
                        if (maxPage - showPage > 0) minPage = (maxPage - showPage) + 1;
                        loopPageElement(minPage, maxPage)
                    }                  
                }
                activeObj.removeClass('active');
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == currPage) {
                        $(thiz).addClass('active');
                        callBack(currPage);
                    }
                });
            });
            preObj.click(function (event) {
                event.preventDefault();
                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
                if (activePage <= 1) return false;
                if (totalPage > showPage) {
                    var maxPage = activePage, minPage = 1;                  
                    if ((activeObj.prev().prev().attr('class'))
                        && (activeObj.prev().prev().attr('class').indexOf('disabled')) >= 0) {
                        minPage = activePage - 1;
                        if (minPage > 1) minPage = minPage - 1;
                        maxPage = minPage + showPage - 1;
                        loopPageElement(minPage, maxPage);
                    }
                }
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == (activePage - 1)) {
                        activeObj.removeClass('active');
                        $(thiz).addClass('active');
                        callBack(activePage - 1);
                    }
                });
            });
            nextObj.click(function (event) {
                event.preventDefault();
                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
                if (activePage >= totalPage) return false;
                if (totalPage > showPage) {
                    var maxPage = activePage, minPage = 1;                  
                    if ((activeObj.next().next().attr('class'))
                        && (activeObj.next().next().attr('class').indexOf('disabled')) >= 0) {
                        maxPage = activePage + 2;
                        if (maxPage > totalPage) maxPage = totalPage;
                        minPage = maxPage - showPage + 1;
                        loopPageElement(minPage, maxPage);
                    }
                }
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == (activePage + 1)) {
                        activeObj.removeClass('active');
                        $(thiz).addClass('active');
                        callBack(activePage + 1);
                    }
                });
            });
        }
    };

});