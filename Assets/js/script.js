// start of code -- going to try jquery
$(document).ready(function() {

    let currentTime = moment().format("MMMM Do, YYYY");
    let timeEl = document.getElementById("currentDay");
    timeEl.innerHTML = currentTime;
    // displays current day on page

    let hour = moment().format("HH"); // current Hour

    // console.log(hour);

    // console.log($(".time-block"));

    $(".time-block").each(function(checkTime) {
        // store the id of time-block and splits id name at - and takes the 2nd value
        // should repeat forEach time-block
        // everythings just green? aka "future"
        // if you change id from textInput-9 to textInput-09 everything present
        var checkTime = $(this).attr("id").split("-")[1];
        
        // had my else if's out of order. 
        if (hour == checkTime) {
            $(this).removeClass("future past");
            $(this).addClass("present");
        } else if (hour < checkTime) {
            $(this).removeClass("present past");
            $(this).addClass("future");
        } else if (hour > checkTime) {
            $(this).removeClass("future present");
            $(this).addClass("past");
        }
        
    });

    // save data to local storage on button click
    var buttons = $(".saveBtn");
    for (i=0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            event.preventDefault();
            // grab text field values
            var text1 = $("#textInput-09").val();
            var text2 = $("#textInput-10").val();
            var text3 = $("#textInput-11").val();
            var text4 = $("#textInput-12").val();
            var text5 = $("#textInput-13").val();
            var text6 = $("#textInput-14").val();
            var text7 = $("#textInput-15").val();
            var text8 = $("#textInput-16").val();
            var text9 = $("#textInput-17").val();
            // set them into local storage
            localStorage.setItem("text1", text1);
            localStorage.setItem("text2", text2);
            localStorage.setItem("text3", text3);
            localStorage.setItem("text4", text4);
            localStorage.setItem("text5", text5);
            localStorage.setItem("text6", text6);
            localStorage.setItem("text7", text7);
            localStorage.setItem("text8", text8);
            localStorage.setItem("text9", text9);
        })};

    // grab info from local storage and display it on page
    $("#textInput-09").val(localStorage.getItem("text1"));
    $("#textInput-10").val(localStorage.getItem("text2"));
    $("#textInput-11").val(localStorage.getItem("text3"));
    $("#textInput-12").val(localStorage.getItem("text4"));
    $("#textInput-13").val(localStorage.getItem("text5"));
    $("#textInput-14").val(localStorage.getItem("text6"));
    $("#textInput-15").val(localStorage.getItem("text7"));
    $("#textInput-16").val(localStorage.getItem("text8"));
    $("#textInput-17").val(localStorage.getItem("text9"));

});

// console.log(checkTime);