//UNIVERSAL VARIABLES
//curentDay uses moment.js to get the current date
var currentDay = moment().format('MMMM Do YYYY');
//Date and time get us the hour of the day (time = hour of day)
var date = new Date();
var time = date.getHours();

//POSTS THE CURRENT DAY TO THE CURRENT DAY P TAG
$("#currentDay").append(currentDay);

$(document).ready(function() {

    //Variable "rows" grabs all div elements with class = "rows"; it is an array
    var rows = $("div.row")
    //Loop through the rows array, assigning each row an index identifier of "row"  
  $.each(rows, function(idx, row) {
    //Remove previous classes for styling purposes
    $(row).removeClass("past");
    $(row).removeClass("present");
    $(row).removeClass("future");

    //Assigns the data attribute "time" to a variable
    var dataAttString = $(row).data('time');
    //The data attribute is a string, so we convert it to a number so that we can compare it to the time
    var dataAttNum = Number(dataAttString);

    //Conditional statements compare dataAttNum to the time in order to set the color of the row divs. 
    if (dataAttNum < time) {
      $(row).addClass("past");
    } else if (dataAttNum === time) {
      $(row).addClass("present");
    } else if (dataAttNum > time) {
      $(row).addClass("future");
    }
  });
});


  //EVENT LISTENER
  $(".btn").on("click", function() {
    //$(this) is the button, so we go to the parent of its parent, then back down through the children to find the event field value
    var eventText = $(this).parent().parent().children(".col-md-6").children(".event-field").val();
    console.log(eventText);

    //Again we assign the data element to a new variable for this function.
    //We traverse the DOM, starting at the button, arriving at the data attribute "time"
    var dataEl = $(this).parent().parent().data("time");

    //With those two variables established, we set dataEl as the key and eventText as the value
    //We commit the value of the eventText to local storage
    localStorage.setItem(dataEl, eventText);
  })

  //To make the data values in the event fields persist through refresh, we grab the id's of each <textarea> 
  //With that grabbed, we tell the browser that the value of that <textarea> is the value from its corresponding key in local storage.  
  $("#nine").val(localStorage.getItem("9"));
  $("#ten").val(localStorage.getItem("10"));
  $("#eleven").val(localStorage.getItem("11"));
  $("#twelve").val(localStorage.getItem("12"));
  $("#thirteen").val(localStorage.getItem("13"));
  $("#fourteen").val(localStorage.getItem("14"));
  $("#fifteen").val(localStorage.getItem("15"));
  $("#sixteen").val(localStorage.getItem("16"));
  $("#seventeen").val(localStorage.getItem("17"));