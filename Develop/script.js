// Global Variables

let saveBtnEl = document.querySelector('.saveBtn');
let btnEL = document.querySelector('.btn');
let userInput = document.querySelector(".description");
let currentTime = dayjs().format('H');
let timeBlocks = document.querySelectorAll('.time-block');


$(document).ready(function () {

// Save Button 

$(".saveBtn").on("click", function(){
  const time = $(this).parent().attr('id');
  const value = $(this).siblings('.description').val();
  localStorage.setItem(time, value);
})

// Local Storage

for (let i=9; i<18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}

// Time Blocks

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

// Current Day Display

  let currentDate = dayjs();
  $('#currentDay').text(currentDate.format("MMMM D,YYYY"));
});
