$(document).ready(function(){ 
/*all panels will dissapera except selected*/
/*
$(document).ready(function(){  
 $("div").click(function(){
    $(this).siblings().hide();
 });
});
 */
 /*when button is clicked it hides*/
 /*
 $(".theButton").click(function(){
    $(this).hide();
 });
});
*/
/*buttons will fade*/
/*
$(".theButton").click(function(){
    $("#panel .container").siblings().fadeTo(1000, .5);
});
*/
/*
$(".superButton").click(function(){
    $("#panel .container").siblings().removeClass("fadeTo");
});
 */  
   $(".theButton").mouseenter(function(){
       $(this).addClass("hovered");
   });
   $(".theButton").mouseout(function(){
	$(this).removeClass("hovered");
   });

});
    
    
