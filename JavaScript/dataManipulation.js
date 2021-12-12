const fs = require('fs')

var count = 0
var dataArray = [];

try {
    const data = fs.readFileSync('ElonData.txt', 'utf8')
    dataArray = data.split("\n")
  }
catch (err) {
    console.error(err)
}

dataArray = dataArray.map(e => e.replace(".000Z", "").split("T"));
console.log(dataArray);

tuesday