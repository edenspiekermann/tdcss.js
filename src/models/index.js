
var Fragment = Backbone.Model.extend({
    defaults: {
        type: '',
        title: '',
        wip: false
    }
});


var Section = Fragment.extend({
    defautls: {
        title: ''
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
