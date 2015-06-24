var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');


module.exports = Backbone.View.extend({
    className: "tdcss-header",
    template: require('./tdcss-header.hbs'),

    render: function() {
        var mainMenuData = this.collection.map(function (item) {
            return item.toJSON();
        });
        var data = {
          mainMenuItems: mainMenuData
        };

        this.$el.append(this.template(data));

        return this;
    }

});
