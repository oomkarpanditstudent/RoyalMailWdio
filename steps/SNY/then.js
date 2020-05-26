const {Then} = require('cucumber');
const goToPage = require("../../support/actions/goToPage");
const addRestPge = require("../../pages/SNY/SNYAddressResultPage");

Then(/^I should see result count text "([^"]*)"$/,  locations => {
     addRestPge.checkResultCount(locations); 
});

Then(/^I should see detailed information of "([^"]*)" branch$/, branchName => { 
    addRestPge.checkBrchDetl(branchName);
});


Then(/^I should see nearest 5 branch details as below:$/, locations => { 
//to do
//implement table validations on 5 branches
});

