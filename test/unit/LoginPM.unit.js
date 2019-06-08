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
  it('should have a correct password object on init', function() {
    let pm = loginPM();
    assert.equal(pm.password.label, 'Password');
    assert.equal(pm.password.placeholder, 'Minimum of 8 characters');
    assert.isFalse(pm.password.shouldShowError);
    assert.isFunction(pm.password.blurred);
    assert.isFunction(pm.password.validate);
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

  context('email validate method', function() {
    it('should set email.error = "Email is required" and email.valid = false on falsy email values', function() {
      let pm = loginPM();

      pm.email.validate();

      assert.equal(pm.email.error, 'Email is required');
      assert.isFalse(pm.email.valid);
    });

    it('should set email.error = "Invalid Email" and email.valid = false on invalid email values', function() {
      let pm = loginPM();

      pm.email.value = 'invalidValue';
      pm.email.validate();

      assert.equal(pm.email.error, 'Invalid Email');
      assert.isFalse(pm.email.valid);
    });

    it('should set email.valid = true otherwise', function() {
      let pm = loginPM();

      pm.email.value = 'valid@email.test';
      pm.email.validate();

      assert.isTrue(pm.email.valid);
    });
  });

  context('password validate method', function() {
    it('should set password.error = "Password is required" and password.valid = false on falsy email values', function() {
      let pm = loginPM();

      pm.password.validate();

      assert.equal(pm.password.error, 'Password is required');
      assert.isFalse(pm.password.valid);
    });

    it('should set password.error = "Password should be 8 characters minimum" and password.valid = false if password length < 8', function() {
      let pm = loginPM();

      pm.password.value = '1234';
      pm.password.validate();

      assert.equal(
        pm.password.error,
        'Password should be 8 characters minimum'
      );
      assert.isFalse(pm.password.valid);
    });

    it('should set password.valid = true otherwise', function() {
      let pm = loginPM();

      pm.password.value = 'pass12345';
      pm.password.validate();

      assert.isTrue(pm.password.valid);
    });
  });

  it('should only show errors after blurring and on invalid values', function() {
    let pm = loginPM();

    pm.email.value = '1234';
    pm.password.value = '1213';

    assert.isFalse(pm.email.shouldShowError);
    assert.isFalse(pm.password.shouldShowError);

    pm.email.blurred();
    pm.password.blurred();

    assert.isTrue(pm.email.shouldShowError);
    assert.isTrue(pm.password.shouldShowError);
  });

  it('should not disable submit on valid inputs', function() {
    let pm = loginPM();

    pm.password.value = 'pass12345';
    pm.email.value = 'valid@email.test';

    assert.isFalse(pm.shouldDisableSubmit);
  });
});
