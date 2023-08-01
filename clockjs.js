const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
// this will show only the time
// console.log(hourEL);
// this one will show the time and date with current update
// function updateclock() {
//   const currentDate = new Date();
//   console.log(currentDate);
// }

// updateclock();
// this is will show in every second update of the time and date
// function updateclock() {
//   const currentDate = new Date();
//   setTimeout(updateclock, 1000);
//   console.log(currentDate);
// }

// updateclock();
// if we need to get the every sec,min,hour we just need
// const currentDate = new Date(); to put beside this gethour(),getsecond(),.....

// we can get in separet mode of evrey Hou,Sec,Min
// so becouse our clock is analog i need to change this in to analog
// function updateclock() {
//   const currentDate = new Date();
//   setTimeout(updateclock, 1000);
//   const hour = currentDate.getHours();
//   const minute = currentDate.getMinutes();
//   const second = currentDate.getSeconds();
//   console.log(hour, minute, second);
// }

// updateclock();
// instade of using settimeout we can use setinterval

function updateclock() {
  const currentDate = new Date();
  // setTimeout(updateclock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const hourdeg = (hour / 12) * 360;
  hourEL.style.transform = `rotate(${hourdeg}deg)`;
  const minutedeg = (minute / 60) * 360;
  hourEL.style.transform = `rotate(${minutedeg}deg)`;
  const seconddeg = (second / 60) * 360;
  hourEL.style.transform = `rotate(${seconddeg}deg)`;
}

// updateclock();
setInterval(updateclock);
