import test from 'ava';
import { htmlToElement, htmlToElements, ready } from '../utils';

const isNode = (o) => (
  typeof Node === 'object' ? o instanceof Node :
  o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'
);

const isNodeList = (nodes) => {
  const stringRepr = Object.prototype.toString.call(nodes);

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    nodes.length !== undefined &&
    (nodes.length === 0 || isNode(nodes[0]));
};

// ready()
// We can only test the behavior 'readyState !== loading'
test('ready() should fire if readyState !== loading', t => {
  let val = false;

  function onReady() {
    val = true;
  }

  ready(onReady);
  t.true(val);
});

test('ready() should accept a custom context', t => {
  let val = false;

  function onReady() {
    val = this.foo;
  }

  ready(onReady, { foo: 'bar' });
  t.is(val, 'bar');
});

// htmlToElement()
test('htmlToElement() should output a node', t => {
  const node = htmlToElement('<div class="foo">bar</div>');
  t.true(isNode(node));

  const body = document.body;
  body.appendChild(node);
  t.is(body.querySelectorAll('.foo').length, 1);
});

// htmlToElements()
test('htmlToElements() should output a NodeList', t => {
  const nodes = htmlToElements('<div class="bar">bar</div><div class="bar">baz</div>');
  t.true(isNodeList(nodes));

  const body = document.body;
  const nodeArray = [].slice.call(nodes);

  nodeArray.forEach(node => {
    body.appendChild(node);
  });

  const $nodes = body.querySelectorAll('.bar');

  t.is($nodes.length, 2);
  t.is($nodes[1].textContent, 'baz');
});
