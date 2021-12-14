const fs = require("fs");

// Extract ElonData.txt, turn into array, filter for 2021
const ElonDataArray = fs
  .readFileSync("ElonData.txt", "utf8")
  .split("\n")
  .filter((timeStamp) => timeStamp.substring(0, 4) === "2021");

// Generate data for line charting, write to file "lineChartData.js"
//console.log(createLineChartString(ElonDataArray));
//fs.writeFileSync('JavaScript/lineChartData.js', createLineChartString(ElonDataArray));


// Generate data for scatter plot timeline, write to file "scatterPlotDataUTC-6.js"
//console.log(createScatterPlotString(ElonDataArray));
//fs.writeFileSync('JavaScript/scatterPlotDataUTC-6.js', createScatterPlotString(ElonDataArray));


function createLineChartString(dateAndTime) {
  // Each index is an hour from 12:00am to 11:00pm - tweet totals will be tallied here
  const tweetCounter = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  // Shift all time back 6 hours for UTC-6
  const hoursArray = dateAndTime.map((timeStamp) => {
    let hour = timeStamp.match(/T(\d\d)/)[1];
    return hour > 5 ? hour - 6 : parseInt(hour, 10) + 18;
  });
  // Populate tweetCounter
  hoursArray.forEach((hour) => tweetCounter[hour]++);
  // Return in string form for writing to js file
  return `const lineChartData = [${tweetCounter.join(",")}];`;
}

function createScatterPlotString(dateAndTime) {
  // turn array into array of objects -
  //   each object looks like {x: 0000, y: 00} - x is year, y is hours
  dateAndTime = dateAndTime.map((timeStamp) => {
    return {
      x: `${dayOfYear(timeStamp.match(/\d{4}-\d\d-\d\d/)[0])}`,
      y: `${timeStamp.match(/T(\d\d)/)[1]}`,
    };
  });
  // UTC -6 hrs shift
  dateAndTime = dateAndTime.map((value) => {
    return {
      x: value.y > 6 ? value.x : value.x - 1,
      y: value.y > 5 ? value.y - 6 : parseInt(value.y, 10) + 18,
    };
  });
  // Turn createdAt into a string that is valid js for writing to file
  let xyString = dateAndTime
    .map((value) => {
      return `{x:${value.x},y:${value.y}}`;
    })
    .join(",");
  xyString = `const scatterPlot = [${xyString}]`;
  return xyString; // Should be valid JS, but in a string
  // Convert the date (year-mn-dy) into total days into year (e.g. 245)
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
}