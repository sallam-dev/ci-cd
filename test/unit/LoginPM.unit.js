import { loginPM } from '../../src/core/LoginPM';
import { assert } from 'chai';

describe('LoginPM Unit', function() {
  it('should have a correct email object on init', function() {
    let pm = loginPM();

    assert.equal(pm.email.label, 'Email');
    assert.equal(pm.email.placeholder, 'example@domain.com');
    assert.isFalse(pm.email.shouldShowError);
    assert.isFunction(pm.email.blurred);
    assert.isFunction(pm.email.validate);
  });

  it('should have a correct password object on init', function() {
    let pm = loginPM();
    assert.equal(pm.password.label, 'Password');
    assert.equal(pm.password.placeholder, 'Minimum of 8 characters');
    assert.isFalse(pm.password.shouldShowError);
    assert.isFunction(pm.password.blurred);
    assert.isFunction(pm.password.validate);
  });

  it('should disable submit on init', function() {
    let pm = loginPM();
    assert.isTrue(pm.shouldDisableSubmit);
  });

  it('should have alert = "missing or invalid login data" when submitting if valid = false', function() {
    let pm = loginPM();

    pm.submit();

    assert.equal(pm.alert, 'missing or invalid login data');
  });

  it('should have alert = "your password is: ${password value}" when submitting if valid = true', function() {
    let pm = loginPM();

    pm.email.value = 'test@email.com';
    pm.password.value = '12345678';

    pm.submit();

    assert.equal(pm.alert, 'your password is: 12345678');
  });
});
