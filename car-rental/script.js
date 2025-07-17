var cars = [
    {
        "name":"BMW coupe",
        "image": "img/bmw.jpg",
        "link": "https://www.bmw.com.tr/tr/index.html"
    },
    {
        "name":"AMG",
        "image": "img/amg.jpg",
        "link": "https://www.mercedes-benz.com.tr/"
    },
    {
        "name":"Audi",
        "image": "img/audi.jpg",
        "link": "https://www.audi.com.tr/tr/web/tr.html"
    },
    {
        "name":"Dodge",
        "image": "img/dodge.jpg",
        "link": "https://www.dodge.com/"
    },
    {
        "name":"Range",
        "image": "img/range.jpg",
        "link": "https://www.landrover.com.tr/"
    }
];
var settings = {
    "duration": 2000,
    "random": false
}
var index = 1;
var carsLengt = cars.length;
var interval;
init(settings);

document.querySelectorAll(".arrow").forEach((item) => {
    item.addEventListener("mouseenter", () =>{
        clearInterval(interval);
    })
});
document.querySelectorAll(".arrow").forEach((item) => {
    item.addEventListener("mouseleave", () =>{
        init(settings);
    })
});
document.querySelector(".fa-arrow-circle-left").addEventListener("click", () => {
    index -= 1;
    show(index);
});
document.querySelector(".fa-arrow-circle-right").addEventListener("click", () => {
    index += 1;
    show(index);
});


function init(settings) {
    var prev;
    interval = setInterval(function() {
        if(settings.random){
            do{
                index = Math.floor(Math.random() * carsLengt)
            }while(index == prev);
            prev = index;
        }else{
            if(carsLengt == index + 1){
                index = -1;
            }
            show(index);
            index++;
        }
        show(index)
    }, settings.duration)
}


function show(i){
    i = index;
    if(i < 0){
        index = carsLengt - 1;
    }
    if(i >= carsLengt){
        index = 0;
    }
    document.querySelector(".card-img-top").setAttribute("src", cars[index].image);
    document.querySelector(".card-title").textContent = cars[index].name;
    document.querySelector(".card-link").setAttribute("href", cars[index].link);
}