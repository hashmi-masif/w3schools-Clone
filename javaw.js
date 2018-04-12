$(document).ready(function(){
    var x=0,y=0,z=0,wide;
    wide=$(window).width();
    
if(wide<600){
    $("#red").css({"dispaly":"none"});
}else{
$("#red").css({"dispaly":""});}

    if(wide<930){
        $(".left-aside ul").css({"display":"none","width":"50%","position":"fixed","top":100});
        $(".left-aside ul").css({"display":"none"});
    }else{
        $(".left-aside ul").css({"display":"block"}); 
        
    }
    $("#more").click(function(){
       if(x==0)
{ 
    y=0;
    z=0;
      x++; 
     $(".reference-menu").css({"display":"none"});
     $(".examples-menu").css({"display":"none"});    
     $(".more-menu").css({"display":"block"});
       }else{
        $(".more-menu").css({"display":"none"});
        x--;
       }
    });
    $("#reference").click(function(){
        if(y==0)
 {   z=0;
    x=0; 
      y++;
     $(".examples-menu").css({"display":"none"});
      $(".more-menu").css({"display":"none"});   
       $(".reference-menu").css({"display":"block"});
      }else{
         $(".reference-menu").css({"display":"none"});
         y--;
        }
     });
     $("#examples").click(function(){
        if(z==0)
 {   z++;  
    x=0;
    y=0;
     $(".reference-menu").css({"display":"none"});   
      $(".more-menu").css({"display":"none"});
       $(".examples-menu").css({"display":"block"});
        }else{
         $(".examples-menu").css({"display":"none"});
         z--;
        }
     });

$(window).resize(function(){
 wide=$(window).width();
 
if(wide<935){
    $(".left-aside ul").css({"display":"none"});
}else{
    $(".left-aside ul").css({"display":"block"}); 
}
if(wide<600){
    $("#red").css({"dispaly":"none"});
}else{
$("#red").css({"dispaly":""});}

if(wide>935)
    { $(".left-aside ul").css({"display":"","width":"","position":"","top":120});}

});

$(window).scroll(function(){
var scroll=document.querySelector("body").scrollTop;
var wid=$(window).width();


if(wid>983){
if(scroll>72){
    $("nav ul").css({"position":"fixed","right":0,"top":0,"width":"100%"});
    $(".left-aside ul").css({"position":"fixed","left":0,"top":48});
}
else if(scroll<72){
    $("nav ul").css({"position":"","right":"","top":"","width":""});
     $(".left-aside ul").css({"position":"","right":"","top":"","width":""});
}
}else if(wid<983&&wid>400){
    
    if(scroll>106){

        $("nav ul").css({"position":"fixed","right":0,"top":0,"width":"100%"});
    }
    else if(scroll<106){
        $("nav ul").css({"position":"","right":"","top":"","width":""});
    }
    if(scroll>125)
        {         $(".left-aside ul").css({"position":"fixed","left":0,"top":48});
}else if(scroll<125)
{         $(".left-aside ul").css({"position":"","left":"","top":""});
}
}
else{
    if(scroll>125){
        $("nav ul").css({"position":"fixed","right":0,"top":0,"width":"100%"});
         $(".left-aside ul").css({"position":"fixed","left":0,"top":48});
    }
    else if(scroll<125){
        $("nav ul").css({"position":"","right":"","top":"","width":""});
        $(".left-aside ul").css({"position":"","left":"","top":""});
    }
}

});
var z=0;
$("#menu_icon").click(function(){
    if(wide<400){
if(z==0){
    z++;
    $(".left-aside ul").css({"display":"block","width":"50%","position":"absolute","top":178});
}else{
    z--;
    $(".left-aside ul").css({"display":"none"});
}}
else{
    if(z==0){
        z++;
        $(".left-aside ul").css({"display":"block","width":"50%","position":"absolute","top":154});
    }else{
        z--;
        $(".left-aside ul").css({"display":"none"});
    }
}

});



    });