 
$(document).ready(function(){
    $("#bold").click(function(){
   $(".divmodify").css('fontWeight','bold')
    });
});

$(document).ready(function(){
    $("#italic").click(function(){
   $(".divmodify").css('fontStyle','italic')
    });
});

$(document).ready(function(){
    $("#underline").click(function(){
   $(".divmodify").css('textDecoration','underline')
    });
});

$(document).ready(function(){
    $("#fonts").change(function(){
        $(".divmodify").css('font-family', $(this).val());
    });
});

$(document).ready(function(){
    $("#size").change(function(){
        $(".divmodify").css('font-size', $(this).val());
    });
});
