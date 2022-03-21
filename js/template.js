var lastScrollTop = 0;
var mapDescContainer = $("#kenya-maps-description");

$(window).scroll(function (e) {
    var mapContiner = $("#kenya");
    var mapDescContainer = $("#kenya-maps-description");
    var descText = $(".description-text");
    var mapDiv = $("#kenya-maps");
    var mapDivHeight = mapDiv.outerHeight();
    var activeMap = 0;
    var mapChilds = mapDiv.children('div').length;
    var divTop = mapDiv.offset().top - 200;
    var divBottom = divTop + mapDiv.outerHeight();
    var height = $(window).scrollTop();
    if (divTop < height && divBottom > height) {
        var navHeight = $("#mainNav").outerHeight();
        var windowHeight = $(window).height();
        var kenyaMapsHeight = 100 - ((navHeight / windowHeight) * 100);
        mapContiner.height(kenyaMapsHeight + "% !important");
        mapContiner.css({
            "height": kenyaMapsHeight + "% !important",
        });
        mapDescContainer.removeClass('d-none');
        mapDescContainer.css({
            "margin-top": "-" + 70 + "%",
            'overflow': 'scroll',
            "height": mapDivHeight + "px",
            "background-color": "#6a6a6a80",
            "opacity": 0.9,
        });
        descText.css({
            "height": mapDivHeight + "px",
        });
    }
    else if (divTop > height) {
        mapDescContainer.addClass('d-none');
    }
    else if (divBottom < height) {
        mapDescContainer.addClass('d-none');
    }
    else {
        mapContiner.height("auto");
    }

});


var position = mapDescContainer.scrollTop();

mapDescContainer.scroll(function (e) {
    var height = $(this).scrollTop();
    var mapChilds = mapDescContainer.children('div');

    if (height > position) {
        //console.log('scrollDown');
    }
    else {
        //console.log('scrollUp');

    }
    position = height;

    mapChilds.each(function () {
        var mapId = ($(this).data("map"));
        if (isOnScreen($(this))) {

        }
        else {

        }
    });
});

function isOnScreen(element) {
    var curTop = element.offset().top;
    var curBottom = element.offset().top + element.outerHeight();
    var screenHeight = mapDescContainer.height();
    return (curTop < screenHeight) ? false : true;
}