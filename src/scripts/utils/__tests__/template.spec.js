import { htmlToElement, htmlToElements } from '../template';

function isElement(o) {
  return o instanceof Element;
}

function isNodeList(nodes) {
  const stringRepr = Object.prototype.toString.call(nodes);

  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    (typeof nodes.length === 'number') &&
    (nodes.length === 0 || (typeof nodes[0] === 'object' && nodes[0].nodeType > 0));
}

describe('htmlToElement()', () => {
  it('should output a node', () => {
    const doc = document;
    const node = htmlToElement('<div class="foo">bar</div>');

    doc.body.appendChild(node);

    expect(isElement(node)).toBeTruthy();
    expect(doc.querySelectorAll('.foo').length).toEqual(1);
    expect(doc.querySelector('.foo').textContent).toEqual('bar');
  });
});

describe('htmlToElements()', () => {
  it('should output a nodeList', () => {
    const doc = document;
    const nodes = htmlToElements('<div class="bar">bar</div><div class="bar">baz</div>');

    [].slice.call(nodes).forEach((node) => { doc.body.appendChild(node); });
    const $nodes = doc.querySelectorAll('.bar');

    expect(isNodeList($nodes)).toBeTruthy();
    expect($nodes.length).toEqual(2);
    expect($nodes[1].textContent).toEqual('baz');
  });
});
