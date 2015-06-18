var Backbone = require('backbone');
var Handlebars = require('handlebars');

module.exports = Backbone.View.extend({
  className: "tdcss-section",

  template: Handlebars.compile(require('./section.hbs')),

  initialize: function() {
    if (this.model.get('wip')) {
      this.className += ' wip';
    }
  },

  attributes: function() {
    return {
      id: this.model.toUniqueId()
    };
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
