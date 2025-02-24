class ToDoInput {
    elements = {
        textInput: () => cy.get('[data-testid="text-input"]'),
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
