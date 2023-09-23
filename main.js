//DOM (Document Object Model) elements - elements to be changed in the html?
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting');


let today = new Date(),
    hour = today.getHours();

//Show time, update every second
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add zeros to the time
function addZero(n){
    //The ? operator takes 3 operands - a condition, a value if true and a value if false
    //This code attaches a 0 before the number n if n is single digit
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//Change background
function setBG(hour){
    if(hour <= 6 && hour > 5){
        //sunrise
        document.body.style.backgroundImage = "url('images/sunrise.jpg')";
    }else if(hour >= 18 && hour < 19){
        //sunset
        document.body.style.backgroundImage = "url('images/sunset.jpg')";
    }else if(hour <18 && hour > 6){
        //day
        document.body.style.backgroundImage = "url('images/day.jpg')";
    }else{
        //night
        document.body.style.backgroundImage = "url('images/night.jpg')";
    }
}

//Change greeting
function changeGreeting(hour){
    if(hour < 12){
        //Morning
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        //Afternoon
        greeting.textContent = 'Good Afternoon';
    }else{
        //Evening
        greeting.textContent = 'Good Evening';
    }
}


//Run the function showTime to display the time
showTime();
setBG(hour);
changeGreeting(hour);