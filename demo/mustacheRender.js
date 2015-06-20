/**
 * Project : tweetParser.js
 * File : mustacheRender
 * Date : June, 08 2015
 * Author : Vincent Loy <vincent.loy1@gmail.com>
 */
/*global Mustache, jQuery, $*/

(function ($) {
    'use strict';

    var contributorsBox = $('#contributors'),
        contributorTemplate = contributorsBox.html(),
        apiUrl = 'https://api.github.com/repos/VincentLoy/tweetParser.js/contributors';

    Mustache.parse(contributorTemplate);

    $.getJSON(apiUrl, function (datas) {
        var i;

        for (i = 0; i < datas.length; i += 1) {
            if (datas[i].contributions > 1) {
                datas[i].wording = "contributions";
            } else {
                datas[i].wording = "contribution";
            }
        }
        contributorsBox.html(Mustache.render(
            $('#contributors').html(),
            {contributor: datas}
        ));

        // Cheat to not get 404 not found for src="{{html_url}}" :O
        $('.contributor-image').each(function () {
            $(this).attr('src', $(this).attr('data-src'));
        });
    });

}(jQuery));


