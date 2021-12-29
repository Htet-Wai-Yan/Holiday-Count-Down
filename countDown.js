// Public holidays in Myanmar
const publicHolidays = [
  {
    name: "Independence day",
    date: new Date("4 Jan 2022"),
  },
  {
    name: "Union day",
    date: new Date("12 Feb 2022"),
  },
  {
    name: "Peasants' day",
    date: new Date("2 Mar 2022"),
  },
  {
    name: "Tabaung Full Moon day",
    date: new Date("16 Mar 2022"),
  },
  {
    name: "Armed Force day",
    date: new Date("27 Mar 2022"),
  },
  {
    name: "Thingyan Eve day",
    date: new Date("13 Apr 2022"),
  },
  {
    name: "Labour day",
    date: new Date("1 May 2022"),
  },
  {
    name: "Vesak day",
    date: new Date("16 May 2022"),
  },
  {
    name: "Vassa day",
    date: new Date("13 Jul 2022"),
  },
  {
    name: "Martyrs' day",
    date: new Date("19 Jul 2022"),
  },
  {
    name: "Christmas day",
    date: new Date("25 Dec 2022"),
  },
]

const inputDate = document.getElementById('inputDate')
const dateBtn = document.getElementById('dateBtn')
const displayText = document.querySelector('.displayText')

/*
  set minimun input date attribute to current date
  to avoid negative countdown
*/
let minDate = new Date()
minDate = `${minDate.getFullYear()}-${minDate.getMonth()+1}-${minDate.getDate()}`

inputDate.setAttribute('min', minDate)

// predefine empty date global variable
let countDownDate;

// get the date from date field on click
dateBtn.addEventListener('click', function() {

  // assign new date value from input field
  countDownDate = new Date(inputDate.value)

  // call checkHolidays function
  checkHolidays(countDownDate)

  // initial call
  countDown(countDownDate)

  // count down every one second
  setInterval("countDown(countDownDate)", 1000)

  // display hidden elements on click
  document.getElementById('flex').style.display = 'flex'

})

// check respective holiday in array
function checkHolidays(countDownDate) {

  // break array loop as soon as specific condition is met
  for(let item of publicHolidays) {
    if(item.date.getDate() === countDownDate.getDate() && item.date.getMonth() === countDownDate.getMonth()) {
      displayText.textContent = `Until next ${item.name}`
      break
    }
    else{
      displayText.textContent = `Until your choosen date`
    }
  }

}

// countDown function
function countDown(countDownDate) {

  const newYearDate = new Date(countDownDate)
  const currentDate = new Date()

  // find the difference and convert to second
  const totalSecond = Math.floor((newYearDate - currentDate) / 1000)

  // convert to days, hours, minutes and second in a day
  const days = Math.floor(totalSecond / 86400)
  const hours = Math.floor((totalSecond / 3600) % 24)
  const minutes = Math.floor((totalSecond / 60) % 60)
  const seconds = Math.floor(totalSecond % 60)

  const countDay = document.getElementById('day')
  const countHour = document.getElementById('hour')
  const countMin = document.getElementById('minute')
  const countSec = document.getElementById('second')

  countDay.textContent = days
  countHour.textContent = hours
  countMin.textContent = minutes
  countSec.textContent = seconds

}