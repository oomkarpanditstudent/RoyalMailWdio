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
  /*
    _actionitems = $$(".action-items");
   _locationtitle=$$(".location-title");
   //looping to get to right postoffice
   _locationtitle.forEach((locationitem,index) => {
       
    if (locationitem.getText()===_branchName){
        console.log("Found match for Windsor -------------------------" + locationitem.getText())
     //  _actionitems.forEach((actitem,index) => { if (index===1){actitem.click(); }})
     _actionitems[index].click();
     browser.pause(5000);
    }
})*/
  
  
  
  
  
    //hardcoded for now
   $("#rml-branch-finder-list-results .ui-menu-item:nth-of-type(3) .ui-menu-item-wrapper").click();
 /* _pcadesc = $$(".branch-finder-list-results");
   _pcadesc.forEach((addressitem,index) => {
    console.log("{address}  -------------------------" + addressitem.getText())
    if (addressitem.getText()===address){
        console.log("Found match for {address}  -------------------------  it is " + addressitem.getText())
        _pcadesc[index].click();
    }
});*/
});

When(/^I get more matching addresses and I select "([^"]*)"$/, housenumber => {
     //hardcoded for now
    $("#rml-branch-finder-list-results .ui-menu-item:nth-of-type(9) .ui-menu-item-wrapper").click(); 
   /*_pcatext = $$(".pca-text");
   _pcatext.forEach((housenoitem,index) => {
    console.log(" {housenumber}  -------------------------  it is " + housenoitem.getText())
 
    if (housenoitem.getText()===housenumber){
        _pcatext[index].click();
    }
});*/
});