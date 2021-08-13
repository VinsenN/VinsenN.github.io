var sliderImg = $(".slider-image");
var currOffset = 0;
var currIndex = 0, len = sliderImg.length;
var intervalTimeDelay = 5000;
var startPoint = $("#slider-start");
var onProcess = 0;
var prevWidth = $(".slider-image").width();
var sliderWidth = prevWidth;
var refreshRate = 1;
var active = 0;

// in case mendadak diganti widthnya waktu testing, slider ngga ngebug
// tanpa refresh width currOffset bakal meleset hitungannya karena value sliderWidth berubah
// jadinya bisa ngebug gambarnya
var refreshWidth = setInterval(function() { 
    sliderWidth = $(".slider-image").width();
    if(sliderWidth != prevWidth) { // kalau ada update, update offsetnya
        currOffset = sliderWidth * currIndex;
        startPoint.css({ // no animation so it looks smooth (as if nothing changes)
            "margin-left": -currOffset + "px"
        })
    }
}, refreshRate); 

sliderImg.eq(currIndex).show()
$(`#bullet-${currIndex}`).css({
    "background-color": "white"
})

function shiftSlide(move) {
    $(`#bullet-${currIndex}`).css({
        "background-color": "transparent"
    })
    currIndex = (len + currIndex + move) % len
    currOffset = sliderWidth * currIndex;
    startPoint.animate({
        "margin-left": -currOffset + "px"
    }, 500, function() {
        active = 0
    })
    
    $(`#bullet-${currIndex}`).css({
        "background-color": "white"
    })
}

var intervalSlide = setInterval(function() {
    shiftSlide(1)
}, intervalTimeDelay);

$(".slider-arrow").click(function(){
    if(active != 0) return
    active = 1

    clearInterval(intervalSlide)
    intervalSlide = setInterval(function() {
        shiftSlide(1)
    }, intervalTimeDelay);

    var direction = parseInt($(this).attr("arrow-dir"), 10)
    shiftSlide(direction)
    // console.log(currIndex)
})

$(".bullet").click(function(){
    if(active != 0) return
    active = 1
    
    clearInterval(intervalSlide)
    intervalSlide = setInterval(function() {
        shiftSlide(1)
    }, intervalTimeDelay);

    $(`#bullet-${currIndex}`).css({
        "background-color": "transparent"
    })
    var target = parseInt($(this).attr('bullet-index'), 10);
    $(`#bullet-${target}`).css({
        "background-color": "white"
    })
    
    currOffset = sliderWidth * target;
    startPoint.animate({
        "margin-left": -currOffset + "px"
    }, 500, function() {
        active = 0
    })

    currIndex = target
})