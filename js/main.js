var clicks = 0;

function klick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
};


function reset() {
        document.getElementById("clicks").innerHTML = 0;
};



var fail = document.getElementById("fail");
var milestone = document.getElementById("milestone");
var winning = document.getElementById("winning");
milestone.volume = 1;
fail.volume = 1;




$(document).ready(function(){
    $(".animatedblyat").on("click",".goodman", function(){
        $(this).remove();
    });
    $(".animatedblyat").on("click",".goodman", function(){
switch(clicks)
{
case 5:
    milestone.play();
    break;

case 10:
    milestone.play();
    break;

case 15:
    milestone.play();
    break;

case 20:
    milestone.play();
    break;

case 25:
    milestone.play();
    break;

case 30:
    milestone.play();
    break;

case 35:
    milestone.play();
    break;

case 40:
    milestone.play();
    break;

case 45:
    milestone.play();
    break;

case 50:
    milestone.play();
    break;

case 55:
    milestone.play();
    break;

case 60:
    milestone.play();
    break;
case 65:
    milestone.play();
    break;
}
if(document.querySelectorAll('.goodman').length == 0){
    		winning.play();
    	}
});


$(".animatedkappa").on("click",".kappa", function(){
        respawn = true;
        while(respawn == true && document.querySelectorAll('.goodman').length < 69){
        blyatDiv();
        if(document.querySelectorAll('.goodman').length == 69){
            respawn = false;
    }
}
clicks = 0;
fail.play();
   });
});
