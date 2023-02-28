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

  $('.time-block').each(function (){
    const colorID = $(this).attr('id').slice(5); // gets the hour number from the id (ex. gets 9 from hour-9)
    const current = dayjs().hour(); // gets the hour in 24-hour clock format (ex. 3:34PM is 15. Note, it only applies to the hour.)
    
    if (colorID == current) { // == used instead of ===. Just needs to be similar, not exactly alike.
      $(this).addClass('present');
    }
    if (colorID < current) {
      $(this).addClass('past');
    }
    if (colorID > current) {
      $(this).addClass('future');
    }
  });
  
  // Establishes a constant that applies to all divs with the 'description' class
  const textArea = $('.description');

  // .each() will check each each div id
  textArea.each(function (){
    var timeID = $(this).parent().attr('id');
    var descrText = localStorage.getItem(timeID);

    if (descrText) {
      $(this).val(descrText);
    }
  });
  
  // Displays the date in the header with an ordinal. Needed three lines of script from the Day.js plugin page. https://day.js.org/docs/en/plugin/loading-into-browser
  var timeDate = dayjs();
  $("#currentDay").text(timeDate.format('dddd, MMMM Do'));
});
