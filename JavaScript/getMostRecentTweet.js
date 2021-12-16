const fs = require("fs")

/*
// open file of pulled data and split it by line
try {
  const file = fs.readFileSync('ElonData.txt', 'utf8')
  var data = file
}
catch (err) {
  console.error(err)
}
*/


// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAAHVSWwEAAAAAOn%2FFskPge8QQHXr3bnUS8BvpFQY%3DIL7o0vYJHC3sFQtBHnJqkSVwMoiEBtmJdFRZnrNyuNf0y4RUfF';

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

var mostRecentId = '';

function getMostRecentId() {
    async function getRequest() {
    
        // Edit query parameters below
        // specify a search query, and any additional fields that are required
        // by default, only the Tweet ID and text fields are returned
        const params = {
            'query': 'from:elonmusk -is:retweet',
            'tweet.fields': 'author_id',
            //'since_id': '1471555887387058184'
        }
    
        const res = await needle('get', endpointUrl, params, {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    
    (async () => {
    
        try {
            // Make request
            const response = await getRequest();
            return response.data[9].id
    
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })().then(data => (mostRecentId = data));
    //setTimeout(() => {console.log(mostRecentId)}, 1000)
}

//getMostRecentId();

fs.writeFile('recentid.txt', getMostRecentId(), (err) => {
    // In case of a error throw err.
    if (err) throw err;
  })