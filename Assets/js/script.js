// start code
window.onload=displayDay;

var timeEl = document.getElementById("currentDay");

// starts timer on page load

var currentTime = displayDay(currentTime);

function displayDay() {
    // can i make it refresh seconds and minutes? 
    var currentTime = moment().format('MMMM Do, YYYY, h:mm:ss a');
    timeEl.innerHTML = currentTime;
    // setInterval(() => {
    //     displayDay();
    //       // should i call colorTime every minute?
    // }, 1000);
    colorTime();
};

// change textarea based on time 
function colorTime() {
    rightNow = 11; //moment().format("H");
    var time9 = document.querySelector("#time9");
    var time10 = document.querySelector("#time10");
    var time11 = document.querySelector("#time11");
    var time12 = document.querySelector("#time12");
    var time13 = document.querySelector("#time1");
    var time14 = document.querySelector("#time2");
    var time15 = document.querySelector("#time3");
    var time16 = document.querySelector("#time4");
    var time17 = document.querySelector("#time5");

    


    // what about a while loop? didn't work

    // what about a switch statement?

    // switch(rightNow) {
    //     case 9:
    //         time9.classList.add("present");
    //         time9.classList.remove("future", "past");
    //         time10.classList.add("future");
    //         time10.classList.remove("past", "present");
    //         time11.classList.add("future");
    //         time11.classList.remove("past", "present");
    //         time12.classList.add("future");
    //         time12.classList.remove("past", "present");
    //         time13.classList.add("future");
    //         time13.classList.remove("past", "present");
    //         time14.classList.add("future");
    //         time14.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 10:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("present");
    //         time10.classList.remove("past", "future");
    //         time11.classList.add("future");
    //         time11.classList.remove("past", "present");
    //         time12.classList.add("future");
    //         time12.classList.remove("past", "present");
    //         time13.classList.add("future");
    //         time13.classList.remove("past", "present");
    //         time14.classList.add("future");
    //         time14.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 11:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("present");
    //         time11.classList.remove("past", "future");
    //         time12.classList.add("future");
    //         time12.classList.remove("past", "present");
    //         time13.classList.add("future");
    //         time13.classList.remove("past", "present");
    //         time14.classList.add("future");
    //         time14.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 12:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("present");
    //         time12.classList.remove("past", "future");
    //         time13.classList.add("future");
    //         time13.classList.remove("past", "present");
    //         time14.classList.add("future");
    //         time14.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 13:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("past");
    //         time12.classList.remove("present", "future");
    //         time13.classList.add("present");
    //         time13.classList.remove("past", "future");
    //         time14.classList.add("future");
    //         time14.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 14:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("past");
    //         time12.classList.remove("present", "future");
    //         time13.classList.add("past");
    //         time13.classList.remove("present", "future");
    //         time14.classList.add("present");
    //         time14.classList.remove("past", "future");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 15:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("past");
    //         time12.classList.remove("present", "future");
    //         time13.classList.add("past");
    //         time13.classList.remove("present", "future");
    //         time14.classList.add("past");
    //         time14.classList.remove("present", "future");
    //         time15.classList.add("present");
    //         time15.classList.remove("past", "future");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 16:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("past");
    //         time12.classList.remove("present", "future");
    //         time13.classList.add("past");
    //         time13.classList.remove("present", "future");
    //         time14.classList.add("past");
    //         time14.classList.remove("present", "future");
    //         time15.classList.add("past");
    //         time15.classList.remove("present", "future");
    //         time16.classList.add("present");
    //         time16.classList.remove("past", "future");
    //         time15.classList.add("future");
    //         time15.classList.remove("past", "present");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");

    //         case 17:
    //         time9.classList.add("past");
    //         time9.classList.remove("future", "present");
    //         time10.classList.add("past");
    //         time10.classList.remove("present", "future");
    //         time11.classList.add("past");
    //         time11.classList.remove("future", "present");
    //         time12.classList.add("past");
    //         time12.classList.remove("present", "future");
    //         time13.classList.add("past");
    //         time13.classList.remove("present", "future");
    //         time14.classList.add("past");
    //         time14.classList.remove("present", "future");
    //         time15.classList.add("past");
    //         time15.classList.remove("present", "future");
    //         time16.classList.add("past");
    //         time16.classList.remove("present", "future");
    //         time15.classList.add("present");
    //         time15.classList.remove("past", "future");
    //         time16.classList.add("future");
    //         time16.classList.remove("past", "present");
    //         time17.classList.add("future");
    //         time17.classList.remove("past", "present");
        
    // }

    // if (rightNow == 9) {
    //     time9.classList.add("present");
    //     time9.classList.remove("future", "past");
    // }
    // if (rightNow > 9) { 
    //     time9.classList.add("past");
    //     time9.classList.remove("future", "present");
    // }
    // if (rightNow < 9) {
    //     time9.classList.add("future");
    //     time9.classList.remove("present", "past");
    // }

    // if (rightNow == 10) {
    //     time10.classList.add("present");
    //     time10.classList.remove("future", "past");
    // } 
    // if (rightNow > 10) {
    //     time10.classList.add("past");
    //     time10.classList.remove("future", "present");
    // }
    // if (rightNow < 10) {
    //     time9.classList.add("future");
    //     time9.classList.remove("present", "past");
    // }

    // if (rightNow == 11) {
    //     time11.classList.add("present");
    //     time11.classList.remove("future", "past");
    // }
    // if (rightNow > 11) {
    //     time11.classList.add("past");
    // }
    // if (rightNow < 11) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 12) {
    //     time12.classList.add("present");
    // }
    // if (rightNow > 12) {
    //     time12.classList.add("past");
    // }
    // if (rightNow < 12) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 13) {
    //     time13.classList.add("present");
    // }
    // if (rightNow > 13) {
    //     time13.classList.add("past");
    // }
    // if (rightNow < 13) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 14) {
    //     time14.classList.add("present");
    // }
    // if (rightNow > 14) {
    //     time14.classList.add("past");
    // }
    // if (rightNow < 14) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 15) {
    //     time15.classList.add("present");
    // }
    // if (rightNow > 15) {
    //     time15.classList.add("past");
    // }
    // if (rightNow < 15) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 16) {
    //     time16.classList.add("present");
    // }
    // if (rightNow > 16) {
    //     time16.classList.add("past");
    // }
    // if (rightNow < 16) {
    //     time9.classList.add("future");
    // }

    // if (rightNow == 17) {
    //     time17.classList.add("present");
    // }
    // if (rightNow > 17) {
    //     time17.classList.add("past");
    // }
    // if (rightNow < 17) {
    //     time9.classList.add("future");
    // }
    
};

console.log(rightNow);


// event deligation for the save stuff