const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
).set

const changeInputValue = inputToChange => newValue => {
    nativeInputValueSetter.call(inputToChange[0], newValue)
    inputToChange[0].dispatchEvent(new Event('change', { newValue, bubbles: true }))
}

Cypress.Commands.add("controlledInputChange", (input, value) => {
    return cy.get(input).then(input => changeInputValue(input)(value))
})

Cypress.Commands.add('pressEnter', () => {
    cy.focused().type('{enter}');
});
