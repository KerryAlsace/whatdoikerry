setInterval(function() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    if (hours <= 11) {
        var period = "AM";
    } else {
        var period = "PM"; 
    }
    
    if (hours > 12) {
        hours = hours - 12;
    }
    
    if (minutes < 10) {
        minutes = "0" + String(minutes);
    }
    
    if (seconds < 10) {
        seconds = "0" + String(seconds);
    }    
     
    var clockTime = hours + ' : ' + minutes + ' : ' + seconds + ' ' + period;
    
    var clock = document.getElementById('clock');
    
    clock.innerText = clockTime;
}, 1000);