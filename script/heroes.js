var optionSize = $(".category-option").length;
var currOption = -1;

$(".category-option").click(function() {
    var index = parseInt($(this).attr("category-num"), 10);
    console.log("index: ", index, " current option: ", currOption)

    if(currOption == index) {
        $(`#ctg-${currOption}`).css({
            "background-color": "transparent",
            "color": "white"
        })
    }
    else {
        if(currOption != -1) {
            $(`#ctg-${currOption}`).css({
                "background-color": "transparent",
                "color": "white"
            })
        }
    
        $(`#ctg-${index}`).css({
            "background-color": "white",
            "color": "#060606"
        })
    }

    if(currOption != index) { // belum ke toggle   
        for(let i = 0; i < 4; i++) {
            if(i == index) continue;
            hideItem(i)
        }
        showItem(index)
        currOption = index;
    }
    else {
        for(let i = 0; i < 4; i++) {
            if(i == index) continue;
            showItem(i)
        }
        currOption = -1;
    }
})

function showItem(index) {
    if(index == -1) return
    $(".heroes-html").each(function() {
        if($(this).attr("category-num") == index){
            $(this).show(500);
        }
    })
}

function hideItem(index) {
    if(index == -1) return
    $(".heroes-html").each(function() {
        if($(this).attr("category-num") == index){
            $(this).hide(500);
        }
    })
}