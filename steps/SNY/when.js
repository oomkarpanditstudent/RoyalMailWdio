const {When} = require('cucumber');

When(/^I verify search box title$/, ()=> {
    console.log("Starting Test WHEN BOX TITLE")
    console.log("Ending Test WHEN") 
});
 
When(/^I enter the postcode "([^"]*)" in branch finder search box$/, postcode => {
    $('#search-input').click();
    $('#search-input').setValue(postcode);   
});

When(/^I get matching addresses and I select "([^"]*)"$/, address => {
  //hardcoded for now
    $("[data-di-id='\#gen_almaRoad,Windsor-MoreAddresses']").click();
});

When(/^I get more matching addresses and I select "([^"]*)"$/, street => {
     //hardcoded for now
    $("[data-di-id='\#gen_37AlmaRoad']").click(); 
});