Feature: To-do list

    Background:
        Given user is navigated to to-do application

    Scenario: User adds a new to-do item with a valid input
        When user adds a new "valid" to-do item
        Then the new to-do item is added to the list

    Scenario: User adds a new to-do item with an invalid input
        When user adds a new "invalid" to-do item
        Then there should be no item added to the to-do list
    
    Scenario: User checks off a to-do item
        Given there is a to-do item created
        When user checks off the to-do item
        Then the to-do item is marked as completed

    Scenario: User checks off all to-do items using toggle-all
        Given there are 3 to-do items created
        When user toggles all to-do items
        Then all 3 to-do items are marked as completed

    Scenario: User deletes a to-do item
        Given there are 3 to-do items created
        When user deletes a to-do item
        Then there should only be "2" to-do items in the list

    Scenario: User filters by active to-do items
        Given there are 3 to-do items created
        When user checks off the to-do item
        And user filters "active" to-do items
        Then there should only be "2" to-do items in the list

    Scenario: User filters by completed to-do items
        Given there are 3 to-do items created
        When user checks off the to-do item
        And user filters "completed" to-do items
        Then there should only be "1" to-do items in the list
    
    Scenario: User clears completed to-do items
        Given there are 3 to-do items created
        When user checks off the to-do item
        And user filters "all" to-do items
        And user clears completed to-do-items
        Then there should only be "2" to-do items in the list
