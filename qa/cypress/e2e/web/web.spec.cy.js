import webElements from "./webSite/webElements";

describe('Validação de Web', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/SiteSimples/frontend/UI/login.html')
    cy.get(webElements.user).type('Lucas')
    cy.get(webElements.password).type('lalala', {log: false})
    cy.get('a').click()
  })
})