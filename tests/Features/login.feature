Feature: website validation
  

  Scenario Outline: validation of login functionality
    Given User launches application
    When User enters application "<username>" and "<password>"
    And click on login button
    Then user should be navigated to homepage

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |







 