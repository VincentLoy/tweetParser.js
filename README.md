jquery.tweetParser
==================

tweetParser.js Parse an element containing a tweet and turn URLS, @user &amp; #hashtags into working urls

#### PARAMETERS

| Parameters | Type | default | description |
| ------------- | ----------- | ----------- | ----------- |
| urlClass  | String | tweet_link | css Class used for url in the tweet |
| userClass | String | tweet_user | css Class used for @user profil url in the tweet |
| hashtagClass | String | hashtag | css Class used for hashtags url in the tweet |
| target | HTML attribute for <a> tags | _blank | target used for all <a> generated |

#### INITIALISATION
##### Add jquery lib and tweetParser.min.js to your HTML document

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.tweetParser.min.js"></script>
    


#### RESULT EXAMPLE
![Result After parsing tweets](https://farm9.staticflickr.com/8670/15852276268_221f9f8b85_o.png)


