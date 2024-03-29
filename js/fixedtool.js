$(function () {
    // 1.显示隐藏电梯导航
    var flag = true;
    var toolTop = $(".recommend").offset().top;
    toggleTop();
    function toggleTop() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    };
    //$(window).scroll(toggleTop);
    $(window).scroll(function () {
        toggleTop();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop >= $(ele).offset().top) {
                    $("fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
                }
            })
        }
    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current  
            },function(){
                setTimeout(function(){flag = true;},500)
            }  
        );
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    });

})