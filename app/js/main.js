$(function(){
    $(".rate__star").rateYo({
        rating: 4,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });
    
    $('.f-slider__inner.feed').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $('.f-slider__inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    



    var mixer = mixitup('.release__items');  

    
});

$('.products__btn').on('click', function(){
    $(this).toggleClass('btn_active');

});