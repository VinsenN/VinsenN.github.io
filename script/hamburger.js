var ham = $(".hamburger");

ham.click(function() {
    var nav = $(".navbar");
    if(nav.css("display") == "none") {
        nav.css({
            "display": "flex",
            "flex-direction": "column",
            "align-items": "flex-start"
        })  

        $(".navigation").css({
            "display": "block"
        })
    }
    else {
        nav.css( {
            "display": "none"
        })
    }
})
