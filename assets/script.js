//only run the javascript code when the page is ready for it to execute (once it's loaded)
$(document).ready(function() {
    // open planner --> current day is display at top of cal
    //id = currentDay
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // save text entered into a timeblock when save button is clicked
    //save button event listener
    $(".saveBtn").on("click", function() {
        //get the text entered into the timeblock (class is .description)
        let value = $(this).siblings(".description").val();
        //get the time of that timeblock that text was entered into by pulling the id attribute
        let keyname = $(this).parent().attr("id");
    
        //save entered text into local storage
        localStorage.setItem(keyname, value);
    });
    
    // refresh page & saved events persist (set timeblock's id and .description to previous values)
    // $(selector).val(value)
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    

    //CSS predefined = description,time-block,row,hour,past,present,future,saveBtn
    
    // each time block is color-coded to indicate whether it is in the past, present, or future
    // gray = past (.past), red = now (.present), green = coming up (.future)
    function timeUpdate() {
        //moment method to get the hours from the current time
        let presentHour = moment().hour();
    
        //each method to loop through the time blocks
        $(".time-block").each(function() {
            //timeblock's id's...hour9, hour10, hour11, etc
            //get the integer out of the id of the timeblocks (this)
            let timeblockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeblockHour, presentHour);
    
            //if the timeblock's hour has past, make the timeblock grey (.past)
            if (timeblockHour < presentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            //if the timeblock's hour the current hour, make timeblock red (.present)
            } else if (timeblockHour === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            //if timeblock time is in the future, make timeblock green (.future)
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
    timeUpdate();

});

