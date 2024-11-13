/*!
 * tweetParser.js v3.0.0
 * A JavaScript library that parses elements containing tweets, transforming URLs, @usernames, and #hashtags into clickable links for both x.com and twitter.com
 * License: MIT
 * Author: Vincent Loy <vincent.loy1@gmail.com>
 * http://vincent-loy.fr
 */

(function (exports) {
    'use strict';

    // Constants
    const REGEX_URL = /(?:\s)(f|ht)tps?:\/\/([^\s\t\r\n<]*[^\s\t\r\n<)*_,\.])/g; // regex for URLs
    const REGEX_USER = /\B@([a-zA-Z0-9_]+)/g; // regex for @usernames
    const REGEX_HASHTAG = /\B(#[á-úÁ-Úä-üÄ-Üa-zA-Z0-9_]+)/g; // regex for #hashtags

    // Default parameters
    const DEFAULT_OPTIONS = {
        urlClass: 'tweet_link',
        userClass: 'tweet_user',
        hashtagClass: 'hashtag',
        target: '_blank',
        searchWithHashtags: true,
        parseUsers: true,
        parseHashtags: true,
        parseUrls: true,
        baseURL: 'https://x.com', // Default domain for links
        hideUserSymbol: false, // New: Hide "@" in @username
        hideProtocol: false // New: Hide "https://" or "http://" in displayed text for URLs
    };

    // Helper function to extend objects (shallow copy)
    const extend = (out = {}, ...args) => {
        args.forEach(arg => {
            if (arg) {
                Object.keys(arg).forEach(key => {
                    out[key] = arg[key];
                });
            }
        });
        return out;
    };

    // Helper function to generate a link element
    const generateLink = (url, className, target, text) => {
        const link = document.createElement('a');
        link.href = url; // Keep the full URL with protocol in the href
        link.classList.add(className);
        link.target = target;
        link.textContent = text; // Display text (can have protocol hidden if specified)
        return link;
    };

    // Main tweetParser function
    const tweetParser = (element, options = {}) => {
        const elements = document.querySelectorAll(element);
        const parameters = extend({}, DEFAULT_OPTIONS, options);

        // Define hashtag search URL based on baseURL
        const hashtagBaseURL = parameters.searchWithHashtags 
            ? `${parameters.baseURL}/hashtag/`
            : `${parameters.baseURL}/search?q=`;

        elements.forEach(el => {
            let content = el.innerHTML;

            // Replace URLs with links
            if (parameters.parseUrls) {
                content = content.replace(REGEX_URL, url => {
                    // If hideProtocol is true, remove protocol from displayed text
                    const displayUrl = parameters.hideProtocol ? url.replace(/https?:\/\//, '') : url;
                    const link = generateLink(url, parameters.urlClass, parameters.target, displayUrl);
                    return url.replace(url, link.outerHTML);
                });
            }

            // Replace @usernames with links, optionally hiding the @ symbol
            if (parameters.parseUsers) {
                content = content.replace(REGEX_USER, user => {
                    const userOnly = user.slice(1);
                    const url = `${parameters.baseURL}/${userOnly}`;
                    // If hideUserSymbol is true, display username without the @ symbol
                    const displayUser = parameters.hideUserSymbol ? userOnly : user;
                    const link = generateLink(url, parameters.userClass, parameters.target, displayUser);
                    return user.replace(user, link.outerHTML);
                });
            }

            // Replace #hashtags with links
            if (parameters.parseHashtags) {
                content = content.replace(REGEX_HASHTAG, hashtag => {
                    const hashtagOnly = hashtag.slice(1);
                    const url = `${hashtagBaseURL}${encodeURIComponent(hashtagOnly)}`;
                    const link = generateLink(url, parameters.hashtagClass, parameters.target, hashtag);
                    return hashtag.replace(hashtag, link.outerHTML);
                });
            }

            // Update the element's HTML with parsed content
            el.innerHTML = content;
        });
    };

    exports.tweetParser = tweetParser;

}(window));

/*global $, jQuery, tweetParser*/
if (window.jQuery) {
    (function ($, tweetParser) {
        'use strict';

        function tweetParserify(el, options) {
            tweetParser(el, options);
        }

        $.fn.tweetParser = function (options) {
            return tweetParserify(this.selector, options);
        };
    }(jQuery, tweetParser));
}
