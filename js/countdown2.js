class CountDown2 {
    constructor(expiredDate2, onRender2, onComplete2) {
        this.setExpiredDate2(expiredDate2);
        this.onRender2 = onRender2;
        this.onComplete2 = onComplete2;
    }
    setExpiredDate2(expiredDate2) {
        const currentTime2 = new Date().getTime();
        this.timeRemaining2 = expiredDate2.getTime() - currentTime2;
        this.timeRemaining2 > 0 ? this.start2() : this.complete2();
    }
    complete2() {
        if (typeof this.onComplete2 === 'function') {
            onComplete2();
        }}
    getTime2() {
        return {
            days2: Math.floor(this.timeRemaining2 / 1000 / 60 / 60 / 24),
            hours2: Math.floor(this.timeRemaining2 / 1000 / 60 / 60) % 24,
            minutes2: Math.floor(this.timeRemaining2 / 1000 / 60) % 60,
            seconds2: Math.floor(this.timeRemaining2 / 1000) % 60
        };
    }
    update2() {
        if (typeof this.onRender2 === 'function') {
            this.onRender2(this.getTime2());
        }}

    start2() {
        this.update2();
        const intervalId2 = setInterval(() => {
            this.timeRemaining2 -= 1000;
            if (this.timeRemaining2 < 0) {
                complete2();
                clearInterval(intervalId2);
            } else {
                this.update2();
            }
        }, 1000);
    }
}