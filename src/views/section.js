var TDCSSView = require('./tdcss-view');
var FacetTypes = require ('../models/const.js');
var FragmentView = require('./fragment');
var SubsectionView = require('./subsection');

module.exports = TDCSSView.extend({
    className: "tdcss-section",

    template: require('./section.hbs'),

    initialize: function() {
        if (this.model.get('wip')) {
            this.className += ' wip';
        }
    },

    render: function() {
        var data = this.getTemplateData ? this.getTemplateData() : this.model.toJSON();
        data.content = this.renderChildren().join('\n');
        this.$el.append(this.template(data));
        if (this.postRender) {
            this.postRender();
        };
        return this;
    },

    renderChildren: function () {
        var childMarkup = this.model.children.map(function (child) {
            var view;
            if (child.get('type') === FacetTypes.SUBSECTION.name) {
                view = new SubsectionView({model: child});
            } else {
                view = new FragmentView({model: child});
            }
            return view.render().$el.html();
        });
        return childMarkup;
    },


    attributes: function() {
        return this.model.toJSON();
    }
});
