var Backbone = require('backbone');
var Handlebars = require('handlebars');

module.exports = Backbone.View.extend({
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
        if (type === 'coffeesnippet' && window.CoffeeScript) {
          window.CoffeeScript.eval(this.model.get('raw_script'));
      }

      var textarea = $("pre", this.$el),
      var new_textarea_height = $(".tdcss-dom-example", this.$el).height();

      console.log(type);
      // This console.log is here because the type needs to be checked here, and I'm not sure how to match it up.
      if (type === 'jssnippet' || type === 'coffeesnippet') {
        textarea.height('auto');
        } else if (fragment.custom_height === "") {
            textarea.height(new_textarea_height);
        } else {
            textarea.height(fragment.custom_height);
        }
    },

    render: function() {
        var data = _.extend{
            // TODO: this should be equivalent to https://github.com/edenspiekermann/tdcss.js/blob/5155de2d607f9353b0873046def3158221650bc4/src/tdcss.js#L203
            renderSnippet: true
        }, this.model.attributes);

        this.$el.html(this.template(data));
        this.postRender();
        return this;
    }
});
