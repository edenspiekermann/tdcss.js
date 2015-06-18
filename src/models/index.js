
var Fragment = Backbone.Model.extend({
    defaults: {
        type: '',
        name: ''
        wip: false
    }
});


var Section = Fragment.extend({
    toUniqueID: function() {
        var output = this.get('name').replace(/\s+/g, '-').toLowerCase();
        return encodeURIComponent(output);
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

module.exports = {
    Fragment: Fragment,
    Section: Section,
    CodeSnippet: CodeSnippet,
    JSCodeSnippet: JSCodeSnippet
}
