// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//-------------
// USE $.ready(function());
$( document ).ready(function () {
  // Establish a constant that applies for all save buttons, regardless of block
  const saveBtns = $('.saveBtn');
  // .each() will check each save button
  saveBtns.each(function() {
    var textArea = $(this).siblings('.description'); // this will be any text in a text area (class="description")
    var timeID = $(this).parent().attr('id'); // this will be whatever parent id of the text area (ex. id="hour-9")

    $(this).on('click', function() { // this is whichever save button is clicked
      var descrText = textArea.val(); // Establishes whatever is in the text area (class="description") as a value
      
      localStorage.setItem(timeID, descrText); // timeID is the key, descrText is the value saved to local storage
    });
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //------------------------------
  //  $.addClass() for assigning past, present or future
  //  delete past, present and future classes from html divs and replace them using $.addClass() and day.js?
  //  Use .removeClass() to delete past, present, future classes as needed?
  const present = $('.present');
  const past = $('.past');
  const future = $('.future');
  const current = dayjs();

  //-------------------------------------------------------------------------------
  const textArea = $('.description');

  textArea.each(function (){
    var timeID = $(this).parent().attr('id');
    var descrText = localStorage.getItem(timeID);

    if (descrText) {
      $(this).val(descrText);
    }
    });
  

  // TODO: Figure out how to get the Advanced Format plug-in to work so I can add operands to the date.
  var currentDate = dayjs();
  $ ( "#currentDay" ).text(currentDate.format('dddd, MMMM DD'));
});
