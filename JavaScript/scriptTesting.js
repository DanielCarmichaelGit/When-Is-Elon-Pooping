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