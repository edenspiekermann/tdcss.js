var Backbone = require('backbone');
var Types = require('../models/const.js');
var Page = require('../models/').Page;
var Section = require('../models/').Section;
var Fragment = require('../models/').Fragment;


var Pages = Backbone.Collection.extend({
    model: Page
});

var Sections = Backbone.Collection.extend({
    model: Section
});

var Fragments = Backbone.Collection.extend({
    model: Fragment,

    getSections: function () {
        return this.filter(function (item) {
            return item.get('type') === Types.SECTION.name;
        });
    },

    getSectionIndex: function (section) {
        var index;

        if(section) {
            index = this.indexOf(section);
            return index;
        }
        return -1;
    }

});

module.exports = {
    Pages: Pages,
    Sections: Sections,
    Fragments: Fragments
}
