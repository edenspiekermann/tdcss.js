var Backbone = require('backbone');
var Handlebars = require('handlebars');

module.exports = Backbone.View.extend({
    render: function() {
        var data = this.getTemplateData ? this.getTemplateData() : this.model.attributes;

        this.$el.append(this.template(data));
        if (this.postRender) {
            this.postRender();
        };
        return this;
    }
});
