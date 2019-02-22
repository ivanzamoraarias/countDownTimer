//this code is based on https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

const getTimeLeft = (endtime) => {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

const startCountDown = (id, endtime) => {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    const updateClock = () => {
        var t = getTimeLeft(endtime);
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
    let hourValue = document.getElementById('hours').value*60;
    let minutesValue = document.getElementById('minutes').value*60;
    let secondsValue = document.getElementById('seconds').value*1000;
    var sumsec =  hourValue*minutesValue*secondsValue;
    console.log("suma sec", sumsec);
    console.log("date new", new Date(Date.parse(new Date()) + sumsec));
    console.log("resuuuly", new Date(Date.parse(new Date())+hourValue*minutesValue*secondsValue*1000));
    
    var deadline = new Date(Date.parse(new Date()) + sumsec);
   

    startCountDown('clockdiv', deadline);
}
