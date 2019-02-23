//this code is based on https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
var currentDate = undefined;
const getTimeLeft = (endtime, currentDate) => {
    console.log("End", endtime);
    console.log("Current", currentDate);
    var t = Date.parse(endtime) - Date.parse(new Date());
    console.log("Diff", new Date(t))
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    console.log("DAYS", days);
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

const startCountDown = (id, endtime, currentDate) => {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    const updateClock = () => {
        var t = getTimeLeft(endtime, currentDate);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

const executeCountDown = () => {
    let hourValue = document.getElementById('hours').value;
    let minutesValue = document.getElementById('minutes').value;
    let secondsValue = document.getElementById('seconds').value;
    //var sumsec =  hourValue*minutesValue*secondsValue;
    var sumsec =hourValue*60*60*1000 + minutesValue*60*1000 + secondsValue*1000;

    currentDate = new Date();
    console.log("suma sec", sumsec);
    
    var deadline = new Date(Date.parse(currentDate) + sumsec);
   

    startCountDown('clockdiv', deadline, currentDate);
}
