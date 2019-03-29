//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 200;
    var moretext = "Learn more";
    var lesstext = "Learn less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span class=" p-3">' +
                hide_content +
                '</span>' +
                '<a href="" class="morelinksss btn btn-learn" style="display:block; margin-top:30px">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 120;
    var moretext = " ... &nbsp;";
    var lesstext = " ... &nbsp;";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +

                '<a href="" class="morelinks dot-style">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 4,
        showItems: 4
    });

});


/*===================== Owl Carousel Slider ======================*/

$(function () {
    $('#owl-one').owlCarousel({
        loop: false,
        margin: 40,
        dots: true,
        nav: false,
        item: 3,
        navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-next'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 2,
                dots: true,
                nav: false
            },
            800: {
                items: 3,
                dots: true,
                nav: false
            },
            1000: {
                items: 3,
                dots: true,
                nav: false
            }
        }
    });
});

$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Slick Slider ======================*/


/*===================== Scroll Top Function Script ======================*/
//$(function () {
//    $(".navbar-brand img").addClass("d-none");
//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();
//        if (scroll >= 100) {




//        } else {
//            $("nav").removeClass("fixed-top sleep nav-bg-color");
//            $(".navbar-brand img").addClass("d-none w-48 ");

//        }


//    });
//});
$(function () {
    $(".navbar-brand img").addClass("d-none");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 520) {
            if (scroll >= 270) {
                $("nav").addClass("fixed-top sleep nav-bg-color");

            } else {
                $("nav").removeClass("fixed-top sleep nav-bg-color");

            }

        }

        else if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").addClass("d-block w-48 ");
        } else {
            $("nav").removeClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").addClass("d-block w-48 ");
        }
    });
});
//$(function () {
//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();
//        if (scroll >= 100) {
//            $("nav").addClass("fixed-top sleep nav-color");
//            $("nav").css("background-color", "rgba(255, 255, 255,1)");
//            $("nav").css("opacity", "1");

//        } else {
//            $("nav").removeClass("fixed-top sleep nav-color");
//            $("nav").css("background-color", "rgba(255, 255, 255,0.749)");
//            $("nav").css("opacity", "0.749");
//        }
//    });
//});


/*===================== Nav tabs active Function Script ======================*/

/*===================== Another Load More Script ======================*/
$(".no-display").slice(0, 6).show();
$("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".no-display:hidden").slice(0, 3).slideDown();
    if ($(".no-display:hidden").length == 0) {
        $("#load-more").fadeOut('slow');
    }
    $('html,body').animate({
        scrollTop: $(this).offset().center
    }, 1500);
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
/*=====================Timer Function Script ======================*/
/*===================== Donation Script ======================*/
$('input[name="donation"]').change(function (e) {
    var check = $("input[name='donation']:checked").val();
    if (check == "other") {
        $("#radio6").parent().removeClass('display-none');
    } else {
        $("#radio6").parent().addClass('display-none');
    }
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});

/*=====================Counter  Script ======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-strike");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});
