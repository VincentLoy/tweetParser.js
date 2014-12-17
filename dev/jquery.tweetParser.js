/*!
 * jquery Tweet Parser v1.0
 * Parse an element containing a tweet and turn URLS, @user & #hashtags into urls
 * http://vincent-loy.fr
 * MIT License
 * by Vincent Loy
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
           "target": "_blank"

        };  

        var parametres=$.extend(defauts, options);


        return this.each(function()
        {
            //contain the tweet
           var tweet = $(this).text();
            
            //regex
           var regexUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g; //regex for urls
           var regexUser = /@(\w+)/g; //regex for @users
           var regexHashtag = /#(\w+)/g; //regex for #hashtags
            
            //turn URLS in the tweet into... working urls
           var tweetWithUrls = tweet.replace(regexUrl, function(url){
               
               var link = '<a href="'+url+'" class="'+parametres.urlClass+'">'+url+'</a>';           
               return url.replace(url, link);
           });
            
            //create URLS for all @users mentionned /!\ USING tweetWithUrls var !
           var tweetWithUsers = tweetWithUrls.replace(regexUser, function(user){
               
               var userOnly = user.replace('@','');
               var link = '<a href="http://twitter.com/'+userOnly+'" class="'+parametres.userClass+'">'+user+'</a>'
               return user.replace(user, link);
           });
            
            //create URLS for all #hashtags /!\ USING tweetWithUsers var !
           var tweetWithHashtags = tweetWithUsers.replace(regexHashtag, function(hashtag){
               
               var hashtagOnly = hashtag.replace('#', '');
               var link = '<a href="http://twitter.com/hashtag/'+hashtagOnly+'" class="'+parametres.hashtagClass+'">'+hashtag+'</a>';         
               return hashtag.replace(hashtag, link);
           });
            
            //then, it inject the last var into the element containing the tweet
           $(this).html(tweetWithHashtags);

            //add target attribute to all urls
           $(this).find("a").attr("target", parametres.target);


        });
    };
})(jQuery);