Feature: The Internet Guinea Pig Website
  @Scenario-outline
  Scenario Outline: As a user, I can log into the secure area

    Given I m in front page
    When I m tryng login with as "<username>" and password "<password>"
    Then I m success as "<user>"

    Examples:
      | username      | password | user          |
      | kokocrunch08  | Densus88 | kokocrunch08  |
      | hendri.antomy | 1234     | hendri.antomy |

  @shopping
  Scenario: Addding item to cart
    Given I m in front page
    When I m tryng login with Username "kokocrunch08" and password "Densus88"
    Then I m success as "kokocrunch08"
    When I m trying add item to cart:
      | itemName          | quantity |
      | Samsung galaxy s6 | 1        |
      | Nokia lumia 1520  | 1        |