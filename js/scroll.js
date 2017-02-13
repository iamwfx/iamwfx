
$(".researchHeader").click(function(e){
    
    $('html, body').animate({
        scrollTop: $("#research").offset().top,
        // top: "+=20",
        easing: "swing"
    }, 1000);
    



});


$(".designHeader").click(function(e){

    $('html, body').animate({
        scrollTop: $("#design").offset().top,
        // top: "+=20",
        easing: "swing"
    }, 1400);
    

    

});

