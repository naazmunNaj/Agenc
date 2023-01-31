$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    arrows:false,
});
$('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    arrows:true,
    prevArrow:".left",
    nextArrow:".right",
    centerMode: true,
    responsive:[
        {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
              autoplay: true,
              centerMode: false,
            }
          },
        {
            breakpoint: 319.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
              autoplay: true,
              centerMode: false,
            }
          },
    ]
});

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    $(function(){
        $('.menu-toggle').click(function(){
            $('.menu-toggle').toggleClass('active')
        })
    })
    $(function(){
        $('.menu-toggle').click(function(){
            $('.navbar-nav').toggleClass('hactive')
        })
    })
});