var _ = require('underscore');
var TDCSSView = require('./tdcss-view');
var FacetTypes = require ('../models/const.js');
var $ = require('jquery');


module.exports = TDCSSView.extend({
    className: "tdcss-nav",
    template: require('./tdcss-nav.hbs'),

    render: function() {
        var menuData = this.collection.map(function (item) {
            return item.toJSON();
        });
        var data = {
            menuItems: menuData
        };

        this.$el.append(this.template(data));

        return this;
    }

});
