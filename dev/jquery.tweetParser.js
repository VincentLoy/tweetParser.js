/*!
 * jquery Tweet Parser v1.1.1
 * Parse an element containing a tweet and turn URLS, @user & #hashtags into urls
 * MIT License
 * by Vincent Loy
 * http://vincent-loy.fr
 */
(function($)
{
    "use strict"; 
    
    $.fn.tweetParser=function(options)
    {
        
        var defauts=
        {
            "urlClass": "tweet_link",
            "userClass": "tweet_user",
            "hashtagClass": "hashtag",
            "target": "_blank",
            "searchWithHashtags": true

        };  

        var parametres=$.extend(defauts, options);


        return this.each(function()
        {
            //contain the tweet
           var tweet = $(this).html();
            
            //Hashtag Search link
            var searchlink;
            if(parametres.searchWithHashtags){
                //this is the search with hashtag
                searchlink = "https://twitter.com/hashtag/";
            }
            else{
                //this is a more global search including hashtags and the word itself
                searchlink = "https://twitter.com/search?q="
            }
            
            //regex
           var regexUrl = /([^\"\'])(https?|ftps?)(\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3})(\/\S*)?/g; //regex for urls
           var regexUser = /\B@([a-zA-Z0-9_]+)/g; //regex for @users
           var regexHashtag = /\B(#[á-úÁ-Úä-üÄ-Üa-zA-Z0-9_]+)/g; //regex for #hashtags
            
            //turn URLS in the tweet into... working urls
            tweet = tweet.replace(regexUrl, function(url){
               var link = '<a href="'+url+'" class="'+parametres.urlClass+'">'+url+'</a>';           
               return url.replace(url, link);
           });
            //turn @users in the tweet into... working urls
            tweet = tweet.replace(regexUser, function(user){
               var userOnly = user.slice(1);
               var link = '<a href="http://twitter.com/'+userOnly+'" class="'+parametres.userClass+'">'+user+'</a>'
               return user.replace(user, link);
           });
            //turn #hashtags in the tweet into... working urls
            tweet = tweet.replace(regexHashtag, function(hashtag){
               var hashtagOnly = hashtag.slice(1);
                var url = searchlink+hashtagOnly;
               var link = '<a href="'+url+'" class="'+parametres.hashtagClass+'">'+hashtag+'</a>';
               return hashtag.replace(hashtag, link);
           });
            
            //then, it inject the last var into the element containing the tweet
           $(this).html(tweet);

            //add target attribute to all urls
           $(this).find("a").attr("target", parametres.target);


        });
    };
})(jQuery);
