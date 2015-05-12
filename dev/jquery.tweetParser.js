/*!
 * jquery Tweet Parser v1.2.1
 * Parse an element containing a tweet and turn URLS, @user & #hashtags into urls
 * MIT License
 * by Vincent Loy
 * http://vincent-loy.fr
 */

/*global $, jQuery*/
(function ($) {
    "use strict";

    $.fn.tweetParser = function (options) {

        var defauts = {
                "urlClass": "tweet_link",
                "userClass": "tweet_user",
                "hashtagClass": "hashtag",
                "target": "_blank",
                "searchWithHashtags": true,
                "parseUsers" : true,
                "parseHashtags" : true,
                "parseUrls" : true
            },
            parametres = $.extend(defauts, options);


        return this.each(function () {

            //contain the tweet
            var tweet = $(this).html(),
                searchlink, //search link for hashtag
                link, //html <a> tag
                userOnly, //users on tweet
                hashtagOnly, //hashtags on tweet
                url, //url to hashtag search
            //regex
                regexUrl = /(^|\s)((f|ht)tps?:\/\/([^ \t\r\n<]*[^ \t\r\n\<)*_,\.]))/g, //regex for urls
                regexUser = /\B@([a-zA-Z0-9_]+)/g, //regex for @users
                regexHashtag = /\B(#[á-úÁ-Úä-üÄ-Üa-zA-Z0-9_]+)/g; //regex for #hashtags

            //Hashtag Search link
            if (parametres.searchWithHashtags) {
                //this is the search with hashtag
                searchlink = "https://twitter.com/hashtag/";
            } else {
                //this is a more global search including hashtags and the word itself
                searchlink = "https://twitter.com/search?q=";
            }

            //turn URLS in the tweet into... working urls
            if (parametres.parseUrls) {
                tweet = tweet.replace(regexUrl, function (url,p1,p2) {
                    link = p1 + '<a href="' + p2 + '" class="' + parametres.urlClass + '">' + p2 + '</a>';
                    return url.replace(url, link);
                });
            }

            //turn @users in the tweet into... working urls
            if (parametres.parseUsers) {
                tweet = tweet.replace(regexUser, function (user) {
                    userOnly = user.slice(1);
                    link = '<a href="http://twitter.com/' + userOnly + '" class="' + parametres.userClass + '">' + user + '</a>';
                    return user.replace(user, link);
                });
            }

            //turn #hashtags in the tweet into... working urls
            if (parametres.parseHashtags) {
                tweet = tweet.replace(regexHashtag, function (hashtag) {
                    hashtagOnly = hashtag.slice(1);
                    url = searchlink + hashtagOnly;
                    link = '<a href="' + url + '" class="' + parametres.hashtagClass + '">' + hashtag + '</a>';
                    return hashtag.replace(hashtag, link);
                });
            }

            //then, it inject the last var into the element containing the tweet
            $(this).html(tweet);

            //add target attribute to all urls
            $(this).find("a").attr("target", parametres.target);


        });
    };
}(jQuery));
