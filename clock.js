const clock = document.querySelector('.Mclock');
const a = document.querySelector(".A");
const cris = document.querySelector(".cris");

function getTime(){
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let Rhour;
    let AMPM;
    let Month = time.getMonth();
    let Year = time.getFullYear();
    let Day = time.getDate();
    let CDay = 25-Day;

    if(hour>12){
      Rhour=hour-12;
      AMPM="PM";
    }
    else if(hour<=12){
      Rhour=hour;
      AMPM="AM";
    }

    clock.innerHTML = `${Rhour<10 ? `0${Rhour}`:Rhour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
    a.innerHTML = AMPM;
    //cris.innerHTML = "🎄D-"+CDay;
}


function init(){
    setInterval(getTime, 1000);
}

init();
