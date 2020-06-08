$(function(){
    $(".rate__star").rateYo({
        rating: 4,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        skin: "round",
        prefix: "$",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        grid: false,
        keyboard: true,
    });
    $('.services__alarm').on('click', function(){
        $(this).children('.alarm__list').toggleClass('active');
    });
    $('.services__post').on('click', function(){
        $(this).children('.post__list').toggleClass('active');
    });

    $('.services__cart').on('click', function(){
        $(this).children('.cart__list').toggleClass('active');
    });

    $('.burger__menu').on('click', function(){
        $('.navigation__menu').toggleClass('active');
    });

    $('.filter__btn-new').on('click', function(){
        $('.filter__btn-new').toggleClass('active');
        $('.filter__btn-pop').removeClass('active');
    });

    $('.filter__btn-pop').on('click', function(){
        $('.filter__btn-pop').toggleClass('active');
        $('.filter__btn-new').removeClass('active');
    });

    $('.filter__btn-grid').on('click', function(){
        $('.filter__btn-grid').toggleClass('active');
        $('.filter__btn-list').removeClass('active');
    });

    $('.filter__btn-list').on('click', function(){
        $('.filter__btn-list').toggleClass('active');
        $('.filter__btn-grid').removeClass('active');
    });

    $('.filter__btn-cat').on('click', function(){
        $('.filter__btn-cat, .categories__list, .filter__categories').toggleClass('active');
        
    });

    $('.filter__btn-prod').on('click', function(){
        $('.filter__btn-prod, .filter__form, .filter__products').toggleClass('active');
        
    });
    $('.filter__btn-price').on('click', function(){
        $('.filter__btn-price, .filter__range-form').toggleClass('active');
        
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
    
    
     
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        prefix: "$",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: false
    });
     
    

    
});

