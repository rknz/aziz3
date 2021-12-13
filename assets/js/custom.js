
$(document).ready(function () {
    'use strict'
    // =================================================================== Metires_ Bg On Hovar
    $('.Metires_Item ul li').hover(function(){
        $('#Metires_Bg').removeClass().addClass($(this).attr('rel')).addClass('mshow');
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.Metires_Item ul li').mouseleave(function(){
        $('#Metires_Bg').removeClass($(this).attr('rel'));
    });
    // =================================================================== Metires_ Bg On Hovar
    AOS.init();
    
    // =================================================================== Metires_ Bg On Hovar
     $('.one').css("background-image", "url(bg-b.png)");

});
