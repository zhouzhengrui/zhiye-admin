// pjax
$(document).pjax("[data-pjax]", "main", {
    fragment: "main"
    // fx: 'fade',
});
// nprogress开始
NProgress.configure({
    showSpinner: false,
    speed: 300
});
// pjax nprogress
$(document).on("pjax:start", function() {
    NProgress.start();
    // $("main").removeClass("main-fadein");
});
// jQuery ready
jQuery(document).ready(function($) {

    $(document).on("pjax:end", function() {
        setTimeout(function () {
            NProgress.done();
        }, 300);

        // $("main").addClass("main-fadein");
        $("main").scrollTop(0);
        $("body.modal-open").removeClass();
        $(".modal-backdrop").remove();
        // tooltip
        $('[action="tooltip"]').tooltip();
        // tab
        $('[action="tab-body"]').tabbedContent();
        // 卡片全屏
        $('[action="card-fullscreen"]').on("click", function() {
            $(this).parent().parent().parent('.card').toggleClass('card-fullscreen');
            $(this).children('.icon-enlarge').toggleClass('icon-narrow');
            if ($(this).parent().parent().siblings().children().hasClass('highcharts')) {
                $(this).parent().parent().parent('.card').toggleClass('card-chart-fullscreen');
                $(this).parent().parent().siblings().children('.highcharts').highcharts().reflow();
            }
        });
        // 代码块
        $('.code-group .code-title').on("click", function() {
            $(this).siblings('pre').toggleClass('show');
        });
        // waves
        Waves.init();
        Waves.attach('button.button, a.button');
    });

    // 有二级导航的条目添加箭头
    if ($("nav.nav > .item").find(".nav-sub").length > 0) {
        $(this).find(".nav-sub").siblings("a").append("<i class='icon-arrow-down'></i>");
    }
    // 一级导航点击事件
    var nav = $('nav.nav > .item > a');
    var subnav = $('nav.nav > .item > .nav-sub');
    nav.on('click', function() {
        if ($(this).attr('class') != 'active') {
            subnav.slideUp(300);
            $(this).next().stop(true, true).slideToggle(300);
            $(this).parent().siblings().children("a").removeClass("active");
            $(this).addClass("active");
            $(this).parent().siblings().children(".nav-sub").removeClass("active");
            $(this).siblings(".nav-sub").toggleClass("active");
        }
    });
    // 二级导航点击事件
    $(".nav-sub > .item").click(function() {
        $(".nav-sub > .item.active").removeClass("active");
        $(this).addClass("active");
    })

    // main滚动事件
    $('main').scroll(function(){
        $('[action="date"]').blur();
        $('.layui-laydate').remove();
    });

    // highcharts 全局设置
    Highcharts.setOptions({
        colors: [
            '#23b7e5', '#27c24c', '#7266ba', '#18C29C', '#f05050', '#E67E22', '#eac459', '#ff5b77'
        ],
        xAxis: {
            gridLineWidth: -1,
        },
        credits: {
            enabled: false // 取消版权
        },
        tooltip: {
            useHTML: true // 使用html结构
        },
        navigation: {
            buttonOptions: {
                enabled: false, // 禁用导航按钮
                height: 32,
                width: 32,
                symbolSize: 14,
                symbolX: 16,
                symbolY: 16,
                x: 8,
                y: -10
            }
        },
        lang: {
            contextButtonTitle: "导出图表",
            printChart: "打印图表",
            downloadJPEG: "下载JPEG图片",
            downloadPDF: "下载PDF文档",
            downloadPNG: "下载PNG图片",
            downloadSVG: "下载SVG矢量图",
            exportButtonTitle: "导出图片"
        }
    });

    // 页面全屏按钮
    var viewFullScreen = document.getElementById("fullscreen-view");
    var exitFullScreen = document.getElementById("fullscreen-exit");
    $(exitFullScreen).hide();
    if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function() {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen();
            }
            $('#fullscreen-view').hide();
            $('#fullscreen-exit').show();
        });
    }
    if (exitFullScreen) {
        exitFullScreen.addEventListener("click", function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $('#fullscreen-exit').hide();
            $('#fullscreen-view').show();
        });
    }

    // 右侧边栏按钮激活样式
    $("#modal-sidebar").on("show.bs.modal", function() {
        $("#modal-sidebar-button").addClass("active");
    })
    $("#modal-sidebar").on("hide.bs.modal", function() {
        $("#modal-sidebar-button").removeClass("active")
    })

    // tooltip
    $('[action="tooltip"]').tooltip();

    // tab
    $('[action="tab-body"]').tabbedContent();

    // 卡片全屏
    $('[action="card-fullscreen"]').on("click", function() {
        $(this).parent().parent().parent('.card').toggleClass('card-fullscreen');
        $(this).children('.icon-enlarge').toggleClass('icon-narrow');
        if ($(this).parent().parent().siblings().children().hasClass('highcharts')) {
            $(this).parent().parent().parent('.card').toggleClass('card-chart-fullscreen');
            $(this).parent().parent().siblings().children('.highcharts').highcharts().reflow();
        }
    });

    // 代码块
    $('.code-group .code-title').on("click", function() {
        $(this).siblings('pre').toggleClass('show');
    });

    // waves
    Waves.init();
    Waves.attach('button.button, a.button');

    // validate
    (function(factory) {
        if (typeof define === "function" && define.amd) {
            define(["jquery", "../jquery.validate"], factory);
        } else {
            factory(jQuery);
        }
    }(function($) {
        $.extend($.validator.messages, {
            required: "这是必填字段",
            remote: "请修正此字段",
            email: "请输入有效的电子邮件地址",
            url: "请输入有效的网址",
            date: "请输入有效的日期",
            dateISO: "请输入有效的日期 (YYYY-MM-DD)",
            number: "请输入有效的数字",
            digits: "只能输入数字",
            creditcard: "请输入有效的信用卡号码",
            equalTo: "你的输入不相同",
            extension: "请输入有效的后缀",
            maxlength: $.validator.format("最多可以输入 {0} 个字符"),
            minlength: $.validator.format("最少要输入 {0} 个字符"),
            rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
            range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
            max: $.validator.format("请输入不大于 {0} 的数值"),
            min: $.validator.format("请输入不小于 {0} 的数值")
        });
    }));
    $.validator.setDefaults({
        errorPlacement: function(error, element) {
            error.appendTo(element.parents('.form-group').children('.label'));
        }
    });

    // 窗口加载完成
    $(window).on("load", function() {
        // nprogress完成
        // NProgress.done();
        // 主导航滚动条
        $(".side-nav").mCustomScrollbar({
            autoHideScrollbar: true,
            scrollInertia: 300
        });

    });

});

