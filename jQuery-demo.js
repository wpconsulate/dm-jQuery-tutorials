$(".button");
$("a.button");
$("#button");
jQuery("#button");

var dmjs = jQuery.noConflict();


dmjs("#myButton").click(function(ev){
    dmjs("#myButton").html("Loading....");
});


dmjs(".button").on('click', function(ev){
    
    // dmjs(this).parent()

    dmjs('<button class="button">Click Me</button>').appendTo(dmjs(this).parent());

});

