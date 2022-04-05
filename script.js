
// Set current day in jumbotron
var currentDay = moment().format("dddd MMMM Do");

$("#currentDay").text(currentDay);


var container = $(".container");
var hours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
var dataHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var savedTask


$.each(hours, function(index, hour){
    // console.log(hour);

    container.append(` 
    <div class="row time-block">
        <div id="hour${dataHours[index]}" class="col-md-1 hour" data-hour="${dataHours[index]}">${hour}</div>
        <textarea id="text${dataHours[index]}" class="col-md-10 description" placeholder="Enter task(s)"></textarea>
        <button id="btn${dataHours[index]}" class="col-md-1 btn saveBtn"><i class="fas fa-save"></i></button>
    </div>`);

    var time = dataHours[index];
    var iD = $("#text"+time);
    console.log(time);

    if (time == moment().hour()){
        iD.addClass("present");
    } else if (time > moment().hour()){
        iD.addClass("future");
    } else {
        iD.addClass("past");
    };

    var saveBtn = $("#btn"+time);
    saveBtn.on("click", function(){
        var userInput = $("#text"+time).val();
        localStorage.setItem('task'+time, userInput);
    });
});

// function saveTask(){
//     saveBtn.on("click", function(){
        
//         localStorage.setItem('task'+time, iD.value);
//     })
// };
// function getTask(){

// };