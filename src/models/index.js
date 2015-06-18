var Backbone = require('backbone');


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
