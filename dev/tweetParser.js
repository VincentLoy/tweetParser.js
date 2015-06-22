/*!
 * tweetParser.js v2.0.0
 * Small Javascript Library that parse an element containing a tweet and turn URLS, @user & #hashtags into urls
 * License : MIT
 * author Vincent Loy <vincent.loy1@gmail.com>
 * http://vincent-loy.fr
 */

/*global window, document*/
/*jslint regexp: true*/

(function (exports) {
    'use strict';

    // Class
    var tweetParser,

    // functions
        extend,
        generateLink;

    extend = function (out) {
        var i,
            key;

        out = out || {};

        for (i = 1; i < arguments.length; i += 1) {
            if (arguments[i]) {
                for (key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        out[key] = arguments[i][key];
                    }
                }
            }
        }
        return out;
    };

    generateLink = function (url, className, text) {
        var link = document.createElement('a');
        link.href = url;
        link.classList.add(className);
        link.textContent = text;

        return link;
    };

    tweetParser = function (element, args) {
        var elt = document.querySelectorAll(element),
            parameters = extend({
                urlClass: 'tweet_link',
                userClass: 'tweet_user',
                hashtagClass: 'hashtag',
                target: '_blank',
                searchWithHashtags: true,
                parseUsers: true,
                parseHashtags: true,
                parseUrls: true
            }, args);

        Array.prototype.forEach.call(elt, function (el) {

            var tweet = el.innerHTML,
                searchlink, //search link for hashtags


            //regex
                regexUrl = /(f|ht)tps?:\/\/([^\s\t\r\n<]*[^\s\t\r\n<)*_,\.])/g, //regex for urls
                regexUser = /\B@([a-zA-Z0-9_]+)/g, //regex for @users
                regexHashtag = /\B(#[á-úÁ-Úä-üÄ-Üa-zA-Z0-9_]+)/g; //regex for #hashtags

            //Hashtag Search link
            if (parameters.searchWithHashtags) {
                //this is the search with hashtag
                searchlink = "https://twitter.com/hashtag/";
            } else {
                //this is a more global search including hashtags and the word itself
                searchlink = "https://twitter.com/search?q=";
            }

            //turn URLS in the tweet into... working urls
            if (parameters.parseUrls) {
                tweet = tweet.replace(regexUrl, function (url) {
                    var link = generateLink(url, parameters.urlClass, url);

                    return url.replace(url, link.outerHTML);
                });
            }

            //turn @users in the tweet into... working urls
            if (parameters.parseUsers) {
                tweet = tweet.replace(regexUser, function (user) {
                    var userOnly = user.slice(1),
                        url = 'http://twitter.com/' + userOnly,
                        link = generateLink(url, parameters.userClass, user);

                    return user.replace(user, link.outerHTML);
                });
            }

            //turn #hashtags in the tweet into... working urls
            if (parameters.parseHashtags) {
                tweet = tweet.replace(regexHashtag, function (hashtag) {
                    var hashtagOnly = hashtag.slice(1),
                        url = searchlink + hashtagOnly,
                        link = generateLink(url, parameters.hashtagClass, hashtag);

                    return hashtag.replace(hashtag, link.outerHTML);
                });
            }

            //then, it inject the last var into the element containing the tweet
            el.innerHTML = tweet;
        });
    };

    exports.tweetParser = tweetParser;
}(window));
