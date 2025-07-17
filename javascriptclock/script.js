let myName = document.querySelector("#myName");
let userName = prompt("adinizi girin: ");
myName.innerHTML = userName;




function showTime() {
    let today = new Date();
    let day = today.getDay();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);


    let myClock = document.querySelector("#myClock");
    myClock.innerHTML = h + ":" + m + ":" + s + " " + days[day];

}
function checkTime(i){
    if (i < 10){
        i = "0" + i;
    }
    return i;
}
setInterval(showTime, 1000);

