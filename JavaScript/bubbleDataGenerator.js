const fs = require("fs")

// open file of pulled data and split it by line
try {
  const file = fs.readFileSync('ElonData.txt', 'utf8')
  var data = file.split("\n").map(e => e.replace(".000Z", "").replace("T", " ")).filter((element) => element.substring(0,4) === '2021');
}
catch (err) {
  console.error(err)
}

// initialize empty array
var chartArray = [];


// converts dat to day of year beginning at jan 1
function dayOfYear(date) {
  let daysInMonth = [0, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = parseInt(date.substring(0, 4));
  let month = parseInt(date.substring(5, 7));
  let day = parseInt(date.substring(8));

  // If current year is a leap year and the date
  // given is after the 28th of February then
  // it must include the 29th February
  if (month > 2 && year % 4 === 0) {
    day++;
  }

  // Add the days in the previous months
  while (month--) {
    day = day + daysInMonth[month];
  }
  return day;
}

// manipulates data to get x and y into chartArray for each item data (ElonData.txt)
for (const item of data) {
  var array = item.split(" ");
  var y = array[0];
  var timeArray = array[1].split(":").map(e => parseInt(e));
  var minutes = ((timeArray[0] * 60) + timeArray[1]) - 360;
  if (minutes < 0) {
    minutes = 1440 + minutes
  }
  var x = minutes / 60
  var blockify = x.toString().split(".").map(e => parseInt(e))
  if (blockify[1] >= 0.5) {
    x = blockify[0] + 1
  }
  else if (blockify[1] <= 0.5 && blockify[0] > 1) {
    x = blockify[0] - 1
  }

  chartArray.push([x,y]);
}
// reverses array to have ascending days
chartArray = chartArray.reverse();

// counts repetitive x and y in chartArray
const counts = {};
chartArray.forEach(function (e) { counts[e] = (counts[e] || 0) + 1; });


// initializes a string equaling '[
var str = "'[";

for (let item in counts) {
  // var slot = {};
  var current = "{"
  item = item.toString().split(",")
  current = current + " x: " + dayOfYear(item[1]) + ", y: " + item[0] + ", r: " + (counts[item] * 5) + "}, \n"
  str = str + current

  // the functionality used for automating new bubble chart data
  //slot.x = item[0]
  //slot.x = parseInt(slot.x)
  //slot.y = dayOfYear(item[1])
  //slot.r = Math.ceil(counts[item] * 3)
  //chartData.push(slot)
}

// encapsulates the existing str with a bracket and a single quote
str = str + "]'"



fs.writeFile('JavaScript/bubbleChartData.js', str, (err) => {
  // In case of a error throw err.
  if (err) throw err;
})