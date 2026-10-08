Feature: booking product

Scenario: adding product to cart
  Given User launches application
  When User enters application "standard_user" and "secret_sauce"
  And click on login button
  Then user should be navigated to homepage
  When user added product to cart
  Then user clicks on cart icon

