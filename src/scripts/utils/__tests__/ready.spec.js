import test from 'ava';
import ready from '../ready';

// We can only test the behavior 'readyState !== loading'
test('ready() should fire if readyState !== loading', (t) => {
  let val = false;

  function onReady() {
    val = true;
  }

  ready(onReady);
  t.true(val);
});

test('ready() should accept a custom context', (t) => {
  let val = false;

  function onReady() {
    val = this.foo;
  }

  ready(onReady, { foo: 'bar' });
  t.is(val, 'bar');
});
