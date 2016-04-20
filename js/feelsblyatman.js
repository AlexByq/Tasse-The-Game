$(document).ready(function () {
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    kappaDiv();
    kappaDiv();
    kappaDiv();
    kappaDiv();
    kappaDiv();
	
});
function kappaDiv() {
    var $div = $("<a href='#' onclick='reset()' class='kappa'>");
    $(".animatedkappa").append($div);
    animateDiv();

    function animateDiv() {
        var newq = makeNewPosition();
        var oldq = $div.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);

        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });

    };
}
function newDiv() {
    var $div = $("<a href='#' onclick='klick()' class='goodman'>");
    $(".animatedDivs").append($div);
    animateDiv();

    function animateDiv() {
        var newq = makeNewPosition();
        var oldq = $div.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);

        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });

    };
}

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = .4;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}