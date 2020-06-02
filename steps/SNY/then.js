const {Then} = require('cucumber');
const goToPage = require("../../support/actions/goToPage");
const addressResultPage = require("../../pages/SNY/SNYAddressResultPage");

Then(/^I should see result count text "([^"]*)"$/,  noOfBranchesResultText => {
    addressResultPage.checkResultCount(noOfBranchesResultText); 
});

Then(/^I should see detailed information of "([^"]*)" branch$/, branchName => { 
    addressResultPage.checkBranchDetail(branchName);
});

Then(/^I should see nearest 5 branch details as below:$/, nearestBranchesData => { 
    addressResultPage.checkNearestBranches(nearestBranchesData)
});

