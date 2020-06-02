class SNYAddressResultPage {
    get url() { return "/services-near-you";  }
    get toggle(){ return $('.button-secondary.postbox-toggle-list');}
    get resultCount(){ return $('.result-count');}
    get moreInfoBtn(){ return $$('.action-items');}
    get branchNames(){ return $$('.location-title');}
    get branchAddresses(){ return $$('.location-address');}
    
    
    
checkResultCount(locations){
    if (driver.isMobile){
        this.toggle.click();
    }
    assert.strictEqual(locations,this.resultCount.getText()) 
}
checkBranchDetail(branchName){
   //looping to get to right postoffice
   this.branchNames.forEach((branchItem,index) => {   
    if (branchItem.getText()===branchName){
        console.log("Found match for Windsor -------------------------" + branchItem.getText());
     this.moreInfoBtn[index].click();
    }
    console.log("Not Found Match");
   })
}
checkNearestBranches(nearestBranchesData){
 
const baddress =this.branchAddresses.map(ri=> {
    return ri.getText();
});
const bname= this.branchNames.map(ri1=> {
    return ri1.getText();
});     
const dtbranchadd=nearestBranchesData.rows().map(bitem=>{
    return bitem[0];
});
const dtbranchname=nearestBranchesData.rows().map(bitem=>{
    return bitem[1];
});
//all the test data from data table and website in table format.
console.table(nearestBranchesData.rows())
console.table(baddress)
console.table(bname)
console.table(dtbranchadd)
console.table(dtbranchname)

assert.deepEqual(baddress,dtbranchadd);
assert.deepEqual(bname,dtbranchname);
}
}
module.exports = new SNYAddressResultPage();

