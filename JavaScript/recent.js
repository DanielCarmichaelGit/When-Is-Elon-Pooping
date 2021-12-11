// fetch all necessary data from twitter API
// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAAHVSWwEAAAAAOn%2FFskPge8QQHXr3bnUS8BvpFQY%3DIL7o0vYJHC3sFQtBHnJqkSVwMoiEBtmJdFRZnrNyuNf0y4RUfF';



const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

// this is the API request that gets the last 100 posts by elon musk
async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    const params = {
        'query': 'from:elonmusk',
        'max_results':10,
        'tweet.fields': 'author_id',
        'tweet.fields': 'created_at'
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

var last = '';
(async () => {
    try {
        // Make request
        const response = await getRequest();
        last = response.data.map(data => data.created_at);
        return last
    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();

setTimeout(() => {console.log(last)}, 1000);







/* function repeat(x) {
    for (let i = 0; i < x/10; i++) {
        async function getRequest() {

            // Edit query parameters below
            // specify a search query, and any additional fields that are required
            // by default, only the Tweet ID and text fields are returned
            const params = {
                // designate elon musk as the target user
                'query': 'from:elonmusk',
                // increase the maximum amount of posts from 10 to 100
                'max_results':10,
                // retrieves the time of the post
                'tweet.fields': 'created_at'
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
                console.dir(response, {
                    depth: null
                });
        
            } catch (e) {
                console.log(e);
                process.exit(-1);
            }
            process.exit();
        })();



    }
} */