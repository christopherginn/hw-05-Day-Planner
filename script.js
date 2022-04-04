
// Set current day in jumbotron
var currentDay = moment().format("dddd MMMM Do");

$("#currentDay").text(currentDay);

var hoursInDay = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
]

$.each(hoursInDay, function(index, value){
//     $(".time-block").append("<div class='row time-block'><div class='hour col-2'>"+value+"</div><div class='description col-9'></div><div><button class='saveBtn col-1'>save</button></div></div>");
// });

// $(".description").append("<textarea placeholder='enter task'></textarea>");
