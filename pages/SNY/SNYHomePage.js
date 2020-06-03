class SNYHomePage {
	get url() { return "/services-near-you";  }	
	get searchInputBox(){ return $('#search-input');}
	get matchingAddress(){ return $$('.ui-menu-item-wrapper .pca-description');}
	get houseNumber(){ return $$('.ui-menu-item-wrapper .pca-text');}
	
enterPostcode(postcode){
	this.searchInputBox.click();
	this.searchInputBox.setValue(postcode);
	this.searchInputBox.click();
}

selectMatchingAddresesOption(address){
	browser.pause(2000);
	const tt1=this.matchingAddress;
	for (let i = 0; i < tt1.length; i++) {
	   if (tt1[i].getText()===address){
		   tt1[i].click();
		   return;
	   }
   }
}   
selectHouseNumber(houseno){
	browser.pause(2000);
    const tt2=this.houseNumber;
      for (let i = 0; i < tt2.length; i++) {      
        if (tt2[i].getText()===houseno){
            tt2[i].click();
            return;
        }
    } 
}   
}
module.exports = new SNYHomePage();