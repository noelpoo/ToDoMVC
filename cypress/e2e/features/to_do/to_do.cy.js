import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import ToDoList from "../../../pages/ToDo/ToDoList";
import ToDoInput from "../../../pages/ToDo/ToDoInput";
import ToDoFooter from "../../../pages/ToDo/ToDoFooter";

const testData = [
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
    testData.forEach(addToDoItem);
})

Given('there is a to-do item created', () => {
    addToDoItem(testData[0].title);
})

When('user checks off the to-do item', () => {
    ToDoList.checkOffFirstToDoItem();
})

When('user adds a new to-do item', () => {
    ToDoInput.inputInTextInput(testData[0].title);
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

Then('there should only be {string} to-do items in the list', count => {
    ToDoList.getNumberOfItemInList().then(itemCount => {
        assert.equal(itemCount, parseInt(count));
    })
})

Then('the to-do item is marked as completed', () => {
    ToDoList.elements
        .toDoItem()
        .first()
        .should('have.class', 'completed');
})

Then('the new to-do item is added to the list', () => {
    ToDoList.elements
        .toDoItemLabel()
        .should('contain', testData[0].title);
})
