
var time= setInterval(  ()=>{
    myTime();
}, 1000);

function myTime() {
    var date =new Date();
    document.querySelector('#txt').innerHTML= date.toLocaleTimeString();
    document.querySelector('#date').innerHTML= date.toLocaleDateString();

}