// Get User objects by username, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAAHVSWwEAAAAAOn%2FFskPge8QQHXr3bnUS8BvpFQY%3DIL7o0vYJHC3sFQtBHnJqkSVwMoiEBtmJdFRZnrNyuNf0y4RUfF';

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

async function getRequest() {

    // These are the parameters for the API request
    // specify User names to fetch, and any additional fields that are required
    // by default, only the User ID, name and user name are returned
    const params = {
        usernames: "elonmusk", // Edit usernames to look up
        "user.fields": "created_at,description", // Edit optional query parameters here
        "expansions": "pinned_tweet_id"
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2UserLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request')
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


/*
// below is the specific id of elon musk's twitter account
{
  data: [
    {
      id: '44196397',
      description: '',
      created_at: '2009-06-02T20:12:29.000Z',
      username: 'elonmusk',
      name: 'Elon Musk'
    }
  ]
}
*/