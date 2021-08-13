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
    $(".item").each(function() {
        if($(this).attr("category-num") == index){
            $(this).show(500);
        }
    })
}

function hideItem(index) {
    if(index == -1) return
    $(".item").each(function() {
        if($(this).attr("category-num") == index){
            $(this).hide(500);
        }
    })
}


// $(".category-option").click(function(){
//     $(".item").hide(500);
//     if(optionSize != $(".category-option").length){
//         $(`#ctg-${optionSize}`).css({
//             "background-color": "transparent",
//             "color": "white"
//         })
//     }
//     if(optionSize == parseInt($(this).attr("category-num"),10)){
//         optionSize = $(".category-option").length;
//         $(".item").show(500);
//     }else{
//         optionSize = parseInt($(this).attr("category-num"),10)
//         $(`#ctg-${optionSize}`).css({
//             "background-color": "white",
//             "color": "#060606"
//         })
//         $(".item").each(function() {
//             console.log($(this).attr("category-num"));
//             if($(this).attr("category-num") == optionSize){
//                 $(this).show(500);
//             }
//         })
//     }
//     console.log(optionSize);
// })
