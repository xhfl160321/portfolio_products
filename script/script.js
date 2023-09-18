(function(){
    var slideCount = $(".page6slideimg").lenth;
    var slideIndex = 0;
    var slidePosition;

    setInterval(function(){
        if(slideIndex < slideCount-1){
            slideIndex++;
        }else{
            slideIndex = 0;
        }

        slidePosition = slideIndex * (-634.31)+"px";
        $(".page6imgList").animate({left:slidePosition},400);
    })
    // console.log("test");

    //클릭 시 부드러운 scroll down
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
})(jQuery);