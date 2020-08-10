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

    //top显示或隐藏
    hideShow();
    $(document).scroll(function() {
        hideShow();
    });
    //top事件
    $('.top').click(function() {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    })

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

    //设置评论区位置
    var setTop = $('.article').height()
    if (document.body.clientWidth < 674) {
        $('.respond-box').css('top', setTop + 30);
    } else {
        $('.respond-box').css('top', setTop + 50);
    }
    //设置评论区宽度
    var commentHeight = 0;
    $('.text-cont').each(function(i, ele) {
        if (document.body.clientWidth < 674) {
            commentHeight += $(ele).height() + 10;
        } else {
            commentHeight += $(ele).height() + 30;
        }
    })
    $('.comment').height(commentHeight + 120)
        //设置文章页content宽度
    var setHeight = $('.article').height() + $('.respond-box').height() + 50;
    $('.content-article').height(setHeight);

    //关闭菜单弹窗
    $('#toggle-mobile-menu-close').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })

    //开启菜单弹窗
    $('.menu').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })
})