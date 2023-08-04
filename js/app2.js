let dateStr = "";
function myFunction() {
    var y = document.getElementById("my").value;
    targetYear = y[0]+y[1]+y[2]+y[3]
    targetMonth = y[5]+y[6]
    targetDay = y[8]+y[9]
    targetHour = y[11]+y[12]
    targetMin = y[14]+ y[15]         
        
    dateStr = targetMonth + ' ' + targetDay + ' ' + targetYear
     + ' ' + targetHour + ':' + targetMin + ':' + '00';

    const getTargetYear = () => new Date(dateStr)

    console.log(getTargetYear())
    const heading2 = document.querySelector('h1');
    const app2 = document.querySelector('.countdown2-timer2');
    const message2 = document.querySelector('.message2');
    const year2 = document.querySelector('.year2');
    year2.innerHTML = getTargetYear().getFullYear()
    const newYear2 = year2.innerHTML
    
    const format2 = (t) => {
    	return t < 10 ? '0' + t : t;
    };
    const render2 = (time2) => {
        app2.innerHTML = `
            <div class="count-down2">
                <div class="timer2">
                    <h2 class="days">${format2(time2.days2)}</h2>
                    <small>Days</small>
                </div>
                <div class="timer2">
                    <h2 class="hours">${format2(time2.hours2)}</h2>
                    <small>Hours</small>
                </div>
                <div class="timer2">
                    <h2 class="minutes">${format2(time2.minutes2)}</h2>
                    <small>Minutes</small>
                </div>
                <div class="timer2">
                    <h2 class="seconds">${format2(time2.seconds2)}</h2>
                    <small>Seconds</small>
                </div>
            </div>
            `;
    };

    const showMessage2 = () => {
        message2.innerHTML = 'Happy target!';
        app2.innerHTML = '';
        heading2.style.display = 'none';
    };
    const hideMessage2 = () => {
        message2.innerHTML = '';
        heading2.style.display = 'block';
    };
    const complete2 = () => {
        showMessage2();
        // restart the countdown after showing the 
        // greeting message for a day ()
        setTimeout(() => {
            hideMessage2();
            countdownTimer2.setExpiredDate2(getTargetYear());
        }, 1000 * 60 * 60 * 24);
    };
    const countdownTimer2 = new CountDown2(
        getTargetYear(),
        render2,
        complete2
    );
}

