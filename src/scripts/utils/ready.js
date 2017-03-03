/**
 * Ready util
 * @module utils/ready
 */
const doc = document;

// Cache an event reference for deferred ready-handlers
let cachedEvent;

const cacheEvent = (e) => {
  doc.removeEventListener('DOMContentLoaded', cacheEvent);
  cachedEvent = e;
};

doc.addEventListener('DOMContentLoaded', cacheEvent);

/**
 * Fired on DOMReady
 * @param {function} cb - Callback function.
 * @param {object} ctx - Optional callback context.
 */
const ready = (cb, ctx) => {
  const context = ctx || window;

  if (doc.readyState === 'complete') {
    cb.call(context, cachedEvent);
  } else {
    const onReady = (e) => {
      doc.removeEventListener('DOMContentLoaded', onReady);
      cachedEvent = e;
      cb.call(context, e);
    };

    doc.addEventListener('DOMContentLoaded', onReady);
  }
};

export default ready;
