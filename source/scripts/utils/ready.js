/**
 * Ready Utility
 * @module utils/ready
 */

/**
 * Fired on DOMReady
 * @param {function} cb - Callback function.
 * @param {object} ctx - Optional callback context.
 */
const ready = (cb, ctx) => {
  const doc = document;

  const onReady = (event) => {
    doc.removeEventListener('DOMContentLoaded', onReady);
    cb.call(ctx || window, event);
  };

  doc.addEventListener('DOMContentLoaded', onReady);
};

export default ready;
