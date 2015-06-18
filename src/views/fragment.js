var _ = require('underscore');
var TDCSSView = require('./tdcss-view');
var FacetTypes = require ('../models/const.js');
var $ = require('jquery');


module.exports = TDCSSView.extend({
    className: "tdcss-fragment",
    template: require('./fragment.hbs'),

    attributes: function() {
        var attributes = {
          id: 'fragment-lol' // TODO: this needs to be the index inside collection?
        }

        if (this.model.get('height')) {
          attributes.style = 'height: ' + this.model.get('height')
        }

        return attributes;
    },

    // ??
    postRender: function() {
        var type = this.model.get('type');
        var customHeight = this.model.get('customHeight');

        if (type === FacetTypes.COFFEE_SNIPPET.name && window.CoffeeScript) {
          window.CoffeeScript.eval(this.model.get('rawScript'));
        }

        var textarea = $("pre", this.$el);
        var textAreaHeight = $(".tdcss-dom-example", this.$el).height();

        console.log(type);
        // This console.log is here because the type needs to be checked here, and I'm not sure how to match it up.
        if (type === FacetTypes.JS_SNIPPET.name || type === FacetTypes.COFFEE_SNIPPET.name) {
            textarea.height('auto');
        } else if (!customHeight) {
            textarea.height(textAreaHeight);
        } else {
            textarea.height(customHeight);
        }
    },

    getTemplateData: function() {
      return _.extend ({
            // TODO: this should be equivalent to https://github.com/edenspiekermann/tdcss.js/blob/5155de2d607f9353b0873046def3158221650bc4/src/tdcss.js#L203
            renderSnippet: true
        }, this.model.attributes);
    },
});
