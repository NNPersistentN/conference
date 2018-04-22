var width = document.documentElement.clientWidth;
var height =  document.documentElement.clientHeight;
if( width < height ){
    $print =  $('.item');
    $print.width(height);
    $print.height(width);
    $print.css('top',  (height-width)/2 );
    $print.css('left',  0-(height-width)/2 );
    $print.css('transform' , 'rotate(90deg)');
    $print.css('transform-origin' , '50% 50%');
}
$(function(){
    function abc(){
        num++;
        if(num>=57){
            clearInterval(t);
        }
        if(0<num&&num<=6){

            $(".item").each(function(e,v){
                if($(v).attr("id") < num){
                    $(v).addClass("active");
                }

            })
        }else if(6<num&&num<=57){
            $(".item").each(function(e,v){
                if($(v).attr("id") < num){
                    $(v).addClass("active");
                    $(v).addClass("actives");
                }
            })

        }

    }

    var t =setInterval(function(){abc()},2000);


    $(".item").each(function(e,v){
        $(v).css({background:"url('../images/0000-"+(e+1)+".jpg') no-repeat center center / cover"}).attr("id",e+1);
    })
    var num = 0;
    $(".item").each(function(e,v){

        if(0<num&&num<6){
        }else if(6<$(v).attr("id")&&$(v).attr("id")<15){
                $(v).addClass("at1");
        }
    })



    // timer = setInterval(function(){abc()},2000)


})