$(document).ready( function() {

    // With this function we will assemble our clock, 
    // calling up whole date and then hours, minutes, 
    // and seconds individually.

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var day = weekday[currentTime.getDay()];
        var month = new Array(11);
        month[0]=  "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "Septmeber";
        month[9] = "October";
        month[10] = "Novemeber";
        month[11] = "December";
         month = month[currentTime.getMonth()];
        var date = currentTime.getDate();
        var year = currentTime.getFullYear();
    
    
    
        //Berlin
        var meridiem = changeMeridiem(hours);  // Default is AM
    
        var clockDiv1 = document.getElementById('clock1');
        clockDiv1.innerText = parseHours(hours) + ":" + parseMinutes(minutes) + ":" + parseSeconds(seconds) + " " + meridiem;
        var dayDiv1 = document.getElementById('day1');
        dayDiv1.innerText = day;
        
        var dateText1 = document.getElementById("date_text1");
        dateText1.innerText = month + " " + date + " " + year;
        
        //New York
         var newyorkCurrentTime = new Date();
         newyorkCurrentTime.setHours(currentTime.getHours()-5);
         
         
        meridiem = changeMeridiem(newyorkCurrentTime.getHours());  // Default is AM
        var clockDiv2 = document.getElementById('clock2');
        clockDiv2.innerText = parseHours(newyorkCurrentTime.getHours()) + ":" + parseMinutes(newyorkCurrentTime.getMinutes()) + ":" + parseSeconds(newyorkCurrentTime.getSeconds()) + " " + meridiem;
        
        var dayDiv2 = document.getElementById('day2');
        dayDiv2.innerText = getCurrentDay(newyorkCurrentTime);
        
        var dateText2 = document.getElementById("date_text2");
        dateText2.innerText = getCurrentMonth(newyorkCurrentTime) + " " + newyorkCurrentTime.getDate() + " " + newyorkCurrentTime.getFullYear();
        
        //Tokyo
        var tokyoCurrentTime = new Date();
        tokyoCurrentTime.setHours(tokyoCurrentTime.getHours()+8);
        meridiem = changeMeridiem(tokyoCurrentTime.getHours()); 
        
        var clockDiv3 = document.getElementById('clock3');
        clockDiv3.innerText = parseHours(tokyoCurrentTime.getHours()) + ":" + parseMinutes(tokyoCurrentTime.getMinutes()) + ":" + parseSeconds(tokyoCurrentTime.getSeconds()) + " " + meridiem;
        
        var dayDiv3 = document.getElementById('day3');
        dayDiv3.innerText = getCurrentDay(tokyoCurrentTime);
        
        var dateText3 = document.getElementById("date_text3");
        dateText3.innerText = getCurrentMonth(tokyoCurrentTime) + " " + tokyoCurrentTime.getDate() + " " + tokyoCurrentTime.getFullYear();
        
        //Sydney
        var sydneyCurrentTime = new Date();
        sydneyCurrentTime.setHours(sydneyCurrentTime.getHours()+12);
        meridiem = changeMeridiem(sydneyCurrentTime.getHours()); 
        
        var clockDiv4 = document.getElementById('clock4');
        clockDiv4.innerText = parseHours(sydneyCurrentTime.getHours()) + ":" + parseMinutes(sydneyCurrentTime.getMinutes()) + ":" + parseSeconds(sydneyCurrentTime.getSeconds()) + " " + meridiem;
        
        var dayDiv4 = document.getElementById('day4');
        dayDiv4.innerText = getCurrentDay(sydneyCurrentTime);
        
        var dateText4 = document.getElementById("date_text4");
        dateText4.innerText = getCurrentMonth(sydneyCurrentTime) + " " + sydneyCurrentTime.getDate() + " " + sydneyCurrentTime.getFullYear();
    }
    
    function getCurrentDay(currentTime){
        var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var day = weekday[currentTime.getDay()];
        return day;
    }
    
    function getCurrentMonth(currentTime){
        var month = new Array(11);
        month[0]=  "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "Septmeber";
        month[9] = "October";
        month[10] = "Novemeber";
        month[11] = "December";
        var month = month[currentTime.getMonth()];
        return month;
    }
    
    function changeMeridiem(hours){
         var meridiem = "AM";  // Default is AM
        
        // If hours is greater than 12
        if (hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
            meridiem = "PM"; // Keep track of the meridiem
        }
        return meridiem;
    }
    
    function parseHours(hours){
         if(hours < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            hours = "0" + hours;
        }
        return hours;
    }
    
    function parseMinutes(minutes){
         if(minutes < 10) {
            minutes = "0" + minutes;
        }   
        return minutes;
    }
    
    function parseSeconds(seconds){
         if(seconds < 10) {
            seconds = "0" + seconds;
        }
        return seconds;
    }
    
    // This runs the displayTime function the first time
    displayTime();
    
    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});