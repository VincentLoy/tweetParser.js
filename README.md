
# tweetParser.js - [Live Demo](http://vincentloy.github.io/tweetParser.js/)

![Parse Twitter Usernames, Hashtags, and URLs](https://d20uoazh5kuxrc.cloudfront.net/images/68747470733a2f2f6661726d312e73746.2e16d0ba.fill-1200x630.jpg)

**tweetParser.js** is a JavaScript library that parses elements containing Twitter-like content, turning URLs, @usernames, and #hashtags into clickable links. This library supports both `x.com` (formerly `twitter.com`) links and is flexible enough for other domains.

## Key Features
- Automatically converts URLs, @usernames, and #hashtags into clickable links.
- Supports customization with CSS classes for easy styling.
- Compatible with both Vanilla JavaScript and jQuery.
- Option to hide the "@" symbol in @usernames and the protocol (`https://`) in URLs.

---

## Installation

### Install with npm
```bash
npm install --save-dev tweetparser.js
```

### Include tweetParser.js in your HTML
```html
<script src="path/to/tweetParser.min.js"></script>
```

---

## Parameters

| Parameter           | Type      | Default           | Description                                                                                   |
|---------------------|-----------|-------------------|-----------------------------------------------------------------------------------------------|
| `urlClass`          | `String`  | `tweet_link`      | CSS class used for URLs in the tweet text.                                                    |
| `userClass`         | `String`  | `tweet_user`      | CSS class used for @user profile URLs in the tweet.                                           |
| `hashtagClass`      | `String`  | `hashtag`         | CSS class used for hashtag URLs in the tweet.                                                 |
| `target`            | `String`  | `_blank`          | HTML `target` attribute for all generated `<a>` tags.                                         |
| `searchWithHashtags`| `Boolean` | `true`            | If `true`, hashtags link to `x.com/hashtag/`; if `false`, link to `x.com/search?q=`.          |
| `parseUsers`        | `Boolean` | `true`            | Enables parsing of @user mentions if set to `true`.                                           |
| `parseUrls`         | `Boolean` | `true`            | Enables parsing of URLs if set to `true`.                                                     |
| `parseHashtags`     | `Boolean` | `true`            | Enables parsing of hashtags if set to `true`.                                                 |
| `baseURL`           | `String`  | `https://x.com`   | Base domain for generated links (e.g., `https://x.com` or `https://twitter.com`).             |
| `hideUserSymbol`    | `Boolean` | `false`           | If `true`, hides the "@" symbol in displayed usernames.                                       |
| `hideProtocol`      | `Boolean` | `false`           | If `true`, hides "https://" or "http://" in the displayed text for URLs, but keeps it in `href`.|

---

## Getting Started

### Basic Usage with JavaScript

To start using `tweetParser.js`, apply it to your desired CSS selector. Here’s an example using the `.tweet` class:

```html
<p class="tweet">This is my awesome tweet! #web #twitter @twitter https://www.twitter.com/</p>
```

```javascript
// Basic usage
tweetParser('.tweet');

// Usage with custom parameters
tweetParser('.tweet', {
    urlClass: "tweet_link",           // CSS class for URLs
    userClass: "tweet_user",           // CSS class for @user profiles
    hashtagClass: "hashtag",           // CSS class for hashtags
    target: "_blank",                  // Open links in new tab
    searchWithHashtags: true,          // Hashtags link to hashtag search
    parseUsers: true,                  // Parse @user mentions
    parseHashtags: true,               // Parse hashtags
    parseUrls: true,                   // Parse URLs
    baseURL: "https://x.com",          // Base domain for links
    hideUserSymbol: true,              // Hide "@" symbol in usernames
    hideProtocol: true                 // Hide "https://" in displayed URLs
});
```

### jQuery Usage

If jQuery is included, `tweetParser.js` can be used as a jQuery plugin:

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/tweetParser.min.js"></script>
```

```javascript
$('.tweet').tweetParser({
    urlClass: "tweet_link",
    userClass: "tweet_user",
    hashtagClass: "hashtag",
    target: "_blank",
    searchWithHashtags: true,
    parseUsers: true,
    parseHashtags: true,
    parseUrls: true,
    baseURL: "https://x.com",
    hideUserSymbol: true,
    hideProtocol: true
});
```

---

## Result Example

You can see the library in action in the [live demo](http://vincentloy.github.io/tweetParser.js/).

---

## Contributing

If you’d like to contribute:
- **Star** the repository on [GitHub](https://github.com/VincentLoy/tweetParser.js/stargazers)
- **Report issues** via the [Issues page](https://github.com/VincentLoy/tweetParser.js/issues)
- **Tweet about it** to share with others!

### Pull Requests
- Ensure your contribution solves a problem.
- For code quality, use [JSLint](http://www.jslint.com/help.html) before submitting.
- Keep your contributions small and focused.

---

## Changelog

### v3.0.0
  * **Added `baseURL` parameter**: Allows easy switching between `x.com` and soon vintage `twitter.com`.
  * **New `hideUserSymbol` option**: Hides the "@" symbol in usernames if set to `true`.
  * **New `hideProtocol` option**: Hides "https://" or "http://" in displayed URLs, keeping the full URL in `href`.
  * Remove bower support and uses. (was only used in demo).

### Previous Versions

+ **v2.2.0**: Added Babel, ported to ES6 syntax.
+ **v2.1.3**: Fixed target link parameter issue (#10).
+ **v2.1.2**: Emoji support.
+ **v2.1.1**: Wrapped tweetParser and jQuery compatibility into the same file (#9).
+ **v2.1.0**: Introduced jQuery compatibility file for dual VanillaJS and jQuery support.
+ **v2.0.2**: Code refactoring.
+ **v2.0.1**: Firefox compatibility fix for `textContent`.
+ **v2.0.0**: Removed jQuery dependencies, but maintained jQuery compatibility as an option.

---

### License

tweetParser.js is licensed under the MIT License.