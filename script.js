//get our elements

const daysDOM = document.querySelector(".days");
const hoursDOM = document.querySelector(".hours");
const minutesDOM = document.querySelector(".minutes");
const secondsDOM = document.querySelector(".seconds");

//we will get the today date
const currentYear = new Date().getFullYear();

const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
function updaetDOM() {
  const now = new Date();

  const missing = newYear - now;
  const days = Math.round(missing / 1000 / 60 / 60 / 24);
  const hours = Math.round((missing / 1000 / 60 / 60) % 24);
  const minutes = Math.round((missing / 1000 / 60) % 60);
  const seconds = Math.round((missing / 1000) % 60);

  daysDOM.innerHTML = days;
  hoursDOM.innerHTML = hours;
  minutesDOM.innerHTML = minutes;
  secondsDOM.innerHTML = seconds;
}

setInterval(() => updaetDOM(), 2000);
