var types = {
    SECTION: {
        name: 'SECTION',
        identifier: "# "
    },
    SUBSECTION: {
        name: 'SUBSECTION',
        identifier: "## "
    },
    SNIPPET: {
        name: 'SNIPPET',
        identifier: ": "
    },
    JS_SNIPPET: {
        name: 'JS_SNIPPET',
        identifier: "_ "
    },
    COFFEE_SNIPPET: {
        name: 'COFFEE_SNIPPET',
        identifier: "-> "
    },
    NO_SNIPPET: {
        name: 'NO_SNIPPET',
        identifier: "= "
    },
    DESCRIPTION: {
        name: 'DESCRIPTION',
        identifier: "& "
    }
};

module.exports = types;
