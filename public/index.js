$(document).ready(function() {

    var span=$('#popup');
    var div=$('#c');
    var btn=$('#close');
    var btn2=$('#no');
    var div2=$('#parentlogin');
    var btn3=$('#login');
    var btn4=$('#close1');
    var btn5=$('#Register');
    var btn6=$('#bookmark');
    var div3=$('#parentregister');
    var ep1=$('#ep1');
    var ep2=$('#ep2');
    var ep3=$('#ep3');
    var ep4=$('#ep4');
    var ep5=$('#ep5');
    var ep6=$('#ep6');
    var ep7=$('#ep7');
    var ep8=$('#ep8');
    var ep9=$('#ep9');
    var ep10=$('#ep10');
    var ep11=$('#ep11');
    var ep12=$('#ep12');
    var ep13=$('#ep13');
    var maindiv=$('#fg');
    var btnv1=$('#videoimg1');
    var video1=$('#videoPlayer1');
    var video2=$('#videoPlayer2');
    var video3=$('#videoPlayer3');
    var video4=$('#videoPlayer4');
    var video5=$('#videoPlayer5');
    var video6=$('#videoPlayer6');
    var video7=$('#videoPlayer7');
    var video8=$('#videoPlayer8');
    var video9=$('#videoPlayer9');
    var video10=$('#videoPlayer10');
    var video11=$('#videoPlayer11');
    var video12=$('#videoPlayer12');
    var video13=$('#videoPlayer13');
    let videoupload=$('#videoupload');
        btn.click(function() {
        span.hide();
        div.css("opacity","1");
    })
    btn2.click(function () {
        span.slideUp();
        div.css("opacity","1");
    })
    btn3.click(function () {
        div2.show();
        div.css("opacity","0.2")
    })
    btn4.click(function () {
        div2.hide();
        div3.hide();
    })
    btn5.click(function () {
        div3.show();
        div.css("opacity","0.2");
    })
    ep1.click(function () {
        maindiv.hide();
        btnv1.show();
        btn6.show();
        video1.show();
    })
    ep2.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video2.show();
    })
    ep3.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video3.show();
    })
    ep4.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video4.show();
    })
    ep5.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video5.show();
    })
    ep6.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video6.show();
    })
    ep7.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video7.show();
    })
    ep8.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video8.show();
    })
    ep9.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video9.show();
    })
    ep10.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video10.show();
    })
    ep11.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video11.show();
    })
    ep12.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video12.show();
    })
    ep13.click(function () {
        maindiv.hide();
        btnv1.show()
        btn6.show();
        video13.show();
    })
    btnv1.click(function () {
        video1.hide();
        video2.hide();
        video3.hide();
        video4.hide();
        video5.hide();
        video6.hide();
        video7.hide();
        video8.hide();
        video9.hide();
        video10.hide();
        video11.hide();
        video12.hide();
        video13.hide();
        btnv1.hide();
        btn6.hide();
        maindiv.show();
    })

});