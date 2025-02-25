import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import ToDoList from "../../../pages/ToDo/ToDoList";
import ToDoInput from "../../../pages/ToDo/ToDoInput";
import ToDoFooter from "../../../pages/ToDo/ToDoFooter";

const invalidTestData = {title: 'A'};
const validTestData = [
    {title: 'First to-do item'},
    {title: 'Second to-do item'},
    {title: 'Third to-do item'},
]

const addToDoItem = (item) => {
    ToDoInput.inputInTextInput(item.title);
    ToDoInput.pressEnter();
    ToDoList.elements
        .toDoItemLabel()
        .should('contain', item.title);
}

Given('user is navigated to to-do application', () => {
    // BaseUrl is already configured in cypress.config.js
    cy.visit('');
})

Given('there are 3 to-do items created', () => {
    validTestData.forEach(addToDoItem);
})

Given('there is a to-do item created', () => {
    addToDoItem(validTestData[0].title);
})

When('user checks off the to-do item', () => {
    ToDoList.checkOffFirstToDoItem();
})

When('user adds a new {string} to-do item', isValid => {
    const item = isValid === 'valid' ? validTestData[0].title : invalidTestData.title;
    ToDoInput.inputInTextInput(item);
    ToDoInput.pressEnter();
})

When('user deletes a to-do item', () => {
    ToDoList.mouseOverFirstToDoItem();
    ToDoList.clickDeleteToDoItemButton();
})

When('user clears completed to-do-items', () => {
    ToDoFooter.clickClearCompleted();
})

When('user filters {string} to-do items', status => {
    switch (status) {
        case 'all':
            ToDoFooter.clickAll();
            break;
        case 'active':
            ToDoFooter.clickActive();
            break;
        case 'completed':
            ToDoFooter.clickCompleted();
            break;
    }
})

When('user toggles all to-do items', () => {
    ToDoInput.clickToggleAllButton();
})

Then('there should only be {string} to-do items in the list', count => {
    ToDoList.getNumberOfItemInList().then(itemCount => {
        assert.equal(itemCount, parseInt(count));
    })
})

Then('there should be no item added to the to-do list', () => {
    ToDoList.elements.toDoItem().should('have.length', 0);
})

Then('the to-do item is marked as completed', () => {
    ToDoList.elements
        .toDoItem()
        .first()
        .should('have.class', 'completed');
})

Then('all 3 to-do items are marked as completed', () => {
    ToDoList.elements
        .toDoItem()
        .each($el => {
            cy.wrap($el).should('have.class', 'completed');
        });
})

Then('the new to-do item is added to the list', () => {
    ToDoList.elements
        .toDoItemLabel()
        .should('contain', validTestData[0].title);
})
