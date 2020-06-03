@services-near-you @regression @smoke @SNY
Feature: Enter postcode to search for a branch location
  As a user of the branch finder application
  I want to start entering a postcode or a street name to search for branch locations 
  So that the system can present matching address details available through information retrieved through the postcode anywhere solution

Background: 
  Given I navigate to the "SNYHome" page

Scenario: Smoke Test SNY Functionality
    
  When I enter the postcode "S643HW" in branch finder search box
   And I get matching addresses and I select "Alma Road, Windsor - More Addresses"
   And I get more matching addresses and I select "37 Alma Road"
  Then I should see result count text "Showing 5 locations"
   And I should see detailed information of "Windsor" branch
   And I should see nearest 5 branch details as below:
      | BranchAddress                                         | BranchName                          |
      | 38-39 Peascod Street, Windsor, Berkshire, SL4 1AA     | Windsor                             |
      | William Street, Windsor, SL4 1AA                      | The Queen Elizabeth Delivery Office |
      | 113-117 Springfield Road, Windsor, Berkshire, SL4 3PZ | Springfield Road                    |
      | 124 High Street, Eton, Windsor, Berkshire, SL4 6AN    | Eton                                |
      | Upper Vale Road, Windsor, Berkshire, SL4 5JR          | Upper Vale Road                     |
