class ToDoList {
    elements = {
        toDoItem: () => cy.get('[data-testid="todo-item"]'),
        toDoItemLabel: () => cy.get('[data-testid="todo-item-label"]'),
        toDoItemToggle: () => cy.get('[data-testid="todo-item-toggle"]'),
        toDoItemDeleteButton: () => cy.get('[data-testid="todo-item-button"]'),
    }

    getNumberOfItemInList() {
        return this.elements
            .toDoItem()
            .its('length');
    }

    mouseOverFirstToDoItem() {
        this.elements
            .toDoItem()
            .first()
            .trigger('mouseover');
    }

    clickDeleteToDoItemButton() {
        this.elements
            .toDoItemDeleteButton()
            .first()
            .click({ force: true });
    }

    checkOffFirstToDoItem() {
        this.elements
            .toDoItemToggle()
            .first()
            .click({ force: true });
    }
}

export default new ToDoList();
