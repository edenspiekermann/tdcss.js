var Backbone = require('backbone');
var _ = require('underscore');


var Fragment = Backbone.Model.extend({
    defaults: {
        type: '',
        name: '',
        wip: false
    },

    initialize: function (data) {

    },

    toUniqueID: function() {
        var output = this.get('name').replace(/\s+/g, '-').toLowerCase();
        return encodeURIComponent(output);
    }

});


var Section = Fragment.extend({
    toJSON: function () {
        var data = _.clone(this.attributes);
        data = _.extend({
            href: this.toUniqueID()
        }, data);

        return data;
    }
});


var CodeSnippet = Fragment.extend({
    defaults: {
        html: '',
        customHeight: undefined
    }
});


var JSCodeSnippet = CodeSnippet.extend({
    defaults: {
        rawScript: ''
    }
});


var Description = Fragment.extend({
    defaults: {
        text: ''
    }
});

module.exports = {
    Fragment: Fragment,
    Section: Section,
    Description: Description,
    CodeSnippet: CodeSnippet,
    JSCodeSnippet: JSCodeSnippet
}
