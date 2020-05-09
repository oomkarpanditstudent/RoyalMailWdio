const {Then} = require('cucumber');

Then(/^I should see result count text "([^"]*)"$/,  locations => {
    //hardcoded for now
   text1=$(".result-count").getText();
   assert.strictEqual(locations,text1) 

});

Then(/^I should see detailed information of "([^"]*)" branch$/, _branchName => { 
     //locators
   _actionitems = $$(".action-items");
   _locationtitle=$$(".location-title");
   //looping to get to right postoffice
   _locationtitle.forEach((locationitem,index) => {
       
    if (locationitem.getText()===_branchName){
       // console.log("Found match for Windsor -------------------------" + locationitem.getText())
     //  _actionitems.forEach((actitem,index) => { if (index===1){actitem.click(); }})
     _actionitems[index].click();
     browser.pause(5000);
    }
})
});


Then(/^I should see nearest 5 branch details as below:$/, locations => { 
//to do
//implement table validations on 5 branches
});

