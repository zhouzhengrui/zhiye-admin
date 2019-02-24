// pjax设置
$(document).pjax("[data-pjax]", "main", {
    fragment: "main",
    timeout: "15000"
});
// nprogress设置
NProgress.configure({
    showSpinner: false,
    speed: 300
});
// pjax start
$(document).on("pjax:start", function() {
    // nprogress start
    NProgress.start();
});
// document ready
jQuery(document).ready(function($) {
    // 窗口加载完成
    $(window).on("load", function() {
        // 主导航滚动条
        $(".side-nav").mCustomScrollbar({
            autoHideScrollbar: true,
            scrollInertia: 0,
            mouseWheel:{
                scrollAmount: 40
            }
        });
    });
    // pjax end
    $(document).on("pjax:end", function() {
        // nprogress over
        setTimeout(function() {
            NProgress.done();
        }, 300);
        // main淡入动画
        $("main").addClass("main-fadein");
        // main复位
        $("main").scrollTop(0);

        // 已开启modal的页面复位
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
        // 一级导航没有active时
        if ($(this).attr('class') != 'active') {
            subnav.slideUp(300);
            $(this).next().stop(true, true).slideToggle(300);
            $(this).parent().siblings().children("a").removeClass("active");
            $(this).addClass("active");
            $(this).parent().siblings().children(".nav-sub").removeClass("active");
            $(this).siblings(".nav-sub").toggleClass("active");
        }
        // 点击没有二级导航的一级导航时移除其他二级导航的active
        if ($(this).next(".nav-sub").length == 0) {
            $(this).parent().siblings().children(".nav-sub").children(".item").removeClass("active");
        }
    });
    // 二级导航点击事件
    $(".nav-sub > .item").click(function() {
        // 移除其他active, 并在此二级导航添加active
        $(".nav-sub > .item.active").removeClass("active");
        $(this).addClass("active");
    });

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

    // 禁止对所有元素的自动查找, 由于Dropzone会自动查找class为dropzone的元素, 自动查找后再在这里进行初始化, 有时候会导致重复初始化的错误, 所以在此加上这段代码避免这样的错误
    Dropzone.autoDiscover = false;

    // main滚动移除laydate弹出框
    // 没有判断laydate是否弹出的接口, 暂时移除
    // $('main').scroll(function() {
    //     $('[action="date"]').blur();
    //     $('.layui-laydate').remove();
    // });

    // 页面全屏按钮
    var viewFullScreen = $("#fullscreen-view");
    var exitFullScreen = $("#fullscreen-exit");
    $(exitFullScreen).hide();
    if (viewFullScreen) {
        viewFullScreen.on("click", function() {
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
        exitFullScreen.on("click", function() {
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
    });
    $("#modal-sidebar").on("hide.bs.modal", function() {
        $("#modal-sidebar-button").removeClass("active")
    });
});
// validate全局设置
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
    // 错误信息显示位置
    errorPlacement: function(error, element) {
        error.appendTo(element.parents('.form-group').children('.label'));
    }
});
// Highcharts全局设置
Highcharts.setOptions({
    colors: [
        '#23b7e5', '#27c24c', '#7266ba', '#18C29C', '#f05050', '#E67E22', '#eac459', '#ff5b77'
    ],
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
// dataTables
function dataTableDefaults() {
    $.extend( $.fn.dataTable.defaults, {
        language: {
            "lengthMenu": "每页显示_MENU_条数据",
            "zeroRecords": "没有找到数据",
            "emptyTable": "没有数据",
            "info": "共_TOTAL_条数据",
            "infoEmpty": "没有数据",
            "infoFiltered": "(从_MAX_条数据中检索)",
            "loadingRecords": "数据加载中...",
            "zeroRecords": "没有搜索到数据",
            "processing": "数据处理中...",
            "searchPlaceholder": "搜索关键字",
            "search": "",
            "paginate": {
                "first": "首页",
                "previous": "上一页",
                "next": "下一页",
                "last": "尾页"
            }
        }
    });
}
// 焦点在NPUT/SELECT/TEXTAREA时hotkeys依然起效
hotkeys.filter = function(event) {
    return true;
}
// toastr全局设置
// toastr.options = {
//     "newestOnTop": false,
//     "positionClass": "toast-bottom-right",
// }
