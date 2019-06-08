// https://docs.cypress.io/api/introduction/api.html

describe('User Login Form', () => {
  let page;
  beforeEach('visit home', function() {
    cy.visit('/');
    page = {
      get loginButton() {
        return cy.get('[data-test="login-button"]');
      },
      get emailInput() {
        return cy.get('[data-test="email-input"]');
      },
      get passwordInput() {
        return cy.get('[data-test="password-input"]');
      },
      get emailValidationError() {
        return cy.get('[data-test="email-validation-error"]');
      },
      get passwordValidationError() {
        return cy.get('[data-test="password-validation-error"]');
      },
    };
  });

  it('should have login button disabled until entered data is valid', () => {
    // validate button is disabled on launch
    page.loginButton.should('be.disabled');

    // validate button is disabled after valid email
    page.emailInput.click().type('valid@email.example');
    page.loginButton.should('be.disabled');

    // validate button is enabled after all inputs are valid
    page.passwordInput.click().type(12345678);
    page.loginButton.should('be.enabled');
  });

  it('should show validation errors on each input after blur and hide it when input is valid', () => {
    // validate email error is not shown when not blurred at first
    page.emailInput.click().type('invalid');
    page.emailValidationError.should('not.exist');

    // validate email error is show once the input is blurred
    page.emailInput.blur();
    page.emailValidationError.should('exist');

    // validate password error is not shown when not blurred at first
    page.passwordInput.click();
    page.passwordValidationError.should('not.exist');

    // validate password error is shown once blurred at first
    page.passwordInput.blur();
    page.passwordValidationError.should('exist');

    page.emailInput.clear().type('valid@mail.test');
    page.emailValidationError.should('not.exist');

    page.passwordInput.clear().type('validP@assword');
    page.passwordValidationError.should('not.exist');
  });
  it('should alert when clicking login', () => {
    page.emailInput.type('valid@gmail.com');
    page.passwordInput.type('password');

    const alertSpy = cy.spy();
    cy.on('window:alert', alertSpy);

    page.loginButton.click().then(() => {
      expect(alertSpy).to.be.calledOnce;
    });
  });
});
