class SNYHomePage {
	get url() { return "/services-near-you";  }	
	get searchInputBox(){ return $('#search-input');}
	get matchingAddress(){ return $('#rml-branch-finder-list-results .ui-menu-item:nth-of-type(3) .ui-menu-item-wrapper');}
	get houseNumber(){ return $('#rml-branch-finder-list-results .ui-menu-item:nth-of-type(9) .ui-menu-item-wrapper');}
	  
enterPostcode(postcode){
			this.searchInputBox.click();
			this.searchInputBox.setValue(postcode);
	}   
selectMatchingAddresesOption(postcode){
		this.matchingAddress.click();
}   

selectHouseNumber(houseno){
	this.houseNumber.click();
}   

}
module.exports = new SNYHomePage();