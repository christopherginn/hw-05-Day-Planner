
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
    $(".time-block").append("<tr class='row'><td class='hour'>"+value+"</td><td class='description'></td><td><button class='saveBtn'>save</button></td></tr>");
});

$(".description").append("<textarea placeholder='enter task'></textarea>");
