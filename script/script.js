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
    console.log("test");
})(jQuery);