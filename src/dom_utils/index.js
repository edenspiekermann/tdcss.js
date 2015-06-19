var $ = require('jquery');
var jQuery = $;
var _ = require('underscore');

var FragmentTypes = require('../models/const.js');
var config = require('../config');
var fragmentInfoSplitter = config.fragmentInfoSplitter;

// models
var Models = require('../models');
var Section = Models.Section;
var Description = Models.Description;
var CodeSnippet = Models.CodeSnippet;
var JSCodeSnippet = Models.JSCodeSnippet;
// collections
var Fragments = require('../collections').Fragments;
var Sections = require('../collections').Sections;


function createFragmentFromComment(commentNode) {
    var type = getFragmentType(commentNode);
    var customHeight;
    var fragmentTitle;
    var fragmentDescription;
    var fragment;
    var fragmentHTML;
    var rawScript;
    var identifier;

    if (type === FragmentTypes.SECTION.name) {
        identifier = FragmentTypes[type].identifier;
        fragmentTitle = getFragmentContent(commentNode, identifier);
        return new Section({
            type: type,
            name: fragmentTitle
        });
    }

    if (type === FragmentTypes.DESCRIPTION.name) {
        identifier = FragmentTypes[type].identifier;
        fragmentDescription = getFragmentContent(commentNode, identifier);

        return new Description({
            type: type,
            description: fragmentDescription
        });
    }

    if (type === FragmentTypes.SNIPPET.name) {
        identifier = FragmentTypes[type].identifier;
        fragmentTitle = getFragmentContent(commentNode, identifier);
        customHeight = $.trim(getCommentMeta(commentNode)[1]);
        fragmentHTML = getFragmentHTML(commentNode);

        return new CodeSnippet({
            type: type,
            title: fragmentTitle,
            html: fragmentHTML,
            customHeight: customHeight
        });

    }

    if (type === FragmentTypes.JS_SNIPPET.name) {
        identifier = FragmentTypes[type].identifier;
        fragmentTitle = getFragmentContent(commentNode, identifier);
        rawScript = getFragmentScriptHTML(commentNode);
        fragmentHTML = getFragmentHTML(commentNode);

        return new JSCodeSnippet({
            type: type,
            title: fragmentTitle,
            html: fragmentHTML,
            rawScript: rawScript
        });
    }

    if (type === FragmentTypes.COFFEE_SNIPPET.name) {
        if (!window.CoffeeScript) {
            throw new Error("Include CoffeeScript Compiler to evaluate CoffeeScript with tdcss.");
        }
        identifier = FragmentTypes[type].identifier;
        fragmentTitle = getFragmentContent(commentNode, identifier);
        rawScript = getFragmentScriptHTML(commentNode);
        fragmentHTML = getFragmentHTML(commentNode);

        return new JSCodeSnippet({
            type: type,
            title: fragmentTitle,
            html: fragmentHTML,
            rawScript: rawScript
        });

    }

    if (type === FragmentTypes.NO_SNIPPET.name) {
        identifier = FragmentTypes[type].identifier;
        fragmentTitle = getFragmentContent(commentNode, identifier);
        customHeight = $.trim(getCommentMeta(commentNode)[1]);
        fragmentHTML = getFragmentHTML(commentNode);

        return new CodeSnippet({
            type: type,
            title: fragmentTitle,
            html: fragmentHTML,
            customHeight: customHeight
        });
    }

    // return undefined if no match is found
    return undefined;
}

function getFragmentType(element) {
    var foundType = "";
    for (var fragmentType in FragmentTypes) {
        if (FragmentTypes.hasOwnProperty(fragmentType)) {
            var identifier = FragmentTypes[fragmentType].identifier;
            if (element.nodeValue.match(new RegExp(identifier))) {
                foundType = fragmentType;
            }
        }
    }
    return foundType;
}

function getFragmentContent(element, identifier) {
    return $.trim(getCommentMeta(element)[0].split(identifier)[1]);
}

function getCommentMeta(element) {
    return element.nodeValue.split(fragmentInfoSplitter);
}

function getFragmentScriptHTML(element) {
    return $(element).nextAll('script[type="text/javascript"]').html();
}

function getFragmentCoffeeScriptHTML(element) {
    return $(element).nextAll('script[type="text/coffeescript"]').html().trim();
}

function getFragmentHTML(element) {
    // The actual HTML fragment is the comment's nextSibling (a carriage return)'s nextSibling:
    var fragment = element.nextSibling.nextSibling;

    // Check if nextSibling is a comment or a real html fragment to be rendered
    if (fragment.nodeType !== 8) {
        return fragment.outerHTML;
    } else {
        return null;
    }
}

module.exports = {
    createFragmentFromComment: createFragmentFromComment,
    getFragmentType: getFragmentType,
    getFragmentContent: getFragmentContent,
    getCommentMeta: getCommentMeta,
    getFragmentScriptHTML: getFragmentScriptHTML,
    getFragmentCoffeeScriptHTML: getFragmentCoffeeScriptHTML,
    getFragmentHTML: getFragmentHTML
};
