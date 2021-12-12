const fs = require('fs')

var dataArray = [];

try {
    const data = fs.readFileSync('ElonData.txt', 'utf8')
    dataArray = data.split("\n")
  }
catch (err) {
    console.error(err)
}

console.log(dataArray)
