/*!
 * tweetParser.js jQuery compatibility file
 * Small Javascript Library that parse an element containing a tweet and turn URLS, @user & #hashtags into urls
 * License : MIT
 * author Vincent Loy <vincent.loy1@gmail.com>
 * http://vincent-loy.fr
 */

/*global define, exports, require, $, tweetParser, jQuery*/

(function ($, tweetParser) {
    'use strict';

    function tweetParserify(el, options) {
        tweetParser(el, options);
    }

    $.fn.tweetParser = function (options) {
        return tweetParserify(this.selector, options);
    };
}(jQuery, tweetParser));
