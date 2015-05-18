var red: boolean = false;
var p: JQuery = $('h1');

setInterval(function(){
    p.css('color', red ? 'black' : 'red');
    red = !red;
}, 1000);