// toast
function toast(message, duration, position, align) {
    if (typeof(position) != "undefined" && position != "") {
        position = "toast-" + position;
    } else {
        position = "";
    }
    if (typeof(align) != "undefined" && align != "") {
        align = "align-" + align;
    } else {
        align = "";
    }
    duration = duration || 3000;
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.setAttribute("class", "toast " + position + " " + align);
    m.innerHTML = message;
    document.body.appendChild(m);
    setTimeout(function() {
        m.setAttribute("class", "toast show " + position + " " + align);
        setTimeout(function() {
            m.setAttribute("class", "toast  " + position + " " + align);
            setTimeout(function() {
                document.body.removeChild(m);
            }, 300);
        }, duration);
    }, 100);
}

// jQuery
jQuery(document).ready(function($) {

    // button
    $('.button').on('tap', function() {
        $(this).removeClass('active').addClass('active');
        var set = setTimeout(function() {
            $('.button').removeClass('active');
        }, 100)
    });

    // button wave
    $('.button-wave').on("tap", function() {
        $(this).removeClass('wave').addClass('wave');
        var set = setTimeout(function() {
            $('.button-wave').removeClass('wave');
        }, 500)
    });

    // label
    $('.label-cancel').on('tap', function() {
        $(this).removeClass('active').addClass('active');
        var set = setTimeout(function() {
            $('.label-cancel').removeClass('active');
        }, 100)
    });

    // image lazyload
    // $('img.lazyload').lazyload({
    //     container: $('.scroller'),
    //     threshold: 200,
    //     effect: 'fadeIn'
    // });

    // radio
    $('label.item').on('tap', function() {
        $(this).siblings(':radio').prop('checked', false);
        $(this).find(':radio').prop('checked', true);
    });

});
