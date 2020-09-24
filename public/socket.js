var v=[];
$(document).ready(function(){

    let inp=$('#inp');
    let btn=$('#btn');
    let result=$('#result');
    var socket =io.connect();
    var name=prompt("What is your Name?");
    var all=[];
    let popup=$('#popup');
    let img1=$('#squad');
    let img2=$("#duo")
    let left=$('#left');
    let right=$('#right');
    let skip=$('#skip');
    let div=$('#text1');
    let parent=$('#parent');
    all.push(name);
    console.log(all);

    btn.click(function(){
        let value=inp.val();
        add(value);
        socket.emit('name',name);
    });
    function add(value){
        socket.emit('message',value); //Emitter1
    }
    socket.on('people',function (data) {
        console.log(data);
    });
    socket.on('tpeople',function (data) {
        console.log(data);
    });

    socket.on('send_all',function (data) {//Listener 2
        var id=data.id;
        var msg=data.msg;
        result.append(`<li>${id}:${msg}</li>`);

    });
    socket.on('new',function(data){
        display(data);
    });
    function display(data) {
        data.forEach(function (data) {
            result.append(`<li>${data}</li>`)
        })
     }
    // right.click(function () {
    //     img1.hide();
    //     img2.show();
    //     div.show();
    // });
    // skip.click(function () {
    //     popup.hide();
    //     parent.css('opacity','1');
    // });
});

