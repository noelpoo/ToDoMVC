class ToDoFooter {
    elements = {
        footer: () => cy.get('[data-testid="footer-navigation"]'),
    }

    clickAll() {
        this.elements
            .footer()
            .contains('All')
            .click();
    }

    clickActive() {
        this.elements
            .footer()
            .contains('Active')
            .click();
    }

    clickCompleted() {
        this.elements
            .footer()
            .contains('Completed')
            .click();
    }

    clickClearCompleted() {
        cy.contains('Clear completed').click();
    }
}

export default new ToDoFooter();
