
$(document).ready(function(){
        $('.logo_clients').slick({
            slidesToShow: 4,
            slidesToScroll: 1,          
            autoplay: true,
            autoplaySpeed: 2000,
            infinity: true,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            }],
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }]
        })
        });
      
