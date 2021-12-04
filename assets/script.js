//when open planner...(doc needs to load when page is opened)

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

/* open planner --> current day is display at top of cal*/
//id = currentDay


// each time block is color-coded to indicate whether it is in the past, present, or future
//gray = past, red = now, green = coming up 

// click into a time block & enter an event

// click the save button, text for that event is saved in local storage

// refresh the page & the saved events persist

