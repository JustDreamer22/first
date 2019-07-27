
 $(".header-menu").click(function(){
    $(".navigation").toggleClass("hide")
    $(".fixed_menu").toggleClass("fixed_menu--hide")
})
$("#heil").click(function(){
    $(".heil").addClass("active")
    $(".mein").removeClass("active")
    $(".kampf").removeClass("active")
})
$("#mein").click(function(){
    $(".heil").removeClass("active")
    $(".mein").addClass("active")
    $(".kampf").removeClass("active")
})
$("#kampf").click(function(){
    $(".heil").removeClass("active")
    $(".mein").removeClass("active")
    $(".kampf").addClass("active")
})


$(".border_first").click(function(){
    $(".border_first").addClass("down_border")
    $(".border_second").removeClass("down_border")
    $(".border_third").removeClass("down_border")
})

$(".border_second").click(function(){
    $(".border_first").removeClass("down_border")
    $(".border_second").addClass("down_border")
    $(".border_third").removeClass("down_border")
})


$(".border_third").click(function(){
    $(".border_first").removeClass("down_border")
    $(".border_second").removeClass("down_border")
    $(".border_third").addClass("down_border")
})

