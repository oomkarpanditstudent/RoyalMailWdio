const SNYHomePage = require("../../pages/SNY/SNYHomePage");
//const RMGHomePage = require("../../pages/RMGHome/RMGHomePage");

module.exports =(page) => {
  switch (page) {
    case "SNYHome":
      browser.url(SNYHomePage.url);
      browser.setCookies({name: 'CONSENTMGR', value: 'consent:true'});
      browser.url(SNYHomePage.url);
      break;
    case "Home":
     // browser.url(RMGHomePage.url);
     // browser.setCookies({name: 'CONSENTMGR', value: 'consent:true'});
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};

