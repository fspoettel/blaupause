import test from 'ava';
import isElement from 'lodash.iselement';
import { htmlToElement, htmlToElements } from '../template';

const isNodeList = (nodes) => {
  const stringRepr = Object.prototype.toString.call(nodes);

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)]$/.test(stringRepr) &&
    nodes.length !== undefined &&
    (nodes.length === 0 || isElement(nodes[0]));
};

test('htmlToElement() should output a node', (t) => {
  const doc = document;
  const node = htmlToElement('<div class="foo">bar</div>');
  doc.body.appendChild(node);

  t.true(isElement(node));
  t.is(doc.querySelectorAll('.foo').length, 1);
  t.is(doc.querySelector('.foo').textContent, 'bar');
});

test('htmlToElements() should output a NodeList', (t) => {
  const doc = document;
  const nodes = htmlToElements('<div class="bar">bar</div><div class="bar">baz</div>');
  const nodeArray = [].slice.call(nodes);

  t.true(isNodeList(nodes));

  nodeArray.forEach((node) => {
    doc.body.appendChild(node);
  });

  const $nodes = doc.querySelectorAll('.bar');

  t.is($nodes.length, 2);
  t.is($nodes[1].textContent, 'baz');
});
