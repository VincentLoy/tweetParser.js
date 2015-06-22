/**
 * Project : tweetParser.js
 * File : jquery.tweetParser.js
 * Date : June, 22, 2015
 * Author : Vincent Loy <vincent.loy1@gmail.com>
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
