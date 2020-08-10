$('load', function() {
    var isIE = !!window.ActiveXObject || "ActiveXObject" in window; //判断是否IE浏览器
    //兼容ie 　　　　　　
    if (isIE) {
        $('.pic').height(300);
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

    //隐藏post-meta
    if (document.body.clientWidth < 320) {
        $('.post-meta').hide();
    } else {
        $('.post-meta').show();
    }

    //设置content宽度
    var setHeight = $('.blog').height();
    $('.content').height(setHeight);

    //关闭菜单弹窗
    $('#toggle-mobile-menu-close').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })

    //开启菜单弹窗
    $('.menu').click(function() {
        $('.mobile-menu').slideToggle("fast");
    })












})