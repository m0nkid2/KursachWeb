let special = 1;
$(document).ready(function() {
    function switch__discount__img(a) {
        if (a == "right"){
            if (special == 3){
                special = 0;
            }
            special = special + 1;
            $(".body__special__img").attr("src", "img/special__" + (special) + ".png");
        }
        if (a == "left"){
            if (special == 1){
                special = 4;
            }
            special = special - 1;
            $(".body__special__img").attr("src", "img/special__" + (special) + ".png");
        }
    }

    $(".body__special_arrow__right").click(function() {
        switch__discount__img("right");
    });
    $(".body__special_arrow__left").click(function() {
        switch__discount__img("left");
    });
});