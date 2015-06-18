var Section = requrire('../models/').Section;

var Sections = Backbone.Collection.extend({
    model: Section
});

var Fragments = Backbone.Collection.extend({
    model: Fragments
});

module.exports = {
    Sections: Sections,
    Fragments: Fragments
}
