/**
 * Console Utils
 * @module utils/console
 */

/* eslint-disable no-console */

/**
 * Decorate a message
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const decorateMsg = (msg, decorator = '📐') => `${decorator} ${msg}`;

/**
 * Log a decorated message to the console
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const message = (method, ...args) => {
  if (!!console && !!console[method]) {
    console[method](decorateMsg(...args));
  }
};

/**
 * Error wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const error = (...args) => message('error', ...args);

/**
 * Info wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const info = (...args) => message('info', ...args);

/**
 * Log wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const log = (...args) => message('log', ...args);

/**
 * Warn wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const warn = (...args) => message('warn', ...args);
