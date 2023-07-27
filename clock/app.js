var time =document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");
var pmam=document.getElementById("pmam");

function  updateSaat() {
    let h = new Date().getHours();        // new date saati oluşturuyor
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let pmam ="AM";


if ( h>12){
    h= h-12;
    pmam="PM";
}
h= h <10? "0" + h:h;
m= m <10? "0" + m:m;
s= s <10? "0" + s:s;

time.innerText= h;
minute.innerText= m;
second.innerText=s;
pmam.innerText= pmam;
setTimeout(() => {
    updateSaat();
}, 1000);
}
updateSaat();
