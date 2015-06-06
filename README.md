tweetParser.js - [demo](http://vincent-loy.fr/lab/tweetParser/)
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
| searchWithHashtags | Boolean | true | generate hashtag link, if true : "twitter.com/hashtag/", if false : "twitter.com/search?q=" |
| ParseUsers | Boolean | true | will parse @users if is set to true |
| parseUrls | Boolean | true | will parse URLS if is set to true |
| parseHashtags | Boolean | true | will parse hashtags if is set to true |

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
    
    //With Default parameters
    $("p.tweets").tweetParser({
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank", //this is default
        searchWithHashtags : true //this is default
        parseUsers : true,
        parseHashtags : true,
        parseUrls : true
    });
```

#### RESULT EXAMPLE
###### Check out the [demo](http://vincent-loy.fr/lab/tweetParser/) or try it in [codepen.io](http://codepen.io/VincentL/pen/PwzXJp)
you can customize your tweet with css classes used in parameters

![Result After parsing tweets](https://farm9.staticflickr.com/8670/15852276268_221f9f8b85_o.png)


#### Changelog

+ v1.3.0
  * Improve (one more time) URL regex :raised_hands:

+ v1.2.1
  * Better URL regex

+ v1.2.0
  * add parameter parseUsers, parseHashtags, parseUrls
  * Makeover on the demo
  * JSLint passed

+ v1.1.0
  * searchWithHashtags parameter added

    You can now choose where hashtags links will point to.
    when searchWithHastags = true (default), tweetParser will generate the following link for each hashtags : "twitter.com/hashtag/THE_HASHTAG".  
    if you set it to false, the link will be : "twitter.com/search?q=THE_HASHTAG"
   
  * code optimisation, remove useless var.
  
+ v1.0.0

   Initial Version


