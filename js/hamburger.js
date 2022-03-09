// JavaScript Document
$(function () {
    const BreakPoint = 992; 
    $(".accordion dt").on("click", function () {
        const windowWidth = window.innerWidth;
        if (windowWidth < BreakPoint) {
            $(this).next().slideToggle();
            $(this).toggleClass("active");
        }
    });
    function sideMenuControll() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= BreakPoint) {
            $(".accordion dd").css('display', 'block');
            $(".accordion dt").removeClass('active');
        } else {
            $(".accordion dd").css('display', 'none');
            $(".accordion dt").removeClass('active');
        }
    }
    let timer = false;
    var currentWidth = window.innerWidth; 
    $(window).on("orientationchange resize", function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            if (currentWidth == window.innerWidth) { 
                return;
            }
            currentWidth = window.innerWidth;
            sideMenuControll();
        }, 200);
    });
});

// JavaScript Document
$(function () {
    const BreakPoint = 992; 
    $(".accordion2 dt").on("click", function () {
        const windowWidth = window.innerWidth;
        if (windowWidth < BreakPoint) {
            $(this).next().slideToggle();
            $(this).toggleClass("active");
        }
    });
    function sideMenuControll() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= BreakPoint) {
            $(".accordion2 dd").css('display', 'block');
            $(".accordion2 dt").removeClass('active');
        } else {
            $(".accordion2 dd").css('display', 'none');
            $(".accordion2 dt").removeClass('active');
        }
    }
    let timer = false;
    var currentWidth = window.innerWidth; 
    $(window).on("orientationchange resize", function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            if (currentWidth == window.innerWidth) { 
                return;
            }
            currentWidth = window.innerWidth;
            sideMenuControll();
        }, 200);
    });
});