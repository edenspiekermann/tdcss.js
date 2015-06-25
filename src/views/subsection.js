var _ = require('underscore');
var TDCSSView = require('./tdcss-view');
var FacetTypes = require ('../models/const.js');
var $ = require('jquery');


module.exports = TDCSSView.extend({
    className: "tdcss-subsection",
    template: require('./subsection.hbs'),

    attributes: function() {
        var attributes = {
          id: 'subsection-lol' // TODO: this needs to be the index inside collection?
        }

        return attributes;
    },

    getTemplateData: function() {
      return _.extend ({
            // TODO: this should be equivalent to https://github.com/edenspiekermann/tdcss.js/blob/5155de2d607f9353b0873046def3158221650bc4/src/tdcss.js#L203
            renderSnippet: true
        }, this.model.attributes);
    },
});
