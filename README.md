About this fork:
================

At ESPI we really like this dead simple tool to build living styleguides in the client. As part of our latest Maker Days, on June 18-19th, a small team of us wanted to contribute back with some of the feedback we received while using the tool in our daily work. We got a little ambitious for 1.5 days of work (classic), so we are still in progress and not quite ready to merge back yet. If you'd like to have a peek at the current state, you can get the latest version on the branch that we lovingly named "backboneify-new-wraps"


[![Build Status](https://travis-ci.org/jakobloekke/tdcss.js.png?branch=master)](https://travis-ci.org/jakobloekke/tdcss.js)

tdcss.js - Super simple styleguide tool
================

See http://jakobloekke.github.io/tdcss.js/ for an introduction.

Release notes
---

- 0.8.0 (January 22nd, 2016): Rename 'download' folder to 'build', since that's more conventional. New 'internalize_background' setting.
- 0.7.0 (February 8th, 2015): Added advanced snippet annotations and js/cs support by @roblevintennis.
- 0.6.0 (May 23nd, 2014): Added pull requests from @greystate and @roblevintennis.
- 0.5.2 (November 7th, 2013): Added pull request from @johanvauhkonen + some css rules for description blocks
- 0.5.1 (October 7th, 2013): Slightly improved layout + download folder
- 0.4 (August 14th, 2013): Added toolbar and improved layout, added setup message, added html toggle button to toolbar.
- 0.3 (June 22nd, 2013): Added 'neutralize_background' option to remove annoying body backgrounds from your project stylesheet.
- 0.2 (June 4th, 2013): Simplification. Grunt-based build. Included 3rd party js dependencies into core files in 'build/*'.
- 0.1 (May 9th, 2013): Added experimental pixel rendering diff matching using canvas and localstorage. Only tested in Chrome.

3rd party
---

tdcss.js makes use of these awesome projects:

- https://github.com/LeaVerou/prism
- https://github.com/niklasvh/html2canvas
- https://github.com/Huddle/Resemble.js
