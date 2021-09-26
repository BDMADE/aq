$('#exhibition-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
            nav:true,
            navText: ["", ""],
            loop:true,
            autoHeight:true,
            dots: false
        }
    },
});
