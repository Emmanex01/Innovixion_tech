const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

console.log(hour.innerHTML)

let countDownDate  = new Date("November 2, 2024 11:00:00").getTime();


let x = setInterval(() => {

    let currentDate = new Date().getTime();
    
    let different = countDownDate - currentDate;

    let d = Math.floor(different/ (60 * 60 * 1000 * 24));
    console.log(d)
    let h = Math.floor((different % (60 * 60 * 1000 * 24)) /(60 * 60 * 1000));
    let m = Math.floor(((different % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000))/(60 * 1000));
    let s = Math.floor((((different % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000))/(1000));

    day.innerHTML = d + ":";
    hour.innerHTML = h + ":";
    minute.innerHTML = m + ":";
    second.innerHTML = s;
    if (different < 0) {
        clearInterval(x)
    }
    
}, 1000)