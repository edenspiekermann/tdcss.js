var Backbone = require('backbone');
var Types = require('../models/const.js');
var Section = require('../models/').Section;
var Fragment = require('../models/').Fragment;


var Sections = Backbone.Collection.extend({
    model: Section
});

var Fragments = Backbone.Collection.extend({
    model: Fragment,

    getSections: function () {
        return this.filter(function (item) {
            return item.get('type') === Types.SECTION.name;
        });
    }

});

module.exports = {
    Sections: Sections,
    Fragments: Fragments
}
