// var width = document.documentElement.clientWidth;
// var height =  document.documentElement.clientHeight;
// if( width < height ){
//     $print =  $('.item');
//     $print.width(height);
//     $print.height(width);
//     $print.css('top',  (height-width)/2 );
//     $print.css('left',  0-(height-width)/2 );
//     $print.css('transform' , 'rotate(90deg)');
//     $print.css('transform-origin' , '50% 50%');
// }
$(function(){
    $(".loading").eq(0).addClass("active")
    setTimeout(function(){
        $(".loading").eq(1).addClass("active")
    },1500)
    setTimeout(function(){
        $(".loading").eq(1).removeClass("active")
        $(".item.p1").addClass("active")
    },3000)
    setTimeout(function(){
        $(".item.p1").removeClass("active")
        $(".item.p2").addClass("active")

    },4000)
    setTimeout(function(){
        $(".item.p2").addClass("actives")
        $(".loading.b7").addClass("actives")

    },5500)
    setTimeout(function(){
        $(".item.p3").addClass("active")
        $(".loading.b7").removeClass("actives")
    },6500)
    setTimeout(function(){
        $(".item.p3").addClass("active")
        $(".item.p4").addClass("active")
        // $(".loading.b7").removeClass("actives")
    },7500)
    setTimeout(function(){
        $(".item.p3").addClass("act")
        $(".item.p4").addClass("act")
        $(".loading.b9s").addClass("act")
        setTimeout(function(){

            $(".loading.b9s").addClass("acs")
            $(".loading.b9").eq(0).addClass("ac")

        },1500)
        setTimeout(function(){
            $(".loading.b9").eq(0).addClass("acs")
            $(".loading.b9").eq(1).addClass("ac")

        },2200)
        setTimeout(function(){
            $(".loading.b9").eq(1).addClass("acs")
            $(".loading.b9").eq(2).addClass("ac")

        },2700)
    },9000)
    // var t =setInterval(function(){abc()},2000);



    // timer = setInterval(function(){abc()},2000)


})