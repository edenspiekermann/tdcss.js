var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');


module.exports = Backbone.View.extend({
    className: "tdcss-masthead",
    template: require('./tdcss-masthead.hbs'),

    render: function() {
        var data = {};

        this.$el.append(this.template(data));

        return this;
    }

});
