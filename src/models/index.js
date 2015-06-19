var Backbone = require('backbone');
var _ = require('underscore');


var Fragment = Backbone.Model.extend({
    defaults: {
        type: '',
        name: '',
        description: '',
        wip: false
    },

    toUniqueID: function() {
        var output = this.get('name').replace(/\s+/g, '-').toLowerCase();
        return encodeURIComponent(output);
    }

});


var Section = Fragment.extend({

    children: new Backbone.Collection(),

    getSectionFragments: function () {
        var fragments = this.collection;
        var currentSectionIndex;
        var nextSectionIndex;
        var items;

        if(fragments) {
            currentSectionIndex = this.getSectionIndex();
            nextSectionIndex = this.getNextSectionIndex();
            if(nextSectionIndex === -1) {
                nextSectionIndex = fragments.length;
            }
            console.log('current:', currentSectionIndex, 'next: ', nextSectionIndex);
            items = fragments.slice(currentSectionIndex + 1, nextSectionIndex);
            items = new Backbone.Collection(items);

            this.children = items;
        }

    },

    getSectionIndex: function () {
        return this.collection.getSectionIndex(this);
    },

    getNextSectionIndex: function () {
        var fragments = this.collection;
        var index;
        var sections = fragments.getSections();
        var sectionIndex = _.indexOf(sections, this);
        var numberOfSections = sections.length;
        var nextSection = sections[sectionIndex + 1];

        if(nextSection) {
            return this.collection.getSectionIndex(nextSection);
        }
        return -1;
    },

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
