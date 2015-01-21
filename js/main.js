$(function() {
    function positionNav() {
        $('.bannerText').css("top", ($("#home").height() - $("#HackTheGold").height() - 140)/2);
    }
    
    $(window).resize(function() {
        positionNav();
    });

    positionNav();
});

