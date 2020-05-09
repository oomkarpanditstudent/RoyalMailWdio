const {Given} = require('cucumber');
const goToPage = require("../../support/actions/goToPage");
const checkTitle = require("../../support/assertions/checkTitle");

Given(/^I navigate to the "([^"]*)" page$/, page => {
 goToPage(page);
 checkTitle(page);
 });