var dateHeading = document.getElementById("date");

var currentDate = new Date();

var formattedDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

dateHeading.textContent = "Today's Date: " + formattedDate;

var timeHeading = document.getElementById("time");

function updateTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var formattedTime = hours + ":" + minutes + ":" + seconds;

    timeHeading.textContent = "Current Time: " + formattedTime;
}

updateTime();

setInterval(updateTime, 1000);

//i requied the help of chatgpt lol
