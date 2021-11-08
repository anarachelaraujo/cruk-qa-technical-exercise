// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeOnIframe', (iframeComponent, iframeInput, inputValue) => {
    cy.get(iframeComponent)
    .its('0.contentDocument')
    .its('body')
    .then(cy.wrap)
    .find(iframeInput)
    .type(inputValue);
});

Cypress.Commands.add('getDataFromJson', (file, data) => {
    cy.fixture(file).its(data).then((response) => {
        var value = JSON.stringify(response);
        return value.toString();
    });
});

Cypress.Commands.add('accessPage', (url) => {
    cy.clearCookies();
    cy.setCookie('OptanonAlertBoxClosed', new Date().toISOString());
    cy.visit(url);
});