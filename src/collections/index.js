var Backbone = require('backbone');

var Section = require('../models/').Section;
var Fragment = require('../models/').Fragment;

var Sections = Backbone.Collection.extend({
    model: Section
});

var Fragments = Backbone.Collection.extend({
    model: Fragment
});

module.exports = {
    Sections: Sections,
    Fragments: Fragments
}
