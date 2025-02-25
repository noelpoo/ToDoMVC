class ToDoInput {
    elements = {
        textInput: () => cy.get('[data-testid="text-input"]'),
        toggleAllButton: () => cy.get('[data-testid="toggle-all"]'),
    }

    clickToggleAllButton() {
        this.elements.toggleAllButton()
            .click({ force: true });
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

export default new ToDoInput();
