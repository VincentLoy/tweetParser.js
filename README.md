tweetParser.js
==================
![Parse Twitter Usernames, Hashtags and URLs Using jQuery](https://farm8.staticflickr.com/7562/15860082069_62c9540ddd_b.jpg)
tweetParser.js Parse elements containing a tweets and turn URLS, @users &amp; #hashtags into working urls

#### PARAMETERS

| Parameters | Type | default | description |
| ------------- | ----------- | ----------- | ----------- |
| urlClass  | String | tweet_link | css Class used for url in the tweet |
| userClass | String | tweet_user | css Class used for @user profil url in the tweet |
| hashtagClass | String | hashtag | css Class used for hashtags url in the tweet |
| target | HTML attribute for anchor tags | _blank | target used for all <a> generated |

#### INITIALISATION

##### You can install tweetParser.js with Bower
if you want to use bower just type :
```
bower install jquery.tweet-parser
```

##### Add jquery lib and tweetParser.min.js to your HTML document
```html
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.tweetParser.min.js"></script>
```


##### Your tweet in your html document
```html
    <p class="tweets">This is my awesome text only tweet ! #web #twitter @twitter http://www.twitter.com/ !!</p>
 ```
 
 
##### getting started with tweetParser

```javascript   
    //basic usage
    $("p.tweets").tweetParser();
    
    //With parameters
    $("p.tweets").tweetParser({
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank" //this is default
    });
```

#### RESULT EXAMPLE
###### Check out the [demo](http://vincent-loy.fr/lab/tweetParser/)
you can customize your tweet with css classes used in parameters

![Result After parsing tweets](https://farm9.staticflickr.com/8670/15852276268_221f9f8b85_o.png)


