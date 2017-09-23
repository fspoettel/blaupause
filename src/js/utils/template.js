/**
 * Template utils
 * Note that these functions use `innerHTML` internally which comes with some security gotchas.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations
 * @module utils/template
 */
import { warn } from './debug';

const doc = document;

/**
 * @return {Boolean} <template>-support in document
 */
const supportsTemplate = () => {
  const support = 'content' in doc.createElement('template');

  if (!support) {
    warn("Browser doesn't support <template>. Templates won't work for <td>, <tr>, <pre> and <select>!");
  }

  return support;
};

/**
 * @param {String} HTML representing a single or multiple elements
 * @param {Boolean} Determines if the function outputs an element or a nodeList
 * @return {Element} || {NodeList}
 */
const renderHtml = (html, nodeList = false) => {
  const templateSupport = supportsTemplate();
  const frag = templateSupport ? doc.createElement('template') : doc.createElement('div');
  frag.innerHTML = html;
  const fragProp = templateSupport ? frag.content : frag;
  return fragProp[nodeList ? 'childNodes' : 'firstChild'];
};

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
export const htmlToElement = html => renderHtml(html);

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
export const htmlToElements = html => renderHtml(html, true);
