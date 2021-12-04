// open planner --> current day is display at top of cal
//id = currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// each time block is color-coded to indicate whether it is in the past, present, or future
//gray = past (.past), red = now (.present), green = coming up (.future)








// click into a time block & enter an event

// click the save button, text for that event is saved in local storage

// refresh the page & the saved events persist

