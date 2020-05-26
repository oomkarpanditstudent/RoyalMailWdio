class SNYAddressResultPage {
    get url() { return "/services-near-you";  }
    get toggle(){ return $('.button-secondary.postbox-toggle-list');}
    get resultCount(){ return $('.result-count');}
    get moreInfoBtn(){ return $$('.action-items');}
    get locationTitles(){ return $$('.location-title');}

checkResultCount(locations){
    if (driver.isMobile){
        this.toggle.click();
    }
    assert.strictEqual(locations,this.resultCount.getText()) 
}
checkBrchDetl(branchName){
   //looping to get to right postoffice
   this.locationTitles.forEach((locationItem,index) => {   
    if (locationItem.getText()===branchName){
        console.log("Found match for Windsor -------------------------" + locationItem.getText());
     this.moreInfoBtn[index].click();
     browser.pause(5000);
    }
    console.log("Not Found Match");
   })
}
}
module.exports = new SNYAddressResultPage();

