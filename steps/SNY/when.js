const {When} = require('cucumber');
const snyHomePage = require("../../pages/SNY/SNYHomePage");
When(/^I enter the postcode "([^"]*)" in branch finder search box$/, postcode => {
    snyHomePage.enterPostcode(postcode);
});

When(/^I get matching addresses and I select "([^"]*)"$/, address => {
    //hardcoded for now
    snyHomePage.selectMatchingAddresesOption(address);
 });

When(/^I get more matching addresses and I select "([^"]*)"$/, housenumber => {
     //hardcoded for now
     snyHomePage.selectHouseNumber(housenumber);
});