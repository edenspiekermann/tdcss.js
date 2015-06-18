var TDCSSView = require('./tdcss-view');

module.exports = TDCSSView.extend({
    className: "tdcss-section",

    template: require('./section.hbs'),

    initialize: function() {
        if (this.model.get('wip')) {
            this.className += ' wip';
        }
    },

    attributes: function() {
        return {
          //id: this.model.toUniqueID()
        };
    }
});
