// ==UserScript==
// @name        hide-kali-linux-form-posts
// @include     http://www.tomshw.it/forum/*
// @description Hides every post and comment containing the word "kali"
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

// case insensitive jquery.contains
// see https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$("li.discussionListItem:contains('kali')").hide();