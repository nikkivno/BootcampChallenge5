// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let saveBtnEl = document.querySelector('.saveBtn');
let btnEL = document.querySelector('.btn');
let userInput = document.querySelector(".description");
let currentTime = dayjs().format('H');
let timeBlocks = document.querySelectorAll('.time-block');


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?


$(".saveBtn").on("click", function(){
  const time = $(this).parent().attr('id');
  const value = $(this).siblings('.description').val();
  localStorage.setItem(time, value);
})

for (let i=9; i<18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
const hour = dayjs().hour()
console.log(hour)
$('.time-block').each(function(){
  const timeBlock = parseInt ($(this).attr('id').split('-')[1]);
  if(timeBlock < hour) {
    $(this).addClass('past')
  } else if (timeBlock === hour) {
    $(this).removeClass('past');
    $(this).addClass('present')
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  



  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs();
  $('#currentDay').text(currentDate.format("MMMM D,YYYY"));

  // saveBtnEl.addEventListener("click", saveHandler)
});
