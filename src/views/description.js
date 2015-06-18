var TDCSSView = require('./tdcss-view');

module.exports = TDCSSView.extend({
    className: "tdcss-description",

    template: function(data) { return data.text;}
});
