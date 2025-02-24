class ToDoList {
    elements = {
        textInput: () => cy.get('[data-testid="text-input"]'),
        toDoItem: () => cy.get('[data-testid="todo-item"]'),
        toDoItemLabel: () => cy.get('[data-testid="todo-item-label"]'),
        toDoItemToggle: () => cy.get('[data-testid="todo-item-toggle"]'),
        toDoItemDeleteButton: () => cy.get('[data-testid="todo-item-button"]'),
    }

    assertNumberOfItemsInList(number) {
        this.elements.toDoItem().should('have.length', number);
    }

    mouseOverFirstToDoItem() {
        this.elements.toDoItem().first().trigger('mouseover');
    }

    clickDeleteToDoItemButton() {
        this.elements.toDoItemDeleteButton().first().click({ force: true });
    }

    validateFirstToDoItemIsComplete() {
        this.elements.toDoItem().first().should('have.class', 'completed');
    }

    checkOffFirstToDoItem() {
        this.elements.toDoItemToggle().first().click({ force: true });
    }

    toDoItemLabelExists(label) {
        this.elements.toDoItemLabel().should('contain', label);
    }

    inputInTextInput(text) {
        this.elements.textInput().then($input => {
            cy.controlledInputChange($input, text);
        })
    }

    pressEnter(){
        cy.pressEnter();
    }
}

export default new ToDoList();
