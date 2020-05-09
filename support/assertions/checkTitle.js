const pageTitles = require("../../data/pageTitles");

module.exports =(page) => {
    var title;
    switch (page) {
        case "SNYHome":
          title=pageTitles.SNYPageTitle;
          break;
        case "Home":
            title=pageTitles.HomePageTitle;
          break;
        default:
          console.log(`Invalid Page ${page}`);
        }
  assert(
    browser.getTitle() === title,
    `Title, ${browser.getTitle()} not equal to ${title}`
  );
};