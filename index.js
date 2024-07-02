const utcTime = document.querySelector('.UTC-time');
const utcDay = document.querySelector('.UTC-day');

const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[date.getDay()];


function updateTime() {
    const date = new Date();
    const now = date.toUTCString().split(',').splice(1);
    return now;
}


setInterval(() => {
    const time = updateTime()
    utcDay.innerText = `${currentDay} -`
    utcTime.innerText = `${time}`;
}, 1000);



