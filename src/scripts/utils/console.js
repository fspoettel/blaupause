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
const message = (method, ...messages) => {
  if (!!console && !!console[method]) {
    messages.forEach(msg => {
      console[method](decorateMsg(msg));
    });
  }
};

/**
 * Error wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const error = (...messages) => message('error', ...messages);

/**
 * Info wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const info = (...messages) => message('info', ...messages);

/**
 * Log wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const log = (...messages) => message('log', ...messages);

/**
 * Warn wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const warn = (...messages) => message('warn', ...messages);
