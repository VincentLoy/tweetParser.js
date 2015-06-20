tweetParser.js - [demo](http://vincentloy.github.io/tweetParser.js/)
==================
![Parse Twitter Usernames, Hashtags and URLs](https://farm1.staticflickr.com/420/18350171613_b3f9c26641_b.jpg)
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
bower install tweetparser.js
```

##### Or via npm
```
npm install --save-dev tweetparser.js
```

##### Add tweetParser.min.js to your HTML document
```html
    <script src="js/tweetParser.min.js"></script>
```


##### Your tweet in your html document
```html
    <p class="tweet">This is my awesome text only tweet ! #web #twitter @twitter http://www.twitter.com/ !!</p>
 ```
 
 
##### getting started with tweetParser

```javascript   
    //basic usage
    tweetParser('.tweet');
    
    //With Default parameters
    tweetParser('.tweet', {
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank", //this is default
        searchWithHashtags : true //this is default
        parseUsers : true,
        parseHashtags : true,
        parseUrls : true
    });
    
    // Note that '.tweet' is your own CSS selector
```

#### RESULT EXAMPLE
###### Check out the [demo](http://vincentloy.github.io/tweetParser.js/)
you can customize your tweet with css classes used in parameters

![Result After parsing tweets](https://farm9.staticflickr.com/8670/15852276268_221f9f8b85_o.png)


#### Changelog
+ v2.0.0
  * REMOVE jQuery dependecies...
  * ...But it still easy to use it as simple as a jQuery Plugin.
  * Improve URL regex : white spaces are not eaten anymore

NB : For you, there is just some small changes in the syntax to call tweetParser.

use 
```javascript
tweetParser([SELECTOR], [PARAMETERS])
``` 
instead of : 
```javascript
$([SELECTORE]).tweetParser([PARAMETERS]);
``` 

+ v1.3.1
  * Remove Gruntfile to switch to gulpfile
  * Prepare to publish to npm
  * Improve the Demo
  * Add sourcemaps

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
