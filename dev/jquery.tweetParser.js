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
        var $el = $(el),
            selector,
            elId = $el.attr('id'),
            elClass = $el.attr('class');

        if (elClass !== undefined) {
            selector = '.' + elClass;
        } else if (elId !== undefined) {
            selector = '#' + elId;
        }

        tweetParser(selector, options);
    }

    $.fn.tweetParser = function (options) {
        return tweetParserify(this.first(), options);
    };
}(jQuery, tweetParser));
