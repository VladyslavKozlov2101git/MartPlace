$(function(){
    $('.services__alarm').on('click', function(){
        $(this).children('.alarm__list').toggleClass('active');
    });
    $('.services__post').on('click', function(){
        $(this).children('.post__list').toggleClass('active');
    });

    $('.services__cart').on('click', function(){
        $(this).children('.cart__list').toggleClass('active');
    });
    

    $(".rate__star").rateYo({
        rating: 4,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });
    var mixer = mixitup('.release__items'); 
    
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
    
    


     

    
});

