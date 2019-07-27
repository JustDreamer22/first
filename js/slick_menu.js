 $(document).ready(function(){
$('.slick_menu_cont').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            dots:true,
            arrows: false,
            responsive: [{
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
                        {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
                        ],
        });
 });
