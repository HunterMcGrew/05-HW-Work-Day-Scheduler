// start code
window.onload=displayDay;

var timeEl = document.getElementById("currentDay");

// starts timer on page load

var currentTime = displayDay(currentTime);

function displayDay() {
    // can i make it refresh seconds and minutes? 
    var currentTime = moment().format('MMMM Do, YYYY');
    timeEl.innerHTML = currentTime;
    // setInterval(() => {
    //     displayDay();
    //       // should i call colorTime every minute? doing it every minute overloads the browser
    // }, 1000);
    colorTime();
    updateOnRefresh();
    getId();
};

// function to create page?

// trying to get the id's in array form 
function getId() {
    var className = document.getElementsByClassName("checkTime");
    var classNameCount = className.length;
    var id = new Array();
    for(var i = 0; i < classnameCount; i++){
        id[i] = className[i].id;
    }
}
console.log(className);
console.log(id);

// change textarea based on time 
function colorTime() {
    rightNow = 9; //moment().format("H");

    var checkTime = document.getElementsByClassName("checkTime");

    

    if (rightNow == checkTime) {
        checkTime.classList.add("present");
    } else if (rightNow > checkTime) {
        checkTime.classList.remove("present");
        checkTime.classList.add("future");
    } else if (rightNow < checkTime) {
        checkTime.classList.remove("future");
        checkTime.classList.add("past");
    }

     console.log(checkTime);



    // var time9 = document.querySelector("#time9");
    // var time10 = document.querySelector("#time10");
    // var time11 = document.querySelector("#time11");
    // var time12 = document.querySelector("#time12");
    // var time13 = document.querySelector("#time1");
    // var time14 = document.querySelector("#time2");
    // var time15 = document.querySelector("#time3");
    // var time16 = document.querySelector("#time4");
    // var time17 = document.querySelector("#time5");



    // what about a while loop? didn't work

    // what about a switch statement? that didn't work.

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
    // else if (rightNow > 9) { 
    //     time9.classList.add("past");
    //     time9.classList.remove("future", "present");
    // }
    // else if (rightNow < 9) {
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

// const saved = document.querySelector(".time-block");
// const saveItems = document.querySelector(".saveBtn");
// const items = [];

// var userInput = document.querySelector("#textInput");
    function updateOnRefresh() {

            var textSpot = document.querySelector("#textInput1");
            var textSpot2 = document.querySelector("#textInput2");
            var textSpot3 = document.querySelector("#textInput3");
            var textSpot4 = document.querySelector("#textInput4");
            var textSpot5 = document.querySelector("#textInput5");
            var textSpot6 = document.querySelector("#textInput6");
            var textSpot7 = document.querySelector("#textInput7");
            var textSpot8 = document.querySelector("#textInput8");
            var textSpot9 = document.querySelector("#textInput9");

            var textOut1 = localStorage.getItem("text");
            var textOut2 = localStorage.getItem("text2");
            var textOut3 = localStorage.getItem("text3");
            var textOut4 = localStorage.getItem("text4");
            var textOut5 = localStorage.getItem("text5");
            var textOut6 = localStorage.getItem("text6");
            var textOut7 = localStorage.getItem("text7");
            var textOut8 = localStorage.getItem("text8");
            var textOut9 = localStorage.getItem("text9");
        
            textSpot.textContent = textOut1;
            textSpot2.textContent = textOut2;
            textSpot3.textContent = textOut3;
            textSpot4.textContent = textOut4;
            textSpot5.textContent = textOut5;
            textSpot6.textContent = textOut6;
            textSpot7.textContent = textOut7;
            textSpot8.textContent = textOut8;
            textSpot9.textContent = textOut9;

    }


var buttons = document.getElementsByClassName("saveBtn");
    for (i=0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            event.preventDefault();
            
            var text = document.querySelector("#textInput1").value;
            var text2 = document.querySelector("#textInput2").value;
            var text3 = document.querySelector("#textInput3").value;
            var text4 = document.querySelector("#textInput4").value;
            var text5 = document.querySelector("#textInput5").value;
            var text6 = document.querySelector("#textInput6").value;
            var text7 = document.querySelector("#textInput7").value;
            var text8 = document.querySelector("#textInput8").value;
            var text9 = document.querySelector("#textInput9").value;
        // document.querySelector("textarea").innerHTML = text;

        localStorage.setItem("text", text);
        localStorage.setItem("text2", text2);
        localStorage.setItem("text3", text3);
        localStorage.setItem("text4", text4);
        localStorage.setItem("text5", text5);
        localStorage.setItem("text6", text6);
        localStorage.setItem("text7", text7);
        localStorage.setItem("text8", text8);
        localStorage.setItem("text9", text9);

        })
    }

    