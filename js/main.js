$(function() {
    function positionNav() {
        $('.bannerText').css("top", ($("#home").height() - $("#HackTheGold").height()-60)/2);
    }
    
    $(window).resize(function() {
        positionNav();
    });

    positionNav();
});

