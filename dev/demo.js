$(document).ready(function(){ 
    
   // $(".tweet").tweetParser();
    
    //you can also custom css classes and target like this
    
    $(".tweet").tweetParser({
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank", //this is default
        searchWithHashtags: true
    });
    
    
});
