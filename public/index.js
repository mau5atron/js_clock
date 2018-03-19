function setDate(){
	// moves the seconds hand around clock
	const secondHand = document.querySelector('.second-hand');
	// minutes hand
	const minsHand = document.querySelector('.min-hand');
	// hours hand 
	const hourHand = document.querySelector('.hour-hand');

	// javascript time now
	const now = new Date();
	// seconds const

	const seconds = now.getSeconds();
	// added 90 to end of equation - initiated degrees at 90 in css
	const secondsDegrees = ((seconds / 60) * 360) + 90;

	// gets the minutes
	const mins = now.getMinutes();
	// gets the current minute
	const minsDegrees = ((mins / 60) * 360) + 90;

	const hour = now.getMinutes();
	const hourDegrees = ((mins / 12) * 360) + 90;


	// tranforms the hand according to the time in seconds
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	minsHand.style.transform = `rotate(${minsDegrees}deg)`
	hourHand.style.transform = `rotate(${hourDegrees}deg)`

	


}

setInterval(setDate, 1000);


(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();