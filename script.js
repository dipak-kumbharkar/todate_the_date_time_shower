// Full Date Info
const fullTimeInfo = document.querySelector(".btn");
fullTimeInfo.addEventListener("click", function() {
    document.querySelector(".full-info-date").innerHTML = new Date()
})


// Days Info
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = document.querySelector(".btn");
day.addEventListener("click", function() {
    document.querySelector("#day").innerHTML = days[new Date().getDay()];
})


// Months Info
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = document.querySelector(".btn");
month.addEventListener("click", function() {
    document.querySelector("#month").innerHTML = months[new Date().getMonth()];
})


// Date Info
const date = document.querySelector(".btn");
date.addEventListener("click", function() {
    document.querySelector("#date").innerHTML = new Date().getDate()
})


// Year Info
const year = document.querySelector(".btn");
year.addEventListener("click", function() {
    document.querySelector("#year").innerHTML = new Date().getFullYear()
})


// Time Info
// const time = document.querySelector(".btn");
// time.addEventListener("click", function() {
//     document.querySelector("#time").innerHTML = new Date().getHours()
// })