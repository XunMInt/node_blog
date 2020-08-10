$('load', function() {
    var isIE = !!window.ActiveXObject || "ActiveXObject" in window; //判断是否IE浏览器
    //兼容ie 　　　　　　
    if (isIE) {

    } else {
        //导航栏隐藏或显示
        $(document).ready(function() {
            var p = 0;
            t = 0;
            $(window).scroll(function(e) {
                p = $(this).scrollTop();
                if (t <= p) {
                    $('.header').slideUp("fast");
                } else {
                    $('.header').slideDown("fast");
                }
                t = p;
            })
        })

    }

    //设置链接展示页高度
    $('.article-con').height($('.article').height() + 100)

    //显示隐藏函数
    function hideShow() {
        var contentWidth = $('.content').offset().top;
        var scroH = $(document).scrollTop(); //滚动高度
        if (scroH > contentWidth) {
            $('.top').css('transform', 'scale(1)');
        } else {
            $('.top').css('transform', 'scale(0)');
        }
    }



    //关闭菜单弹窗
    $('#toggle-mobile-menu-close').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })

    //开启菜单弹窗
    $('.menu').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })
})