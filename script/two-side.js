var radLeft = $("#radiant-left");
var radDesc = $("#radiant-desc");
var dirRight = $("#dire-right");
var dirDesc = $("#dire-desc");
var slideTimer = 500;
var onProcess = 0;
var offsetDir = 100, offsetRad = 100
var currentShown = 0;

radDesc.hide();
dirDesc.hide();
/*
    display: flex;
    flex-direction: column;
    align-items: center;
*/

function animateDire() {
    dirRight.animate({
        "margin-left": offsetDir + "vw"
    }, slideTimer, function() {
        if(offsetDir == 100) currentShown = 1
        else currentShown = 0
        offsetDir = (offsetDir + 100) % 200

        if(currentShown == 1) radDesc.show(100)
        else radDesc.hide(100)
    })
    console.log("current shown: ", currentShown)
    // 1 = lagii shown
    // 0 = hidden
}

function animateRadiant() {
    radLeft.animate({
        "margin-left": -offsetRad + "vw"
    }, slideTimer, function() {
        if(offsetRad == 100) currentShown = 2
        else currentShown = 0
        offsetRad = (offsetRad + 100) % 200

        if(currentShown == 2) dirDesc.show(100)
        else dirDesc.hide(100) 
    })
}

radLeft.click(function() {
    animateDire()
})

dirRight.click(function() {
    animateRadiant()
})

$(".two-side").on("mouseleave", function() {
    if(currentShown == 1) animateDire()
    if(currentShown == 2) animateRadiant()
})

var debug = setInterval(function() {
}, 100)